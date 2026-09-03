"use client";

import { useState } from "react";
import {
  BadgeCheck,
  Users,
  FileQuestion,
  IdCard,
  Headset,
  Leaf,
} from "lucide-react";
import faqBgImg from "@/app/assets/participate/msme/faq_bg.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

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
      className="relative w-full overflow-hidden bg-[#F9FCF9] py-2"
    >
      <SectionContainer>
      <div className="relative z-10 mx-auto grid w-full grid-cols-1 items-stretch gap-6 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-8">
        {/* Left: image panel */}
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div
            className="relative h-full min-h-[300px] w-full overflow-hidden rounded-[2.5rem] lg:rounded-r-[6rem] lg:rounded-l-2xl"
            role="img"
            aria-label="Bharat Organic Expo visitors browsing organic produce stalls"
          >
            <img
              src={faqBgImg.src}
              alt="FAQ Background"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right: heading + accordion */}
        <div className="w-full">
          <div className="mb-4">
            <div className="mb-2 flex items-center justify-center gap-4">
              <span className="hidden h-px w-16 bg-[#3b8c2a]/40 sm:block" aria-hidden="true" />
              <h2
                id="faq-heading"
                className="text-[18px] font-semibold tracking-tight text-slate-900 md:text-[28px] lg:text-[32px]"
              >
                Frequently Asked Questions
              </h2>
              <span className="hidden h-px w-16 bg-[#3b8c2a]/40 sm:block" aria-hidden="true" />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {FAQ_ITEMS.map((item) => {
              const Icon = item.icon;
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                  <h3 className="m-0">
                    <button
                      type="button"
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`${item.id}-panel`}
                      id={`${item.id}-button`}
                      className="flex w-full items-stretch gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b8c2a] focus-visible:ring-offset-2"
                    >
                      {/* Icon badge */}
                      <span
                        className="flex w-16 flex-none items-center justify-center bg-gradient-to-br from-[#1b5e20] to-[#3b8c2a] text-white sm:w-20"
                        style={{
                          clipPath:
                            "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
                        }}
                        aria-hidden="true"
                      >
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />
                      </span>

                      {/* Question + answer */}
                      <span className="flex flex-1 flex-col justify-center gap-1 py-2 pr-4 sm:flex-row sm:items-center sm:gap-6 sm:py-2">
                        <span className="flex-none text-[13px] font-semibold text-slate-900 sm:w-44 sm:text-[15px] lg:w-52">
                          {item.question}
                        </span>
                        <span className="hidden flex-none self-stretch border-l border-gray-200 sm:block" aria-hidden="true" />
                        <span
                          id={`${item.id}-panel`}
                          role="region"
                          aria-labelledby={`${item.id}-button`}
                          className={`text-xs leading-relaxed text-slate-600 transition-all duration-300 sm:text-sm ${
                            isOpen
                              ? "max-h-40 opacity-100"
                              : "max-h-0 overflow-hidden opacity-0 sm:max-h-40 sm:opacity-100"
                          }`}
                        >
                          {item.answer}
                        </span>
                      </span>


                    </button>
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </SectionContainer>
    </section>
  );
}