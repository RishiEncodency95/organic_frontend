"use client";

import React from "react";
import img21 from "../../assets/icons/21og.png";
import img22 from "../../assets/icons/22og.png";
import img23 from "../../assets/icons/23og.png";
import img24 from "../../assets/icons/24og.png";
import img25 from "../../assets/icons/25og.png";
import img26 from "../../assets/icons/26og.png";
import img27 from "../../assets/icons/27og.png";
import img28 from "../../assets/icons/28og.png";
import img29 from "../../assets/icons/29og.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

const buyerTypes = [
  {
    icon: img21.src,
    title: "IMPORTERS &\nEXPORTERS",
    bullets: [
      "Explore new products and innovative solutions",
      "Build international business partnerships",
      "Source quality products from verified suppliers",
      "Expand your global supplier network",
    ],
  },
  {
    icon: img22.src,
    title: "DISTRIBUTORS &\nWHOLESALERS",
    bullets: [
      "Discover new brands and manufacturers",
      "Expand your product portfolios",
      "Build long-term supply relationships",
      "Increase market competitiveness",
    ],
  },
  {
    icon: img23.src,
    title: "RETAIL CHAINS &\nSUPERMARKETS",
    bullets: [
      "Source high-quality organic and natural products",
      "Strengthen your retail assortment",
      "Find new and emerging\nbrands",
      "Meet manufacturers\ndirectly",
    ],
  },
  {
    icon: img24.src,
    title: "E-COMMERCE &\nMARKETPLACE BUYERS",
    bullets: [
      "Discover D2C and emerging consumer brands",
      "Source unique and innovative products",
      "Explore private label and exclusive brands",
      "Grow your online catalog with quality products",
    ],
  },
  {
    icon: img25.src,
    title: "INSTITUTIONAL\nBUYERS",
    bullets: [
      "Source products for large scale procurement",
      "Meet qualified and reliable manufacturers",
      "Get solutions for tenders and institutional needs",
      "Build compliant and sustainable supply chains",
    ],
  },
  {
    icon: img26.src,
    title: "HOTELS, RESTAURANTS\n& HORECA",
    bullets: [
      "Source food, beverages, wellness and sustainable products",
      "Find reliable suppliers for your business needs",
      "Explore new product categories",
      "Build strong supplier relationships",
    ],
  },
  {
    icon: img27.src,
    title: "MANUFACTURERS &\nPRIVATE LABEL BUYERS",
    bullets: [
      "Find manufacturing partners for your brand",
      "Source raw materials, ingredients & packaging",
      "Explore private label manufacturing",
      "Build long-term manufacturing alliances",
    ],
  },
  {
    icon: img28.src,
    title: "CORPORATE\nPROCUREMENT TEAMS",
    bullets: [
      "Identify relevant products and service providers",
      "Meet multiple suppliers in one place",
      "Ensure quality, cost and sustainability",
      "Streamline your procurement process",
    ],
  },
  {
    icon: img29.src,
    title: "INTERNATIONAL TRADE\nDELEGATIONS",
    bullets: [
      "Meet Indian manufacturers and exporters",
      "Explore export opportunities",
      "Build cross-border partnerships",
      "Source unique and authentic Indian products",
    ],
  },
];

function BuyerCard({
  icon,
  title,
  bullets,
}: {
  icon: string;
  title: string;
  bullets: string[];
}) {
  return (
    <div className="group h-full w-full flex flex-col items-center bg-white rounded-2xl border border-gray-200/80 p-4 sm:p-5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(27,94,32,0.12)] hover:border-[#1b5e20]/40 transition-all duration-300 hover:-translate-y-1">
      {/* Icon Badge Image */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3 shrink-0 transition-transform duration-300 group-hover:scale-105">
        <img
          src={icon}
          alt={title.replace("\n", " ")}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Title - Dark Green Uppercase */}
      <div className="min-h-[38px] sm:min-h-[42px] flex items-center justify-center mb-3 w-full text-center">
        <h3 className="text-center text-[12px] sm:text-[13px] lg:text-[13.5px] font-bold leading-tight text-[#1b5e20] font-poppins uppercase whitespace-pre-line tracking-tight">
          {title}
        </h3>
      </div>

      {/* Bullets List */}
      <ul className="w-full space-y-2 sm:space-y-2.5 text-left mt-auto">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-[11px] sm:text-[11.5px] lg:text-[12px] leading-snug text-gray-700 font-normal"
          >
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-800" />
            <span className="whitespace-pre-line">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const ParticipateBuyerTypes = () => {
  const row1 = buyerTypes.slice(0, 5);
  const row2 = buyerTypes.slice(5);

  return (
    <section className="py-4 md:py-6 font-inter bg-[#fafcf9]">
      <SectionContainer>
        {/* Section Header */}
        <div className="text-center mb-2 md:mb-4">
          {/* Top Tagline */}
          <div className="flex items-center justify-center gap-2.5 mb-2.5">
            <span className="w-8 h-[2px] bg-[#ea580c] shrink-0" />
            <p className="text-[#ea580c] text-[12px] lg:text-[16px] font-semibold uppercase tracking-[0.18em]">
              TARGETED AUDIENCE
            </p>
            <span className="w-8 h-[2px] bg-[#ea580c] shrink-0" />
          </div>

          <h2
            className="text-lg sm:text-2xl md:text-3xl font-semibold font-poppins uppercase tracking-tight mb-3"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.06)" }}
          >
            <span className="text-[#1b5e20]">WHO CAN PARTICIPATE </span>
            <span className="text-[#ea580c]">AS A BUYER?</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-[15px] text-gray-600 leading-relaxed font-normal">
            The Buyer–Seller Meet is open to business professionals, procurement teams and decision-makers actively looking for products, solutions, suppliers and partnerships.
          </p>
        </div>

        {/* 9 Cards: Row 1 has 5 Cards, Row 2 has 4 Cards Centered */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {/* Row 1: 5 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {row1.map((item, i) => (
              <div key={i} className="flex">
                <BuyerCard {...item} />
              </div>
            ))}
          </div>

          {/* Row 2: 4 Cards Centered with same card width as Row 1 */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {row2.map((item, i) => (
              <div
                key={i}
                className="w-full sm:w-[calc(50%-0.625rem)] md:w-[calc(33.333%-0.85rem)] lg:w-[calc((100%-4*1.25rem)/5)] flex"
              >
                <BuyerCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default ParticipateBuyerTypes;
