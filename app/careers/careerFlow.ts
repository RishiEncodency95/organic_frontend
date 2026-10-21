"use client";

import { useSyncExternalStore } from "react";
import type { CandidateProfileData } from "./submit-resume/SubmitResume";

/*
 * The careers application is a series of pages: Apply (upload CV) → Eligibility →
 * Application Form → Review & Submit → Submitted. What one step hands to the next — the
 * job, the candidate's data and the submitted application — lives here, in memory and
 * in sessionStorage, so the steps survive a page reload within the tab.
 */

/** A job as the careers pages use it (mapped from the backend Job record) */
export type CareerJob = {
  _id?: string;
  id: string;
  slug?: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  company?: string;
  responsibilities?: string[];
  requirements?: string[];
  preferredQualifications?: string[];
  skills?: string[];
  education?: string;
  eligibilityThreshold?: number;
};

export type SubmittedApplication = {
  id: string;
  candidateName: string;
  position: string;
  submittedOn: string;
  aiMatchScore: number;
  /** Shown on the Application Submitted page */
  email?: string | null;
  phone?: string | null;
  location?: string | null;
  gender?: string | null;
  photo?: string | null;
  summary?: string;
  job?: { location?: string; type?: string; education?: string; experience?: string };
};

type BackendJob = {
  _id: string;
  slug?: string;
  title: string;
  department: string;
  location: string;
  employmentType?: string;
  experienceMin?: number;
  experienceMax?: number;
  description?: string;
  company?: string;
  responsibilities?: string[];
  requirements?: string[];
  preferredQualifications?: string[];
  skills?: string[];
  educationRequirements?: string;
  eligibilityThreshold?: number;
};

export const toCareerJob = (j: BackendJob): CareerJob => ({
  _id: j._id,
  id: j._id,
  slug: j.slug,
  title: j.title,
  department: j.department,
  location: j.location,
  type: j.employmentType || "Full Time",
  experience: `${j.experienceMin} - ${j.experienceMax} Years`,
  description: j.description || j.responsibilities?.[0] || j.requirements?.[0] || j.title,
  company: j.company,
  responsibilities: j.responsibilities,
  requirements: j.requirements,
  preferredQualifications: j.preferredQualifications,
  skills: j.skills,
  education: j.educationRequirements,
  eligibilityThreshold: j.eligibilityThreshold,
});

/** Page addresses of the application steps */
export const CAREER_STEP_URL = {
  careers: "/careers",
  apply: (job: Pick<CareerJob, "slug" | "id">) => `/careers/apply/${encodeURIComponent(job.slug || job.id)}`,
  eligibility: "/careers/submit-resume",
  applicationForm: "/careers/application-form",
  review: "/careers/review-submit",
  submitted: "/careers/application-submitted",
};

/* ---------------- store ---------------- */

type FlowState = {
  /** false only while rendering on the server, before sessionStorage can be read */
  ready: boolean;
  job: CareerJob | null;
  candidate: CandidateProfileData | null;
  submitted: SubmittedApplication | null;
};

const STORAGE_KEY = "boe_career_application";
const SERVER_STATE: FlowState = { ready: false, job: null, candidate: null, submitted: null };
const EMPTY_STATE: FlowState = { ready: true, job: null, candidate: null, submitted: null };

let state: FlowState | null = null;
const listeners = new Set<() => void>();

/** A blob: URL only works in the tab that made it, so it is never written to storage */
const dropBlob = (value: unknown) => (typeof value === "string" && value.startsWith("blob:") ? null : value);

const readState = (): FlowState => {
  if (state) return state;
  try {
    const saved = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "null");
    state = saved ? { ...EMPTY_STATE, job: saved.job ?? null, candidate: saved.candidate ?? null, submitted: saved.submitted ?? null } : EMPTY_STATE;
  } catch {
    state = EMPTY_STATE;
  }
  return state;
};

const writeState = (patch: Partial<Omit<FlowState, "ready">>) => {
  state = { ...readState(), ...patch };
  try {
    const candidate = state.candidate
      ? { ...state.candidate, cvFile: undefined, image: dropBlob(state.candidate.image), cvUrl: dropBlob(state.candidate.cvUrl) }
      : null;
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ job: state.job, candidate, submitted: state.submitted }));
  } catch {
    // Storage full or blocked: the in-memory state still carries the flow in this tab
  }
  listeners.forEach((listener) => listener());
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const careerFlow = {
  /** Starts a fresh application for this job */
  start: (job: CareerJob) => writeState({ job, candidate: null, submitted: null }),
  setJob: (job: CareerJob) => writeState({ job }),
  setCandidate: (candidate: CandidateProfileData) => writeState({ candidate }),
  /** The application went through: keep only the confirmation */
  complete: (submitted: SubmittedApplication) => writeState({ candidate: null, submitted }),
  clear: () => writeState({ job: null, candidate: null, submitted: null }),
};

export function useCareerFlow(): FlowState {
  return useSyncExternalStore(subscribe, readState, () => SERVER_STATE);
}
