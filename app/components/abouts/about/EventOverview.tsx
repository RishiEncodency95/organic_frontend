import React from 'react';
import Image from 'next/image';
import leafogImg from '@/app/assets/icons/leafog.png';
import { HeartPulse, Sprout, User, Monitor, Plane, Leaf } from 'lucide-react';
import SectionContainer from '@/app/components/layout/SectionContainer';

const eventOverviewData = {
  tagline: "EVENT OVERVIEW",
  title: "A Global Platform Connecting Healthcare, Wellness & Business Opportunities",
  paragraphs: [
    {
      boldLead: "Bharat Organic Expo 2027",
      text: " stands as India's most influential international platform dedicated to organic excellence, wellness innovation, and sustainable living. Entering its prestigious edition, the Expo represents a strategic evolution—from a conventional trade exhibition into a powerful global ecosystem for business growth, policy exchange, knowledge sharing, and international collaboration."
    },
    {
      boldLead: "",
      text: "With a strong legacy of 10+ years and 8 successfully executed editions, the Expo has established itself as a trusted meeting ground for organic leaders, wellness brands, sustainable technology providers, investors, policymakers, researchers, startups, and global delegations from across the world."
    },
    {
      boldLead: "",
      text: "Scheduled from ",
      inlineBold1: "19th – 21st February 2027",
      text2: " in ",
      inlineBold2: "New Delhi",
      text3: ", the expo is strategically designed to enable business growth, industry collaboration, and global trade opportunities in one high-impact environment."
    }
  ],
  sectorsTitle: "KEY SECTORS",
  sectors: [
    { label: "Healthcare & Medical Industry", color: "#3b82f6", icon: HeartPulse },
    { label: "AYUSH & Traditional Medicine", color: "#22c55e", icon: Sprout },
    { label: "Wellness, Fitness & Lifestyle", color: "#f59e0b", icon: User },
    { label: "Digital Health, AI & MedTech", color: "#8b5cf6", icon: Monitor },
    { label: "Medical Tourism in India", color: "#06b6d4", icon: Plane },
    { label: "Nutrition, Organic & Sustainable Living", color: "#10b981", icon: Leaf },
  ]
};

const EventOverview = () => {
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
            <p className="flex items-center gap-2 text-[#d26019] font-semibold text-[14px] uppercase tracking-[0.22em] mb-3">
              <span className="inline-block w-6 h-[1.5px] bg-[#d26019]" />
              {eventOverviewData.tagline}
              <span className="inline-block w-6 h-[1.5px] bg-[#d26019]" />
            </p>

            <h2
              className="font-semibold text-[28px] leading-[1.2] mb-4 text-[#23471d] font-poppins"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
            >
              {eventOverviewData.title}
            </h2>

            {eventOverviewData.paragraphs.map((para, idx) => (
              <p key={idx} className="text-gray-900 text-sm leading-[1.6] mb-3 text-justify font-semibold">
                {para.boldLead && <strong className="font-semibold text-[#1a2e1a]">{para.boldLead}</strong>}
                {para.text}
                {para.inlineBold1 && <strong className="font-semibold text-[#1a2e1a]">{para.inlineBold1}</strong>}
                {para.text2}
                {para.inlineBold2 && <strong className="font-semibold text-[#1a2e1a]">{para.inlineBold2}</strong>}
                {para.text3}
              </p>
            ))}
          </div>

          {/* RIGHT - Key Sectors */}
          <div>
            <p className="text-[#d26019] font-bold text-[13px] uppercase tracking-[0.22em] mb-6">
              {eventOverviewData.sectorsTitle}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {eventOverviewData.sectors.map((sector, i) => {
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
