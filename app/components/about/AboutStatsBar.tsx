"use client";

import React from "react";
import { Users, UserCheck, Globe2, Mic2, Briefcase, Handshake } from "lucide-react";

const stats = [
  {
    icon: UserCheck,
    value: "1000+",
    label: "Exhibitors",
  },
  {
    icon: Users,
    value: "50,000+",
    label: "Visitors",
  },
  {
    icon: Mic2,
    value: "150+",
    label: "Speakers",
  },
  {
    icon: Globe2,
    value: "25+",
    label: "Countries",
  },
  {
    icon: Briefcase,
    value: "100+",
    label: "Conference Sessions",
  },
  {
    icon: Handshake,
    value: "250+",
    label: "Business Meetings",
  },
];

const AboutStatsBar = () => {
  return (
    <section className="w-full bg-[#154726] py-12 border-y-[6px] border-[#3b8c2a]">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center text-center pt-6 md:pt-0 first:pt-0 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#3b8c2a] transition-all duration-500">
                  <Icon size={24} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-white text-[28px] font-black leading-tight mb-1 group-hover:text-[#3b8c2a] transition-colors duration-300">
                  {stat.value}
                </h3>
                <p className="text-white/80 text-[11px] font-bold uppercase tracking-widest max-w-[120px]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutStatsBar;
