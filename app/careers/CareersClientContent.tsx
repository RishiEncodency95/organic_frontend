"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Globe2,
  Lightbulb,
  MapPin,
  Megaphone,
  Palette,
  PenLine,
  Sprout,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { EligibilityModal } from "./submit-resume/page";
import { ApplicationFormModal } from "./application-form/page";
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
};

const showOpenings = true;

const allJobOpenings: JobOpening[] = [
  {
    id: "business-development-manager",
    title: "Business Development Manager",
    department: "Sales & Exhibitor Relations",
    location: "New Delhi",
    type: "Full Time",
    experience: "3–6 Years",
    description:
      "Acquire exhibitors, build partnerships and drive participation from organic, natural and sustainable brands.",
    icon: Users,
  },
  {
    id: "digital-marketing-executive",
    title: "Digital Marketing Executive",
    department: "Marketing & Communications",
    location: "New Delhi",
    type: "Full Time",
    experience: "2–4 Years",
    description:
      "Plan and execute digital campaigns, manage social media and content to promote the expo.",
    icon: Megaphone,
  },
  {
    id: "event-operations-executive",
    title: "Event Operations Executive",
    department: "Event Management",
    location: "New Delhi",
    type: "Full Time",
    experience: "1–3 Years",
    description:
      "Coordinate event logistics, vendor management and on-ground execution during the expo.",
    icon: CalendarDays,
  },
  {
    id: "content-writer",
    title: "Content Writer",
    department: "Content & Media",
    location: "New Delhi",
    type: "Hybrid",
    experience: "1–3 Years",
    description:
      "Create engaging content for website, brochures, social media and event communications.",
    icon: PenLine,
  },
  {
    id: "partnerships-alliances-executive",
    title: "Partnerships & Alliances Executive",
    department: "Strategic Partnerships",
    location: "New Delhi",
    type: "Full Time",
    experience: "2–5 Years",
    description:
      "Develop and manage partnerships with government bodies, industry associations and other stakeholders.",
    icon: Users,
  },
  {
    id: "sales-manager-domastic",
    title: "Sales Manager - Domastic Exhibitor Sales & Sponsorsip",
    department: "Sales",
    location: "New Delhi",
    type: "Full Time",
    experience: "5–10 Years",
    description:
      "Design creative assets for digital and print media, including banners, brochures, social media posts and event branding.",
    icon: Palette,
  },
];

const jobOpenings: JobOpening[] = showOpenings ? allJobOpenings : [];

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
    <article className="flex min-h-full flex-col rounded-[10px] border border-[#dfe6df] bg-white/95 px-[clamp(16px,1.15vw,22px)] py-[clamp(14px,1.25vh,20px)] shadow-[0_2px_10px_rgba(10,66,44,0.03)]">
      <div className="flex gap-3">
        <span className="grid h-[clamp(50px,5.1vh,62px)] w-[clamp(50px,5.1vh,62px)] shrink-0 place-items-center rounded-full bg-[#eff8ef] text-[#08753c]">
          <Icon
            className="h-[clamp(25px,2.75vh,34px)] w-[clamp(25px,2.75vh,34px)]"
            strokeWidth={2.1}
          />
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="text-[clamp(15px,1.05vw,20px)] font-extrabold leading-tight text-[#0a1831]">
            {job.title}
          </h3>
          <span className="mt-1.5 inline-flex max-w-full rounded-[4px] bg-[#eef2f3] px-2.5 py-1 text-[clamp(11px,0.74vw,14px)] leading-none text-[#34485b]">
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
    <div className="mx-auto grid w-[96%] grid-cols-[80px_minmax(0,1fr)_1px_300px] items-center gap-[clamp(18px,2vw,32px)] rounded-[24px] bg-[#eef8e9]/90 px-[clamp(34px,4vw,62px)] py-[clamp(14px,1.2vw,20px)]">
      <span className="grid h-[clamp(62px,5.2vw,82px)] w-[clamp(62px,5.2vw,82px)] place-items-center rounded-full bg-[#e4f2e5] text-[#08713f]">
        <BriefcaseBusiness
          className="h-[clamp(34px,3vw,46px)] w-[clamp(34px,3vw,46px)]"
          strokeWidth={1.8}
        />
      </span>

      <div>
        <h3 className="text-[clamp(16px,1.18vw,22px)] font-extrabold leading-tight text-[#0b5638]">
          No open positions at the moment
        </h3>
        <p className="mt-2 max-w-[720px] text-[clamp(11px,0.8vw,14px)] leading-relaxed text-[#33475b]">
          We are not hiring for any specific roles right now. But we are always
          on the lookout for passionate individuals who want to make a
          difference.
        </p>
      </div>

      <span className="h-[70%] w-px bg-[#d5e0d7]" />

      <div>
        <ResumeUploadButton variant="outline" />
        <p className="mt-3 text-[clamp(11px,0.8vw,14px)] leading-relaxed text-[#43556c]">
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
  const openingCount = jobOpenings.length;

  return (
    <main className="bg-[#f8fbf6] text-[#0a1831]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1480px] flex-col bg-white">
        {/* HERO */}
        <section className="relative isolate min-h-[330px] overflow-hidden md:aspect-[2110/745]">
          <Image
            src={heroImage}
            alt="Professionals networking at a sustainable organic expo"
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(250,253,245,.96)_0%,rgba(250,253,245,.90)_34%,rgba(250,253,245,.25)_52%,rgba(0,0,0,0)_72%)]" />

          <div className="flex h-full items-center px-[clamp(28px,5.2vw,84px)] py-[clamp(22px,2.2vh,36px)]">
            <div className="w-[47%] max-w-[690px]">
              <div className="translate-y-[clamp(10px,1.7vw,28px)]">
                <div className="mb-[clamp(6px,0.8vh,12px)] text-[clamp(15px,1.15vw,20px)] font-extrabold uppercase tracking-[0.28em] text-[#0a5536]">
                  Career
                </div>
                <div className="mb-[clamp(9px,1.1vh,15px)] h-[2.5px] w-14 bg-[#0a5536]" />

                <h1 className="max-w-[750px] text-[clamp(48px,4.5vw,80px)] font-black leading-[0.98] tracking-[-0.04em] text-[#07553a]">
                  Be Part of
                  <br />
                  <span className="whitespace-nowrap">Something <span className="text-[#f5791b]">Bigger</span></span>
                </h1>

                <p className="mt-[clamp(12px,1.4vh,18px)] max-w-[650px] text-[clamp(16px,1.25vw,22px)] leading-[1.35] text-[#14253a]">
                  Build your career with Bharat Organic Expo and contribute to a
                  sustainable, healthier and more conscious tomorrow.
                </p>

                <div className="mt-[clamp(18px,2.2vh,30px)] grid max-w-[640px] grid-cols-4 divide-x divide-[#d7e1d8]">
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

            <div className="absolute bottom-[6%] right-0 w-fit max-w-[440px] rounded-l-[4px] bg-[#00683e]/90 px-[clamp(16px,1.5vw,26px)] py-[clamp(10px,1.2vh,14px)] text-[clamp(13px,1.05vw,17px)] font-semibold leading-snug text-white backdrop-blur-[1px]">
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
            ? "aspect-[2172/405] px-[clamp(48px,4.8vw,82px)] py-[clamp(14px,1.2vw,22px)]"
            : "px-[clamp(24px,3.4vw,52px)] py-[clamp(12px,1.4vh,20px)]"
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
                    <h2 className="text-[clamp(26px,2.2vw,38px)] font-black leading-[1.12] tracking-[-0.04em] text-[#0a1831]">
                      Current Openings{" "}
                      {openingCount > 0 ? (
                        <span className="align-baseline text-[0.78em] text-[#0c7b46]">
                          ({openingCount})
                        </span>
                      ) : null}
                    </h2>

                    {/* Temporary buttons */}
                    <div className="inline-flex items-center gap-2">
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

              {openingCount > 0 ? (
                <a
                  href="#current-openings"
                  className="mb-1 inline-flex items-center gap-2 border-b-2 border-[#0a7140] pb-1 text-[clamp(14px,1vw,17px)] font-extrabold text-[#0a643b] hover:text-[#074f2e] transition-colors"
                >
                  View All Positions <ArrowRight className="h-[20px] w-[20px]" />
                </a>
              ) : null}
            </div>

            <div className="flex-1">
              {openingCount > 0 ? (
                <div className="grid grid-cols-1 gap-[clamp(10px,0.85vw,14px)] md:grid-cols-2 xl:grid-cols-3">
                  {jobOpenings.slice(0, 6).map((job) => (
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
        <section className="grid shrink-0 gap-5 border-y border-[#e4ebe3] bg-[linear-gradient(90deg,#f6fbf2_0%,#fbfdf8_100%)] px-[clamp(24px,3.4vw,52px)] py-[clamp(14px,1.45vw,22px)] lg:grid-cols-[1.15fr_2fr] lg:items-center">
          <div>
            <h2 className="text-[clamp(28px,2.25vw,42px)] font-black leading-none tracking-[-0.035em] text-[#07553a]">
              Why Work With Us?
            </h2>
            <p className="mt-2 max-w-[650px] text-[clamp(12px,0.9vw,16px)] leading-[1.35] text-[#1f3145]">
              At Bharat Organic Expo, you’ll grow with a purpose-driven team and
              be part of a movement that creates lasting change.
            </p>
          </div>

          <div className="grid grid-cols-4 divide-x divide-[#d6e0d8]">
            {workReasons.map(({ label, icon: Icon }) => (
              <div key={label} className="px-4 text-center">
                <Icon
                  className="mx-auto h-[clamp(34px,3.6vh,46px)] w-[clamp(34px,3.6vh,46px)] text-[#08723e]"
                  strokeWidth={2.1}
                />
                <span className="mt-2 block whitespace-pre-line text-[clamp(12px,0.9vw,16px)] font-semibold leading-tight text-[#0e2234]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="relative aspect-[2172/360] w-full shrink-0 overflow-hidden bg-white">
          <Image
            src="/assets/careers/aman.png"
            alt="Careers footer banner"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="relative z-10 grid h-full grid-cols-[39%_1fr_260px] items-center gap-7 px-[clamp(24px,3.4vw,52px)]">
            <div />
            <div>
              <h2 className="text-[clamp(32px,2.85vw,54px)] font-black leading-none tracking-[-0.035em] text-[#07553a]">
                Don’t See the Right Role?
              </h2>
              <p className="mt-3 max-w-[720px] text-[clamp(15px,1.16vw,21px)] leading-[1.4] text-[#2a3c4e]">
                We are always looking for passionate individuals. Send us your
                resume and we will reach out when a suitable opportunity arises.
              </p>
            </div>
            <div className="self-start pt-[clamp(18px,2vw,34px)] text-right">
              <ResumeUploadButton variant="solid" />
            </div>
          </div>
        </section>
      </div>

      <EligibilityModal
        isOpen={selectedScore !== null}
        score={selectedScore ?? 58}
        onClose={() => setSelectedScore(null)}
      />

      <ApplicationFormModal
        isOpen={isNoneModalOpen}
        onClose={() => setIsNoneModalOpen(false)}
      />
    </main>
  );
}
