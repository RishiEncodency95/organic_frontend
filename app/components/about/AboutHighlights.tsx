"use client";

import React from "react";
import { CheckCircle2, Globe2 } from "lucide-react";

const conferences = [
  "International Speakers",
  "Panel Discussions",
  "Government Sessions",
  "Startup Pitch",
  "Certification Workshops",
  "Ayurveda & Wellness",
  "Organic Farming",
  "Export Opportunities",
  "Innovation Showcase",
  "Health & Nutrition",
];

const sustainability = [
  "Zero Plastic",
  "Tree Plantation",
  "Waste Recycling",
  "Solar Energy",
  "Paperless Registration",
  "Digital Badges",
  "Green Logistics",
  "Eco-friendly Stalls",
];

const AboutHighlights = () => {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
        
        {/* Conferences & Knowledge Sessions */}
        <div className="bg-white rounded-3xl border border-[#e8f5ec] p-6 lg:p-8 shadow-sm flex flex-col items-center">
          <h3 className="text-[#3b8c2a] text-[13px] font-extrabold tracking-widest uppercase mb-8">
            CONFERENCES & KNOWLEDGE SESSIONS
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3 w-full mb-8">
            {conferences.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-[#3b8c2a] shrink-0 mt-0.5" />
                <span className="text-[#64748b] text-[11px] font-semibold leading-snug">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto w-full aspect-video rounded-xl overflow-hidden shadow-md">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop')" }}
            />
          </div>
        </div>

        {/* International Participation */}
        <div className="bg-white rounded-3xl border border-[#e8f5ec] p-6 lg:p-8 shadow-sm flex flex-col items-center relative overflow-hidden">
          <h3 className="text-[#3b8c2a] text-[13px] font-extrabold tracking-widest uppercase mb-8 text-center">
            INTERNATIONAL PARTICIPATION
          </h3>
          
          <div className="flex-1 w-full flex flex-col items-center justify-center relative">
            <Globe2 size={160} className="text-[#f8fdf9] absolute z-0 opacity-50 stroke-[0.5]" />
            <div className="z-10 text-center mb-6">
              <p className="text-[#64748b] text-[13px] font-bold mb-1">Participants<br/>from</p>
              <h4 className="text-[#154726] text-[48px] font-black leading-none mb-1">25+</h4>
              <p className="text-[#111827] text-[15px] font-bold tracking-wider uppercase">Countries</p>
            </div>
            
            {/* Flags Grid Placeholder */}
            <div className="flex flex-wrap items-center justify-center gap-3 z-10 w-full px-4">
              {['🇮🇳', '🇺🇸', '🇩🇪', '🇯🇵', '🇦🇺', '🇨🇦', '🇬🇧', '🇫🇷', '🇮🇹'].map((flag, i) => (
                <div key={i} className="w-8 h-6 bg-slate-100 rounded flex items-center justify-center text-lg shadow-sm border border-slate-200">
                  {flag}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sustainability Initiatives */}
        <div className="bg-white rounded-3xl border border-[#e8f5ec] p-6 lg:p-8 shadow-sm flex flex-col items-center">
          <h3 className="text-[#3b8c2a] text-[13px] font-extrabold tracking-widest uppercase mb-8">
            SUSTAINABILITY INITIATIVES
          </h3>
          <div className="flex flex-col gap-3 w-full mb-8 pl-4">
            {sustainability.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full bg-[#f8fdf9] border border-[#3b8c2a] flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#3b8c2a]" />
                </div>
                <span className="text-[#64748b] text-[12px] font-semibold">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto w-full aspect-[16/7] rounded-xl overflow-hidden shadow-md">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop')" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHighlights;
