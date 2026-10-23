"use client";

import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ApplyJobView from "./ApplyJobView";
import { EligibilityModal, defaultCandidateData, type CandidateProfileData } from "./submit-resume/SubmitResume";
import ReviewDetailsPage from "./flow/ReviewDetailsPage";
import CompleteApplicationPage from "./flow/CompleteApplicationPage";
import SubmittedPage from "./flow/SubmittedPage";
import { CareerPage, CareerStepLoading, NoApplicationInProgress } from "./CareerPageFrame";
import { CAREER_STEP_URL, careerFlow, toCareerJob, useCareerFlow, type CareerJob } from "./careerFlow";

/*
 * The careers application steps as pages. Each one shows the screen that used to open as a
 * popup, inside the page body, and moves to the next step's page.
 */

/** Step 1 — /careers/apply/[job]: the job and the CV upload + AI analysis */
export function ApplyStep({ jobKey }: { jobKey: string }) {
  const router = useRouter();
  const flow = useCareerFlow();
  const storedJob = flow.job && (flow.job.slug === jobKey || flow.job.id === jobKey) ? flow.job : null;
  const [fetched, setFetched] = useState<{ key: string; job: CareerJob | null } | null>(null);

  // Opened directly (shared link, new tab): load the job from the backend
  useEffect(() => {
    if (!flow.ready || storedJob) return;
    let cancelled = false;
    fetch(`/api/careers/jobs/${encodeURIComponent(jobKey)}`)
      .then((res) => res.json())
      .then((json) => !cancelled && setFetched({ key: jobKey, job: json?.success && json.data ? toCareerJob(json.data) : null }))
      .catch(() => !cancelled && setFetched({ key: jobKey, job: null }));
    return () => {
      cancelled = true;
    };
  }, [flow.ready, storedJob, jobKey]);

  const job = storedJob ?? (fetched?.key === jobKey ? fetched.job : undefined);

  if (!flow.ready || job === undefined || job === null) {
    return (
      <CareerPage>
        {job === null ? (
          <NoApplicationInProgress message="This position is no longer open. Please choose one of our current openings." />
        ) : (
          <CareerStepLoading />
        )}
      </CareerPage>
    );
  }

  return (
    <ApplyJobView
      job={job}
      onAnalyzed={(data) => {
        careerFlow.start(job);
        careerFlow.setCandidate({ ...defaultCandidateData, ...data } as CandidateProfileData);
        router.push(CAREER_STEP_URL.eligibility);
      }}
    />
  );
}

/** Steps 2–4 need the candidate from step 1 */
function useCandidateStep() {
  const router = useRouter();
  const flow = useCareerFlow();
  const toCareers = () => router.push(CAREER_STEP_URL.careers);
  return { router, flow, toCareers };
}

/** Step 2 — /careers/submit-resume: the AI match result, profile check and WhatsApp OTP */
export function EligibilityStep() {
  const { router, flow, toCareers } = useCandidateStep();
  // The AI Screening Result page is full width, without the step frame
  const Frame = flow.ready && flow.candidate ? Fragment : CareerPage;
  return (
    <Frame>
      {!flow.ready ? (
        <CareerStepLoading />
      ) : !flow.candidate ? (
        <NoApplicationInProgress />
      ) : (
        <EligibilityModal
          variant="page"
          isOpen
          candidate={flow.candidate}
          score={flow.candidate.score}
          onCandidateChange={careerFlow.setCandidate}
          onBack={() => router.push(flow.job ? CAREER_STEP_URL.apply(flow.job) : CAREER_STEP_URL.careers)}
          onClose={toCareers}
          onApply={() => router.push(CAREER_STEP_URL.review)}
        />
      )}
    </Frame>
  );
}

/** Step 3 — /careers/review-submit: Review Your Details (after the OTP) */
export function ReviewStep() {
  const { router, flow } = useCandidateStep();
  if (!flow.ready || !flow.candidate) {
    return <CareerPage>{!flow.ready ? <CareerStepLoading /> : <NoApplicationInProgress />}</CareerPage>;
  }
  return (
    <ReviewDetailsPage
      candidate={flow.candidate}
      onChange={careerFlow.setCandidate}
      onContinue={() => router.push(CAREER_STEP_URL.applicationForm)}
      onBack={() => router.push(CAREER_STEP_URL.eligibility)}
    />
  );
}

/** Step 4 — /careers/application-form: Complete Your Application + submit */
export function ApplicationFormStep() {
  const { router, flow } = useCandidateStep();
  if (!flow.ready || !flow.candidate) {
    // Just submitted: the confirmation page is loading
    const waiting = !flow.ready || flow.submitted;
    return <CareerPage>{waiting ? <CareerStepLoading /> : <NoApplicationInProgress />}</CareerPage>;
  }
  const c = flow.candidate;
  const p = (c.fullProfile || {}) as { location?: string; gender?: string };
  return (
    <CompleteApplicationPage
      candidate={c}
      onChange={careerFlow.setCandidate}
      onBack={() => router.push(CAREER_STEP_URL.review)}
      onViewAnalysis={() => router.push(CAREER_STEP_URL.eligibility)}
      onSubmitted={(result) => {
        careerFlow.complete({
          id: result.applicationId,
          candidateName: c.candidateName,
          position: c.jobDetails?.title || "",
          submittedOn: new Date(result.submittedAt).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit", hour12: true }),
          aiMatchScore: c.score,
          email: c.email,
          phone: c.phone,
          location: c.location || p.location || null,
          gender: p.gender || null,
          photo: typeof c.image === "string" && !c.image.startsWith("blob:") ? c.image : null,
          summary: c.summary,
          job: { location: c.jobDetails?.location, type: c.jobDetails?.type, education: c.jobDetails?.education, experience: c.jobDetails?.experience },
        });
        router.replace(CAREER_STEP_URL.submitted);
      }}
    />
  );
}

/** Step 5 — /careers/application-submitted */
export function SubmittedStep() {
  const { flow } = useCandidateStep();
  if (!flow.ready || !flow.submitted) {
    return <CareerPage>{!flow.ready ? <CareerStepLoading /> : <NoApplicationInProgress />}</CareerPage>;
  }
  return <SubmittedPage application={flow.submitted} />;
}
