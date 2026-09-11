const fs = require('fs');
const path = require('path');

const FRONTEND_DIR = path.join(__dirname, 'IHWE-Frontend/src');
const PAGES_DIR = path.join(FRONTEND_DIR, 'pages');
const MISC_DIR = path.join(PAGES_DIR, 'misc');

const moves = {
    'buyer': ['BuyerLanding.tsx'],
    'exhibitor': ['ExhibitorDashboard.tsx', 'ExhibitorProfile.tsx'],
    'seller': ['SellerPortal.tsx'],
    'e_promotion_webPage': ['EPromotion.tsx'],
    'partners': ['Fabricationpartner.tsx', 'TravelPartner.tsx', 'Sponsership.tsx'],
    'registration': ['SpeakerRegistration.tsx'],
    'scan': ['DownloadBadge.tsx'],
    'support': ['TravelAccommodation.tsx']
};

let fileMap = {};

for (const [folder, files] of Object.entries(moves)) {
    const targetDir = path.join(PAGES_DIR, folder);
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    for (const file of files) {
        const oldPath = path.join(MISC_DIR, file);
        const newPath = path.join(targetDir, file);
        if (fs.existsSync(oldPath)) {
            fs.renameSync(oldPath, newPath);
            fileMap[file] = folder;
            console.log(`Moved ${file} to pages/${folder}/`);
        } else {
            console.warn(`File ${file} not found in misc dir.`);
        }
    }
}

// Recursively find all ts/tsx files to update imports
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function(file) {
        if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
            arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                arrayOfFiles.push(path.join(dirPath, file));
            }
        }
    });
    return arrayOfFiles;
}

const allTsxFiles = getAllFiles(FRONTEND_DIR);

for (const filePath of allTsxFiles) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    for (const [file, folder] of Object.entries(fileMap)) {
        const basename = file.replace('.tsx', '');
        
        // Simple string replace for common patterns using misc
        const patternsToReplace = [
            { old: `/misc/${basename}"`, new: `/${folder}/${basename}"` },
            { old: `/misc/${basename}'`, new: `/${folder}/${basename}'` }
        ];

        for (const pattern of patternsToReplace) {
            if (content.includes(pattern.old)) {
                content = content.split(pattern.old).join(pattern.new);
                modified = true;
            }
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated imports in ${filePath}`);
    }
}

console.log('Misc restructure complete!');
