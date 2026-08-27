"use client";

import React from 'react';
import Link from 'next/link';
import { Leaf, Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';

import featuredImg1 from "../../assets/blog/featured_article1.webp";
import featuredImg2 from "../../assets/blog/featured_article2.webp";
import featuredImg3 from "../../assets/blog/featured_article3.webp";

// ─── Dynamic Data Configuration ───
const sectionData = {
  header: {
    badge: "LATEST INSIGHTS",
    titlePrefix: "Organic Industry",
    titleHighlight: "Perspectives",
    linkText: "Explore All",
    linkHref: "/blog"
  },
  articles: [
    {
      id: 1,
      badge: "Expo News",
      date: "May 8, 2026",
      title: "Bharat Organic Expo 2026: India's Organic Industry Comes Together",
      description: "Discover the brands, farmers, buyers and innovators bringing India's organic ecosystem together at Bharat Organic Expo 2026.",
      readTime: "5 min read",
      image: featuredImg1.src,
      link: "/blog"
    },
    {
      id: 2,
      badge: "Industry Insight",
      date: "May 6, 2026",
      title: "Why India's Organic Industry Is Ready for Its Next Growth Phase",
      description: "Explore the market trends, consumer demand and business opportunities shaping India's organic food and natural products sector.",
      readTime: "6 min read",
      image: featuredImg2.src,
      link: "/blog"
    },
    {
      id: 3,
      badge: "Sustainable Future",
      date: "April 30, 2026",
      title: "Sustainable Farming Practices Shaping a Better Tomorrow",
      description: "Discover regenerative agriculture, natural farming and sustainable practices helping create a healthier agricultural ecosystem.",
      readTime: "4 min read",
      image: featuredImg3.src,
      link: "/blog"
    }
  ]
};

const LatestInsights = () => {
  return (
    <section className="relative w-full py-3 md:py-5 overflow-hidden border-t border-gray-100 font-inter" style={{ backgroundColor: "#F7F8F0" }}>

      <div className="w-full px-4 md:px-11 relative z-10">

        {/* BRANDED HEADING (Matching WhoCanParticipate font-poppins & font-semibold) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 md:mb-5 gap-3 md:gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <div className="h-px w-8 bg-[#1b5e20]" />
              <span className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#1b5e20] font-bold text-[10px] md:text-xs font-poppins">
                {sectionData.header.badge}
              </span>
              <div className="h-px w-8 bg-[#1b5e20]" />
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1b5e20] uppercase leading-[1.1] font-poppins">
              {sectionData.header.titlePrefix} <span className="text-[#d26019]">{sectionData.header.titleHighlight}</span>
            </h2>

          </div>
          <Link
            href={sectionData.header.linkHref}
            className="flex items-center gap-2 text-[#d26019] font-poppins font-bold text-[11px] md:text-xs uppercase tracking-widest hover:gap-4 transition-all w-fit"
          >
            {sectionData.header.linkText} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4 font-inter">
          {sectionData.articles.map((article) => (
            <Link
              href={article.link}
              key={article.id}
              className="relative bg-white rounded-xl overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
              style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
            >

              {/* Image Container */}
              <div className="relative h-[200px] md:h-[220px] w-full overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />

                {/* Featured Badge */}
                {article.badge && (
                  <div className="absolute top-4 left-4 bg-[#1b5e20] text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-md shadow-md z-20 font-poppins">
                    {article.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 lg:p-5 flex flex-col flex-1 relative bg-white font-inter">
                {/* Subtle Leaf bg inside card */}
                <div className="absolute bottom-3 right-3 w-10 h-10 opacity-[0.06] pointer-events-none">
                  <Leaf className="w-full h-full text-[#3b8c2a] fill-[#3b8c2a]" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-[#3b8c2a]" strokeWidth={2.5} />
                  <span className="text-gray-700 font-semibold text-xs">{article.date}</span>
                </div>

                <h3 className="text-base md:text-lg font-semibold text-[#1b5e20] leading-snug mb-2 font-poppins group-hover:text-[#3b8c2a] transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-700 text-xs md:text-sm font-semibold leading-relaxed mb-4 flex-1 line-clamp-3 font-inter">
                  {article.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center text-[#1b5e20] font-semibold text-xs md:text-sm group/btn transition-colors hover:text-[#3b8c2a] font-poppins">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" strokeWidth={2.5} />
                  </div>

                  <div className="flex items-center gap-1.5 text-gray-600 font-semibold text-xs">
                    <Clock className="w-3.5 h-3.5 text-gray-500" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination/Controls */}
        <div className="flex items-center justify-center gap-4">
          <button aria-label="Previous articles" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#f4fcf6] hover:text-[#3b8c2a] hover:border-[#3b8c2a] transition-all shadow-sm">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#0f5c2e]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>

          <button aria-label="Next articles" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#f4fcf6] hover:text-[#3b8c2a] hover:border-[#3b8c2a] transition-all shadow-sm">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default LatestInsights;
