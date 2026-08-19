import React from "react";
import Hero from "../../components/opportunity/partnership/printing-branding-partner/Hero";
import FeatureStrip from "../../components/buyer-seller-meet/FeatureStrip";
import KeyBenefits from "../../components/opportunity/partnership/printing-branding-partner/KeyBenefits";
import Deliverables from "../../components/opportunity/partnership/printing-branding-partner/Deliverables";
import WhyPartnerPrinting from "../../components/opportunity/partnership/printing-branding-partner/WhyPartnerPrinting";

export const metadata = {
  title: "Official Printing & Branding Partner | Bharat Organic Expo 2027",
  description: "Become the official printing & branding partner of Bharat Organic Expo 2027.",
};

export default function PrintingBrandingPartnerPage() {
  return (
    <main className="w-full bg-white">
      <Hero />
      <FeatureStrip />
      <KeyBenefits />
      <Deliverables />
      <WhyPartnerPrinting />
    </main>
  );
}
