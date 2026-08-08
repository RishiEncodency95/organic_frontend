import React from 'react';
import { Globe, GraduationCap, Trophy, Handshake } from 'lucide-react';

const pillars = [
  {
    title: "INTERNATIONAL EXHIBITION",
    description: "Spanning 40,000+ sq ft across three halls, featuring 200+ exhibitors from 8 key sectors including Medical, AYUSH, Wellness, and Digital Health. Witness live demos, finalize deals, and explore global innovations in dedicated country pavilions for specialized high-level networking and business growth.",
    color: "#2563eb", // Blue
    icon: <Globe size={22} className="text-white" />,
    imageBg: "bg-[#e0e7ff]" // Light Blue placeholder
  },
  {
    title: "CONFERENCE & KNOWLEDGE SUMMIT",
    description: "The 18th Edition, Arogya Sangoshthi, offers 30+ insightful sessions over 3 days, with 150+ distinguished speakers including government officials and industry CEOs. Explore critical discussions across 6 thematic tracks, attracting 2,000+ delegates for knowledge exchange and policy dialogue.",
    color: "#16a34a", // Green
    icon: <GraduationCap size={22} className="text-white" />,
    imageBg: "bg-[#dcfce7]" // Light Green placeholder
  },
  {
    title: "GLOBAL EXCELLENCE AWARDS",
    description: "Our prestigious 3rd Edition program, a formal evening ceremony on Day 2, recognizes ground breaking achievements and fosters brand authority. Categories include Best Healthcare Innovation, Excellence in AYUSH, and Wellness Entrepreneur of the Year, acknowledging pioneering start ups and influential industry leaders.",
    color: "#ea580c", // Orange
    icon: <Trophy size={22} className="text-white" />,
    imageBg: "bg-[#ffedd5]" // Light Orange placeholder
  },
  {
    title: "B2B BUYER-SELLER MEET",
    description: "Designed to forge powerful partnerships and drive global commerce, this pillar facilitates pre-scheduled 1-on-1 meetings within dedicated business lounges. We host international buyer delegations from key markets, offering professional matchmaking services with a target of 500+ impactful B2B meetings.",
    color: "#9333ea", // Purple
    icon: <Handshake size={22} className="text-white" />,
    imageBg: "bg-[#f3e8ff]" // Light Purple placeholder
  }
];

const FourPillars = () => {
  return (
    <section className="w-full bg-white py-2 md:py-4">
      <div className="w-full px-4 md:px-11 xl:px-11">
        <h2 className="text-center text-[16px] md:text-[20px] lg:text-[20px] font-semibold text-[#113d29] uppercase tracking-[0.1em] mb-4">
          ONE PLATFORM. FOUR POWERFUL PILLARS.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-3">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="relative flex flex-col bg-white rounded-[24px] overflow-hidden hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
              style={{ borderColor: pillar.color, borderWidth: '1px' }}
            >
              {/* Image Placeholder (Add Image component here later) */}
              <div className={`w-full h-[160px] md:h-[180px] ${pillar.imageBg} relative`}>

              </div>

              {/* Icon overlapping image */}
              <div
                className="absolute top-[160px] md:top-[180px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center border-[4px] border-white z-10 shadow-sm"
                style={{ backgroundColor: pillar.color }}
              >
                {pillar.icon}
              </div>

              {/* Content */}
              <div className="pt-8 pb-2 px-6 flex flex-col items-center text-center flex-1">
                 <h3
                  className="text-[13px] md:text-[14px] font-bold uppercase tracking-wide leading-snug mb-4 max-w-[80%]"
                  style={{ color: pillar.color }}
                >
                  {pillar.title}
                </h3>
                <p className="text-[12px] md:text-[13px] text-gray-600 leading-[1.6] text-center">
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
