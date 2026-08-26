"use client";

import { motion } from "framer-motion";
import { ArrowRight, Apple, Leaf, Sprout, Package, Milk, Droplet, Pill, Box, Tractor, Globe } from "lucide-react";
import Image from "next/image";

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

// ── Dynamic Data Configuration ──
const sectionData = {
  sectionTag: "Expo Categories",
  titleMain: "Explore Diverse",
  titleHighlight: "Exhibition Sectors",
  descriptionPrefix: "One Platform. Every Opportunity.",
  description: " Bharat Organic Expo brings together the entire organic ecosystem under one roof. Explore a wide range of sectors driving sustainable living, natural wellness, ethical production and global trade.",
  exploreText: "Explore",
  buttonText: "VIEW ALL CATEGORIES",
  categories: [
    { icon: Apple, title: "Organic Food & Beverages", desc: "Wide range of certified organic foods, beverages, healthy snacks, grains, pulses, and ingredients.", color: "#4ade80", image: sectors1, imageAlt: "Organic Food & Beverages Sector" },
    { icon: Leaf, title: "AYUSH, Ayurveda & Herba", desc: "Ayurvedic medicines, herbal supplements, essential oils, teas, wellness products and holistic solutions.", color: "#14b8a6", image: sectors2, imageAlt: "AYUSH, Ayurveda & Herbs Sector" },
    { icon: Sprout, title: "Organic Natural Farming", desc: "Natural farming practices, organic cultivation methods, innovations and farm-to-market solutions.", color: "#22c55e", image: sectors3, imageAlt: "Organic Natural Farming Sector" },
    { icon: Package, title: "Organic Inputs, Seeds & Bio- Inputs", desc: "Bio-fertilisers, organic manures, soil enhancers, pesticides and high-quality seeds.", color: "#fb923c", image: sectors4, imageAlt: "Organic Inputs, Seeds & Bio-Inputs Sector" },
    { icon: Milk, title: "Dairy, Livestock & Allied", desc: "Organic dairy products, livestock nutrition, animal health solutions and sustainable practices.", color: "#f472b6", image: sectors5, imageAlt: "Dairy, Livestock & Allied Sector" },
    { icon: Droplet, title: "Natural Beauty & Personal Care", desc: "Herbal skincare, haircare, personal care and eco-friendly beauty products.", color: "#60a5fa", image: sectors6, imageAlt: "Natural Beauty & Personal Care Sector" },
    { icon: Pill, title: "Nutraceuticals & Functional Nutrition", desc: "Dietary supplements, functional foods, immunity boosters and wellness nutrition products.", color: "#34d399", image: sectors7, imageAlt: "Nutraceuticals & Functional Nutrition Sector" },
    { icon: Box, title: "Sustainable Packaging & Processing", desc: "Eco-friendly, biodegradable, recyclable and sustainable packaging solutions.", color: "#3b82f6", image: sectors8, imageAlt: "Sustainable Packaging & Processing Sector" },
    { icon: Tractor, title: "AgriTech, GreenTech & Innovation", desc: "Innovative agri technologies, smart farming, irrigation, farm mechanization and digital solutions.", color: "#10b981", image: sectors9, imageAlt: "AgriTech, GreenTech & Innovation Sector" },
    { icon: Globe, title: "Certification, Export, Trade & Services", desc: "Exporters, importers, trade associations and global business opportunities for organic products.", color: "#f59e0b", image: sectors10, imageAlt: "Certification, Export, Trade & Services Sector" },
  ]
};


const ExpoCategories = () => {
  return (
    <section className="py-2 md:py-4 lg:py-8 bg-[#EFF7EE] border-t border-b border-[#CDE3C9] relative overflow-hidden">
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
        <div className="px-4 md:px-11 w-full flex flex-col items-center text-center mb-6 relative z-10">
          {/* Elegant Badge */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 mb-2 rounded-full bg-white border border-[#3b8c2a]/20 shadow-[0_2px_10px_rgba(59,140,42,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f58634] animate-pulse"></span>
            <span className="text-[#3b8c2a] text-[11px] md:text-[12px] font-bold tracking-[0.2em] uppercase">
              {sectionData.sectionTag}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[#1a3821] text-[18px] md:text-[30px] lg:text-[32px] font-medium leading-[1.2] mb-4 font-poppins tracking-tight">
            {sectionData.titleMain} <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b8c2a] to-[#F2B40E]">{sectionData.titleHighlight}</span>
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-[15px] md:text-[17px]  font-medium leading-[1.7]">
            <span className="font-bold text-[#1a3821]">{sectionData.descriptionPrefix}</span>{sectionData.description}
          </p>
        </div>

        {/* Static Grid Layout (No Slider) */}
        <div className="w-full mb-6 py-2 px-2 md:px-11 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 lg:gap-x-2 gap-y-4 lg:gap-y-4 justify-center">
          {sectionData.categories.map((item, index) => {
            const Icon = item.icon;
            const displayIndex = index + 1; // Numbering 1 to 10

            return (
              <div
                key={index}
                className="group flex flex-col w-full h-auto bg-[#f6f4f0] rounded-2xl cursor-pointer border-[1px] border-[#c0b7af] shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#3b8c2a]/50 transition-all duration-500 relative mt-4"
              >
                {/* Top-Center Badge */}
                <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-2 border-[#e8c051] shadow-md z-20 overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#1c3f25] to-[#0a170d]">
                  <div className="w-[110%] h-[110%] absolute inset-0 rounded-full border-[3px] border-white z-0 pointer-events-none scale-105" />
                  {Icon && <Icon className="w-6 h-6 text-white relative z-10" strokeWidth={2} />}
                </div>

                {/* Top Half: Image */}
                <div className="relative w-full h-[140px] lg:h-[180px] shrink-0 overflow-hidden rounded-t-[15px] bg-gray-200">
                  <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw" className="object-cover group-hover:scale-110 transition-transform duration-700" />
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
                      {sectionData.exploreText}
                    </span>
                    <ArrowRight size={14} strokeWidth={2.5} className="text-[#f58220] group-hover:text-[#d35400] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex justify-center px-4 mb-2 ">
          <button className="group flex items-center justify-center gap-3 px-6 py-2 rounded-full border-2 border-[#F2B40E] bg-[#3b8c2a] text-white text-[12px] md:text-[14px] font-bold uppercase tracking-wider hover:bg-[#F2B40E] hover:text-[#0b2912] hover:shadow-lg transition-all duration-300 min-h-[44px]">
            {sectionData.buttonText}
            <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ExpoCategories;
