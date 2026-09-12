"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Apple, Leaf, Sprout, Package, Milk, Droplet, Pill, Box, Tractor, Globe } from "lucide-react";
import SectionContainer from "@/app/components/layout/SectionContainer";

import leafog from "@/app/assets/icons/leafog.png";
import sectors1 from "@/app/assets/home/sectors1.png";
import sectors2 from "@/app/assets/home/sectors2.png";
import sectors3 from "@/app/assets/home/sectors3.png";
import sectors4 from "@/app/assets/home/sectors4.png";
import sectors5 from "@/app/assets/home/sectors5.png";
import sectors6 from "@/app/assets/home/sectors6.png";
import sectors7 from "@/app/assets/home/sectors7.png";
import sectors8 from "@/app/assets/home/sectors8.png";
import sectors9 from "@/app/assets/home/sectors9.png";
import sectors10 from "@/app/assets/home/sectors10.png";

const getImgSrc = (src: any): string => (typeof src === "string" ? src : src?.src || src);

// Mock API response / JSON array of objects
const INDUSTRIES_DATA = [
  {
    id: "industries-section-1",
    sectionTitle: "Industries We Serve",
    sectionTag: "Expo Categories",
    titleMain: "Explore Diverse",
    titleHighlight: "Exhibition Sectors",
    descriptionPrefix: "One Platform. Every Opportunity.",
    description:
      "Bharat Organic Expo brings together the entire organic ecosystem under one roof. Explore a wide range of sectors driving sustainable living, natural wellness, ethical production and global trade.",
    exploreText: "Explore",
    buttonText: "VIEW ALL CATEGORIES",
    decorativeLeaf: getImgSrc(leafog),
    categories: [
      { id: "organic-food-beverages", icon: Apple, title: "Organic Food & Beverages", desc: "Wide range of certified organic foods, beverages, healthy snacks, grains, pulses, and ingredients.", color: "#4ade80", image: sectors1, imageAlt: "Organic Food & Beverages Sector" },
      { id: "ayush-ayurveda-herbal", icon: Leaf, title: "AYUSH, Ayurveda & Herba", desc: "Ayurvedic medicines, herbal supplements, essential oils, teas, wellness products and holistic solutions.", color: "#14b8a6", image: sectors2, imageAlt: "AYUSH, Ayurveda & Herbs Sector" },
      { id: "organic-natural-farming", icon: Sprout, title: "Organic Natural Farming", desc: "Natural farming practices, organic cultivation methods, innovations and farm-to-market solutions.", color: "#22c55e", image: sectors3, imageAlt: "Organic Natural Farming Sector" },
      { id: "organic-inputs-seeds", icon: Package, title: "Organic Inputs, Seeds & Bio- Inputs", desc: "Bio-fertilisers, organic manures, soil enhancers, pesticides and high-quality seeds.", color: "#fb923c", image: sectors4, imageAlt: "Organic Inputs, Seeds & Bio-Inputs Sector" },
      { id: "dairy-livestock", icon: Milk, title: "Dairy, Livestock & Allied", desc: "Organic dairy products, livestock nutrition, animal health solutions and sustainable practices.", color: "#f472b6", image: sectors5, imageAlt: "Dairy, Livestock & Allied Sector" },
      { id: "natural-beauty", icon: Droplet, title: "Natural Beauty & Personal Care", desc: "Herbal skincare, haircare, personal care and eco-friendly beauty products.", color: "#60a5fa", image: sectors7, imageAlt: "Natural Beauty & Personal Care Sector" },
      { id: "nutraceuticals", icon: Pill, title: "Nutraceuticals & Functional Nutrition", desc: "Dietary supplements, functional foods, immunity boosters and wellness nutrition products.", color: "#34d399", image: sectors6, imageAlt: "Nutraceuticals & Functional Nutrition Sector" },
      { id: "sustainable-packaging", icon: Box, title: "Sustainable Packaging & Processing", desc: "Eco-friendly, biodegradable, recyclable and sustainable packaging solutions.", color: "#3b82f6", image: sectors9, imageAlt: "Sustainable Packaging & Processing Sector" },
      { id: "agritech-greentech", icon: Tractor, title: "AgriTech, GreenTech & Innovation", desc: "Innovative agri technologies, smart farming, irrigation, farm mechanization and digital solutions.", color: "#10b981", image: sectors10, imageAlt: "AgriTech, GreenTech & Innovation Sector" },
      { id: "certification-export", icon: Globe, title: "Certification, Export, Trade & Services", desc: "Exporters, importers, trade associations and global business opportunities for organic products.", color: "#f59e0b", image: sectors8, imageAlt: "Certification, Export, Trade & Services Sector" },
    ],
  },
];

const IndustriesSection = () => (
  <section className="pt-4 pb-8 bg-white relative overflow-hidden font-inter">
    {INDUSTRIES_DATA.map((section) => (
      <React.Fragment key={section.id}>
        {/* Decorative Leaf Image on Far Left of Section */}
        <img
          loading="lazy"
          decoding="async"
          src={section.decorativeLeaf}
          alt="Decorative Leaf"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-20 md:w-28 lg:w-32 h-auto object-contain pointer-events-none select-none z-0 opacity-100"
        />

        <SectionContainer className="relative z-10">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-12 h-[2px] bg-[#1b5e20]" />
              <h2 className="text-[#1b5e20] font-semibold text-lg md:text-xl uppercase tracking-[0.08em] font-poppins">
                {section.sectionTitle}
              </h2>
              <span className="w-12 h-[2px] bg-[#1b5e20]" />
            </div>
          </div>

          {/* Static Grid Layout */}
          <div className="w-full py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 lg:gap-x-2 gap-y-4 lg:gap-y-4 justify-center">
            {section.categories.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  href={item.id ? `/exhibition-categories#${item.id}` : "/exhibition-categories"}
                  key={item.id}
                  className="group flex flex-col w-full h-auto bg-[#f6f4f0] rounded-2xl cursor-pointer border-[1px] border-[#c0b7af] shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#3b8c2a]/50 transition-all duration-500 relative mt-4 block"
                >
                  {/* Top-Center Badge */}
                  <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-2 border-[#e8c051] shadow-md z-20 overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#1c3f25] to-[#0a170d]">
                    <div className="w-[110%] h-[110%] absolute inset-0 rounded-full border-[3px] border-white z-0 pointer-events-none scale-105" />
                    {Icon && <Icon className="w-6 h-6 text-white relative z-10" strokeWidth={2} />}
                  </div>

                  {/* Top Half: Image */}
                  <div className="relative w-full h-[140px] lg:h-[180px] shrink-0 overflow-hidden rounded-t-[15px] bg-gray-200">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Bottom Half: Content */}
                  <div className="px-3 py-3 md:px-4 md:py-4 relative z-10 flex flex-col flex-grow items-start text-left bg-white rounded-b-2xl w-full">
                    {/* Title */}
                    <h3 className="text-[13.5px] md:text-[16px] font-semibold text-[#3b8c2a] leading-[1.2] mb-2.5 line-clamp-2 w-full">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[11.5px] md:text-[14px] text-gray-700 font-normal leading-[1.4] mb-3 flex-grow line-clamp-3 w-full text-left">
                      {item.desc}
                    </p>

                    {/* View More Link */}
                    <div className="mt-auto w-full flex justify-between items-center pt-2.5 border-t border-slate-100">
                      <span className="text-[#f58220] group-hover:text-[#d35400] text-[10.5px] md:text-[11px] font-bold uppercase tracking-widest transition-colors duration-300">
                        {section.exploreText}
                      </span>
                      <ArrowRight size={14} strokeWidth={2.5} className="text-[#f58220] group-hover:text-[#d35400] group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </SectionContainer>
      </React.Fragment>
    ))}
  </section>
);

export default IndustriesSection;

