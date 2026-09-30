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
import beTheLeft from "../../assets/exhibitors/be_the_left.webp";
import beTheRight from "../../assets/exhibitors/be_the_right.png";
import SectionContainer from "@/app/components/layout/SectionContainer";
import { verifyApi } from "@/lib/api";

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
   Validation
--------------------------------------------------------- */
type FileKey = "deckFile" | "certFile" | "mediaFile";
type NominationFiles = Partial<Record<FileKey, File>>;
type FieldKey = keyof FormState | FileKey;

const MOBILE_RE = /^[6-9]\d{9}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const URL_RE = /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/\S*)?$/i;
const NAME_RE = /^[a-zA-Z][a-zA-Z .'-]*$/;
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const DOC_EXT = /\.(pdf|docx?|jpe?g|png)$/i;
const MEDIA_EXT = /\.(jpe?g|png|webp|mp4|mov|webm)$/i;

const wordCount = (text: string) => (text.trim() ? text.trim().split(/\s+/).length : 0);
const pointCount = (text: string) => text.split(/\n/).filter((line) => line.trim()).length;

// Short names used in the "still to complete" list under the submit button.
const FIELD_LABELS: Record<FieldKey, string> = {
  applicantType: "Applicant Type",
  orgName: "Full Name / Org Name",
  contactPerson: "Contact Person",
  designation: "Designation",
  mobile: "Mobile Number",
  email: "Email ID",
  website: "Website",
  city: "City",
  stateCountry: "State / Country",
  awardCategory: "Award Category",
  briefProfile: "Brief Profile",
  yearsExperience: "Years of Experience",
  teamSize: "Team Size",
  keyServices: "Key Services / Products",
  keyAchievements: "Key Achievements",
  uniqueContribution: "Unique Contribution",
  impactCreated: "Impact Created",
  innovation: "Innovation / Technology",
  whyDeserve: "Why do you deserve this award?",
  socialLink: "Social Links",
  declaration: "Declaration",
  deckFile: "Profile Deck",
  certFile: "Certifications",
  mediaFile: "Images / Videos",
};

function validateForm(form: FormState, files: NominationFiles): Partial<Record<FieldKey, string>> {
  const e: Partial<Record<FieldKey, string>> = {};
  const t = (v: string) => v.trim();

  if (!form.applicantType) e.applicantType = "Please select applicant type.";
  if (!t(form.orgName)) e.orgName = "Full name / organisation name is required.";
  else if (t(form.orgName).length < 2) e.orgName = "Name is too short.";
  if (!t(form.contactPerson)) e.contactPerson = "Contact person is required.";
  else if (!NAME_RE.test(t(form.contactPerson))) e.contactPerson = "Use letters only.";
  if (!form.mobile) e.mobile = "Mobile number is required.";
  else if (!MOBILE_RE.test(form.mobile)) e.mobile = "Enter a valid 10-digit mobile number.";
  if (!t(form.email)) e.email = "Email ID is required.";
  else if (!EMAIL_RE.test(t(form.email))) e.email = "Enter a valid email address.";
  if (t(form.website) && !URL_RE.test(t(form.website))) e.website = "Enter a valid website, e.g. www.example.com";
  if (!t(form.city)) e.city = "City is required.";
  if (!form.stateCountry) e.stateCountry = "Please select state / country.";
  if (!form.awardCategory) e.awardCategory = "Please select an award category.";

  const profileWords = wordCount(form.briefProfile);
  if (!profileWords) e.briefProfile = "Brief profile is required.";
  else if (profileWords < 150 || profileWords > 200)
    e.briefProfile = `Write 150–200 words (currently ${profileWords}).`;
  if (!form.yearsExperience) e.yearsExperience = "Please select years of experience.";
  if (!t(form.keyServices)) e.keyServices = "Key services / products are required.";

  if (!t(form.keyAchievements)) e.keyAchievements = "Key achievements are required.";
  else if (pointCount(form.keyAchievements) > 5) e.keyAchievements = "Maximum 5 points (one per line).";
  if (!t(form.uniqueContribution)) e.uniqueContribution = "Unique contribution is required.";
  if (!t(form.impactCreated)) e.impactCreated = "Impact created is required.";
  const whyWords = wordCount(form.whyDeserve);
  if (!whyWords) e.whyDeserve = "Please share why you deserve this award.";
  else if (whyWords > 100) e.whyDeserve = `Maximum 100 words (currently ${whyWords}).`;

  (["deckFile", "certFile", "mediaFile"] as FileKey[]).forEach((key) => {
    const file = files[key];
    if (!file) return;
    const allowed = key === "mediaFile" ? MEDIA_EXT : DOC_EXT;
    if (!allowed.test(file.name)) e[key] = "Unsupported file type.";
    else if (file.size > MAX_FILE_BYTES) e[key] = "File must be 10MB or smaller.";
  });
  if (t(form.socialLink) && !URL_RE.test(t(form.socialLink))) e.socialLink = "Enter a valid link.";

  if (!form.declaration) e.declaration = "Please accept the declaration.";
  return e;
}

/* ---------------------------------------------------------
   OTP verification (WhatsApp for mobile, email for email)
--------------------------------------------------------- */
type OtpResponse = { success?: boolean; message?: string };

function useOtp() {
  const [verified, setVerified] = useState(false);
  const [sent, setSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; ok: boolean } | null>(null);

  useEffect(() => {
    if (timer <= 0) return;
    const id = setTimeout(() => setTimer((value) => value - 1), 1000);
    return () => clearTimeout(id);
  }, [timer]);

  const reset = () => {
    setVerified(false);
    setSent(false);
    setOtp("");
    setTimer(0);
    setMessage(null);
  };

  const send = async (request: () => Promise<OtpResponse>) => {
    setLoading(true);
    setMessage(null);
    try {
      const res = await request();
      if (res?.success) {
        setSent(true);
        setTimer(60);
        setMessage({ text: res.message || "OTP sent.", ok: true });
      } else {
        setMessage({ text: res?.message || "Could not send OTP. Please try again.", ok: false });
      }
    } catch {
      setMessage({ text: "Could not send OTP. Please try again.", ok: false });
    } finally {
      setLoading(false);
    }
  };

  const confirm = async (request: (code: string) => Promise<OtpResponse>) => {
    if (otp.length !== 6) return;
    setLoading(true);
    setMessage(null);
    try {
      const res = await request(otp);
      if (res?.success) {
        setVerified(true);
        setOtp("");
        setMessage(null);
      } else {
        setMessage({ text: res?.message || "Invalid OTP. Please try again.", ok: false });
      }
    } catch {
      setMessage({ text: "Verification failed. Please try again.", ok: false });
    } finally {
      setLoading(false);
    }
  };

  return { verified, sent, otp, setOtp, timer, loading, message, reset, send, confirm };
}

/* ---------------------------------------------------------
   Small reusable pieces
--------------------------------------------------------- */
const inputBase =
  "w-full rounded-md border bg-white px-3 py-2 text-sm text-emerald-950 placeholder:text-black outline-none transition-all duration-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 disabled:bg-gray-50";
const borderFor = (error?: string) =>
  error ? "border-red-400" : "border-emerald-900/15 hover:border-emerald-900/30";

function FieldError({ error }: { error?: string }) {
  return error ? <p className="mt-1 text-[11px] font-medium text-red-600">{error}</p> : null;
}

function Field({
  label,
  placeholder,
  required = false,
  type = "text",
  span = 1,
  value,
  onChange,
  onBlur,
  error,
  inputMode,
  maxLength,
  rightSlot,
  children,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  span?: number;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  error?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
  rightSlot?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className={span === 2 ? "sm:col-span-2" : ""}>
      <label className="block text-[13px] font-medium text-emerald-950 mb-1">
        {label} {required && <span className="text-amber-600">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          inputMode={inputMode}
          maxLength={maxLength}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          className={`${inputBase} ${borderFor(error)} ${rightSlot ? "pr-24" : ""}`}
        />
        {rightSlot && <div className="absolute right-1 top-1/2 -translate-y-1/2">{rightSlot}</div>}
      </div>
      <FieldError error={error} />
      {children}
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
  error,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  options?: string[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-emerald-950 mb-1">
        {label} {required && <span className="text-amber-600">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputBase} text-black ${borderFor(error)}`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <FieldError error={error} />
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
  onBlur,
  error,
  hint,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  span?: number;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  error?: string;
  hint?: string;
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
        onBlur={onBlur}
        className={`${inputBase} resize-none ${borderFor(error)}`}
      />
      <div className="flex items-start justify-between gap-2">
        <FieldError error={error} />
        {hint && <p className="mt-1 ml-auto shrink-0 text-[11px] text-emerald-950/60">{hint}</p>}
      </div>
    </div>
  );
}

function UploadRow({
  label,
  subLabel,
  file,
  accept,
  onChange,
  error,
}: {
  label: string;
  subLabel: string;
  file?: File;
  accept: string;
  onChange: (file: File | undefined) => void;
  error?: string;
}) {
  return (
    <div>
      <div className="mb-1">
        <p className="text-[13px] font-medium text-emerald-950">{label}</p>
        <p className="text-[11px] text-black">{subLabel}</p>
      </div>
      <label
        className={`flex cursor-pointer items-center gap-2 rounded-md border border-dashed px-3 py-2 text-xs text-black transition-colors duration-200 hover:bg-amber-100 ${
          error ? "border-red-400 bg-red-50" : "border-amber-500/50 bg-amber-50"
        }`}
      >
        <Upload className="h-4 w-4 shrink-0 text-amber-600" />
        Upload File
        <span className="truncate text-black">{file?.name || "No file chosen"}</span>
        <input
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => {
            onChange(e.target.files?.[0]);
            e.target.value = "";
          }}
        />
      </label>
      {file && (
        <button
          type="button"
          onClick={() => onChange(undefined)}
          className="mt-1 text-[11px] font-medium text-emerald-800 underline"
        >
          Remove
        </button>
      )}
      <FieldError error={error} />
    </div>
  );
}

function OtpButton({
  state,
  disabled,
  onClick,
}: {
  state: ReturnType<typeof useOtp>;
  disabled: boolean;
  onClick: () => void;
}) {
  if (state.verified) {
    return (
      <span className="flex items-center gap-1 rounded bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700">
        <CheckCircle2 className="h-3.5 w-3.5" /> Verified
      </span>
    );
  }
  if (disabled) return null;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={state.loading || state.timer > 0}
      className="rounded bg-emerald-800 px-2.5 py-1 text-[11px] font-semibold uppercase text-white transition-colors hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {state.loading && !state.sent ? "Sending…" : state.timer > 0 ? `Resend ${state.timer}s` : state.sent ? "Resend" : "Verify"}
    </button>
  );
}

function OtpEntry({ state, onConfirm }: { state: ReturnType<typeof useOtp>; onConfirm: () => void }) {
  return (
    <>
      {state.sent && !state.verified && (
        <div className="mt-2 flex items-center gap-2">
          <input
            type="text"
            inputMode="numeric"
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            value={state.otp}
            onChange={(e) => state.setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
            className={`${inputBase} ${borderFor()} h-[34px]`}
          />
          <button
            type="button"
            onClick={onConfirm}
            disabled={state.otp.length !== 6 || state.loading}
            className="h-[34px] whitespace-nowrap rounded-md bg-emerald-950 px-4 text-[11px] font-semibold uppercase text-white hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Confirm
          </button>
        </div>
      )}
      {state.message && (
        <p className={`mt-1 text-[11px] font-medium ${state.message.ok ? "text-emerald-700" : "text-red-600"}`}>
          {state.message.text}
        </p>
      )}
    </>
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
   Icon map for process steps
--------------------------------------------------------- */
const STEP_ICON_MAP: Record<string, React.ElementType> = {
  ClipboardList,
  ClipboardCheck,
  Users,
  Award,
  Star,
  Trophy,
  Medal,
  nomination: ClipboardList,
  eligibility: ClipboardCheck,
  evaluation: Users,
  "evaluation-jury": Users,
  shortlisting: Award,
  jury: Star,
  recognition: Trophy,
};

function getStepIcon(icon?: string, idx?: number): React.ElementType {
  if (icon && STEP_ICON_MAP[icon]) return STEP_ICON_MAP[icon];
  const defaults = [ClipboardList, ClipboardCheck, Users, Award, Star, Trophy];
  return defaults[(idx ?? 0) % defaults.length];
}

const DEFAULT_PROCESS_STEPS = [
  { n: "01", title: "Nomination", desc: "Submit your nomination online in the relevant category.", icon: "ClipboardList" },
  { n: "02", title: "Eligibility Check", desc: "Our team verifies eligibility and supporting documents.", icon: "ClipboardCheck" },
  { n: "03", title: "Evaluation", desc: "Nominations are evaluated by our expert jury panel based on defined criteria.", icon: "Users" },
  { n: "04", title: "Shortlisting", desc: "Top nominees are shortlisted in each category.", icon: "Award" },
  { n: "05", title: "Jury Assessment", desc: "Final assessment by the jury to select the award winners.", icon: "Star" },
  { n: "06", title: "Recognition", desc: "Winners are honoured at the Bharat Organic Expo 2027.", icon: "Trophy" },
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
interface AwardsNominationClientProps {
  initialHeroData?: any;
}

export default function BharatOrganicAwards({ initialHeroData }: AwardsNominationClientProps = {}) {
  const [heroData, setHeroData] = useState<any>(initialHeroData || null);
  const [stepsData, setStepsData] = useState<any>(null);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [files, setFiles] = useState<NominationFiles>({});
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>({});
  const phoneOtp = useOtp();
  const emailOtp = useOtp();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Live fetch from backend API
  useEffect(() => {
    const fetchLiveHero = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4001/api";
        const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:4001";
        let res = await fetch(`${apiUrl}/website/awards/nomination-hero`, { cache: "no-store" }).catch(() => null);
        if (!res || !res.ok) {
          res = await fetch(`${serverUrl}/api/website/awards/nomination-hero`, { cache: "no-store" }).catch(() => null);
        }
        if (!res || !res.ok) {
          res = await fetch(`/api/website/awards/nomination-hero`, { cache: "no-store" }).catch(() => null);
        }
        if (res && res.ok) {
          const json = await res.json().catch(() => null);
          if (json?.data) {
            setHeroData(json.data);
          }
        }
      } catch (err) {
        console.error("Failed to load live awards nomination hero:", err);
      }
    };
    fetchLiveHero();
  }, []);

  // Live fetch nomination steps from backend
  useEffect(() => {
    const fetchLiveSteps = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4001/api";
        const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:4001";
        let res = await fetch(`${apiUrl}/website/awards/nomination-steps`, { cache: "no-store" }).catch(() => null);
        if (!res || !res.ok) {
          res = await fetch(`${serverUrl}/api/website/awards/nomination-steps`, { cache: "no-store" }).catch(() => null);
        }
        if (res && res.ok) {
          const json = await res.json().catch(() => null);
          if (json?.data) {
            setStepsData(json.data);
          }
        }
      } catch (err) {
        console.error("Failed to load live nomination steps:", err);
      }
    };
    fetchLiveSteps();
  }, []);

  const update = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
    // A changed number or address has to be verified again.
    if (field === "mobile" && value !== form.mobile) phoneOtp.reset();
    if (field === "email" && value !== form.email) emailOtp.reset();
  };

  const touch = (field: FieldKey) => setTouched((prev) => ({ ...prev, [field]: true }));

  const errors = validateForm(form, files);
  const errorFor = (field: FieldKey) => (touched[field] ? errors[field] : undefined);

  const pending = (Object.keys(errors) as FieldKey[]).map((key) => FIELD_LABELS[key]);
  if (!errors.mobile && !phoneOtp.verified) pending.push("Mobile OTP verification");
  if (!errors.email && !emailOtp.verified) pending.push("Email OTP verification");
  const canSubmit = pending.length === 0 && !submitting;

  const otpName = form.contactPerson.trim() || form.orgName.trim() || "Nominee";
  const normalizedEmail = form.email.trim().toLowerCase();

  const sendPhoneOtp = () =>
    phoneOtp.send(() => verifyApi.sendPhoneOtp(`91${form.mobile}`, "AWARDS_NOMINATION", otpName));
  const confirmPhoneOtp = () =>
    phoneOtp.confirm((code) => verifyApi.verifyPhoneOtp(`91${form.mobile}`, code));
  const sendEmailOtp = () =>
    emailOtp.send(() => verifyApi.sendEmailOtp(normalizedEmail, "AWARDS_NOMINATION", otpName));
  const confirmEmailOtp = () =>
    emailOtp.confirm((code) => verifyApi.verifyEmailOtp(normalizedEmail, code));

  const setFile = (key: FileKey, file: File | undefined) => {
    setFiles((prev) => ({ ...prev, [key]: file }));
    touch(key);
  };

  const resetAll = () => {
    setForm(INITIAL_FORM);
    setFiles({});
    setTouched({});
    phoneOtp.reset();
    emailOtp.reset();
    setError("");
  };

  const handleSubmit = async () => {
    if (!canSubmit) {
      setTouched(Object.fromEntries(Object.keys(FIELD_LABELS).map((key) => [key, true])));
      return;
    }

    setSubmitting(true);
    setError("");
    try {
      const body = new FormData();
      (Object.keys(form) as (keyof FormState)[]).forEach((key) => {
        const value = form[key];
        body.append(key, typeof value === "string" ? value.trim() : String(value));
      });
      body.set("email", normalizedEmail);
      (Object.keys(files) as FileKey[]).forEach((key) => {
        const file = files[key];
        if (file) body.append(key, file);
      });

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "/api";
      const res = await fetch(`${apiUrl}/website/awards/nominations`, { method: "POST", body });
      const json = await res.json().catch(() => null);

      if (!res.ok || !json?.success) {
        const list: string[] = Array.isArray(json?.errors) ? json.errors : [];
        setError(list.length ? list.join(" • ") : json?.message || "Could not submit your nomination. Please try again.");
        return;
      }
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("Could not reach the server. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
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
              resetAll();
            }}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-950 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-emerald-900 active:scale-95"
          >
            Submit Another Nomination
          </button>
        </Reveal>
      </div>
    );
  }

  // Dynamic Hero values
  const heroEnabled = heroData?.enabled !== false;
  const bgImgSrc = heroData?.image || heroData?.bgImage || nominationBg.src;
  const eyebrow = heroData?.eyebrow || ""; // eyebrow hidden by default

  let titlePrefix = heroData?.titlePrefix;
  let titlePrimary = heroData?.titlePrimary;
  let titleSecondary = heroData?.titleSecondary;

  if (!titlePrefix && !titlePrimary && !titleSecondary) {
    const rawTitle = heroData?.title || "Bharat Organic Excellence Awards 2027";
    if (rawTitle.toLowerCase().includes("bharat organic")) {
      titlePrefix = "Bharat Organic";
      const rem = rawTitle.replace(/bharat\s+organic/i, "").trim().split(/\s+/);
      titlePrimary = rem[0] || "Excellence";
      titleSecondary = rem.slice(1).join(" ") || "Awards 2027";
    } else {
      const parts = rawTitle.trim().split(/\s+/);
      if (parts.length >= 3) {
        titlePrefix = parts.slice(0, parts.length - 2).join(" ");
        titlePrimary = parts[parts.length - 2];
        titleSecondary = parts[parts.length - 1];
      } else if (parts.length === 2) {
        titlePrefix = "";
        titlePrimary = parts[0];
        titleSecondary = parts[1];
      } else {
        titlePrefix = "";
        titlePrimary = rawTitle;
        titleSecondary = "";
      }
    }
  }
  titlePrefix = titlePrefix || "Bharat Organic";
  titlePrimary = titlePrimary || "Excellence";
  titleSecondary = titleSecondary || "Awards 2027";

  const rawSubtitle = heroData?.subtitle || "Celebrating Excellence • Innovation • Sustainability";
  const subtitleParts = rawSubtitle.includes("•")
    ? rawSubtitle.split("•").map((s: string) => s.trim()).filter(Boolean)
    : [rawSubtitle.trim()];

  const heroDesc =
    heroData?.description ||
    heroData?.shortDescription ||
    "Honouring the changemakers, organizations and innovations during india's organic, natural and sustainable future.";

  const primaryBtnLabel = heroData?.buttonLabel || "Submit Nomination";
  const primaryBtnHref = heroData?.buttonHref || "#nomination-form";
  const secondaryBtnLabel = heroData?.secondaryButtonLabel || "View Categories";
  const secondaryBtnHref = heroData?.secondaryButtonHref || "/awards";

  let dateLine1 = heroData?.dateLine1;
  let dateLine2 = heroData?.dateLine2;
  if (!dateLine1 && heroData?.date) {
    const m = heroData.date.trim().match(/^(\d{1,2}\s*-\s*\d{1,2})\s+(.+)$/i);
    if (m) {
      dateLine1 = m[1];
      dateLine2 = m[2];
    } else {
      dateLine1 = heroData.date;
      dateLine2 = "";
    }
  }
  dateLine1 = dateLine1 || "19 - 21";
  dateLine2 = dateLine2 !== undefined && dateLine2 !== "" ? dateLine2 : "February 2027";

  let venueLine1 = heroData?.venueLine1;
  let venueLine2 = heroData?.venueLine2;
  if (!venueLine1 && heroData?.location) {
    const rawLoc = heroData.location.trim();
    if (rawLoc.includes(",")) {
      const parts = rawLoc.split(",");
      venueLine1 = parts[0].trim() + (parts[1] ? `, ${parts[1].trim()}` : "");
      venueLine2 = parts.slice(2).join(",").trim() || (parts[1] ? parts[1].trim() : "");
    } else {
      venueLine1 = rawLoc;
      venueLine2 = "";
    }
  }
  venueLine1 = venueLine1 || "Hall 12, Bharat Mandapam";
  venueLine2 = venueLine2 !== undefined && venueLine2 !== "" ? venueLine2 : "PRAGATI MAIDAN, NEW DELHI, INDIA";

  return (
    <div className="w-full overflow-x-hidden bg-[#f7f5ec] font-sans">
      {/* ================= HERO ================= */}
      {heroEnabled && (
        <section className="relative flex h-[68vh] min-h-[400px] w-full items-center overflow-hidden bg-[#f7f5ec] pt-3 font-inter md:h-[72vh] md:pt-5 lg:h-[78vh] border-b-4 border-[#ea580c] pb-4 md:pb-6">
          {/* full-width background image */}
          <div className="absolute inset-0 z-0">
            <img
              src={bgImgSrc}
              alt={heroData?.imageAlt || `${titlePrefix} ${titlePrimary} ${titleSecondary}`}
              className="h-full w-full object-cover"
            />
          </div>
          {/* floating leaf accents */}
          <Leaf className="pointer-events-none absolute -left-4 top-6 h-16 w-16 -rotate-12 text-lime-700/20 animate-[bounce_6s_ease-in-out_infinite]" />
          <Leaf className="pointer-events-none absolute right-10 bottom-4 hidden h-20 w-20 rotate-45 text-lime-300/10 sm:block" />

          <div className="relative z-20 w-full px-4 py-1 md:px-14 md:py-2">
            <div className="max-w-2xl text-left">
              {eyebrow && (
                <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-[#0b3b18]/10 px-3 py-1 text-[11px] font-bold tracking-widest text-[#0b3b18] uppercase">
                  <Award className="h-3.5 w-3.5 text-[#ea580c]" />
                  <span>{eyebrow}</span>
                </div>
              )}

              <h1 className="mb-3 font-poppins text-4xl font-semibold uppercase leading-[1.02] tracking-tight text-[#0b3b18] sm:text-5xl md:text-[56px] lg:text-[66px]" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}>
                {titlePrefix && (
                  <span className="block text-[26px] font-semibold tracking-tight sm:text-[26px] md:text-[26px] lg:text-[36px]">
                    {titlePrefix}
                  </span>
                )}
                {titlePrimary && (
                  <span className="block font-semibold tracking-tight">
                    {titlePrimary}
                  </span>
                )}
                {titleSecondary && (
                  <span className="block font-semibold tracking-tight text-[#ea580c]">
                    {titleSecondary}
                  </span>
                )}
              </h1>

              <p className="mb-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-bold uppercase tracking-wider text-[#0b3b18] sm:text-[13.5px]">
                {subtitleParts.map((item: string, idx: number) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <span className="text-sm text-[#ea580c]">•</span>}
                    <span>{item}</span>
                  </React.Fragment>
                ))}
              </p>
              <p className="text-black max-w-xl font-semibold">
                {heroDesc}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={primaryBtnHref}
                  onClick={(e) => {
                    if (primaryBtnHref.startsWith("#")) {
                      e.preventDefault();
                      const targetId = primaryBtnHref.replace(/^#/, "");
                      const formSection = document.getElementById(targetId) || document.getElementById("nomination-form");
                      if (formSection) formSection.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  className="group inline-flex items-center gap-2 rounded-full bg-[#0b3b18] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-widest text-white shadow-lg ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123d1c] hover:shadow-xl cursor-pointer"
                >
                  <Award className="h-4 w-4 text-[#F2B40E]" />
                  {primaryBtnLabel}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href={secondaryBtnHref}
                  className="group inline-flex items-center gap-2 rounded-full border border-[#0b3b18]/30 bg-white/90 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-widest text-[#0b3b18] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b3b18] hover:text-white hover:shadow-lg"
                >
                  <Medal className="h-4 w-4 text-[#0b2912]" />
                  {secondaryBtnLabel}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              <div className="mt-5 flex flex-col items-start gap-3 text-xs font-bold text-[#4B1426] sm:flex-row sm:items-center sm:gap-4 sm:text-sm md:text-[14px]">
                <div className="flex items-center gap-3">
                  <Calendar className="h-[25px] w-[25px] shrink-0 text-emerald-900" />
                  <div>
                    <p>{dateLine1}</p>
                    {dateLine2 && <p className="uppercase">{dateLine2}</p>}
                  </div>
                </div>
                <span className="hidden h-4 w-px bg-[#4B1426]/30 sm:block" />
                <div className="flex items-center gap-3">
                  <MapPin className="h-[25px] w-[25px] shrink-0 text-emerald-900" />
                  <div>
                    <p>{venueLine1}</p>
                    {venueLine2 && <p className="uppercase">{venueLine2}</p>}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

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
      {(() => {
        const rawSteps = stepsData?.items || stepsData?.steps;
        const activeSteps = Array.isArray(rawSteps) && rawSteps.length > 0
          ? rawSteps.map((it: any, idx: number) => ({
              n: it.num || String(idx + 1).padStart(2, "0"),
              title: it.title || "",
              desc: it.description || it.desc || it.shortDescription || "",
              iconKey: it.icon || "",
              idx,
            }))
          : DEFAULT_PROCESS_STEPS.map((s, idx) => ({ ...s, iconKey: s.icon, idx }));
        const sectionTitle = stepsData?.title || "THE AWARD PROCESS";
        const sectionEnabled = stepsData?.enabled !== false;
        if (!sectionEnabled) return null;
        return (
          <section className="w-full px-4 py-2 md:px-14 md:py-4 my-4">
            <Reveal>
              <div className="mb-6 flex items-center justify-center gap-2 text-emerald-900">
                <Sprout className="h-4 w-4 text-lime-600" />
                <h2 className="text-base font-bold tracking-widest sm:text-lg">
                  {sectionTitle}
                </h2>
                <Sprout className="h-4 w-4 -scale-x-100 text-lime-600" />
              </div>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-6 md:grid-cols-6 sm:gap-x-8">
              {activeSteps.map((s, i) => {
                const Icon = getStepIcon(s.iconKey, s.idx);
                return (
                  <Reveal key={s.n + i} delay={i * 100}>
                    <div className="group relative flex flex-col items-center text-center">
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-lime-600/40 bg-lime-50 transition-all duration-300 group-hover:border-lime-600 group-hover:bg-lime-100 group-hover:shadow-lg group-hover:shadow-lime-600/20 group-hover:-translate-y-1">
                        <Icon className="h-6 w-6 text-emerald-800 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      {i < activeSteps.length - 1 && (
                        <ArrowRight className="absolute left-[calc(100%+1rem)] top-7 hidden h-5 w-5 -translate-y-1/2 text-emerald-800/50 sm:block" />
                      )}
                      <p className="mt-2 text-[11px] font-bold text-amber-600">{s.n}</p>
                      <p className="text-xs font-bold uppercase leading-tight text-emerald-950 sm:text-sm">{s.title}</p>
                      <p className="mt-1 text-xs font-medium leading-relaxed text-emerald-950/70 sm:text-[13px]">{s.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>
        );
      })()}

      {/* ================= FORM + SIDEBAR ================= */}
      <section id="nomination-form" className="w-full px-4 py-2 md:px-14 md:py-4 grid grid-cols-1 gap-4 lg:gap-4 lg:grid-cols-[1fr_320px]">
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
                onChange={(v) => {
                  update("applicantType", v);
                  touch("applicantType");
                }}
                error={errorFor("applicantType")}
              />
              <Field
                label="Full Name / Org Name"
                placeholder="Enter full name or organization name"
                required
                maxLength={150}
                value={form.orgName}
                onChange={(v) => update("orgName", v)}
                onBlur={() => touch("orgName")}
                error={errorFor("orgName")}
              />
              <Field
                label="Contact Person"
                placeholder="Enter contact person name"
                required
                maxLength={100}
                value={form.contactPerson}
                onChange={(v) => update("contactPerson", v)}
                onBlur={() => touch("contactPerson")}
                error={errorFor("contactPerson")}
              />
              <Field
                label="Designation"
                placeholder="Enter designation"
                maxLength={100}
                value={form.designation}
                onChange={(v) => update("designation", v)}
              />
              <Field
                label="Mobile Number"
                placeholder="10-digit mobile number"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                required
                value={form.mobile}
                onChange={(v) => update("mobile", v.replace(/\D/g, "").slice(0, 10))}
                onBlur={() => touch("mobile")}
                error={errorFor("mobile")}
                rightSlot={
                  <OtpButton state={phoneOtp} disabled={!!errors.mobile} onClick={sendPhoneOtp} />
                }
              >
                <OtpEntry state={phoneOtp} onConfirm={confirmPhoneOtp} />
              </Field>
              <Field
                label="Email ID"
                placeholder="Enter email address"
                type="email"
                required
                maxLength={150}
                value={form.email}
                onChange={(v) => update("email", v)}
                onBlur={() => touch("email")}
                error={errorFor("email")}
                rightSlot={
                  <OtpButton state={emailOtp} disabled={!!errors.email} onClick={sendEmailOtp} />
                }
              >
                <OtpEntry state={emailOtp} onConfirm={confirmEmailOtp} />
              </Field>
              <Field
                label="Website (If any)"
                placeholder="www.example.com"
                value={form.website}
                onChange={(v) => update("website", v)}
                onBlur={() => touch("website")}
                error={errorFor("website")}
              />
              <Field
                label="City"
                placeholder="Enter city"
                required
                maxLength={80}
                value={form.city}
                onChange={(v) => update("city", v)}
                onBlur={() => touch("city")}
                error={errorFor("city")}
              />
              <Select
                label="State / Country"
                placeholder="Select state / country"
                required
                options={INDIAN_STATES}
                value={form.stateCountry}
                onChange={(v) => {
                  update("stateCountry", v);
                  touch("stateCountry");
                }}
                error={errorFor("stateCountry")}
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
                    onChange={(v) => {
                      update("awardCategory", v);
                      touch("awardCategory");
                    }}
                    error={errorFor("awardCategory")}
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
                  onBlur={() => touch("briefProfile")}
                  error={errorFor("briefProfile")}
                  hint={`${wordCount(form.briefProfile)} / 150–200 words`}
                />
                <Select
                  label="Years of Experience"
                  placeholder="Select Experience"
                  required
                  options={YEARS_EXPERIENCE}
                  value={form.yearsExperience}
                  onChange={(v) => {
                    update("yearsExperience", v);
                    touch("yearsExperience");
                  }}
                  error={errorFor("yearsExperience")}
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
                  onBlur={() => touch("keyServices")}
                  error={errorFor("keyServices")}
                />
              </div>
            </div>

            {/* 4. Achievements & impact */}
            <div className="mt-6">
              <SectionBadge n={4} title="ACHIEVEMENTS & IMPACT" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <TextArea
                  label="Key Achievements (Max 5 points)"
                  placeholder="One achievement per line: awards, recognitions or milestones."
                  required
                  value={form.keyAchievements}
                  onChange={(v) => update("keyAchievements", v)}
                  onBlur={() => touch("keyAchievements")}
                  error={errorFor("keyAchievements")}
                  hint={`${pointCount(form.keyAchievements)} / 5 points`}
                />
                <TextArea
                  label="Unique Contribution to Healthcare / Wellness"
                  placeholder="What makes you unique and your contribution to the industry?"
                  required
                  value={form.uniqueContribution}
                  onChange={(v) => update("uniqueContribution", v)}
                  onBlur={() => touch("uniqueContribution")}
                  error={errorFor("uniqueContribution")}
                />
                <TextArea
                  label="Impact Created"
                  placeholder="Share the impact created, people served, lives touched, growth metrics, etc."
                  required
                  value={form.impactCreated}
                  onChange={(v) => update("impactCreated", v)}
                  onBlur={() => touch("impactCreated")}
                  error={errorFor("impactCreated")}
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
                  onBlur={() => touch("whyDeserve")}
                  error={errorFor("whyDeserve")}
                  hint={`${wordCount(form.whyDeserve)} / 100 words`}
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
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  file={files.deckFile}
                  onChange={(f) => setFile("deckFile", f)}
                  error={errorFor("deckFile")}
                />
                <UploadRow
                  label="Certifications"
                  subLabel="Certifications / Awards"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  file={files.certFile}
                  onChange={(f) => setFile("certFile", f)}
                  error={errorFor("certFile")}
                />
                <UploadRow
                  label="Images Videos"
                  subLabel="Images / Videos (JPG, PNG, MP4)"
                  accept=".jpg,.jpeg,.png,.webp,.mp4,.mov,.webm"
                  file={files.mediaFile}
                  onChange={(f) => setFile("mediaFile", f)}
                  error={errorFor("mediaFile")}
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
                      onBlur={() => touch("socialLink")}
                      className={`${inputBase} ${borderFor(errorFor("socialLink"))} pl-9`}
                    />
                  </div>
                  <FieldError error={errorFor("socialLink")} />
                </div>
              </div>
            </div>

            {/* 6. Declaration */}
            <div className="mt-6">
              <SectionBadge n={6} title="DECLARATION" />
              <label className="flex items-start gap-2 rounded-md bg-emerald-50/60 p-2.5 text-sm text-black cursor-pointer sm:text-[15px]">
                <input
                  type="checkbox"
                  checked={form.declaration}
                  onChange={(e) => {
                    update("declaration", e.target.checked);
                    touch("declaration");
                  }}
                  className="mt-0.5 h-3.5 w-3.5 accent-emerald-800"
                />
                <span>
                  I hereby declare that the information provided above is true,
                  correct and complete to the best of my knowledge.
                </span>
              </label>
              <FieldError error={errorFor("declaration")} />

              {error && (
                <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-xs font-semibold text-red-600">
                  {error}
                </p>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canSubmit}
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-emerald-950 py-2.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-emerald-900 hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto sm:px-8"
              >
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                {submitting ? "SUBMITTING..." : "SUBMIT NOMINATION"}
              </button>

              {pending.length > 0 && !submitting && (
                <p className="mt-2 text-[12px] leading-relaxed text-amber-700">
                  <strong>To enable submit, complete:</strong> {pending.join(", ")}
                </p>
              )}

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
          <div className="relative z-10 w-full px-4 py-2 md:px-14 md:py-4 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
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