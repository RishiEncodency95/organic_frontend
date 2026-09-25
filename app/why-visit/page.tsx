import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/app/components/participate/why-visit/HeroSection";
import WhyVisitMatters from "@/app/components/participate/why-visit/WhyVisitMatters";
import IndustrySegments from "@/app/components/participate/why-visit/IndustrySegments";
import BuyerSellerMeetSection from "@/app/components/participate/why-visit/BuyerSellerMeetSection";
import AwardsHealthCamp from "@/app/components/participate/why-visit/AwardsHealthCamp";
import NeedHelpSupport from "@/app/components/participate/why-visit/NeedHelpSupport";
import WhoShouldVisit from "@/app/components/participate/why-visit/WhoShouldVisit";
import { settingsApi, seoApi, websiteApi } from "@/lib/api";
import SchemaInjector from "@/app/components/SchemaInjector";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";
  let seoData: any = null;
  try {
    const res1 = await seoApi.getByPage("participate/why-visit", isLocal ? "local" : "live");
    const d1 = res1?.data || res1;
    if (d1 && !Array.isArray(d1) && d1?.metaTitle) {
      seoData = d1;
    }
  } catch {}
  if (!seoData) {
    try {
      const res2 = await seoApi.getByPage("why-visit", isLocal ? "local" : "live");
      const d2 = res2?.data || res2;
      if (d2 && !Array.isArray(d2) && d2?.metaTitle) {
        seoData = d2;
      }
    } catch {}
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = `${defaultUrl}/participate/why-visit`;
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
    "";

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
  let d1: any = null;
  let d2: any = null;
  let mattersApiData: any = null;
  let segmentsApiData: any = null;
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";

  try {
    const [settingsRes, seoRes1, seoRes2, mattersRes, segmentsRes] = await Promise.allSettled([
      settingsApi.get(),
      seoApi.getByPage("participate/why-visit", isLocal ? "local" : "live"),
      seoApi.getByPage("why-visit", isLocal ? "local" : "live"),
      websiteApi.getWhyVisitMatters(),
      websiteApi.getWhyVisitSegments(),
    ]);
    if (settingsRes.status === "fulfilled") settingsData = settingsRes.value;
    d1 = seoRes1.status === "fulfilled" ? (seoRes1.value?.data || seoRes1.value) : null;
    d2 = seoRes2.status === "fulfilled" ? (seoRes2.value?.data || seoRes2.value) : null;
    seoData = (d1 && !Array.isArray(d1) && d1?.metaTitle) ? d1 : (d2 && !Array.isArray(d2) && d2?.metaTitle ? d2 : (d1 || d2));
    if (mattersRes.status === "fulfilled") mattersApiData = mattersRes.value?.data || mattersRes.value;
    if (segmentsRes.status === "fulfilled") segmentsApiData = segmentsRes.value?.data || segmentsRes.value;
  } catch (e) {
    console.error("Could not fetch settings for why-visit:", e);
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = `${defaultUrl}/participate/why-visit`;
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

  const schemaContent = seoData?.schemaMarkup || d1?.schemaMarkup || d2?.schemaMarkup || null;

  const sections: any[] = settingsData?.whyVisitPage?.sections || [];
  const heroSec = sections.find((s) => s.key === "why-visit-hero" || s.name === "HeroSection");
  const rawMatters = sections.find((s) => s.key === "why-visit-matters" || s.name === "WhyVisitMatters");
  const mattersSec = {
    ...(rawMatters || {}),
    ...(mattersApiData && typeof mattersApiData === "object" ? mattersApiData : {}),
    image: mattersApiData?.image || mattersApiData?.bandImg || rawMatters?.image || "/uploads/icons/band.png",
    imageAlt: mattersApiData?.imageAlt || rawMatters?.imageAlt || "Business Opportunities Under One Roof",
    title: mattersApiData?.title || rawMatters?.title || "Why Your Visit Matters",
    subtitle: mattersApiData?.subtitle || mattersApiData?.subline1 || rawMatters?.subtitle || "Bharat Organic Expo brings the right products, suppliers and decision-makers together,",
    description: mattersApiData?.description || mattersApiData?.shortDescription || mattersApiData?.subline2 || rawMatters?.description || "creating real opportunities for your business growth.",
    lowerTitle: mattersApiData?.lowerTitle || mattersApiData?.bannerTitle || rawMatters?.lowerTitle || "One Visit. Multiple Opportunities.",
    lowerDescription: mattersApiData?.lowerDescription || mattersApiData?.bannerDesc || rawMatters?.lowerDescription || "Save time, meet the right people and take your business to the next level.",
    items: Array.isArray(mattersApiData?.items) && mattersApiData.items.length > 0
      ? mattersApiData.items
      : Array.isArray(mattersApiData?.cards) && mattersApiData.cards.length > 0
      ? mattersApiData.cards
      : rawMatters?.items || [],
  };

  const industrySec = sections.find((s: any) => s.key === "industry-segments" || s.name === "IndustrySegments");
  const defaultSegmentImgs = [
    "/uploads/icons/x1.webp",
    "/uploads/icons/x2.webp",
    "/uploads/icons/x3.webp",
    "/uploads/icons/x4.webp",
    "/uploads/icons/x5.webp",
    "/uploads/icons/x6.webp",
  ];
  const defaultIconImgs = [
    "/uploads/icons/x1og.png",
    "/uploads/icons/x2og.png",
    "/uploads/icons/x3og.png",
    "/uploads/icons/x4og.png",
    "/uploads/icons/x5og.png",
    "/uploads/icons/x6og.png",
  ];
  const segmentsSec = {
    ...(industrySec || {}),
    eyebrow: segmentsApiData?.badge ?? industrySec?.eyebrow ?? "WHAT CAN YOU SOURCE?",
    subtitle: segmentsApiData?.subline ?? industrySec?.subtitle ?? "ONE EXPO • COMPLETE ECOSYSTEM",
    title:
      industrySec?.title ??
      (segmentsApiData?.mainTitleLine1
        ? `${segmentsApiData.mainTitleLine1}${segmentsApiData.segmentCount ? segmentsApiData.segmentCount : ""}${segmentsApiData.mainTitleLine2 ? segmentsApiData.mainTitleLine2 : ""}`
        : "Explore 6 Major Industry Segments"),
    segments: Array.isArray(segmentsApiData?.segments) && segmentsApiData.segments.length > 0
      ? segmentsApiData.segments.map((c: any, idx: number) => ({
          num: c.num ?? `0${idx + 1}`,
          title: c.title ?? "",
          subtitle: c.items ?? c.subtitle ?? "",
          description: c.desc ?? c.description ?? "",
          iconImage: c.iconImage || c.iconImg || defaultIconImgs[idx % 6],
          image: c.image || defaultSegmentImgs[idx % 6],
        }))
      : Array.isArray(industrySec?.items) && industrySec.items.length > 0
      ? industrySec.items.map((c: any, idx: number) => ({
          num: c.num ?? `0${idx + 1}`,
          title: c.title ?? "",
          subtitle: c.subtitle ?? c.items ?? "",
          description: c.description ?? c.desc ?? "",
          iconImage: c.iconImage || c.iconImg || defaultIconImgs[idx % 6],
          image: c.image || defaultSegmentImgs[idx % 6],
        }))
      : null,
  };
  const buyerSellerSec = sections.find((s: any) => s.key === "buyer-seller-meet" || s.name === "BuyerSellerMeetSection");
  const awardsSec = sections.find((s) => s.key === "awards-health-camp" || s.name === "AwardsHealthCamp");
  const helpSec = sections.find((s) => s.key === "need-help-support" || s.name === "NeedHelpSupport");
  const whoSec = sections.find((s) => s.key === "who-should-visit" || s.name === "WhoShouldVisit");

  return (
    <>
      <SchemaInjector schema={schemaContent} />
      <main className="min-h-screen bg-white font-inter">
        {heroSec?.enabled !== false && <HeroSection sectionData={heroSec} />}
        {mattersSec?.enabled !== false && <WhyVisitMatters sectionData={mattersSec} />}
        {industrySec?.enabled !== false && <IndustrySegments sectionData={segmentsSec} />}
        {buyerSellerSec?.enabled !== false && <BuyerSellerMeetSection />}
        {awardsSec?.enabled !== false && <AwardsHealthCamp sectionData={awardsSec} />}
        {helpSec?.enabled !== false && <NeedHelpSupport />}
        {whoSec?.enabled !== false && <WhoShouldVisit />}
      </main>
    </>
  );
}
