import { Award, Target, Handshake, Headset, Calendar, Leaf } from "lucide-react";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    icon: <Award className="h-9 w-9 text-emerald-700" strokeWidth={1.75} />,
    title: "PMS Approved Event*",
    description:
      "Opportunity for eligible MSEs to explore applicable PMS assistance.",
  },
  {
    icon: <Target className="h-9 w-9 text-emerald-700" strokeWidth={1.75} />,
    title: "Focused Industry Platform",
    description:
      "Organic • Food • Nutrition • AYUSH • Herbal • Wellness • Agriculture • GreenTech",
  },
  {
    icon: <Handshake className="h-9 w-9 text-emerald-700" strokeWidth={1.75} />,
    title: "B2B Opportunities",
    description:
      "Connect with buyers, distributors and industry professionals.",
  },
  {
    icon: <Headset className="h-9 w-9 text-emerald-700" strokeWidth={1.75} />,
    title: "Dedicated PMS Support",
    description: "Guidance before, during and after exhibition participation.",
  },
];

export default function WhyParticipateSection() {
  return (
    <section
      aria-labelledby="why-participate-heading"
      className="relative w-full overflow-hidden px-4 py-6 md:px-11"
    >
      <div className="relative mx-auto flex w-full flex-col items-center">
        {/* Sub-eyebrow */}
        <div className="mt-6 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-emerald-700 sm:text-sm">
          <span className="h-px w-8 bg-emerald-600 sm:w-10" aria-hidden="true" />
          <span>WHY PARTICIPATE</span>
          <span className="h-px w-8 bg-emerald-600 sm:w-10" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h2
          id="why-participate-heading"
          className="mt-4 max-w-4xl text-balance text-center text-2xl font-semibold leading-tight text-slate-900 sm:text-3xl md:text-4xl"
        >
          More Than an{" "}
          <span className="relative inline-block text-emerald-700">
            Exhibition
            <svg
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute -bottom-2 left-0 h-2.5 w-full text-emerald-600"
            >
              <path
                d="M2 8 C 40 2, 160 2, 198 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          Opportunity
        </h2>

        {/* Cards */}
        <ul className="mt-14 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="flex flex-col items-center overflow-hidden rounded-2xl border border-emerald-900/5 bg-white text-center shadow-[0_8px_30px_-12px_rgba(15,23,42,0.15)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-1 flex-col items-center px-6 pb-8 pt-9">
                <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                  {feature.title}
                </h3>
                <span
                  className="my-3 h-0.5 w-8 rounded-full bg-emerald-600"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  {feature.description}
                </p>
              </div>
              <span
                className="h-1.5 w-full bg-gradient-to-r from-emerald-700 to-emerald-500"
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#book-stand"
          className="mt-12 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-800 to-emerald-700 px-9 py-4 text-sm font-semibold tracking-wide text-white shadow-lg shadow-emerald-900/20 transition-transform duration-200 hover:scale-[1.03] hover:shadow-emerald-900/30 sm:text-base"
        >
          <Calendar className="h-5 w-5" aria-hidden="true" />
          BOOK YOUR STAND
          <span aria-hidden="true">→</span>
        </a>

        {/* Footnote */}
        <p className="mt-6 w-full text-left text-xs text-slate-500 sm:text-sm">
          *Subject to approval under PMS Scheme guidelines.
        </p>
      </div>
    </section>
  );
}