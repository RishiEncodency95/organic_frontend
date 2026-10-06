import React from "react";
import { getSectionData } from "@/lib/serverData";
import Hero from "@/app/components/opportunity/partnership/printing-branding-partner/Hero";
import KeyBenefits from "@/app/components/opportunity/partnership/printing-branding-partner/KeyBenefits";
import Deliverables from "@/app/components/opportunity/partnership/printing-branding-partner/Deliverables";
import WhyPartnerPrinting from "@/app/components/opportunity/partnership/printing-branding-partner/WhyPartnerPrinting";

export default async function PrintingBrandingPartnerPage() {
  const heroData = await getSectionData("/website/opportunities/partnership/sub-hero/printing-branding-partner");
  return (
    <div className="bg-[#fcfcf0] min-h-screen">
      <Hero initialData={heroData} />
      <KeyBenefits />
      <Deliverables />
      <WhyPartnerPrinting />
    </div>
  );
}
