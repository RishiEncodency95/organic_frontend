import type { Metadata } from "next";
import AdminSchema from "@/components/seo/AdminSchema";
import { adminSeoMetadata, getAdminSeo } from "@/lib/adminSeo";
import { getSectionData } from "@/lib/serverData";
import CareersClientContent from "./CareersClientContent";

export const revalidate = 60;

const SEO_PAGE_KEY = "careers";

export async function generateMetadata(): Promise<Metadata> {
  return adminSeoMetadata(SEO_PAGE_KEY, {
    title: "Careers | Join Bharat Organic Expo Team",
    description:
      "Explore career opportunities at Bharat Organic Expo and join our dynamic team driving the organic and wellness movement.",
  });
}

export default async function CareerPage() {
  const [seoData, settings] = await Promise.all([
    getAdminSeo(SEO_PAGE_KEY),
    getSectionData("/settings?website=Organicexpo"),
  ]);
  const sections = Array.isArray(settings?.careersPage?.sections) ? settings.careersPage.sections : [];

  return (
    <>
      <AdminSchema schema={seoData?.schemaMarkup || null} />
      <CareersClientContent sections={sections} />
    </>
  );
}
