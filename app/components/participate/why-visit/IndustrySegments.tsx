"use client";

import React from "react";
import Link from "next/link";
import { Utensils, HeartPulse, Sprout, Sparkles, Recycle, Globe, ArrowRight } from "lucide-react";

const segments = [
  {
    icon: Utensils,
    color: "bg-[#285e19]",
    badgeBg: "bg-emerald-100 text-emerald-800",
    title: "Organic Food & Nutrition",
    items: "Food • Beverages • Nutraceuticals",
    gradient: "from-emerald-500/10 to-emerald-600/5",
    desc: "Certified organic pulses, grains, superfoods, organic tea/coffee, cold-pressed oils & health supplements."
  },
  {
    icon: HeartPulse,
    color: "bg-[#0d7377]",
    badgeBg: "bg-teal-100 text-teal-800",
    title: "AYUSH, Herbal & Wellness",
    items: "Ayurveda • Herbal • Wellness",
    gradient: "from-teal-500/10 to-teal-600/5",
    desc: "Ayurvedic formulations, herbal extracts, essential oils, wellness teas & traditional remedies."
  },
  {
    icon: Sprout,
    color: "bg-[#2d6a4f]",
    badgeBg: "bg-green-100 text-green-800",
    title: "Organic Agriculture",
    items: "Farming • Seeds • Bio-Inputs",
    gradient: "from-green-500/10 to-green-600/5",
    desc: "Bio-fertilizers, organic pesticides, non-GMO seeds, farm machinery & organic soil enhancers."
  },
  {
    icon: Sparkles,
    color: "bg-[#6b2d5c]",
    badgeBg: "bg-purple-100 text-purple-800",
    title: "Natural Living & Personal Care",
    items: "Beauty • Personal Care • Lifestyle",
    gradient: "from-purple-500/10 to-purple-600/5",
    desc: "Organic cosmetics, natural skincare, sustainable apparel, eco-friendly home care & hygiene products."
  },
  {
    icon: Recycle,
    color: "bg-[#0077b6]",
    badgeBg: "bg-sky-100 text-sky-800",
    title: "GreenTech & Sustainability",
    items: "AgriTech • Packaging • Processing",
    gradient: "from-sky-500/10 to-sky-600/5",
    desc: "Biodegradable packaging, solar energy solutions, waste management & smart AgriTech innovations."
  },
  {
    icon: Globe,
    color: "bg-[#d97706]",
    badgeBg: "bg-amber-100 text-amber-800",
    title: "Trade, Certification & Services",
    items: "Certification • Export • Import",
    gradient: "from-amber-500/10 to-amber-600/5",
    desc: "Organic certification bodies, export-import agencies, testing labs & B2B logistics services."
  },
];

const IndustrySegments = () => {
  return (
    <section className="py-16 bg-white font-inter relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#285e19] font-poppins font-bold text-xs sm:text-sm uppercase tracking-widest">
            <span>— 🌿 WHAT CAN YOU SOURCE? 🌿 —</span>
          </div>

          <p className="font-poppins font-bold text-xs sm:text-sm text-slate-500 tracking-wider uppercase">
            ONE EXPO • COMPLETE ECOSYSTEM
          </p>

          <h2 className="font-poppins font-bold text-3xl sm:text-4xl md:text-5xl text-[#112a12]">
            Explore 6 Major Industry Segments
          </h2>
        </div>

        {/* 6 SEGMENTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:border-[#285e19]/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  {/* Top Icon Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="font-poppins font-bold text-xs text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-poppins font-bold text-lg sm:text-xl text-[#112a12] mb-2 group-hover:text-[#285e19] transition-colors">
                    {item.title}
                  </h3>

                  {/* Subline Pills */}
                  <p className="font-poppins font-semibold text-xs text-[#285e19] mb-4 bg-[#e8f3e7] px-3 py-1 rounded-full inline-block">
                    {item.items}
                  </p>

                  {/* Description */}
                  <p className="font-inter text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-poppins font-semibold text-[#285e19]">
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA BUTTON */}
        <div className="mt-12 text-center">
          <Link
            href="/exhibitors"
            className="inline-flex items-center gap-3 bg-[#285e19] hover:bg-[#1d4612] text-white font-poppins font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>EXPLORE EXHIBITOR PROFILE</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default IndustrySegments;
