"use client";

import { createContext, useContext, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Eye,
  FileText,
  GraduationCap,
  Info,
  Lightbulb,
  LockKeyhole,
  Mail,
  MapPin,
  Pencil,
  ShieldCheck,
  Phone,
  RefreshCw,
  Search,
  Target,
  Users,
  X,
} from "lucide-react";

/* =========================================================
   CHANGE ONLY SCORE
   ========================================================= */

const matchScore = 72;
/*
  QUICK PREVIEW:
  72 = GREEN / ELIGIBLE
  58 = ORANGE / PARTIAL MATCH
  38 = RED / NOT ELIGIBLE

  Bas yahi number change karo.
*/

const asset = (file: string) => `/separated-assets/${file}`;

const separatedAssets = {
  personHigh: "/career-submit-resume-assets/newimagegreat.png",
  personModerate: asset("ChatGPT Image Sep 16, 2026, 04_31_37 PM.png"),
  personLow: "/career-submit-resume-assets/sadimage.png",
  rightPeople: asset("ChatGPT Image Sep 16, 2026, 04_29_29 PM.png"),
  stickyNote: asset("ChatGPT Image Sep 16, 2026, 04_33_26 PM.png"),
  sidebarTop: asset("ChatGPT Image Sep 16, 2026, 04_29_31 PM.png"),
  sidebarFooter: asset("ChatGPT Image Sep 16, 2026, 04_34_38 PM.png"),
  headerLeaf: "/separated-assets/bharat-organic-leaf.png",
};

const brandHeader = {
  title: "Bharat Organic Expo",
  tagline: "People • Ideas • Partnerships for a Greener Tomorrow",
};

/*
  70 - 100 = HIGH
  50 - 69  = MODERATE
  0  - 49  = LOW
*/

/* =========================================================
   EDITABLE PROFILE DATA
   ========================================================= */

const profile = {
  name: "Vijay Sharma",
  email: "vijay.sharma@gmail.com",
  phone: "+91 98765 43210",
  linkedin: "linkedin.com/in/vijay-sharma",

  image: "/career-submit-resume-assets/profile.png",

  cvName: "Vijay_Sharma_CV.pdf",
  cvSize: "842 KB",
};

/* =========================================================
   EDITABLE JOB DATA
   ========================================================= */

const job = {
  title: "Sales Manager – Domestic Exhibition Sales & Sponsorships",
  company: "Namo Gange Wellness Pvt. Ltd.",
  brand: "Bharat Organic Expo",

  location: "Delhi NCR",
  type: "Full Time",
  experience: "3 – 6 Years",
  education: "Graduate (MBA/PGDM Preferred)",
};

/* =========================================================
   MATCH TYPE
   ========================================================= */

type MatchLevel = "high" | "moderate" | "low";

/*
  PREVIEW / RESULT RULE
  ---------------------------------------------------------
  Just change `matchScore` at the top:
  72 => GREEN / HIGH
  58 => ORANGE / MODERATE
  38 => RED / LOW

  No other layout change is needed.
*/
const matchLevel: MatchLevel =
  matchScore >= 70 ? "high" : matchScore >= 50 ? "moderate" : "low";

const stateTheme = {
  high: {
    primary: "#07883f",
    dark: "#076331",
    heroBg: "linear-gradient(100deg,#edf8ef 0%,#e9f6eb 52%,#e2f5e6 100%)",
    panelBg: "#f3fbf5",
    panelBorder: "#d9ecdf",
    score: "#149c3e",
    step: "#07883f",
    cta: "#08743e",
    supportBg: "#f3fbf3",
  },
  moderate: {
    primary: "#f08000",
    dark: "#d85400",
    heroBg: "linear-gradient(100deg,#fff8ec 0%,#fff3df 58%,#fff0d6 100%)",
    panelBg: "#fffaf2",
    panelBorder: "#f0e3d4",
    score: "#f18700",
    step: "#f08000",
    cta: "#08743e",
    supportBg: "#eff7ff",
  },
  low: {
    primary: "#d30c18",
    dark: "#9a1117",
    heroBg: "linear-gradient(100deg,#fff5f5 0%,#ffeded 55%,#ffe8e8 100%)",
    panelBg: "#fff7f7",
    panelBorder: "#f0dddd",
    score: "#d20c16",
    step: "#d30c18",
    cta: "#08743e",
    supportBg: "#f3fbf3",
  },
} as const;

const theme = stateTheme[matchLevel];

/* =========================================================
   CONFIG
   ========================================================= */

const matchConfig = {
  high: {
    color: "#07883f",
    dark: "#076331",
    soft: "#eef9ef",
    soft2: "#f5fbf6",

    personImage: separatedAssets.personHigh,
    rightImage: separatedAssets.rightPeople,

    step: 3,

    title: `Great News, ${profile.name.split(" ")[0]}!`,

    subtitle: "You are eligible to apply for this position.",

    description:
      "Your profile meets the minimum requirements and shows a good alignment with what we are looking for. We encourage you to complete your application and join us in our mission for a healthier and more sustainable India.",

    quote: "",

    rightText: "Right\nPeople\nBrighter\nTomorrows",

    summaryTitle: "Your Profile Match",

    summaryText:
      "Your CV aligns well with the key requirements for this position.",

    suggestionTitle: "You Meet the Key Requirements",

    requirements: [
      "Experience in exhibition / trade show sales & sponsorships",
      "Exposure to client acquisition & B2B deal negotiation",
      "Good communication and relationship management skills",
      "Relevant industry experience in Expo / Wellness sector",
      "Willing to work from Delhi NCR",
    ],

    cta: "Continue & Apply for This Job",

    breakdown: [
      {
        title: "Relevant Experience",
        description: "Exhibition / Trade Show / B2B Sales",
        score: 90,
        icon: BriefcaseBusiness,
      },
      {
        title: "Educational Qualification",
        description: "MBA (Marketing)",
        score: 100,
        icon: GraduationCap,
      },
      {
        title: "Key Skills",
        description:
          "Client Acquisition, Negotiation, Relationship Mgmt.",
        score: 95,
        icon: Target,
      },
      {
        title: "Role Fit",
        description: "Leadership, Communication, Travel Readiness",
        score: 90,
        icon: Target,
      },
      {
        title: "Industry Experience",
        description: "Healthcare / Wellness / Exhibition Industry",
        score: 85,
        icon: Users,
      },
      {
        title: "Location Preference",
        description: "Delhi NCR",
        score: 100,
        icon: MapPin,
      },
    ],
  },

  moderate: {
    color: "#f08000",
    dark: "#d85400",
    soft: "#fff5e7",
    soft2: "#fffaf2",

    personImage: separatedAssets.personModerate,
    rightImage: separatedAssets.stickyNote,

    step: 3,

    title: `You’re a Partial Match, ${profile.name.split(" ")[0]}!`,

    subtitle: "You are close to the requirements for this position.",

    description:
      "Your profile shows good potential, but a few key areas need improvement. You can still apply after reviewing the suggestions below and updating your profile or CV to strengthen your application.",

    quote:
      "We encourage you to apply if you are confident about your relevant experience and skills.",

    rightText: "Learn\nGrow\nApply\nSucceed",

    summaryTitle: "Match Level: Moderate",

    summaryText:
      "Your profile matches several key requirements, but a few important areas need strengthening.",

    suggestionTitle: "Key Suggestions to Improve Your Match",

    requirements: [
      "Gain more experience in exhibition / trade show sales or sponsorships.",
      "Highlight client acquisition and revenue achievement in your CV.",
      "Add relevant skills such as negotiation, business development and relationship management.",
      "Include certifications or training related to sales, marketing or event management.",
    ],

    cta: "Update CV & Apply Now",

    breakdown: [
      {
        title: "Relevant Experience",
        description: "Exhibition / Trade Show / B2B Sales",
        score: 60,
        icon: BriefcaseBusiness,
      },
      {
        title: "Educational Qualification",
        description: "MBA (Marketing)",
        score: 100,
        icon: GraduationCap,
      },
      {
        title: "Key Skills",
        description:
          "Client Acquisition, Negotiation, Relationship Mgmt.",
        score: 55,
        icon: Target,
      },
      {
        title: "Role Fit",
        description: "Leadership, Communication, Travel Readiness",
        score: 60,
        icon: Target,
      },
      {
        title: "Industry Experience",
        description: "Healthcare / Wellness / Exhibition Industry",
        score: 40,
        icon: Users,
      },
      {
        title: "Location Preference",
        description: "Delhi NCR",
        score: 100,
        icon: MapPin,
      },
    ],
  },

  low: {
    color: "#d30c18",
    dark: "#9a1117",
    soft: "#fff1f1",
    soft2: "#fff7f7",

    personImage: separatedAssets.personLow,
    rightImage: separatedAssets.stickyNote,

    step: 2,

    title: `Sorry, ${profile.name.split(" ")[0]}!` as string,

    subtitle: "This position may not be the right fit for you at this time.",

    description:
      "Based on our screening, your profile does not meet the minimum requirements for this role. Therefore, you are not eligible to apply for this position. We truly appreciate your interest in Bharat Organic Expo and encourage you to explore other opportunities that may be a better match for your skills and experience.",

    quote: "",

    rightText: "Keep\nGrowing\nKeep\nExploring",

    summaryTitle: "Why You Are Not Eligible?",

    summaryText:
      "Your profile does not meet the minimum requirements for this position.",

    suggestionTitle: "Minimum Requirements for This Role",

    requirements: [
      "Minimum 3+ years of experience in exhibition / trade show sales (Your experience: 0–1 year)",
      "Proven track record in client acquisition & sponsorships",
      "Relevant industry experience (Exhibitions / Events / Wellness / Healthcare preferred)",
      "Strong negotiation and relationship management skills",
    ],

    cta: "View All Open Positions",

    breakdown: [] as Array<{ title: string; description: string; score: number; icon: any }>,
  },
};

export type CandidateProfileData = {
  candidateName: string;
  firstName: string;
  email?: string | null;
  phone?: string | null;
  /** Number the WhatsApp OTP was verified against; used to badge the profile. */
  verifiedPhone?: string | null;
  linkedin?: string | null;
  image?: string | null;
  cvFile?: File | null;
  cvName: string;
  cvSize: string;
  cvUrl?: string | null;
  score: number;
  summary?: string;
  requirementsMet?: string[];
  jobDetails?: {
    title?: string;
    company?: string;
    brand?: string;
    location?: string;
    type?: string;
    experience?: string;
    education?: string;
  };
  breakdown?: {
    relevantExperience: number;
    educationalQualification: number;
    keySkills: number;
    roleFit: number;
    industryExperience: number;
    locationPreference: number;
  };
};

export const defaultCandidateData: CandidateProfileData = {
  candidateName: "Rohit Kumar",
  firstName: "Rohit",
  email: "kumarrohitji89@gmail.com",
  phone: "+91 9568816858",
  verifiedPhone: "+91 9568816858",
  linkedin: "linkedin.com/in/rohit-kumar",
  cvName: "Rohit_Encodency.pdf",
  cvSize: "424 KB",
  score: 93,
  requirementsMet: [
    "Experience in exhibition / trade show sales & sponsorships",
    "Exposure to client acquisition & B2B deal negotiation",
    "Good communication and relationship management skills",
    "Relevant industry experience in Expo / Wellness sector",
    "Willing to work from Delhi NCR",
  ],
  breakdown: {
    relevantExperience: 90,
    educationalQualification: 100,
    keySkills: 95,
    roleFit: 90,
    industryExperience: 85,
    locationPreference: 100,
  },
};

type MatchContextType = {
  matchScore: number;
  matchLevel: MatchLevel;
  theme: (typeof stateTheme)["high" | "moderate" | "low"];
  current: (typeof matchConfig)["high" | "moderate" | "low"];
  candidate: CandidateProfileData;
  /** Applies an inline edit from the profile card; absent outside the popup. */
  updateCandidate?: (patch: Partial<CandidateProfileData>) => void;
};

const MatchContext = createContext<MatchContextType>({
  matchScore: 72,
  matchLevel: "high",
  theme: stateTheme["high"],
  current: matchConfig["high"],
  candidate: defaultCandidateData,
});

export const useMatchData = () => useContext(MatchContext);

export function getMatchData(
  candidate: CandidateProfileData = defaultCandidateData,
  overrideScore?: number
): MatchContextType {
  const score = typeof overrideScore === "number" ? overrideScore : candidate.score;
  const level: MatchLevel =
    score >= 70 ? "high" : score >= 50 ? "moderate" : "low";

  const config = { ...matchConfig[level] };
  const rawName = candidate.candidateName || candidate.firstName || "Candidate";
  const cleanFullName = rawName
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const firstName = (candidate.firstName && candidate.firstName !== "Candidate")
    ? candidate.firstName.replace(/([a-z])([A-Z])/g, "$1 $2").trim().split(" ")[0]
    : (cleanFullName.split(" ")[0] || "Candidate");
  const jobTitle = candidate.jobDetails?.title || "this position";

  if (level === "high") {
    config.title = `Great News, ${firstName}!`;
  } else if (level === "moderate") {
    config.title = `Good Start, ${firstName}!`;
  } else {
    config.title = `Thank You, ${firstName}!`;
    config.subtitle = `This position may not be the right fit for you at this time.`;
  }

  if (candidate.summary) {
    config.summaryText = candidate.summary;
  }

  if (candidate.requirementsMet && candidate.requirementsMet.length > 0) {
    config.requirements = candidate.requirementsMet as any;
  } else if (level === "low") {
    config.requirements = [
      `Minimum experience required for ${jobTitle}`,
      `Key technical skills matching ${jobTitle} description`,
      `Relevant industry experience`,
      `Communication and role readiness`,
    ];
  }

  return {
    matchScore: score,
    matchLevel: level,
    theme: stateTheme[level],
    current: config,
    candidate,
  };
}

/* =========================================================
   LINKEDIN
   ========================================================= */

function LinkedInIcon({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M5.5 3.5A2.5 2.5 0 1 1 .5 3.5a2.5 2.5 0 0 1 5 0ZM1 8h4.5v15H1V8Zm7.2 0h4.3v2.05h.06c.6-1.14 2.07-2.34 4.27-2.34C21.4 7.71 22.25 10.72 22.25 14.63V23h-4.48v-7.42c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V23H8.2V8Z" />
    </svg>
  );
}

/* =========================================================
   PROGRESS
   ========================================================= */

function ProgressSteps() {
  const { matchLevel, current, theme } = useMatchData();
  const steps = [
    "Upload CV",
    "AI Analysis",
    "Eligibility Result",
    "Apply for Job",
  ];

  return (
    <div className="relative mx-auto h-full w-[82%]">
      <div className="absolute left-[12.5%] right-[12.5%] top-[16px] h-[2px] bg-[#d8dfe4]" />

      <div
        className="absolute left-[12.5%] top-[16px] h-[2px] bg-[#087f46]"
        style={{
          width: current.step === 2 ? "25%" : "37.5%",
        }}
      />

      {current.step === 3 && (
        <div
          className="absolute left-[50%] top-[16px] h-[2px] w-[12.5%]"
          style={{ background: theme.primary }}
        />
      )}

      <div className="relative grid h-full grid-cols-4">
        {steps.map((label, index) => {
          const step = index + 1;

          const completed = step < current.step;
          const active = step === current.step;

          return (
            <div
              key={label}
              className="flex min-h-0 flex-col items-center"
            >
              <div
                className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full text-[14px] font-semibold"
                style={{
                  background: completed
                    ? "#087f46"
                    : active
                      ? current.color
                      : "#e4eaf0",

                  color: completed || active ? "#fff" : "#153760",
                }}
              >
                {completed ? (
                  <Check
                    className="h-[18px] w-[18px]"
                    strokeWidth={3}
                  />
                ) : (
                  step
                )}
              </div>

              <span className="mt-[5px] whitespace-nowrap text-[12px] font-extrabold text-[#0d315e]">
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   HERO
   ========================================================= */

function ResultHero() {
  const { matchLevel, current, theme } = useMatchData();

  return (
    <div
      className="relative h-full min-h-0 overflow-hidden rounded-[8px]"
      style={{ background: theme.heroBg }}
    >
      {/* LEFT PERSON COMPOSITION */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: "40.2%" }}
      >
        <Image
          src={current.personImage}
          alt=""
          fill
          priority
          sizes="30vw"
          className="object-contain object-left-bottom"
        />
      </div>

      {/* SOFT BLEND BETWEEN PERSON AND COPY */}
      <div
        className="pointer-events-none absolute inset-y-0 left-[34%] w-[11%]"
        style={{
          background:
            matchLevel === "moderate"
              ? "linear-gradient(90deg,rgba(255,248,236,0),rgba(255,248,236,.94) 76%,rgba(255,248,236,1))"
              : matchLevel === "high"
                ? "linear-gradient(90deg,rgba(237,248,239,0),rgba(237,248,239,.94) 76%,rgba(237,248,239,1))"
                : "linear-gradient(90deg,rgba(255,245,245,0),rgba(255,245,245,.94) 76%,rgba(255,245,245,1))",
        }}
      />

      {/*
        HIDE THE STATUS ICON THAT IS BAKED INTO THE PERSON IMAGE.
        Use a wider patch for moderate match (58%) so no red/orange crescent
        from the image remains visible behind the real dynamic icon.
      */}
      <div
        className={`pointer-events-none absolute z-[18] ${
          matchLevel === "moderate"
            ? "left-[29.5%] top-0 h-full w-[110px]"
            : "left-[32.25%] top-[7.2%] h-[78px] w-[86px]"
        }`}
        style={{
          background:
            matchLevel === "high"
              ? "#e9f6eb"
              : matchLevel === "moderate"
                ? "#fff3df"
                : "#ffeded",
        }}
      />

      {/* TEXT BLOCK WITH ICON */}
      <div className="absolute bottom-[3%] left-[32%] top-[3%] z-20 w-[50%] overflow-visible pr-1">
        <div className="flex h-full min-h-0 items-center">
          <div className="flex items-start gap-[15px]">
            {/* DYNAMIC STATUS ICON */}
            <div
              className="mt-[3px] grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full text-white shadow-sm"
              style={{ background: theme.primary }}
            >
              {matchLevel === "high" ? (
                <Check className="h-[32px] w-[32px]" strokeWidth={3.5} />
              ) : matchLevel === "low" ? (
                <X className="h-[32px] w-[32px]" strokeWidth={3.5} />
              ) : (
                <span className="text-[32px] font-semibold leading-none">!</span>
              )}
            </div>

            <div className="flex min-w-0 flex-col">
              <h2
                className="max-w-full text-[clamp(21px,1.75vw,28px)] font-semibold leading-[1.08] tracking-[-0.035em]"
                style={{ color: theme.dark }}
              >
                {current.title}
              </h2>

              <h3
                className="mt-[2px] text-[15px] font-semibold leading-[1.2]"
                style={{ color: theme.dark }}
              >
                {current.subtitle}
              </h3>

              <p className="mt-[6px] max-w-[98%] whitespace-pre-wrap text-[15px] font-medium leading-[1.38] text-[#123d73]">
                {current.description}
              </p>

              {current.quote && (
                <p className="mt-[4px] max-w-[95%] text-[14px] italic leading-[1.25] text-[#123d73]">
                  “ {current.quote} ”
                </p>
              )}

              <p className="mt-[8px] text-[15px] italic leading-[1.18] text-[#164232]">
                — Talent Acquisition Team
                <br />
                <span className="pl-[16px] font-semibold">Bharat Organic Expo</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE ARTWORKS */}
      {/* 1. Original Artwork ("Right People Brighter Tomorrows") - Shifted slightly higher */}
      <div className="pointer-events-none absolute right-[2%] top-[2%] bottom-[12%] z-10 w-[18%] overflow-visible">
        <Image
          src={separatedAssets.rightPeople}
          alt=""
          fill
          sizes="18vw"
          className="object-contain object-right-top"
        />
      </div>

      {/* 2. Leaf Image - Smaller size at bottom right corner without clipping */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-20 h-[35%] w-[11%] overflow-visible">
        <Image
          src="/assets/final-card-exact.png"
          alt=""
          fill
          sizes="11vw"
          className="object-contain object-right-bottom"
        />
      </div>
    </div>
  );
}

/* =========================================================
   SCORE
   ========================================================= */

function ScoreRing() {
  const { matchScore, matchLevel, theme } = useMatchData();
  const ringColor = theme.score;

  return (
    <div
      className="relative grid aspect-square h-[85%] max-h-[148px] shrink-0 place-items-center rounded-full"
      style={{
        background: `conic-gradient(
          ${ringColor} ${matchScore * 3.6}deg,
          #dce2e5 ${matchScore * 3.6}deg
        )`,
      }}
    >
      <div className="absolute inset-[11px] rounded-full bg-white" />

      <div className="relative z-10 text-center">
        <div
          className="text-[clamp(30px,2.8vw,46px)] font-semibold leading-none"
          style={{
            color: matchLevel === "high" ? "#123761" : ringColor,
          }}
        >
          {matchScore}%
        </div>

        <div className="mt-1 text-[clamp(10px,.78vw,12px)] font-extrabold text-[#13355d]">
          Match Score
        </div>
      </div>
    </div>
  );
}

function Legend({
  color,
  range,
  label,
}: {
  color: string;
  range: string;
  label: string;
}) {
  return (
    <div className="grid grid-cols-[12px_80px_1fr] items-center gap-[8px] text-[13.5px] text-[#254b73]">
      <span
        className="h-[11px] w-[11px] rounded-full"
        style={{ background: color }}
      />
      <span className="font-bold">{range}</span>
      <span className="font-semibold">{label}</span>
    </div>
  );
}

/* =========================================================
   SUMMARY
   ========================================================= */

function ScoreSummary() {
  const { matchLevel, current, theme } = useMatchData();

  return (
    <div className="grid h-full min-h-0 grid-cols-[1fr_1.1fr] gap-[10px]">
      <div className="flex min-h-0 items-center gap-[clamp(10px,1.2vw,16px)] overflow-hidden rounded-[7px] border border-[#e0e7e2] bg-white px-[clamp(10px,1.2vw,16px)] py-[8px]">
        <ScoreRing />

        <div className="flex min-w-0 flex-col justify-center pl-[2px]">
          <h3 className="text-[17px] font-bold tracking-tight text-[#113a72] leading-tight">
            {current.summaryTitle}
          </h3>

          <p className="mt-[3px] max-w-[400px] text-[13.5px] font-semibold leading-[1.25] text-[#254b73] line-clamp-2">
            {current.summaryText}
          </p>

          <div className="mt-[6px] space-y-[4px]">
            <Legend
              color="#13a13f"
              range="70 – 100%"
              label="Strong Match"
            />

            <Legend
              color="#f5aa00"
              range="50 – 69%"
              label="Moderate Match"
            />

            <Legend
              color="#dc1017"
              range="Below 50%"
              label="Not Eligible"
            />
          </div>
        </div>
      </div>

      <div
        className="flex h-full min-h-0 flex-col overflow-y-auto rounded-[7px] border px-[14px] py-[10px]"
        style={{
          background: theme.panelBg,
          borderColor: theme.panelBorder,
        }}
      >
        <div className="flex shrink-0 items-center gap-[10px]">
          <div
            className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full text-white"
            style={{ background: theme.primary }}
          >
            {matchLevel === "moderate" ? (
              <Lightbulb className="h-[15px] w-[15px]" />
            ) : matchLevel === "low" ? (
              <span className="text-[16px] font-bold leading-none">!</span>
            ) : (
              <Target className="h-[15px] w-[15px]" />
            )}
          </div>

          <h3
            className="text-[17.5px] font-bold leading-tight"
            style={{ color: theme.dark }}
          >
            {current.suggestionTitle}
          </h3>
        </div>

        <div className="mt-[8px] flex flex-col gap-[7px]">
          {current.requirements.map((item, index) => {
            const hasParen = item.includes("(");
            const mainText = hasParen ? item.split("(")[0] : item;
            const parenText = hasParen ? "(" + item.split("(")[1] : "";

            return (
              <div
                key={item}
                className="flex items-center gap-[8px]"
              >
                <span
                  className="grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full text-[10px] font-bold text-white"
                  style={{ background: theme.primary }}
                >
                  {matchLevel === "high" ? (
                    <Check className="h-[11px] w-[11px]" strokeWidth={3.5} />
                  ) : matchLevel === "low" ? (
                    <X className="h-[11px] w-[11px]" strokeWidth={3.5} />
                  ) : (
                    index + 1
                  )}
                </span>

                <p className="whitespace-nowrap text-[13.5px] font-semibold leading-tight text-[#123d73]">
                  {mainText}
                  {parenText && (
                    <span className="font-medium text-[#214368]">{parenText}</span>
                  )}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   BREAKDOWN
   ========================================================= */

function Breakdown() {
  const { matchLevel, current, candidate } = useMatchData();

  if (matchLevel === "low") {
    return <LowNextSteps />;
  }

  const iconAssets: Record<string, string> = {
    "Relevant Experience": asset("briefcase-large.png"),
    "Educational Qualification": asset("graduation-cap.png"),
    "Key Skills": asset("settings-large.png"),
    "Role Fit": asset("ChatGPT Image Sep 16, 2026, 04_35_22 PM.png"),
    "Industry Experience": asset("users-large.png"),
    "Location Preference": asset("location.png"),
  };

  const breakdownItems = current.breakdown.map((item) => {
    let score = item.score;
    if (candidate.breakdown) {
      if (item.title === "Relevant Experience") score = candidate.breakdown.relevantExperience;
      else if (item.title === "Educational Qualification") score = candidate.breakdown.educationalQualification;
      else if (item.title === "Key Skills") score = candidate.breakdown.keySkills;
      else if (item.title === "Role Fit") score = candidate.breakdown.roleFit;
      else if (item.title === "Industry Experience") score = candidate.breakdown.industryExperience;
      else if (item.title === "Location Preference") score = candidate.breakdown.locationPreference;
    }
    return { ...item, score };
  });

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      <h3 className="shrink-0 text-[14px] font-semibold leading-none text-[#10345f]">
        {matchLevel === "moderate"
          ? "Detailed Match Breakdown"
          : "Match Breakdown"}
      </h3>

      <p className="mt-[2px] shrink-0 text-[13px] font-medium text-[#183858]">
        Here&apos;s how your profile matches with our key requirements:
      </p>

      <div className="mt-[8px] grid min-h-0 flex-1 grid-cols-2 grid-rows-3 gap-x-[12px] gap-y-[8px]">
        {breakdownItems.map((item) => {
          const scoreColor =
            item.score >= 70
              ? "#159d3d"
              : item.score >= 50
                ? "#efa800"
                : "#d90d14";

          return (
            <div
              key={item.title}
              className="grid min-h-0 grid-cols-[40px_minmax(0,1fr)_48px] items-center gap-[10px] rounded-[10px] border border-[#e2ece5] bg-white px-[12px] py-[8px] shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
            >
              <Image
                src={iconAssets[item.title] ?? asset("briefcase-large.png")}
                alt=""
                width={64}
                height={64}
                className="h-[36px] w-[36px] object-contain"
              />

              <div className="min-w-0">
                <h4 className="truncate text-[14px] font-bold leading-tight text-[#102e50]">
                  {item.title}
                </h4>

                <p className="mt-[1px] truncate text-[12.5px] font-semibold text-[#34475c]">
                  {item.description}
                </p>

                <div className="mt-[5px] h-[8px] overflow-hidden rounded-full bg-[#e0e5e8]">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${item.score}%`,
                      background: scoreColor,
                    }}
                  />
                </div>
              </div>

              <span
                className="text-right text-[15px] font-bold"
                style={{ color: scoreColor }}
              >
                {item.score}%
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-[22px] flex h-[36px] shrink-0 items-center gap-[8px] rounded-[8px] border border-[#d8eae0] bg-[#eff9f2] px-[12px] text-[13px] text-[#173e34]">
        <BookOpen className="h-[16px] w-[16px] shrink-0 text-[#087447]" />

        <span className="truncate">
          <span className="font-bold">Tip:</span> Update your CV with more relevant experience and skills to increase your match score and improve your chances.
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   LOW MATCH
   ========================================================= */

function LowNextSteps() {
  const data = [
    {
      title: "Gain Relevant Experience",
      text:
        "Consider gaining experience in sales, business development or event management.",
      icon: GraduationCap,
    },
    {
      title: "Build Key Skills",
      text:
        "Improve skills in client acquisition, negotiation and relationship management.",
      icon: BookOpen,
    },
    {
      title: "Explore Other Opportunities",
      text:
        "Check out other open positions that match your current profile.",
      icon: Search,
    },
  ];

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[8px] bg-[#f3fbf6] px-[16px] py-[10px]">
      <div className="flex shrink-0 items-center gap-[10px]">
        <Lightbulb className="h-[24px] w-[24px] text-[#368615] shrink-0" fill="#368615" />

        <div className="space-y-[2px]">
          <h3 className="text-[17px] font-semibold leading-tight text-[#113a72]">
            What You Can Do Next?
          </h3>

          <p className="text-[13px] font-medium text-[#466580]">
            We encourage you to continue building your skills and explore other suitable opportunities with us.
          </p>
        </div>
      </div>

      <div className="mt-[8px] flex min-h-0 flex-1 flex-col items-center justify-between rounded-[8px] bg-white px-[16px] py-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
        <div className="grid w-full grid-cols-3 divide-x divide-[#f0f4f1]">
          {data.map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="flex gap-[10px] px-[12px] first:pl-0 last:pr-0"
            >
              <Icon
                className="mt-[2px] h-[24px] w-[24px] shrink-0 text-[#075333]"
                strokeWidth={2.5}
              />

              <div>
                <h4 className="text-[14.5px] font-semibold leading-tight text-[#113a72]">
                  {title}
                </h4>

                <p className="mt-[4px] text-[12.5px] font-medium leading-[1.3] text-[#3e536c]">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/careers"
          className="mt-[10px] flex h-[34px] items-center gap-[8px] rounded-[5px] border border-[#075333] px-[20px] text-[13px] font-bold text-[#075333] transition-colors hover:bg-[#075333] hover:text-white"
        >
          View Other Job Opportunities
          <ArrowRight className="h-[14px] w-[14px]" strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
}


/* =========================================================
   PROFILE
   ========================================================= */

const digitsOnly = (value?: string | null) => (value || "").replace(/\D/g, "");

/** Last 10 digits, so "+91 98765 43210" and "9876543210" compare equal. */
const phoneKey = (value?: string | null) => digitsOnly(value).slice(-10);

const isValidEmail = (value?: string | null) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((value || "").trim());

const isValidPhone = (value?: string | null) => digitsOnly(value).length >= 10;

/**
 * Details the application form needs before it can be started. LinkedIn and the
 * photo stay optional — the form itself never asks for them.
 */
function profileIssues(candidate: CandidateProfileData): string[] {
  const issues: string[] = [];
  if (!(candidate.candidateName || "").trim()) issues.push("full name");
  if (!isValidEmail(candidate.email)) issues.push("a valid email address");
  if (!isValidPhone(candidate.phone)) issues.push("a valid mobile number");
  return issues;
}

const MIN_PHOTO_PIXELS = 200;
const MAX_PHOTO_BYTES = 5 * 1024 * 1024;
/** Laplacian variance under this reads as out of focus. Deliberately lenient. */
const MIN_PHOTO_SHARPNESS = 60;

/**
 * Rejects photos that would look bad in the card: wrong type, oversized, too few
 * pixels, or visibly out of focus. Sharpness is the variance of a Laplacian over a
 * grayscale downscale — the standard cheap blur test.
 */
async function inspectPhoto(file: File): Promise<{ url: string } | { error: string }> {
  if (!file.type.startsWith("image/")) {
    return { error: "That file is not an image. Use a JPG or PNG photo." };
  }
  if (file.size > MAX_PHOTO_BYTES) {
    return { error: "Photo is larger than 5 MB. Please choose a smaller one." };
  }

  const url = URL.createObjectURL(file);

  const image = await new Promise<HTMLImageElement | null>((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = url;
  });

  if (!image) {
    URL.revokeObjectURL(url);
    return { error: "That image could not be read. Try a different photo." };
  }

  if (image.naturalWidth < MIN_PHOTO_PIXELS || image.naturalHeight < MIN_PHOTO_PIXELS) {
    URL.revokeObjectURL(url);
    return {
      error: `Photo is only ${image.naturalWidth}x${image.naturalHeight}px. Use at least ${MIN_PHOTO_PIXELS}x${MIN_PHOTO_PIXELS}px.`,
    };
  }

  const side = 160;
  const canvas = document.createElement("canvas");
  canvas.width = side;
  canvas.height = side;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });

  // Without a canvas context the sharpness test is skipped rather than failing the upload.
  if (!ctx) return { url };

  ctx.drawImage(image, 0, 0, side, side);
  const { data } = ctx.getImageData(0, 0, side, side);

  const gray = new Float32Array(side * side);
  for (let i = 0; i < gray.length; i += 1) {
    const p = i * 4;
    gray[i] = 0.299 * data[p] + 0.587 * data[p + 1] + 0.114 * data[p + 2];
  }

  let sum = 0;
  let sumSq = 0;
  let count = 0;
  for (let y = 1; y < side - 1; y += 1) {
    for (let x = 1; x < side - 1; x += 1) {
      const i = y * side + x;
      const lap =
        4 * gray[i] - gray[i - 1] - gray[i + 1] - gray[i - side] - gray[i + side];
      sum += lap;
      sumSq += lap * lap;
      count += 1;
    }
  }

  const mean = sum / count;
  const variance = sumSq / count - mean * mean;

  if (variance < MIN_PHOTO_SHARPNESS) {
    URL.revokeObjectURL(url);
    return { error: "That photo looks blurry. Please upload a clearer one." };
  }

  return { url };
}


function ProfileCard() {
  const { candidate, updateCandidate } = useMatchData();
  const [isEditing, setIsEditing] = useState(false);
  const [photoError, setPhotoError] = useState("");
  const [isCheckingPhoto, setIsCheckingPhoto] = useState(false);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const verifiedKey = phoneKey(candidate.verifiedPhone);

  const [draft, setDraft] = useState({
    candidateName: candidate.candidateName || "",
    email: candidate.email || "",
    phone: candidate.phone || "",
    linkedin: candidate.linkedin || "",
    image: candidate.image || "",
  });

  const initials = (candidate.candidateName || "Candidate")
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const openEditor = () => {
    setPhotoError("");
    setDraft({
      candidateName: candidate.candidateName || "",
      email: candidate.email || "",
      phone: candidate.phone || "",
      linkedin: candidate.linkedin || "",
      image: candidate.image || "",
    });
    setIsEditing(true);
  };

  const pickPhoto = async (file?: File | null) => {
    if (!file) return;
    setPhotoError("");
    setIsCheckingPhoto(true);
    const result = await inspectPhoto(file);
    setIsCheckingPhoto(false);
    if ("error" in result) {
      setPhotoError(result.error);
      return;
    }
    setDraft((d) => ({ ...d, image: result.url }));
  };

  const draftIssues = profileIssues({
    ...candidate,
    candidateName: draft.candidateName,
    email: draft.email,
    phone: draft.phone,
  });

  const save = () => {
    if (draftIssues.length > 0) return;
    updateCandidate?.({
      candidateName: draft.candidateName.trim() || candidate.candidateName,
      firstName: (draft.candidateName.trim().split(" ")[0] || candidate.firstName) as string,
      email: draft.email.trim() || null,
      phone: draft.phone.trim() || null,
      linkedin: draft.linkedin.trim() || null,
      image: draft.image || null,
    });
    setIsEditing(false);
  };

  const fieldClass = (invalid: boolean) =>
    [
      "w-full rounded-[6px] border bg-white px-[9px] py-[5px] text-[14px] font-semibold text-[#0c3363] outline-none transition",
      "focus:border-[#07623a] focus:ring-2 focus:ring-[#07623a]/15 placeholder:font-normal placeholder:text-[#9aa8b4]",
      invalid ? "border-[#e0a49c]" : "border-[#d7e2da]",
    ].join(" ");

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[8px] border border-[#eaefeb] bg-white p-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      <div className="flex shrink-0 items-center justify-between">
        <h3 className="text-[17px] font-bold text-[#0c3363]">Your Profile</h3>

        {isEditing ? (
          <div className="flex items-center gap-[10px]">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="text-[14px] font-bold text-[#6b7a87] transition-opacity hover:opacity-80"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={save}
              disabled={draftIssues.length > 0}
              title={draftIssues.length > 0 ? `Still needed: ${draftIssues.join(", ")}` : undefined}
              className="rounded-[5px] bg-[#07623a] px-[10px] py-[3px] text-[14px] font-bold text-white transition-colors hover:bg-[#05502f] disabled:cursor-not-allowed disabled:bg-[#b6c4bc]"
            >
              Save
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={openEditor}
            className="flex items-center gap-[4px] text-[15px] font-bold text-[#0977df] transition-opacity hover:opacity-80"
          >
            <Pencil className="h-[15px] w-[15px] stroke-[2.5]" />
            Edit
          </button>
        )}
      </div>

      {isEditing ? (
        <div className="boe-modal-scroll mt-[8px] flex min-h-0 flex-1 gap-[12px] overflow-y-auto pr-[4px]">
          {/* Photo column — wide enough to judge the picture before saving. */}
          <div className="w-[132px] shrink-0">
            <input
              ref={photoInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                void pickPhoto(e.target.files?.[0]);
                e.target.value = "";
              }}
            />
            <button
              type="button"
              onClick={() => photoInputRef.current?.click()}
              disabled={isCheckingPhoto}
              className="group relative grid h-[132px] w-[132px] place-items-center overflow-hidden rounded-[10px] border border-dashed border-[#a9c9b6] bg-[#f2f9f4] disabled:cursor-wait"
            >
              {draft.image ? (
                // Object-URL previews are not routable through next/image.
                // eslint-disable-next-line @next/next/no-img-element
                <img src={draft.image} alt="" className="h-full w-full object-cover object-center" />
              ) : (
                <span className="text-[30px] font-bold text-[#07623a]">{initials || "CV"}</span>
              )}
              <span className="absolute inset-x-0 bottom-0 bg-[#07623a]/85 py-[3px] text-[11px] font-bold text-white">
                {isCheckingPhoto ? "Checking…" : draft.image ? "Change photo" : "Add photo"}
              </span>
            </button>

            {photoError ? (
              <p className="mt-[5px] text-[11.5px] font-semibold leading-snug text-[#b23b2e]">{photoError}</p>
            ) : (
              <p className="mt-[5px] text-[11px] leading-snug text-[#6b7a87]">
                Clear, front-facing photo. Min 200x200px.
              </p>
            )}
          </div>

          <div className="min-w-0 flex-1 space-y-[6px]">
            <div>
              <input
                className={fieldClass(!draft.candidateName.trim())}
                placeholder="Full name *"
                value={draft.candidateName}
                onChange={(e) => setDraft((d) => ({ ...d, candidateName: e.target.value }))}
              />
            </div>

            <input
              className={fieldClass(!isValidEmail(draft.email))}
              type="email"
              placeholder="Email address *"
              value={draft.email}
              onChange={(e) => setDraft((d) => ({ ...d, email: e.target.value }))}
            />

            <div>
              <input
                className={fieldClass(!isValidPhone(draft.phone))}
                type="tel"
                placeholder="Mobile number *"
                value={draft.phone}
                onChange={(e) => setDraft((d) => ({ ...d, phone: e.target.value }))}
              />
              {/* The OTP proved one specific number; say so, and flag any change. */}
              {verifiedKey && (
                phoneKey(draft.phone) === verifiedKey ? (
                  <p className="mt-[3px] flex items-center gap-[4px] text-[11px] font-bold text-[#07623a]">
                    <ShieldCheck className="h-[12px] w-[12px] stroke-[2.6]" />
                    Verified on WhatsApp
                  </p>
                ) : (
                  <p className="mt-[3px] text-[11px] font-semibold leading-snug text-[#b26a2e]">
                    Not the verified number. OTP was confirmed on{" "}
                    {candidate.verifiedPhone}.
                  </p>
                )
              )}
            </div>

            <input
              className={fieldClass(false)}
              placeholder="LinkedIn profile (optional)"
              value={draft.linkedin}
              onChange={(e) => setDraft((d) => ({ ...d, linkedin: e.target.value }))}
            />
          </div>
        </div>
      ) : (
        <div className="mt-[8px] flex min-h-0 flex-1 items-center gap-[12px]">
          {candidate.image ? (
            // May be a blob: preview from the editor above, which next/image cannot take.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={candidate.image}
              alt={candidate.candidateName}
              className="h-[116px] w-[116px] shrink-0 rounded-[8px] object-cover object-center"
            />
          ) : (
            <button
              type="button"
              onClick={openEditor}
              className="flex h-[116px] w-[116px] shrink-0 flex-col items-center justify-center gap-[2px] rounded-[8px] border border-dashed border-[#a9c9b6] bg-[#e4efe8] text-[#075333] transition-colors hover:bg-[#d8e9df]"
            >
              <span className="text-[32px] font-bold leading-none">{initials || "CV"}</span>
              <span className="text-[9.5px] font-bold uppercase tracking-[0.04em] text-[#07623a]">
                Add photo
              </span>
            </button>
          )}

          <div className="min-w-0 flex-1">
            <h4 className="truncate text-[17px] font-bold text-[#0c3363]">
              {candidate.candidateName}
            </h4>

            <div className="mt-[4px] space-y-[4px] text-[15px] font-semibold text-[#2d4766]">
              {candidate.email ? (
                <p className="flex items-center gap-[7px]">
                  <Mail className="h-[15px] w-[15px] shrink-0 text-[#0c3363] stroke-[2.5]" />
                  <span className="truncate">{candidate.email}</span>
                </p>
              ) : (
                <MissingDetail label="Add email" onClick={openEditor} icon={Mail} />
              )}

              {candidate.phone ? (
                <p className="flex items-center gap-[7px]">
                  <Phone className="h-[15px] w-[15px] shrink-0 text-[#0c3363] stroke-[2.5]" />
                  <span className="truncate">{candidate.phone}</span>
                  {verifiedKey &&
                    (phoneKey(candidate.phone) === verifiedKey ? (
                      <ShieldCheck
                        className="h-[15px] w-[15px] shrink-0 text-[#07623a] stroke-[2.6]"
                        aria-label="Verified on WhatsApp"
                      />
                    ) : (
                      <span className="shrink-0 rounded-[4px] bg-[#fdf3e8] px-[5px] py-[1px] text-[10px] font-bold text-[#b26a2e]">
                        UNVERIFIED
                      </span>
                    ))}
                </p>
              ) : (
                <MissingDetail label="Add mobile number" onClick={openEditor} icon={Phone} />
              )}

              {/* LinkedIn sits under the phone, and only when the CV actually had one. */}
              {Boolean(candidate.linkedin) && (
                <p className="flex items-center gap-[7px]">
                  <LinkedInIcon className="h-[15px] w-[15px] shrink-0 text-[#0977df]" />
                  <span className="truncate">{candidate.linkedin}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/** Prompt shown in place of a detail the CV did not yield. */
function MissingDetail({
  label,
  onClick,
  icon: Icon,
}: {
  label: string;
  onClick: () => void;
  icon: React.ElementType;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-[7px] text-[14px] font-semibold text-[#0977df] transition-opacity hover:opacity-80"
    >
      <Icon className="h-[15px] w-[15px] shrink-0 stroke-[2.5]" />
      <span className="truncate underline underline-offset-2">{label}</span>
    </button>
  );
}

/* =========================================================
   CV
   ========================================================= */

function CVCard({ onClose }: { onClose?: () => void }) {
  const { candidate } = useMatchData();

  const handleViewFile = () => {
    if (candidate.cvUrl) {
      window.open(candidate.cvUrl, "_blank");
    } else {
      alert(`CV File: ${candidate.cvName} (${candidate.cvSize})`);
    }
  };

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[8px] border border-[#eaefeb] bg-white p-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      <h3 className="shrink-0 text-[17px] font-bold text-[#0c3363]">
        Your CV
      </h3>

      <div className="mt-[8px] flex min-h-0 flex-1 items-center gap-[12px] rounded-[8px] bg-[#f2f8fc] px-[12px] py-[10px]">
        <div className="relative grid h-[58px] w-[48px] shrink-0 place-items-center rounded-[6px] border-[2.5px] border-[#075333] text-[#075333]">
          <FileText className="h-[28px] w-[28px] stroke-[2]" />

          <span className="absolute -bottom-[6px] -right-[6px] grid h-[20px] w-[20px] place-items-center rounded-full bg-[#075333] text-white">
            <Check className="h-[12px] w-[12px] stroke-[3]" />
          </span>
        </div>

        <div className="min-w-0 flex-1 pl-[4px]">
          <h4 className="truncate text-[16px] font-bold text-[#0c3363]">
            {candidate.cvName}
          </h4>

          <p className="mt-[2px] text-[14px] font-semibold text-[#2d4766]">
            {candidate.cvSize}
          </p>

          <div className="mt-[6px] flex flex-wrap gap-x-[12px] gap-y-[3px] text-[14px] font-bold text-[#0977df]">
            <button
              type="button"
              onClick={handleViewFile}
              className="flex items-center gap-[5px] hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Eye className="h-[15px] w-[15px] stroke-[2.5]" />
              View File
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-[5px] hover:opacity-80 transition-opacity cursor-pointer"
            >
              <RefreshCw className="h-[15px] w-[15px] stroke-[2.5]" />
              Upload Different CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   JOB SUMMARY
   ========================================================= */

function JobSummary() {
  const { candidate } = useMatchData();
  const j = candidate.jobDetails;
  const rows = [
    { image: asset("building.png"), text: j?.company || job.company },
    { image: asset("location.png"), text: j?.location || job.location },
    { image: asset("briefcase.png"), text: j?.type || job.type },
    { image: asset("bar-chart.png"), text: j?.experience || job.experience },
    { image: asset("graduation-cap.png"), text: j?.education || job.education },
  ];

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[8px] border border-[#eaefeb] bg-white p-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      <h3 className="shrink-0 text-[17px] font-bold text-[#0c3363]">
        Job Summary
      </h3>

      <div className="mt-[8px] flex flex-col gap-[6px]">
        {rows.map(({ image, text }) => (
          <div
            key={text}
            className="flex items-center gap-[10px]"
          >
            <Image
              src={image}
              alt=""
              width={48}
              height={48}
              className="h-[26px] w-[26px] shrink-0 object-contain"
            />

            <span className="truncate text-[15px] font-semibold text-[#2d4766]">
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   SUPPORT
   ========================================================= */

function SupportCard() {
  const { matchLevel, theme } = useMatchData();

  if (matchLevel === "low") {
    return (
      <div className="flex h-full min-h-0 items-center gap-[8px] overflow-hidden rounded-[6px] border border-[#dcebdd] bg-[#f3fbf3] px-[10px]">
        <span className="h-[28px] w-[18px] shrink-0 rotate-[25deg] rounded-[100%_0_100%_0] bg-[#23943d]" />

        <div>
          <h4 className="text-[14px] font-bold text-[#125c37]">
            Looking for a Better Fit?
          </h4>

          <p className="mt-[2px] text-[13px] font-medium leading-tight text-[#28425d]">
            Explore other career opportunities at Bharat Organic Expo.
          </p>
        </div>
      </div>
    );
  }

  if (matchLevel === "high") {
    return (
      <div className="flex h-full min-h-0 items-center gap-[8px] overflow-hidden px-[9px] text-[13.5px] font-semibold text-[#25405c]">
        <LockKeyhole className="h-[16px] w-[16px] shrink-0 text-[#087447]" />

        Your data is secure and will only be used for recruitment purposes.
      </div>
    );
  }

  return (
    <div
      className="flex h-full min-h-0 items-center gap-[10px] overflow-hidden rounded-[8px] px-[12px] py-[8px]"
      style={{ background: theme.supportBg }}
    >
      <Info className="h-[24px] w-[24px] shrink-0 fill-[#1565c0] text-white" />

      <div className="min-w-0">
        <h4 className="text-[14px] font-bold text-[#102d58] leading-tight">
          Still have questions?
        </h4>

        <p className="mt-[2px] text-[13px] font-medium leading-tight text-[#214368]">
          Feel free to reach out to our HR team at
          <br />
          <strong className="font-semibold text-[#102d58]">careers@bharatorganicexpo.com</strong>
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   SIDEBAR FOOTER
   ========================================================= */

function SidebarFooter() {
  return (
    <div className="relative flex h-full w-full min-h-0 items-end justify-center overflow-hidden">
      <Image
        src={separatedAssets.sidebarFooter}
        alt=""
        width={2040}
        height={660}
        className="h-full w-full object-contain object-bottom"
      />
    </div>
  );
}

/* =========================================================
   SIDEBAR
   ========================================================= */

function Sidebar({ onClose, onApply }: { onClose?: () => void; onApply?: () => void }) {
  const { matchLevel, current, candidate } = useMatchData();
  // The application form needs these, so the step cannot start without them.
  const missing = profileIssues(candidate);

  return (
    <aside
      className="
        grid
        h-full
        min-h-0
        overflow-hidden
        border-l
        border-[#e4ebe5]
        bg-[linear-gradient(180deg,#f8fcf9,#eff8f1)]
        px-[clamp(10px,1.1vw,16px)]
        pb-0
        pt-[8px]

        grid-rows-[54px_246px_130px_210px_48px_48px_58px_1fr]
        gap-[7px]
      "
    >
      {/* TOP BAR */}
      <div className="flex min-h-0 items-center justify-end overflow-hidden">
        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-[6px] text-[17px] font-bold text-[#075333] transition-colors hover:text-red-600 pr-1"
        >
          <ArrowLeft className="h-[18px] w-[18px] stroke-[2.5]" />
          Back to Careers
        </button>
      </div>

      <ProfileCard />

      <CVCard onClose={onClose} />

      <JobSummary />

      {matchLevel !== "low" ? (
        <>
          {/* CTA */}
          <div className="min-h-0">
            <button
              type="button"
              onClick={onApply}
              disabled={missing.length > 0}
              title={missing.length > 0 ? `Add ${missing.join(", ")} in Your Profile first.` : undefined}
              className="flex h-full w-full items-center justify-center gap-[8px] rounded-[8px] bg-[#07623a] text-[16px] font-bold text-white transition-colors shadow-sm hover:bg-[#05502f] disabled:cursor-not-allowed disabled:bg-[#b6c4bc] disabled:shadow-none"
            >
              {current.cta}
              <ArrowRight className="h-[18px] w-[18px] stroke-[2.2]" />
            </button>
          </div>

          {/* SECOND */}
          <div className="min-h-0">
            <button className="flex h-full w-full items-center justify-center gap-[8px] rounded-[8px] border border-[#07623a] bg-white text-[16px] font-bold text-[#07623a] hover:bg-[#f2faf4] transition-colors shadow-sm">
              <Bookmark className="h-[20px] w-[20px] stroke-[2.2] text-[#07623a]" />
              Save for Later
            </button>
          </div>

          <SupportCard />
        </>
      ) : (
        <div className="row-span-3 flex min-h-0 flex-col justify-between rounded-[8px] border border-[#dcebdd] bg-[#f5faf6] p-[12px] shadow-sm">
          <div className="flex gap-[10px] items-start">
            <Image
              src={separatedAssets.headerLeaf}
              alt=""
              width={82}
              height={92}
              className="h-[22px] w-[20px] shrink-0 object-contain mt-[2px]"
            />
            <div className="flex-1">
              <h4 className="text-[13.5px] font-bold text-[#095232]">
                Looking for a Better Fit?
              </h4>
              <p className="mt-[3px] text-[11.5px] font-medium leading-[1.28] text-[#1c6448]">
                Browse other career opportunities at<br />Bharat Organic Expo and find the right role for you.
              </p>
            </div>
          </div>
          <Link
            href="/careers"
            className="mt-[10px] flex h-[38px] shrink-0 items-center justify-center gap-[8px] rounded-[6px] bg-[#075333] text-[13px] font-bold text-white hover:bg-[#064228] transition-colors"
          >
            View All Open Positions
            <ArrowRight className="h-[15px] w-[15px] stroke-[2.5]" />
          </Link>
        </div>
      )}

      <SidebarFooter />
    </aside>
  );
}

/* =========================================================
   PAGE / 800PX POPUP
   ========================================================= */

const DESIGN_WIDTH = 1500;
const DESIGN_HEIGHT = 900;
const MODAL_WIDTH = "min(95vw, 1440px, calc(92vh * 1500 / 900))";

export function EligibilityPopupContent({
  candidate = defaultCandidateData,
  score,
  onClose,
  onBack,
  onApply,
  onCandidateChange,
}: {
  candidate?: CandidateProfileData;
  score?: number;
  onClose?: () => void;
  /** Returns to the previous step; falls back to closing when not supplied. */
  onBack?: () => void;
  onApply?: () => void;
  onCandidateChange?: (candidate: CandidateProfileData) => void;
}) {
  // Edits are held locally so the card updates instantly, and mirrored upward so the
  // application form on the next step receives the corrected details.
  const [edited, setEdited] = useState<Partial<CandidateProfileData> | null>(null);
  const merged = edited ? { ...candidate, ...edited } : candidate;

  const updateCandidate = (patch: Partial<CandidateProfileData>) => {
    setEdited((current) => ({ ...current, ...patch }));
    onCandidateChange?.({ ...merged, ...patch });
  };

  const matchData = { ...getMatchData(merged, score), updateCandidate };

  return (
    <MatchContext.Provider value={matchData}>
      <div
        className="grid overflow-hidden bg-white text-[#10243f]"
        style={{
          width: `${DESIGN_WIDTH}px`,
          height: `${DESIGN_HEIGHT}px`,
          gridTemplateColumns: "68.2% 31.8%",
        }}
      >
        {/* LEFT */}
        <section
          className="grid h-full min-h-0 overflow-hidden px-6 py-4
            grid-rows-[82px_68px_240px_175px_1fr] gap-[10px]
          "
        >

          {/* JOB HEADING */}
          <div className="relative min-h-0 overflow-visible pr-[188px] pb-[6px]">
            {onBack || onClose ? (
              <button
                type="button"
                onClick={onBack ?? onClose}
                className="flex w-fit items-center gap-[8px] text-[17px] font-semibold text-[#113a72] transition-colors hover:text-red-600"
              >
                <ArrowLeft className="h-[22px] w-[22px]" strokeWidth={2.5} />
                Back
              </button>
            ) : (
              <Link
                href="/careers"
                className="flex w-fit items-center gap-[8px] text-[17px] font-semibold text-[#113a72] transition-colors hover:text-red-600"
              >
                <ArrowLeft className="h-[22px] w-[22px]" strokeWidth={2.5} />
                Back
              </Link>
            )}

            <h1 className="mt-[2px] truncate text-[26px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#113a72]">
              {candidate.jobDetails?.title || job.title}
            </h1>

            <div className="mt-[2px] flex items-center gap-[8px] text-[16px] font-medium text-[#3b587b]">
              <span>{candidate.jobDetails?.company || job.company}</span>
              <span className="text-[#a4b5c7]">|</span>
              <span>{candidate.jobDetails?.brand || job.brand}</span>
            </div>
          </div>

          <div className="min-h-0 overflow-hidden pt-[10px]">
            <ProgressSteps />
          </div>

          <div className="min-h-0 overflow-hidden">
            <ResultHero />
          </div>

          <div className="min-h-0 overflow-hidden">
            <ScoreSummary />
          </div>

          <div className="min-h-0 overflow-hidden">
            <Breakdown />
          </div>
        </section>

        {/* RIGHT */}
        <Sidebar onClose={onClose} onApply={onApply} />
      </div>
    </MatchContext.Provider>
  );
}

export function EligibilityModal({
  isOpen,
  candidate = defaultCandidateData,
  score,
  onClose,
  onBack,
  onApply,
  onCandidateChange,
}: {
  isOpen: boolean;
  candidate?: CandidateProfileData;
  score?: number;
  onClose: () => void;
  onBack?: () => void;
  onApply?: () => void;
  onCandidateChange?: (candidate: CandidateProfileData) => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3">
      <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[5px]" onClick={onClose} />

      <div
        className="
          relative
          z-10
          overflow-hidden
          rounded-[18px]
          bg-[#fbfcf9]
          shadow-[0_30px_90px_rgba(0,0,0,.28)]
        "
        style={{
          width: MODAL_WIDTH,
          aspectRatio: `${DESIGN_WIDTH} / ${DESIGN_HEIGHT}`,
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute left-0 top-0"
            style={{
              width: `${DESIGN_WIDTH}px`,
              height: `${DESIGN_HEIGHT}px`,
              transform: `scale(calc(${MODAL_WIDTH} / ${DESIGN_WIDTH}px))`,
              transformOrigin: "top left",
            }}
          >
            <EligibilityPopupContent candidate={candidate} score={score} onClose={onClose} onBack={onBack} onApply={onApply} onCandidateChange={onCandidateChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

import UploadCvModal from "@/app/components/careers/uploade_cv/page";

export default function CareerEligibilityPage() {
  const [eligibilityOpen, setEligibilityOpen] = useState(false);
  const [uploadCvOpen, setUploadCvOpen] = useState(true);
  const [candidateData, setCandidateData] = useState<CandidateProfileData>(defaultCandidateData);

  return (
    <main className="min-h-screen bg-white">
      {!eligibilityOpen && !uploadCvOpen && (
        <div className="flex min-h-screen items-center justify-center">
          <button
            type="button"
            onClick={() => setUploadCvOpen(true)}
            className="rounded-[8px] bg-[#08743e] px-6 py-3 text-sm font-semibold text-white"
          >
            Upload CV & Check Eligibility
          </button>
        </div>
      )}

      {uploadCvOpen && (
        <UploadCvModal
          job={{
            title: "Sales Manager – Domestic Exhibition Sales & Sponsorships",
            company: "Namo Gange Wellness Pvt. Ltd.",
            brand: "Bharat Organic Expo",
            location: "Delhi NCR",
            type: "Full Time",
            experience: "3 – 6 Years",
          }}
          onClose={() => setUploadCvOpen(false)}
          onAnalyze={(data) => {
            if (data) {
              setCandidateData(data);
            }
            setUploadCvOpen(false);
            setEligibilityOpen(true);
          }}
        />
      )}

      <EligibilityModal
        isOpen={eligibilityOpen}
        candidate={candidateData}
        score={candidateData.score}
        onClose={() => {
          setEligibilityOpen(false);
          setUploadCvOpen(true);
        }}
      />
    </main>
  );
}
