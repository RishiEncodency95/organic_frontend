"use client";
import React from "react";
import footerRight from "@/app/assets/icons/footerright.webp";
import SectionContainer from "@/app/components/layout/SectionContainer";

import og11 from "@/app/assets/icons/11og.webp";
import og12 from "@/app/assets/icons/12og.webp";
import og13 from "@/app/assets/icons/13og.webp";
import og14 from "@/app/assets/icons/14og.webp";
import og15 from "@/app/assets/icons/15og.webp";
import og16 from "@/app/assets/icons/i6.png";

const getImgSrc = (src: any): string => (typeof src === "string" ? src : src?.src || src);

const reasons = [
  {
    img: og11,
    title1: "GLOBAL",
    title2: "BUYER ACCESS",
    descLines: ["Meet thousands of", "qualified buyers, importers,", "distributors and decision-", "makers from around the world."],
    points: ["Access new global markets", "Connect with key buyers", "Increase international reach"],
  },
  {
    img: og12,
    title1: "MAXIMUM BRAND",
    title2: "VISIBILITY",
    descLines: ["Showcase your brand to a", "highly targeted audience", "and stand out in the", "competitive market."],
    points: ["High brand recall", "Media & PR exposure", "Digital promotions"],
  },
  {
    img: og13,
    title1: "EXPAND YOUR",
    title2: "NETWORK",
    descLines: ["Build valuable connections", "with industry leaders,", "partners and potential", "collaborators."],
    points: ["New partnerships", "Business alliances", "Long-term relationships"],
  },
  {
    img: og14,
    title1: "LAUNCH & SHOWCASE",
    title2: "INNOVATIONS",
    descLines: ["Introduce new organic products,", "technologies and solutions", "to the right audience."],
    points: ["Product launches", "Live demonstrations", "Market validation"],
  },
  {
    img: og15,
    title1: "B2B MATCHMAKING",
    title2: "& MEETINGS",
    descLines: ["Pre-scheduled B2B", "meetings to generate", "quality leads and", "new business."],
    points: ["One-to-one meetings", "Targeted matchmaking", "Better conversions"],
  },
  {
    img: og16,
    title1: "BOOST SALES &",
    title2: "BUSINESS GROWTH",
    descLines: ["Explore new markets,", "increase exports and", "drive long-term", "business growth."],
    points: ["Increase revenue", "Expand customer base", "Sustainable growth"],
  },
];

const ReasonsSection = () => (
  <section className="mt-4 pt-4 pb-4 relative overflow-hidden" style={{ backgroundColor: "#fbf8f3" }}>
    {/* Decorative right image */}
    <img
      loading="lazy"
      decoding="async"
      src={getImgSrc(footerRight)}
      alt=""
      aria-hidden="true"
      className="absolute right-0 top-1/2 -translate-y-1/2 w-36 md:w-48 lg:w-60 h-auto object-contain pointer-events-none select-none opacity-100"
      style={{ zIndex: 0 }}
    />
    <SectionContainer className="relative" style={{ zIndex: 1 }}>
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-12 h-[2px] bg-[#1b5e20]" />
          <span className="text-[#0c0c3e] font-semibold text-lg md:text-xl uppercase tracking-[0.1em] font-inter">
            Top Reasons to Exhibit at Organic Expo 2027
          </span>
          <span className="w-12 h-[2px] bg-[#1b5e20]" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
        {reasons.map((reason, i) => (
          <div
            key={i}
            className="bg-white p-3 md:p-5 rounded-2xl border border-transparent flex flex-col items-center text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" }}
          >
            {/* Direct Image Icon without container div */}
            <img
              loading="lazy"
              decoding="async"
              src={getImgSrc(reason.img)}
              alt={reason.title1}
              className="mb-2 h-10 md:h-14 w-auto object-contain transition-transform group-hover:scale-110 flex-shrink-0"
            />

            <h3 className="text-[10px] md:text-[12px] font-semibold text-[#1b5e20] mb-2 tracking-tight leading-tight uppercase min-h-[32px] md:min-h-[40px] flex flex-col items-center justify-center font-poppins">
              <span>{reason.title1}</span>
              <span>{reason.title2}</span>
            </h3>

            <div className="text-slate-900 text-[8px] md:text-[10px] leading-tight mb-3 font-bold flex-1 flex flex-col items-center justify-center font-inter">
              {reason.descLines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>

            <ul className="space-y-1 w-full text-left border-t border-slate-100 pt-3 mt-auto">
              {reason.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-[8px] md:text-[9px] font-bold text-slate-700 font-inter">
                  <span className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionContainer>
  </section>
);

export default ReasonsSection;
