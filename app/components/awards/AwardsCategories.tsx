"use client";

import React from "react";
import { Leaf, Sprout, Tractor, HeartHandshake, Recycle, Globe2 } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import SectionContainer from "@/app/components/layout/SectionContainer";

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
    icon: Sprout,
    title: "Organic Food & Nutrition Excellence",
    items: [
      "Organic Food Brand of the Year",
      "Organic Beverage Brand of the Year",
      "Nutrition Innovation Award",
      "Emerging Organic Food Brand",
    ],
    iconBg: "bg-[#1b5e20]",
  },
  {
    icon: Leaf,
    title: "Ayush, Herbal & Wellness Excellence",
    items: [
      "Ayurveda Brand Excellence",
      "Herbal Product Innovation",
      "Wellness Brand of the Year",
      "Traditional Wellness Excellence",
    ],
    iconBg: "bg-[#C9A227]",
  },
  {
    icon: Tractor,
    title: "Organic Agriculture Excellence",
    items: [
      "Organic Farmer Excellence",
      "Organic Farming Innovation",
      "Bio-Input Excellence",
      "Sustainable Agriculture Initiative",
    ],
    iconBg: "bg-[#B8752F]",
  },
  {
    icon: HeartHandshake,
    title: "Natural Living & Personal Care Excellence",
    items: [
      "Natural Beauty Brand",
      "Natural Personal Care Innovation",
      "Sustainable Lifestyle Brand",
      "Emerging Natural Brand",
    ],
    iconBg: "bg-[#2E8B85]",
  },
  {
    icon: Recycle,
    title: "GreenTech & Sustainability Excellence",
    items: [
      "GreenTech Innovation",
      "Sustainable Packaging Excellence",
      "AgriTech Innovation",
      "Sustainability Initiative of the Year",
    ],
    iconBg: "bg-[#1B5E20]",
  },
  {
    icon: Globe2,
    title: "Trade, Certification & Global Business Excellence",
    items: [
      "Organic Export Excellence",
      "International Market Development",
      "Certification & Quality Excellence",
      "Organic Trade Promotion",
    ],
    iconBg: "bg-[#7C4DBE]",
  },
];

const AwardsCategories = () => {
  return (
    <section id="categories" className="bg-[#f9f9f9] py-8 md:py-12 font-inter">
      <SectionContainer>
        <SectionHeading>Award Categories</SectionHeading>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.title} delay={i * 90} className="h-full">
                <div
                  className="group h-full rounded-xl bg-white p-5 hover:shadow-md transition-shadow"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white transition-transform duration-300 group-hover:scale-105 ${cat.iconBg}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xs sm:text-sm font-semibold text-[#1b5e20] uppercase font-poppins leading-snug">
                      {cat.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 mt-3 pt-3 border-t border-gray-100">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-900 font-medium leading-relaxed"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1b5e20]" />
                        {item}
                      </li>
                    ))}
                  </ul>
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