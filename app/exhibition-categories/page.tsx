import type { Metadata } from "next";
import AdminSchema from "@/components/seo/AdminSchema";
import { adminSeoMetadata, getAdminSeo } from "@/lib/adminSeo";
import ExhibitionCategoriesContent from "@/app/components/exhibition-categories/ExhibitionCategoriesContent";

export const revalidate = 60;

const SEO_PAGE_KEY = "exhibition-categories";

export async function generateMetadata(): Promise<Metadata> {
  return adminSeoMetadata(SEO_PAGE_KEY, {
    title: "Exhibition Categories | Bharat Organic Expo 2027",
    description:
      "Explore the exhibition categories at Bharat Organic Expo 2027, from organic food and AYUSH to organic inputs, dairy, natural beauty, packaging and agritech.",
  });
}

export default async function ExhibitionCategoriesPage() {
  const seoData = await getAdminSeo(SEO_PAGE_KEY);

  return (
    <>
      <AdminSchema schema={seoData?.schemaMarkup || null} />
      <ExhibitionCategoriesContent />
    </>
  );
}
