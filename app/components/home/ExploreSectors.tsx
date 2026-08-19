"use client";

import React from 'react';
import {
  Leaf, Droplets, Package, Heart, Shirt,
  Monitor, Sprout, Coffee, Sun, Activity,
  CheckCircle, Users, Lightbulb, Handshake, ArrowRight,
  Sparkles, CalendarDays, MapPin, Globe, Trophy
} from 'lucide-react';
import { motion } from 'framer-motion';

const sectors = [
  {
    title: "ORGANIC FOODS",
    desc: "Pure, farm-fresh produce and certified organic groceries.",
    icon: Leaf,
    img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "NATURAL COSMETICS",
    desc: "Chemical-free beauty and skincare essentials.",
    icon: Droplets,
    img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "ECO PACKAGING",
    desc: "Sustainable and biodegradable packaging solutions.",
    icon: Package,
    img: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "WELLNESS & AYURVEDA",
    desc: "Holistic herbal remedies and natural supplements.",
    icon: Heart,
    img: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "SUSTAINABLE FASHION",
    desc: "Clothing made from ethically sourced organic fibers.",
    icon: Shirt,
    img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "AGRI-TECH SOLUTIONS",
    desc: "Modern technology for smart organic farming.",
    icon: Monitor,
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "VEGAN PRODUCTS",
    desc: "100% plant-based food and lifestyle alternatives.",
    icon: Sprout,
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "HERBAL BEVERAGES",
    desc: "Organic teas, juices, and detox health drinks.",
    icon: Coffee,
    img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "RENEWABLE ENERGY",
    desc: "Solar and green energy solutions for farms.",
    icon: Sun,
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=400&auto=format&fit=crop"
  },
  {
    title: "FITNESS & LIFESTYLE",
    desc: "Equipment and natural supplements for active living.",
    icon: Activity,
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400&auto=format&fit=crop"
  }
];

const features = [
  { icon: CheckCircle, title: "Wide Range of Categories", desc: "Everything you need under one roof." },
  { icon: Users, title: "Trusted Brands & Suppliers", desc: "Connect with reliable green partners." },
  { icon: Lightbulb, title: "Innovation & Knowledge", desc: "Discover the latest sustainable trends." },
  { icon: Handshake, title: "Business & Growth", desc: "Build connections that create opportunities." }
];

const ExploreSectors = () => {
  return (
    <section className="bg-[#f2fdf5]/20 py-2 md:py-8 lg:py-8 overflow-hidden relative border-t border-gray-100">

      {/* Background Dots Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b8c2a 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="w-full px-4 md:px-11 relative z-10 ">

        {/* Header Title */}
        <div className="text-center mb-8">
          <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-[#0b2912] uppercase tracking-tight flex items-center justify-center gap-2 leading-[1.2]">
            <Leaf className="w-6 h-6 md:w-8 md:h-8 text-[#3b8c2a]" />
            EXPLORE DIVERSE <span className="text-[#3b8c2a]">ORGANIC</span> SECTORS
            <Leaf className="w-6 h-6 md:w-8 md:h-8 text-[#3b8c2a]" />
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-[2px] bg-[#3b8c2a]/30"></div>
            <p className="text-[#0b2912] font-bold text-[12px] md:text-[13px] lg:text-[14px] uppercase tracking-wide">One Platform. Every Sustainable Solution.</p>
            <div className="w-12 h-[2px] bg-[#3b8c2a]/30"></div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
          {sectors.map((sector, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-white rounded-[24px] p-2 border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_25px_rgba(59,140,42,0.15)] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col h-[280px] md:h-[300px]"
            >
              {/* Unique Leaf Shaped Image Container */}
              <div className="relative h-[115px] md:h-[135px] w-full overflow-hidden shrink-0 rounded-tl-[35px] rounded-br-[35px] rounded-tr-[12px] rounded-bl-[12px] shadow-inner">
                <img loading="lazy" decoding="async" src={sector.img} alt={sector.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#0b2912]/20 group-hover:bg-[#3b8c2a]/10 transition-colors duration-500"></div>

                {/* Floating Icon inside Image */}
                <div className="absolute top-2 right-2 w-6 h-6 md:w-7 md:h-7 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm">
                  <sector.icon className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#3b8c2a]" strokeWidth={2.5} />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="px-3 md:px-4 pt-4 flex flex-col flex-grow justify-between relative bg-white">
                <div>
                  <h4 className="text-[16px] md:text-[18px] font-bold text-[#0b2912] leading-[1.3] mb-2 group-hover:text-[#3b8c2a] transition-colors">{sector.title}</h4>
                  <p className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-500 leading-[1.5] line-clamp-2">{sector.desc}</p>
                </div>

                {/* Animated Arrow on Hover */}
                <div className="flex justify-between items-center pb-1 mt-1">
                  <div className="w-8 h-[2px] bg-gradient-to-r from-[#3b8c2a] to-transparent rounded-full opacity-50 group-hover:w-12 transition-all duration-300"></div>
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#f2fdf5] flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#3b8c2a]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* NEW FULL WIDTH BAND - Replicated Exactly */}
      <div className="w-full bg-[#3b8c2a] relative z-20 py-1 lg:py-2 border-y border-[#164429] shadow-2xl overflow-hidden mt-2 mb-2">
        {/* Background Sparkles */}
        <Sparkles className="absolute top-2 left-10 w-4 h-4 text-white opacity-40 animate-pulse" />
        <Sparkles className="absolute bottom-2 left-1/4 w-6 h-6 text-white opacity-40 animate-pulse delay-300" />
        <Sparkles className="absolute top-3 right-1/3 w-3 h-3 text-white opacity-40 animate-pulse delay-700" />
        <Sparkles className="absolute bottom-3 right-10 w-5 h-5 text-white opacity-40 animate-pulse delay-500" />

        {/* Abstract Shape Overlay */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-wrap lg:flex-nowrap lg:flex-row items-center justify-center lg:justify-between gap-4 lg:gap-2 relative z-10 w-full py-4 lg:py-6">

          {/* Mapped Features Data */}
          {features.map((feature, idx) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-2 group shrink-0">
                <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-lg bg-white flex items-center justify-center text-[#3b8c2a] shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
                  <feature.icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[12px] md:text-[13px] lg:text-[14px] font-bold text-white leading-[1.2] uppercase whitespace-nowrap">{feature.title}</span>
                  <span className="text-[11px] lg:text-[12px] font-medium text-teal-50 tracking-wider mt-0.5 whitespace-nowrap">{feature.desc}</span>
                </div>
              </div>

              {idx !== features.length - 1 && (
                <div className="hidden lg:block w-[1px] h-6 bg-white/40"></div>
              )}
            </React.Fragment>
          ))}

          <div className="hidden lg:block w-[1px] h-6 bg-white/40"></div>

          {/* Custom Action Button */}
          <button className="flex items-center gap-3 bg-[#F2B40E] hover:bg-[#0b2912] px-6 py-3 rounded-full shadow-[0_0_15px_rgba(242,180,14,0.4)] hover:shadow-[0_0_20px_rgba(11,41,18,0.5)] transition-all duration-300 transform hover:scale-105 shrink-0 border-2 border-[#0b2912] group mt-4 lg:mt-0 min-h-[44px]">
            <span className="text-[#0b2912] group-hover:text-white font-bold text-[13px] md:text-[14px] lg:text-[15px] tracking-wide uppercase transition-colors whitespace-nowrap">
              Explore. Connect. Grow.
            </span>
            <div className="w-5 h-5 bg-[#0b2912] rounded-full flex items-center justify-center text-[#F2B40E] group-hover:bg-white group-hover:text-[#0b2912] shrink-0 transition-colors">
              <ArrowRight className="w-3 h-3" strokeWidth={3} />
            </div>
          </button>

        </div>
      </div>

      {/* Bottom Marquee Strip */}
      <div className="w-full bg-[#60241E] py-2 overflow-hidden border-t border-white/20">
        <div className="flex w-max animate-marquee-fast">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-[12px] md:text-[13px] lg:text-[14px] font-bold text-white/90 tracking-widest uppercase px-6 whitespace-nowrap">
                ORGANIC FOODS & BEVERAGES • WELLNESS, FITNESS & PREVENTIVE HEALTHCARE • NATURAL COSMETICS • SUSTAINABLE LIFESTYLE
              </span>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee-fast {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-fast {
            animation: marquee-fast 40s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default ExploreSectors;
