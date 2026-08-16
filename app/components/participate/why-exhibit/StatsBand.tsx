"use client";
import React, { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";
import { Users, Building2, Globe, Mic, Handshake } from "lucide-react";
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

const stats = [
  { icon: Users,     val: "8,000+", label: "VISITORS / DELEGATES" },
  { icon: Building2, val: "200+",   label: "EXHIBITORS" },
  { icon: Globe,     val: "1,000+", label: "GLOBAL BUYERS" },
  { icon: Mic,       val: "150+",   label: "EXPERT SPEAKERS" },
  { icon: Handshake, val: "B2B",    label: "MEETINGS" },
];

const StatsBand = () => (
  <div className="relative z-20 -mt-6 md:-mt-8">
    <SectionContainer>
      <div
        className="rounded-2xl border border-white/10 p-0.5 md:py-1 md:px-3"
        style={{
          backgroundColor: "#1b5e20",
          boxShadow: "0 8px 20px -10px rgba(0,0,0,0.3)",
        }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-nowrap items-center justify-center md:justify-between gap-y-2 gap-x-2 md:gap-0">
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center text-center group flex-1 py-0.5 md:py-1">
                  <IconComponent className="w-4 h-4 md:w-5 md:h-5 mb-0.5 text-white stroke-[1.75]" />
                  <h4 className="text-sm md:text-base font-semibold text-white leading-none font-inter">
                    <StatCounter value={stat.val} />
                  </h4>
                  <p className="text-[7px] md:text-[9px] font-bold text-[#f5c842] uppercase tracking-widest leading-tight mt-0.5 font-inter">
                    {stat.label}
                  </p>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden md:block w-px h-5 bg-white/20" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  </div>
);

export default StatsBand;
