import React from "react";
import type { Metadata } from "next";
import { OG_IMAGE, OG_IMAGE_ALT } from "@/lib/seo";
import { seoApi } from "@/lib/api";
import { getSectionData } from "@/lib/serverData";
import AdminSchema from "@/components/seo/AdminSchema";
import HeroSection from "../components/opportunity/sponsorship/HeroSection";
import WhySponsor from "../components/opportunity/sponsorship/WhySponsor";
import SponsorshipPackages from "../components/opportunity/sponsorship/SponsorshipPackages";
import BottomOpportunities from "../components/opportunity/sponsorship/BottomOpportunities";
import ContactCTA from "../components/opportunity/sponsorship/ContactCTA";

import { getSectionGate } from "@/lib/sectionVisibility";
export const revalidate = 60;

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
  const sponsorshipHero = await getSectionData("/website/opportunities/sponsorship/hero");

  const show = await getSectionGate("sponsorshipPage");

  return (
    <main className="min-h-screen bg-[#fcfcf0] overflow-x-hidden">
      <AdminSchema schema={schemaContent} />
      {show("sponsorship-hero") && <HeroSection initialData={sponsorshipHero} />}
      {show("sponsorship-why") && <WhySponsor />}
      {show("sponsorship-packages") && <SponsorshipPackages />}
      {show("sponsorship-branding-impact") && <BottomOpportunities />}
      {show("sponsorship-cta") && <ContactCTA />}
    </main>
  );
}
