import React from "react";
import Hero from "@/app/components/opportunity/partnership/printing-branding-partner/Hero";
import KeyBenefits from "@/app/components/opportunity/partnership/printing-branding-partner/KeyBenefits";
import Deliverables from "@/app/components/opportunity/partnership/printing-branding-partner/Deliverables";
import WhyPartnerPrinting from "@/app/components/opportunity/partnership/printing-branding-partner/WhyPartnerPrinting";

export default function PrintingBrandingPartnerPage() {
  return (
    <div className="bg-[#fcfcf0] min-h-screen">
      <Hero />
      <KeyBenefits />
      <Deliverables />
      <WhyPartnerPrinting />
    </div>
  );
}
