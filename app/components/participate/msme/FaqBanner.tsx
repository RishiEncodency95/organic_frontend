"use client";

import { useState } from "react";
import {
  BadgeCheck,
  Users,
  FileQuestion,
  IdCard,
  Headset,
  ChevronDown,
  Leaf,
} from "lucide-react";

interface FAQItem {
  id: string;
  icon: React.ElementType;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    icon: BadgeCheck,
    question: "Is Bharat Organic Expo approved under PMS?",
    answer:
      "Yes, subject to the exact approval/sanction received for Bharat Organic Expo 2027. Official approval details should be displayed above.",
  },
  {
    id: "faq-2",
    icon: Users,
    question: "Who can apply for PMS support?",
    answer:
      "Eligible Micro & Small Enterprises meeting applicable Udyam Registration, business activity, event and PMS requirements may apply.",
  },
  {
    id: "faq-3",
    icon: FileQuestion,
    question: "Is reimbursement guaranteed?",
    answer:
      "No. Event approval does not automatically guarantee reimbursement. Individual eligibility, documentation and final approval are required.",
  },
  {
    id: "faq-4",
    icon: IdCard,
    question: "I am not Udyam registered. Can your team help?",
    answer:
      "Yes. Our team can guide you regarding the Udyam Registration process and subsequent preliminary PMS eligibility screening.",
  },
  {
    id: "faq-5",
    icon: Headset,
    question: "Will your team support the claim process?",
    answer:
      "Yes. Our PMS Support Team can provide applicable process and documentation guidance for claim filing. Final approval and reimbursement remain with the competent MSME authority.",
  },
];

export default function FAQBanner() {
  // First item open by default, mirroring the reference design's "active" state
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative w-full overflow-hidden bg-gradient-to-b from-green-50/60 to-white px-4 py-12 md:px-11 sm:py-16 lg:py-20"
    >
      {/* Decorative leaf accent, top right */}
      <Leaf
        className="pointer-events-none absolute -top-4 right-6 hidden h-24 w-24 rotate-[20deg] text-green-700/20 sm:block lg:right-10 lg:h-32 lg:w-32"
        strokeWidth={1}
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:gap-12">
        {/* Left: image panel — bg image is supplied separately, this is just the frame */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-green-900/10 shadow-lg lg:rounded-r-[6rem] lg:rounded-l-2xl"
            role="img"
            aria-label="Bharat Organic Expo visitors browsing organic produce stalls"
          >
            {/* Intentionally left empty — background image is applied via CSS/props elsewhere */}
          </div>

          {/* Overlapping "Supporting MSMEs" badge */}
          <div className="absolute -bottom-6 right-2 flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-white bg-white text-center shadow-xl sm:h-32 sm:w-32 lg:-right-4 lg:bottom-4">
            <Leaf className="mb-1 h-5 w-5 text-green-700" aria-hidden="true" />
            <p className="text-[11px] font-semibold uppercase leading-tight text-green-900 sm:text-xs">
              Supporting
            </p>
            <p className="text-sm font-extrabold uppercase leading-tight text-green-800 sm:text-base">
              MSMEs
            </p>
            <p className="text-[11px] font-semibold uppercase leading-tight text-green-900 sm:text-xs">
              Growth Together
            </p>
          </div>
        </div>

        {/* Right: heading + accordion */}
        <div className="w-full">
          <div className="mb-8 text-center lg:mb-10">
            <div className="mb-2 flex items-center justify-center gap-4">
              <span className="hidden h-px w-16 bg-green-700/40 sm:block" aria-hidden="true" />
              <h2
                id="faq-heading"
                className="text-4xl font-extrabold tracking-tight text-green-900 sm:text-5xl lg:text-6xl"
              >
                FAQ
              </h2>
              <span className="hidden h-px w-16 bg-green-700/40 sm:block" aria-hidden="true" />
            </div>
            <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-green-800 sm:text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-green-700" aria-hidden="true" />
              Frequently Asked Questions
              <span className="h-1.5 w-1.5 rounded-full bg-green-700" aria-hidden="true" />
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {FAQ_ITEMS.map((item) => {
              const Icon = item.icon;
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5"
                >
                  <h3 className="m-0">
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`${item.id}-panel`}
                      id={`${item.id}-button`}
                      className="flex w-full items-stretch gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
                    >
                      {/* Icon badge */}
                      <span
                        className="flex w-16 flex-none items-center justify-center bg-gradient-to-br from-green-800 to-green-600 text-white sm:w-20"
                        style={{
                          clipPath:
                            "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
                        }}
                        aria-hidden="true"
                      >
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />
                      </span>

                      {/* Question + answer */}
                      <span className="flex flex-1 flex-col justify-center gap-1 py-4 pr-4 sm:flex-row sm:items-center sm:gap-6 sm:py-5">
                        <span className="flex-none text-base font-bold text-green-950 sm:w-56 sm:text-lg lg:w-64">
                          {item.question}
                        </span>
                        <span className="hidden flex-none self-stretch border-l border-gray-200 sm:block" aria-hidden="true" />
                        <span
                          id={`${item.id}-panel`}
                          role="region"
                          aria-labelledby={`${item.id}-button`}
                          className={`text-sm leading-relaxed text-gray-600 transition-all duration-300 sm:text-base ${
                            isOpen
                              ? "max-h-40 opacity-100"
                              : "max-h-0 overflow-hidden opacity-0 sm:max-h-40 sm:opacity-100"
                          }`}
                        >
                          {item.answer}
                        </span>
                      </span>

                      {/* Chevron */}
                      <span className="flex flex-none items-center pr-4 sm:pr-6">
                        <ChevronDown
                          className={`h-5 w-5 text-green-700 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </span>
                    </button>
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}