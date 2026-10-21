"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  ChartNoAxesColumnIncreasing,
  ChevronRight,
  CircleCheck,
  CloudUpload,
  Home,
  LockKeyhole,
  MapPin,
  Sparkles,
} from "lucide-react";
import leafA from "@/app/assets/icons/bleaf.png";
import leafB from "@/app/assets/icons/cleaf.png";
import leafC from "@/app/assets/icons/dleaf.png";
import AnalysisInProgress from "./AnalysisInProgress";
import {
  ALLOWED_CV_ACCEPT,
  analyzeCv,
  describeJob,
  formatBytes,
  formatRetryAt,
  UploadLimitError,
  validateCvFile,
  type ApplyJob,
  type CandidateAnalysisData,
} from "@/app/components/careers/uploade_cv/cvAnalysis";

// The chatbot's animated robot (browser only)
const DotLottieReact = dynamic(() => import("@/lib/dotLottie").then((m) => m.DotLottieReact), { ssr: false });

// Headings use Playfair; set inline because the global h1–h6 font rule outranks utility classes
const SERIF: React.CSSProperties = { fontFamily: "var(--font-playfair-next), Georgia, serif" };
const GOLD = "#C98A22";


function LeafMark({ className = "h-[24px] w-[24px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="apply-leaf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9BD53B" />
          <stop offset="50%" stopColor="#5fae24" />
          <stop offset="100%" stopColor="#2f7a17" />
        </linearGradient>
      </defs>
      <path d="M22 23 C24 25 26 27 28 29" stroke="#3f7d17" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M5 5 C 3 17, 13 26, 23 23 C 26 13, 17 3, 5 5 Z" fill="url(#apply-leaf)" />
      <path d="M6 6 C 11 13, 17 19, 23 23" stroke="#E2F5B8" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
    </svg>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-[9px] text-[18px] font-semibold text-[#123a24] sm:text-[19px]" style={SERIF}>
      <LeafMark className="h-[22px] w-[22px] shrink-0" />
      {children}
    </h2>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-[5px] space-y-[3px]">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-[10px] text-[13.5px] leading-[1.35] text-[#2e3b33]">
          <CircleCheck className="mt-[2px] h-[18px] w-[18px] shrink-0 text-white" fill="#1d7a3e" strokeWidth={2.4} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function UploadBox({ onFile, disabled }: { onFile: (file: File | null) => void; disabled?: boolean }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [picked, setPicked] = useState<{ name: string; size: string } | null>(null);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  // One gate for the file picker and drag & drop — `accept` alone does not reject anything
  const acceptFiles = (files: FileList | null) => {
    const file = files?.[0];
    if (!file) return;
    const problem = validateCvFile(file);
    if (problem) {
      setError(problem);
      setPicked(null);
      onFile(null);
      return;
    }
    setError("");
    setPicked({ name: file.name, size: formatBytes(file.size) });
    onFile(file);
  };

  return (
    <div
      onDragOver={(event) => {
        event.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(event) => {
        event.preventDefault();
        setIsDragging(false);
        if (!disabled) acceptFiles(event.dataTransfer.files);
      }}
      className={`rounded-[12px] border border-dashed px-4 py-[8px] text-center transition-colors ${
        error ? "border-[#e0a49c] bg-[#fdf5f4]" : isDragging ? "border-[#1d7a3e] bg-[#e8f6ed]" : "border-[#b9cdbd] bg-white/70"
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        accept={ALLOWED_CV_ACCEPT}
        className="hidden"
        onChange={(event) => {
          acceptFiles(event.target.files);
          // Let the same file be picked again after a rejection
          event.target.value = "";
        }}
      />
      <CloudUpload className={`mx-auto h-[26px] w-[26px] ${error ? "text-[#c0705f]" : "text-[#1d7a3e]"}`} strokeWidth={1.9} />
      <h3 className="mt-[2px] text-[16px] font-semibold text-[#14281b]">Upload Your CV</h3>
      <div className="mt-[1px] flex min-h-[36px] items-center justify-center">
        {error ? (
          <p className="text-[13.5px] font-medium leading-[1.35] text-[#b23b2e]">{error}</p>
        ) : picked ? (
          <p className="w-full text-[13.5px] font-medium leading-[1.35] text-[#1d7a3e]">
            <span className="mx-auto block max-w-[280px] truncate font-semibold">{picked.name}</span>
            {picked.size} · Ready to analyze
          </p>
        ) : (
          <p className="text-[13.5px] leading-[1.45] text-[#4b5a50]">
            Drag &amp; drop your file here or click to browse
            <br />
            PDF, DOC or DOCX (Max 5 MB)
          </p>
        )}
      </div>
      <button
        type="button"
        disabled={disabled}
        onClick={() => inputRef.current?.click()}
        className="mt-[4px] h-[34px] w-full max-w-[200px] rounded-[6px] bg-[#0f5a30] text-[15px] font-semibold text-white shadow-[0_4px_10px_rgba(15,90,48,0.25)] transition hover:bg-[#0c4b27] disabled:opacity-60"
      >
        {picked ? "Change File" : "Choose File"}
      </button>
    </div>
  );
}


/** Watercolour leaves down both edges of the page (large screens) */
/** `className` places the layer (default: over the whole page, `inset-0`) */
export function EdgeLeaves({ className = "inset-0" }: { className?: string }) {
  const leaves = [
    { src: leafC.src, className: "-left-[34px] top-[380px] w-[110px] -scale-x-100 rotate-[8deg]" },
    { src: leafA.src, className: "-left-[44px] top-[640px] w-[130px] -rotate-[18deg]" },
    { src: leafB.src, className: "-left-[26px] bottom-[30px] w-[96px] rotate-[14deg]" },
    { src: leafC.src, className: "-right-[32px] top-[360px] w-[110px] -rotate-[6deg]" },
    { src: leafA.src, className: "-right-[46px] top-[640px] w-[130px] -scale-x-100 rotate-[14deg]" },
    { src: leafB.src, className: "-right-[24px] bottom-[30px] w-[96px] -scale-x-100 -rotate-[10deg]" },
  ];
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute hidden overflow-hidden xl:block ${className}`}>
      {leaves.map((leaf, idx) => (
        // Plain <img>: small decorative files, and next/image did not start loading them in this clipped layer
        // eslint-disable-next-line @next/next/no-img-element
        <img key={idx} src={leaf.src} alt="" className={`absolute h-auto opacity-90 ${leaf.className}`} />
      ))}
    </div>
  );
}

/**
 * Careers → Apply for a position: the job on the left, "Check Your Eligibility with AI" on the
 * right. Analyzing the CV hands the result to the next step (onAnalyzed).
 */
const MIN_ANALYSIS_MS = 5000;

export default function ApplyJobView({
  job,
  onAnalyzed,
}: {
  job: ApplyJob;
  onAnalyzed: (data: CandidateAnalysisData) => void;
}) {
  const info = describeJob(job);
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  // Set when this IP reached the resume upload limit; the upload stays closed until then
  const [uploadLimit, setUploadLimit] = useState<{ message: string; retryAt?: string } | null>(null);
  const [analysisError, setAnalysisError] = useState("");

  const runAnalysis = async () => {
    if (!file || isAnalyzing || uploadLimit) return;
    setIsAnalyzing(true);
    setAnalysisError("");
    try {
      // Keep the progress screen up for a few seconds even when the result comes back instantly
      const [data] = await Promise.all([analyzeCv(job, file), new Promise((resolve) => setTimeout(resolve, MIN_ANALYSIS_MS))]);
      // Stay on the progress screen while the next step's page loads (no flash of this page)
      onAnalyzed(data);
    } catch (error) {
      if (error instanceof UploadLimitError) setUploadLimit({ message: error.message, retryAt: error.retryAt });
      else setAnalysisError(error instanceof Error && error.message ? error.message : "Your CV could not be analyzed right now. Please try again.");
      setIsAnalyzing(false);
    }
  };

  if (isAnalyzing && file) {
    const extension = file.name.split(".").pop()?.toUpperCase() || "CV";
    return <AnalysisInProgress job={info} file={{ name: file.name, size: formatBytes(file.size), type: extension }} />;
  }

  const meta = [
    { Icon: MapPin, text: info.location },
    { Icon: BriefcaseBusiness, text: info.type },
    { Icon: ChartNoAxesColumnIncreasing, text: info.experience },
  ];
  const ring = info.threshold * 3.6;

  return (
    <main className="relative isolate overflow-hidden bg-[#faf7ee]">
      <EdgeLeaves />

      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden">
        {/* Expo photo on the right (from the design), fading into the cream page on the left */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/careers/apply-hero.jpg"
          alt=""
          className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover object-[65%_center] md:w-[64%]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(250,247,238,0.97)_0%,rgba(250,247,238,0.92)_40%,rgba(250,247,238,0.35)_52%,rgba(250,247,238,0)_64%)] max-md:bg-[linear-gradient(90deg,rgba(250,247,238,0.95),rgba(250,247,238,0.82))]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[70px] bg-[linear-gradient(180deg,rgba(250,247,238,0),#faf7ee)]" />
        <div className="mx-auto max-w-[1340px] px-4 pb-[12px] pt-[30px] sm:px-8 lg:pb-[14px] lg:pt-[64px]">
          <p className="flex items-center gap-3 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#1d5a37] sm:text-[13.5px]">
            Careers at Bharat Organic Expo
            <span className="h-px w-[40px] bg-[#1d5a37]/40" />
          </p>
          <h1 className="mt-1 max-w-[640px] text-[26px] font-bold leading-[1.08] text-[#123a24] sm:text-[32px] lg:text-[38px]" style={SERIF}>
            Build Your Career
            <br />
            in the Organic Industry
          </h1>
          <p className="mt-1.5 max-w-[540px] text-[14px] leading-[1.4] text-[#2e3b33] sm:text-[15px]">
            Be a part of a passionate team advancing organic business, sustainable living and a healthier planet.
          </p>
          <nav aria-label="Breadcrumb" className="mt-[8px] flex flex-wrap items-center gap-[8px] text-[13px] text-[#2e3b33]">
            <Link href="/" className="flex items-center gap-[6px] hover:text-[#1d7a3e]">
              <Home className="h-[15px] w-[15px] text-[#1d5a37]" fill="currentColor" />
              Home
            </Link>
            <ChevronRight className="h-[14px] w-[14px] text-[#7c8a80]" />
            <Link href="/careers" className="hover:text-[#1d7a3e]">
              Careers
            </Link>
            <ChevronRight className="h-[14px] w-[14px] text-[#7c8a80]" />
            <span className="font-medium text-[#14281b]">Apply for Position</span>
          </nav>
        </div>
      </section>

      {/* ── Job + eligibility ── */}
      <div className="mx-auto grid max-w-[1340px] gap-3 px-4 pb-5 sm:px-8 lg:grid-cols-[minmax(0,1.95fr)_minmax(340px,1fr)] lg:gap-[14px] lg:pb-[20px]">
        {/* Job details */}
        <article className="rounded-[14px] border border-[#ece4d1] bg-[#fffdf7] p-4 shadow-[0_6px_24px_rgba(90,70,30,0.07)] sm:px-5 sm:py-4">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_230px]">
            <div className="min-w-0">
              <Link href="/careers#current-openings" className="inline-flex items-center gap-[8px] text-[14px] font-medium text-[#1f3329] hover:text-[#1d7a3e]">
                <ArrowLeft className="h-[17px] w-[17px]" />
                Back to Careers
              </Link>
              <span className="mt-[6px] block w-fit rounded-[5px] bg-[#e5f2e5] px-[10px] py-[3px] text-[12px] font-semibold uppercase tracking-[0.04em] text-[#1d5a37]">
                {info.type}
              </span>
              <h2 className="mt-[4px] text-[24px] font-bold leading-[1.15] text-[#123a24] sm:text-[27px]" style={SERIF}>
                {info.title}
              </h2>

              <div className="mt-[6px] flex flex-wrap items-center gap-x-[14px] gap-y-[4px] text-[13.5px] text-[#26352c]">
                {meta.map(({ Icon, text }) => (
                  <span key={text} className="flex items-center gap-[7px] border-r border-[#e2dccd] pr-[16px]">
                    <Icon className="h-[18px] w-[18px]" style={{ color: GOLD }} strokeWidth={2} />
                    {text}
                  </span>
                ))}
                {info.department ? (
                  <span className="flex items-center gap-[7px]">
                    <LeafMark className="h-[18px] w-[18px]" />
                    {info.department}
                  </span>
                ) : null}
              </div>

              {info.description ? <p className="mt-[8px] text-[13.5px] leading-[1.45] text-[#33413a]">{info.description}</p> : null}

              {info.responsibilities.length ? (
                <section className="mt-[10px]">
                  <SectionHeading>Key Responsibilities</SectionHeading>
                  <CheckList items={info.responsibilities} />
                </section>
              ) : null}

              <section className="mt-[10px]">
                <SectionHeading>Qualifications &amp; Experience</SectionHeading>
                <CheckList items={[`Education: ${info.education}`, `Experience: ${info.experience}`, ...info.requirements]} />
              </section>

              {info.documentUrl ? (
                <a
                  href={info.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-[12px] inline-flex h-[38px] items-center gap-[10px] rounded-[6px] bg-[#0f4d2a] px-[22px] text-[15px] font-semibold text-white shadow-[0_6px_14px_rgba(15,77,42,0.25)] transition hover:bg-[#0b3d21]"
                >
                  View Full Job Details
                  <ArrowRight className="h-[20px] w-[20px]" style={{ color: "#f2c45a" }} strokeWidth={2.4} />
                </a>
              ) : null}
            </div>

            {/* "Working towards a greener tomorrow" */}
            <aside className="hidden flex-col items-center md:flex">
              <div className="relative aspect-[230/395] w-full max-w-[300px] overflow-hidden rounded-[12px] bg-[radial-gradient(ellipse_at_40%_20%,#f6f3c4_0%,#b8d977_32%,#5d9a35_70%,#2e6b23_100%)] shadow-[0_8px_20px_rgba(30,70,30,0.2)]">
                <span className="absolute -right-[10px] -top-[6px] h-[90px] w-[90px] rounded-full bg-white/25 blur-[18px]" />
                <p className="relative px-[22px] pt-[30px] text-[26px] leading-[1.15] text-[#173b22]" style={{ fontFamily: "'Brush Script MT', 'Segoe Script', cursive" }}>
                  Working
                  <br />
                  Towards a
                  <br />
                  Greener
                  <br />
                  Tomorrow
                </p>
                <span className="relative ml-[46px] mt-[4px] block h-[3px] w-[96px] rounded-full" style={{ background: GOLD }} />
                {/* eslint-disable-next-line @next/next/no-img-element -- next/image did not start loading it inside this clipped card */}
                <img src="/assets/plant-in-hands.png" alt="A young plant in cupped hands" width={1372} height={1146} className="absolute bottom-0 left-1/2 h-auto w-[92%] max-w-none -translate-x-1/2" />
              </div>
              <div className="mt-[18px] grid w-full max-w-[300px] grid-cols-3 gap-2 text-center">
                {["People", "Ideas", "Impact"].map((label, idx) => (
                  <div key={label} className="flex flex-col items-center">
                    <span className="grid h-[46px] w-[46px] place-items-center rounded-full border-[1.5px] bg-white" style={{ borderColor: GOLD }}>
                      {idx === 0 ? (
                        <svg viewBox="0 0 32 32" className="h-[24px] w-[24px]" fill={GOLD} aria-hidden="true">
                          <path d="M27.5 4.5c-9.6-.4-17.4 2.6-20.6 9.2-1.7 3.5-1.5 7.2.3 10.2L4.6 26.5l1.5 1.5 2.6-2.6c3 1.8 6.7 2 10.2.3 6.6-3.2 9.6-11 9.2-20.6-.1-.3-.3-.5-.6-.6Zm-6.3 6.3-9.9 9.9-1.4-1.4 9.9-9.9 1.4 1.4Z" />
                        </svg>
                      ) : idx === 1 ? (
                        <svg viewBox="0 0 32 32" className="h-[25px] w-[25px]" fill={GOLD} aria-hidden="true">
                          <circle cx="16" cy="9.5" r="4.6" />
                          <circle cx="7.4" cy="11.6" r="3.4" />
                          <circle cx="24.6" cy="11.6" r="3.4" />
                          <path d="M8.6 26.5v-3.2c0-4.1 3.3-7.4 7.4-7.4s7.4 3.3 7.4 7.4v3.2H8.6Z" />
                          <path d="M6.9 17.1c-3 .3-5.4 2.8-5.4 5.9v2.6h5.4v-2.3c0-2.4.8-4.6 2.2-6.2h-2.2ZM25.1 17.1h-2.2c1.4 1.6 2.2 3.8 2.2 6.2v2.3h5.4V23c0-3.1-2.4-5.6-5.4-5.9Z" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 32 32" className="h-[24px] w-[24px]" fill={GOLD} aria-hidden="true">
                          <rect x="4" y="19" width="5.5" height="9" rx="1" />
                          <rect x="13.2" y="14" width="5.5" height="14" rx="1" />
                          <rect x="22.4" y="8" width="5.5" height="20" rx="1" />
                        </svg>
                      )}
                    </span>
                    <span className="mt-[5px] text-[13px] font-medium text-[#1f3329]">{label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-[16px] text-center text-[11px] font-medium uppercase leading-[1.5] tracking-[0.14em] text-[#3d4a40]">
                Organic Opportunities
                <br />
                for a Brighter Tomorrow
              </p>
              <span className="mt-[8px] block h-[2px] w-[34px]" style={{ background: GOLD }} />
            </aside>
          </div>
        </article>

        {/* Check your eligibility with AI */}
        <aside className="relative rounded-[14px] border border-[#ece4d1] bg-[#fffdf7] p-4 shadow-[0_6px_24px_rgba(90,70,30,0.07)] sm:px-5 sm:py-3">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#1d5a37]">
                Let AI Help You
                <Sparkles className="h-[17px] w-[17px]" style={{ color: GOLD }} fill={GOLD} />
              </p>
              <h2 className="mt-[2px] text-[22px] font-bold leading-[1.12] text-[#123a24] sm:text-[23px]" style={SERIF}>
                Check Your Eligibility
                <br />
                with AI
              </h2>
            </div>
            <div className="relative h-[66px] w-[66px] shrink-0">
              <DotLottieReact src="/chatbot.lottie" loop autoplay className="absolute inset-0 h-full w-full" />
            </div>
          </div>
          <p className="mt-[2px] max-w-[300px] text-[13px] leading-[1.4] text-[#3d4a40]">
            Upload your CV and get an instant analysis of how well your profile matches this position.
          </p>

          <div className="mt-[8px]">
            <UploadBox onFile={setFile} disabled={isAnalyzing || Boolean(uploadLimit)} />
          </div>

          <h3 className="mt-[8px] text-[14.5px] font-semibold text-[#14281b]">AI will check:</h3>
          <ul className="mt-[3px] space-y-[2px]">
            {info.aiChecklist.map((item) => (
              <li key={item} className="flex items-start gap-[10px] text-[13px] leading-[1.35] text-[#2e3b33]">
                <CircleCheck className="mt-[1px] h-[17px] w-[17px] shrink-0 text-white" fill="#1d7a3e" strokeWidth={2.4} />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-[8px] flex items-center gap-[12px] rounded-[10px] bg-[#e9f4e6] px-[12px] py-[7px]">
            <div
              className="relative grid h-[60px] w-[60px] shrink-0 place-items-center rounded-full"
              style={{ background: `conic-gradient(#1d7a3e 0deg ${ring}deg, #cfdccd ${ring}deg 360deg)` }}
            >
              <div className="absolute inset-[7px] rounded-full bg-white" />
              <span className="relative text-[18px] font-bold text-[#123a24]">{info.threshold}%</span>
            </div>
            <div>
              <p className="text-[15.5px] font-bold leading-[1.2] text-[#123a24]" style={SERIF}>
                {info.threshold}% or above = Eligible to Apply
              </p>
              <p className="mt-[2px] text-[12.5px] leading-[1.4] text-[#3d4a40]">
                Even if your score is lower, you may still reach out to us for future opportunities.
              </p>
            </div>
          </div>

          {analysisError && !uploadLimit && (
            <p role="alert" className="mt-[10px] rounded-[8px] border border-[#f1c9c2] bg-[#fdf1ef] px-[14px] py-[8px] text-[13px] leading-[1.4] text-[#9b2c1f]">
              {analysisError}
            </p>
          )}

          {uploadLimit && (
            <div role="alert" className="mt-[14px] rounded-[8px] border border-[#f1c9c2] bg-[#fdf1ef] px-[14px] py-[10px] text-[14px] leading-[1.4] text-[#9b2c1f]">
              <p className="font-semibold">Upload limit reached</p>
              <p>{uploadLimit.message}</p>
              {formatRetryAt(uploadLimit.retryAt) && (
                <p className="mt-[2px] text-[13px] text-[#b4533f]">You can upload again after {formatRetryAt(uploadLimit.retryAt)}.</p>
              )}
            </div>
          )}

          <button
            type="button"
            disabled={!file || isAnalyzing || Boolean(uploadLimit)}
            onClick={runAnalysis}
            className="mt-[8px] flex h-[40px] w-full items-center justify-center gap-[12px] rounded-[7px] text-[16px] font-semibold text-white shadow-[0_6px_14px_rgba(150,98,20,0.28)] transition enabled:hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
            style={{ background: "linear-gradient(180deg, #dda33a 0%, #bf7d1c 100%)" }}
          >
            {isAnalyzing ? "Analyzing CV with AI…" : "Analyze My CV"}
            <ArrowRight className="h-[20px] w-[20px]" strokeWidth={2.4} />
          </button>

          <p className="mt-[6px] flex items-start gap-[8px] text-[12px] leading-[1.4] text-[#55635a]">
            <LockKeyhole className="mt-[1px] h-[15px] w-[15px] shrink-0 text-[#1d5a37]" fill="#1d5a37" />
            Your data is secure and will only be used for recruitment purposes.
          </p>
        </aside>
      </div>
    </main>
  );
}
