// Force IDE refresh to clear cached TS errors
import React, { Suspense } from "react";
import type { Metadata } from 'next';
import { seoApi } from "@/lib/api";
import SchemaInjector from "@/app/components/SchemaInjector";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("about", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    console.error("Failed to fetch SEO metadata for about page:", err);
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = `${defaultUrl}/about`;
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

  const title = seoData?.metaTitle || "About Us | Bharat Organic Expo 2027";
  const description =
    seoData?.metaDescription ||
    "Learn about the core mission and visionary approach of the Bharat Organic Expo 2027.";
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
      : ["about bharat organic expo", "organic expo india", "ayurveda exhibition"],
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

// Synchronous load for above the fold
import AboutHero from "@/app/components/abouts/about/AboutHero";
import AboutStrip from "@/app/components/abouts/about/AboutStrip";
import EventOverview from "../components/abouts/about/EventOverview";
import FourPillars from "../components/abouts/about/FourPillars";
import AboutVenue from "../components/abouts/about/AboutVenue";
import AboutFaq from "../components/abouts/about/AboutFaq";
import VisionMission from "../components/abouts/about/VisionMission";
import AboutOrganizer from "../components/abouts/about/AboutOrganizer";
import HomeAbout from "@/app/components/abouts/about/HomeAbout";

const LoadingFallback = () => (
  <div className="w-full min-h-[300px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#3b8c2a] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AboutPage = async () => {
  const isLocal = process.env.NODE_ENV !== "production";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("about", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    // fallback
  }

  const schemaContent = seoData?.schemaMarkup || null;

  return (
    <>
      <SchemaInjector schema={schemaContent} />
      <div className="bg-[#ffffff] min-h-screen">
        <AboutHero />
        <AboutStrip />

        <Suspense fallback={<LoadingFallback />}>
          <HomeAbout />
          <EventOverview />

          <AboutOrganizer />
          <VisionMission />
          <FourPillars />
          <AboutVenue />
          <AboutFaq />
        </Suspense>
      </div>
    </>
  );
};

export default AboutPage;