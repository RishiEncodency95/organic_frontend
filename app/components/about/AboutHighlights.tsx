"use client";

import React from "react";
import { CheckCircle2, Globe2, Leaf, Users, Calendar, ArrowRight, BookOpen, Sprout } from "lucide-react";
import Image from "next/image";

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
    <section className="w-full px-2 lg:px-11 py-4 font-inter bg-[#fafcfb]">

      {/* Top Header */}
      <div className="flex flex-col items-center text-center mb-2">
        <div className="flex items-center gap-2 mb-3">
          <Leaf size={14} className="text-[#3b8c2a]" strokeWidth={2.5} />
          <h4 className="text-[#3b8c2a] text-[12px] font-bold tracking-[0.15em] uppercase">
            GLOBAL PLATFORM. IMPACTFUL SOLUTIONS.
          </h4>
          <Leaf size={14} className="text-[#3b8c2a]" strokeWidth={2.5} />
        </div>
        <h2 className="text-[#111827] text-lg lg:text-2xl font-serif font-semibold mb-3">
          What Makes Us <span className="text-[#3b8c2a]">Unique</span>
        </h2>
      </div>

      {/* 3 Columns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 h-full mb-4">

        {/* Conferences & Knowledge Sessions */}
        <div className="bg-white rounded-3xl p-4 lg:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center relative z-10">
          <div className="flex items-center gap-3 mb-3 w-full">
            <div className="w-[52px] h-[52px] rounded-full border border-[#e2eee4] flex items-center justify-center shrink-0 bg-white shadow-sm">
              <Users size={24} className="text-[#3b8c2a]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[#3b8c2a] text-[13px] lg:text-[14px] font-bold tracking-wide uppercase text-left leading-tight">
              CONFERENCES & KNOWLEDGE SESSIONS
            </h3>
          </div>
          <p className="text-gray-500 text-[12px] text-center leading-relaxed mb-3 px-2">
            Learn from industry leaders, experts and innovators shaping the organic future.
          </p>

          <div className="grid grid-cols-2 gap-x-2 gap-y-2 w-full mb-3">
            {conferences.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle2 size={13} className="text-[#3b8c2a] shrink-0 mt-0.5 bg-white" strokeWidth={2} />
                <span className="text-[#475569] text-[11px] lg:text-[11.5px] font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto w-full relative">
            <div className="w-full aspect-[16/9] rounded-xl overflow-hidden relative shadow-sm">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop')" }}
              />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#3b8c2a] rounded-[8px] flex items-center justify-center shadow-lg">
                <Calendar size={16} className="text-white" strokeWidth={2} />
              </div>
            </div>
            {/* Dots */}
            <div className="flex items-center justify-center gap-1 mt-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3b8c2a]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>

        {/* International Participation */}
        <div className="bg-white rounded-3xl p-4 lg:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center relative overflow-hidden z-10">
          <div className="flex items-center gap-3 mb-3 w-full relative z-20">
            <div className="w-[52px] h-[52px] rounded-full border border-[#e2eee4] flex items-center justify-center shrink-0 bg-white shadow-sm">
              <Globe2 size={24} className="text-[#3b8c2a]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[#3b8c2a] text-[13px] lg:text-[14px] font-bold tracking-wide uppercase text-left leading-tight">
              INTERNATIONAL PARTICIPATION
            </h3>
          </div>
          <p className="text-gray-500 text-[12px] text-center leading-relaxed mb-4 px-2 relative z-20">
            A global gathering of changemakers from across the world.
          </p>

          {/* Main graphic area */}
          <div className="flex-1 w-full flex flex-col items-center justify-start relative pt-2">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[#f4f9fb] opacity-60 rounded-3xl -z-10 mt-6"></div>

            {/* Center Circle */}
            <div className="w-[130px] h-[130px] lg:w-[140px] lg:h-[140px] bg-white rounded-full shadow-[0_0_30px_rgba(59,140,42,0.1)] flex flex-col items-center justify-center relative z-20 mb-4 border-[3px] border-[#f0f8f2]">
              <p className="text-gray-500 text-[11px] font-semibold mb-0.5">Participants from</p>
              <h4 className="text-[#106b8c] text-[36px] font-black leading-none mb-1">25<span className="text-[#3b8c2a]">+</span></h4>
              <p className="text-[#111827] text-[10px] lg:text-[11px] font-bold tracking-wider uppercase">COUNTRIES</p>
            </div>

            {/* Flags */}
            <div className="flex flex-wrap items-center justify-center gap-2 z-20 w-full px-2 max-w-[220px]">
              {['🇮🇳', '🇺🇸', '🇩🇪', '🇯🇵', '🇦🇺', '🇫🇷', '🇮🇹', '🇨🇦', '🇦🇪', '🇿🇦'].map((flag, i) => (
                <div key={i} className="w-[28px] h-[20px] bg-white rounded-[3px] flex items-center justify-center text-[14px] shadow-sm border border-gray-100">
                  {flag}
                </div>
              ))}
            </div>

            <div className="mt-auto pt-5 relative z-20">
              <div className="w-10 h-10 bg-[#0c6b96] rounded-full flex items-center justify-center shadow-lg mx-auto">
                <Users size={18} className="text-white" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-1 mt-3">
            <div className="w-3 h-1.5 rounded-full bg-[#0c6b96]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
          </div>
        </div>

        {/* Sustainability Initiatives */}
        <div className="bg-white rounded-3xl p-4 lg:p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center relative z-10">
          <div className="flex items-center gap-3 mb-3 w-full">
            <div className="w-[52px] h-[52px] rounded-full border border-[#e2eee4] flex items-center justify-center shrink-0 bg-white shadow-sm">
              <Leaf size={24} className="text-[#3b8c2a]" strokeWidth={1.5} />
            </div>
            <h3 className="text-[#3b8c2a] text-[13px] lg:text-[14px] font-bold tracking-wide uppercase text-left leading-tight">
              SUSTAINABILITY INITIATIVES
            </h3>
          </div>
          <p className="text-gray-500 text-[12px] text-center leading-relaxed mb-3 px-2">
            Promoting a greener planet through responsible and sustainable actions.
          </p>

          <div className="grid grid-cols-2 gap-x-2 gap-y-2 w-full mb-3 px-2">
            {sustainability.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full border border-[#3b8c2a] flex items-center justify-center shrink-0">
                  <Leaf size={7} className="text-[#3b8c2a]" strokeWidth={3} />
                </div>
                <span className="text-[#475569] text-[11px] lg:text-[11.5px] font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-auto w-full relative">
            <div className="w-full aspect-[16/9] rounded-xl overflow-hidden relative shadow-sm">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1000&auto=format&fit=crop')" }}
              />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#165a28] rounded-[8px] flex items-center justify-center shadow-lg">
                <Sprout size={16} className="text-white" strokeWidth={2} />
              </div>
            </div>
            {/* Dots */}
            <div className="flex items-center justify-center gap-1 mt-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#165a28]"></div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Banner */}
      <div className="w-full max-w-5xl mx-auto bg-[#f3f7f2] rounded-full p-3 lg:p-4 pr-3 lg:pr-4 flex flex-col md:flex-row items-center justify-between gap-4 border border-[#e8f1e6] shadow-[0_8px_30px_rgba(59,140,42,0.06)]">
        <div className="flex items-center gap-4">
          <div className="w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-50">
            <Leaf size={24} className="text-[#3b8c2a]" strokeWidth={1.5} />
          </div>
          <div className="hidden md:block text-left">
            <p className="text-[#3b8c2a] font-bold text-[15px] mb-0.5">Knowledge. Collaboration. Sustainability.</p>
            <p className="text-gray-500 text-[13px] font-medium">Uniting People. Empowering Change. Building a Better Tomorrow.</p>
          </div>
        </div>

        <button className="bg-[#469e36] hover:bg-[#38852a] transition-colors text-white text-[12px] font-bold uppercase tracking-wide px-8 py-4 rounded-full flex items-center gap-2 shadow-md">
          BE A PART OF THE CHANGE <ArrowRight size={16} strokeWidth={2.5} />
        </button>
      </div>

    </section>
  );
};

export default AboutHighlights;
