"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CalendarCheck,
  CircleCheck,
  FileSearch,
  GraduationCap,
  Headphones,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  Search,
  UserRound,
  UserRoundCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import leafSpray from "@/app/assets/icons/leafright.png";
import type { SubmittedApplication } from "../careerFlow";
import { useResultMessages } from "../submit-resume/SubmitResume";
import { FlowHero, FlowPage, FlowSteps, GREEN, INK, PhotoBox, ProfileMatch, SERIF, capitalise, card, outlineButton } from "./shared";

/* Careers → Application Submitted: the confirmation, what happens next and who to contact. */

const DEFAULT_SUPPORT_EMAIL = "careers@bharatorganicexpo.com";
/** Seconds before the page goes back to the home page */
const REDIRECT_SECONDS = 60;

const NEXT: { Icon: LucideIcon; tone: string; title: string; text: string; time: string }[] = [
  { Icon: FileSearch, tone: "#ef8a1c", title: "Application Review", text: "Our HR team will review your application and AI analysis report.", time: "1 – 3 Working Days" },
  { Icon: Users, tone: "#2f9a4a", title: "Shortlisting", text: "If your profile matches the requirements, you will be shortlisted.", time: "3 – 5 Working Days" },
  { Icon: PhoneCall, tone: "#1d7a3e", title: "Interview Process", text: "You will be contacted via email/phone for the next steps.", time: "5 – 10 Working Days" },
  { Icon: Mail, tone: "#1d7a3e", title: "Final Update", text: "You will receive the final status of your application by email.", time: "Within 2 Weeks" },
];

const VALUES: { Icon: LucideIcon; label: string }[] = [
  { Icon: Leaf, label: "Meaningful Work" },
  { Icon: Users, label: "Supportive Team" },
  { Icon: BarChart3, label: "Learning Opportunities" },
  { Icon: Heart, label: "Positive Impact" },
];

export default function SubmittedPage({ application: a }: { application: SubmittedApplication }) {
  const messages = useResultMessages();
  const supportEmail = messages?.supportEmail || DEFAULT_SUPPORT_EMAIL;
  const supportPhone = messages?.supportPhone;
  const firstName = (a.candidateName || "there").split(" ")[0];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // Back to the home page after a minute; the countdown is shown under the confirmation
  const router = useRouter();
  const [left, setLeft] = useState(REDIRECT_SECONDS);
  useEffect(() => {
    const started = Date.now();
    const timer = setInterval(() => setLeft(Math.max(0, REDIRECT_SECONDS - Math.floor((Date.now() - started) / 1000))), 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    if (left === 0) router.push("/");
  }, [left, router]);

  return (
    <FlowPage>
      <FlowHero
        crumb="Application Submitted"
        title="Application Submitted"
        subtitle="Thank you for your interest in joining Bharat Organic Expo!"
        image="/assets/careers/submitted-hero.png"
        imageAlt="Together for a Healthier Tomorrow — Healing People, Enriching Lives"
        imageClass="h-[160px] w-[64%]"
      />

      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-4 px-4 pb-6 pt-[12px] sm:px-8 xl:grid-cols-[minmax(0,1fr)_440px] xl:gap-[20px] lg:pb-[16px]">
        <div className="flex min-w-0 flex-col gap-[8px]">
          <div className="xl:mr-[8%]">
            <FlowSteps current={4} />
          </div>

          <div className={`${card} flex flex-col overflow-hidden xl:flex-1`}>
            {/* Confirmation */}
            <div className="relative isolate grid grid-cols-1 gap-4 overflow-hidden bg-[linear-gradient(100deg,#e9f5e4,#f3faef_55%,#fafdf7)] px-4 py-[12px] md:grid-cols-[200px_minmax(0,1fr)] md:items-center md:gap-5 md:pr-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={leafSpray.src} alt="" className="pointer-events-none absolute -right-[18px] -top-[22px] -z-10 hidden w-[120px] rotate-[8deg] opacity-80 md:block" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/careers/submitted-success.png" alt="" className="mx-auto hidden w-[190px] mix-blend-multiply md:block" />
              <div className="min-w-0">
                <span className="inline-flex items-center gap-[8px] rounded-full bg-[#dcefd7] px-[12px] py-[3px] text-[13px] text-[#1b4d2e]">
                  <CircleCheck className="h-[18px] w-[18px] text-white" fill="#1d7a3e" strokeWidth={2.4} />
                  Application Submitted Successfully
                </span>
                <h2 className="mt-[6px] text-[28px] font-semibold leading-[1.1] sm:text-[36px]" style={{ ...SERIF, color: INK }}>
                  Thank You, {firstName}!
                </h2>
                <p className="mt-[3px] text-[13.5px] leading-[1.4] text-[#33413a]">
                  Your application for <span className="font-medium text-[#1d7a3e]">{a.position}</span> has been submitted successfully. Our team will review your profile and get back to you soon.
                </p>
                <div className="mt-[8px] grid grid-cols-1 gap-[10px] sm:grid-cols-2">
                  <div className="flex gap-[12px] rounded-[10px] bg-white/90 px-[12px] py-[8px] shadow-[0_2px_10px_rgba(30,60,30,0.06)]">
                    <Mail className="mt-[2px] h-[26px] w-[26px] shrink-0" style={{ color: GREEN }} strokeWidth={1.8} />
                    <div className="min-w-0">
                      <p className="text-[13px] text-[#3d4a40]">Application ID</p>
                      <p className="text-[18px] font-semibold tracking-[0.01em]" style={{ ...SERIF, color: INK }}>
                        {a.id}
                      </p>
                      <p className="text-[11.5px] text-[#55635a]">Please keep this ID for future reference.</p>
                    </div>
                  </div>
                  <div className="flex gap-[12px] rounded-[10px] bg-white/90 px-[12px] py-[8px] shadow-[0_2px_10px_rgba(30,60,30,0.06)]">
                    <CalendarCheck className="mt-[2px] h-[26px] w-[26px] shrink-0" style={{ color: GREEN }} strokeWidth={1.8} />
                    <div className="min-w-0">
                      <p className="text-[13px] text-[#3d4a40]">Submitted On</p>
                      <p className="text-[16px] font-semibold" style={{ ...SERIF, color: INK }}>
                        {a.submittedOn}
                      </p>
                      {a.email && <p className="text-[11.5px] leading-snug text-[#55635a] [overflow-wrap:anywhere]">A confirmation email is on its way to {a.email}</p>}
                    </div>
                  </div>
                </div>
                <p className="mt-[8px] text-[12.5px] text-[#55635a]" aria-live="polite">
                  Taking you to the home page in <span className="font-semibold tabular-nums" style={{ color: INK }}>{left}s</span> ·{" "}
                  <Link href="/" className="font-medium text-[#1d7a3e] underline">
                    Go now
                  </Link>
                </p>
              </div>
            </div>

            {/* What happens next */}
            <div className="flex flex-1 flex-col justify-center border-t border-[#eef1ea] px-4 pb-[9px] pt-[8px] sm:px-5">
              <h3 className="text-[19px] font-semibold" style={{ ...SERIF, color: INK }}>
                What Happens Next?
              </h3>
              <p className="text-[13px] text-[#3d4a40]">Here is what you can expect after submitting your application.</p>
              <ol className="mt-[8px] grid grid-cols-2 gap-x-3 gap-y-4 lg:grid-cols-4">
                {NEXT.map(({ Icon, tone, title, text, time }, idx) => (
                  <li key={title} className="relative flex flex-col items-center text-center">
                    {idx < NEXT.length - 1 && (
                      <span className="absolute left-[calc(50%+26px)] top-[19px] hidden h-0 w-[calc(100%-52px)] border-t-2 border-dotted border-[#b9cfb4] lg:block">
                        <span className="absolute left-1/2 top-[-5px] h-[8px] w-[8px] -translate-x-1/2 rounded-full border border-[#9fbd98] bg-white" />
                      </span>
                    )}
                    <span className="grid h-[38px] w-[38px] place-items-center rounded-[10px] text-white shadow-[0_4px_10px_rgba(30,60,30,0.15)]" style={{ background: tone }}>
                      <Icon className="h-[19px] w-[19px]" />
                    </span>
                    <p className="mt-[6px] text-[15px] font-semibold" style={{ ...SERIF, color: INK }}>
                      {title}
                    </p>
                    <p className="mt-[1px] text-[12px] leading-[1.3] text-[#3d4a40]">{text}</p>
                    <span className="mt-[4px] rounded-[6px] border border-[#dcebd8] bg-[#eef6ec] px-[10px] py-[1px] text-[12px] text-[#26352c]">{time}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Join our mission */}
          <div className="grid grid-cols-1 items-center gap-4 overflow-hidden rounded-[12px] bg-[linear-gradient(90deg,rgba(233,243,228,0.9),rgba(251,248,240,0)_75%)] md:grid-cols-[170px_minmax(0,1fr)_auto]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/careers/submitted-hands.png" alt="A young plant held in cupped hands" className="hidden h-[88px] w-full object-cover [mask-image:linear-gradient(90deg,#000_70%,transparent)] md:block" />
            <div className="px-4 py-[6px] md:px-0">
              <p className="text-[14px] font-semibold text-[#d9730d]" style={SERIF}>
                Join Our Mission
              </p>
              <p className="text-[20px] italic leading-tight xl:whitespace-nowrap" style={{ ...SERIF, color: INK }}>
                Together for a Healthier Tomorrow
              </p>
              <p className="mt-[3px] text-[12px] leading-[1.4] text-[#3d4a40]">
                At Bharat Organic Expo, we believe in the power of organic living, Ayurveda and sustainable communities. We are excited about the possibility of having you on our team!
              </p>
            </div>
            <ul className="grid grid-cols-4 gap-[4px] px-4 pb-[10px] md:pb-0 md:pr-2">
              {VALUES.map(({ Icon, label }) => (
                <li key={label} className="flex flex-col items-center">
                  <span className="grid h-[44px] w-[44px] place-items-center rounded-full bg-white shadow-[0_3px_12px_rgba(30,60,30,0.1)]">
                    <Icon className="h-[22px] w-[22px]" style={{ color: GREEN }} />
                  </span>
                  <span className="mt-[4px] w-[66px] text-center text-[10.5px] leading-tight text-[#26352c]">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Right ── */}
        <aside className="relative flex min-w-0 flex-col gap-[8px]">
          <div className={`${card} px-[12px] py-[8px]`}>
            <h3 className="text-[17px] font-semibold" style={{ ...SERIF, color: INK }}>
              Your Application Summary
            </h3>
            <div className="mt-[5px] flex gap-[14px]">
              <PhotoBox src={a.photo} name={a.candidateName} className="h-[118px] w-[110px] shrink-0" />
              <div className="min-w-0">
                <p className="truncate text-[18px] font-semibold" style={{ ...SERIF, color: INK }}>
                  {a.candidateName}
                </p>
                <ul className="mt-[5px] space-y-[5px] text-[13px] text-[#26352c]">
                  {a.email && (
                    <li className="flex items-center gap-[8px]">
                      <Mail className="h-[15px] w-[15px] shrink-0" style={{ color: GREEN }} />
                      <span className="truncate">{a.email}</span>
                    </li>
                  )}
                  {a.phone && (
                    <li className="flex items-center gap-[8px]">
                      <Phone className="h-[15px] w-[15px] shrink-0" style={{ color: GREEN }} />
                      {a.phone}
                    </li>
                  )}
                  {a.location && (
                    <li className="flex items-center gap-[8px]">
                      <MapPin className="h-[15px] w-[15px] shrink-0" style={{ color: GREEN }} />
                      {a.location}
                    </li>
                  )}
                  {a.gender && (
                    <li className="flex items-center gap-[8px]">
                      <UserRound className="h-[15px] w-[15px] shrink-0" style={{ color: GREEN }} />
                      {capitalise(a.gender)}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className={`${card} flex gap-[12px] !bg-[#f3f9ef] px-[12px] py-[8px]`}>
            <UserRoundCheck className="h-[48px] w-[48px] shrink-0" style={{ color: GREEN }} strokeWidth={1.4} />
            <div className="min-w-0">
              <p className="text-[13px] text-[#26352c]">Position Applied For</p>
              <p className="text-[18px] font-semibold leading-tight text-[#1d7a3e]" style={SERIF}>
                {a.position}
              </p>
              <div className="mt-[5px] flex flex-wrap gap-x-[12px] gap-y-1 text-[12.5px] text-[#26352c]">
                {a.job?.type && (
                  <span className="flex items-center gap-[4px]">
                    <BriefcaseBusiness className="h-[14px] w-[14px] text-[#d9730d]" />
                    {a.job.type}
                  </span>
                )}
                {a.job?.education && (
                  <span className="flex items-center gap-[4px]">
                    <GraduationCap className="h-[14px] w-[14px] text-[#d9730d]" />
                    {a.job.education}
                  </span>
                )}
                {a.job?.location && (
                  <span className="flex items-center gap-[4px]">
                    <MapPin className="h-[14px] w-[14px] text-[#d9730d]" />
                    {a.job.location}
                  </span>
                )}
              </div>
            </div>
          </div>

          <ProfileMatch score={a.aiMatchScore} />

          <div className={`${card} px-[14px] py-[10px]`}>
            <div className="flex gap-[12px]">
              <span className="grid h-[40px] w-[40px] shrink-0 place-items-center rounded-full bg-[#fdebc8]">
                <Search className="h-[20px] w-[20px] text-[#1b4d2e]" strokeWidth={2.6} />
              </span>
              <div className="min-w-0">
                <h3 className="text-[16px] font-semibold" style={{ ...SERIF, color: INK }}>
                  Keep Exploring Opportunities
                </h3>
                <p className="mt-[1px] text-[12.5px] leading-[1.4] text-[#55635a]">Would you like to explore other suitable opportunities? We will notify you about relevant openings.</p>
              </div>
            </div>
            <Link href="/careers#current-openings" className={`${outlineButton} mx-auto mt-[8px] h-[36px] w-[260px] max-w-full text-[14px]`}>
              View Other Opportunities
              <ArrowRight className="h-[17px] w-[17px]" />
            </Link>
          </div>

          <div className={`${card} flex flex-col justify-center px-[14px] py-[10px] xl:flex-1`}>
            <div className="flex gap-[12px]">
              <span className="grid h-[40px] w-[40px] shrink-0 place-items-center rounded-full bg-[#1d5a37] text-white">
                <Headphones className="h-[20px] w-[20px]" />
              </span>
              <div className="min-w-0">
                <h3 className="text-[16px] font-semibold" style={{ ...SERIF, color: INK }}>
                  Need Help?
                </h3>
                <p className="mt-[1px] text-[12.5px] leading-[1.4] text-[#55635a]">If you have any questions regarding your application, feel free to reach us.</p>
              </div>
            </div>
            <div className="mt-[8px] flex flex-wrap items-center justify-between gap-x-[10px] gap-y-[6px]">
              <a href={`mailto:${supportEmail}?subject=${encodeURIComponent(`Application ${a.id}`)}`} className={`${outlineButton} h-[36px] shrink-0 px-[18px] text-[14px]`}>
                Contact HR Team
              </a>
              <div className="min-w-0 space-y-[3px] text-[12px] text-[#26352c]">
                <a href={`mailto:${supportEmail}`} className="flex items-center gap-[7px] hover:underline">
                  <Mail className="h-[15px] w-[15px]" style={{ color: GREEN }} />
                  {supportEmail}
                </a>
                {supportPhone && (
                  <a href={`tel:${supportPhone.replace(/\s/g, "")}`} className="flex items-center gap-[7px] hover:underline">
                    <Phone className="h-[15px] w-[15px]" style={{ color: GREEN }} />
                    {supportPhone}
                  </a>
                )}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </FlowPage>
  );
}
