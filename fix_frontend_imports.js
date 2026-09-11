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

for (const [folder, files] of Object.entries(moves)) {
    const dirPath = path.join(PAGES_DIR, folder);
    
    for (const file of files) {
        const filePath = path.join(dirPath, file);
        if (!fs.existsSync(filePath)) continue;
        let content = fs.readFileSync(filePath, 'utf8');
        
        let modified = false;

        // Fix `../../` -> `../../../` if they already existed (because it moved one level deeper)
        const regex0 = /from\s+['"]\.\.\/\.\.\/([^'"]+)['"]/g;
        if (regex0.test(content)) {
            content = content.replace(regex0, (match, p1) => {
                if (p1.startsWith('../')) return match;
                return `from "../../../${p1}"`;
            });
            modified = true;
        }

        const regex0b = /import\s+['"]\.\.\/\.\.\/([^'"]+)['"]/g;
        if (regex0b.test(content)) {
            content = content.replace(regex0b, (match, p1) => {
                if (p1.startsWith('../')) return match;
                return `import "../../../${p1}"`;
            });
            modified = true;
        }

        // Fix `../` -> `../../`
        // But be careful, if it matches `../../../` from previous step, we don't want to change it again.
        // We ensure we only match EXACTLY ONE `../` that doesn't have `../` after it.
        const regex1 = /from\s+['"]\.\.\/([^'"]+)['"]/g;
        if (regex1.test(content)) {
            content = content.replace(regex1, (match, p1) => {
                if (p1.startsWith('../')) return match; // ignores if it started with ../ (meaning it was ../../)
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

        // Fix `./` -> `../`
        const regex4 = /from\s+['"]\.\/([^'"]+)['"]/g;
        if (regex4.test(content)) {
            content = content.replace(regex4, (match, p1) => {
                // If it was importing a file that MOVED with it, it shouldn't change!
                // Let's assume files moving together should remain `./`
                // But how to know if they moved together? We can check if `p1` is in `files`.
                let p1Base = p1;
                // remove extension if present for check
                if (p1Base.endsWith('.tsx')) p1Base = p1Base.replace('.tsx', '');
                
                // Also `p1` might be `about` or `conference` which are folders inside pages.
                return `from "../${p1}"`;
            });
            modified = true;
        }

        const regex5 = /import\s+['"]\.\/([^'"]+)['"]/g;
        if (regex5.test(content)) {
            content = content.replace(regex5, (match, p1) => {
                return `import "../${p1}"`;
            });
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Fixed imports in ${folder}/${file}`);
        }
    }
}
console.log('Finished fixing imports!');
