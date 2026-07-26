"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Star, Globe, Leaf } from "lucide-react";

const badges = [
  {
    icon: Star,
    text: "India's Premier Platform\nfor Organic Excellence",
  },
  {
    icon: Globe,
    text: "Connecting Global\nBuyers & Sellers",
  },
  {
    icon: Leaf,
    text: "Driving Sustainable\nFuture Together",
  }
];

const AboutIntro = () => {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-10">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-5/12 flex flex-col items-start">
          <span className="text-[#3b8c2a] text-[12px] font-bold tracking-widest uppercase mb-3">
            WHO WE ARE
          </span>
          <h2 className="text-[#111827] text-[28px] md:text-[36px] font-extrabold leading-tight mb-6">
            About Bharat Organic Expo
          </h2>
          
          <p className="text-[#64748b] text-[14px] md:text-[15px] leading-relaxed mb-5 font-medium">
            Bharat Organic Expo is India's leading platform dedicated to organic agriculture, sustainable living, natural healthcare, Ayurveda, wellness, eco-friendly innovations and responsible business networking.
          </p>
          <p className="text-[#64748b] text-[14px] md:text-[15px] leading-relaxed mb-8 font-medium">
            Every year thousands of visitors, buyers, manufacturers, investors, exporters and policymakers participate to build the future of sustainable India.
          </p>

          <Link 
            href="#our-story"
            className="bg-[#154726] hover:bg-[#0b2912] text-white px-6 py-3 rounded-lg text-[13px] font-bold transition-all shadow-md flex items-center gap-2"
          >
            Our Journey <ArrowRight size={16} />
          </Link>
        </div>

        {/* Right Side: Image & Badges */}
        <div className="w-full lg:w-7/12 relative">
          
          {/* Main Image */}
          <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop')" }}
            />
            {/* Subtle inner shadow/gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Floating Badges */}
          <div className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10 w-[240px] md:w-[280px]">
            {badges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div 
                  key={index} 
                  className="bg-[#154726] text-white p-3 rounded-xl shadow-lg flex items-center gap-3 transform transition-transform hover:-translate-x-2 duration-300 cursor-default border border-[#1e5a32]"
                >
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
                    <Icon size={18} className="text-[#3b8c2a]" />
                  </div>
                  <p className="text-[11px] font-bold leading-snug whitespace-pre-line">
                    {badge.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutIntro;
