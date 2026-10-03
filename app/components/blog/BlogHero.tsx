"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import bannerImg from "../../assets/blog/banner.webp";

// Shown until the admin saves the hero (and for any field left empty).
const DEFAULT_BLOG_HERO = {
  tagline: "BHARAT ORGANIC EXPO",
  title: "BLOGS & NEWS",
  subtitle: "Insights. Innovation. Impact.",
  description: "Stay updated with the latest trends, expert perspectives, innovations and success stories shaping India's organic food, agriculture and sustainable products industry.",
  imageAlt: "Bharat Organic Expo Blog Banner",
};

const BlogHero = ({ data }: { data?: any }) => {
  // H1 is a single admin field: the last word goes on the orange line, the rest green.
  // Older saves only have the two-part title, so that's joined first.
  const legacyTitle = [data?.titlePart1, data?.titlePart2]
    .filter((x: unknown) => typeof x === "string" && x.trim())
    .join(" ");
  const titleWords = (data?.title?.trim() || legacyTitle || DEFAULT_BLOG_HERO.title).split(/\s+/);
  const blogHeroData = {
    tagline: data?.tagline?.trim() || DEFAULT_BLOG_HERO.tagline,
    titlePart1: titleWords.length > 1 ? titleWords.slice(0, -1).join(" ") : "",
    titlePart2: titleWords[titleWords.length - 1],
    subtitle: data?.subtitle?.trim() || DEFAULT_BLOG_HERO.subtitle,
    description: data?.description?.trim() || DEFAULT_BLOG_HERO.description,
    image: typeof data?.image === "string" && data.image.trim() ? data.image.trim() : bannerImg.src,
    imageAlt: data?.imageAlt?.trim() || DEFAULT_BLOG_HERO.imageAlt,
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] flex items-center pt-3 md:pt-5 pb-4 md:pb-6 font-inter border-b-4 border-[#ea580c]">
      {/* Background Image */}
      <Image
        key={blogHeroData.image}
        src={blogHeroData.image}
        alt={blogHeroData.imageAlt}
        fill
        priority
        className="object-cover z-0"
        sizes="100vw"
      />

      <div className="relative z-20 w-full px-6 lg:px-14 h-full flex flex-col justify-center">
        <div className="text-left">
          {/* Tagline Badge */}
          <div className={`flex items-center justify-start gap-2.5 mb-2 transition-all duration-700 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}>
            <span className="w-8 h-[2.5px] bg-[#c2410c] shrink-0" />
            <p className="text-[#c2410c] text-[13px] md:text-[15px] lg:text-[16px] font-bold uppercase tracking-[0.18em] text-left">
              {blogHeroData.tagline}
            </p>
            <span className="w-8 h-[2.5px] bg-[#c2410c] shrink-0" />
          </div>

          {/* Title */}
          <h1
            className={`font-black leading-[1.05] mb-4 text-left font-poppins transition-all delay-100 duration-700 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
          >
            {blogHeroData.titlePart1 && (
              <div className="text-[#1b5e20] text-[40px] md:text-[52px] lg:text-[62px] tracking-tight block" style={{ fontWeight: 600 }}>
                {blogHeroData.titlePart1}
              </div>
            )}
            <div className="text-[#ea580c] text-[46px] md:text-[60px] lg:text-[72px] tracking-tight block" style={{ fontWeight: 600 }}>
              {blogHeroData.titlePart2}
            </div>
          </h1>

          {/* Subtitle */}
          <div className={`flex items-center gap-3 transition-all delay-300 duration-700 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}>
            <div className="w-12 h-1 bg-[#ea580c] rounded-full"></div>
            <span className="text-[#1b5e20] font-bold text-[14px] md:text-[16px] tracking-widest uppercase">
              {blogHeroData.subtitle}
            </span>
            <div className="w-12 h-1 bg-[#ea580c] rounded-full"></div>
          </div>

          {/* Description */}
          <p className={`text-[#131730] font-bold text-[13px] md:text-[14px] lg:text-[15px] leading-relaxed max-w-lg mt-4 transition-all delay-400 duration-700 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}>
            {blogHeroData.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;