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
const LEAF_REAL = "/assets/ChatGPT Image Sep 21, 2026, 02_06_33 PM.png";
const LEAF_LEFT = "/assets/ChatGPT Image Sep 21, 2026, 02_07_12 PM.png";
const LEAF_RIGHT = "/assets/ChatGPT Image Sep 21, 2026, 02_06_33 PM.png";

/* Participation card assets (TEXT-FREE background + real HTML text format) */
const CARD_BG = "/assets/participation-card-bg.png"; // leaves + hands/soil artwork, NO text
const EXPO_LOGO = "/assets/boe-logo.png";
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
  "flex h-[47px] w-full items-center justify-center gap-2 rounded-md bg-[#0d5a37] text-[15px] font-medium text-white transition-colors hover:bg-[#0a4a2d]";

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
  <svg viewBox="0 0 24 24" className="h-[26px] w-[26px]" fill="#fff" aria-hidden>
    <circle cx="5" cy="4.8" r="2.1" />
    <rect x="3" y="9" width="4" height="12" />
    <path d="M9.5 9h3.8v1.7c.6-1 1.9-2 3.9-2 3.5 0 4.3 2.3 4.3 5.3v7h-4v-6.2c0-1.5-.3-2.6-1.9-2.6s-2.1 1.2-2.1 2.7V21h-4V9z" />
  </svg>
);

const FacebookGlyph = () => (
  <svg viewBox="0 0 24 24" className="h-[26px] w-[26px]" fill="#fff" aria-hidden>
    <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.8 1.8-1.8H17V2.4c-.3-.1-1.3-.2-2.4-.2-2.3 0-4.1 1.4-4.1 4.1v3.2h-3V13h3v9h3z" />
  </svg>
);

const InstagramGlyph = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[26px] w-[26px]"
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
    className="h-[26px] w-[26px]"
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
  <svg width="92" height="18" viewBox="0 0 92 18" aria-label="4.5 out of 5">
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
  <div className="relative aspect-[375/218] w-full shrink-0 overflow-hidden rounded-2xl border border-[#ececec] bg-[#fbfdf9] shadow-[0_8px_20px_rgba(0,0,0,0.10)] md:w-[440px]">
    {/* Text-free background artwork (leaves + soil) */}
    <Image
      src={CARD_BG}
      alt=""
      fill
      sizes="(min-width: 768px) 440px, 100vw"
      className="pointer-events-none select-none object-cover object-center"
      priority
    />

    {/* Card content — real text overlay */}
    <div className="relative z-10 flex h-full flex-col p-4">
      {/* Top Logo + Script Tagline */}
      <div className="flex items-start justify-between">
        <div className="relative h-[32px] w-[170px] shrink-0">
          <Image
            src={EXPO_LOGO}
            alt="Bharat Organic Expo"
            fill
            sizes="170px"
            className="object-contain object-left"
          />
        </div>

        <div
          className={`${script.className} -mt-1 -rotate-[8deg] pr-1 text-right text-[13px] leading-[15px] text-[#0f6b3a]`}
        >
          Together
          <br />
          for a Greener
          <br />
          Tomorrow
          <svg
            viewBox="0 0 120 14"
            className="ml-auto mt-[2px] h-[7px] w-[92px]"
            fill="none"
            aria-hidden
          >
            <path
              d="M1 11C30 12 78 8 119 2"
              stroke="#0f6b3a"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Participant details */}
      <div className="mt-2 flex items-center gap-3">
        <div className="relative h-[54px] w-[54px] shrink-0 overflow-hidden rounded-full bg-[#d9d9d9] shadow-sm">
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              fill
              sizes="54px"
              className="object-cover"
            />
          ) : (
            <AvatarGlyph />
          )}
        </div>

        <div className="min-w-0">
          <p className="truncate text-[15px] font-bold leading-[20px] text-[#111827]">
            {name}
          </p>
          <p className="truncate text-[12px] font-medium leading-[17px] text-[#4b5563]">
            {designation}
          </p>
          <p className="truncate text-[12px] font-medium leading-[17px] text-[#4b5563]">
            {company}
          </p>
        </div>
      </div>

      {/* Green pill badge */}
      <div className="mt-2.5 w-fit max-w-[78%] rounded-full bg-[#0d5a37] px-4 py-1.5 shadow-[0_2px_6px_rgba(13,77,48,0.25)]">
        <p className="whitespace-pre-line text-[12px] md:text-[13px] font-semibold leading-[16px] text-white">
          {EVENT.tagline}
        </p>
      </div>

      {/* Date + venue */}
      <div className="mt-auto pt-2">
        <p className="text-[11px] font-bold leading-[15px] text-[#111827]">
          {EVENT.dates}
        </p>
        <p className="text-[11px] font-medium leading-[15px] text-[#4b5563]">
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
  footerClass = "mt-2",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: React.ReactNode;
  footer: React.ReactNode;
  footerClass?: string;
}) => (
  <div className="flex min-h-[316px] flex-col items-center rounded-[10px] border border-[#e3e9e5] bg-white px-5 pb-[22px] pt-5 text-center">
    <div className="flex h-[54px] w-full items-center justify-center">
      {icon}
    </div>
    <h3 className="mt-[14px] text-[18px] font-semibold leading-[26px] text-[#101828]">
      {title}
    </h3>
    <p className="mt-[7px] whitespace-pre-line text-[15px] leading-[25px] text-[#374151]">
      {description}
    </p>
    <div className="mt-[6px] flex h-[64px] w-full items-center">{action}</div>
    <div className={`flex items-center justify-center ${footerClass}`}>
      {footer}
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
    className={`flex h-[68px] w-[68px] flex-col items-center justify-center gap-1 rounded-lg text-white transition-transform hover:-translate-y-0.5 ${className}`}
  >
    {children}
    <span className="text-[11px] leading-none">{label}</span>
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
      className={`${inter.className} relative min-h-screen overflow-hidden bg-[#f3f8f2] text-[#0f172a] antialiased`}
    >
      {/* Header Banner */}
      <header className="relative h-[340px] md:h-[380px] w-full overflow-hidden bg-[#eef5ea]">
        {/* Full background banner image */}
        <Image
          src={HERO_IMAGE}
          alt="Bharat Organic Expo banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none select-none z-0"
        />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1280px] flex-col justify-start pt-10 md:pt-12 px-4 md:px-14">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[14px] leading-5 text-[#4b5563] font-medium"
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

          <h1 className="mt-3 text-[48px] md:text-[54px] font-bold leading-[1.15] tracking-[-0.015em] text-[#0b4a2f]">
            Thank You!
          </h1>
          <p className="mt-1.5 max-w-[460px] text-[22px] md:text-[25px] font-semibold leading-[31px] text-[#0d5034]">
            Your Experience Helps the Organic Community Grow.
          </p>
          <p className="mt-2 text-[15px] md:text-[16px] leading-[26px] text-[#1f2937] max-w-[500px]">
            We truly appreciate you taking the time to share your feedback.
            <br className="hidden md:block" />{" "}
            Your insights inspire us to create better opportunities for the
            organic industry.
          </p>
        </div>
      </header>

      <main className="relative z-10 mx-auto -mt-8 w-full max-w-[1600px] px-4 md:px-11 pb-6">
        {/* Success Card */}
        <div className="w-full rounded-2xl bg-white p-6 md:p-8 pb-[11px] shadow-[0_2px_14px_rgba(16,60,40,0.06)]">
          <div className="relative min-h-[192px] rounded-[10px] bg-gradient-to-r from-[#e6f3e8] via-[#eaf5ec] to-[#e4f1e6] px-4 pt-[68px] text-center">
            <div className="absolute left-1/2 top-0 h-[54px] w-[90px] -translate-x-1/2 rounded-b-[45px] bg-white" />
            <div className="absolute left-1/2 top-[-3px] flex h-[60px] w-[60px] -translate-x-1/2 items-center justify-center rounded-full bg-[#0e5a34] shadow-[0_4px_10px_rgba(14,90,52,0.25)]">
              <Check className="h-8 w-8 text-white" strokeWidth={2.5} />
            </div>

            <h2 className="text-[27px] font-semibold leading-9 tracking-[-0.01em] text-[#0d5a34]">
              Your Feedback Has Been Submitted!
            </h2>
            <p className="mt-[9px] text-[16px] leading-[26px] text-[#1f2937]">
              Thank you for being a valuable part of Bharat Organic Expo.
              <br className="hidden sm:block" />{" "}
              Together, we can build a stronger, healthier and more sustainable
              tomorrow.
            </p>

            <span className="absolute bottom-[17px] left-1/2 h-[2px] w-[92px] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#2f8f5b] to-transparent" />
          </div>

          {/* What's Next */}
          <div className="mt-[21px] text-center">
            <h2 className="text-[27px] font-semibold leading-[34px] tracking-[-0.01em] text-[#101828]">
              What&apos;s Next? Keep the Momentum Going!
            </h2>
            <p className="mt-0.5 text-[16px] leading-[26px] text-[#1f2937]">
              Help others discover, connect and be part of the growing organic
              movement.
            </p>
          </div>

          <div className="mt-[21px] grid grid-cols-1 gap-[18px] md:grid-cols-3">
            {/* Google Review Card */}
            <InfoCard
              icon={<GoogleG className="h-[54px] w-[54px]" />}
              title="Write a Google Review"
              description={
                "Help others discover\nBharat Organic Expo.\nIt takes less than a minute."
              }
              action={
                <div className="w-full px-2.5">
                  <a
                    href={GOOGLE_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnCls}
                  >
                    Write a Google Review
                    <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                </div>
              }
              footer={
                <div className="flex items-center gap-3">
                  <RatingStars />
                  <span className="text-[13px] text-[#4b5563]">
                    Your review makes a difference!
                  </span>
                </div>
              }
            />

            {/* Video Card */}
            <InfoCard
              icon={<YouTubeLogo className="h-[50px] w-[73px]" />}
              title="Tell Your Story (Optional)"
              description={
                "Record or upload a short\n30–60 second video about\nyour experience."
              }
              action={
                <div className="w-full px-2.5">
                  <label className={`${btnCls} cursor-pointer`}>
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
                <div className="flex items-center gap-2 text-[12px] text-[#4b5563]">
                  <Camera
                    className="h-5 w-5 text-[#1f2937]"
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
              icon={<ShareGlyph className="h-[52px] w-[52px]" />}
              title="Share Your Participation"
              description={
                "Proud to be part of\nBharat Organic Expo?\nShare with your network."
              }
              action={
                <div className="flex w-full items-center justify-between">
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
              footerClass="mt-3"
              footer={
                <span className="text-[12px] leading-[18px] text-[#374151]">
                  Let&apos;s spread the word for a greener, healthier tomorrow!
                </span>
              }
            />
          </div>

          {/* Participation Card Section */}
          <section className="relative mt-[19px] flex flex-col items-center gap-6 overflow-hidden rounded-xl border border-[#e3e9e5] bg-white p-5 md:flex-row md:gap-10 md:p-6 md:pl-8">
            <ParticipationCard
              name={PARTICIPANT.name}
              designation={PARTICIPANT.designation}
              company={PARTICIPANT.company}
              avatar={PARTICIPANT.avatar}
            />

            <div className="relative z-10 flex-1 px-2 pb-2 md:px-0 md:pb-0">
              <h2 className="text-[24px] md:text-[28px] font-bold leading-tight tracking-[-0.01em] text-[#07553a]">
                Get Your Participation Card
              </h2>
              <p className="mt-3 whitespace-pre-line text-[16px] leading-[26px] text-[#374151]">
                {
                  "Download your personalised participation card\nand share it with your network."
                }
              </p>
              <a
                href={PARTICIPATION_CARD_DOWNLOAD}
                download
                className="mt-6 inline-flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#07553a] px-6 text-[16px] font-semibold text-white transition-all hover:bg-[#05442e] shadow-sm md:w-auto"
              >
                <Download className="h-5 w-5" strokeWidth={2} />
                <span>Download Card</span>
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>

            {/* Right side background leaf graphic */}
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 h-full w-[160px] md:w-[220px] z-0 opacity-90 hidden sm:block">
              <Image
                src={LEAF_REAL}
                alt=""
                fill
                className="object-contain object-right"
              />
            </div>
          </section>
        </div>

        {/* Footer Banner - See You at Bharat Organic Expo 2027 */}
        <section className="relative mt-[10px] min-h-[170px] overflow-hidden rounded-[10px]">
          <Image
            src="/assets/next-edition-banner.png"
            alt="Bharat Organic Expo Next Edition"
            fill
            sizes="(min-width: 1170px) 1170px, 100vw"
            className="object-cover object-center"
          />

          <div className="relative z-10 flex flex-col items-start text-left justify-center px-6 py-8 w-full max-w-[720px] mx-auto">
            <p className="text-[18px] font-medium leading-tight text-[#12281d]">
              See You at
            </p>
            <p className="mt-1 text-[26px] md:text-[28px] font-bold leading-tight tracking-[-0.01em] text-[#07553a]">
              Bharat Organic Expo 2027
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-start gap-x-6 gap-y-1.5 text-[14px] leading-snug text-[#1f2937] font-semibold">
              <span className="flex items-center gap-2">
                <CalendarDays
                  className="h-5 w-5 text-[#08743e]"
                  strokeWidth={1.75}
                />
                19 – 21 February 2027
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#08743e]" strokeWidth={1.75} />
                Bharat Mandapam, New Delhi
              </span>
            </div>

            <p className="mt-3 text-[14px] font-bold text-[#08743e]">
              Bigger Opportunities. A Greener Future.
            </p>
          </div>

          <Link
            href="/"
            className="absolute bottom-6 right-6 z-10 flex h-[42px] items-center justify-center gap-2 rounded-lg bg-[#08743e] px-5 text-[14px] font-bold text-white shadow-sm transition-colors hover:bg-[#065e32]"
          >
            Explore the Next Edition
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </section>
      </main>
    </div>
  );
}
