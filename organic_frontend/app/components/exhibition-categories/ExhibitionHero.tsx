"use client";

import React from "react";
import Link from "next/link";
import { Users, Globe, Handshake, Calendar, MapPin, ChevronRight } from "lucide-react";
import heroBg from "@/app/assets/exhibition-categories/hero-bg.png";

export default function ExhibitionHero() {
  return (
    <section
      className="relative w-full overflow-hidden pt-14 bg-cover bg-right md:bg-center bg-no-repeat  flex flex-col justify-center border-b border-gray-200"
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      <div className="w-full px-4 md:px-18 relative z-10 h-full flex flex-col">
        {/* Breadcrumb */}
        <div className="mb-1 flex items-center gap-2 text-[14px] font-medium text-gray-700 w-max">
          <Link href="/" className="hover:text-[#1b5e20] transition-colors">Home</Link>
          <ChevronRight size={14} className="text-gray-500" />
          <span className="font-semibold text-gray-800">Exhibition Categories</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 flex-1 justify-between items-end pb-4">

          {/* Left Content */}
          <div className="lg:w-[65%] flex flex-col pt-2">
            <h1 className="text-[18px] md:text-[32px] lg:text-[44px] font-semibold leading-[1.2] text-[#143a1b] uppercase font-inter mb-3 tracking-tight">
              EXHIBITION CATEGORIES
            </h1>
            <h2 className="text-[18px] md:text-[22px] font-semibold text-[#1b5e20] uppercase tracking-wide mb-5">
              EXPLORE THE COMPLETE ORGANIC ECOSYSTEM
            </h2>
            <p className="text-[15px] md:text-[17px] leading-relaxed text-gray-800 font-medium mb-8 max-w-[650px]">
              From farm inputs and organic production to finished products, technology,
              certification and global trade—discover every opportunity to grow your
              business at Bharat Organic Expo 2027.
            </p>

            {/* Stats Bar */}
            <div className="inline-flex flex-wrap items-center bg-white/95 backdrop-blur-sm rounded-lg p-2.5 shadow-[0_4px_15px_rgba(0,0,0,0.05)] border border-gray-100 max-w-max">
              <div className="flex items-center gap-3 px-4">
                <div className="w-11 h-11 rounded-full bg-[#1b5e20] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="leading-tight pr-2">
                  <div className="font-semibold text-gray-900 text-[18px]">200+</div>
                  <div className="text-[13px] font-semibold text-gray-700 leading-tight mt-0.5">Exhibitors<br />Expected</div>
                </div>
              </div>

              <div className="w-px h-12 bg-gray-200 hidden md:block mx-1"></div>

              <div className="flex items-center gap-3 px-4">
                <div className="w-11 h-11 rounded-full bg-[#f58220] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="leading-tight pr-2">
                  <div className="font-semibold text-gray-900 text-[18px]">8000+</div>
                  <div className="text-[13px] font-semibold text-gray-700 leading-tight mt-0.5">Business<br />Visitors</div>
                </div>
              </div>

              <div className="w-px h-12 bg-gray-200 hidden md:block mx-1"></div>

              <div className="flex items-center gap-3 px-4">
                <div className="w-11 h-11 rounded-full bg-[#1b5e20] flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="leading-tight pr-2">
                  <div className="font-semibold text-gray-900 text-[18px]">Global</div>
                  <div className="text-[13px] font-semibold text-gray-700 leading-tight mt-0.5">Business<br />Platform</div>
                </div>
              </div>

              <div className="w-px h-12 bg-gray-200 hidden md:block mx-1"></div>

              <div className="flex items-center gap-3 px-4">
                <div className="w-11 h-11 rounded-full bg-[#f58220] flex items-center justify-center shrink-0">
                  <Handshake className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="leading-tight">
                  <div className="font-semibold text-gray-900 text-[18px]">Endless</div>
                  <div className="text-[13px] font-semibold text-gray-700 leading-tight mt-0.5">Business<br />Opportunities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Area - Date & Venue Card Overlay */}
          <div className="lg:absolute lg:right-14 -lg:-bottom-2 mt-6 lg:mt-0 flex justify-end">
            <div className="bg-[#0b2b10]/95 backdrop-blur-md border border-[#3b8c2a]/60 rounded-[20px] px-4 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.2)] w-fit transform hover:scale-[1.02] transition-all duration-300">
              <div className="flex items-start gap-3 mb-2 pb-2 border-b border-[#3b8c2a]/40">
                <Calendar className="w-6 h-6 text-[#f58220] shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <div className="text-white font-semibold text-[22px] leading-none mb-1 tracking-wide">19 – 21</div>
                  <div className="text-white/90 font-bold text-[14px] uppercase tracking-[0.15em]">FEBRUARY 2027</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#f58220] shrink-0 mt-0.5" strokeWidth={2} />
                <div className="text-white/95 text-[14px] font-medium leading-[1.7]">
                  Hall 12, Bharat Mandapam<br />
                  Pragati Maidan,<br />
                  New Delhi, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
