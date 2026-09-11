"use client";
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Play, UploadCloud, Leaf } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import camm from '@/app/assets/icons/camm.png';
import rightLeaf from '@/app/assets/icons/footerright.webp';
import thumb1 from '@/app/assets/reels/reel_thumb_1.webp';
import thumb2 from '@/app/assets/reels/reel_thumb_2.webp';
import thumb3 from '@/app/assets/reels/reel_thumb_3.webp';
import thumb4 from '@/app/assets/reels/reel_thumb_4.webp';
import thumb5 from '@/app/assets/reels/reel_thumb_5.webp';
import thumb6 from '@/app/assets/reels/reel_thumb_6.webp';
import thumb7 from '@/app/assets/reels/reel_thumb_7.webp';
import thumb8 from '@/app/assets/reels/reel_thumb_8.webp';
import thumb9 from '@/app/assets/reels/reel_thumb_9.webp';
import thumb10 from '@/app/assets/reels/reel_thumb_10.webp';
import thumb11 from '@/app/assets/reels/reel_thumb_11.webp';
import thumb12 from '@/app/assets/reels/reel_thumb_12.webp';
import thumb13 from '@/app/assets/reels/reel_thumb_13.webp';
import thumb14 from '@/app/assets/reels/reel_thumb_14.webp';
import thumb15 from '@/app/assets/reels/reel_thumb_15.webp';
import thumb16 from '@/app/assets/reels/reel_thumb_16.webp';
import thumb17 from '@/app/assets/reels/reel_thumb_17.webp';
import thumb18 from '@/app/assets/reels/reel_thumb_18.webp';
import thumb19 from '@/app/assets/reels/reel_thumb_19.webp';
import thumb20 from '@/app/assets/reels/reel_thumb_20.webp';
import thumb21 from '@/app/assets/reels/reel_thumb_21.webp';
import thumb22 from '@/app/assets/reels/reel_thumb_22.webp';
import thumb23 from '@/app/assets/reels/reel_thumb_23.webp';
import thumb24 from '@/app/assets/reels/reel_thumb_24.webp';
import thumb25 from '@/app/assets/reels/reel_thumb_25.webp';
import thumb26 from '@/app/assets/reels/reel_thumb_26.webp';
import thumb27 from '@/app/assets/reels/reel_thumb_27.webp';
import thumb28 from '@/app/assets/reels/reel_thumb_28.webp';
import thumb29 from '@/app/assets/reels/reel_thumb_29.webp';
import thumb30 from '@/app/assets/reels/reel_thumb_30.webp';
import thumb31 from '@/app/assets/reels/reel_thumb_31.webp';
import thumb32 from '@/app/assets/reels/reel_thumb_32.webp';
import SectionContainer from '@/app/components/layout/SectionContainer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const getImgSrc = (src: any): string => (typeof src === 'string' ? src : src.src);

const defaultVideos = [
  {
    _id: 'default1',
    title: 'Inauguration Highlights',
    thumbnail: thumb1,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DV-xaNXCBGl/',
    objectPosition: 'center 0%',
    orderNumber: 1
  },
  {
    _id: 'default2',
    title: 'Inauguration Highlights',
    thumbnail: thumb2,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DVve33sEnmb/',
    objectPosition: 'center 12%',
    orderNumber: 2
  },
  {
    _id: 'default3',
    title: 'Scientific Sessions',
    thumbnail: thumb3,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DVqfgxYkyua/',
    objectPosition: 'center 8%',
    orderNumber: 3
  },
  {
    _id: 'default4',
    title: 'Scientific Sessions',
    thumbnail: thumb4,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DVlIkloiMhx/',
    objectPosition: 'center 5%',
    orderNumber: 4
  },
  {
    _id: 'default5',
    title: 'Expo Highlights 2025',
    thumbnail: thumb5,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DWJH1yIiOkZ/',
    objectPosition: 'center 8%',
    orderNumber: 5
  },
  {
    _id: 'default6',
    title: 'Expo Highlights 2025',
    thumbnail: thumb6,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DWJEsrOCBeN/',
    objectPosition: 'center 6%',
    orderNumber: 6
  },
  {
    _id: 'default7',
    title: 'Cultural Programs',
    thumbnail: thumb7,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DWI04E2CEPN/',
    objectPosition: 'center 10%',
    orderNumber: 7
  },
  {
    _id: 'default8',
    title: 'Cultural Programs',
    thumbnail: thumb8,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DWDbf3mk3O9/',
    objectPosition: 'center 10%',
    orderNumber: 8
  },
  {
    _id: 'default9',
    title: 'Inauguration Highlights',
    thumbnail: thumb9,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DWCFqb9E7Hq/',
    objectPosition: 'center 8%',
    orderNumber: 9
  },
  {
    _id: 'default10',
    title: 'Expo Highlights 2025',
    thumbnail: thumb10,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DV-0DHWiD0q/',
    objectPosition: 'center 8%',
    orderNumber: 10
  },
  {
    _id: 'default11',
    title: 'Scientific Sessions',
    thumbnail: thumb11,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DV-yxc3CEOX/',
    objectPosition: 'center 10%',
    orderNumber: 11
  },
  {
    _id: 'default12',
    title: 'Cultural Programs',
    thumbnail: thumb12,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DXOKVMAE4a0/',
    objectPosition: 'center 10%',
    orderNumber: 12
  },
  {
    _id: 'default13',
    title: 'Panel Discussions',
    thumbnail: thumb13,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DXQvmcbESsn/',
    objectPosition: 'center 10%',
    orderNumber: 13
  },
  {
    _id: 'default14',
    title: 'Workshops & Demos',
    thumbnail: thumb14,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DXLmSBljEmT/',
    objectPosition: 'center 10%',
    orderNumber: 14
  },
  {
    _id: 'default15',
    title: 'Awards & Recognition',
    thumbnail: thumb15,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DXJC2lhkum9/',
    objectPosition: 'center 10%',
    orderNumber: 15
  },
  {
    _id: 'default16',
    title: 'Organic Expo Highlights',
    thumbnail: thumb16,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DXDzWNljKBp/',
    objectPosition: 'center 8%',
    orderNumber: 16
  },
  {
    _id: 'default17',
    title: 'Sustainable Farming',
    thumbnail: thumb17,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DW-9-DzDVcU/',
    objectPosition: 'center 10%',
    orderNumber: 17
  },
  {
    _id: 'default18',
    title: 'Organic Innovations',
    thumbnail: thumb18,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DW-l2FkjW7q/',
    objectPosition: 'center 10%',
    orderNumber: 18
  },
  {
    _id: 'default19',
    title: 'Eco-Friendly Living',
    thumbnail: thumb19,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DW5f77fiPAa/',
    objectPosition: 'center 8%',
    orderNumber: 19
  },
  {
    _id: 'default20',
    title: 'Natural Agriculture',
    thumbnail: thumb20,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DW2-1CIjWdy/',
    objectPosition: 'center 10%',
    orderNumber: 20
  },
  {
    _id: 'default21',
    title: 'Green Living Moments',
    thumbnail: thumb21,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DWx0sojEdMe/',
    objectPosition: 'center 8%',
    orderNumber: 21
  },
  {
    _id: 'default22',
    title: 'Expo Highlights 2025',
    thumbnail: thumb22,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DWssnyuEcbS/',
    objectPosition: 'center 10%',
    orderNumber: 22
  },
  {
    _id: 'default23',
    title: 'Health & Wellness',
    thumbnail: thumb23,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DWnnQ6giO01/',
    objectPosition: 'center 10%',
    orderNumber: 23
  },
  {
    _id: 'default24',
    title: 'Visitor Experiences',
    thumbnail: thumb24,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DWnmCnGE_hL/',
    objectPosition: 'center 10%',
    orderNumber: 24
  },
  {
    _id: 'default25',
    title: 'Sustainable Agriculture',
    thumbnail: thumb25,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DWfwS9qASNf/',
    objectPosition: 'center 10%',
    orderNumber: 25
  },
  {
    _id: 'default26',
    title: 'Green Expo Moments',
    thumbnail: thumb26,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DWfvQdJiW4r/',
    objectPosition: 'center 10%',
    orderNumber: 26
  },
  {
    _id: 'default27',
    title: 'Organic Products Showcase',
    thumbnail: thumb27,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DWbVHUekRLU/',
    objectPosition: 'center 10%',
    orderNumber: 27
  },
  {
    _id: 'default28',
    title: 'Special Dignitaries',
    thumbnail: thumb28,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DWbT-GSkkZY/',
    objectPosition: 'center 8%',
    orderNumber: 28
  },
  {
    _id: 'default29',
    title: 'Farmer Interactions',
    thumbnail: thumb29,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DWVytkfFcpp/',
    objectPosition: 'center 8%',
    orderNumber: 29
  },
  {
    _id: 'default30',
    title: 'Eco Innovation Hub',
    thumbnail: thumb30,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DWOA-A8iPNc/',
    objectPosition: 'center 10%',
    orderNumber: 30
  },
  {
    _id: 'default31',
    title: 'Seminar & Discussions',
    thumbnail: thumb31,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DWLrZczCF49/',
    objectPosition: 'center 10%',
    orderNumber: 31
  },
  {
    _id: 'default32',
    title: 'Live Demonstrations',
    thumbnail: thumb32,
    sourceType: 'INSTAGRAM',
    videoUrl: 'https://www.instagram.com/reel/DWLmR5DiMi8/',
    objectPosition: 'center 8%',
    orderNumber: 32
  }
];

const HeartbeatLine = ({ isLeft }: { isLeft: boolean }) => (
  <div className="flex flex-1 items-center gap-1">
    {isLeft ? (
      <>
        <div className="h-[1.5px] bg-[#1b5e20]/60 flex-1"></div>
        <svg viewBox="0 0 50 20" className="w-12 h-5 text-[#1b5e20]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M0,10 L10,10 L15,2 L25,18 L30,10 L50,10" />
        </svg>
        <Leaf size={18} className="text-[#1b5e20]" fill="currentColor" />
      </>
    ) : (
      <>
        <svg viewBox="0 0 50 20" className="w-12 h-5 text-[#1b5e20]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M0,10 L20,10 L25,2 L35,18 L40,10 L50,10" />
        </svg>
        <div className="h-[1.5px] bg-[#1b5e20]/60 flex-1"></div>
      </>
    )}
  </div>
);

interface VideoHighlightsProps {
  dbVideos?: any[];
}

const EMPTY_VIDEOS: any[] = [];

const VideoHighlights: React.FC<VideoHighlightsProps> = ({ dbVideos = EMPTY_VIDEOS }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<{ videoUrl: string; sourceType?: string; title?: string } | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<any[]>(defaultVideos);

  useEffect(() => {
    if (dbVideos && dbVideos.length > 0) {
      const sorted = [...dbVideos].sort((a, b) => (a.orderNumber || 0) - (b.orderNumber || 0));
      setLoadedVideos(sorted);
    }
  }, [dbVideos]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    if (activeVideo) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeVideo]);

  useEffect(() => {
    if (loadedVideos.length === 0) return;
    const el = sectionRef.current;
    if (!el) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
      }
    });

    const titleArea = el.querySelector('.video-title-area');
    if (titleArea) {
      tl.fromTo(titleArea,
        { opacity: 0, scale: 0.8, filter: 'blur(5px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.8, ease: 'back.out(1.2)' }
      );
    }

    const marqueeContainer = el.querySelector('.video-marquee-container');
    if (marqueeContainer) {
      tl.fromTo(marqueeContainer,
        { opacity: 0, y: 30, filter: 'blur(5px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out' },
        "-=0.4"
      );
    }

    const shareBox = el.querySelector('.share-box');
    if (shareBox) {
      tl.fromTo(shareBox,
        { opacity: 0, x: 60, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.8, ease: 'back.out(1.2)' },
        "-=0.6"
      );
    }
  }, [loadedVideos]);

  const getDoubledVideos = () => {
    if (loadedVideos.length === 0) return [];
    let base = [...loadedVideos];
    while (base.length < 6) {
      base = [...base, ...loadedVideos];
    }
    return [...base, ...base];
  };

  const doubledVideos = getDoubledVideos();

  return (
    <>
      <style>{`
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 10px)); }
        }
        .animate-scroll {
          animation: scrollMarquee 95s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      <section ref={sectionRef} className="w-full pb-12 pt-0 -mt-2 relative z-10 font-inter perspective-1000">
        <SectionContainer>
          {rightLeaf && (
            <img
              src={getImgSrc(rightLeaf)}
              alt=""
              className="absolute -right-8 top-0 md:-top-4 lg:-top-6 h-48 md:h-72 lg:h-[400px] w-auto opacity-100 pointer-events-none z-0 object-contain"
            />
          )}
          <div className="video-title-area flex items-center justify-center gap-4 mb-8 w-full max-w-4xl mx-auto" style={{ willChange: 'transform, opacity, filter' }}>
            <HeartbeatLine isLeft={true} />
            <h2 className="text-lg md:text-xl font-semibold tracking-widest uppercase text-[#0e3b1c] whitespace-nowrap">
              VIDEO HIGHLIGHTS
            </h2>
            <HeartbeatLine isLeft={false} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-stretch relative z-10">

            <div className="lg:col-span-4 overflow-hidden py-1 relative video-marquee-container" style={{ willChange: 'transform, opacity, filter' }}>
              <div className="absolute left-0 top-0 bottom-0 w-4 md:w-8 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-4 md:w-8 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none"></div>

              <div className="flex animate-scroll w-max gap-5 h-full">
                {doubledVideos.map((video, idx) => {
                  const videoTitle = video.title || 'Highlights';
                  const videoThumbnail = getImgSrc(video.thumbnail);

                  return (
                    <div
                      key={idx}
                      onClick={() => video.videoUrl && setActiveVideo(video)}
                      className="w-[165px] sm:w-[175px] md:w-[185px] shrink-0 flex flex-col rounded-2xl overflow-hidden cursor-pointer shadow-md bg-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl border border-gray-200/80 group"
                    >
                      <div className="relative w-full h-[180px] sm:h-[190px] overflow-hidden bg-neutral-900">
                        <img
                          src={videoThumbnail}
                          alt={videoTitle}
                          loading="lazy"
                          decoding="async"
                          style={{
                            objectPosition: video.objectPosition || 'center 10%',
                          }}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        
                        {/* Subtle cinematic gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                        {/* Instagram Reel Badge at Top Left */}
                        <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white text-[10px] font-medium pointer-events-none">
                          <svg className="w-2.5 h-2.5 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          <span>Reel</span>
                        </div>

                        {/* Floating Center Play Icon */}
                        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                          <div className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center bg-black/40 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1b5e20]/90">
                            <Play className="text-white ml-0.5" size={15} fill="currentColor" />
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#f8faf8] py-2.5 px-3 text-center border-t border-gray-100 shrink-0">
                        <h3 className="text-[12px] font-semibold text-[#0e3b1c] truncate">
                          {videoTitle}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {activeVideo && typeof document !== 'undefined' && createPortal(
            <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm" onClick={() => setActiveVideo(null)}>
              <div 
                className={`relative w-full ${
                  activeVideo.videoUrl.includes('instagram.com')
                    ? 'max-w-[420px] h-[85vh] max-h-[660px] bg-white rounded-2xl'
                    : 'max-w-5xl aspect-video bg-black rounded-xl'
                } overflow-hidden shadow-2xl flex flex-col`} 
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-2.5 right-2.5 text-white bg-black/70 hover:bg-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-50 transition-colors shadow-md"
                  onClick={() => setActiveVideo(null)}
                  aria-label="Close Video Modal"
                >
                  ✕
                </button>
                <iframe
                  src={
                    activeVideo.videoUrl.includes('instagram.com')
                      ? `${activeVideo.videoUrl.replace(/\/+$/, '')}/embed/`
                      : activeVideo.videoUrl
                  }
                  title={activeVideo.title || "Video player"}
                  frameBorder="0"
                  scrolling="no"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>,
            document.body
          )}
        </SectionContainer>
      </section>
    </>
  );
};

export default VideoHighlights;
