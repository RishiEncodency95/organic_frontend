import { Metadata } from "next";
import BlogHero from "@/app/components/blog/BlogHero";
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

<main className="container mx-auto max-w-[1400px] px-6 py-2 md:py-4 grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-12">
        <div className="min-w-0">
          <BlogFeatured />
          <BlogExperts />
        </div>
                <BlogSidebar />
            </main>
            <div className="container mx-auto max-w-[1400px] px-6 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr_0.7fr]">
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