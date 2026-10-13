import { Metadata } from "next";
import { getSectionData } from "@/lib/serverData";
import BlogHero from "@/app/components/blog/BlogHero";
import AboutStrip from "@/app/components/abouts/about/AboutStrip";
import { BlogAllExperts } from "@/app/components/blog/BlogExperts";

// "View all experts" on /blog: the same hero as the blog page, then every expert.
// (A post with the slug "experts" would be hidden by this page.)
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Voices of Experts | Bharat Organic Expo Blog",
  description: "Insights from organic farming, food and sustainability experts featured on the Bharat Organic Expo blog.",
  alternates: { canonical: "/blog/experts" },
};

export default async function AllExpertsPage() {
  const heroData = await getSectionData("/website/bloghero");
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 overflow-x-clip">
      <BlogHero data={heroData} titleAs="div" />
      <AboutStrip />
      <BlogAllExperts />
    </div>
  );
}
