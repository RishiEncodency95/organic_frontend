"use client";
import aboutImg from "@/app/assets/banner/about.png";
import React from 'react';
import Image from 'next/image';
import SectionContainer from '@/app/components/layout/SectionContainer';

const HomeAbout = () => {
  return (
    <section className="py-8 bg-white relative overflow-hidden border-t border-gray-100" style={{ fontFamily: "'Inter', sans-serif" }}>
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] xl:grid-cols-[480px_1fr] gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Image with 9th IHWE outline and glow styling */}
          <div className="w-full relative flex items-center">
            <div className="relative w-full h-[340px] md:h-[400px]">
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

              {/* Main Image */}
              <div 
                className="relative z-10 w-full h-full overflow-hidden group rounded-xl shadow-lg"
                style={{ outline: '2px solid #d26019', outlineOffset: '-2px' }}
              >
                <Image
                  src={aboutImg}
                  alt="Bharat Organic Expo - Who We Are"
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#d26019]" />
                <div className="absolute top-0 left-0 h-full w-[4px] bg-[#23471d]" />
              </div>
            </div>
          </div>

          {/* Right Column: Simple, clear language with expanded word count */}
          <div className="w-full flex flex-col justify-center">
            <p className="text-[#d26019] font-bold text-[13px] uppercase tracking-[0.22em] mb-2">
              ABOUT ORGANIC EXPO
            </p>

            <h2 
              className="font-semibold text-[28px] leading-[1.2] mb-3 text-[#23471d] font-poppins"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
            >
              WHO WE ARE
            </h2>

            <div className="space-y-3">
              <p className="text-gray-900 text-sm leading-[1.6] text-justify">
                <strong className="font-semibold text-[#1a2e1a]">Bharat Organic Expo 2027</strong> is India's premier international exhibition and conference dedicated to organic farming, natural healthcare, Ayurveda, and eco-friendly living. Our main objective is to bring together farmers, organic producers, wellness brands, trade buyers, and industry experts onto one common platform to promote a healthy and sustainable lifestyle across the globe.
              </p>

              <p className="text-gray-900 text-sm leading-[1.6] text-justify">
                As a comprehensive platform for organic agriculture and natural wellness, we connect grassroots farmers and eco-friendly innovators directly with large wholesale buyers, grocery store chains, exporters, and investors. We aim to help organic producers expand their market reach, introduce innovative natural products, and create genuine business opportunities for local producers on a global stage.
              </p>

              <p className="text-gray-900 text-sm leading-[1.6] text-justify">
                Every year, thousands of passionate visitors, business owners, healthcare experts, and visionary investors gather at our event. They participate in interactive discussions, discover the latest market trends, and form strong business partnerships to actively support organic farming, protect the environment, and build a cleaner, greener, and healthier future for everyone.
              </p>
            </div>
          </div>

        </div>
      </SectionContainer>
    </section>
  );
};

export default HomeAbout;
