import type { Metadata } from "next";
import ExhibitorsSection from "@/app/components/exhibitors/ExhibitorsSection";
import { ApiExhibitor, fallbackExhibitors, BACKEND_URL } from "@/app/components/exhibitors/data";
import { seoApi } from "@/lib/api";
import SchemaInjector from "@/app/components/SchemaInjector";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata(): Promise<Metadata> {
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("exhibitors", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    // fallback
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = `${defaultUrl}/exhibitors`;
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

  const title = seoData?.metaTitle || "Exhibitors | Bharat Organic Expo 2027";
  const description =
    seoData?.metaDescription ||
    "Meet leading health, Ayurveda, fitness and wellness brands at Bharat Organic Expo. Browse our exhibitors across Ayurveda, Pharma, Fitness, Organic Nutrition, Medical Devices and more.";
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
      : ["organic expo", "exhibitors", "bharat organic expo"],
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

const getExhibitors = async (): Promise<ApiExhibitor[]> => {
    try {
        const res = await fetch(`${BACKEND_URL}/api/website/participate/exhibitor-list/items`, {
            cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch exhibitors");
        const json = await res.json();
        const data = json.data;
        if (Array.isArray(data) && data.length > 0) {
            return data
                .filter((item: any) => item.status !== "Draft")
                .map((item: any) => ({
                    _id: item._id,
                    title: item.title || item.name || "Exhibitor",
                    name: item.name || item.title || "Exhibitor",
                    location: item.location || "India",
                    category: item.category || "ORGANIC FOOD",
                    order: typeof item.order === "number" ? item.order : 999,
                    image: item.image || item.logo || "/exhibitors/1.jpg",
                    logo: item.logo || item.image || "/exhibitors/1.jpg",
                    altText: item.altText || `${item.name || item.title} Logo`,
                    status: item.status || "Published",
                    websiteUrl: item.websiteUrl || "",
                }))
                .sort((a: ApiExhibitor, b: ApiExhibitor) => a.order - b.order);
        }
    } catch (error) {
        console.error("Error fetching exhibitors from backend:", error);
    }
    return fallbackExhibitors;
};

const getExhibitorsHeader = async (): Promise<{ title: string; subtitle: string }> => {
    try {
        const res = await fetch(`${BACKEND_URL}/api/website/participate/exhibitor-list/header`, {
            cache: "no-store",
        });
        if (res.ok) {
            const json = await res.json();
            if (json.data) {
                return {
                    title: json.data.title || "Our Previous Exhibitors",
                    subtitle: json.data.subtitle || "A Platform Trusted by Industry Leaders",
                };
            }
        }
    } catch (error) {
        console.error("Error fetching exhibitors header:", error);
    }
    return {
        title: "Our Previous Exhibitors",
        subtitle: "A Platform Trusted by Industry Leaders",
    };
};

const ExhibitorsPage = async () => {
    const isLocal = process.env.NODE_ENV !== "production";
    let seoData: any = null;
    try {
        const res = await seoApi.getByPage("exhibitors", isLocal ? "local" : "live");
        seoData = res?.data || res;
    } catch (err) {
        // fallback
    }

    const schemaContent = seoData?.schemaMarkup || null;

    const [exhibitors, header] = await Promise.all([
        getExhibitors(),
        getExhibitorsHeader(),
    ]);

    return (
        <div className="min-h-screen bg-white font-sans text-neutral-800 overflow-x-clip">
            <SchemaInjector schema={schemaContent} />
            <ExhibitorsSection exhibitors={exhibitors} header={header} />
        </div>
    );
};

export default ExhibitorsPage;