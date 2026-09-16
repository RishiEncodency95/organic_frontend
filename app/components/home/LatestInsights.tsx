"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Leaf, Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import featuredImg1 from "../../assets/blog/featured_article1.webp";

// ─── Branded Section Configuration ───
const sectionHeader = {
  badge: "LATEST INSIGHTS",
  titlePrefix: "Organic Industry",
  titleHighlight: "Perspectives",
  linkText: "Explore All",
  linkHref: "/blog",
};

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

interface InsightArticle {
  id: string | number;
  badge: string;
  date: string;
  title: string;
  description: string;
  readTime: string;
  image: string;
  link: string;
}

const LatestInsights = () => {
  const [articles, setArticles] = useState<InsightArticle[]>([]);
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
    const apiUrl =
      typeof window !== "undefined" && window.location.hostname === "localhost"
        ? "http://localhost:4000/api"
        : process.env.NEXT_PUBLIC_API_URL || "/api";

    setIsLoading(true);
    fetch(`${apiUrl}/blogs?showOnHome=true&status=published`)
      .then((res) => {
        if (!res.ok) return null;
        return res.json();
      })
      .then((data) => {
        const posts = data?.data?.posts || data?.posts || [];
        if (Array.isArray(posts) && posts.length > 0) {
          const dynamicItems: InsightArticle[] = posts.map((p: any) => {
            const rawExcerpt = p.excerpt || p.content || "";
            const plainExcerpt = cleanText(rawExcerpt);
            return {
              id: p._id || p.id,
              badge: p.category || "Organic Trends",
              date: formatDate(p.scheduledDate || p.publishDate || p.createdAt),
              title: p.title,
              description:
                plainExcerpt.length > 140
                  ? plainExcerpt.slice(0, 140) + "..."
                  : plainExcerpt,
              readTime: p.readTime || "4 min read",
              image: p.image || featuredImg1.src,
              link: `/blog/${p.slug || "indias-organic-market"}`,
            };
          });

          // ONLY SHOW DYNAMIC POSTS - NO STATIC DUMMY CARDS!
          setArticles(dynamicItems);
        } else {
          setArticles([]);
        }
      })
      .catch((err) => {
        console.warn("Failed to fetch dynamic home blogs:", err);
        setArticles([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // If no dynamic posts marked for home, don't render empty section
  if (!isLoading && articles.length === 0) {
    return null;
  }

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

  return (
    <section
      className="relative w-full py-3 md:py-5 overflow-hidden border-t border-gray-100 font-inter"
      style={{ backgroundColor: "#F7F8F0", fontFamily: "'Inter', sans-serif" }}
    >
      <div className="w-full px-2 md:px-14 relative z-10">
        {/* BRANDED HEADING (Matching WhoCanParticipate font-poppins & font-semibold) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-3 md:mb-5 gap-2 md:gap-4">
          <div>
            <div className="flex items-center gap-1.5 md:gap-3 mb-1 md:mb-1.5">
              <div className="h-px w-6 md:w-8 bg-[#1b5e20]" />
              <span
                className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#1b5e20] font-bold text-[10px] md:text-xs font-poppins"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {sectionHeader.badge}
              </span>
              <div className="h-px w-6 md:w-8 bg-[#1b5e20]" />
            </div>
            <h2
              className="text-[17px] md:text-2xl lg:text-3xl font-semibold text-[#1b5e20] uppercase leading-[1.1] font-poppins"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {sectionHeader.titlePrefix}{" "}
              <span className="text-[#d26019]">{sectionHeader.titleHighlight}</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={sectionHeader.linkHref}
              className="flex items-center gap-1 md:gap-2 text-[#c2410c] hover:text-[#9a3412] font-poppins font-bold text-[10px] md:text-xs uppercase tracking-widest hover:gap-4 transition-all w-fit"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {sectionHeader.linkText} <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </Link>
          </div>
        </div>

        {/* Carousel Viewport: EXACTLY 3 cards visible on desktop, no multi-row wrapping */}
        <div
          className="overflow-hidden py-1 mb-3 md:mb-4"
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
            {articles.map((article) => (
              <div
                key={article.id}
                className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-2 md:px-2.5"
              >
                <Link
                  href={article.link}
                  className="relative bg-white rounded-xl overflow-hidden flex flex-col h-full group cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  }}
                >
                  {/* Image Container */}
                  <div className="relative h-[160px] md:h-[220px] w-full overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Featured Badge */}
                    {article.badge && (
                      <div
                        className="absolute top-2 left-2 md:top-4 md:left-4 bg-[#1b5e20] text-white text-[9px] md:text-[10px] font-semibold tracking-wider uppercase px-2 py-1 md:px-3 md:py-1.5 rounded-md shadow-md z-20 font-poppins"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {article.badge}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className="p-3 md:p-4 lg:p-5 flex flex-col flex-1 relative bg-white font-inter"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {/* Subtle Leaf bg inside card */}
                    <div className="absolute bottom-3 right-3 w-10 h-10 opacity-[0.06] pointer-events-none">
                      <Leaf className="w-full h-full text-[#3b8c2a] fill-[#3b8c2a]" />
                    </div>

                    <div className="flex items-center gap-1.5 md:gap-2 mb-2 md:mb-3">
                      <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#3b8c2a]" strokeWidth={2.5} />
                      <span
                        className="text-gray-700 font-semibold text-[10px] md:text-xs"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {article.date}
                      </span>
                    </div>

                    <h3
                      className="text-[13px] md:text-lg font-semibold text-[#1b5e20] leading-[1.2] md:leading-snug mb-1.5 md:mb-2 font-poppins group-hover:text-[#3b8c2a] transition-colors line-clamp-2"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {article.title}
                    </h3>

                    <p
                      className="text-gray-700 text-[11px] md:text-sm font-medium md:font-semibold leading-tight md:leading-relaxed mb-3 md:mb-4 flex-1 line-clamp-3 font-inter"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {article.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div
                        className="flex items-center text-[#1b5e20] font-semibold text-[10.5px] md:text-sm group/btn transition-colors hover:text-[#3b8c2a] font-poppins"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Read more
                        <ArrowRight
                          className="w-3 h-3 md:w-4 md:h-4 ml-1 transition-transform group-hover/btn:translate-x-1"
                          strokeWidth={2.5}
                        />
                      </div>

                      <div
                        className="flex items-center gap-1 md:gap-1.5 text-gray-600 font-semibold text-[9.5px] md:text-xs"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        <Clock className="w-3 h-3 md:w-3.5 md:h-3.5 text-gray-500" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Controls & Dots (Only shown if more articles than visible per view) */}
        {articles.length > cardsPerView && (
          <div className="flex items-center justify-center gap-3 md:gap-4 mt-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous articles"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#f4fcf6] hover:text-[#3b8c2a] hover:border-[#3b8c2a] transition-all shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5 md:gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all cursor-pointer rounded-full ${
                    currentIndex === idx
                      ? "w-6 h-1.5 md:h-2 bg-[#1b5e20]"
                      : "w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next articles"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#f4fcf6] hover:text-[#3b8c2a] hover:border-[#3b8c2a] transition-all shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestInsights;
