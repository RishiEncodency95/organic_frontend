"use client";

import { Users, Building2, Map, Award } from "lucide-react";

const AboutStrip = () => {
  return (
    <div className="w-full relative z-20">
      <div className="bg-gradient-to-r from-[#3b8c2a] to-[#215e12] p-1 md:p-1.5">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">

          {/* Item 1 */}
          <div className="flex items-center justify-center md:justify-start gap-3 px-3 py-2.5 hover:bg-black/10 transition-colors rounded-l-lg cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#F2B40E] group-hover:shadow-md transition-all duration-300">
              <Building2 size={14} className="text-white group-hover:text-[#0a1f12] transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[12px] font-bold leading-tight">500+</span>
              <span className="text-white/80 text-[10px] md:text-[11px] font-medium leading-tight group-hover:text-white transition-colors">Top Exhibitors</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-center md:justify-start gap-3 px-3 py-2.5 hover:bg-black/10 transition-colors cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#F2B40E] group-hover:shadow-md transition-all duration-300">
              <Users size={14} className="text-white group-hover:text-[#0a1f12] transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[12px] font-bold leading-tight">25,000+</span>
              <span className="text-white/80 text-[10px] md:text-[11px] font-medium leading-tight group-hover:text-white transition-colors">Trade Visitors</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-center md:justify-start gap-3 px-3 py-2.5 hover:bg-black/10 transition-colors cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#F2B40E] group-hover:shadow-md transition-all duration-300">
              <Map size={14} className="text-white group-hover:text-[#0a1f12] transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[12px] font-bold leading-tight">15,000 Sqm</span>
              <span className="text-white/80 text-[10px] md:text-[11px] font-medium leading-tight group-hover:text-white transition-colors">Exhibition Area</span>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center justify-center md:justify-start gap-3 px-3 py-2.5 hover:bg-black/10 transition-colors rounded-r-lg cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#F2B40E] group-hover:shadow-md transition-all duration-300">
              <Award size={14} className="text-white group-hover:text-[#0a1f12] transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[12px] font-bold leading-tight">10+ Years</span>
              <span className="text-white/80 text-[10px] md:text-[11px] font-medium leading-tight group-hover:text-white transition-colors">Proven Experience</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutStrip;
