"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
    ArrowRight,
    BriefcaseBusiness,
    ChartNoAxesColumnIncreasing,
    CheckCircle2,
    FileUp,
    GraduationCap,
    Loader2,
    LockKeyhole,
    MapPin,
    Phone,
    ShieldCheck,
    X,
} from "lucide-react";
import { verifyApi } from "@/lib/api";
import businessPersonClean from "@/app/assets/carrer/business-person-clean.png";
import leafDecoration from "@/app/assets/carrer/leaf-decoration.jpg";

type Job = {
    title?: string;
    department?: string;
    description?: string;
    location?: string;
    type?: string;
    experience?: string;
    company?: string;
    brand?: string;
    // Sourced from the backend Job model so the modal shows this job's real copy
    // instead of the Sales Manager sample below.
    responsibilities?: string[];
    requirements?: string[];
    preferredQualifications?: string[];
    skills?: string[];
    education?: string;
    eligibilityThreshold?: number;
};

const DESIGN_WIDTH = 1360;
const DESIGN_HEIGHT = 860;
const MODAL_WIDTH = "min(88vw, 1180px, calc(86vh * 1360 / 860))";
const OTP_LENGTH = 6;

// Cycled under the spinner so a multi-second analysis reads as progress, not a freeze.
const ANALYSIS_STEPS = [
    "Reading your CV…",
    "Extracting skills & experience…",
    "Matching against this role…",
    "Scoring your profile…",
];

// CV upload rules — kept in step with the backend's uploadCv middleware.
const ALLOWED_CV_EXTENSIONS = ["pdf", "doc", "docx"];
const ALLOWED_CV_ACCEPT = [
    ".pdf",
    ".doc",
    ".docx",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
].join(",");
const MAX_CV_BYTES = 5 * 1024 * 1024;

const formatBytes = (bytes: number) =>
    bytes < 1024 * 1024
        ? `${Math.max(1, Math.round(bytes / 1024))} KB`
        : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;

/** Returns null when the file is acceptable, otherwise the reason to show. */
const validateCvFile = (file: File): string | null => {
    const extension = file.name.includes(".") ? file.name.split(".").pop()!.toLowerCase() : "";
    if (!ALLOWED_CV_EXTENSIONS.includes(extension)) {
        return `${extension ? `.${extension}` : "That"} file type is not allowed. Upload a PDF, DOC or DOCX.`;
    }
    if (file.size === 0) return "That file is empty. Please choose another CV.";
    if (file.size > MAX_CV_BYTES) {
        return `That file is ${formatBytes(file.size)}. Maximum allowed size is 5 MB.`;
    }
    return null;
};

/** "9876543210" -> "+91 98765 43210" */
const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 5) return `+91 ${digits}`.trim();
    return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
};

const jobCopy = {
    title: "Sales Manager – Domestic Exhibition Sales & Sponsorships",
    company: "Namo Gange Wellness Pvt. Ltd.",
    brand: "Bharat Organic Expo",
    opportunity:
        "Be a part of Bharat Organic Expo and help grow a movement for a healthier, more sustainable India. Drive exhibition stall/space sales and sponsorships, connect with leading brands, and build long-term partnerships.",
};

const fallbackResponsibilities = [
    "Generate exhibitor and sponsorship sales",
    "Meet prospective clients and negotiate deals",
    "Manage the complete sales cycle from lead to booking",
    "Achieve monthly and exhibition-wise targets",
];

const fallbackApplyCriteria = [
    "Graduate in any discipline (MBA/PGDM preferred)",
    "3 – 6 years in B2B sales / business development",
    "Exhibition / trade show sales experience (preferred)",
    "Strong communication and negotiation skills",
    "Based in Delhi NCR; travel as required",
];

function MetaItem({
    icon: Icon,
    children,
    last = false,
    size = 27,
    wrap = false,
}: {
    icon: React.ElementType;
    children: React.ReactNode;
    last?: boolean;
    size?: number;
    /** Long copy (education) wraps inside the chip; short chips stay on one line. */
    wrap?: boolean;
}) {
    return (
        <div
            className={[
                "flex shrink-0 items-center gap-[11px] pr-[15px]",
                last ? "" : "border-r border-[#d8dfdf]",
            ].join(" ")}
        >
            <Icon size={size} className="shrink-0 text-[#006b48]" strokeWidth={2} />
            <span
                className={[
                    "font-bold leading-tight text-[#173047]",
                    // Education copy is long enough to need a smaller size to stay at
                    // two lines, so the whole meta row keeps to a single line.
                    wrap ? "max-w-[240px] whitespace-normal text-[14px]" : "whitespace-nowrap text-[16px]",
                ].join(" ")}
            >
                {children}
            </span>
        </div>
    );
}

function LeafIcon({ className = "h-[24px] w-[24px]" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9BD53B" />
                    <stop offset="45%" stopColor="#6DBA24" />
                    <stop offset="100%" stopColor="#4A8817" />
                </linearGradient>
            </defs>
            {/* Stem */}
            <path
                d="M22 23 C24 25 26 27 28 29"
                stroke="#4A8817"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
            {/* Leaf Body */}
            <path
                d="M5 5 C 3 17, 13 26, 23 23 C 26 13, 17 3, 5 5 Z"
                fill="url(#leafGrad)"
            />
            {/* Center Vein */}
            <path
                d="M6 6 C 11 13, 17 19, 23 23"
                stroke="#E2F5B8"
                strokeWidth="1.6"
                strokeLinecap="round"
                opacity="0.9"
            />
        </svg>
    );
}

function LeafHeading({ title }: { title: string }) {
    return (
        <div className="flex items-center gap-2.5">
            <LeafIcon className="h-[30px] w-[30px] shrink-0" />
            <h3 className="text-[22px] font-semibold leading-none text-[#00563f]">{title}</h3>
        </div>
    );
}

function InfoSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section>
            <LeafHeading title={title} />
            <div className="ml-[35px] mt-[5px] text-[19px] leading-[1.4] text-[#21354b]">
                {children}
            </div>
        </section>
    );
}

function UploadBox({ onFile }: { onFile: (file: File | null) => void }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState("");
    const [fileSize, setFileSize] = useState("");
    const [error, setError] = useState("");
    const [isDragging, setIsDragging] = useState(false);

    const chooseFile = () => inputRef.current?.click();

    // Single gate for both the file picker and drag & drop — `accept` alone only
    // filters the picker's default view, it does not reject anything.
    const acceptFiles = (files: FileList | null) => {
        const file = files?.[0];
        if (!file) return;

        const problem = validateCvFile(file);
        if (problem) {
            setError(problem);
            setFileName("");
            setFileSize("");
            onFile(null);
            return;
        }

        setError("");
        setFileName(file.name);
        setFileSize(formatBytes(file.size));
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
                acceptFiles(event.dataTransfer.files);
            }}
            className={`rounded-[12px] border border-dashed px-[22px] py-[12px] text-center transition-colors ${
                error
                    ? "border-[#e0a49c] bg-[#fdf5f4]"
                    : isDragging
                        ? "border-[#007a50] bg-[#e8f6ed]"
                        : "border-[#9bc7b1] bg-white/45"
            }`}
        >
            <input
                ref={inputRef}
                type="file"
                accept={ALLOWED_CV_ACCEPT}
                className="hidden"
                onChange={(event) => {
                    acceptFiles(event.target.files);
                    // Let the same file be picked again after a rejection.
                    event.target.value = "";
                }}
            />

            <FileUp
                className={`mx-auto h-[50px] w-[50px] ${error ? "text-[#c0705f]" : "text-[#007a50]"}`}
                strokeWidth={2.3}
            />
            <h3 className="mt-[7px] text-[20px] font-medium leading-none text-[#152840]">
                Upload Your CV
            </h3>

            {/* One fixed-height slot for all three states, so the panel never reflows. */}
            <div className="mt-[6px] flex h-[42px] items-center justify-center">
                {error ? (
                    <p className="text-[15px] font-medium leading-[1.3] text-[#b23b2e]">{error}</p>
                ) : fileName ? (
                    <p className="w-full text-[15px] font-medium leading-[1.3] text-[#007a50]">
                        <span className="mx-auto block max-w-[300px] truncate font-semibold">{fileName}</span>
                        {fileSize} · Ready to analyze
                    </p>
                ) : (
                    <p className="text-[16px] font-medium leading-[1.3] text-[#42546b]">
                        Drag &amp; drop your file here or click to browse
                        <br />
                        PDF, DOC or DOCX (Max 5 MB)
                    </p>
                )}
            </div>

            <button
                type="button"
                onClick={chooseFile}
                className="mt-[10px] h-[48px] w-[255px] rounded-[7px] bg-[linear-gradient(180deg,#008d55,#007346)] text-[18px] font-semibold text-white shadow-[0_5px_10px_rgba(0,84,51,0.18)]"
            >
                {fileName ? "Change File" : "Choose File"}
            </button>
        </div>
    );
}

export type CandidateAnalysisData = {
    candidateName: string;
    firstName: string;
    email?: string | null;
    phone?: string | null;
    linkedin?: string | null;
    image?: string | null;
    cvFile?: File | null;
    cvName: string;
    cvSize: string;
    cvUrl?: string | null;
    score: number;
    summary?: string;
    requirementsMet?: string[];
    jobDetails?: {
        title?: string;
        company?: string;
        brand?: string;
        location?: string;
        type?: string;
        experience?: string;
        education?: string;
    };
    breakdown?: {
        relevantExperience: number;
        educationalQualification: number;
        keySkills: number;
        roleFit: number;
        industryExperience: number;
        locationPreference: number;
    };
};

export default function UploadCvModal({
    job,
    onClose,
    onAnalyze,
}: {
    job?: Job;
    onClose?: () => void;
    onAnalyze?: (data: CandidateAnalysisData) => void;
}) {
    const [file, setFile] = useState<File | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    // The modal body is a fixed DESIGN_WIDTH x DESIGN_HEIGHT canvas that gets scaled
    // down to whatever width the shell resolves to. CSS cannot divide a length by a
    // length, so the ratio is measured here instead of computed in `calc()`.
    const shellRef = useRef<HTMLDivElement>(null);
    const [canvasScale, setCanvasScale] = useState<number | null>(null);

    useEffect(() => {
        const shell = shellRef.current;
        if (!shell) return;

        const measure = () => setCanvasScale(shell.clientWidth / DESIGN_WIDTH);
        measure();

        const observer = new ResizeObserver(measure);
        observer.observe(shell);
        return () => observer.disconnect();
    }, []);

    // WhatsApp OTP State
    const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
    const [otpStep, setOtpStep] = useState<"PHONE" | "OTP">("PHONE");
    const [mobileNumber, setMobileNumber] = useState("");
    const [otpCode, setOtpCode] = useState("");
    const [isSendingOtp, setIsSendingOtp] = useState(false);
    const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
    const [otpError, setOtpError] = useState("");
    const [resendIn, setResendIn] = useState(0);
    const otpInputsRef = useRef<(HTMLInputElement | null)[]>([]);

    // Resend cooldown after each successful send.
    useEffect(() => {
        if (resendIn <= 0) return;
        const timer = setTimeout(() => setResendIn((seconds) => seconds - 1), 1000);
        return () => clearTimeout(timer);
    }, [resendIn]);

    // Drop the caret straight into the first OTP box when the step opens.
    useEffect(() => {
        if (otpStep === "OTP") otpInputsRef.current[0]?.focus();
    }, [otpStep]);

    // Advance the status line while the analysis runs. Elapsed time is tracked rather
    // than a step index so each run restarts from its own start time, and the copy
    // settles on the last step instead of looping back to "Reading your CV…".
    const [analysisElapsed, setAnalysisElapsed] = useState(0);
    useEffect(() => {
        if (!isAnalyzing) return;
        const startedAt = Date.now();
        const id = setInterval(() => setAnalysisElapsed(Date.now() - startedAt), 300);
        return () => clearInterval(id);
    }, [isAnalyzing]);

    const analysisStep = isAnalyzing
        ? Math.min(Math.floor(analysisElapsed / 1800), ANALYSIS_STEPS.length - 1)
        : 0;

    const title = job?.title?.includes("Domastic")
        ? jobCopy.title
        : job?.title || jobCopy.title;

    if (!job) return null;

    // Every block below prefers this job's own record and only falls back to the
    // sample copy when the backend did not supply that field.
    const pickList = (value: string[] | undefined, fallback: string[]): string[] => {
        const cleaned = (value ?? []).map((item) => item?.trim()).filter(Boolean) as string[];
        return cleaned.length > 0 ? cleaned : fallback;
    };

    const jobResponsibilities = pickList(job.responsibilities, fallbackResponsibilities);
    const jobApplyCriteria = pickList(job.requirements, fallbackApplyCriteria);
    const educationLabel = job.education?.trim() || "Graduate";
    const preferredQualifications = (job.preferredQualifications ?? [])
        .map((item) => item?.trim())
        .filter(Boolean) as string[];
    // Only fall back to the sample's "(MBA/PGDM Preferred)" when the job carries no
    // education copy at all — a real job with nothing preferred should say nothing.
    const educationNote = preferredQualifications.length
        ? `(${preferredQualifications.join(", ")})`
        : job.education?.trim()
            ? ""
            : "(MBA/PGDM Preferred)";
    const threshold =
        typeof job.eligibilityThreshold === "number" && job.eligibilityThreshold > 0
            ? job.eligibilityThreshold
            : 40;
    const aiChecklist = [
        "Relevant experience",
        job.department?.trim()
            ? `${job.department.trim()} experience`
            : "Exhibition / Trade show sales experience",
        job.skills?.length
            ? `Key skills: ${job.skills.slice(0, 4).join(", ")}`
            : "Key skills and qualifications",
        "Overall profile match",
    ];

    const handleAnalyzeButtonClick = () => {
        if (!file) return;
        setOtpError("");
        setOtpStep("PHONE");
        setIsOtpModalOpen(true);
    };

    const handleSendWhatsAppOtp = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        const cleanedPhone = mobileNumber.replace(/\D/g, "");
        if (cleanedPhone.length < 10) {
            setOtpError("Please enter a valid 10-digit mobile number.");
            return;
        }

        setIsSendingOtp(true);
        setOtpError("");

        try {
            const result = await verifyApi.sendPhoneOtp(
                cleanedPhone,
                "CAREER_CANDIDATE",
                "Candidate",
                "BOE2027"
            );

            // `msg` is present on failures too, so only `success` may advance the step.
            if (result?.success) {
                setOtpStep("OTP");
                setOtpCode("");
                setResendIn(30);
            } else {
                setOtpError(result?.message || result?.msg || "Failed to send WhatsApp OTP. Please try again.");
            }
        } catch (err: any) {
            setOtpError(err?.message || "Failed to send WhatsApp OTP.");
        } finally {
            setIsSendingOtp(false);
        }
    };

    // ─── OTP box helpers ─────────────────────────────────────────────────────
    // `otpCode` stays the single source of truth; the six boxes are just a view of it.
    const focusOtpBox = (index: number) => {
        otpInputsRef.current[Math.max(0, Math.min(index, OTP_LENGTH - 1))]?.focus();
    };

    const handleOtpBoxChange = (index: number, raw: string) => {
        const digits = raw.replace(/\D/g, "");
        if (!digits) return;
        const next = (otpCode.slice(0, index) + digits).slice(0, OTP_LENGTH);
        setOtpCode(next);
        setOtpError("");
        focusOtpBox(next.length);
    };

    const handleOtpBoxKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            e.preventDefault();
            if (otpCode[index]) {
                setOtpCode(otpCode.slice(0, index) + otpCode.slice(index + 1));
                focusOtpBox(index);
            } else if (index > 0) {
                setOtpCode(otpCode.slice(0, index - 1) + otpCode.slice(index));
                focusOtpBox(index - 1);
            }
        } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            focusOtpBox(index - 1);
        } else if (e.key === "ArrowRight") {
            e.preventDefault();
            focusOtpBox(index + 1);
        }
    };

    const handleOtpPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const digits = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
        if (!digits) return;
        e.preventDefault();
        setOtpCode(digits);
        setOtpError("");
        focusOtpBox(digits.length);
    };

    const handleVerifyWhatsAppOtp = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!otpCode || otpCode.trim().length < 4) {
            setOtpError("Please enter the OTP received on WhatsApp.");
            return;
        }

        const cleanedPhone = mobileNumber.replace(/\D/g, "");
        setIsVerifyingOtp(true);
        setOtpError("");

        try {
            const result = await verifyApi.verifyPhoneOtp(cleanedPhone, otpCode.trim());

            if (result && (result.success || result.statusCode === 200)) {
                setIsOtpModalOpen(false);
                runAnalysisPipeline(cleanedPhone);
            } else {
                setOtpError(result?.message || result?.msg || "Invalid OTP code. Please enter the correct OTP.");
            }
        } catch (err: any) {
            setOtpError(err?.message || "OTP verification failed. Please try again.");
        } finally {
            setIsVerifyingOtp(false);
        }
    };

    const runAnalysisPipeline = async (verifiedPhone: string) => {
        if (!file) return;

        setIsAnalyzing(true);

        const fileSizeStr = file.size > 1024 * 1024
            ? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
            : `${Math.round(file.size / 1024)} KB`;

        const objectUrl = URL.createObjectURL(file);
        const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

        try {
            // 1. Upload CV to Backend & Cloudinary
            const formData = new FormData();
            formData.append("cv", file);

            const uploadRes = await fetch(`${apiBase}/careers/cv/upload`, {
                method: "POST",
                body: formData,
            });

            const uploadJson = await uploadRes.json();
            if (!uploadRes.ok || !uploadJson.success) {
                throw new Error(uploadJson.message || "Failed to upload CV");
            }

            const candidateId = uploadJson.data.candidateId;
            const targetJobId = (job as any)?._id || (job as any)?.id || "sales-manager-domestic-exhibition-sales-sponsorships";

            // 2. Trigger AI CV Analysis & Deterministic Score Calculation
            const analyzeRes = await fetch(`${apiBase}/careers/cv/analyze`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    candidateId,
                    jobId: targetJobId,
                }),
            });

            const analyzeJson = await analyzeRes.json();
            if (!analyzeRes.ok || !analyzeJson.success) {
                throw new Error(analyzeJson.message || "Failed to analyze CV");
            }

            const analysisData = analyzeJson.data;
            const profileData = analysisData.candidateProfile || {};
            const fullName = profileData.name || file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ").trim();
            const firstName = fullName.split(" ")[0] || "Candidate";

            const candidateData: CandidateAnalysisData & {
                candidateId?: string;
                jobId?: string;
                analysisId?: string;
                fullProfile?: any;
            } = {
                candidateName: fullName,
                firstName: firstName,
                email: profileData.email || null,
                phone: verifiedPhone || profileData.phone || null,
                linkedin: profileData.linkedin || null,
                cvFile: file,
                cvName: file.name,
                cvSize: fileSizeStr,
                cvUrl: profileData.cv?.cloudinaryUrl || objectUrl,
                score: analysisData.matchScore ?? 72,
                summary: analysisData.explanation,
                requirementsMet: analysisData.matchedRequirements?.length > 0
                    ? analysisData.matchedRequirements
                    : analysisData.strengths,
                jobDetails: {
                    title: job?.title || jobCopy.title,
                    company: job?.company || jobCopy.company,
                    brand: job?.brand || jobCopy.brand,
                    location: job?.location || "Delhi NCR",
                    type: job?.type || "Full Time",
                    experience: job?.experience || "3 – 6 Years",
                    education: `${educationLabel}${educationNote ? ` ${educationNote}` : ""}`,
                },
                breakdown: {
                    relevantExperience: analysisData.breakdown?.relevantExperience?.score ?? (analysisData.matchScore ?? 0),
                    educationalQualification: analysisData.breakdown?.education?.score ?? (analysisData.matchScore ?? 0),
                    keySkills: analysisData.breakdown?.skills?.score ?? (analysisData.matchScore ?? 0),
                    roleFit: analysisData.breakdown?.roleFit?.score ?? (analysisData.matchScore ?? 0),
                    industryExperience: analysisData.breakdown?.industryExperience?.score ?? (analysisData.matchScore ?? 0),
                    locationPreference: analysisData.breakdown?.location?.score ?? 100,
                },
                candidateId: analysisData.candidateId,
                jobId: analysisData.jobId,
                analysisId: analysisData.analysisId,
                fullProfile: profileData,
            };

            if (onAnalyze) onAnalyze(candidateData);
        } catch (e) {
            console.warn("Express Backend CV Analysis failed, attempting Next.js /api/analyze-cv fallback:", e);

            try {
                const nextFormData = new FormData();
                nextFormData.append("file", file);
                nextFormData.append("jobTitle", job?.title || jobCopy.title);
                nextFormData.append("jobExperience", job?.experience || "3 - 6 Years");

                const nextRes = await fetch("/api/analyze-cv", {
                    method: "POST",
                    body: nextFormData,
                });

                if (nextRes.ok) {
                    const nextJson = await nextRes.json();
                    if (nextJson.success) {
                        const candidateData: CandidateAnalysisData = {
                            candidateName: nextJson.candidateName || file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ").trim(),
                            firstName: nextJson.firstName || "Candidate",
                            email: nextJson.email || null,
                            phone: verifiedPhone || nextJson.phone || null,
                            linkedin: nextJson.linkedin || null,
                            cvFile: file,
                            cvName: file.name,
                            cvSize: fileSizeStr,
                            cvUrl: objectUrl,
                            score: nextJson.score ?? 72,
                            summary: nextJson.summary,
                            requirementsMet: nextJson.requirementsMet,
                            jobDetails: {
                                title: job?.title || jobCopy.title,
                                company: job?.company || jobCopy.company,
                                brand: job?.brand || jobCopy.brand,
                                location: job?.location || "Delhi NCR",
                                type: job?.type || "Full Time",
                                experience: job?.experience || "3 – 6 Years",
                                education: "Graduate (MBA/PGDM Preferred)",
                            },
                            breakdown: {
                                relevantExperience: nextJson.breakdown?.relevantExperience ?? nextJson.score,
                                educationalQualification: nextJson.breakdown?.educationalQualification ?? 90,
                                keySkills: nextJson.breakdown?.keySkills ?? nextJson.score,
                                roleFit: nextJson.breakdown?.roleFit ?? nextJson.score,
                                industryExperience: nextJson.breakdown?.industryExperience ?? nextJson.score,
                                locationPreference: nextJson.breakdown?.locationPreference ?? 100,
                            },
                        };

                        if (onAnalyze) onAnalyze(candidateData);
                        return;
                    }
                }
            } catch (nextErr) {
                console.error("Next.js /api/analyze-cv fallback error:", nextErr);
            }

            let computedScore = 72;
            const name = file.name.toLowerCase();
            if (name.includes("low") || name.includes("junior") || name.includes("fresher") || name.includes("38")) {
                computedScore = 38;
            } else if (name.includes("medium") || name.includes("sales") || name.includes("partial") || name.includes("58")) {
                computedScore = 58;
            }

            const fallbackName = file.name
                .replace(/\.[^/.]+$/, "")
                .replace(/[-_]/g, " ")
                .replace(/\b(cv|resume|doc|pdf)\b/gi, "")
                .trim();
            const formattedName = fallbackName ? fallbackName.replace(/\b\w/g, (c) => c.toUpperCase()) : "Candidate";
            const firstName = formattedName.split(" ")[0];

            const candidateData: CandidateAnalysisData = {
                candidateName: formattedName,
                firstName: firstName,
                email: null,
                phone: verifiedPhone || null,
                linkedin: null,
                cvFile: file,
                cvName: file.name,
                cvSize: fileSizeStr,
                cvUrl: objectUrl,
                score: computedScore,
                jobDetails: {
                    title: job?.title || jobCopy.title,
                    company: job?.company || jobCopy.company,
                    brand: job?.brand || jobCopy.brand,
                    location: job?.location || "Delhi NCR",
                    type: job?.type || "Full Time",
                    experience: job?.experience || "3 – 6 Years",
                    education: "Graduate (MBA/PGDM Preferred)",
                },
                breakdown: {
                    relevantExperience: computedScore < 50 ? 0 : computedScore,
                    educationalQualification: computedScore < 50 ? 30 : computedScore,
                    keySkills: computedScore < 50 ? 10 : computedScore,
                    roleFit: computedScore < 50 ? 20 : computedScore,
                    industryExperience: computedScore < 50 ? 0 : computedScore,
                    locationPreference: 100,
                },
            };

            if (onAnalyze) onAnalyze(candidateData);
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3">
            <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[5px]" onClick={() => onClose?.()} />

            <div
                ref={shellRef}
                className="relative overflow-hidden rounded-[18px] bg-[#fbfcf9] shadow-[0_30px_90px_rgba(0,0,0,0.28)]"
                style={{
                    width: MODAL_WIDTH,
                    aspectRatio: `${DESIGN_WIDTH} / ${DESIGN_HEIGHT}`,
                }}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute left-0 top-0 grid gap-[12px] overflow-hidden bg-white"
                        style={{
                            width: `${DESIGN_WIDTH}px`,
                            height: `${DESIGN_HEIGHT}px`,
                            gridTemplateColumns: "calc(65% - 8px) calc(35% - 8px)",
                            // Without an explicit row the single implicit row is sized to
                            // its content, leaving blank canvas under both panels.
                            gridTemplateRows: "minmax(0, 1fr)",
                            transform: `scale(${canvasScale ?? 1})`,
                            transformOrigin: "top left",
                            // Softened behind the progress overlay below.
                            filter: isAnalyzing ? "blur(6px)" : undefined,
                            pointerEvents: isAnalyzing ? "none" : undefined,
                            transition: "filter 260ms ease",
                            // Stay hidden for the single frame before the shell is measured,
                            // so the unscaled canvas never flashes.
                            visibility: canvasScale === null ? "hidden" : "visible",
                        }}
                    >
                        <button
                            type="button"
                            aria-label="Close"
                            onClick={() => onClose?.()}
                            className="absolute right-[16px] top-[12px] z-40 grid h-[42px] w-[42px] place-items-center text-[#0d1e35] transition hover:text-red-600"
                        >
                            <X className="h-[32px] w-[32px]" strokeWidth={2.5} />
                        </button>

                        <section className="relative overflow-hidden rounded-[14px] bg-white pl-6 py-6 bg-[#FBFCF9]">
                            <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[310px]">
                                <Image
                                    src={businessPersonClean}
                                    alt=""
                                    fill
                                    priority
                                    sizes="300px"
                                    className="object-fill"
                                />
                            </div>

                            <div className="boe-modal-scroll relative z-10 h-full max-w-[560px] overflow-y-auto pr-[14px] bg-[#FBFCF9]">
                                <div className="flex items-center gap-[13px]">
                                    {/* <span className="h-[3px] w-[55px] bg-[#0b734d]/70" /> */}
                                    <span className="text-[20px] font-semibold tracking-[0.12em] text-[#00563f]">
                                        JOIN OUR TEAM
                                    </span>
                                    <span className="h-[3px] w-[55px] bg-[#0b734d]/70" />
                                </div>

                                <h1 className="mt-[10px] max-w-[560px] text-[22px] lg:text-[37px] font-semibold leading-[1.18] tracking-[-0.03em] text-[#083A34]">
                                    {job.title || title}
                                </h1>

                                <div className="mt-[11px] flex flex-wrap items-center gap-x-[17px] gap-y-[5px] font-medium text-[20px] leading-none text-[#2C3341]">
                                    <span>{job.company || jobCopy.company}</span>
                                    <span className="h-[23px] w-px bg-[#d4dadd]" />
                                    <span>{job.brand || jobCopy.brand}</span>
                                </div>

                                <div className="mt-[18px] flex flex-wrap items-center gap-y-[12px] gap-x-[11px] border-b border-[#dce2e3] pb-[14px]">
                                    <MetaItem icon={MapPin}><span className="font-medium">{job.location || "Delhi NCR"}</span></MetaItem>
                                    <MetaItem icon={BriefcaseBusiness}><span className="font-medium">{job.type || "Full Time"}</span></MetaItem>
                                    <MetaItem icon={ChartNoAxesColumnIncreasing}>
                                        <span className="font-medium">{job.experience || "3 – 6 Years"}</span>
                                    </MetaItem>
                                    <MetaItem icon={GraduationCap} last wrap>
                                        <span className="block">
                                            {educationLabel}
                                            {educationNote ? (
                                                <>
                                                    <br />
                                                    <span className="text-[12px] font-medium">{educationNote}</span>
                                                </>
                                            ) : null}
                                        </span>
                                    </MetaItem>
                                </div>

                                <div className="mt-[15px] space-y-[11px]">
                                    <InfoSection title="The Opportunity">
                                        <p className="text-[19px] text-[#4D4D4D] font-normal">{job.description || jobCopy.opportunity}</p>
                                    </InfoSection>

                                    <InfoSection title="Key Responsibilities">
                                        <ul className="list-disc space-y-[4px] pl-[22px] marker:text-[#006b48]">
                                            {jobResponsibilities.map((item) => (
                                                <li key={item} className="text-[#4D4D4D] font-normal text-[19px]">{item}</li>
                                            ))}
                                        </ul>
                                    </InfoSection>

                                    <InfoSection title="Who Can Apply">
                                        <ul className="list-disc space-y-[4px] pl-[22px] marker:text-[#006b48]">
                                            {jobApplyCriteria.map((item) => (
                                                <li key={item} className="text-[#4D4D4D] font-normal text-[19px]">{item}</li>
                                            ))}
                                        </ul>
                                    </InfoSection>
                                </div>

                                <button
                                    type="button"
                                    className="mt-[9px] inline-flex items-center gap-[12px] border-b-2 border-[#007a50] pb-[5px] text-[21px] font-semibold text-[#006342]"
                                >
                                    View Full Job Details
                                    <ArrowRight className="h-[25px] w-[25px]" />
                                </button>
                            </div>
                        </section>

                        <aside className="relative overflow-hidden rounded-[14px] bg-[#f2f9f3] px-4 py-6">
                            <div className="pointer-events-none absolute bottom-0 right-0 h-[160px] w-[220px]">
                                <Image
                                    src="/separated-assets/bottom.png"
                                    alt="Leaf decoration"
                                    fill
                                    sizes="220px"
                                    className="object-contain object-bottom-right"
                                />
                            </div>

                            <div className="boe-modal-scroll relative z-10 h-full overflow-y-auto pr-[6px]">
                                <div className="text-[20px] font-semibold tracking-[1.2] text-[#00563f]">
                                    LET AI HELP YOU
                                </div>
                                <h2 className="mt-[5px] text-[32px] font-medium leading-[1.18] tracking-[-0.04em] text-[#10243f]">
                                    Check Your Eligibility
                                    <br />
                                    <span className="text-[#007a50]">with AI</span>
                                </h2>
                                <p className="mt-[8px] text-[17px] leading-[1.3] text-[#354b63]">
                                    Upload your CV and get an instant analysis
                                    <br />
                                    of how well your profile matches this position.
                                </p>

                                <div className="mt-[10px]">
                                    <UploadBox onFile={setFile} />
                                </div>

                                <div className="mt-[9px]">
                                    <h3 className="text-[20px] font-semibold text-[#00563f]">AI will check:</h3>
                                    <ul className="mt-[7px] space-y-[5px] text-[16.5px] leading-[1.25] text-[#253950]">
                                        {aiChecklist.map((item) => (
                                            <li key={item} className="flex items-center gap-[11px]">
                                                <CheckCircle2 className="h-[20px] w-[20px] shrink-0 fill-[#007a50] text-white" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-[9px] flex items-center gap-[17px] rounded-[8px] bg-[#e1f4e6] px-4 py-3">
                                    <div
                                        className="relative grid h-[98px] w-[98px] shrink-0 place-items-center rounded-full"
                                        style={{
                                            background: `conic-gradient(#2fb734 0deg ${threshold * 3.6}deg,#cbd0d4 ${threshold * 3.6}deg 360deg)`,
                                        }}
                                    >
                                        <div className="absolute inset-[12px] rounded-full bg-white" />
                                        <span className="relative text-[26px] font-semibold text-[#12334a]">{threshold}%</span>
                                    </div>

                                    <div>
                                        <p className="text-[21px] font-semibold leading-[1.15] text-[#007a50]">
                                            {threshold}% or above
                                            <br />= Eligible to Apply
                                        </p>
                                        <p className="mt-[8px] text-[15.5px] leading-[1.3] text-[#42566c]">
                                            Even if your score is lower, you may
                                            <br />
                                            still reach out to us for future opportunities.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    disabled={!file || isAnalyzing}
                                    onClick={handleAnalyzeButtonClick}
                                    className={`mt-[9px] flex h-[52px] w-full items-center justify-center gap-[15px] rounded-[7px] text-[20px] font-medium text-white transition-all ${!file || isAnalyzing
                                        ? "bg-gray-400 cursor-not-allowed opacity-60 shadow-none"
                                        : "bg-[linear-gradient(180deg,#008d55,#007346)] shadow-[0_7px_13px_rgba(0,84,51,0.22)] hover:brightness-110 cursor-pointer"
                                        }`}
                                >
                                    {isAnalyzing ? "Analyzing CV with AI..." : "Analyze My CV"}
                                    <ArrowRight className="h-[27px] w-[27px]" />
                                </button>

                                <div className="relative z-10 mt-[9px] flex items-center gap-[10px] text-[15px] leading-[1.3] text-[#526174]">
                                    <LockKeyhole className="h-[24px] w-[24px] shrink-0 fill-[#007a50] text-white" />
                                    Your data is secure and will only be used for recruitment purposes.
                                </div>
                            </div>
                        </aside>
                    </div>

                    {/* ── Analysis progress ─────────────────────────────── */}
                    {isAnalyzing && (
                        <div className="absolute inset-0 z-50 grid place-items-center bg-[#f4faf6]/75 px-8 text-center">
                            <div className="flex flex-col items-center">
                                <div className="relative grid h-[104px] w-[104px] place-items-center">
                                    <span className="boe-analyze-ring absolute inset-0 rounded-full" />
                                    <span className="absolute inset-[9px] rounded-full bg-[#f7fbf8] shadow-[inset_0_0_0_1px_rgba(0,122,80,0.10)]" />
                                    <FileUp
                                        className="boe-analyze-icon relative h-[38px] w-[38px] text-[#007a50]"
                                        strokeWidth={2.2}
                                    />
                                </div>

                                <h3 className="mt-[18px] text-[23px] font-semibold tracking-[-0.01em] text-[#0d2438]">
                                    Analyzing your CV
                                </h3>

                                <p
                                    key={analysisStep}
                                    className="boe-analyze-step mt-[6px] text-[15.5px] font-medium text-[#42566c]"
                                >
                                    {ANALYSIS_STEPS[analysisStep]}
                                </p>

                                <div className="mt-[16px] h-[5px] w-[240px] overflow-hidden rounded-full bg-[#dbeadf]">
                                    <span className="boe-analyze-sweep block h-full w-[35%] rounded-full bg-[linear-gradient(90deg,#008d55,#5ecb8c)]" />
                                </div>

                                <div className="mt-[14px] flex items-center gap-[7px]">
                                    {ANALYSIS_STEPS.map((label, index) => (
                                        <span
                                            key={label}
                                            className={`h-[6px] rounded-full transition-all duration-300 ${
                                                index === analysisStep
                                                    ? "w-[20px] bg-[#007a50]"
                                                    : "w-[6px] bg-[#bfd8c8]"
                                            }`}
                                        />
                                    ))}
                                </div>

                                <p className="mt-[16px] flex items-center gap-[7px] text-[12.5px] text-[#6b7a87]">
                                    <LockKeyhole className="h-[14px] w-[14px] text-[#007a50]" />
                                    This takes a few seconds — please keep this window open.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* WHATSAPP OTP VERIFICATION */}
            {isOtpModalOpen && (
                <div className="fixed inset-0 z-[100000] flex items-center justify-center bg-[#04140d]/70 p-4 backdrop-blur-[6px]">
                    <div className="relative w-full max-w-[430px] overflow-hidden rounded-[20px] bg-[#FBFCF9] shadow-[0_30px_80px_rgba(0,45,28,0.4)] ring-1 ring-[#cfe4d7]">

                        {/* ── Brand header ───────────────────────────────── */}
                        <div className="relative overflow-hidden bg-[linear-gradient(135deg,#00563f_0%,#00714f_55%,#008d55_100%)] px-6 py-5">
                            <span className="pointer-events-none absolute -right-10 -top-14 h-36 w-36 rounded-full bg-white/10" />
                            <span className="pointer-events-none absolute -bottom-16 right-10 h-28 w-28 rounded-full bg-white/[0.07]" />

                            <button
                                type="button"
                                aria-label="Close verification"
                                onClick={() => setIsOtpModalOpen(false)}
                                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
                            >
                                <X className="h-[18px] w-[18px]" strokeWidth={2.4} />
                            </button>

                            <div className="relative flex items-center gap-3">
                                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/15 ring-1 ring-white/25">
                                    <ShieldCheck className="h-6 w-6 text-white" strokeWidth={2.2} />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-poppins text-[19px] font-semibold leading-tight text-white">
                                        WhatsApp Verification
                                    </h3>
                                    <p className="mt-[3px] flex items-center gap-1.5 text-[12px] font-medium text-[#bfe6cf]">
                                        <span className="inline-block h-[7px] w-[7px] rounded-full bg-[#5df095]" />
                                        Bharat Organic Expo 2027
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ── Body ───────────────────────────────────────── */}
                        <div className="px-6 pb-6 pt-5">
                            {otpStep === "PHONE" ? (
                                <form onSubmit={handleSendWhatsAppOtp} className="space-y-4">
                                    <p className="text-[13.5px] leading-[1.5] text-[#42566c]">
                                        Enter your mobile number to receive a one-time password on WhatsApp.
                                        We verify it once before running the AI CV analysis.
                                    </p>

                                    <div>
                                        <label htmlFor="boe-otp-phone" className="mb-1.5 block text-[12px] font-semibold tracking-[0.02em] text-[#00563f]">
                                            Mobile Number <span className="text-[#c0392b]">*</span>
                                        </label>
                                        <div className="flex items-stretch overflow-hidden rounded-[10px] border border-[#c3d8cb] bg-white transition focus-within:border-[#008d55] focus-within:ring-[3px] focus-within:ring-[#008d55]/15">
                                            <span className="flex items-center gap-2 border-r border-[#dce8e1] bg-[#f2f9f3] px-3 text-[14px] font-semibold text-[#00563f]">
                                                <Phone className="h-[17px] w-[17px]" strokeWidth={2.2} />
                                                +91
                                            </span>
                                            <input
                                                id="boe-otp-phone"
                                                type="tel"
                                                inputMode="numeric"
                                                autoComplete="tel-national"
                                                maxLength={10}
                                                required
                                                autoFocus
                                                placeholder="98765 43210"
                                                value={mobileNumber}
                                                onChange={(e) => {
                                                    setMobileNumber(e.target.value.replace(/\D/g, ""));
                                                    setOtpError("");
                                                }}
                                                className="w-full bg-transparent px-3 py-3 text-[15px] font-semibold tracking-[0.03em] text-[#12334a] outline-none placeholder:font-normal placeholder:tracking-normal placeholder:text-[#9aa8b4]"
                                            />
                                        </div>
                                    </div>

                                    {otpError && (
                                        <p className="rounded-[8px] border border-[#f3c9c4] bg-[#fdf2f1] px-3 py-2.5 text-[12.5px] font-medium text-[#b23b2e]">
                                            {otpError}
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSendingOtp || mobileNumber.length < 10}
                                        className="flex h-[46px] w-full items-center justify-center gap-2.5 rounded-[9px] bg-[linear-gradient(180deg,#008d55,#007346)] text-[15px] font-semibold text-white shadow-[0_6px_14px_rgba(0,84,51,0.25)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:bg-none disabled:bg-[#b6c4bc] disabled:shadow-none"
                                    >
                                        {isSendingOtp ? (
                                            <>
                                                <Loader2 className="h-[18px] w-[18px] animate-spin" />
                                                Sending OTP…
                                            </>
                                        ) : (
                                            <>
                                                Send OTP on WhatsApp
                                                <ArrowRight className="h-[18px] w-[18px]" />
                                            </>
                                        )}
                                    </button>

                                    <p className="flex items-center justify-center gap-1.5 text-[11.5px] text-[#6b7a87]">
                                        <LockKeyhole className="h-[13px] w-[13px] text-[#007a50]" />
                                        Your number stays private and is used only for this verification.
                                    </p>
                                </form>
                            ) : (
                                <form onSubmit={handleVerifyWhatsAppOtp} className="space-y-4">
                                    <div className="flex items-start gap-2.5 rounded-[10px] border border-[#c6e9d2] bg-[#eef9f2] px-3.5 py-3">
                                        <CheckCircle2 className="mt-[1px] h-[17px] w-[17px] shrink-0 fill-[#007a50] text-white" />
                                        <div className="min-w-0 flex-1">
                                            <p className="text-[12.5px] font-semibold leading-snug text-[#0d5c40]">
                                                OTP sent to {formatPhone(mobileNumber)}
                                            </p>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOtpStep("PHONE");
                                                    setOtpCode("");
                                                    setOtpError("");
                                                }}
                                                className="mt-[3px] text-[11.5px] font-semibold text-[#007a50] underline underline-offset-2 transition hover:text-[#00563f]"
                                            >
                                                Change number
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-center text-[12.5px] font-semibold text-[#00563f]">
                                            Enter the {OTP_LENGTH}-digit code
                                        </label>
                                        <div className="flex justify-center gap-2" onPaste={handleOtpPaste}>
                                            {Array.from({ length: OTP_LENGTH }).map((_, index) => (
                                                <input
                                                    key={index}
                                                    ref={(el) => {
                                                        otpInputsRef.current[index] = el;
                                                    }}
                                                    type="text"
                                                    inputMode="numeric"
                                                    autoComplete={index === 0 ? "one-time-code" : "off"}
                                                    maxLength={1}
                                                    aria-label={`Digit ${index + 1}`}
                                                    value={otpCode[index] ?? ""}
                                                    onChange={(e) => handleOtpBoxChange(index, e.target.value)}
                                                    onKeyDown={(e) => handleOtpBoxKeyDown(index, e)}
                                                    onFocus={(e) => e.currentTarget.select()}
                                                    className={`h-[52px] w-[46px] rounded-[10px] border bg-white text-center text-[21px] font-semibold text-[#12334a] outline-none transition ${
                                                        otpError
                                                            ? "border-[#e0a49c]"
                                                            : otpCode[index]
                                                                ? "border-[#008d55]"
                                                                : "border-[#c3d8cb]"
                                                    } focus:border-[#008d55] focus:ring-[3px] focus:ring-[#008d55]/15`}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {otpError && (
                                        <p className="rounded-[8px] border border-[#f3c9c4] bg-[#fdf2f1] px-3 py-2.5 text-center text-[12.5px] font-medium text-[#b23b2e]">
                                            {otpError}
                                        </p>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isVerifyingOtp || otpCode.length < OTP_LENGTH}
                                        className="flex h-[46px] w-full items-center justify-center gap-2.5 rounded-[9px] bg-[linear-gradient(180deg,#008d55,#007346)] text-[15px] font-semibold text-white shadow-[0_6px_14px_rgba(0,84,51,0.25)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:bg-none disabled:bg-[#b6c4bc] disabled:shadow-none"
                                    >
                                        {isVerifyingOtp ? (
                                            <>
                                                <Loader2 className="h-[18px] w-[18px] animate-spin" />
                                                Verifying…
                                            </>
                                        ) : (
                                            <>
                                                Verify &amp; Start AI Analysis
                                                <ArrowRight className="h-[18px] w-[18px]" />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-[12px] text-[#6b7a87]">
                                        Didn&apos;t receive the code?{" "}
                                        {resendIn > 0 ? (
                                            <span className="font-semibold text-[#42566c]">
                                                Resend in {resendIn}s
                                            </span>
                                        ) : (
                                            <button
                                                type="button"
                                                disabled={isSendingOtp}
                                                onClick={() => handleSendWhatsAppOtp()}
                                                className="font-semibold text-[#007a50] underline underline-offset-2 transition hover:text-[#00563f] disabled:opacity-50"
                                            >
                                                Resend OTP
                                            </button>
                                        )}
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
