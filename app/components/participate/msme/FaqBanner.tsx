"use client";

import { useState } from "react";

import {
  BadgeCheck,
  Users,
  FileQuestion,
  IdCard,
  Headset,
  Leaf,
  ChevronDown,
} from "lucide-react";

import faqLeftImg from "@/app/assets/participate/msme/faq-left-visual-exact.png";
import faqLeavesImg from "@/app/assets/participate/msme/faq-leaves-exact.jpeg";

/* ================================================================
   TYPES
================================================================ */

interface FAQItem {
  id: string;
  icon: React.ElementType;
  question: string;
  answer: string;
}

/* ================================================================
   EDITABLE CONTENT
================================================================ */

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    icon: BadgeCheck,
    question:
      "Is Bharat Organic Expo approved under PMS?",
    answer:
      "Yes, subject to the exact approval/sanction received for Bharat Organic Expo 2027. Official approval details should be displayed above.",
  },

  {
    id: "faq-2",
    icon: Users,
    question:
      "Who can apply for PMS support?",
    answer:
      "Eligible Micro & Small Enterprises meeting applicable Udyam Registration, business activity, event and PMS requirements may apply.",
  },

  {
    id: "faq-3",
    icon: FileQuestion,
    question:
      "Is reimbursement guaranteed?",
    answer:
      "No. Event approval does not automatically guarantee reimbursement. Individual eligibility, documentation and final approval are required.",
  },

  {
    id: "faq-4",
    icon: IdCard,
    question:
      "I am not Udyam registered. Can your team help?",
    answer:
      "Yes. Our team can guide you regarding the Udyam Registration process and subsequent preliminary PMS eligibility screening.",
  },

  {
    id: "faq-5",
    icon: Headset,
    question:
      "Will your team support the claim process?",
    answer:
      "Yes. Our PMS Support Team can provide applicable process and documentation guidance for claim filing. Final approval and reimbursement remain with the competent MSME authority.",
  },
];

/* ================================================================
   PAGE
================================================================ */

export default function FAQBanner() {
  /*
   * Desktop reference mein sab answers visible hain.
   * Mobile par accordion useful rahega.
   */
  const [openId, setOpenId] =
    useState<string | null>(
      FAQ_ITEMS[0].id
    );

  const toggle = (id: string) => {
    setOpenId((current) =>
      current === id ? null : id
    );
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="
        relative
        left-1/2
        isolate
        w-screen
        -translate-x-1/2
        overflow-hidden
        bg-[#FAFBF8]

        lg:aspect-[1600/796]
      "
    >
      {/* ==========================================================
          SOFT BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
        "
        style={{
          background:
            "radial-gradient(ellipse 54% 55% at 54% 43%, rgba(255,255,255,0.98) 0%, rgba(253,254,250,0.94) 58%, rgba(248,250,244,0.90) 100%)",
        }}
      />

      {/* ==========================================================
          LEFT EXACT ARTWORK

          Reference approx:
          x: 0 → 358
          y: 94 → 730
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-0
          top-[11.8%]
          z-[1]
          hidden
          h-[79.8%]
          w-[22.7%]
          overflow-hidden
          lg:block
        "
        style={{
          borderRadius:
            "0 48% 48% 0 / 0 50% 50% 0",
        }}
      >
        <img
          src={faqLeftImg.src}
          alt=""
          className="
            h-full
            w-full
            object-cover
            object-left
          "
        />

        {/* green edge */}

        <div
          className="
            absolute
            inset-y-0
            right-0
            w-[9px]
            bg-[#6FA934]
          "
        />
      </div>

      {/* ==========================================================
          TOP RIGHT LEAF BRANCH
      ========================================================== */}

      <img
        src={faqLeavesImg.src}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-0
          top-[6.2%]
          z-[2]
          hidden
          w-[16.3%]
          object-contain
          object-right-top
          lg:block
        "
      />

      {/* ==========================================================
          MSME BADGE

          Reference:
          centre around x 323 / y 452
      ========================================================== */}

      <div
        className="
          absolute
          left-[15.2%]
          top-[46.1%]
          z-[5]
          hidden
          aspect-square
          w-[10.7%]
          min-w-[120px]
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border-[3px]
          border-[#7B9D67]
          bg-[#FDFEFA]
          shadow-[0_3px_10px_rgba(35,58,24,0.18)]
          lg:flex
        "
      >
        <div
          className="
            absolute
            inset-[5px]
            rounded-full
            border
            border-[#B8C9AC]
          "
        />

        <div
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            text-center
          "
        >
          <Leaf
            className="
              mb-[5%]
              h-[24px]
              w-[24px]
              text-[#357220]
            "
            strokeWidth={1.8}
          />

          <span
            className="
              text-[clamp(10px,1.05vw,16px)]
              font-semibold
              uppercase
              leading-none
              text-[#345423]
            "
          >
            Supporting
          </span>

          <strong
            className="
              mt-[5%]
              text-[clamp(17px,1.7vw,27px)]
              font-semibold
              uppercase
              leading-none
              tracking-[-0.02em]
              text-[#184B0E]
            "
          >
            MSMEs
          </strong>

          <span
            className="
              mt-[7%]
              text-[clamp(9px,0.95vw,15px)]
              font-semibold
              uppercase
              leading-[1.22]
              text-[#365726]
            "
          >
            Growth
            <br />
            Together
          </span>
        </div>
      </div>

      {/* ==========================================================
          DESKTOP VERSION
      ========================================================== */}

      <div
        className="
          relative
          z-10
          hidden
          h-full
          w-full
          lg:block
        "
      >
        {/* ========================================================
            FAQ TITLE

            Reference top ~ 78px
        ======================================================== */}

        <div
          className="
            absolute
            left-[52.1%]
            top-[8.3%]
            flex
            -translate-x-1/2
            items-center
            justify-center
            gap-[1.6vw]
          "
        >
          {/* LEFT DECORATION */}

          <div
            className="
              flex
              items-center
              gap-[0.5vw]
            "
          >
            <span
              className="
                h-px
                w-[7.5vw]
                max-w-[118px]
                bg-[#6C8B54]
              "
            />

            <Leaf
              className="
                h-[2vw]
                max-h-[30px]
                min-h-[21px]
                w-[2vw]
                max-w-[30px]
                min-w-[21px]
                rotate-[-35deg]
                text-[#306D16]
              "
              fill="currentColor"
              strokeWidth={1}
            />
          </div>

          {/* FAQ */}

          <h2
            id="faq-heading"
            className="
              whitespace-nowrap
              text-[clamp(52px,5.15vw,82px)]
              font-semibold
              uppercase
              leading-[0.9]
              tracking-[-0.04em]
              text-[#154D00]
            "
          >
            FAQ
          </h2>

          {/* RIGHT DECORATION */}

          <div
            className="
              flex
              items-center
              gap-[0.5vw]
            "
          >
            <Leaf
              className="
                h-[2vw]
                max-h-[30px]
                min-h-[21px]
                w-[2vw]
                max-w-[30px]
                min-w-[21px]
                rotate-[35deg]
                text-[#306D16]
              "
              fill="currentColor"
              strokeWidth={1}
            />

            <span
              className="
                h-px
                w-[7.5vw]
                max-w-[118px]
                bg-[#6C8B54]
              "
            />
          </div>
        </div>

        {/* ========================================================
            FREQUENTLY ASKED QUESTIONS SUBTITLE
        ======================================================== */}

        <div
          className="
            absolute
            left-[52.1%]
            top-[21.8%]
            flex
            -translate-x-1/2
            items-center
            gap-[1vw]
          "
        >
          <span
            className="
              h-[7px]
              w-[7px]
              rounded-full
              bg-[#367416]
            "
          />

          <p
            className="
              whitespace-nowrap
              text-[clamp(15px,1.55vw,24px)]
              font-semibold
              uppercase
              tracking-[0.02em]
              text-[#37373D]
            "
          >
            Frequently Asked Questions
          </p>

          <span
            className="
              h-[7px]
              w-[7px]
              rounded-full
              bg-[#367416]
            "
          />
        </div>

        {/* ========================================================
            FAQ CARDS GROUP

            Reference:
            left ≈ 421px = 26.3%
            right ≈ 1517px
            top ≈ 239px = 30%
            bottom ≈ 710px
        ======================================================== */}

        <div
          className="
            absolute
            left-[26.25%]
            top-[29.95%]
            flex
            h-[59.25%]
            w-[68.6%]
            flex-col
            justify-between
          "
        >
          {FAQ_ITEMS.map(
            (item) => {
              const Icon =
                item.icon;

              return (
                <div
                  key={item.id}
                  className="
                    grid
                    h-[17.85%]
                    min-h-0
                    w-full
                    grid-cols-[9.2%_28.2%_1px_minmax(0,1fr)]
                    items-center
                    overflow-hidden
                    rounded-[1.05vw]
                    border
                    border-[#E8EAE5]
                    bg-[rgba(255,255,255,0.96)]
                    shadow-[0_3px_9px_rgba(37,55,28,0.13)]
                  "
                >
                  {/* ==================================================
                      GREEN ICON WEDGE
                  ================================================== */}

                  <div
                    className="
                      flex
                      h-full
                      w-full
                      items-center
                      justify-center
                      bg-gradient-to-br
                      from-[#174E00]
                      via-[#2D6909]
                      to-[#3F7A0A]
                      text-white
                    "
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0, 78% 100%, 0% 100%)",
                    }}
                  >
                    <Icon
                      className="
                        h-[43%]
                        w-[43%]
                        max-h-[42px]
                        max-w-[42px]
                      "
                      strokeWidth={1.55}
                    />
                  </div>

                  {/* ==================================================
                      QUESTION
                  ================================================== */}

                  <div
                    className="
                      flex
                      h-full
                      min-w-0
                      items-center
                      px-[8%]
                    "
                  >
                    <h3
                      className="
                        text-[clamp(11px,1.2vw,18px)]
                        font-semibold
                        leading-[1.3]
                        tracking-[-0.015em]
                        text-[#174C13]
                      "
                    >
                      {item.question}
                    </h3>
                  </div>

                  {/* ==================================================
                      VERTICAL DIVIDER
                  ================================================== */}

                  <div
                    className="
                      h-[56%]
                      w-px
                      bg-[#BFC4BA]
                    "
                  />

                  {/* ==================================================
                      ANSWER
                  ================================================== */}

                  <div
                    className="
                      flex
                      h-full
                      min-w-0
                      items-center
                      px-[3.2%]
                    "
                  >
                    <p
                      className="
                        text-[clamp(10px,1vw,15px)]
                        font-semibold
                        leading-[1.42]
                        tracking-[-0.012em]
                        text-[#2B2F39]
                      "
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>

      {/* ==========================================================
          MOBILE + TABLET

          Desktop layout ko disturb nahi karega.
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[850px]
          px-5
          py-10
          lg:hidden
        "
      >
        {/* MOBILE HEADING */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span
            className="
              h-px
              w-12
              bg-[#7E986C]
            "
          />

          <Leaf
            className="
              h-5
              w-5
              text-[#337018]
            "
            fill="currentColor"
          />

          <h2
            className="
              text-[46px]
              font-semibold
              uppercase
              leading-none
              tracking-[-0.04em]
              text-[#154D00]
            "
          >
            FAQ
          </h2>

          <Leaf
            className="
              h-5
              w-5
              text-[#337018]
            "
            fill="currentColor"
          />

          <span
            className="
              h-px
              w-12
              bg-[#7E986C]
            "
          />
        </div>

        <div
          className="
            mt-4
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span
            className="
              h-[5px]
              w-[5px]
              rounded-full
              bg-[#347318]
            "
          />

          <p
            className="
              text-center
              text-[13px]
              font-semibold
              uppercase
              tracking-[0.03em]
              text-[#3C3D43]
            "
          >
            Frequently Asked Questions
          </p>

          <span
            className="
              h-[5px]
              w-[5px]
              rounded-full
              bg-[#347318]
            "
          />
        </div>

        {/* MOBILE FAQ */}

        <div
          className="
            mt-8
            space-y-3
          "
        >
          {FAQ_ITEMS.map(
            (item) => {
              const Icon =
                item.icon;

              const isOpen =
                openId === item.id;

              return (
                <div
                  key={item.id}
                  className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-[#E6E9E2]
                    bg-white
                    shadow-[0_3px_9px_rgba(37,55,28,0.10)]
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      toggle(
                        item.id
                      )
                    }
                    aria-expanded={
                      isOpen
                    }
                    className="
                      flex
                      w-full
                      items-center
                      text-left
                    "
                  >
                    {/* icon */}

                    <span
                      className="
                        flex
                        h-[72px]
                        w-[72px]
                        shrink-0
                        items-center
                        justify-center
                        bg-gradient-to-br
                        from-[#174E00]
                        to-[#407B0A]
                        text-white
                      "
                      style={{
                        clipPath:
                          "polygon(0 0,100% 0,80% 100%,0 100%)",
                      }}
                    >
                      <Icon
                        className="
                          h-7
                          w-7
                        "
                        strokeWidth={1.6}
                      />
                    </span>

                    <span
                      className="
                        min-w-0
                        flex-1
                        px-4
                        py-3
                        text-[13px]
                        font-semibold
                        leading-[1.35]
                        text-[#174C13]
                      "
                    >
                      {
                        item.question
                      }
                    </span>
                  </button>

                  <div
                    className={`
                      grid
                      transition-all
                      duration-300

                      ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }
                    `}
                  >
                    <div
                      className="
                        overflow-hidden
                      "
                    >
                      <p
                        className="
                          border-t
                          border-[#ECEFE9]
                          px-5
                          py-4
                          text-[13px]
                          font-semibold
                          leading-[1.6]
                          text-[#343841]
                        "
                      >
                        {
                          item.answer
                        }
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}