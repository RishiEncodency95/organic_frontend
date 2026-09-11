"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionContainer from "@/app/components/layout/SectionContainer";

import x1 from "@/app/assets/image/x1.webp";
import x2 from "@/app/assets/image/x2.webp";
import x3 from "@/app/assets/image/x3.webp";
import x4 from "@/app/assets/image/x4.webp";
import x5 from "@/app/assets/image/x5.webp";
import x6 from "@/app/assets/image/x6.webp";

import x1og from "@/app/assets/icons/x1og.png";
import x2og from "@/app/assets/icons/x2og.png";
import x3og from "@/app/assets/icons/x3og.png";
import x4og from "@/app/assets/icons/x4og.png";
import x5og from "@/app/assets/icons/x5og.png";
import x6og from "@/app/assets/icons/x6og.png";
import tleafImg from "@/app/assets/icons/tleaf.png";
import footerrightImg from "@/app/assets/icons/footerright.png";

const Sparkle = ({
  style,
  color = "#ffdd00",
  shadow = "#ffa500",
}: {
  style?: React.CSSProperties;
  color?: string;
  shadow?: string;
}) => (
  <span
    style={{
      position: "absolute",
      pointerEvents: "none",
      fontSize: "12px",
      color,
      textShadow: `0 0 6px ${shadow}, 0 0 12px ${shadow}`,
      animation: "sparkleAnim 1.6s ease-in-out infinite",
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

const segments = [
  {
    num: "01",
    title: "Organic Food & Nutrition",
    items: "Food • Beverages • Nutraceuticals",
    desc: "Certified organic pulses, grains, superfoods, organic tea/coffee, cold-pressed oils & health supplements.",
    iconImg: x1og,
    color: "#2d7a27",
    image: x1,
  },
  {
    num: "02",
    title: "AYUSH, Herbal & Wellness",
    items: "Ayurveda • Herbal • Wellness",
    desc: "Ayurvedic formulations, herbal extracts, essential oils, wellness teas & traditional remedies.",
    iconImg: x2og,
    color: "#0f808c",
    image: x2,
  },
  {
    num: "03",
    title: "Organic\nAgriculture",
    items: "Farming • Seeds • Bio-Inputs",
    desc: "Bio-fertilizers, organic pesticides, non-GMO seeds, farm machinery & organic soil enhancers.",
    iconImg: x3og,
    color: "#5c821a",
    image: x3,
  },
  {
    num: "04",
    title: "Natural Living & Personal Care",
    items: "Beauty • Personal Care • Natural Lifestyle",
    desc: "Organic cosmetics, natural skincare, sustainable apparel, eco-friendly home care & hygiene products.",
    iconImg: x4og,
    color: "#6b3b7a",
    image: x4,
  },
  {
    num: "05",
    title: "GreenTech & Sustainability",
    items: "AgriTech • Packaging • Processing",
    desc: "Biodegradable packaging, solar energy solutions, waste management & smart AgriTech innovations.",
    iconImg: x5og,
    color: "#0e7b8a",
    image: x5,
  },
  {
    num: "06",
    title: "Trade, Certification & Global Business",
    items: "Certification • Export • Import • Business Services",
    desc: "Organic certification bodies, export-import agencies, testing labs & B2B logistics services.",
    iconImg: x6og,
    color: "#d96b18",
    image: x6,
  },
];

export default function IndustrySegments() {
  return (
    <section className="py-3 sm:py-4 bg-white font-inter relative overflow-hidden">
      {/* Decorative Top Left Leaf */}
      <div className="absolute left-0 top-0 pointer-events-none opacity-100 w-32 sm:w-40 md:w-52 lg:w-60 z-0">
        <img
          src={tleafImg.src}
          alt="Organic Leaf Top Left"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Decorative Bottom Right Foliage */}
      <div className="absolute -right-6 sm:-right-10 md:-right-14 bottom-0 pointer-events-none opacity-100 w-44 sm:w-64 md:w-80 lg:w-96 z-0">
        <img
          src={footerrightImg.src}
          alt="Organic Foliage Bottom Right"
          className="w-full h-auto object-contain"
        />
      </div>

      <SectionContainer className="relative z-10">
        {/* HEADER SECTION */}
        <div className="text-center mb-8 flex flex-col items-center justify-center">
          {/* Badge Sub-header */}
          <div className="inline-flex items-center gap-2 text-[#001810] font-poppins font-semibold text-base sm:text-lg md:text-xl uppercase tracking-widest mb-0.5">
            <span>WHAT CAN YOU SOURCE?</span>
          </div>

          {/* Sub-line Ecosystem */}
          <p className="font-poppins font-semibold text-base sm:text-lg md:text-xl text-[#1b5e20] tracking-wider uppercase mb-1.5">
            ONE EXPO • COMPLETE ECOSYSTEM
          </p>

          {/* Main Title */}
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-[28px] font-semibold text-[#001810] uppercase leading-[1.1] font-poppins relative inline-block mb-1.5">
            Explore <span className="text-[#1b5e20]">6</span> Major Industry Segments
          </h2>
        </div>

        {/* 6 CARDS IN 1 ROW ON DESKTOP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 w-full mb-3 sm:mb-4">
          {segments.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden text-center flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group relative border border-slate-100"
                style={{
                  boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                }}
              >
                {/* Upper Card Info Container */}
                <div className="pt-5 px-3 pb-3 flex flex-col items-center flex-grow">
                  {/* Direct Icon Image without div wrapper */}
                  <img
                    src={item.iconImg.src}
                    alt={item.title}
                    className="w-15 h-15 sm:w-18 sm:h-18 md:w-20 md:h-20 object-contain mb-2 mx-auto group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Segment Title */}
                  <h3 className="font-poppins font-semibold text-[13px] text-[#112a12] text-center mb-1.5 leading-snug min-h-[42px] flex items-center justify-center px-1 whitespace-pre-line">
                    {item.title}
                  </h3>

                  {/* Colored Horizontal Underline */}
                  <div
                    className="w-6 h-[2.5px] rounded-full mb-2"
                    style={{ backgroundColor: item.color }}
                  />

                  {/* Subline Items */}
                  <p className="font-inter font-semibold text-[13px] text-slate-800 text-center leading-tight mb-2 min-h-[34px] flex items-center justify-center px-1">
                    {item.items}
                  </p>
                </div>

                {/* Bottom Image Container */}
                <div className="w-full h-32 sm:h-36 relative overflow-hidden mt-auto border-t border-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA BUTTON WITH SPARKLES EFFECT */}
        <div className="flex items-center justify-center mt-2">
          <div className="relative inline-block">
            <Sparkle color="#285e19" shadow="rgba(40, 94, 25, 0.8)" style={{ top: "-10px", left: "10%", animationDelay: "0s" }} />
            <Sparkle color="#285e19" shadow="rgba(40, 94, 25, 0.8)" style={{ top: "-12px", left: "50%", animationDelay: "0.5s" }} />
            <Sparkle color="#285e19" shadow="rgba(40, 94, 25, 0.8)" style={{ top: "-10px", right: "10%", animationDelay: "1s" }} />

            <Link
              href="/exhibitors"
              className="inline-flex items-center gap-2 bg-[#112a12] hover:bg-[#285e19] text-white font-poppins font-medium text-xs sm:text-sm tracking-wider uppercase px-5 py-2.5 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative z-10"
            >
              <span>EXPLORE EXHIBITOR PROFILE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <style jsx>{`
            @keyframes sparkleAnim {
              0% {
                transform: scale(0) rotate(0deg);
                opacity: 0;
              }
              50% {
                transform: scale(1.3) rotate(90deg);
                opacity: 1;
              }
              100% {
                transform: scale(0) rotate(180deg);
                opacity: 0;
              }
            }
          `}</style>
        </div>
      </SectionContainer>
    </section>
  );
}
