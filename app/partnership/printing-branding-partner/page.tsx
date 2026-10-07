import React from "react";
import Hero from "../../components/opportunity/partnership/printing-branding-partner/Hero";
import FeatureStrip from "../../components/buyer-seller-meet/FeatureStrip";
import KeyBenefits from "../../components/opportunity/partnership/printing-branding-partner/KeyBenefits";
import Deliverables from "../../components/opportunity/partnership/printing-branding-partner/Deliverables";
import WhyPartnerPrinting from "../../components/opportunity/partnership/printing-branding-partner/WhyPartnerPrinting";
import type { Metadata } from "next";
import AdminSchema from "@/components/seo/AdminSchema";
import { adminSeoMetadata, getAdminSeo } from "@/lib/adminSeo";
import { getSectionData } from "@/lib/serverData";

import { getSectionGate } from "@/lib/sectionVisibility";
export const revalidate = 60;

const SEO_PAGE_KEY = "partnership/printing-branding-partner";

export async function generateMetadata(): Promise<Metadata> {
  return adminSeoMetadata(SEO_PAGE_KEY, {
    title: "Official Printing & Branding Partner | Bharat Organic Expo 2027",
    description: "Become the official printing & branding partner of Bharat Organic Expo 2027.",
  });
}

export default async function PrintingBrandingPartnerPage() {
  const [seoData, heroData] = await Promise.all([
    getAdminSeo(SEO_PAGE_KEY),
    getSectionData("/website/opportunities/partnership/sub-hero/printing-branding-partner"),
  ]);
  const show = await getSectionGate("printingBrandingPartnerPage");

  return (
    <main className="w-full bg-white">
      <AdminSchema schema={seoData?.schemaMarkup || null} />
      {show("sub-partnership-hero") && <Hero initialData={heroData} />}
      <FeatureStrip />
      {show("sub-partnership-benefits") && <KeyBenefits />}
      {show("sub-partnership-benefits") && <Deliverables />}
      {show("sub-partnership-enquiry") && <WhyPartnerPrinting />}
    </main>
  );
}
