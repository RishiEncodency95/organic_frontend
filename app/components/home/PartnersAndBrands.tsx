"use client";

import React from 'react';
import {
  Leaf, BookOpen, User, Handshake,
  GraduationCap, Sprout, Lightbulb,
  Plus, HeartPulse, Flower2,
  Users, Globe, Sun, Droplet
} from "lucide-react";

// Helper components for the visual styling
const Divider = () => (
  <div className="flex items-center justify-center gap-2 my-4">
    <div className="w-12 md:w-24 h-[1px] bg-gray-300"></div>
    <div className="flex items-center gap-1 text-[#2d7a2d]">
      <Leaf size={12} className="transform -rotate-45 fill-current" />
      <Leaf size={16} className="fill-current" />
      <Leaf size={12} className="transform rotate-45 fill-current" />
    </div>
    <div className="w-12 md:w-24 h-[1px] bg-gray-300"></div>
  </div>
);

const VerticalSeparator = () => (
  <div className="w-[1px] h-10 bg-gray-200 mx-4 md:mx-6 shrink-0"></div>
);

// Marquee Wrapper for infinite CSS scrolling
const Marquee = ({ children, reverse = false, speed = "35s" }: { children: React.ReactNode, reverse?: boolean, speed?: string }) => {
  return (
    <div className="w-full relative overflow-hidden group">
      <div
        className={`flex items-center w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: speed }}
      >
        {/* We duplicate children multiple times to ensure seamless infinite scroll */}
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
};

const PartnersAndBrands = () => {
  return (
    <section className="bg-[#fafaf9] py-6 md:py-8 overflow-hidden font-sans">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } /* Scrolls half the width since we duplicated it */
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse linear infinite;
        }
        .group:hover .animate-marquee, .group:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-2 md:px-4">

        {/* HEADER */}
        <div className="text-center mb-2">
          <p className="text-[10px] md:text-[12px] font-bold text-gray-500 tracking-[0.2em] uppercase mb-0.5">
            Trusted By
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a5a2a] tracking-tight">
            INDUSTRY LEADERS
          </h2>
          <Divider />
        </div>

        {/* TOP ROW: MARQUEE LOGOS */}
        <div className="bg-white rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 py-4 mb-3 w-full overflow-hidden">
          <Marquee speed="60s">
            <div className="flex items-center">
              {/* Logo 1 */}
              <div className="flex flex-col items-center justify-center min-w-[140px] px-2 hover:scale-105 transition-transform cursor-pointer">
                <Leaf size={24} className="text-[#3b8c2a] fill-[#3b8c2a] mb-1" />
                <span className="font-bold text-[#111] text-[18px] leading-none">BIO FARMS</span>
                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">SINCE 1998</span>
              </div>
              <VerticalSeparator />
              {/* Logo 2 */}
              <div className="flex flex-col items-center justify-center min-w-[140px] px-2 hover:scale-105 transition-transform cursor-pointer">
                <div className="relative">
                  <span className="font-black text-[#1a5fa8] text-[20px] leading-none">Naturals</span>
                  <Leaf size={12} className="absolute -top-2 -right-2 text-[#3b8c2a] fill-[#3b8c2a]" />
                </div>
              </div>
              <VerticalSeparator />
              {/* Logo 3 */}
              <div className="flex flex-col items-center justify-center min-w-[140px] px-2 hover:scale-105 transition-transform cursor-pointer">
                <Sprout size={20} className="text-[#d97706] mb-1" />
                <span className="font-bold text-[#d97706] text-[18px] leading-none">GREEN VEDA</span>
                <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">AYURVEDA</span>
              </div>
              <VerticalSeparator />
              {/* Logo 4 */}
              <div className="flex flex-col items-center justify-center min-w-[140px] px-2 hover:scale-105 transition-transform cursor-pointer">
                <span className="font-bold text-[#2d7a2d] text-[22px] leading-none flex items-center">
                  Bio<Leaf size={18} className="text-[#3b8c2a] fill-[#3b8c2a] mx-0.5" />Grow
                </span>
              </div>
              <VerticalSeparator />
              {/* Logo 5 */}
              <div className="flex flex-col items-center justify-center min-w-[140px] px-2 hover:scale-105 transition-transform cursor-pointer">
                <Leaf size={20} className="text-[#0b2912] fill-[#0b2912] mb-1" />
                <span className="font-black text-[#0b2912] text-[16px] leading-none tracking-tight">FRESH LEAF</span>
              </div>
              <VerticalSeparator />
              {/* Logo 6 */}
              <div className="flex flex-col items-center justify-center min-w-[140px] px-2 hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-center">
                  <Leaf size={20} className="text-[#e65c00] fill-[#e65c00] mr-1" />
                  <span className="font-bold text-[#e65c00] text-[20px] leading-none">NutriLife</span>
                </div>
              </div>
              <VerticalSeparator />
              {/* Logo 7 */}
              <div className="flex flex-col items-center justify-center min-w-[140px] px-2 hover:scale-105 transition-transform cursor-pointer">
                <span className="font-black text-[#3b8c2a] text-[18px] leading-none">ECO</span>
                <span className="text-[12px] text-[#3b8c2a] font-bold tracking-widest leading-none mt-0.5">HARVEST</span>
              </div>
              <VerticalSeparator />
            </div>
          </Marquee>
        </div>

        {/* MIDDLE ROW: 3 CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-3 mb-3">

          {/* Card 1: Knowledge Partners */}
          <div className="bg-white rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 px-4 py-2 flex flex-col">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-[1px] bg-gray-300"></div>
              <div className="w-6 h-6 rounded-full bg-[#1a5a2a] flex items-center justify-center text-white shrink-0">
                <BookOpen size={12} className="fill-current" />
              </div>
              <span className="text-[10px] lg:text-[13px] font-semibold text-[#111] tracking-widest uppercase">KNOWLEDGE PARTNERS</span>
              <div className="w-6 h-[1px] bg-gray-300"></div>
            </div>

            <div className="w-full flex-1 relative mt-2">
              <Marquee speed="20s">
                <div className="flex items-start">
                  <div className="flex flex-col items-center w-[90px] shrink-0">
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#2d7a2d] mb-1.5 hover:scale-110 transition-transform cursor-pointer">
                      <GraduationCap size={20} />
                    </div>
                    <span className="font-bold text-[#2d7a2d] text-center text-[12px] leading-tight mb-1">Eco<br />Science</span>
                    <span className="text-[7px] font-bold text-gray-400 uppercase tracking-wider">ACADEMY</span>
                  </div>
                  <div className="w-[1px] h-12 bg-gray-100 mx-3 mt-2 shrink-0"></div>

                  <div className="flex flex-col items-center w-[90px] shrink-0">
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#1a5a2a] mb-1.5 hover:scale-110 transition-transform cursor-pointer">
                      <Leaf size={20} className="fill-current" />
                    </div>
                    <span className="font-bold text-[#1a5a2a] text-center text-[12px] leading-tight mb-1">Green<br />Learn</span>
                    <span className="text-[7px] font-bold text-gray-400 uppercase tracking-wider">UNIVERSITY</span>
                  </div>
                  <div className="w-[1px] h-12 bg-gray-100 mx-3 mt-2 shrink-0"></div>

                  <div className="flex flex-col items-center w-[90px] shrink-0">
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#2d7a2d] mb-1.5 hover:scale-110 transition-transform cursor-pointer">
                      <Lightbulb size={20} />
                    </div>
                    <span className="font-bold text-[#2d7a2d] text-center text-[12px] leading-tight mb-1">Future<br />Insights</span>
                    <span className="text-[7px] font-bold text-gray-400 uppercase tracking-wider">INSTITUTE</span>
                  </div>
                  <div className="w-[1px] h-12 bg-gray-100 mx-3 mt-2 shrink-0"></div>
                </div>
              </Marquee>
            </div>
          </div>

          {/* Card 2: Wellness Partners */}
          <div className="bg-white rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 px-4 py-2 flex flex-col">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-[1px] bg-gray-300"></div>
              <div className="w-6 h-6 rounded-full bg-[#5a8024] flex items-center justify-center text-white shrink-0">
                <User size={12} className="fill-current" />
              </div>
              <span className="text-[10px] lg:text-[13px] font-semibold text-[#111] tracking-widest uppercase whitespace-nowrap">WELLNESS PARTNERS</span>
              <div className="w-6 h-[1px] bg-gray-300"></div>
            </div>

            <div className="w-full flex-1 relative mt-2">
              <Marquee speed="20s" reverse>
                <div className="flex items-start">
                  <div className="flex flex-col items-center w-[90px] shrink-0">
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#dc2626] mb-1.5 hover:scale-110 transition-transform cursor-pointer">
                      <Plus size={20} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-[#dc2626] text-center text-[12px] leading-tight mb-1">PureHealth</span>
                    <span className="text-[7px] font-bold text-gray-400 uppercase tracking-wider">CENTERS</span>
                  </div>
                  <div className="w-[1px] h-12 bg-gray-100 mx-3 mt-2 shrink-0"></div>

                  <div className="flex flex-col items-center w-[90px] shrink-0">
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#0284c7] mb-1.5 hover:scale-110 transition-transform cursor-pointer">
                      <HeartPulse size={20} />
                    </div>
                    <span className="font-bold text-[#0284c7] text-center text-[12px] leading-tight mb-1">HealthPlus</span>
                    <span className="text-[7px] font-bold text-gray-400 uppercase tracking-wider">HOSPITALS</span>
                  </div>
                  <div className="w-[1px] h-12 bg-gray-100 mx-3 mt-2 shrink-0"></div>

                  <div className="flex flex-col items-center w-[90px] shrink-0">
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#7c3aed] mb-1.5 hover:scale-110 transition-transform cursor-pointer">
                      <Flower2 size={20} />
                    </div>
                    <span className="font-bold text-[#7c3aed] text-center text-[12px] leading-tight mb-1">MindCare</span>
                    <span className="text-[7px] font-bold text-gray-400 uppercase tracking-wider">WELLNESS</span>
                  </div>
                  <div className="w-[1px] h-12 bg-gray-100 mx-3 mt-2 shrink-0"></div>
                </div>
              </Marquee>
            </div>
          </div>

          {/* Card 3: Supporting Associations */}
          <div className="bg-white rounded-xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-gray-100 px-4 py-2 flex flex-col">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-[1px] bg-gray-300"></div>
              <div className="w-6 h-6 rounded-full bg-[#1e4a32] flex items-center justify-center text-white shrink-0">
                <Handshake size={12} className="fill-current" />
              </div>
              <span className="text-[10px] lg:text-[13px] font-semibold text-[#111] tracking-widest uppercase">SUPPORTING ASSOCIATIONS</span>
              <div className="w-6 h-[1px] bg-gray-300"></div>
            </div>

            <div className="w-full flex-1 relative mt-2">
              <Marquee speed="20s">
                <div className="flex items-start">
                  <div className="flex flex-col items-center w-[90px] shrink-0">
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#2563eb] mb-1.5 hover:scale-110 transition-transform cursor-pointer">
                      <Users size={20} />
                    </div>
                    <span className="font-bold text-[#2563eb] text-center text-[12px] leading-tight mb-1">AgriUnion</span>
                    <span className="text-[7px] font-bold text-gray-400 uppercase tracking-wider">FEDERATION</span>
                  </div>
                  <div className="w-[1px] h-12 bg-gray-100 mx-3 mt-2 shrink-0"></div>

                  <div className="flex flex-col items-center w-[90px] shrink-0">
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#166534] mb-1.5 hover:scale-110 transition-transform cursor-pointer">
                      <Globe size={20} />
                    </div>
                    <span className="font-bold text-[#166534] text-center text-[12px] leading-tight mb-1">EarthSave</span>
                    <span className="text-[7px] font-bold text-gray-400 uppercase tracking-wider">FOUNDATION</span>
                  </div>
                  <div className="w-[1px] h-12 bg-gray-100 mx-3 mt-2 shrink-0"></div>

                  <div className="flex flex-col items-center w-[90px] shrink-0">
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#ea580c] mb-1.5 hover:scale-110 transition-transform cursor-pointer">
                      <Sprout size={20} />
                    </div>
                    <span className="font-bold text-[#ea580c] text-center text-[12px] leading-tight mb-1">GreenEarth</span>
                    <span className="text-[7px] font-bold text-gray-400 uppercase tracking-wider">ALLIANCE</span>
                  </div>
                  <div className="w-[1px] h-12 bg-gray-100 mx-3 mt-2 shrink-0"></div>
                </div>
              </Marquee>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW HEADER */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-24 md:w-32 h-[1px] bg-gray-300"></div>
            <h3 className="text-[11px] md:text-[13px] font-bold text-[#333] tracking-[0.2em] uppercase">
              EMERGING ORGANIC BRANDS
            </h3>
            <div className="w-24 md:w-32 h-[1px] bg-gray-300"></div>
          </div>
          {/* <div className="flex items-center justify-center gap-1 text-[#2d7a2d] mt-1.5">
            <Leaf size={10} className="transform -rotate-45 fill-current" />
            <Leaf size={14} className="fill-current" />
            <Leaf size={10} className="transform rotate-45 fill-current" />
          </div> */}
        </div>

        {/* BOTTOM ROW: MARQUEE */}
        <div className="w-full">
          <Marquee speed="70s" reverse>
            <div className="flex gap-3 px-1.5">

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center p-3 w-[150px] relative overflow-hidden group hover:shadow-md transition-all cursor-pointer">
                <Leaf size={28} className="text-[#1a5a2a] fill-[#1a5a2a] mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-[#111] text-[13px] text-center">OrgEssentials</span>
                <div className="absolute bottom-0 left-4 right-4 h-1 bg-[#1a5a2a] rounded-t-md"></div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center p-3 w-[150px] relative overflow-hidden group hover:shadow-md transition-all cursor-pointer">
                <Globe size={28} className="text-[#2d7a2d] mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-[#111] text-[13px] text-center">PureEarth</span>
                <div className="absolute bottom-0 left-4 right-4 h-1 bg-[#2d7a2d] rounded-t-md"></div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center p-3 w-[150px] relative overflow-hidden group hover:shadow-md transition-all cursor-pointer">
                <div className="mb-2 group-hover:scale-110 transition-transform">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#854d0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22v-6" /><path d="M12 16a4 4 0 0 0-4-4H6" /><path d="M12 16a4 4 0 0 1 4-4h2" /><path d="M8 12a4 4 0 0 1-4-4V6" /><path d="M16 12a4 4 0 0 0 4-4V6" /><circle cx="12" cy="5" r="3" />
                  </svg>
                </div>
                <span className="font-bold text-[#854d0e] text-[13px] text-center font-serif">Vedic Roots</span>
                <div className="absolute bottom-0 left-4 right-4 h-1 bg-[#854d0e] rounded-t-md"></div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center p-3 w-[150px] relative overflow-hidden group hover:shadow-md transition-all cursor-pointer">
                <Sun size={28} className="text-[#ea580c] mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-bold text-[#ea580c] text-[13px] text-center">SunHarvest</span>
                <div className="absolute bottom-0 left-4 right-4 h-1 bg-[#ea580c] rounded-t-md"></div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center p-3 w-[150px] relative overflow-hidden group hover:shadow-md transition-all cursor-pointer">
                <div className="mb-2 group-hover:scale-110 transition-transform relative">
                  <Leaf size={22} className="text-[#1a5a2a] fill-[#1a5a2a]" />
                  <Leaf size={14} className="text-[#3b8c2a] fill-[#3b8c2a] absolute -top-1 -right-2 transform rotate-45" />
                </div>
                <span className="font-bold text-[#111] text-[13px] text-center">AgriNova</span>
                <div className="absolute bottom-0 left-4 right-4 h-1 bg-[#1a5a2a] rounded-t-md"></div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center p-3 w-[150px] relative overflow-hidden group hover:shadow-md transition-all cursor-pointer">
                <Leaf size={28} className="text-[#4d7c0f] fill-[#4d7c0f] mb-1 group-hover:scale-110 transition-transform" />
                <span className="font-black text-[#111] text-[12px] text-center uppercase leading-tight">GREEN BLEND</span>
                <span className="text-[6px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">ORGANICS</span>
                <div className="absolute bottom-0 left-4 right-4 h-1 bg-[#4d7c0f] rounded-t-md"></div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center p-3 w-[150px] relative overflow-hidden group hover:shadow-md transition-all cursor-pointer">
                <div className="mb-2 group-hover:scale-110 transition-transform flex gap-1">
                  <Leaf size={18} className="text-[#1a5a2a] fill-[#1a5a2a] transform -rotate-12" />
                  <Leaf size={22} className="text-[#1a5a2a] fill-[#1a5a2a] transform rotate-12" />
                </div>
                <span className="font-bold text-[#1a5a2a] text-[14px] text-center">Herbaya</span>
                <div className="absolute bottom-0 left-4 right-4 h-1 bg-[#1a5a2a] rounded-t-md"></div>
              </div>

            </div>
          </Marquee>
        </div>

      </div>
    </section>
  );
};

export default PartnersAndBrands;
