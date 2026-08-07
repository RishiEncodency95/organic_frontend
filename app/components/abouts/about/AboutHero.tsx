"use client";

import React from "react";
import aboutBanner from "../../../assets/about/about1.png";
import { Sprout, Users, Globe2, Heart, ArrowRight, Sun } from "lucide-react";
import Link from "next/link";

// Sparkle component for button highlights
const Sparkle = ({ style, color = '#7ca142' }: { style?: React.CSSProperties, color?: string }) => (
  <span
    style={{
      position: 'absolute',
      pointerEvents: 'none',
      fontSize: '18px',
      color: color,
      textShadow: `0 0 6px ${color}, 0 0 12px ${color}`,
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
    <section className="relative w-full min-h-[400px] md:min-h-[555px] lg:min-h-[610px] flex items-center overflow-hidden bg-white">
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
        .hero-shimmer-btn-dark::before {
          background: linear-gradient(to right, transparent, rgba(43,88,37,0.15), transparent);
        }
      `}</style>
      {/* Background Image */}
      <img
        src={aboutBanner.src}
        alt="About Us Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Lightened dark gradient overlay so text is readable, just like home */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fcfcf0]/50 via-[#fcfcf0]/0 to-transparent z-10 pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-20 container mx-auto max-w-[1400px] px-6 h-full flex flex-col justify-center">
        <div className="max-w-xl text-left mt-16 md:mt-0 space-y-4 w-full max-w-2xl">

          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#F2B40E]/10 to-[#f58220]/10 backdrop-blur-md font-extrabold text-[10px] md:text-[13px] tracking-[0.2em] uppercase rounded-full mb-4 shadow-[0_0_20px_rgba(242,180,14,0.4)] border border-[#F2B40E]/40 w-max">
            <Sun className="w-4 h-4 text-[#f58220] animate-[spin_8s_linear_infinite]" fill="currentColor" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d97706] to-[#b45309]">ABOUT US</span>
          </div>

          {/* Title */}
          <h1 className="leading-[1.1] font-semibold uppercase pb-2">
            <div className="text-[#1f471b] text-3xl md:text-4xl lg:text-5xl xl:text-5xl tracking-tight pb-1">
              BHARAT ORGANIC
            </div>
            <div className="text-[#7ca142] text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
              EXPO 2027
            </div>
          </h1>

          {/* Subtitle */}
          <div className="flex items-center gap-3 ">
            <div className="w-12 h-1 bg-[#7ca142] rounded-full"></div>
            <span className="text-[#2b5825] font-bold text-sm md:text-base tracking-widest uppercase">
              Our Mission & Vision
            </span>
          </div>

          {/* Description */}
          <p className="text-[#4a4a4a] font-semibold text-[13px] md:text-[15px] leading-relaxed max-w-lg mt-4 border-l-2 border-[#7ca142]/30 pl-4">
            Learn about the core mission and visionary approach of the Bharat Organic Expo. We stand proudly as India's premier integrated platform, dedicated to uniting organic brands, sustainable farmers, visionary innovators, and conscious consumers under one roof.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 relative w-max">
            {/* Floating Sparkles around buttons - Multi-colored to match logo theme */}
            <Sparkle style={{ top: '-15px', left: '15%', animationDelay: '0s', color: '#F2B40E' }} />
            <Sparkle style={{ bottom: '-10px', left: '35%', animationDelay: '0.4s', color: '#3b8c2a' }} />
            <Sparkle style={{ top: '-5px', right: '45%', animationDelay: '0.8s', color: '#F6A003' }} />
            <Sparkle style={{ top: '-20px', right: '15%', animationDelay: '0.2s', color: '#7ca142' }} />
            <Sparkle style={{ bottom: '-5px', right: '5%', animationDelay: '0.6s', color: '#2b5825' }} />

            <Link
              href="/book-a-stand"
              className="hero-shimmer-btn bg-[#2b5825] hover:bg-[#1f471b] text-white px-6 py-3 rounded-md font-bold text-[12px] tracking-wider uppercase transition-all shadow-md hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
            >
              BOOK YOUR STALL
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/visitor-registration"
              className="hero-shimmer-btn hero-shimmer-btn-dark bg-white hover:bg-gray-50 text-[#2b5825] border border-[#2b5825] px-6 py-3 rounded-md font-bold text-[12px] tracking-wider uppercase transition-all shadow-sm hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
            >
              REGISTER AS BUYER
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;
