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
  Store
} from 'lucide-react';

const extras = [
  {
    title: "GLOBAL",
    title2: "CONFERENCES",
    subtitle: "Insights & Trends",
    icon: <Users className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: "LEADERSHIP",
    title2: "SUMMITS",
    subtitle: "Lead the Change",
    icon: <UserRound className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: "ORGANIC",
    title2: "AWARDS",
    subtitle: "Celebrate Excellence",
    icon: <Trophy className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: "STARTUP",
    title2: "SHOWCASE",
    subtitle: "Pitch & Grow",
    icon: <Rocket className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: "B2B",
    title2: "MEETINGS",
    subtitle: "Network & Partner",
    icon: <Handshake className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: "GLOBAL",
    title2: "DELEGATION",
    subtitle: "Expand Reach",
    icon: <Globe className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: "SUSTAINABILITY",
    title2: "WORKSHOPS",
    subtitle: "Learn & Implement",
    icon: <Leaf className="w-6 h-6" strokeWidth={2} />
  },
  {
    title: "PRODUCT",
    title2: "LAUNCHPAD",
    subtitle: "Discover Innovations",
    icon: <Store className="w-6 h-6" strokeWidth={2} />
  }
];

const BeyondExhibition = () => {
  return (
    <section className="bg-white py-2 md:py-4 overflow-hidden border-t border-gray-100">
      <div className="w-full px-4 md:px-11">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12 bg-white rounded-[24px] p-4 lg:p-6 shadow-[0_4px_30px_rgba(0,0,0,0.04)] border border-gray-100">

          {/* LEFT HEADER */}
          <div className="w-full lg:w-[30%] flex flex-col items-center lg:items-start text-center lg:text-left justify-center lg:border-r border-gray-200 lg:pr-8">
            <h2 className="text-[28px] md:text-[34px] font-extrabold text-[#00643b] tracking-tight leading-[1.2] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              BEYOND AN <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58220] to-[#F2B40E]">EXHIBITION</span>
            </h2>
            <p className="text-[15px] md:text-[16px] text-gray-600 font-medium leading-[1.6]">
              A powerful ecosystem of organic conferences, sustainability summits, and global B2B collaborations.
            </p>
          </div>

          {/* RIGHT GRID ITEMS */}
          <div className="w-full lg:w-[70%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-4">
            {extras.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3 group"
              >
                {/* ICON */}
                <div className="w-12 h-12 rounded-full bg-[#f8fdf9] border border-[#d5ebd9] text-[#f58220] flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-sm">
                  {item.icon}
                </div>

                {/* TEXT */}
                <div className="flex flex-col">
                  <h4 className="text-[14px] md:text-[16px] font-bold text-[#154726] leading-[1.2] tracking-wide uppercase mb-1">
                    {item.title} <br className="hidden md:block" /> {item.title2}
                  </h4>
                  <p className="text-[13px] md:text-[14px] text-gray-500 font-medium leading-[1.4]">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeyondExhibition;
