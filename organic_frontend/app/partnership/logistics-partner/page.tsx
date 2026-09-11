import React from "react";
import Hero from "../../components/opportunity/partnership/logistics-partner/Hero";
import FeatureStrip from "../../components/buyer-seller-meet/FeatureStrip";
import KeyBenefits from "../../components/opportunity/partnership/logistics-partner/KeyBenefits";
import Deliverables from "../../components/opportunity/partnership/logistics-partner/Deliverables";
import WhyPartnerLogistics from "../../components/opportunity/partnership/logistics-partner/WhyPartnerLogistics";

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
      <WhyPartnerLogistics />
    </main>
  );
}
