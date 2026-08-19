import React from "react";
import Hero from "../../components/opportunity/partnership/stall-design-partner/Hero";
import FeatureStrip from "../../components/buyer-seller-meet/FeatureStrip";
import KeyBenefits from "../../components/opportunity/partnership/stall-design-partner/KeyBenefits";
import Deliverables from "../../components/opportunity/partnership/stall-design-partner/Deliverables";
import WhyPartnerStallDesign from "../../components/opportunity/partnership/stall-design-partner/WhyPartnerStallDesign";

export const metadata = {
  title: "Official Travel Partner | Bharat Organic Expo 2027",
  description: "Become the official travel partner of Bharat Organic Expo 2027. Connect with premium B2B buyers, exhibitors, and delegates globally.",
};

export default function TravelPartnerPage() {
  return (
    <main className="w-full bg-white">
      <Hero />
      <FeatureStrip />
      <KeyBenefits />
      <Deliverables />
      <WhyPartnerStallDesign />
    </main>
  );
}
