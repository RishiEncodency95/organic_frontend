"use client";

import React from "react";
import { Building2, ArrowUpRight, Rocket, Globe2 } from "lucide-react";

const roadmap = [
  { year: "2025", title: "Strengthen India\nPresence", icon: Building2 },
  { year: "2026", title: "Expand Global\nParticipation", icon: Globe2 },
  { year: "2027", title: "Launch Organic\nInnovation Hub", icon: Rocket },
  { year: "2030+", title: "Become World's\nLeading Expo", icon: ArrowUpRight },
];

const cities = ["Delhi", "Mumbai", "Bengaluru", "Hyderabad", "Pune", "Kolkata", "Ahmedabad", "Chennai", "Lucknow", "More..."];

const AboutRoadmapPresence = () => {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 py-16">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Our Future Roadmap */}
        <div className="w-full lg:w-5/12 bg-white rounded-3xl border border-[#e8f5ec] p-6 lg:p-8 shadow-sm flex flex-col items-center">
          <h3 className="text-[#3b8c2a] text-[13px] font-extrabold tracking-widest uppercase mb-10 text-center">
            OUR FUTURE ROADMAP
          </h3>
          <div className="grid grid-cols-2 gap-4 w-full h-full pb-4">
            {roadmap.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex flex-col items-center justify-center text-center p-4 border border-[#e8f5ec] rounded-2xl hover:bg-[#f8fdf9] hover:border-[#3b8c2a] transition-all group cursor-default shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#f8fdf9] group-hover:bg-[#3b8c2a] text-[#3b8c2a] group-hover:text-white flex items-center justify-center mb-3 transition-colors">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <h4 className="text-[#154726] text-[15px] font-black mb-1">{item.year}</h4>
                  <p className="text-[#64748b] text-[10px] font-bold leading-tight whitespace-pre-line">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Presence Across India */}
        <div className="w-full lg:w-7/12 bg-white rounded-3xl border border-[#e8f5ec] p-6 lg:p-8 shadow-sm flex flex-col items-center relative overflow-hidden">
          <h3 className="text-[#3b8c2a] text-[13px] font-extrabold tracking-widest uppercase mb-6 text-center z-10">
            OUR PRESENCE ACROSS INDIA
          </h3>
          
          <div className="flex-1 w-full flex flex-col justify-end relative mt-10">
            
            {/* Map Placeholder */}
            <div className="absolute right-0 top-[-20px] w-48 h-56 opacity-20 z-0">
              <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-[#3b8c2a]">
                <path d="M50 0 C70 10 90 30 80 60 C70 90 40 100 20 80 C0 60 10 20 50 0 Z" />
              </svg>
            </div>

            {/* Skyline Illustration Placeholder */}
            <div className="w-full h-24 border-b-2 border-[#154726] flex items-end justify-between z-10 opacity-70 px-4">
               {/* Just simple shapes representing buildings */}
               <div className="w-8 h-16 bg-[#154726]" />
               <div className="w-12 h-10 bg-[#154726]" />
               <div className="w-6 h-20 bg-[#154726]" />
               <div className="w-16 h-12 bg-[#154726]" />
               <div className="w-10 h-24 bg-[#154726]" />
               <div className="w-14 h-14 bg-[#154726]" />
               <div className="w-8 h-18 bg-[#154726]" />
               <div className="w-12 h-8 bg-[#154726]" />
            </div>

            {/* Cities List */}
            <div className="w-full flex flex-wrap justify-center gap-x-2 gap-y-1 mt-4 z-10">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-[#64748b] text-[9px] font-bold tracking-wider uppercase">{city}</span>
                  {index < cities.length - 1 && <span className="w-1 h-1 rounded-full bg-[#3b8c2a]" />}
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutRoadmapPresence;
