"use client";
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Play, UploadCloud, Leaf } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import camm from '@/app/assets/icons/camm.png';
import rightLeaf from '@/app/assets/icons/footerright.webp';
import image1 from '@/app/assets/image/image1.webp';
import image2 from '@/app/assets/image/image2.webp';
import image3 from '@/app/assets/image/image3.webp';
import image4 from '@/app/assets/image/image4.webp';
import SectionContainer from '@/app/components/layout/SectionContainer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const getImgSrc = (src: any): string => (typeof src === 'string' ? src : src.src);

const defaultVideos = [
  {
    _id: 'default1',
    title: 'Inauguration Highlights',
    thumbnail: image1,
    sourceType: 'YOUTUBE',
    videoUrl: 'https://www.youtube.com/embed/fqAFs6KPwbM?autoplay=1',
    orderNumber: 1
  },
  {
    _id: 'default2',
    title: 'Scientific Sessions',
    thumbnail: image2,
    sourceType: 'YOUTUBE',
    videoUrl: 'https://www.youtube.com/embed/3Ybp5BzK8fc?autoplay=1',
    orderNumber: 2
  },
  {
    _id: 'default3',
    title: 'Expo Highlights 2025',
    thumbnail: image3,
    sourceType: 'YOUTUBE',
    videoUrl: 'https://www.youtube.com/embed/fqAFs6KPwbM?autoplay=1',
    orderNumber: 3
  },
  {
    _id: 'default4',
    title: 'Cultural Programs',
    thumbnail: image4,
    sourceType: 'YOUTUBE',
    videoUrl: 'https://www.youtube.com/embed/3Ybp5BzK8fc?autoplay=1',
    orderNumber: 4
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
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<any[]>([]);

  useEffect(() => {
    if (dbVideos && dbVideos.length > 0) {
      const sorted = [...dbVideos].sort((a, b) => (a.orderNumber || 0) - (b.orderNumber || 0));
      setLoadedVideos(sorted);
    } else {
      setLoadedVideos(defaultVideos);
    }
  }, [dbVideos]);

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
    if (loadedVideos.length < 4) {
      const repeated: any[] = [];
      while (repeated.length < 8) {
        repeated.push(...loadedVideos);
      }
      return repeated;
    }
    return [...loadedVideos, ...loadedVideos];
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
          animation: scrollMarquee 20s linear infinite;
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

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-stretch max-w-[1250px] mx-auto relative z-10">
            
            <div className="lg:col-span-4 overflow-hidden py-1 relative video-marquee-container" style={{ willChange: 'transform, opacity, filter' }}>
              <div className="absolute left-0 top-0 bottom-0 w-4 md:w-8 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-4 md:w-8 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex animate-scroll w-max gap-4 lg:gap-5 h-full">
                {doubledVideos.map((video, idx) => {
                  const videoTitle = video.title || 'Highlights';
                  const videoThumbnail = getImgSrc(video.thumbnail);
                  const embedUrl = video.videoUrl;

                  return (
                    <div 
                      key={idx} 
                      onClick={() => embedUrl && setActiveVideo(embedUrl)}
                      className="w-[220px] md:w-[190px] lg:w-[200px] xl:w-[210px] h-full shrink-0 flex flex-col rounded-xl overflow-hidden cursor-pointer shadow-sm bg-white transition-transform duration-300 hover:scale-[1.02] border border-gray-200"
                    >
                      <div className="relative flex-1 w-full overflow-hidden">
                        <img 
                          src={videoThumbnail} 
                          alt={videoTitle} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 transition-colors duration-300 hover:bg-black/30" />
                        <div className="absolute bottom-2 right-2 flex items-center justify-center z-10">
                          <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center bg-black/50 backdrop-blur-[2px] transition-all hover:bg-[#1b5e20]/90 hover:scale-110">
                            <Play className="text-white ml-0.5" size={14} fill="currentColor" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#f1f1f1] py-3 px-2 text-center border-t border-gray-100 shrink-0">
                        <h3 className="text-[12px] md:text-[13px] font-semibold text-[#0e3b1c]">
                          {videoTitle}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="share-box lg:col-span-1 bg-gradient-to-b from-[#f0f7f2] to-[#e4f1e7] rounded-xl p-5 flex flex-col justify-between border border-[#c3dec7] relative overflow-hidden h-full shadow-sm" style={{ willChange: 'transform, opacity' }}>
              <Leaf className="absolute -top-6 -left-6 text-[#d1e8d6] rotate-45" size={90} fill="currentColor" opacity={0.6} />
              <Leaf className="absolute bottom-10 -right-6 text-[#d1e8d6] -rotate-12" size={70} fill="currentColor" opacity={0.6} />
              
              <div className="flex flex-col gap-3 relative z-10 mb-4 mt-1">
                <div className="flex flex-row md:flex-col lg:flex-row items-center lg:items-start gap-3">
                  <img src={getImgSrc(camm)} alt="Camera" className="w-16 h-16 object-contain shrink-0 drop-shadow-sm transition-transform hover:scale-105" />
                  <div className="flex flex-col text-left lg:mt-1">
                    <h3 className="text-[15px] font-semibold text-[#0e3b1c] mb-1">Share Your Moments</h3>
                    <p className="text-[12px] text-gray-900 font-medium leading-relaxed">
                      Were you part of Organic Expo?<br className="hidden lg:block"/>
                      Share your photos!
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#1b5e20] hover:bg-[#134216] text-white py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors text-[13px] relative z-10 shadow-md mt-auto">
                Upload Your Photos
                <UploadCloud size={16} />
              </button>
            </div>

          </div>

          {activeVideo && typeof document !== 'undefined' && createPortal(
            <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setActiveVideo(null)}>
              <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
                <button 
                  className="absolute top-3 right-3 text-white hover:text-gray-300 bg-black/50 hover:bg-black/80 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-50 transition-colors"
                  onClick={() => setActiveVideo(null)}
                  aria-label="Close Video Modal"
                >
                  ✕
                </button>
                <iframe 
                  src={activeVideo} 
                  title="YouTube video player" 
                  frameBorder="0" 
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
