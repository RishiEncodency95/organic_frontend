"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import bgImage from "../../assets/banner/b2b2og.png";
import leafImg from "../../assets/icons/leafs.png";
import gsap from "gsap";

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

export default function HeroSection() {
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

      // Leaf — elastic pop-in + continuous float
      tl.fromTo(
        leafRef.current,
        { opacity: 0, scale: 0.3, rotate: -25, y: 40 },
        { opacity: 1, scale: 1, rotate: 0, y: 0, duration: 1.1, ease: "elastic.out(1, 0.55)" },
        0
      );

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

      // Continuous float on leaf
      gsap.to(leafRef.current, {
        y: "+=12",
        duration: 2.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.4,
      });
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
        className="relative flex items-center pt-3 md:pt-5 pb-4 md:pb-6 overflow-hidden min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] bg-[#fcfcf0] font-inter border-b-4 border-[#ea580c]"
      >
        {/* Background Image with Ken Burns zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={bgImage.src}
            alt="Buyer-Seller Meet"
            className="hero-bg-img w-full h-full object-cover"
          />
        </div>

        {/* Leaf */}
        <div
          ref={leafRef}
          className="absolute -left-5 lg:left-0 top-[5%] lg:top-[10%] z-10 hidden sm:block w-32 md:w-40 lg:w-[200px] pointer-events-none"
          style={{ opacity: 0 }}
        >
          <img
            src={leafImg.src}
            alt="Organic Leaf"
            className="w-full h-auto object-contain"
            style={{ filter: "drop-shadow(4px 10px 15px rgba(0,0,0,0.15))" }}
          />
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-20 py-1 md:py-2 [perspective:800px]">
          <div className="flex flex-col lg:flex-row items-center justify-start">
            <div className="w-full lg:w-[60%] xl:w-[50%] text-left shrink-0 ml-0 lg:ml-8 xl:ml-12">

              {/* Heading */}
              <h1
                className="text-4xl md:text-5xl lg:text-[68px] font-semibold leading-[1.05] mb-4 text-left font-poppins"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
              >
                <span className="block overflow-hidden">
                  <span ref={line1Ref} style={{ opacity: 0, display: "block" }} className="text-[#1b5e20] text-3xl md:text-4xl lg:text-[56px] font-semibold mb-1.5">
                    BUYER-SELLER
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span ref={line2Ref} style={{ opacity: 0, display: "block" }} className="text-[#4B1426] text-2xl sm:text-3xl md:text-[36px] lg:text-[56px] font-semibold tracking-tight whitespace-nowrap">
                    MEET 2027
                  </span>
                </span>
              </h1>

              {/* Subtitle */}
              <p
                ref={subtitleRef}
                style={{ opacity: 0 }}
                className="text-[#131730] text-sm md:text-base max-w-lg mb-5 font-bold leading-relaxed text-left"
              >
                Connect with the Right Businesses. Create Real Opportunities. A focused B2B networking platform at Bharat Organic Expo 2027.
              </p>

              {/* Date & Venue */}
              <div
                ref={metaRef}
                style={{ opacity: 0 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 text-[#4B1426] text-sm md:text-[15px] font-bold"
              >
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
              <div ref={btnsRef} className="flex flex-wrap items-center justify-start gap-3">
                <div className="relative w-full sm:w-auto">
                  <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-12px", left: "10%", animationDelay: "0.2s" }} />
                  <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-15px", left: "50%", animationDelay: "0.6s" }} />
                  <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-10px", right: "10%", animationDelay: "1s" }} />
                  <Link
                    href="/buyer-registration"
                    className="blue-btn-hero text-white px-4 py-2 rounded-lg font-semibold text-[10px] uppercase tracking-widest flex items-center justify-start gap-2 transition-all active:scale-95 shadow-lg relative z-10 w-full sm:w-auto"
                  >
                    REGISTER AS A BUYER <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="relative w-full sm:w-auto">
                  <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-12px", left: "10%", animationDelay: "0s" }} />
                  <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-15px", left: "50%", animationDelay: "0.4s" }} />
                  <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-10px", right: "10%", animationDelay: "0.8s" }} />
                  <Link
                    href="/book-a-stand"
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
          </div>
        </div>
      </section>
    </>
  );
}
