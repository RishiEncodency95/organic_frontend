"use client";

import React from 'react';

// --- FAKE DATA FOR NO COPYRIGHT ISSUES ---
const leadingBrands = [
  { name: "ECO FARMS", sub: "SINCE 1998", color: "#3b8c2a", serif: true },
  { name: "Naturals", color: "#1a5fa8" },
  { name: "GREEN VEDA", sub: "AYURVEDA", color: "#d97706" },
  { name: "BioGrow", color: "#2d7a2d" },
  { name: "FRESH LEAF", color: "#0b2912", serif: true },
  { name: "NutriLife", color: "#e65c00" },
];

const upcomingBrands = [
  { name: "PureEarth", color: "#047857" },
  { name: "Vedic Roots", color: "#854d0e", serif: true },
  { name: "SunHarvest", color: "#ea580c" },
  { name: "AgriNova", color: "#2563eb" },
  { name: "GREEN BLEND", sub: "ORGANICS", color: "#4d7c0f" },
  { name: "HerbEssentials", color: "#be123c" },
];

const knowledgePartners = [
  { name: "AgriTech", sub: "INSTITUTE", color: "#1e3a8a" },
  { name: "Bio Research", sub: "COUNCIL", color: "#166534" },
  { name: "Eco Science", sub: "ACADEMY", color: "#065f46" },
  { name: "Green Learn", sub: "UNIVERSITY", color: "#047857" },
];

const wellnessPartners = [
  { name: "HealthPlus", sub: "HOSPITALS", color: "#0369a1" },
  { name: "AyurCare", sub: "WELLNESS", color: "#b45309" },
  { name: "LifeForce", sub: "CLINICS", color: "#ea580c" },
  { name: "PureHealth", sub: "CENTERS", color: "#b91c1c" },
];

const supportingPartners = [
  { name: "OFAI", sub: "FARMERS ASSOC.", color: "#15803d" },
  { name: "BioTrade", sub: "NETWORK", color: "#4338ca" },
  { name: "AgriUnion", sub: "FEDERATION", color: "#1d4ed8" },
  { name: "EarthSave", sub: "FOUNDATION", color: "#0f766e" },
];

// Helper to render text-based logos
const RenderLogo = ({ brand }: { brand: any }) => (
  <div className="flex flex-col items-center justify-center min-w-[120px] px-4 cursor-default">
    <span 
      className="font-black text-[18px] md:text-[22px] tracking-tight leading-none text-center" 
      style={{ color: brand.color, fontFamily: brand.serif ? 'serif' : 'inherit' }}
    >
      {brand.name}
    </span>
    {brand.sub && (
      <span className="text-[7.5px] text-gray-500 font-bold uppercase tracking-[0.2em] mt-1.5 text-center">
        {brand.sub}
      </span>
    )}
  </div>
);

const SectionHeader = ({ title, small = false }: { title: string, small?: boolean }) => (
  <div className="flex items-center gap-3 w-full">
    <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-gray-300"></div>
    <h3 className={`font-black uppercase text-[#0b2912] ${small ? 'text-[10px] md:text-[11px] tracking-[0.15em]' : 'text-[12px] md:text-[14px] tracking-[0.2em]'} text-center whitespace-nowrap`}>
      {title}
    </h3>
    <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-gray-200 to-gray-300"></div>
  </div>
);

const Marquee = ({ items, reverse = false }: { items: any[], reverse?: boolean }) => {
  return (
    <div className="w-full relative overflow-hidden mt-4 md:mt-5 pb-2">
      <div className={`flex items-center w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {[...items, ...items, ...items, ...items].map((brand, idx) => (
          <div key={idx} className="flex items-center group">
            <div className="mx-4 md:mx-8 transition-transform duration-300 group-hover:scale-105">
              <RenderLogo brand={brand} />
            </div>
            {/* Vertical separator */}
            <div className="w-[1.5px] h-8 bg-gray-200 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SmallMarquee = ({ items }: { items: any[] }) => {
  // If 3 or less items, don't use slider to keep it neat as requested, though here we have 4 so it will slide.
  const shouldSlide = items.length > 3;

  if (!shouldSlide) {
    return (
      <div className="flex items-center justify-center gap-2 mt-5 w-full h-[60px]">
        {items.map((brand, idx) => (
          <React.Fragment key={idx}>
            <div className="hover:scale-105 transition-transform duration-300"><RenderLogo brand={brand} /></div>
            {idx < items.length - 1 && <div className="w-[1.5px] h-6 bg-gray-200"></div>}
          </React.Fragment>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full relative overflow-hidden mt-5 pb-2 h-[60px] flex items-center">
      <div className="flex items-center w-max animate-marquee-small">
        {[...items, ...items, ...items].map((brand, idx) => (
          <div key={idx} className="flex items-center group">
            <div className="mx-4 transition-transform duration-300 group-hover:scale-105">
              <RenderLogo brand={brand} />
            </div>
            {/* Vertical separator */}
            <div className="w-[1px] h-5 bg-gray-300 rounded-full mx-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PartnersAndBrands = () => {
  return (
    <section className="bg-white py-8 lg:py-10 border-t border-b border-[#3b8c2a]/10 overflow-hidden relative">
      {/* Nice patterned background matching the theme */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#3b8c2a 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#3b8c2a]/30 to-transparent"></div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-25%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-small {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
        .animate-marquee-small {
          animation: marquee-small 15s linear infinite;
        }
        .animate-marquee:hover, .animate-marquee-reverse:hover, .animate-marquee-small:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Very subtle background watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.015] pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full border-[40px] border-[#0b2912]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* ROW 1: TRUSTED BY LEADING BRANDS */}
        <div className="mb-8 md:mb-10">
          <SectionHeader title="TRUSTED BY INDUSTRY LEADERS" />
          <Marquee items={leadingBrands} />
        </div>

        {/* ROW 2: PARTNERS GRID (STATIC or MARQUEE based on length) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mb-8 md:mb-10 px-0 md:px-4">
          {/* Knowledge Partners */}
          <div className="flex flex-col items-center bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-[#3b8c2a]/5">
            <SectionHeader title="KNOWLEDGE PARTNERS" small />
            <SmallMarquee items={knowledgePartners} />
          </div>

          {/* Wellness Partners */}
          <div className="flex flex-col items-center bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-[#3b8c2a]/5">
            <SectionHeader title="WELLNESS PARTNERS" small />
            <SmallMarquee items={wellnessPartners} />
          </div>

          {/* Supporting Associations */}
          <div className="flex flex-col items-center bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-[#3b8c2a]/5">
            <SectionHeader title="SUPPORTING ASSOCIATIONS" small />
            <SmallMarquee items={supportingPartners} />
          </div>
        </div>

        {/* ROW 3: UPCOMING BRANDS */}
        <div className="mt-2">
          <SectionHeader title="EMERGING ORGANIC BRANDS" />
          <Marquee items={upcomingBrands} reverse />
        </div>

      </div>
    </section>
  );
};

export default PartnersAndBrands;
