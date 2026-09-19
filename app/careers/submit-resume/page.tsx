"use client";

import { createContext, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
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
  person: asset("ChatGPT Image Sep 16, 2026, 04_31_37 PM.png"),
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

    personImage: separatedAssets.person,

    step: 3,

    title: `Great News, ${profile.name.split(" ")[0]}!`,

    subtitle: "You are eligible to apply for this position.",

    description:
      "Your profile meets the minimum requirements and shows a good alignment with what we are looking for. We encourage you to complete your application and join us in our mission for a healthier and more sustainable India.",

    quote:
      "Your CV aligns well with the key requirements for this position.",

    rightText: "Right\nPeople\nBrighter\nTomorrows",

    summaryTitle: "Your Profile Match",

    summaryText:
      "Your CV aligns well with the key requirements for this position.",

    suggestionTitle: "You Meet the Key Requirements",

    requirements: [
      "Relevant experience in exhibition / trade show sales",
      "Exposure to client acquisition & sponsorships",
      "Good communication and negotiation skills",
      "Relevant industry experience",
      "Willing to work from Delhi NCR",
    ],

    cta: "Continue & Apply for This Job",

    breakdown: [
      {
        title: "Relevant Experience",
        description: "Exhibition / Trade Show / B2B Sales",
        score: 78,
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
        score: 75,
        icon: Target,
      },
      {
        title: "Role Fit",
        description: "Leadership, Communication, Travel Readiness",
        score: 65,
        icon: Target,
      },
      {
        title: "Industry Experience",
        description: "Healthcare / Wellness / Exhibition Industry",
        score: 70,
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

    personImage: separatedAssets.person,

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

    personImage: "/career-submit-resume-assets/sadimage.png",

    step: 2,

    title: `Sorry, ${profile.name.split(" ")[0]}!`,

    subtitle: "This position may not be the right fit for you at this time.",

    description:
      "Based on our screening, your profile does not meet the minimum requirements for this role. Therefore, you are not eligible to apply for this position.\n\nWe truly appreciate your interest in Bharat Organic Expo and encourage you to explore other opportunities that may be a better match for your skills and experience.",

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

    breakdown: [],
  },
} as const;

type MatchContextType = {
  matchScore: number;
  matchLevel: MatchLevel;
  theme: (typeof stateTheme)["high" | "moderate" | "low"];
  current: (typeof matchConfig)["high" | "moderate" | "low"];
};

const MatchContext = createContext<MatchContextType>({
  matchScore: 72,
  matchLevel: "high",
  theme: stateTheme["high"],
  current: matchConfig["high"],
});

export const useMatchData = () => useContext(MatchContext);

export function getMatchData(score: number): MatchContextType {
  const level: MatchLevel =
    score >= 70 ? "high" : score >= 50 ? "moderate" : "low";
  return {
    matchScore: score,
    matchLevel: level,
    theme: stateTheme[level],
    current: matchConfig[level],
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
        style={{ width: matchLevel === "low" ? "40%" : "40.2%" }}
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
        Use a slightly wider rectangular patch so no orange/green/red crescent
        from the image remains visible behind the real dynamic icon.
      */}
      <div
        className="pointer-events-none absolute left-[32.25%] top-[7.2%] z-[18] h-[78px] w-[86px]"
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
                className="mt-[4px] whitespace-nowrap text-[15px] font-semibold leading-[1.2]"
                style={{ color: theme.dark }}
              >
                {current.subtitle}
              </h3>

              <p className="mt-[8px] max-w-[98%] whitespace-pre-wrap text-[13px] leading-[1.4] text-[#123d73]">
                {current.description}
              </p>

              {current.quote && (
                <p className="mt-[5px] max-w-[95%] text-[12px] italic leading-[1.28] text-[#123d73]">
                  “ {current.quote} ”
                </p>
              )}

              <p className="mt-[10px] text-[13px] italic leading-[1.12] text-[#164232]">
                — Talent Acquisition Team
                <br />
                <span className="pl-[16px] font-medium">Bharat Organic Expo</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT STICKY ARTWORK */}
      <div className="pointer-events-none absolute bottom-0 right-[2.4%] top-[4%] z-20 w-[17.2%] overflow-visible">
        <Image
          src={separatedAssets.stickyNote}
          alt=""
          fill
          sizes="18vw"
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
    <div className="grid grid-cols-[12px_72px_1fr] items-center gap-[12px] text-[13.5px] text-[#254b73]">
      <span
        className="h-[12px] w-[12px] rounded-full"
        style={{ background: color }}
      />
      <span className="font-semibold">{range}</span>
      <span className="font-medium">{label}</span>
    </div>
  );
}

/* =========================================================
   SUMMARY
   ========================================================= */

function ScoreSummary() {
  const { matchLevel, current, theme } = useMatchData();

  return (
    <div className="grid h-full min-h-0 grid-cols-[1.18fr_.82fr] gap-[10px]">
      <div className="flex min-h-0 items-center gap-[clamp(10px,1.35vw,20px)] overflow-hidden rounded-[7px] border border-[#e0e7e2] bg-white px-[clamp(10px,1.35vw,20px)]">
        <ScoreRing />

        <div className="min-w-0 pl-[4px]">
          <h3 className="text-[18px] font-bold tracking-tight text-[#113a72]">
            {current.summaryTitle}
          </h3>

          <p className="mt-[4px] max-w-[400px] text-[14.5px] font-medium leading-[1.3] text-[#254b73]">
            {current.summaryText}
          </p>

          <div className="mt-[7px] space-y-[4px]">
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
        className="flex h-full min-h-0 flex-col overflow-y-auto rounded-[7px] border px-[clamp(9px,1vw,15px)] py-[clamp(7px,.7vh,10px)]"
        style={{
          background: theme.panelBg,
          borderColor: theme.panelBorder,
        }}
      >
        <div className="flex items-center gap-[10px]">
          <div
            className="grid h-[24px] w-[24px] shrink-0 place-items-center rounded-full text-white"
            style={{ background: theme.primary }}
          >
            {matchLevel === "moderate" ? (
              <Lightbulb className="h-[14px] w-[14px]" />
            ) : matchLevel === "low" ? (
              <span className="text-[15px] font-bold leading-none">!</span>
            ) : (
              <Target className="h-[14px] w-[14px]" />
            )}
          </div>

          <h3
            className="text-[17px] font-bold leading-tight"
            style={{ color: theme.dark }}
          >
            {current.suggestionTitle}
          </h3>
        </div>

        <div className="mt-[10px] space-y-[6px]">
          {current.requirements.map((item, index) => {
            const hasParen = item.includes("(");
            const mainText = hasParen ? item.split("(")[0] : item;
            const parenText = hasParen ? "(" + item.split("(")[1] : "";

            return (
              <div
                key={item}
                className="flex items-start gap-[8px]"
              >
                <span
                  className="mt-[3.5px] grid h-[15px] w-[15px] shrink-0 place-items-center rounded-full text-[9px] font-bold text-white"
                  style={{ background: theme.primary }}
                >
                  {matchLevel === "high" ? (
                    <Check className="h-[10px] w-[10px]" strokeWidth={3.5} />
                  ) : matchLevel === "low" ? (
                    <X className="h-[10px] w-[10px]" strokeWidth={3.5} />
                  ) : (
                    index + 1
                  )}
                </span>

                <p className="text-[13px] font-medium leading-[1.35] text-[#123d73]">
                  {mainText}
                  {parenText && (
                    <span className="font-normal text-[#5a718c]">{parenText}</span>
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
  const { matchLevel, current } = useMatchData();

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

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      <h3 className="shrink-0 text-[12px] font-semibold leading-none text-[#10345f]">
        {matchLevel === "moderate"
          ? "Detailed Match Breakdown"
          : "Match Breakdown"}
      </h3>

      <p className="mt-[3px] shrink-0 text-[12px] text-[#183858]">
        Here&apos;s how your profile matches with our key requirements:
      </p>

      <div className="mt-[7px] grid min-h-0 flex-1 grid-cols-2 grid-rows-3 gap-x-[clamp(18px,2.5vw,38px)] gap-y-[5px]">
        {current.breakdown.map((item) => {
          const scoreColor =
            item.score >= 70
              ? "#159d3d"
              : item.score >= 50
                ? "#efa800"
                : "#d90d14";

          return (
            <div
              key={item.title}
              className="grid min-h-0 grid-cols-[40px_minmax(0,1fr)_48px] items-center gap-[8px]"
            >
              <Image
                src={iconAssets[item.title] ?? asset("briefcase-large.png")}
                alt=""
                width={64}
                height={64}
                className="h-[31px] w-[31px] object-contain"
              />

              <div className="min-w-0">
                <h4 className="truncate text-[12px] font-extrabold leading-tight text-[#102e50]">
                  {item.title}
                </h4>

                <p className="mt-[1px] truncate text-[12px] text-[#34475c]">
                  {item.description}
                </p>

                <div className="mt-[4px] h-[5px] overflow-hidden rounded-full bg-[#e0e5e8]">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${item.score}%`,
                      background: scoreColor,
                    }}
                  />
                </div>
              </div>

              <strong
                className="text-right text-[12px]"
                style={{ color: scoreColor }}
              >
                {item.score}%
              </strong>
            </div>
          );
        })}
      </div>

      <div className="mt-[5px] flex h-[29px] shrink-0 items-center gap-[8px] rounded-[5px] bg-[#eff9f2] px-[12px] text-[12px] text-[#173e34]">
        <BookOpen className="h-[14px] w-[14px] shrink-0 text-[#087447]" />

        <span className="truncate">
          <strong>Tip:</strong> Update your CV with more relevant experience and skills to increase your match score and improve your chances.
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
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[8px] bg-[#f3fbf6] px-[20px] py-2">
      <div className="flex shrink-0 items-start gap-[12px]">
        <Lightbulb className="h-[28px] w-[28px] text-[#368615]" fill="#368615" />

        <div className="space-y-1">
          <h3 className="text-[17.5px] font-semibold leading-tight text-[#113a72]">
            What You Can Do Next?
          </h3>

          <p className=" text-[13.5px] font-medium text-[#466580]">
            We encourage you to continue building your skills and explore other suitable opportunities with us.
          </p>
        </div>
      </div>

      <div className="mt-2 flex flex-1 flex-col items-center justify-center rounded-[8px] bg-white px-[20px] py-2 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
        <div className="grid w-full grid-cols-3 divide-x divide-[#f0f4f1]">
          {data.map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="flex gap-[12px] px-[16px] first:pl-0 last:pr-0"
            >
              <Icon
                className="mt-[2px] h-[28px] w-[28px] shrink-0 text-[#075333]"
                strokeWidth={2.5}
              />

              <div>
                <h4 className="text-[15px] font-semibold leading-tight text-[#113a72]">
                  {title}
                </h4>

                <p className="mt-[6px] text-[13.5px] font-medium leading-[1.35] text-[#3e536c]">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/careers"
          className="mt-[20px] flex h-[36px] items-center gap-[8px] rounded-[5px] border border-[#075333] px-[24px] text-[13.5px] font-bold text-[#075333] transition-colors hover:bg-[#075333] hover:text-white"
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

function ProfileCard() {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[8px] border border-[#eaefeb] bg-white p-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      <div className="flex shrink-0 items-center justify-between">
        <h3 className="text-[16px] font-bold text-[#0c3363]">
          Your Profile
        </h3>

        <button className="flex items-center gap-[4px] text-[14px] font-bold text-[#0977df] transition-opacity hover:opacity-80">
          <Pencil className="h-[14px] w-[14px] stroke-[2.5]" />
          Edit
        </button>
      </div>

      <div className="mt-[12px] flex min-h-0 flex-1 items-center gap-[14px]">
        <Image
          src={profile.image}
          alt={profile.name}
          width={160}
          height={160}
          className="h-[84px] w-[84px] shrink-0 rounded-[8px] object-cover object-center"
        />

        <div className="min-w-0 flex-1">
          <h4 className="truncate text-[16px] font-bold text-[#0c3363]">
            {profile.name}
          </h4>

          <div className="mt-[6px] space-y-[6px] text-[14px] font-medium text-[#2d4766]">
            <p className="flex items-center gap-[8px]">
              <Mail className="h-[14px] w-[14px] shrink-0 text-[#0c3363] stroke-[2.5]" />
              <span className="truncate">{profile.email}</span>
            </p>

            <p className="flex items-center gap-[8px]">
              <Phone className="h-[14px] w-[14px] shrink-0 text-[#0c3363] stroke-[2.5]" />
              <span className="truncate">{profile.phone}</span>
            </p>

            <p className="flex items-center gap-[8px]">
              <LinkedInIcon className="h-[14px] w-[14px] shrink-0 text-[#0977df]" />
              <span className="truncate">{profile.linkedin}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   CV
   ========================================================= */

function CVCard() {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[8px] border border-[#eaefeb] bg-white p-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      <h3 className="shrink-0 text-[16px] font-bold text-[#0c3363]">
        Your CV
      </h3>

      <div className="mt-[12px] flex min-h-0 flex-1 items-center gap-[14px] rounded-[8px] bg-[#f2f8fc] px-[16px] py-[12px]">
        <div className="relative grid h-[68px] w-[56px] shrink-0 place-items-center rounded-[6px] border-[3px] border-[#075333] text-[#075333]">
          <FileText className="h-[34px] w-[34px] stroke-[2]" />

          <span className="absolute -bottom-[8px] -right-[8px] grid h-[24px] w-[24px] place-items-center rounded-full bg-[#075333] text-white">
            <Check className="h-[14px] w-[14px] stroke-[3]" />
          </span>
        </div>

        <div className="min-w-0 flex-1 pl-[6px]">
          <h4 className="truncate text-[15px] font-bold text-[#0c3363]">
            {profile.cvName}
          </h4>

          <p className="mt-[4px] text-[14px] font-medium text-[#2d4766]">
            {profile.cvSize}
          </p>

          <div className="mt-[8px] flex flex-wrap gap-x-[16px] gap-y-[4px] text-[14px] font-bold text-[#0977df]">
            <button className="flex items-center gap-[6px] hover:opacity-80 transition-opacity">
              <Eye className="h-[14px] w-[14px] stroke-[2.5]" />
              View File
            </button>

            <button className="flex items-center gap-[6px] hover:opacity-80 transition-opacity">
              <RefreshCw className="h-[14px] w-[14px] stroke-[2.5]" />
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
  const rows = [
    { image: asset("building.png"), text: job.company },
    { image: asset("location.png"), text: job.location },
    { image: asset("briefcase.png"), text: job.type },
    { image: asset("bar-chart.png"), text: job.experience },
    { image: asset("graduation-cap.png"), text: job.education },
  ];

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[8px] border border-[#eaefeb] bg-white p-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      <div className="flex shrink-0 items-center justify-between">
        <h3 className="text-[16px] font-bold text-[#0c3363]">
          Job Summary
        </h3>

        <button className="flex items-center gap-[4px] text-[14px] font-bold text-[#0977df] hover:opacity-80 transition-opacity">
          <Pencil className="h-[14px] w-[14px] stroke-[2.5]" />
          Edit
        </button>
      </div>

      <div className="mt-[12px] flex flex-col gap-[10px] overflow-y-auto">
        {rows.map(({ image, text }) => (
          <div
            key={text}
            className="flex items-center gap-[14px]"
          >
            <Image
              src={image}
              alt=""
              width={48}
              height={48}
              className="h-[24px] w-[24px] shrink-0 object-contain"
            />

            <span className="truncate text-[14px] font-medium text-[#2d4766]">
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
          <h4 className="text-[12px] font-semibold text-[#125c37]">
            Looking for a Better Fit?
          </h4>

          <p className="mt-[2px] text-[12px] leading-tight text-[#28425d]">
            Explore other career opportunities at Bharat Organic Expo.
          </p>
        </div>
      </div>
    );
  }

  if (matchLevel === "high") {
    return (
      <div className="flex h-full min-h-0 items-center gap-[8px] overflow-hidden px-[9px] text-[12px] text-[#25405c]">
        <LockKeyhole className="h-[14px] w-[14px] shrink-0 text-[#087447]" />

        Your data is secure and will only be used for recruitment purposes.
      </div>
    );
  }

  return (
    <div
      className="flex h-full min-h-0 items-center gap-[9px] overflow-hidden rounded-[6px] px-[10px]"
      style={{ background: theme.supportBg }}
    >
      <Info className="h-[19px] w-[19px] shrink-0 fill-[#1670ce] text-white" />

      <div>
        <h4 className="text-[12px] font-semibold text-[#17365d]">
          Still have questions?
        </h4>

        <p className="text-[12px] leading-tight text-[#29425e]">
          Feel free to reach out to our HR team at
          <br />
          <strong>careers@bharatorganicexpo.com</strong>
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
    <div className="relative h-full min-h-0 overflow-hidden">
      <Image
        src={separatedAssets.sidebarFooter}
        alt=""
        fill
        sizes="32vw"
        className="object-contain object-bottom"
      />
    </div>
  );
}

/* =========================================================
   SIDEBAR
   ========================================================= */

function Sidebar({ onApply }: { onApply?: () => void }) {
  const { matchLevel, current } = useMatchData();

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
        pb-[7px]
        pt-[8px]

        grid-rows-[78px_160px_160px_230px_48px_44px_64px_1fr]
        gap-[8px]
      "
    >
      {/* TOP ARTWORK - same placement as reference */}
      <div className="min-h-0 overflow-hidden">
        <Image
          src={separatedAssets.sidebarTop}
          alt="Together for a Healthier Tomorrow"
          width={2040}
          height={771}
          className="h-full w-[86%] object-contain object-left-top"
        />
      </div>

      <ProfileCard />

      <CVCard />

      <JobSummary />

      {matchLevel !== "low" ? (
        <>
          {/* CTA */}
          <div className="min-h-0">
            <button
              type="button"
              onClick={onApply}
              className="flex h-full w-full items-center justify-center gap-[8px] rounded-[5px] bg-[#08743e] text-[clamp(10px,.82vw,13px)] font-semibold text-white hover:bg-[#076637] transition-colors"
            >
              {current.cta}
              <ArrowRight className="h-[14px] w-[14px]" />
            </button>
          </div>

          {/* SECOND */}
          <div className="min-h-0">
            <button className="flex h-full w-full items-center justify-center gap-[7px] rounded-[5px] border border-[#08743e] bg-white text-[clamp(9px,.72vw,12px)] font-extrabold text-[#07623a]">
              <BookOpen className="h-[13px] w-[13px]" />
              Save for Later
            </button>
          </div>

          <SupportCard />
        </>
      ) : (
        <div className="row-span-3 flex min-h-0 flex-col justify-center rounded-[8px] bg-[#f5faf6] p-[16px] shadow-sm">
          <div className="flex gap-[12px] items-start">
            <Image
              src={separatedAssets.headerLeaf}
              alt=""
              width={82}
              height={92}
              className="h-[22px] w-[20px] shrink-0 object-contain mt-[2px]"
            />
            <div className="flex-1">
              <h4 className="text-[15px] font-bold text-[#095232]">
                Looking for a Better Fit?
              </h4>
              <p className="mt-[4px] text-[13px] font-medium leading-[1.3] text-[#1c6448]">
                Browse other career opportunities at<br />Bharat Organic Expo and find the right role for you.
              </p>
            </div>
          </div>
          <Link
            href="/careers"
            className="mt-[16px] flex h-[44px] shrink-0 items-center justify-center gap-[8px] rounded-[6px] bg-[#075333] text-[14px] font-bold text-white hover:bg-[#064228] transition-colors"
          >
            View All Open Positions
            <ArrowRight className="h-[16px] w-[16px] stroke-[2.5]" />
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
const DESIGN_HEIGHT = 972;

export function EligibilityPopupContent({
  score = 58,
  onApply,
}: {
  score?: number;
  onApply?: () => void;
}) {
  const matchData = getMatchData(score);

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
            grid-rows-[54px_86px_68px_250px_188px_1fr] gap-[10px]
          "
        >
          {/* BHARAT ORGANIC EXPO HEADER - EDITABLE CONTENT */}
          <div className="flex min-h-0 items-center gap-[10px] overflow-hidden">
            <Image
              src={separatedAssets.headerLeaf}
              alt=""
              width={82}
              height={92}
              priority
              className="h-[50px] w-[48px] shrink-0 object-contain"
            />

            <div className="min-w-0 gap-2">
              <div className="truncate text-[24px] font-semibold leading-[1] text-[#115437]">
                {brandHeader.title}
              </div>

              <div className=" truncate text-[15px] font-medium leading-[1.05] text-[#1c7486]">
                {brandHeader.tagline}
              </div>
            </div>
          </div>

          {/* JOB HEADING */}
          <div className="relative min-h-0 overflow-visible pr-[188px]">
            <Link
              href="/careers"
              className="flex w-fit items-center gap-[8px] text-[17px] font-semibold text-[#113a72] hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="h-[22px] w-[22px] stroke-[2.5]" />
              Back
            </Link>

            <h1 className="mt-[4px] truncate text-[27px] font-semibold leading-[1.05] tracking-[-0.025em] text-[#113a72]">
              {job.title}
            </h1>

            <div className="mt-[3px] flex items-center gap-[8px] text-[17px] font-medium text-[#3b587b]">
              <span>{job.company}</span>
              <span className="text-[#a4b5c7]">|</span>
              <span>{job.brand}</span>
            </div>


          </div>

          <div className="min-h-0 overflow-hidden">
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
        <Sidebar onApply={onApply} />
      </div>
    </MatchContext.Provider>
  );
}

export function EligibilityModal({
  isOpen,
  score = 58,
  onClose,
  onApply,
}: {
  isOpen: boolean;
  score?: number;
  onClose: () => void;
  onApply?: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3">
      <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[5px]" onClick={onClose} />

      <div
        className="
          relative
          z-10
          w-[80vw]
          max-w-[1100px]
          max-h-[95vh]
          overflow-hidden
          rounded-[18px]
          bg-[#fbfcf9]
          shadow-[0_30px_90px_rgba(0,0,0,.28)]
        "
        style={{
          aspectRatio: `${DESIGN_WIDTH} / ${DESIGN_HEIGHT}`,
        }}
      >
        <button
          type="button"
          aria-label="Back to Careers"
          onClick={onClose}
          className="absolute right-[24px] top-[24px] z-[100] flex items-center gap-[6px] text-[16px] font-semibold text-[#006342] hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="h-[20px] w-[20px] stroke-[2.5]" />
          Back to Careers
        </button>

        {/* 
          IMPORTANT:
          Scale from the REAL popup width, not from a hard-coded 1300px.
          This keeps the complete right sidebar, buttons and footer image visible
          even when 80vw is smaller than 1100px.
        */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute left-0 top-0"
            style={{
              width: `${DESIGN_WIDTH}px`,
              height: `${DESIGN_HEIGHT}px`,
              transform:
                "scale(calc(min(80vw, 1100px) / 1500px))",
              transformOrigin: "top left",
            }}
          >
            <EligibilityPopupContent score={score} onApply={onApply} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CareerEligibilityPage() {
  const [open, setOpen] = useState(true);

  return (
    <main className="min-h-screen bg-white">
      {!open && (
        <div className="flex min-h-screen items-center justify-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-[8px] bg-[#08743e] px-6 py-3 text-sm font-semibold text-white"
          >
            Open Eligibility Result
          </button>
        </div>
      )}

      <EligibilityModal isOpen={open} score={72} onClose={() => setOpen(false)} />
    </main>
  );
}
