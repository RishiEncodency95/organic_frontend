import { Metadata } from "next";
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

export const metadata: Metadata = {
    title: "Blog | Bharat Organic Expo",
    description: "Stay updated with the latest trends, expert perspectives, innovations and success stories shaping India's organic food, agriculture and sustainable products industry.",
    alternates: {
        canonical: "/blog",
    },
};

const BlogPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-neutral-800 overflow-x-clip">
            <BlogHero />
            <AboutStrip />

            <main className="w-full px-6 lg:px-11 py-2 md:py-4 grid lg:grid-cols-[1fr_320px] gap-2 lg:gap-4">
                <div className="min-w-0">
                    <BlogFeatured />
                    <BlogExperts />
                </div>
                <BlogSidebar />
            </main>
            <div className="w-full px-6 lg:px-11 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr_0.7fr]">
                <BlogLatest />
                <BlogVideos />
                <BlogReports />
            </div>
            <BlogStats />
            <BlogCta />
        </div>
    );
};

export default BlogPage;