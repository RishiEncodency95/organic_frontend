import type { StaticImageData } from "next/image";
import type { BlogArticle } from "./BlogArticleCard";

/** A blog post as the backend's GET /blogs returns it (only the fields the cards use) */
export type BlogPostApi = {
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  category?: string;
  image?: string;
  readTime?: string;
  scheduledDate?: string;
  publishDate?: string;
  createdAt?: string;
};

export function cleanText(val?: string) {
  if (!val) return "";
  return val
    .replace(/&lt;[^&]*&gt;/gi, " ")
    .replace(/<[^>]*>/gi, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

export function formatDate(dateVal?: string | Date) {
  if (!dateVal) return "Recently Added";
  const d = new Date(dateVal);
  if (isNaN(d.getTime())) return String(dateVal);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

/** Card data for one post; `fallbackImg` is used when the post has no image */
export function blogPostToArticle(p: BlogPostApi, fallbackImg: StaticImageData | string): BlogArticle {
  const plainDesc = cleanText(p.excerpt || p.content || "");
  return {
    tag: p.category || "Expo News",
    img: p.image || (typeof fallbackImg === "string" ? fallbackImg : fallbackImg.src),
    title: p.title,
    desc: plainDesc.length > 150 ? plainDesc.slice(0, 150) + "..." : plainDesc,
    date: formatDate(p.scheduledDate || p.publishDate || p.createdAt),
    read: p.readTime || "4 min read",
    slug: p.slug,
  };
}
