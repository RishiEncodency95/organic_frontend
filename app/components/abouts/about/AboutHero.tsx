"use client";

import React from "react";
import aboutBanner from "../../../assets/about/about.png";
import { Sprout, Users, Globe2, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: Sprout, label: "Sustainable\nFuture" },
  { icon: Users, label: "Stronger\nCommunity" },
  { icon: Globe2, label: "Ethical\nPractices" },
  { icon: Heart, label: "Healthy\nLiving" },
];

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[555px] lg:min-h-[610px] flex items-center overflow-hidden bg-white">
      {/* Background Image */}
      <img
        src={aboutBanner.src}
        alt="About Us Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Lightened dark gradient overlay so text is readable, just like home */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10 pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-20 container mx-auto max-w-[1400px] px-6 h-full flex flex-col justify-center">
        <div className="max-w-xl text-left mt-16 md:mt-0 space-y-4 w-full max-w-2xl">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#3b8c2a]/40 backdrop-blur-sm border border-[#3b8c2a]/50 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#F2B40E] animate-pulse"></span>
            <span className="text-white text-[10px] md:text-xs font-extrabold tracking-[0.2em] uppercase">
              ABOUT US
            </span>
          </div>
          
          {/* Title */}
          <h1 className="leading-[1.1] font-black drop-shadow-lg">
            <div className="text-white text-3xl md:text-5xl lg:text-[56px] mb-2 tracking-tight">
              Rooted in Nature.
            </div>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2B40E] to-[#fcebb6] text-3xl md:text-5xl lg:text-[56px] tracking-tight">
              Committed to a<br />
              Sustainable Future.
            </div>
          </h1>
          
          {/* Subtitle */}
          <div className="flex items-center gap-3 pt-1">
            <div className="w-12 h-1 bg-[#3b8c2a] rounded-full"></div>
            <span className="text-gray-100 font-bold text-sm md:text-[17px] tracking-widest uppercase drop-shadow-md">
              Organic & Sustainable
            </span>
          </div>
          
          {/* Description */}
          <p className="text-gray-200 font-medium text-[15px] md:text-base leading-relaxed max-w-xl drop-shadow-md">
            Bharat Organic Expo is India's leading platform that brings together organic brands, farmers, innovators, experts and conscious consumers to promote sustainable living, healthy choices and a greener future.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link
              href="/book-a-stand"
              className="bg-[#3b8c2a] hover:bg-[#2c6e1f] text-white px-6 py-2.5 rounded-lg font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              BOOK YOUR STALL
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/visitor-registration"
              className="bg-white hover:bg-slate-100 text-[#3b8c2a] px-6 py-2.5 rounded-lg font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-[#3b8c2a]"
            >
              REGISTER AS BUYER
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
