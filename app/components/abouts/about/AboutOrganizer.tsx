import React from 'react';
import Image from 'next/image';
import organImg from '@/app/assets/about/organi.png';
import { Clock, Star, Flag } from 'lucide-react';
import SectionContainer from '@/app/components/layout/SectionContainer';

const AboutOrganizer = () => {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* ABOUT THE ORGANIZER SECTION */}
      <section className="pt-10 pb-6 bg-[#FFFDF1] border-t border-gray-100">
        <SectionContainer>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            
            {/* LEFT - About the Organizer */}
            <div className="pt-4 lg:pt-0 lg:pr-10">
              <p className="flex items-center gap-2 text-[#d26019] font-semibold text-[11px] uppercase tracking-[0.22em] mb-2">
                <span className="inline-block w-6 h-[1.5px] bg-[#d26019]" />
                ABOUT THE ORGANIZER
              </p>
              
              <h2 
                className="text-[#23471d] font-semibold text-2xl md:text-[28px] leading-[1.3] mb-3 font-poppins"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
              >
                NAMO GANGE WELLNESS PVT. LTD.
              </h2>

              <p className="text-gray-800 text-[13px] leading-[1.7] mb-3 text-justify font-semibold">
                A professionally managed exhibition and conference organizer in India, specializing in creating large-scale B2B trade shows, healthcare exhibitions, and global business platforms.
              </p>
              
              <p className="text-gray-800 text-[13px] leading-[1.7] mb-5 text-justify font-semibold">
                Established in 2016, the company has built a strong reputation for delivering high-impact, result-driven platforms that combine exhibitions, conferences, buyer–seller meets, and Indian participation into one ecosystem.
              </p>

              {/* Core Capabilities */}
              <p className="text-[#23471d] font-bold text-[10px] uppercase tracking-[0.2em] mb-2">
                CORE CAPABILITIES
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-1">
                {[
                  "Indian exhibitions & trade shows",
                  "Healthcare conferences & seminars",
                  "Buyer–Seller Meets (B2B matchmaking)",
                  "Sponsorship & brand partnerships",
                  "Indian collaborations & delegations",
                  "Focused on delivering measurable ROI and business growth for participants."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-[17px] h-[17px] rounded-full bg-[#fef0e6] flex items-center justify-center shrink-0 mt-[2px]">
                      <svg viewBox="0 0 12 12" fill="none" className="w-[9px] h-[9px]">
                        <path d="M2 6l3 3 5-5" stroke="#d26019" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-gray-900 text-[13px] leading-[1.5] font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT - Image with 9th IHWE styling & badge */}
            <div className="lg:pl-12 pt-6 lg:pt-0 flex items-center justify-center">
              <div className="relative w-full max-w-md h-[350px] md:h-[380px]">

                {/* Dot pattern top-right */}
                <div 
                  className="absolute -top-4 -right-4 w-24 h-24 z-0 pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(circle, #d26019 1.2px, transparent 1.2px)', backgroundSize: '9px 9px', opacity: 0.25 }} 
                />
                {/* Dot pattern bottom-left */}
                <div 
                  className="absolute -bottom-4 -left-4 w-24 h-24 z-0 pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(circle, #23471d 1.2px, transparent 1.2px)', backgroundSize: '9px 9px', opacity: 0.2 }} 
                />

                {/* Image Frame */}
                <div 
                  className="relative z-10 w-full h-full overflow-hidden group rounded-xl shadow-md"
                  style={{ outline: '2px solid #d26019', outlineOffset: '-2px' }}
                >
                  <Image 
                    src={organImg}
                    alt="Namo Gange Wellness Pvt. Ltd."
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#d26019]" />
                  <div className="absolute top-0 left-0 h-full w-[4px] bg-[#23471d]" />
                </div>

                {/* Badge */}
                <div 
                  className="absolute z-20 flex flex-col items-center justify-center text-center p-2"
                  style={{ bottom: '0px', right: '0px', minWidth: '80px', minHeight: '80px', background: '#d26019', border: '3px solid #fff', boxShadow: '0 6px 24px rgba(210,96,25,0.4)' }}
                >
                  <span className="font-black text-[20px] text-white leading-none">
                    10+
                  </span>
                  <span className="font-bold text-[7px] text-[#ffe0c8] uppercase tracking-[0.1em] mt-1">
                    YEARS
                  </span>
                </div>

              </div>
            </div>

          </div>
        </SectionContainer>
      </section>

      {/* OUR JOURNEY & FLAGSHIP EVENTS SECTION */}
      <section className="pt-4 pb-8 bg-[#FFFDF1] border-t border-gray-100">
        <SectionContainer>

          {/* Header */}
          <div className="mb-5">
            <p className="flex items-center gap-2 text-[#d26019] font-semibold text-[11px] uppercase tracking-[0.22em] mb-2">
              <span className="inline-block w-6 h-[1.5px] bg-[#d26019]" />
              OUR JOURNEY & FLAGSHIP EVENTS
            </p>
            
            <h2 
              className="text-[#23471d] font-semibold text-2xl md:text-[28px] leading-[1.3] mb-1 font-poppins"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
            >
              A LEGACY OF GROWTH & INNOVATION
            </h2>
            
            <p className="text-gray-900 text-[13px] leading-[1.7] mt-1">
              With a proven legacy of delivering result-oriented exhibitions, we forge lasting business relationships and accelerate industry growth.
            </p>
          </div>

          {/* 3-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Timeline card */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#fef0e6] flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-[#d26019]" strokeWidth={2} />
                </div>
                <p className="text-[#23471d] font-bold text-[12px] uppercase tracking-[0.12em]">
                  OUR JOURNEY: A LEGACY OF GROWTH
                </p>
              </div>
              
              <div className="flex flex-col gap-4 pl-3 border-l-2 border-[#d26019]/25">
                {[
                  { year: "2016", text: "Company Founded — commitment to exceptional exhibition management." },
                  { year: "2016–25", text: "Successfully organized Indian Health & Wellness Expos, establishing a credible global platform for integrated healthcare, preventive wellness and medical innovation." },
                  { year: "2026", text: "IHWE 9th Edition — nine successful editions, sustained growth, expanding global participation and established leadership in the integrated healthcare and wellness industry." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-[#d26019] font-bold text-[12px] shrink-0 w-14 mt-[1px]">{item.year}</span>
                    <p className="text-gray-700 text-[13px] leading-[1.6]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Sectors card */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#fef0e6] flex items-center justify-center shrink-0">
                  <Star size={16} className="text-[#d26019]" strokeWidth={2} />
                </div>
                <p className="text-[#23471d] font-bold text-[12px] uppercase tracking-[0.12em]">
                  DRIVING INNOVATION ACROSS CORE SECTORS
                </p>
              </div>
              
              <div className="flex flex-col gap-3">
                {[
                  { label: "Health & Wellness", text: "Shaping the future of integrated personal & public healthcare through innovation, prevention, and global collaboration." },
                  { label: "Medical Sustainability", text: "Promoting eco-friendly medical practices, sustainable hospital infrastructure and green healthcare technologies." },
                  { label: "Digital Health", text: "Bridging technology and healthcare for smarter solutions." },
                  { label: "Health Tourism", text: "Positioning India as a global leader in health travel." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d26019] shrink-0 mt-[7px]" />
                    <p className="text-gray-700 text-[13px] leading-[1.6]">
                      <span className="text-[#23471d] font-semibold">{item.label}: </span>{item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Flagship Events card */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-lg bg-[#fef0e6] flex items-center justify-center shrink-0">
                  <Flag size={16} className="text-[#d26019]" strokeWidth={2} />
                </div>
                <p className="text-[#23471d] font-bold text-[12px] uppercase tracking-[0.12em]">
                  FLAGSHIP EVENTS: A PROVEN TRACK RECORD
                </p>
              </div>
              
              <p className="text-gray-600 text-[13px] leading-[1.6] mb-3">
                NGWPL's flagship events consistently deliver exceptional value and foster vibrant communities, creating significant market opportunities.
              </p>
              
              <div className="flex flex-col gap-2">
                {[
                  "Punjab Health & Wellness Expo",
                  "The Yogshala Expo",
                  "Arogya Sangoshthi",
                  "Agritech Innovate India",
                  "Bharat Development & Schemes Expo",
                  "Organic Expo"
                ].map((ev, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d26019] shrink-0" />
                    <span className="text-gray-800 text-[13px] font-medium">{ev}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </SectionContainer>
      </section>

    </div>
  );
};

export default AboutOrganizer;
