const fs = require('fs');
const path = require('path');

const SERVER_FILE = path.join(__dirname, 'ihwe', 'server.js');
const INDEX_ROUTES_FILE = path.join(__dirname, 'ihwe', 'routes', 'index.js');
const SOCKET_SERVICE_FILE = path.join(__dirname, 'ihwe', 'services', 'socketService.js');

if (!fs.existsSync(SERVER_FILE)) {
    console.error("server.js not found!");
    process.exit(1);
}

let content = fs.readFileSync(SERVER_FILE, 'utf8');

// 1. EXTRACT ROUTES
// We need to find all: const xyzRoutes = require("./routes/...");
// And all: app.use("/api/...", xyzRoutes) or app.use("/api/...", require("./routes/..."))

// We'll write a regex to find all app.use that map to routes, specifically those matching `/api/`
// But wait, there are also SEO routes like `/sitemap.xml`
const appUseRegex = /app\.use\(['"](\/api\/?[^'"]*)['"],\s*(require\(['"][^'"]+['"]\)|[a-zA-Z0-9_]+)\);/g;

let routesIndexContent = `const express = require('express');\nconst router = express.Router();\n\n`;

let routeMappings = [];
let match;
while ((match = appUseRegex.exec(content)) !== null) {
    const routePath = match[1]; // e.g. /api/sidebar
    const handler = match[2]; // e.g. sidebarRoutes or require('./routes/sidebar')
    
    // Convert `/api/something` to `/something` for the nested router
    // Handle the root `/api` edge case
    let subPath = routePath;
    if (subPath.startsWith('/api')) {
        subPath = subPath.replace(/^\/api\/?/, '/');
        if (subPath === '') subPath = '/';
        // special case for /api -> / which router.use('/', ...) handles
        if (subPath !== '/') {
            if (!subPath.startsWith('/')) subPath = '/' + subPath;
        }
    }
    
    // If it's a variable like `sidebarRoutes`, we need to find its require statement
    let finalRequirePath = '';
    if (handler.startsWith('require')) {
        finalRequirePath = handler;
    } else {
        // Find const handler = require('...');
        const requireRegex = new RegExp(`const\\s+${handler}\\s*=\\s*require\\(['"]([^'"]+)['"]\\);`);
        const reqMatch = requireRegex.exec(content);
        if (reqMatch) {
            finalRequirePath = `require('${reqMatch[1].replace('./routes/', './')}')`; // relative to routes/index.js
        } else {
            // Might be from somewhere else, just keep as is
            console.log("Could not resolve require for", handler);
            finalRequirePath = handler;
        }
    }

    // if finalRequirePath has './routes/...', change it to './...'
    finalRequirePath = finalRequirePath.replace(/['"]\.\/routes\//g, "'./");

    routesIndexContent += `router.use('${subPath}', ${finalRequirePath});\n`;
    
    // We will remove these lines from server.js later
    routeMappings.push({ originalLine: match[0], varName: handler });
}

// Write the routes index file
routesIndexContent += `\nmodule.exports = router;\n`;
fs.writeFileSync(INDEX_ROUTES_FILE, routesIndexContent, 'utf8');
console.log(`Created routes/index.js with ${routeMappings.length} routes.`);

// 2. EXTRACT SOCKET LOGIC
// The socket logic starts with `const { Server } = require("socket.io");` or `io.on('connection'`
const socketStartStr = `const { Server } = require("socket.io");`;
// We'll manually pull out the socket file text to be perfectly safe, since regexing a 100-line block is tricky.
const socketServiceContent = `const { Server } = require("socket.io");
const mongoose = require("mongoose");
const ChatMessage = require('../models/ChatMessage');

function initSocket(httpServer) {
    const io = new Server(httpServer, {
        cors: { origin: '*', methods: ['GET', 'POST'] }
    });

    const onlineUsers = new Map();
    const roomSockets = new Map();

    io.on('connection', (socket) => {
        socket.on('join_room', ({ roomId, userId, userType, userName }) => {
            socket.join(roomId);
            onlineUsers.set(socket.id, { userId, userType, roomId, userName });
            if (!roomSockets.has(roomId)) roomSockets.set(roomId, new Set());
            roomSockets.get(roomId).add(socket.id);
            io.to(roomId).emit('user_status', { userId, userType, userName, online: true });
        });

        socket.on('join_admin', ({ adminId, adminName } = {}) => {
            socket.join('admin_room');
            if (adminName) socket.join(\`admin_room_\${adminName.toLowerCase()}\`);
            if (adminId) onlineUsers.set(socket.id, { userId: adminId, userType: 'admin', roomId: 'admin_room', userName: adminName || 'Admin' });
        });

        socket.on('send_message', async ({ roomId, exhibitorRegistrationId, exhibitorName, buyerRegistrationId, buyerName, senderType, senderId, senderName, message }) => {
            if (mongoose.connection.readyState !== 1) return;
            try {
                const roomSocketIds = roomSockets.get(roomId) || new Set();
                const otherOnline = [...roomSocketIds].some(sid => {
                    const u = onlineUsers.get(sid);
                    return u && u.userId !== senderId;
                });

                const msg = await ChatMessage.create({
                    roomId,
                    exhibitorRegistrationId, exhibitorName,
                    buyerRegistrationId, buyerName,
                    senderType, senderId, senderName, message,
                    readByExhibitor: senderType === 'exhibitor' || otherOnline,
                    readByBuyer: senderType === 'buyer' || otherOnline,
                    readByAdmin: senderType === 'admin' || otherOnline,
                });

                io.to(roomId).emit('receive_message', msg);
                if (otherOnline) io.to(roomId).emit('messages_seen', { roomId, seenBy: senderType });

                if (senderType === 'exhibitor') {
                    const ExhibitorRegistration = require('../models/ExhibitorRegistration');
                    const exhibitor = await ExhibitorRegistration.findById(exhibitorRegistrationId).select('spokenWith');
                    const targetRoom = (exhibitor && exhibitor.spokenWith) ? \`admin_room_\${exhibitor.spokenWith.toLowerCase()}\` : 'admin_room';
                    io.to(targetRoom).emit('room_updated', {
                        roomId, exhibitorName, lastMessage: message,
                        lastMessageAt: msg.createdAt, lastSenderType: senderType,
                        unreadIncrement: !otherOnline ? 1 : 0,
                        spokenWith: exhibitor?.spokenWith || ''
                    });
                } else if (senderType === 'buyer') {
                    io.to('admin_room').emit('room_updated', {
                        roomId, buyerName, lastMessage: message,
                        lastMessageAt: msg.createdAt, lastSenderType: senderType,
                        unreadIncrement: !otherOnline ? 1 : 0,
                        isBuyer: true
                    });
                }
            } catch (err) {
                console.error('Chat save error:', err.message);
            }
        });

        socket.on('mark_read', async ({ roomId, readerType }) => {
            if (mongoose.connection.readyState !== 1) return;
            try {
                if (readerType === 'admin') {
                    await ChatMessage.updateMany({ roomId, senderType: { $in: ['exhibitor', 'buyer'] }, readByAdmin: false }, { readByAdmin: true });
                } else if (readerType === 'exhibitor') {
                    await ChatMessage.updateMany({ roomId, senderType: 'admin', readByExhibitor: false }, { readByExhibitor: true });
                } else if (readerType === 'buyer') {
                    await ChatMessage.updateMany({ roomId, senderType: 'admin', readByBuyer: false }, { readByBuyer: true });
                }
                io.to(roomId).emit('messages_seen', { roomId, seenBy: readerType });
            } catch (err) {
                console.error('mark_read error:', err.message);
            }
        });

        socket.on('typing', ({ roomId, senderType, senderName }) => socket.to(roomId).emit('typing', { senderType, senderName, roomId }));
        socket.on('stop_typing', ({ roomId }) => socket.to(roomId).emit('stop_typing', { roomId }));

        socket.on('disconnect', () => {
            const user = onlineUsers.get(socket.id);
            if (user && user.roomId !== 'admin_room') {
                io.to(user.roomId).emit('user_status', { userId: user.userId, userType: user.userType, online: false });
                const rs = roomSockets.get(user.roomId);
                if (rs) { rs.delete(socket.id); if (rs.size === 0) roomSockets.delete(user.roomId); }
            }
            onlineUsers.delete(socket.id);
        });
    });

    return io;
}

module.exports = { initSocket };
`;

if (!fs.existsSync(path.join(__dirname, 'ihwe', 'services'))) {
    fs.mkdirSync(path.join(__dirname, 'ihwe', 'services'));
}
fs.writeFileSync(SOCKET_SERVICE_FILE, socketServiceContent, 'utf8');
console.log('Created services/socketService.js');

// 3. REWRITE SERVER.JS
// Now we write a much cleaner server.js from scratch, preserving essential middlewares
const cleanServerContent = `const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const cookieParser = require("cookie-parser");
const http = require("http");
require("dotenv").config({ path: path.join(__dirname, ".env") });

// Ensure required upload directories exist
['uploads', 'uploads/marketing', 'temp', 'uploads/videos', 'uploads/exhibitor-testimonials'].forEach(dir => {
    const dirPath = path.join(__dirname, dir);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(\`📁 Created directory: \${dir}\`);
    }
});

// Database Connection
mongoose
    .connect(process.env.MONGO_URI_MAIN, {})
    .then(() => console.log("✅ Connected to MAIN MongoDB (default connection)"))
    .catch((err) => console.error("❌ MAIN DB connection error:", err));
global.secondaryDB = mongoose;

const app = express();
const PORT = process.env.PORT || 5000;

// Webhook requires raw body, so define it before body parser
app.use('/api/payment/webhook', require('./routes/payment'));

// Middleware setup
app.use(cors());
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(cookieParser());

// Static directories
app.use("/uploads", express.static("uploads"));
app.use('/temp', express.static('temp', {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.pdf')) {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'inline');
        }
    }
}));

// SEO file serving middleware
const sitemapRoutes = require("./routes/sitemap");
app.use("/sitemap.xml", sitemapRoutes);
app.use("/sitemap/xml", sitemapRoutes);

app.use(async (req, res, next) => {
    try {
        const SeoFile = require("./models/SeoFile");
        const filename = req.path.substring(1);
        if (filename && !filename.includes("/")) {
            let seoFile = await SeoFile.findOne({ originalName: filename });
            if (!seoFile) {
                if (filename === "robots.txt") {
                    seoFile = await SeoFile.findOne({ originalName: /robots.*\\.txt/i }) ||
                              await SeoFile.findOne({ originalName: /robots/i });
                } else if (filename === "sitemap.xml") {
                    seoFile = await SeoFile.findOne({ originalName: /sitemap.*\\.xml/i }) ||
                              await SeoFile.findOne({ originalName: /sitemap/i });
                }
            }
            if (seoFile) {
                const filePath = path.join(__dirname, seoFile.path.startsWith("/") ? seoFile.path.substring(1) : seoFile.path);
                if (fs.existsSync(filePath)) {
                    return res.sendFile(filePath);
                }
            }
        }
        if (req.path === "/robots.txt") {
            res.header("Content-Type", "text/plain");
            return res.send("User-agent: *\\nAllow: /");
        }
        next();
    } catch (error) {
        next();
    }
});

// Basic Root Routes
app.get("/", (req, res) => res.send("IHWE Backend is running..."));
app.get("/api/whoami", (req, res) => res.json({ success: true, server: "IHWE-ROOT-BACKEND", message: "I am running from " + __dirname }));
app.get("/api/test", (req, res) => res.json({ success: true, message: "Correct server is running (IHWE/backend)" }));

// ── API Routes (Centralized) ──────────────────────────────────────────────────
const apiRoutes = require('./routes');
app.use('/api', apiRoutes);

// ── Error Handling Middleware ─────────────────────────────────────────────────
app.use((req, res, next) => {
    res.status(404).json({ success: false, message: "Endpoint not found" });
});

app.use((err, req, res, next) => {
    console.error("Unhandled Server Error:", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
});

// ── Initialize Server & Socket.io ──────────────────────────────────────────────
const httpServer = http.createServer(app);
const { initSocket } = require('./services/socketService');
initSocket(httpServer);

// ── Initialize Cron Jobs ──────────────────────────────────────────────────────
const { initPaymentWarningCron } = require('./jobs/paymentWarningCron');
initPaymentWarningCron();

httpServer.listen(PORT, () => {
    console.log(\`🚀 Server running on port \${PORT} with Socket.io\`);
    // Start IMAP email reply poller
    const { startImapPoller } = require("./services/imapPollerService");
    startImapPoller();
});
`;

fs.writeFileSync(SERVER_FILE, cleanServerContent, 'utf8');
console.log('Successfully refactored server.js!');
