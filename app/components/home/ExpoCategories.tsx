"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, HeartPulse, Sparkles, Apple, Shirt, Recycle, Dumbbell, Stethoscope, Beaker, Brain, Activity, Pill } from "lucide-react";

const categories = [
  { icon: Apple, title: "Mental Health &\nWell-being", desc: "Therapy, meditation, yoga and wellness programs for a balanced mind and body.", color: "#14b8a6", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" },
  { icon: Activity, title: "Health Tech &\nDigital Solutions", desc: "Innovative digital healthcare solutions for smarter and faster care.", color: "#60a5fa", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" },
  { icon: Leaf, title: "Organic Food &\nBeverages", desc: "Pure, natural and organic food & drinks for a healthier lifestyle.", color: "#4ade80", image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=800&q=80" },
  { icon: Sparkles, title: "Ayurveda &\nHerbal Products", desc: "Ancient healing wisdom and herbal products for natural wellness.", color: "#fb923c", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80" },
  { icon: HeartPulse, title: "Healthcare &\nWellness Services", desc: "Comprehensive healthcare services for you and your family.", color: "#a78bfa", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80" },
  { icon: Shirt, title: "Natural & Organic\nTextiles", desc: "Sustainable fabrics and textiles for a greener lifestyle.", color: "#14b8a6", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=800&q=80" },
  { icon: Recycle, title: "Eco-friendly\nProducts", desc: "Environmentally friendly products for daily use.", color: "#60a5fa", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80" },
  { icon: Dumbbell, title: "Fitness &\nLifestyle", desc: "Stay active and healthy with our fitness and lifestyle solutions.", color: "#4ade80", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80" },
  { icon: Stethoscope, title: "Medical Devices &\nEquipment", desc: "Advanced medical tools for better healthcare delivery.", color: "#fb923c", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80" },
  { icon: Beaker, title: "Pharma &\nBiotechnology", desc: "Innovations in pharmaceuticals and biotechnology.", color: "#a78bfa", image: "https://images.unsplash.com/photo-1532187863486-abf9db090b5c?w=800&q=80" },
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
    <section className="py-6 md:py-8 bg-gradient-to-br from-[#EAF4E8] via-[#F4FAF3] to-[#E3EFE0] border-t border-b border-[#CDE3C9] relative overflow-hidden">
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

      {/* Decorative White Flowers */}
      <FlowerDecoration className="absolute -top-[100px] -left-[100px] w-[500px] h-[500px] pointer-events-none opacity-[0.9] -rotate-12 animate-float-flower" />
      <FlowerDecoration className="absolute top-[30%] -right-[150px] w-[600px] h-[600px] pointer-events-none opacity-[0.7] rotate-[15deg] animate-float-flower" style={{ animationDelay: '2s' }} />
      <FlowerDecoration className="absolute -bottom-[150px] left-[15%] w-[450px] h-[450px] pointer-events-none opacity-[0.8] -rotate-[25deg] animate-float-flower" style={{ animationDelay: '4s' }} />

      <div className="w-full px-0 relative z-10">

        {/* Header */}
        <div className="px-4 sm:px-6 lg:px-11 w-full ">
          <div className="flex flex-col xl:flex-row items-center justify-between mb-6 bg-white py-3 px-4 md:px-8 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 gap-4 xl:gap-6">

            {/* Pill */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1 hidden md:flex">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b8c2a]"></span>
                <span className="w-8 h-[1px] bg-[#3b8c2a]"></span>
              </div>
              <div className="px-5 py-1.5 rounded-full border border-[#3b8c2a] bg-[#f8fdf9]">
                <span className="text-[#3b8c2a] text-[12px] font-bold tracking-[0.1em] uppercase whitespace-nowrap">
                  EXPO CATEGORIES
                </span>
              </div>
              <div className="flex items-center gap-1 hidden md:flex">
                <span className="w-8 h-[1px] bg-[#3b8c2a]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3b8c2a]"></span>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-[16px] md:text-[22px] font-bold text-[#111827] tracking-tight shrink-0 text-center uppercase">
              Explore Diverse <span className="text-[#3b8c2a]">Healthcare Sectors</span>
            </h2>

            {/* Description */}
            <div className="flex items-center gap-4 hidden xl:flex shrink-0">
              <div className="w-[1px] h-8 bg-gray-200"></div>
              <p className="text-[#64748b] text-[14px] md:text-[15px] font-medium whitespace-nowrap">
                One Platform. Every Healthcare Solution.
              </p>
            </div>
          </div>
        </div>

        {/* Static Grid Layout (No Slider) */}
        <div className="w-full  mb-8 py-2 flex flex-wrap justify-center gap-4 lg:gap-5">
          {categories.map((item, index) => {
            const Icon = item.icon;
            const displayIndex = index + 1; // Numbering 1 to 10

            return (
              <div
                key={index}
                className="group flex flex-col w-[240px] h-auto bg-white rounded-xl overflow-hidden cursor-pointer shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)] border-none hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 p-3.5 relative"
              >
                {/* Angled Background Fill */}
                <div
                  className="absolute top-0 left-0 w-full h-[70%] opacity-[0.05] pointer-events-none"
                  style={{
                    backgroundColor: item.color,
                    clipPath: 'polygon(0 0, 100% 0, 100% 55%, 0 85%)'
                  }}
                />

                {/* Dot Pattern in the faint area */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '14px 14px' }} />

                {/* Hexagon Image Container */}
                <div className="w-full flex justify-center py-1.5 relative z-10">
                  <div className="relative w-[160px] h-[184px] drop-shadow-[0_6px_12px_rgba(0,0,0,0.06)] group-hover:-translate-y-1 transition-transform duration-500">

                    {/* Outer Border Hexagon */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundColor: item.color,
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                    />

                    {/* Inner Image Hexagon */}
                    <div
                      className="absolute inset-[3px]"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                    >
                      <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                    </div>

                    {/* The floating Hexagon Icon */}
                    <div
                      className="absolute -bottom-[18px] left-1/2 -translate-x-1/2 w-[48px] h-[56px] bg-white flex items-center justify-center drop-shadow-sm"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                    >
                      <div
                        className="absolute inset-[2.5px] flex items-center justify-center"
                        style={{
                          backgroundColor: item.color,
                          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        }}
                      >
                        <Icon size={18} color="white" strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Number & Line */}
                <div className="flex items-center gap-2 mb-2 z-10 w-full px-1">
                  <span className="text-[16px] font-bold" style={{ color: item.color }}>
                    {String(displayIndex).padStart(2, '0')}
                  </span>
                  <div className="h-[1.5px] w-4 opacity-30" style={{ backgroundColor: item.color }} />
                </div>

                {/* Title & Description */}
                <div className="flex flex-col items-start text-left z-10 w-full px-1">
                  <h3 className="text-[14px] font-bold text-gray-900 leading-[1.3] mb-1.5 whitespace-pre-line group-hover:text-opacity-80 transition-opacity">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 leading-[1.4] line-clamp-3 font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* <div className="flex-grow" /> */}

                {/* View More Button */}
                <div className="flex items-center gap-1.5 z-10 mt-2 px-1 group/btn cursor-pointer">
                  <span className="text-[12px] font-bold transition-opacity group-hover/btn:opacity-70" style={{ color: item.color }}>
                    View More
                  </span>
                  <div className="w-[20px] h-[20px] rounded-full border-[1.5px] flex items-center justify-center transition-transform group-hover/btn:translate-x-1" style={{ borderColor: item.color }}>
                    <ArrowRight size={10} style={{ color: item.color }} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-2 px-4">
          <button className="group flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#F2B40E] bg-[#3b8c2a] text-white text-[11px] md:text-[12px] font-bold uppercase tracking-wider hover:bg-[#F2B40E] hover:text-[#0b2912] hover:shadow-lg transition-all duration-300">
            VIEW ALL CATEGORIES
            <ArrowRight size={14} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ExpoCategories;
