"use client";

import React, { useEffect, useState } from "react";
import { CalendarDays, MapPin, ArrowRight, Award, Medal } from "lucide-react";
import bannerImg from "../../assets/awards/banner2.webp";
import SectionContainer from "@/app/components/layout/SectionContainer";

const Sparkle = ({ style, color = "#F2B40E", shadow }: { style?: React.CSSProperties; color?: string; shadow?: string }) => (
  <span
    style={{
      position: "absolute",
      pointerEvents: "none",
      fontSize: "13px",
      color,
      textShadow: shadow ? `0 0 6px ${shadow}` : undefined,
      animation: "sparkleAnim 1.6s ease-in-out infinite",
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

const AwardsHero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes sparkleAnim {
          0%   { opacity:0; transform:scale(0.5) translateY(0); }
          40%  { opacity:1; transform:scale(1.2) translateY(-4px); }
          80%  { opacity:0.5; transform:scale(0.9) translateY(-6px); }
          100% { opacity:0; transform:scale(0.5) translateY(-8px); }
        }
        @keyframes shimmerHero { 0% { left:-75%; } 100% { left:150%; } }
        @keyframes bgZoom {
          0%   { transform: scale(1.08); }
          100% { transform: scale(1.0); }
        }
        .hero-bg-img {
          animation: bgZoom 8s ease-out forwards;
          transform-origin: center center;
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

      <section className="relative flex items-center pt-3 md:pt-5 pb-4 md:pb-6 overflow-hidden h-[68vh] md:h-[72vh] lg:h-[78vh] min-h-[400px] bg-[#fcfcf0] font-inter border-b-4 border-[#ea580c]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={bannerImg.src}
            alt="Bharat Organic Excellence Awards 2027 Banner"
            className="hero-bg-img w-full h-full object-cover"
          />
        </div>

        <SectionContainer className="relative z-20 py-1 md:py-2">
          <div
            className={`max-w-2xl transition-all duration-700 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {/* Top Tagline */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-[3px] h-4.5 bg-[#0b3b18] inline-block rounded-xs" />
              <span className="text-[#0b3b18] text-xs sm:text-sm font-bold uppercase tracking-[0.18em]">
                BHARAT ORGANIC
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-4xl md:text-5xl lg:text-[68px] font-semibold leading-[1.02] mb-3 text-left font-poppins"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
            >
              <span className="block text-[#0b3b18] text-4xl sm:text-5xl md:text-[56px] lg:text-[66px] font-semibold tracking-tight uppercase mb-0.5">
                EXCELLENCE
              </span>
              <span className="block text-[#0b3b18] text-4xl sm:text-5xl md:text-[56px] lg:text-[66px] font-semibold tracking-tight uppercase">
                AWARDS 2027
              </span>
            </h1>

            {/* Subtitle / Key Highlights */}
            <p className="mb-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-[13.5px] font-bold uppercase tracking-wider text-[#0b3b18]">
              <span>Celebrating Excellence</span>
              <span className="text-[#ea580c] text-sm">•</span>
              <span>Innovation</span>
              <span className="text-[#ea580c] text-sm">•</span>
              <span>Sustainability</span>
            </p>

            {/* Description */}
            <p className="text-[#131730] font-medium text-xs sm:text-[13.5px] md:text-sm leading-relaxed max-w-lg mb-4">
              Honouring the changemakers, organisations and innovations driving India&apos;s organic, natural and sustainable future.
            </p>

            {/* Date & Venue */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-5 text-[#4B1426] text-xs sm:text-sm md:text-[14px] font-bold">
              <div className="flex items-center gap-2">
                <CalendarDays size={17} className="shrink-0 text-[#ea580c]" />
                <span>19 – 21 February 2027</span>
              </div>
              <div className="hidden sm:block w-px h-4.5 bg-[#4B1426]/30"></div>
              <div className="flex items-center gap-2">
                <MapPin size={17} className="shrink-0 text-[#ea580c]" />
                <span>Hall 12, Bharat Mandapam, New Delhi</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-start gap-3">
              <div className="relative w-full sm:w-auto">
                <Sparkle color="#4ade80" shadow="#1b5e20" style={{ top: "-12px", left: "10%", animationDelay: "0.2s" }} />
                <Sparkle color="#86efac" shadow="#16a34a" style={{ top: "-15px", left: "50%", animationDelay: "0.6s" }} />
                <Sparkle color="#4ade80" shadow="#1b5e20" style={{ top: "-10px", right: "10%", animationDelay: "1s" }} />
                <a
                  href="/awards/nominations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blue-btn-hero text-white px-4 py-2.5 rounded-full font-semibold text-[10px] md:text-[10.5px] uppercase tracking-widest flex items-center justify-start gap-2 transition-all active:scale-95 shadow-lg relative z-10 w-full sm:w-auto"
                >
                  <Award className="h-4 w-4 text-[#F2B40E]" />
                  NOMINATE NOW <ArrowRight size={14} />
                </a>
              </div>

              <div className="relative w-full sm:w-auto">
                <a
                  href="#categories"
                  className="group relative inline-flex items-center justify-start gap-2 px-4 py-2.5 rounded-full font-semibold text-[10px] md:text-[10.5px] uppercase tracking-widest text-[#0b3b18] bg-white/90 border border-[#0b3b18]/30 transition-all active:scale-95 shadow-sm z-10 w-full sm:w-auto hover:bg-[#0b3b18] hover:text-white"
                >
                  <Medal className="h-4 w-4" />
                  VIEW CATEGORIES <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        </SectionContainer>
      </section>
    </>
  );
};

export default AwardsHero;