"use client";

import React from "react";
import { Leaf, ArrowRight, Play, Sprout, Target, HandHeart } from "lucide-react";

const AboutTimeline = () => {
  return (
    <section id="our-story" className="w-full py-2 lg:py-4 px-2 lg:px-11 bg-white relative font-inter overflow-hidden ">

      {/* Decorative Dots Pattern top right */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#154726 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>

      {/* Floating Leaves */}
      <div className="absolute top-[18%] left-[48%] -rotate-45 z-20 pointer-events-none">
        <Leaf size={32} className="text-[#5ec142] fill-[#5ec142] drop-shadow-md" />
      </div>
      <div className="absolute top-[30%] left-[46%] -rotate-12 z-20 pointer-events-none">
        <Leaf size={24} className="text-[#3b8c2a] fill-[#3b8c2a] drop-shadow-md" />
      </div>
      <div className="absolute top-[55%] right-[-1%] rotate-[120deg] z-20 pointer-events-none">
        <Leaf size={56} className="text-[#5ec142] fill-[#5ec142] drop-shadow-lg" />
      </div>
      <div className="absolute bottom-[35%] right-[5%] rotate-45 z-20 pointer-events-none">
        <Leaf size={24} className="text-[#3b8c2a] fill-[#3b8c2a] drop-shadow-sm opacity-80" />
      </div>

      <div className="w-full pt8 relative z-10">

        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-2">

          {/* Left Content */}
          <div className="flex-1 w-full relative z-10 lg:pl-4">
            {/* Small header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#2c6e1f] font-black text-sm tracking-widest uppercase">OUR HISTORY</span>
              <Leaf size={16} className="text-[#2c6e1f] fill-[#2c6e1f] -mt-1" />
            </div>

            {/* Main Title */}
            <h2 className="text-[#111827] text-4xl md:text-5xl lg:text-[52px] leading-[1.2] font-serif font-bold mb-6">
              Our Journey Towards <br />
              <span className="text-[#154726]">A Healthier Planet</span>
            </h2>

            {/* Decorative separator */}
            <div className="flex items-center gap-3 mb-6 opacity-70">
              <div className="w-8 h-[1.5px] bg-[#154726]"></div>
              <Leaf size={14} className="text-[#154726] fill-[#154726] rotate-90" />
              <div className="w-8 h-[1.5px] bg-[#154726]"></div>
            </div>

            {/* Paragraph */}
            <p className="text-[#4b5563] text-[15px] md:text-[16px] leading-relaxed mb-10 max-w-[480px]">
              Organic Expo was born out of a simple yet powerful idea - to create a global platform that connects people, promotes natural living, and inspires a sustainable future. From a small beginning to becoming the world's leading organic trade show, our journey has been driven by passion, purpose, and a deep commitment to the planet. We bring together farmers, innovators, and conscious consumers under one roof to champion eco-friendly practices and build a thriving, green economy for generations to come.
            </p>

            {/* Button */}
            <button className="bg-[#3b8c2a] hover:bg-[#2c6e1f] text-white px-6 py-2.5 rounded-lg font-bold text-xs tracking-wider uppercase flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-fit">
              DISCOVER MORE ABOUT US <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Image Container */}
          <div className="flex-1 w-full relative">

            {/* Circular badge overlapping left edge */}
            <div className="absolute -left-12 lg:-left-20 bottom-16 w-44 h-44 bg-[#154726] rounded-full flex flex-col items-center justify-center text-center p-6 text-white z-30 shadow-[0_15px_40px_rgba(21,71,38,0.4)] border-[10px] border-white">
              <Leaf size={24} className="mb-2 text-white fill-white" />
              <span className="text-[13px] font-bold leading-tight mb-2">Promoting Nature<br />Nourishing Life</span>
              <div className="w-8 h-[2px] bg-white/40"></div>
            </div>

            {/* Main Image with large curve on left */}
            <div className="w-full h-[450px] lg:h-[600px] relative overflow-hidden z-20 shadow-xl" style={{ borderRadius: '250px 20px 20px 250px' }}>
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop"
                alt="Organic Expo Event Stall"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#f3f7f0] rounded-[40px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 relative shadow-sm border border-gray-50">

          {/* Left Image (Landscape) */}
          <div className="w-full lg:w-[45%] relative shrink-0">
            <div className="w-full h-[350px] lg:h-[420px] rounded-[32px] overflow-hidden relative shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop"
                alt="Organic Expo Exhibition Hall"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Play button */}
            <div className="absolute -bottom-8 right-8 lg:right-12 w-[88px] h-[88px] bg-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] cursor-pointer hover:scale-105 transition-transform z-30 group">
              <div className="w-16 h-16 bg-[#f3f7f0] group-hover:bg-[#e6f0e0] rounded-full flex items-center justify-center transition-colors">
                <Play size={24} className="text-[#3b8c2a] fill-[#3b8c2a] ml-1" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 w-full pt-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#2c6e1f] font-black text-xs tracking-widest uppercase">OUR STORY</span>
              <Leaf size={14} className="text-[#2c6e1f] fill-[#2c6e1f] -mt-0.5" />
            </div>

            <h3 className="text-[#111827] text-3xl md:text-[40px] font-serif font-bold mb-6 leading-[1.2]">
              From A Small Idea <br />
              <span className="text-[#154726]">To A Global Movement</span>
            </h3>

            <p className="text-[#4b5563] text-[15px] leading-relaxed mb-12 max-w-[480px]">
              What started as a small exhibition with a vision to support organic farmers and eco-friendly brands has grown into the world's largest organic trade platform.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Vertical Separators (Desktop only) */}
              <div className="hidden md:block absolute top-2 bottom-2 left-[33%] w-[1px] bg-gray-300/40"></div>
              <div className="hidden md:block absolute top-2 bottom-2 left-[66%] w-[1px] bg-gray-300/40"></div>

              {/* Vision */}
              <div className="pr-2">
                <div className="w-14 h-14 rounded-full border border-[#3b8c2a]/40 flex items-center justify-center mb-5 text-[#3b8c2a] bg-white">
                  <Sprout size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-[#154726] font-bold text-[16px] mb-2">Our Vision</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  A world where organic living is accessible, affordable & sustainable.
                </p>
              </div>

              {/* Mission */}
              <div className="md:px-4">
                <div className="w-14 h-14 rounded-full border border-[#3b8c2a]/40 flex items-center justify-center mb-5 text-[#3b8c2a] bg-white">
                  <Target size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-[#154726] font-bold text-[16px] mb-2">Our Mission</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  To connect, promote & empower the organic community globally.
                </p>
              </div>

              {/* Values */}
              <div className="md:pl-4">
                <div className="w-14 h-14 rounded-full border border-[#3b8c2a]/40 flex items-center justify-center mb-5 text-[#3b8c2a] bg-white">
                  <HandHeart size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-[#154726] font-bold text-[16px] mb-2">Our Values</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  Sustainability, Integrity, Health, Education & Community.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTimeline;
