"use client";

import { useState } from "react";
import AwardProcess from "../../components/awards/nominations/AwardProcess";
import BottomStrip from "../../components/awards/nominations/BottomStrip";
import NominationForm from "../../components/awards/nominations/NominationForm";
import NominationHero from "../../components/awards/nominations/NominationHero";
import NominationSidebar from "../../components/awards/nominations/NominationSidebar";
import NominationSuccess from "../../components/awards/nominations/NominationSuccess";

<<<<<<< HEAD
export default function NominationsPage() {
=======
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
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
        className="w-full rounded-md border border-emerald-900/15 bg-white px-3 py-2 text-sm text-emerald-950 placeholder:text-emerald-900/35 outline-none transition-all duration-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 hover:border-emerald-900/30"
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
        className="w-full rounded-md border border-emerald-900/15 bg-white px-3 py-2 text-sm text-emerald-900/40 outline-none transition-all duration-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 hover:border-emerald-900/30"
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
        className="w-full resize-none rounded-md border border-emerald-900/15 bg-white px-3 py-2 text-sm text-emerald-950 placeholder:text-emerald-900/35 outline-none transition-all duration-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 hover:border-emerald-900/30"
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
        <p className="text-[11px] text-emerald-950/50">{subLabel}</p>
      </div>
      <label className="flex cursor-pointer items-center gap-2 rounded-md border border-dashed border-amber-500/50 bg-amber-50 px-3 py-2 text-xs text-emerald-950/70 transition-colors duration-200 hover:bg-amber-100">
        <Upload className="h-4 w-4 shrink-0 text-amber-600" />
        Upload File
        <span className="truncate text-emerald-950/40">
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
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime-400 transition-transform duration-200 group-hover:scale-110" />
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
>>>>>>> 467be4d3e8a1afbeebaa621db28932406bf79535
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <NominationSuccess onReset={() => setSubmitted(false)} />;
  }

  return (
    <div className="w-full min-h-screen overflow-x-clip bg-[#f7f5ec] font-sans">
      <NominationHero />
      <AwardProcess />
      <section
        id="nomination-form"
        className="container mx-auto max-w-[1400px] px-6 py-2 md:py-4 grid grid-cols-1 gap-4 lg:gap-4 lg:grid-cols-[1fr_380px]"
      >
        <NominationForm onSubmitted={() => setSubmitted(true)} />
        <NominationSidebar />
      </section>
      <BottomStrip />
    </div>
  );
}