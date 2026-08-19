"use client";

import React from "react";
import { Search, Building2, ShoppingBag, Tag, Handshake, TrendingUp, Target } from "lucide-react";

const cards = [
  {
    num: "01",
    icon: Search,
    title: "Discover New Products",
    desc: "Explore a wide range of new launches, innovative products and emerging brands across multiple categories.",
  },
  {
    num: "02",
    icon: Building2,
    title: "Meet Manufacturers",
    desc: "Connect directly with verified manufacturers, producers and suppliers from across India and beyond.",
  },
  {
    num: "03",
    icon: ShoppingBag,
    title: "Source for Your Business",
    desc: "Find the right products for retail, distribution, e-commerce, hospitality, institutional procurement and more.",
  },
  {
    num: "04",
    icon: Tag,
    title: "Explore Private Label",
    desc: "Meet brands and manufacturers offering OEM, contract manufacturing and private-label opportunities.",
  },
  {
    num: "05",
    icon: Handshake,
    title: "Build Partnerships",
    desc: "Explore dealership, distributorship, collaboration and long-term business partnership opportunities.",
  },
  {
    num: "06",
    icon: TrendingUp,
    title: "Understand Market Trends",
    desc: "Gain insights into market trends, consumer demand, industry innovations and future business opportunities.",
  },
];

const WhyVisitMatters = () => {
  return (
    <section className="py-16 bg-[#f8faf8] font-inter relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#285e19_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          {/* Top Banner Ribbon */}
          <div className="inline-flex items-center gap-2 bg-[#285e19] text-white px-5 py-1.5 rounded-full shadow-md">
            <span className="text-xs">🌿</span>
            <span className="font-poppins font-bold text-xs uppercase tracking-widest">
              BUSINESS OPPORTUNITIES UNDER ONE ROOF
            </span>
            <span className="text-xs">🌿</span>
          </div>

          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#112a12]">
            Why Your Visit Matters
          </h2>

          <p className="font-inter text-slate-600 text-sm sm:text-base leading-relaxed">
            Bharat Organic Expo brings the right products, suppliers and decision-makers together, <span className="font-semibold text-[#285e19]">creating real opportunities for your business growth.</span>
          </p>
        </div>

        {/* 6 CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 relative shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center"
              >
                {/* Top Corner Number Badge */}
                <div className="absolute top-0 left-0 bg-[#285e19] text-white font-poppins font-bold text-xs px-3.5 py-1.5 rounded-tl-2xl rounded-br-xl shadow-sm">
                  {card.num}
                </div>

                {/* Circular Icon Holder */}
                <div className="w-16 h-16 rounded-full bg-[#e8f3e7] border border-[#285e19]/20 flex items-center justify-center text-[#285e19] mb-5 group-hover:bg-[#285e19] group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Card Title */}
                <h3 className="font-poppins font-semibold text-lg sm:text-xl text-[#112a12] mb-3 group-hover:text-[#285e19] transition-colors">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="font-inter text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* BOTTOM HIGHLIGHT STRIP */}
        <div className="mt-12 max-w-4xl mx-auto bg-[#e6f2e4] border border-[#b5dbb1] rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="w-14 h-14 rounded-full bg-[#285e19] text-white flex items-center justify-center shrink-0 shadow-md">
            <Target className="w-7 h-7" />
          </div>
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-poppins font-bold text-lg text-[#112a12]">
              One Visit. Multiple Opportunities.
            </h4>
            <p className="font-inter text-xs sm:text-sm text-slate-700 font-medium">
              Save time, meet the right people and take your business to the next level.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyVisitMatters;
