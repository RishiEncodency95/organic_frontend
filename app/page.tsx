import React, { Suspense, lazy } from "react";
import type { Metadata } from "next";
import HeroSection from "./components/home/HeroSection";
import AudienceStrip from "./components/home/AudienceStrip";
import { seoApi } from "../lib/api";

// Lazy load below-the-fold components
const IntroductionSection = lazy(() => import("./components/home/IntroductionSection"));
const WhyParticipate = lazy(() => import("./components/home/WhyParticipate"));
const BeyondExhibition = lazy(() => import("./components/home/BeyondExhibition"));
const ExpoCategories = lazy(() => import("./components/home/ExpoCategories"));
const ConferenceSection = lazy(() => import("./components/home/ConferenceSection"));
const SponsorsAndAttend = lazy(() => import("./components/home/SponsorsAndAttend"));
const BecomeSponsor = lazy(() => import("./components/home/BecomeSponsor"));
const SponsorshipCategories = lazy(() => import("./components/home/SponsorshipCategories"));
const PartnersAndBrands = lazy(() => import("./components/home/PartnersAndBrands"));
const BuyerSellerMeet = lazy(() => import("./components/home/BuyerSellerMeet"));
const TestimonialsCarousel = lazy(() => import("./components/home/TestimonialsCarousel"));
const LatestInsights = lazy(() => import("./components/home/LatestInsights"));
const GlobalPlatform = lazy(() => import("./components/home/GlobalPlatform"));

export async function generateMetadata(): Promise<Metadata> {
  const isLocal = process.env.NODE_ENV !== "production";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("home", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    console.error("Failed to fetch SEO metadata for home page:", err);
  }

  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";
  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = defaultUrl;
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

  const title = seoData?.metaTitle || "Bharat Organic Expo 2027 – International Trade Fair on Organic Products";
  const description =
    seoData?.metaDescription ||
    "Join Bharat Organic Expo 2027, the premier exhibition and conference for organic food, agriculture, and natural products in India.";
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
      : ["organic expo", "organic farming", "bharat organic expo"],
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

const Index = async () => {
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("home", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (e) {
    // fallback
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = defaultUrl;
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
      <HeroSection />
      <AudienceStrip />
      <Suspense
        fallback={
          <div className="min-h-[200px] flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-[#3b8c2a] border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <IntroductionSection />
        <GlobalPlatform />
        <WhyParticipate />
        <ConferenceSection />
        <ExpoCategories />
        <BeyondExhibition />
        <SponsorsAndAttend />
        <BecomeSponsor />
        <SponsorshipCategories />
        <PartnersAndBrands />
        <BuyerSellerMeet />
        <TestimonialsCarousel />
        <LatestInsights />
      </Suspense>
    </>
  );
};

export default Index;
