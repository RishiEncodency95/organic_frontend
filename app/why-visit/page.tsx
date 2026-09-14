import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/app/components/participate/why-visit/HeroSection";
import WhyVisitMatters from "@/app/components/participate/why-visit/WhyVisitMatters";
import IndustrySegments from "@/app/components/participate/why-visit/IndustrySegments";
import BuyerSellerMeetSection from "@/app/components/participate/why-visit/BuyerSellerMeetSection";
import AwardsHealthCamp from "@/app/components/participate/why-visit/AwardsHealthCamp";
import NeedHelpSupport from "@/app/components/participate/why-visit/NeedHelpSupport";
import WhoShouldVisit from "@/app/components/participate/why-visit/WhoShouldVisit";
import { settingsApi, seoApi } from "@/lib/api";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("why-visit", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    try {
      const res = await seoApi.getByPage("participate/why-visit", isLocal ? "local" : "live");
      seoData = res?.data || res;
    } catch {}
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = `${defaultUrl}/why-visit`;
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

  const title = seoData?.metaTitle || "Why Visit | Bharat Organic Expo 2027";
  const description =
    seoData?.metaDescription ||
    "Source better, connect directly, and grow your business at Bharat Organic Expo 2027. Meet 200+ exhibitors, 8,000+ visitors, and explore 6 major industry segments.";
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
      : ["organic expo", "why visit", "bharat organic expo"],
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

export default async function WhyVisitPage() {
  let settingsData: any = null;
  let seoData: any = null;
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";

  try {
    const [settingsRes, seoRes] = await Promise.allSettled([
      settingsApi.get(),
      seoApi.getByPage("why-visit", isLocal ? "local" : "live"),
    ]);
    if (settingsRes.status === "fulfilled") settingsData = settingsRes.value;
    if (seoRes.status === "fulfilled") seoData = seoRes.value?.data || seoRes.value;
  } catch (e) {
    console.error("Could not fetch settings for why-visit:", e);
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = `${defaultUrl}/why-visit`;
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

  const schemaContent = seoData?.schemaMarkup || null;

  const sections: any[] = settingsData?.whyVisitPage?.sections || [];
  const heroSec = sections.find((s) => s.key === "why-visit-hero" || s.name === "HeroSection");
  const mattersSec = sections.find((s) => s.key === "why-visit-matters" || s.name === "WhyVisitMatters");
  const industrySec = sections.find((s) => s.key === "industry-segments" || s.name === "IndustrySegments");
  const buyerSellerSec = sections.find((s) => s.key === "buyer-seller-meet" || s.name === "BuyerSellerMeetSection");
  const awardsSec = sections.find((s) => s.key === "awards-health-camp" || s.name === "AwardsHealthCamp");
  const helpSec = sections.find((s) => s.key === "need-help-support" || s.name === "NeedHelpSupport");
  const whoSec = sections.find((s) => s.key === "who-should-visit" || s.name === "WhoShouldVisit");

  return (
    <>
      <link rel="canonical" href={canonicalUrl} />
      {schemaContent && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: typeof schemaContent === "string" ? schemaContent : JSON.stringify(schemaContent),
          }}
        />
      )}
      <main className="min-h-screen bg-white font-inter">
        {heroSec?.enabled !== false && <HeroSection sectionData={heroSec} />}
        {mattersSec?.enabled !== false && <WhyVisitMatters sectionData={mattersSec} />}
        {industrySec?.enabled !== false && <IndustrySegments />}
        {buyerSellerSec?.enabled !== false && <BuyerSellerMeetSection />}
        {awardsSec?.enabled !== false && <AwardsHealthCamp />}
        {helpSec?.enabled !== false && <NeedHelpSupport />}
        {whoSec?.enabled !== false && <WhoShouldVisit />}
      </main>
    </>
  );
}
