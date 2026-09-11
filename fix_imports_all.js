const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'IHWE-admin/src/pages');

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

for (const [folder, files] of Object.entries(moves)) {
    const dirPath = path.join(PAGES_DIR, folder);
    
    for (const file of files) {
        const filePath = path.join(dirPath, file);
        if (!fs.existsSync(filePath)) continue;
        let content = fs.readFileSync(filePath, 'utf8');
        
        let modified = false;

        // Fix `../` -> `../../`
        const regex1 = /from\s+['"]\.\.\/([^'"]+)['"]/g;
        if (regex1.test(content)) {
            // ONLY replace if it does NOT already start with `../../`
            content = content.replace(regex1, (match, p1) => {
                if (p1.startsWith('../')) return match; // already fixed
                return `from "../../${p1}"`;
            });
            modified = true;
        }

        const regex2 = /import\s+['"]\.\.\/([^'"]+)['"]/g;
        if (regex2.test(content)) {
            content = content.replace(regex2, (match, p1) => {
                if (p1.startsWith('../')) return match;
                return `import "../../${p1}"`;
            });
            modified = true;
        }

        const regex3 = /require\(['"]\.\.\/([^'"]+)['"]\)/g;
        if (regex3.test(content)) {
            content = content.replace(regex3, (match, p1) => {
                if (p1.startsWith('../')) return match;
                return `require("../../${p1}")`;
            });
            modified = true;
        }
        
        // Fix `./` -> `../`
        const replaceRelative = (match, p1) => `from "../${p1}"`;
        const regex4 = /from\s+['"]\.\/([^'"]+)['"]/g;
        if (regex4.test(content)) {
            content = content.replace(regex4, replaceRelative);
            modified = true;
        }

        const replaceRelativeImport = (match, p1) => `import "../${p1}"`;
        const regex5 = /import\s+['"]\.\/([^'"]+)['"]/g;
        if (regex5.test(content)) {
            content = content.replace(regex5, replaceRelativeImport);
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Fixed imports in ${folder}/${file}`);
        }
    }
}
console.log('Finished fixing imports!');
