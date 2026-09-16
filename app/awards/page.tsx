import type { Metadata } from "next";
import { seoApi } from "@/lib/api";
import SchemaInjector from "@/app/components/SchemaInjector";
import AwardsHero from "@/app/components/awards/AwardsHero";
import AwardsStats from "@/app/components/awards/AwardsStats";
import AwardsAbout from "@/app/components/awards/AwardsAbout";
import AwardsCategories from "@/app/components/awards/AwardsCategories";
import AwardsGrandAwards from "@/app/components/awards/AwardsGrandAwards";
import AwardsProcess from "@/app/components/awards/AwardsProcess";
import AwardsCelebratingLeaders from "@/app/components/awards/AwardsCelebratingLeaders";
import AwardsInfoColumns from "@/app/components/awards/AwardsInfoColumns";
import AwardsCta from "@/app/components/awards/AwardsCta";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("awards", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    // fallback
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = `${defaultUrl}/awards`;
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

  const title = seoData?.metaTitle || "Excellence Awards 2027 | Bharat Organic Expo";
  const description =
    seoData?.metaDescription ||
    "Bharat Organic Excellence Awards 2027 recognise outstanding organisations, brands, entrepreneurs, farmers and professionals for their remarkable contribution to the growth and promotion of the organic, natural and sustainable industry.";
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
      : ["excellence awards", "organic awards india", "bharat organic awards 2027"],
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

const AwardsPage = async () => {
  const isLocal = process.env.NODE_ENV !== "production";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("awards", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    // fallback
  }

  const schemaContent = seoData?.schemaMarkup || null;

  return (
    <div className="overflow-x-hidden bg-white font-sans text-neutral-800">
      <SchemaInjector schema={schemaContent} />
      <AwardsHero />
      <AwardsStats />
      <AwardsAbout />
      <AwardsCategories />
      <AwardsGrandAwards />
      <AwardsProcess />
      {/* <AwardsCelebratingLeaders /> */}
      <AwardsInfoColumns />
      <AwardsCta />
    </div>
  );
};

export default AwardsPage;