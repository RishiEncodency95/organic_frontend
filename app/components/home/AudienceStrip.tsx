"use client";
import React, { useEffect, useRef } from 'react';

const items = [
  {
    label: "HEALTHCARE",
    label2: "LEADERS",
    anim: "rise",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
        <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/>
        <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/>
        <circle cx="20" cy="10" r="2"/>
      </svg>
    ),
  },
  {
    label: "GOVERNMENT",
    label2: "BODIES",
    anim: "drop",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
        <line x1="3" y1="22" x2="21" y2="22"/>
        <line x1="6" y1="18" x2="6" y2="11"/>
        <line x1="10" y1="18" x2="10" y2="11"/>
        <line x1="14" y1="18" x2="14" y2="11"/>
        <line x1="18" y1="18" x2="18" y2="11"/>
        <polygon points="12 2 20 7 4 7"/>
      </svg>
    ),
  },
  {
    label: "AYUSH",
    label2: "INDUSTRY",
    anim: "left",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
      </svg>
    ),
  },
  {
    label: "INTERNATIONAL",
    label2: "BUYERS",
    anim: "right",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    label: "HOSPITAL & CLINIC",
    label2: "PROCUREMENT TEAMS",
    anim: "zoom",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    label: "UNIVERSITY/",
    label2: "ACADEMIC PARTNERS",
    anim: "flip",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:14,height:14}}>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
];

const delays = [0, 280, 520, 760, 1000, 1240];
const bgColor = '#00291b';

const animStyles = `
  @keyframes tb-rise {
    0%   { opacity: 0; transform: translateY(42px) scale(0.96); }
    60%  { opacity: 1; }
    100% { opacity: 1; transform: translateY(0px) scale(1); }
  }
  @keyframes tb-drop {
    0%   { opacity: 0; transform: translateY(-42px) scale(0.96); }
    60%  { opacity: 1; }
    100% { opacity: 1; transform: translateY(0px) scale(1); }
  }
  @keyframes tb-left {
    0%   { opacity: 0; transform: translateX(-48px) scale(0.95); }
    60%  { opacity: 1; }
    100% { opacity: 1; transform: translateX(0px) scale(1); }
  }
  @keyframes tb-right {
    0%   { opacity: 0; transform: translateX(48px) scale(0.95); }
    60%  { opacity: 1; }
    100% { opacity: 1; transform: translateX(0px) scale(1); }
  }
  @keyframes tb-zoom {
    0%   { opacity: 0; transform: scale(0.4) rotate(-6deg); }
    70%  { opacity: 1; transform: scale(1.06) rotate(1deg); }
    100% { opacity: 1; transform: scale(1) rotate(0deg); }
  }
  @keyframes tb-flip {
    0%   { opacity: 0; transform: rotateY(110deg) scale(0.9); }
    65%  { opacity: 1; }
    100% { opacity: 1; transform: rotateY(0deg) scale(1); }
  }

  .tb-anim-rise  { animation: tb-rise  1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .tb-anim-drop  { animation: tb-drop  1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .tb-anim-left  { animation: tb-left  1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .tb-anim-right { animation: tb-right 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .tb-anim-zoom  { animation: tb-zoom  1.3s cubic-bezier(0.34, 1.4, 0.64, 1) forwards; }
  .tb-anim-flip  { animation: tb-flip  1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; transform-style: preserve-3d; }

  .tb-icon-wrap {
    transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1),
                box-shadow 0.45s ease;
  }
  .tb-item-group:hover .tb-icon-wrap {
    transform: scale(1.22) rotate(-10deg);
    box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  }
  .tb-label-wrap {
    transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .tb-item-group:hover .tb-label-wrap {
    transform: translateX(3px);
  }
`;

const AudienceStrip = () => {
  const rootRef = useRef(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const animatedRef = useRef(false);

  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = animStyles;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  useEffect(() => {
    const trigger = () => {
      if (animatedRef.current) return;
      animatedRef.current = true;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const cls = `tb-anim-${items[i].anim}`;
        setTimeout(() => el.classList.add(cls), delays[i]);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) trigger(); },
      { threshold: 0.25 }
    );

    if (rootRef.current) observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative z-40 w-full py-2 md:py-1 border-y border-white/5 shadow-xl"
      style={{ backgroundColor: bgColor }}
    >
      <div className="container mx-auto px-4 sm:px-6">

        {/* Grid Items */}
        <div className="flex items-center justify-center w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:flex xl:flex-nowrap items-center justify-center gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-2 w-full font-inter">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-start sm:justify-center xl:justify-start"
              >
                <div
                  ref={(el) => { itemRefs.current[i] = el; }}
                  className="tb-item-group flex items-center gap-2 md:gap-2.5 group cursor-default"
                  style={{ opacity: 0 }}
                >
                  <div className="tb-icon-wrap w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 shadow-md bg-white">
                    {item.icon}
                  </div>
                  <div className="tb-label-wrap flex flex-col min-w-0">
                    <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-tight text-white leading-tight break-words">
                      {item.label}
                    </p>
                    <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-tight text-white/70 leading-tight break-words">
                      {item.label2}
                    </p>
                  </div>
                </div>

                {i < items.length - 1 && (
                  <div className="hidden xl:block w-px h-5 bg-white/10 flex-shrink-0 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AudienceStrip;
