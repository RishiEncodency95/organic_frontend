import React, { Suspense, lazy } from "react";
import HeroSection from "./components/home/HeroSection";
// import BrochureDownloadPopup from "./components/home/BrochureDownloadPopup";

import AudienceStrip from "./components/home/AudienceStrip";
import EventGlimpses from "./components/home/EventGlimpses";

// Lazy load below-the-fold components
const IntroductionSection = lazy(() => import("./components/home/IntroductionSection"));
const WhyParticipate = lazy(() => import("./components/home/WhyParticipate"));
const BeyondExhibition = lazy(() => import("./components/home/BeyondExhibition"));
const ExpoCategories = lazy(() => import("./components/home/ExpoCategories"));
const ConferenceSection = lazy(() => import("./components/home/ConferenceSection"));
const ExpoHighlights = lazy(() => import("./components/home/ExpoHighlights"));
const SponsorsAndAttend = lazy(() => import("./components/home/SponsorsAndAttend"));
const BecomeSponsor = lazy(() => import("./components/home/BecomeSponsor"));
const SponsorshipCategories = lazy(() => import("./components/home/SponsorshipCategories"));
const VoicesThatInspire = lazy(() => import("./components/home/VoicesThatInspire"));
const MovementBanner = lazy(() => import("./components/home/MovementBanner"));
const BuyerSellerMeet = lazy(() => import("./components/home/BuyerSellerMeet"));
const GlobalPlatform = lazy(() => import("./components/home/GlobalPlatform"));
const IntegratedFormat = lazy(() => import("./components/home/IntegratedFormat"));


const Index = () => {
  return (
    <>
      <HeroSection />
      <AudienceStrip />
      <Suspense fallback={<div className="min-h-[200px] flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#3b8c2a] border-t-transparent rounded-full animate-spin"></div></div>}>
        <IntroductionSection />
        <GlobalPlatform />
        <IntegratedFormat />
        <WhyParticipate />
        <ConferenceSection />
        <ExpoCategories />
        <BeyondExhibition />
        <SponsorsAndAttend />
        <BecomeSponsor />
        <SponsorshipCategories />
        
        {/* <ExpoHighlights /> */}
        {/* <VoicesThatInspire /> */}
        {/* <EventGlimpses /> */}
        {/* <BuyerSellerMeet /> */}
        {/* <MovementBanner /> */}
      </Suspense>
    </>
  );
};

export default Index;
