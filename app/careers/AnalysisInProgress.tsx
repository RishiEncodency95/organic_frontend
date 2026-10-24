"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  BriefcaseBusiness,
  ChartColumnIncreasing,
  ChartNoAxesColumnIncreasing,
  ChevronRight,
  CircleCheck,
  Clock3,
  FileText,
  GraduationCap,
  Home,
  Lightbulb,
  LoaderCircle,
  MapPin,
  SearchCheck,
  Settings,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

// Headings use Playfair; set inline because the global h1–h6 font rule outranks utility classes
const SERIF: React.CSSProperties = { fontFamily: "var(--font-playfair-next), Georgia, serif" };
const GOLD = "#C98A22";

const TASKS: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: FileText, title: "Reading Your CV", desc: "Extracting key information from your profile…" },
  { Icon: SearchCheck, title: "Matching Skills", desc: "Comparing with job requirements…" },
  { Icon: BriefcaseBusiness, title: "Checking Experience", desc: "Analyzing relevant work experience…" },
  { Icon: GraduationCap, title: "Verifying Education", desc: "Checking qualifications and certifications…" },
  { Icon: Settings, title: "Analyzing Competencies", desc: "Assessing role-specific skills and expertise…" },
  { Icon: ChartColumnIncreasing, title: "Calculating Match Score", desc: "Generating eligibility score…" },
];
// Order in which the cards finish (left column top→bottom, then right column)
const TASK_SECONDS = 2.6;

const STEPS = [
  { label: "Upload CV", state: "Completed" },
  { label: "AI Analysis", state: "In Progress" },
  { label: "Review Details", state: "Pending" },
  { label: "Submit Application", state: "Pending" },
];

const NEXT = [
  { title: "AI Profile Analysis", desc: "We analyze your CV for relevant skills, qualifications and experience." },
  { title: "Review Your Details", desc: "You may be asked to verify or add additional information if required." },
  { title: "Application Submission", desc: "Once confirmed, your application will be submitted to our team." },
  { title: "Confirmation", desc: "You will receive a confirmation email with your application details." },
];

function TaskCard({ Icon, title, desc, done }: { Icon: LucideIcon; title: string; desc: string; done: boolean }) {
  return (
    <div className="flex items-center gap-[10px] rounded-[10px] border border-[#e6ebe2] bg-white px-[10px] py-[7px] shadow-[0_2px_8px_rgba(30,60,30,0.04)]">
      <span className="grid h-[36px] w-[36px] shrink-0 place-items-center rounded-full bg-[#e8f3e6] text-[#1d6b3a]">
        <Icon className="h-[18px] w-[18px]" strokeWidth={2.1} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[13.5px] font-semibold leading-tight text-[#14281b]">{title}</p>
        <p className="mt-[2px] text-[12px] leading-[1.3] text-[#55635a]">{desc}</p>
      </div>
      {done ? (
        <CircleCheck className="h-[22px] w-[22px] shrink-0 text-white" fill="#1d7a3e" strokeWidth={2.4} />
      ) : (
        <LoaderCircle className="h-[20px] w-[20px] shrink-0 animate-spin text-[#b9c6bc]" strokeWidth={2.2} />
      )}
    </div>
  );
}

/** Shown on the Apply page while the CV is being uploaded and scored */
export default function AnalysisInProgress({
  job,
  file,
}: {
  job: { title: string; location: string; type: string; experience: string };
  file: { name: string; size: string; type: string };
}) {
  const [elapsed, setElapsed] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 0 });
    const startedAt = Date.now();
    const timer = setInterval(() => setElapsed((Date.now() - startedAt) / 1000), 250);
    return () => clearInterval(timer);
  }, []);

  // Eases towards 96% — the real result replaces this page the moment it arrives
  const percent = Math.min(96, Math.round(96 * (1 - Math.exp(-elapsed / 7))));
  const done = Math.min(TASKS.length - 1, Math.floor(elapsed / TASK_SECONDS) + 1);
  const ring = percent * 3.6;

  return (
    <main className="relative isolate overflow-hidden bg-[#faf7ee]">
      {/* ── Hero ── */}
      <section className="relative isolate overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/careers/analysis-hero.jpg" alt="Bharat Organic Expo careers - application analysis in progress" className="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover object-center md:w-[60%]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(250,247,238,0.97)_0%,rgba(250,247,238,0.93)_42%,rgba(250,247,238,0.3)_55%,rgba(250,247,238,0)_68%)] max-md:bg-[linear-gradient(90deg,rgba(250,247,238,0.95),rgba(250,247,238,0.82))]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-[50px] bg-[linear-gradient(180deg,rgba(250,247,238,0),#faf7ee)]" />
        <div className="mx-auto max-w-[1340px] px-4 pb-[10px] pt-[30px] sm:px-8 lg:pt-[64px]">
          <p className="text-[12.5px] font-medium uppercase tracking-[0.08em] text-[#1f3329] sm:text-[14px]">Careers at Bharat Organic Expo</p>
          <h1 className="mt-1 text-[26px] font-bold leading-[1.1] text-[#14281b] sm:text-[32px] lg:text-[36px]" style={SERIF}>
            Application in Progress
          </h1>
          <p className="mt-1 max-w-[560px] text-[14px] leading-[1.4] text-[#2e3b33] sm:text-[15px]">
            We are analyzing your profile to find the best match for this position.
          </p>
          <nav aria-label="Breadcrumb" className="mt-[8px] flex flex-wrap items-center gap-[8px] text-[13px] text-[#2e3b33]">
            <Link href="/" className="flex items-center gap-[6px] hover:text-[#1d7a3e]">
              <Home className="h-[15px] w-[15px] text-[#1d5a37]" fill="currentColor" />
              Home
            </Link>
            <ChevronRight className="h-[14px] w-[14px] text-[#7c8a80]" />
            <Link href="/careers" className="hover:text-[#1d7a3e]">Careers</Link>
            <ChevronRight className="h-[14px] w-[14px] text-[#7c8a80]" />
            <span>Apply for Position</span>
            <ChevronRight className="h-[14px] w-[14px] text-[#7c8a80]" />
            <span className="font-medium text-[#14281b]">CV Analysis</span>
          </nav>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1340px] gap-3 px-4 pb-5 sm:px-8 lg:grid-cols-[minmax(0,2fr)_minmax(320px,0.95fr)] lg:gap-[14px] lg:pb-[20px]">
        <div className="flex min-w-0 flex-col">
          {/* Steps */}
          <ol className="mb-[8px] grid grid-cols-4 gap-1">
            {STEPS.map((step, idx) => {
              const complete = idx === 0;
              const active = idx === 1;
              return (
                <li key={step.label} className="relative flex flex-col items-center text-center">
                  {idx < STEPS.length - 1 && (
                    <span className={`absolute left-1/2 top-[13px] h-[2px] w-full ${idx === 0 ? "bg-[#1d7a3e]" : "bg-[#d4dcd2]"}`} />
                  )}
                  <span
                    className={`relative grid h-[26px] w-[26px] place-items-center rounded-full border-2 text-[12px] font-semibold ${
                      complete || active ? "border-[#1d7a3e] bg-[#1d7a3e] text-white" : "border-[#c4cdc2] bg-white text-[#55635a]"
                    }`}
                  >
                    {complete ? <CircleCheck className="h-[16px] w-[16px]" strokeWidth={2.6} /> : idx + 1}
                  </span>
                  <span className={`mt-[3px] text-[12px] font-semibold leading-tight sm:text-[13px] ${complete || active ? "text-[#14281b]" : "text-[#55635a]"}`}>{step.label}</span>
                  <span className={`text-[11px] leading-tight sm:text-[12px] ${complete || active ? "text-[#1d7a3e]" : "text-[#7c8a80]"}`}>{step.state}</span>
                </li>
              );
            })}
          </ol>

          <div className="flex flex-1 flex-col justify-between gap-[10px] rounded-[14px] border border-[#ece4d1] bg-[#fffdf7] p-3 shadow-[0_6px_24px_rgba(90,70,30,0.07)] sm:p-4">
            {/* CV received */}
            <div className="grid gap-3 rounded-[10px] bg-[#edf5ea] px-4 py-2 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
              <div className="flex min-w-0 items-center gap-[12px]">
                <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full bg-white text-[#1d6b3a]">
                  <FileText className="h-[20px] w-[20px]" fill="#1d6b3a" stroke="#fff" strokeWidth={1.4} />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[15px] font-semibold text-[#14281b]">{file.name}</p>
                  <p className="text-[12.5px] text-[#55635a]">
                    Uploaded successfully <span className="mx-1.5 text-[#b9c6bc]">|</span> {file.type} <span className="mx-1.5 text-[#b9c6bc]">|</span> {file.size}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-[12px] sm:border-l sm:border-[#d4dfd1] sm:pl-5">
                <CircleCheck className="h-[28px] w-[28px] shrink-0 text-white" fill="#1d7a3e" strokeWidth={2.2} />
                <div>
                  <p className="text-[15px] font-semibold text-[#1d5a37]">CV Received</p>
                  <p className="text-[12.5px] text-[#55635a]">Our AI is now analysing your profile</p>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#ece4d1] pt-[10px]">
              <div className="flex items-start gap-[10px]">
                <Sparkles className="mt-[3px] h-[20px] w-[20px] shrink-0" style={{ color: GOLD }} fill={GOLD} />
                <div>
                  <h2 className="text-[20px] font-bold leading-tight text-[#14281b] sm:text-[22px]" style={SERIF}>AI Analysis in Progress</h2>
                  <p className="mt-[1px] text-[13px] text-[#3d4a40]">Please wait while we analyze your profile against the job requirements.</p>
                </div>
              </div>
              <div className="flex items-center gap-[10px] text-[12.5px] leading-[1.35] text-[#3d4a40]">
                <span className="grid h-[32px] w-[32px] place-items-center rounded-full border border-[#d4dcd2] bg-white">
                  <Clock3 className="h-[17px] w-[17px] text-[#55635a]" />
                </span>
                This usually takes
                <br />
                10 – 20 seconds
              </div>
            </div>

            {/* Tasks around the progress ring */}
            <div className="grid items-center gap-[10px] md:grid-cols-[minmax(0,1fr)_190px_minmax(0,1fr)]">
              <div className="space-y-[8px]">
                {TASKS.slice(0, 3).map((task, idx) => (
                  <TaskCard key={task.title} {...task} done={idx < done} />
                ))}
              </div>
              <div className="order-first mx-auto md:order-none">
                <div
                  className="relative grid h-[180px] w-[180px] place-items-center rounded-full shadow-[0_0_0_8px_rgba(29,122,62,0.06)] transition-[background] duration-500"
                  style={{ background: `conic-gradient(#1d7a3e 0deg, #8fbf3a ${ring * 0.7}deg, #d8b54a ${ring}deg, #e3eadf ${ring}deg 360deg)` }}
                  role="progressbar"
                  aria-valuenow={percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="absolute inset-[12px] rounded-full bg-[#fffdf7]" />
                  <div className="relative flex flex-col items-center px-5 text-center">
                    <Sparkles className="h-[18px] w-[18px] text-[#3f8f2a]" fill="#3f8f2a" />
                    <span className="mt-[2px] text-[34px] font-bold leading-none text-[#14281b]">{percent}%</span>
                    <span className="mt-[3px] text-[14px] font-semibold text-[#14281b]">Analyzing…</span>
                    <span className="mt-[2px] text-[11px] leading-[1.3] text-[#55635a]">Extracting skills, experience and qualifications</span>
                  </div>
                </div>
              </div>
              <div className="space-y-[8px]">
                {TASKS.slice(3).map((task, idx) => (
                  <TaskCard key={task.title} {...task} done={idx + 3 < done} />
                ))}
              </div>
            </div>

            {/* Keep this page open */}
            <div className="flex items-center gap-[12px] rounded-[10px] bg-[#edf5ea] px-4 py-[8px]">
              <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full bg-[#fff6dd]">
                <Lightbulb className="h-[18px] w-[18px]" style={{ color: "#e2a520" }} fill="#f5c84a" />
              </span>
              <div>
                <p className="text-[15px] font-semibold text-[#1d5a37]">Please keep this page open</p>
                <p className="mt-[1px] text-[12.5px] leading-[1.4] text-[#3d4a40]">
                  Do not refresh or close this page while the analysis is in progress. You will be automatically redirected to the next step once the
                  analysis is complete.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: position + what happens next */}
        <aside className="overflow-hidden rounded-[14px] border border-[#ece4d1] bg-[#fffdf7] shadow-[0_6px_24px_rgba(90,70,30,0.07)] lg:mt-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/careers/analysis-side.jpg" alt="Organic opportunities for a brighter tomorrow" className="block aspect-[421/120] w-full object-cover" />
          <div className="p-3 sm:p-4">
            <div className="flex items-start gap-[10px] border-b border-[#ece4d1] pb-[10px]">
              <BriefcaseBusiness className="mt-[4px] h-[26px] w-[26px] shrink-0 text-[#1d6b3a]" fill="#1d6b3a" stroke="#fffdf7" strokeWidth={1.4} />
              <div className="min-w-0">
                <p className="text-[12.5px] text-[#55635a]">Position Applied For</p>
                <p className="text-[18px] font-bold leading-tight text-[#14281b]" style={SERIF}>{job.title}</p>
                <div className="mt-[4px] flex flex-wrap gap-x-[14px] gap-y-1 text-[12.5px] text-[#26352c]">
                  <span className="flex items-center gap-[5px]"><MapPin className="h-[15px] w-[15px]" style={{ color: GOLD }} />{job.location}</span>
                  <span className="flex items-center gap-[5px]"><BriefcaseBusiness className="h-[15px] w-[15px]" style={{ color: GOLD }} />{job.type}</span>
                  <span className="flex items-center gap-[5px]"><ChartNoAxesColumnIncreasing className="h-[15px] w-[15px]" style={{ color: GOLD }} />{job.experience}</span>
                </div>
              </div>
            </div>

            <h2 className="mt-[10px] text-[18px] font-bold text-[#14281b]" style={SERIF}>What Happens Next?</h2>
            <ol className="mt-[8px]">
              {NEXT.map((item, idx) => (
                <li key={item.title} className="relative flex gap-[12px] pb-[9px] last:pb-0">
                  {idx < NEXT.length - 1 && <span className="absolute left-[13px] top-[28px] h-[calc(100%-28px)] w-[2px] bg-[#d4dcd2]" />}
                  <span
                    className={`relative grid h-[28px] w-[28px] shrink-0 place-items-center rounded-full text-[13px] font-semibold ${
                      idx === 0 ? "bg-[#1d7a3e] text-white" : "bg-[#9aa59d] text-white"
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <div>
                    <p className={`text-[14px] font-semibold ${idx === 0 ? "text-[#1d7a3e]" : "text-[#14281b]"}`}>{item.title}</p>
                    <p className="mt-[1px] text-[12.5px] leading-[1.4] text-[#3d4a40]">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </main>
  );
}
