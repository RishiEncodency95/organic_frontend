import React from 'react';
import { Globe, GraduationCap, Trophy, Handshake } from 'lucide-react';
import Image from 'next/image';
import intlExhibImg from '@/app/assets/about/international_Exhibition.png';
import confKnowledgeImg from '@/app/assets/about/conference_knowledge.png';
import globalExcellenceImg from '@/app/assets/about/global_excellence.png';
import b2bImg from '@/app/assets/about/B2B.png';

const pillars = [
  {
    title: "INTERNATIONAL EXHIBITION",
    description: "Spanning 40,000+ sq ft across three halls, featuring 200+ exhibitors from 8 key sectors including Medical, AYUSH, Wellness, and Digital Health. Witness live demos, finalize deals, and explore global innovations in dedicated country pavilions for specialized high-level networking and business growth.",
    color: "#2563eb", // Blue
    icon: <Globe size={22} className="text-white" />,
    imageBg: "bg-[#e0e7ff]/30", // Light Blue placeholder
    image: intlExhibImg
  },
  {
    title: "CONFERENCE & KNOWLEDGE SUMMIT",
    description: "The 18th Edition, Arogya Sangoshthi, offers 30+ insightful sessions over 3 days, with 150+ distinguished speakers including government officials and industry CEOs. Explore critical discussions across 6 thematic tracks, attracting 2,000+ delegates for knowledge exchange and policy dialogue.",
    color: "#16a34a", // Green
    icon: <GraduationCap size={22} className="text-white" />,
    imageBg: "bg-[#dcfce7]/30", // Light Green placeholder
    image: confKnowledgeImg
  },
  {
    title: "GLOBAL EXCELLENCE AWARDS",
    description: "Our prestigious 3rd Edition program, a formal evening ceremony on Day 2, recognizes ground breaking achievements and fosters brand authority. Categories include Best Healthcare Innovation, Excellence in AYUSH, and Wellness Entrepreneur of the Year, acknowledging pioneering start ups and influential industry leaders.",
    color: "#ea580c", // Orange
    icon: <Trophy size={22} className="text-white" />,
    imageBg: "bg-[#ffedd5]/30", // Light Orange placeholder
    image: globalExcellenceImg
  },
  {
    title: "B2B BUYER-SELLER MEET",
    description: "Designed to forge powerful partnerships and drive global commerce, this pillar facilitates pre-scheduled 1-on-1 meetings within dedicated business lounges. We host international buyer delegations from key markets, offering professional matchmaking services with a target of 500+ impactful B2B meetings.",
    color: "#9333ea", // Purple
    icon: <Handshake size={22} className="text-white" />,
    imageBg: "bg-[#f3e8ff]/30", // Light Purple placeholder
    image: b2bImg
  }
];

const FourPillars = () => {
  return (
    <section className="w-full bg-white py-2 md:py-4 lg:py-4">
      <div className="w-full px-4 md:px-11">
        <h3 className="text-center text-[22px] md:text-[26px] lg:text-[30px] font-semibold text-[#113d29] leading-[1.2] py-4 mb-3">
          One Platform. Four Powerful Pillars.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-4">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-white rounded-[24px] overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 transform-gpu"
              style={{ borderColor: pillar.color, borderWidth: '1px', borderBottomWidth: '6px' }}
            >
              {/* Glass Shine Hover Effect */}
              <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-[24px]">
                <div className="absolute top-0 -left-[150%] w-[150%] h-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-[1200ms] ease-in-out"></div>
              </div>

              {/* Image Placeholder or Actual Image */}
              <div className={`w-full h-[160px] md:h-[180px] ${pillar.imageBg} relative overflow-hidden`}>
                {pillar.image && (
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                )}
              </div>

              {/* Icon overlapping image */}
              <div
                className="absolute top-[160px] md:top-[180px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center border-[4px] border-white z-10 shadow-sm"
                style={{ backgroundColor: pillar.color }}
              >
                {pillar.icon}
              </div>

              {/* Content */}
              <div className={`pt-8 pb-4 px-4 flex flex-col flex-1 ${pillar.imageBg}`}>
                <h3
                  className="text-[18px] md:text-[20px] font-bold uppercase tracking-wide leading-[1.3] mb-3 text-center"
                  style={{ color: pillar.color }}
                >
                  {pillar.title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-gray-600 leading-[1.6] text-justify">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourPillars;
