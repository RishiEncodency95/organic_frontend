"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Users, Store, UserCheck, Globe, Calendar, MapPin, Briefcase } from "lucide-react";
import bgImg from "../../../assets/banner/partog.png";
import gsap from "gsap";

const AnimatedCounter = ({ value }: { value: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  const isUnlimited = value === "UNLIMITED" || value === "B2B";
  const numMatch = value.match(/[\d,]+/);
  const targetNumber = numMatch ? parseInt(numMatch[0].replace(/,/g, ""), 10) : 0;
  const suffix = value.replace(/[\d,]+/, "");

  useEffect(() => {
    if (isUnlimited || !targetNumber) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000;
          const incrementTime = 30;
          const totalSteps = duration / incrementTime;
          const step = targetNumber / totalSteps;
          
          const timer = setInterval(() => {
            start += step;
            if (start >= targetNumber) {
              setCount(targetNumber);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, incrementTime);
          
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [targetNumber, isUnlimited]);

  if (isUnlimited || !targetNumber) {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLHeadingElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dividerRefs = useRef<(HTMLDivElement | null)[]>([]);
  itemRefs.current = [];
  dividerRefs.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Badge fade in
      tl.fromTo(badgeRef.current, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.6 }, 0);

      // Heading lines — masked reveal with 3D tilt
      tl.fromTo(line1Ref.current,
        { yPercent: 110, rotationX: 60, opacity: 0 },
        { yPercent: 0, rotationX: 0, opacity: 1, duration: 0.9, ease: "expo.out" }, 0.2
      ).fromTo(line2Ref.current,
        { yPercent: 110, rotationX: 60, opacity: 0 },
        { yPercent: 0, rotationX: 0, opacity: 1, duration: 0.9, ease: "expo.out" }, 0.35
      ).fromTo(line3Ref.current,
        { yPercent: 110, rotationX: 60, opacity: 0 },
        { yPercent: 0, rotationX: 0, opacity: 1, duration: 0.9, ease: "expo.out" }, 0.5
      );

      // Subtitle blur-fade
      tl.fromTo(subtitleRef.current,
        { opacity: 0, y: 20, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.85 }, 0.65
      );

      // Meta row
      tl.fromTo(metaRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7 }, 0.85
      );

      // Band wipe reveal
      tl.fromTo(bandRef.current,
        { opacity: 0, y: 20, clipPath: "inset(0% 100% 0% 0%)" },
        { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "power4.inOut" }, 1.0
      );

      // Shimmer sweep
      tl.fromTo(shimmerRef.current,
        { xPercent: -130, opacity: 0.8 },
        { xPercent: 230, opacity: 0, duration: 1.0, ease: "power1.inOut" }, 1.6
      );

      // Dividers grow
      tl.fromTo(
        dividerRefs.current.filter(Boolean),
        { scaleY: 0 },
        { scaleY: 1, duration: 0.4, stagger: 0.06, ease: "power2.out" }, 1.55
      );

      // Stat items 3D flip
      tl.fromTo(
        itemRefs.current.filter(Boolean),
        { opacity: 0, rotationX: -80, y: 20, transformOrigin: "top center" },
        { opacity: 1, rotationX: 0, y: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" }, 1.6
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: <Users className="w-4 h-4 md:w-5 md:h-5 mb-1 text-white stroke-[1.75]" />, value: "8,000+", label: "VISITORS / DELEGATES" },
    { icon: <Store className="w-4 h-4 md:w-5 md:h-5 mb-1 text-white stroke-[1.75]" />, value: "200+", label: "EXHIBITORS" },
    { icon: <Globe className="w-4 h-4 md:w-5 md:h-5 mb-1 text-white stroke-[1.75]" />, value: "1,000+", label: "GLOBAL BUYERS" },
    { icon: <UserCheck className="w-4 h-4 md:w-5 md:h-5 mb-1 text-white stroke-[1.75]" />, value: "150+", label: "EXPERT SPEAKERS" },
    { icon: <Briefcase className="w-4 h-4 md:w-5 md:h-5 mb-1 text-white stroke-[1.75]" />, value: "B2B", label: "MEETINGS" }
  ];

  return (
    <>
      <style>{`
        @keyframes bgZoom {
          0%   { transform: scale(1.08); }
          100% { transform: scale(1.0); }
        }
        .part-bg-img { animation: bgZoom 8s ease-out forwards; transform-origin: center center; }
      `}</style>

      <section
        ref={sectionRef}
        className="relative z-20 w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] flex items-center bg-transparent overflow-visible font-inter pt-3 md:pt-5 pb-4 md:pb-6 [perspective:800px]"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src={bgImg.src} alt="Partnership BG" className="part-bg-img w-full h-full object-cover" />
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="max-w-xl bg-white/80 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none translate-y-1 lg:translate-y-2">

            <h4
              ref={badgeRef}
              style={{ opacity: 0 }}
              className="text-[12px] md:text-[13px] lg:text-[14px] font-bold text-[#c2410c] tracking-[0.15em] uppercase mb-2"
            >
              PARTNERSHIP / COLLABORATION
            </h4>

            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-black text-[#1b5e20] leading-[1.05] mb-3 font-poppins tracking-tight">
              <span className="block overflow-hidden">
                <span ref={line1Ref} style={{ opacity: 0, display: "block", fontWeight: 600 }}>Let&apos;s Grow</span>
              </span>
              <span className="block overflow-hidden">
                <span ref={line2Ref} style={{ opacity: 0, display: "block", fontWeight: 600 }}>Organic.</span>
              </span>
              <span className="block overflow-hidden">
                <span ref={line3Ref} style={{ opacity: 0, display: "block" }} className="font-serif italic text-[#ea580c] font-bold tracking-normal text-3xl md:text-4xl lg:text-[46px]">Together.</span>
              </span>
            </h1>

            <p
              ref={subtitleRef}
              style={{ opacity: 0 }}
              className="text-[#131730] text-[12px] md:text-[14px] lg:text-[15px] font-bold leading-relaxed max-w-md mb-5"
            >
              Partner with Bharat Organic Expo 2027 and be a part of India&apos;s leading platform for organic business, innovation, wellness and sustainability.
            </p>

            <div ref={metaRef} style={{ opacity: 0 }} className="flex items-center gap-4 md:gap-5 mt-2">
              {/* Date */}
              <div className="flex items-center gap-2">
                <Calendar className="text-[#4B1426] shrink-0" size={18} strokeWidth={2} />
                <span className="text-[12px] md:text-[14px] font-bold text-[#4B1426] leading-tight whitespace-nowrap">19 &ndash; 21 February 2027</span>
              </div>

              {/* Divider */}
              <div className="w-px h-5 bg-[#4B1426] shrink-0" />

              {/* Location */}
              <div className="flex items-center gap-2">
                <MapPin className="text-[#4B1426] shrink-0" size={18} strokeWidth={2} />
                <span className="text-[12px] md:text-[14px] font-bold text-[#4B1426] leading-tight whitespace-nowrap">Bharat Mandapam, New Delhi</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar - animated like FeatureStrip */}
        <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 z-30 px-4 sm:px-6 md:px-8">
          <div className="max-w-[1400px] mx-auto">
            <div
              ref={bandRef}
              style={{ opacity: 0, backgroundColor: "#1b5e20", boxShadow: "0 8px 20px -10px rgba(0,0,0,0.3)" }}
              className="rounded-2xl border border-white/10 p-0.5 md:py-2 md:px-3 relative overflow-hidden [perspective:1000px]"
            >
              {/* Shimmer overlay */}
              <div
                ref={shimmerRef}
                className="absolute inset-y-0 left-0 w-1/3 pointer-events-none"
                style={{ background: "linear-gradient(100deg, transparent, rgba(255,255,255,0.18), transparent)", opacity: 0 }}
              />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-nowrap items-center justify-center md:justify-between gap-y-3 gap-x-2 md:gap-0">
                {stats.map((stat, idx) => (
                  <React.Fragment key={idx}>
                    <div
                      ref={(el) => { itemRefs.current[idx] = el; }}
                      style={{ opacity: 0 }}
                      className="flex flex-col items-center text-center group flex-1 py-1"
                    >
                      <div className="opacity-90 group-hover:opacity-100 transition-opacity">
                        {stat.icon}
                      </div>
                      <h4 className="text-[11px] sm:text-[13px] md:text-sm font-semibold text-white leading-none font-inter mb-0.5">
                        {stat.value === "B2B" ? "B2B" : <AnimatedCounter value={stat.value} />}
                      </h4>
                      <p className="text-[8px] md:text-[9px] font-bold text-[#facc15] uppercase tracking-widest leading-tight mt-0.5 font-inter">
                        {stat.label}
                      </p>
                    </div>
                    {idx < stats.length - 1 && (
                      <div
                        ref={(el) => { dividerRefs.current[idx] = el; }}
                        className="hidden md:block w-px h-6 bg-white/20 shrink-0"
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
