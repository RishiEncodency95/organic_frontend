"use client";

import React from "react";
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {featuredArticles.map((a, i) => (
          <ArticleCard key={a.title} a={a} delay={i * 120} direction={directions[i % directions.length]} />
        ))}
      </div>
    </section>
  );
};

export default BlogFeatured;