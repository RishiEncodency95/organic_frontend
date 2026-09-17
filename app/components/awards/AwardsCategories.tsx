"use client";

import React, { useEffect, useState } from "react";
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

const defaultIcons = [organic, ayush, organic_agriculture, natural, greentech, trade];
const defaultBgs = [
  "bg-[#e8f5e9]",
  "bg-[#fff8e1]",
  "bg-[#fdf1e3]",
  "bg-[#e0f2f1]",
  "bg-[#e8f5e9]",
  "bg-[#f3e5f5]",
];

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

const DEFAULT_CATEGORIES = [
  {
    id: 1,
    image: "/assets/awards/organic_food.png",
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
    id: 2,
    image: "/assets/awards/ayush.png",
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
    id: 3,
    image: "/assets/awards/organic_agriculture.png",
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
    id: 4,
    image: "/assets/awards/natural.png",
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
    id: 5,
    image: "/assets/awards/greentech.png",
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
    id: 6,
    image: "/assets/awards/trade.png",
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

interface AwardsCategoriesProps {
  initialData?: any;
}

const AwardsCategories = ({ initialData }: AwardsCategoriesProps) => {
  const [categoriesData, setCategoriesData] = useState<any>(initialData || {
    enabled: true,
    title: "Award Categories",
    categories: DEFAULT_CATEGORIES,
    items: DEFAULT_CATEGORIES,
  });

  useEffect(() => {
    const fetchLiveCategories = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4001/api";
        const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:4001";
        let res = await fetch(`${apiUrl}/website/awards/categories`, { cache: "no-store" }).catch(() => null);
        if (!res || !res.ok) {
          res = await fetch(`${serverUrl}/api/website/awards/categories`, { cache: "no-store" }).catch(() => null);
        }
        if (!res || !res.ok) {
          res = await fetch(`/api/website/awards/categories`, { cache: "no-store" }).catch(() => null);
        }
        if (res && res.ok) {
          const json = await res.json().catch(() => null);
          if (json?.data) {
            setCategoriesData(json.data);
          }
        }
      } catch (err) {
        console.error("Failed to load live awards categories:", err);
      }
    };
    fetchLiveCategories();
  }, []);

  if (categoriesData.enabled === false) return null;

  const rawList = categoriesData.items || categoriesData.categories;
  const categoriesList = Array.isArray(rawList) && rawList.length > 0 ? rawList : DEFAULT_CATEGORIES;

  return (
    <section id="categories" className="bg-[#f9f9f9] py-4 font-inter">
      <SectionContainer>
        <SectionHeading>{categoriesData.title || categoriesData.eyebrow || "Award Categories"}</SectionHeading>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoriesList.map((cat: any, i: number) => {
            const imgSrc =
              typeof cat.image === "string" && cat.image
                ? cat.image
                : typeof cat.icon === "string" && cat.icon
                ? (cat.icon.startsWith("/") || cat.icon.startsWith("http")
                    ? cat.icon
                    : `/assets/awards/${cat.icon}.png`)
                : defaultIcons[i % defaultIcons.length].src;

            const cardBgClass = cat.cardBg || defaultBgs[i % defaultBgs.length];

            const itemsArray = Array.isArray(cat.items) && cat.items.length > 0
              ? cat.items
              : Array.isArray(cat.points) && cat.points.length > 0
              ? cat.points
              : [cat.keyPoint1, cat.keyPoint2, cat.keyPoint3, cat.keyPoint4].filter(Boolean);

            return (
              <Reveal key={cat.title || i} delay={i * 90} className="h-full">
                <div
                  className={`
                    group
                    relative
                    h-full
                    overflow-hidden
                    rounded-xl
                    ${cardBgClass}
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
                  {/* Decorative card background leaf */}
                  <Image
                    src={card_bg}
                    alt=""
                    width={500}
                    height={500}
                    className="pointer-events-none absolute right-0 bottom-0 z-0 w-[30%] h-[50%] object-contain object-right-bottom"
                  />

                  {/* Card Content */}
                  <div className="relative z-10">
                    <div className="mb-3 flex flex-col items-center gap-3 mx-auto max-w-sm">
                      <img
                        src={imgSrc}
                        alt={cat.title || "Category"}
                        className="h-[50px] w-[50px] object-contain transition-transform duration-300 group-hover:scale-105"
                      />

                      <h3 className="text-xs sm:text-sm font-semibold text-[#1b5e20] uppercase font-poppins leading-snug text-center line-clamp-2 min-h-[2.5rem]">
                        {cat.title}
                      </h3>
                    </div>

                    <ul className="space-y-2 mt-3 max-w-sm mx-auto">
                      {itemsArray.map((item: string, idx: number) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-[11px] sm:text-xs text-gray-900 font-medium leading-relaxed"
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