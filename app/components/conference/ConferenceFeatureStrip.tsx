"use client";

import React from "react";
import { Users2, ShieldCheck, Handshake, Target, TrendingUp } from "lucide-react";
import { Reveal } from "../shared/Reveal";

const strip = [
  { icon: Users2, label: "Curated Meetings", sub: "Relevant Connections" },
  { icon: ShieldCheck, label: "Verified Business", sub: "Profiles" },
  { icon: Handshake, label: "Industry Focused", sub: "Networking" },
  { icon: Target, label: "New Opportunities", sub: "& Partnerships" },
  { icon: TrendingUp, label: "Business Growth", sub: "& Expansion" },
];

const ConferenceFeatureStrip = () => {
  return (
    <section className="container relative z-10 -mt-8 mx-auto max-w-[1400px] px-6 sm:-mt-10">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:gap-4">
        {strip.map((item, i) => (
          <Reveal key={item.label} delay={i * 70} direction={i % 2 === 0 ? "up" : "zoom"} className="h-full">
            <div className="flex h-full items-center gap-3 rounded-2xl border border-gray-200/60 bg-[#fcfdfc] p-3 md:p-4 shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#3b8c2a]/10 transition-transform duration-300 hover:scale-110 hover:bg-[#3b8c2a]/20">
                <item.icon className="h-6 w-6 text-[#2b5825]" strokeWidth={1.75} />
              </div>
              <p className="text-xs font-semibold leading-tight text-[#154726]">
                {item.label}
                <br />
                {item.sub}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default ConferenceFeatureStrip;