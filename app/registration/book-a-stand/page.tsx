import React from "react";
import type { Metadata } from "next";
import AdminSchema from "@/components/seo/AdminSchema";
import { adminSeoMetadata, getAdminSeo } from "@/lib/adminSeo";
import BookAStandClient from "./BookAStandClient";

export const revalidate = 60;

const SEO_PAGE_KEY = "registration/book-a-stand";

export async function generateMetadata(): Promise<Metadata> {
  return adminSeoMetadata(SEO_PAGE_KEY, {
    title: "Book a Stall | Bharat Organic Expo 2027",
    description:
      "Book your exhibition stall or stand at Bharat Organic Expo 2027. Reserve prime space to showcase your organic and natural products to thousands of buyers.",
  });
}

export default async function BookAStandPage() {
  const seoData = await getAdminSeo(SEO_PAGE_KEY);

  return (
    <>
      <AdminSchema schema={seoData?.schemaMarkup || null} />
      <BookAStandClient />
    </>
  );
}
