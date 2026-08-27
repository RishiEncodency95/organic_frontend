"use client";

import React from "react";
import aboutBanner from "../../../assets/about/about1.webp";
import { Sprout, Users, Globe2, Heart, ArrowRight, Sun } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Sparkle component for button highlights
const Sparkle = ({ style, color = '#7ca142', shadow }: { style?: React.CSSProperties, color?: string, shadow?: string }) => (
  <span
    style={{
      position: 'absolute',
      pointerEvents: 'none',
      fontSize: '13px',
      color: color,
      textShadow: shadow ? `0 0 6px ${shadow}` : `0 0 6px ${color}, 0 0 12px ${color}`,
      animation: 'sparkleAnimHero 1.6s ease-in-out infinite',
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

const features = [
  { icon: Sprout, label: "Sustainable\nFuture" },
  { icon: Users, label: "Stronger\nCommunity" },
  { icon: Globe2, label: "Ethical\nPractices" },
  { icon: Heart, label: "Healthy\nLiving" },
];

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] flex items-center overflow-hidden bg-white border-b-4 border-[#ea580c]">
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
        .hero-shimmer-btn {
          position: relative;
          overflow: hidden;
        }
        .hero-shimmer-btn::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          animation: shimmerHero 2.5s infinite;
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
        @keyframes badgeGlowAndFloat {
          0% { transform: translateY(0px); box-shadow: 0 0 15px rgba(245,130,32,0.4); }
          50% { transform: translateY(-5px); box-shadow: 0 0 35px rgba(245,130,32,0.8); }
          100% { transform: translateY(0px); box-shadow: 0 0 15px rgba(245,130,32,0.4); }
        }
        .animate-badge-special {
          animation: badgeGlowAndFloat 3s ease-in-out infinite;
        }
      `}</style>
      {/* Background Image */}
      <Image
        src={aboutBanner}
        alt="Bharat Organic Expo 2027 exhibition and visitors"
        fill
        priority
        className="object-cover z-0"
        sizes="100vw"
      />


      {/* Content wrapper */}
      <div className="relative z-20 w-full px-4 md:px-14 h-full flex flex-col justify-center py-12 md:py-6">
        <div className="max-w-xl text-left mt-6 md:mt-0 space-y-3.5 md:space-y-4 w-full bg-white/75 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-4 sm:p-6 md:p-0 rounded-2xl border border-white/60 md:border-none shadow-lg md:shadow-none">

          {/* Tagline */}
          <div className="flex items-center justify-start gap-2.5 mb-1">
            <span className="w-8 h-[2.5px] bg-[#c2410c] shrink-0" />
            <p className="text-[#c2410c] text-[12px] md:text-[15px] lg:text-[16px] font-bold uppercase tracking-[0.18em] text-left">
              ABOUT US
            </p>
          </div>

          {/* Title */}
          <h1
            className="font-black leading-[1.05] mb-2 md:mb-4 text-left font-poppins"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
          >
            <div className="text-[#1b5e20] text-[28px] sm:text-[36px] md:text-[46px] lg:text-[56px] tracking-tight block font-semibold">
              BHARAT ORGANIC
            </div>
            <div className="text-[#ea580c] text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px] tracking-tight block font-semibold">
              EXPO 2027
            </div>
          </h1>

          {/* Subtitle */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 md:w-12 h-1 bg-[#ea580c] rounded-full shrink-0"></div>
            <span className="text-[#1b5e20] font-bold text-[12px] sm:text-[14px] md:text-[16px] tracking-widest uppercase">
              Our Mission & Vision
            </span>
            <div className="w-8 md:w-12 h-1 bg-[#ea580c] rounded-full shrink-0"></div>
          </div>

          {/* Description */}
          <p className="text-[#131730] font-bold text-[12.5px] sm:text-[13.5px] md:text-[15px] leading-relaxed max-w-lg mt-2 font-inter">
            Discover the driving force behind Bharat Organic Expo. We are committed to fostering sustainable practices, nurturing conscious communities, and elevating India's organic industry to global standards.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-2.5 mt-4 relative w-full font-inter">
            <div className="relative w-full sm:w-auto">
              <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-10px", left: "10%", animationDelay: "0.2s" }} />
              <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-12px", left: "50%", animationDelay: "0.6s" }} />
              <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-8px", right: "10%", animationDelay: "1s" }} />
              <Link
                href="/registration/visitor-registration"
                target="_blank"
                rel="noopener noreferrer"
                className="blue-btn-hero text-white px-5 py-2.5 rounded-full font-semibold text-[11px] md:text-[12px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md relative z-10 w-full sm:w-auto"
              >
                REGISTER AS A VISITOR <ArrowRight size={14} />
              </Link>
            </div>
            <div className="relative w-full sm:w-auto">
              <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-10px", left: "10%", animationDelay: "0s" }} />
              <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-12px", left: "50%", animationDelay: "0.4s" }} />
              <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-8px", right: "10%", animationDelay: "0.8s" }} />
              <Link
                href="/registration/book-a-stand"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-[11px] md:text-[12px] uppercase tracking-wider text-white transition-all active:scale-95 shadow-xl z-10 w-full sm:w-auto overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #ea580c, #c2410c)",
                  boxShadow: "0 4px 20px rgba(194,65,12,0.5), 0 0 12px rgba(249,115,22,0.3)",
                }}
              >
                <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                BOOK YOUR STALL <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
