const fs = require('fs');
const path = require('path');

const BACKEND_DIR = path.join(__dirname, 'ihwe');

const domains = {
    'finance': [
        'Invoice', 'Estimate', 'Payment', 'CreditNote', 'Bank', 'ExchangeRate', 'perInvoice'
    ],
    'crm': [
        'Lead', 'whatsapp', 'email', 'Call', 'City', 'Country', 'State', 'Target', 'Message'
    ],
    'cms': [
        'Hero', 'About', 'Vision', 'Faq', 'Blog', 'Chairman', 'Glimpse', 'Policy', 'Testimonial', 'Banner', 'Parallax', 'Counter', 'Seo', 'Marketing'
    ],
    'visitor': [
        'Visitor', 'HealthCamp', 'Review'
    ],
    'exhibitor_seller': [
        'Exhibitor', 'Seller', 'Stall', 'Partner', 'Promotion', 'Subscription', 'Registration', 'Buyer', 'Sponsor'
    ],
    'event_conference': [
        'Event', 'Agenda', 'Speaker', 'Conference', 'Media'
    ],
    'admin_settings': [
        'Admin', 'Role', 'Department', 'Setting', 'Document', 'Auth', 'User'
    ]
};

// Flatten to find which domain a file belongs to based on its name
function getDomainForFile(filename) {
    const lowerName = filename.toLowerCase();
    for (const [domain, keywords] of Object.entries(domains)) {
        for (const kw of keywords) {
            if (lowerName.includes(kw.toLowerCase())) {
                return domain;
            }
        }
    }
    return 'misc'; // fallback domain
}

const targetDirs = ['models', 'controllers', 'routes', 'services'];

// Mapping of absolute old file path -> absolute new file path
const fileMoves = new Map();

// 1. Plan all file moves
targetDirs.forEach(dirName => {
    const dirPath = path.join(BACKEND_DIR, dirName);
    if (!fs.existsSync(dirPath)) return;

    // Recursively find all JS files
    function walkDir(currentDir) {
        fs.readdirSync(currentDir).forEach(f => {
            const fullPath = path.join(currentDir, f);
            if (fs.statSync(fullPath).isDirectory()) {
                walkDir(fullPath);
            } else if (f.endsWith('.js') && f !== 'index.js') { // skip index.js (router registry)
                const domain = getDomainForFile(f);
                const newDir = path.join(BACKEND_DIR, dirName, domain);
                const newFullPath = path.join(newDir, f);
                
                // Only move if it's not already in the correct domain
                if (fullPath !== newFullPath) {
                    fileMoves.set(fullPath, newFullPath);
                }
            }
        });
    }
    walkDir(dirPath);
});

// Create domain directories
Object.keys(domains).concat(['misc']).forEach(domain => {
    targetDirs.forEach(dirName => {
        const dPath = path.join(BACKEND_DIR, dirName, domain);
        if (!fs.existsSync(dPath)) {
            fs.mkdirSync(dPath, { recursive: true });
        }
    });
});

console.log(`Planning to move ${fileMoves.size} files.`);

// A helper to figure out if a require string points to one of our moved files
// and compute the new require string
function updateRequiresInFile(filePath, content) {
    // We only care about requires that point to local files: require('./...') or require('../...')
    const requireRegex = /require\(['"](\.[^'"]+)['"]\)/g;
    let modifiedContent = content;
    let hasModifications = false;

    // What is the NEW path of the file we are currently looking at?
    // If this file is being moved, its new location is fileMoves.get(filePath), otherwise it's filePath
    const thisFileNewPath = fileMoves.has(filePath) ? fileMoves.get(filePath) : filePath;
    const thisFileNewDir = path.dirname(thisFileNewPath);

    modifiedContent = modifiedContent.replace(requireRegex, (match, requiredPath) => {
        // Resolve the absolute path of the old require
        let oldRequiredAbsPath = path.resolve(path.dirname(filePath), requiredPath);
        
        // It might omit .js
        if (!oldRequiredAbsPath.endsWith('.js')) {
            if (fs.existsSync(oldRequiredAbsPath + '.js')) {
                oldRequiredAbsPath += '.js';
            } else if (fs.existsSync(path.join(oldRequiredAbsPath, 'index.js'))) {
                oldRequiredAbsPath = path.join(oldRequiredAbsPath, 'index.js');
            }
        }

        // Did the required file move?
        // Wait, what if the required file DID NOT move but THIS file moved? The relative path still changes!
        let targetFileNewPath = fileMoves.has(oldRequiredAbsPath) ? fileMoves.get(oldRequiredAbsPath) : oldRequiredAbsPath;

        // If neither moved, relative path is same
        if (thisFileNewPath === filePath && targetFileNewPath === oldRequiredAbsPath) {
            return match; 
        }

        // Calculate new relative path
        let newRelPath = path.relative(thisFileNewDir, targetFileNewPath);
        // path.relative on windows uses backslashes, convert to forward slashes
        newRelPath = newRelPath.replace(/\\/g, '/');
        
        // Node requires relative paths to start with ./ or ../
        if (!newRelPath.startsWith('.')) {
            newRelPath = './' + newRelPath;
        }

        // Remove .js extension to keep it clean if it had one
        if (newRelPath.endsWith('.js')) {
            newRelPath = newRelPath.slice(0, -3);
        }

        hasModifications = true;
        return `require('${newRelPath}')`;
    });

    return { content: modifiedContent, modified: hasModifications };
}

// 2. Read all JS files in backend and update requires
const allJsFiles = [];
function gatherAllJs(dir) {
    fs.readdirSync(dir).forEach(f => {
        const p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) {
            if (f !== 'node_modules') gatherAllJs(p);
        } else if (f.endsWith('.js')) {
            allJsFiles.push(p);
        }
    });
}
gatherAllJs(BACKEND_DIR);

const fileContents = new Map();
allJsFiles.forEach(f => {
    fileContents.set(f, fs.readFileSync(f, 'utf8'));
});

let updatedCount = 0;
// We compute new contents based on the file's CURRENT path so we can resolve its requires
const newContents = new Map();
allJsFiles.forEach(f => {
    const originalContent = fileContents.get(f);
    const { content, modified } = updateRequiresInFile(f, originalContent);
    if (modified) {
        updatedCount++;
    }
    newContents.set(f, content); // save the content, modified or not
});

console.log(`Updated requires in ${updatedCount} files.`);

// 3. Perform the moves and write files
allJsFiles.forEach(f => {
    const finalPath = fileMoves.has(f) ? fileMoves.get(f) : f;
    const finalContent = newContents.get(f);

    // If it's moving, delete old, write new
    if (fileMoves.has(f)) {
        fs.writeFileSync(finalPath, finalContent, 'utf8');
        fs.unlinkSync(f);
    } else {
        // If it didn't move but content changed, overwrite
        if (fileContents.get(f) !== finalContent) {
            fs.writeFileSync(f, finalContent, 'utf8');
        }
    }
});

// We need to also rewrite the routes/index.js we generated earlier 
// because we changed the file structure. Wait, index.js is inside allJsFiles so its requires were updated automatically!

// Clean up empty directories
targetDirs.forEach(dirName => {
    const dirPath = path.join(BACKEND_DIR, dirName);
    if (!fs.existsSync(dirPath)) return;
    
    // We only clean the direct subdirectories that might have been emptied
    fs.readdirSync(dirPath).forEach(d => {
        const subPath = path.join(dirPath, d);
        if (fs.statSync(subPath).isDirectory() && !(Object.keys(domains).includes(d) || d === 'misc')) {
            try {
                if (fs.readdirSync(subPath).length === 0) {
                    fs.rmdirSync(subPath);
                }
            } catch (e) {}
        }
    });
});

console.log('Domain restructuring completed successfully!');
