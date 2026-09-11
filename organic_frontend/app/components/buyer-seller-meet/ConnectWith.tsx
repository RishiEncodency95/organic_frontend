"use client";
import React from "react";
import { Tag, Cog, Leaf, Truck, Globe2, ArrowRightLeft, Store, ShoppingBag, Building, MonitorSmartphone, UtensilsCrossed, Flag, Network } from "lucide-react";
import SectionContainer from "@/app/components/layout/SectionContainer";

export default function ConnectWith() {
  const icons = [
    { icon: <Tag strokeWidth={2.5} />, label: "Brands" },
    { icon: <Cog strokeWidth={2.5} />, label: "Manufacturers" },
    { icon: <Leaf strokeWidth={2.5} />, label: "Producers" },
    { icon: <Truck strokeWidth={2.5} />, label: "Suppliers" },
    { icon: <Globe2 strokeWidth={2.5} />, label: "Importers" },
    { icon: <ArrowRightLeft strokeWidth={2.5} />, label: "Exporters" },
    { icon: <Store strokeWidth={2.5} />, label: "Distributors" },
    { icon: <ShoppingBag strokeWidth={2.5} />, label: "Wholesalers" },
    { icon: <Building strokeWidth={2.5} />, label: "Retailers" },
    { icon: <MonitorSmartphone strokeWidth={2.5} />, label: "E-commerce\nBuyers" },
    { icon: <UtensilsCrossed strokeWidth={2.5} />, label: "HoReCa\nBuyers" },
    { icon: <Flag strokeWidth={2.5} />, label: "Trade\nBodies" },
    { icon: <Network strokeWidth={2.5} />, label: "International\nDelegations" },
  ];

  return (
    <section className="py-8 bg-white font-inter text-center">
      <SectionContainer>
        {/* Title with Dividers */}
        <div className="flex items-center justify-center mb-6 w-full">
          <div className="h-[1px] bg-gray-200 flex-1"></div>
          <h2 className="px-4 text-[13px] md:text-sm font-semibold text-[#1b5e20] uppercase font-poppins whitespace-nowrap">
            WHO WILL YOU CONNECT WITH?
          </h2>
          <div className="h-[1px] bg-gray-200 flex-1"></div>
        </div>

        {/* Connection Items — full width with dividers */}
        <div className="flex flex-nowrap overflow-x-auto items-start justify-between pb-2 hide-scroll">
          <style>{`
            .hide-scroll::-webkit-scrollbar { display: none; }
            .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
          {icons.map((item, i) => (
            <React.Fragment key={i}>
              <div className="flex-1 flex flex-col items-center gap-2 text-center px-2 py-1 min-w-[64px]">
                <div
                  className="text-[#1b5e20]"
                  style={{ filter: "drop-shadow(0 2px 6px rgba(27,94,32,0.35))" }}
                >
                  {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <span className="text-[10px] md:text-[11px] font-semibold text-gray-700 font-inter leading-tight whitespace-pre-line">
                  {item.label}
                </span>
              </div>
              {i < icons.length - 1 && (
                <div className="self-center h-10 w-[1px] bg-gray-200 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
