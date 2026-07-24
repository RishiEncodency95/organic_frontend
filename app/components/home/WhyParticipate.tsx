"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, BookOpen, PackageSearch, TrendingUp, Zap, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "DISCOVER",
    desc: "Explore the latest products, trends & solutions shaping the future of wellness."
  },
  {
    icon: Users,
    title: "CONNECT",
    desc: "Meet leaders, innovators & decision-makers from across the globe."
  },
  {
    icon: BookOpen,
    title: "LEARN",
    desc: "Attend seminars, workshops & gain insights from industry experts."
  },
  {
    icon: PackageSearch,
    title: "SOURCE",
    desc: "Find trusted suppliers, distributors & franchise opportunities."
  },
  {
    icon: TrendingUp,
    title: "GROW",
    desc: "Unlock new business opportunities & partnerships."
  },
  {
    icon: Zap,
    title: "STAY AHEAD",
    desc: "Stay updated with market trends, consumer insights & future industry developments."
  }
];

const WhyParticipate = () => {
  return (
    <section className="py-2 md:py-4 bg-white border-t border-b border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-11">

        {/* Header */}
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-2 h-[1px] bg-[#3b8c2a]"></span>
            <span className="text-[#3b8c2a] text-[11px] font-bold tracking-[0.2em] uppercase">
              WHY PARTICIPATE?
            </span>
            <span className="w-2 h-[1px] bg-[#3b8c2a]"></span>
          </div>
          <h2 className="text-[26px] md:text-[26px] font-medium text-[#111827] tracking-tight">
            One Platform. <span className="text-[#3b8c2a]">Endless Opportunities.</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-2 lg:gap-y-0 divide-y sm:divide-y-0 lg:divide-x divide-gray-100 py-4">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group flex flex-col items-center text-center px-2 lg:px-4 py-3 lg:py-0 transition-transform duration-300 hover:-translate-y-1">
                <div className="w-11 h-11 rounded-full bg-white border border-[#e2e8f0] shadow-sm flex items-center justify-center mb-3 text-[#3b8c2a] group-hover:border-[#3b8c2a] group-hover:bg-[#f8fdf9] transition-all duration-300 relative overflow-hidden">
                  <Icon size={20} strokeWidth={1.5} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  {/* Subtle accent dot inside icon circle on hover */}
                  <div className="absolute top-1 right-2 w-1.5 h-1.5 bg-[#f1c40f] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-[#154726] text-[11px] font-bold uppercase tracking-[0.15em] mb-2 group-hover:text-[#3b8c2a] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#64748b] text-[11.5px] leading-[1.5] max-w-[200px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-1">
          <button className="group flex items-center justify-center gap-2 px-6 py-2 rounded-full border-2 border-[#e63946] bg-[#3b8c2a] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#1a3a14] hover:shadow-lg transition-all duration-300">
            REGISTER AS VISITOR
            <ArrowRight size={14} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyParticipate;
