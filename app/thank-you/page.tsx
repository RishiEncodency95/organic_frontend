"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter, Kaushan_Script } from "next/font/google";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Check,
  ChevronRight,
  Download,
  MapPin,
} from "lucide-react";

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

const HERO_IMAGE = "/assets/banner.png";
const NEXT_EDITION_BANNER = "/assets/next-edition-banner.png";
const LEAF_REAL = "/assets/leaf-branch.png";
const LEAF_LEFT = "/assets/leaf-left-decor.png";
const LEAF_RIGHT = "/assets/leaf-branch.png";

/* Participation card assets (TEXT-FREE background + real HTML text format) */
const CARD_BG = "/assets/participation-card-bg.png"; // leaves + hands/soil artwork, NO text
const EXPO_LOGO = "/separated-assets/bharat-organic-leaf.png";
const PARTICIPANT_AVATAR = ""; // e.g. "/assets/users/rahul.png" — empty => default avatar glyph

/* Reusable participant data — card ka content yahi se change hoga */
const PARTICIPANT = {
  name: "Rahul Sharma",
  designation: "Director",
  company: "NatureLand Organics",
  avatar: PARTICIPANT_AVATAR,
};

const EVENT = {
  tagline: "Proud to be a Part of\nBharat Organic Expo",
  dates: "19 – 21 February 2027",
  venue: "Bharat Mandapam, New Delhi",
};

const SHARE_PAGE_URL = "https://bharatorganicexpo.com";
const GOOGLE_REVIEW_URL = "https://g.page/r/YOUR_PLACE_ID/review";
const PARTICIPATION_CARD_DOWNLOAD = "/assets/participation-card-real.png";
const SHARE_EXPERIENCE_ROUTE = "/feedback";

const shareText = encodeURIComponent(
  "Proud to be a part of Bharat Organic Expo! 🌱"
);
const shareUrl = encodeURIComponent(SHARE_PAGE_URL);

const btnCls =
  "flex h-8 w-full items-center justify-center gap-1.5 rounded-md bg-[#0d5a37] text-[12px] font-medium text-white transition-colors hover:bg-[#0a4a2d]";

const GoogleG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden>
    <path
      fill="#EA4335"
      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
    />
    <path
      fill="#FBBC05"
      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
    />
  </svg>
);

const YouTubeLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 72 50" className={className} aria-hidden>
    <rect width="72" height="50" rx="13" fill="#e8201a" />
    <path d="M29 14.5v21l19-10.5-19-10.5Z" fill="#fff" />
  </svg>
);

const ShareGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden>
    <g stroke="#1a73e8" strokeWidth="4.5" strokeLinecap="round">
      <path d="M35 11 14 24l21 13" />
    </g>
    <circle cx="36" cy="10" r="7" fill="#1a73e8" />
    <circle cx="12" cy="24" r="7" fill="#1a73e8" />
    <circle cx="36" cy="38" r="7" fill="#1a73e8" />
  </svg>
);

const LinkedInGlyph = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#fff" aria-hidden>
    <circle cx="5" cy="4.8" r="2.1" />
    <rect x="3" y="9" width="4" height="12" />
    <path d="M9.5 9h3.8v1.7c.6-1 1.9-2 3.9-2 3.5 0 4.3 2.3 4.3 5.3v7h-4v-6.2c0-1.5-.3-2.6-1.9-2.6s-2.1 1.2-2.1 2.7V21h-4V9z" />
  </svg>
);

const FacebookGlyph = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#fff" aria-hidden>
    <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.8 1.8-1.8H17V2.4c-.3-.1-1.3-.2-2.4-.2-2.3 0-4.1 1.4-4.1 4.1v3.2h-3V13h3v9h3z" />
  </svg>
);

const InstagramGlyph = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="#fff"
    strokeWidth="1.8"
    aria-hidden
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.4" cy="6.6" r="1" fill="#fff" stroke="none" />
  </svg>
);

const WhatsAppGlyph = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="#fff"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M3 21l1.5-4.6A9 9 0 1 1 8 19.6L3 21z" />
    <path d="M9 8.2c-.3 1.6.6 3.4 2 4.8s3.2 2.3 4.8 2l1-1.6-2.1-1-.9.9c-1-.4-2-1.3-2.4-2.4l.9-.9-1-2.1L9 8.2z" />
  </svg>
);

const RatingStars = () => (
  <svg width="76" height="15" viewBox="0 0 92 18" aria-label="4.5 out of 5">
    <defs>
      <linearGradient id="halfStar">
        <stop offset="50%" stopColor="#f5a623" />
        <stop offset="50%" stopColor="#e5e7eb" />
      </linearGradient>
    </defs>
    {[0, 1, 2, 3, 4].map((i) => (
      <polygon
        key={i}
        transform={`translate(${i * 18.5},0)`}
        points="9,1 11.4,6.3 17,6.9 12.8,10.7 14,16.3 9,13.4 4,16.3 5.2,10.7 1,6.9 6.6,6.3"
        fill={i === 4 ? "url(#halfStar)" : "#f5a623"}
      />
    ))}
  </svg>
);

/* Default avatar glyph (jab participant ki photo na ho) */
const AvatarGlyph = () => (
  <svg viewBox="0 0 48 48" className="h-full w-full" aria-hidden>
    <circle cx="24" cy="24" r="24" fill="#d9d9d9" />
    <circle cx="24" cy="18.5" r="7.5" fill="#9e9e9e" />
    <path
      d="M8.5 43c2.4-7.6 8.4-11.6 15.5-11.6S37.1 35.4 39.5 43c-4.2 3.3-9.6 5-15.5 5S12.7 46.3 8.5 43z"
      fill="#9e9e9e"
    />
  </svg>
);

/* ---------- Participation Card: fully text-based / reusable ---------- */
const ParticipationCard = ({
  name,
  designation,
  company,
  avatar,
}: {
  name: string;
  designation: string;
  company: string;
  avatar?: string;
}) => (
  <div className="relative aspect-[375/218] w-full shrink-0 overflow-hidden rounded-xl border border-[#ececec] bg-[#fbfdf9] shadow-[0_4px_14px_rgba(0,0,0,0.08)] md:w-[380px]">
    {/* Text-free background artwork (leaves + soil) */}
    <Image
      src={CARD_BG}
      alt=""
      fill
      sizes="(min-width: 768px) 380px, 100vw"
      className="pointer-events-none select-none object-cover object-center"
      priority
    />

    {/* Card content — real text overlay */}
    <div className="relative z-10 flex h-full flex-col p-3.5">
      {/* Top Logo + Script Tagline */}
      <div className="flex items-start justify-between">
        <div className="relative h-[28px] w-[140px] shrink-0">
          <Image
            src={EXPO_LOGO}
            alt="Bharat Organic Expo"
            fill
            sizes="140px"
            className="object-contain object-left"
          />
        </div>

        <div
          className={`${script.className} -mt-1 -rotate-[8deg] pr-1 text-right text-[11px] leading-[13px] text-[#0f6b3a]`}
        >
          Together
          <br />
          for a Greener
          <br />
          Tomorrow
        </div>
      </div>

      {/* Participant details */}
      <div className="mt-1.5 flex items-center gap-2.5">
        <div className="relative h-[44px] w-[44px] shrink-0 overflow-hidden rounded-full bg-[#d9d9d9] shadow-sm">
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              fill
              sizes="44px"
              className="object-cover"
            />
          ) : (
            <AvatarGlyph />
          )}
        </div>

        <div className="min-w-0">
          <p className="truncate text-[13.5px] font-bold leading-[17px] text-[#111827]">
            {name}
          </p>
          <p className="truncate text-[11px] font-medium leading-[14px] text-[#4b5563]">
            {designation}
          </p>
          <p className="truncate text-[11px] font-medium leading-[14px] text-[#4b5563]">
            {company}
          </p>
        </div>
      </div>

      {/* Green pill badge */}
      <div className="mt-2 w-fit max-w-[80%] rounded-full bg-[#0d5a37] px-3 py-1 shadow-[0_2px_5px_rgba(13,77,48,0.25)]">
        <p className="whitespace-pre-line text-[11px] font-semibold leading-[14px] text-white">
          {EVENT.tagline}
        </p>
      </div>

      {/* Date + venue */}
      <div className="mt-auto pt-1">
        <p className="text-[10px] font-bold leading-[13px] text-[#111827]">
          {EVENT.dates}
        </p>
        <p className="text-[10px] font-medium leading-[13px] text-[#4b5563]">
          {EVENT.venue}
        </p>
      </div>
    </div>
  </div>
);

const InfoCard = ({
  icon,
  title,
  description,
  action,
  footer,
  footerClass = "mt-2.5",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: React.ReactNode;
  footer: React.ReactNode;
  footerClass?: string;
}) => (
  <div className="flex min-h-[205px] flex-col items-center justify-between rounded-lg border border-[#e2ece4] bg-white px-3.5 py-4 text-center shadow-sm">
    <div className="flex flex-col items-center">
      <div className="flex h-[34px] w-full items-center justify-center">
        {icon}
      </div>
      <h3 className="mt-1 text-[14px] font-semibold leading-[18px] text-[#101828]">
        {title}
      </h3>
      <p className="mt-0.5 whitespace-pre-line text-[11.5px] leading-[15px] text-[#374151]">
        {description}
      </p>
    </div>
    <div className="flex w-full flex-col items-center pt-2">
      <div className="flex w-full items-center">{action}</div>
      <div className={`flex items-center justify-center ${footerClass}`}>
        {footer}
      </div>
    </div>
  </div>
);

const SocialTile = ({
  label,
  href,
  className,
  children,
}: {
  label: string;
  href: string;
  className: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Share on ${label}`}
    className={`flex h-[42px] flex-1 min-w-[48px] max-w-[58px] flex-col items-center justify-center gap-[2px] rounded-md text-white transition-transform hover:-translate-y-0.5 ${className}`}
  >
    {children}
    <span className="text-[8.5px] font-medium leading-none whitespace-nowrap">{label}</span>
  </a>
);

export default function ThankYouPage() {
  const [videoError, setVideoError] = useState("");

  const onVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 50 * 1024 * 1024) {
      setVideoError("Video must be 50MB or smaller.");
      e.target.value = "";
      return;
    }
    setVideoError("");
  };

  return (
    <div
      className={`${inter.className} relative min-h-screen overflow-hidden bg-[#e4efe5] text-[#0f172a] antialiased`}
    >
      {/* ============================ HERO BANNER ============================ */}
      <header className="relative h-[360px] md:h-[420px] w-full overflow-hidden bg-[#e4efe5]">
        <Image
          src={HERO_IMAGE}
          alt="Bharat Organic Expo banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none select-none z-0"
        />

        {/* Bottom smooth gradient fade to blend hero image seamlessly into page background */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#e4efe5] via-[#e4efe5]/70 to-transparent z-0 pointer-events-none" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl -translate-x-6 md:-translate-x-12 lg:-translate-x-16 flex-col justify-start pt-16 md:pt-20 px-4 md:px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[14px] md:text-[15px] leading-5 text-[#4b5563] font-medium"
          >
            <Link href="/" className="transition-colors hover:text-[#0a4f35]">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" strokeWidth={2} />
            <Link
              href={SHARE_EXPERIENCE_ROUTE}
              className="transition-colors hover:text-[#0a4f35]"
            >
              Share Your Experience
            </Link>
            <ChevronRight className="h-4 w-4" strokeWidth={2} />
            <span className="font-semibold text-[#0d4d33]">Thank You</span>
          </nav>

          <h1 className="mt-2.5 text-[38px] md:text-[48px] font-bold leading-[1.15] tracking-[-0.015em] text-[#0b4a2f]">
            Thank You!
          </h1>
          <p className="mt-2 max-w-[560px] text-[18px] md:text-[20px] font-semibold leading-[28px] text-[#0d5034]">
            Your Experience Helps the Organic Community Grow.
          </p>
          <p className="mt-2 text-[16px] md:text-[17.5px] leading-[26px] text-[#1f2937] max-w-[580px]">
            We truly appreciate you taking the time to share your feedback.
            <br className="hidden md:block" />{" "}
            Your insights inspire us to create better opportunities for the
            organic industry.
          </p>
        </div>
      </header>

      <main className="relative z-10 mx-auto -mt-10 w-full max-w-5xl px-4 md:px-6 pb-12">
        {/* Success Card */}
        <div className="w-full rounded-xl border border-[#d4e4d8] bg-white p-5 md:p-6 pb-5 shadow-[0_4px_20px_rgba(16,60,40,0.06)]">
          <div className="relative min-h-[160px] rounded-md border border-[#e2ece4] bg-white px-4 pt-[52px] text-center shadow-sm">
            <div className="absolute left-1/2 top-0 h-[42px] w-[70px] -translate-x-1/2 rounded-b-[35px] bg-[#f4f9f5]" />
            <div className="absolute left-1/2 top-[-3px] flex h-[48px] w-[48px] -translate-x-1/2 items-center justify-center rounded-full bg-[#0e5a34] shadow-[0_3px_8px_rgba(14,90,52,0.25)]">
              <Check className="h-6 w-6 text-white" strokeWidth={2.5} />
            </div>

            <h2 className="text-[20px] font-semibold leading-7 tracking-[-0.01em] text-[#0d5a34]">
              Your Feedback Has Been Submitted!
            </h2>
            <p className="mt-1 text-[13px] leading-[20px] text-[#1f2937]">
              Thank you for being a valuable part of Bharat Organic Expo.
              <br className="hidden sm:block" />{" "}
              Together, we can build a stronger, healthier and more sustainable
              tomorrow.
            </p>

            <span className="absolute bottom-3 left-1/2 h-[2px] w-[80px] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#2f8f5b] to-transparent" />
          </div>

          {/* What's Next */}
          <div className="mt-4 text-center">
            <h2 className="text-[20px] font-semibold leading-7 tracking-[-0.01em] text-[#101828]">
              What&apos;s Next? Keep the Momentum Going!
            </h2>
            <p className="mt-0.5 text-[13px] leading-[20px] text-[#1f2937]">
              Help others discover, connect and be part of the growing organic
              movement.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3.5 md:grid-cols-3">
            {/* Google Review Card */}
            <InfoCard
              icon={<GoogleG className="h-9 w-9" />}
              title="Write a Google Review"
              description={
                "Help others discover\nBharat Organic Expo.\nIt takes less than a minute."
              }
              action={
                <div className="w-full px-4">
                  <a
                    href={GOOGLE_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnCls} max-w-[80%] mx-auto`}
                  >
                    Write a Google Review
                    <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                </div>
              }
              footer={
                <div className="flex items-center justify-center gap-1.5 whitespace-nowrap">
                  <RatingStars />
                  <span className="text-[10.5px] text-[#4b5563]">
                    Your review makes a difference!
                  </span>
                </div>
              }
            />

            {/* Video Card */}
            <InfoCard
              icon={<YouTubeLogo className="h-8 w-[48px]" />}
              title="Tell Your Story (Optional)"
              description={
                "Record or upload a short\n30–60 second video about\nyour experience."
              }
              action={
                <div className="w-full px-4">
                  <label className={`${btnCls} cursor-pointer max-w-[80%] mx-auto`}>
                    <input
                      type="file"
                      accept="video/mp4,video/quicktime"
                      className="sr-only"
                      onChange={onVideoChange}
                    />
                    Record / Upload Video
                    <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                  </label>
                </div>
              }
              footer={
                <div className="flex items-center justify-center gap-1.5 text-[10.5px] text-[#4b5563] whitespace-nowrap">
                  <Camera
                    className="h-3.5 w-3.5 shrink-0 text-[#1f2937]"
                    strokeWidth={1.5}
                  />
                  <span>
                    {videoError || "Supported format: MP4, MOV (Max 50MB)"}
                  </span>
                </div>
              }
            />

            {/* Share Card */}
            <InfoCard
              icon={<ShareGlyph className="h-9 w-9" />}
              title="Share Your Participation"
              description={
                "Proud to be part of\nBharat Organic Expo?\nShare with your network."
              }
              action={
                <div className="flex w-full items-center justify-center gap-2">
                  <SocialTile
                    label="LinkedIn"
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    className="bg-[#0a66c2]"
                  >
                    <LinkedInGlyph />
                  </SocialTile>
                  <SocialTile
                    label="Facebook"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                    className="bg-[#253d94]"
                  >
                    <FacebookGlyph />
                  </SocialTile>
                  <SocialTile
                    label="Instagram"
                    href="https://www.instagram.com/"
                    className="bg-gradient-to-br from-[#f0508a] via-[#d62976] to-[#c1358f]"
                  >
                    <InstagramGlyph />
                  </SocialTile>
                  <SocialTile
                    label="WhatsApp"
                    href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
                    className="bg-[#2bb24c]"
                  >
                    <WhatsAppGlyph />
                  </SocialTile>
                </div>
              }
              footerClass="mt-2"
              footer={
                <span className="text-[10.5px] text-[#374151] whitespace-nowrap">
                  Let&apos;s spread the word for a greener, healthier tomorrow!
                </span>
              }
            />
          </div>

          {/* Participation Card Section */}
          <section className="relative mt-[19px] flex flex-col items-center gap-6 overflow-hidden rounded-2xl border border-[#e2ece4] bg-white p-5 md:flex-row md:gap-10 md:p-6 md:pl-7 md:pr-10 shadow-sm">
            {/* Participation Card - Exact Match */}
            <div className="relative w-full shrink-0 rounded-[18px] border border-[#dce8dd] bg-[#f4f9f4] shadow-[0_10px_28px_rgba(0,0,0,0.07)] md:w-[390px]" style={{ aspectRatio: "905/540", overflow: "hidden" }}>
              {/* Card Background - Soft Mint/Green Tinted Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f8fbf8] via-[#edf6ee] to-[#e4f2e6]" />
              <div className="absolute right-0 top-0 bottom-0 w-[60%] bg-gradient-to-l from-[#e2f1e5]/80 via-[#edf6ef]/50 to-transparent pointer-events-none z-0" />

              {/* RIGHT TOP Image - Together for a Greener Tomorrow */}
              <div className="pointer-events-none absolute right-[3%] top-[12%] w-[30%] h-[35%] z-[2]">
                <Image
                  src="/assets/greener-tomorrow-text.png"
                  alt="Together for a Greener Tomorrow"
                  fill
                  sizes="160px"
                  className="object-contain object-right-top"
                />
              </div>

              {/* RIGHT BOTTOM Image - Hands with Plant */}
              <div className="pointer-events-none absolute right-[0%] top-[62%] w-[36%] h-[38%] z-[1]">
                <Image
                  src="/assets/plant-in-hands.png"
                  alt="Plant in hands"
                  fill
                  sizes="180px"
                  className="object-contain object-right-bottom"
                />
              </div>

              {/* LEFT BOTTOM - Leaf branch (Overlapping white container) */}
              <div className="pointer-events-none absolute left-[-2%] bottom-[-2%] w-[28%] h-[75%] z-[10]">
                <Image
                  src={LEAF_LEFT}
                  alt="Leaves"
                  fill
                  sizes="150px"
                  className="object-contain object-left-bottom"
                />
              </div>

              {/* Card Content - Matching Real Design with proper spacing & gaps */}
              <div className="relative z-10 flex h-full flex-col justify-between p-4 md:p-5 pl-[6%] pr-[4%] pt-[4%] pb-[3%]">
                {/* Logo Section - Shifted further left */}
                <div className="flex items-center gap-2 -ml-1 pt-0 -mt-0.5">
                  <div className="relative h-[28px] w-[28px] shrink-0">
                    <Image
                      src={EXPO_LOGO}
                      alt="Bharat Organic Expo"
                      fill
                      sizes="28px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold leading-tight text-[#084d2e]">
                      Bharat Organic Expo
                    </p>
                    <p className="text-[7.5px] font-extrabold uppercase tracking-wide leading-tight text-[#d97706]">
                      Organic Today for a Healthy Tomorrow
                    </p>
                  </div>
                </div>

                {/* Participant Info - Avatar & Details */}
                <div className="flex items-center gap-2.5 pl-4 my-auto z-[2]">
                  <div className="relative h-[40px] w-[40px] shrink-0 overflow-hidden rounded-full bg-[#d9d9d9]">
                    {PARTICIPANT.avatar ? (
                      <Image
                        src={PARTICIPANT.avatar}
                        alt={PARTICIPANT.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    ) : (
                      <AvatarGlyph />
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="text-[13px] font-bold leading-[16px] text-[#111827]">
                      {PARTICIPANT.name}
                    </p>
                    <p className="text-[10px] font-medium leading-[13px] text-[#4b5563]">
                      {PARTICIPANT.designation}
                    </p>
                    <p className="text-[10px] font-medium leading-[13px] text-[#4b5563]">
                      {PARTICIPANT.company}
                    </p>
                  </div>
                </div>

                {/* Green Pill Badge - Compact width */}
                <div className="mx-auto w-fit rounded-full bg-[#084d2e] px-3.5 py-1 shadow-[0_2px_8px_rgba(8,77,46,0.25)] text-center -mt-2 mb-0.5 z-[3]">
                  <p className="whitespace-pre-line text-[9.5px] font-semibold leading-[13px] text-white">
                    {EVENT.tagline}
                  </p>
                </div>

                {/* Date + Venue */}
                <div className="text-center mt-auto pt-1 pb-0.5 z-[2]">
                  <p className="text-[10px] font-bold leading-[14px] text-[#111827]">
                    {EVENT.dates}
                  </p>
                  <p className="text-[9px] font-medium leading-[12px] text-[#4b5563]">
                    {EVENT.venue}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Content & Button */}
            <div className="relative z-10 flex-1 px-2 pb-2 md:px-0 md:pb-0">
              <h2 className="text-[20px] md:text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#054d2e]">
                Get Your Participation Card
              </h2>
              <p className="mt-1.5 whitespace-pre-line text-[13.5px] md:text-[14px] leading-[21px] text-[#334155]">
                {
                  "Download your personalised participation card\nand share it with your network."
                }
              </p>
              <a
                href={PARTICIPATION_CARD_DOWNLOAD}
                download
                className="mt-3.5 inline-flex h-9 w-full items-center justify-center gap-2 rounded-md bg-[#054d2e] px-5 text-[13px] font-semibold text-white transition-all hover:bg-[#033a22] shadow-sm md:w-auto"
              >
                <Download className="h-4 w-4" strokeWidth={2} />
                <span>Download Card</span>
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
            </div>

            {/* Right side background leaves */}
            <div className="pointer-events-none absolute right-0 top-[20%] bottom-0 h-[80%] w-[150px] md:w-[190px] z-0 select-none overflow-hidden hidden sm:block opacity-40">
              <Image
                src={LEAF_RIGHT}
                alt=""
                fill
                className="object-contain object-right-bottom"
              />
            </div>
          </section>

          {/* Footer Banner - See You at Bharat Organic Expo 2027 */}
          <section className="relative mt-4 min-h-[140px] overflow-hidden rounded-lg">
            <Image
              src="/assets/next-edition-banner.png"
              alt="Bharat Organic Expo Next Edition"
              fill
              sizes="(min-width: 1170px) 1170px, 100vw"
              className="object-cover object-center"
            />

            <div className="relative z-10 flex flex-col items-start justify-center text-left pl-[22%] md:pl-[25%] pr-4 py-4 w-full max-w-[750px] mr-auto">
              <p className="text-[14px] font-medium leading-tight text-[#12281d] text-left">
                See You at
              </p>
              <p className="mt-0.5 text-[20px] md:text-[22px] font-bold leading-tight tracking-[-0.01em] text-[#07553a] text-left">
                Bharat Organic Expo 2027
              </p>

              <div className="mt-2 flex flex-wrap items-center justify-start gap-x-4 gap-y-1 text-[12px] leading-snug text-[#1f2937] font-semibold text-left">
                <span className="flex items-center gap-1.5">
                  <CalendarDays
                    className="h-4 w-4 text-[#08743e]"
                    strokeWidth={1.75}
                  />
                  19 – 21 February 2027
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-[#08743e]" strokeWidth={1.75} />
                  Bharat Mandapam, New Delhi
                </span>
              </div>

              <p className="mt-1.5 text-[12px] font-bold text-[#08743e] text-left">
                Bigger Opportunities. A Greener Future.
              </p>
            </div>

            <Link
              href="/"
              className="absolute bottom-4 right-4 z-10 flex h-9 items-center justify-center gap-1.5 rounded-md bg-[#08743e] px-4 text-[12px] font-bold text-white shadow-sm transition-colors hover:bg-[#065e32]"
            >
              Explore the Next Edition
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
