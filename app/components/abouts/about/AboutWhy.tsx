"use client";

import React from "react";
import Image from "next/image";
import { Leaf, Users, Globe2, BookOpen, Star, ShieldCheck, ArrowRight } from "lucide-react";
import bgImage from "../../../assets/about/whybg.png";

const reasons = [
  {
    title: "Organic Innovation",
    description: "Discover the latest organic products, technologies & groundbreaking innovations.",
    icon: Leaf
  },
  {
    title: "Business Networking",
    description: "Connect with buyers, suppliers, investors & industry experts from across the globe.",
    icon: Users
  },
  {
    title: "International Buyers",
    description: "Global participation from 25+ countries creating endless opportunities.",
    icon: Globe2
  },
  {
    title: "Knowledge Sessions",
    description: "Attend conferences, seminars & workshops by leading experts and changemakers.",
    icon: BookOpen
  },
  {
    title: "Premium Brands",
    description: "Explore top organic & natural brands all under one roof.",
    icon: Star
  },
  {
    title: "Sustainability",
    description: "Committed to a greener planet and a sustainable future for generations.",
    icon: ShieldCheck
  }
];

const AboutWhy = () => {
  return (
    <section className="relative px-2 lg:px-11 w-full overflow-hidden font-inter py-4">

      {/* Background Image */}
      <div className="absolute inset-0 z-0  w-full h-full">
        <Image src={bgImage} alt="Background" fill className="object-cover" quality={100} priority />
      </div>

      <div className=" relative z-10">

        {/* Title Section */}
        <div className="flex flex-col items-center justify-center mb-6 relative z-10 text-center">
          <div className="flex items-center gap-3 mb-2">
            <Leaf size={16} className="text-[#3b8c2a] fill-[#3b8c2a] rotate-[135deg]" />
            <h2 className="text-[#154726] text-[13px] md:text-[14px] font-bold uppercase tracking-[0.2em] text-center">
              WHY BHARAT ORGANIC EXPO?
            </h2>
            <Leaf size={16} className="text-[#3b8c2a] fill-[#3b8c2a] rotate-[-45deg]" />
          </div>

          <h3 className="text-[#111827] text-xl md:text-2xl lg:text-2xl font-serif font-semibold mb-2 leading-[1.2]">
            Experience The Future <span className="text-[#3b8c2a]">Of Organic Living</span>
          </h3>

          <p className="text-gray-800 text-[12px] md:text-[16px] max-w-6xl leading-relaxed">
            Bharat Organic Expo brings together innovation, knowledge, and opportunity to build a healthier tomorrow for people and the planet. Our vision is to empower organic farmers, promote eco-friendly practices, and create a sustainable ecosystem where ethical businesses thrive. Join thousands of visionaries, industry leaders, and conscious consumers as we champion natural wellness and drive a global movement towards a greener, safer future.
          </p>
        </div>

        {/* Grid */}
        <div className="flex flex-nowrap lg:grid lg:grid-cols-6 gap-4 overflow-x-auto pb-2 snap-x snap-mandatory no-scrollbar px-4 lg:px-0">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const num = (index + 1).toString().padStart(2, "0");
            return (
              <div
                key={index}
                className="min-w-[280px] lg:min-w-0 bg-white/90 backdrop-blur-sm rounded-lg p-2 lg:p-3 xl:p-3 shadow-[0_15px_50px_rgba(59,140,42,0.08)] border border-white flex flex-col items-center text-center group snap-center relative overflow-hidden transition-transform duration-500 hover:-translate-y-2"
              >
                {/* Badge Rings */}
                <div className="relative mb-4 mt-2">
                  <div className="w-[88px] h-[88px] absolute -top-3 -left-3 rounded-full border border-[#3b8c2a]/10 border-dashed animate-[spin_30s_linear_infinite]" />
                  <div className="w-[76px] h-[76px] absolute -top-1.5 -left-1.5 rounded-full border-[1.5px] border-[#3b8c2a]/15" />

                  {/* Badge Center */}
                  <div className="w-16 h-16 rounded-full bg-[#3b8c2a] flex items-center justify-center relative z-10 shadow-[0_8px_20px_rgba(59,140,42,0.4)] group-hover:bg-[#154726] transition-colors duration-500">
                    <Icon size={26} className="text-white" strokeWidth={1.5} />
                  </div>
                </div>

                <h4 className="text-[#154726] text-[16px] lg:text-[15px] xl:text-[17px] font-bold mb-2">{reason.title}</h4>

                {/* Small Separator */}
                <div className="w-8 h-[2px] bg-[#3b8c2a]/30 mb-5" />

                <p className="text-[#4b5563] text-[13px] lg:text-[12px] xl:text-[13px] leading-relaxed relative z-10 mb-4 min-h-[40px]">
                  {reason.description}
                </p>

                {/* Watermark Number */}
                <div className="mt-auto relative z-0">
                  <span className="text-[36px] font-bold text-[#3b8c2a]/10 font-sans tracking-tighter">{num}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Button */}
        <div className="mt-4 flex justify-center relative z-10">
           <button className="bg-[#3b8c2a] hover:bg-[#2c6e1f] text-white px-6 py-2.5 rounded-lg font-bold text-xs tracking-wider uppercase flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-fit">
             BE A PART OF THE CHANGE <ArrowRight className="w-4 h-4" />
           </button>
        </div>

      </div>
    </section>
  );
};

export default AboutWhy;
