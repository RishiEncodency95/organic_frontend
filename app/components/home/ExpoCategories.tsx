"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, HeartPulse, Sparkles, Apple, Shirt, Recycle, Dumbbell, Stethoscope, Beaker, Brain, Activity, Pill } from "lucide-react";

const categories = [
  { icon: Apple, title: "Organic Food &\nBeverages", desc: "Certified organic staples, fruits, dairy, healthy snacks, and plant-based drinks.", color: "#4ade80", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" },
  { icon: Pill, title: "Nutritional Supplements\n& Superfoods", desc: "Natural dietary supplements, organic protein powders, and immunity boosters.", color: "#14b8a6", image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=800&q=80" },
  { icon: Leaf, title: "Smart &\nSustainable Farming", desc: "Organic seeds, bio-fertilizers, agri-tech innovations, and vertical farming tools.", color: "#22c55e", image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80" },
  { icon: Sparkles, title: "Herbal Wellness\n& Ayurveda", desc: "Ayurvedic therapies, herbal supplements, essential oils, and detox solutions.", color: "#fb923c", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80" },
  { icon: HeartPulse, title: "Natural Beauty\n& Clean Cosmetics", desc: "Organic skincare, cruelty-free vegan cosmetics, and non-toxic hygiene products.", color: "#f472b6", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80" },
  { icon: Shirt, title: "Organic Apparel\n& Ethical Textiles", desc: "Organic cotton garments, natural dyes, and fair-trade upcycled fashion.", color: "#60a5fa", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=800&q=80" },
  { icon: Recycle, title: "Eco Lifestyle\n& Green Living", desc: "Eco-friendly home products, sustainable furniture, and zero-waste tools.", color: "#34d399", image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80" },
  { icon: Activity, title: "Green Technology\n& Startups", desc: "Clean energy, green packaging, and IoT solutions for sustainable living.", color: "#3b82f6", image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80" },
  { icon: Leaf, title: "Organic Gardening\n& Urban Farming", desc: "Kitchen gardening kits, indoor plants, vertical gardens, and seed bombs.", color: "#10b981", image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=800&q=80" },
  { icon: HeartPulse, title: "Eco Tourism\n& Sustainable Travel", desc: "Eco-resorts, wellness tourism, and nature retreats for conscious travelers.", color: "#f59e0b", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80" },
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
    <section className="py-2 md:py-4 lg:py-4 bg-gradient-to-br from-[#EAF4E8] via-[#F4FAF3] to-[#E3EFE0] border-t border-b border-[#CDE3C9] relative overflow-hidden">
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
          <div className="flex flex-col xl:flex-row items-center justify-between mb-4 bg-white py-3 px-4 md:px-8 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 gap-4 xl:gap-6">

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
        <div className="w-full  mb-2 py-2 flex flex-wrap justify-center gap-2 lg:gap-3">
          {categories.map((item, index) => {
            const Icon = item.icon;
            const displayIndex = index + 1; // Numbering 1 to 10

            return (
              <div
                key={index}
                className="group flex flex-col w-[240px] h-auto bg-white/60 backdrop-blur-xl rounded-xl overflow-hidden cursor-pointer border-[1.5px] border-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.8)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.9)] hover:-translate-y-1.5 hover:bg-white/80 transition-all duration-500 relative"
              >
                {/* Full Width Image at the Top */}
                <div className="relative w-full h-[150px] shrink-0 overflow-hidden bg-gray-100">
                  <img src={item.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />

                  {/* Floating Icon overlaid on the image */}
                  {/* <div
                    className="absolute -bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md z-20"
                  >
                    <div
                      className="absolute inset-1 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: item.color }}
                    >
                      <Icon size={16} color="white" strokeWidth={2.5} />
                    </div>
                  </div> */}
                </div>

                {/* Content Area */}
                <div className="px-3 py-2 relative z-10 flex flex-col flex-grow">
                  {/* Angled Background Fill (subtle) */}
                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundColor: item.color,
                    }}
                  />
                  {/* Dot Pattern in the faint area */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '14px 14px' }} />

                  {/* Number & Line */}
                  {/* <div className="flex items-center gap-2 mb-1 w-full">
                    <span className="text-[16px] font-bold" style={{ color: item.color }}>
                      {String(displayIndex).padStart(2, '0')}
                    </span>
                    <div className="h-[1.5px] w-4 opacity-30" style={{ backgroundColor: item.color }} />
                  </div> */}

                  {/* Title & Description */}
                  <div className="flex flex-col items-start text-left w-full">
                    <h3 className="text-[14px] font-bold text-gray-900 leading-[1.3] mb-1.5  group-hover:text-opacity-80 transition-opacity">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 leading-[1.4] line-clamp-3 font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* <div className="flex-grow" /> */}

              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex justify-center  px-4">
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
