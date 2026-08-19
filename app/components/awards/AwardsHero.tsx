"use client";

import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import Image from "next/image";
import { Calendar, MapPin, ArrowRight, Award, Medal } from "lucide-react";
import bannerImg from "../../assets/awards/banner2.webp";
=======
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
>>>>>>> 467be4d3e8a1afbeebaa621db28932406bf79535

const AwardsHero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
<<<<<<< HEAD
    <section className="relative flex w-full items-center overflow-hidden bg-white min-h-[510px] sm:min-h-[430px] md:min-h-[490px] lg:min-h-[530px]">
      <div
        className={`absolute inset-0 z-0 transition-all duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"
        }`}
      >
        <Image
          src={bannerImg}
          alt="Bharat Organic Excellence Awards 2027 Banner"
          fill
          sizes="100vw"
          priority
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative z-20 container mx-auto max-w-[1400px] px-6 py-6 sm:py-8 md:py-10">
        <div
          className={`max-w-xl will-change-transform transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mounted
              ? "opacity-100 [transform:perspective(1200px)_translateZ(0)_rotateY(0deg)_rotateX(0deg)]"
              : "opacity-0 [transform:perspective(1200px)_translateZ(-140px)_rotateY(-10deg)_rotateX(4deg)]"
          }`}
        >
          <h1 className="text-[38px] font-black uppercase leading-[1.05] tracking-tight text-[#0b2912] sm:text-[46px] md:text-[56px] lg:text-[64px]">
            <span className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]">Bharat Organic</span>
            <br />
            Excellence
            <br />
            <span className="text-[#F2B40E]">Awards 2027</span>
          </h1>

          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-bold uppercase tracking-wider text-[#0b2912] sm:text-base">
            <span>Celebrating Excellence</span>
            <span className="h-2 w-2 rounded-full bg-[#F2B40E]" />
            <span>Innovation</span>
            <span className="h-2 w-2 rounded-full bg-[#F2B40E]" />
            <span>Sustainability</span>
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="/awards/nominations"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-[#0b2912] px-6 py-3 text-base font-bold uppercase tracking-wider text-white shadow-lg ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123d1c] hover:shadow-xl"
            >
              <Award className="h-4 w-4 text-[#F2B40E]" />
              Nominate Now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#categories"
              className="group inline-flex items-center gap-2.5 rounded-lg border-2 border-[#0b2912] bg-white px-6 py-2.5 text-base font-bold uppercase tracking-wider text-[#0b2912] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f0f7f0] hover:shadow-xl"
            >
              <Medal className="h-4 w-4 text-[#0b2912]" />
              View Categories
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4 text-base text-[#0b2912] sm:gap-x-8">
            <span className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#0b2912] bg-white">
                <Calendar className="h-5 w-5 text-[#F2B40E]" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-lg font-bold">19 – 21</span>
                <span className="uppercase tracking-wider">February 2027</span>
              </span>
            </span>
            <span className="hidden h-10 w-px bg-[#0b2912]/20 sm:block" />
            <span className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#0b2912] bg-white">
                <MapPin className="h-5 w-5 text-[#F2B40E]" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-bold">Hall 12, Bharat Mandapam</span>
                <span className="uppercase tracking-wider">New Delhi, India</span>
              </span>
            </span>
          </div>
=======
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

      <section className="relative flex items-center pt-3 md:pt-5 pb-4 md:pb-6 overflow-hidden min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] bg-[#fcfcf0] font-inter border-b-4 border-[#ea580c]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={bannerImg.src}
            alt="Bharat Organic Excellence Awards 2027 Banner"
            className="hero-bg-img w-full h-full object-cover"
          />
>>>>>>> 467be4d3e8a1afbeebaa621db28932406bf79535
        </div>

        <SectionContainer className="relative z-20 py-1 md:py-2">
          <div
            className={`max-w-2xl transition-all duration-700 ease-out pl-3 md:pl-10 lg:pl-14 ${
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