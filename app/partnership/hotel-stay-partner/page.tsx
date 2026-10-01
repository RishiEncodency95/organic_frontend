import React from "react";
import Hero from "../../components/opportunity/partnership/hotel-stay-partner/Hero";
import FeatureStrip from "../../components/buyer-seller-meet/FeatureStrip";
import KeyBenefits from "../../components/opportunity/partnership/hotel-stay-partner/KeyBenefits";
import Deliverables from "../../components/opportunity/partnership/hotel-stay-partner/Deliverables";
import WhyPartnerHotel from "../../components/opportunity/partnership/hotel-stay-partner/WhyPartnerHotel";
import type { Metadata } from "next";
import AdminSchema from "@/components/seo/AdminSchema";
import { adminSeoMetadata, getAdminSeo } from "@/lib/adminSeo";

export const revalidate = 60;

const SEO_PAGE_KEY = "partnership/hotel-stay-partner";

export async function generateMetadata(): Promise<Metadata> {
  return adminSeoMetadata(SEO_PAGE_KEY, {
    title: "Official Hotel & Stay Partner | Bharat Organic Expo 2027",
    description: "Become the official hotel & stay partner of Bharat Organic Expo 2027. Connect with premium B2B delegates, exhibitors, and visitors globally.",
  });
}

export default async function HotelStayPartnerPage() {
  const seoData = await getAdminSeo(SEO_PAGE_KEY);
  return (
    <main className="w-full bg-white">
      <AdminSchema schema={seoData?.schemaMarkup || null} />
      <Hero />
      <FeatureStrip />
      <KeyBenefits />
      <Deliverables />
      <WhyPartnerHotel />
    </main>
  );
}
