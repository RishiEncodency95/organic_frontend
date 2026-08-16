"use client";
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gal1 from '@/app/assets/icons/gal1.png';
import gal2 from '@/app/assets/icons/gal2.png';
import gal3 from '@/app/assets/icons/gal3.png';
import gal4 from '@/app/assets/icons/gal4.png';
import gal5 from '@/app/assets/icons/gal5.png';
import gal6 from '@/app/assets/icons/gal6.png';
import leafLeft from '@/app/assets/icons/leafs.png';
import SectionContainer from '@/app/components/layout/SectionContainer';
import { SITE_CONFIG } from '@/app/constants/siteConfig';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap: Record<string, any> = {
  gal1: gal1,
  gal2: gal2,
  gal3: gal3,
  gal4: gal4,
  gal5: gal5,
  gal6: gal6
};

const parseNumberStr = (str: string) => {
  if (!str) return { val: 0, suffix: '' };
  const cleanStr = str.replace(/,/g, '');
  const numMatch = cleanStr.match(/\d+/);
  const val = numMatch ? parseInt(numMatch[0], 10) : 0;
  const suffix = cleanStr.replace(/\d+/g, '').trim();
  return { val, suffix };
};

const CountUp = ({ endValue, suffix = '+' }: { endValue: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000;
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            if (elapsedTime < duration) {
              const progress = elapsedTime / duration;
              const easeOut = 1 - Math.pow(1 - progress, 4);
              setCount(Math.floor(easeOut * endValue));
              requestAnimationFrame(updateCounter);
            } else {
              setCount(endValue);
            }
          };
          requestAnimationFrame(updateCounter);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [endValue]);

  const formattedCount = new Intl.NumberFormat('en-US').format(count);
  return <span ref={ref}>{formattedCount}{suffix}</span>;
};

const defaultStats = [
  { icon: gal1, num: SITE_CONFIG.stats.exhibitorsCount, label: 'Exhibitors' },
  { icon: gal2, num: SITE_CONFIG.stats.visitorsCount, label: 'Visitors' },
  { icon: gal3, num: SITE_CONFIG.stats.speakersCount, label: 'Expert Speakers' },
  { icon: gal4, num: SITE_CONFIG.stats.delegatesCount, label: 'Delegates' },
  { icon: gal5, num: SITE_CONFIG.stats.countriesCount, label: 'Countries\nParticipated' },
  { icon: gal6, num: SITE_CONFIG.stats.sessionsCount, label: 'Sessions\nConducted' },
];

interface CountersProps {
  dbCounters?: any[];
}

const EMPTY_COUNTERS: any[] = [];
const getImgSrc = (src: any): string => (typeof src === 'string' ? src : src.src);

const Counters: React.FC<CountersProps> = ({ dbCounters = EMPTY_COUNTERS }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [loadedCounters, setLoadedCounters] = useState<any[]>([]);

  useEffect(() => {
    if (dbCounters && dbCounters.length > 0) {
      setLoadedCounters(dbCounters);
    } else {
      setLoadedCounters(defaultStats.map((s, idx) => ({
        _id: idx,
        iconKey: `gal${idx + 1}`,
        number: s.num.toString() + (idx === 1 ? '' : '+'),
        label: s.label
      })));
    }
  }, [dbCounters]);

  useEffect(() => {
    if (loadedCounters.length === 0) return;
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.stat-item');

    gsap.fromTo(items, 
      { opacity: 0, y: 40, rotationX: -30, filter: 'blur(8px)', transformPerspective: 500 },
      { 
        opacity: 1, 
        y: 0, 
        rotationX: 0, 
        filter: 'blur(0px)',
        duration: 0.9, 
        stagger: 0.1,
        ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      }
    );
  }, [loadedCounters]);

  return (
    <section ref={sectionRef} className="w-full font-inter relative z-10 -mt-6 mb-8 perspective-1000">
      {/* Decorative Left Leaf */}
      {leafLeft && (
        <img 
          src={getImgSrc(leafLeft)} 
          alt="" 
          className="absolute -left-12 -top-10 md:-top-16 lg:-top-24 h-48 md:h-72 lg:h-[400px] w-auto opacity-100 pointer-events-none -z-10 object-contain"
        />
      )}
      <SectionContainer>
        <div 
          className="w-full py-2 md:py-3 px-2 lg:px-6 bg-white flex flex-wrap lg:flex-nowrap justify-between items-center"
          style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px', borderRadius: '12px' }}
        >
          {loadedCounters.map((stat, index) => {
            const { val, suffix } = parseNumberStr(stat.number);
            const iconSrc = stat.image || (iconMap[stat.iconKey] || gal1);

            return (
              <React.Fragment key={stat._id || index}>
                <div className="stat-item flex flex-row items-center group gap-3 w-1/2 md:w-1/3 lg:w-auto px-2 py-1 justify-center lg:justify-start" style={{ willChange: 'transform, opacity, filter' }}>
                  <img src={getImgSrc(iconSrc)} alt="" className="w-12 h-12 lg:w-12 lg:h-16 object-contain group-hover:scale-110 transition-transform duration-300 shrink-0" />
                  <div className="text-left flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#1b5e20] mb-0.5 tracking-tight leading-none">
                      <CountUp endValue={val} suffix={suffix} />
                    </h3>
                    <p className="text-[11px] md:text-[13px] text-[#4B1426] font-semibold leading-[1.3] whitespace-pre-line mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                </div>
                {/* Divider for desktop */}
                {index !== loadedCounters.length - 1 && (
                  <div className="stat-item hidden lg:block w-[1px] h-10 bg-gray-400 shrink-0 mx-2 xl:mx-4"></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
};

export default Counters;
