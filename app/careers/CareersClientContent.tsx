"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  Globe2,
  Lightbulb,
  MapPin,
  Sprout,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { EligibilityModal } from "./submit-resume/page";
import { ApplicationFormModal } from "./application-form/page";
import { ReviewSubmitModal } from "./review-submit/page";
import ResumeUploadButton from "./ResumeUploadButton";
import JobCardButtons from "./JobCardButtons";

const heroImage = "/assets/careers/image.png";

type JobOpening = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  icon: LucideIcon;
  // Present on jobs loaded from the API; the static sample list below omits them
  // and the apply modal falls back to its own copy.
  company?: string;
  responsibilities?: string[];
  requirements?: string[];
  preferredQualifications?: string[];
  skills?: string[];
  education?: string;
  eligibilityThreshold?: number;
};

const highlights = [
  { label: "Meaningful\nWork", icon: Sprout },
  { label: "Collaborative\nTeam", icon: Users },
  { label: "Growth\nOpportunities", icon: TrendingUp },
  { label: "Real\nImpact", icon: Globe2 },
];

const workReasons = [
  { label: "Purpose-Driven\nWork", icon: Sprout },
  { label: "Inclusive\nEnvironment", icon: Users },
  { label: "Learn from\nIndustry Experts", icon: Lightbulb },
  { label: "Be Part of a\nGlobal Platform", icon: Globe2 },
];

function JobCard({ job }: { job: JobOpening }) {
  const Icon = job.icon;

  return (
    <article className="group flex min-h-full flex-col rounded-[10px] border border-[#dfe6df] bg-white/95 px-3 py-2 shadow-[0_2px_10px_rgba(10,66,44,0.03)] transition-all duration-300 hover:bg-[#f5fbf7] hover:shadow-[0_4px_15px_rgba(10,66,44,0.08)]">
      <div className="flex gap-3">
        <span className="grid h-[clamp(50px,5.1vh,62px)] w-[clamp(50px,5.1vh,62px)] shrink-0 place-items-center rounded-full bg-[#eff8ef] text-[#08753c]">
          <Icon
            className="h-[clamp(25px,2.75vh,34px)] w-[clamp(25px,2.75vh,34px)]"
            strokeWidth={2.1}
          />
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="text-[14px] font-medium leading-tight text-[#0a1831]">
            {job.title}
          </h3>
          <span className="mt-1.5 inline-flex max-w-full rounded-[4px] bg-[#eef2f3] px-2.5 py-0.5 text-[12px] leading-none text-[#34485b]">
            {job.department}
          </span>
        </div>
      </div>

      <div className="mt-[clamp(9px,0.85vh,12px)] flex flex-wrap items-center gap-x-4 gap-y-1 text-[clamp(11px,0.78vw,14px)] text-[#17283c]">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-[18px] w-[18px] fill-[#08723e] text-[#08723e]" />
          {job.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <BriefcaseBusiness className="h-[18px] w-[18px] text-[#08723e]" />
          {job.type}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <TrendingUp className="h-[18px] w-[18px] text-[#08723e]" />
          {job.experience}
        </span>
      </div>

      <p className="mt-[clamp(8px,0.8vh,12px)] text-[clamp(12px,0.9vw,15px)] leading-[1.42] text-[#1a2a3d]">
        {job.description}
      </p>

      <JobCardButtons job={{ ...job, icon: undefined }} />
    </article>
  );
}

function EmptyOpenings() {
  return (
    <div className="w-full grid w-[96%] grid-cols-[80px_minmax(0,1fr)_1px_300px] items-center gap-[clamp(18px,2vw,32px)] rounded-[24px] bg-[#eef8e9]/90 px-4 py-2">
      <span className="grid h-[clamp(62px,5.2vw,82px)] w-[clamp(62px,5.2vw,82px)] place-items-center rounded-full bg-[#e4f2e5] text-[#08713f]">
        <BriefcaseBusiness
          className="h-[40px] w-[40px]"
          strokeWidth={1.8}
        />
      </span>

      <div>
        <h3 className="text-lg lg:text-2xl font-semibold leading-tight text-[#0b5638]">
          No open positions at the moment
        </h3>
        <p className="mt-2 max-w-[720px] text-sm lg:text-[15px] leading-relaxed text-[#33475b]">
          We are not hiring for any specific roles right now. But we are always
          on the lookout for passionate individuals who want to make a
          difference.
        </p>
      </div>

      <span className="h-[70%] w-px bg-[#d5e0d7]" />

      <div>
        <ResumeUploadButton variant="outline" />
        <p className="mt-2 text-[15px] leading-relaxed text-[#43556c]">
          We will keep your profile on file and reach out when a suitable
          opportunity arises.
        </p>
      </div>
    </div>
  );
}

export default function CareersClientContent() {
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [isNoneModalOpen, setIsNoneModalOpen] = useState(false);
  const [isAmanModalOpen, setIsAmanModalOpen] = useState(false);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [fetchedJobs, setFetchedJobs] = useState<JobOpening[]>([]);

  useEffect(() => {
    fetch("/api/careers/jobs")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.success && Array.isArray(data.data) && data.data.length > 0) {
          const mappedJobs: JobOpening[] = data.data.map((j: any) => ({
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
            icon: Users,
          }));
          setFetchedJobs(mappedJobs);
        }
      })
      .catch((err) => {
        console.error("Failed to load jobs dynamically:", err);
      });
  }, []);

  const activeJobOpenings = fetchedJobs;
  const openingCount = activeJobOpenings.length;

  const displayedJobs = showAllJobs ? activeJobOpenings : activeJobOpenings.slice(0, 8);

  return (
    <main className="bg-[#f8fbf6] text-[#0a1831]">
      <div className="flex min-h-screen w-full flex-col bg-white">
        {/* HERO */}
        <section className="relative isolate min-h-[330px] h-[460px] overflow-hidden md:aspect-[2110/745]">
          <Image
            src={heroImage}
            alt="Professionals networking at a sustainable organic expo"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(250,253,245,.96)_0%,rgba(250,253,245,.90)_34%,rgba(250,253,245,.25)_52%,rgba(0,0,0,0)_72%)]" />

          <div className="flex h-full w-full items-center px-4 lg:px-14">
            <div className="w-[50%]">
              <div className="">
                <div className="text-[18px] mt-2 font-semibold uppercase tracking-[0.28em] text-[#0a5536]">
                  <p>CAREER</p>
                </div>
                <div className="mb-6 h-[2.5px] w-20 bg-[#0a5536]" />

                <h1 className="max-w-[750px] text-lg lg:text-6xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#07553a]">
                  Be Part of
                  <br />
                  <span className="whitespace-nowrap">Something <span className="text-[#f5791b]">Bigger</span></span>
                </h1>

                <p className="mt-4 max-w-[650px] text-lg leading-[1.35] text-[#14253a]">
                  Build your career with Bharat Organic Expo and contribute to a
                  sustainable, healthier and more conscious tomorrow.
                </p>

                <div className="mt-4 grid max-w-[640px] grid-cols-4 divide-x divide-[#d7e1d8]">
                  {highlights.map(({ label, icon: Icon }) => (
                    <div key={label} className="px-3 text-center first:pl-0 last:pr-0">
                      <Icon
                        className="mx-auto h-[clamp(32px,3.4vh,42px)] w-[clamp(32px,3.4vh,42px)] text-[#08723e]"
                        strokeWidth={2.1}
                      />
                      <span className="mt-2 block whitespace-pre-line text-[clamp(12px,0.88vw,15px)] font-semibold leading-tight text-[#0c2235]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-[6%] right-12 w-fit max-w-[440px] rounded-sm bg-[#00683e]/90 px-4 py-2 text-[14px] font-semibold leading-snug text-white backdrop-blur-[1px]">
              Join the people who connect
              <br />
              business, nature and a better tomorrow.
            </div>
          </div>
        </section>

        {/* CURRENT OPENINGS */}
        <section
          id="current-openings"
          className={`relative isolate overflow-hidden bg-white ${openingCount === 0
            ? "aspect-[2172/405] px-2 lg:px-14 py-4 lg:py-4"
            : "px-2 lg:px-14 py-4 lg:py-4"
            }`}
        >
          {openingCount === 0 ? (
            <Image
              src="/assets/careers/a.png"
              alt=""
              fill
              sizes="100vw"
              className="-z-10 object-fill"
            />
          ) : null}

          <div className="relative z-10 flex flex-col">
            <div
              className={`${openingCount === 0
                ? "mb-[clamp(20px,2.5vw,38px)]"
                : "mb-[clamp(10px,1vh,14px)]"
                } flex shrink-0 items-end justify-between gap-6`}
            >
              <div className="flex items-start gap-4">
                <span className="relative mt-1 inline-block h-[clamp(34px,2.9vw,48px)] w-[clamp(42px,3.5vw,56px)] shrink-0">
                  <span className="absolute left-0 top-1 h-[72%] w-[48%] rotate-[-28deg] rounded-[100%_0_100%_0] bg-gradient-to-br from-[#88c018] to-[#0f6d2f]" />
                  <span className="absolute right-1 top-0 h-[84%] w-[52%] rotate-[28deg] rounded-[100%_0_100%_0] bg-gradient-to-br from-[#118a42] to-[#075b31]" />
                </span>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-sm lg:text-2xl font-semibold leading-[1.12] tracking-[-0.04em] text-[#0a1831]">
                      Current Openings{" "}
                      {openingCount > 0 ? (
                        <span className="align-baseline text-[0.78em] text-[#0c7b46]">
                          ({openingCount})
                        </span>
                      ) : null}
                    </h2>

                    {/* Temporary buttons */}
                    <div className="inline-flex items-center gap-2">
                      {/* 
                      <button
                        type="button"
                        onClick={() => setSelectedScore(58)}
                        className="rounded-full bg-[#075f38] px-3.5 py-1 text-xs font-bold text-white transition hover:bg-[#054c2d]"
                      >
                        58%
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedScore(72)}
                        className="rounded-full bg-[#075f38] px-3.5 py-1 text-xs font-bold text-white transition hover:bg-[#054c2d]"
                      >
                        72%
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedScore(38)}
                        className="rounded-full bg-[#075f38] px-3.5 py-1 text-xs font-bold text-white transition hover:bg-[#054c2d]"
                      >
                        38%
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsNoneModalOpen(true)}
                        className="rounded-full bg-[#075f38] px-3.5 py-1 text-xs font-bold text-white transition hover:bg-[#054c2d]"
                      >
                        None
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsAmanModalOpen(true)}
                        className="rounded-full bg-[#075f38] px-3.5 py-1 text-xs font-bold text-white transition hover:bg-[#054c2d]"
                      >
                        Aman
                      </button>
                      */}
                     
                    </div>
                  </div>
                  <p className="mt-2 text-[clamp(13px,1vw,17px)] leading-snug text-[#314256]">
                    Explore exciting opportunities and find the right role for
                    you.
                    {openingCount === 0 ? (
                      <span className="block">(Only active positions are listed here.)</span>
                    ) : null}
                  </p>
                </div>
              </div>

              {openingCount > 6 ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAllJobs(!showAllJobs);
                  }}
                  className="mb-1 inline-flex items-center gap-2 border-b-2 border-[#0a7140] pb-1 text-[14px] font-semibold text-[#0a643b] hover:text-[#074f2e] transition-colors"
                >
                  {showAllJobs ? "View Less Positions" : "View All Positions"}
                  <ArrowRight className={`h-[20px] w-[20px] transition-transform duration-300 ${showAllJobs ? "-rotate-90" : ""}`} />
                </button>
              ) : null}
            </div>

            <div className="flex-1">
              {openingCount > 0 ? (
                <div className="grid grid-cols-1 gap-[clamp(10px,0.85vw,14px)] md:grid-cols-2 lg:grid-cols-4  ">
                  {displayedJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              ) : (
                <EmptyOpenings />
              )}
            </div>
          </div>
        </section>

        {/* WHY WORK WITH US */}
        <section className="grid shrink-0 gap-5 border-y border-[#e4ebe3] bg-[linear-gradient(90deg,#f6fbf2_0%,#fbfdf8_100%)] px-4 lg:px-14 py-1 lg:py-2 lg:grid-cols-[1.15fr_2fr] lg:items-center">
          <div>
            <h2 className="text-lg lg:text-2xl font-semibold leading-none tracking-[-0.035em] text-[#07553a]">
              Why Work With Us?
            </h2>
            <p className="mt-2 max-w-[650px] text-sm lg:text-[15px] leading-[1.35] text-[#1f3145]">
              At Bharat Organic Expo, you’ll grow with a purpose-driven team and
              be part of a movement that creates lasting change.
            </p>
          </div>

          <div className="flex flex-wrap justify-end divide-x divide-[#d6e0d8] lg:ml-auto">
            {workReasons.map(({ label, icon: Icon }) => (
              <div key={label} className="px-4 sm:px-6 lg:px-10 text-center first:pl-0">

                <Icon
                  className="mx-auto h-8 w-8 text-[#08723e]"
                  strokeWidth={2.1}
                />
                <span className="mt-2 block whitespace-pre-line text-sm lg:text-[12px] font-semibold leading-tight text-[#0e2234]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="relative h-[160px] lg:h-[160px] mt-2 w-full shrink-0 overflow-hidden bg-white">
          <Image
            src="/assets/careers/aman6.png"
            alt="Careers footer banner"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </section>
      </div>

      <EligibilityModal
        isOpen={selectedScore !== null}
        score={selectedScore ?? 58}
        onClose={() => setSelectedScore(null)}
        onApply={() => {
          setSelectedScore(null);
          setIsNoneModalOpen(true);
        }}
      />

      <ApplicationFormModal
        isOpen={isNoneModalOpen}
        onClose={() => setIsNoneModalOpen(false)}
      />

      <ReviewSubmitModal
        isOpen={isAmanModalOpen}
        onClose={() => setIsAmanModalOpen(false)}
      />
    </main>
  );
}
