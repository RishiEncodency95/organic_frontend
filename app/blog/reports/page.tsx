import { Metadata } from "next";
import { getSectionData } from "@/lib/serverData";
import BlogHero from "@/app/components/blog/BlogHero";
import AboutStrip from "@/app/components/abouts/about/AboutStrip";
import { BlogAllReports } from "@/app/components/blog/BlogReports";

// "View all" under "Reports & Resources" on /blog: the same hero, then every downloadable report.
// (A post with the slug "reports" would be hidden by this page.)
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Reports & Resources | Bharat Organic Expo Blog",
  description: "Download organic industry reports, market outlooks and guides from Bharat Organic Expo.",
  alternates: { canonical: "/blog/reports" },
};

export default async function AllReportsPage() {
  const heroData = await getSectionData("/website/bloghero");
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 overflow-x-clip">
      <BlogHero data={heroData} />
      <AboutStrip />
      <BlogAllReports />
    </div>
  );
}
