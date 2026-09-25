import type { Metadata } from "next";
import HeroSection from "./components/home/HeroSection";
import AudienceStrip from "./components/home/AudienceStrip";
import HomeApiPrimer from "./components/home/HomeApiPrimer";
import DeferredHomeSections from "./components/home/DeferredHomeSections";
import SectionBoundary from "./components/home/SectionBoundary";
import IntroductionSection from "./components/home/IntroductionSection";
import WhyParticipate from "./components/home/WhyParticipate";
import BeyondExhibition from "./components/home/BeyondExhibition";
import ExpoCategories from "./components/home/ExpoCategories";
import ConferenceSection from "./components/home/ConferenceSection";
import GlobalPlatform from "./components/home/GlobalPlatform";
import { seoApi } from "../lib/api";
import { getHomePageData } from "../lib/homeData";
import SchemaInjector from "./components/SchemaInjector";

export const revalidate = 60;

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
    "";

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
  const homeDataPromise = getHomePageData();
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("home", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (e) {
    // fallback
  }

  const homeData = await homeDataPromise;

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
      <SchemaInjector schema={schemaContent} />
      <link rel="canonical" href={canonicalUrl} />
      {schemaContent && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: typeof schemaContent === "string" ? schemaContent : JSON.stringify(schemaContent),
          }}
        />
      )}
      <HomeApiPrimer responses={homeData.apiResponses} />
      <HeroSection initialSlides={homeData.apiResponses["/website/home/home-hero"]} />
      <AudienceStrip />
      <SectionBoundary>
        <IntroductionSection />
      </SectionBoundary>
      <SectionBoundary>
        <GlobalPlatform />
      </SectionBoundary>
      <SectionBoundary>
        <WhyParticipate />
      </SectionBoundary>
      <SectionBoundary>
        <ConferenceSection />
      </SectionBoundary>
      <SectionBoundary>
        <ExpoCategories />
      </SectionBoundary>
      <SectionBoundary>
        <BeyondExhibition />
      </SectionBoundary>
      <DeferredHomeSections partners={homeData.partners} blogs={homeData.blogs} />
    </>
  );
};

export default Index;
