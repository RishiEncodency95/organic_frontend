import React from 'react';
import {
  Globe, GraduationCap, Trophy, Handshake, Users, Store, Presentation, Building2, Leaf,
  Stethoscope, Landmark, ShieldCheck, Target, TrendingUp, Award, Medal, Lightbulb, Mic,
  CalendarDays, Eye, Sprout, HeartPulse, Megaphone, UserCheck, Briefcase, Sparkles, Zap,
} from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import intlExhibImg from '@/app/assets/about/international_Exhibition.png';
import confKnowledgeImg from '@/app/assets/about/conference_knowledge.png';
import globalExcellenceImg from '@/app/assets/about/global_excellence.png';
import b2bImg from '@/app/assets/about/B2B.png';
import SectionContainer from '@/app/components/layout/SectionContainer';

const ICON_MAP: Record<string, React.ElementType> = {
  Globe, GraduationCap, Trophy, Handshake, Users, Store, Presentation, Building2, Leaf,
  Stethoscope, Landmark, ShieldCheck, Target, TrendingUp, Award, Medal, Lightbulb, Mic,
  CalendarDays, Eye, Sprout, HeartPulse, Megaphone, UserCheck, Briefcase, Sparkles, Zap,
};

// Admin has no colour/image picker per pillar, so these cycle by position when the backend leaves them empty.
const THEME_COLORS = ["#1e40af", "#16a34a", "#d97706", "#7c3aed"];
const DEFAULT_IMAGES: StaticImageData[] = [intlExhibImg, confKnowledgeImg, globalExcellenceImg, b2bImg];

interface Pillar {
  title: string;
  themeColor: string;
  desc: string;
  icon: string;
  img: string | StaticImageData;
  imgAlt: string;
}

interface FourPillarsData {
  enabled: boolean;
  title: string;
  pillars: Pillar[];
}

const DEFAULT_DATA: FourPillarsData = {
  enabled: true,
  title: "ONE PLATFORM. FOUR POWERFUL PILLARS.",
  pillars: [
    {
      title: "INTERNATIONAL EXHIBITION",
      themeColor: THEME_COLORS[0],
      desc: "Spanning 40,000+ sq ft across three halls, featuring 200+ exhibitors from 8 key sectors including Medical, AYUSH, Wellness, and Digital Health. Witness live demos, finalize deals, and explore global innovations in dedicated country pavilions for specialized high-level networking and business growth.",
      icon: "Globe",
      img: intlExhibImg,
      imgAlt: "",
    },
    {
      title: "CONFERENCE & KNOWLEDGE SUMMIT",
      themeColor: THEME_COLORS[1],
      desc: "The 18th Edition, Arogya Sangoshthi, offers 30+ insightful sessions over 3 days, with 150+ distinguished speakers including government officials and industry CEOs. Explore critical discussions across 6 thematic tracks, attracting 2,000+ delegates for knowledge exchange and policy dialogue.",
      icon: "GraduationCap",
      img: confKnowledgeImg,
      imgAlt: "",
    },
    {
      title: "GLOBAL EXCELLENCE AWARDS",
      themeColor: THEME_COLORS[2],
      desc: "Our prestigious 3rd Edition program, a formal evening ceremony on Day 2, recognizes ground breaking achievements and fosters brand authority. Categories include Best Healthcare Innovation, Excellence in AYUSH, and Wellness Entrepreneur of the Year, acknowledging pioneering start ups and influential industry leaders.",
      icon: "Trophy",
      img: globalExcellenceImg,
      imgAlt: "",
    },
    {
      title: "B2B BUYER-SELLER MEET",
      themeColor: THEME_COLORS[3],
      desc: "Designed to forge powerful partnerships and drive global commerce, this pillar facilitates pre-scheduled 1-on-1 meetings within dedicated business lounges. We host international buyer delegations from key markets, offering professional matchmaking services with a target of 500+ impactful B2B meetings.",
      icon: "Handshake",
      img: b2bImg,
      imgAlt: "",
    },
  ],
};

// Old admin placeholder photo that got saved into every pillar; it isn't a real upload.
const PLACEHOLDER_IMAGE = "moksha-sewa/assets/km.jpg";
const uploadedImage = (img: unknown): string =>
  typeof img === "string" && img.trim() && !img.includes(PLACEHOLDER_IMAGE) ? img.trim() : "";

const toFourPillarsData = (d: any): FourPillarsData => {
  const raw = Array.isArray(d?.pillars) ? d.pillars.filter((p: any) => p && (p.title || p.desc)) : [];
  const pillars: Pillar[] = raw.length
    ? raw.map((p: any, i: number) => ({
        title: Array.isArray(p.title) ? p.title.join(" ") : String(p.title || ""),
        themeColor: p.themeColor || THEME_COLORS[i % THEME_COLORS.length],
        desc: p.desc || "",
        icon: p.icon || "",
        img: uploadedImage(p.img) || DEFAULT_IMAGES[i % DEFAULT_IMAGES.length],
        imgAlt: p.imgAlt || "",
      }))
    : DEFAULT_DATA.pillars;
  return {
    enabled: d?.enabled !== false,
    title: d?.title || DEFAULT_DATA.title,
    pillars,
  };
};

const FourPillars = ({ initialData }: { initialData?: any }) => {
  const data = initialData ? toFourPillarsData(initialData) : DEFAULT_DATA;
  if (!data.enabled) return null;

  return (
    <section className="pt-4 pb-6 bg-white border-t border-gray-100 font-inter">
      <SectionContainer>
        <div className="text-center mb-5">
          <h2 
            className="font-semibold text-[18px] md:text-[22px] text-[#23471d] uppercase tracking-[0.18em] font-poppins"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
          >
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.pillars.map((pillar, i) => {
            const Icon = ICON_MAP[pillar.icon];
            return (
              <div
                key={i}
                className="bg-white border-[1.5px] rounded-[1.25rem] flex flex-col group transition-all duration-300 hover:shadow-xl relative"
                style={{ borderColor: `${pillar.themeColor}55` }}
              >
                {/* Image Area */}
                <div className="p-[4px]">
                  <div className="relative h-[160px] overflow-hidden rounded-[1rem]">
                    <Image
                      src={pillar.img}
                      alt={pillar.imgAlt || pillar.title}
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
                  {Icon && <Icon className="w-5 h-5 text-white" />}
                </div>

                {/* Content Area */}
                <div className="pt-6 pb-4 px-5 text-center flex flex-col flex-1">
                  <h3
                    className="font-semibold text-[13px] md:text-[14px] leading-[1.3] uppercase tracking-wide mb-3 flex flex-col items-center justify-center font-poppins"
                    style={{ color: pillar.themeColor }}
                  >
                    <span className="[text-wrap:balance]">{pillar.title}</span>
                  </h3>
                  <p className="text-gray-900 text-[12px] leading-[1.6] font-semibold text-justify font-inter">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
};

export default FourPillars;
