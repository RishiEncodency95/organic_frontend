"use client";

import React from "react";
import { 
  FileEdit, Search, Users, CalendarDays, Network, Handshake,
  Apple, Wheat, Coffee, Snowflake, Droplets, Leaf, 
  ShoppingBag, FlaskConical, Pill, Box, Truck, HeartHandshake 
} from "lucide-react";

const matchmakingSteps = [
  { icon: FileEdit, label: "Register" },
  { icon: Search, label: "Select\nCategory" },
  { icon: Users, label: "Buyer\nMatching" },
  { icon: CalendarDays, label: "Meeting\nSchedule" },
  { icon: Network, label: "Networking" },
  { icon: Handshake, label: "Business\nDeals" },
];

const categories = [
  { icon: Apple, label: "Organic Food" },
  { icon: Wheat, label: "Millets & Grains" },
  { icon: ShoppingBag, label: "Ayurveda" },
  { icon: Droplets, label: "Organic Cosmetics" },
  { icon: Leaf, label: "Natural Skincare" },
  { icon: FlaskConical, label: "Herbal Products" },
  { icon: Coffee, label: "Organic Tea" },
  { icon: Coffee, label: "Organic Coffee" },
  { icon: Snowflake, label: "Organic Fertilizer" },
  { icon: Box, label: "Seeds & Nurseries" },
  { icon: Truck, label: "Machinery" },
  { icon: PackageSearch, label: "Packaging" },
  { icon: Pill, label: "Health Supplements" },
  { icon: HeartHandshake, label: "Yoga & Wellness" },
  { icon: Shirt, label: "Textiles" },
  { icon: Sprout, label: "Organic Farming" },
  { icon: ShieldCheck, label: "Eco Products" },
  { icon: Store, label: "Organic Retail" },
  { icon: Recycle, label: "Bio Fertilizers" },
  { icon: MoreHorizontal, label: "And More..." },
];

// Re-importing missing icons directly for simplicity
import { PackageSearch, Shirt, Sprout, ShieldCheck, Store, Recycle, MoreHorizontal } from "lucide-react";

const AboutFeatures = () => {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 py-16">
      <div className="flex flex-col xl:flex-row gap-6">
        
        {/* Left: Business Matchmaking */}
        <div className="w-full xl:w-5/12 bg-white rounded-3xl border border-[#e8f5ec] p-6 lg:p-8 shadow-sm flex flex-col items-center">
          <h3 className="text-[#3b8c2a] text-[13px] font-extrabold tracking-widest uppercase mb-8">
            BUSINESS MATCHMAKING
          </h3>

          <div className="relative w-full max-w-sm mx-auto flex justify-between items-center mt-2 mb-8">
            {/* Connecting dashed line */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] border-t-2 border-dashed border-[#3b8c2a]/30 -z-10 -translate-y-1/2" />
            
            {matchmakingSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center gap-2 bg-white z-10 px-1 relative group cursor-default">
                  <div className="w-10 h-10 rounded-full border-2 border-[#3b8c2a] bg-[#f8fdf9] flex items-center justify-center group-hover:bg-[#3b8c2a] transition-colors duration-300 shadow-md">
                    <Icon size={16} className="text-[#3b8c2a] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-[#111827] text-[9px] font-bold text-center whitespace-pre-line leading-tight absolute top-12 w-16 -ml-3">
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
          
          <p className="text-[#154726] text-[13px] font-bold mt-10">
            Connect. Collaborate. Grow Together.
          </p>
        </div>

        {/* Right: Exhibitor Categories */}
        <div className="w-full xl:w-7/12 bg-white rounded-3xl border border-[#e8f5ec] p-6 lg:p-8 shadow-sm flex flex-col items-center">
          <h3 className="text-[#3b8c2a] text-[13px] font-extrabold tracking-widest uppercase mb-6">
            EXHIBITOR CATEGORIES
          </h3>

          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 gap-x-2 gap-y-6 w-full">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="flex flex-col items-center gap-2 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-[#f8fdf9] flex items-center justify-center group-hover:-translate-y-1 group-hover:shadow-md transition-all duration-300">
                    <Icon size={18} className="text-[#3b8c2a]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[#64748b] text-[9px] font-bold text-center leading-tight">
                    {category.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutFeatures;
