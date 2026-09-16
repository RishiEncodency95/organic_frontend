"use client";

import { useEffect } from "react";

interface BlogSeoInjectorProps {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  openGraphTags?: string;
  schemaMarkup?: string;
}

export default function BlogSeoInjector({
  metaTitle,
  metaDescription,
  metaKeywords,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  openGraphTags,
  schemaMarkup,
}: BlogSeoInjectorProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

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
    setMeta("name", "description", metaDescription);
    setMeta("name", "keywords", metaKeywords);

    // 3. OpenGraph Tags
    setMeta("property", "og:title", ogTitle || metaTitle);
    setMeta("property", "og:description", ogDescription || metaDescription);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:type", "article");

    // 4. Twitter Cards
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", ogTitle || metaTitle);
    setMeta("name", "twitter:description", ogDescription || metaDescription);
    setMeta("name", "twitter:image", ogImage);

    // 5. Canonical Link
    if (canonicalUrl) {
      let link = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        link.setAttribute("data-dynamic-seo", "true");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonicalUrl);
    }

    // 6. Additional Custom OG / Meta Tags
    if (openGraphTags && openGraphTags.trim()) {
      document.querySelectorAll("[data-custom-og='true']").forEach((el) => el.remove());

      const parser = new DOMParser();
      const doc = parser.parseFromString(openGraphTags, "text/html");
      const metaTags = doc.querySelectorAll("meta");
      metaTags.forEach((m) => {
        const newMeta = document.createElement("meta");
        Array.from(m.attributes).forEach((attr) => {
          newMeta.setAttribute(attr.name, attr.value);
        });
        newMeta.setAttribute("data-custom-og", "true");
        document.head.appendChild(newMeta);
      });
    }

    // 7. Schema Markup (JSON-LD) injected into <head>
    if (schemaMarkup && schemaMarkup.trim()) {
      let script = document.querySelector<HTMLScriptElement>("#blog-schema-markup");
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.id = "blog-schema-markup";
        script.setAttribute("data-dynamic-seo", "true");
        document.head.appendChild(script);
      }
      script.textContent = schemaMarkup;
    }
  }, [
    metaTitle,
    metaDescription,
    metaKeywords,
    canonicalUrl,
    ogTitle,
    ogDescription,
    ogImage,
    openGraphTags,
    schemaMarkup,
  ]);

  return null;
}
