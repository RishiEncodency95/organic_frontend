import type { Metadata } from "next";
import { seoApi } from "@/lib/api";
import SchemaInjector from "@/app/components/SchemaInjector";
import MsmePmsBanner from "@/app/components/participate/msme/MsmePmsBanner";
import FeatureStrip from "@/app/components/participate/msme/FeatureStrip";
import OfficialRecognitionBanner from "@/app/components/participate/msme/OfficialRecognitionBanner";
import MsmePmsScheme from "@/app/components/participate/msme/MsmePmsScheme";
import Pmsfinancialassistancebanner from "@/app/components/participate/msme/Pmsfinancialassistancebanner";
import PmsSupportCoverSection from "@/app/components/participate/msme/PmsSupportCoverSection";
import Pmssupportsection from "@/app/components/participate/msme/Pmssupportsection";
import Whatsnextbanner from "@/app/components/participate/msme/Whatsnextbanner";
import NeedHelpSection from "@/app/components/participate/msme/NeedHelpSection";
import Reasontovisitbanner from "@/app/components/participate/msme/Reasontovisitbanner";
import OfficialMessageBanner from "@/app/components/participate/msme/Msmedirectormessage";
import Pmsdocumentsbanner from "@/app/components/participate/msme/Pmsdocumentsbanner";
import Whyparticipatesection from "@/app/components/participate/msme/Whyparticipatesection";
import Faqbanner from "@/app/components/participate/msme/FaqBanner";
import PmsFinalCtaSection from "@/app/components/participate/msme/PmsFinalCtaSection";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("participate/msme", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    try {
      const res = await seoApi.getByPage("msme", isLocal ? "local" : "live");
      seoData = res?.data || res;
    } catch {}
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = `${defaultUrl}/participate/msme`;
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

  const title = seoData?.metaTitle || "MSME PMS Scheme & Exhibition Support | Bharat Organic Expo 2027";
  const description =
    seoData?.metaDescription ||
    "Explore MSME Procurement & Marketing Support (PMS) Scheme for Bharat Organic Expo 2027. Check eligibility, financial assistance, documents required and apply for government-backed exhibition support.";
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
      : ["msme pms scheme", "msme subsidy organic expo", "exhibition subsidy msme", "bharat organic expo msme"],
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

const MsmePage = async () => {
  const isLocal = process.env.NODE_ENV !== "production";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("participate/msme", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    try {
      const res = await seoApi.getByPage("msme", isLocal ? "local" : "live");
      seoData = res?.data || res;
    } catch {}
  }

  const schemaContent = seoData?.schemaMarkup || null;

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 overflow-x-clip">
      <SchemaInjector schema={schemaContent} />
      <MsmePmsBanner />
      <FeatureStrip />
      <OfficialRecognitionBanner />
      <MsmePmsScheme />
      <Pmsfinancialassistancebanner />
      <PmsSupportCoverSection />
      <Pmssupportsection />
      <Whatsnextbanner />
      <NeedHelpSection />
      {/* <Reasontovisitbanner /> */}
      <OfficialMessageBanner />
      <Pmsdocumentsbanner />
      <Whyparticipatesection />
      <Faqbanner />
      <PmsFinalCtaSection />
    </div>
  );
};

export default MsmePage;
