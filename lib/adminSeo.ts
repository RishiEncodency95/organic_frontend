import type { Metadata } from "next";
import { seoApi } from "@/lib/api";
import { OG_IMAGE, OG_IMAGE_ALT, parseOgTags } from "@/lib/seo";

/**
 * The admin SEO record for a page. `pageKey` is the page path without the leading slash,
 * exactly as the admin saves it ("blog", "about/nominate_advisory_board").
 */
export async function getAdminSeo(pageKey: string): Promise<any> {
    const isLocal = process.env.NODE_ENV !== "production";
    try {
        const res = await seoApi.getByPage(pageKey, isLocal ? "local" : "live");
        return res?.data || res || null;
    } catch (err) {
        console.error(`Failed to fetch SEO metadata for ${pageKey}:`, err);
        return null;
    }
}

/** Page metadata from the admin SEO record, with `fallback` used only for fields the admin left empty. */
export async function adminSeoMetadata(
    pageKey: string,
    fallback: { title: string; description: string },
): Promise<Metadata> {
    const isLocal = process.env.NODE_ENV !== "production";
    const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";
    const seoData = await getAdminSeo(pageKey);

    const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
    let canonicalUrl = `${defaultUrl}/${pageKey}`;
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

    const title = seoData?.metaTitle || fallback.title;
    const description = seoData?.metaDescription || fallback.description;
    const og = parseOgTags(seoData?.openGraphTags);

    return {
        metadataBase: new URL(defaultUrl),
        title: {
            absolute: title,
        },
        description,
        keywords: seoData?.metaKeywords
            ? seoData.metaKeywords.split(",").map((k: string) => k.trim()).filter(Boolean)
            : undefined,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: og["og:title"] || seoData?.ogTitle || title,
            description: og["og:description"] || seoData?.ogDescription || description,
            url: canonicalUrl,
            siteName: "Bharat Organic Expo 2027",
            // One share image for every page; the admin's og:image is intentionally ignored.
            images: [
                {
                    url: OG_IMAGE,
                    width: 1200,
                    height: 630,
                    alt: OG_IMAGE_ALT,
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
