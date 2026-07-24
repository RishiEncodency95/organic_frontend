import React, { useState, useEffect, useRef, cloneElement } from "react";

export const CounterItem = ({ icon, number, sup, label, sub, prefix }: any) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let start = 0;
          const step = number / (1800 / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= number) { setCount(number); clearInterval(timer); }
            else setCount(Math.floor(start));
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [number]);

  return (
    <div ref={ref} className="flex items-center gap-4 px-6 py-6 group">
      <div className="w-12 h-12 rounded-xl bg-[#f0f9f0] flex items-center justify-center shrink-0 group-hover:bg-[#3b8c2a] transition-colors duration-300 text-[#3b8c2a] group-hover:text-white">
        {cloneElement(icon, { stroke: "currentColor" })}
      </div>
      <div>
        <div className="flex items-baseline leading-none mb-1.5 gap-0.5">
          {prefix && <span style={{ color: '#e63946', fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: '1.2rem' }}>{prefix}</span>}
          <span style={{ color: '#e63946', fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: '1.75rem' }} className="tabular-nums">
            {count.toLocaleString()}
          </span>
          <span style={{ color: '#3b8c2a', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.9rem' }}>{sup}</span>
        </div>
        <p style={{ color: '#3b8c2a', fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '9.5px', letterSpacing: '0.18em' }} className="uppercase">{label}</p>
        <p style={{ color: '#000000ff', fontFamily: "'Inter', sans-serif", fontSize: '10px', marginTop: '2px' }}>{sub}</p>
      </div>
    </div>
  );
};

export const STATS = [
  {
    number: 9, sup: "th", label: "EDITION", sub: "A Decade of Excellence",
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#3b8c2a" strokeWidth="1.8"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" strokeLinecap="round" strokeLinejoin="round" /></svg>
  },
  {
    number: 1500, sup: "+", label: "EXHIBITORS", sub: "Across 8 Successful Editions",
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#3b8c2a" strokeWidth="1.8"><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" /><path d="M21 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" /></svg>
  },
  {
    number: 10, sup: "+", label: "YEARS", sub: "Legacy of Trust & Growth",
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#3b8c2a" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" /></svg>
  },
  {
    number: 500, sup: "Cr+", prefix: "₹", label: "BUSINESS OPPORTUNITIES", sub: "Generated Over the Years",
    icon: <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#3b8c2a" strokeWidth="1.8"><line x1="12" y1="1" x2="12" y2="23" strokeLinecap="round" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round" /></svg>
  },
];


export const VENUE_STATS = [
  {
    end: 1500, prefix: "", suffix: "+", label: "EXHIBITORS", iconColor: "#e63946",
    icon: (c: string) => <svg viewBox="0 0 24 24" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  },
  {
    end: 8000, prefix: "", suffix: "+", label: "VISITORS/DELEGATES", iconColor: "#3b8c2a",
    icon: (c: string) => <svg viewBox="0 0 24 24" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.87" /></svg>
  },
  {
    end: 0, prefix: "B2B", suffix: "", label: "B2B MEETINGS", iconColor: "#e63946",
    icon: (c: string) => <svg viewBox="0 0 24 24" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
  },
  {
    end: 150, prefix: "", suffix: "+", label: "SPEAKERS & EXPERTS", iconColor: "#3b8c2a",
    icon: (c: string) => <svg viewBox="0 0 24 24" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
  },
  {
    end: 10000, prefix: "", suffix: "+", label: "GLOBAL BUYERS", iconColor: "#e63946",
    icon: (c: string) => <svg viewBox="0 0 24 24" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
  },
  {
    end: 700, prefix: "₹500–", suffix: " Cr+", label: "BUSINESS OPPORTUNITIES", iconColor: "#3b8c2a",
    icon: (c: string) => <svg viewBox="0 0 24 24" fill={c} fillOpacity="0.15" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7"><path d="M6 3h12M6 8h12M14.5 21L6 13h3c3.5 0 4.5-5 0-5H6" /></svg>
  },
];

export const VenueStatItem = ({ stat, visible, delay }: { stat: typeof VENUE_STATS[0], visible: boolean, delay: number }) => {
  const [count, setCount] = useState(0);
  const animated = useRef(false);
  useEffect(() => {
    if (!visible || animated.current) return;
    const timer = setTimeout(() => {
      animated.current = true;
      let start = 0;
      const step = stat.end / (1600 / 16);
      const interval = setInterval(() => {
        start += step;
        if (start >= stat.end) { setCount(stat.end); clearInterval(interval); }
        else setCount(Math.floor(start));
      }, 16);
    }, delay);
    return () => clearTimeout(timer);
  }, [visible, stat.end, delay]);

  return (
    <div className="flex flex-col items-center text-center py-1.5 px-3">
      <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center mb-1.5" style={{ borderColor: `${stat.iconColor}40` }}>
        {stat.icon(stat.iconColor)}
      </div>
      <p className="font-black text-[15px] leading-tight" style={{ color: stat.iconColor, fontFamily: "'Inter', sans-serif" }}>
        {stat.prefix}{stat.end > 0 ? count.toLocaleString() : ""}{stat.suffix}
      </p>
      <p className="text-black text-[9px] uppercase tracking-[0.15em] font-bold mt-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>{stat.label}</p>
    </div>
  );
};

export const VenueStats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-gray-200">
        {VENUE_STATS.map((stat, i) => <VenueStatItem key={i} stat={stat} visible={visible} delay={i * 120} />)}
      </div>
    </div>
  );
};
