import React from "react";
import type { Metadata } from "next";
import { OG_IMAGE, OG_IMAGE_ALT } from "@/lib/seo";
import { seoApi } from "@/lib/api";
import AdminSchema from "@/components/seo/AdminSchema";
import { getSectionData } from "@/lib/serverData";
import HeroSection from "../components/opportunity/epromotion-opportunity/HeroSection";
import EPromoteBand from "../components/opportunity/epromotion-opportunity/EPromoteBand";
import WhyEPromote from "../components/opportunity/epromotion-opportunity/WhyEPromote";
import EPromotionOpportunities from "../components/opportunity/epromotion-opportunity/EPromotionOpportunities";

import { getSectionGate } from "@/lib/sectionVisibility";
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("e-promotion-web", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    // fallback
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = `${defaultUrl}/e-promotion-web`;
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

  const title = seoData?.metaTitle || "E-Promotion Opportunities | Bharat Organic Expo 2027";
  const description =
    seoData?.metaDescription ||
    "Maximize your brand visibility and connect with a highly targeted audience before, during and after the event.";

  return {
    metadataBase: new URL(defaultUrl),
    title: {
      absolute: title,
    },
    description,
    keywords: seoData?.metaKeywords
      ? seoData.metaKeywords.split(",").map((k: string) => k.trim()).filter(Boolean)
      : ["e-promotion", "digital advertising organic expo", "brand visibility organic expo"],
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

export default async function EPromotionWebPage() {
  const isLocal = process.env.NODE_ENV !== "production";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("e-promotion-web", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    // fallback
  }

  const schemaContent = seoData?.schemaMarkup || null;
  const heroData = await getSectionData("/website/opportunities/epromotion/hero");

  const show = await getSectionGate("epromotionPage");

  return (
    <main className="w-full bg-[#f9f9f9]">
      <AdminSchema schema={schemaContent} />
      {show("epromotion-hero") && <HeroSection initialData={heroData} />}
      {show("epromotion-band") && <EPromoteBand />}
      {show("epromotion-why") && <WhyEPromote />}
      {show("epromotion-opportunities") && <EPromotionOpportunities />}
    </main>
  );
}
