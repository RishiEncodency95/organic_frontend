import React from "react";
import type { Metadata } from "next";
import { seoApi } from "@/lib/api";
import SchemaInjector from "@/app/components/SchemaInjector";
import ParticipateHero from "@/app/components/participate-as-exhibitor/ParticipateHero";
import ParticipateFeatureStrip from "@/app/components/participate-as-exhibitor/ParticipateFeatureStrip";
import WhoCanParticipate from "@/app/components/buyer-seller-meet/WhoCanParticipate";
import ParticipateWhyParticipate from "@/app/components/participate-as-exhibitor/ParticipateWhyParticipate";
import ParticipateCta from "@/app/components/participate-as-exhibitor/ParticipateCta";
import ParticipateStats from "@/app/components/participate-as-exhibitor/ParticipateStats";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("participate-as-exhibitor", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    console.error("Failed to fetch SEO metadata for participate-as-exhibitor page:", err);
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = `${defaultUrl}/participate-as-exhibitor`;
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

  const title = seoData?.metaTitle || "Participate as Exhibitor | Bharat Organic Expo 2027";
  const description =
    seoData?.metaDescription ||
    "Showcase your organic products, agro-tech innovations, and sustainable solutions at Bharat Organic Expo 2027. Book your booth today!";
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
      : ["participate as exhibitor", "exhibitor registration organic expo", "organic stall booking 2027"],
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

const ParticipateAsExhibitorPage = async () => {
  const isLocal = process.env.NODE_ENV !== "production";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("participate-as-exhibitor", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    // fallback
  }

  const schemaContent = seoData?.schemaMarkup || null;

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 overflow-x-clip">
      <SchemaInjector schema={schemaContent} />
      <ParticipateHero />
      <ParticipateFeatureStrip />
      <WhoCanParticipate />
      <ParticipateWhyParticipate />
      <ParticipateCta />
      <ParticipateStats />
    </div>
  );
};

export default ParticipateAsExhibitorPage;
