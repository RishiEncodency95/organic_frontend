"use client";

import { useState, useEffect } from "react";
import { trackCareer } from "@/lib/careerTracking";
import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  ChartColumnIncreasing,
  Clock3,
  Globe2,
  Handshake,
  MapPin,
  Megaphone,
  Monitor,
  Sprout,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import JobCardButtons from "./JobCardButtons";
import { toCareerJob, type CareerJob } from "./careerFlow";
import leafA from "@/app/assets/icons/bleaf.png";
import leafB from "@/app/assets/icons/cleaf.png";
import leafC from "@/app/assets/icons/dleaf.png";
import lifeExpo from "@/app/assets/home/industry.webp";
import lifeTeam from "@/app/assets/participate/msme/how_to_apply2.png";
import lifeHall from "@/app/assets/home/homeIntro.png";
import lifeWellness from "@/app/assets/exhibition-categories/ayush-ayurveda-herba/wellnness.png";
import lifeOrganic from "@/app/assets/image/11og.webp";
import goldLeaf from "@/app/assets/icons/footer-leaf.png";

const heroImage = "/assets/careers/image.png";

type JobOpening = CareerJob;

const HIGHLIGHT_ICONS: LucideIcon[] = [Sprout, Users, TrendingUp, Globe2];
type GlyphProps = { className?: string; style?: React.CSSProperties };
const LeafGlyph = (p: GlyphProps) => (
  <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M27.5 4.5c-9.6-.4-17.4 2.6-20.6 9.2-1.7 3.5-1.5 7.2.3 10.2L4.6 26.5l1.5 1.5 2.6-2.6c3 1.8 6.7 2 10.2.3 6.6-3.2 9.6-11 9.2-20.6-.1-.3-.3-.5-.6-.6Zm-6.3 6.3-9.9 9.9-1.4-1.4 9.9-9.9 1.4 1.4Z" />
  </svg>
);
const TeamGlyph = (p: GlyphProps) => (
  <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...p}>
    <circle cx="16" cy="9.5" r="4.6" />
    <circle cx="7.4" cy="11.6" r="3.4" />
    <circle cx="24.6" cy="11.6" r="3.4" />
    <path d="M8.6 26.5v-3.2c0-4.1 3.3-7.4 7.4-7.4s7.4 3.3 7.4 7.4v3.2H8.6Z" />
    <path d="M6.9 17.1c-3 .3-5.4 2.8-5.4 5.9v2.6h5.4v-2.3c0-2.4.8-4.6 2.2-6.2h-2.2ZM25.1 17.1h-2.2c1.4 1.6 2.2 3.8 2.2 6.2v2.3h5.4V23c0-3.1-2.4-5.6-5.4-5.9Z" />
  </svg>
);
const GrowthGlyph = (p: GlyphProps) => (
  <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...p}>
    <rect x="4" y="19" width="5.5" height="9" rx="1" />
    <rect x="13.2" y="14" width="5.5" height="14" rx="1" />
    <rect x="22.4" y="8" width="5.5" height="20" rx="1" />
    <path d="M3.4 14.6 11 8.2l4.4 3.4 7.8-7.1-2.4-.1.1-2.1 6 .3-.3 6-2.1-.1.1-2.4-9.1 8.3-4.4-3.4-6.5 5.5-1.2-1.9Z" />
  </svg>
);
const HeartGlyph = (p: GlyphProps) => (
  <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M16 28.2 13.9 26.3C6.5 19.6 1.6 15.2 1.6 9.7 1.6 5.3 5 1.9 9.4 1.9c2.5 0 4.9 1.2 6.6 3 1.7-1.8 4.1-3 6.6-3 4.4 0 7.8 3.4 7.8 7.8 0 5.5-4.9 9.9-12.3 16.6L16 28.2Z" />
  </svg>
);
const WORK_REASON_GLYPHS = [LeafGlyph, TeamGlyph, GrowthGlyph, HeartGlyph];

// Defaults for the admin-editable sections (Pages & CMS > Careers).
const DEFAULT_CAREERS = {
  hero: {
    enabled: true,
    eyebrow: "CAREER",
    title: "Be Part of Something Bigger",
    description:
      "Build your career with Bharat Organic Expo and contribute to a sustainable, healthier and more conscious tomorrow.",
    badgeText: "Join the people who connect business, nature and a better tomorrow.",
    image: heroImage,
    imageAlt: "Professionals networking at a sustainable organic expo",
    items: ["Meaningful Work", "Collaborative Team", "Growth Opportunities", "Real Impact"],
  },
  openings: {
    enabled: true,
    eyebrow: "Current Job Openings",
    title: "Join Our Team",
    quote: "Together, we can create a healthier, happier tomorrow.",
    emptyTitle: "No open positions at the moment",
    emptyDescription:
      "We are not hiring for any specific roles right now. But we are always on the lookout for passionate individuals who want to make a difference.",
    emptyNote: "We will keep your profile on file and reach out when a suitable opportunity arises.",
  },
  whyWork: {
    enabled: true,
    eyebrow: "Why Work With Bharat Organic Expo",
    title: "Build a Career.\nShape a Greener Future.",
    description:
      "At Bharat Organic Expo, you will be part of a dynamic and purpose-driven team working towards a more sustainable world through organic business, knowledge sharing and global collaboration.",
    items: [
      { title: "Purpose-Driven Work", description: "Contribute to a healthier and greener planet." },
      { title: "Dynamic Team", description: "Work with experienced professionals." },
      { title: "Learning & Growth", description: "Enhance your skills and advance your career." },
      { title: "Positive Impact", description: "Be part of a mission that matters." },
    ],
  },
  life: {
    enabled: true,
    eyebrow: "Life at Bharat Organic Expo",
    title: "Work in a Culture of Care and Collaboration",
    description:
      "Experience a vibrant, collaborative and purpose-driven work environment at one of India's leading platforms for the organic and sustainable industry.",
    photos: [
      { src: lifeExpo, alt: "Visitors at the Bharat Organic Expo pavilion" },
      { src: lifeTeam, alt: "The Bharat Organic Expo team at work" },
      { src: lifeHall, alt: "Busy aisles of the expo hall" },
      { src: lifeWellness, alt: "Wellness and meditation" },
      { src: lifeOrganic, alt: "Fresh organic produce" },
    ],
  },
  bottomBanner: {
    enabled: true,
    image: "/assets/careers/aman6.png",
    imageAlt: "Don't see the right role? We are always looking for passionate individuals.",
  },
};

const pickText = (value: unknown, fallback: string) =>
  typeof value === "string" && value.trim() ? value.trim() : fallback;

const pickItems = (items: unknown, fallback: string[]) => {
  const titles = Array.isArray(items)
    ? items.map((it: any) => (typeof it?.title === "string" ? it.title.trim() : "")).filter(Boolean)
    : [];
  return titles.length ? titles : fallback;
};

// Text the admin saved before the current design. While a field still holds one of these, the
// page shows the new design's copy; anything else the admin writes is shown as written.
const LEGACY_TEXT = new Set([
  "Current Openings",
  "Explore exciting opportunities and find the right role for you.",
  "Why Work With Us?",
  "At Bharat Organic Expo, you’ll grow with a purpose-driven team and be part of a movement that creates lasting change.",
]);
const LEGACY_WHY_ITEMS = "Purpose-Driven Work|Inclusive Environment|Learn from Industry Experts|Be Part of a Global Platform";

const pickNew = (value: unknown, fallback: string) => {
  const text = pickText(value, fallback);
  return LEGACY_TEXT.has(text) ? fallback : text;
};

const pickWhyItems = (items: unknown, fallback: { title: string; description: string }[]) => {
  const list = Array.isArray(items)
    ? (items as { title?: unknown; description?: unknown }[])
        .map((it) => ({
          title: typeof it?.title === "string" ? it.title.trim() : "",
          description: typeof it?.description === "string" ? it.description.trim() : "",
        }))
        .filter((it) => it.title)
    : [];
  if (!list.length || list.map((it) => it.title).join("|") === LEGACY_WHY_ITEMS) return fallback;
  return list;
};

/** Two-line icon labels: "Learn from Industry Experts" -> "Learn from\nIndustry Experts". */
const twoLineLabel = (label: string) => {
  const words = label.split(/\s+/);
  if (words.length < 2) return label;
  const half = Math.ceil(words.length / 2);
  return `${words.slice(0, half).join(" ")}\n${words.slice(half).join(" ")}`;
};

/** "Be Part of Something Bigger" -> ["Be Part of", "Something", "Bigger"] (last word is orange). */
const splitHeroTitle = (title: string): [string, string, string] => {
  const words = title.trim().split(/\s+/);
  if (words.length < 3) return ["", words.slice(0, -1).join(" "), words[words.length - 1] || ""];
  return [words.slice(0, -2).join(" "), words[words.length - 2], words[words.length - 1]];
};

function resolveCareersSections(sections: any[] = []) {
  const find = (key: string) => sections.find((sec) => sec?.key === key) || {};
  const hero = find("careers-hero");
  const openings = find("careers-openings");
  const whyWork = find("careers-why-work");
  const life = find("careers-life");
  const bottom = find("careers-bottom-banner");
  const d = DEFAULT_CAREERS;
  return {
    hero: {
      enabled: hero.enabled !== false,
      eyebrow: pickText(hero.eyebrow, d.hero.eyebrow),
      title: pickText(hero.title, d.hero.title),
      description: pickText(hero.description, d.hero.description),
      badgeText: pickText(hero.badgeText, d.hero.badgeText),
      image: pickText(hero.image, d.hero.image),
      imageAlt: pickText(hero.imageAlt, d.hero.imageAlt),
      items: pickItems(hero.items, d.hero.items),
    },
    openings: {
      enabled: openings.enabled !== false,
      eyebrow: pickText(openings.eyebrow, d.openings.eyebrow),
      title: pickNew(openings.title, d.openings.title),
      quote: pickNew(openings.quote ?? openings.description, d.openings.quote),
      emptyTitle: pickText(openings.emptyTitle, d.openings.emptyTitle),
      emptyDescription: pickText(openings.emptyDescription, d.openings.emptyDescription),
      emptyNote: pickText(openings.emptyNote, d.openings.emptyNote),
    },
    whyWork: {
      enabled: whyWork.enabled !== false,
      eyebrow: pickText(whyWork.eyebrow, d.whyWork.eyebrow),
      title: pickNew(whyWork.title, d.whyWork.title),
      description: pickNew(whyWork.description, d.whyWork.description),
      items: pickWhyItems(whyWork.items, d.whyWork.items),
    },
    life: {
      enabled: life.enabled !== false,
      eyebrow: pickText(life.eyebrow, d.life.eyebrow),
      title: pickText(life.title, d.life.title),
      description: pickText(life.description, d.life.description),
      photos: d.life.photos,
    },
    bottomBanner: {
      enabled: bottom.enabled !== false,
      image: pickText(bottom.image, d.bottomBanner.image),
      imageAlt: pickText(bottom.imageAlt, d.bottomBanner.imageAlt),
    },
  };
}

/** Line icon for a job card, picked from the department / title */
function JobIcon({ job }: { job: JobOpening }) {
  const text = `${job.department} ${job.title}`.toLowerCase();
  const props = { className: "h-[27px] w-[27px]", strokeWidth: 1.9 };
  if (/market|digital|social|brand|content/.test(text)) return <Monitor {...props} />;
  if (/event|operation|logistic/.test(text)) return <CalendarDays {...props} />;
  if (/exhibit|partner|sponsor|relation/.test(text)) return <Handshake {...props} />;
  if (/sales|business|growth/.test(text)) return <ChartColumnIncreasing {...props} />;
  if (/tech|\bit\b|developer|software|engineer/.test(text)) return <Monitor {...props} />;
  if (/media|\bpr\b|communication/.test(text)) return <Megaphone {...props} />;
  return <Users {...props} />;
}

const GOLD = "#C98A22";
// Headings use Playfair; set inline because the global h1–h6 font rule outranks utility classes
const SERIF: React.CSSProperties = { fontFamily: "var(--font-playfair-next), Georgia, serif" };
const CREAM = "#FBF6EA";

/** Decorative leaves along the left and right edges of a section (desktop only) */
function SideLeaves({ side = "both" }: { side?: "both" | "right" }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hidden md:block">
      {side === "both" && (
        <>
          <Image src={leafC} alt="" width={96} height={266} sizes="96px" className="absolute -left-[26px] -top-[14px] w-[96px] -scale-x-100 rotate-[10deg] opacity-95" />
          <Image src={leafA} alt="" width={118} height={160} sizes="118px" className="absolute -left-[38px] top-[34%] w-[118px] -rotate-[18deg] opacity-95" />
          <Image src={leafC} alt="" width={86} height={238} sizes="86px" className="absolute -left-[30px] top-[58%] w-[86px] -scale-x-100 -rotate-[14deg] opacity-90" />
          <Image src={leafB} alt="" width={84} height={146} sizes="84px" className="absolute -left-[20px] -bottom-[18px] w-[84px] rotate-[16deg] opacity-95" />
        </>
      )}
      <Image src={leafC} alt="" width={96} height={266} sizes="96px" className="absolute -right-[24px] -top-[18px] w-[96px] -rotate-[8deg] opacity-95" />
      <Image src={leafA} alt="" width={120} height={162} sizes="120px" className="absolute -right-[40px] top-[32%] w-[120px] -scale-x-100 rotate-[14deg] opacity-95" />
      <Image src={leafC} alt="" width={86} height={238} sizes="86px" className="absolute -right-[30px] top-[56%] w-[86px] rotate-[12deg] opacity-90" />
      <Image src={leafB} alt="" width={84} height={146} sizes="84px" className="absolute -right-[18px] -bottom-[18px] w-[84px] -scale-x-100 -rotate-[10deg] opacity-95" />
    </div>
  );
}

function Eyebrow({ children, light = false, line = false }: { children: React.ReactNode; light?: boolean; line?: boolean }) {
  return (
    <p
      className={`flex items-center gap-4 text-[12.5px] font-medium uppercase tracking-[0.14em] sm:text-[13.5px] ${
        light ? "text-white/90" : "text-[#1d2a21]"
      }`}
    >
      {children}
      {line && <span className="h-[1.5px] w-[104px] sm:w-[140px]" style={{ background: GOLD }} />}
    </p>
  );
}

function JobCard({ job }: { job: JobOpening }) {

  return (
    <article className="flex flex-col gap-4 rounded-[8px] border border-[#ebe1cb] bg-[#fffdf8] p-5 shadow-[0_3px_14px_rgba(120,92,40,0.07)] transition-shadow duration-300 hover:shadow-[0_6px_22px_rgba(120,92,40,0.12)] sm:flex-row sm:items-center sm:gap-[16px] sm:px-[16px] sm:py-[12px]">
      <span className="grid h-[56px] w-[56px] shrink-0 place-items-center rounded-full border-[1.5px] border-[#c9d6c3] bg-[#fbf8ef] text-[#17603a]">
        <JobIcon job={job} />
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="font-playfair text-[18px] font-bold leading-tight text-[#13281b] sm:text-[19px]" style={SERIF}>{job.title}</h3>
        <p className="mt-[5px] line-clamp-2 max-w-[420px] text-[14px] leading-[1.38] text-[#3a4a3f]">{job.description}</p>

        <div className="mt-[8px] flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between md:flex-col md:items-start xl:flex-row xl:items-center xl:justify-between">
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-[7px] gap-y-1.5 text-[11.5px] text-[#27362b]">
            <span className="inline-flex items-center gap-[6px] whitespace-nowrap">
              <MapPin className="h-[16px] w-[16px] text-[#1b6a3c]" fill="currentColor" stroke="#fffdf8" strokeWidth={1.6} />
              {job.location}
            </span>
            <span aria-hidden="true" className="hidden text-[#b9b2a0] min-[480px]:inline md:hidden lg:inline">|</span>
            <span className="inline-flex items-center gap-[6px] whitespace-nowrap">
              <BriefcaseBusiness className="h-[16px] w-[16px] text-[#1b6a3c]" fill="currentColor" stroke="#fffdf8" strokeWidth={1.5} />
              {job.type}
            </span>
            <span aria-hidden="true" className="hidden text-[#b9b2a0] min-[480px]:inline md:hidden lg:inline">|</span>
            <span className="inline-flex items-center gap-[6px] whitespace-nowrap">
              <Clock3 className="h-[15px] w-[15px] text-[#27362b]" strokeWidth={2} />
              {job.experience}
            </span>
          </div>
          <JobCardButtons job={job} variant="gold" />
        </div>
      </div>
    </article>
  );
}

function EmptyOpenings({ title, description, note }: { title: string; description: string; note: string }) {
  return (
    <div className="flex flex-col items-start gap-5 rounded-[8px] border border-[#ebe1cb] bg-[#fffdf8] p-6 shadow-[0_3px_14px_rgba(120,92,40,0.07)] sm:flex-row sm:items-center sm:gap-7 sm:p-8">
      <span className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full border-[1.5px] border-[#c9d6c3] bg-[#fbf8ef] text-[#17603a]">
        <BriefcaseBusiness className="h-[34px] w-[34px]" strokeWidth={1.8} />
      </span>
      <div>
        <h3 className="font-playfair text-[22px] font-bold leading-tight text-[#13281b]" style={SERIF}>{title}</h3>
        <p className="mt-2 max-w-[760px] text-[15px] leading-relaxed text-[#3a4a3f]">{description}</p>
        <p className="mt-2 text-[14px] leading-relaxed text-[#5b6a5f]">{note}</p>
      </div>
    </div>
  );
}

export default function CareersClientContent({ sections }: { sections?: any[] }) {
  const content = resolveCareersSections(sections);
  const [heroLead, heroMid, heroAccent] = splitHeroTitle(content.hero.title);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [fetchedJobs, setFetchedJobs] = useState<JobOpening[]>([]);

  // One careers page view for the admin Careers Dashboard
  useEffect(() => {
    trackCareer("page_view");
  }, []);

  useEffect(() => {
    fetch("/api/careers/jobs")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.success && Array.isArray(data.data) && data.data.length > 0) {
          const mappedJobs: JobOpening[] = data.data.map(toCareerJob);
          setFetchedJobs(mappedJobs);
        }
      })
      .catch((err) => {
        console.error("Failed to load jobs dynamically:", err);
      });
  }, []);

  const activeJobOpenings = fetchedJobs;
  const openingCount = activeJobOpenings.length;

  const displayedJobs = showAllJobs ? activeJobOpenings : activeJobOpenings.slice(0, 6);

  return (
    <main className="bg-[#f8fbf6] text-[#0a1831]">
      <div className="flex min-h-screen w-full flex-col bg-white">
        {/* HERO */}
        {content.hero.enabled && (
        <section className="relative isolate min-h-[330px] h-[460px] overflow-hidden md:aspect-[2110/745]">
          <Image
            src={content.hero.image}
            alt={content.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(250,253,245,.96)_0%,rgba(250,253,245,.90)_34%,rgba(250,253,245,.25)_52%,rgba(0,0,0,0)_72%)]" />

          <div className="flex h-full w-full items-center px-4 lg:px-14">
            <div className="w-[50%]">
              <div className="">
                <div className="text-[18px] mt-2 font-semibold uppercase tracking-[0.28em] text-[#0a5536]">
                  <p>{content.hero.eyebrow}</p>
                </div>
                <div className="mb-6 h-[2.5px] w-20 bg-[#0a5536]" />

                <h1 className="max-w-[750px] text-lg lg:text-6xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#07553a]">
                  {heroLead && (
                    <>
                      {heroLead}
                      <br />
                    </>
                  )}
                  <span className="whitespace-nowrap">{heroMid} <span className="text-[#f5791b]">{heroAccent}</span></span>
                </h1>

                <p className="mt-4 max-w-[650px] text-lg leading-[1.35] text-[#14253a]">
                  {content.hero.description}
                </p>

                <div className="mt-4 grid max-w-[640px] grid-cols-4 divide-x divide-[#d7e1d8]">
                  {content.hero.items.map((label, idx) => {
                    const Icon = HIGHLIGHT_ICONS[idx % HIGHLIGHT_ICONS.length];
                    return (
                    <div key={`${label}-${idx}`} className="px-3 text-center first:pl-0 last:pr-0">
                      <Icon
                        className="mx-auto h-[clamp(32px,3.4vh,42px)] w-[clamp(32px,3.4vh,42px)] text-[#08723e]"
                        strokeWidth={2.1}
                      />
                      <span className="mt-2 block whitespace-pre-line text-[clamp(12px,0.88vw,15px)] font-semibold leading-tight text-[#0c2235]">
                        {twoLineLabel(label)}
                      </span>
                    </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="absolute bottom-[6%] right-12 w-fit max-w-[440px] rounded-sm bg-[#00683e]/90 px-4 py-2 text-[14px] font-semibold leading-snug text-white backdrop-blur-[1px]">
              {content.hero.badgeText}
            </div>
          </div>
        </section>
        )}

        {/* CURRENT OPENINGS — "Join Our Team" */}
        {content.openings.enabled && (
          <section id="current-openings" className="relative isolate overflow-hidden px-4 py-7 sm:px-10 lg:pb-[22px] lg:pt-[24px]" style={{ background: CREAM }}>
            <SideLeaves />
            <div className="mx-auto max-w-[1230px]">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <Eyebrow line>{content.openings.eyebrow}</Eyebrow>
                  <h2 className="mt-1 font-playfair text-[30px] font-semibold leading-[1.1] text-[#0f3b23] sm:text-[38px]" style={SERIF}>
                    {content.openings.title}
                    {openingCount > 0 ? <span className="sr-only"> ({openingCount} openings)</span> : null}
                  </h2>
                </div>
                <figure className="flex items-center gap-4 lg:mr-[22px]">
                  <Image src={goldLeaf} alt="" width={44} height={36} sizes="44px" className="h-auto w-[40px] shrink-0 -rotate-[24deg] sm:w-[44px]" />
                  <blockquote className="max-w-[330px] font-playfair text-[17px] italic leading-[1.32] text-[#283a2c] sm:text-[19px]">
                    &ldquo;{content.openings.quote}&rdquo;
                  </blockquote>
                </figure>
              </div>

              <div className="mt-[16px]">
                {openingCount > 0 ? (
                  <div className="grid grid-cols-1 gap-[16px] md:grid-cols-2">
                    {displayedJobs.map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>
                ) : (
                  <EmptyOpenings
                    title={content.openings.emptyTitle}
                    description={content.openings.emptyDescription}
                    note={content.openings.emptyNote}
                  />
                )}
              </div>

              {openingCount > 6 ? (
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => setShowAllJobs(!showAllJobs)}
                    className="inline-flex items-center gap-2 border-b-2 pb-1 text-[14px] font-semibold uppercase tracking-[0.06em] text-[#8a5a12] transition-colors hover:text-[#6d470e]"
                    style={{ borderColor: GOLD }}
                  >
                    {showAllJobs ? "View Fewer Positions" : `View All ${openingCount} Positions`}
                    <ArrowRight className={`h-[18px] w-[18px] transition-transform duration-300 ${showAllJobs ? "-rotate-90" : ""}`} />
                  </button>
                </div>
              ) : null}
            </div>
          </section>
        )}

        {/* WHY WORK WITH US — "Build a Career. Shape a Greener Future." */}
        {content.whyWork.enabled && (
          <section
            className="relative isolate overflow-hidden px-4 py-7 sm:px-10 lg:pb-[24px] lg:pt-[24px]"
            style={{ background: "radial-gradient(ellipse 70% 90% at 50% 30%, #17592f 0%, #0f4725 60%, #0c3d1f 100%)" }}
          >
            <SideLeaves />
            <div className="mx-auto max-w-[1250px]">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-[46px]">
                <div className="lg:pl-[22px]">
                  <Eyebrow light>{content.whyWork.eyebrow}</Eyebrow>
                  <h2 className="mt-1.5 whitespace-pre-line font-playfair text-[30px] font-medium leading-[1.1] text-white sm:text-[38px]" style={SERIF}>
                    {content.whyWork.title}
                  </h2>
                  <span className="mt-3 block h-[2px] w-[46px]" style={{ background: GOLD }} />
                </div>
                <span className="hidden h-[72px] w-[1.5px] lg:block" style={{ background: GOLD }} />
                <p className="max-w-[560px] text-[15px] leading-[1.55] text-white/95 sm:text-[15.5px]">{content.whyWork.description}</p>
              </div>

              <div className="mt-[18px] grid grid-cols-1 gap-[14px] min-[480px]:grid-cols-2 lg:grid-cols-4">
                {content.whyWork.items.map((item, idx) => {
                  const Glyph = WORK_REASON_GLYPHS[idx % WORK_REASON_GLYPHS.length];
                  return (
                    <div
                      key={`${item.title}-${idx}`}
                      className="rounded-[6px] bg-[#fdfaf3] px-5 pb-[14px] pt-[14px] text-center shadow-[0_4px_14px_rgba(0,0,0,0.18)]"
                    >
                      <span className="mx-auto grid h-[52px] w-[52px] place-items-center rounded-full border-[1.5px]" style={{ borderColor: GOLD }}>
                        <Glyph className="h-[25px] w-[25px]" style={{ color: GOLD }} />
                      </span>
                      <h3 className="mt-[10px] font-playfair text-[18px] font-semibold leading-tight text-[#14281b]" style={SERIF}>{item.title}</h3>
                      {item.description ? (
                        <p className="mx-auto mt-[4px] max-w-[230px] text-[14px] leading-[1.38] text-[#3d4a40]">{item.description}</p>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* LIFE AT BHARAT ORGANIC EXPO */}
        {content.life.enabled && (
          <section className="relative isolate overflow-hidden px-4 py-7 sm:px-10 lg:pb-[24px] lg:pt-[24px]" style={{ background: CREAM }}>
            <SideLeaves side="right" />
            <div className="mx-auto max-w-[1330px]">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:px-[36px]">
                <div>
                  <Eyebrow>{content.life.eyebrow}</Eyebrow>
                  <h2 className="mt-1 font-playfair text-[26px] font-semibold leading-[1.15] text-[#0f3b23] sm:text-[34px]" style={SERIF}>{content.life.title}</h2>
                </div>
                <p className="max-w-[400px] text-[15px] leading-[1.5] text-[#33413a]">{content.life.description}</p>
              </div>

              {/* Every photo keeps its own shape (nothing is cropped). On desktop the row shares the width in
                  proportion to each photo's shape, so all of them come out the same height. */}
              <div className="mt-[14px] flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] lg:gap-[16px] lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
                {content.life.photos.map((photo, idx) => (
                  <div
                    key={idx}
                    className="relative h-[190px] shrink-0 snap-start overflow-hidden rounded-[6px] shadow-[0_4px_14px_rgba(60,45,15,0.15)] sm:h-[230px] lg:h-auto lg:min-w-0 lg:shrink lg:[flex:var(--ratio)_1_0%]"
                    style={{
                      aspectRatio: `${photo.src.width} / ${photo.src.height}`,
                      ["--ratio" as string]: String(photo.src.width / photo.src.height),
                    }}
                  >
                    <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 22vw, 300px" className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* BOTTOM BANNER — "Don't See the Right Role?" */}
        {content.bottomBanner.enabled && (
          <section className="relative h-[160px] w-full shrink-0 overflow-hidden bg-white">
            <Image
              src={content.bottomBanner.image}
              alt={content.bottomBanner.imageAlt}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </section>
        )}

      </div>
    </main>
  );
}
