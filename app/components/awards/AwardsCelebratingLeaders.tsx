"use client";

import React from "react";
import { Trophy, Sprout, Store, Globe2, Lightbulb } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import bgImg from "../../assets/awards/celebrating_leaders.png";

const LEADER_TYPES = [
  { icon: Sprout, label: "Farmers & Producer Groups" },
  { icon: Store, label: "Brands & Companies" },
  { icon: Lightbulb, label: "Startups & Innovators" },
  { icon: Globe2, label: "Exporters & Traders" },
];

const AwardsCelebratingLeaders = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b2912] py-2 md:py-4">
      <div className="absolute inset-0 z-0">
        <img
          src={bgImg.src}
          alt="Celebrating leaders of India's organic movement"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2912]/90 via-[#0b2912]/70 to-[#0b2912]/40" />
      </div>

      <div className="relative z-10 container mx-auto max-w-[1400px] px-6 py-10 md:py-14">
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[12px] md:text-[13px] font-extrabold tracking-widest uppercase text-[#F2B40E]">
              <Trophy className="w-4 h-4" />
              Bharat Organic Excellence Awards 2027
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-3 text-[24px] md:text-[32px] lg:text-[38px] font-black uppercase leading-[1.1] tracking-tight text-white">
              Celebrating India&apos;s
              <br />
              <span className="text-[#F2B40E]">Organic Leaders</span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-[#e6f2e6] max-w-md">
              From farm to shelf, we honour the changemakers who are
              building a cleaner, healthier and more sustainable India.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-6 flex flex-wrap gap-3">
              {LEADER_TYPES.map((l) => {
                const Icon = l.icon;
                return (
                  <span
                    key={l.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[12px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                  >
                    <Icon className="h-3.5 w-3.5 text-[#F2B40E]" />
                    {l.label}
                  </span>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AwardsCelebratingLeaders;