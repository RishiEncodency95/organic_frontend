"use client";

import React from "react";
import { Target, Globe } from "lucide-react";

const AboutMissionVision = () => {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mission Card */}
        <div className="bg-[#f8fdf9] border border-[#e8f5ec] rounded-3xl p-8 lg:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12 group hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
          <div className="flex-1 w-full">
            <h3 className="text-[#3b8c2a] text-[15px] font-extrabold tracking-widest uppercase mb-6 flex items-center gap-2">
              Our Mission
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                "Promoting sustainable agriculture",
                "Connecting organic businesses",
                "Encouraging healthy living",
                "Supporting Indian farmers",
                "Creating global opportunities"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3b8c2a] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[#111827] text-[14px] font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 relative flex items-center justify-center">
            {/* Target Illustration */}
            <div className="absolute inset-0 rounded-full border-[20px] border-[#3b8c2a] shadow-inner opacity-90 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-4 rounded-full border-[16px] border-[#f8fdf9] shadow-md z-10" />
            <div className="absolute inset-8 rounded-full bg-[#154726] shadow-xl z-20 group-hover:scale-95 transition-transform duration-500" />
            <Target size={40} className="text-white relative z-30 drop-shadow-md" />
          </div>
        </div>

        {/* Vision Card */}
        <div className="bg-[#f8fdf9] border border-[#e8f5ec] rounded-3xl p-8 lg:p-12 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12 group hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
          <div className="flex-1 w-full">
            <h3 className="text-[#3b8c2a] text-[15px] font-extrabold tracking-widest uppercase mb-6 flex items-center gap-2">
              Our Vision
            </h3>
            <ul className="flex flex-col gap-4">
              {[
                "To make India a Global Organic Hub",
                "To inspire a greener, healthier and sustainable future",
                "Innovation, sustainability and wellness for all",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#3b8c2a] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[#111827] text-[14px] font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 relative flex items-center justify-center overflow-hidden rounded-full shadow-2xl group-hover:shadow-[#3b8c2a]/40 transition-shadow duration-500">
            {/* Globe Hands Illustration */}
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700 ease-out"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1536881745421-2e6378e38520?q=80&w=1969&auto=format&fit=crop')" }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#154726]/60 to-transparent" />
            <Globe size={48} className="text-white relative z-10 opacity-80" strokeWidth={1.5} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMissionVision;
