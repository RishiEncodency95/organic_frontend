"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Lightbulb, Handshake, TrendingUp, BookOpen, PackageSearch, Zap,
  Users, Star, Leaf, ShoppingCart, Globe, Hospital,
  Stethoscope, Dumbbell, Flower2, Sprout, Heart,
  CalendarDays, MapPin, Trophy, ArrowRight
} from 'lucide-react';
import { websiteApi } from '@/lib/api';

const Sparkle = ({ style, color = "#facc15", shadow = "#4B1426" }: { style?: React.CSSProperties; color?: string; shadow?: string }) => (
  <span
    style={{
      position: "absolute",
      pointerEvents: "none",
      fontSize: "13px",
      color,
      textShadow: `0 0 6px ${shadow}, 0 0 12px ${shadow}`,
      animation: "sparkleAnim 1.6s ease-in-out infinite",
      opacity: 0,
      zIndex: 25,
      ...style,
    }}
  >
    ✦
  </span>
);

const DEFAULT_ATTEND_DATA = {
  enabled: true,
  titlePrefix: "WHY",
  titleHighlight: "ATTEND?",
  description: "Explore innovations, build connections and gain insights that drive better health and stronger businesses.",
  image: "",
  imageAlt: "Why Attend Bharat Organic Expo",
  buttonLabel: "REGISTER AS VISITOR!",
  buttonHref: "/registration/visitor-registration",

  feature1Title: "DISCOVER",
  feature1Desc: "Explore the latest organic products and eco-friendly services driving a sustainable future.",
  feature2Title: "LEARN",
  feature2Desc: "Attend seminars, workshops and live demos by organic agriculture and sustainability experts.",
  feature3Title: "CONNECT",
  feature3Desc: "Meet leading organic brands, manufacturers and sustainable suppliers under one roof.",
  feature4Title: "SOURCE",
  feature4Desc: "Find trusted organic suppliers, distributors and eco-franchise opportunities.",
  feature5Title: "GROW",
  feature5Desc: "Unlock new green business opportunities, partnerships and eco-investment possibilities.",
  feature6Title: "STAY AHEAD",
  feature6Desc: "Stay updated with market trends, conscious consumer insights and future organic industry developments.",

  keyPoints: [
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
  ],
  rightTitle: "WHO SHOULD ATTEND?",
  rightBottomText: "Whether you're sourcing, learning or networking — this is the place to be!",
  centerText1: "ONE PLATFORM.",
  centerText2: "ORGANIC",
  centerText3: "OPPORTUNITIES."
};

const DEFAULT_ATTENDEE_ICONS = [
  <ShoppingCart key="1" className="w-4 h-4" />,
  <Globe key="2" className="w-4 h-4" />,
  <Hospital key="3" className="w-4 h-4" />,
  <Stethoscope key="4" className="w-4 h-4" />,
  <Dumbbell key="5" className="w-4 h-4" />,
  <Sprout key="6" className="w-4 h-4" />,
  <Flower2 key="7" className="w-4 h-4" />,
  <Handshake key="8" className="w-4 h-4" />,
  <Users key="9" className="w-4 h-4" />,
  <Heart key="10" className="w-4 h-4" />,
];

const SponsorsAndAttend = () => {
  const [data, setData] = useState(DEFAULT_ATTEND_DATA);

  useEffect(() => {
    let isMounted = true;
    const fetchSponsorsAndAttend = async () => {
      try {
        const res = await websiteApi.getSponsorsAndAttend();
        const serverData = res?.data || res;
        if (serverData && isMounted) {
          const rawKeyPoints = [
            serverData.keyPoint1 || serverData.rightSection?.items?.[0]?.label || DEFAULT_ATTEND_DATA.keyPoints[0].label,
            serverData.keyPoint2 || serverData.rightSection?.items?.[1]?.label || DEFAULT_ATTEND_DATA.keyPoints[1].label,
            serverData.keyPoint3 || serverData.rightSection?.items?.[2]?.label || DEFAULT_ATTEND_DATA.keyPoints[2].label,
            serverData.keyPoint4 || serverData.rightSection?.items?.[3]?.label || DEFAULT_ATTEND_DATA.keyPoints[3].label,
            serverData.keyPoint5 || serverData.rightSection?.items?.[4]?.label || DEFAULT_ATTEND_DATA.keyPoints[4].label,
            serverData.keyPoint6 || serverData.rightSection?.items?.[5]?.label || DEFAULT_ATTEND_DATA.keyPoints[5].label,
            serverData.keyPoint7 || serverData.rightSection?.items?.[6]?.label || DEFAULT_ATTEND_DATA.keyPoints[6].label,
            serverData.keyPoint8 || serverData.rightSection?.items?.[7]?.label || DEFAULT_ATTEND_DATA.keyPoints[7].label,
            serverData.keyPoint9 || serverData.rightSection?.items?.[8]?.label || DEFAULT_ATTEND_DATA.keyPoints[8].label,
            serverData.keyPoint10 || serverData.rightSection?.items?.[9]?.label || DEFAULT_ATTEND_DATA.keyPoints[9].label,
          ];

          setData({
            enabled: serverData.enabled !== false,
            titlePrefix: serverData.titlePrefix || serverData.leftSection?.titlePrefix || DEFAULT_ATTEND_DATA.titlePrefix,
            titleHighlight: serverData.titleHighlight || serverData.leftSection?.titleHighlight || DEFAULT_ATTEND_DATA.titleHighlight,
            description: serverData.description || serverData.leftSection?.description || DEFAULT_ATTEND_DATA.description,
            image: serverData.image || "",
            imageAlt: serverData.imageAlt || DEFAULT_ATTEND_DATA.imageAlt,
            buttonLabel: serverData.buttonLabel || DEFAULT_ATTEND_DATA.buttonLabel,
            buttonHref: serverData.buttonHref || DEFAULT_ATTEND_DATA.buttonHref,

            feature1Title: serverData.feature1Title || serverData.leftSection?.itemsLeft?.[0]?.title || DEFAULT_ATTEND_DATA.feature1Title,
            feature1Desc: serverData.feature1Desc || serverData.leftSection?.itemsLeft?.[0]?.desc || DEFAULT_ATTEND_DATA.feature1Desc,
            feature2Title: serverData.feature2Title || serverData.leftSection?.itemsRight?.[0]?.title || DEFAULT_ATTEND_DATA.feature2Title,
            feature2Desc: serverData.feature2Desc || serverData.leftSection?.itemsRight?.[0]?.desc || DEFAULT_ATTEND_DATA.feature2Desc,
            feature3Title: serverData.feature3Title || serverData.leftSection?.itemsLeft?.[1]?.title || DEFAULT_ATTEND_DATA.feature3Title,
            feature3Desc: serverData.feature3Desc || serverData.leftSection?.itemsLeft?.[1]?.desc || DEFAULT_ATTEND_DATA.feature3Desc,
            feature4Title: serverData.feature4Title || serverData.leftSection?.itemsRight?.[1]?.title || DEFAULT_ATTEND_DATA.feature4Title,
            feature4Desc: serverData.feature4Desc || serverData.leftSection?.itemsRight?.[1]?.desc || DEFAULT_ATTEND_DATA.feature4Desc,
            feature5Title: serverData.feature5Title || serverData.leftSection?.itemsLeft?.[2]?.title || DEFAULT_ATTEND_DATA.feature5Title,
            feature5Desc: serverData.feature5Desc || serverData.leftSection?.itemsLeft?.[2]?.desc || DEFAULT_ATTEND_DATA.feature5Desc,
            feature6Title: serverData.feature6Title || serverData.leftSection?.itemsRight?.[2]?.title || DEFAULT_ATTEND_DATA.feature6Title,
            feature6Desc: serverData.feature6Desc || serverData.leftSection?.itemsRight?.[2]?.desc || DEFAULT_ATTEND_DATA.feature6Desc,

            keyPoints: rawKeyPoints.map((label, idx) => ({
              label,
              icon: DEFAULT_ATTENDEE_ICONS[idx % DEFAULT_ATTENDEE_ICONS.length],
            })),
            rightTitle: serverData.rightSection?.title || DEFAULT_ATTEND_DATA.rightTitle,
            rightBottomText: serverData.rightSection?.bottomText || DEFAULT_ATTEND_DATA.rightBottomText,
            centerText1: serverData.centerSection?.text1 || DEFAULT_ATTEND_DATA.centerText1,
            centerText2: serverData.centerSection?.text2 || DEFAULT_ATTEND_DATA.centerText2,
            centerText3: serverData.centerSection?.text3 || DEFAULT_ATTEND_DATA.centerText3,
          });
        }
      } catch (err) {
        console.error("Failed to load SponsorsAndAttend:", err);
      }
    };

    fetchSponsorsAndAttend();
    return () => {
      isMounted = false;
    };
  }, []);

  if (!data.enabled) {
    return null;
  }

  return (
    <>
      <section className="w-full relative z-10 py-2 md:py-6 lg:py-6 overflow-hidden bg-[#EFF7EE]">
        <div className="w-full px-4 md:px-14 grid grid-cols-1 xl:grid-cols-12 gap-2 xl:gap-4 items-start">

          {/* LEFT: WHY ATTEND */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="xl:col-span-5"
          >
            <div className="flex flex-col md:flex-row items-start gap-1 mb-2 text-left">
              <div className="flex items-center gap-1.5">
                <h2 className="text-[16px] md:text-[24px] lg:text-[30px] font-semibold text-[#1a1a1a] tracking-tight leading-[1.2]">
                  {data.titlePrefix} <span className="bg-gradient-to-r from-[#00643b] to-[#f58220] bg-clip-text text-transparent">{data.titleHighlight}</span>
                </h2>
                <Leaf className="w-5 h-5 md:w-8 md:h-8 text-[#f58220] fill-[#f58220]" />
              </div>
            </div>
            <p className="text-[14px] sm:text-[16px] md:text-[18px] text-gray-700 font-normal mb-2 md:mb-4 leading-[1.5] md:leading-[1.6] max-w-[500px] text-left">
              {data.description}
            </p>

            {/* Divider with Leaf */}
            <div className="flex items-center gap-4 mb-1 md:mb-2">
              <div className="h-[1px] flex-grow bg-gray-200" />
              <Leaf className="w-3.5 h-3.5 text-[#00643b] fill-[#00643b]" />
              <div className="h-[1px] flex-grow bg-gray-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 relative border-l-0 md:border-l border-gray-100 gap-y-1 md:gap-y-0 mt-1 md:mt-0">
              {/* Vertical Divider - Hidden on mobile */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] border-r border-dashed border-gray-300 z-0" />

              {/* Row 1: DISCOVER & LEARN */}
              <div className="py-0.5 md:py-1 px-0 md:px-3 border-b-0 md:border-b border-dashed border-gray-300 relative">
                <div className="flex gap-2.5 md:gap-4 group">
                  <div className="w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[#fff8f2] shrink-0 mt-0.5 border border-[#feeddf]">
                    <Lightbulb className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#f58220]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[12.5px] md:text-[18px] font-semibold text-[#00643b] mb-0.5 md:mb-1 leading-none pt-0.5 md:pt-1.5">{data.feature1Title}</h3>
                    <p className="text-[10.5px] sm:text-[11.5px] md:text-[15px] text-gray-600 font-normal leading-[1.3] md:leading-[1.6]">{data.feature1Desc}</p>
                  </div>
                </div>
              </div>
              <div className="py-0.5 md:py-2 px-0 md:px-2 border-b-0 md:border-b border-dashed border-gray-300 relative">
                <div className="flex gap-2.5 md:gap-4 group">
                  <div className="w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[#fff8f2] shrink-0 mt-0.5 border border-[#feeddf]">
                    <BookOpen className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#f58220]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[12.5px] md:text-[18px] font-semibold text-[#00643b] mb-0.5 md:mb-1 leading-none pt-0.5 md:pt-1.5">{data.feature2Title}</h3>
                    <p className="text-[10.5px] sm:text-[11.5px] md:text-[15px] text-gray-600 font-normal leading-[1.3] md:leading-[1.6]">{data.feature2Desc}</p>
                  </div>
                </div>
              </div>

              {/* Row 2: CONNECT & SOURCE */}
              <div className="py-0.5 md:py-2 px-0 md:px-3 border-b-0 md:border-b border-dashed border-gray-300 relative">
                <div className="flex gap-2.5 md:gap-4 group">
                  <div className="w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[#fff8f2] shrink-0 mt-0.5 border border-[#feeddf]">
                    <Handshake className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#f58220]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[12.5px] md:text-[18px] font-semibold text-[#00643b] mb-0.5 md:mb-1 leading-none pt-0.5 md:pt-1.5">{data.feature3Title}</h3>
                    <p className="text-[10.5px] sm:text-[11.5px] md:text-[15px] text-gray-600 font-normal leading-[1.3] md:leading-[1.6]">{data.feature3Desc}</p>
                  </div>
                </div>
              </div>
              <div className="py-0.5 md:py-2 px-0 md:px-3 border-b-0 md:border-b border-dashed border-gray-300 relative">
                <div className="flex gap-2.5 md:gap-4 group">
                  <div className="w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[#fff8f2] shrink-0 mt-0.5 border border-[#feeddf]">
                    <PackageSearch className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#f58220]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[12.5px] md:text-[18px] font-semibold text-[#00643b] mb-0.5 md:mb-1 leading-none pt-0.5 md:pt-1.5">{data.feature4Title}</h3>
                    <p className="text-[10.5px] sm:text-[11.5px] md:text-[15px] text-gray-600 font-normal leading-[1.3] md:leading-[1.6]">{data.feature4Desc}</p>
                  </div>
                </div>
              </div>

              {/* Row 3: GROW & STAY AHEAD */}
              <div className="py-0.5 md:py-2 px-0 md:px-3 relative">
                <div className="flex gap-2.5 md:gap-4 group">
                  <div className="w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[#fff8f2] shrink-0 mt-0.5 border border-[#feeddf]">
                    <TrendingUp className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#f58220]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[12.5px] md:text-[18px] font-semibold text-[#00643b] mb-0.5 md:mb-1 leading-none pt-0.5 md:pt-1.5">{data.feature5Title}</h3>
                    <p className="text-[10.5px] sm:text-[11.5px] md:text-[15px] text-gray-600 font-normal leading-[1.3] md:leading-[1.6]">{data.feature5Desc}</p>
                  </div>
                </div>
              </div>
              <div className="py-0.5 md:py-2 px-0 md:px-3 relative">
                <div className="flex gap-2.5 md:gap-4 group">
                  <div className="w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-[#fff8f2] shrink-0 mt-0.5 border border-[#feeddf]">
                    <Zap className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#f58220]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[12.5px] md:text-[18px] font-semibold text-[#00643b] mb-0.5 md:mb-1 leading-none pt-0.5 md:pt-1.5">{data.feature6Title}</h3>
                    <p className="text-[10.5px] sm:text-[11.5px] md:text-[15px] text-gray-600 font-normal leading-[1.3] md:leading-[1.6]">{data.feature6Desc}</p>
                  </div>
                </div>
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
            className="xl:col-span-4 self-center flex justify-center items-center relative py-1 md:py-4"
          >
            <div className="relative w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] md:w-[360px] md:h-[360px] aspect-square">

              {/* Image Circle Container */}
              <div className="absolute inset-0 rounded-full border-[4px] sm:border-[5px] md:border-[8px] border-white shadow-xl overflow-hidden bg-white">
                {data.image && data.image.trim() !== "" ? (
                  <img
                    src={data.image}
                    alt={data.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-0.5 sm:gap-1 bg-white">
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
                )}
              </div>

              {/* Center Overlay Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[90px] sm:w-[110px] h-[90px] sm:h-[110px] md:w-[130px] md:h-[130px] bg-white rounded-full flex flex-col items-center justify-center text-center shadow-lg p-2 sm:p-3 border-[3px] md:border-[4px] border-white">
                <Leaf className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#00643b] mb-0.5 sm:mb-1" />
                <p className="text-[8.5px] sm:text-[10px] md:text-[11.5px] font-black text-[#00643b] leading-tight uppercase">{data.centerText1}</p>
                <p className="text-[8.5px] sm:text-[10px] md:text-[11.5px] font-black text-[#f58220] leading-tight uppercase tracking-tight">{data.centerText2}</p>
                <p className="text-[8.5px] sm:text-[10px] md:text-[11.5px] font-black text-[#00643b] leading-tight uppercase tracking-tight">{data.centerText3}</p>
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
            className="xl:col-span-3 relative z-20 mt-1 md:mt-4 xl:mt-0"
          >
            <div className="bg-white border border-gray-200 rounded-[1rem] overflow-hidden shadow-lg">
              <div className="bg-[#3b8c2a] text-white p-2 flex items-center justify-center relative">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#f58220]" />
                  <span className="text-[16px] md:text-[18px] font-semibold uppercase tracking-wider">{data.rightTitle}</span>
                </div>
              </div>

              <div className="px-2 md:px-3 py-0 md:py-0">
                {data.keyPoints.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3 py-0.5 md:py-1 border-b border-gray-100 last:border-0 group cursor-default">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded bg-[#fff8f2] flex items-center justify-center text-[#f58220] group-hover:bg-[#f58220] group-hover:text-white transition-all duration-300 border border-[#feeddf] shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-[11.5px] sm:text-[13px] md:text-[14px] text-gray-700 font-medium group-hover:text-[#00643b] transition-colors leading-[1.3] md:leading-[1.5]">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Right CTA Card */}
              <div className="p-2.5 bg-[#f5fdf7] border-t border-gray-100 flex items-center gap-2.5">
                <div className="w-6 h-6 bg-[#f58220] rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Star className="w-3.5 h-3.5 text-white" />
                </div>
                <p className="text-[14px] text-[#00643b] font-semibold leading-[1.4]">
                  {data.rightBottomText}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* PREMIUM FULL WIDTH BAND */}
      <section className="hidden md:block w-full bg-[#1b5e20] font-inter relative z-30 py-2.5 lg:py-3 border-y border-[#facc15]/20 shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-visible">
        <style>{`
          @keyframes sparkleAnim {
            0%, 100% { opacity: 0; transform: scale(0.4) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
          }
        `}</style>
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#1b5e20]/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#facc15]/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

        <div className="px-3 md:px-14 grid grid-cols-2 sm:grid-cols-2 xl:flex xl:items-center xl:justify-between gap-y-3 gap-x-2 md:gap-4 relative z-10">

          {/* Item 1: Date */}
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#facc15] shadow-sm group-hover:bg-[#facc15] group-hover:text-[#0b2912] transition-colors duration-300 shrink-0">
              <CalendarDays className="w-5 h-5" strokeWidth={2} />
            </div>
            <div className="flex flex-col text-left font-inter">
              <span className="text-[14px] lg:text-[16px] font-semibold text-white leading-none mb-1">19 &ndash; 21</span>
              <span className="text-[11px] lg:text-[12px] font-semibold text-[#facc15] uppercase tracking-widest leading-none">FEBRUARY 2027</span>
            </div>
          </div>

          <div className="hidden xl:block w-[1px] h-8 bg-white/10"></div>

          {/* Item 2: Location */}
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#facc15] shadow-sm group-hover:bg-[#facc15] group-hover:text-[#0b2912] transition-colors duration-300 shrink-0">
              <MapPin className="w-5 h-5" strokeWidth={2} />
            </div>
            <div className="flex flex-col text-left font-inter">
              <span className="text-[14px] lg:text-[16px] font-semibold text-white leading-none mb-1 uppercase">PRAGATI MAIDAN</span>
              <span className="text-[11px] lg:text-[12px] font-semibold text-[#facc15] uppercase tracking-widest leading-none">NEW DELHI, INDIA</span>
            </div>
          </div>

          <div className="hidden xl:block w-[1px] h-8 bg-white/10"></div>

          {/* Item 3: Global Edition */}
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#facc15]/10 border border-[#facc15]/30 flex items-center justify-center text-[#facc15] shadow-sm group-hover:bg-[#facc15] group-hover:text-[#0b2912] transition-colors duration-300 shrink-0">
              <Globe className="w-5 h-5" strokeWidth={2} />
            </div>
            <div className="flex flex-col text-left font-inter">
              <span className="text-[14px] lg:text-[16px] font-semibold text-white leading-none mb-1 uppercase">GLOBAL EDITION</span>
              <span className="text-[10px] lg:text-[11px] font-semibold text-[#facc15] uppercase tracking-wider leading-none">CONNECTING THE WORLD<br />OF ORGANIC & NATURAL</span>
            </div>
          </div>

          <div className="hidden xl:block w-[1px] h-8 bg-white/10"></div>

          {/* Trophy Info */}
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#facc15] shadow-sm group-hover:bg-[#facc15] group-hover:text-[#0b2912] transition-colors duration-300 shrink-0">
              <Trophy className="w-5 h-5" strokeWidth={2} />
            </div>
            <div className="flex flex-col text-left font-inter">
              <span className="text-[12px] lg:text-[13px] font-semibold text-white/90 leading-none mb-1 uppercase tracking-wide">BE PART OF INDIA'S BIGGEST</span>
              <span className="text-[13px] lg:text-[15px] font-semibold text-[#facc15] uppercase leading-none">ORGANIC & NATURAL SHOW!</span>
            </div>
          </div>

          <div className="hidden xl:block w-[1px] h-8 bg-white/10"></div>

          {/* Register Button */}
          <div className="relative shrink-0 z-30 col-span-2 sm:col-span-2 xl:col-span-1 flex justify-center mt-1 md:mt-0">
            <Sparkle color="#4B1426" shadow="#ffffff" style={{ top: "-12px", left: "5%", animationDelay: "0s" }} />
            <Sparkle color="#4B1426" shadow="#ffffff" style={{ top: "-15px", left: "28%", animationDelay: "0.3s" }} />
            <Sparkle color="#4B1426" shadow="#ffffff" style={{ top: "-13px", left: "50%", animationDelay: "0.6s" }} />
            <Sparkle color="#4B1426" shadow="#ffffff" style={{ top: "-15px", left: "72%", animationDelay: "0.9s" }} />
            <Sparkle color="#4B1426" shadow="#ffffff" style={{ top: "-12px", right: "5%", animationDelay: "1.2s" }} />
            <Link
              href={data.buttonHref || "/registration/visitor-registration"}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-start gap-2.5 bg-[#4B1426] hover:bg-[#360e1b] text-white px-6 py-2.5 rounded-full shadow-[0_4px_20px_rgba(75,20,38,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 shrink-0 font-inter overflow-hidden border border-white/20"
            >
              <span className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              <span className="text-white font-semibold text-[13px] lg:text-[14px] tracking-widest uppercase relative z-10">
                {data.buttonLabel || "REGISTER AS VISITOR!"}
              </span>
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#4B1426] transition-colors relative z-10">
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={3} />
              </div>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default SponsorsAndAttend;