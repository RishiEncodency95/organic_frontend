"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionContainer from "@/app/components/layout/SectionContainer";

import x1og from "@/app/assets/icons/x1og.png";
import x2og from "@/app/assets/icons/x2og.png";
import x3og from "@/app/assets/icons/x3og.png";
import x4og from "@/app/assets/icons/x4og.png";
import x5og from "@/app/assets/icons/x5og.png";
import x6og from "@/app/assets/icons/x6og.png";
import tleafImg from "@/app/assets/icons/tleaf.png";
import footerrightImg from "@/app/assets/icons/footerright.png";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:4000";

const LOCAL_ICONS = [x1og, x2og, x3og, x4og, x5og, x6og];

const SEGMENT_COLORS = [
  "#2d7a27",
  "#0f808c",
  "#5c821a",
  "#6b3b7a",
  "#0e7b8a",
  "#d96b18",
];

export interface SegmentItem {
  num?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  iconImage?: string;
  image?: string;
}

const STATIC_SEGMENTS: SegmentItem[] = [
  {
    num: "01",
    title: "Organic Food & Nutrition",
    subtitle: "Food • Beverages • Nutraceuticals",
    description: "Certified organic pulses, grains, superfoods, organic tea/coffee, cold-pressed oils & health supplements.",
    iconImage: "/uploads/icons/x1og.png",
    image: "/uploads/icons/x1.webp",
  },
  {
    num: "02",
    title: "AYUSH, Herbal & Wellness",
    subtitle: "Ayurveda • Herbal • Wellness",
    description: "Ayurvedic formulations, herbal extracts, essential oils, wellness teas & traditional remedies.",
    iconImage: "/uploads/icons/x2og.png",
    image: "/uploads/icons/x2.webp",
  },
  {
    num: "03",
    title: "Organic\nAgriculture",
    subtitle: "Farming • Seeds • Bio-Inputs",
    description: "Bio-fertilizers, organic pesticides, non-GMO seeds, farm machinery & organic soil enhancers.",
    iconImage: "/uploads/icons/x3og.png",
    image: "/uploads/icons/x3.webp",
  },
  {
    num: "04",
    title: "Natural Living & Personal Care",
    subtitle: "Beauty • Personal Care • Natural Lifestyle",
    description: "Organic cosmetics, natural skincare, sustainable apparel, eco-friendly home care & hygiene products.",
    iconImage: "/uploads/icons/x4og.png",
    image: "/uploads/icons/x4.webp",
  },
  {
    num: "05",
    title: "GreenTech & Sustainability",
    subtitle: "AgriTech • Packaging • Processing",
    description: "Biodegradable packaging, solar energy solutions, waste management & smart AgriTech innovations.",
    iconImage: "/uploads/icons/x5og.png",
    image: "/uploads/icons/x5.webp",
  },
  {
    num: "06",
    title: "Trade, Certification & Global Business",
    subtitle: "Certification • Export • Import • Business Services",
    description: "Organic certification bodies, export-import agencies, testing labs & B2B logistics services.",
    iconImage: "/uploads/icons/x6og.png",
    image: "/uploads/icons/x6.webp",
  },
];

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

function resolveImageSrc(imagePath: string): string {
  if (!imagePath) return "";
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) return imagePath;
  if (imagePath.startsWith("/")) return imagePath;
  return `/${imagePath}`;
}

interface IndustrySegmentsProps {
  sectionData?: {
    enabled?: boolean;
    eyebrow?: string;
    subtitle?: string;
    title?: string;
    buttonLabel?: string;
    buttonHref?: string;
    segments?: SegmentItem[] | null;
    items?: SegmentItem[] | null;
  };
}

export default function IndustrySegments({ sectionData }: IndustrySegmentsProps) {
  // Resolve segments from either sectionData.segments (API data) or sectionData.items (settings)
  const apiSegments: SegmentItem[] | null =
    (Array.isArray(sectionData?.segments) && sectionData!.segments!.length > 0
      ? sectionData!.segments
      : Array.isArray(sectionData?.items) && (sectionData!.items as SegmentItem[]).length > 0
      ? (sectionData!.items as SegmentItem[])
      : null);

  const displaySegments = (apiSegments || STATIC_SEGMENTS).slice(0, 6);

  const badge = sectionData?.eyebrow || "WHAT CAN YOU SOURCE?";
  const subline = sectionData?.subtitle || "ONE EXPO • COMPLETE ECOSYSTEM";
  const mainTitle = sectionData?.title || "Explore 6 Major Industry Segments";
  const ctaText = sectionData?.buttonLabel || "EXPLORE EXHIBITOR PROFILE";
  const ctaHref = sectionData?.buttonHref || "/exhibitors";

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
            <span>{badge}</span>
          </div>

          {/* Sub-line Ecosystem */}
          <p className="font-poppins font-semibold text-base sm:text-lg md:text-xl text-[#1b5e20] tracking-wider uppercase mb-1.5">
            {subline}
          </p>

          {/* Main Title */}
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-[28px] font-semibold text-[#001810] uppercase leading-[1.1] font-poppins relative inline-block mb-1.5">
            {mainTitle}
          </h2>
        </div>

        {/* 6 CARDS IN 1 ROW ON DESKTOP */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 w-full mb-3 sm:mb-4">
          {displaySegments.map((item, idx) => {
            const fallbackIcon = LOCAL_ICONS[idx % LOCAL_ICONS.length];
            const iconSrc = item.iconImage ? resolveImageSrc(item.iconImage) : fallbackIcon.src;
            const color = SEGMENT_COLORS[idx % SEGMENT_COLORS.length];
            const bgImageSrc = resolveImageSrc(item.image || "");
            const itemTitle = item.title || STATIC_SEGMENTS[idx]?.title || "";
            const itemSubtitle = item.subtitle || STATIC_SEGMENTS[idx]?.subtitle || "";

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
                  {/* Icon Image */}
                  <img
                    src={iconSrc}
                    alt={itemTitle}
                    className="w-15 h-15 sm:w-18 sm:h-18 md:w-20 md:h-20 object-contain mb-2 mx-auto group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Segment Title */}
                  <h3 className="font-poppins font-semibold text-[13px] text-[#112a12] text-center mb-1.5 leading-snug min-h-[42px] flex items-center justify-center px-1 whitespace-pre-line">
                    {itemTitle}
                  </h3>

                  {/* Colored Horizontal Underline */}
                  <div
                    className="w-6 h-[2.5px] rounded-full mb-2"
                    style={{ backgroundColor: color }}
                  />

                  {/* Subline Items */}
                  <p className="font-inter font-semibold text-[13px] text-slate-800 text-center leading-tight mb-2 min-h-[34px] flex items-center justify-center px-1">
                    {itemSubtitle}
                  </p>
                </div>

                {/* Bottom Image Container */}
                <div className="w-full h-32 sm:h-36 relative overflow-hidden mt-auto border-t border-slate-100">
                  {bgImageSrc ? (
                    <Image
                      src={bgImageSrc}
                      alt={itemTitle}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      unoptimized={bgImageSrc.startsWith("http") || bgImageSrc.startsWith("/uploads")}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <img
                        src={iconSrc}
                        alt={itemTitle}
                        className="w-16 h-16 object-contain opacity-30"
                      />
                    </div>
                  )}
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
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-[#112a12] hover:bg-[#285e19] text-white font-poppins font-medium text-xs sm:text-sm tracking-wider uppercase px-5 py-2.5 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative z-10"
            >
              <span>{ctaText}</span>
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
