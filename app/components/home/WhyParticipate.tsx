"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, BookOpen, PackageSearch, TrendingUp, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Discover",
    desc: "Explore the latest products, trends & solutions shaping the future of wellness."
  },
  {
    icon: Users,
    title: "Connect",
    desc: "Meet leaders, innovators & decision-makers from across the globe."
  },
  {
    icon: BookOpen,
    title: "Learn",
    desc: "Attend seminars, workshops & gain insights from industry experts."
  },
  {
    icon: PackageSearch,
    title: "Source",
    desc: "Find trusted suppliers, distributors & franchise opportunities."
  },
  {
    icon: TrendingUp,
    title: "Grow",
    desc: "Unlock new business opportunities & partnerships."
  },
  {
    icon: Zap,
    title: "Stay Ahead",
    desc: "Stay updated with market trends, consumer insights & future industry developments."
  }
];

const checkmarks = [
  "Quick Registration",
  "Exclusive Access",
  "Network Globally",
  "Future-Ready Insights"
];

const WhyParticipate = () => {
  return (
    <section className="relative py-2 bg-[#fcfdfc] overflow-hidden border-t border-gray-100">
      {/* Background decoration (optional/subtle) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[50%] bg-[#3b8c2a]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] bg-[#3b8c2a]/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11">

        {/* Header */}
        <div className="flex flex-col xl:flex-row items-center justify-between mb-2 bg-white py-3 px-4 md:px-8 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 gap-4 xl:gap-6">

          {/* Pill */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1 hidden md:flex">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b8c2a]"></span>
              <span className="w-8 h-[1px] bg-[#3b8c2a]"></span>
            </div>
            <div className="px-5 py-1.5 rounded-full border border-[#3b8c2a] bg-[#f8fdf9]">
              <span className="text-[#3b8c2a] text-[12px] font-bold tracking-[0.1em] uppercase whitespace-nowrap">
                WHY PARTICIPATE?
              </span>
            </div>
            <div className="flex items-center gap-1 hidden md:flex">
              <span className="w-8 h-[1px] bg-[#3b8c2a]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b8c2a]"></span>

            </div>
          </div>

          {/* Title */}
          <h2 className="text-[16px] md:text-[22px] font-semibold text-[#111827] tracking-tight shrink-0 text-center">
            One Platform. <span className="text-[#3b8c2a]">Endless Opportunities.</span>
          </h2>

          {/* Description */}
          <div className="flex items-center gap-4 hidden xl:flex shrink-0">
            <div className="w-[1px] h-8 bg-gray-200"></div>
            <p className="text-[#64748b] text-[15px] font-medium whitespace-nowrap">
              Discover. Connect. Learn. Grow. Stay Ahead.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 py-1.5">
          {features.map((item, index) => {
            const Icon = item.icon;
            const number = (index + 1).toString().padStart(2, '0');
            return (
              <div key={index} className="group flex flex-col items-center text-center bg-white rounded-2xl px-4 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(59,140,42,0.1)] hover:-translate-y-2 relative">

                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full border border-[#3b8c2a]/30 flex items-center justify-center bg-white">
                  <span className="text-[#3b8c2a] text-[10px] font-bold">{number}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-1 text-[#3b8c2a] transition-all duration-300 relative">
                  <Icon size={30} strokeWidth={1.5} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Divider */}
                <div className="w-6 h-[2px] bg-[#3b8c2a] rounded-full mb-2 transition-all duration-300 group-hover:w-10"></div>

                {/* Title & Desc */}
                <h3 className="text-[#111827] text-[16px] font-semibold capitalize mb-1 transition-colors duration-300 group-hover:text-[#3b8c2a]">
                  {item.title}
                </h3>
                <p className="text-[#64748b] text-[13px] leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-2 flex flex-col items-center">
          {/* Button */}
          <button className="px-8 py-2 bg-[#3b8c2a] border-2 border-[#F2B40E] hover:bg-[#F2B40E] hover:text-[#0b2912] text-white text-[12px] font-bold uppercase tracking-wider rounded-full shadow-[0_10px_20px_rgba(59,140,42,0.2)] hover:shadow-[0_15px_30px_rgba(59,140,42,0.3)] hover:-translate-y-0.5 transition-all duration-300">
            REGISTER AS VISITOR
          </button>

          {/* Checkmarks */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0 mt-8">
            {checkmarks.map((text, idx) => (
              <div key={idx} className={`flex items-center gap-2 px-4 md:px-6 ${idx !== 0 ? 'md:border-l md:border-gray-300' : ''}`}>
                <CheckCircle2 size={18} strokeWidth={2.5} className="text-[#3b8c2a]" />
                <span className="text-[#475569] text-[13px] font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyParticipate;
