"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ClipboardList,
  FileCheck,
  Mail,
  Phone,
  Trophy,
  Users,
} from "lucide-react";

const finalAsset = (file: string) => `/assets/finalcomplete/${file}`;

const assets = {
  logo: finalAsset("logo.png"),
  topSlogan: finalAsset("top-slogan.png"),
  successCheck: finalAsset("success-check.png"),
  leafLeft: finalAsset("leaf-left.png"),
  leafRight: finalAsset("leaf-right.png"),
  quoteLeaf: finalAsset("quote-leaf.png"),
  rightPanel: finalAsset("right-panel.png"),
};

const brandHeader = {
  title: "Bharat Organic Expo",
  tagline: "People • Ideas • Partnerships for a Greener Tomorrow",
};

const applicationData = {
  id: "BOE2027-000458",
  candidateName: "Vijay Sharma",
  position: "Sales Manager – Domestic Exhibition Sales & Sponsorships",
  submittedOn: "14 September 2026, 04:32 PM",
  aiMatchScore: 72,
};

const recruitmentSteps = [
  {
    num: 1,
    icon: ClipboardList,
    title: "Application\nReceived",
    desc: "Your application\nis submitted",
    active: true,
  },
  {
    num: 2,
    icon: Users,
    title: "HR Review",
    desc: "Our team will\nreview your profile",
    active: false,
  },
  {
    num: 3,
    icon: FileCheck,
    title: "Shortlisted",
    desc: "You will be contacted\nif shortlisted",
    active: false,
  },
  {
    num: 4,
    icon: CalendarDays,
    title: "Interview",
    desc: "Online or in-person\ninteraction",
    active: false,
  },
  {
    num: 5,
    icon: Trophy,
    title: "Final Decision",
    desc: "Selection and\noffer process",
    active: false,
  },
];



function SuccessSidebar({ onClose }: { onClose: () => void }) {
  return (
    <aside className="relative h-full min-h-0 overflow-hidden bg-[#eef8f2]">
      <Image
        src={assets.rightPanel}
        alt="Grow Your Career Make a Bigger Impact"
        width={348}
        height={978}
        priority
        className="h-full w-full object-fill"
      />

      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-[14px] top-[16px] z-10 h-[32px] w-[32px]"
      />

      <Link
        href="/careers"
        aria-label="Back to Careers"
        className="absolute right-[48px] top-[62px] z-10 h-[22px] w-[132px]"
      />
    </aside>
  );
}

/* =========================================================
   APPLICATION SUCCESS MODAL
   ========================================================= */

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApplicationSuccessModal({ isOpen, onClose }: SuccessModalProps) {
  const circumference = 2 * Math.PI * 38;
  const offset = circumference - (applicationData.aiMatchScore / 100) * circumference;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3">
      <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[5px]" onClick={onClose} />
      <div className="relative z-10 flex max-h-[95vh] w-[85%] max-w-[1300px] overflow-hidden rounded-[18px] bg-[#fbfcf9] shadow-[0_30px_90px_rgba(0,0,0,.28)]">

        {/* ===== LEFT SIDE ===== */}
        <div className="relative flex w-[76.2%] flex-col overflow-hidden px-[38px] pb-[16px] pt-[18px]">

          {/* HEADER */}
          <div className="flex shrink-0 items-start justify-between">
            <Image
              src={assets.logo}
              alt={brandHeader.title}
              width={345}
              height={95}
              priority
              className="h-[62px] w-[226px] object-contain object-left-top"
            />
          </div>

          {/* TOGETHER TEXT */}
          <div className="absolute right-[92px] top-[30px]">
            <Image
              src={assets.topSlogan}
              alt="Together for a Healthier Tomorrow"
              width={210}
              height={140}
              className="h-[112px] w-[168px] object-contain object-right-top"
            />
          </div>

          {/* BIG CHECK MARK */}
          <div className="relative mt-[2px] flex shrink-0 justify-center">
            <Image
              src={assets.leafLeft}
              alt=""
              width={125}
              height={90}
              className="absolute left-[31%] top-[28px] h-[46px] w-[64px] object-contain"
            />
            <Image
              src={assets.successCheck}
              alt=""
              width={150}
              height={150}
              priority
              className="h-[112px] w-[112px] object-contain"
            />
            <Image
              src={assets.leafRight}
              alt=""
              width={120}
              height={105}
              className="absolute right-[30%] top-[24px] h-[52px] w-[60px] object-contain"
            />
          </div>

          {/* SUCCESS TITLE */}
          <h1 className="mt-[2px] shrink-0 text-center text-[30px] font-black text-[#075241] leading-tight">
            Application Submitted Successfully!
          </h1>

          <p className="shrink-0 text-center text-[15px] font-semibold text-[#123963] mt-[3px]">
            Thank you for your interest in joining our team.
          </p>

          <p className="shrink-0 text-center text-[12px] text-[#58708c] mt-[2px] max-w-[520px] mx-auto leading-[1.35]">
            Your application has been received and is under review. Our HR team will get in touch with you if your profile is shortlisted.
          </p>

          {/* APPLICATION DETAILS + QUOTE */}
          <div className="shrink-0 mt-[12px] grid grid-cols-[1fr_250px] gap-[18px] rounded-[10px] border border-[#e4ebe5] bg-[#f6faf7] px-[20px] py-[10px]">
            <div className="space-y-[4px]">
              <div className="grid grid-cols-[160px_1fr] gap-[8px]">
                <span className="text-[12px] font-bold text-[#58708c]">Application ID</span>
                <span className="text-[13px] font-black text-[#123963]">{applicationData.id}</span>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-[8px]">
                <span className="text-[12px] font-bold text-[#58708c]">Candidate Name</span>
                <span className="text-[13px] font-black text-[#123963]">{applicationData.candidateName}</span>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-[8px]">
                <span className="text-[12px] font-bold text-[#58708c]">Position Applied</span>
                <span className="text-[13px] font-black text-[#123963]">{applicationData.position}</span>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-[8px]">
                <span className="text-[12px] font-bold text-[#58708c]">Submitted On</span>
                <span className="text-[13px] font-black text-[#123963]">{applicationData.submittedOn}</span>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-[8px] items-center">
                <span className="text-[12px] font-bold text-[#58708c]">AI Match Score</span>
                <div className="flex items-center gap-[10px]">
                  <div className="relative h-[38px] w-[38px]">
                    <svg className="h-full w-full -rotate-90" viewBox="0 0 90 90">
                      <circle cx="45" cy="45" r="38" fill="none" stroke="#d7e4dd" strokeWidth="7" />
                      <circle
                        cx="45" cy="45" r="38" fill="none" stroke="#28aa42" strokeWidth="7"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[11px] font-black text-[#123963]">{applicationData.aiMatchScore}%</span>
                    </div>
                  </div>
                  <span className="text-[13px] font-black text-[#11813e]">Good Match!</span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="flex flex-col items-center justify-center border-l border-[#dfe7e1] px-[18px] text-center">
              <Image
                src={assets.quoteLeaf}
                alt=""
                width={110}
                height={100}
                className="mb-[2px] h-[46px] w-[50px] object-contain"
              />
              <p className="text-[12px] italic leading-[1.3] text-[#123963]">
                &ldquo;People with purpose create a greener tomorrow.&rdquo;
              </p>
            </div>
          </div>

          {/* WHAT HAPPENS NEXT */}
          <div className="shrink-0 mt-[12px]">
            <h2 className="text-[17px] font-black text-[#123963]">What Happens Next?</h2>
            <p className="mt-[2px] text-[12px] text-[#58708c]">Here is our typical recruitment process:</p>

            <div className="mt-[10px] relative">
              {/* Connecting line */}
              <div className="absolute left-[40px] right-[40px] top-[18px] h-[2px] bg-[#d9e0e7]" />
              <div className="absolute left-[40px] top-[18px] h-[2px] w-[calc(25%-20px)] bg-[#0a874d]" />

              <div className="grid grid-cols-5 gap-[6px]">
                {recruitmentSteps.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.num} className="flex flex-col items-center text-center">
                      <div
                        className={`relative z-10 grid h-[32px] w-[32px] place-items-center rounded-full text-[13px] font-black ${step.active
                            ? "bg-[#078346] text-white shadow-[0_2px_8px_rgba(7,131,70,0.3)]"
                            : "bg-[#dfe8f0] text-[#123963]"
                          }`}
                      >
                        {step.num}
                      </div>
                      <div className="mt-[6px] grid h-[34px] w-[34px] place-items-center rounded-[8px] bg-[#f0f8f2] border border-[#dce8e0]">
                        <StepIcon className="h-[18px] w-[18px] text-[#087447]" strokeWidth={2} />
                      </div>
                      <span className="mt-[4px] text-[10.5px] font-black text-[#123963] leading-tight whitespace-pre-line">
                        {step.title}
                      </span>
                      <span className="mt-[1px] text-[8.5px] text-[#58708c] leading-tight whitespace-pre-line">
                        {step.desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* EMAIL NOTE + HELP */}
          <div className="shrink-0 mt-[10px] flex items-center justify-between rounded-[8px] border border-[#e4ebe5] bg-[#f6faf7] px-[14px] py-[8px]">
            <div className="flex items-center gap-[8px]">
              <div className="grid h-[30px] w-[30px] place-items-center rounded-full bg-[#e8f5ec]">
                <Mail className="h-[16px] w-[16px] text-[#087447]" />
              </div>
              <p className="text-[11px] text-[#29445f] leading-[1.4]">
                You will receive an email confirmation with the application details shortly.
                <br />
                Please also check your spam/junk folder.
              </p>
            </div>
            <div className="flex items-center gap-[6px] shrink-0 ml-[16px]">
              <span className="text-[11px] font-bold text-[#58708c]">Need Help?</span>
              <Phone className="h-[13px] w-[13px] text-[#087447]" />
              <span className="text-[12px] font-bold text-[#123963]">+91 92056 45544</span>
            </div>
          </div>

          {/* BOTTOM BUTTONS */}
          <div className="mt-[12px] flex shrink-0 items-center justify-between">
            <Link
              href="/careers"
              className="flex items-center gap-[6px] text-[13px] font-bold text-[#0d5d3c] hover:underline"
            >
              <ArrowLeft className="h-[15px] w-[15px]" />
              Back to Careers
            </Link>
            <Link
              href="/careers"
              className="flex items-center gap-[8px] rounded-[8px] bg-[#08743e] px-[22px] py-[10px] text-[13px] font-black text-white shadow-md hover:bg-[#076637] transition-colors"
            >
              Explore More Opportunities
              <ArrowRight className="h-[16px] w-[16px]" />
            </Link>
          </div>
        </div>

        {/* ===== RIGHT SIDEBAR ===== */}
        <div className="w-[23.8%] shrink-0 self-stretch">
          <SuccessSidebar onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
