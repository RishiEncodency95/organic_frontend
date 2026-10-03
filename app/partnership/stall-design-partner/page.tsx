import React from "react";
import Hero from "../../components/opportunity/partnership/stall-design-partner/Hero";
import FeatureStrip from "../../components/buyer-seller-meet/FeatureStrip";
import KeyBenefits from "../../components/opportunity/partnership/stall-design-partner/KeyBenefits";
import Deliverables from "../../components/opportunity/partnership/stall-design-partner/Deliverables";
import WhyPartnerStallDesign from "../../components/opportunity/partnership/stall-design-partner/WhyPartnerStallDesign";
import type { Metadata } from "next";
import AdminSchema from "@/components/seo/AdminSchema";
import { adminSeoMetadata, getAdminSeo } from "@/lib/adminSeo";
import { getSectionData } from "@/lib/serverData";

export const revalidate = 60;

const SEO_PAGE_KEY = "partnership/stall-design-partner";

export async function generateMetadata(): Promise<Metadata> {
  return adminSeoMetadata(SEO_PAGE_KEY, {
    title: "Official Stall Design Partner | Bharat Organic Expo 2027",
    description: "Become the official stall design partner of Bharat Organic Expo 2027. Connect with premium B2B buyers, exhibitors, and delegates globally.",
  });
}

export default async function TravelPartnerPage() {
  const [seoData, heroData] = await Promise.all([
    getAdminSeo(SEO_PAGE_KEY),
    getSectionData("/website/opportunities/partnership/sub-hero/stall-design-partner"),
  ]);
  return (
    <main className="w-full bg-white">
      <AdminSchema schema={seoData?.schemaMarkup || null} />
      <Hero initialData={heroData} />
      <FeatureStrip />
      <KeyBenefits />
      <Deliverables />
      <WhyPartnerStallDesign />
    </main>
  );
}
