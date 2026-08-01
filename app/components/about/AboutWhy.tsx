"use client";

import React from "react";
import { Leaf, Network, Globe2, BookOpen, Star, ShieldCheck } from "lucide-react";

const reasons = [
  {
    title: "Organic Innovation",
    description: "Showcasing the latest organic products, technologies & innovations",
    icon: Leaf
  },
  {
    title: "Business Networking",
    description: "Connect with buyers, suppliers, investors & experts",
    icon: Network
  },
  {
    title: "International Buyers",
    description: "Global participation from 25+ countries every year",
    icon: Globe2
  },
  {
    title: "Knowledge Sessions",
    description: "Conferences, seminars & workshops by industry leaders",
    icon: BookOpen
  },
  {
    title: "Premium Brands",
    description: "Top organic & natural brands under one roof",
    icon: Star
  },
  {
    title: "Sustainability",
    description: "Committed to a greener planet and sustainable future",
    icon: ShieldCheck
  }
];

const AboutWhy = () => {
  return (
    <section className="w-full  px-4 sm:px-6 lg:px-11 py-2">

      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-4">
        <h2 className="text-[#3b8c2a] text-[16px] md:text-[18px] font-bold uppercase tracking-widest text-center">
          WHY BHARAT ORGANIC EXPO?
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-t-[32px] rounded-b-xl border border-gray-100 border-t-[6px] border-t-[#3b8c2a] p-5 shadow-sm hover:shadow-xl hover:shadow-[#3b8c2a]/20 hover:-translate-y-2 transition-all duration-700 ease-in-out flex flex-col items-center text-center group cursor-default"
            >
              <div className="w-14 h-14 rounded-full border border-dashed border-[#3b8c2a]/40 bg-[#f8fdf9] flex items-center justify-center mb-4 group-hover:bg-[#3b8c2a] transition-colors duration-700">
                <Icon size={24} className="text-[#3b8c2a] group-hover:text-white transition-colors duration-700" strokeWidth={1.5} />
              </div>
              <h4 className="text-[#111827] text-[13px] font-bold mb-2">{reason.title}</h4>
              <p className="text-[#64748b] text-[11px] leading-relaxed">
                {reason.description}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default AboutWhy;
