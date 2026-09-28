import React from "react";
import type { Metadata } from "next";
import { seoApi } from "@/lib/api";
import SchemaInjector from "@/app/components/SchemaInjector";
import AdvisoryHero from "@/app/components/abouts/advisory_board_member/AdvisoryHero";
import { getSectionData } from "@/lib/serverData";
import AboutStrip from "@/app/components/abouts/about/AboutStrip";
import ChairmanMessage from "@/app/components/abouts/advisory_board_member/ChairmanMessage";
import AdvisoryBoardGrid from "@/app/components/abouts/advisory_board_member/AdvisoryBoardGrid";
import WhyJoinAdvisory from "@/app/components/abouts/advisory_board_member/WhyJoinAdvisory";
// import AdvisoryPartners from "@/app/components/abouts/advisory_board_member/AdvisoryPartners";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("about/advisory_board_member", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    console.error("Failed to fetch SEO metadata for advisory_board_member page:", err);
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = `${defaultUrl}/about/advisory_board_member`;
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

  const title = seoData?.metaTitle || "Advisory Board Members | Bharat Organic Expo 2027";
  const description =
    seoData?.metaDescription ||
    "Meet the distinguished leaders and professionals shaping the strategic direction of Bharat Organic Expo 2027.";
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
      : ["advisory board", "organic expo leadership", "bharat organic expo advisory"],
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

const AdvisoryBoardMemberPage = async () => {
  const isLocal = process.env.NODE_ENV !== "production";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("about/advisory_board_member", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    // fallback
  }

  const schemaContent = seoData?.schemaMarkup || null;
  const advisoryHero = await getSectionData("/website/advisoryhero");


  return (
    <div className="bg-[#ffffff] min-h-screen">
      <SchemaInjector schema={schemaContent} />
      <AdvisoryHero initialData={advisoryHero} />
      <AboutStrip />
      <ChairmanMessage />
      <AdvisoryBoardGrid />
      <WhyJoinAdvisory />
      {/* <AdvisoryPartners /> */}
    </div>
  );
};

export default AdvisoryBoardMemberPage;
