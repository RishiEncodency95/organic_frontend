"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import {
  Users,
  Briefcase,
  Award,
  Lightbulb,
  Handshake,
  Globe,
  Leaf,
  Store,
  Trophy,
  Rocket,
  Building2,
  ShieldCheck,
  Target,
  TrendingUp,
  Medal,
  Mic,
  CalendarDays,
  Heart,
  Star,
  CheckCircle,
  LucideIcon
} from 'lucide-react';

import Image from 'next/image';
import seminarsImg from '../../assets/home/seminars.png';
import { websiteApi } from '@/lib/api';

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  Briefcase,
  Award,
  Lightbulb,
  Handshake,
  Globe,
  Leaf,
  Store,
  Trophy,
  Rocket,
  Building2,
  ShieldCheck,
  Target,
  TrendingUp,
  Medal,
  Mic,
  CalendarDays,
  Heart,
  Star,
  CheckCircle,
};

const DEFAULT_ICONS: LucideIcon[] = [
  Users,
  Briefcase,
  Award,
  Lightbulb,
  Handshake,
  Globe,
  Leaf,
  Store
];

// ── Default Data Configuration ──
const DEFAULT_BEYOND_DATA = {
  enabled: true,
  sectionTag: "Global Organic Platform",
  titleMain: "Beyond An",
  titleHighlight: "Exhibition",
  description: "Join India's most powerful ecosystem for the organic industry. From high-impact B2B matchmaking and leadership summits to global networking, we provide everything you need to scale your business.",
  image: seminarsImg as any,
  imageAlt: "Conferences & Seminars",
  extras: [
    {
      title: "GLOBAL CONFERENCES",
      description: "Gain actionable insights and explore emerging trends with global industry experts.",
      icon: "Users"
    },
    {
      title: "LEADERSHIP SUMMITS",
      description: "Engage with top policymakers and CEOs driving sustainable change.",
      icon: "Briefcase"
    },
    {
      title: "ORGANIC AWARDS",
      description: "Celebrate excellence and recognize pioneering brands in the organic sector.",
      icon: "Award"
    },
    {
      title: "STARTUP SHOWCASE",
      description: "Discover innovative startups pitching groundbreaking green technologies.",
      icon: "Lightbulb"
    },
    {
      title: "B2B MEETINGS",
      description: "Network with top distributors and build lasting global partnerships.",
      icon: "Handshake"
    },
    {
      title: "GLOBAL DELEGATION",
      description: "Connect with international delegates to expand your market reach.",
      icon: "Globe"
    },
    {
      title: "SUSTAINABILITY WORKSHOPS",
      description: "Learn practical implementations for zero-waste and eco-friendly practices.",
      icon: "Leaf"
    },
    {
      title: "PRODUCT LAUNCHPAD",
      description: "Witness the exclusive unveiling of the latest natural and organic innovations.",
      icon: "Store"
    }
  ]
};

const BeyondExhibition = () => {
  const [data, setData] = useState(DEFAULT_BEYOND_DATA);

  useEffect(() => {
    let isMounted = true;
    const fetchBeyondExhibition = async () => {
      try {
        const res = await websiteApi.getBeyondExhibition();
        const serverData = res?.data || res;
        if (serverData && isMounted) {
          const rawItems = Array.isArray(serverData.items) && serverData.items.length > 0
            ? serverData.items
            : Array.isArray(serverData.extras) && serverData.extras.length > 0
            ? serverData.extras
            : DEFAULT_BEYOND_DATA.extras;

          const mappedItems = rawItems.map((item: any, index: number) => {
            let fullTitle = item.title || DEFAULT_BEYOND_DATA.extras[index]?.title || "HIGHLIGHT";
            if (item.title2) {
              fullTitle = `${item.title} ${item.title2}`.trim();
            }
            return {
              title: fullTitle,
              description: item.description || item.subtitle || DEFAULT_BEYOND_DATA.extras[index]?.description || "",
              icon: item.icon || DEFAULT_BEYOND_DATA.extras[index]?.icon || "Users",
            };
          });

          setData({
            enabled: serverData.enabled !== false,
            sectionTag: serverData.sectionTag || DEFAULT_BEYOND_DATA.sectionTag,
            titleMain: serverData.titleMain || DEFAULT_BEYOND_DATA.titleMain,
            titleHighlight: serverData.titleHighlight || DEFAULT_BEYOND_DATA.titleHighlight,
            description: serverData.description || DEFAULT_BEYOND_DATA.description,
            image: serverData.image && serverData.image.trim() !== "" ? serverData.image : seminarsImg,
            imageAlt: serverData.imageAlt || DEFAULT_BEYOND_DATA.imageAlt,
            extras: mappedItems,
          });
        }
      } catch (err) {
        console.error("Failed to load BeyondExhibition:", err);
      }
    };

    fetchBeyondExhibition();
    return () => {
      isMounted = false;
    };
  }, []);

  if (!data.enabled) {
    return null;
  }

  const isRemoteImage = typeof data.image === 'string';

  return (
    <section className="bg-white py-2 lg:py-6 overflow-hidden border-y border-[#3b8c2a]/10 font-inter">
      <div className="w-full px-4 sm:px-6 lg:px-14">

        {/* Main Container */}
        <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">

          {/* Left Hero Panel with Image Background */}
          <div className="w-full lg:w-[35%] relative p-5 md:p-8 lg:p-12 flex flex-col justify-center overflow-hidden text-center lg:text-left min-h-[220px] md:min-h-[400px]">
            {/* Background Image */}
            {isRemoteImage ? (
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                unoptimized
                className="object-cover absolute inset-0 z-0"
              />
            ) : (
              <Image
                src={data.image}
                alt={data.imageAlt}
                fill
                className="object-cover absolute inset-0 z-0"
              />
            )}
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-[#1a3821]/10 mix-blend-multiply z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a3821]/10 via-[#1a3821]/30 to-transparent z-0"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-black/10 border border-white/30 mb-3 md:mb-6 w-fit mx-auto lg:mx-0 shadow-md backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F2B40E] animate-pulse"></span>
                <span className="text-[10px] md:text-[11px] font-bold tracking-widest uppercase text-white drop-shadow-md">{data.sectionTag}</span>
              </div>

              <h2 className="text-[18px] md:text-[32px] font-semibold text-white leading-[1.1] tracking-tight mb-2 md:mb-5 font-poppins drop-shadow-lg" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
                {data.titleMain}{" "}
                <span className="text-[#F2B40E]">{data.titleHighlight}</span>
              </h2>
              <p className="text-white/95 text-[12px] md:text-[16.5px] leading-snug md:leading-[1.6] font-medium max-w-md mx-auto lg:mx-0 drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                {data.description}
              </p>
            </div>
          </div>

          {/* Right Grid */}
          <div className="w-full lg:w-[65%] bg-[#f4fbf4] p-3 md:p-6 lg:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-2 md:gap-4">
              {data.extras.map((item, index) => {
                const IconComponent = (item.icon && ICON_MAP[item.icon]) || DEFAULT_ICONS[index % DEFAULT_ICONS.length] || Users;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2.5 md:gap-4 p-2.5 md:p-4 bg-white rounded-xl md:rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-[#3b8c2a]/30 hover:-translate-y-1 transition-all duration-300 group cursor-default"
                  >
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-[#f8fdf9] to-[#eef5f0] flex items-center justify-center shrink-0 border border-[#d5ebd9] text-[#f58220] group-hover:bg-[#3b8c2a] group-hover:text-white transition-all duration-500 shadow-sm">
                      <div className="scale-75 md:scale-100 flex items-center justify-center">
                        <IconComponent className="w-6 h-6" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="flex flex-col flex-1">
                      <h4 className="text-[12px] md:text-[14px] lg:text-[15px] font-semibold text-[#1a3821] uppercase tracking-wide group-hover:text-[#3b8c2a] transition-colors leading-[1.2] md:leading-[1.3] mb-0.5 md:mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[10px] md:text-[12.5px] text-slate-500 font-medium leading-[1.3] md:leading-[1.5]">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeyondExhibition;
