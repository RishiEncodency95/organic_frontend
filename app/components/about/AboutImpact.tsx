"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Trophy, Award, Medal, Star, ShieldCheck } from "lucide-react";

const awards = [
  { icon: Trophy, label: "Best\nOrganic Expo" },
  { icon: Award, label: "Innovation\nAward" },
  { icon: Medal, label: "Green Event\nAward" },
  { icon: ShieldCheck, label: "Business\nExcellence" },
  { icon: Star, label: "Agriculture\nPromotion" },
  { icon: Globe2, label: "International\nRecognition" },
];

const impacts = [
  { value: "2,00,000+", label: "Lives Impacted" },
  { value: "10,000+", label: "Farmers Benefited" },
  { value: "5,000+", label: "Organic Brands\nPromoted" },
  { value: "100+", label: "CSR & Awareness\nInitiatives" },
];

import { Globe2 } from "lucide-react";

const AboutImpact = () => {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        
        {/* Awards & Recognition */}
        <div className="bg-white rounded-3xl border border-[#e8f5ec] p-6 lg:p-8 shadow-sm flex flex-col items-center">
          <h3 className="text-[#3b8c2a] text-[13px] font-extrabold tracking-widest uppercase mb-8">
            AWARDS & RECOGNITION
          </h3>
          <div className="grid grid-cols-3 gap-x-2 gap-y-8 w-full mt-auto mb-auto">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <div key={index} className="flex flex-col items-center gap-3 text-center">
                  <div className="w-14 h-14 rounded-full border border-[#f59e0b]/30 bg-[#fefbf2] flex items-center justify-center">
                    <Icon size={24} className="text-[#f59e0b]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[#64748b] text-[10px] font-bold leading-tight whitespace-pre-line">
                    {award.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Impact So Far */}
        <div className="bg-white rounded-3xl border border-[#e8f5ec] p-6 lg:p-8 shadow-sm flex flex-col items-center">
          <h3 className="text-[#3b8c2a] text-[13px] font-extrabold tracking-widest uppercase mb-10">
            OUR IMPACT SO FAR
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 w-full mt-auto mb-auto">
            {impacts.map((impact, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <h4 className="text-[#154726] text-[28px] lg:text-[32px] font-black mb-2">{impact.value}</h4>
                <p className="text-[#64748b] text-[11px] font-bold uppercase tracking-wider whitespace-pre-line">
                  {impact.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Innovation Zone */}
        <div className="bg-white rounded-3xl border border-[#e8f5ec] p-6 lg:p-8 shadow-sm flex flex-col items-start relative overflow-hidden">
          <h3 className="text-[#3b8c2a] text-[13px] font-extrabold tracking-widest uppercase mb-6">
            INNOVATION ZONE
          </h3>
          <p className="text-[#64748b] text-[13px] leading-relaxed mb-8 w-2/3">
            Showcasing the future of organic living with startups, research, new technologies and innovative solutions.
          </p>
          <Link 
            href="/innovation-zone"
            className="bg-[#154726] hover:bg-[#0b2912] text-white px-5 py-2.5 rounded-lg text-[12px] font-bold transition-all shadow-md mt-auto z-10"
          >
            Explore Innovation
          </Link>
          
          {/* Bulb Image */}
          <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 opacity-90 pointer-events-none">
            <div 
              className="w-full h-full bg-contain bg-no-repeat bg-bottom"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542382156909-9ae37b3f56fd?q=80&w=2000&auto=format&fit=crop')" }}
              // Using a placeholder lightbulb/plant image.
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutImpact;
