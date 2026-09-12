"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Download, Calendar, MapPin } from "lucide-react";
import exhibitBg from "@/app/assets/banner/exhibitog.webp";

import x1 from "@/app/assets/icons/x1.png";
import x2 from "@/app/assets/icons/x2.png";
import x3 from "@/app/assets/icons/x3.png";
import x4 from "@/app/assets/icons/x4.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

const getImgSrc = (src: any): string => (typeof src === "string" ? src : src.src);

// Mock API response / JSON array of objects
const HERO_SECTION_DATA = [
  {
    id: "why-exhibit-hero-1",
    tagline: "INDIA'S PREMIER ORGANIC & WELLNESS EVENT",
    titlePrefix: "CONNECT. COLLABORATE.",
    titleHighlight: "CULTIVATE A HEALTHIER TOMORROW.",
    description:
      "Bharat Organic Expo brings together global innovators, brands, buyers & experts to promote sustainable living and natural well-being.",
    bgImage: getImgSrc(exhibitBg),
    highlights: [
      { id: "h1", main: "Global", sub: "Exposure", img: getImgSrc(x1) },
      { id: "h2", main: "Quality", sub: "Connections", img: getImgSrc(x2) },
      { id: "h3", main: "Business", sub: "Growth", img: getImgSrc(x3) },
      { id: "h4", main: "Brand", sub: "Visibility", img: getImgSrc(x4) },
    ],
    buttons: [
      {
        id: "book-stall",
        label: "Book Your Stall",
        href: "/registration/book-a-stand",
        variant: "orange",
        sparkles: [
          { color: "#f97316", shadow: "#c2410c", style: { top: "-12px", left: "10%", animationDelay: "0s" } },
          { color: "#f97316", shadow: "#c2410c", style: { top: "-15px", left: "50%", animationDelay: "0.4s" } },
          { color: "#f97316", shadow: "#c2410c", style: { top: "-10px", right: "10%", animationDelay: "0.8s" } },
        ],
      },
      {
        id: "download-brochure",
        label: "Download Brochure",
        href: "/download/invited card.pdf",
        variant: "blue",
        sparkles: [
          { color: "#3b82f6", shadow: "#28396C", style: { top: "-12px", left: "10%", animationDelay: "0.2s" } },
          { color: "#3b82f6", shadow: "#28396C", style: { top: "-15px", left: "50%", animationDelay: "0.6s" } },
          { color: "#3b82f6", shadow: "#28396C", style: { top: "-10px", right: "10%", animationDelay: "1s" } },
        ],
      },
    ],
    eventCard: {
      dateRange: "19 – 21",
      monthYear: "FEBRUARY 2027",
      locationTitle: "BHARAT MANDAPAM,",
      locationSub: "NEW DELHI, INDIA",
      quoteLines: [
        { text: "A Global Convergence", color: "#1b5e20" },
        { text: "of Organic Trade &", color: "#4B1426" },
        { text: "Sustainable Business", color: "#1b5e20" },
      ],
    },
  },
];

const Sparkle = ({ style, color = "#ffdd00", shadow = "#ffa500" }: { style?: React.CSSProperties; color?: string; shadow?: string }) => (
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

const HeroSection = () => (
  <section className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] flex items-center overflow-hidden font-inter pt-3 md:pt-5 pb-4 md:pb-6 border-b-4 border-[#ea580c]">
    {HERO_SECTION_DATA.map((hero) => (
      <React.Fragment key={hero.id}>
        {/* BG Image */}
        <div className="absolute inset-0 z-0 w-full overflow-hidden pointer-events-none">
          <img
            loading="lazy"
            decoding="async"
            src={hero.bgImage}
            alt="Exhibit BG"
            className="w-full h-full object-cover object-center max-w-full"
          />
          <div className="absolute inset-0 bg-white/75 lg:bg-transparent" />
        </div>

        {/* Max Width Container aligned with Navbar */}
        <SectionContainer className="relative z-10 py-1 md:py-2">
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8">
            {/* Left Content Column */}
            <div className="w-full lg:w-[50%] xl:w-[46%] text-left shrink-0">
              {/* Green Line & Tagline */}
              <div className="flex items-center justify-start gap-2.5 mb-2">
                <span className="w-8 h-[2.5px] bg-[#c2410c] shrink-0" />
                <p className="text-[#c2410c] text-[13px] md:text-[15px] lg:text-[16px] font-bold uppercase tracking-[0.18em] text-left">
                  {hero.tagline}
                </p>
                <span className="w-8 h-[2.5px] bg-[#c2410c] shrink-0" />
              </div>

              {/* Main Titles */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.1] mb-2 text-left font-poppins">
                <span className="text-[#1b5e20] text-xl md:text-[26px] lg:text-[32px] block mb-0.5">{hero.titlePrefix}</span>
                <span className="text-[#4B1426] text-lg sm:text-[22px] md:text-[26px] lg:text-[30px] block font-semibold tracking-tight whitespace-nowrap">
                  {hero.titleHighlight}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-[#131730] text-[13px] md:text-[15px] lg:text-[16px] max-w-lg mb-4 font-semibold leading-relaxed text-left">
                {hero.description}
              </p>

              {/* Feature Highlights with Icons */}
              <div className="flex flex-wrap items-center justify-start gap-2.5 md:gap-3 mb-5">
                {hero.highlights.map((item, i, arr) => (
                  <React.Fragment key={item.id}>
                    <div className="flex items-center gap-1.5">
                      <img
                        loading="lazy"
                        decoding="async"
                        src={item.img}
                        alt={item.main}
                        className="w-7 md:w-8 lg:w-9 h-auto shrink-0"
                      />
                      <div className="flex flex-col text-left">
                        <span className="text-[11px] md:text-[12px] lg:text-[13px] font-black text-[#1b5e20] uppercase leading-none">
                          {item.main}
                        </span>
                        <span className="text-[11px] md:text-[12px] lg:text-[13px] font-bold text-[#4B1426] uppercase tracking-tighter mt-0.5">
                          {item.sub}
                        </span>
                      </div>
                    </div>
                    {i < arr.length - 1 && <div className="h-6 w-[1px] bg-slate-300/50 hidden sm:block mx-0.5" />}
                  </React.Fragment>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-start gap-3">
                {hero.buttons.map((btn) => (
                  <div key={btn.id} className="relative w-full sm:w-auto">
                    {btn.sparkles.map((sp, sIdx) => (
                      <Sparkle key={sIdx} color={sp.color} shadow={sp.shadow} style={sp.style} />
                    ))}
                    {btn.variant === "orange" ? (
                      <Link
                        href={btn.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-start gap-2 px-5 py-2.5 rounded-lg font-black text-[11px] uppercase tracking-widest text-white transition-all active:scale-95 shadow-2xl relative z-10 w-full sm:w-auto overflow-hidden"
                        style={{
                          background: "linear-gradient(135deg, #ea580c, #c2410c)",
                          boxShadow: "0 4px 20px rgba(194,65,12,0.5), 0 0 12px rgba(249,115,22,0.3)",
                        }}
                      >
                        <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                        {btn.label} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ) : (
                      <a
                        href={btn.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="blue-btn-hero text-white px-5 py-2.5 rounded-lg font-black text-[11px] uppercase tracking-widest flex items-center justify-start gap-2 transition-all active:scale-95 shadow-lg relative z-10 w-full sm:w-auto"
                      >
                        {btn.label} <Download size={14} />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Info Card */}
            <div className="w-fit sm:w-[170px] lg:w-[165px]">
              <div className="bg-white/80 backdrop-blur-md px-3.5 py-3 lg:py-3.5 rounded-xl shadow-xl border border-white/60 flex flex-col gap-2 lg:gap-2.5 w-full">
                {/* Date */}
                <div className="flex items-center lg:items-start gap-2">
                  <Calendar className="text-[#4B1426] shrink-0" size={20} strokeWidth={1.5} />
                  <div className="flex flex-col text-left">
                    <h3 className="text-base md:text-lg font-bold text-[#4B1426] leading-none m-0 p-0">
                      {hero.eventCard.dateRange}
                    </h3>
                    <span className="text-[9px] font-semibold text-[#4B1426] uppercase tracking-wide mt-0.5 m-0 p-0">
                      {hero.eventCard.monthYear}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center lg:items-start gap-2">
                  <MapPin className="text-[#4B1426] shrink-0" size={20} strokeWidth={1.5} />
                  <div className="flex flex-col text-left">
                    <h3 className="text-[10px] font-bold text-[#1b5e20] leading-tight uppercase m-0 p-0">
                      {hero.eventCard.locationTitle}
                    </h3>
                    <span className="text-[9px] font-semibold text-[#1b5e20] uppercase tracking-tight m-0 p-0">
                      {hero.eventCard.locationSub}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-slate-200/80" />

                {/* Quote */}
                <div className="text-left lg:text-center flex flex-col gap-0.5 m-0 p-0">
                  {hero.eventCard.quoteLines.map((line, qIdx) => (
                    <span
                      key={qIdx}
                      className="font-semibold text-[9.5px] leading-tight m-0 p-0"
                      style={{ color: line.color }}
                    >
                      {line.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </React.Fragment>
    ))}
  </section>
);

export default HeroSection;