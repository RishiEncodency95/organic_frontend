"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ClipboardList,
  ClipboardCheck,
  Users,
  Building2,
  Map,
  Award,
  Medal,
  Star,
  Trophy,
  CheckCircle2,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Globe,
  Upload,
  Send,
  ShieldCheck,
  Sprout,
  Leaf,
  Link2,
  ArrowRight,
  Check,
} from "lucide-react";
import nominationBg from "../../assets/awards/nomination.webp";
import bharatOrganicLogo from "../../assets/awards/bharat_organic.webp";
import beTheLeft from "../../assets/exhibitors/be_the_left.png";
import beTheRight from "../../assets/exhibitors/be_the_right.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

interface FormState {
  applicantType: string;
  orgName: string;
  contactPerson: string;
  designation: string;
  mobile: string;
  email: string;
  website: string;
  city: string;
  stateCountry: string;
  awardCategory: string;
  briefProfile: string;
  yearsExperience: string;
  teamSize: string;
  keyServices: string;
  keyAchievements: string;
  uniqueContribution: string;
  impactCreated: string;
  innovation: string;
  whyDeserve: string;
  deckFileName: string;
  certFileName: string;
  mediaFileName: string;
  socialLink: string;
  declaration: boolean;
}

const INITIAL_FORM: FormState = {
  applicantType: "",
  orgName: "",
  contactPerson: "",
  designation: "",
  mobile: "",
  email: "",
  website: "",
  city: "",
  stateCountry: "",
  awardCategory: "",
  briefProfile: "",
  yearsExperience: "",
  teamSize: "",
  keyServices: "",
  keyAchievements: "",
  uniqueContribution: "",
  impactCreated: "",
  innovation: "",
  whyDeserve: "",
  deckFileName: "",
  certFileName: "",
  mediaFileName: "",
  socialLink: "",
  declaration: false,
};

/* ---------------------------------------------------------
   Scroll-reveal wrapper (no <style> tags, Tailwind only)
--------------------------------------------------------- */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------------------------------------------------------
   Small reusable pieces
--------------------------------------------------------- */
function Field({
  label,
  placeholder,
  required = false,
  type = "text",
  span = 1,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  span?: number;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className={span === 2 ? "sm:col-span-2" : ""}>
      <label className="block text-[13px] font-medium text-emerald-950 mb-1">
        {label} {required && <span className="text-amber-600">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-emerald-900/15 bg-white px-3 py-2 text-sm text-emerald-950 placeholder:text-black outline-none transition-all duration-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 hover:border-emerald-900/30"
      />
    </div>
  );
}

function Select({
  label,
  placeholder,
  required = false,
  options = [],
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  options?: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-emerald-950 mb-1">
        {label} {required && <span className="text-amber-600">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-emerald-900/15 bg-white px-3 py-2 text-sm text-black outline-none transition-all duration-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 hover:border-emerald-900/30"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextArea({
  label,
  placeholder,
  required = false,
  span = 1,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  span?: number;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className={span === 2 ? "sm:col-span-2" : span === 4 ? "sm:col-span-2 lg:col-span-4" : ""}>
      <label className="block text-[13px] font-medium text-emerald-950 mb-1">
        {label} {required && <span className="text-amber-600">*</span>}
      </label>
      <textarea
        rows={3}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full resize-none rounded-md border border-emerald-900/15 bg-white px-3 py-2 text-sm text-emerald-950 placeholder:text-black outline-none transition-all duration-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 hover:border-emerald-900/30"
      />
    </div>
  );
}

function UploadRow({
  label,
  subLabel,
  fileName,
  onChange,
}: {
  label: string;
  subLabel: string;
  fileName: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <div className="mb-1">
        <p className="text-[13px] font-medium text-emerald-950">{label}</p>
        <p className="text-[11px] text-black">{subLabel}</p>
      </div>
      <label className="flex cursor-pointer items-center gap-2 rounded-md border border-dashed border-amber-500/50 bg-amber-50 px-3 py-2 text-xs text-black transition-colors duration-200 hover:bg-amber-100">
        <Upload className="h-4 w-4 shrink-0 text-amber-600" />
        Upload File
        <span className="truncate text-black">
          {fileName || "No file chosen"}
        </span>
        <input
          type="file"
          className="hidden"
          onChange={(e) => onChange(e.target.files?.[0]?.name || "")}
        />
      </label>
    </div>
  );
}

function SectionBadge({ n, title }: { n: number; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-lime-600 text-xs font-bold text-white shadow-sm shadow-lime-600/40">
        {n}
      </span>
      <h3 className="text-sm font-bold tracking-wide text-emerald-950">
        {title}
      </h3>
    </div>
  );
}

function SidebarCheck({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-[13px] text-emerald-50/90">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-lime-400 transition-transform duration-200 group-hover:scale-110" />
      <span>{text}</span>
    </li>
  );
}

/* ---------------------------------------------------------
   Process steps data
--------------------------------------------------------- */
const processSteps = [
  {
    n: "01",
    title: "Nomination",
    desc: "Submit your nomination online in the relevant category.",
    Icon: ClipboardList,
  },
  {
    n: "02",
    title: "Eligibility Check",
    desc: "Our team verifies eligibility and supporting documents.",
    Icon: ClipboardCheck,
  },
  {
    n: "03",
    title: "Evaluation",
    desc: "Nominations are evaluated by our expert jury panel based on defined criteria.",
    Icon: Users,
  },
  {
    n: "04",
    title: "Shortlisting",
    desc: "Top nominees are shortlisted in each category.",
    Icon: Award,
  },
  {
    n: "05",
    title: "Jury Assessment",
    desc: "Final assessment by the jury to select the award winners.",
    Icon: Star,
  },
  {
    n: "06",
    title: "Recognition",
    desc: "Winners are honoured at the Bharat Organic Expo 2027.",
    Icon: Trophy,
  },
];

const bannerStats = [
  { value: "200+", label: "EXHIBITORS", icon: Building2 },
  { value: "8,000+", label: "TRADE VISITORS", icon: Users },
  { value: "5,000 Sqm", label: "EXHIBITION AREA", icon: Map },
  { value: "10+ Years", label: "PROVEN EXPERIENCE", icon: Award },
];

function StatCounter({ value }: { value: string }) {
  const match = value.match(/^([\d,]+)(.*)$/);
  const target = match ? Number(match[1].replace(/,/g, "")) : 0;
  const suffix = match?.[2] || "";
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!match) return;

    const duration = 1800;
    const startTime = performance.now();
    let frameId: number;

    const animateCount = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * easedProgress));
      if (progress < 1) frameId = requestAnimationFrame(animateCount);
    };

    frameId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return <>{count.toLocaleString()}{suffix}</>;
}

const APPLICANT_TYPES = ["Individual", "Organization", "Startup"];

const YEARS_EXPERIENCE = [
  "Less than 1 Year",
  "1 – 3 Years",
  "3 – 5 Years",
  "5 – 10 Years",
  "10 – 15 Years",
  "15+ Years",
];

const TEAM_SIZES = ["1 – 10", "11 – 50", "51 – 200", "200+"];

const INDIAN_STATES = [
  "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Odisha", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Other (India)", "International",
];

const AWARD_CATEGORIES = [
  "Best Hospital / Healthcare Institution",
  "Excellence in Medical Practice",
  "Ayurveda & Natural Healing Leader",
  "Wellness & Spa Brand of the Year",
  "Fitness Innovation Award",
  "Nutrition & Organic Excellence",
  "Medical Tourism Excellence",
  "Healthcare Startup of the Year",
  "Women Leadership in Healthcare",
  "Lifetime Achievement Award",
];

/* ---------------------------------------------------------
   Main component
--------------------------------------------------------- */
export default function BharatOrganicAwards() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleSubmit = () => {
    if (!form.applicantType) return setError("Please select applicant type.");
    if (!form.orgName.trim()) return setError("Full name / organisation name is required.");
    if (!form.contactPerson.trim()) return setError("Contact person is required.");
    if (!form.designation.trim()) return setError("Designation is required.");
    if (!form.mobile.trim()) return setError("Mobile number is required.");
    if (!form.email.trim()) return setError("Email ID is required.");
    if (!form.city.trim()) return setError("City / state / country is required.");
    if (!form.stateCountry) return setError("Please select state / country.");
    if (!form.awardCategory) return setError("Please select an award category.");
    if (!form.briefProfile.trim()) return setError("Brief profile is required.");
    if (!form.yearsExperience) return setError("Please select years of experience.");
    if (!form.keyServices.trim()) return setError("Key services / products are required.");
    if (!form.keyAchievements.trim()) return setError("Key achievements are required.");
    if (!form.uniqueContribution.trim()) return setError("Unique contribution is required.");
    if (!form.impactCreated.trim()) return setError("Impact created is required.");
    if (!form.whyDeserve.trim()) return setError("Please share why you deserve this award.");
    if (!form.declaration) return setError("Please accept the declaration.");

    setSubmitting(true);
    setError("");
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="w-full bg-[#f7f5ec] font-sans min-h-screen flex items-center justify-center px-5 py-20">
        <Reveal className="max-w-lg w-full rounded-2xl border border-emerald-900/10 bg-white p-8 text-center shadow-lg">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lime-100">
            <CheckCircle2 className="h-8 w-8 text-lime-600" />
          </div>
          <h2 className="mt-4 text-xl font-extrabold text-emerald-950">
            NOMINATION SUBMITTED!
          </h2>
          <p className="mt-2 text-sm text-emerald-950/70 leading-relaxed">
            Thank you for submitting your nomination for the{" "}
            <strong>Bharat Organic Excellence Awards 2027</strong>. Our jury team
            will review your application and contact you shortly.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm(INITIAL_FORM);
            }}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-950 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-emerald-900 active:scale-95"
          >
            Submit Another Nomination
          </button>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-hidden bg-[#f7f5ec] font-sans">
      {/* ================= HERO ================= */}
      <section className="relative flex h-[68vh] min-h-[400px] w-full items-center overflow-hidden bg-[#f7f5ec] pt-3 font-inter md:h-[72vh] md:pt-5 lg:h-[78vh] border-b-4 border-[#ea580c] pb-4 md:pb-6">
        {/* full-width background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={nominationBg.src}
            alt="Bharat Organic Excellence Awards 2027 Nominations"
            className="h-full w-full object-cover"
          />
        </div>
        {/* floating leaf accents */}
        <Leaf className="pointer-events-none absolute -left-4 top-6 h-16 w-16 -rotate-12 text-lime-700/20 animate-[bounce_6s_ease-in-out_infinite]" />
        <Leaf className="pointer-events-none absolute right-10 bottom-4 hidden h-20 w-20 rotate-45 text-lime-300/10 sm:block" />

        <div className="relative z-20 w-full px-4 py-1 md:px-11 md:py-2">
          <div className="max-w-2xl text-left">
            {/* <img
              src={bharatOrganicLogo.src}
              alt="Bharat Organic Logo"
              className="mb-3 h-14 w-auto object-contain md:mb-4 md:h-16"
            /> */}

            <h1 className="mb-3 font-poppins text-4xl font-semibold uppercase leading-[1.02] tracking-tight text-[#0b3b18] sm:text-5xl md:text-[56px] lg:text-[66px]" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}>
              <span className="block text-[26px] font-semibold tracking-tight sm:text-[26px] md:text-[26px] lg:text-[36px]">Bharat Organic</span>
              <span className="block font-semibold tracking-tight">Excellence</span>
              <span className="block font-semibold tracking-tight text-[#ea580c]">Awards 2027</span>
            </h1>

            <p className="mb-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-bold uppercase tracking-wider text-[#0b3b18] sm:text-[13.5px]">
              <span>Celebrating Excellence</span>
              <span className="text-sm text-[#ea580c]">•</span>
              <span>Innovation</span>
              <span className="text-sm text-[#ea580c]">•</span>
              <span>Sustainability</span>
            </p>
            <p className="text-black max-w-xl font-semibold">
              Honouring the changemakers, organizations and innovations during india's organic, natural and sustainable future.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  const formSection = document.getElementById("nomination-form");
                  if (formSection) formSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="group inline-flex items-center gap-2 rounded-full bg-[#0b3b18] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-widest text-white shadow-lg ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123d1c] hover:shadow-xl"
              >
                <Award className="h-4 w-4 text-[#F2B40E]" />
                Submit Nomination
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                href="/awards"
                className="group inline-flex items-center gap-2 rounded-full border border-[#0b3b18]/30 bg-white/90 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-widest text-[#0b3b18] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b3b18] hover:text-white hover:shadow-lg"
              >
                <Medal className="h-4 w-4 text-[#0b2912]" />
                View Categories
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-5 flex flex-col items-start gap-3 text-xs font-bold text-[#4B1426] sm:flex-row sm:items-center sm:gap-4 sm:text-sm md:text-[14px]">
              <div className="flex items-center gap-3">
                <Calendar className="h-[25px] w-[25px] shrink-0 text-emerald-900" />
                <div>
                  
                <p>19 - 21</p>
                <p className="uppercase">February 2027</p>
                </div>
              </div>
              <span className="hidden h-4 w-px bg-[#4B1426]/30 sm:block" />
              <div className="flex items-center gap-3">
                <MapPin className="h-[25px] w-[25px] shrink-0 text-emerald-900" />
                <div>
                  
                <p>Hall 12, Bharat Mandapam</p>
                <p className="uppercase">PRAGATI MAIDAN, NEW DELHI, INDIA</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="relative z-20 -mt-6 font-inter md:-mt-8">
        <SectionContainer>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#1b5e20] p-0.5 shadow-[0_8px_20px_-10px_rgba(0,0,0,0.3)] md:px-3 md:py-2">
            <div className="grid grid-cols-2 items-center justify-center gap-x-2 gap-y-3 sm:grid-cols-4 md:flex md:flex-nowrap md:justify-between md:gap-0">
              {bannerStats.map(({ value, label, icon: Icon }, index) => (
                <React.Fragment key={label}>
                  <div className="group flex flex-1 flex-col items-center py-1 text-center">
                    <Icon className="mb-1 h-4 w-4 stroke-[1.75] text-white md:h-5 md:w-5" />
                    <h4 className="mb-0.5 font-inter text-[11px] font-semibold leading-none text-white sm:text-[13px] md:text-sm">
                      <StatCounter value={value} />
                    </h4>
                    <p className="mt-0.5 font-inter text-[8px] font-bold uppercase leading-tight tracking-widest text-[#facc15] md:text-[9px]">
                      {label}
                    </p>
                  </div>
                  {index < bannerStats.length - 1 && (
                    <div className="hidden h-6 w-px bg-white/20 md:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* ================= PROCESS ================= */}
      <section className="w-full px-4 py-2 md:px-11 md:py-4 my-4">
        <Reveal>
          <div className="mb-6 flex items-center justify-center gap-2 text-emerald-900">
            <Sprout className="h-4 w-4 text-lime-600" />
            <h2 className="text-base font-bold tracking-widest sm:text-lg">
              THE AWARD PROCESS
            </h2>
            <Sprout className="h-4 w-4 -scale-x-100 text-lime-600" />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-6 md:grid-cols-6 sm:gap-x-8">
          {processSteps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="group relative flex flex-col items-center text-center">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-lime-600/40 bg-lime-50 transition-all duration-300 group-hover:border-lime-600 group-hover:bg-lime-100 group-hover:shadow-lg group-hover:shadow-lime-600/20 group-hover:-translate-y-1">
                  <s.Icon className="h-6 w-6 text-emerald-800 transition-transform duration-300 group-hover:scale-110" />
                </div>
                {i < processSteps.length - 1 && (
                  <ArrowRight className="absolute left-[calc(100%+1rem)] top-7 hidden h-5 w-5 -translate-y-1/2 text-emerald-800/50 sm:block" />
                )}
                <p className="mt-2 text-[11px] font-bold text-amber-600">
                  {s.n}
                </p>
                <p className="text-xs font-bold uppercase leading-tight text-emerald-950 sm:text-sm">
                  {s.title}
                </p>
                <p className="mt-1 text-xs font-medium leading-relaxed text-emerald-950/70 sm:text-[13px]">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= FORM + SIDEBAR ================= */}
      <section id="nomination-form" className="w-full px-4 py-2 md:px-11 md:py-4 grid grid-cols-1 gap-4 lg:gap-4 lg:grid-cols-[1fr_320px]">
        {/* ---- Nomination form ---- */}
        <div className="min-w-0">
          <Reveal className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ClipboardList className="h-7 w-7 text-emerald-800 sm:h-8 sm:w-8" />
                <div>
                  <h2 className="text-lg font-bold text-emerald-950 sm:text-xl">
                    NOMINATION FORM
                  </h2>
                  <p className="text-sm text-emerald-950/60">
                    Please fill in the details below to submit your nomination.
                  </p>
                </div>
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <ShieldCheck className="h-6 w-6 text-amber-500" />
                <div className="flex flex-col leading-tight">
                    <p className="text-sm font-bold text-emerald-950">100%</p>
                    <p className="text-[10px] font-semibold text-emerald-950/60">SECURE</p>
                </div>
              </div>
            </div>

            {/* 1. Applicant details */}
            <SectionBadge n={1} title="APPLICANT DETAILS" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Select
                label="Applicant Type"
                placeholder="Select Type"
                required
                options={APPLICANT_TYPES}
                value={form.applicantType}
                onChange={(v) => update("applicantType", v)}
              />
              <Field
                label="Full Name / Org Name"
                placeholder="Enter full name or organization name"
                required
                value={form.orgName}
                onChange={(v) => update("orgName", v)}
              />
              <Field
                label="Contact Person"
                placeholder="Enter contact person name"
                required
                value={form.contactPerson}
                onChange={(v) => update("contactPerson", v)}
              />
              <Field
                label="Designation"
                placeholder="Enter designation"
                value={form.designation}
                onChange={(v) => update("designation", v)}
              />
              <Field
                label="Mobile Number"
                placeholder="Enter mobile number"
                type="tel"
                required
                value={form.mobile}
                onChange={(v) => update("mobile", v)}
              />
              <Field
                label="Email ID"
                placeholder="Enter email address"
                type="email"
                required
                value={form.email}
                onChange={(v) => update("email", v)}
              />
              <Field
                label="Website (If any)"
                placeholder="www.example.com"
                value={form.website}
                onChange={(v) => update("website", v)}
              />
              <Select
                label="City / State / Country"
                placeholder="Select state / country"
                required
                options={INDIAN_STATES}
                value={form.stateCountry}
                onChange={(v) => update("stateCountry", v)}
              />
            </div>

            {/* 2. Award category */}
            <div className="mt-6">
              <SectionBadge n={2} title="AWARD CATEGORY" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="lg:col-span-2">
                  <Select
                    label="Select Award Category"
                    placeholder="-- Select Award Category --"
                    required
                    options={AWARD_CATEGORIES}
                    value={form.awardCategory}
                    onChange={(v) => update("awardCategory", v)}
                  />
                </div>
              </div>
            </div>

            {/* 3. Profile details */}
            <div className="mt-6">
              <SectionBadge n={3} title="PROFILE DETAILS" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <TextArea
                  label="Brief Profile (150 – 200 words)"
                  placeholder="Tell us about yourself / your organization and your core purpose."
                  required
                  span={2}
                  value={form.briefProfile}
                  onChange={(v) => update("briefProfile", v)}
                />
                <Select
                  label="Years of Experience"
                  placeholder="Select Experience"
                  required
                  options={YEARS_EXPERIENCE}
                  value={form.yearsExperience}
                  onChange={(v) => update("yearsExperience", v)}
                />
                <Select
                  label="Team Size (If Organization)"
                  placeholder="Select Team Size"
                  options={TEAM_SIZES}
                  value={form.teamSize}
                  onChange={(v) => update("teamSize", v)}
                />
                <TextArea
                  label="Key Services / Products Offered"
                  placeholder="Write about the key services or products you offer."
                  required
                  span={4}
                  value={form.keyServices}
                  onChange={(v) => update("keyServices", v)}
                />
              </div>
            </div>

            {/* 4. Achievements & impact */}
            <div className="mt-6">
              <SectionBadge n={4} title="ACHIEVEMENTS & IMPACT" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <TextArea
                  label="Key Achievements (Max 5 points)"
                  placeholder="List your major achievements, awards, recognitions or milestones."
                  required
                  value={form.keyAchievements}
                  onChange={(v) => update("keyAchievements", v)}
                />
                <TextArea
                  label="Unique Contribution to Healthcare / Wellness"
                  placeholder="What makes you unique and your contribution to the industry?"
                  required
                  value={form.uniqueContribution}
                  onChange={(v) => update("uniqueContribution", v)}
                />
                <TextArea
                  label="Impact Created"
                  placeholder="Share the impact created, people served, lives touched, growth metrics, etc."
                  required
                  value={form.impactCreated}
                  onChange={(v) => update("impactCreated", v)}
                />
                <TextArea
                  label="Innovation / Technology Used (If any)"
                  placeholder="Mention any innovation, technology or research that adds value."
                  value={form.innovation}
                  onChange={(v) => update("innovation", v)}
                />
                <TextArea
                  label="Why do you deserve this award? (Max 100 words)"
                  placeholder="Share why you believe you are the right choice for this award."
                  required
                  span={2}
                  value={form.whyDeserve}
                  onChange={(v) => update("whyDeserve", v)}
                />
              </div>
            </div>

            {/* 5. Supporting documents */}
            <div className="mt-6">
              <SectionBadge n={5} title="SUPPORTING DOCUMENTS" />
              <p className="mb-3 text-[11px] text-black">
                Upload supporting documents (PDF, DOC, JPG, PNG – Max size 10MB each)
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <UploadRow
                  label="Profile Deck"
                  subLabel="Profile / Company Deck"
                  fileName={form.deckFileName}
                  onChange={(v) => update("deckFileName", v)}
                />
                <UploadRow
                  label="Certifications"
                  subLabel="Certifications / Awards"
                  fileName={form.certFileName}
                  onChange={(v) => update("certFileName", v)}
                />
                <UploadRow
                  label="Images Videos"
                  subLabel="Images / Videos"
                  fileName={form.mediaFileName}
                  onChange={(v) => update("mediaFileName", v)}
                />
                <div>
                  <div className="mb-1">
                    <p className="text-[13px] font-medium text-black">Social Links</p>
                    <p className="text-[11px] text-black">Website / Social Links</p>
                  </div>
                  <div className="relative">
                    <Link2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-600" />
                    <input
                      type="url"
                      placeholder="https://www.example.com"
                      value={form.socialLink}
                      onChange={(e) => update("socialLink", e.target.value)}
                      className="w-full rounded-md border border-emerald-900/15 bg-white py-2 pl-9 pr-3 text-sm text-emerald-950 placeholder:text-black outline-none transition-all duration-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 hover:border-emerald-900/30"
                    />
                  </div>
                </div>
              </div>
              <p className="mt-3 text-[11px] italic text-black">
                You can upload multiple files after submission.
              </p>
            </div>

            {/* 6. Declaration */}
            <div className="mt-6">
              <SectionBadge n={6} title="DECLARATION" />
              <label className="flex items-start gap-2 rounded-md bg-emerald-50/60 p-2.5 text-sm text-black cursor-pointer sm:text-[15px]">
                <input
                  type="checkbox"
                  checked={form.declaration}
                  onChange={(e) => update("declaration", e.target.checked)}
                  className="mt-0.5 h-3.5 w-3.5 accent-emerald-800"
                />
                <span>
                  I hereby declare that the information provided above is true,
                  correct and complete to the best of my knowledge.
                </span>
              </label>

              {error && (
                <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-xs font-semibold text-red-600">
                  {error}
                </p>
              )}

              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-emerald-950 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-emerald-900 hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto sm:px-8"
              >
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                {submitting ? "SUBMITTING..." : "SUBMIT NOMINATION"}
              </button>
              <p className="mt-3 text-sm text-black sm:text-[15px]">
                <ShieldCheck className="mr-1 inline h-3.5 w-3.5 text-amber-600" />
                Your information is secure and will be kept confidential.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ---- Sidebar ---- */}
        <aside className="space-y-5 lg:sticky lg:top-24 self-start">
          <Reveal delay={100} className="group rounded-2xl bg-gradient-to-br from-emerald-950 to-emerald-900 p-5 text-white shadow-md transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-2 flex items-center gap-2">
              <Trophy className="h-4 w-4 text-amber-400" />
              <h3 className="text-xs font-bold tracking-wide">
                WHY PARTICIPATE?
              </h3>
            </div>
            <ul className="space-y-1.5">
              <SidebarCheck text="National & Global Recognition" />
              <SidebarCheck text="Enhance Brand Value & Credibility" />
              <SidebarCheck text="Networking with Industry Leaders" />
              <SidebarCheck text="Business Growth Opportunities" />
              <SidebarCheck text="Showcase Innovation & Impact" />
            </ul>
          </Reveal>

          <Reveal delay={150} className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-emerald-950">
              <Calendar className="h-4 w-4 text-amber-500" />
              <h3 className="text-xs font-bold tracking-wide">
                IMPORTANT DATES
              </h3>
            </div>
            <ul className="space-y-1.5 text-[12px] text-emerald-950/80">
              <li className="flex justify-between border-b border-dashed border-emerald-900/10 pb-1">
                <span>Nominations Open</span>
                <span className="font-semibold">1 July 2026</span>
              </li>
              <li className="flex justify-between border-b border-dashed border-emerald-900/10 pb-1">
                <span>Last Date for Nominations</span>
                <span className="font-semibold">31 December 2026</span>
              </li>
              <li className="flex justify-between border-b border-dashed border-emerald-900/10 pb-1">
                <span>Shortlisting</span>
                <span className="font-semibold">January 2027</span>
              </li>
              <li className="flex justify-between pb-1">
                <span>Awards Ceremony</span>
                <span className="font-semibold">19 – 21 February 2027</span>
              </li>
            </ul>
            <p className="mt-1 text-[10px] italic text-emerald-950/40">
              *Dates are subject to change.
            </p>
          </Reveal>

          <Reveal delay={200} className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-emerald-950">
              <Users className="h-4 w-4 text-amber-500" />
              <h3 className="text-xs font-bold tracking-wide">
                WHO CAN APPLY?
              </h3>
            </div>
            <ul className="space-y-1.5 text-[12px] text-emerald-950/80">
              {[
                "Companies & Brands",
                "Startups & Entrepreneurs",
                "Farmers & Producer Groups",
                "Institutions, Organisations & NGOs",
                "Individuals & Professionals",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 shrink-0 text-lime-600" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-[11px] text-emerald-950/60">
              Open to Indian & International participants.
            </p>
          </Reveal>

          <Reveal delay={250} className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
            <div className="mb-2 flex items-center gap-2 text-emerald-950">
              <Phone className="h-4 w-4 text-amber-500" />
              <h3 className="text-xs font-bold tracking-wide">NEED HELP?</h3>
            </div>
            <p className="mb-2 text-[12px] text-emerald-950/70">
              For any assistance, feel free to contact our awards team.
            </p>
            <div className="space-y-1.5 text-[12px] text-emerald-950/80">
              <a href="tel:+919654900525" className="flex items-center gap-2 transition-colors duration-200 hover:text-amber-600">
                <Phone className="h-3.5 w-3.5 text-emerald-700" />
                +91 96549 00525
              </a>
              <a href="mailto:awards@bharatorganicexpo.com" className="flex items-center gap-2 transition-colors duration-200 hover:text-amber-600">
                <Mail className="h-3.5 w-3.5 text-emerald-700" />
                awards@bharatorganicexpo.com
              </a>
              <a href="https://www.bharatorganicexpo.com" className="flex items-center gap-2 transition-colors duration-200 hover:text-amber-600">
                <Globe className="h-3.5 w-3.5 text-emerald-700" />
                www.bharatorganicexpo.com
              </a>
            </div>
          </Reveal>
        </aside>
      </section>

      {/* ================= BOTTOM STRIP ================= */}
      <Reveal>
        <section className="relative overflow-hidden border-t border-emerald-900/10 bg-[#f2efe0]">
          <img
            src={beTheLeft.src}
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute left-0 bottom-0 h-44 lg:h-52 w-auto opacity-30 z-0"
          />
          <img
            src={beTheRight.src}
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute right-0 top-0 h-44 lg:h-52 w-auto z-0"
          />
          <div className="relative z-10 w-full px-4 py-2 md:px-11 md:py-4 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-extrabold text-emerald-950">
                CELEBRATING LEADERS.
              </p>
              <p className="text-sm font-extrabold text-emerald-950">
                BUILDING A SUSTAINABLE FUTURE.
              </p>
            </div>
            <p className="max-w-xs text-xs text-emerald-950/60">
              Your nomination today can inspire a greener, healthier and more
              sustainable tomorrow.
            </p>
          </div>
        </section>
      </Reveal>
    </div>
  );
}