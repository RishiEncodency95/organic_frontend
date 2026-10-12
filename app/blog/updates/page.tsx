import { Metadata } from "next";
import { getSectionData } from "@/lib/serverData";
import BlogHero from "@/app/components/blog/BlogHero";
import AboutStrip from "@/app/components/abouts/about/AboutStrip";
import { BlogAllUpdates } from "@/app/components/blog/BlogLatest";

// "View all" under "Latest from Bharat Organic Expo" on /blog: the same hero, then every update.
// (A post with the slug "updates" would be hidden by this page.)
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Latest from Bharat Organic Expo | Blog",
  description: "Expo updates, business news and announcements from Bharat Organic Expo.",
  alternates: { canonical: "/blog/updates" },
};

export default async function AllUpdatesPage() {
  const heroData = await getSectionData("/website/bloghero");
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 overflow-x-clip">
      <BlogHero data={heroData} />
      <AboutStrip />
      <BlogAllUpdates />
    </div>
  );
}
