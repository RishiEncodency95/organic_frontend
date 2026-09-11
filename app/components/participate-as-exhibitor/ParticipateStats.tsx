"use client";

import React, { useRef, useEffect, useState } from "react";
import { useInView, animate } from "framer-motion";
import { Building2, Users, Mic, Globe, CalendarDays } from "lucide-react";
import gsap from "gsap";
import SectionContainer from "@/app/components/layout/SectionContainer";

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

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

export default function ParticipateStats() {
  const bandRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dividerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const stats = [
    { icon: Building2, val: "200+", label: "EXHIBITORS" },
    { icon: Users, val: "8,000+", label: "BUSINESS VISITORS" },
    { icon: Mic, val: "150+", label: "SPEAKERS" },
    { icon: Globe, val: "30+", label: "COUNTRY PARTICIPATION" },
    { icon: CalendarDays, val: "3", label: "DAYS OF BUSINESS" },
  ];

  itemRefs.current = [];
  dividerRefs.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.3,
        defaults: { ease: "power3.out" },
      });

      // Band wipe reveal left→right
      tl.fromTo(
        bandRef.current,
        { opacity: 0, y: 20, clipPath: "inset(0% 100% 0% 0%)" },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.9,
          ease: "power4.inOut",
        },
        0
      );

      // Shimmer sweep
      tl.fromTo(
        shimmerRef.current,
        { xPercent: -130, opacity: 0.8 },
        { xPercent: 230, opacity: 0, duration: 1.0, ease: "power1.inOut" },
        0.5
      );

      // Dividers grow
      tl.fromTo(
        dividerRefs.current.filter(Boolean),
        { scaleY: 0 },
        { scaleY: 1, duration: 0.4, stagger: 0.06, ease: "power2.out" },
        0.45
      );

      // Stat items 3D flip
      tl.fromTo(
        itemRefs.current.filter(Boolean),
        { opacity: 0, rotationX: -80, y: 20, transformOrigin: "top center" },
        {
          opacity: 1,
          rotationX: 0,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(1.7)",
        },
        0.5
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full font-inter py-3 md:py-4 mb-2">
      <SectionContainer>
        <div
          ref={bandRef}
          style={{
            opacity: 0,
            backgroundColor: "#1b5e20",
            boxShadow: "0 8px 20px -10px rgba(0,0,0,0.3)",
          }}
          className="rounded-2xl border border-white/10 p-0.5 md:py-2.5 md:px-3 relative overflow-hidden [perspective:1000px]"
        >
          {/* Shimmer overlay */}
          <div
            ref={shimmerRef}
            className="absolute inset-y-0 left-0 w-1/3 pointer-events-none"
            style={{
              background:
                "linear-gradient(100deg, transparent, rgba(255,255,255,0.18), transparent)",
              opacity: 0,
            }}
          />

          <div className="flex flex-nowrap items-center justify-between gap-2 md:gap-0 overflow-x-auto scrollbar-hide">
            {stats.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <React.Fragment key={i}>
                  <div
                    ref={(el) => {
                      itemRefs.current[i] = el;
                    }}
                    style={{ opacity: 0 }}
                    className="flex flex-col items-center text-center group flex-1 min-w-[120px] sm:min-w-0 py-1"
                  >
                    <IconComponent className="w-4 h-4 md:w-5 md:h-5 mb-1 text-white stroke-[1.75]" />
                    <h4 className="text-[12px] sm:text-[13px] md:text-sm lg:text-[15px] font-semibold text-white leading-none font-inter mb-0.5 whitespace-nowrap">
                      <StatCounter value={item.val} />
                    </h4>
                    <p className="text-[8px] md:text-[9px] font-bold text-[#facc15] uppercase tracking-widest leading-tight mt-0.5 font-inter whitespace-nowrap">
                      {item.label}
                    </p>
                  </div>
                  {i < stats.length - 1 && (
                    <div
                      ref={(el) => {
                        dividerRefs.current[i] = el;
                      }}
                      className="w-px h-6 md:h-7 bg-white/20 shrink-0"
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
