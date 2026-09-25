import React from "react";
import type { Metadata } from "next";
import { seoApi } from "@/lib/api";
import SchemaInjector from "@/app/components/SchemaInjector";
import AwardsNominationClient from "./AwardsNominationClient";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("awards/nominations", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    // fallback
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = `${defaultUrl}/awards/nominations`;
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

  const title = seoData?.metaTitle || "Awards Nomination Form | Bharat Organic Expo 2027";
  const description =
    seoData?.metaDescription ||
    "Nominate your organisation, brand, innovation, or leadership for Bharat Organic Excellence Awards 2027. Celebrate excellence in organic farming, healthcare, and sustainability.";
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
      : ["awards nomination", "bharat organic awards nomination", "organic excellence awards", "nomination form"],
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

export default async function AwardsNominationPage() {
  const isLocal = process.env.NODE_ENV !== "production";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("awards/nominations", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    // fallback
  }

  let heroData: any = null;
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4001/api";
    const res = await fetch(`${apiUrl}/website/awards/nomination-hero`, { next: { revalidate: 60 } }).catch(() => null);
    if (res && res.ok) {
      const json = await res.json().catch(() => null);
      if (json?.data) {
        heroData = json.data;
      }
    }
  } catch (err) {
    // fallback to client-side
  }

  const schemaContent = seoData?.schemaMarkup || null;

  return (
    <>
      <SchemaInjector schema={schemaContent} />
      <AwardsNominationClient initialHeroData={heroData} />
    </>
  );
}