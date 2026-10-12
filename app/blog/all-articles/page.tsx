import { Metadata } from "next";
import { getSectionData } from "@/lib/serverData";
import BlogHero from "@/app/components/blog/BlogHero";
import AboutStrip from "@/app/components/abouts/about/AboutStrip";
import BlogAllArticles from "@/app/components/blog/BlogAllArticles";

// "View all articles" on /blog: the same hero as the blog page, then every published post.
// (A post with the slug "all-articles" would be hidden by this page.)
export const metadata: Metadata = {
  title: "All Articles | Bharat Organic Expo Blog",
  description:
    "Every article from the Bharat Organic Expo blog — expo news, organic industry insights, sustainable agriculture and success stories.",
  alternates: { canonical: "/blog/all-articles" },
};

export default async function AllArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const [{ category }, heroData] = await Promise.all([searchParams, getSectionData("/website/bloghero")]);
  const initialCategory = typeof category === "string" ? category.slice(0, 80) : "";

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 overflow-x-clip">
      <BlogHero data={heroData} />
      <AboutStrip />
      <BlogAllArticles key={initialCategory} initialCategory={initialCategory} />
    </div>
  );
}
