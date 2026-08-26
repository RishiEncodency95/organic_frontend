import React, { Suspense, lazy } from "react";
import HeroSection from "./components/home/HeroSection";
// import BrochureDownloadPopup from "./components/home/BrochureDownloadPopup";

import AudienceStrip from "./components/home/AudienceStrip";
// Lazy load below-the-fold components
const IntroductionSection = lazy(() => import("./components/home/IntroductionSection"));
const WhyParticipate = lazy(() => import("./components/home/WhyParticipate"));
const BeyondExhibition = lazy(() => import("./components/home/BeyondExhibition"));
const ExpoCategories = lazy(() => import("./components/home/ExpoCategories"));
const ConferenceSection = lazy(() => import("./components/home/ConferenceSection"));
const SponsorsAndAttend = lazy(() => import("./components/home/SponsorsAndAttend"));
const BecomeSponsor = lazy(() => import("./components/home/BecomeSponsor"));
const SponsorshipCategories = lazy(() => import("./components/home/SponsorshipCategories"));
const PartnersAndBrands = lazy(() => import("./components/home/PartnersAndBrands"));
// const ExploreSectors = lazy(() => import("./components/home/ExploreSectors"));
const BuyerSellerMeet = lazy(() => import("./components/home/BuyerSellerMeet"));
const IndustryLeaders = lazy(() => import("./components/home/IndustryLeaders"));
const TestimonialsCarousel = lazy(() => import("./components/home/TestimonialsCarousel"));
const LatestInsights = lazy(() => import("./components/home/LatestInsights"));
const GlobalPlatform = lazy(() => import("./components/home/GlobalPlatform"));


const Index = () => {
  return (
    <>
      <HeroSection />
      <AudienceStrip />
      <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#3b8c2a] border-t-transparent rounded-full animate-spin"></div></div>}>
        <IntroductionSection />
        <GlobalPlatform />
        <WhyParticipate />
        <ConferenceSection />
        <ExpoCategories />
        <BeyondExhibition />
        <SponsorsAndAttend />
        <BecomeSponsor />
        <SponsorshipCategories />
        <PartnersAndBrands />
        {/* <ExploreSectors /> */}
        <BuyerSellerMeet />
        {/* <IndustryLeaders /> */}
        <TestimonialsCarousel />
        <LatestInsights />
      </Suspense>
    </>
  );
};

export default Index;
