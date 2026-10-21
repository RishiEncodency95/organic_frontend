/*
 * CV upload + AI eligibility analysis for a job (Careers → Apply).
 * Uploads the CV to the backend, asks it to score the CV against the job, and falls back to
 * the Next.js /api/analyze-cv route — and finally a local estimate — when the backend fails.
 */

export type ApplyJob = {
    _id?: string;
    id?: string;
    slug?: string;
    title?: string;
    department?: string;
    description?: string;
    location?: string;
    type?: string;
    experience?: string;
    company?: string;
    brand?: string;
    responsibilities?: string[];
    requirements?: string[];
    preferredQualifications?: string[];
    skills?: string[];
    education?: string;
    eligibilityThreshold?: number;
};

export type BreakdownKey =
    | "relevantExperience"
    | "educationalQualification"
    | "keySkills"
    | "roleFit"
    | "industryExperience"
    | "locationPreference";

type Evidence = { evidence?: string[]; matched?: string[]; missing?: string[] } | undefined;
const firstNote = (e: Evidence) => e?.evidence?.find((x) => x?.trim())?.trim();

/** The analysis' evidence, one short line per breakdown row */
function breakdownNotesFrom(b: Record<string, Evidence> | undefined): Partial<Record<BreakdownKey, string>> {
    if (!b) return {};
    const skills = b.skills;
    const skillNote = skills?.matched?.length
        ? `Found: ${skills.matched.slice(0, 3).join(", ")}${skills.missing?.length ? ` · Missing: ${skills.missing.slice(0, 2).join(", ")}` : ""}`
        : skills?.missing?.length
          ? `Missing: ${skills.missing.slice(0, 3).join(", ")}`
          : undefined;
    return {
        relevantExperience: firstNote(b.relevantExperience),
        educationalQualification: firstNote(b.education),
        keySkills: skillNote,
        roleFit: firstNote(b.roleFit),
        industryExperience: firstNote(b.industryExperience),
        locationPreference: firstNote(b.location),
    };
}

export type CandidateAnalysisData = {
    candidateName: string;
    firstName: string;
    email?: string | null;
    phone?: string | null;
    /** Every number the CV listed, so the OTP step can offer each of them. */
    phones?: string[];
    /** The number the WhatsApp OTP was actually verified against. */
    verifiedPhone?: string | null;
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
    /** One line of evidence from the CV per breakdown row (shown under each bar). */
    breakdownNotes?: Partial<Record<BreakdownKey, string>>;
    /** Job requirements the CV did not show. */
    missingRequirements?: string[];
    /** What the candidate could improve, from the analysis. */
    gaps?: string[];
    /** Evidence strings backing the industryExperience score, for display in "Key Details from CV". */
    industryExperienceEvidence?: string[];
    /** Backend ids, so later steps can patch this same candidate record. */
    candidateId?: string;
    jobId?: string;
    analysisId?: string;
    fullProfile?: Record<string, unknown>;
};

/** Neither the backend nor the fallback could analyze the CV. */
export class CvAnalysisError extends Error {}

/** The backend turned the upload away: this IP reached the admin's resume upload limit. */
export class UploadLimitError extends Error {
    constructor(message: string, readonly retryAt?: string) {
        super(message);
    }
}

// CV upload rules — kept in step with the backend's uploadCv middleware.
const ALLOWED_CV_EXTENSIONS = ["pdf", "doc", "docx"];
export const ALLOWED_CV_ACCEPT = [
    ".pdf",
    ".doc",
    ".docx",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
].join(",");
const MAX_CV_BYTES = 5 * 1024 * 1024;

export const formatBytes = (bytes: number) =>
    bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;

/** Returns null when the file is acceptable, otherwise the reason to show. */
export const validateCvFile = (file: File): string | null => {
    const extension = file.name.includes(".") ? file.name.split(".").pop()!.toLowerCase() : "";
    if (!ALLOWED_CV_EXTENSIONS.includes(extension)) {
        return `${extension ? `.${extension}` : "That"} file type is not allowed. Upload a PDF, DOC or DOCX.`;
    }
    if (file.size === 0) return "That file is empty. Please choose another CV.";
    if (file.size > MAX_CV_BYTES) return `That file is ${formatBytes(file.size)}. Maximum allowed size is 5 MB.`;
    return null;
};

export const formatRetryAt = (iso?: string) => {
    if (!iso) return "";
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleString("en-IN", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit", hour12: true });
};

/**
 * CVs often carry the name in block capitals ("ROHIT KUMAR"), which reads as shouting
 * in the UI. Split camelCase / separators, then title-case only when the whole string
 * is uppercase so names like "McDonald" survive untouched.
 */
const prettifyName = (raw?: string | null): string => {
    if (!raw) return "";
    const spaced = raw
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
        .replace(/[._-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    if (!spaced || spaced !== spaced.toUpperCase()) return spaced;
    return spaced
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
};

const SAMPLE_JOB = {
    title: "Sales Manager – Domestic Exhibition Sales & Sponsorships",
    company: "Namo Gange Wellness Pvt. Ltd.",
    brand: "Bharat Organic Expo",
};

const pickList = (value: string[] | undefined) => (value ?? []).map((item) => item?.trim()).filter(Boolean) as string[];

/** What the Apply page shows about the job, from its own record */
export function describeJob(job: ApplyJob) {
    const preferred = pickList(job.preferredQualifications);
    const education = job.education?.trim() || "Graduate";
    const threshold = typeof job.eligibilityThreshold === "number" && job.eligibilityThreshold > 0 ? job.eligibilityThreshold : 40;
    const documentId = job.slug || job._id || job.id;
    return {
        title: job.title || SAMPLE_JOB.title,
        company: job.company || SAMPLE_JOB.company,
        brand: job.brand || SAMPLE_JOB.brand,
        location: job.location || "Delhi NCR",
        type: job.type || "Full Time",
        experience: job.experience || "3 – 6 Years",
        department: job.department?.trim() || "",
        description: job.description?.trim() || "",
        responsibilities: pickList(job.responsibilities),
        requirements: pickList(job.requirements),
        education: preferred.length ? `${education} (${preferred.join(", ")})` : education,
        threshold,
        aiChecklist: [
            "Relevant work experience",
            "Educational qualification",
            job.skills?.length ? `Key skills: ${job.skills.slice(0, 4).join(", ")}` : "Key skills for this role",
            job.department?.trim() ? `${job.department.trim()} experience` : "Industry experience",
            "Overall profile match",
        ],
        documentUrl: documentId ? `/api/careers/jobs/${encodeURIComponent(documentId)}/export` : undefined,
    };
}

/** Uploads the CV and scores it against the job. Throws UploadLimitError when this IP is blocked. */
export async function analyzeCv(job: ApplyJob, file: File): Promise<CandidateAnalysisData> {
    const info = describeJob(job);
    const cvSize = formatBytes(file.size);
    const objectUrl = URL.createObjectURL(file);
    const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
    const jobDetails = {
        title: info.title,
        company: info.company,
        brand: info.brand,
        location: info.location,
        type: info.type,
        experience: info.experience,
        education: info.education,
    };
    const nameFromFile = () => prettifyName(file.name.replace(/\.[^/.]+$/, ""));

    try {
        // 1. Upload CV to Backend & Cloudinary
        const formData = new FormData();
        formData.append("cv", file);
        const uploadRes = await fetch(`${apiBase}/careers/cv/upload`, { method: "POST", body: formData });
        const uploadJson = await uploadRes.json();
        if (uploadRes.status === 429 && uploadJson?.code === "API_BLOCKED") {
            throw new UploadLimitError(uploadJson.message, uploadJson.retryAt);
        }
        if (!uploadRes.ok || !uploadJson.success) throw new Error(uploadJson.message || "Failed to upload CV");

        // 2. AI CV analysis & deterministic score
        const analyzeRes = await fetch(`${apiBase}/careers/cv/analyze`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                candidateId: uploadJson.data.candidateId,
                jobId: job._id || job.id || "sales-manager-domestic-exhibition-sales-sponsorships",
            }),
        });
        const analyzeJson = await analyzeRes.json();
        if (!analyzeRes.ok || !analyzeJson.success) throw new Error(analyzeJson.message || "Failed to analyze CV");

        const analysis = analyzeJson.data;
        const profile = analysis.candidateProfile || {};
        const fullName = prettifyName(profile.name) || nameFromFile();
        const score = analysis.matchScore ?? 0;
        return {
            candidateName: fullName,
            firstName: fullName.split(" ")[0] || "Candidate",
            email: profile.email || null,
            phone: profile.phone || null,
            phones: Array.isArray(profile.phones) && profile.phones.length > 0 ? profile.phones : profile.phone ? [profile.phone] : [],
            verifiedPhone: null,
            linkedin: profile.linkedin || null,
            // A returning candidate's stored photo, so they never have to re-upload it.
            image: profile.photo || null,
            cvFile: file,
            cvName: file.name,
            cvSize,
            cvUrl: profile.cv?.cloudinaryUrl || objectUrl,
            score: analysis.matchScore ?? 72,
            summary: analysis.explanation,
            requirementsMet: analysis.matchedRequirements?.length > 0 ? analysis.matchedRequirements : analysis.strengths,
            missingRequirements: analysis.missingRequirements || [],
            gaps: analysis.gaps || [],
            breakdownNotes: breakdownNotesFrom(analysis.breakdown),
            jobDetails,
            breakdown: {
                relevantExperience: analysis.breakdown?.relevantExperience?.score ?? score,
                educationalQualification: analysis.breakdown?.education?.score ?? score,
                keySkills: analysis.breakdown?.skills?.score ?? score,
                roleFit: analysis.breakdown?.roleFit?.score ?? score,
                industryExperience: analysis.breakdown?.industryExperience?.score ?? score,
                locationPreference: analysis.breakdown?.location?.score ?? 100,
            },
            industryExperienceEvidence: analysis.breakdown?.industryExperience?.evidence || [],
            candidateId: analysis.candidateId,
            jobId: analysis.jobId,
            analysisId: analysis.analysisId,
            fullProfile: profile,
        };
    } catch (error) {
        // A blocked IP must not get through by the fallbacks below
        if (error instanceof UploadLimitError) throw error;
        console.warn("Express Backend CV Analysis failed, attempting Next.js /api/analyze-cv fallback:", error);
    }

    try {
        const nextFormData = new FormData();
        nextFormData.append("file", file);
        nextFormData.append("jobTitle", info.title);
        nextFormData.append("jobExperience", job.experience || "3 - 6 Years");
        const nextRes = await fetch("/api/analyze-cv", { method: "POST", body: nextFormData });
        if (nextRes.ok) {
            const next = await nextRes.json();
            // An "estimated" answer means the AI did not run — never show it as a score
            if (next.success && !next.estimated) {
                return {
                    candidateName: prettifyName(next.candidateName) || nameFromFile(),
                    firstName: next.firstName || "Candidate",
                    email: next.email || null,
                    phone: next.phone || null,
                    phones: Array.isArray(next.phones) && next.phones.length > 0 ? next.phones : next.phone ? [next.phone] : [],
                    verifiedPhone: null,
                    linkedin: next.linkedin || null,
                    cvFile: file,
                    cvName: file.name,
                    cvSize,
                    cvUrl: objectUrl,
                    score: next.score ?? 72,
                    summary: next.summary,
                    requirementsMet: next.requirementsMet,
                    jobDetails,
                    breakdown: {
                        relevantExperience: next.breakdown?.relevantExperience ?? next.score,
                        educationalQualification: next.breakdown?.educationalQualification ?? 90,
                        keySkills: next.breakdown?.keySkills ?? next.score,
                        roleFit: next.breakdown?.roleFit ?? next.score,
                        industryExperience: next.breakdown?.industryExperience ?? next.score,
                        locationPreference: next.breakdown?.locationPreference ?? 100,
                    },
                };
            }
        }
    } catch (nextErr) {
        console.error("Next.js /api/analyze-cv fallback error:", nextErr);
    }

    // No real analysis was possible. A made-up score would show the same result for every
    // CV, so the candidate is asked to try again instead.
    throw new CvAnalysisError("Your CV could not be analyzed right now. Please try again in a few minutes.");
}
