const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'IHWE-admin/src/pages');
const ROUTES_FILE = path.join(__dirname, 'IHWE-admin/src/routes/AppRoutes.jsx');

const moves = {
    'exhibitors': [
        'AccessoryOrders.jsx',
        'BookAStand.jsx',
        'ManageRegistrations.jsx',
        'StallVendorManage.jsx'
    ],
    'e_promotion': [
        'EPromotionManage.jsx',
        'EPromotionRegisters.jsx',
        'EPromotionWebManagement.jsx'
    ],
    'cms': [
        'EventHighlights.jsx',
        'EventOverviewManagement.jsx',
        'GlobalPlatform.jsx',
        'HealthcareSectorsManagement.jsx',
        'IntegratedFormat.jsx',
        'OrganizedBy.jsx',
        'SupportedBy.jsx',
        'SocialMedia.jsx',
        'TargetAudience.jsx',
        'UpcomingEvent.jsx'
    ],
    'advisory': [
        'AdvisoryManagement.jsx',
        'AdvisoryNominationDetail.jsx',
        'AdvisoryNominationsList.jsx'
    ],
    'msme': [
        'MsmePmsSchemeConfig.jsx',
        'MsmePmsSchemeDetail.jsx',
        'MsmePmsSchemeList.jsx'
    ],
    'admin_settings': [
        'ManageEvents.jsx',
        'ManageTerms.jsx',
        'PolicyManager.jsx',
        'Remainder.jsx',
        'ResponseTemplates.jsx',
        'SidebarCustomize.jsx'
    ],
    'partners': [
        'SponsorComparisonManage.jsx',
        'TravelAccommodationManage.jsx',
        'ReferralMembers.jsx'
    ],
    'buyer_saller_meet': [
        'AdminBSM.jsx'
    ],
    'clients': [
        'Clients.jsx'
    ],
    'gallery': [
        'MediaRegistrationManagement.jsx'
    ],
    'service': [
        'Services.jsx'
    ],
    'marketing': [
        'MarketingToolkitManage.jsx'
    ]
};

// Create directories and move files
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
            console.log(`Moved ${file} to ${folder}/`);
        } else {
            console.warn(`File ${file} not found in root pages dir.`);
        }
    }
}

// Update AppRoutes.jsx
if (fs.existsSync(ROUTES_FILE)) {
    let content = fs.readFileSync(ROUTES_FILE, 'utf8');
    
    // We need to replace imports that look like: `import("../pages/FileName")`
    for (const [file, folder] of Object.entries(fileMap)) {
        const basename = file.replace('.jsx', '');
        
        // Match standard lazy imports
        const regexLazy = new RegExp(`import\\(\\s*['"]\\.\\.\\/pages\\/${basename}['"]\\s*\\)`, 'g');
        content = content.replace(regexLazy, `import("../pages/${folder}/${basename}")`);
        
        // Match static imports like: import Component from "../pages/FileName"
        const regexStatic = new RegExp(`from\\s+['"]\\.\\.\\/pages\\/${basename}['"]`, 'g');
        content = content.replace(regexStatic, `from "../pages/${folder}/${basename}"`);
    }
    
    fs.writeFileSync(ROUTES_FILE, content, 'utf8');
    console.log('Updated AppRoutes.jsx');
} else {
    console.error('AppRoutes.jsx not found!');
}

console.log('Restructure complete!');
