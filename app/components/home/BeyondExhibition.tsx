"use client";

import React from 'react';
import { motion } from 'framer-motion';

import {
  Users,
  UserRound,
  Trophy,
  Rocket,
  Handshake,
  Globe,
  Leaf,
  Store,
  Briefcase,
  Award,
  Lightbulb
} from 'lucide-react';

import Image from 'next/image';
import seminarsImg from '../../assets/home/seminars.png';

const extras = [
  {
    title: "GLOBAL",
    title2: "CONFERENCES",
    subtitle: "Gain actionable insights and explore emerging trends with global industry experts.",
    icon: <Users className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: "LEADERSHIP",
    title2: "SUMMITS",
    subtitle: "Engage with top policymakers and CEOs driving sustainable change.",
    icon: <Briefcase className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: "ORGANIC",
    title2: "AWARDS",
    subtitle: "Celebrate excellence and recognize pioneering brands in the organic sector.",
    icon: <Award className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: "STARTUP",
    title2: "SHOWCASE",
    subtitle: "Discover innovative startups pitching groundbreaking green technologies.",
    icon: <Lightbulb className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: "B2B",
    title2: "MEETINGS",
    subtitle: "Network with top distributors and build lasting global partnerships.",
    icon: <Handshake className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: "GLOBAL",
    title2: "DELEGATION",
    subtitle: "Connect with international delegates to expand your market reach.",
    icon: <Globe className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: "SUSTAINABILITY",
    title2: "WORKSHOPS",
    subtitle: "Learn practical implementations for zero-waste and eco-friendly practices.",
    icon: <Leaf className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: "PRODUCT",
    title2: "LAUNCHPAD",
    subtitle: "Witness the exclusive unveiling of the latest natural and organic innovations.",
    icon: <Store className="w-6 h-6" strokeWidth={2} />
  }
];

const BeyondExhibition = () => {
  return (
    <section className="bg-white py-2 lg:py-6 overflow-hidden border-y border-[#3b8c2a]/10 font-inter">
      <div className=" w-full px-4 sm:px-6 lg:px-11">
        
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
          
          {/* Left Hero Panel with Image Background */}
          <div className="w-full lg:w-[35%] relative p-8 lg:p-12 flex flex-col justify-end overflow-hidden text-center lg:text-left min-h-[450px] group">
            {/* Background Image with Slow Zoom */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <Image 
                src={seminarsImg} 
                alt="Conferences & Seminars" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-[10s] ease-out"
              />
            </div>
            
            {/* Subtle base overlay and Bottom Gradient for text readability */}
            <div className="absolute inset-0 bg-black/20 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3821]/95 via-[#1a3821]/50 to-transparent z-0"></div>
            
            {/* Text Content Directly on Image */}
            <div className="relative z-10 mt-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 border border-white/30 mb-5 w-fit mx-auto lg:mx-0 shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#F2B40E] animate-pulse"></span>
                <span className="text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-white drop-shadow-sm">Global Organic Platform</span>
              </div>

              <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-extrabold text-white leading-[1.1] tracking-tight mb-4 font-poppins drop-shadow-lg" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
                Beyond An <br className="hidden lg:block" />
                <span className="text-[#F2B40E]">Exhibition</span>
              </h2>
              <p className="text-white/95 text-[14px] md:text-[15px] lg:text-[16px] leading-[1.6] font-medium max-w-md mx-auto lg:mx-0 drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                Join India's most powerful ecosystem for the organic industry. From high-impact B2B matchmaking to leadership summits, we provide everything you need to scale your business.
              </p>
            </div>
          </div>

          {/* Right Grid */}
          <div className="w-full lg:w-[65%] bg-[#f4fbf4] p-6 lg:p-10 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
              {extras.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-[#3b8c2a]/30 hover:-translate-y-1 transition-all duration-300 group cursor-default"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f8fdf9] to-[#eef5f0] flex items-center justify-center shrink-0 border border-[#d5ebd9] text-[#f58220] group-hover:bg-[#3b8c2a] group-hover:text-white transition-all duration-500 shadow-sm">
                     {item.icon}
                  </div>
                  <div className="flex flex-col flex-1">
                    <h4 className="text-[14px] lg:text-[15px] font-bold text-[#1a3821] uppercase tracking-wide group-hover:text-[#3b8c2a] transition-colors leading-[1.3] mb-1">
                      {item.title} {item.title2}
                    </h4>
                    <p className="text-[12.5px] text-slate-500 font-medium leading-[1.5]">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeyondExhibition;
