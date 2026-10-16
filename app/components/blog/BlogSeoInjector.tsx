"use client";

import { useEffect } from "react";

interface BlogSeoInjectorProps {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  openGraphTags?: string;
}

export default function BlogSeoInjector({
  metaTitle,
  metaDescription,
  metaKeywords,
  ogTitle,
  ogDescription,
  ogImage,
  openGraphTags,
}: BlogSeoInjectorProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Admin-entered values sometimes start with a stray separator (": ", "| ") —
    // strip it so previews never read ": Explore 6 upcoming expos...".
    const clean = (value?: string) => (value || "").replace(/^[\s:;|–—-]+/, "").trim();

    // 1. Browser Title
    if (metaTitle) {
      document.title = metaTitle;
    }

    // Helper to safely set or update meta tag in <head>
    const setMeta = (attr: "name" | "property", key: string, content?: string) => {
      if (!content) return;
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}='${key}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        el.setAttribute("data-dynamic-seo", "true");
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // 2. Standard SEO Meta
    setMeta("name", "description", clean(metaDescription));
    setMeta("name", "keywords", metaKeywords);

    // 3. OpenGraph Tags
    setMeta("property", "og:title", clean(ogTitle) || clean(metaTitle));
    setMeta("property", "og:description", clean(ogDescription) || clean(metaDescription));
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:type", "article");

    // 4. Twitter Cards
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", clean(ogTitle) || clean(metaTitle));
    setMeta("name", "twitter:description", clean(ogDescription) || clean(metaDescription));
    setMeta("name", "twitter:image", ogImage);

    // Canonical is not touched here — it is rendered once, server-side, by generateMetadata.

    // 6. Additional Custom OG / Meta Tags.
    // Keys already rendered above must not be re-added — a second og:image/og:title in
    // the DOM makes scrapers pick the wrong one.
    const RESERVED_META_KEYS = /^(og:(title|description|url|type|site_name|image(:.*)?)|twitter:(card|title|description|image(:.*)))$/i;
    if (openGraphTags && openGraphTags.trim()) {
      document.querySelectorAll("[data-custom-og='true']").forEach((el) => el.remove());

      const parser = new DOMParser();
      const doc = parser.parseFromString(openGraphTags, "text/html");
      const metaTags = doc.querySelectorAll("meta");
      metaTags.forEach((m) => {
        const key = (m.getAttribute("property") || m.getAttribute("name") || "").trim();
        if (RESERVED_META_KEYS.test(key)) return;
        const newMeta = document.createElement("meta");
        Array.from(m.attributes).forEach((attr) => {
          newMeta.setAttribute(attr.name, attr.value);
        });
        newMeta.setAttribute("data-custom-og", "true");
        document.head.appendChild(newMeta);
      });
    }

    // Schema markup is rendered server-side by <AdminSchema> on the page, not injected here.
  }, [
    metaTitle,
    metaDescription,
    metaKeywords,
    ogTitle,
    ogDescription,
    ogImage,
    openGraphTags,
  ]);

  return null;
}
