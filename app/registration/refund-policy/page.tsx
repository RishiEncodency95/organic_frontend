import type { Metadata } from "next";
import AdminSchema from "@/components/seo/AdminSchema";
import { adminSeoMetadata, getAdminSeo } from "@/lib/adminSeo";
import RefundPolicy from "@/app/components/registration/policies/RefundPolicy";
import { getDisabledSectionKeys } from "@/lib/sectionVisibility";

export const revalidate = 60;

const SEO_PAGE_KEY = "registration/refund-policy";

export async function generateMetadata(): Promise<Metadata> {
  return adminSeoMetadata(SEO_PAGE_KEY, {
    title: "Refund Policy | Bharat Organic Expo 2027",
    description: "Read the refund and cancellation policy for Bharat Organic Expo 2027 registrations and stall bookings.",
  });
}

export default async function RefundPolicyPage() {
  const [seoData, disabledSections] = await Promise.all([
    getAdminSeo(SEO_PAGE_KEY),
    getDisabledSectionKeys("refundPolicyPage"),
  ]);

  return (
    <>
      <AdminSchema schema={seoData?.schemaMarkup || null} />
      <RefundPolicy disabledSections={disabledSections} />
    </>
  );
}
