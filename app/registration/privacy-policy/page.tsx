import type { Metadata } from "next";
import AdminSchema from "@/components/seo/AdminSchema";
import { adminSeoMetadata, getAdminSeo } from "@/lib/adminSeo";
import PrivacyPolicy from "@/app/components/registration/policies/PrivacyPolicy";
import { getDisabledSectionKeys } from "@/lib/sectionVisibility";

export const revalidate = 60;

const SEO_PAGE_KEY = "registration/privacy-policy";

export async function generateMetadata(): Promise<Metadata> {
  return adminSeoMetadata(SEO_PAGE_KEY, {
    title: "Privacy Policy | Bharat Organic Expo 2027",
    description: "Learn how Bharat Organic Expo 2027 collects, uses and protects your personal information.",
  });
}

export default async function PrivacyPolicyPage() {
  const [seoData, disabledSections] = await Promise.all([
    getAdminSeo(SEO_PAGE_KEY),
    getDisabledSectionKeys("privacyPolicyPage"),
  ]);

  return (
    <>
      <AdminSchema schema={seoData?.schemaMarkup || null} />
      <PrivacyPolicy disabledSections={disabledSections} />
    </>
  );
}
