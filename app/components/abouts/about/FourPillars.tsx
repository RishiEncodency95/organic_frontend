import React from 'react';
import { Globe, GraduationCap, Trophy, Handshake } from 'lucide-react';
import Image from 'next/image';
import intlExhibImg from '@/app/assets/about/international_Exhibition.png';
import confKnowledgeImg from '@/app/assets/about/conference_knowledge.png';
import globalExcellenceImg from '@/app/assets/about/global_excellence.png';
import b2bImg from '@/app/assets/about/B2B.png';
import SectionContainer from '@/app/components/layout/SectionContainer';

const pillars = [
  {
    title: ["INTERNATIONAL", "EXHIBITION"],
    themeColor: "#1e40af",
    desc: "Spanning 40,000+ sq ft across three halls, featuring 200+ exhibitors from 8 key sectors including Medical, AYUSH, Wellness, and Digital Health. Witness live demos, finalize deals, and explore global innovations in dedicated country pavilions for specialized high-level networking and business growth.",
    icon: <Globe className="w-5 h-5 text-white" />,
    img: intlExhibImg,
  },
  {
    title: ["CONFERENCE &", "KNOWLEDGE SUMMIT"],
    themeColor: "#16a34a",
    desc: "The 18th Edition, Arogya Sangoshthi, offers 30+ insightful sessions over 3 days, with 150+ distinguished speakers including government officials and industry CEOs. Explore critical discussions across 6 thematic tracks, attracting 2,000+ delegates for knowledge exchange and policy dialogue.",
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    img: confKnowledgeImg,
  },
  {
    title: ["GLOBAL EXCELLENCE", "AWARDS"],
    themeColor: "#d97706",
    desc: "Our prestigious 3rd Edition program, a formal evening ceremony on Day 2, recognizes ground breaking achievements and fosters brand authority. Categories include Best Healthcare Innovation, Excellence in AYUSH, and Wellness Entrepreneur of the Year, acknowledging pioneering start ups and influential industry leaders.",
    icon: <Trophy className="w-5 h-5 text-white" />,
    img: globalExcellenceImg,
  },
  {
    title: ["B2B BUYER-SELLER", "MEET"],
    themeColor: "#7c3aed",
    desc: "Designed to forge powerful partnerships and drive global commerce, this pillar facilitates pre-scheduled 1-on-1 meetings within dedicated business lounges. We host international buyer delegations from key markets, offering professional matchmaking services with a target of 500+ impactful B2B meetings.",
    icon: <Handshake className="w-5 h-5 text-white" />,
    img: b2bImg,
  },
];

const FourPillars = () => {
  return (
    <section className="pt-4 pb-6 bg-white border-t border-gray-100 font-inter">
      <SectionContainer>
        <div className="text-center mb-4">
          <h2 className="font-bold text-[18px] text-[#23471d] uppercase tracking-[0.2em]">
            ONE PLATFORM. FOUR POWERFUL PILLARS.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-white border-[1.5px] rounded-[1.25rem] flex flex-col group transition-all duration-300 hover:shadow-xl relative"
              style={{ borderColor: `${pillar.themeColor}55` }}
            >
              {/* Image Area - Minimized gap from border */}
              <div className="p-[4px]">
                <div className="relative h-[160px] overflow-hidden rounded-[1rem]">
                  <Image
                    src={pillar.img}
                    alt={pillar.title.join(" ")}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>

              {/* Overlapping Icon */}
              <div
                className="absolute top-[137px] left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-[3px] border-white flex items-center justify-center shadow-md z-30 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: pillar.themeColor }}
              >
                {pillar.icon}
              </div>

              {/* Content Area */}
              <div className="pt-6 pb-3 px-5 text-center flex flex-col flex-1">
                <h3
                  className="font-extrabold text-[13px] leading-[1.3] uppercase tracking-wide mb-4 flex flex-col items-center justify-center"
                  style={{ color: pillar.themeColor }}
                >
                  <span>{pillar.title[0]}</span>
                  <span>{pillar.title[1]}</span>
                </h3>
                <p className="text-gray-600 text-[11px] leading-relaxed font-medium text-justify">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default FourPillars;
