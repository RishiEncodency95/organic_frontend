"use client";

import React from "react";
import {
   Network, FileText, Search, Users, Calendar, Handshake,
   LayoutGrid, Apple, Wheat, Pill, Droplets, Leaf, FlaskConical,
   Coffee, ShoppingBag, Sprout, Tractor, Package, Box,
   Flower2, Recycle, Shirt, MoreHorizontal, Star, Globe2, BarChart3
} from "lucide-react";

const matchmakingSteps = [
   { icon: FileText, title: "Register", desc: "Create your profile\nin minutes" },
   { icon: Search, title: "Select Category", desc: "Choose the right\nbusiness category" },
   { icon: Users, title: "Buyer Matching", desc: "Find and connect with\nverified buyers" },
   { icon: Calendar, title: "Meeting Schedule", desc: "Book meetings and manage\nyour schedule" },
   { icon: Network, title: "Networking", desc: "Expand your network\nand grow" },
   { icon: Handshake, title: "Business Deals", desc: "Close deals and build\nstrong partnerships" },
];

const categories = [
   { icon: Apple, label: "Organic Food" },
   { icon: Wheat, label: "Millets & Grains" },
   { icon: FlaskConical, label: "Ayurveda" },
   { icon: Droplets, label: "Organic Cosmetics" },
   { icon: Leaf, label: "Natural Skincare" },
   { icon: Pill, label: "Herbal Products" },
   { icon: Coffee, label: "Organic Tea" },
   { icon: Coffee, label: "Organic Coffee" },
   { icon: ShoppingBag, label: "Organic Honey" },
   { icon: Sprout, label: "Seeds & Nurseries" },
   { icon: Box, label: "Organic Fertilizer" },
   { icon: Tractor, label: "Agro & Equipment" },
   { icon: Package, label: "Packaging Solutions" },
   { icon: Pill, label: "Health Supplements" },
   { icon: Flower2, label: "Yoga & Wellness" },
   { icon: Recycle, label: "Eco Products" },
   { icon: Shirt, label: "Textiles & Apparel" },
   { icon: MoreHorizontal, label: "And More..." },
];

const AboutFeatures = () => {
   return (
      <section className="w-full bg-[#fdfdfd] py-2 lg:py-4 px-4 sm:px-2 lg:px-11 font-inter relative overflow-hidden">

         {/* Top Header */}
         <div className="flex flex-col items-center justify-center text-center mb-4 relative z-10">
            <h4 className="text-[#3b8c2a] text-[13px] font-bold uppercase tracking-widest flex items-center gap-2 mb-4">
               CONNECT • COLLABORATE • GROW TOGETHER
            </h4>
            <h2 className="text-[#111827] text-xl md:text-3xl font-serif font-semibold mb-2">
               Everything You Need, <span className="text-[#3b8c2a]">All in One Place</span>
            </h2>
            <div className="flex items-center gap-3 w-64 mx-auto opacity-40">
               <div className="h-[1px] w-full bg-[#3b8c2a]"></div>
               <Leaf size={12} className="text-[#3b8c2a] shrink-0" />
               <div className="h-[1px] w-full bg-[#3b8c2a]"></div>
            </div>
         </div>

         {/* Main Content (Left & Right Boxes) */}
         <div className="flex flex-col xl:flex-row gap-6  relative z-10">

            {/* Left Box (Business Matchmaking) */}
            <div className="w-full xl:w-[42%] rounded-2xl overflow-hidden p-2 lg:py-2 lg:px-6  relative flex flex-col shadow-xl" style={{ background: 'linear-gradient(145deg, #1f6630 0%, #318a42 50%, #46ad56 100%)' }}>

               {/* Header */}
               <div className="flex items-start gap-4 mb-4 relative z-10">
                  <div className="w-14 h-14 bg-[#f8fdf9] rounded-full flex items-center justify-center border-4 border-[#3b8c2a]/30 shrink-0">
                     <Network size={22} className="text-[#154726]" />
                  </div>
                  <div>
                     <h3 className="text-white text-lg lg:text-xl font-bold uppercase tracking-wide mb-2">BUSINESS MATCHMAKING</h3>
                     <p className="text-white/90 text-[13.5px] lg:text-[14.5px] leading-relaxed max-w-md">
                        Smart connections for meaningful partnerships.<br />
                        Find the right people. Build lasting relationships.
                     </p>
                  </div>
               </div>

               {/* Grid 2x3 */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 lg:gap-y-8 lg:gap-x-6  mt-4 mb-4 relative z-10">
                  {matchmakingSteps.map((step, idx) => (
                     <div key={idx} className="bg-white rounded-xl pt-8 text-center relative shadow-lg">
                        {/* Top overlapping icon */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[52px] h-[52px] bg-[#3b8c2a] border-[4px] border-white rounded-full flex items-center justify-center shadow-sm">
                           <step.icon size={22} className="text-white" strokeWidth={2} />
                        </div>
                        <h4 className="text-[#111827] font-bold text-[14.5px] mb-2">{step.title}</h4>
                        <p className="text-gray-500 text-[11px] lg:text-[12px] leading-relaxed mb-4 whitespace-pre-line h-[36px]">
                           {step.desc}
                        </p>
                     </div>
                  ))}
               </div>

               {/* Footer */}
               <div className="mt-auto flex items-start gap-4 relative z-10 ">
                  <div className="w-12 h-12 bg-black/15 rounded-full flex items-center justify-center shrink-0">
                     <Users size={22} className="text-white" />
                  </div>
                  <div>
                     <p className="text-white font-bold text-[15px] lg:text-[16px] mb-1">Connect. Collaborate. Grow Together.</p>
                     <p className="text-white/70 text-[12px] lg:text-[13px] leading-relaxed">Empowering businesses and building<br />a stronger organic ecosystem.</p>
                  </div>
               </div>
            </div>

            {/* Right Box (Exhibitor Categories) */}
            <div className="w-full xl:w-[58%] bg-white rounded-2xl border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] p-2 lg:p-6 flex flex-col">

               {/* Header */}
               <div className="flex items-start gap-4 mb-2">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                     <LayoutGrid size={22} className="text-[#3b8c2a]" strokeWidth={1.5} />
                  </div>
                  <div>
                     <h3 className="text-[#111827] text-lg lg:text-[16px] font-semibold tracking-wide">EXHIBITOR CATEGORIES</h3>
                     <p className="text-gray-500 text-[13.5px] lg:text-[14px] leading-relaxed max-w-md">
                        Discover a wide range of organic products,<br />services, and solutions under one roof.
                     </p>
                  </div>
               </div>

               {/* Grid 6x3 */}
               <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 lg:gap-4 mb-4">
                  {categories.map((cat, idx) => (
                     <div key={idx} className="bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center justify-start p-2 py-3 lg:py-4 gap-3 group cursor-default transition-all duration-300 hover:shadow-[0_8px_24px_rgba(59,140,42,0.12)] hover:-translate-y-1">
                        <div className="w-[40px] h-[40px] lg:w-[44px] lg:h-[44px] bg-[#f2f7f1] rounded-full flex items-center justify-center mb-1">
                           <cat.icon size={18} className="text-[#3b8c2a]" strokeWidth={1.5} />
                        </div>
                        <span className="text-[#111827] text-[11.5px] lg:text-[12.5px] font-medium text-center leading-[1.3] max-w-[80px]">
                           {cat.label}
                        </span>
                     </div>
                  ))}
               </div>

               {/* Footer Banner */}
               <div className="mt-auto bg-[#f3f7f0] rounded-[20px] p-2 lg:p-3 flex items-center gap-5 relative overflow-hidden">
                  <div className="w-12 h-12 bg-[#154726] rounded-full flex items-center justify-center shrink-0 z-10 shadow-md">
                     <Star size={20} className="text-white fill-white" />
                  </div>
                  <div className="z-10">
                     <p className="text-[#111827] font-bold text-[14px] lg:text-[15px] mb-1">All Categories. One Platform. Infinite Possibilities.</p>
                     <p className="text-gray-600 text-[12px] lg:text-[13px]">Explore. Connect. Grow your organic business.</p>
                  </div>
                  <Leaf size={64} className="absolute right-[-10px] bottom-[-15px] text-[#3b8c2a] opacity-10 rotate-45 pointer-events-none" />
               </div>

            </div>

         </div>

      </section>
   );
};

export default AboutFeatures;
