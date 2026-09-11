import React from "react";
import Hero from "../../components/opportunity/partnership/manpower-supply-partner/Hero";
import FeatureStrip from "../../components/buyer-seller-meet/FeatureStrip";
import KeyBenefits from "../../components/opportunity/partnership/manpower-supply-partner/KeyBenefits";
import Deliverables from "../../components/opportunity/partnership/manpower-supply-partner/Deliverables";
import WhyPartnerManpowerSupply from "../../components/opportunity/partnership/manpower-supply-partner/WhyPartnerManpowerSupply";

export const metadata = {
  title: "Official Manpower Supply Partner | Bharat Organic Expo 2027",
  description: "Become the official manpower supply partner of Bharat Organic Expo 2027. Connect with premium B2B buyers, exhibitors, and delegates globally.",
};

export default function ManpowerSupplyPartnerPage() {
  return (
    <main className="w-full bg-white">
      <Hero />
      <FeatureStrip />
      <KeyBenefits />
      <Deliverables />
      <WhyPartnerManpowerSupply />
    </main>
  );
}
