"use client";

import React from "react";
import { Lightbulb, Building2, Globe2, Award, Rocket, Sparkles } from "lucide-react";

const milestones = [
  {
    year: "2017",
    title: "Idea Started",
    icon: Lightbulb,
  },
  {
    year: "2018",
    title: "First Exhibition",
    icon: Building2,
  },
  {
    year: "2020",
    title: "International\nParticipation",
    icon: Globe2,
  },
  {
    year: "2022",
    title: "India's Largest\nOrganic Platform",
    icon: Award,
  },
  {
    year: "2025",
    title: "Global\nExpansion",
    icon: Rocket,
  },
  {
    year: "Future",
    title: "World's Leading\nOrganic Expo",
    icon: Sparkles,
  },
];

const AboutTimeline = () => {
  return (
    <section id="our-story" className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 py-16">
      
      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-16">
        <h2 className="text-[#3b8c2a] text-[16px] md:text-[18px] font-bold uppercase tracking-widest text-center">
          OUR STORY
        </h2>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-0">
        
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-[50%] left-[8%] right-[8%] h-[2px] bg-[#e8f5ec] -z-10" />
        <div className="hidden md:block absolute top-[50%] left-[8%] right-[8%] h-[2px] bg-[#3b8c2a] -z-10 origin-left scale-x-50" /> {/* Example progress */}

        {/* Connecting Line (Mobile) */}
        <div className="md:hidden absolute left-[31px] top-[10%] bottom-[10%] w-[2px] bg-[#e8f5ec] -z-10" />

        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            // The active items (first 3) could be full green, rest white with green border
            const isActive = index < 4; 
            
            return (
              <div 
                key={index} 
                className="flex md:flex-col items-center gap-6 md:gap-4 group cursor-default"
              >
                {/* Year (Mobile left side / Desktop top) */}
                <div className="w-20 md:w-auto text-right md:text-center shrink-0">
                  <h3 className="text-[#111827] text-[18px] md:text-[22px] font-black">{milestone.year}</h3>
                </div>

                {/* Node */}
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-md ${
                  isActive 
                    ? 'bg-[#3b8c2a] text-white shadow-[#3b8c2a]/30 scale-110' 
                    : 'bg-white border-2 border-[#e8f5ec] text-[#3b8c2a] group-hover:border-[#3b8c2a]'
                }`}>
                  <Icon size={isActive ? 24 : 20} className="md:w-7 md:h-7" />
                </div>
                
                {/* Title (Mobile right side / Desktop bottom) */}
                <div className="flex-1 md:flex-none text-left md:text-center mt-1">
                  <p className="text-[#64748b] text-[12px] md:text-[13px] font-semibold leading-snug whitespace-pre-line">
                    {milestone.title}
                  </p>
                </div>

              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default AboutTimeline;
