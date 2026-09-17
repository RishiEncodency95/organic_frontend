"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
    X,
    MapPin,
    BriefcaseBusiness,
    ChartNoAxesColumnIncreasing,
    GraduationCap,
    FileUp,
    CheckCircle2,
    LockKeyhole,
    ArrowRight,
} from "lucide-react";

const bullets = {
    responsibilities: [
        "Generate exhibitor and sponsorship sales",
        "Meet prospective clients and negotiate deals",
        "Manage the complete sales cycle from lead to booking",
        "Achieve monthly and exhibition-wise targets",
    ],
    apply: [
        "Graduate in any discipline (MBA/PGDM preferred)",
        "3 – 6 years in B2B sales / business development",
        "Exhibition / trade show sales experience (preferred)",
        "Strong communication and negotiation skills",
        "Based in Delhi NCR; travel as required",
    ],
};

function MetaItem({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
    return (
        <div className="flex min-w-0 items-center gap-2 border-r border-slate-200 pr-3.5 last:border-0">
            <Icon className="h-4 w-4 shrink-0 text-emerald-800" strokeWidth={1.8} />
            <span className="text-[13px] font-semibold leading-tight text-slate-800">{children}</span>
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="relative pl-7">
            <span className="absolute left-0 top-0 text-[18px] leading-none">🍃</span>
            <h2 className="text-[15px] font-bold tracking-[-0.02em] text-emerald-900">{title}</h2>
            <div className="mt-1 text-[13.5px] leading-[1.35] text-slate-700">{children}</div>
        </section>
    );
}

function UploadBox({ onFile }: { onFile: (file: File) => void }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState("");

    const pick = () => inputRef.current?.click();

    return (
        <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files?.[0];
                if (file) {
                    setFileName(file.name);
                    onFile(file);
                }
            }}
            className="rounded-xl border border-dashed border-emerald-700/35 bg-white/40 px-4 py-3 text-center"
        >
            <input
                ref={inputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                        setFileName(file.name);
                        onFile(file);
                    }
                }}
            />
            <FileUp className="mx-auto h-8 w-8 text-emerald-800" strokeWidth={1.7} />
            <h3 className="mt-1 text-[15px] font-bold text-slate-800">Upload Your CV</h3>
            <p className="mt-0.5 text-[12px] leading-snug text-slate-600">
                Drag & drop your file here or click to browse<br />
                PDF, DOC or DOCX (Max 5 MB)
            </p>
            {fileName && (
                <p className="mt-1.5 truncate text-[11px] font-semibold text-emerald-800">{fileName}</p>
            )}
            <button
                type="button"
                onClick={pick}
                className="mt-2 w-full max-w-[200px] rounded-lg bg-gradient-to-b from-emerald-700 to-emerald-800 px-4 py-2 text-[14px] font-bold text-white shadow-sm transition hover:brightness-105"
            >
                Choose File
            </button>
        </div>
    );
}

export default function UploadCvModal({ job, onClose }: { job?: any, onClose: () => void }) {
    const [file, setFile] = useState<File | null>(null);

    if (!job) return null;

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-md" onClick={onClose} />

            <div className="relative flex max-h-[95vh] w-[85%] max-w-[1300px] overflow-hidden rounded-[18px] bg-[#fbfcf9] shadow-[0_30px_90px_rgba(0,0,0,.28)]">
                <button
                    aria-label="Close"
                    onClick={onClose}
                    className="absolute right-3 top-3 z-40 grid h-10 w-10 place-items-center text-slate-900 hover:text-red-600 transition hover:scale-105"
                >
                    <X className="h-6 w-6" strokeWidth={2} />
                </button>

                {/* LEFT / JOB DETAILS */}
                <div className="relative w-[65%] overflow-hidden px-4 py-8 lg:px-6">
                    <div className="relative z-10 pr-[30%] xl:pr-[28%]">
                        <div className="flex items-center gap-2">
                            <span className="h-[2px] w-10 bg-emerald-700/70" />
                            <span className="text-[14px] font-bold tracking-[0.2em] text-emerald-900">JOIN OUR TEAM</span>
                            <span className="h-[2px] w-10 bg-emerald-700/70" />
                        </div>

                        <h1 className="mt-2 text-[26px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#073b3b] xl:text-[28px]">
                            {job.title}
                            <br />
                            <span className="text-[16px] font-semibold opacity-90">{job.department}</span>
                        </h1>

                        <div className="mt-2 flex items-center gap-3 text-[13.5px] text-slate-700">
                            <span>Namo Gange Wellness Pvt. Ltd.</span>
                            <span className="h-4 w-px bg-slate-300" />
                            <span>Bharat Organic Expo</span>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-3.5 border-b border-slate-200 pb-4">
                            <MetaItem icon={MapPin}>{job.location}</MetaItem>
                            <MetaItem icon={BriefcaseBusiness}>{job.type}</MetaItem>
                            <MetaItem icon={ChartNoAxesColumnIncreasing}>{job.experience}</MetaItem>
                        </div>

                        <div className="mt-4 space-y-3.5">
                            <Section title="The Opportunity">
                                <span className="inline-block text-[15px] font-normal leading-snug">{job.description}</span>
                            </Section>

                            <Section title="Key Responsibilities">
                                <ul className="list-disc space-y-0.5 pl-4 marker:text-emerald-800">
                                    {bullets.responsibilities.map((x) => <li key={x}>{x}</li>)}
                                </ul>
                            </Section>

                            <Section title="Who Can Apply">
                                <ul className="list-disc space-y-0.5 pl-4 marker:text-emerald-800">
                                    {bullets.apply.map((x) => <li key={x}>{x}</li>)}
                                </ul>
                            </Section>
                        </div>

                        <a href="#" className="mt-4 inline-flex items-center gap-1.5 border-b-2 border-emerald-700 pb-0.5 text-[13px] font-bold text-emerald-900">
                            View Full Job Details <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>


                </div>

                {/* RIGHT / AI */}
                <aside className="relative w-[35%] overflow-y-auto bg-[#f2f9f3] px-6 py-6 scrollbar-hide">
                    <div className="relative z-10">
                        <div className="text-[12px] font-bold tracking-[0.2em] text-emerald-900">LET AI HELP YOU</div>
                        <h2 className="mt-1 text-[24px] font-bold leading-[1.05] tracking-[-0.02em] text-[#10283c]">
                            Check Your Eligibility<br />
                            <span className="text-emerald-700">with AI</span>
                        </h2>
                        <p className="mt-1.5 text-[13px] leading-[1.4] text-slate-700">
                            Upload your CV and get an instant analysis<br className="hidden xl:block" />
                            of how well your profile matches this position.
                        </p>

                        <div className="mt-3">
                            <UploadBox onFile={setFile} />
                        </div>

                        <div className="mt-3">
                            <h3 className="text-[14px] font-bold text-emerald-900">AI will check:</h3>
                            <ul className="mt-1 space-y-0.5 text-[12px] text-slate-700">
                                {["Relevant experience", "Exhibition / Trade show sales experience", "Key skills and qualifications", "Overall profile match"].map((x) => (
                                    <li key={x} className="flex items-center gap-1.5">
                                        <CheckCircle2 className="h-[14px] w-[14px] shrink-0 fill-emerald-800 text-white" strokeWidth={1.7} />
                                        {x}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-3 flex items-center gap-3 rounded-xl bg-[#e2f2e5] px-3 py-2.5">
                            <div className="relative grid h-[55px] w-[55px] shrink-0 place-items-center rounded-full bg-white ring-[6px] ring-emerald-600/80 ring-offset-[-6px]">
                                <div className="absolute inset-[4px] rounded-full border-[6px] border-slate-300 border-r-emerald-600 border-t-emerald-600" />
                                <span className="relative text-[16px] font-bold text-[#113042]">40%</span>
                            </div>
                            <div>
                                <p className="text-[14px] font-bold leading-tight text-emerald-800">40% or above<br />= Eligible</p>
                                <p className="mt-1 text-[11px] leading-tight text-slate-700">Even with a lower score, you may reach out.</p>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                if (!file) document.querySelector<HTMLInputElement>('input[type="file"]')?.click();
                            }}
                            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-emerald-700 to-emerald-800 py-2.5 text-[15px] font-bold text-white shadow-md transition hover:brightness-105"
                        >
                            Analyze My CV <ArrowRight className="h-5 w-5" />
                        </button>

                        <div className="mt-2.5 flex items-start gap-1.5 text-[10px] text-slate-600">
                            <LockKeyhole className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-800" />
                            <span>Your data is secure and will only be used for recruitment purposes.</span>
                        </div>
                    </div>

                    {/* Missing leaves asset removed */}
                </aside>
            </div>
        </div>
    );
}
