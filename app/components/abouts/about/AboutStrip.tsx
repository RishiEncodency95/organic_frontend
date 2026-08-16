"use client";

import React from 'react';
import { Users, Building2, Map, Award } from 'lucide-react';
import { SITE_CONFIG } from '@/app/constants/siteConfig';

const AboutStrip = () => {
  const items = [
    {
      title: SITE_CONFIG.stats.exhibitors,
      subtitle: "TOP EXHIBITORS",
      icon: Building2,
      color: "text-orange-500"
    },
    {
      title: SITE_CONFIG.stats.visitors,
      subtitle: "TRADE VISITORS",
      icon: Users,
      color: "text-[#3b8c2a]"
    },
    {
      title: "15,000 Sqm",
      subtitle: "EXHIBITION AREA",
      icon: Map,
      color: "text-blue-500"
    },
    {
      title: "10+ Years",
      subtitle: "PROVEN EXPERIENCE",
      icon: Award,
      color: "text-green-600"
    }
  ];

  return (
    <div className="bg-[#3B8D2A] w-full py-1.5 md:py-3 border-t border-b border-white/10 shadow-inner overflow-x-auto hide-scrollbar relative z-20">
      <div className="max-w-[1600px] mx-auto px-4 md:px-11">
        <div className="flex items-center justify-between min-w-[700px] md:min-w-full lg:min-w-full">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-2 md:gap-3 group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <item.icon className={`w-3.5 h-3.5 md:w-6 md:h-6 ${item.color}`} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-white font-bold text-[12px] md:text-[14px] leading-[1.1] tracking-wider uppercase">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 font-medium text-[12px] md:text-[14px] leading-[1.1] tracking-wide uppercase mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Separator Line */}
              {index < items.length - 1 && (
                <div className="w-px h-6 bg-white/20 mx-2 md:mx-3" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default AboutStrip;
