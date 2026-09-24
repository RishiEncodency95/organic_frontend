import type { Metadata } from "next";
import HeroSection from "@/app/components/participate/why-exhibit/HeroSection";
import StatsBand from "@/app/components/participate/why-exhibit/StatsBand";
import ReasonsSection from "@/app/components/participate/why-exhibit/ReasonsSection";
import IndustriesSection from "@/app/components/participate/why-exhibit/IndustriesSection";
import BuyersSection from "@/app/components/participate/why-exhibit/BuyersSection";
import TestimonialsSection from "@/app/components/participate/why-exhibit/TestimonialsSection";
import { settingsApi, seoApi, websiteApi } from "@/lib/api";
import SchemaInjector from "@/app/components/SchemaInjector";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("why-exhibit", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    try {
      const res = await seoApi.getByPage("participate/why-exhibit", isLocal ? "local" : "live");
      seoData = res?.data || res;
    } catch {}
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = `${defaultUrl}/why-exhibit`;
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

  const title = seoData?.metaTitle || "Why Exhibit | Bharat Organic Expo 2027";
  const description =
    seoData?.metaDescription ||
    "Exhibit at Bharat Organic Expo 2027 – India's premier B2B platform for organic food, agriculture, AYUSH and sustainable industries. Reach 8,000+ qualified buyers, 200+ exhibitors and global decision makers.";
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
      : ["organic expo", "why exhibit", "bharat organic expo"],
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

export default async function WhyExhibitPage() {
  let settingsData: any = null;
  let expoCategoriesData: any = null;
  let seoData: any = null;
  let testimonialsData: any = null;
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";

  try {
    const [settingsRes, expoRes, seoRes, testimonialsRes] = await Promise.allSettled([
      settingsApi.get(),
      websiteApi.getExpoCategories(),
      seoApi.getByPage("why-exhibit", isLocal ? "local" : "live"),
      websiteApi.getTestimonialsCarousel(),
    ]);
    if (settingsRes.status === "fulfilled") settingsData = settingsRes.value;
    if (expoRes.status === "fulfilled") expoCategoriesData = expoRes.value?.data || expoRes.value;
    if (seoRes.status === "fulfilled") seoData = seoRes.value?.data || seoRes.value;
    if (testimonialsRes.status === "fulfilled") testimonialsData = testimonialsRes.value?.data || testimonialsRes.value;
  } catch (e) {
    console.error("Could not fetch settings for why-exhibit:", e);
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = `${defaultUrl}/why-exhibit`;
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

  const sections: any[] = settingsData?.whyExhibitPage?.sections || [];
  const heroSec = sections.find((s) => s.key === "why-exhibit-hero" || s.name === "HeroSection");
  const statsSec = sections.find((s) => s.key === "exhibitors-stats" || s.name === "StatsBand");
  const reasonsSec = sections.find((s) => s.key === "reasons-to-exhibit" || s.name === "ReasonsSection");
  const industriesSec = sections.find((s) => s.key === "industries-section" || s.name === "IndustriesSection");
  const buyersSec = sections.find((s) => s.key === "buyers-section" || s.name === "BuyersSection");
  const testimonialsSec = sections.find((s) => s.key === "testimonials-section" || s.name === "TestimonialsSection");

  const rawExpoItems = Array.isArray(expoCategoriesData?.items) && expoCategoriesData.items.length > 0
    ? expoCategoriesData.items
    : Array.isArray(expoCategoriesData?.categories) && expoCategoriesData.categories.length > 0
    ? expoCategoriesData.categories
    : null;

  const industriesMerged = {
    ...industriesSec,
    items: rawExpoItems || industriesSec?.items,
  };

  const rawTestimonials = Array.isArray(testimonialsData?.testimonials)
    ? testimonialsData.testimonials
    : Array.isArray(testimonialsData)
    ? testimonialsData
    : null;

  const publishedTestimonials = rawTestimonials
    ? rawTestimonials.filter((t: any) => t.status === undefined || t.status === "Published")
    : null;

  const testimonialsMerged = {
    ...testimonialsSec,
    items: (publishedTestimonials && publishedTestimonials.length > 0)
      ? publishedTestimonials.map((t: any, idx: number) => {
          const nameStr = t.company1 || t.name || "";
          const words = nameStr.trim().split(/\s+/).filter(Boolean);
          const initials = words.length >= 2 ? (words[0][0] + words[words.length - 1][0]).toUpperCase() : (words[0] ? words[0].substring(0, 2).toUpperCase() : "BO");
          return {
            id: t._id || `t-${idx}`,
            companyName1: nameStr,
            companyName2: t.company2 || t.role || "",
            location: t.location || "",
            quote: t.quote || t.message || "",
            color: t.color || "#1b5e20",
            initials: t.initials || initials,
          };
        })
      : testimonialsSec?.items,
  };

  return (
    <>
      <SchemaInjector schema={schemaContent} />
      <div className="bg-white min-h-screen overflow-x-hidden font-inter">
      <style>{`
        @keyframes goldShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0%   { left: -75%; }
          100% { left: 150%; }
        }
        @keyframes sparkleAnim {
          0%   { opacity: 0; transform: scale(0.5) translateY(0); }
          40%  { opacity: 1; transform: scale(1.2) translateY(-4px); }
          80%  { opacity: 0.6; transform: scale(0.9) translateY(-6px); }
          100% { opacity: 0; transform: scale(0.5) translateY(-8px); }
        }
        .golden-btn-hero {
          background: linear-gradient(135deg, #f5c842 0%, #ffdd00 30%, #ffa500 60%, #f5c842 100%);
          background-size: 200% 200%;
          animation: goldShift 2.5s ease infinite;
          box-shadow: 0 0 16px 4px rgba(255,200,0,0.3), 0 4px 15px rgba(255,165,0,0.25);
          position: relative;
          overflow: hidden;
        }
        .golden-btn-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          animation: shimmer 2s infinite;
        }
        .golden-btn-footer {
          background: linear-gradient(135deg, #f5c842 0%, #ffdd00 30%, #ffa500 60%, #f5c842 100%);
          background-size: 200% 200%;
          animation: goldShift 2.5s ease infinite;
          box-shadow: 0 0 16px 4px rgba(255,200,0,0.3), 0 4px 15px rgba(255,165,0,0.25);
          position: relative;
          overflow: hidden;
        }
        .golden-btn-footer::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          animation: shimmer 2s infinite;
        }
        .blue-btn-hero {
          background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 30%, #0e3b1c 60%, #1b5e20 100%);
          background-size: 200% 200%;
          animation: goldShift 2.5s ease infinite;
          box-shadow: 0 0 16px 4px rgba(27,94,32,0.3), 0 4px 15px rgba(27,94,32,0.25);
          position: relative;
          overflow: hidden;
        }
        .blue-btn-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg);
          animation: shimmer 2s infinite;
        }
      `}</style>

      {heroSec?.enabled !== false && <HeroSection sectionData={heroSec} />}
      {statsSec?.enabled !== false && <StatsBand sectionData={statsSec} />}
      {reasonsSec?.enabled !== false && <ReasonsSection sectionData={reasonsSec} />}
      {industriesSec?.enabled !== false && <IndustriesSection sectionData={industriesMerged} />}
      {buyersSec?.enabled !== false && <BuyersSection sectionData={buyersSec} />}
      {testimonialsSec?.enabled !== false && <TestimonialsSection sectionData={testimonialsMerged} />}
    </div>
  </>
  );
}
