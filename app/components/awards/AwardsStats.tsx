"use client";

import React, { useEffect, useState } from "react";
import { Users, Trophy, Globe2, Medal } from "lucide-react";
import { Reveal, useInView } from "../shared/Reveal";

const STAT_ITEMS = [
  { icon: Users, value: 200, suffix: "+", label: "Categories" },
  { icon: Trophy, value: 30, suffix: "+", label: "Grand Awards" },
  { icon: Users, value: 0, suffix: "Expert", label: "Jury Panel" },
  { icon: Globe2, value: 0, suffix: "Nationwide &", label: "Global Recognition" },
  { icon: Medal, value: 0, suffix: "Credibility", label: "& Transparency" },
];

function CountUp({
  target,
  suffix = "",
  duration = 1100,
  start,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  start: boolean;
}) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return (
    <>
      {target > 0 ? value : null}
      {suffix}
    </>
  );
}

const AwardsStats = () => {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <section ref={ref} className="bg-[#0b2912] py-2 md:py-4">
      <div className="container mx-auto max-w-[1400px] px-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 gap-y-4">
        {STAT_ITEMS.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.label} delay={i * 80} direction={i % 2 === 0 ? "zoom" : "up"}>
              <div className="flex items-center gap-3 group">
                <Icon className="w-6 h-6 text-[#F2B40E] flex-shrink-0 transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6" />
                <p className="text-[11px] sm:text-xs text-[#b8d9b9] uppercase tracking-wide font-medium leading-tight">
                  {s.value > 0 || s.suffix ? (
                    <span className="block text-[16px] font-extrabold text-white">
                      <CountUp start={inView} target={s.value} suffix={s.suffix} />
                    </span>
                  ) : null}
                  {s.label}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default AwardsStats;