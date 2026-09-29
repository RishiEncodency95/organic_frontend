import React from "react";
import Hero from "../../components/opportunity/partnership/manpower-supply-partner/Hero";
import FeatureStrip from "../../components/buyer-seller-meet/FeatureStrip";
import KeyBenefits from "../../components/opportunity/partnership/manpower-supply-partner/KeyBenefits";
import Deliverables from "../../components/opportunity/partnership/manpower-supply-partner/Deliverables";
import WhyPartnerManpowerSupply from "../../components/opportunity/partnership/manpower-supply-partner/WhyPartnerManpowerSupply";
import type { Metadata } from "next";
import AdminSchema from "@/components/seo/AdminSchema";
import { adminSeoMetadata, getAdminSeo } from "@/lib/adminSeo";

export const revalidate = 60;

const SEO_PAGE_KEY = "partnership/manpower-supply-partner";

export async function generateMetadata(): Promise<Metadata> {
  return adminSeoMetadata(SEO_PAGE_KEY, {
    title: "Official Manpower Supply Partner | Bharat Organic Expo 2027",
    description: "Become the official manpower supply partner of Bharat Organic Expo 2027. Connect with premium B2B buyers, exhibitors, and delegates globally.",
  });
}

export default async function ManpowerSupplyPartnerPage() {
  const seoData = await getAdminSeo(SEO_PAGE_KEY);
  return (
    <main className="w-full bg-white">
      <AdminSchema schema={seoData?.schemaMarkup || null} />
      <Hero />
      <FeatureStrip />
      <KeyBenefits />
      <Deliverables />
      <WhyPartnerManpowerSupply />
    </main>
  );
}
