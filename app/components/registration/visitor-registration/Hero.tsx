"use client";
import React, { useRef, useEffect } from "react";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import bgImage from "../../../assets/banner/b2rrog.webp";
import footerLogo from "../../../assets/logos/footerlogo.png";
import gsap from "gsap";

const Sparkle = ({
  style,
  color = "#F2B40E",
  shadow,
}: {
  style?: React.CSSProperties;
  color?: string;
  shadow?: string;
}) => (
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

export default function VisitorRegistrationHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: -14, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7 },
        0
      );

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -16, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65 },
        0.1
      );

      tl.fromTo(
        line1Ref.current,
        { yPercent: 110, rotationX: 60, opacity: 0 },
        { yPercent: 0, rotationX: 0, opacity: 1, duration: 0.9, ease: "expo.out" },
        0.2
      ).fromTo(
        line2Ref.current,
        { yPercent: 110, rotationX: 60, opacity: 0 },
        { yPercent: 0, rotationX: 0, opacity: 1, duration: 0.9, ease: "expo.out" },
        0.35
      );

      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.85 },
        0.6
      );

      tl.fromTo(
        metaRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.8
      );

      tl.fromTo(
        pillsRef.current ? Array.from(pillsRef.current.children) : [],
        { opacity: 0, y: 14, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
        0.95
      );

      tl.fromTo(
        ctaRef.current ? Array.from(ctaRef.current.children) : [],
        { opacity: 0, y: 20, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.7)" },
        1.05
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
        @keyframes shimmerVisitor { 0% { left:-75%; } 100% { left:150%; } }
        @keyframes bgZoom {
          0%   { transform: scale(1.06); }
          100% { transform: scale(1.0); }
        }
        .visitor-hero-bg {
          animation: bgZoom 8s ease-out forwards;
          transform-origin: center center;
        }
        .visitor-register-btn {
          background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 40%, #0e3b1c 100%);
          background-size: 200% 200%;
          box-shadow: 0 0 18px 4px rgba(27,94,32,0.35), 0 4px 18px rgba(27,94,32,0.25);
          position: relative;
          overflow: hidden;
        }
        .visitor-register-btn::before {
          content: '';
          position: absolute;
          top: -50%; left: -75%;
          width: 50%; height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg);
          animation: shimmerVisitor 2.5s infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative flex items-center pt-3 md:pt-5 pb-4 md:pb-6 overflow-hidden h-[380px] sm:h-[420px] md:h-[450px] lg:h-[470px] bg-[#fcfcf0] font-inter border-b-4 border-[#ea580c]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={bgImage.src}
            alt="Register as a Visitor – Bharat Organic Expo"
            className="visitor-hero-bg w-full h-full object-cover object-left"
          />
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-20 pt-16 md:pt-20 pb-4 [perspective:800px]">
          <div className="flex flex-col lg:flex-row items-center justify-start">
            <div className="w-full lg:w-[65%] xl:w-[55%] text-left shrink-0 ml-0 lg:ml-4 xl:ml-6">

              <div ref={logoRef} style={{ opacity: 0 }} className="mb-4 flex items-center justify-start gap-4 w-full">
                <img
                  src={footerLogo.src}
                  alt="Bharat Organic Expo"
                  className="h-16 md:h-20 w-auto object-contain drop-shadow-md"
                />
                <div className="w-px h-14 bg-[#1b5e20]/40 shrink-0" />
                <div className="flex flex-col gap-1">
                  {["ORGANIC", "NATURAL", "SUSTAINABLE"].map((tag) => (
                    <div key={tag} className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-[#1b5e20] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-13 2 0 0-1 0-2 1 0 0 .5-1 3-2 0 0-4 1-6 8 0 0 2-1 6-1 0 0-2 2-2 7 0 0 4-5 12-6 0 0-1-4-3-3z" />
                      </svg>
                      <span className="text-[10px] md:text-xs font-bold text-[#1b5e20] tracking-widest uppercase">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-[68px] font-semibold leading-[1.05] mb-4 text-left font-poppins"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
              >
                <span className="block overflow-hidden">
                  <span
                    ref={line1Ref}
                    style={{ opacity: 0, display: "block" }}
                    className="text-[#1b5e20] text-3xl md:text-4xl lg:text-[56px] font-semibold mb-1.5"
                  >
                    REGISTER AS A
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span
                    ref={line2Ref}
                    style={{ opacity: 0, display: "block" }}
                    className="text-[#ea580c] text-3xl sm:text-4xl md:text-[44px] lg:text-[68px] font-semibold tracking-tight whitespace-nowrap"
                  >
                    VISITOR
                  </span>
                </span>
              </h1>

              <p
                ref={subtitleRef}
                style={{ opacity: 0 }}
                className="text-[#131730] text-sm md:text-base max-w-lg mb-5 font-bold leading-relaxed text-left"
              >
                Experience the best of organic and natural products.
              </p>

              <div
                ref={metaRef}
                style={{ opacity: 0 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-6 text-[#4B1426] text-sm md:text-[15px] font-bold"
              >
                <div className="flex items-center gap-2">
                  <CalendarDays size={18} className="shrink-0 text-[#ea580c]" />
                  <span>19 – 21 February 2027</span>
                </div>
                <div className="hidden sm:block w-px h-5 bg-[#4B1426]/30" />
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="shrink-0 text-[#ea580c]" />
                  <div className="flex flex-col leading-tight">
                    <span>Hall 12, Bharat Mandapam,</span>
                    <span>New Delhi, India</span>
                  </div>
                </div>
              </div>

              <div ref={ctaRef} className="flex flex-wrap items-center gap-3" style={{ opacity: 0 }}>
                <div className="relative">
                  <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-12px", left: "10%", animationDelay: "0.2s" }} />
                  <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-15px", left: "50%", animationDelay: "0.6s" }} />
                  <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-10px", right: "10%", animationDelay: "1s" }} />
                  <a
                    href="#select-category"
                    className="visitor-register-btn text-white px-6 py-3 rounded-xl font-bold text-[11px] uppercase tracking-widest flex items-center gap-2 transition-all active:scale-95 relative z-10"
                  >
                    REGISTER AS A VISITOR <ArrowRight size={15} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
