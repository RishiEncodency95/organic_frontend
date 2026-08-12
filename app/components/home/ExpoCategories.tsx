"use client";

import { motion } from "framer-motion";
import { ArrowRight, Leaf, HeartPulse, Sparkles, Apple, Shirt, Recycle, Dumbbell, Stethoscope, Beaker, Brain, Activity, Pill } from "lucide-react";

const categories = [
  { icon: Apple, title: "Organic Food &\nBeverages", desc: "Certified organic staples, fruits, dairy, healthy snacks, and plant-based drinks.", color: "#4ade80", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" },
  { icon: Pill, title: "Nutritional Supplements\n& Superfoods", desc: "Natural dietary supplements, organic protein powders, and immunity boosters.", color: "#14b8a6", image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80" },
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
        <div className="px-4 md:px-8 mx-auto max-w-7xl w-full flex flex-col items-center text-center mb-2 md:mb-4">
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
          <h2 className="text-[#154726] text-3xl md:text-[34px] lg:text-[40px] font-extrabold leading-[1.15] mb-4 drop-shadow-sm" style={{ fontFamily: 'Georgia, serif' }}>
            Explore Diverse <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b8c2a] to-[#F2B40E]">Healthcare Sectors</span>
          </h2>

          {/* Description */}
          <p className="text-[#475569] text-[16px] md:text-[18px] max-w-2xl font-medium leading-[1.6]">
            One Platform. Every Healthcare Solution. Discover the future of organic and sustainable living across multiple dedicated zones.
          </p>
        </div>

        {/* Static Grid Layout (No Slider) */}
        <div className="w-full mb-4 py-2 px-2 md:px-11 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4 justify-center">
          {categories.map((item, index) => {
            const Icon = item.icon;
            const displayIndex = index + 1; // Numbering 1 to 10

            return (
              <div
                key={index}
                className="group flex flex-col w-full h-auto bg-white/60 backdrop-blur-xl rounded-xl overflow-hidden cursor-pointer border-[1.5px] border-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.8)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.9)] hover:-translate-y-1.5 hover:bg-white/80 transition-all duration-500 relative"
              >
                {/* Full Width Image at the Top */}
                <div className="relative w-full h-[120px] lg:h-[140px] shrink-0 overflow-hidden bg-gray-100">
                  <img src={item.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
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

                  {/* Title & Description */}
                  <div className="flex flex-col items-start text-left w-full mt-2 mb-2">
                    <h3 className="text-[18px] md:text-[20px] font-bold text-gray-900 leading-[1.3] mb-2 group-hover:text-opacity-80 transition-opacity">
                      {item.title}
                    </h3>
                    <p className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-500 leading-[1.6] line-clamp-3 font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>



              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="flex justify-center px-4 mb-2">
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
