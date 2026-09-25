"use client";

import React from "react";
import { Target } from "lucide-react";
import bandImg from "@/app/assets/image/band.png";
import vleafImg from "@/app/assets/icons/vleaf.png";
import nleafImg from "@/app/assets/icons/nleaf.png";
import bogImg from "@/app/assets/icons/bog.webp";
import SectionContainer from "@/app/components/layout/SectionContainer";

import v1og from "@/app/assets/icons/v1og.png";
import v2og from "@/app/assets/icons/v2og.png";
import v3og from "@/app/assets/icons/v3og.png";
import v4og from "@/app/assets/icons/v4og.png";
import v5og from "@/app/assets/icons/v5og.png";
import v6og from "@/app/assets/icons/v6og.png";

const DEFAULT_CARDS = [
  {
    num: "01",
    img: v1og.src,
    title: "Discover New Products",
    desc: "Explore a wide range of new launches, innovative products and emerging brands across multiple categories.",
  },
  {
    num: "02",
    img: v2og.src,
    title: "Meet Manufacturers",
    desc: "Connect directly with verified manufacturers, producers and suppliers from across India and beyond.",
  },
  {
    num: "03",
    img: v3og.src,
    title: "Source for Your Business",
    desc: "Find the right products for retail, distribution, e-commerce, hospitality, institutional procurement and more.",
  },
  {
    num: "04",
    img: v4og.src,
    title: "Explore Private Label",
    desc: "Meet brands and manufacturers offering OEM, contract manufacturing and private-label opportunities.",
  },
  {
    num: "05",
    img: v5og.src,
    title: "Build Partnerships",
    desc: "Explore dealership, distributorship, collaboration and long-term business partnership opportunities.",
  },
  {
    num: "06",
    img: v6og.src,
    title: "Understand Market Trends",
    desc: "Gain insights into market trends, consumer demand, industry innovations and future business opportunities.",
  },
];

export default function WhyVisitMatters({ sectionData }: { sectionData?: any }) {
  const ribbonImg = sectionData?.image || sectionData?.bandImg || bandImg.src;
  const ribbonAlt = sectionData?.imageAlt || "Business Opportunities Under One Roof";
  const title = sectionData?.title || "Why Your Visit Matters";
  const subline1 = sectionData?.subtitle || "Bharat Organic Expo brings the right products, suppliers and decision-makers together,";
  const subline2 = sectionData?.description || sectionData?.shortDescription || "creating real opportunities for your business growth.";
  const bannerTitle = sectionData?.lowerTitle || "One Visit. Multiple Opportunities.";
  const bannerDesc = sectionData?.lowerDescription || "Save time, meet the right people and take your business to the next level.";

  const cards = Array.isArray(sectionData?.items) && sectionData.items.length > 0
    ? sectionData.items.map((it: any, idx: number) => {
        const fallback = DEFAULT_CARDS[idx] || DEFAULT_CARDS[0];
        const rawImg = it.image || it.img || fallback.img;
        const imgSrc = typeof rawImg === "string" ? rawImg : rawImg?.src || fallback.img;
        return {
          num: it.num || `0${idx + 1}`,
          title: it.title || fallback.title,
          desc: it.description || it.desc || fallback.desc,
          img: imgSrc,
        };
      })
    : DEFAULT_CARDS;

  return (
    <section className="pt-1 md:pt-2 pb-3 sm:pb-4 bg-[#F6F8ED] font-inter relative overflow-hidden">
      {/* Decorative Top Right Corner Leaf (vleaf.png) */}
      <div className="absolute right-0 top-0 pointer-events-none opacity-90 w-36 sm:w-48 md:w-64 lg:w-[280px] z-0">
        <img
          src={vleafImg.src}
          alt="Organic Leaf Decoration Top Right"
          className="w-full h-auto object-contain translate-x-1/6 -translate-y-1/6"
        />
      </div>

      {/* Decorative Bottom Left Corner Leaf (nleaf.png) */}
      <div className="absolute left-0 bottom-0 sm:bottom-1 pointer-events-none opacity-90 w-36 sm:w-48 md:w-64 lg:w-[280px] z-0">
        <img
          src={nleafImg.src}
          alt="Organic Leaf Decoration Left"
          className="w-full h-auto object-contain -translate-x-1/6"
        />
      </div>

      {/* Decorative Bottom Right Corner Image (bog.png) */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-100 w-36 sm:w-48 md:w-64 lg:w-[300px] z-0">
        <img
          src={bogImg.src}
          alt="Organic Decoration Bottom Right"
          className="w-full h-auto object-contain translate-x-1/6 translate-y-1/6"
        />
      </div>

      <SectionContainer className="relative z-10">
        {/* HEADER */}
        <div className="text-center mb-8 flex flex-col items-center justify-center">
          {ribbonImg && (
            <img
              src={ribbonImg}
              alt={ribbonAlt}
              className="h-8 sm:h-9 md:h-10 w-auto object-contain mb-2.5"
            />
          )}

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#001810] uppercase leading-[1.1] font-poppins relative inline-block mb-1.5">
            {title}
          </h2>

          {/* Decorative Divider Line with Leaf */}
          <div className="flex items-center justify-center gap-2 mb-2 w-full max-w-[180px]">
            <div className="h-[1px] bg-[#1b5e20]/30 flex-1" />
            <span className="text-[10px] text-[#1b5e20]">🍃</span>
            <div className="h-[1px] bg-[#1b5e20]/30 flex-1" />
          </div>

          <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-inter">
            <span className="block font-medium">
              {subline1}
            </span>
            <span className="block font-semibold text-[#1b5e20] mt-0.5">
              {subline2}
            </span>
          </p>
        </div>

        {/* 6 CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-5 sm:mb-6 max-w-5xl mx-auto">
          {cards.map((card: any, i: number) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl text-center hover:shadow-md transition-shadow relative flex flex-col items-center"
              style={{ boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}
            >
              {/* Corner Number Ribbon Tag */}
              <span className="absolute top-0 left-0 bg-[#3b751e] text-white font-poppins font-bold text-sm sm:text-base px-4 py-1.5 rounded-tl-xl rounded-br-2xl shadow-sm">
                {card.num}
              </span>

              {/* Icon Image */}
              <span className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center mb-2 mt-0.5">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </span>

              {/* Card Title */}
              <h3 className="text-sm sm:text-base font-semibold text-[#1b5e20] mb-1.5 leading-tight font-poppins">
                {card.title}
              </h3>

              {/* Small Green Underline under Card Title */}
              <div className="w-6 h-[2px] bg-[#1b5e20] rounded-full mb-2.5" />

              {/* Card Description */}
              <p className="text-xs text-gray-900 font-medium leading-relaxed font-inter max-w-[270px]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM HIGHLIGHT BANNER */}
        <div className="bg-[#EBEFDE] border border-[#d2dbbc] rounded-2xl p-3.5 sm:p-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-start gap-3.5 sm:gap-4 relative overflow-hidden shadow-sm max-w-5xl mx-auto">
          <div className="w-11 h-11 rounded-full bg-white border border-[#3b751e]/30 text-[#3b751e] flex items-center justify-center shrink-0 shadow-sm">
            <Target className="w-6 h-6 text-[#3b751e]" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#1b5e20] font-poppins mb-0.5">
              {bannerTitle}
            </h3>
            <p className="text-xs sm:text-sm text-gray-800 font-medium font-inter">
              {bannerDesc}
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
