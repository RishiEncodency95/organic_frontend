"use client";

import React from "react";
import {
  Globe2,
  Truck,
  ShoppingCart,
  ShoppingBag,
  Building2,
  UtensilsCrossed,
  Factory,
  Users2,
  Plane,
  Leaf,
} from "lucide-react";
import { Reveal } from "../shared/Reveal";

const buyerTypes = [
  {
    icon: Globe2,
    title: "Importers & Exporters",
    bullets: [
      "Explore new products and innovative solutions",
      "Build international business partnerships",
      "Source quality products from verified suppliers",
      "Expand your global supplier network",
    ],
  },
  {
    icon: Truck,
    title: "Distributors & Wholesalers",
    bullets: [
      "Discover new brands and manufacturers",
      "Expand your product portfolios",
      "Build long-term supply relationships",
      "Increase market competitiveness",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Retail Chains & Supermarkets",
    bullets: [
      "Source high-quality organic and natural products",
      "Strengthen your retail assortment",
      "Find new and emerging brands",
      "Meet manufacturers directly",
    ],
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & Marketplace Buyers",
    bullets: [
      "Discover D2C and emerging consumer brands",
      "Source unique and innovative products",
      "Explore private label and exclusive brands",
      "Grow your online catalog with quality products",
    ],
  },
  {
    icon: Building2,
    title: "Institutional Buyers",
    bullets: [
      "Source products for large scale procurement",
      "Meet qualified and reliable manufacturers",
      "Get solutions for tenders and institutional needs",
      "Build compliant and sustainable supply chains",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Hotels, Restaurants & HoReCa",
    bullets: [
      "Source food, beverages, wellness and sustainable products",
      "Find reliable suppliers for your business needs",
      "Explore new product categories",
      "Build strong supplier relationships",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturers & Private Label Buyers",
    bullets: [
      "Find manufacturing partners for your brand",
      "Source raw materials, ingredients & packaging",
      "Explore private label manufacturing",
      "Build long-term manufacturing alliances",
    ],
  },
  {
    icon: Users2,
    title: "Corporate Procurement Teams",
    bullets: [
      "Identify relevant products and service providers",
      "Meet multiple suppliers in one place",
      "Ensure quality, cost and sustainability",
      "Streamline your procurement process",
    ],
  },
  {
    icon: Plane,
    title: "International Trade Delegations",
    bullets: [
      "Meet Indian manufacturers and exporters",
      "Explore export opportunities",
      "Build cross-border partnerships",
      "Source unique and authentic Indian products",
    ],
  },
];

function BuyerCard({
  icon: Icon,
  title,
  bullets,
  index,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  bullets: string[];
  index: number;
}) {
  return (
    <Reveal delay={index * 70} direction={["left", "zoom", "right"][index % 3] as "left" | "zoom" | "right"} className="h-full">
      <div className="group flex h-full flex-col items-center rounded-2xl border border-gray-200/60 bg-[#fcfdfc] p-6 shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-green-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3b8c2a]/10 transition-all duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-[#2b5825]">
          <Icon
            className="h-7 w-7 text-[#2b5825] transition-colors duration-300 group-hover:text-white"
            strokeWidth={1.75}
          />
        </div>
        <h3 className="mb-3 text-center text-[16px] font-bold leading-snug text-[#154726]">
          {title}
        </h3>
        <ul className="w-full space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2 text-[15px] leading-snug text-gray-600">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3b8c2a] transition-transform duration-300 group-hover:scale-150" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

const ParticipateBuyerTypes = () => {
  return (
    <section className="container mx-auto max-w-[1400px] px-6 py-2 md:py-4">
      <Reveal>
        <div className="flex items-center justify-center gap-2 text-[#3b8c2a] font-bold text-[12px] md:text-[13px] uppercase tracking-widest mb-2">
          <Leaf className="w-4 h-4" />
          <span>Who Can Participate as a Buyer?</span>
          <Leaf className="w-4 h-4" />
        </div>
        <p className="mt-2 mb-6 mx-auto max-w-2xl text-center text-[16px] text-gray-500 leading-relaxed">
          The Buyer-Seller Meet is open to business professionals, procurement
          teams and decision-makers actively looking for products, solutions,
          suppliers and partnerships.
        </p>
      </Reveal>

      <div className="mt-4 flex flex-wrap justify-center gap-4">
        {buyerTypes.map((b, i) => (
          <div
            key={b.title}
            className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-10px)] xl:w-[calc(20%-13px)]"
          >
            <BuyerCard {...b} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParticipateBuyerTypes;
