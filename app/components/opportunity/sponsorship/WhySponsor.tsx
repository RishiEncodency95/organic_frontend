"use client";
import React, { useRef, useEffect } from "react";
import { Eye, Users, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import gsap from "gsap";

export default function WhySponsor() {
  const bandRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dividerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);

  const benefits = [
    { icon: Eye, title: "High Brand", subtitle: "Visibility" },
    { icon: Users, title: "Connect with", subtitle: "Targeted Audience" },
    { icon: ShieldCheck, title: "Build Credibility", subtitle: "& Trust" },
    { icon: TrendingUp, title: "Strengthen Your", subtitle: "Market Presence" },
  ];

  itemRefs.current = [];
  dividerRefs.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 1.2,
        defaults: { ease: "power3.out" },
      });

      // Band wipe reveal left→right
      tl.fromTo(
        bandRef.current,
        { opacity: 0, y: 20, clipPath: "inset(0% 100% 0% 0%)" },
        { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "power4.inOut" },
        0
      );

      // Shimmer sweep
      tl.fromTo(
        shimmerRef.current,
        { xPercent: -130, opacity: 0.8 },
        { xPercent: 230, opacity: 0, duration: 1.0, ease: "power1.inOut" },
        0.6
      );

      // Title reveal
      tl.fromTo(
        titleRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, ease: "back.out(1.7)" },
        0.5
      );

      // Dividers grow
      tl.fromTo(
        dividerRefs.current.filter(Boolean),
        { scaleY: 0 },
        { scaleY: 1, duration: 0.4, stagger: 0.06, ease: "power2.out" },
        0.55
      );

      // Stat items 3D flip
      tl.fromTo(
        itemRefs.current.filter(Boolean),
        { opacity: 0, rotationX: -80, y: 20, transformOrigin: "top center" },
        { opacity: 1, rotationX: 0, y: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
        0.6
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative z-20 -mt-6 md:-mt-8 font-inter">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div
          ref={bandRef}
          style={{ opacity: 0, backgroundColor: "#1b5e20", boxShadow: "0 8px 20px -10px rgba(0,0,0,0.3)" }}
          className="rounded-2xl border border-white/10 p-3 md:py-3 md:px-6 relative overflow-hidden [perspective:1000px] flex flex-col lg:flex-row items-center gap-4 lg:gap-6"
        >
          {/* Shimmer overlay */}
          <div
            ref={shimmerRef}
            className="absolute inset-y-0 left-0 w-1/3 pointer-events-none z-10"
            style={{ background: "linear-gradient(100deg, transparent, rgba(255,255,255,0.18), transparent)", opacity: 0 }}
          />

          {/* Left Side Title */}
          <div 
            ref={titleRef}
            style={{ opacity: 0 }}
            className="flex items-center gap-3 shrink-0 lg:pr-4"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-transparent">
              <Sparkles className="w-7 h-7 text-[#a3e635]" />
            </div>
            <div>
              <h2 className="text-[#a3e635] text-[11px] md:text-xs font-bold uppercase tracking-wider font-poppins mb-0.5">
                WHY SPONSOR BHARAT
              </h2>
              <p className="text-[9px] md:text-[10px] text-gray-300 uppercase tracking-widest font-inter leading-none">
                ORGANIC EXPO 2027
              </p>
            </div>
          </div>

          <div 
            ref={(el) => { dividerRefs.current[0] = el; }}
            className="hidden lg:block w-px h-10 bg-white/20 shrink-0"
          />

          {/* Benefits Grid */}
          <div className="flex-1 w-full grid grid-cols-2 sm:flex sm:flex-nowrap items-center justify-center sm:justify-between gap-y-4 gap-x-2 sm:gap-0">
            {benefits.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <React.Fragment key={i}>
                  <div
                    ref={(el) => { itemRefs.current[i] = el; }}
                    style={{ opacity: 0 }}
                    className="flex flex-col items-center text-center group flex-1 py-1"
                  >
                    <IconComponent className="w-5 h-5 md:w-6 md:h-6 mb-1 text-white stroke-[1.75]" />
                    <h4 className="text-[11px] sm:text-[13px] md:text-sm font-semibold text-white leading-none font-inter mb-0.5">
                      {item.title}
                    </h4>
                    <p className="text-[8px] md:text-[9px] font-bold text-[#facc15] uppercase tracking-widest leading-tight mt-0.5 font-inter">
                      {item.subtitle}
                    </p>
                  </div>
                  {i < benefits.length - 1 && (
                    <div
                      ref={(el) => { dividerRefs.current[i + 1] = el; }}
                      className="hidden sm:block w-px h-8 bg-white/20"
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
