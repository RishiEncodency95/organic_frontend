"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Building2,
  BriefcaseBusiness,
  ChartColumnIncreasing,
  Check,
  ChevronRight,
  CircleCheck,
  CircleX,
  Eye,
  FileText,
  GraduationCap,
  Home,
  Info,
  Lightbulb,
  LockKeyhole,
  MapPin,
  Pencil,
  RefreshCw,
  Search,
  Settings,
  Target,
  UserRoundSearch,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { EdgeLeaves } from "../ApplyJobView";
import {
  MatchContext,
  ProfileCard,
  getMatchData,
  profileIssues,
  useMatchData,
  useResultMessages,
  type CandidateProfileData,
} from "./SubmitResume";

/*
 * Careers → AI Screening Result. One page for all three results:
 *   high (70%+): "Great News" — continue to the application
 *   moderate (50–69%): "Partial Match" — update the CV or still apply
 *   low (below 50%): "Sorry" — explore other openings
 */

type Level = "high" | "moderate" | "low";

const INK = "#13261b";
const GREEN = "#1d6b3a";
const ORANGE = "#ef7d14";
const RED = "#d3242b";
const DEFAULT_SUPPORT_EMAIL = "careers@bharatorganicexpo.com";

const scoreColor = (score: number) => (score >= 70 ? "#2f8f3a" : score >= 50 ? "#f08a1c" : "#dd2a24");

// Hero per result. The photo and the art on the right come from the design; the text is live.
const HERO: Record<
  Level,
  {
    image: string;
    alt: string;
    bg: string;
    border: string;
    /** card height as a share of its width, so the photo keeps the design's crop */
    minH: string;
    /** where the text starts / the status icon sits (share of the card width) */
    textBox: string;
    icon: string;
    titleColor: string;
    subtitleColor: string;
  }
> = {
  high: {
    image: "/assets/careers/screening-hero.png",
    alt: "Smiling team member giving a thumbs up",
    bg: "bg-[linear-gradient(100deg,#e4f2e0_0%,#edf8e9_45%,#eef7ea_100%)]",
    border: "border-[#dcebd8]",
    minH: "md:min-h-[27.1cqw]",
    textBox: "",
    icon: "",
    titleColor: "#1b4d2e",
    subtitleColor: INK,
  },
  moderate: {
    image: "/assets/careers/screening-partial-hero.png",
    alt: "Candidate thinking over her CV",
    bg: "bg-[linear-gradient(100deg,#fbefe2_0%,#fdf3e7_55%,#fdf1e2_100%)]",
    border: "border-[#f3e2cc]",
    minH: "md:min-h-[25.5cqw]",
    textBox: "md:ml-[49%] md:mr-[2%]",
    icon: "md:left-[42.4%] md:top-[9%]",
    titleColor: "#e8650f",
    subtitleColor: INK,
  },
  low: {
    image: "/assets/careers/screening-low-hero.png",
    alt: "Candidate looking disappointed at her laptop",
    bg: "bg-[linear-gradient(100deg,#fbe9e6_0%,#fceeec_55%,#fbeae8_100%)]",
    border: "border-[#f2d9d6]",
    minH: "md:min-h-[27.7cqw]",
    textBox: "md:ml-[46.5%] md:mr-[3%]",
    icon: "md:left-[38.6%] md:top-[10%]",
    titleColor: "#9b1c20",
    subtitleColor: "#9b1c20",
  },
};

const STEPS = [
  { label: "Upload CV", state: "Completed" },
  { label: "AI Analysis", state: "Completed" },
  { label: "Eligibility Result", state: "Current Step" },
  { label: "Apply for Job", state: "Next" },
];

// Two columns of the Match Breakdown, in the order of the design
const BREAKDOWN: { key: keyof NonNullable<CandidateProfileData["breakdown"]>; title: string; Icon: LucideIcon }[][] = [
  [
    { key: "relevantExperience", title: "Relevant Experience", Icon: BriefcaseBusiness },
    { key: "keySkills", title: "Key Skills", Icon: Settings },
    { key: "industryExperience", title: "Industry Experience", Icon: Users },
  ],
  [
    { key: "educationalQualification", title: "Educational Qualification", Icon: GraduationCap },
    { key: "roleFit", title: "Role Fit", Icon: Target },
    { key: "locationPreference", title: "Location Preference", Icon: MapPin },
  ],
];

/** "What You Can Do Next?" — worded for this job and what the CV was missing */
function nextSteps(candidate: CandidateProfileData): { Icon: LucideIcon; title: string; text: string }[] {
  const role = candidate.jobDetails?.title || "this role";
  const missing = candidate.breakdownNotes?.keySkills?.match(/Missing:\s*(.+)$/)?.[1];
  return [
    { Icon: GraduationCap, title: "Gain Relevant Experience", text: `Build hands-on experience in the kind of work a ${role} does.` },
    { Icon: BookOpen, title: "Build Key Skills", text: missing ? `Improve skills such as ${missing}.` : `Strengthen the key skills listed for ${role}.` },
    { Icon: Search, title: "Explore Other Opportunities", text: "Check out other open positions that match your current profile." },
  ];
}

const OPENINGS_URL = "/careers#current-openings";
const card = "rounded-[12px] border border-[#e8ece2] bg-[#fffefa] shadow-[0_4px_16px_rgba(40,60,30,0.06)]";
const greenButton =
  "flex items-center justify-center gap-[10px] rounded-[6px] bg-[#0f4d2a] font-medium text-white shadow-[0_6px_14px_rgba(15,77,42,0.25)] transition hover:bg-[#0b3d21]";

function Steps({ level }: { level: Level }) {
  const accent = level === "low" ? RED : level === "moderate" ? ORANGE : "#1d7a3e";
  return (
    <ol className="grid grid-cols-4 gap-1">
      {STEPS.map((step, idx) => {
        const current = idx === 2;
        const reached = idx < 3;
        // "Upload CV" stays a number on the high and partial results, as in the designs
        const tick = (idx === 1 && level !== "high") || (idx === 0 && level === "low");
        const line =
          idx === 0
            ? "#1d7a3e"
            : idx === 1
              ? level === "high"
                ? "#1d7a3e"
                : `linear-gradient(90deg,#1d7a3e,${accent})`
              : "#cfd8cc";
        return (
          <li key={step.label} className="relative flex flex-col items-center text-center">
            {idx < STEPS.length - 1 && <span className="absolute left-1/2 top-[13px] h-[2px] w-full" style={{ background: line }} />}
            <span
              className={`relative grid h-[26px] w-[26px] place-items-center rounded-full border-2 text-[13px] font-medium ${reached ? "text-white" : "border-[#b9c4b6] bg-white text-[#3d4a40]"}`}
              style={reached ? { background: current ? accent : "#1d7a3e", borderColor: current ? accent : "#1d7a3e" } : undefined}
            >
              {tick ? <Check className="h-[15px] w-[15px]" strokeWidth={3} /> : idx + 1}
            </span>
            <span className="mt-[2px] text-[12px] font-medium leading-tight text-[#13261b] sm:text-[13px]">{step.label}</span>
            <span className="mt-0 text-[11px] leading-tight sm:text-[11.5px]" style={{ color: current && level === "low" ? RED : "#55635a" }}>
              {step.state}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function StatusIcon({ level, className = "" }: { level: Level; className?: string }) {
  if (level === "high") return null;
  return (
    <span
      className={`grid h-[50px] w-[50px] shrink-0 place-items-center rounded-full text-white shadow-[0_4px_10px_rgba(0,0,0,0.12)] ${className}`}
      style={{ background: level === "low" ? RED : ORANGE }}
      aria-hidden="true"
    >
      {level === "low" ? <X className="h-[30px] w-[30px]" strokeWidth={3.2} /> : <span className="text-[30px] font-semibold leading-none">!</span>}
    </span>
  );
}

function SignOff() {
  return (
    <p className="mt-[6px] text-[12.5px] italic leading-[1.35] text-[#1b4d2e]">
      <span className="font-medium">— Talent Acquisition Team</span>
      <br />
      <span className="pl-[14px] font-medium">Bharat Organic Expo</span>
    </p>
  );
}

function ResultHero({ level }: { level: Level }) {
  const { current } = useMatchData();
  const look = HERO[level];

  if (level === "high") {
    // "Great News, Vijay!" → name on its own line, as in the design
    const title = current.title.replace(/,\s*/, ",\n");
    return (
      <section className={`relative isolate overflow-hidden rounded-[14px] border ${look.border} ${look.bg} ${look.minH}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={look.image} alt={look.alt} className="absolute inset-0 -z-10 hidden h-full w-full object-cover object-right md:block" />
        <div className="max-w-full px-5 py-4 md:max-w-[42%] md:py-[12px] md:pl-[22px] md:pr-0 md:@max-[859px]:max-w-[41%]">
          <h2 className="whitespace-pre-line text-[28px] font-semibold leading-[1.04] tracking-[-0.01em] sm:text-[31px] md:@max-[859px]:text-[25px]" style={{ color: look.titleColor }}>
            {title}
          </h2>
          <p className="mt-[5px] text-[16px] font-semibold leading-snug sm:text-[17px] md:@max-[859px]:text-[14.5px]" style={{ color: look.subtitleColor }}>
            {current.subtitle}
          </p>
          <p className="mt-[4px] text-[12.5px] leading-[1.38] text-[#33413a] md:pb-[52px] md:@max-[859px]:pb-0 md:@max-[859px]:text-[12px]">{current.description}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/careers/screening-together.png"
            alt="Together for a Greener Tomorrow"
            className="ml-auto mt-1 h-auto w-[160px] mix-blend-multiply md:absolute md:bottom-[1%] md:left-[19%] md:m-0 md:w-[20%] md:@max-[859px]:hidden [mask-image:radial-gradient(ellipse_at_center,#000_55%,transparent_78%)]"
          />
        </div>
      </section>
    );
  }

  return (
    <section className={`relative isolate overflow-hidden rounded-[14px] border ${look.border} ${look.bg} ${look.minH}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={look.image} alt={look.alt} className="absolute inset-0 -z-10 hidden h-full w-full object-cover object-center md:block" />
      <StatusIcon level={level} className={`mx-5 mt-4 md:absolute md:m-0 md:h-[46px] md:w-[46px] ${look.icon}`} />
      <div className={`px-5 pb-4 pt-2 md:py-[10px] md:pl-0 md:pr-0 ${look.textBox}`}>
        <h2 className="text-[24px] font-semibold leading-[1.1] tracking-[-0.01em] md:text-[26px] md:@max-[859px]:text-[22px]" style={{ color: look.titleColor }}>
          {current.title}
        </h2>
        <p className={`mt-[3px] text-[15px] font-semibold leading-snug md:@max-[859px]:text-[13.5px] ${level === "moderate" ? "md:text-[14px]" : ""}`} style={{ color: look.subtitleColor }}>
          {current.subtitle}
        </p>
        <div className="md:mr-[20%]">
          <p className="mt-[5px] whitespace-pre-line text-[12.5px] leading-[1.38] text-[#1f3a5c] md:@max-[859px]:text-[11.5px]">
            {current.description.replace(/\n\n/g, "\n")}
          </p>
          {current.quote && (
            <p className="mt-[6px] flex gap-[6px] text-[12.5px] italic leading-[1.35] text-[#26352c] md:@max-[859px]:text-[11.5px]">
              <span className="text-[18px] font-semibold not-italic leading-none" style={{ color: ORANGE }}>
                “
              </span>
              <span>{current.quote}”</span>
            </p>
          )}
          <SignOff />
        </div>
      </div>
    </section>
  );
}

function ProfileMatch({ level }: { level: Level }) {
  const { matchScore, current } = useMatchData();
  const ring = Math.min(100, Math.max(0, matchScore)) * 3.6;
  const accent = level === "low" ? RED : level === "moderate" ? "#f58a1f" : "#2f8f3a";
  const fill = level === "high" ? `conic-gradient(#1f7a35 0deg, #2f8f3a ${ring}deg, #e3e7e0 ${ring}deg 360deg)` : `conic-gradient(${accent} 0deg ${ring}deg, #d9dcd9 ${ring}deg 360deg)`;
  // "Match Level: Moderate" → the level in orange, as in the design
  const [titleLead, titleLevel] = level === "moderate" && current.summaryTitle.includes(":") ? current.summaryTitle.split(/:\s*/) : [current.summaryTitle, ""];

  return (
    <div className={`${card} flex flex-col items-center gap-4 px-4 py-[8px] sm:flex-row sm:gap-5 @[740px]:gap-3 @[740px]:px-3 @[860px]:gap-5 @[860px]:px-4`}>
      <div
        className="relative grid h-[116px] w-[116px] shrink-0 place-items-center rounded-full @[740px]:h-[106px] @[740px]:w-[106px] @[860px]:h-[116px] @[860px]:w-[116px]"
        style={{ background: fill }}
        role="img"
        aria-label={`Match score ${matchScore}%`}
      >
        <div className="absolute inset-[10px] rounded-full bg-[#fffefa]" />
        <div className="relative text-center">
          <div className="text-[32px] font-semibold leading-none @[740px]:text-[28px] @[860px]:text-[32px]" style={{ color: level === "high" ? INK : accent }}>
            {matchScore}%
          </div>
          <div className="mt-[4px] text-[14px] font-medium @[740px]:text-[12.5px] @[860px]:text-[14px]" style={{ color: INK }}>
            Match Score
          </div>
        </div>
      </div>

      <div className="min-w-0">
        <h3 className="flex items-center gap-[8px] text-[17px] font-semibold" style={{ color: INK }}>
          {level === "moderate" && <UserRoundSearch className="h-[22px] w-[22px] shrink-0" style={{ color: ORANGE }} strokeWidth={2.2} />}
          <span>
            {titleLead}
            {titleLevel && (
              <>
                : <span style={{ color: ORANGE }}>{titleLevel}</span>
              </>
            )}
          </span>
        </h3>
        <p className="mt-[2px] line-clamp-2 text-[13px] leading-[1.35] text-[#3d4a40]">{current.summaryText}</p>
        <div className="mt-[5px] space-y-[3px] text-[14px]">
          {[
            ["#2f9a3c", "70 – 100%", "Strong Match"],
            ["#f2a91c", "50 – 69%", "Moderate Match"],
            ["#dd2a24", "Below 50%", "Not Eligible"],
          ].map(([color, range, label]) => (
            <div
              key={label}
              className="grid grid-cols-[14px_96px_1fr] items-center gap-[8px] whitespace-nowrap text-[#26352c] @[740px]:grid-cols-[12px_78px_1fr] @[740px]:text-[13px] @[860px]:grid-cols-[14px_96px_1fr] @[860px]:text-[14px]"
            >
              <span className="h-[13px] w-[13px] rounded-full" style={{ background: color }} />
              <span>{range}</span>
              <span className="font-medium" style={{ color: INK }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Requirements({ level }: { level: Level }) {
  const { current } = useMatchData();
  const box =
    level === "low"
      ? "rounded-[12px] border border-[#f3d7d5] bg-[#fdf0ef] shadow-[0_4px_16px_rgba(120,30,30,0.05)]"
      : level === "moderate"
        ? "rounded-[12px] border border-[#f4e2c9] bg-[#fdf5ea] shadow-[0_4px_16px_rgba(120,80,20,0.05)]"
        : card;

  return (
    <div className={`${box} relative overflow-hidden px-4 py-[8px]`}>
      {level === "high" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/separated-assets/bharat-organic-leaf.png" alt="Bharat Organic Expo leaf" className="pointer-events-none absolute -right-[4px] -top-[6px] w-[46px] rotate-[24deg] opacity-90" />
      )}
      <div className="flex items-center gap-[10px] pr-8">
        {level === "low" ? (
          <span className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full text-[16px] font-semibold text-white" style={{ background: RED }}>
            !
          </span>
        ) : level === "moderate" ? (
          <Lightbulb className="h-[26px] w-[26px] shrink-0" style={{ color: "#f2a21c" }} fill="#f8c74a" strokeWidth={1.8} />
        ) : (
          <Target className="h-[26px] w-[26px] shrink-0" style={{ color: GREEN }} strokeWidth={2.4} />
        )}
        <h3 className="text-[16.5px] font-semibold leading-tight" style={{ color: level === "low" ? "#a11d22" : INK }}>
          {current.suggestionTitle}
        </h3>
      </div>
      <ul className="mt-[5px] space-y-[3px]">
        {current.requirements.map((item, idx) => (
          <li key={item} className="flex items-start gap-[10px] text-[12.5px] leading-[1.3] text-[#26352c]">
            {level === "low" ? (
              <CircleX className="mt-[1px] h-[18px] w-[18px] shrink-0 text-white" fill={RED} strokeWidth={2.4} />
            ) : level === "moderate" ? (
              <span className="mt-[1px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full text-[11px] font-semibold text-white" style={{ background: "#f18a1f" }}>
                {idx + 1}
              </span>
            ) : (
              <CircleCheck className="mt-[1px] h-[18px] w-[18px] shrink-0 text-white" fill="#1d7a3e" strokeWidth={2.4} />
            )}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function useBreakdownRows() {
  const { current, candidate } = useMatchData();
  const byTitle = new Map(current.breakdown.map((item) => [item.title, item]));
  const j = candidate.jobDetails || {};
  // Under each bar: what the CV showed; without that, what the job asks for
  const jobNote: Record<string, string | undefined> = {
    relevantExperience: j.experience && `Required: ${j.experience}`,
    educationalQualification: j.education && `Required: ${j.education}`,
    keySkills: "Key skills for this role",
    roleFit: j.title,
    industryExperience: "Relevant industry experience",
    locationPreference: j.location,
  };
  return BREAKDOWN.map((column) =>
    column.map(({ key, title, Icon }) => {
      const base = byTitle.get(title);
      const description = candidate.breakdownNotes?.[key] || jobNote[key] || base?.description;
      return { key, title, Icon, description, score: Math.round(candidate.breakdown?.[key] ?? base?.score ?? 0) };
    })
  );
}

function MatchBreakdown() {
  const columns = useBreakdownRows();
  return (
    <section>
      <div className="flex flex-wrap items-center gap-x-[10px] gap-y-0">
        <BriefcaseBusiness className="h-[22px] w-[22px] shrink-0" style={{ color: GREEN }} fill={GREEN} stroke="#fffefa" strokeWidth={1.6} />
        <h3 className="text-[16px] font-semibold leading-tight" style={{ color: INK }}>
          Match Breakdown
        </h3>
        <p className="text-[12.5px] text-[#3d4a40]">Here&apos;s how your profile matches with our requirements:</p>
      </div>

      <div className="mt-[5px] grid grid-cols-1 gap-[10px] @[640px]:grid-cols-2">
        {columns.map((column, colIdx) => (
          <div key={colIdx} className={`${card} space-y-[3px] px-4 py-[6px]`}>
            {column.map(({ key, title, Icon, description, score }) => (
              <div key={key} className="grid grid-cols-[28px_minmax(0,1fr)_46px] items-center gap-[10px]">
                <Icon className="h-[23px] w-[23px]" style={{ color: GREEN }} strokeWidth={2.2} />
                <div className="min-w-0">
                  <p className="truncate text-[13px] font-medium leading-tight" style={{ color: INK }}>
                    {title}
                  </p>
                  <p className="truncate text-[11.5px] leading-tight text-[#3d4a40]">{description}</p>
                  <div className="mt-[2px] h-[5px] overflow-hidden rounded-full bg-[#e3e7e0]">
                    <div className="h-full rounded-full bg-[#2f8f3a]" style={{ width: `${score}%` }} />
                  </div>
                </div>
                <span className="text-right text-[15px] font-semibold" style={{ color: INK }}>
                  {score}%
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/** Partial match: open rows with bars coloured by score, and a tip underneath */
function DetailedBreakdown() {
  const columns = useBreakdownRows();
  return (
    <section>
      <h3 className="text-[16px] font-semibold leading-tight" style={{ color: INK }}>
        Detailed Match Breakdown
      </h3>
      <p className="text-[12.5px] text-[#3d4a40]">Here&apos;s how your profile matches with our key requirements:</p>

      <div className="mt-[6px] grid grid-cols-1 gap-x-[34px] gap-y-[6px] @[640px]:grid-cols-2">
        {columns.map((column, colIdx) => (
          <div key={colIdx} className="space-y-[6px]">
            {column.map(({ key, title, Icon, description, score }) => {
              const color = scoreColor(score);
              return (
                <div key={key} className="grid grid-cols-[30px_minmax(0,1fr)_46px] items-center gap-[10px]">
                  <Icon className="h-[24px] w-[24px]" style={{ color: GREEN }} fill={GREEN} stroke="#fffefa" strokeWidth={1.4} />
                  <div className="min-w-0">
                    <p className="truncate text-[13px] font-medium leading-tight" style={{ color: INK }}>
                      {title}
                    </p>
                    <p className="truncate text-[11.5px] leading-tight text-[#3d4a40]">{description}</p>
                    <div className="mt-[3px] h-[5px] overflow-hidden rounded-full bg-[#e3e7e0]">
                      <div className="h-full rounded-full" style={{ width: `${score}%`, background: color }} />
                    </div>
                  </div>
                  <span className="text-right text-[15px] font-semibold" style={{ color }}>
                    {score}%
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <p className="mt-[8px] flex items-center gap-[10px] rounded-[8px] bg-[#eef6ec] px-[14px] py-[7px] text-[12.5px] text-[#26352c]">
        <BookOpen className="h-[18px] w-[18px] shrink-0" style={{ color: GREEN }} fill="#d9ead6" strokeWidth={2} />
        <span>
          <span className="font-semibold">Tip:</span> Update your CV with more relevant experience and skills to increase your match score and improve your chances.
        </span>
      </p>
    </section>
  );
}

/** Not eligible: what to do instead */
function WhatNext() {
  const { candidate } = useMatchData();
  return (
    <section className="rounded-[12px] border border-[#dcebd8] bg-[#f1f8ef] px-4 pb-[10px] pt-[8px]">
      <div className="flex items-start gap-[10px]">
        <Lightbulb className="mt-[1px] h-[26px] w-[26px] shrink-0" style={{ color: "#3f8f2a" }} fill="#e7d24a" strokeWidth={1.8} />
        <div>
          <h3 className="text-[16.5px] font-semibold leading-tight" style={{ color: INK }}>
            What You Can Do Next?
          </h3>
          <p className="text-[12.5px] text-[#3d4a40]">We encourage you to continue building your skills and explore other suitable opportunities with us.</p>
        </div>
      </div>
      <div className="mt-[8px] rounded-[10px] bg-[#fffefa] px-4 py-[10px] shadow-[0_2px_10px_rgba(30,60,30,0.05)]">
        <div className="grid grid-cols-1 gap-3 @[640px]:grid-cols-3 @[640px]:divide-x @[640px]:divide-[#e6ebe2]">
          {nextSteps(candidate).map(({ Icon, title, text }) => (
            <div key={title} className="flex gap-[10px] @[640px]:px-3 @[640px]:first:pl-0 @[640px]:last:pr-0">
              <Icon className="mt-[1px] h-[26px] w-[26px] shrink-0" style={{ color: GREEN }} strokeWidth={2.2} />
              <div>
                <p className="text-[13.5px] font-semibold leading-tight text-[#1b4d2e]">{title}</p>
                <p className="mt-[3px] text-[12px] leading-[1.35] text-[#3d4a40]">{text}</p>
              </div>
            </div>
          ))}
        </div>
        <Link href={OPENINGS_URL} className={`${greenButton} mx-auto mt-[10px] h-[40px] w-fit px-[34px] text-[15px]`}>
          View All Open Positions
          <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.4} />
        </Link>
      </div>
    </section>
  );
}

function YourCv({ onUploadDifferent }: { onUploadDifferent?: () => void }) {
  const { candidate } = useMatchData();
  return (
    <div className={`${card} px-[14px] py-[11px]`}>
      <h3 className="text-[17px] font-semibold" style={{ color: INK }}>
        Your CV
      </h3>
      <div className="mt-[7px] flex items-center gap-[14px] rounded-[10px] bg-[#f1f6ee] px-[12px] py-[8px]">
        <span className="relative shrink-0">
          <FileText className="h-[44px] w-[44px]" style={{ color: GREEN }} strokeWidth={1.8} />
          <CircleCheck className="absolute -bottom-[3px] -right-[5px] h-[20px] w-[20px] text-white" fill="#1d7a3e" strokeWidth={2.4} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-medium" style={{ color: INK }}>
            {candidate.cvName}
          </p>
          <p className="text-[13.5px] text-[#3d4a40]">{candidate.cvSize}</p>
          <div className="mt-[3px] flex flex-wrap gap-x-[22px] gap-y-1 text-[13.5px] font-medium text-[#1f63a8]">
            {candidate.cvUrl && (
              <a href={candidate.cvUrl} target="_blank" rel="noreferrer" className="flex items-center gap-[6px] hover:opacity-80">
                <Eye className="h-[16px] w-[16px]" strokeWidth={2.2} />
                View File
              </a>
            )}
            <button type="button" onClick={onUploadDifferent} className="flex items-center gap-[6px] hover:opacity-80">
              <RefreshCw className="h-[15px] w-[15px]" strokeWidth={2.4} />
              Upload Different CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function JobSummary({ onEdit, grow }: { onEdit?: () => void; grow?: boolean }) {
  const { candidate } = useMatchData();
  const j = candidate.jobDetails || {};
  const rows: { Icon: LucideIcon; label: string; value?: string }[] = [
    { Icon: Building2, label: "Position", value: j.title },
    { Icon: BriefcaseBusiness, label: "Company", value: j.company || j.brand },
    { Icon: MapPin, label: "Location", value: j.location },
    { Icon: BriefcaseBusiness, label: "Employment Type", value: j.type },
    { Icon: ChartColumnIncreasing, label: "Experience", value: j.experience },
    { Icon: GraduationCap, label: "Qualification", value: j.education },
  ];

  return (
    <div className={`${card} flex flex-col px-[14px] py-[11px] ${grow ? "xl:flex-1" : ""}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-[17px] font-semibold" style={{ color: INK }}>
          Job Summary
        </h3>
        {onEdit && (
          <button type="button" onClick={onEdit} className="flex items-center gap-[4px] text-[15px] font-semibold text-[#1d7a3e] hover:opacity-80">
            <Pencil className="h-[15px] w-[15px] stroke-[2.5]" />
            Edit
          </button>
        )}
      </div>
      <dl className={`mt-[8px] flex flex-col gap-[7px] ${grow ? "xl:flex-1 xl:justify-evenly" : ""}`}>
        {rows
          .filter((row) => row.value)
          .map(({ Icon, label, value }) => (
            <div key={label} className="grid grid-cols-[24px_124px_minmax(0,1fr)] items-start gap-[10px] text-[13.5px]">
              <Icon className="h-[19px] w-[19px]" style={{ color: GREEN }} fill={GREEN} stroke="#fffefa" strokeWidth={1.4} />
              <dt className="text-[#26352c]">{label}</dt>
              <dd className="leading-[1.35]" style={{ color: INK }}>
                {value}
              </dd>
            </div>
          ))}
      </dl>
    </div>
  );
}

/** Apply button + the profile details it still needs */
function ApplyButton({ label, onApply }: { label: string; onApply?: () => void }) {
  const { candidate } = useMatchData();
  const missing = profileIssues(candidate);
  return (
    <>
      <button
        type="button"
        onClick={onApply}
        disabled={missing.length > 0}
        className={`${greenButton} h-[44px] w-full text-[17px] disabled:cursor-not-allowed disabled:bg-[#b6c4bc] disabled:shadow-none`}
      >
        {label}
        <ArrowRight className="h-[21px] w-[21px]" strokeWidth={2.4} />
      </button>
      {missing.length > 0 && <p className="text-[13px] font-medium text-[#b23b2e]">Add {missing.join(", ")} in Your Profile to continue.</p>}
    </>
  );
}

function SideArt({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="hidden overflow-hidden rounded-[12px] xl:block">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="block h-auto w-full" />
    </div>
  );
}

export default function ScreeningResultPage({
  candidate,
  score,
  onBack,
  onApply,
  onCandidateChange,
}: {
  candidate: CandidateProfileData;
  score?: number;
  /** Back to the job's Apply page (job details + CV upload) */
  onBack?: () => void;
  onApply?: () => void;
  onCandidateChange?: (candidate: CandidateProfileData) => void;
}) {
  // Profile edits show at once and go up to the flow for the next steps
  const [edited, setEdited] = useState<Partial<CandidateProfileData> | null>(null);
  const merged = edited ? { ...candidate, ...edited } : candidate;
  const updateCandidate = (patch: Partial<CandidateProfileData>) => {
    setEdited((prev) => ({ ...prev, ...patch }));
    onCandidateChange?.({ ...merged, ...patch });
  };

  const resultMessages = useResultMessages();
  const matchData = { ...getMatchData(merged, score, resultMessages), updateCandidate };
  const level: Level = matchData.matchLevel;
  const supportEmail = resultMessages?.supportEmail || DEFAULT_SUPPORT_EMAIL;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <MatchContext.Provider value={matchData}>
      <main className="relative isolate overflow-hidden bg-[#fbf8f0]">
        {/* Leaves only at the page edges, behind the cards */}
        <EdgeLeaves className="-inset-x-[28px] inset-y-0 -z-10" />

        {level === "high" && (
          <>
            {/* Soft expo backdrop with "Organic Opportunities for a Brighter Tomorrow" (from the design) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/careers/screening-top.jpg" alt="Organic Opportunities for a Brighter Tomorrow - Bharat Organic Expo" className="absolute right-0 top-0 -z-10 h-auto w-full md:w-[60%]" />
            <div className="absolute right-0 top-0 -z-10 h-[260px] w-full bg-[linear-gradient(90deg,#fbf8f0_0%,rgba(251,248,240,0.6)_30%,rgba(251,248,240,0)_48%)] max-md:bg-[linear-gradient(180deg,rgba(251,248,240,0.2),#fbf8f0)]" />
          </>
        )}

        <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-4 px-4 pb-6 pt-[26px] sm:px-8 xl:grid-cols-[minmax(0,1fr)_400px] xl:gap-[26px] lg:pb-[12px] lg:pt-[56px]">
          {/* ── Left ── */}
          <div className="@container flex min-w-0 flex-col gap-[8px] xl:justify-between">
            <div className="relative">
              {level !== "high" && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/assets/careers/screening-together-healthier.png"
                  alt="Together for a Healthier Tomorrow"
                  className="pointer-events-none absolute -top-[6px] right-[1%] hidden w-[210px] mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,#000_50%,transparent_75%)] md:block"
                />
              )}
              <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-[8px] text-[13.5px] text-[#26352c]">
                <Link href="/" className="flex items-center gap-[6px] hover:text-[#1d7a3e]">
                  <Home className="h-[16px] w-[16px] text-[#1d5a37]" fill="currentColor" />
                  Home
                </Link>
                <ChevronRight className="h-[14px] w-[14px] text-[#7c8a80]" />
                <Link href="/careers" className="hover:text-[#1d7a3e]">
                  Careers
                </Link>
                <ChevronRight className="h-[14px] w-[14px] text-[#7c8a80]" />
                {onBack ? (
                  <button type="button" onClick={onBack} className="hover:text-[#1d7a3e]">
                    Apply for Position
                  </button>
                ) : (
                  <span>Apply for Position</span>
                )}
                <ChevronRight className="h-[14px] w-[14px] text-[#7c8a80]" />
                <span className="font-medium" style={{ color: INK }}>
                  AI Screening Result
                </span>
              </nav>

              {onBack && (
                <button type="button" onClick={onBack} className="mt-[3px] flex items-center gap-[7px] text-[14px] font-medium text-[#1d5a37] hover:text-[#1d7a3e]">
                  <ArrowLeft className="h-[16px] w-[16px]" strokeWidth={2.4} />
                  Back to Job Details
                </button>
              )}

              <h1 className="mt-[2px] text-[24px] font-medium leading-[1.1] tracking-[-0.01em] sm:text-[26px] lg:text-[28px]" style={{ color: INK }}>
                AI Screening Result
              </h1>
              <p className="mt-0 text-[14px] text-[#26352c] sm:text-[15px]">Here is your profile match and analysis for the applied position.</p>
            </div>

            <Steps level={level} />
            <ResultHero level={level} />

            <div className="grid grid-cols-1 gap-[10px] @[740px]:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)]">
              <ProfileMatch level={level} />
              <Requirements level={level} />
            </div>

            {level === "high" ? <MatchBreakdown /> : level === "moderate" ? <DetailedBreakdown /> : <WhatNext />}
          </div>

          {/* ── Right ── */}
          <aside className="flex min-w-0 flex-col gap-[8px] xl:pt-[32px]">
            <ProfileCard look="page" />
            <YourCv onUploadDifferent={onBack} />
            <JobSummary onEdit={onBack} grow={level === "high"} />

            {level === "high" && (
              <div className="space-y-[7px]">
                <ApplyButton label="Continue & Apply for This Job" onApply={onApply} />
                <p className="flex items-center gap-[8px] px-[4px] text-[11.5px] tracking-[-0.01em] text-[#26352c] xl:whitespace-nowrap">
                  <LockKeyhole className="h-[17px] w-[17px] shrink-0" style={{ color: INK }} fill={INK} stroke="#fffefa" />
                  Your data is secure and will only be used for recruitment purposes.
                </p>
              </div>
            )}

            {level === "moderate" && (
              <>
                <div className="space-y-[7px]">
                  <ApplyButton label={matchData.current.cta} onApply={onApply} />
                  </div>
                <div className="flex items-start gap-[10px] rounded-[10px] bg-[#eaf3fc] px-[14px] py-[7px]">
                  <Info className="mt-[1px] h-[22px] w-[22px] shrink-0 text-white" fill="#1f6fd1" strokeWidth={2.2} />
                  <p className="text-[12.5px] leading-[1.4] text-[#26352c]">
                    <span className="font-semibold" style={{ color: INK }}>
                      Still have questions?
                    </span>
                    <br />
                    Feel free to reach out to our HR team at
                    <br />
                    <a href={`mailto:${supportEmail}`} className="font-semibold hover:underline" style={{ color: INK }}>
                      {supportEmail}
                    </a>
                  </p>
                </div>
                <SideArt src="/assets/careers/screening-partial-side.png" alt="Organic Opportunities for a Brighter Tomorrow" />
              </>
            )}

            {level === "low" && (
              <>
                <div className="rounded-[12px] border border-[#dcebd8] bg-[#eef6ec] px-[14px] py-[10px]">
                  <div className="flex items-start gap-[12px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/separated-assets/bharat-organic-leaf.png" alt="Bharat Organic Expo leaf" className="mt-[2px] w-[30px] shrink-0" />
                    <div>
                      <p className="text-[16px] font-semibold leading-tight" style={{ color: INK }}>
                        Looking for a Better Fit?
                      </p>
                      <p className="mt-[3px] text-[12.5px] leading-[1.4] text-[#3d4a40]">
                        Browse other career opportunities at Bharat Organic Expo and find the right role for you.
                      </p>
                    </div>
                  </div>
                  <Link href={OPENINGS_URL} className={`${greenButton} mx-auto mt-[9px] h-[38px] w-[86%] text-[15px]`}>
                    View All Open Positions
                    <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.4} />
                  </Link>
                </div>
                <SideArt src="/assets/careers/screening-low-side.png" alt="Organic Opportunities for a Healthier Tomorrow" />
              </>
            )}
          </aside>
        </div>
      </main>
    </MatchContext.Provider>
  );
}
