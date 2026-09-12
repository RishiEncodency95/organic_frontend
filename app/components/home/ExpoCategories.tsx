"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Apple, Leaf, Sprout, Package, Milk, Droplet, Pill, Box, Tractor, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { websiteApi } from "@/lib/api";

import sectors1 from "../../assets/home/sectors1.png";
import sectors2 from "../../assets/home/sectors2.png";
import sectors3 from "../../assets/home/sectors3.png";
import sectors4 from "../../assets/home/sectors4.png";
import sectors5 from "../../assets/home/sectors5.png";
import sectors6 from "../../assets/home/sectors6.png";
import sectors7 from "../../assets/home/sectors7.png";
import sectors8 from "../../assets/home/sectors8.png";
import sectors9 from "../../assets/home/sectors9.png";
import sectors10 from "../../assets/home/sectors10.png";

const DEFAULT_SECTOR_IMAGES = [
  sectors1,
  sectors2,
  sectors3,
  sectors4,
  sectors5,
  sectors7,
  sectors6,
  sectors9,
  sectors10,
  sectors8,
];

const DEFAULT_ICONS = [
  Apple,
  Leaf,
  Sprout,
  Package,
  Milk,
  Droplet,
  Pill,
  Box,
  Tractor,
  Globe,
];

// ── Default Data Configuration ──
const DEFAULT_EXPO_DATA = {
  enabled: true,
  sectionTag: "Expo Categories",
  titleMain: "Explore Diverse",
  titleHighlight: "Exhibition Sectors",
  descriptionPrefix: "One Platform. Every Opportunity.",
  description: " Bharat Organic Expo brings together the entire organic ecosystem under one roof. Explore a wide range of sectors driving sustainable living, natural wellness, ethical production and global trade.",
  exploreText: "Explore",
  buttonText: "VIEW ALL CATEGORIES",
  buttonHref: "/exhibition-categories",
  categories: [
    { title: "Organic Food & Beverages", desc: "Wide range of certified organic foods, beverages, healthy snacks, grains, pulses, and ingredients.", color: "#4ade80", image: sectors1 as any, imageAlt: "Organic Food & Beverages Sector", href: "/exhibition-categories", exploreText: "Explore", icon: Apple },
    { title: "AYUSH, Ayurveda & Herba", desc: "Ayurvedic medicines, herbal supplements, essential oils, teas, wellness products and holistic solutions.", color: "#14b8a6", image: sectors2 as any, imageAlt: "AYUSH, Ayurveda & Herbs Sector", href: "/exhibition-categories", exploreText: "Explore", icon: Leaf },
    { title: "Organic Natural Farming", desc: "Natural farming practices, organic cultivation methods, innovations and farm-to-market solutions.", color: "#22c55e", image: sectors3 as any, imageAlt: "Organic Natural Farming Sector", href: "/exhibition-categories", exploreText: "Explore", icon: Sprout },
    { title: "Organic Inputs, Seeds & Bio- Inputs", desc: "Bio-fertilisers, organic manures, soil enhancers, pesticides and high-quality seeds.", color: "#fb923c", image: sectors4 as any, imageAlt: "Organic Inputs, Seeds & Bio-Inputs Sector", href: "/exhibition-categories", exploreText: "Explore", icon: Package },
    { title: "Dairy, Livestock & Allied", desc: "Organic dairy products, livestock nutrition, animal health solutions and sustainable practices.", color: "#f472b6", image: sectors5 as any, imageAlt: "Dairy, Livestock & Allied Sector", href: "/exhibition-categories", exploreText: "Explore", icon: Milk },
    { title: "Natural Beauty & Personal Care", desc: "Herbal skincare, haircare, personal care and eco-friendly beauty products.", color: "#60a5fa", image: sectors7 as any, imageAlt: "Natural Beauty & Personal Care Sector", href: "/exhibition-categories", exploreText: "Explore", icon: Droplet },
    { title: "Nutraceuticals & Functional Nutrition", desc: "Dietary supplements, functional foods, immunity boosters and wellness nutrition products.", color: "#34d399", image: sectors6 as any, imageAlt: "Nutraceuticals & Functional Nutrition Sector", href: "/exhibition-categories", exploreText: "Explore", icon: Pill },
    { title: "Sustainable Packaging & Processing", desc: "Eco-friendly, biodegradable, recyclable and sustainable packaging solutions.", color: "#3b82f6", image: sectors9 as any, imageAlt: "Sustainable Packaging & Processing Sector", href: "/exhibition-categories", exploreText: "Explore", icon: Box },
    { title: "AgriTech, GreenTech & Innovation", desc: "Innovative agri technologies, smart farming, irrigation, farm mechanization and digital solutions.", color: "#10b981", image: sectors10 as any, imageAlt: "AgriTech, GreenTech & Innovation Sector", href: "/exhibition-categories", exploreText: "Explore", icon: Tractor },
    { title: "Certification, Export, Trade & Services", desc: "Exporters, importers, trade associations and global business opportunities for organic products.", color: "#f59e0b", image: sectors8 as any, imageAlt: "Certification, Export, Trade & Services Sector", href: "/exhibition-categories", exploreText: "Explore", icon: Globe },
  ]
};

const ExpoCategories = () => {
  const [data, setData] = useState(DEFAULT_EXPO_DATA);

  useEffect(() => {
    let isMounted = true;
    const fetchExpoCategories = async () => {
      try {
        const res = await websiteApi.getExpoCategories();
        const serverData = res?.data || res;
        if (serverData && isMounted) {
          const rawCats = Array.isArray(serverData.categories) && serverData.categories.length > 0
            ? serverData.categories
            : Array.isArray(serverData.items) && serverData.items.length > 0
            ? serverData.items
            : DEFAULT_EXPO_DATA.categories;

          const mappedCats = rawCats.map((item: any, index: number) => ({
            title: item.title || DEFAULT_EXPO_DATA.categories[index]?.title || "Category",
            desc: item.desc || item.description || DEFAULT_EXPO_DATA.categories[index]?.desc || "",
            image: item.image && item.image.trim() !== "" ? item.image : DEFAULT_SECTOR_IMAGES[index % DEFAULT_SECTOR_IMAGES.length],
            imageAlt: item.imageAlt || item.title || "Category",
            href: item.href || item.link || DEFAULT_EXPO_DATA.categories[index]?.href || "/exhibition-categories",
            exploreText: item.exploreText || DEFAULT_EXPO_DATA.categories[index]?.exploreText || "Explore",
            icon: DEFAULT_ICONS[index % DEFAULT_ICONS.length],
          }));

          setData({
            enabled: serverData.enabled !== false,
            sectionTag: serverData.sectionTag || DEFAULT_EXPO_DATA.sectionTag,
            titleMain: serverData.titleMain || DEFAULT_EXPO_DATA.titleMain,
            titleHighlight: serverData.titleHighlight || DEFAULT_EXPO_DATA.titleHighlight,
            descriptionPrefix: serverData.descriptionPrefix || DEFAULT_EXPO_DATA.descriptionPrefix,
            description: serverData.description || DEFAULT_EXPO_DATA.description,
            exploreText: serverData.exploreText || DEFAULT_EXPO_DATA.exploreText,
            buttonText: serverData.buttonText || DEFAULT_EXPO_DATA.buttonText,
            buttonHref: serverData.buttonHref || serverData.buttonLink || DEFAULT_EXPO_DATA.buttonHref,
            categories: mappedCats,
          });
        }
      } catch (err) {
        console.error("Failed to load ExpoCategories:", err);
      }
    };

    fetchExpoCategories();
    return () => {
      isMounted = false;
    };
  }, []);

  if (!data.enabled) {
    return null;
  }

  return (
    <section className="py-2 md:py-4 lg:py-6 bg-[#EFF7EE] border-t border-b border-[#CDE3C9] relative overflow-hidden">
      <style>{`
        @keyframes float-flower {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float-flower {
          animation: float-flower 10s ease-in-out infinite;
        }
      `}</style>

      <div className="w-full px-0 relative z-10">

        {/* Section Header */}
        <div className="px-4 md:px-14 w-full flex flex-col items-center text-center mb-4 md:mb-6 relative z-10">
          {/* Elegant Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 mb-2 rounded-full bg-white border border-[#3b8c2a]/20 shadow-[0_2px_10px_rgba(59,140,42,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f58634] animate-pulse"></span>
            <span className="text-[#3b8c2a] text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase">
              {data.sectionTag}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[#1a3821] text-[18px] md:text-[30px] lg:text-[32px] font-medium leading-[1.2] mb-3 font-poppins tracking-tight">
            {data.titleMain} {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b8c2a] to-[#F2B40E]">{data.titleHighlight}</span>
          </h2>

          {/* Description */}
          <p className="text-slate-700 text-[14px] md:text-[17px] font-medium leading-[1.2] lg:leading-[1.7]">
            <span className="font-semibold lg:font-bold text-[#1a3821]">{data.descriptionPrefix}</span>{data.description}
          </p>
        </div>

        {/* Static Grid Layout (No Slider) */}
        <div className="w-full mb-2 lg:mb-4 py-2 px-2 md:px-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 lg:gap-x-2 gap-y-2 lg:gap-y-4 justify-center">
          {data.categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                href={item.href || "/exhibition-categories"}
                target="_blank"
                key={index}
                className="group flex flex-col w-full h-auto bg-[#f6f4f0] rounded-2xl cursor-pointer border-[1px] border-[#c0b7af] shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#3b8c2a]/50 transition-all duration-500 relative mt-3 md:mt-4"
              >
                {/* Top-Center Badge */}
                <div className="absolute top-[-16px] md:top-[-20px] left-1/2 -translate-x-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-[#e8c051] shadow-md z-20 overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#1c3f25] to-[#0a170d]">
                  <div className="w-[110%] h-[110%] absolute inset-0 rounded-full border-[3px] border-white z-0 pointer-events-none scale-105" />
                  {Icon && <Icon className="w-4 h-4 md:w-6 md:h-6 text-white relative z-10" strokeWidth={2} />}
                </div>

                {/* Top Half: Image */}
                <div className="relative w-full h-[90px] sm:h-[110px] md:h-[140px] lg:h-[180px] shrink-0 overflow-hidden rounded-t-[15px] bg-gray-200">
                  {typeof item.image === "string" ? (
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                </div>

                {/* Bottom Half: Content */}
                <div className="px-2 py-2.5 md:px-4 md:py-4 relative z-10 flex flex-col flex-grow items-start text-left bg-white rounded-b-2xl w-full">
                  {/* Title */}
                  <h3 className="text-[12px] sm:text-[13.5px] md:text-[16px] font-semibold text-[#3b8c2a] leading-[1.2] mb-1.5 md:mb-2.5 line-clamp-2 w-full">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[10px] sm:text-[11.5px] md:text-[14px] text-gray-700 font-normal leading-[1.3] md:leading-[1.4] mb-2 md:mb-3 flex-grow line-clamp-2 md:line-clamp-3 w-full text-left">
                    {item.desc}
                  </p>

                  {/* View More Link */}
                  <div className="mt-auto w-full flex justify-between items-center pt-2 md:pt-2.5 border-t border-slate-100">
                    <span className="text-[#f58220] group-hover:text-[#d35400] text-[9.5px] md:text-[11px] font-bold uppercase tracking-widest transition-colors duration-300">
                      {item.exploreText || data.exploreText || "Explore"}
                    </span>
                    <ArrowRight className="text-[#f58220] group-hover:text-[#d35400] group-hover:translate-x-1 transition-all duration-300 w-3 h-3 md:w-[14px] md:h-[14px]" strokeWidth={2.5} />
                  </div>
                </div>

              </Link>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex justify-center px-4 mb-2 ">
          <Link href={data.buttonHref || "/exhibition-categories"} target="_blank" className="group flex items-center justify-center gap-3 px-6 py-2 rounded-full border-2 border-[#F2B40E] bg-[#3b8c2a] text-white text-[12px] md:text-[14px] font-bold uppercase tracking-wider hover:bg-[#F2B40E] hover:text-[#0b2912] hover:shadow-lg transition-all duration-300 min-h-[44px]">
            {data.buttonText}
            <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ExpoCategories;

