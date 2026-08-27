"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from "./BlogSectionHeading";
import ArticleCard, { BlogArticle } from "./BlogArticleCard";
import { RevealDirection } from "./BlogReveal";
import featuredImg1 from "../../assets/blog/featured_article1.webp";
import featuredImg2 from "../../assets/blog/featured_article2.webp";
import featuredImg3 from "../../assets/blog/featured_article3.webp";

const featuredArticles: BlogArticle[] = [
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
];

const directions: RevealDirection[] = ["left", "zoom", "right"];

const BlogFeatured = () => {
  return (
    <section id="featured">
      <SectionHeading action="View all articles">Featured Articles</SectionHeading>
      <div className="relative px-0 md:px-14 lg:px-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {featuredArticles.map((a, i) => (
            <ArticleCard key={a.title} a={a} delay={i * 120} direction={directions[i % directions.length]} />
          ))}
        </div>
        
        {/* Slider Controls (Left/Right) */}
        <button aria-label="Previous articles" className="absolute left-0 md:left-1 lg:left-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#f4fcf6] hover:text-[#3b8c2a] hover:border-[#3b8c2a] transition-all shadow-md z-10 hidden md:flex">
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        
        <button aria-label="Next articles" className="absolute right-0 md:right-1 lg:right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-11 md:h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#f4fcf6] hover:text-[#3b8c2a] hover:border-[#3b8c2a] transition-all shadow-md z-10 hidden md:flex">
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </section>
  );
};

export default BlogFeatured;