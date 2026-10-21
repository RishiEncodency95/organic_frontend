"use client";

import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ApplyJobView from "./ApplyJobView";
import { EligibilityModal, defaultCandidateData, type CandidateProfileData } from "./submit-resume/SubmitResume";
import { ApplicationFormModal } from "./application-form/ApplicationForm";
import { ReviewSubmitModal } from "./review-submit/ReviewSubmit";
import ApplicationSuccessModal from "./ApplicationSuccessModal";
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
          onApply={() => router.push(CAREER_STEP_URL.applicationForm)}
        />
      )}
    </Frame>
  );
}

/** Step 3 — /careers/application-form */
export function ApplicationFormStep() {
  const { router, flow, toCareers } = useCandidateStep();
  return (
    <CareerPage>
      {!flow.ready ? (
        <CareerStepLoading />
      ) : !flow.candidate ? (
        <NoApplicationInProgress />
      ) : (
        <ApplicationFormModal
          variant="page"
          isOpen
          candidateData={flow.candidate}
          onBack={() => router.push(CAREER_STEP_URL.eligibility)}
          onClose={toCareers}
          onNext={(data) => {
            if (data) careerFlow.setCandidate(data);
            router.push(CAREER_STEP_URL.review);
          }}
        />
      )}
    </CareerPage>
  );
}

/** Step 4 — /careers/review-submit */
export function ReviewStep() {
  const { router, flow, toCareers } = useCandidateStep();
  return (
    <CareerPage>
      {!flow.ready ? (
        <CareerStepLoading />
      ) : !flow.candidate ? (
        <NoApplicationInProgress />
      ) : (
        <ReviewSubmitModal
          variant="page"
          isOpen
          candidateData={flow.candidate}
          onBack={() => router.push(CAREER_STEP_URL.applicationForm)}
          onClose={toCareers}
          onSubmitted={(details) => {
            careerFlow.complete(details);
            router.replace(CAREER_STEP_URL.submitted);
          }}
        />
      )}
    </CareerPage>
  );
}

/** Step 5 — /careers/application-submitted */
export function SubmittedStep() {
  const { flow, toCareers } = useCandidateStep();
  return (
    <CareerPage>
      {!flow.ready ? (
        <CareerStepLoading />
      ) : !flow.submitted ? (
        <NoApplicationInProgress />
      ) : (
        <ApplicationSuccessModal variant="page" isOpen applicationData={flow.submitted} onClose={toCareers} />
      )}
    </CareerPage>
  );
}
