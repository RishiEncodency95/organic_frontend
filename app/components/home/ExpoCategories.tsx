"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, HeartPulse, Sparkles, Apple, Shirt, Recycle, Dumbbell, Stethoscope, Beaker, Brain, Activity, Pill } from "lucide-react";

const categories = [
  { icon: Apple, title: "Organic Food\n& Beverages" },
  { icon: Leaf, title: "Ayurveda &\nHerbal Products" },
  { icon: HeartPulse, title: "Healthcare &\nWellness" },
  { icon: Sparkles, title: "Beauty, Personal\nCare & Cosmetics" },
  { icon: Pill, title: "Nutrition &\nSupplements" },
  { icon: Shirt, title: "Natural & Organic\nTextiles" },
  { icon: Recycle, title: "Eco-friendly\nProducts" },
  { icon: Dumbbell, title: "Fitness &\nLifestyle" },
  { icon: Stethoscope, title: "Medical Devices &\nEquipment" },
  { icon: Beaker, title: "Pharma &\nBiotechnology" },
  { icon: Brain, title: "Mental Health &\nWell-being" },
  { icon: Activity, title: "Health Tech &\nDigital Solutions" },
];

const LeafDecoration = ({ className }: { className?: string }) => (
  <svg width="150" height="300" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M-20 50C20 50 60 20 80 0C80 40 60 80 20 100C60 120 80 160 80 200C40 200 0 160 -20 120Z" fill="#3b8c2a" fillOpacity="0.04" />
    <path d="M-20 100C10 100 40 70 60 50C60 80 40 110 10 130C40 150 60 180 60 210C20 210 -10 180 -20 150Z" fill="#3b8c2a" fillOpacity="0.06" />
    <circle cx="90" cy="40" r="2" fill="#3b8c2a" fillOpacity="0.2" />
    <circle cx="80" cy="70" r="3" fill="#3b8c2a" fillOpacity="0.1" />
    <circle cx="95" cy="90" r="1.5" fill="#3b8c2a" fillOpacity="0.15" />
  </svg>
);

const ExpoCategories = () => {
  return (
    <section className="py-2 md:py-6 bg-[#f8fdf9] border-t border-b border-gray-100 relative overflow-hidden">
      {/* Decorative Leaves */}
      <LeafDecoration className="absolute top-0 left-0 h-full pointer-events-none" />
      <LeafDecoration className="absolute top-0 right-0 h-full pointer-events-none scale-x-[-1]" />

      <div className="w-full px-4 sm:px-6 lg:px-11 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-2 h-[1px] bg-[#3b8c2a]"></span>
            <span className="text-[#3b8c2a] text-[11px] font-bold tracking-[0.2em] uppercase">
              EXPO CATEGORIES
            </span>
            <span className="w-2 h-[1px] bg-[#3b8c2a]"></span>
          </div>
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#111827] tracking-tight mb-1.5">
            Explore Diverse <span className="text-[#3b8c2a]">Healthcare Sectors</span>
          </h2>
          <p className="text-[#64748b] text-[12px] font-medium tracking-wide">
            One Platform. Every Healthcare Solution.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 py-2 max-w-[1500px] mx-auto">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="group flex items-center gap-3 px-3 py-3.5 bg-white border border-gray-100 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:bg-[#f3f9f4] hover:shadow-[0_8px_20px_rgba(36,107,56,0.08)] hover:-translate-y-0.5 hover:border-[#3b8c2a]/30 transition-all duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-[#f8fdf9] border border-[#e8f5ec] flex items-center justify-center flex-shrink-0 group-hover:bg-[#3b8c2a] group-hover:border-[#3b8c2a] transition-colors duration-300 shadow-sm relative overflow-hidden">
                  <Icon size={18} className="text-[#3b8c2a] group-hover:text-white transition-colors duration-300 relative z-10" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#1e293b] text-[11px] font-bold leading-tight group-hover:text-[#3b8c2a] transition-colors duration-300 whitespace-pre-line">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button className="group flex items-center justify-center gap-2 px-6 py-2 rounded-full border-2 border-[#F2B40E] bg-[#3b8c2a] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#F2B40E] hover:text-[#0b2912] hover:shadow-lg transition-all duration-300">
            VIEW ALL CATEGORIES
            <ArrowRight size={14} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ExpoCategories;
