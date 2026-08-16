"use client";

import { motion } from "framer-motion";
import { ArrowRight, Apple, Leaf, Sprout, Package, Milk, Droplet, Pill, Box, Tractor, Globe } from "lucide-react";

const categories = [
  { icon: Apple, title: "Organic Food & Beverages", desc: "Wide range of certified organic foods, beverages, healthy snacks, grains, pulses, and ingredients.", color: "#4ade80", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" },
  { icon: Leaf, title: "AYUSH, Ayurveda & Herba", desc: "Ayurvedic medicines, herbal supplements, essential oils, teas, wellness products and holistic solutions.", color: "#14b8a6", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80" },
  { icon: Sprout, title: "Organic Natural Farming", desc: "Natural farming practices, organic cultivation methods, innovations and farm-to-market solutions.", color: "#22c55e", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" },
  { icon: Package, title: "Organic Inputs, Seeds & Bio- Inputs", desc: "Bio-fertilisers, organic manures, soil enhancers, pesticides and high-quality seeds.", color: "#fb923c", image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=800&q=80" },
  { icon: Milk, title: "Dairy, Livestock & Allied", desc: "Organic dairy products, livestock nutrition, animal health solutions and sustainable practices.", color: "#f472b6", image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&q=80" },
  { icon: Droplet, title: "Natural Beauty & Personal Care", desc: "Herbal skincare, haircare, personal care and eco-friendly beauty products.", color: "#60a5fa", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80" },
  { icon: Pill, title: "Nutraceuticals & Functional Nutrition", desc: "Dietary supplements, functional foods, immunity boosters and wellness nutrition products.", color: "#34d399", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80" },
  { icon: Box, title: "Sustainable Packaging & Processing", desc: "Eco-friendly, biodegradable, recyclable and sustainable packaging solutions.", color: "#3b82f6", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80" },
  { icon: Tractor, title: "AgriTech, GreenTech & Innovation", desc: "Innovative agri technologies, smart farming, irrigation, farm mechanization and digital solutions.", color: "#10b981", image: "https://images.unsplash.com/photo-1595000780282-e1a53f937d36?w=800&q=80" },
  { icon: Globe, title: "Certification, Export, Trade & Services", desc: "Exporters, importers, trade associations and global business opportunities for organic products.", color: "#f59e0b", image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80" },
];

const FlowerDecoration = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    {/* Center Petal */}
    <path d="M60 10 C70 30 75 60 60 90 C45 60 50 30 60 10 Z" fill="#ffffff" />
    {/* Inner Left Petal */}
    <path d="M60 90 C30 75 20 40 30 25 C45 35 55 60 60 90 Z" fill="#ffffff" />
    {/* Inner Right Petal */}
    <path d="M60 90 C90 75 100 40 90 25 C75 35 65 60 60 90 Z" fill="#ffffff" />
    {/* Outer Left Petal */}
    <path d="M55 90 C20 85 5 60 10 45 C30 55 45 75 55 90 Z" fill="#ffffff" />
    {/* Outer Right Petal */}
    <path d="M65 90 C100 85 115 60 110 45 C90 55 75 75 65 90 Z" fill="#ffffff" />
  </svg>
);

const ExpoCategories = () => {
  return (
    <section className="py-2 md:py-4 lg:py-4 bg-[#EFF7EE] border-t border-b border-[#CDE3C9] relative overflow-hidden">
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

        {/* Header */}
        <div className="px-4 md:px-11 w-full flex flex-col items-center text-center mb-2 md:mb-4">
          {/* Badge */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1.5px] w-12 bg-gradient-to-l from-[#3b8c2a] to-transparent hidden sm:block"></div>
            <div className="px-5 py-2 rounded-full border border-[#d5ebd9] bg-[#eef5f0] shadow-sm flex items-center justify-center">
              <span className="text-[#1a3821] text-[13px] md:text-[14px] font-bold tracking-[0.1em] uppercase drop-shadow-sm">
                EXPO CATEGORIES
              </span>
            </div>
            <div className="h-[1.5px] w-12 bg-gradient-to-r from-[#3b8c2a] to-transparent hidden sm:block"></div>
          </div>

          {/* Title */}
          <h2 className="text-[#154726] text-3xl md:text-[34px] lg:text-[40px] font-extrabold leading-[1.15] mb-2 drop-shadow-sm" style={{ fontFamily: 'Georgia, serif' }}>
            Explore Diverse <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b8c2a] to-[#F2B40E]">Exhibition Sectors</span>
          </h2>

          {/* Description */}
          <p className="text-[#475569] text-[16px] md:text-[18px] max-w-4xl font-medium leading-[1.4]">
            <span className="font-bold text-[#154726]">One Platform. Every Opportunity.</span> Bharat Organic Expo brings together the entire organic ecosystem under one roof. Explore a wide range of sectors driving sustainable living, natural wellness, ethical production and global trade.
          </p>
        </div>

        {/* Static Grid Layout (No Slider) */}
        <div className="w-full mb-8 py-2 px-2 md:px-11 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 lg:gap-x-2 gap-y-4 lg:gap-y-8 justify-center">
          {categories.map((item, index) => {
            const Icon = item.icon;
            const displayIndex = index + 1; // Numbering 1 to 10

            return (
              <div
                key={index}
                className="group flex flex-col w-full h-auto bg-[#f6f4f0] rounded-2xl cursor-pointer border-[1px] border-[#c0b7af] shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-[#3b8c2a]/50 transition-all duration-500 relative mt-6"
              >
                {/* Top-Center Badge */}
                <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-2 border-[#e8c051] shadow-md z-20 overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#1c3f25] to-[#0a170d]">
                  <div className="w-[110%] h-[110%] absolute inset-0 rounded-full border-[3px] border-white z-0 pointer-events-none scale-105" />
                  {Icon && <Icon className="w-6 h-6 text-white relative z-10" strokeWidth={2} />}
                </div>

                {/* Top Half: Image */}
                <div className="relative w-full h-[140px] lg:h-[180px] shrink-0 overflow-hidden rounded-t-[15px] bg-gray-200">
                  <img src={item.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                </div>

                {/* Bottom Half: Content */}
                <div className="px-4 py-3 relative z-10 flex flex-col flex-grow items-center text-center">

                  {/* Title */}
                  <h3 className="text-[14px] md:text-[17px] font-bold text-[#111] leading-[1.25] mb-2 max-w-[90%]">
                    {item.title}
                  </h3>

                  {/* Decorative Separator */}
                  <div className="flex items-center justify-center w-full max-w-[140px] mb-2 opacity-90">
                    <div className="flex-1 h-[2px] bg-[#d35400]"></div>
                    <div className="px-2 flex items-center justify-center text-[#558b2f]">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
                      </svg>
                    </div>
                    <div className="flex-1 h-[2px] bg-[#d35400]"></div>
                  </div>

                  {/* Description */}
                  <p className="text-[11.5px] md:text-[16px] text-[#444] leading-[1.5] font-medium tracking-tight px-1">
                    {item.desc}
                  </p>

                  {/* View More Link */}
                  <div className="mt-auto w-full flex justify-end pt-3 pr-2">
                    <span className="inline-flex items-center gap-1 text-[#3b8c2a] hover:text-[#2b5825] text-[12px] font-bold uppercase tracking-widest transition-colors duration-300">
                      View More
                      <ArrowRight size={12} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex justify-center px-4 mb-2 ">
          <button className="group flex items-center justify-center gap-3 px-6 py-2 rounded-full border-2 border-[#F2B40E] bg-[#3b8c2a] text-white text-[12px] md:text-[14px] font-bold uppercase tracking-wider hover:bg-[#F2B40E] hover:text-[#0b2912] hover:shadow-lg transition-all duration-300 min-h-[44px]">
            VIEW ALL CATEGORIES
            <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ExpoCategories;
