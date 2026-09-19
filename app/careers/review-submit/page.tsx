"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ApplicationSuccessModal from "../ApplicationSuccessModal";
import sidebarFooterImage from "../../assets/carrer/grow-organic-grow-india.png";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock3,
  Edit3,
  FileCheck,
  FileText,
  GraduationCap,
  Globe,
  Home,
  Link as LinkIcon,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Target,
  TrendingUp,
  Trophy,
  User,
  UserCheck,
  Users,
} from "lucide-react";

/* =========================================================
   ASSETS
   ========================================================= */

const asset = (file: string) => `/separated-assets/${file}`;

const assets = {
  headerLeaf: "/separated-assets/bharat-organic-leaf.png",
  headerBanner: asset("ChatGPT Image Sep 16, 2026, 04_29_31 PM.png"),
  sidebarTop: asset("ChatGPT Image Sep 16, 2026, 04_29_31 PM.png"),
  sidebarFooter: sidebarFooterImage,
  profile: "/career-submit-resume-assets/profile.png",
};

const DESIGN_WIDTH = 1500;
const DESIGN_HEIGHT = 900;

/* =========================================================
   DATA
   ========================================================= */

const brandHeader = {
  title: "Bharat Organic Expo",
  tagline: "People • Ideas • Partnerships for a Greener Tomorrow",
};

const job = {
  title: "Sales Manager – Domestic Exhibition Sales & Sponsorships",
  company: "Namo Gange Wellness Pvt. Ltd.",
  brand: "Bharat Organic Expo",
};

const candidateProfile = {
  name: "Vijay Sharma",
  title: "Senior Sales Executive",
  tagline: "Driving Partnerships for a Sustainable Future",
  phone: "+91 98765 43210",
  email: "vijay.sharma@gmail.com",
  linkedin: "linkedin.com/in/vijay-sharma",
  image: assets.profile,
};

const addressData = {
  currentAddress: "Sector 62, Noida, Uttar Pradesh – 21309",
  willingToRelocate: "Yes, Pan India",
  preferredLocation: "Delhi NCR (Preferred)",
  noticePeriod: "30 Days",
  availableToJoin: "1st Nov 2026",
};

const experienceData = [
  {
    company: "ABC Exhibitions Pvt. Ltd.",
    badge: "Current Company",
    role: "Senior Sales Executive",
    period: "Jan 2022 – Present",
    duration: "(3 Years 8 Months)",
    description:
      "Handled domestic exhibition sales, key account management, and sponsorships across multiple trade shows.",
  },
  {
    company: "Event Global Services",
    badge: "Previous Company",
    role: "Sales Executive",
    period: "Jun 2019 – Dec 2021",
    duration: "(2 Years 6 Months)",
    description:
      "Managed exhibitor relations, generated new business, and supported event operations.",
  },
];

const educationData = [
  {
    degree: "MBA (Marketing)",
    school: "Delhi University",
    period: "2017 – 2019",
  },
  {
    degree: "B.Com (Hons.)",
    school: "Delhi University",
    period: "2014 – 2017",
  },
];

const skills = [
  "B2B Sales",
  "Client Acquisition",
  "Exhibition Sales",
  "Negotiation",
  "Relationship Management",
  "Business Development",
];

const salaryData = {
  currentCTC: "₹ 6,00,000",
  currentCTCPeriod: "per annum",
  expectedCTC: "₹ 8,00,000 – 10,00,000",
  expectedCTCPeriod: "per annum",
  otherBenefits: "Performance Incentive, Travel Allowance",
};

const additionalInfo = {
  languages: "English, Hindi",
  achievements:
    "Increased exhibitor base by 30% in last financial year. Closed key sponsorship deals worth ₹50+ lakhs.",
};

const aiMatchScore = 72;

const jobSummary = {
  company: "Namo Gange Wellness Pvt. Ltd.",
  location: "Delhi NCR",
  type: "Full Time",
  experience: "3 – 6 Years",
  education: "Graduate (MBA/PGDM Preferred)",
};

const looksGoodItems = [
  "Personal details completed",
  "Work experience and skills added",
  "Education and salary details provided",
  "Availability and location preferences updated",
  "CV uploaded",
];

/* =========================================================
   PROGRESS STEPS
   ========================================================= */

function ProgressSteps() {
  const steps = [
    { label: "Upload CV", done: true },
    { label: "AI Analysis", done: true },
    { label: "Fill Application", done: true },
    { label: "Review & Submit", active: true },
  ];

  return (
    <div className="relative mx-auto w-[82%]">
      <div className="absolute left-[12.5%] right-[12.5%] top-[14px] h-[2px] bg-[#d9e0e7]" />
      <div className="absolute left-[12.5%] top-[14px] h-[2px] w-[75%] bg-[#0a874d]" />

      <div className="relative grid grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.label} className="flex flex-col items-center">
            <div
              className={[
                "grid h-[28px] w-[28px] place-items-center rounded-full text-[12px] font-semibold",
                step.done || step.active
                  ? "bg-[#078346] text-white"
                  : "bg-[#e1e8ee] text-[#17395f]",
              ].join(" ")}
            >
              {step.done ? (
                <Check className="h-[16px] w-[16px]" strokeWidth={3} />
              ) : (
                index + 1
              )}
            </div>

            <span className="mt-[4px] whitespace-nowrap text-[12px] font-semibold text-[#17395f]">
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   SECTION TITLE
   ========================================================= */

function SectionTitle({
  icon: Icon,
  title,
  onEdit,
}: {
  icon: React.ElementType;
  title: string;
  onEdit?: () => void;
}) {
  return (
    <div className="flex h-[38px] items-center justify-between rounded-t-[8px] border border-b-0 border-[#dceae1] bg-[linear-gradient(90deg,#f2fbf4,#edf8f0)] px-[14px]">
      <div className="flex items-center gap-[8px]">
        <Icon className="h-[20px] w-[20px] text-[#076c3d]" strokeWidth={2.4} />
        <h2 className="text-[17px] font-semibold text-[#0b5b3c]">{title}</h2>
      </div>
      {onEdit && (
        <button
          type="button"
          onClick={onEdit}
          className="flex items-center gap-[4px] text-[12.5px] font-semibold text-[#0874ce] hover:text-[#065aa8]"
        >
          <Edit3 className="h-[13px] w-[13px]" />
          Edit
        </button>
      )}
    </div>
  );
}

/* =========================================================
   CANDIDATE PROFILE
   ========================================================= */

function CandidateProfile() {
  return (
    <div className="rounded-[8px] border border-[#dce8e0] bg-white flex flex-col justify-between">
      <SectionTitle icon={User} title="Candidate Profile" onEdit={() => { }} />

      <div className="grid grid-cols-[105px_1fr] gap-[12px] px-[14px] py-[8px]">
        <div className="relative h-[122px] overflow-hidden rounded-[6px] border border-[#d8e3dc] bg-[#eef4f0]">
          <Image
            src={candidateProfile.image}
            alt={candidateProfile.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-[18.5px] font-semibold text-[#123963]">
            {candidateProfile.name}
          </h3>
          <p className="mt-[1px] text-[13.5px] font-semibold text-[#1a4a7a]">
            {candidateProfile.title}
          </p>
          <p className="mt-[1px] text-[12px] italic text-[#2d6f5a]">
            {candidateProfile.tagline}
          </p>

          <div className="mt-[6px] space-y-[4px] font-semibold text-[#284766]">
            <div className="flex items-center gap-[6px] text-[13px]">
              <Phone className="h-[15px] w-[15px] text-[#087447]" />
              {candidateProfile.phone}
            </div>
            <div className="flex items-center gap-[6px] text-[13px]">
              <Mail className="h-[15px] w-[15px] text-[#087447]" />
              {candidateProfile.email}
            </div>
            <div className="flex items-center gap-[6px] text-[13px] text-[#0874ce]">
              <LinkIcon className="h-[15px] w-[15px] text-[#087447]" />
              {candidateProfile.linkedin}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ADDRESS & AVAILABILITY
   ========================================================= */

function AddressAvailability() {
  const rows = [
    { icon: MapPin, label: "Current Address", value: addressData.currentAddress },
    { icon: Target, label: "Willing to Relocate?", value: addressData.willingToRelocate },
    { icon: Building2, label: "Preferred Work Location", value: addressData.preferredLocation },
    { icon: Clock3, label: "Notice Period", value: addressData.noticePeriod },
    { icon: CheckCircle2, label: "Available to Join", value: addressData.availableToJoin },
  ];

  return (
    <div className="rounded-[8px] border border-[#dce8e0] bg-white flex flex-col justify-between">
      <SectionTitle icon={MapPin} title="Address & Availability" onEdit={() => { }} />

      <div className="px-[14px] py-[6px]">
        <div className="space-y-[3px]">
          {rows.map(({ icon: Icon, label, value }) => (
            <div key={label} className="grid grid-cols-[165px_1fr] items-center gap-[6px] py-[3px] border-b border-[#e8efeb] last:border-b-0">
              <div className="flex items-center gap-[6px] text-[12.5px] font-semibold text-[#17395f]">
                <Icon className="h-[14px] w-[14px] text-[#087447]" />
                {label}
              </div>
              <div className="text-[12.5px] font-semibold text-[#29445f]">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PROFESSIONAL EXPERIENCE
   ========================================================= */

function ProfessionalExperience() {
  return (
    <div className="rounded-[8px] border border-[#dce8e0] bg-white flex flex-col justify-between">
      <SectionTitle icon={BriefcaseBusiness} title="Professional Experience" onEdit={() => { }} />

      <div className="px-[14px] py-[8px]">
        <div className="relative space-y-[6px] pl-[14px]">
          <div className="absolute left-[4px] top-[6px] bottom-[6px] w-[2px] bg-[#d0e0d6]" />

          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -left-[14px] top-[4px] h-[9px] w-[9px] rounded-full border-[2px] border-[#087447] bg-white" />

              <div className="flex items-center gap-[6px]">
                <h4 className="text-[13.5px] font-semibold text-[#123963]">
                  {exp.company}
                </h4>
                <span className="rounded-[4px] bg-[#e8f5ec] px-[6px] py-[1.5px] text-[10px] font-semibold text-[#0a7043]">
                  {exp.badge}
                </span>
              </div>

              <p className="mt-[1px] text-[12.5px] font-semibold text-[#1a4a7a]">
                {exp.role}
              </p>

              <div className="mt-[1px] flex items-center gap-[6px] text-[11px] font-semibold text-[#58708c]">
                <span>{exp.period}</span>
                <span className="text-[#7890a7]">{exp.duration}</span>
              </div>

              <p className="mt-[2px] text-[11.5px] leading-[1.3] text-[#3a5570]">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   EDUCATION
   ========================================================= */

function Education() {
  return (
    <div className="rounded-[8px] border border-[#dce8e0] bg-white flex flex-col justify-between">
      <SectionTitle icon={GraduationCap} title="Education" onEdit={() => { }} />

      <div className="px-[14px] py-[6px]">
        <div className="space-y-[4px]">
          {educationData.map((edu, idx) => (
            <div key={idx} className="flex items-start gap-[6px] border-b border-[#e8efeb] py-[4px] last:border-b-0 last:py-0">
              <GraduationCap className="mt-[2px] h-[15px] w-[15px] text-[#087447]" />
              <div className="flex-1">
                <h4 className="text-[12.5px] font-semibold text-[#123963]">
                  {edu.degree}
                </h4>
                <p className="text-[11.5px] font-semibold text-[#58708c]">{edu.school}</p>
              </div>
              <span className="text-[11.5px] font-semibold text-[#58708c]">
                {edu.period}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SKILLS
   ========================================================= */

function Skills() {
  return (
    <div className="rounded-[8px] border border-[#dce8e0] bg-white flex flex-col justify-between">
      <SectionTitle icon={Target} title="Skills" onEdit={() => { }} />

      <div className="px-[14px] py-[8px]">
        <div className="flex flex-wrap gap-[6px]">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-[6px] border border-[#d0e4d8] bg-[#f0f8f2] px-[10px] py-[3.5px] text-[11.5px] font-semibold text-[#1a5c3a]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SALARY DETAILS
   ========================================================= */

function SalaryDetails() {
  return (
    <div className="rounded-[8px] border border-[#dce8e0] bg-white flex flex-col justify-between">
      <SectionTitle icon={TrendingUp} title="Salary Details" onEdit={() => { }} />

      <div className="grid grid-cols-3 gap-[10px] px-[14px] py-[8px]">
        <div>
          <div className="text-[11.5px] font-semibold text-[#58708c]">Current CTC</div>
          <div className="mt-[2px] text-[13.5px] font-semibold text-[#123963]">
            {salaryData.currentCTC}
          </div>
          <div className="text-[10.5px] text-[#7890a7]">{salaryData.currentCTCPeriod}</div>
        </div>

        <div>
          <div className="text-[11.5px] font-semibold text-[#58708c]">Expected CTC</div>
          <div className="mt-[2px] text-[13.5px] font-semibold text-[#123963]">
            {salaryData.expectedCTC}
          </div>
          <div className="text-[10.5px] text-[#7890a7]">{salaryData.expectedCTCPeriod}</div>
        </div>

        <div>
          <div className="text-[11.5px] font-semibold text-[#58708c]">Other Benefits</div>
          <div className="mt-[2px] text-[11.5px] font-semibold text-[#29445f]">
            {salaryData.otherBenefits}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ADDITIONAL INFORMATION
   ========================================================= */

function AdditionalInformation() {
  return (
    <div className="rounded-[8px] border border-[#dce8e0] bg-white flex flex-col justify-between">
      <SectionTitle icon={FileText} title="Additional Information" onEdit={() => { }} />

      <div className="grid grid-cols-2 gap-[10px] px-[14px] py-[8px]">
        <div>
          <div className="text-[11.5px] font-semibold text-[#58708c]">Languages Known</div>
          <div className="mt-[2px] text-[11.5px] font-semibold text-[#29445f]">
            {additionalInfo.languages}
          </div>
        </div>

        <div>
          <div className="text-[11.5px] font-semibold text-[#58708c]">Relevant Achievements</div>
          <div className="mt-[2px] text-[11px] leading-[1.35] text-[#29445f]">
            {additionalInfo.achievements}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   RIGHT SIDEBAR
   ========================================================= */

function SidebarFooter() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[175px] overflow-hidden">
      <Image
        src={assets.sidebarFooter}
        alt=""
        fill
        sizes="36vw"
        className="object-cover object-top"
      />
    </div>
  );
}

function AIMatchScoreCard() {
  return (
    <div className="rounded-[8px] border border-[#dce8e0] bg-white p-[12px] shadow-sm">
      <h3 className="text-[16px] font-semibold text-[#123963]">Your AI Match Score</h3>

      <div className="mt-[6px] grid grid-cols-[82px_1fr] items-center gap-[10px]">
        <div className="relative grid aspect-square place-items-center rounded-full" style={{ background: "conic-gradient(#28aa42 259deg,#d7e4dd 259deg 360deg)" }}>
          <div className="absolute inset-[7px] rounded-full bg-white" />
          <div className="relative z-10 text-center">
            <div className="text-[23px] font-semibold leading-none text-[#123963]">
              {aiMatchScore}%
            </div>
            <div className="mt-[2px] text-[9.5px] font-semibold text-[#123963]">
              Match Score
            </div>
          </div>
        </div>

        <div className="rounded-[6px] bg-[#effaf2] px-[9px] py-[6px]">
          <h4 className="text-[15px] font-semibold text-[#11813e]">Good Match!</h4>
          <p className="mt-[2px] text-[12px] leading-[1.25] text-[#284f3f]">
            Your profile matches the key requirements for this position.
          </p>

          <button className="mt-[4px] flex items-center gap-[5px] text-[12px] font-semibold text-[#0b6941]">
            View Detailed Analysis
            <ArrowRight className="h-[13px] w-[13px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

function JobSummaryCard() {
  const rows = [
    { icon: Building2, value: jobSummary.company },
    { icon: MapPin, value: jobSummary.location },
    { icon: BriefcaseBusiness, value: jobSummary.type },
    { icon: TrendingUp, value: jobSummary.experience },
    { icon: GraduationCap, value: jobSummary.education },
  ];

  return (
    <div className="rounded-[8px] border border-[#dce8e0] bg-white p-[12px] shadow-sm">
      <h3 className="text-[16px] font-semibold text-[#123963]">Job Summary</h3>

      <div className="mt-[8px] space-y-[7px]">
        {rows.map(({ icon: Icon, value }, idx) => (
          <div key={idx} className="flex items-center gap-[8px]">
            <Icon className="h-[16px] w-[16px] text-[#087447]" />
            <span className="text-[12.5px] font-semibold text-[#29445f]">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LooksGoodCard() {
  return (
    <div className="rounded-[8px] border border-[#dce8e0] bg-white p-[12px] shadow-sm">
      <div className="flex items-center gap-[8px]">
        <div className="grid h-[26px] w-[26px] place-items-center rounded-full bg-[#e8f5ec]">
          <Check className="h-[16px] w-[16px] text-[#087447]" strokeWidth={3} />
        </div>
        <h3 className="text-[17.5px] font-semibold text-[#123963]">Looks Good!</h3>
      </div>

      <p className="mt-[3px] text-[13px] font-semibold text-[#58708c]">
        You&apos;re almost ready to submit your application.
      </p>

      <div className="mt-[10px] space-y-[6px]">
        {looksGoodItems.map((item) => (
          <div key={item} className="flex items-center gap-[8px]">
            <CheckCircle2 className="h-[18px] w-[18px] shrink-0 fill-[#14a451] text-white" />
            <span className="text-[13.5px] font-semibold text-[#29445f]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SubmitCard({ onSubmit }: { onSubmit?: () => void }) {
  return (
    <div className="rounded-[8px] border border-[#dce8e0] bg-white p-[12px] shadow-sm">
      <button
        type="button"
        onClick={onSubmit}
        className="flex w-full items-center justify-center gap-[8px] rounded-[6px] bg-[#08743e] px-[14px] py-[10px] text-[16px] font-semibold text-white shadow-sm hover:bg-[#076637] transition-colors"
      >
        Submit Application
        <ArrowRight className="h-[17px] w-[17px]" />
      </button>

      <div className="mt-[6px] flex items-center justify-center gap-[6px] text-[11px] font-semibold text-[#58708c]">
        <ShieldCheck className="h-[14px] w-[14px] text-[#087447]" />
        Your data is secure and encrypted
      </div>
    </div>
  );
}

function RightSidebar({ onClose, onSubmit }: { onClose?: () => void; onSubmit?: () => void }) {
  return (
    <aside className="relative flex h-full min-h-0 flex-col overflow-hidden border-l border-[#e4ebe5] bg-[linear-gradient(180deg,#f8fcf9,#eef8f1)] pl-[28px] pr-[32px] pb-[16px] pt-[8px]">
      <SidebarFooter />

      <div className="relative z-10 flex shrink-0 items-start justify-end">
        <button
          type="button"
          onClick={onClose}
          className="mt-[4px] flex h-[30px] items-center gap-[6px] rounded-[4px] bg-[#08743e] px-[9px] text-[10px] font-semibold text-white hover:bg-[#076637] transition-colors"
        >
          <Home className="h-[13px] w-[13px]" />
          Back to Website
        </button>
      </div>

      <div className="relative z-10 mt-[4px] space-y-[8px] flex-1 min-h-0">
        <AIMatchScoreCard />
        <JobSummaryCard />
        <LooksGoodCard />
        <SubmitCard onSubmit={onSubmit} />
      </div>
    </aside>
  );
}

/* =========================================================
   MAIN CONTENT
   ========================================================= */

function ReviewSubmitContent({ onClose, onSubmit }: { onClose?: () => void; onSubmit?: () => void }) {
  return (
    <div
      className="relative grid h-full w-full overflow-hidden bg-white text-[#10243f]"
      style={{
        width: `${DESIGN_WIDTH}px`,
        gridTemplateColumns: "64% 36%",
      }}
    >
      {/* LEFT */}
      <section className="relative flex h-full min-h-0 flex-col justify-between overflow-hidden px-[32px] pb-[14px] pt-[10px]">
        {/* HEADER */}
        <div className="flex shrink-0 items-center gap-[8px]">
          <Image
            src={assets.headerLeaf}
            alt=""
            width={82}
            height={92}
            priority
            className="h-[40px] w-[37px] shrink-0 object-contain"
          />

          <div className="min-w-0">
            <div className="truncate text-[22px] font-semibold leading-[1] text-[#103f31]">
              {brandHeader.title}
            </div>
            <div className="mt-[2px] truncate text-[11.5px] font-semibold leading-[1.05] text-[#2d6f62]">
              {brandHeader.tagline}
            </div>
          </div>
        </div>

        {/* TITLE */}
        <div className="mt-[4px] shrink-0">
          {onClose ? (
            <button
              type="button"
              onClick={onClose}
              className="flex w-fit items-center gap-[5px] text-[13px] font-semibold text-[#0d5d3c]"
            >
              <ArrowLeft className="h-[14px] w-[14px]" />
              Back
            </button>
          ) : (
            <Link
              href="/careers"
              className="flex w-fit items-center gap-[5px] text-[13px] font-semibold text-[#0d5d3c]"
            >
              <ArrowLeft className="h-[14px] w-[14px]" />
              Back
            </Link>
          )}

          <h1 className="mt-[3px] text-[25px] font-semibold leading-none tracking-[-0.02em] text-[#123963]">
            {job.title}
          </h1>

          <div className="mt-[3px] flex items-center gap-[10px] text-[14px] font-semibold text-[#1c4b78]">
            <span>{job.company}</span>
            <span className="h-[14px] w-px bg-[#c8d3dc]" />
            <span>{job.brand}</span>
          </div>
        </div>

        {/* STEPS & LEAF BANNER ROW */}
        <div className="mt-[4px] shrink-0 flex items-center justify-between gap-[12px]">
          <div className="flex-1 min-w-0">
            <ProgressSteps />
          </div>

          <div className="relative h-[68px] w-[185px] shrink-0 -mt-[24px]">
            <Image
              src={assets.headerBanner}
              alt="Together for a Healthier Tomorrow"
              fill
              priority
              className="object-contain object-left-center"
            />
          </div>
        </div>

        {/* REVIEW HEADING */}
        <div className="my-[4px] flex shrink-0 items-center justify-between">
          <div>
            <h2 className="text-[22px] font-semibold text-[#123963]">
              Review Your Application
            </h2>
            <p className="mt-[1px] text-[12.5px] font-semibold text-[#58708c]">
              Please review your details below. You can edit any section if required.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-[5px] rounded-[5px] border border-[#d0dce4] bg-white px-[12px] py-[5px] text-[12px] font-semibold text-[#3a5570] hover:bg-[#f5f8fa] transition-colors"
          >
            <Edit3 className="h-[13px] w-[13px]" />
            Edit All
          </button>
        </div>

        {/* REVIEW SECTIONS - non-scrollable grid */}
        <div className="grid min-h-0 flex-1 grid-cols-2 gap-[8px] overflow-hidden">
          <div className="flex flex-col gap-[8px]">
            <CandidateProfile />
            <ProfessionalExperience />
            <SalaryDetails />
          </div>
          <div className="flex flex-col gap-[8px]">
            <AddressAvailability />
            <div className="flex flex-col gap-[8px]">
              <Education />
              <Skills />
            </div>
            <AdditionalInformation />
          </div>
        </div>
      </section>

      {/* RIGHT */}
      <RightSidebar onClose={onClose} onSubmit={onSubmit} />
    </div>
  );
}

/* =========================================================
   MODAL
   ========================================================= */

export function ReviewSubmitModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (isOpen || showSuccessModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, showSuccessModal]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-2 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[5px]" onClick={onClose} />

        <div
          className="relative max-h-[96vh] overflow-hidden rounded-[16px] bg-[#fbfcf9] shadow-[0_30px_90px_rgba(0,0,0,0.28)]"
          style={{
            width: "min(96vw, 1440px, calc(96vh * 1500 / 900))",
            aspectRatio: "1500 / 900",
          }}
        >
          <div className="relative h-full w-full overflow-hidden">
            <div
              className="left-0 top-0 overflow-hidden bg-[#fbfcf9]"
              style={{
                width: `${DESIGN_WIDTH}px`,
                height: `${DESIGN_HEIGHT}px`,
                transform: `scale(calc(min(96vw, 1440px, calc(96vh * 1500 / 900)) / ${DESIGN_WIDTH}px))`,
                transformOrigin: "top left",
              }}
            >
              <ReviewSubmitContent onClose={onClose} onSubmit={() => setShowSuccessModal(true)} />
            </div>
          </div>
        </div>
      </div>

      <ApplicationSuccessModal isOpen={showSuccessModal} onClose={() => { setShowSuccessModal(false); onClose(); }} />
    </>
  );
}

/* =========================================================
   PAGE
   ========================================================= */

export default function ReviewSubmitPage() {
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
            Open Review & Submit
          </button>
        </div>
      )}

      <ReviewSubmitModal isOpen={open} onClose={() => setOpen(false)} />
    </main>
  );
}
