import React from "react";
import type { Metadata } from "next";
import { seoApi } from "@/lib/api";
import SchemaInjector from "@/app/components/SchemaInjector";
import HeroSection from "../components/opportunity/sponsorship/HeroSection";
import WhySponsor from "../components/opportunity/sponsorship/WhySponsor";
import SponsorshipPackages from "../components/opportunity/sponsorship/SponsorshipPackages";
import BottomOpportunities from "../components/opportunity/sponsorship/BottomOpportunities";
import ContactCTA from "../components/opportunity/sponsorship/ContactCTA";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("sponsorship", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    // fallback
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = `${defaultUrl}/sponsorship`;
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

  const title = seoData?.metaTitle || "Sponsorship Opportunities | Bharat Organic Expo 2027";
  const description =
    seoData?.metaDescription ||
    "Maximize your brand visibility and connect with a highly targeted audience at Bharat Organic Expo 2027.";
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
      : ["sponsorship opportunities", "organic expo sponsor", "bharat organic expo partnership"],
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

export default async function SponsorshipPage() {
  const isLocal = process.env.NODE_ENV !== "production";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("sponsorship", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    // fallback
  }

  const schemaContent = seoData?.schemaMarkup || null;

  return (
    <main className="min-h-screen bg-[#fcfcf0] overflow-x-hidden">
      <SchemaInjector schema={schemaContent} />
      <HeroSection />
      <WhySponsor />
      <SponsorshipPackages />
      <BottomOpportunities />
      <ContactCTA />
    </main>
  );
}
