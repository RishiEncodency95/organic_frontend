import React from "react";
import type { Metadata } from "next";
import { seoApi } from "@/lib/api";
import SchemaInjector from "@/app/components/SchemaInjector";
import HeroSection from "../components/buyer-seller-meet/HeroSection";
import FeatureStrip from "../components/buyer-seller-meet/FeatureStrip";
import AboutSection from "../components/buyer-seller-meet/AboutSection";
import WhoCanParticipate from "../components/buyer-seller-meet/WhoCanParticipate";
import WhatToSource from "../components/buyer-seller-meet/WhatToSource";
import WhyJoin from "../components/buyer-seller-meet/WhyJoin";
import HowItWorks from "../components/buyer-seller-meet/HowItWorks";
import ConnectWith from "../components/buyer-seller-meet/ConnectWith";
import CtaBanner from "../components/buyer-seller-meet/CtaBanner";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("buyer-seller-meet", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    // fallback
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = `${defaultUrl}/buyer-seller-meet`;
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

  const title = seoData?.metaTitle || "Buyer-Seller Meet | Bharat Organic Expo 2027";
  const description =
    seoData?.metaDescription ||
    "Join thousands of experts, buyers, and exhibitors at the most anticipated organic and wellness mega event.";
  const ogImage =
    seoData?.ogImage ||
    "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165233/moksha-sewa/assets/km.jpg";

  return {
    metadataBase: new URL(defaultUrl),
    title: {
      absolute: title,
    },
    description,
    keywords: seoData?.metaKeywords
      ? seoData.metaKeywords.split(",").map((k: string) => k.trim()).filter(Boolean)
      : ["buyer seller meet", "organic b2b meeting", "bharat organic expo buyers"],
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
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
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

export default async function BuyerSellerMeetPage() {
  const isLocal = process.env.NODE_ENV !== "production";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("buyer-seller-meet", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    // fallback
  }

  const schemaContent = seoData?.schemaMarkup || null;

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <SchemaInjector schema={schemaContent} />
      <HeroSection />
      <FeatureStrip />
      <AboutSection />
      <WhoCanParticipate />
      <WhatToSource />
      <WhyJoin />
      <HowItWorks />
      <ConnectWith />
      <CtaBanner />
    </main>
  );
}
