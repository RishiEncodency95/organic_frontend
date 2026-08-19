import React from 'react';
import Image from 'next/image';
import leafogImg from '@/app/assets/icons/leafog.png';
import { HeartPulse, Sprout, User, Monitor, Plane, Leaf } from 'lucide-react';
import SectionContainer from '@/app/components/layout/SectionContainer';

const EventOverview = () => {
  const sectors = [
    { label: "Healthcare & Medical Industry", color: "#3b82f6", icon: HeartPulse },
    { label: "AYUSH & Traditional Medicine", color: "#22c55e", icon: Sprout },
    { label: "Wellness, Fitness & Lifestyle", color: "#f59e0b", icon: User },
    { label: "Digital Health, AI & MedTech", color: "#8b5cf6", icon: Monitor },
    { label: "Medical Tourism in India", color: "#06b6d4", icon: Plane },
    { label: "Nutrition, Organic & Sustainable Living", color: "#10b981", icon: Leaf },
  ];

  return (
    <section className="pt-8 pb-8 bg-white relative z-10 border-t border-gray-100 font-inter overflow-hidden">
      {/* Decorative Left Corner Leaf (leafog.png) - Reduced Opacity */}
      <div className="absolute left-0 top-0 pointer-events-none opacity-40 w-32 sm:w-44 md:w-56 lg:w-[240px] z-0">
        <Image
          src={leafogImg}
          alt="Organic Leaf Decoration Left"
          className="w-full h-auto object-contain -translate-x-1/6 -translate-y-1/6"
        />
      </div>

      <SectionContainer className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT - Event Overview */}
          <div>
            <p className="text-[#d26019] font-bold text-[13px] uppercase tracking-[0.22em] mb-3">
              EVENT OVERVIEW
            </p>
            
            <h2 
              className="font-semibold text-[28px] leading-[1.2] mb-4 text-[#23471d] font-poppins"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
            >
              A Global Platform Connecting Healthcare, Wellness & Business Opportunities
            </h2>
            
            <p className="text-gray-900 text-sm leading-[1.6] mb-3 text-justify font-semibold">
              <strong className="font-semibold text-[#1a2e1a]">Bharat Organic Expo 2027</strong> stands as India's most influential international platform dedicated to organic excellence, wellness innovation, and sustainable living. Entering its prestigious edition, the Expo represents a strategic evolution—from a conventional trade exhibition into a powerful global ecosystem for business growth, policy exchange, knowledge sharing, and international collaboration.
            </p>
            
            <p className="text-gray-900 text-sm leading-[1.6] mb-3 text-justify font-semibold">
              With a strong legacy of 10+ years and 8 successfully executed editions, the Expo has established itself as a trusted meeting ground for organic leaders, wellness brands, sustainable technology providers, investors, policymakers, researchers, startups, and global delegations from across the world.
            </p>
            
            <p className="text-gray-900 text-sm leading-[1.6] text-justify font-semibold">
              Scheduled from <strong className="font-semibold text-[#1a2e1a]">19th – 21st February 2027</strong> in <strong className="font-semibold text-[#1a2e1a]">New Delhi</strong>, the expo is strategically designed to enable business growth, industry collaboration, and global trade opportunities in one high-impact environment.
            </p>
          </div>

          {/* RIGHT - Key Sectors */}
          <div>
            <p className="text-[#d26019] font-bold text-[13px] uppercase tracking-[0.22em] mb-6">
              KEY SECTORS
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {sectors.map((sector, i) => {
                const IconComp = sector.icon;
                return (
                  <div 
                    key={i} 
                    className="flex flex-col items-center text-center gap-3 p-4 bg-[#f8f9fa] rounded-xl shadow-sm transition-all duration-300 group cursor-default border border-gray-100 hover:border-[#d26019]/30"
                  >
                    <div 
                      className="transition-transform duration-300 group-hover:scale-110" 
                      style={{ color: sector.color }}
                    >
                      <IconComp className="w-14 h-14 md:w-16 md:h-16" strokeWidth={1.2} />
                    </div>
                    <span className="text-[#1a2e1a] font-bold text-[11px] leading-[1.4]">
                      {sector.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </SectionContainer>
    </section>
  );
};

export default EventOverview;
