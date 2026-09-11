"use client";

import React from "react";
import Link from "next/link";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import bannerImg from "../../assets/conference/banner.webp";

// Sparkle component for button highlights matching other hero sections
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
      animation: "sparkleAnimHero 1.6s ease-in-out infinite",
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

const ParticipateHero = () => {
  return (
    <section className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[480px] flex items-center overflow-hidden font-inter pt-3 md:pt-5 pb-4 md:pb-6 border-b-4 border-[#ea580c] bg-[#002411]">
      <style>{`
        @keyframes sparkleAnimHero {
          0%   { opacity: 0; transform: scale(0.5) translateY(0); }
          40%  { opacity: 1; transform: scale(1.2) translateY(-2px); }
          80%  { opacity: 0.6; transform: scale(0.9) translateY(-4px); }
          100% { opacity: 0; transform: scale(0.5) translateY(-6px); }
        }
        @keyframes shimmerHero {
          0%   { left: -75%; }
          100% { left: 150%; }
        }
        .blue-btn-hero {
          background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 30%, #0e3b1c 60%, #1b5e20 100%);
          background-size: 200% 200%;
          box-shadow: 0 0 16px 4px rgba(27,94,32,0.3), 0 4px 15px rgba(27,94,32,0.25);
          position: relative;
          overflow: hidden;
        }
        .blue-btn-hero::before {
          content: '';
          position: absolute;
          top: -50%; left: -75%;
          width: 50%; height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg);
          animation: shimmerHero 2.5s infinite;
        }
      `}</style>

      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0 w-full overflow-hidden pointer-events-none">
        <img
          src={bannerImg.src}
          alt="Bharat Organic Expo Buyer-Seller Meet 2027"
          className="w-full h-full object-cover object-right md:object-right lg:object-center"
        />
        {/* Soft overlay on mobile only for perfect readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002411] via-[#002411]/85 to-transparent md:hidden" />
      </div>

      {/* Content Container aligned with Navbar */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-14 lg:px-14 py-4 md:py-6 lg:py-8">
        <div className="max-w-xl lg:max-w-2xl text-left">

          {/* Orange Line & Tagline */}
          <div className="flex items-center justify-start gap-2.5 mb-3 sm:mb-4">
            <span className="w-8 h-[2.5px] bg-[#ea580c] shrink-0" />
            <p className="text-[#ea580c] text-[12px] sm:text-[13px] md:text-[14px] font-bold uppercase tracking-[0.18em] text-left">
              BUYER–SELLER MEET 2027
            </p>
            <span className="w-8 h-[2.5px] bg-[#ea580c] shrink-0" />
          </div>

          {/* Main Titles */}
          <h1
            className="font-poppins uppercase tracking-tight leading-[1.1] mb-3.5 sm:mb-4 text-left font-semibold text-[22px] sm:text-[36px] md:text-[40px] lg:text-[44px]"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}
          >
            <span className="text-white">WHO CAN </span>
            <span className="text-[#5bb318] font-bold">PARTICIPATE</span>
          </h1>

          {/* Mission / Subtitle strip */}
          <div className="flex items-center gap-3 mb-3.5 sm:mb-4">
            <div className="w-10 h-1 bg-[#ea580c] rounded-full shrink-0" />
            <span className="text-[#a3e635] font-bold text-[12px] sm:text-[13px] md:text-[14px] tracking-wider uppercase whitespace-nowrap">
              Connect. Collaborate. Grow Together.
            </span>
            <div className="w-10 h-1 bg-[#ea580c] rounded-full shrink-0" />
          </div>

          {/* Description */}
          <p className="text-white/90 text-[13px] sm:text-[14px] md:text-[15px] font-medium leading-relaxed max-w-lg mb-5 sm:mb-6">
            The Buyer–Seller Meet at Bharat Organic Expo 2027 brings together
            serious buyers and quality suppliers from across the organic,
            natural and sustainable industry ecosystem to create meaningful
            business opportunities.
          </p>

          {/* Date & Location Meta Row */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-8 mb-6 sm:mb-7 text-white">
            <div className="flex items-center gap-2.5">
              <CalendarDays size={18} className="shrink-0 text-[#ea580c]" />
              <span className="text-xs sm:text-[13.5px] font-bold">19–21 February 2027</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-white/30" />
            <div className="flex items-center gap-2.5">
              <MapPin size={18} className="shrink-0 text-[#ea580c]" />
              <span className="text-xs sm:text-[13.5px] font-bold">Hall 12, Bharat Mandapam, New Delhi</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-start gap-3.5 sm:gap-4 relative pt-1">
            {/* Button 1: Register as Buyer */}
            <div className="relative w-full sm:w-auto">
              <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-10px", left: "10%", animationDelay: "0.2s" }} />
              <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-12px", left: "50%", animationDelay: "0.6s" }} />
              <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-8px", right: "10%", animationDelay: "1s" }} />
              <Link
                href="/registration/buyer-registration"
                target="_blank"
                rel="noopener noreferrer"
                className="blue-btn-hero text-white px-5 py-2.5 rounded-lg font-semibold text-[10px] sm:text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md relative z-10 w-full sm:w-auto"
              >
                REGISTER AS A BUYER <ArrowRight size={13} />
              </Link>
            </div>

            {/* Button 2: Book Your Stall / Participate */}
            <div className="relative w-full sm:w-auto">
              <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-10px", left: "10%", animationDelay: "0s" }} />
              <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-12px", left: "50%", animationDelay: "0.4s" }} />
              <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-8px", right: "10%", animationDelay: "0.8s" }} />
              <Link
                href="/registration/book-a-stand"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-[10px] sm:text-[11px] uppercase tracking-wider text-white transition-all active:scale-95 shadow-xl z-10 w-full sm:w-auto overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #ea580c, #c2410c)",
                  boxShadow: "0 4px 20px rgba(194,65,12,0.5), 0 0 12px rgba(249,115,22,0.3)",
                }}
              >
                <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                BOOK YOUR STALL <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ParticipateHero;
