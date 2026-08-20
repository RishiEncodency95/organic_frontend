"use client";

import React, { useEffect, useState } from "react";
import { Building2, Users, Mic, Leaf, Calendar, Globe } from "lucide-react";
import { Reveal, useInView } from "./BlogReveal";
import SectionContainer from "@/app/components/layout/SectionContainer";

const stats = [
  { icon: Building2, value: 200, suffix: "+", label: "EXHIBITORS" },
  { icon: Users, value: 8000, suffix: "+", label: "VISITORS & BUYERS" },
  { icon: Mic, value: 100, suffix: "+", label: "EXPERT SPEAKERS" },
  { icon: Leaf, value: 100, suffix: "+", label: "ORGANIC & NATURAL BRANDS" },
  { icon: Calendar, value: 3, suffix: "", label: "DAYS OF EXHIBITION" },
  { icon: Globe, value: 1000, suffix: "+", label: "GLOBAL BUYERS" },
];

function CountUp({
  target,
  suffix = "",
  duration = 1400,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.6);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    let raf = 0;
    const step = (ts: number) => {
      if (startTime === null) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setValue(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

const BlogStats = () => {
  return (
    <section className="bg-[#1b5e20] py-2 md:py-2.5 font-inter shadow-md">
      <SectionContainer>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-2 gap-x-2 items-center justify-between text-center lg:divide-x lg:divide-white/20">
          {stats.map((s, i) => {
            const IconComponent = s.icon;
            return (
              <Reveal key={s.label} delay={i * 70} direction={i % 2 === 0 ? "zoom" : "up"}>
                <div className="flex flex-col items-center justify-center gap-0.5 group px-1 py-0.5">
                  <IconComponent className="w-4 h-4 text-white stroke-[1.75] transition-transform duration-300 group-hover:scale-110" />
                  <h4 className="text-[15px] sm:text-[17px] md:text-[18px] font-semibold text-white leading-none font-inter mb-0.5">
                    <CountUp target={s.value} suffix={s.suffix} />
                  </h4>
                  <p className="text-[8px] sm:text-[9px] font-bold text-[#F2B40E] uppercase tracking-widest leading-tight font-inter">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
};

export default BlogStats;