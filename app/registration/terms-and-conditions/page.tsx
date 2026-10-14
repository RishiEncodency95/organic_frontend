import type { Metadata } from "next";
import AdminSchema from "@/components/seo/AdminSchema";
import { adminSeoMetadata, getAdminSeo } from "@/lib/adminSeo";
import { getSectionData } from "@/lib/serverData";
import { getDisabledSectionKeys } from "@/lib/sectionVisibility";
import TermsOfService from "@/app/components/registration/policies/TermsOfService";

export const revalidate = 60;

const SEO_PAGE_KEY = "registration/terms-and-conditions";

export async function generateMetadata(): Promise<Metadata> {
  return adminSeoMetadata(SEO_PAGE_KEY, {
    title: "Terms & Conditions | Bharat Organic Expo 2027",
    description: "Read the terms and conditions for exhibiting, visiting and registering at Bharat Organic Expo 2027.",
  });
}

export default async function TermsOfServicePage() {
  const [seoData, heroData, disabledSections] = await Promise.all([
    getAdminSeo(SEO_PAGE_KEY),
    getSectionData("/website/registration/terms/terms-hero"),
    getDisabledSectionKeys("termsAndConditionsPage"),
  ]);

  return (
    <>
      <AdminSchema schema={seoData?.schemaMarkup || null} />
      <TermsOfService heroData={heroData} disabledSections={disabledSections} />
    </>
  );
}
