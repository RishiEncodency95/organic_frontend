"use client";
import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gallbottImg from '@/app/assets/icons/1og.png';
import leafRightImg from '@/app/assets/icons/leafright.webp';
import SectionContainer from '@/app/components/layout/SectionContainer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const getImgSrc = (src: any): string => (typeof src === 'string' ? src : src.src);

const Sparkle = ({ style, color = '#fff176' }: { style: React.CSSProperties; color?: string }) => (
  <span style={{ position:'absolute', pointerEvents:'none', fontSize:'14px', color,
    animation:'sparkleBannerAnim 1.6s ease-in-out infinite', opacity:0, zIndex:20, ...style }}>✦</span>
);

const JoinUsBanner = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
      }
    });

    const bannerBg = el.querySelector('.banner-bg');
    if (bannerBg) {
      tl.fromTo(bannerBg,
        { opacity: 0, scaleY: 0.8, transformOrigin: 'bottom center', borderRadius: '50px' },
        { opacity: 1, scaleY: 1, borderRadius: '16px', duration: 1, ease: 'expo.out' }
      );
    }

    const bannerLeaf = el.querySelector('.banner-leaf');
    if (bannerLeaf) {
      tl.fromTo(bannerLeaf,
        { opacity: 0, x: -30 },
        { opacity: 0.2, x: 0, duration: 0.8, ease: 'power2.out' },
        "-=0.6"
      );
    }

    const bannerText = el.querySelectorAll('.banner-text');
    if (bannerText.length > 0) {
      tl.fromTo(bannerText,
        { opacity: 0, y: 20, rotationX: -30, transformPerspective: 600 },
        { opacity: 1, y: 0, rotationX: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.4)' },
        "-=0.6"
      );
    }

    const bannerBtn = el.querySelector('.banner-btn');
    if (bannerBtn) {
      tl.fromTo(bannerBtn,
        { opacity: 0, scale: 0.5, filter: 'blur(5px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.7, ease: 'elastic.out(1, 0.5)' },
        "-=0.5"
      );
    }

  }, []);

  return (
    <>
      <style>{`
        @keyframes sparkleBannerAnim {
          0%   { opacity:0; transform:scale(0.5) translateY(0); }
          40%  { opacity:1; transform:scale(1.2) translateY(-4px); }
          80%  { opacity:0.5; transform:scale(0.9) translateY(-6px); }
          100% { opacity:0; transform:scale(0.5) translateY(-8px); }
        }
      `}</style>
      <section ref={sectionRef} className="w-full pt-2 pb-0 font-inter mb-0 -mt-4 relative z-10 perspective-1000">
        <SectionContainer>
          {/* Banner Container - added overflow-hidden to keep decorative graphics inside the banner frame */}
          <div className="banner-bg relative w-full rounded-2xl bg-[#00230f] shadow-xl flex flex-col xl:flex-row items-center justify-between p-4 xl:p-0 xl:pr-10 border-b-4 border-[#eab308]" style={{ willChange: 'transform, opacity, border-radius', overflow: 'visible' }}>
            
            {/* Decorative Left Image - overflows outside banner */}
            <div className="absolute left-2 -top-4 xl:-top-6 pointer-events-none z-20 hidden md:block">
              <img 
                src={getImgSrc(gallbottImg)} 
                alt="Decorative Elements" 
                className="h-20 xl:h-28 object-contain opacity-95"
              />
            </div>

            {/* Decorative Right Image (Leaves) */}
            <div className="banner-leaf absolute right-0 top-0 bottom-0 pointer-events-none z-0 overflow-hidden rounded-r-2xl opacity-20">
              <img 
                src={getImgSrc(leafRightImg)} 
                alt="Leaves background" 
                className="h-full object-cover mix-blend-overlay"
              />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full flex flex-col xl:flex-row items-start xl:items-center xl:justify-between pl-4 sm:pl-[80px] md:pl-[120px] lg:pl-[140px] xl:pl-[180px] gap-5 xl:gap-0 xl:min-h-[90px] py-4 xl:py-0">
              
              {/* Text Area */}
              <div className="banner-text flex flex-col items-start text-left w-full xl:w-auto shrink-0" style={{ willChange: 'transform, opacity' }}>
                <span 
                  className="text-[#facc15] text-[16px] sm:text-[18px] md:text-[22px] font-medium leading-none mb-1.5 whitespace-nowrap italic" 
                  style={{ fontFamily: "'Playfair Display', cursive, serif" }}
                >
                  Be a Part of the Next Legacy
                </span>
                <h2 className="text-white text-[18px] sm:text-xl md:text-2xl xl:text-[26px] font-semibold tracking-tight whitespace-nowrap font-poppins">
                  Join Us at ORGANIC EXPO 2026
                </h2>
              </div>

              {/* Center Button Area */}
              <div className="banner-btn flex-shrink-0 z-20 w-full sm:w-auto flex justify-start mt-1 xl:mt-0" style={{ willChange: 'transform, opacity, filter' }}>
                <div style={{ position:'relative', display:'inline-block' }}>
                  <Sparkle color="#facc15" style={{ top:'-14px', left:'10%', animationDelay:'0s', fontSize:'16px' }} />
                  <Sparkle color="#ffffff" style={{ top:'-8px', left:'65%', animationDelay:'0.3s', fontSize:'13px' }} />
                  <Sparkle color="#ffffff" style={{ bottom:'-10px', left:'25%', animationDelay:'0.5s', fontSize:'14px' }} />
                  <Sparkle color="#facc15" style={{ bottom:'-14px', right:'12%', animationDelay:'0.8s', fontSize:'18px' }} />
                  <Sparkle color="#facc15" style={{ top:'30%', left:'-14px', animationDelay:'1.1s', fontSize:'15px' }} />
                  <Sparkle color="#ffffff" style={{ top:'40%', right:'-16px', animationDelay:'0.6s', fontSize:'16px' }} />
                  
                  <button className="bg-white hover:bg-gray-100 text-[#0e3b1c] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-black text-[10px] sm:text-[11px] uppercase tracking-[0.1em] flex items-center justify-center gap-1.5 transition-all shadow-md group relative z-10">
                    REGISTER NOW
                    <ArrowRight size={14} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Info Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 xl:gap-8 xl:border-l border-white/20 xl:pl-8 w-full xl:w-auto">
                {/* Date */}
                <div className="flex items-center gap-3 text-white text-left">
                  <Calendar size={30} strokeWidth={1.5} className="text-white shrink-0 opacity-90" />
                  <div className="flex flex-col">
                    <span className="font-bold text-[15px] leading-snug tracking-wide">21 – 23 August 2026</span>
                    <span className="text-[12px] text-gray-300">(Friday – Sunday)</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 text-white text-left">
                  <MapPin size={30} strokeWidth={1.5} className="text-white shrink-0 opacity-90" />
                  <div className="flex flex-col">
                    <span className="font-bold text-[15px] leading-snug tracking-wide">Pragati Maidan</span>
                    <span className="text-[12px] text-gray-300">New Delhi, India</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </SectionContainer>
      </section>
    </>
  );
};

export default JoinUsBanner;
