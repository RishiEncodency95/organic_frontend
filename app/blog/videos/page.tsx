import { Metadata } from "next";
import { getSectionData } from "@/lib/serverData";
import BlogHero from "@/app/components/blog/BlogHero";
import AboutStrip from "@/app/components/abouts/about/AboutStrip";
import { BlogAllVideos } from "@/app/components/blog/BlogVideos";

// "View all" under "Video Insights" on /blog: the same hero, then every published video.
// (A post with the slug "videos" would be hidden by this page.)
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Video Insights | Bharat Organic Expo Blog",
  description: "Videos from Bharat Organic Expo — expo highlights, organic farming and sustainable innovation.",
  alternates: { canonical: "/blog/videos" },
};

export default async function AllVideosPage() {
  const heroData = await getSectionData("/website/bloghero");
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 overflow-x-clip">
      <BlogHero data={heroData} />
      <AboutStrip />
      <BlogAllVideos />
    </div>
  );
}
