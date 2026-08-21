import React from "react";
import {
  Leaf,
  Play,
  Clock,
  Volume2,
  Settings,
  Maximize2,
  Quote,
  User,
  Landmark,
  ShieldCheck,
  Users,
  Award,
} from "lucide-react";
import officialMessageImg from "@/app/assets/participate/msme/official_message.png";

/**
 * OfficialMessageBanner
 * -------------------------------------------------------------
 * Section banner: "Official Message from MSME Director"
 * - Pure Tailwind, no external/background images baked in.
 * - Pass `videoThumbnailUrl` if you want a real photo behind the
 *   play button; otherwise a themed placeholder panel is shown.
 * - Fully responsive: stacks to a single column on small screens.
 */

interface OfficialMessageBannerProps {
  videoThumbnailUrl?: string;
  videoDuration?: string; // e.g. "1:12"
}

export default function OfficialMessageBanner({
  videoThumbnailUrl,
  videoDuration = "1:12",
}: OfficialMessageBannerProps) {
  return (
    <section
      aria-labelledby="msme-director-message-heading"
      className="w-full bg-[#faf6ee] px-4 py-6 md:px-11"
    >
      <div className="mx-auto w-full">
        {/* Eyebrow */}
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#2f6b3a]/40 sm:w-14" aria-hidden="true" />
          <Leaf className="h-4 w-4 -rotate-45 text-[#2f6b3a]" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-[0.2em] text-[#2f6b3a] sm:text-sm">
            HEAR FROM MSME LEADERSHIP
          </span>
          <Leaf className="h-4 w-4 rotate-[135deg] text-[#2f6b3a]" aria-hidden="true" />
          <span className="h-px w-8 bg-[#2f6b3a]/40 sm:w-14" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h1
          id="msme-director-message-heading"
          className="text-balance text-center text-xl font-semibold leading-tight tracking-tight text-[#16233a] sm:text-2xl"
        >
          OFFICIAL MESSAGE{" "}
          <span className="text-[#2f6b3a]">FROM MSME DIRECTOR</span>
        </h1>

        {/* Divider dots */}
        <div className="my-3 flex items-center justify-center gap-2" aria-hidden="true">
          <span className="h-px w-px bg-[#2f6b3a]/30 sm:w-16" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#2f6b3a]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#2f6b3a]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#2f6b3a]" />
          <span className="h-px w-px bg-[#2f6b3a]/30 sm:w-16" />
        </div>

        {/* Subheading */}
        <p className="mx-auto max-w-2xl text-balance text-center text-xs leading-relaxed text-[#3d4a5c] sm:text-sm">
          A message of support and encouragement for all MSMEs participating in{" "}
          <strong className="font-semibold text-[#2f6b3a]">
            Bharat Organic Expo 2027
          </strong>{" "}
          under the PMS Scheme.
        </p>

        {/* Main content: video + quote card */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.55fr_1fr] lg:gap-6">
          {/* Video card */}
          <div className="relative overflow-hidden rounded-2xl bg-[#0e1a2b] shadow-xl ring-1 ring-black/5">
            {/* Thumbnail */}
            <div className="relative aspect-[3/1] w-full sm:aspect-[5/2]">
              <img
                src={officialMessageImg.src}
                alt="MSME Director sharing an official video message"
                className="h-full w-full object-cover"
              />

              {/* Duration badge */}
              <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-[#1f4d2c]/90 px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm backdrop-blur-sm sm:left-4 sm:top-4 sm:text-xs">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                45–90 Sec Message
              </div>

              {/* Play button */}
              <button
                type="button"
                aria-label="Play official message video"
                className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 shadow-lg transition hover:scale-105 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2f6b3a] focus-visible:ring-offset-2"
              >
                <Play className="ml-0.5 h-5 w-5 fill-[#1f4d2c] text-[#1f4d2c]" aria-hidden="true" />
              </button>
            </div>

            {/* Control bar */}
            <div className="flex items-center gap-2 bg-[#0a1420] px-3 py-2">
              <button
                type="button"
                aria-label="Play"
                className="text-white/90 transition hover:text-white focus:outline-none"
              >
                <Play className="h-4 w-4 fill-current" aria-hidden="true" />
              </button>

              <span className="whitespace-nowrap text-[11px] font-medium text-white/80 sm:text-xs">
                0:00 / {videoDuration}
              </span>

              <div
                className="relative h-1 flex-1 rounded-full bg-white/20"
                role="slider"
                aria-label="Video progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={35}
              >
                <div className="h-full w-[35%] rounded-full bg-[#6fae5c]" />
                <span className="absolute left-[35%] top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow" />
              </div>

              <button type="button" aria-label="Mute" className="hidden text-white/90 transition hover:text-white focus:outline-none sm:inline-flex">
                <Volume2 className="h-4 w-4" aria-hidden="true" />
              </button>
              <button type="button" aria-label="Settings" className="hidden text-white/90 transition hover:text-white focus:outline-none sm:inline-flex">
                <Settings className="h-4 w-4" aria-hidden="true" />
              </button>
              <button type="button" aria-label="Fullscreen" className="text-white/90 transition hover:text-white focus:outline-none">
                <Maximize2 className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Quote card */}
          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-[#e7e1d3] bg-white p-5 shadow-sm">
            {/* Quote icon */}
            <div className="flex flex-1 gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1f4d2c]">
              <Quote className="h-4 w-4 fill-white text-white" aria-hidden="true" />
            </div>
<div>

            <h2 className="text-lg font-semibold tracking-wide text-[#16233a] sm:text-xl">
              MESSAGE FROM MSME LEADERSHIP
            </h2>
            <div className="mt-1 flex items-center gap-2 sm:justify-start" aria-hidden="true">
              <span className="h-px w-10 bg-[#2f6b3a]/40" />
              <Leaf className="h-3.5 w-3.5 -rotate-45 text-[#2f6b3a]" />
              <span className="h-px w-10 bg-[#2f6b3a]/40" />
</div>
</div>
</div>

            <blockquote className="mt-3 flex-1 text-base leading-relaxed text-[#3d4a5c] sm:text-lg">
              “Government of India is committed to empowering MSMEs and
              creating more opportunities for their growth. We appreciate
              initiatives like{" "}
              <strong className="font-semibold text-[#16233a]">
                Bharat Organic Expo 2027
              </strong>{" "}
              that provide a strong platform for MSMEs to showcase their
              products, build business, and expand globally.”
            </blockquote>

            <div className="mt-6 border-t border-dashed border-[#d9d2c0] pt-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#1f4d2c]">
                  <User className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#16233a] sm:text-lg">
                    Shri. S. C. L. Das
                  </p>
                  <p className="text-sm leading-snug text-[#5c6773] sm:text-[15px]">
                    Development Commissioner (MSME)
                    <br />
                    Ministry of Micro, Small &amp; Medium Enterprises
                    <br />
                    Government of India
                  </p>
                </div>
              </div>
            </div>

            <Landmark
              className="pointer-events-none absolute -bottom-3 -right-3 h-24 w-24 text-[#2f6b3a]/10 sm:h-28 sm:w-28"
              aria-hidden="true"
              strokeWidth={1}
            />
          </div>
        </div>

        {/* Feature strip */}
        <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl border border-[#e7e1d3] bg-white/60 p-5 sm:grid-cols-3 sm:gap-6 sm:p-6">
          <FeatureItem
            icon={<ShieldCheck className="h-7 w-7 text-[#1f4d2c]" aria-hidden="true" />}
            title="Official Message"
            description="Direct message from MSME Leadership"
          />
          <FeatureItem
            icon={<Users className="h-7 w-7 text-[#1f4d2c]" aria-hidden="true" />}
            title="For All MSMEs"
            description="Encouragement for every entrepreneur across India"
            className="sm:border-x sm:border-[#e7e1d3] sm:px-6"
          />
          <FeatureItem
            icon={<Award className="h-7 w-7 text-[#1f4d2c]" aria-hidden="true" />}
            title="Government Support"
            description="Strong support for growth, competitiveness & global reach"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({
  icon,
  title,
  description,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#eaf2e6]">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-[#16233a] sm:text-[15px]">{title}</p>
        <p className="mt-0.5 text-xs leading-snug text-[#5c6773] sm:text-[13px]">
          {description}
        </p>
      </div>
    </div>
  );
}