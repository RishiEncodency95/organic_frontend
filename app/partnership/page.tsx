import React from "react";
import type { Metadata } from "next";
import { OG_IMAGE, OG_IMAGE_ALT } from "@/lib/seo";
import { seoApi } from "@/lib/api";
import AdminSchema from "@/components/seo/AdminSchema";
import { getSectionData } from "@/lib/serverData";
import HeroSection from "../components/opportunity/partnership/HeroSection";
import PartnershipOpportunities from "../components/opportunity/partnership/PartnershipOpportunities";
import WhyPartner from "../components/opportunity/partnership/WhyPartner";
import EnquiryForm from "../components/opportunity/partnership/EnquiryForm";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("partnership", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    // fallback
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = `${defaultUrl}/partnership`;
  if (rawCanonical) {
    const match = rawCanonical.match(/href=["']([^"']+)["']/i);
    if (match && match[1]) {
      canonicalUrl = match[1].trim();
    } else {
      const stripped = rawCanonical.replace(/<[^>]*>/g, "").trim();
      if (stripped.startsWith("http://") || stripped.startsWith("https://") || stripped.startsWith("/")) {
        canonicalUrl = stripped.startsWith("/") ? `${defaultUrl}${stripped}` : stripped;
      }
    }
  }

  const title = seoData?.metaTitle || "Partnership & Collaboration | Bharat Organic Expo 2027";
  const description =
    seoData?.metaDescription ||
    "Partner with Bharat Organic Expo 2027 and be a part of India's leading platform for organic business, innovation, wellness and sustainability.";

  return {
    metadataBase: new URL(defaultUrl),
    title: {
      absolute: title,
    },
    description,
    keywords: seoData?.metaKeywords
      ? seoData.metaKeywords.split(",").map((k: string) => k.trim()).filter(Boolean)
      : ["partnership", "collaboration organic expo", "event partner delhi"],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: seoData?.ogTitle || title,
      description: seoData?.ogDescription || description,
      url: canonicalUrl,
      siteName: "Bharat Organic Expo 2027",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: OG_IMAGE_ALT,
        },
      ],
      type: "website",
    },
    robots: {
      index: seoData?.robotsIndex !== false,
      follow: seoData?.robotsFollow !== false,
    },
  };
}

export default async function PartnershipPage() {
  const heroData = await getSectionData("/website/opportunities/partnership/hero");
  const isLocal = process.env.NODE_ENV !== "production";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("partnership", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    // fallback
  }

  const schemaContent = seoData?.schemaMarkup || null;

  return (
    <main className="w-full bg-[#fbfcf8]">
      <AdminSchema schema={schemaContent} />
      <HeroSection initialData={heroData} />
      <PartnershipOpportunities />
      <WhyPartner />
      <EnquiryForm />
    </main>
  );
}
