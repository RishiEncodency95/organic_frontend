const fs = require('fs');
const path = require('path');

const FRONTEND_DIR = path.join(__dirname, 'IHWE-Frontend/src');
const PAGES_DIR = path.join(FRONTEND_DIR, 'pages');

const moves = {
    'legal': [
        'PrivacyPolicy.tsx', 'TermsOfService.tsx', 'RefundPolicy.tsx', 'PaymentPolicy.tsx', 'CancellationPolicy.tsx'
    ],
    'auth': [
        'BuyerLogin.tsx', 'ExhibitorLogin.tsx'
    ],
    'info': [
        'About.tsx', 'Contact.tsx', 'Gallery.tsx', 'Blog.tsx', 'BlogDetail.tsx', 'NotFound.tsx', 'Index.tsx', 'WhyExhibit.tsx'
    ],
    'exhibition': [
        'BookAStand.tsx', 'BookAStand.tsx.bak', 'Exhibition.tsx', 'Exhibitors.tsx', 'IndustryZoneDetail.tsx', 'StallDesigningVendors.tsx'
    ],
    'registration': [
        'MediaRegistration.tsx', 'PartnerRegistration.tsx', 'SellerRegistration.tsx', 'BuyerRegistration.tsx'
    ],
    'partners': [
        'HospitalityPartner.tsx', 'LogisticPartner.tsx', 'HotelStayPartner.tsx', 'Partnership.tsx', 'Partners.tsx'
    ],
    'conference_public': [
        'Conference.tsx', 'ConferenceDay1.tsx', 'ConferenceDay2.tsx', 'ConferenceDay3.tsx', 'ConferenceDayUnified.tsx', 'Advisory.tsx', 'AdvisoryBoard.tsx'
    ],
    'scan': [
        'BuyerScan.tsx', 'VisitorScan.tsx'
    ],
    'misc': [
        'BuyerLanding.tsx', 'DownloadBadge.tsx', 'EPromotion.tsx', 'ExhibitorDashboard.tsx', 'ExhibitorProfile.tsx', 'Fabricationpartner.tsx', 'SellerPortal.tsx', 'SpeakerRegistration.tsx', 'Sponsership.tsx', 'TravelAccommodation.tsx', 'TravelPartner.tsx'
    ]
};

// 1. Move files
let fileMap = {};

for (const [folder, files] of Object.entries(moves)) {
    const targetDir = path.join(PAGES_DIR, folder);
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    for (const file of files) {
        const oldPath = path.join(PAGES_DIR, file);
        const newPath = path.join(targetDir, file);
        if (fs.existsSync(oldPath)) {
            fs.renameSync(oldPath, newPath);
            fileMap[file] = folder;
            console.log(`Moved ${file} to pages/${folder}/`);
        } else {
            // console.warn(`File ${file} not found in pages dir.`);
        }
    }
}

// 2. Recursively find all ts/tsx files to update imports
function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    
    arrayOfFiles = arrayOfFiles || [];
    
    files.forEach(function(file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });
    
    return arrayOfFiles;
}

const allTsxFiles = getAllFiles(FRONTEND_DIR);

console.log(`Found ${allTsxFiles.length} files to scan for import updates.`);

for (const filePath of allTsxFiles) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    for (const [file, folder] of Object.entries(fileMap)) {
        const basename = file.replace('.tsx', '');
        
        // This regex looks for imports ending in the file basename
        // Example: import("./pages/About") -> import("./pages/info/About")
        // Example: from "@/pages/About" -> from "@/pages/info/About"
        // Example: from "../About" -> from "../info/About" (this is trickier, let's just do exact match for ./pages/ or @/pages/ or ../pages/)

        // We'll use a simple string replace for common patterns
        
        const patternsToReplace = [
            { old: `"./pages/${basename}"`, new: `"./pages/${folder}/${basename}"` },
            { old: `'./pages/${basename}'`, new: `'./pages/${folder}/${basename}'` },
            { old: `"@/pages/${basename}"`, new: `"@/pages/${folder}/${basename}"` },
            { old: `'@/pages/${basename}'`, new: `'@/pages/${folder}/${basename}'` },
            { old: `"../pages/${basename}"`, new: `"../pages/${folder}/${basename}"` },
            { old: `'../pages/${basename}'`, new: `'../pages/${folder}/${basename}'` },
            { old: `"../../pages/${basename}"`, new: `"../../pages/${folder}/${basename}"` },
            { old: `'../../pages/${basename}'`, new: `'../../pages/${folder}/${basename}'` },
            { old: `"./${basename}"`, new: `"./${folder}/${basename}"` } // Dangerous if used inside pages/!
        ];

        for (const pattern of patternsToReplace) {
            // Only apply "./basename" replacement if we are inside the 'pages' directory itself directly.
            // Actually it's safer to use regex to handle varying relative paths.
        }
        
        // Let's use Regex to find any import containing the basename at the end of the path.
        // e.g. import Something from "ANY_PATH/basename"
        // regex matches: (import|from) (['"])(.*\/)basename\2
        
        // Wait, if an import is `import "../About"`, we want to change it to `import "../info/About"`.
        // If the current file is inside `pages/buyer/`, then `import "../About"` means it's importing from `pages/About`.
        // We know `About` was moved to `pages/info/About`. So the new import should be `import "../info/About"`.
        
        const regexLazy = new RegExp(`(import\\(\\s*['"])(.*\\/)?(${basename})(['"]\\s*\\))`, 'g');
        if (regexLazy.test(content)) {
             content = content.replace(regexLazy, (match, p1, p2, p3, p4) => {
                 // p2 is the path prefix e.g. "./pages/", "../", etc.
                 // we append the folder to the prefix if it's not already there
                 if (!p2) p2 = "./";
                 if (p2.includes(`/pages/${folder}/`)) return match; // already fixed
                 // But wait, if p2 is `../`, the new path is `../folder/`
                 // Let's reconstruct
                 let baseDir = p2;
                 if (baseDir.endsWith('/')) baseDir = baseDir.slice(0, -1);
                 
                 // Check if we are modifying a path that was directly referring to the root pages dir
                 if (baseDir.endsWith('/pages') || baseDir.endsWith('pages')) {
                     return `${p1}${baseDir}/${folder}/${p3}${p4}`;
                 } else {
                     return `${p1}${baseDir}/${folder}/${p3}${p4}`;
                 }
             });
             modified = true;
        }

        const regexStatic = new RegExp(`(from\\s+['"])(.*\\/)?(${basename})(['"])`, 'g');
        if (regexStatic.test(content)) {
            content = content.replace(regexStatic, (match, p1, p2, p3, p4) => {
                 if (!p2) p2 = "./";
                 if (p2.includes(`/pages/${folder}/`)) return match; // already fixed
                 
                 let baseDir = p2;
                 if (baseDir.endsWith('/')) baseDir = baseDir.slice(0, -1);
                 
                 if (baseDir.endsWith('/pages') || baseDir.endsWith('pages')) {
                     return `${p1}${baseDir}/${folder}/${p3}${p4}`;
                 } else {
                     return `${p1}${baseDir}/${folder}/${p3}${p4}`;
                 }
            });
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated imports in ${filePath}`);
    }
}

console.log('Restructure complete!');
