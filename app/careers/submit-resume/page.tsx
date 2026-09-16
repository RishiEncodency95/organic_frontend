"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Building2,
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
  Target,
  Users,
  X,
} from "lucide-react";

/* =========================================================
   CHANGE ONLY SCORE
   ========================================================= */

const matchScore = 58;

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

const matchLevel: MatchLevel =
  matchScore >= 70 ? "high" : matchScore >= 50 ? "moderate" : "low";

/* =========================================================
   CONFIG
   ========================================================= */

const matchConfig = {
  high: {
    color: "#07883f",
    dark: "#076331",
    soft: "#eef9ef",
    soft2: "#f5fbf6",

    personImage: "/career-submit-resume-assets/high-person.png",

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

    personImage: "/career-submit-resume-assets/moderate-person.png",

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

    personImage: "/career-submit-resume-assets/low-person.png",

    step: 2,

    title: `Sorry, ${profile.name.split(" ")[0]}!`,

    subtitle: "This position may not be the right fit for you at this time.",

    description:
      "Based on our screening, your profile does not meet the minimum requirements for this role. Therefore, you are not eligible to apply for this position. We appreciate your interest in Bharat Organic Expo and encourage you to explore other opportunities.",

    quote:
      "Keep building your experience and skills. The right opportunity may be closer than you think.",

    rightText: "Keep\nGrowing\nKeep\nExploring",

    summaryTitle: "Why You Are Not Eligible?",

    summaryText:
      "Your profile does not meet the minimum requirements for this position.",

    suggestionTitle: "Minimum Requirements for This Role",

    requirements: [
      "Minimum 3+ years of experience in exhibition / trade show sales.",
      "Proven track record in client acquisition & sponsorships.",
      "Relevant industry experience preferred.",
      "Strong negotiation and relationship management skills.",
    ],

    cta: "View All Open Positions",

    breakdown: [],
  },
} as const;

const current = matchConfig[matchLevel];

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
  const steps = [
    "Upload CV",
    "AI Analysis",
    "Eligibility Result",
    "Apply for Job",
  ];

  return (
    <div className="relative mx-auto h-full w-[78%]">
      <div className="absolute left-[12.5%] right-[12.5%] top-[17px] h-[2px] bg-[#d8dfe4]" />

      <div
        className="absolute left-[12.5%] top-[17px] h-[2px] bg-[#087f46]"
        style={{
          width: current.step === 2 ? "25%" : "37.5%",
        }}
      />

      {current.step === 3 && (
        <div
          className="absolute left-[50%] top-[17px] h-[2px] w-[25%]"
          style={{ background: current.color }}
        />
      )}

      {matchLevel === "low" && (
        <div className="absolute left-[50%] top-[17px] h-[2px] w-[25%] bg-[#d30c18]" />
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
                className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full text-[12px] font-black"
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

              <span className="mt-[5px] whitespace-nowrap text-[clamp(8px,.69vw,11px)] font-extrabold text-[#0d315e]">
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
  return (
    <div
      className="relative grid h-full min-h-0 grid-cols-[38%_62%] overflow-hidden rounded-[10px]"
      style={{
        background:
          matchLevel === "high"
            ? "linear-gradient(100deg,#edf8ef,#e2f5e6)"
            : matchLevel === "moderate"
              ? "linear-gradient(100deg,#fff8ec,#fff0d6)"
              : "linear-gradient(100deg,#fff5f5,#ffe8e8)",
      }}
    >
      {/* HUMAN IMAGE */}
      <div className="relative min-h-0 overflow-hidden">
        <img
          src={current.personImage}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* EDITABLE RESULT CONTENT */}
      <div className="relative flex min-h-0 items-center overflow-hidden px-[clamp(16px,2vw,30px)] py-3">
        <div className="relative z-10 flex w-[84%] items-start gap-[14px]">
          <div
            className="grid h-[48px] w-[48px] shrink-0 place-items-center rounded-full text-white shadow-sm"
            style={{ background: current.color }}
          >
            {matchLevel === "low" ? (
              <X className="h-[28px] w-[28px]" strokeWidth={3} />
            ) : (
              <Check className="h-[28px] w-[28px]" strokeWidth={3} />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h2
              className="text-[clamp(22px,1.9vw,33px)] font-black leading-[1.05] tracking-[-0.03em]"
              style={{ color: current.dark }}
            >
              {current.title}
            </h2>

            <h3 className="mt-1.5 text-[clamp(12px,1vw,16px)] font-extrabold leading-tight text-[#102747]">
              {current.subtitle}
            </h3>

            <p className="mt-2 max-w-[580px] text-[clamp(9px,0.72vw,12px)] leading-[1.45] text-[#173757]">
              {current.description}
            </p>

            <p className="mt-2 max-w-[520px] text-[clamp(9px,0.68vw,11.5px)] italic leading-[1.35] text-[#173757]">
              “ {current.quote} ”
            </p>

            <p className="mt-1.5 text-[clamp(9px,0.68vw,11px)] font-extrabold italic leading-tight text-[#174733]">
              — Talent Acquisition Team
              <br />
              &nbsp;&nbsp;&nbsp;Bharat Organic Expo
            </p>
          </div>
        </div>

        {/* RIGHT HANDWRITING */}
        <div className="absolute right-[3%] top-[10%] z-10 whitespace-pre-line text-right font-serif text-[clamp(12px,1vw,17px)] font-bold italic leading-[1.08] text-[#087044]">
          {current.rightText}
        </div>

        {/* LEAF PNG */}
        <img
          src="/career-submit-resume-assets/leaves.png"
          alt=""
          className="pointer-events-none absolute bottom-[-5%] right-[-1%] max-h-[55%] w-[25%] object-contain object-right-bottom opacity-95"
        />
      </div>
    </div>
  );
}

/* =========================================================
   SCORE
   ========================================================= */

function ScoreRing() {
  const ringColor =
    matchScore >= 70
      ? "#149c3e"
      : matchScore >= 50
        ? "#f18700"
        : "#d20c16";

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
          className="text-[clamp(30px,2.8vw,46px)] font-black leading-none"
          style={{
            color: matchLevel === "high" ? "#123761" : ringColor,
          }}
        >
          {matchScore}%
        </div>

        <div className="mt-1 text-[clamp(9px,0.68vw,11px)] font-extrabold text-[#13355d]">
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
    <div className="grid grid-cols-[12px_72px_1fr] items-center gap-2 text-[clamp(8px,0.64vw,10.5px)] text-[#17395d]">
      <span
        className="h-[10px] w-[10px] rounded-full"
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
  return (
    <div className="grid h-full min-h-0 grid-cols-[1.16fr_.84fr] gap-[8px]">
      <div className="flex min-h-0 items-center gap-[clamp(10px,1.35vw,20px)] overflow-hidden rounded-[7px] border border-[#e0e7e2] bg-white px-[clamp(10px,1.35vw,20px)]">
        <ScoreRing />

        <div className="min-w-0">
          <h3 className="text-[clamp(10px,.9vw,14px)] font-black text-[#102b4b]">
            {current.summaryTitle}
          </h3>

          <p className="mt-[5px] max-w-[400px] text-[clamp(6.5px,.55vw,9px)] leading-[1.33] text-[#173858]">
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
        className="min-h-0 overflow-hidden rounded-[7px] border border-[#e7e3dc] px-[clamp(9px,1vw,15px)] py-[clamp(7px,.7vh,10px)]"
        style={{ background: current.soft2 }}
      >
        <div className="flex items-center gap-[8px]">
          <div
            className="grid h-[29px] w-[29px] shrink-0 place-items-center rounded-full text-white"
            style={{ background: current.color }}
          >
            {matchLevel === "moderate" ? (
              <Lightbulb className="h-[17px] w-[17px]" />
            ) : matchLevel === "low" ? (
              <X className="h-[17px] w-[17px]" />
            ) : (
              <Target className="h-[17px] w-[17px]" />
            )}
          </div>

          <h3 className="text-[clamp(9px,.82vw,13px)] font-black leading-tight text-[#102945]">
            {current.suggestionTitle}
          </h3>
        </div>

        <div className="mt-[7px] space-y-[5px]">
          {current.requirements.map((item, index) => (
            <div
              key={item}
              className="flex items-start gap-[7px]"
            >
              <span
                className="mt-[1px] grid h-[16px] w-[16px] shrink-0 place-items-center rounded-full text-[8px] font-black text-white"
                style={{ background: current.color }}
              >
                {matchLevel === "high" ? (
                  <Check className="h-[10px] w-[10px]" />
                ) : matchLevel === "low" ? (
                  <X className="h-[10px] w-[10px]" />
                ) : (
                  index + 1
                )}
              </span>

              <p className="text-[clamp(6.5px,.54vw,8.8px)] leading-[1.22] text-[#173654]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   BREAKDOWN
   ========================================================= */

function Breakdown() {
  if (matchLevel === "low") {
    return <LowNextSteps />;
  }

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      <h3 className="shrink-0 text-[clamp(10px,.9vw,14px)] font-black leading-none text-[#10345f]">
        {matchLevel === "moderate"
          ? "Detailed Match Breakdown"
          : "Match Breakdown"}
      </h3>

      <p className="mt-[3px] shrink-0 text-[clamp(6.5px,.53vw,8.7px)] text-[#183858]">
        Here&apos;s how your profile matches with our key requirements:
      </p>

      <div className="mt-[7px] grid min-h-0 flex-1 grid-cols-2 grid-rows-3 gap-x-[clamp(18px,2.3vw,36px)] gap-y-[4px]">
        {current.breakdown.map((item) => {
          const Icon = item.icon;

          const scoreColor =
            item.score >= 70
              ? "#159d3d"
              : item.score >= 50
                ? "#efa800"
                : "#d90d14";

          return (
            <div
              key={item.title}
              className="grid min-h-0 grid-cols-[32px_minmax(0,1fr)_42px] items-center gap-[7px]"
            >
              <Icon className="h-[23px] w-[23px] text-[#087447]" />

              <div className="min-w-0">
                <h4 className="truncate text-[clamp(7px,.59vw,9.5px)] font-extrabold leading-tight text-[#102e50]">
                  {item.title}
                </h4>

                <p className="mt-[1px] truncate text-[clamp(5.5px,.47vw,7.7px)] text-[#34475c]">
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
                className="text-right text-[clamp(11px,1vw,16px)]"
                style={{ color: scoreColor }}
              >
                {item.score}%
              </strong>
            </div>
          );
        })}
      </div>

      <div className="mt-[5px] flex h-[29px] shrink-0 items-center gap-[8px] rounded-[5px] bg-[#eff9f2] px-[12px] text-[clamp(6px,.51vw,8px)] text-[#173e34]">
        <BookOpen className="h-[14px] w-[14px] shrink-0 text-[#087447]" />

        <span className="truncate">
          <strong>Tip:</strong>{" "}
          Update your CV with more relevant experience and skills to increase
          your match score and improve your chances.
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
        "Check other open positions that better match your profile.",
      icon: Target,
    },
  ];

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[7px] border border-[#e2ebe4] bg-[#f4faf5] px-[14px] py-[9px]">
      <div className="flex shrink-0 items-center gap-[8px]">
        <Lightbulb className="h-[24px] w-[24px] text-[#6ba918]" />

        <div>
          <h3 className="text-[12px] font-black leading-tight text-[#10345f]">
            What You Can Do Next?
          </h3>

          <p className="text-[8px] text-[#173858]">
            Continue building your skills and explore other suitable opportunities.
          </p>
        </div>
      </div>

      <div className="mt-[7px] grid min-h-0 flex-1 grid-cols-3 divide-x divide-[#dde5df] rounded-[5px] bg-white px-[10px] py-[8px]">
        {data.map(({ title, text, icon: Icon }) => (
          <div
            key={title}
            className="flex min-h-0 gap-[8px] px-[10px] first:pl-0 last:pr-0"
          >
            <Icon className="h-[24px] w-[24px] shrink-0 text-[#087447]" />

            <div>
              <h4 className="text-[8px] font-black leading-tight text-[#102e50]">
                {title}
              </h4>

              <p className="mt-[3px] text-[7px] leading-[1.25] text-[#34475c]">
                {text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[6px] shrink-0 text-center">
        <Link
          href="/careers"
          className="inline-flex h-[30px] min-w-[250px] items-center justify-center gap-[7px] rounded-[4px] border border-[#087447] bg-white px-[20px] text-[8px] font-extrabold text-[#075d38]"
        >
          View Other Job Opportunities
          <ArrowRight className="h-[13px] w-[13px]" />
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
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[7px] border border-[#e3ebe5] bg-white p-[clamp(8px,.8vw,12px)] shadow-sm">
      <div className="flex shrink-0 items-center justify-between">
        <h3 className="text-[clamp(9px,.82vw,13px)] font-black text-[#0c3363]">
          Your Profile
        </h3>

        <button className="flex items-center gap-[4px] text-[clamp(6.5px,.56vw,8.5px)] font-bold text-[#0977df]">
          <Pencil className="h-[12px] w-[12px]" />
          Edit
        </button>
      </div>

      <div className="mt-[6px] flex min-h-0 flex-1 items-center gap-[10px]">
        <img
          src={profile.image}
          alt={profile.name}
          className="aspect-square h-[85%] max-h-[96px] shrink-0 rounded-[6px] object-cover"
        />

        <div className="min-w-0">
          <h4 className="truncate text-[clamp(10px,.92vw,15px)] font-black text-[#103561]">
            {profile.name}
          </h4>

          <div className="mt-[5px] space-y-[4px] text-[clamp(6.5px,.56vw,9px)] text-[#173858]">
            <p className="flex items-center gap-[7px]">
              <Mail className="h-[12px] w-[12px] shrink-0" />
              <span className="truncate">{profile.email}</span>
            </p>

            <p className="flex items-center gap-[7px]">
              <Phone className="h-[12px] w-[12px] shrink-0" />
              <span className="truncate">{profile.phone}</span>
            </p>

            <p className="flex items-center gap-[7px]">
              <LinkedInIcon className="h-[12px] w-[12px] shrink-0 text-[#0878c9]" />
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
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[7px] border border-[#e3ebe5] bg-white p-[clamp(8px,.8vw,12px)] shadow-sm">
      <h3 className="shrink-0 text-[clamp(9px,.82vw,13px)] font-black text-[#0c3363]">
        Your CV
      </h3>

      <div className="mt-[6px] flex min-h-0 flex-1 items-center gap-[10px] rounded-[5px] bg-[#f4f8fb] px-[10px]">
        <div className="relative grid h-[48px] w-[42px] shrink-0 place-items-center rounded-[5px] border-[3px] border-[#087447] text-[#087447]">
          <FileText className="h-[25px] w-[25px]" />

          <span className="absolute -bottom-[7px] -right-[7px] grid h-[18px] w-[18px] place-items-center rounded-full bg-[#087447] text-white">
            <Check className="h-[10px] w-[10px]" />
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="truncate text-[clamp(7px,.61vw,9.5px)] font-black text-[#12335e]">
            {profile.cvName}
          </h4>

          <p className="mt-[2px] text-[clamp(6px,.52vw,8px)] text-[#173858]">
            {profile.cvSize}
          </p>

          <div className="mt-[4px] flex flex-wrap gap-x-[13px] gap-y-[3px] text-[clamp(6px,.52vw,8px)] font-semibold text-[#0874ce]">
            <button className="flex items-center gap-[4px]">
              <Eye className="h-[11px] w-[11px]" />
              View File
            </button>

            <button className="flex items-center gap-[4px]">
              <RefreshCw className="h-[11px] w-[11px]" />
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
    { icon: Building2, text: job.company },
    { icon: MapPin, text: job.location },
    { icon: BriefcaseBusiness, text: job.type },
    { icon: BarChart3, text: job.experience },
    { icon: GraduationCap, text: job.education },
  ];

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-[7px] border border-[#e3ebe5] bg-white p-[clamp(8px,.8vw,12px)] shadow-sm">
      <div className="flex shrink-0 items-center justify-between">
        <h3 className="text-[clamp(9px,.82vw,13px)] font-black text-[#0c3363]">
          Job Summary
        </h3>

        <button className="flex items-center gap-[4px] text-[clamp(6.5px,.56vw,8.5px)] font-bold text-[#0977df]">
          <Pencil className="h-[12px] w-[12px]" />
          Edit
        </button>
      </div>

      <div className="mt-[5px] grid min-h-0 flex-1 grid-rows-5">
        {rows.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex min-h-0 items-center gap-[9px]"
          >
            <Icon className="h-[14px] w-[14px] shrink-0 text-[#087447]" />

            <span className="truncate text-[clamp(6.5px,.56vw,9px)] text-[#183858]">
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
  if (matchLevel === "low") {
    return (
      <div className="flex h-full min-h-0 items-center gap-[8px] overflow-hidden rounded-[6px] border border-[#dcebdd] bg-[#f3fbf3] px-[10px]">
        <span className="h-[28px] w-[18px] shrink-0 rotate-[25deg] rounded-[100%_0_100%_0] bg-[#23943d]" />

        <div>
          <h4 className="text-[clamp(7px,.61vw,9.5px)] font-black text-[#125c37]">
            Looking for a Better Fit?
          </h4>

          <p className="mt-[2px] text-[clamp(5.5px,.47vw,7.5px)] leading-tight text-[#28425d]">
            Explore other career opportunities at Bharat Organic Expo.
          </p>
        </div>
      </div>
    );
  }

  if (matchLevel === "high") {
    return (
      <div className="flex h-full min-h-0 items-center gap-[8px] overflow-hidden px-[9px] text-[clamp(5.7px,.48vw,7.6px)] text-[#25405c]">
        <LockKeyhole className="h-[14px] w-[14px] shrink-0 text-[#087447]" />

        Your data is secure and will only be used for recruitment purposes.
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-0 items-center gap-[9px] overflow-hidden rounded-[6px] bg-[#eff7ff] px-[10px]">
      <Info className="h-[19px] w-[19px] shrink-0 fill-[#1670ce] text-white" />

      <div>
        <h4 className="text-[clamp(6.7px,.57vw,9px)] font-black text-[#17365d]">
          Still have questions?
        </h4>

        <p className="text-[clamp(5.4px,.46vw,7.4px)] leading-tight text-[#29425e]">
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
      <img
        src="/career-submit-resume-assets/india-footer.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-bottom"
      />
    </div>
  );
}

/* =========================================================
   SIDEBAR
   ========================================================= */

function Sidebar() {
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

        grid-rows-[46px_minmax(0,1.05fr)_minmax(0,.82fr)_minmax(0,1.2fr)_44px_40px_54px_minmax(0,1.15fr)]
        gap-[7px]
      "
    >
      {/* TOP */}
      <div className="flex min-h-0 items-start justify-between gap-[8px] overflow-hidden">
        <div className="font-serif text-[clamp(10px,.87vw,15px)] font-bold italic leading-[1.03] text-[#087447]">
          Together for a Healthier
          <br />
          Greener Tomorrow
        </div>

        <Link
          href="/careers"
          className="flex shrink-0 items-center gap-[4px] text-[clamp(6px,.52vw,8px)] font-extrabold text-[#075d3c]"
        >
          <ArrowLeft className="h-[11px] w-[11px]" />
          Back to Careers
        </Link>
      </div>

      <ProfileCard />

      <CVCard />

      <JobSummary />

      {/* CTA */}
      <div className="min-h-0">
        {matchLevel !== "low" ? (
          <button className="flex h-full w-full items-center justify-center gap-[8px] rounded-[5px] bg-[#08743e] text-[clamp(8px,.7vw,11px)] font-black text-white">
            {current.cta}
            <ArrowRight className="h-[14px] w-[14px]" />
          </button>
        ) : (
          <Link
            href="/careers"
            className="flex h-full items-center justify-center gap-[8px] rounded-[5px] bg-[#08743e] text-[clamp(7.5px,.65vw,10px)] font-black text-white"
          >
            View All Open Positions
            <ArrowRight className="h-[14px] w-[14px]" />
          </Link>
        )}
      </div>

      {/* SECOND */}
      <div className="min-h-0">
        {matchLevel !== "low" ? (
          <button className="flex h-full w-full items-center justify-center gap-[7px] rounded-[5px] border border-[#08743e] bg-white text-[clamp(7px,.62vw,10px)] font-extrabold text-[#07623a]">
            <BookOpen className="h-[13px] w-[13px]" />
            Save for Later
          </button>
        ) : (
          <div />
        )}
      </div>

      <SupportCard />

      <SidebarFooter />
    </aside>
  );
}

/* =========================================================
   PAGE
   ========================================================= */

export default function CareerEligibilityPage() {
  return (
    <main
      className="w-full overflow-hidden bg-white text-[#10243f]"
      style={{
        height: "calc(100dvh - 74px)",
        minHeight: 0,
        maxHeight: "calc(100dvh - 74px)",
      }}
    >
      <div
        className="
          grid
          h-full
          min-h-0
          w-full
          overflow-hidden
          grid-cols-[68.5%_31.5%]
        "
      >
        {/* LEFT */}
        <section
          className="
            grid
            h-full
            min-h-0
            overflow-hidden
            px-[clamp(20px,2.2vw,34px)]
            pb-[8px]
            pt-[8px]

            grid-rows-[72px_62px_minmax(0,1.35fr)_minmax(0,.95fr)_minmax(0,1.15fr)]
            gap-[7px]
          "
        >
          {/* JOB HEADING */}
          <div className="min-h-0 overflow-hidden">
            <Link
              href="/careers"
              className="flex w-fit items-center gap-[6px] text-[clamp(7px,.62vw,10px)] font-extrabold text-[#103662]"
            >
              <ArrowLeft className="h-[13px] w-[13px]" />
              Back
            </Link>

            <h1 className="mt-[5px] truncate text-[clamp(16px,1.45vw,25px)] font-black leading-none tracking-[-0.025em] text-[#123d73]">
              {job.title}
            </h1>

            <div className="mt-[5px] flex items-center gap-[10px] text-[clamp(7.5px,.63vw,10.5px)] text-[#163a67]">
              <span>{job.company}</span>

              <span className="h-[13px] w-px bg-[#cbd3db]" />

              <span>{job.brand}</span>
            </div>
          </div>

          {/* STEPS */}
          <div className="min-h-0 overflow-hidden">
            <ProgressSteps />
          </div>

          {/* HERO */}
          <div className="min-h-0 overflow-hidden">
            <ResultHero />
          </div>

          {/* SUMMARY */}
          <div className="min-h-0 overflow-hidden">
            <ScoreSummary />
          </div>

          {/* BREAKDOWN */}
          <div className="min-h-0 overflow-hidden">
            <Breakdown />
          </div>
        </section>

        {/* RIGHT */}
        <Sidebar />
      </div>
    </main>
  );
}