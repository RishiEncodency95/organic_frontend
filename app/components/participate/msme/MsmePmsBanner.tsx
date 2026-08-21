"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import bannerImg from "@/app/assets/participate/msme/home-banner.jpeg";
import leafImg from "@/app/assets/icons/leafs.png";
import gsap from "gsap";
import SectionContainer from "@/app/components/layout/SectionContainer";

interface MsmePmsBannerProps {
  eligibilityHref?: string;
  supportHref?: string;
}

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

export default function MsmePmsBanner({
  eligibilityHref = "#check-eligibility",
  supportHref = "#get-support",
}: MsmePmsBannerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const leafRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Heading lines — masked reveal with 3D tilt
      tl.fromTo(
        line1Ref.current,
        { yPercent: 110, rotationX: 60, opacity: 0 },
        { yPercent: 0, rotationX: 0, opacity: 1, duration: 0.9, ease: "expo.out" },
        0.15
      ).fromTo(
        line2Ref.current,
        { yPercent: 110, rotationX: 60, opacity: 0 },
        { yPercent: 0, rotationX: 0, opacity: 1, duration: 0.9, ease: "expo.out" },
        0.3
      );

      // Subtitle blur-fade in
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.85 },
        0.55
      );

      // Meta row
      tl.fromTo(
        metaRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.75
      );

      // Buttons stagger
      tl.fromTo(
        btnsRef.current ? Array.from(btnsRef.current.children) : [],
        { opacity: 0, y: 20, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.7)" },
        0.95
      );

    }, sectionRef);

    return () => ctx.revert();
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

      <section
        ref={sectionRef}
        className="relative flex items-center pt-3 md:pt-5 pb-4 md:pb-6 overflow-hidden min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] bg-[#f5f0e0] font-inter border-b-4 border-[#ea580c]"
      >
        {/* Background Image with Ken Burns zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={bannerImg.src}
            alt="MSME PMS Scheme"
            className="hero-bg-img w-full h-full object-cover"
          />
        </div>

        {/* Mobile-only gradient overlay for text readability (desktop remains untouched) */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white/95 via-white/85 to-transparent/30 md:hidden pointer-events-none" />

        {/* Leaf */}
        <div
          ref={leafRef}
          className="absolute -left-5 lg:left-0 top-[5%] lg:top-[10%] z-10 hidden sm:block w-32 md:w-40 lg:w-[200px] pointer-events-none"
          style={{ opacity: 1 }}
        >
          <img
            src={leafImg.src}
            alt="Organic Leaf"
            className="w-full h-auto object-contain"
            style={{ filter: "drop-shadow(4px 10px 15px rgba(0,0,0,0.15))" }}
          />
        </div>

        <SectionContainer className="relative z-20 py-1 md:py-2 [perspective:800px]">
          <div className="flex flex-col lg:flex-row items-center justify-start">
            <div className="w-full lg:w-[60%] xl:w-[50%] text-left shrink-0 ml-0 lg:ml-8 xl:ml-12">

              {/* Heading */}
              <h1
                className="text-2xl sm:text-4xl md:text-5xl lg:text-[68px] font-semibold leading-[1.05] mb-3 md:mb-4 text-left font-poppins"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
              >
                <span className="block overflow-hidden">
                  <span ref={line1Ref} style={{ opacity: 0, display: "block" }} className="text-[#4B1426] text-2xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold tracking-tight whitespace-nowrap">
                    MSME PMS <span className="capitalize">Scheme</span>
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span ref={line2Ref} style={{ opacity: 0, display: "block" }} className="text-[#1b5e20] text-2xl sm:text-4xl md:text-5xl lg:text-[64px] font-semibold mb-1 uppercase">
                    Exhibition Support
                  </span>
                </span>
              </h1>

              {/* Subtitle */}
              <p
                ref={subtitleRef}
                style={{ opacity: 0 }}
                className="text-black text-xs sm:text-sm md:text-base max-w-lg mb-4 md:mb-5 font-bold leading-relaxed text-left"
              >
                Eligible Micro & Small Enterprises can explore financial assistance
                for participation in <span className="text-emerald-900">Bharat Organic Expo 2027</span> under the applicable
                Procurement & Marketing Support (PMS) Scheme.
              </p>

              {/* Date & Venue */}
              <div
                ref={metaRef}
                style={{ opacity: 0 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 mb-5 md:mb-6 text-[#4B1426] text-xs sm:text-sm md:text-[15px] font-extrabold"
              >
                <div className="flex items-center gap-2">
                  <CalendarDays size={17} className="shrink-0 text-[#ea580c]" />
                  <span>19-21 February 2027</span>
                </div>
                <div className="hidden sm:block w-px h-5 bg-[#4B1426]/30"></div>
                <div className="flex items-center gap-2">
                  <MapPin size={17} className="shrink-0 text-[#ea580c]" />
                  <span>Hall 12, Bharat Mandapam, New Delhi</span>
                </div>
              </div>

              {/* Buttons */}
              <div ref={btnsRef} className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3">
                <div className="relative w-fit sm:w-auto">
                  <Sparkle color="#4ade80" shadow="#1b5e20" style={{ top: "-12px", left: "10%", animationDelay: "0.2s" }} />
                  <Sparkle color="#4ade80" shadow="#1b5e20" style={{ top: "-15px", left: "50%", animationDelay: "0.6s" }} />
                  <Sparkle color="#4ade80" shadow="#1b5e20" style={{ top: "-10px", right: "10%", animationDelay: "1s" }} />
                  <Link
                    href={eligibilityHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blue-btn-hero text-white px-4 py-2 rounded-lg font-semibold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg relative z-10 w-fit sm:w-auto"
                  >
                    CHECK PMS ELIGIBILITY <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="relative w-fit sm:w-auto">
                  <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-12px", left: "10%", animationDelay: "0s" }} />
                  <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-15px", left: "50%", animationDelay: "0.4s" }} />
                  <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-10px", right: "10%", animationDelay: "0.8s" }} />
                  <Link
                    href={supportHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold text-[10px] uppercase tracking-widest text-white transition-all active:scale-95 shadow-2xl z-10 w-fit sm:w-auto overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #ea580c, #c2410c)",
                      boxShadow: "0 4px 20px rgba(194,65,12,0.5), 0 0 12px rgba(249,115,22,0.3)",
                    }}
                  >
                    <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                    GET PMS SUPPORT <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
