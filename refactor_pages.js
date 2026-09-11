const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'IHWE-admin/src/pages');
const ROUTES_FILE = path.join(__dirname, 'IHWE-admin/src/routes/AppRoutes.jsx');

const moves = {
    'awards': [
        'AwardCategoriesManage.jsx', 'AwardsGalleryManage.jsx', 'AwardsNominationDetail.jsx', 
        'AwardsNominationList.jsx', 'AwardsNominationsList.jsx', 'ApprovedAwardsList.jsx', 
        'RejectedAwardsList.jsx'
    ],
    'speakers': [
        'SpeakerNominationsList.jsx', 'SpeakerRegistrationDetail.jsx', 'SpeakerRegistrationList.jsx', 
        'ApprovedSpeakersList.jsx', 'RejectedSpeakersList.jsx', 'DistinguishedSpeakersManage.jsx'
    ],
    'exhibitors': [
        'ExhibitorBookingDetail.jsx', 'ExhibitorChat.jsx', 'ExhibitorHeroSlider.jsx', 
        'ExhibitorListManage.jsx', 'ExhibitorProductsProfile.jsx', 'ExhibitorProfileManage.jsx', 
        'ExhibitorTestimonialsManagement.jsx', 'ManageAccessories.jsx', 'ManageStalls.jsx', 
        'ManageStallRates.jsx'
    ],
    'conference': [
        'AgendaManagement.jsx', 'ConferenceDayManagement.jsx', 'ConferenceTestimonialsManage.jsx', 
        'ConferenceTrackManage.jsx'
    ],
    'partners': [
        'PartnerCategories.jsx', 'PartnerManagement.jsx', 'PartnerRegistrationDetail.jsx', 
        'PartnerRegistrationsList.jsx', 'FabricationPartnerManage.jsx', 'HospitalityPartnerManage.jsx', 
        'HotelStayPartnerManage.jsx', 'LogisticPartnerManage.jsx', 'PrintingBrandingPartnerManage.jsx', 
        'TravelPartnerManage.jsx'
    ],
    'buyers': [
        'BuyerRegistrationConfig.jsx', 'BuyerRegistrationDetail.jsx', 'BuyerRegistrationEdit.jsx', 
        'InternationalBuyerRegistrationConfig.jsx', 'InternationalBuyerRegistrationDetail.jsx', 
        'InternationalBuyerRegistrationEdit.jsx'
    ],
    'cms': [
        'AddCarousel.jsx', 'Carousel.jsx', 'FestivalCarousel.jsx', 'FloatingVideoManagement.jsx', 
        'HeroImages.jsx', 'HomeSlider.jsx', 'ImageGalleryManagement.jsx', 'MarqueeManage.jsx', 
        'MediaGalleryManagement.jsx', 'ParallaxManage.jsx', 'VideoGalleryManagement.jsx', 
        'AddPdf.jsx', 'UploadPdf.jsx', 'About.jsx', 'AboutOrganizerManagement.jsx', 
        'ChairmanMessage.jsx', 'FAQManage.jsx', 'Glimpse.jsx', 'Introduction.jsx', 
        'NationalExpo.jsx', 'OurJourneyManagement.jsx', 'OurTeam.jsx', 'VisionMission.jsx', 
        'WhatWeDo.jsx', 'WhoWeAre.jsx', 'WhyAttend.jsx', 'WhyExhibitManage.jsx', 
        'WhyParticipateManagement.jsx', 'WhyVisitManagement.jsx', 'StatsCounter.jsx', 
        'StatsGrid.jsx', 'StatsManage.jsx', 'TestimonialsManage.jsx', 'NewTestimonialsManagement.jsx', 
        'CreatePage.jsx', 'PageList.jsx', 'CreatePost.jsx', 'PostList.jsx', 'BannerManagement.jsx'
    ],
    'finance': [
        'CreateInvoice.jsx', 'PerformaInvoices.jsx', 'CreateDebitNote.jsx', 'FailedPayments.jsx', 
        'PaymentDelayWarnings.jsx'
    ],
    'admin_settings': [
        'Dashboard.jsx', 'Settings.jsx', 'RoleManagement.jsx', 'RolePermissions.jsx', 
        'DepartmentManagement.jsx', 'DesignationManagement.jsx', 'ActivityLogs.jsx', 
        'EmailLogs.jsx', 'WhatsAppLogs.jsx', 'CallHistory.jsx', 'ClickAnalytics.jsx'
    ],
    'enquiries': [
        'ContactEnquiries.jsx', 'ContactList.jsx', 'EnquiryList.jsx', 'SponsorshipEnquiries.jsx', 
        'ExpoSupportEnquiries.jsx', 'SellerExportInquiries.jsx', 'SellerServiceRequests.jsx'
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
