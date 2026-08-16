"use client";

import React from "react";
import { Leaf, Sprout, Tractor, HeartHandshake, Recycle, Globe2 } from "lucide-react";
import { Reveal } from "../shared/Reveal";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="flex items-center justify-center gap-2.5 text-center">
      <Leaf className="h-3.5 w-3.5 shrink-0 -rotate-45 text-[#3b8c2a]" />
      <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-extrabold uppercase tracking-wide text-[#154726]">
        {children}
      </h2>
      <Leaf className="h-3.5 w-3.5 shrink-0 rotate-[135deg] text-[#3b8c2a]" />
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
    iconBg: "bg-[#2b5825]",
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
    <section id="categories" className="bg-[#fcfcf0] py-2 md:py-4">
      <div className="container mx-auto max-w-[1400px] px-6">
        <SectionHeading>Award Categories</SectionHeading>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.title} delay={i * 90} className="h-full">
                <div className="group h-full rounded-2xl border border-gray-200/60 bg-[#fcfdfc] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)] hover:border-green-200">
                  <span
                    className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-110 ${cat.iconBg}`}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <h3 className="mt-3 text-center text-[14px] md:text-[15px] font-bold uppercase leading-snug tracking-wide text-[#154726]">
                    {cat.title}
                  </h3>
                  <ul className="mt-2.5 space-y-1.5">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[13px] leading-snug text-[#154726]/70"
                      >
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#3b8c2a]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsCategories;