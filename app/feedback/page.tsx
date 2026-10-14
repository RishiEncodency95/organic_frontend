"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/api";
import { emailProblem } from "@/lib/emailCheck";
import { useDropdowns } from "@/lib/dropdowns";
import { Inter, Kaushan_Script } from "next/font/google";
import {
  Handshake,
  UsersRound,
  Mic,
  Camera,
  Star,
  Lock,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  ImageIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Fonts (smooth, no heavy bold)                                      */
/* ------------------------------------------------------------------ */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const script = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

/* ------------------------------------------------------------------ */
/*  Images — change these paths if your assets live somewhere else     */
/* ------------------------------------------------------------------ */
const HERO_IMAGE = "/assets/banner.png";

/* ------------------------------------------------------------------ */
/*  Shared classes                                                     */
/* ------------------------------------------------------------------ */
const inputCls =
  "h-9 w-full rounded-md border border-[#d8dfdb] bg-white px-3 text-[13px] text-[#1f2937] placeholder:text-[#9ca3af] outline-none transition-colors focus:border-[#0b6b3d] focus:ring-1 focus:ring-[#0b6b3d]";
const labelCls = "mb-1 block text-[13px] font-medium leading-4 text-[#1f2937]";
const Req = () => <span className="text-[#ef4444]"> *</span>;
const errorCls = "mt-1 text-[11.5px] leading-4 text-[#dc2626]";
const FieldError = ({ children }: { children?: string }) =>
  children ? <p className={errorCls} role="alert">{children}</p> : null;
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
/** Digits only, 10 at most. A typed or pasted "+91 98765 43210" / "098765 43210" loses its prefix instead of its last digits. */
const tenDigitMobile = (raw: string) => {
  let digits = raw.replace(/\D/g, "");
  if (digits.length > 10 && digits.startsWith("91")) digits = digits.slice(2);
  else if (digits.length > 10 && digits.startsWith("0")) digits = digits.slice(1);
  return digits.slice(0, 10);
};

/* ------------------------------------------------------------------ */
/*  Small SVG helpers                                                  */
/* ------------------------------------------------------------------ */
type IconProps = { className?: string; strokeWidth?: number };

const BoothIcon = ({ className, strokeWidth = 1.5 }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <rect x="3" y="3" width="18" height="10" rx="1" />
    <rect x="8" y="6" width="8" height="4" rx="0.5" />
    <path d="M6 13v8M18 13v8M4 21h4M16 21h4" />
  </svg>
);

const GroupIcon = ({ className, strokeWidth = 1.5 }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <circle cx="12" cy="5" r="2.5" />
    <circle cx="6" cy="11.5" r="2.5" />
    <circle cx="18" cy="11.5" r="2.5" />
    <path d="M2 21a4 4 0 0 1 8 0" />
    <path d="M14 21a4 4 0 0 1 8 0" />
    <path d="M9.5 9.5a3 3 0 0 1 5 0" />
  </svg>
);

const IndiaFlag = () => (
  <svg viewBox="0 0 24 16" className="h-3.5 w-5 rounded-[2px]" aria-hidden>
    <rect width="24" height="5.34" y="0" fill="#ff9933" />
    <rect width="24" height="5.34" y="5.33" fill="#ffffff" />
    <rect width="24" height="5.34" y="10.66" fill="#138808" />
    <circle cx="12" cy="8" r="2.1" fill="none" stroke="#000080" strokeWidth="0.7" />
  </svg>
);

const Leaf = ({
  gid,
  className,
  style,
}: {
  gid: string;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg viewBox="0 0 120 240" className={className} style={style} aria-hidden>
    <defs>
      <linearGradient id={gid} x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stopColor="#14602a" />
        <stop offset="1" stopColor="#62b648" />
      </linearGradient>
    </defs>
    <path
      d="M12 236C-4 150 22 58 104 4c16 88-6 190-92 232Z"
      fill={`url(#${gid})`}
    />
    <path
      d="M12 236C46 150 76 78 104 4"
      stroke="#e3f6d8"
      strokeOpacity=".55"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M38 192l34 8M52 152l40 8M68 112l34 4M82 72l22-8"
      stroke="#e3f6d8"
      strokeOpacity=".35"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Reusable pieces                                                    */
/* ------------------------------------------------------------------ */
const StepHeading = ({
  n,
  children,
  className = "mb-2.5",
}: {
  n: number;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b5d3b] text-[12px] font-semibold text-white">
      {n}
    </span>
    <h3 className="text-[15px] font-semibold leading-5 text-[#111d17]">
      {children}
    </h3>
  </div>
);

const StarRating = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (val: number) => void;
}) => (
  <div className="flex items-center gap-1.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        aria-label={`${star} star`}
        onClick={() => onChange(star)}
        className="group focus:outline-none"
      >
        <Star
          className={`h-4.5 w-4.5 transition-colors ${star <= value
            ? "fill-[#f59e0b] text-[#f59e0b]"
            : "fill-transparent text-[#9ca3af] group-hover:text-[#f59e0b]"
            }`}
          strokeWidth={1.4}
        />
      </button>
    ))}
  </div>
);

const Radio = ({
  checked,
  onChange,
  value,
  children,
}: {
  checked: boolean;
  onChange: (v: string) => void;
  value: string;
  children: React.ReactNode;
}) => (
  <label className="flex cursor-pointer items-center gap-2 text-[13px] text-[#1f2937]">
    <input
      type="radio"
      name="consent"
      value={value}
      checked={checked}
      onChange={() => onChange(value)}
      className="sr-only"
    />
    <span
      className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${checked ? "border-[#0b6b3d] bg-[#0b6b3d]" : "border-[#b8c2bd] bg-white"
        }`}
    >
      {checked && (
        <span className="flex h-2 w-2 items-center justify-center rounded-full bg-white">
          <span className="h-1 w-1 rounded-full bg-[#0b6b3d]" />
        </span>
      )}
    </span>
    {children}
  </label>
);

const UploadBox = ({
  label,
  name,
  file,
  error,
  onChange,
}: {
  label: string;
  name: string;
  file: File | null;
  error?: string;
  onChange: (file: File | null) => void;
}) => (
  <div>
    <span className={labelCls}>{label}</span>
    <label className="flex h-14 cursor-pointer items-center justify-center gap-3 rounded-md border border-[#dde3e0] bg-white px-3 transition-colors hover:bg-[#fafcfb]">
      <input
        type="file"
        name={name}
        accept="image/png,image/jpeg"
        className="sr-only"
        onChange={(e) => {
          onChange(e.target.files?.[0] ?? null);
          // lets the same file be picked again after it was rejected
          e.target.value = "";
        }}
      />
      <ImageIcon
        className="h-5 w-5 shrink-0 text-[#4b5563]"
        strokeWidth={1.25}
      />
      <span className="text-[12px] leading-4 text-[#6b7280]">
        <span className="font-medium text-[#111827]">Click to upload</span> or
        drag and drop
        <span className="block max-w-[200px] truncate text-[11px] text-[#9ca3af]">
          {file?.name || "JPG, PNG (Max 5MB)"}
        </span>
      </span>
    </label>
    <FieldError>{error}</FieldError>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
const roles: { label: string; icon: React.ElementType }[] = [
  { label: "Exhibitor", icon: BoothIcon },
  { label: "Buyer", icon: Handshake },
  { label: "Visitor", icon: UsersRound },
  { label: "Speaker", icon: Mic },
  { label: "Partner /\nAssociation", icon: GroupIcon },
  { label: "Media", icon: Camera },
];

// Admin-managed (Dropdown Manager); this is the fallback edition.
const EDITION_DROPDOWNS = { "expo-edition": [{ label: "Bharat Organic Expo 2027", value: "2027" }] };

export default function FeedbackPage() {
  const editions = useDropdowns(EDITION_DROPDOWNS);
  const [role, setRole] = useState("Exhibitor");
  const [overallRating, setOverallRating] = useState(0);
  const [networkingRating, setNetworkingRating] = useState(0);
  const [qualityRating, setQualityRating] = useState(0);
  const [managementRating, setManagementRating] = useState(0);
  const [consent, setConsent] = useState("yes");
  const router = useRouter();
  const [form, setForm] = useState({ name: "", company: "", designation: "", phone: "", email: "", edition: "2027", valuable: "", improve: "" });
  const [wantsContact, setWantsContact] = useState(false);
  const [photo, setPhoto] = useState<File | null>(null);
  const [logo, setLogo] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const setField = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => (prev[key] ? { ...prev, [key]: "" } : prev));
  };

  const pickImage = (key: "photo" | "logo", file: File | null) => {
    const problem = !file
      ? ""
      : !/^image\/(png|jpeg)$/.test(file.type)
        ? "Only JPG or PNG images are allowed."
        : file.size > MAX_IMAGE_BYTES
          ? "The image must be 5 MB or smaller."
          : "";
    setErrors((prev) => ({ ...prev, [key]: problem }));
    (key === "photo" ? setPhoto : setLogo)(problem ? null : file);
  };

  const validate = () => {
    const next: Record<string, string> = {};
    const name = form.name.trim();
    if (name.length < 2) next.name = "Please enter your name.";
    else if (!/^[\p{L}][\p{L} .'-]*$/u.test(name)) next.name = "Name can have letters only.";
    if (form.company.trim().length < 2) next.company = "Please enter your company / organisation.";
    if (!/^[6-9]\d{9}$/.test(form.phone)) next.phone = "Enter a valid 10-digit mobile number.";
    if (form.email.trim()) {
      const problem = emailProblem(form.email.trim(), "Email");
      if (problem) next.email = problem;
    }
    if (!overallRating) next.overallRating = "Please rate your overall experience.";
    if (form.valuable.trim().length < 10) next.valuable = "Please tell us what was most valuable (at least 10 characters).";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitError("");
    const found = validate();
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      document.getElementById(`feedback-${firstError}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    const body = new FormData();
    body.append("role", role.replace(/\s+/g, " "));
    Object.entries(form).forEach(([key, value]) => body.append(key, value.trim()));
    body.append("overallRating", String(overallRating));
    body.append("networkingRating", String(networkingRating));
    body.append("qualityRating", String(qualityRating));
    body.append("managementRating", String(managementRating));
    body.append("consentToFeature", String(consent === "yes"));
    body.append("wantsContact", String(wantsContact));
    if (photo) body.append("photo", photo);
    if (logo) body.append("logo", logo);

    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/feedback`, { method: "POST", body });
      const json = await res.json().catch(() => null);
      if (!res.ok) {
        setSubmitError(json?.message || "We could not save your feedback. Please try again.");
        return;
      }
      try {
        // The thank-you page shows these on the participation card
        window.sessionStorage.setItem(
          "boe_feedback_participant",
          JSON.stringify({ name: form.name.trim(), designation: form.designation.trim(), company: form.company.trim() })
        );
      } catch {
        // private mode: the card just shows its default text
      }
      router.push("/thank-you");
    } catch {
      setSubmitError("We could not reach the server. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`${inter.className} relative min-h-screen overflow-hidden bg-[#e4efe5] text-[#0f172a] antialiased`}
    >
      {/* ============================ HERO ============================ */}
      <header className="relative h-[360px] md:h-[420px] w-full overflow-hidden bg-[#e4efe5]">
        {/* Full background banner image */}
        <Image
          src={HERO_IMAGE}
          alt="Bharat Organic Expo banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none select-none z-0"
        />

        {/* Bottom smooth gradient fade to blend hero image seamlessly into page background */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#e4efe5] via-[#e4efe5]/70 to-transparent z-0 pointer-events-none" />

        {/* Text block aligned with navbar */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl -translate-x-6 md:-translate-x-12 lg:-translate-x-16 flex-col justify-start pt-16 md:pt-20 px-4 md:px-6">
          <span className="text-[15px] md:text-[17px] font-semibold uppercase leading-5 tracking-[0.08em] text-[#1f2a24]">
            Share Your Experience
          </span>
          <h1 className="mt-2.5 text-[38px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.015em] text-[#0a4f35]">
            Your Experience Helps Us Grow
          </h1>
          <p className="mt-2.5 max-w-[620px] text-[18px] md:text-[20px] leading-[28px] font-medium text-[#1f2937]">
            Help us create better experiences and greater opportunities for the
            organic industry.
          </p>
          <div className="mt-3.5 flex items-center gap-2 text-[14px] md:text-[15px] leading-5 text-[#4b5563] font-medium">
            <Link href="/" className="transition-colors hover:text-[#0a4f35]">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" strokeWidth={2} />
            <span className="font-semibold text-[#1f3d2f]">
              Share Your Experience
            </span>
          </div>
        </div>
      </header>

      {/* ======================= SIDE LEAVES (decor) ======================= */}
      <Leaf
        gid="leafLeft"
        className="pointer-events-none absolute -left-6 top-[250px] hidden h-[140px] w-[70px] rotate-[-18deg] opacity-25 blur-[1px] xl:block"
      />
      <Leaf
        gid="leafRight"
        className="pointer-events-none absolute -right-8 top-[650px] hidden h-[140px] w-[70px] rotate-[24deg] opacity-25 blur-[1px] xl:block"
      />

      {/* ============================ FORM CARD ============================ */}
      <main className="relative z-10 mx-auto -mt-4 w-full max-w-5xl px-4 md:px-6 pb-12">
        <div className="w-full rounded-lg border border-[#d4e4d8] bg-white px-5 pb-6 pt-5 shadow-[0_4px_16px_rgba(16,60,40,0.05)] md:px-7">
          {/* Form header */}
          <h2 className="text-[20px] font-semibold leading-7 tracking-[-0.01em] text-[#111d17]">
            Share Your Feedback
          </h2>
          <p className="mt-0.5 text-[13px] leading-5 text-[#4b5563]">
            Your insights are valuable and help us make Bharat Organic Expo
            better, stronger and more impactful.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            {/* ---------- 1. I participated as ---------- */}
            <section className="mt-4">
              <StepHeading n={1}>
                I participated as <span className="text-[#ef4444]">*</span>
              </StepHeading>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
                {roles.map((r) => {
                  const Icon = r.icon;
                  const active = role === r.label;
                  return (
                    <button
                      key={r.label}
                      type="button"
                      onClick={() => setRole(r.label)}
                      className={`flex h-[76px] flex-col items-center justify-center rounded-md border px-2 text-center transition-colors ${active
                        ? "border-[#7cc39a] bg-[#e9f5ee]"
                        : "border-[#dfe5e2] bg-white hover:border-[#c5cfca]"
                        }`}
                    >
                      <Icon
                        className={`mb-1.5 h-6 w-6 ${active ? "text-[#1f3d2f]" : "text-[#374151]"
                          }`}
                        strokeWidth={1.5}
                      />
                      <span className="whitespace-pre-line text-[11px] font-medium leading-[14px] text-[#1f2937]">
                        {r.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* ---------- 2. About You ---------- */}
            <section className="mt-4">
              <StepHeading n={2}>About You</StepHeading>

              <div className="grid grid-cols-1 gap-x-4 gap-y-3 md:grid-cols-3">
                <div>
                  <label className={labelCls}>
                    Name
                    <Req />
                  </label>
                  <input
                    id="feedback-name"
                    type="text"
                    autoComplete="name"
                    maxLength={120}
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                    placeholder="Enter your full name"
                    className={inputCls}
                  />
                  <FieldError>{errors.name}</FieldError>
                </div>

                <div>
                  <label className={labelCls}>
                    Company / Organisation
                    <Req />
                  </label>
                  <input
                    id="feedback-company"
                    type="text"
                    autoComplete="organization"
                    maxLength={200}
                    value={form.company}
                    onChange={(e) => setField("company", e.target.value)}
                    placeholder="Enter company name"
                    className={inputCls}
                  />
                  <FieldError>{errors.company}</FieldError>
                </div>

                <div>
                  <label className={labelCls}>Designation</label>
                  <input
                    type="text"
                    autoComplete="organization-title"
                    maxLength={120}
                    value={form.designation}
                    onChange={(e) => setField("designation", e.target.value)}
                    placeholder="Enter designation"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls}>
                    Mobile Number
                    <Req />
                  </label>
                  <div className="flex h-9 overflow-hidden rounded-md border border-[#d8dfdb] bg-white transition-colors focus-within:border-[#0b6b3d] focus-within:ring-1 focus-within:ring-[#0b6b3d]">
                    <div className="flex items-center gap-1 border-r border-[#d8dfdb] px-2.5">
                      <IndiaFlag />
                      <span className="text-[12px] font-medium text-[#1f2937]">
                        +91
                      </span>
                      <ChevronDown
                        className="h-3 w-3 text-[#374151]"
                        strokeWidth={2}
                      />
                    </div>
                    <input
                      id="feedback-phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      value={form.phone}
                      onChange={(e) => setField("phone", tenDigitMobile(e.target.value))}
                      placeholder="Enter mobile number"
                      className="w-full min-w-0 px-2.5 text-[12px] text-[#1f2937] outline-none placeholder:text-[#9ca3af]"
                    />
                  </div>
                  <FieldError>{errors.phone}</FieldError>
                </div>

                <div>
                  <label className={labelCls}>Email</label>
                  <input
                    id="feedback-email"
                    type="email"
                    autoComplete="email"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    placeholder="Enter your email"
                    className={inputCls}
                  />
                  <FieldError>{errors.email}</FieldError>
                </div>

                <div>
                  <label className={labelCls}>
                    Which edition did you attend?
                    <Req />
                  </label>
                  <div className="relative">
                    <select
                      value={form.edition}
                      onChange={(e) => setField("edition", e.target.value)}
                      className={`${inputCls} appearance-none pr-8 text-[13px]`}
                    >
                      {editions["expo-edition"].map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#374151]"
                      strokeWidth={1.75}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ---------- 3. Rate Your Experience ---------- */}
            <section className="mt-4">
              <StepHeading n={3} className="mb-2">
                Rate Your Experience
              </StepHeading>

              <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 md:grid-cols-4">
                <div id="feedback-overallRating">
                  <span className={`${labelCls} !mb-1.5`}>
                    Overall Experience
                    <Req />
                  </span>
                  <StarRating
                    value={overallRating}
                    onChange={(val) => {
                      setOverallRating(val);
                      setErrors((prev) => (prev.overallRating ? { ...prev, overallRating: "" } : prev));
                    }}
                  />
                  <FieldError>{errors.overallRating}</FieldError>
                </div>
                <div>
                  <span className={`${labelCls} !mb-1.5`}>
                    Business Networking
                  </span>
                  <StarRating
                    value={networkingRating}
                    onChange={setNetworkingRating}
                  />
                </div>
                <div>
                  <span className={`${labelCls} !mb-1.5`}>
                    Quality of Participants
                  </span>
                  <StarRating
                    value={qualityRating}
                    onChange={setQualityRating}
                  />
                </div>
                <div>
                  <span className={`${labelCls} !mb-1.5`}>Event Management</span>
                  <StarRating
                    value={managementRating}
                    onChange={setManagementRating}
                  />
                </div>
              </div>
            </section>

            {/* ---------- 4. Tell Us About Your Experience ---------- */}
            <section className="mt-4">
              <StepHeading n={4}>Tell Us About Your Experience</StepHeading>

              <div className="grid grid-cols-1 gap-x-5 gap-y-3 md:grid-cols-2">
                <div>
                  <label className={labelCls}>
                    What was the most valuable part of your experience?
                    <Req />
                  </label>
                  <textarea
                    id="feedback-valuable"
                    maxLength={2000}
                    value={form.valuable}
                    onChange={(e) => setField("valuable", e.target.value)}
                    placeholder="Share what you liked the most..."
                    className="h-[72px] w-full resize-none rounded-md border border-[#d8dfdb] bg-white px-3 py-2 text-[12px] text-[#1f2937] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#0b6b3d] focus:ring-1 focus:ring-[#0b6b3d]"
                  />
                  <FieldError>{errors.valuable}</FieldError>
                </div>
                <div>
                  <label className={labelCls}>
                    What can we do better next time?
                  </label>
                  <textarea
                    maxLength={2000}
                    value={form.improve}
                    onChange={(e) => setField("improve", e.target.value)}
                    placeholder="Your suggestions help us improve..."
                    className="h-[72px] w-full resize-none rounded-md border border-[#d8dfdb] bg-white px-3 py-2 text-[12px] text-[#1f2937] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#0b6b3d] focus:ring-1 focus:ring-[#0b6b3d]"
                  />
                </div>
              </div>
            </section>

            {/* ---------- 5. Testimonial & Media Consent ---------- */}
            <section className="mt-4">
              <StepHeading n={5}>Testimonial &amp; Media Consent</StepHeading>

              <p className="text-[13px] leading-5 text-[#374151]">
                May we feature your experience on Bharat Organic Expo’s website
                and promotional channels?
              </p>

              <div className="mt-2.5 flex flex-wrap items-center gap-x-10 gap-y-2">
                <Radio
                  value="yes"
                  checked={consent === "yes"}
                  onChange={setConsent}
                >
                  Yes, you may feature my experience
                </Radio>
                <Radio
                  value="no"
                  checked={consent === "no"}
                  onChange={setConsent}
                >
                  No, keep my feedback private
                </Radio>
              </div>

              <div className="mt-3.5 grid grid-cols-1 gap-x-5 gap-y-3 md:grid-cols-2">
                <UploadBox label="Upload Your Photo (optional)" name="photo" file={photo} error={errors.photo} onChange={(f) => pickImage("photo", f)} />
                <UploadBox label="Company Logo (optional)" name="logo" file={logo} error={errors.logo} onChange={(f) => pickImage("logo", f)} />
              </div>

              <label className="mt-3 flex cursor-pointer items-center gap-2 text-[12px] text-[#1f2937]">
                <input
                  type="checkbox"
                  checked={wantsContact}
                  onChange={(e) => setWantsContact(e.target.checked)}
                  className="h-4 w-4 cursor-pointer rounded accent-[#0b6b3d]"
                />
                <span>
                  I would like the Bharat Organic Expo team to contact me.
                </span>
              </label>
            </section>

            {submitError && (
              <p className="mt-4 rounded-md border border-[#fecaca] bg-[#fef2f2] px-3 py-2 text-[13px] text-[#b91c1c]" role="alert">
                {submitError}
              </p>
            )}

            {/* ---------- Submit bar ---------- */}
            <div className="mt-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={submitting}
                className="flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#0b5d3b] px-6 text-[13px] font-medium text-white transition-colors hover:bg-[#094d31] disabled:cursor-not-allowed disabled:opacity-70 sm:w-[220px]"
              >
                {submitting ? "Submitting…" : "Submit Feedback"}
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
              </button>

              <div className="flex items-center gap-1.5 text-[12px] text-[#6b7280]">
                <Lock
                  className="h-4 w-4 shrink-0 text-[#1a7f4b]"
                  strokeWidth={1.5}
                />
                <span>
                  Your information is secure and will never be shared without
                  your permission.
                </span>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}