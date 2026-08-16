"use client";

import React, { useEffect, useState } from "react";
import { Building2, Users, Mic, Leaf, Calendar, Globe } from "lucide-react";
import { Reveal, useInView } from "./BlogReveal";

const stats = [
  { icon: Building2, value: 300, suffix: "+", label: "Exhibitors" },
  { icon: Users, value: 2500, suffix: "+", label: "Visitors & Buyers" },
  { icon: Mic, value: 150, suffix: "+", label: "Expert Speakers" },
  { icon: Leaf, value: 100, suffix: "+", label: "Organic & Natural Brands" },
  { icon: Calendar, value: 3, suffix: "", label: "Days of Exhibition" },
  { icon: Globe, value: 1000, suffix: "+", label: "Global Buyers" },
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
    <section className="bg-[#0b2912] py-2 md:py-4 ">
      <div className="container mx-auto max-w-[1400px] px-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 70} direction={i % 2 === 0 ? "zoom" : "up"}>
            <div className="flex flex-col items-center gap-1.5 group">
              <s.icon className="w-6 h-6 text-[#F2B40E] transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6" />
              <p className="text-[16px] font-extrabold text-white">
                <CountUp target={s.value} suffix={s.suffix} />
              </p>
              <p className="text-[11px] sm:text-xs text-[#b8d9b9] uppercase tracking-wide font-medium">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default BlogStats;