import React from "react";
import {
  Leaf,
  Quote,
  User,
  Landmark,
  ShieldCheck,
  Users,
  Award,
} from "lucide-react";
import vleafImg from "@/app/assets/icons/vleaf.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

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
      className="relative w-full overflow-hidden bg-[#F7F8F0] py-6"
    >
      <img
        src={vleafImg.src}
        alt=""
        className="pointer-events-none absolute -right-8 top-0 h-36 w-36 rotate-[20deg] object-contain opacity-10 sm:h-48 sm:w-48"
        aria-hidden="true"
      />
      <SectionContainer>
      <div className="mx-auto w-full">
        {/* Eyebrow */}
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#3b8c2a]/40 sm:w-14" aria-hidden="true" />
          <Leaf className="h-4 w-4 -rotate-45 text-[#1b5e20]" aria-hidden="true" />
          <span className="text-[11px] font-semibold tracking-[0.2em] text-[#1b5e20] sm:text-[12px]">
            HEAR FROM MSME LEADERSHIP
          </span>
          <Leaf className="h-4 w-4 rotate-[135deg] text-[#1b5e20]" aria-hidden="true" />
          <span className="h-px w-8 bg-[#3b8c2a]/40 sm:w-14" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h1
          id="msme-director-message-heading"
          className="text-balance text-center text-[18px] font-semibold leading-tight tracking-tight text-slate-900 md:text-[28px]"
        >
          OFFICIAL MESSAGE{" "}
          <span className="text-[#1b5e20]">FROM MSME DIRECTOR</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto max-w-2xl text-balance text-center text-[13px] leading-relaxed text-slate-600 sm:text-[14px]">
          A message of support and encouragement for all MSMEs participating in{" "}
          <strong className="font-semibold text-[#1b5e20]">
            Bharat Organic Expo 2027
          </strong>{" "}
          under the PMS Scheme.
        </p>

        {/* Main content: video + quote card */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          <div className="relative overflow-hidden rounded-2xl bg-[#0e1a2b] shadow-xl ring-1 ring-black/5">
            <div className="relative aspect-[2/1] w-full">
              <iframe
                src="https://www.youtube.com/embed/r5Ak4KY8-cs"
                title="MSME Director Official Message"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          <div className="relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex flex-1 gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1b5e20]">
                <Quote className="h-4 w-4 fill-white text-white" aria-hidden="true" />
              </div>
              <div>

                <h2 className="text-[18px] font-semibold tracking-wide text-slate-900 md:text-[20px]">
                  MESSAGE FROM MSME LEADERSHIP
                </h2>
                <div className="mt-1 flex items-center gap-2 sm:justify-start" aria-hidden="true">
                  <span className="h-px w-10 bg-[#3b8c2a]/40" />
                  <Leaf className="h-3.5 w-3.5 -rotate-45 text-[#1b5e20]" />
                  <span className="h-px w-10 bg-[#3b8c2a]/40" />
                </div>
              </div>
            </div>

            <blockquote className="mt-3 flex-1 text-[14px] leading-relaxed text-slate-600 md:text-[15px]">
              "Government of India is committed to empowering MSMEs and
              creating more opportunities for their growth. We appreciate
              initiatives like{" "}
              <strong className="font-semibold text-slate-900">
                Bharat Organic Expo 2027
              </strong>{" "}
              that provide a strong platform for MSMEs to showcase their
              products, build business, and expand globally."
            </blockquote>

            <div className="mt-6 border-t border-dashed border-gray-200 pt-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#1b5e20]">
                  <User className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-slate-900 sm:text-[15px]">
                    Shri. S. C. L. Das
                  </p>
                  <p className="text-[13px] leading-snug text-slate-600 sm:text-[14px]">
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
              className="pointer-events-none absolute -bottom-3 -right-3 h-24 w-24 text-[#1b5e20]/10 sm:h-28 sm:w-28"
              aria-hidden="true"
              strokeWidth={1}
            />
          </div>
        </div>
        {/* Feature strip */}
        <div className="mt-8 grid grid-cols-1 gap-4 rounded-2xl bg-[#1b5e20] p-5 sm:grid-cols-3 sm:gap-6 sm:p-6">
          <FeatureItem
            icon={<ShieldCheck className="h-7 w-7 text-white" aria-hidden="true" />}
            title="Official Message"
            description="Direct message from MSME Leadership"
          />
          <FeatureItem
            icon={<Users className="h-7 w-7 text-white" aria-hidden="true" />}
            title="For All MSMEs"
            description="Encouragement for every entrepreneur across India"
            className="sm:border-x sm:border-white/20 sm:px-6"
          />
          <FeatureItem
            icon={<Award className="h-7 w-7 text-white" aria-hidden="true" />}
            title="Government Support"
            description="Strong support for growth, competitiveness & global reach"
          />
        </div>
      </div>
      </SectionContainer>
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
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
        {icon}
      </div>
      <div>
        <p className="text-[14px] font-semibold text-white sm:text-[15px]">{title}</p>
        <p className="mt-0.5 text-[13px] leading-snug text-white/80 sm:text-[14px]">
          {description}
        </p>
      </div>
    </div>
  );
}