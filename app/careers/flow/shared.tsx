"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Check, ChevronRight, Home, Leaf, Loader2, type LucideIcon } from "lucide-react";
import { EdgeLeaves } from "../ApplyJobView";
import { inspectPhoto, saveCandidatePhoto, type CandidateProfileData } from "../submit-resume/SubmitResume";

/*
 * Pieces shared by the last three careers steps: Review Your Details, Complete Your
 * Application and Application Submitted.
 */

export const INK = "#13261b";
export const GREEN = "#1d6b3a";
export const SERIF: React.CSSProperties = { fontFamily: "var(--font-playfair-next), Georgia, serif" };
export const card = "rounded-[12px] border border-[#e8ece2] bg-[#fffefa] shadow-[0_4px_16px_rgba(40,60,30,0.06)]";
export const greenButton =
  "flex items-center justify-center gap-[10px] rounded-[6px] bg-[#0f4d2a] font-medium text-white shadow-[0_6px_14px_rgba(15,77,42,0.25)] transition hover:bg-[#0b3d21] disabled:cursor-not-allowed disabled:bg-[#b6c4bc] disabled:shadow-none";
export const outlineButton =
  "flex items-center justify-center gap-[10px] rounded-[6px] border-[1.5px] border-[#0f4d2a] bg-[#fffefa] font-medium text-[#0f4d2a] transition hover:bg-[#f1f7ef]";

/* ---------------- page frame ---------------- */

export function FlowPage({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative isolate overflow-hidden bg-[#fbf8f0]">
      <EdgeLeaves className="-inset-x-[28px] inset-y-0 -z-10" />
      {children}
    </main>
  );
}

/** Breadcrumb, title and the art on the right (from the design) */
export function FlowHero({
  crumb,
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  imageClass = "h-[160px] w-[56%]",
}: {
  crumb: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  /** size of the art on the right */
  imageClass?: string;
}) {
  return (
    <section className="relative isolate">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={imageAlt}
        className={`absolute right-0 top-0 -z-10 hidden object-cover object-right [mask-image:linear-gradient(90deg,transparent,#000_16%)] md:block ${imageClass}`}
      />
      {/* pb keeps the steps below clear of the art on the right */}
      <div className="mx-auto max-w-[1360px] px-4 pt-[26px] sm:px-8 lg:pb-[4px] lg:pt-[56px]">
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
          <span>Apply for Position</span>
          <ChevronRight className="h-[14px] w-[14px] text-[#7c8a80]" />
          <span className="font-medium text-[#1d7a3e]">{crumb}</span>
        </nav>
        {eyebrow && <p className="mt-[8px] text-[13px] font-medium uppercase tracking-[0.06em] text-[#5b6b2f]">{eyebrow}</p>}
        <h1 className={`${eyebrow ? "mt-[2px]" : "mt-[6px]"} text-[28px] font-semibold leading-[1.1] sm:text-[34px] lg:text-[38px]`} style={{ ...SERIF, color: INK }}>
          {title}
          <Leaf className="ml-[10px] inline-block h-[0.75em] w-[0.75em] -translate-y-[0.08em] -rotate-[25deg] text-[#4c9a2a]" fill="#5aa832" strokeWidth={1.2} aria-hidden="true" />
        </h1>
        <p className="mt-[3px] max-w-[640px] text-[14px] text-[#26352c] sm:text-[15.5px]">{subtitle}</p>
      </div>
    </section>
  );
}

const STEP_LABELS = ["Upload CV", "AI Analysis", "Review Details", "Submit Application"];

/** `current`: 0-based step in progress; 4 = everything done */
export function FlowSteps({ current }: { current: number }) {
  return (
    <ol className="grid grid-cols-4 gap-1">
      {STEP_LABELS.map((label, idx) => {
        const done = idx < current;
        const active = idx === current;
        // The design keeps "Upload CV" as a number and ticks the steps after it
        const showTick = done && idx > 0 && idx < 3;
        return (
          <li key={label} className="relative flex flex-col items-center text-center">
            {idx < STEP_LABELS.length - 1 && (
              <span className={`absolute left-1/2 top-[14px] h-[2px] w-full ${idx < current ? "bg-[#1d7a3e]" : "bg-[#cfd8cc]"}`} />
            )}
            <span
              className={`relative grid h-[28px] w-[28px] place-items-center rounded-full border-2 text-[13px] font-semibold ${
                done || active ? "border-[#1d7a3e] bg-[#1d7a3e] text-white" : "border-[#b9c4b6] bg-white text-[#3d4a40]"
              }`}
            >
              {showTick ? <Check className="h-[15px] w-[15px]" strokeWidth={3} /> : idx + 1}
            </span>
            <span className={`mt-[3px] text-[12px] font-medium leading-tight sm:text-[13.5px] ${active || done ? "text-[#1b4d2e]" : "text-[#26352c]"}`}>{label}</span>
            <span className={`text-[11px] leading-tight sm:text-[12px] ${active || done ? "text-[#1d7a3e]" : "text-[#7c8a80]"}`}>
              {done ? "Completed" : active ? "Current Step" : "Next"}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

export function CardTitle({ Icon, title, extra, action }: { Icon: LucideIcon; title: string; extra?: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-[10px]">
        <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full bg-[#1d5a37] text-white">
          <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
        </span>
        <h2 className="text-[18px] font-semibold leading-tight" style={{ ...SERIF, color: INK }}>
          {title}
          {extra && <span className="ml-1 text-[14px] font-normal text-[#3d4a40]">{extra}</span>}
        </h2>
      </div>
      {action}
    </div>
  );
}

export function EditButton({ onClick, label = "Edit", title }: { onClick?: () => void; label?: string; title?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className="flex items-center gap-[5px] rounded-[6px] border border-[#dfe6da] bg-white px-[9px] py-[4px] text-[13px] font-medium text-[#1d5a37] shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:bg-[#f1f7ef]"
    >
      <svg viewBox="0 0 24 24" className="h-[13px] w-[13px]" fill="currentColor" aria-hidden="true">
        <path d="M3 17.25V21h3.75l11-11.03-3.75-3.75L3 17.25Zm17.7-10.2a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z" />
      </svg>
      {label}
    </button>
  );
}

/** Score ring + level, used on all three pages */
export function ProfileMatch({ score, summary, link }: { score: number; summary?: string; link?: React.ReactNode }) {
  const strong = score >= 70;
  const color = strong ? "#2f8f3a" : score >= 50 ? "#f08a1c" : "#dd2a24";
  const ring = Math.min(100, Math.max(0, score)) * 3.6;
  const text =
    summary ||
    (strong
      ? "Your profile matches well with the job requirements. Based on skills, experience and qualifications derived from your CV."
      : "Your profile matches several key requirements, but a few important areas need strengthening.");
  return (
    <div className={`${card} flex items-center gap-4 px-4 py-[8px]`}>
      <div className="relative grid h-[96px] w-[96px] shrink-0 place-items-center rounded-full" style={{ background: `conic-gradient(${color} 0deg ${ring}deg, #dfe3dc ${ring}deg 360deg)` }}>
        <div className="absolute inset-[10px] rounded-full bg-[#fffefa]" />
        <span className="relative text-[28px] font-semibold" style={{ color: strong ? INK : color }}>
          {score}%
        </span>
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-[8px]">
          <h3 className="text-[17px] font-semibold" style={{ ...SERIF, color: INK }}>
            Profile Match
          </h3>
          <span className="flex items-center gap-[5px] rounded-[6px] border border-[#f1e2c4] bg-[#fffaf0] px-[8px] py-[2px] text-[12.5px] font-medium" style={{ color: strong ? GREEN : "#d9730d" }}>
            <span style={{ color: "#f2a21c" }}>★</span>
            {strong ? "Strong Match" : score >= 50 ? "Moderate Match" : "Low Match"}
          </span>
        </div>
        <p className="mt-[4px] line-clamp-3 text-[12.5px] leading-[1.4] text-[#3d4a40]">{text}</p>
        {link}
      </div>
    </div>
  );
}

/* ---------------- candidate data helpers ---------------- */

type Profile = {
  education?: string[];
  experience?: string[];
  skills?: string[];
  achievements?: string[];
  languages?: string[];
  location?: string;
  gender?: string;
  currentCompany?: string;
  currentDesignation?: string;
  totalExperience?: string;
  currentCTC?: string;
  expectedCTC?: string;
  noticePeriod?: string;
};

/** The CV profile; company / designation fall back to the running (or latest) job in the work history */
export const profileOf = (c: CandidateProfileData): Profile => {
  const p = (c.fullProfile || {}) as Profile;
  if (p.currentCompany && p.currentDesignation) return p;
  const lines = Array.isArray(p.experience) ? p.experience.filter((x): x is string => typeof x === "string") : [];
  const line = lines.find((l) => /present|current|till date|ongoing/i.test(l)) || lines[0];
  if (!line) return p;
  const job = parseExperience(line);
  return { ...p, currentCompany: p.currentCompany || job.organization || undefined, currentDesignation: p.currentDesignation || job.designation || undefined };
};
export const strList = (v: unknown): string[] => (Array.isArray(v) ? v.filter((x): x is string => typeof x === "string" && x.trim().length > 0).map((x) => x.trim()) : []);
export const firstNameOf = (c: CandidateProfileData) => (c.firstName && c.firstName !== "Candidate" ? c.firstName : (c.candidateName || "Candidate").split(" ")[0]);
export const capitalise = (s?: string | null) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : "");

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
const RANGE =
  /((?:(?:jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)[a-z]*\.?\s*)?(?:19|20)\d{2})\s*(?:-|–|—|to)\s*((?:(?:jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec)[a-z]*\.?\s*)?(?:19|20)\d{2}|present|current|now|till date|ongoing)/i;

const toMonths = (part: string) => {
  const p = part.toLowerCase();
  if (/present|current|now|till|ongoing/.test(p)) {
    const d = new Date();
    return d.getFullYear() * 12 + d.getMonth();
  }
  const year = parseInt(p.match(/(19|20)\d{2}/)?.[0] || "0", 10);
  const m = MONTHS.findIndex((x) => p.startsWith(x));
  return year * 12 + (m >= 0 ? m : 0);
};

/** "Mar 2022 – Present" → "2022 – Present (2.6 Years)" */
function describeRange(range: RegExpMatchArray): string {
  const months = toMonths(range[2]) - toMonths(range[1]);
  const startYear = range[1].match(/(19|20)\d{2}/)?.[0];
  const end = /present|current|now|till|ongoing/i.test(range[2]) ? "Present" : range[2].match(/(19|20)\d{2}/)?.[0];
  const years = months > 0 ? Math.round((months / 12) * 10) / 10 : 0;
  return `${startYear} – ${end}${years ? ` (${years} Year${years === 1 ? "" : "s"})` : ""}`;
}

const DEGREE =
  /\b(b\.?\s?tech|b\.?\s?e\b|bca|mca|b\.?\s?sc|m\.?\s?sc|b\.?\s?com|m\.?\s?com|bba|mba|pgdm|b\.?\s?a\b|m\.?\s?a\b|m\.?\s?tech|ph\.?\s?d|bams|bhms|mbbs|md\b|diploma|12th|10th|class\s+(?:x|xii|10|12)|higher secondary|bachelor(?:'s)?(?: of [a-z ]+)?|master(?:'s)?(?: of [a-z ]+)?|certificat\w*)/i;

export type EducationRow = { qualification: string; institute: string; year: string; percentage: string; specialization: string };

/** Splits a CV education line into the columns of the Education table */
export function parseEducation(line: string): EducationRow {
  const range = line.match(RANGE);
  const years = line.match(/(19|20)\d{2}/g) || [];
  const year = range ? (/present|current|ongoing/i.test(range[2]) ? "Pursuing" : (range[2].match(/(19|20)\d{2}/)?.[0] ?? "")) : years[years.length - 1] || "";
  const pct = line.match(/(\d{1,3}(?:\.\d+)?)\s*%/)?.[0] || (line.match(/(?:cgpa|gpa)\s*[:\-]?\s*(\d+(?:\.\d+)?)/i) ? `${line.match(/(?:cgpa|gpa)\s*[:\-]?\s*(\d+(?:\.\d+)?)/i)![1]} CGPA` : "");
  const rest = line
    .replace(RANGE, "")
    .replace(/(\d{1,3}(?:\.\d+)?)\s*%/, "")
    .replace(/(?:cgpa|gpa)\s*[:\-]?\s*\d+(?:\.\d+)?/i, "")
    .replace(/\b(19|20)\d{2}\b/g, "");
  const parts = rest
    .split(/\s[—–|-]\s|,|\|/)
    .map((p) => p.replace(/[()]/g, (m) => m).trim())
    .filter((p) => p && !/^[\s.,–—-]+$/.test(p));
  const qIdx = Math.max(0, parts.findIndex((p) => DEGREE.test(p)));
  const qPart = parts[qIdx] || line;
  const spec = qPart.match(/\(([^)]+)\)/)?.[1] || qPart.match(/\bin\s+(.+)$/i)?.[1] || "";
  const qualification = qPart.replace(/\(([^)]+)\)/, "").replace(/\bin\s+.+$/i, "").trim() || qPart;
  const institute = parts.filter((_, i) => i !== qIdx).find((p) => /universit|college|institut|school|academy|iit|nit|aktu|board|cbse|icse/i.test(p)) || parts.filter((_, i) => i !== qIdx)[0] || "";
  return { qualification, institute: institute.replace(/[()]/g, "").trim(), year, percentage: pct, specialization: spec.trim() };
}

export type ExperienceRow = { organization: string; designation: string; duration: string; responsibilities: string };

/** A short name like "Encodency Pvt. Ltd." or "Infosys BPM" rather than a sentence of duties */
const isCompanyName = (text: string) =>
  text.length <= 60 &&
  !/[.;]\s+\S/.test(text.replace(/\b(pvt|ltd|inc|co|llp|corp)\./gi, "$1")) &&
  (/\b(pvt|private|ltd|limited|inc|llp|llc|corp|corporation|company|co\.|solutions|technologies|tech|services|systems|labs|group|industries|enterprises|consultancy|infotech|software|bpm|hospital|clinic|university|bank)\b/i.test(text) ||
    text.split(/\s+/).length <= 4);

/** Splits a CV work line ("Designation — Company | Mar 2022 – Present | what they did") into table columns */
export function parseExperience(line: string): ExperienceRow {
  const range = line.match(RANGE);
  const duration = range ? describeRange(range) : "";
  let head = line;
  let detail = "";
  if (line.includes(" | ")) {
    const parts = line.split(" | ");
    head = parts[0];
    detail = parts.filter((p) => !RANGE.test(p)).slice(1).join(" ");
  } else {
    const colon = line.indexOf(":");
    if (colon > 0) {
      head = line.slice(0, colon);
      detail = line.slice(colon + 1);
    }
  }
  head = head.replace(RANGE, "").replace(/[()]/g, " ").replace(/\s+/g, " ").replace(/[,–—-]\s*$/, "").trim();
  const split = head.split(/\s+at\s+|\s[—–]\s|\s-\s|,\s*/i).map((x) => x.trim()).filter(Boolean);
  const designation = split[0] || head;
  let organization = split[1] || "";
  let responsibilities = detail.trim();
  // "Designation | Mar 2025 – Present | Encodency Pvt. Ltd." — the part after the dates is the company
  if (!organization && responsibilities && isCompanyName(responsibilities)) {
    organization = responsibilities;
    responsibilities = "";
  }
  return { organization, designation, duration, responsibilities };
}

/** Education rows without certificate / licence lines */
export function educationOf(c: CandidateProfileData): EducationRow[] {
  return strList(profileOf(c).education)
    .filter((l) => !/certif|licen/i.test(l))
    .map(parseEducation)
    .slice(0, 5);
}

export const experienceOf = (c: CandidateProfileData): ExperienceRow[] => strList(profileOf(c).experience).map(parseExperience).slice(0, 4);

/* ---------------- photo ---------------- */

/** A small JPEG copy (max 600px): light enough for the AI check and for the browser's storage */
async function shrinkPhoto(file: File): Promise<string> {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new window.Image();
      el.onload = () => resolve(el);
      el.onerror = () => reject(new Error("read"));
      el.src = url;
    });
    const scale = Math.min(1, 600 / Math.max(img.naturalWidth, img.naturalHeight));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(img.naturalWidth * scale);
    canvas.height = Math.round(img.naturalHeight * scale);
    canvas.getContext("2d")?.drawImage(img, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.85);
  } finally {
    URL.revokeObjectURL(url);
  }
}

/**
 * Picks, checks (size, blur, AI face check) and stores the candidate's photo.
 * Returns the hidden file input to render and a function that opens it.
 */
export function usePhotoUpload(candidate: CandidateProfileData, onPhoto: (url: string) => void) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const pick = async (file?: File | null) => {
    if (!file) return;
    setError("");
    setBusy(true);
    try {
      const local = await inspectPhoto(file);
      if ("error" in local) {
        setError(local.error);
        return;
      }
      const dataUrl = await shrinkPhoto(file);
      const res = await fetch("/api/verify-image", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ imageBase64: dataUrl }) });
      const json = await res.json().catch(() => null);
      if (!json?.success) {
        setError(json?.reason || "Please upload a clear, upright photo of your own face.");
        return;
      }
      // Hosted copy when the candidate record exists; otherwise the photo itself travels with the form
      const hosted = await saveCandidatePhoto(candidate.candidateId, file);
      onPhoto(hosted || dataUrl);
    } catch {
      setError("We couldn't check this photo right now. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  const input = (
    <input
      ref={inputRef}
      type="file"
      accept="image/jpeg,image/png,image/webp"
      className="hidden"
      onChange={(e) => {
        void pick(e.target.files?.[0]);
        e.target.value = "";
      }}
    />
  );
  return { input, open: () => !busy && inputRef.current?.click(), busy, error };
}

export function PhotoBox({ src, name, busy, className = "" }: { src?: string | null; name: string; busy?: boolean; className?: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className={`relative overflow-hidden rounded-[8px] bg-[#e4efe8] ${className}`}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} className="h-full w-full object-cover object-top" />
      ) : (
        <div className="grid h-full w-full place-items-center text-[30px] font-semibold text-[#1d5a37]">{initials || "CV"}</div>
      )}
      {busy && (
        <div className="absolute inset-0 grid place-items-center bg-black/45 text-white">
          <Loader2 className="h-[22px] w-[22px] animate-spin" />
        </div>
      )}
    </div>
  );
}

/* ---------------- submit ---------------- */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

/** Creates the application (if needed) and submits it. Throws with a message to show. */
export async function submitApplication(c: CandidateProfileData, answers: Record<string, unknown>, whyInterested: string): Promise<{ applicationId: string; submittedAt: string }> {
  if (!c.candidateId) throw new Error("We couldn't find your candidate profile. Please upload your CV again.");

  const createRes = await fetch(`${API_BASE}/careers/applications`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ candidateId: c.candidateId, jobId: c.jobId, cvAnalysisId: c.analysisId, whyInterested }),
  });
  const createJson = await createRes.json().catch(() => null);
  if (!createRes.ok || !createJson?.success) throw new Error(createJson?.message || "Could not start your application. Please try again.");
  const appId = createJson.data.applicationId || createJson.data._id;

  const p = profileOf(c);
  const submitRes = await fetch(`${API_BASE}/careers/applications/${appId}/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      candidateData: {
        name: c.candidateName,
        email: c.email,
        phone: c.phone,
        verifiedPhone: c.verifiedPhone,
        phones: c.phones,
        location: c.location || p.location,
        currentCompany: p.currentCompany,
        currentDesignation: p.currentDesignation,
        totalExperience: p.totalExperience,
        noticePeriod: answers.noticePeriod,
        expectedCTC: answers.expectedCTC,
        photo: typeof c.image === "string" && !c.image.startsWith("blob:") ? c.image : undefined,
      },
      whyInterested,
      applicationDetails: answers,
    }),
  });
  const submitJson = await submitRes.json().catch(() => null);
  // A failure must never look like a success: the candidate would think they applied
  if (!submitRes.ok || !submitJson?.success) throw new Error(submitJson?.message || "Something went wrong while submitting your application. Please try again.");
  return { applicationId: submitJson.data.applicationId, submittedAt: submitJson.data.submittedAt || new Date().toISOString() };
}
