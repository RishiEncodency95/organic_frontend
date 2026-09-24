"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./BlogSectionHeading";
import ArticleCard, { BlogArticle } from "./BlogArticleCard";
import featuredImg1 from "../../assets/blog/featured_article1.webp";
import featuredImg2 from "../../assets/blog/featured_article2.webp";
import featuredImg3 from "../../assets/blog/featured_article3.webp";
import { API_URL } from "@/lib/api";

const blogFeaturedData = {
  title: "Featured Articles",
  actionText: "View all articles",
  articles: [
    {
      tag: "Expo News",
      img: featuredImg1.src,
      title: "Bharat Organic Expo 2026: India's Organic Industry Comes Together",
      desc: "Discover the brands, farmers, buyers and innovators bringing India's organic ecosystem together at Bharat Organic Expo 2026.",
      date: "May 8, 2026",
      read: "5 min read",
    },
    {
      tag: "Industry Insight",
      img: featuredImg2.src,
      title: "Why India's Organic Industry Is Ready for Its Next Growth Phase",
      desc: "Explore the market trends, consumer demand and business opportunities shaping India's organic food and natural products sector.",
      date: "May 6, 2026",
      read: "6 min read",
    },
    {
      tag: "Sustainable Future",
      img: featuredImg3.src,
      title: "Sustainable Farming Practices Shaping a Better Tomorrow",
      desc: "Discover regenerative agriculture, natural farming and sustainable practices helping create a healthier agricultural ecosystem.",
      date: "April 30, 2026",
      read: "4 min read",
    },
  ],
};

function cleanText(val?: string) {
  if (!val) return "";
  return val
    .replace(/&lt;[^&]*&gt;/gi, " ")
    .replace(/<[^>]*>/gi, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(dateVal?: string | Date) {
  if (!dateVal) return "Recently Added";
  try {
    const d = new Date(dateVal);
    if (isNaN(d.getTime())) return String(dateVal);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return String(dateVal);
  }
}

const BlogFeatured = () => {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive cards per view (3 on desktop, 2 on tablet, 1 on mobile)
  useEffect(() => {
    const updateCardsPerView = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/blogs?status=published`)
      .then((res) => {
        if (!res.ok) return null;
        return res.json();
      })
      .then((data) => {
        const posts = data?.data?.posts || data?.posts || [];
        if (Array.isArray(posts) && posts.length > 0) {
          const dynamicItems: BlogArticle[] = posts.map((p: any) => {
            const rawExcerpt = p.excerpt || p.content || "";
            const plainDesc = cleanText(rawExcerpt);
            return {
              tag: p.category || "Expo News",
              img: p.image || featuredImg1.src,
              title: p.title,
              desc:
                plainDesc.length > 150
                  ? plainDesc.slice(0, 150) + "..."
                  : plainDesc,
              date: formatDate(p.scheduledDate || p.publishDate || p.createdAt),
              read: p.readTime || "4 min read",
              slug: p.slug,
            };
          });

          // ONLY SHOW DYNAMIC POSTS FROM ADMIN - NO STATIC DUMMY CARDS
          setArticles(dynamicItems);
        } else {
          setArticles([]);
        }
      })
      .catch((err) => {
        console.warn("Failed to fetch dynamic featured blogs:", err);
        setArticles([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const maxIndex = Math.max(0, articles.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      handlePrev();
    }
  };

  if (!isLoading && articles.length === 0) {
    return null;
  }

  return (
    <section id="featured">
      <SectionHeading action={blogFeaturedData.actionText}>{blogFeaturedData.title}</SectionHeading>
      <div className="relative px-0 md:px-12 lg:px-14">
        {/* Carousel Viewport: Only 3 cards visible in 1 row on desktop */}
        <div
          className="overflow-hidden py-1"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out -mx-2 md:-mx-2.5"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {articles.map((a, i) => (
              <div
                key={a.slug || a.title || i}
                className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-2 md:px-2.5"
              >
                <ArticleCard a={a} delay={0} direction="zoom" />
              </div>
            ))}
          </div>
        </div>

        {/* Slider Controls (Left/Right Carousel Arrows) */}
        {articles.length > cardsPerView && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous articles"
              className="absolute left-0 md:left-1 lg:left-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#f4fcf6] hover:text-[#3b8c2a] hover:border-[#3b8c2a] transition-all shadow-md z-20 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next articles"
              className="absolute right-0 md:right-1 lg:right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#f4fcf6] hover:text-[#3b8c2a] hover:border-[#3b8c2a] transition-all shadow-md z-20 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default BlogFeatured;