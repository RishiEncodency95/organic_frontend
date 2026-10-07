import { Metadata } from "next";
import { adminSeoMetadata, getAdminSeo } from "@/lib/adminSeo";
import AdminSchema from "@/components/seo/AdminSchema";
import { getSectionData } from "@/lib/serverData";
import BlogHero from "@/app/components/blog/BlogHero";
import AboutStrip from "@/app/components/abouts/about/AboutStrip";
import BlogFeatured from "@/app/components/blog/BlogFeatured";
import BlogExperts from "@/app/components/blog/BlogExperts";
import BlogLatest from "@/app/components/blog/BlogLatest";
import BlogVideos from "@/app/components/blog/BlogVideos";
import BlogReports from "@/app/components/blog/BlogReports";
import BlogSidebar from "@/app/components/blog/BlogSidebar";
import BlogStats from "@/app/components/blog/BlogStats";
import BlogCta from "@/app/components/blog/BlogCta";

import { getSectionGate } from "@/lib/sectionVisibility";
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
    return adminSeoMetadata("blog", {
        title: "Blog | Bharat Organic Expo 2027",
        description:
            "Stay updated with the latest trends, expert perspectives, innovations and success stories shaping India's organic food, agriculture and sustainable products industry.",
    });
}

const BlogPage = async () => {
    const [seoData, heroData] = await Promise.all([
        getAdminSeo("blog"),
        getSectionData("/website/bloghero"),
    ]);
    const schemaContent = seoData?.schemaMarkup || null;

    const show = await getSectionGate("blogPage");

    return (
        <div className="min-h-screen bg-white font-sans text-neutral-800 overflow-x-clip">
            <AdminSchema schema={schemaContent} />
            {show("blog-hero") && <BlogHero data={heroData} />}
            <AboutStrip />

            <main className={`w-full px-6 lg:px-14 py-2 md:py-4 grid gap-2 lg:gap-4 ${show("blog-[#sidebar]") ? "lg:grid-cols-[1fr_320px]" : ""}`}>
                <div className="min-w-0">
                    {show("blog-featured") && <BlogFeatured />}
                    {show("blog-experts") && <BlogExperts />}
                </div>
                {show("blog-[#sidebar]") && <BlogSidebar />}
            </main>
            <div className="w-full px-6 lg:px-14 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr_0.7fr]">
                {show("blog-latest") && <BlogLatest />}
                {show("blog-videos") && <BlogVideos />}
                {show("blog-reports") && <BlogReports />}
            </div>
            {show("blog-stats") && <BlogStats />}
            {show("blog-cta") && <BlogCta />}
        </div>
    );
};

export default BlogPage;
