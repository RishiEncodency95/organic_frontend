"use client";

import React from 'react';
import { Leaf, Globe, Users, Handshake, Mic, Calendar, ArrowRight, MapPin, CalendarDays, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import industryImg from "../../assets/home/industry.png";

const IndustryLeaders = () => {
  return (
    <section className="relative w-full bg-white py-2 md:py-4 lg:py-4 px-4 md:px-11 overflow-hidden">

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-10 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-[#3b8c2a]">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" />
          </pattern>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>
      <div className="absolute top-20 right-10 opacity-10 pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-[#3b8c2a]">
          <pattern id="dots2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" />
          </pattern>
          <rect width="100" height="100" fill="url(#dots2)" />
        </svg>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-10 relative z-10 ">

        {/* LEFT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-[45%] relative flex flex-col"
        >
          {/* Main Image */}
          <div className="relative w-full h-[400px] lg:h-auto lg:flex-1 rounded-[30px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white border-[6px] border-white">
            <img
              src={industryImg.src}
              alt="Industry Leaders"
              className="w-full h-full object-cover"
            />

            {/* Overlaid Thin Band */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-max bg-[#0b2912]/85 backdrop-blur-md border border-white/10 rounded-full p-2 pr-6 flex items-center gap-4 text-white shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              <div className="w-10 h-10 bg-[#3b8c2a] rounded-full flex items-center justify-center shrink-0 border border-white/20 shadow-md">
                <Leaf className="w-4 h-4" strokeWidth={2} />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-teal-300 leading-none mb-1">Uniting the World for</span>
                <span className="text-[15px] md:text-[16px] font-black text-white leading-none tracking-wide">Sustainable Living</span>
              </div>
            </div>
          </div>

          {/* Decorative Circles behind image */}
          <div className="absolute top-[40%] -left-[40px] w-20 h-20 rounded-full border border-[#0e3b1c]/10 -z-10 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-[#0e3b1c]"></div>
          </div>
        </motion.div>

        {/* RIGHT: CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-[55%] flex flex-col justify-center"
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-[#fdf5ed] border border-[#f58220]/20 rounded-md px-4 py-2 mb-4 shadow-sm w-max">
            <Leaf className="w-4 h-4 text-[#f58220]" />
            <span className="text-[12px] md:text-[13px] lg:text-[14px] font-bold text-[#f58220] tracking-[0.2em] uppercase">Industry Testimonials</span>
          </div>

          <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-[#00643b] leading-[1.2] mb-4 tracking-tight">
            What Global Experts Say About <br className="hidden md:block" />
            <span className="text-[#3b8c2a]">Bharat Organic Expo</span>
          </h2>

          <div className="w-24 h-1 bg-[#3b8c2a] mb-4"></div>

          <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.6] mb-8 max-w-[700px] font-normal">
            Trusted by leaders across the natural & organic sectors. Bharat Organic Expo serves as the premier platform bridging the gap between innovative sustainable brands, farmers, and global buyers. We are deeply committed to fostering long-lasting B2B connections, driving eco-friendly practices, and showcasing the very best of nature. Discover how we are transforming the <span className="font-bold text-[#3b8c2a]">organic business landscape</span> globally and shaping a healthier, greener tomorrow.
          </p>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Globe, val: "1,000+", label: "Global Buyers" },
              { icon: Users, val: "8,000+", label: "Visitors / Delegates" },
              { icon: Handshake, val: "150+", label: "Exhibitors" },
              { icon: Mic, val: "150+", label: "Expert Speakers" }
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl px-2 py-2.5 shadow-[0_4px_0_#d1e8d6,0_8px_15px_rgba(0,0,0,0.06)] border border-[#e8f2eb] flex flex-col items-center text-center transition-all hover:-translate-y-1 hover:shadow-[0_5px_0_#c4e1c9,0_10px_20px_rgba(0,0,0,0.08)] active:translate-y-[3px] active:shadow-[0_1px_0_#d1e8d6,0_2px_5px_rgba(0,0,0,0.05)] duration-200 cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-[#f4fcf6] flex items-center justify-center text-[#3b8c2a] mb-1.5 border border-[#3b8c2a]/10">
                  <stat.icon className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
                <span className="text-[18px] md:text-[20px] font-black text-[#1a1a1a] leading-none mb-2">{stat.val}</span>
                <span className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-wider leading-tight">{stat.label}</span>
              </div>
            ))}
          </div>
          {/* Bottom Action Bar (Highlighted) */}
          <div className="relative flex items-center justify-between bg-[#3b8c2a] shadow-[0_0_30px_rgba(59,140,42,0.25)] border-[2px] border-[#3b8c2a]/60 rounded-full p-2 px-3 gap-2 w-full max-w-full hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(59,140,42,0.4)] transition-all duration-300 overflow-x-auto no-scrollbar group">

            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite] rounded-full pointer-events-none"></div>

            <div className="flex items-center gap-3 md:gap-4 flex-nowrap w-max">

              {/* Item 1 */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0">
                  <Users className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col text-left whitespace-nowrap">
                  <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-white/90 leading-none">Grow Together.</span>
                  <span className="text-[11px] md:text-[12px] font-black text-white mt-1 leading-none tracking-wide">Meet. Connect.</span>
                </div>
              </div>

              <div className="w-[1px] h-6 bg-white/30 shrink-0"></div>

              {/* Item 2 */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0">
                  <CalendarDays className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col text-left whitespace-nowrap">
                  <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-white/90 leading-none">19 - 21 February</span>
                  <span className="text-[11px] md:text-[12px] font-black text-white mt-1 leading-none tracking-wide">2027</span>
                </div>
              </div>

              <div className="w-[1px] h-6 bg-white/30 shrink-0"></div>

              {/* Item 3 */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-3.5 h-3.5" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col text-left whitespace-nowrap">
                  <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-white/90 leading-none">Pragati Maidan</span>
                  <span className="text-[11px] md:text-[12px] font-black text-white mt-1 leading-none tracking-wide">New Delhi, India</span>
                </div>
              </div>
            </div>

            <Link
              href="/buyer-registration"
              className="bg-[#f58220] hover:bg-[#e67515] text-white px-3 py-2 rounded-full text-[10px] md:text-[12px] font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md shrink-0 ml-3 border border-[#f58220]/20 whitespace-nowrap"
            >
              <CalendarCheck className="w-4 h-4" strokeWidth={2.5} />
              Register As Buyer
            </Link>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default IndustryLeaders;
