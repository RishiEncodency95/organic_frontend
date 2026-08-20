import React from "react";
import HeroSection from "../components/buyer-seller-meet/HeroSection";
import FeatureStrip from "../components/buyer-seller-meet/FeatureStrip";
import AboutSection from "../components/buyer-seller-meet/AboutSection";
import ParticipateBuyerTypes from "../components/participate-as-exhibitor/ParticipateBuyerTypes";
import WhatToSource from "../components/buyer-seller-meet/WhatToSource";
import WhyJoin from "../components/buyer-seller-meet/WhyJoin";
import HowItWorks from "../components/buyer-seller-meet/HowItWorks";
import ConnectWith from "../components/buyer-seller-meet/ConnectWith";
import CtaBanner from "../components/buyer-seller-meet/CtaBanner";

export const metadata = {
  title: "Buyer-Seller Meet | Bharat Organic Expo",
  description: "Join thousands of experts, buyers, and exhibitors at the most anticipated organic and wellness mega event.",
};

export default function BuyerSellerMeetPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <HeroSection />
      <FeatureStrip />
      <AboutSection />
      <ParticipateBuyerTypes />
      <WhatToSource />
      <WhyJoin />
      <HowItWorks />
      <ConnectWith />
      <CtaBanner />
    </main>
  );
}
