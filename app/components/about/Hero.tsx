import { ArrowRight, BadgeCheck, Calendar, Globe, Handshake, MapPin, Sparkle, Sprout, Store, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import About12 from "@/app/assets/about/bg.png";
import LeafImg from "@/app/assets/leaf.png";
const Hero = () => {
  return (
    <>
      <style>{`

        @keyframes goldShift {

          0%   { background-position: 0% 50%; }

          50%  { background-position: 100% 50%; }

          100% { background-position: 0% 50%; }

        }

        @keyframes shimmer {

          0%   { left: -75%; }

          100% { left: 150%; }

        }

        @keyframes sparkleAnim {

          0%   { opacity: 0; transform: scale(0.5) translateY(0); }

          50%  { opacity: 1; transform: scale(1.5) translateY(-15px); }

          100% { opacity: 0; transform: scale(0.8) translateY(-30px); }

        }

        .golden-btn-about {

          background: linear-gradient(135deg, #f5c842 0%, #ffdd00 30%, #ffa500 60%, #f5c842 100%);

          background-size: 200% 200%;

          animation: goldShift 2.5s ease infinite;

          box-shadow: 0 10px 30px -5px rgba(0,0,0,0.5), 0 0 20px rgba(255,200,0,0.2);

          position: relative;

          overflow: hidden;

        }

        .golden-btn-about::before {

          content: '';

          position: absolute;

          top: -50%;

          left: -75%;

          width: 50%;

          height: 200%;

          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);

          transform: skewX(-20deg);

          animation: shimmer 2s infinite;

        }

        .teal-btn-about {

          background: linear-gradient(135deg, #123524 0%, #3b8c2a 40%, #123524 100%);

          background-size: 200% 200%;

          animation: goldShift 2.5s ease infinite;

          box-shadow: 0 10px 30px -5px rgba(0,0,0,0.5), 0 0 20px rgba(18,53,36,0.3);

          position: relative;

          overflow: hidden;

        }

        .teal-btn-about::before {

          content: '';

          position: absolute;

          top: -50%;

          left: -75%;

          width: 50%;

          height: 200%;

          background: linear-gradient(to right, transparent, rgba(255,255,255,0.45), transparent);

          transform: skewX(-20deg);

          animation: shimmer 2s infinite;

        }

      `}</style>

      {/* PROFESSIONAL HERO SECTION - REPLICATING IMAGE DESIGN */}

      <section className="relative flex items-center pt-24 md:pt-12 pb-10 md:pb-6 overflow-hidden bg-white aspect-[0.75/1] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/7] min-h-[380px] md:min-h-[420px] lg:min-h-[480px]">



        {/* Full Width Background Image */}

        <div className="absolute inset-0 z-0">

          <img

            loading="lazy"

            decoding="async"

            src={About12.src}

            alt="Organic Expo Background"

            className="w-full h-full object-cover object-[80%] md:object-right"

          />



          {/* Enhanced Mobile Overlay for Readability */}

          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/10 md:from-transparent md:via-transparent md:to-transparent md:bg-transparent" />

        </div>



        {/* Decorative Leaf Element */}

        <img

          loading="lazy"

          decoding="async"

          src={LeafImg.src}

          alt="Organic Expo Decoration"

          className="absolute -top-10 -left-10 w-40 h-40 opacity-10 pointer-events-none rotate-45"

        />



        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">



          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">



            {/* Left Content */}

            <div

              data-aos="fade-right"

              className="relative z-20 bg-white/40 md:bg-transparent backdrop-blur-[4px] md:backdrop-blur-none p-6 md:p-0 rounded-3xl md:rounded-none border border-white/50 md:border-none shadow-2xl shadow-black/5 md:shadow-none -mt-6 md:-mt-12 max-w-[520px]"

            >



              {/* Top Label */}

              <div className="flex items-center gap-3 mb-4">

                <div className="h-[2px] w-8 bg-[#3b8c2a]" />



                <p

                  className="font-extrabold text-[9px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.25em]"

                  style={{

                    color: "#3b8c2a",

                    textShadow: "0 0 15px rgba(255,255,255,0.9)",

                  }}

                >

                  INDIA'S PREMIER GLOBAL PLATFORM FOR

                </p>

              </div>



              {/* Main Heading */}

              <h1

                className="text-[#3b8c2a] font-black text-2xl md:text-3xl lg:text-[38px] leading-[1.1] mb-5 uppercase tracking-tight"

                style={{

                  textShadow: "0 2px 10px rgba(255,255,255,0.8)",

                }}

              >

                ORGANIC PRODUCTS, <br />



                <span

                  className="block mt-2"

                  style={{ color: "#e63946" }}

                >

                  HEALTH & WELLNESS

                </span>

              </h1>



              {/* Event Details */}

              <div

                className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6 text-black font-semibold text-[10px] md:text-[11px] uppercase tracking-[0.1em] md:tracking-[0.15em]"

                style={{

                  textShadow: "0 0 8px rgba(255,255,255,1)",

                }}

              >



                <div className="flex items-center gap-2">

                  <Calendar

                    size={14}

                    className="text-[#3b8c2a]"

                    strokeWidth={2.5}

                  />



                  <span>

                    21-23 August 2026

                  </span>

                </div>



                <div className="flex items-center gap-2">

                  <MapPin

                    size={14}

                    className="text-[#3b8c2a]"

                    strokeWidth={2.5}

                  />



                  <span>

                    Pragati Maidan, New Delhi

                  </span>

                </div>



              </div>



              {/* About Section Heading */}

              <div className="flex items-center gap-4 mb-4 md:mb-6">



                <div className="h-[2px] w-12 bg-[#3b8c2a]" />



                <p

                  className="font-semibold text-xs md:text-sm uppercase tracking-[0.1em] md:tracking-[0.15em]"

                  style={{

                    color: "#123524",

                    textShadow: "none",

                  }}

                >

                  ABOUT ORGANIC EXPO - GLOBAL EDITION

                </p>



              </div>



              {/* Description */}

              <p className="text-black/80 text-[13px] md:text-sm leading-relaxed mb-2 max-w-xl font-medium">

                Bringing together the world's leading organic brands, farmers,

                innovators, buyers, and industry professionals to discover,

                showcase, and shape the future of sustainable living.

              </p>



              {/* Feature Icons Row */}

              <div className="grid grid-cols-2 items-center gap-x-3 gap-y-3 md:flex md:flex-wrap md:gap-x-4 md:gap-y-2 mb-3 mt-1 border-t border-[#DCE5D2] py-2">



                {/* Global Market Access */}

                <div className="flex items-center gap-2 md:pr-4 md:border-r border-[#B8C7B5]">



                  <Globe

                    className="h-6 w-6 shrink-0 text-[#3b8c2a]"

                    strokeWidth={1.8}

                  />



                  <span

                    className="text-[8px] font-bold uppercase leading-tight tracking-wide text-[#173D2B]"

                    style={{ fontFamily: "'Inter', sans-serif" }}

                  >

                    GLOBAL

                    <br />

                    MARKET ACCESS

                  </span>



                </div>



                {/* Organic Connections */}

                <div className="flex items-center gap-2 md:pr-4 md:border-r border-[#B8C7B5]">



                  <Handshake

                    className="h-6 w-6 shrink-0 text-[#3b8c2a]"

                    strokeWidth={1.8}

                  />



                  <span

                    className="text-[8px] font-bold uppercase leading-tight tracking-wide text-[#173D2B]"

                    style={{ fontFamily: "'Inter', sans-serif" }}

                  >

                    ORGANIC

                    <br />

                    CONNECTIONS

                  </span>



                </div>



                {/* Sustainable Growth */}

                <div className="flex items-center gap-2 md:pr-4 md:border-r border-[#B8C7B5]">



                  <Sprout

                    className="h-6 w-6 shrink-0 text-[#6F9638]"

                    strokeWidth={1.8}

                  />



                  <span

                    className="text-[8px] font-bold uppercase leading-tight tracking-wide text-[#173D2B]"

                    style={{ fontFamily: "'Inter', sans-serif" }}

                  >

                    SUSTAINABLE

                    <br />

                    GROWTH

                  </span>



                </div>



                {/* Brand Visibility */}

                <div className="flex items-center gap-2">



                  <BadgeCheck

                    className="h-6 w-6 shrink-0 text-[#3b8c2a]"

                    strokeWidth={1.8}

                  />



                  <span

                    className="text-[8px] font-bold uppercase leading-tight tracking-wide text-[#173D2B]"

                    style={{ fontFamily: "'Inter', sans-serif" }}

                  >

                    BRAND

                    <br />

                    VISIBILITY

                  </span>



                </div>



              </div>



              {/* Buttons */}

              <div className="flex flex-col sm:flex-row gap-3 pt-3">

                <Link

                  href="/book-a-stand"

                  className="bg-[#3b8c2a] hover:bg-[#2c6e1f] text-white px-6 py-2.5 rounded-lg font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"

                >

                  BOOK YOUR STALL

                  <ArrowRight className="w-4 h-4" />

                </Link>

                <Link

                  href="/visitor-registration"

                  className="bg-white hover:bg-slate-100 text-[#3b8c2a] px-6 py-2.5 rounded-lg font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-[#3b8c2a]"

                >

                  REGISTER AS BUYER

                  <ArrowRight className="w-4 h-4" />

                </Link>

              </div>





            </div>



            {/* Right Side */}

            <div className="relative hidden md:block">

            </div>



          </div>



        </div>



      </section>
    </>

  )
}

export default Hero