const fs = require('fs');
const path = require('path');

const BACKEND_DIR = path.join(__dirname, 'ihwe');

const seeders = [
    'city.seed.js', 'country.seed.js', 'state.seed.js',
    'fabricationseed.js', 'hottelseed.js', 'travelseed.js',
    'seedChairmanMessage.js', 'seedEPromotionPackages.js', 'seedInternationalConfig.js',
    'seedMsmePmsPage.js', 'seedPartnerCategories.js', 'seedPolicies.js',
    'seedSellerSubscriptionPlans.js', 'seedSidebar.js', 'seedSponsorComparison.js', 'seedTerms.js'
];

const scripts = [
    'check_db.js', 'check_users.js', 'cleanup_duplicates.js', 'fix_indexes.js',
    'migrate_secondary_to_main.js', 'migrate_stalls.js', 'reset_password.js',
    'send_test_email.js', 'updateRoles.js', 'test.js', 'test_mongoose_bug.js'
];

const seedersDir = path.join(BACKEND_DIR, 'seeders');
const scriptsDir = path.join(BACKEND_DIR, 'scripts');
const middlewaresDir = path.join(BACKEND_DIR, 'middlewares');
const oldMiddlewareDir = path.join(BACKEND_DIR, 'middleware');

// Ensure target directories exist
if (!fs.existsSync(seedersDir)) fs.mkdirSync(seedersDir);
if (!fs.existsSync(scriptsDir)) fs.mkdirSync(scriptsDir);
if (!fs.existsSync(middlewaresDir)) fs.mkdirSync(middlewaresDir);

// 1. Move seeders
seeders.forEach(file => {
    const oldPath = path.join(BACKEND_DIR, file);
    const newPath = path.join(seedersDir, file);
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        console.log(`Moved ${file} to seeders/`);
    }
});

// 2. Move scripts
scripts.forEach(file => {
    const oldPath = path.join(BACKEND_DIR, file);
    const newPath = path.join(scriptsDir, file);
    if (fs.existsSync(oldPath)) {
        fs.renameSync(oldPath, newPath);
        console.log(`Moved ${file} to scripts/`);
    }
});

// 3. Merge middleware -> middlewares
if (fs.existsSync(oldMiddlewareDir)) {
    const files = fs.readdirSync(oldMiddlewareDir);
    files.forEach(file => {
        const oldPath = path.join(oldMiddlewareDir, file);
        const newPath = path.join(middlewaresDir, file);
        if (fs.lstatSync(oldPath).isFile()) {
            fs.renameSync(oldPath, newPath);
            console.log(`Moved ${file} from middleware to middlewares/`);
        }
    });
    // Remove old middleware dir
    try { fs.rmdirSync(oldMiddlewareDir); } catch(e) { console.log('Could not remove middleware dir'); }
}

// 4. Update references across the codebase to fix `middleware/` -> `middlewares/`
// We need to scan routes/, controllers/, and server.js

function replaceInFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Search for require('../middleware/...') or require('./middleware/...') 
    // and replace with 'middlewares'
    
    // Pattern 1: require('../middleware/auth') -> require('../middlewares/auth')
    const regex1 = /require\(['"]\.\.\/middleware\/(.*?)['"]\)/g;
    if (regex1.test(content)) {
        content = content.replace(regex1, `require("../middlewares/$1")`);
        modified = true;
    }

    // Pattern 2: require('./middleware/auth') -> require('./middlewares/auth')
    const regex2 = /require\(['"]\.\/middleware\/(.*?)['"]\)/g;
    if (regex2.test(content)) {
        content = content.replace(regex2, `require("./middlewares/$1")`);
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated paths in ${filePath}`);
    }
}

// Recursively find all JS files in a directory
function walkDir(dir, callback) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else if (f.endsWith('.js')) {
            callback(dirPath);
        }
    });
}

// Update routes, controllers, and root JS files
walkDir(path.join(BACKEND_DIR, 'routes'), replaceInFile);
walkDir(path.join(BACKEND_DIR, 'controllers'), replaceInFile);
replaceInFile(path.join(BACKEND_DIR, 'server.js'));

console.log('Backend structural refactor completed successfully!');
