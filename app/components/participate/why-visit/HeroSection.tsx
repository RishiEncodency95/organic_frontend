"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, UserCheck, Users, Building2, Globe, Mic, Handshake } from "lucide-react";
import gsap from "gsap";
import { useInView, animate } from "framer-motion";

import visitBanner from "@/app/assets/banner/visitog.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

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
      animation: "sparkleAnim 1.6s ease-in-out infinite",
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

const StatCounter = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  if (!/^[\d,]+/.test(value)) return <span>{value}</span>;

  const numericValue = parseInt(value.replace(/,/g, "")) || 0;
  const suffix = value.replace(/[0-9,]/g, "");

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2.2,
        ease: "easeOut",
        onUpdate(v) {
          setDisplayValue(Math.floor(v));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue]);

  return <span ref={ref}>{displayValue.toLocaleString()}{suffix}</span>;
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  const bandRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dividerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const stats = [
    { icon: Users,     val: "8,000+", label: "VISITORS / DELEGATES" },
    { icon: Building2, val: "200+",   label: "EXHIBITORS" },
    { icon: Globe,     val: "1,000+", label: "GLOBAL BUYERS" },
    { icon: Mic,       val: "150+",   label: "EXPERT SPEAKERS" },
    { icon: Handshake, val: "B2B",    label: "MEETINGS" },
  ];

  itemRefs.current = [];
  dividerRefs.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Heading lines reveal
      tl.fromTo(
        line1Ref.current,
        { yPercent: 110, rotationX: 60, opacity: 0 },
        { yPercent: 0, rotationX: 0, opacity: 1, duration: 0.8, ease: "expo.out" },
        0.15
      ).fromTo(
        line2Ref.current,
        { yPercent: 110, rotationX: 60, opacity: 0 },
        { yPercent: 0, rotationX: 0, opacity: 1, duration: 0.8, ease: "expo.out" },
        0.3
      ).fromTo(
        line3Ref.current,
        { yPercent: 110, rotationX: 60, opacity: 0 },
        { yPercent: 0, rotationX: 0, opacity: 1, duration: 0.8, ease: "expo.out" },
        0.45
      );

      // Subtitle blur-fade in
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.85 },
        0.6
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

      // Stats Band wipe reveal
      tl.fromTo(
        bandRef.current,
        { opacity: 0, y: 20, clipPath: "inset(0% 100% 0% 0%)" },
        { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "power4.inOut" },
        1.1
      );

      // Shimmer sweep
      tl.fromTo(
        shimmerRef.current,
        { xPercent: -130, opacity: 0.8 },
        { xPercent: 230, opacity: 0, duration: 1.0, ease: "power1.inOut" },
        1.5
      );

      // Dividers grow
      tl.fromTo(
        dividerRefs.current.filter(Boolean),
        { scaleY: 0 },
        { scaleY: 1, duration: 0.4, stagger: 0.06, ease: "power2.out" },
        1.45
      );

      // Stat items 3D flip
      tl.fromTo(
        itemRefs.current.filter(Boolean),
        { opacity: 0, rotationX: -80, y: 20, transformOrigin: "top center" },
        { opacity: 1, rotationX: 0, y: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
        1.45
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

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

      {/* Hero Section Banner */}
      <section
        ref={sectionRef}
        className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] flex items-center overflow-hidden font-inter pt-3 md:pt-5 pb-6 md:pb-8 border-b-4 border-[#ea580c]"
      >
        {/* Background Image without overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${visitBanner.src})`,
            backgroundPosition: "center -35px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content - Nudged up slightly */}
        <SectionContainer className="relative z-10">
          <div className="max-w-2xl -translate-y-1 sm:-translate-y-2 md:-translate-y-3 ml-0 lg:ml-8 xl:ml-12">

            {/* Tagline */}
            <div className="flex items-center justify-start gap-2 mt-1.5 translate-y-0.5 mb-1">
              <span className="w-6 h-[2.5px] bg-[#1b5e20] shrink-0" />
              <p className="text-[#1b5e20] text-xs sm:text-sm font-bold uppercase tracking-widest text-left font-poppins">
                WHY VISIT BHARAT ORGANIC EXPO 2027
              </p>
            </div>

            {/* Heading - 3 separate stacked lines */}
            <h1
              className="font-semibold leading-[1.08] mb-3 font-poppins"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
            >
              <span className="block overflow-hidden mb-0.5">
                <span
                  ref={line1Ref}
                  style={{ opacity: 0, display: "block" }}
                  className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] text-[#001810] font-semibold"
                >
                  Source Better.
                </span>
              </span>

              <span className="block overflow-hidden mb-0.5">
                <span
                  ref={line2Ref}
                  style={{ opacity: 0, display: "block" }}
                  className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] text-[#001810] font-semibold"
                >
                  Connect Directly.
                </span>
              </span>

              <span className="block overflow-hidden">
                <span
                  ref={line3Ref}
                  style={{ opacity: 0, display: "block" }}
                  className="text-3xl sm:text-4xl md:text-[42px] lg:text-[48px] text-[#3b8c2a] font-semibold"
                >
                  Grow Your Business.
                </span>
              </span>
            </h1>

            {/* Description */}
            <p
              ref={subtitleRef}
              style={{ opacity: 0 }}
              className="text-black text-sm md:text-[15px] font-bold leading-relaxed max-w-lg mt-3 mb-4 font-inter"
            >
              Discover new products, meet manufacturers and suppliers, explore sourcing opportunities and build valuable business connections across India&apos;s growing organic, natural and sustainable ecosystem.
            </p>

            {/* Date & Venue */}
            <div
              ref={metaRef}
              style={{ opacity: 0 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-5 text-[#4B1426] text-sm md:text-[15px] font-bold font-inter"
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
              
              {/* Button 1: REGISTER AS A BUYER */}
              <div className="relative w-full sm:w-auto">
                <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-12px", left: "10%", animationDelay: "0.2s" }} />
                <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-15px", left: "50%", animationDelay: "0.6s" }} />
                <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-10px", right: "10%", animationDelay: "1s" }} />
                <Link
                  href="/registration/buyer-registration"
                  className="blue-btn-hero-exh text-white px-4 py-2 rounded-lg font-semibold text-[10px] uppercase tracking-widest flex items-center justify-start gap-2 transition-all active:scale-95 shadow-lg relative z-10 w-full sm:w-auto font-poppins"
                >
                  <UserCheck size={14} />
                  <span>REGISTER AS A BUYER</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Button 2: REGISTER AS A VISITOR */}
              <div className="relative w-full sm:w-auto">
                <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-12px", left: "10%", animationDelay: "0s" }} />
                <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-15px", left: "50%", animationDelay: "0.4s" }} />
                <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-10px", right: "10%", animationDelay: "0.8s" }} />
                <Link
                  href="/registration/visitor-registration"
                  className="group relative inline-flex items-center justify-start gap-2 px-4 py-2 rounded-lg font-semibold text-[10px] uppercase tracking-widest text-white transition-all active:scale-95 shadow-2xl z-10 w-full sm:w-auto overflow-hidden font-poppins"
                  style={{
                    background: "linear-gradient(135deg, #ea580c, #c2410c)",
                    boxShadow: "0 4px 20px rgba(194,65,12,0.5), 0 0 12px rgba(249,115,22,0.3)",
                  }}
                >
                  <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                  <Users size={14} />
                  <span>REGISTER AS A VISITOR</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>
        </SectionContainer>
      </section>

      {/* Stats Counter Band right after Hero Banner */}
      <div className="relative z-20 -mt-6 md:-mt-8 font-inter mb-6">
        <SectionContainer>
          <div
            ref={bandRef}
            style={{ opacity: 0, backgroundColor: "#1b5e20", boxShadow: "0 8px 20px -10px rgba(0,0,0,0.3)" }}
            className="rounded-2xl border border-white/10 py-2.5 px-3 md:py-3 md:px-5 relative overflow-hidden [perspective:1000px]"
          >
            {/* Shimmer overlay */}
            <div
              ref={shimmerRef}
              className="absolute inset-y-0 left-0 w-1/3 pointer-events-none"
              style={{ background: "linear-gradient(100deg, transparent, rgba(255,255,255,0.18), transparent)", opacity: 0 }}
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-nowrap items-center justify-center md:justify-between gap-y-3 gap-x-2 md:gap-0">
              {stats.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <React.Fragment key={i}>
                    <div
                      ref={(el) => { itemRefs.current[i] = el; }}
                      style={{ opacity: 0 }}
                      className="flex flex-col items-center text-center group flex-1 py-1"
                    >
                      <IconComponent className="w-4 h-4 md:w-5 md:h-5 mb-1 text-white stroke-[1.75]" />
                      <h4 className="text-[12px] sm:text-[14px] md:text-base font-semibold text-white leading-none font-inter mb-0.5">
                        <StatCounter value={item.val} />
                      </h4>
                      <p className="text-[8px] md:text-[9px] font-bold text-[#facc15] uppercase tracking-widest leading-tight mt-0.5 font-inter">
                        {item.label}
                      </p>
                    </div>
                    {i < stats.length - 1 && (
                      <div
                        ref={(el) => { dividerRefs.current[i] = el; }}
                        className="hidden md:block w-px h-6 bg-white/20"
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </SectionContainer>
      </div>
    </>
  );
}
