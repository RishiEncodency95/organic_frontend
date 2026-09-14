"use client";
import React from "react";
import { Tag, Cog, Leaf, Truck, Globe2, ArrowRightLeft, Store, ShoppingBag, Building, MonitorSmartphone, UtensilsCrossed, Flag, Network } from "lucide-react";
import SectionContainer from "@/app/components/layout/SectionContainer";
import { CONNECT_WITH_DATA } from "@/app/data/buyerSellerMeetData";

const ICON_MAP: Record<string, any> = {
  Tag: <Tag strokeWidth={2.5} />,
  Cog: <Cog strokeWidth={2.5} />,
  Leaf: <Leaf strokeWidth={2.5} />,
  Truck: <Truck strokeWidth={2.5} />,
  Globe2: <Globe2 strokeWidth={2.5} />,
  ArrowRightLeft: <ArrowRightLeft strokeWidth={2.5} />,
  Store: <Store strokeWidth={2.5} />,
  ShoppingBag: <ShoppingBag strokeWidth={2.5} />,
  Building: <Building strokeWidth={2.5} />,
  MonitorSmartphone: <MonitorSmartphone strokeWidth={2.5} />,
  UtensilsCrossed: <UtensilsCrossed strokeWidth={2.5} />,
  Flag: <Flag strokeWidth={2.5} />,
  Network: <Network strokeWidth={2.5} />,
};

export default function ConnectWith() {
  return (
    <section className="py-8 bg-white font-inter text-center">
      <SectionContainer>
        {CONNECT_WITH_DATA.map((data) => (
          <React.Fragment key={data.id}>
            {/* Title with Dividers */}
            <div className="flex items-center justify-center mb-6 w-full">
              <div className="h-[1px] bg-gray-200 flex-1"></div>
              <h2 className="px-4 text-[13px] md:text-sm font-semibold text-[#1b5e20] uppercase font-poppins whitespace-nowrap">
                {data.heading}
              </h2>
              <div className="h-[1px] bg-gray-200 flex-1"></div>
            </div>

            {/* Connection Items — full width with dividers */}
            <div className="flex flex-nowrap overflow-x-auto items-start justify-between pb-2 hide-scroll">
              <style>{`
                .hide-scroll::-webkit-scrollbar { display: none; }
                .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
              `}</style>
              {data.items.map((item, i) => {
                const iconElem = typeof item.icon === "string" ? ICON_MAP[item.icon] : item.icon;
                return (
                  <React.Fragment key={i}>
                    <div className="flex-1 flex flex-col items-center gap-2 text-center px-2 py-1 min-w-[64px]">
                      <div
                        className="text-[#1b5e20]"
                        style={{ filter: "drop-shadow(0 2px 6px rgba(27,94,32,0.35))" }}
                      >
                        {iconElem ? React.cloneElement(iconElem, { size: 24 }) : null}
                      </div>
                      <span className="text-[10px] md:text-[11px] font-semibold text-gray-700 font-inter leading-tight whitespace-pre-line">
                        {item.label}
                      </span>
                    </div>
                    {i < data.items.length - 1 && (
                      <div className="self-center h-10 w-[1px] bg-gray-200 shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </React.Fragment>
        ))}
      </SectionContainer>
    </section>
  );
}
