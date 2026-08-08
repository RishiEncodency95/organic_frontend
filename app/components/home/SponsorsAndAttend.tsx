"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb, Handshake, TrendingUp, BookOpen, PackageSearch, Zap,
  Users, Target, Star, Leaf, ShoppingCart, Globe, Hospital,
  Stethoscope, Dumbbell, Flower2, Sprout, Heart,
  CalendarDays, MapPin, Trophy, ArrowRight, Sparkles
} from 'lucide-react';

const WhyAttendItemsLeft = [
  {
    title: "DISCOVER",
    desc: "Explore the latest organic products and eco-friendly services driving a sustainable future.",
    icon: <Lightbulb className="w-5 h-5 text-[#f58220]" />
  },
  {
    title: "CONNECT",
    desc: "Meet leading organic brands, manufacturers and sustainable suppliers under one roof.",
    icon: <Handshake className="w-5 h-5 text-[#f58220]" />
  },
  {
    title: "GROW",
    desc: "Unlock new green business opportunities, partnerships and eco-investment possibilities.",
    icon: <TrendingUp className="w-5 h-5 text-[#f58220]" />
  }
];

const WhyAttendItemsRight = [
  {
    title: "LEARN",
    desc: "Attend seminars, workshops and live demos by organic agriculture and sustainability experts.",
    icon: <BookOpen className="w-5 h-5 text-[#f58220]" />
  },
  {
    title: "SOURCE",
    desc: "Find trusted organic suppliers, distributors and eco-franchise opportunities.",
    icon: <PackageSearch className="w-5 h-5 text-[#f58220]" />
  },
  {
    title: "STAY AHEAD",
    desc: "Stay updated with market trends, conscious consumer insights and future organic industry developments.",
    icon: <Zap className="w-5 h-5 text-[#f58220]" />
  }
];

const WhoShouldAttendItems = [
  { label: "Organic Distributors, Wholesalers & Retailers", icon: <ShoppingCart className="w-4 h-4" /> },
  { label: "Eco-Importers & Exporters", icon: <Globe className="w-4 h-4" /> },
  { label: "Ayurvedic Institutions & Wellness Centers", icon: <Hospital className="w-4 h-4" /> },
  { label: "Nutritionists, Farmers & Wellness Experts", icon: <Stethoscope className="w-4 h-4" /> },
  { label: "Gym Owners, Spa & Eco-Fitness Professionals", icon: <Dumbbell className="w-4 h-4" /> },
  { label: "Organic Farming & Natural Product Buyers", icon: <Sprout className="w-4 h-4" /> },
  { label: "Sustainable Packaging & Eco-friendly Brands", icon: <Flower2 className="w-4 h-4" /> },
  { label: "Investors, Franchise Seekers & Green Business", icon: <Handshake className="w-4 h-4" /> },
  { label: "Supermarkets & Organic Grocery Chains", icon: <Users className="w-4 h-4" /> },
  { label: "Health-Conscious Consumers & Eco-Enthusiasts", icon: <Heart className="w-4 h-4" /> },
];

const SponsorsAndAttend = () => {
  return (
    <>
      <section className="w-full px-2 lg:px-11 relative z-10 py-2 overflow-hidden bg-[#EFF7EE]">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-8 items-start">

          {/* LEFT: WHY ATTEND */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="xl:col-span-5"
          >
            <div className="flex flex-col md:flex-row items-start gap-1 mb-1 text-left">
              <div className="flex items-center gap-1.5">
                <h2 className="text-[24px] md:text-[32px] font-black text-[#1a1a1a] tracking-tight">
                  WHY <span className="bg-gradient-to-r from-[#00643b] to-[#f58220] bg-clip-text text-transparent">ATTEND?</span>
                </h2>
                <Leaf className="w-6 h-6 md:w-8 md:h-8 text-[#f58220] fill-[#f58220]" />
              </div>
            </div>
            <p className="text-[12px] md:text-[12.5px] text-gray-700 font-medium mb-2 leading-snug max-w-full md:max-w-[350px] text-left">
              Explore innovations, build connections and gain insights that drive better health and stronger businesses.
            </p>

            {/* Divider with Leaf */}
            <div className="flex items-center gap-4 mb-2 md:mb-1">
              <div className="h-[1px] flex-grow bg-gray-200" />
              <Leaf className="w-3.5 h-3.5 text-[#00643b] fill-[#00643b]" />
              <div className="h-[1px] flex-grow bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 relative border-l-0 md:border-l border-gray-100 gap-y-2 md:gap-y-0">
              {/* Vertical Divider - Hidden on mobile */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] border-r border-dashed border-gray-300 z-0" />

              {/* Row 1 */}
              <div className="py-1 px-0 md:px-3 border-b-0 md:border-b border-dashed border-gray-300 relative">
                {WhyAttendItemsLeft.slice(0, 1).map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#fff8f2] shrink-0 mt-0.5 border border-[#feeddf]">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5 text-[#f58220]' })}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[13px] font-bold text-[#00643b] mb-1 leading-none pt-1.5">{item.title}</h3>
                      <p className="text-[10px] text-gray-600 font-semibold leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="py-2 px-0 md:px-3 border-b-0 md:border-b border-dashed border-gray-300 relative">
                {WhyAttendItemsRight.slice(0, 1).map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#fff8f2] shrink-0 mt-0.5 border border-[#feeddf]">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5 text-[#f58220]' })}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[13px] font-bold text-[#00643b] mb-1 leading-none pt-1.5">{item.title}</h3>
                      <p className="text-[10px] text-gray-600 font-semibold leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2 */}
              <div className="py-2 px-0 md:px-3 border-b-0 md:border-b border-dashed border-gray-300 relative">
                {WhyAttendItemsLeft.slice(1, 2).map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#fff8f2] shrink-0 mt-0.5 border border-[#feeddf]">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5 text-[#f58220]' })}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[13px] font-bold text-[#00643b] mb-1 leading-none pt-1.5">{item.title}</h3>
                      <p className="text-[10px] text-gray-600 font-semibold leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="py-2 px-0 md:px-3 border-b-0 md:border-b border-dashed border-gray-300 relative">
                {WhyAttendItemsRight.slice(1, 2).map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#fff8f2] shrink-0 mt-0.5 border border-[#feeddf]">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5 text-[#f58220]' })}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[13px] font-bold text-[#00643b] mb-1 leading-none pt-1.5">{item.title}</h3>
                      <p className="text-[10px] text-gray-600 font-semibold leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 3 */}
              <div className="py-2 px-0 md:px-3 relative">
                {WhyAttendItemsLeft.slice(2, 3).map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#fff8f2] shrink-0 mt-0.5 border border-[#feeddf]">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5 text-[#f58220]' })}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[13px] font-bold text-[#00643b] mb-1 leading-none pt-1.5">{item.title}</h3>
                      <p className="text-[10px] text-gray-600 font-semibold leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="py-2 px-0 md:px-3 relative">
                {WhyAttendItemsRight.slice(2, 3).map((item, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#fff8f2] shrink-0 mt-0.5 border border-[#feeddf]">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5 text-[#f58220]' })}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[13px] font-bold text-[#00643b] mb-1 leading-none pt-1.5">{item.title}</h3>
                      <p className="text-[10px] text-gray-600 font-semibold leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 mb-2 md:mb-1">
              <div className="h-[1px] flex-grow bg-gray-200" />
              <Leaf className="w-3.5 h-3.5 text-[#00643b] fill-[#00643b]" />
              <div className="h-[1px] flex-grow bg-gray-200" />
            </div>
          </motion.div>

          {/* CENTER: CIRCULAR INFOGRAPHIC */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="xl:col-span-4 flex justify-center items-center relative py-2 md:py-4"
          >
            <div className="relative w-[250px] h-[250px] md:w-[320px] md:h-[320px] aspect-square">

              {/* Image Circle Container */}
              <div className="absolute inset-0 rounded-full border-[5px] md:border-[8px] border-white shadow-xl overflow-hidden grid grid-cols-2 grid-rows-2 gap-1 bg-white">
                <div className="overflow-hidden bg-gray-50 border-r border-b border-white group">
                  <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="1" />
                </div>
                <div className="overflow-hidden bg-gray-50 border-l border-b border-white group">
                  <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="2" />
                </div>
                <div className="overflow-hidden bg-gray-50 border-r border-t border-white group">
                  <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="3" />
                </div>
                <div className="overflow-hidden bg-gray-50 border-l border-t border-white group">
                  <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="4" />
                </div>
              </div>

              {/* Center Overlay Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[110px] h-[110px] md:w-[130px] md:h-[130px] bg-white rounded-full flex flex-col items-center justify-center text-center shadow-lg p-3 border-[4px] border-white">
                <Leaf className="w-5 h-5 md:w-6 md:h-6 text-[#00643b] mb-1" />
                <p className="text-[10px] md:text-[11.5px] font-black text-[#00643b] leading-tight uppercase">ONE PLATFORM.</p>
                <p className="text-[10px] md:text-[11.5px] font-black text-[#f58220] leading-tight uppercase tracking-tight">ORGANIC</p>
                <p className="text-[10px] md:text-[11.5px] font-black text-[#00643b] leading-tight uppercase tracking-tight">OPPORTUNITIES.</p>
              </div>

              {/* Rotating Ring & Dots Container */}
              <div className="absolute inset-[-5px] md:inset-[-6px] pointer-events-none z-0 animate-[spin_20s_linear_infinite]">
                {/* Outer Decorative Gradient Ring */}
                <svg viewBox="0 0 332 332" className="w-full h-full overflow-visible drop-shadow-[0_0_8px_rgba(245,130,32,0.6)]">
                  <defs>
                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f58220" />
                      <stop offset="100%" stopColor="#00643b" />
                    </linearGradient>
                  </defs>
                  <circle cx="166" cy="166" r="164.5" fill="none" stroke="url(#ringGradient)" strokeWidth="3" />
                </svg>

                {/* Dots perfectly centered on the ring */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#00643b] rounded-full border-[2px] border-white shadow-[0_0_10px_rgba(0,100,59,0.8)] z-30" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-[#00643b] rounded-full border-[2px] border-white shadow-[0_0_10px_rgba(0,100,59,0.8)] z-30" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-[#f58220] rounded-full border-[2px] border-white shadow-[0_0_10px_rgba(245,130,32,0.8)] z-30" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-[#00643b] rounded-full border-[2px] border-white shadow-[0_0_10px_rgba(0,100,59,0.8)] z-30" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: WHO SHOULD ATTEND */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="xl:col-span-3 relative z-20 xl:mt-0 mt-4"
          >
            <div className="bg-white border border-gray-200 rounded-[1rem] overflow-hidden shadow-lg">
              <div className="bg-[#3b8c2a] text-white p-2 flex items-center justify-center relative">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#f58220]" />
                  <span className="text-[14px] font-black uppercase tracking-wider">WHO SHOULD ATTEND?</span>
                </div>
              </div>

              <div className="px-3 py-0 md:py-0">
                {WhoShouldAttendItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 py-[3px] border-b border-gray-100 last:border-0 group cursor-default">
                    <div className="w-5 h-5 rounded bg-[#fff8f2] flex items-center justify-center text-[#f58220] group-hover:bg-[#f58220] group-hover:text-white transition-all duration-300 border border-[#feeddf] shrink-0">
                      {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: 'w-3 h-3' })}
                    </div>
                    <span className="text-[9.5px] md:text-[9px] text-gray-700 font-bold group-hover:text-[#00643b] transition-colors leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Right CTA Card */}
              <div className="p-2.5 bg-[#f5fdf7] border-t border-gray-100 flex items-center gap-2.5">
                <div className="w-6 h-6 bg-[#f58220] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Star className="w-3.5 h-3.5 text-white" />
                </div>
                <p className="text-[10px] text-[#00643b] font-black leading-tight">
                  Whether you're sourcing, learning or networking — this is the place to be!
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* NEW FULL WIDTH BAND */}
      <section className="w-full bg-[#3b8c2a] relative z-20 py-1 lg:py-2 border-y border-[#164429] shadow-2xl overflow-hidden">
        {/* Background Sparkles */}
        <Sparkles className="absolute top-2 left-10 w-4 h-4 text-white opacity-40 animate-pulse" />
        <Sparkles className="absolute bottom-2 left-1/4 w-6 h-6 text-white opacity-40 animate-pulse delay-300" />
        <Sparkles className="absolute top-3 right-1/3 w-3 h-3 text-white opacity-40 animate-pulse delay-700" />
        <Sparkles className="absolute bottom-3 right-10 w-5 h-5 text-white opacity-40 animate-pulse delay-500" />

        {/* Abstract Shape Overlay */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-[1500px] mx-auto px-4 lg:px-11 flex flex-col xl:flex-row items-center justify-between gap-4 relative z-10 w-full">

          {/* Item 1: Date */}
          <div className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-teal-600 shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
              <CalendarDays className="w-4 h-4" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[13px] lg:text-[14px] font-black text-white leading-tight">19 &ndash; 21</span>
              <span className="text-[9px] lg:text-[10px] font-bold text-teal-50 uppercase tracking-wider">FEBRUARY 2027</span>
            </div>
          </div>

          <div className="hidden xl:block w-[1px] h-6 bg-white/40"></div>

          {/* Item 2: Location */}
          <div className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-teal-600 shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
              <MapPin className="w-4 h-4" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[13px] lg:text-[14px] font-black text-white leading-tight uppercase">PRAGATI MAIDAN</span>
              <span className="text-[9px] lg:text-[10px] font-bold text-teal-50 uppercase tracking-wider">NEW DELHI, INDIA</span>
            </div>
          </div>

          <div className="hidden xl:block w-[1px] h-6 bg-white/40"></div>

          {/* Item 3: Global Edition */}
          <div className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#f58220] flex items-center justify-center text-white shadow-md shadow-[#f58220]/30 group-hover:scale-105 transition-transform duration-300 shrink-0">
              <Globe className="w-4 h-4" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[13px] lg:text-[14px] font-black text-white leading-tight uppercase">GLOBAL EDITION</span>
              <span className="text-[8px] lg:text-[9px] font-bold text-teal-50 uppercase leading-tight tracking-wide">CONNECTING THE WORLD<br />OF ORGANIC & NATURAL</span>
            </div>
          </div>

          <div className="hidden xl:block w-[1px] h-6 bg-white/40"></div>

          {/* Trophy Info */}
          <div className="flex items-center gap-2 group">
            <Trophy className="w-6 h-6 text-yellow-300 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)] shrink-0" strokeWidth={2} />
            <div className="flex flex-col text-left">
              <span className="text-[11px] lg:text-[12px] font-bold text-white leading-tight uppercase">BE PART OF INDIA'S BIGGEST</span>
              <span className="text-[12px] lg:text-[13px] font-black text-[#0b2918] uppercase leading-tight">ORGANIC & NATURAL SHOW!</span>
            </div>
          </div>

          <div className="hidden xl:block w-[1px] h-6 bg-white/40"></div>

          {/* Register Button */}
          <button className="flex items-center gap-2 bg-[#F2B40E] hover:bg-[#0b2912] px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(242,180,14,0.4)] hover:shadow-[0_0_20px_rgba(11,41,18,0.5)] transition-all duration-300 transform hover:scale-105 scale-95 lg:scale-100 border-2 border-[#0b2912] group">
            <span className="text-[#0b2912] group-hover:text-white font-black text-[11px] lg:text-[12px] tracking-wide uppercase transition-colors">
              REGISTER AS VISITOR!
            </span>
            <div className="w-5 h-5 bg-[#0b2912] rounded-full flex items-center justify-center text-[#F2B40E] group-hover:bg-white group-hover:text-[#0b2912] shrink-0 transition-colors">
              <ArrowRight className="w-3 h-3" strokeWidth={3} />
            </div>
          </button>

        </div>
      </section>
    </>
  );
};

export default SponsorsAndAttend;