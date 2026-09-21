"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter, Kaushan_Script } from "next/font/google";
import {
  Handshake,
  UsersRound,
  Mic,
  Camera,
  Star,
  Lock,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  ImageIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Fonts (smooth, no heavy bold)                                      */
/* ------------------------------------------------------------------ */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const script = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

/* ------------------------------------------------------------------ */
/*  Images — change these paths if your assets live somewhere else     */
/* ------------------------------------------------------------------ */
const HERO_IMAGE = "/assets/careers/image.png"; // crowd / expo photo (right side of hero)

/* ------------------------------------------------------------------ */
/*  Shared classes                                                     */
/* ------------------------------------------------------------------ */
const inputCls =
  "h-10 w-full rounded-md border border-[#d8dfdb] bg-white px-3.5 text-[13px] text-[#1f2937] placeholder:text-[#9ca3af] outline-none transition-colors focus:border-[#0b6b3d] focus:ring-1 focus:ring-[#0b6b3d]";
const labelCls = "mb-1.5 block text-[14px] leading-5 text-[#1f2937]";
const Req = () => <span className="text-[#ef4444]"> *</span>;

/* ------------------------------------------------------------------ */
/*  Small SVG helpers                                                  */
/* ------------------------------------------------------------------ */
type IconProps = { className?: string; strokeWidth?: number };

const BoothIcon = ({ className, strokeWidth = 1.5 }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <rect x="3" y="3" width="18" height="10" rx="1" />
    <rect x="8" y="6" width="8" height="4" rx="0.5" />
    <path d="M6 13v8M18 13v8M4 21h4M16 21h4" />
  </svg>
);

const GroupIcon = ({ className, strokeWidth = 1.5 }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <circle cx="12" cy="5" r="2.5" />
    <circle cx="6" cy="11.5" r="2.5" />
    <circle cx="18" cy="11.5" r="2.5" />
    <path d="M2 21a4 4 0 0 1 8 0" />
    <path d="M14 21a4 4 0 0 1 8 0" />
    <path d="M9.5 9.5a3 3 0 0 1 5 0" />
  </svg>
);

const IndiaFlag = () => (
  <svg viewBox="0 0 24 16" className="h-4 w-6 rounded-[2px]" aria-hidden>
    <rect width="24" height="5.34" y="0" fill="#ff9933" />
    <rect width="24" height="5.34" y="5.33" fill="#ffffff" />
    <rect width="24" height="5.34" y="10.66" fill="#138808" />
    <circle cx="12" cy="8" r="2.1" fill="none" stroke="#000080" strokeWidth="0.7" />
  </svg>
);

const Leaf = ({
  gid,
  className,
  style,
}: {
  gid: string;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg viewBox="0 0 120 240" className={className} style={style} aria-hidden>
    <defs>
      <linearGradient id={gid} x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stopColor="#14602a" />
        <stop offset="1" stopColor="#62b648" />
      </linearGradient>
    </defs>
    <path
      d="M12 236C-4 150 22 58 104 4c16 88-6 190-92 232Z"
      fill={`url(#${gid})`}
    />
    <path
      d="M12 236C46 150 76 78 104 4"
      stroke="#e3f6d8"
      strokeOpacity=".55"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M38 192l34 8M52 152l40 8M68 112l34 4M82 72l22-8"
      stroke="#e3f6d8"
      strokeOpacity=".35"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Reusable pieces                                                    */
/* ------------------------------------------------------------------ */
const StepHeading = ({
  n,
  children,
  className = "mb-3",
}: {
  n: number;
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`flex items-center gap-[22px] ${className}`}>
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0b5d3b] text-[14px] font-medium text-white">
      {n}
    </span>
    <h3 className="text-[17px] font-medium leading-6 text-[#111d17]">
      {children}
    </h3>
  </div>
);

const StarRating = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (val: number) => void;
}) => (
  <div className="flex items-center gap-3">
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        key={star}
        type="button"
        aria-label={`${star} star`}
        onClick={() => onChange(star)}
        className="group focus:outline-none"
      >
        <Star
          className={`h-6 w-6 transition-colors ${star <= value
            ? "fill-[#f59e0b] text-[#f59e0b]"
            : "fill-transparent text-[#4b5563] group-hover:text-[#f59e0b]"
            }`}
          strokeWidth={1.4}
        />
      </button>
    ))}
  </div>
);

const Radio = ({
  checked,
  onChange,
  value,
  children,
}: {
  checked: boolean;
  onChange: (v: string) => void;
  value: string;
  children: React.ReactNode;
}) => (
  <label className="flex cursor-pointer items-center gap-[14px] text-[14px] text-[#1f2937]">
    <input
      type="radio"
      name="consent"
      value={value}
      checked={checked}
      onChange={() => onChange(value)}
      className="sr-only"
    />
    <span
      className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border transition-colors ${checked ? "border-[#0b6b3d] bg-[#0b6b3d]" : "border-[#b8c2bd] bg-white"
        }`}
    >
      {checked && (
        <span className="flex h-[14px] w-[14px] items-center justify-center rounded-full bg-white">
          <span className="h-[8px] w-[8px] rounded-full bg-[#0b6b3d]" />
        </span>
      )}
    </span>
    {children}
  </label>
);

const UploadBox = ({ label, name }: { label: string; name: string }) => {
  const [fileName, setFileName] = useState("");
  return (
    <div>
      <span className={labelCls}>{label}</span>
      <label className="flex h-[79px] cursor-pointer items-center justify-center gap-[38px] rounded-md border border-[#dde3e0] bg-white transition-colors hover:bg-[#fafcfb]">
        <input
          type="file"
          name={name}
          accept="image/png,image/jpeg"
          className="sr-only"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
        />
        <ImageIcon
          className="h-[30px] w-[30px] shrink-0 text-[#374151]"
          strokeWidth={1.25}
        />
        <span className="text-[13px] leading-5 text-[#6b7280]">
          <span className="font-medium text-[#111827]">Click to upload</span> or
          drag and drop
          <span className="block max-w-[220px] truncate text-[12px] text-[#9ca3af]">
            {fileName || "JPG, PNG (Max 5MB)"}
          </span>
        </span>
      </label>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
const roles: { label: string; icon: React.ElementType }[] = [
  { label: "Exhibitor", icon: BoothIcon },
  { label: "Buyer", icon: Handshake },
  { label: "Visitor", icon: UsersRound },
  { label: "Speaker", icon: Mic },
  { label: "Partner /\nAssociation", icon: GroupIcon },
  { label: "Media", icon: Camera },
];

export default function FeedbackPage() {
  const [role, setRole] = useState("Exhibitor");
  const [overallRating, setOverallRating] = useState(0);
  const [networkingRating, setNetworkingRating] = useState(0);
  const [qualityRating, setQualityRating] = useState(0);
  const [managementRating, setManagementRating] = useState(0);
  const [consent, setConsent] = useState("yes");

  return (
    <div
      className={`${inter.className} relative min-h-screen overflow-hidden bg-[#f6faf5] text-[#0f172a] antialiased`}
    >
      {/* ============================ HERO ============================ */}
      <header className="relative h-[256px] overflow-hidden bg-gradient-to-r from-[#f1f6ec] via-[#f6faf3] to-white">
        {/* Right photo with curved left edge */}
        <div
          className="absolute inset-y-0 right-0 hidden w-[56%] md:block"
          style={{ clipPath: "ellipse(85% 130% at 100% 100%)" }}
        >
          <Image
            src={HERO_IMAGE}
            alt="Bharat Organic Expo visitors"
            fill
            priority
            sizes="(min-width: 768px) 56vw, 0px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/10 to-transparent" />
        </div>

        {/* Big leaf, top right - removed */}

        {/* Tagline */}
        <div
          className={`${script.className} pointer-events-none absolute right-[31%] top-[64px] hidden -rotate-[11deg] text-[30px] leading-[1.18] text-[#0f6b3a] md:block`}
        >
          Together
          <br />
          for a Greener
          <br />
          Tomorrow
          <svg
            viewBox="0 0 200 40"
            className="mt-1 h-8 w-[190px]"
            fill="none"
            aria-hidden
          >
            <path
              d="M0 30C50 32 130 24 198 4"
              stroke="#0f6b3a"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Text block */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1140px] flex-col justify-center px-5 md:pl-[22px]">
          <span className="text-[13px] font-medium uppercase leading-4 tracking-[0.06em] text-[#1f2a24]">
            Share Your Experience
          </span>
          <h1 className="mt-3.5 text-[32px] font-semibold leading-10 tracking-[-0.01em] text-[#0a4f35]">
            Your Experience Helps Us Grow
          </h1>
          <p className="mt-2 max-w-[520px] text-[16px] leading-[26px] text-[#1f2937]">
            Help us create better experiences and greater opportunities for the
            organic industry.
          </p>
          <div className="mt-5 flex items-center gap-2 text-[13px] leading-5 text-[#4b5563]">
            <Link href="/" className="transition-colors hover:text-[#0a4f35]">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.75} />
            <span className="font-medium text-[#1f3d2f]">
              Share Your Experience
            </span>
          </div>
        </div>
      </header>

      {/* ======================= SIDE LEAVES (decor) ======================= */}
      <Leaf
        gid="leafLeft"
        className="pointer-events-none absolute -left-6 top-[268px] hidden h-[170px] w-[85px] rotate-[-18deg] opacity-25 blur-[1px] xl:block"
      />
      <Leaf
        gid="leafRight"
        className="pointer-events-none absolute -right-8 top-[770px] hidden h-[170px] w-[85px] rotate-[24deg] opacity-25 blur-[1px] xl:block"
      />

      {/* ============================ FORM CARD ============================ */}
      <main className="relative z-10 mx-auto -mt-3 w-full max-w-[1140px] px-4 pb-14">
        <div className="rounded-xl border border-[#e4ece6] bg-white px-5 pb-7 pt-6 shadow-[0_2px_14px_rgba(16,60,40,0.05)] md:px-8">
          {/* Form header */}
          <h2 className="text-[26px] font-semibold leading-8 tracking-[-0.01em] text-[#111d17]">
            Share Your Feedback
          </h2>
          <p className="mt-0.5 text-[15px] leading-6 text-[#4b5563]">
            Your insights are valuable and help us make Bharat Organic Expo
            better, stronger and more impactful.
          </p>

          <form onSubmit={(e) => e.preventDefault()}>
            {/* ---------- 1. I participated as ---------- */}
            <section className="mt-5">
              <StepHeading n={1}>
                I participated as <span className="text-[#ef4444]">*</span>
              </StepHeading>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                {roles.map((r) => {
                  const Icon = r.icon;
                  const active = role === r.label;
                  return (
                    <button
                      key={r.label}
                      type="button"
                      onClick={() => setRole(r.label)}
                      className={`flex h-[113px] flex-col items-center justify-center rounded-lg border px-3 text-center transition-colors ${active
                        ? "border-[#7cc39a] bg-[#e9f5ee]"
                        : "border-[#dfe5e2] bg-white hover:border-[#c5cfca]"
                        }`}
                    >
                      <Icon
                        className={`mb-3 h-[34px] w-[34px] ${active ? "text-[#1f3d2f]" : "text-[#374151]"
                          }`}
                        strokeWidth={1.5}
                      />
                      <span className="whitespace-pre-line text-[13px] font-medium leading-[18px] text-[#1f2937]">
                        {r.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* ---------- 2. About You ---------- */}
            <section className="mt-5">
              <StepHeading n={2}>About You</StepHeading>

              <div className="grid grid-cols-1 gap-x-7 gap-y-5 md:grid-cols-3">
                <div>
                  <label className={labelCls}>
                    Name
                    <Req />
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls}>
                    Company / Organisation
                    <Req />
                  </label>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls}>Designation</label>
                  <input
                    type="text"
                    placeholder="Enter designation"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls}>
                    Mobile Number
                    <Req />
                  </label>
                  <div className="flex h-10 overflow-hidden rounded-md border border-[#d8dfdb] bg-white transition-colors focus-within:border-[#0b6b3d] focus-within:ring-1 focus-within:ring-[#0b6b3d]">
                    <div className="flex items-center gap-1.5 border-r border-[#d8dfdb] px-3">
                      <IndiaFlag />
                      <span className="text-[13px] font-medium text-[#1f2937]">
                        +91
                      </span>
                      <ChevronDown
                        className="h-3.5 w-3.5 text-[#374151]"
                        strokeWidth={2}
                      />
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      className="w-full min-w-0 px-3.5 text-[13px] text-[#1f2937] outline-none placeholder:text-[#9ca3af]"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls}>Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label className={labelCls}>
                    Which edition did you attend?
                    <Req />
                  </label>
                  <div className="relative">
                    <select
                      defaultValue="2027"
                      className={`${inputCls} appearance-none pr-10 text-[14px]`}
                    >
                      <option value="2027">Bharat Organic Expo 2027</option>
                    </select>
                    <ChevronDown
                      className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#374151]"
                      strokeWidth={1.75}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ---------- 3. Rate Your Experience ---------- */}
            <section className="mt-5">
              <StepHeading n={3} className="mb-4">
                Rate Your Experience
              </StepHeading>

              <div className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2 md:grid-cols-4">
                <div>
                  <span className={`${labelCls} !mb-3`}>
                    Overall Experience
                    <Req />
                  </span>
                  <StarRating
                    value={overallRating}
                    onChange={setOverallRating}
                  />
                </div>
                <div>
                  <span className={`${labelCls} !mb-3`}>
                    Business Networking
                  </span>
                  <StarRating
                    value={networkingRating}
                    onChange={setNetworkingRating}
                  />
                </div>
                <div>
                  <span className={`${labelCls} !mb-3`}>
                    Quality of Participants
                  </span>
                  <StarRating
                    value={qualityRating}
                    onChange={setQualityRating}
                  />
                </div>
                <div>
                  <span className={`${labelCls} !mb-3`}>Event Management</span>
                  <StarRating
                    value={managementRating}
                    onChange={setManagementRating}
                  />
                </div>
              </div>
            </section>

            {/* ---------- 4. Tell Us About Your Experience ---------- */}
            <section className="mt-10">
              <StepHeading n={4}>Tell Us About Your Experience</StepHeading>

              <div className="grid grid-cols-1 gap-x-9 gap-y-5 md:grid-cols-2">
                <div>
                  <label className={labelCls}>
                    What was the most valuable part of your experience?
                    <Req />
                  </label>
                  <textarea
                    placeholder="Share what you liked the most..."
                    className="h-[92px] w-full resize-none rounded-md border border-[#d8dfdb] bg-white px-3.5 py-3 text-[13px] text-[#1f2937] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#0b6b3d] focus:ring-1 focus:ring-[#0b6b3d]"
                  />
                </div>
                <div>
                  <label className={labelCls}>
                    What can we do better next time?
                  </label>
                  <textarea
                    placeholder="Your suggestions help us improve..."
                    className="h-[92px] w-full resize-none rounded-md border border-[#d8dfdb] bg-white px-3.5 py-3 text-[13px] text-[#1f2937] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#0b6b3d] focus:ring-1 focus:ring-[#0b6b3d]"
                  />
                </div>
              </div>
            </section>

            {/* ---------- 5. Testimonial & Media Consent ---------- */}
            <section className="mt-5">
              <StepHeading n={5}>Testimonial &amp; Media Consent</StepHeading>

              <p className="text-[15px] leading-6 text-[#374151]">
                May we feature your experience on Bharat Organic Expo’s website
                and promotional channels?
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-[90px] gap-y-3">
                <Radio
                  value="yes"
                  checked={consent === "yes"}
                  onChange={setConsent}
                >
                  Yes, you may feature my experience
                </Radio>
                <Radio
                  value="no"
                  checked={consent === "no"}
                  onChange={setConsent}
                >
                  No, keep my feedback private
                </Radio>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-x-9 gap-y-5 md:grid-cols-2">
                <UploadBox label="Upload Your Photo (optional)" name="photo" />
                <UploadBox label="Company Logo (optional)" name="logo" />
              </div>

              <label className="mt-5 flex cursor-pointer items-center gap-3 text-[14px] text-[#1f2937]">
                <input
                  type="checkbox"
                  className="h-5 w-5 cursor-pointer rounded accent-[#0b6b3d]"
                />
                <span>
                  I would like the Bharat Organic Expo team to contact me.
                </span>
              </label>
            </section>

            {/* ---------- Submit bar ---------- */}
            <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="flex h-[54px] w-full items-center justify-center gap-2.5 rounded-md bg-[#0b5d3b] px-8 text-[15px] font-medium text-white transition-colors hover:bg-[#094d31] sm:w-[325px]"
              >
                Submit Feedback
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </button>

              <div className="flex items-center gap-2 text-[13px] text-[#6b7280]">
                <Lock
                  className="h-[22px] w-[22px] shrink-0 text-[#1a7f4b]"
                  strokeWidth={1.5}
                />
                <span>
                  Your information is secure and will never be shared without
                  your permission.
                </span>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}