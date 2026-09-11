"use client";
import React, { useRef, useEffect, useState } from "react";
import { useInView, animate } from "framer-motion";
import { Users, Building2, Globe, Mic, Handshake } from "lucide-react";
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
        duration: 2.5,
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

export default function StatsBand() {
  const bandRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dividerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const stats = [
    { icon: Users,     val: "8,000+", label: "VISITORS / DELEGATES" },
    { icon: Building2, val: "200+",   label: "EXHIBITORS" },
    { icon: Globe,     val: "1,000+", label: "GLOBAL BUYERS" },
    { icon: Mic,       val: "65+",    label: "EXPERT SPEAKERS" },
    { icon: Handshake, val: "B2B",    label: "MEETINGS" },
  ];

  itemRefs.current = [];
  dividerRefs.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 1.2, // fires right after hero animation completes
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
      <SectionContainer>
        <div
          ref={bandRef}
          style={{ opacity: 0, backgroundColor: "#1b5e20", boxShadow: "0 8px 20px -10px rgba(0,0,0,0.3)" }}
          className="rounded-2xl border border-white/10 p-2 sm:py-2 md:py-2 md:px-4 relative overflow-hidden [perspective:1000px]"
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
                    className="flex flex-row items-center justify-center gap-2 sm:gap-2.5 group flex-1 py-1 px-1.5 bg-white/5 md:bg-transparent rounded-xl border border-white/10 md:border-none"
                  >
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/15">
                      <IconComponent className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#facc15] stroke-[2]" />
                    </div>
                    <div className="flex flex-col text-left justify-center">
                      <h4 className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-white leading-none font-inter mb-0.5">
                        <StatCounter value={item.val} />
                      </h4>
                      <p className="text-[9px] sm:text-[9.5px] md:text-[10px] font-semibold text-[#facc15] uppercase tracking-wider leading-none font-inter">
                        {item.label}
                      </p>
                    </div>
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
  );
}
