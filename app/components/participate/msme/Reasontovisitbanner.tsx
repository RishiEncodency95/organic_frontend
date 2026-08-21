import { ReactNode } from "react";
import {
  PackageOpen,
  Users,
  Globe2,
  TrendingUp,
  Award,
  Sprout,
  ArrowRight,
  Leaf,
} from "lucide-react";
import reasonToVisitImg from "@/app/assets/participate/msme/reason_to_visit.png";

/**
 * Bharat Organic Expo — "Reason to Visit" banner
 * -------------------------------------------------
 * Notes:
 * - No background image is included here (you said you already have one).
 *   The section root has `relative` + a transparent/cream fallback bg so you
 *   can drop your bg image on the parent wrapper or via a CSS class/inline style.
 * - The photo-collage blobs on the right are placeholders (gradient blocks).
 *   Swap the commented `<img>` tags in for your real photos — the blob
 *   shapes are done with `rounded-[...]` clip-path-free border-radius so
 *   any image will crop correctly with `object-cover`.
 * - Built mobile-first: stacks on small screens, matches the 2-column /
 *   6-column layout from ~lg upward.
 */

type Feature = {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    id: "01",
    icon: <PackageOpen className="h-9 w-9" strokeWidth={1.75} />,
    title: "Discover New Products",
    description:
      "Explore the latest organic, natural, AYUSH and sustainable products from leading brands and innovators.",
  },
  {
    id: "02",
    icon: <Users className="h-9 w-9" strokeWidth={1.75} />,
    title: "Learn From Industry Experts",
    description:
      "Gain insights from 150+ speakers through seminars, panel discussions and knowledge sessions.",
  },
  {
    id: "03",
    icon: <Globe2 className="h-9 w-9" strokeWidth={1.75} />,
    title: "Expand Your Network",
    description:
      "Connect with industry leaders, decision-makers, distributors and partners from across the globe.",
  },
  {
    id: "04",
    icon: <TrendingUp className="h-9 w-9" strokeWidth={1.75} />,
    title: "Stay Ahead of Trends",
    description:
      "Stay updated with emerging trends, innovations and technologies shaping the organic industry.",
  },
  {
    id: "05",
    icon: <Award className="h-9 w-9" strokeWidth={1.75} />,
    title: "Recognition & Celebration",
    description:
      "Celebrate excellence at Bharat Organic Excellence Awards and honor the changemakers.",
  },
  {
    id: "06",
    icon: <Sprout className="h-9 w-9" strokeWidth={1.75} />,
    title: "Be Part of a Better Tomorrow",
    description:
      "Join the movement towards a healthier, sustainable and environmentally responsible future.",
  },
];

export default function ReasonToVisitBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f0ede0] px-4 py-6 md:px-11">
      <div className="mx-auto w-full">
        {/* ===================== TOP: heading + photo collage ===================== */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8">
          {/* ---------- Left: copy ---------- */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Leaf
                className="h-5 w-5 shrink-0 -rotate-12 text-[#2F5E2F]"
                strokeWidth={2}
              />
              <p className="text-xs font-semibold uppercase tracking-wide text-[#2F5E2F] sm:text-sm">
                Be part of India&rsquo;s leading{" "}
                <span className="block text-[#14231A] sm:inline">
                  Organic &amp; Sustainable Future
                </span>
              </p>
            </div>

            <h1 className="relative font-sans text-3xl font-semibold uppercase leading-[1.1] tracking-tight text-[#14231A] sm:text-4xl md:text-5xl">
              Reason
              <Leaf
                className="ml-1 inline-block h-6 w-6 -translate-y-3 rotate-45 text-[#2F5E2F] sm:h-7 sm:w-7"
                strokeWidth={2}
              />
              <br />
              To Visit
            </h1>

            <div className="mt-5 max-w-md">
              <h2 className="text-lg font-semibold text-[#2F5E2F] sm:text-xl">
                More than an Expo. A Gateway to Growth.
              </h2>
              <span className="mt-1 block h-[3px] w-14 bg-[#2F5E2F]" />
              <p className="mt-4 text-sm leading-relaxed text-[#3F4A42] sm:text-base">
                Bharat Organic Expo brings together the entire organic
                ecosystem to create opportunities, inspire innovation and
                build a healthier tomorrow.
              </p>
            </div>
          </div>

          {/* ---------- Right: photo ---------- */}
          <div className="relative">
            {/* Photo */}
            <div className="aspect-[16/9] overflow-hidden rounded-[2.5rem]">
              <img
                src={reasonToVisitImg.src}
                alt="Bharat Organic Expo exhibition hall with visitors"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ===================== FEATURES STRIP ===================== */}
        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-[#E1DDD0] pt-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-6 lg:divide-x lg:divide-dashed lg:divide-[#D7D2C2]">
            {FEATURES.map((feature) => (
              <article
                key={feature.id}
                className="flex flex-col items-center px-2 text-center lg:px-4"
              >
                <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#e5e0d0] text-[#2F5E2F] sm:h-20 sm:w-20">
                  {feature.icon}
                </span>
                <h3 className="text-xs font-semibold uppercase leading-snug text-[#14231A] sm:text-sm">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[11px] leading-relaxed text-[#5B6B5E] sm:text-xs">
                  {feature.description}
                </p>
                <span className="mt-auto rounded-md bg-[#1E331E] px-3 py-1 text-xs font-semibold text-white">
                  {feature.id}
                </span>
              </article>
            ))}
        </div>

        {/* ===================== BOTTOM CTA BAR ===================== */}
        <div className="mt-6 flex flex-col gap-4 rounded-[2rem] border border-[#E1DDD0] bg-white/60 p-4 sm:flex-row sm:items-center sm:justify-center sm:gap-6 sm:p-5 gap-4">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <span className="flex items-center gap-2 text-sm font-medium text-[#2F5E2F] sm:text-base">
              <Leaf className="h-4 w-4 shrink-0" strokeWidth={2} />
              One Platform. Unlimited Opportunities.
            </span>
            <span className="hidden h-6 w-px bg-[#D7D2C2] sm:block" />
            <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#14231A] sm:text-base">
              Don&rsquo;t Miss It!
              <Leaf className="h-4 w-4 shrink-0 rotate-90" strokeWidth={2} />
            </span>
          </div>

          <a
            href="#plan-your-visit"
            className="group flex items-center justify-center gap-3 rounded-full bg-[#1E331E] px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#2F5E2F] sm:text-base"
          >
            Plan Your Visit Now
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
