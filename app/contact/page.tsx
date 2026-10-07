import { Metadata } from 'next';
import React from 'react';
import { seoApi } from '@/lib/api';
import AdminSchema from '@/components/seo/AdminSchema';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactBottom from '../components/contact/ContactBottom';
import { getSectionData } from '@/lib/serverData';
import { OG_IMAGE, OG_IMAGE_ALT } from '@/lib/seo';

import { getSectionGate } from "@/lib/sectionVisibility";
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const isLocal = process.env.NODE_ENV !== "production";
  const defaultUrl = isLocal ? "http://localhost:3002" : "https://bharatorganicexpo.com";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("contact", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    // fallback
  }

  const rawCanonical = (seoData?.canonicalTag || seoData?.canonicalUrl || "").trim();
  let canonicalUrl = `${defaultUrl}/contact`;
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

  const title = seoData?.metaTitle || "Talk to Expo Advisor | Bharat Organic Expo 2027";
  const description =
    seoData?.metaDescription ||
    "Get in touch with the Bharat Organic Expo team for any queries regarding exhibiting, visiting, or sponsoring.";

  return {
    metadataBase: new URL(defaultUrl),
    title: {
      absolute: title,
    },
    description,
    keywords: seoData?.metaKeywords
      ? seoData.metaKeywords.split(",").map((k: string) => k.trim()).filter(Boolean)
      : ["contact us", "bharat organic expo contact", "expo advisor", "delhi organic expo address"],
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

const ContactPage = async () => {
  const isLocal = process.env.NODE_ENV !== "production";
  let seoData: any = null;
  try {
    const res = await seoApi.getByPage("contact", isLocal ? "local" : "live");
    seoData = res?.data || res;
  } catch (err) {
    // fallback
  }

  const schemaContent = seoData?.schemaMarkup || null;
  const settings = await getSectionData("/settings");
  const contactSections: any[] = Array.isArray(settings?.contactPage?.sections) ? settings.contactPage.sections : [];
  const heroSection = contactSections.find((s) => s.key === "contact-hero");
  const bottomSection = contactSections.find((s) => s.key === "contact-bottom");

  const show = await getSectionGate("contactPage");

  return (
    <div className="w-full bg-[#fbfcf7] min-h-screen">
      <AdminSchema schema={schemaContent} />
      {show("contact-hero") && <ContactHero initialSection={heroSection} />}
      {show("contact-form") && <ContactForm />}
      {show("contact-bottom") && <ContactBottom initialSection={bottomSection} />}
    </div>
  );
};

export default ContactPage;
