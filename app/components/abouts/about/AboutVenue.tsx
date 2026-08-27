import React from 'react';
import Image from 'next/image';
import pragatiMaidanImg from './pragati_maidan.png';
import SectionContainer from '@/app/components/layout/SectionContainer';

const venueFeatures = [
  {
    color: "#d26019",
    bg: "#fff3eb",
    text: "India's premier international exhibition & convention venue with world-class facilities",
    icon: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></>
  },
  {
    color: "#23471d",
    bg: "#edf7ed",
    text: "Excellent connectivity via dedicated Metro, International Airport & Central Delhi hubs",
    icon: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>
  },
  {
    color: "#d26019",
    bg: "#fff3eb",
    text: "State-of-the-art infrastructure featuring modern air-conditioned exhibition hall space",
    icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></>
  },
  {
    color: "#23471d",
    bg: "#edf7ed",
    text: "Preferred global destination for high-profile trade fairs, congresses & mega exhibitions",
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>
  },
  {
    color: "#d26019",
    bg: "#fff3eb",
    text: "Strategically located close to key government ministries, foreign embassies & institutions",
    icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>
  },
  {
    color: "#23471d",
    bg: "#edf7ed",
    text: "A perfect business-centric environment designed for global networking & deal-making",
    icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  }
];

const AboutVenue = () => {
  return (
    <section className="pt-6 pb-8 bg-white border-t border-gray-100 font-inter">
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* LEFT - Venue Image */}
          <div className="relative overflow-hidden group rounded-xl shadow-md border border-gray-200">
            <div className="relative w-full h-[260px] md:h-[340px]">
              <Image
                src={pragatiMaidanImg}
                alt="Pragati Maidan, New Delhi"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />

            {/* Hall Badge */}
            <span className="absolute top-4 right-4 bg-[#d26019] text-white text-[10px] font-semibold uppercase tracking-[0.15em] px-[12px] py-[6px] rounded-[5px] z-10">
              Hall 12
            </span>

            {/* Location Badge */}
            <div className="absolute bottom-4 left-4 bg-white/95 px-[14px] py-2 rounded-lg flex items-center gap-2 z-10 shadow-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="#d26019" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px] shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-[#1a2e1a] font-semibold text-[11px] uppercase tracking-[0.1em]">
                Pragati Maidan, New Delhi
              </p>
            </div>
          </div>

          {/* RIGHT - Content */}
          <div>
            <p className="flex items-center gap-2 text-[#d26019] font-bold text-[14px] md:text-[13px] uppercase tracking-[0.22em] mb-2 md:mb-3">
              <span className="inline-block w-6 h-[1.5px] bg-[#d26019]" />
              OUR VENUE
              <span className="inline-block w-6 h-[1.5px] bg-[#d26019]" />
            </p>

            <h2
              className="font-semibold text-[24px] md:text-[30px] text-[#23471d] leading-[1.25] mb-0 font-poppins"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
            >
              Why Pragati Maidan, New Delhi?
            </h2>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 md:gap-y-5 mt-6">
              {venueFeatures.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: item.bg,
                      border: `1.8px solid ${item.color}`,
                    }}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={item.color}
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-[17px] h-[17px]">
                      {item.icon}
                    </svg>
                  </div>
                  <p className="text-[#2a2a2a] text-[12.5px] leading-[1.6] font-semibold">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </SectionContainer>
    </section>
  );
};

export default AboutVenue;
