"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Leaf } from "lucide-react";
import bgImg from "../../assets/banner/exhog.webp";
import leafImg from "../../assets/icons/leafs.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

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

const ExhibitorsHero = () => {
  return (
    <>
      <style>{`
        @keyframes sparkleAnim {
          0%   { opacity: 0; transform: scale(0.5) translateY(0); }
          40%  { opacity: 1; transform: scale(1.2) translateY(-2px); }
          80%  { opacity: 0.6; transform: scale(0.9) translateY(-4px); }
          100% { opacity: 0; transform: scale(0.5) translateY(-6px); }
        }
        @keyframes shimmerHero {
          0%   { left: -75%; }
          100% { left: 150%; }
        }
        .blue-btn-hero-exh {
          background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 30%, #0e3b1c 60%, #1b5e20 100%);
          background-size: 200% 200%;
          box-shadow: 0 0 16px 4px rgba(27,94,32,0.3), 0 4px 15px rgba(27,94,32,0.25);
          position: relative;
          overflow: hidden;
        }
        .blue-btn-hero-exh::before {
          content: '';
          position: absolute;
          top: -50%; left: -75%;
          width: 50%; height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg);
          animation: shimmerHero 2.5s infinite;
        }
      `}</style>

      <section className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] flex items-center overflow-hidden font-inter pt-3 md:pt-5 pb-4 md:pb-6 border-b-4 border-[#ea580c]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${bgImg.src})`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Floating Leaf */}
        <div className="absolute -left-10 lg:-left-8 top-[10%] lg:top-[15%] z-10 hidden sm:block w-28 md:w-36 lg:w-[150px] pointer-events-none">
          <img src={leafImg.src} alt="Organic Leaf" className="w-full h-auto object-contain drop-shadow-lg" />
        </div>

        {/* Content */}
        <SectionContainer className="relative z-10">
          <div className="max-w-2xl -translate-y-2 md:-translate-y-4 lg:-translate-y-5">

            {/* Tagline Badge */}
            <div className="flex items-center justify-start gap-2.5 mb-2">
              <span className="w-8 h-[2.5px] bg-[#c2410c] shrink-0" />
              <p className="text-[#c2410c] text-[13px] md:text-[15px] lg:text-[16px] font-bold uppercase tracking-[0.18em] text-left">
                TRUSTED BY
              </p>
              <span className="w-8 h-[2.5px] bg-[#c2410c] shrink-0" />
            </div>

            {/* Heading */}
            <h1 className="font-semibold leading-[1.05] mb-4 font-poppins" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}>
              <span className="text-4xl md:text-5xl lg:text-[38px] text-[#001810] block mb-1">
                150+{" "}<span className="text-[#3b8c2a]">Leading</span>
              </span>
              <span className="text-3xl md:text-4xl lg:text-[38px] text-[#001810] block">
                Health &amp; Wellness Brands
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#131730] text-sm md:text-[15px] font-bold leading-relaxed max-w-lg mt-3 mb-4">
              India's most influential health, Ayurveda, fitness and wellness
              companies have chosen Bharat Organic Expo as the platform to showcase,
              connect and grow.
            </p>

            {/* Date & Venue */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-5 text-[#4B1426] text-sm md:text-[15px] font-bold">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} className="shrink-0 text-[#ea580c]" />
                <span>19-21 February 2027</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-[#4B1426]/30"></div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="shrink-0 text-[#ea580c]" />
                <span>Hall 12, Bharat Mandapam, New Delhi</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-start gap-3">
              <div className="relative w-full sm:w-auto">
                <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-12px", left: "10%", animationDelay: "0.2s" }} />
                <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-15px", left: "50%", animationDelay: "0.6s" }} />
                <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-10px", right: "10%", animationDelay: "1s" }} />
                <Link
                  href="/registration/buyer-registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blue-btn-hero-exh text-white px-4 py-2 rounded-lg font-semibold text-[10px] uppercase tracking-widest flex items-center justify-start gap-2 transition-all active:scale-95 shadow-lg relative z-10 w-full sm:w-auto"
                >
                  REGISTER AS A BUYER <ArrowRight size={14} />
                </Link>
              </div>
              <div className="relative w-full sm:w-auto">
                <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-12px", left: "10%", animationDelay: "0s" }} />
                <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-15px", left: "50%", animationDelay: "0.4s" }} />
                <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-10px", right: "10%", animationDelay: "0.8s" }} />
                <Link
                  href="/registration/book-a-stand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-start gap-2 px-4 py-2 rounded-lg font-semibold text-[10px] uppercase tracking-widest text-white transition-all active:scale-95 shadow-2xl z-10 w-full sm:w-auto overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #ea580c, #c2410c)",
                    boxShadow: "0 4px 20px rgba(194,65,12,0.5), 0 0 12px rgba(249,115,22,0.3)",
                  }}
                >
                  <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                  PARTICIPATE AS AN EXHIBITOR <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </SectionContainer>
      </section>
    </>
  );
};

export default ExhibitorsHero;