"use client";

import React from "react";
import { Leaf } from "lucide-react";
import Image from "next/image";
import { Reveal } from "../shared/Reveal";
import SectionContainer from "@/app/components/layout/SectionContainer";

import organic from "@/app/assets/awards/organic_food.png";
import ayush from "@/app/assets/awards/ayush.png";
import organic_agriculture from "@/app/assets/awards/organic_agriculture.png";
import natural from "@/app/assets/awards/natural.png";
import greentech from "@/app/assets/awards/greentech.png";
import trade from "@/app/assets/awards/trade.png";
import card_bg from "@/app/assets/awards/card_bg.png";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="flex items-center justify-center gap-2.5 text-center mb-6">
      <Leaf className="h-4 w-4 shrink-0 -rotate-45 text-[#1b5e20]" />

      <h2 className="text-xl md:text-2xl font-semibold text-[#1b5e20] uppercase leading-[1.1] font-poppins relative inline-block">
        {children}
      </h2>

      <Leaf className="h-4 w-4 shrink-0 rotate-[135deg] text-[#1b5e20]" />
    </Reveal>
  );
}

const CATEGORIES = [
  {
    icon: organic,
    title: "Organic Food & Nutrition Excellence",
    items: [
      "Organic Food Brand of the Year",
      "Organic Beverage Brand of the Year",
      "Nutrition Innovation Award",
      "Emerging Organic Food Brand",
    ],
    cardBg: "bg-[#e8f5e9]",
  },

  {
    icon: ayush,
    title: "Ayush, Herbal & Wellness Excellence",
    items: [
      "Ayurveda Brand Excellence",
      "Herbal Product Innovation",
      "Wellness Brand of the Year",
      "Traditional Wellness Excellence",
    ],
    cardBg: "bg-[#fff8e1]",
  },

  {
    icon: organic_agriculture,
    title: "Organic Agriculture Excellence",
    items: [
      "Organic Farmer Excellence",
      "Organic Farming Innovation",
      "Bio-Input Excellence",
      "Sustainable Agriculture Initiative",
    ],
    cardBg: "bg-[#fdf1e3]",
  },

  {
    icon: natural,
    title: "Natural Living & Personal Care Excellence",
    items: [
      "Natural Beauty Brand",
      "Natural Personal Care Innovation",
      "Sustainable Lifestyle Brand",
      "Emerging Natural Brand",
    ],
    cardBg: "bg-[#e0f2f1]",
  },

  {
    icon: greentech,
    title: "GreenTech & Sustainability Excellence",
    items: [
      "GreenTech Innovation",
      "Sustainable Packaging Excellence",
      "AgriTech Innovation",
      "Sustainability Initiative of the Year",
    ],
    cardBg: "bg-[#e8f5e9]",
  },

  {
    icon: trade,
    title: "Trade, Certification & Global Business Excellence",
    items: [
      "Organic Export Excellence",
      "International Market Development",
      "Certification & Quality Excellence",
      "Organic Trade Promotion",
    ],
    cardBg: "bg-[#f3e5f5]",
  },
];

const AwardsCategories = () => {
  return (
    <section
      id="categories"
      className="bg-[#f9f9f9] py-4 font-inter"
    >
      <SectionContainer>
        <SectionHeading>Award Categories</SectionHeading>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => {
            return (
              <Reveal
                key={cat.title}
                delay={i * 90}
                className="h-full"
              >
                <div
                  className={`
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-xl
                    ${cat.cardBg}
                    p-5
                    transition-shadow
                    duration-300
                    hover:shadow-md
                  `}
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                  }}
                >
                  {/* ========================================
                      DECORATIVE CARD BACKGROUND
                      Left side - 30% width - 50% height
                  ======================================== */}
              <Image
  src={card_bg}
  alt=""
  width={500}
  height={500}
  className="
    pointer-events-none
    absolute
    right-0
    bottom-0
    z-0
    w-[30%]
    h-[50%]
    object-contain
    object-right-bottom
  "
/>

                  {/* ========================================
                      CARD CONTENT
                  ======================================== */}
                  <div className="relative z-10">
                    {/* Icon + Title */}
                    <div className="mb-3 flex flex-col items-center gap-3 mx-auto max-w-sm">
                      <Image
                        src={cat.icon}
                        alt={cat.title}
                        width={50}
                        height={50}
                        className="
                          h-[50px]
                          w-[50px]
                          object-contain
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        "
                      />

                      {/* Title - Maximum 2 Lines */}
                      <h3
                        className="
                          text-xs
                          sm:text-sm
                          font-semibold
                          text-[#1b5e20]
                          uppercase
                          font-poppins
                          leading-snug
                          text-center
                          line-clamp-2
                          min-h-[2.5rem]
                        "
                      >
                        {cat.title}
                      </h3>
                    </div>

                    {/* Award Items */}
                    <ul className="space-y-2 mt-3 max-w-sm mx-auto">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="
                            flex
                            items-center
                            gap-2
                            text-[11px]
                            sm:text-xs
                            text-gray-900
                            font-medium
                            leading-relaxed
                          "
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1b5e20]" />

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
};

export default AwardsCategories;