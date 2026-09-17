"use client";

import React, { useRef, useEffect, useState } from "react";
import * as LucideIcons from "lucide-react";
import { Trophy, Award, Users, Globe2, Medal } from "lucide-react";
import SectionContainer from "@/app/components/layout/SectionContainer";
import gsap from "gsap";

const DEFAULT_ITEMS = [
  { id: 1, icon: "Trophy", title: "200+", subtitle: "CATEGORIES" },
  { id: 2, icon: "Award", title: "30+", subtitle: "GRAND AWARDS" },
  { id: 3, icon: "Users", title: "EXPERT", subtitle: "JURY PANEL" },
  { id: 4, icon: "Globe2", title: "NATIONWIDE &", subtitle: "GLOBAL RECOGNITION" },
  { id: 5, icon: "Medal", title: "CREDIBILITY", subtitle: "& TRANSPARENCY" },
];

const getIconComponent = (name?: string) => {
  if (!name) return Trophy;
  const cleaned = name.replace(/[^a-zA-Z0-9]/g, "");
  return (LucideIcons as any)[cleaned] || (LucideIcons as any)[name] || Trophy;
};

interface AwardsStatsProps {
  initialData?: any;
}

export default function AwardsStats({ initialData }: AwardsStatsProps) {
  const [statsData, setStatsData] = useState<any>(initialData || {
    enabled: true,
    items: DEFAULT_ITEMS,
  });

  useEffect(() => {
    const fetchLiveStats = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4001/api";
        const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:4001";
        let res = await fetch(`${apiUrl}/website/awards/stats`, { cache: "no-store" }).catch(() => null);
        if (!res || !res.ok) {
          res = await fetch(`${serverUrl}/api/website/awards/stats`, { cache: "no-store" }).catch(() => null);
        }
        if (!res || !res.ok) {
          res = await fetch(`/api/website/awards/stats`, { cache: "no-store" }).catch(() => null);
        }
        if (res && res.ok) {
          const json = await res.json().catch(() => null);
          if (json?.data) {
            setStatsData(json.data);
          }
        }
      } catch (err) {
        console.error("Failed to load live awards stats:", err);
      }
    };
    fetchLiveStats();
  }, []);

  const bandRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dividerRefs = useRef<(HTMLDivElement | null)[]>([]);

  itemRefs.current = [];
  dividerRefs.current = [];

  const itemsList = Array.isArray(statsData?.items) && statsData.items.length > 0
    ? statsData.items
    : DEFAULT_ITEMS;

  useEffect(() => {
    if (statsData?.enabled === false) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.8,
        defaults: { ease: "power3.out" },
      });

      // Band wipe reveal left→right
      tl.fromTo(
        bandRef.current,
        { opacity: 0, y: 20, clipPath: "inset(0% 100% 0% 0%)" },
        { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "power4.inOut" },
        0
      );

      // Shimmer sweep
      tl.fromTo(
        shimmerRef.current,
        { xPercent: -130, opacity: 0.8 },
        { xPercent: 230, opacity: 0, duration: 1.0, ease: "power1.inOut" },
        0.6
      );

      // Dividers grow
      tl.fromTo(
        dividerRefs.current.filter(Boolean),
        { scaleY: 0 },
        { scaleY: 1, duration: 0.4, stagger: 0.06, ease: "power2.out" },
        0.55
      );

      // Stat items 3D flip
      tl.fromTo(
        itemRefs.current.filter(Boolean),
        { opacity: 0, rotationX: -80, y: 20, transformOrigin: "top center" },
        { opacity: 1, rotationX: 0, y: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
        0.6
      );
    });

    return () => ctx.revert();
  }, [itemsList, statsData?.enabled]);

  if (statsData?.enabled === false) return null;

  return (
    <div className="relative z-20 -mt-6 md:-mt-8 font-inter">
      <SectionContainer>
        <div
          ref={bandRef}
          style={{ opacity: 0, backgroundColor: "#1b5e20", boxShadow: "0 8px 20px -10px rgba(0,0,0,0.3)" }}
          className="rounded-2xl border border-white/10 p-0.5 md:py-2 md:px-3 relative overflow-hidden [perspective:1000px]"
        >
          {/* Shimmer overlay */}
          <div
            ref={shimmerRef}
            className="absolute inset-y-0 left-0 w-1/3 pointer-events-none"
            style={{ background: "linear-gradient(100deg, transparent, rgba(255,255,255,0.18), transparent)", opacity: 0 }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-nowrap items-center justify-center md:justify-between gap-y-3 gap-x-2 md:gap-0">
            {itemsList.map((item: any, i: number) => {
              const IconComponent = typeof item.icon === "string" ? getIconComponent(item.icon) : (item.icon || Trophy);
              const title = item.title;
              const subtitle = item.subtitle || item.label;
              return (
                <React.Fragment key={item.id || item._id || i}>
                  <div
                    ref={(el) => { itemRefs.current[i] = el; }}
                    style={{ opacity: 0 }}
                    className="flex flex-col items-center text-center group flex-1 py-1"
                  >
                    <IconComponent className="w-4 h-4 md:w-5 md:h-5 mb-1 text-white stroke-[1.75]" />
                    <h4 className="text-[11px] sm:text-[13px] md:text-sm font-semibold text-white leading-none font-inter mb-0.5">
                      {title}
                    </h4>
                    <p className="text-[8px] md:text-[9px] font-bold text-[#facc15] uppercase tracking-widest leading-tight mt-0.5 font-inter">
                      {subtitle}
                    </p>
                  </div>
                  {i < itemsList.length - 1 && (
                    <div
                      ref={(el) => { dividerRefs.current[i] = el; }}
                      className="hidden md:block w-px h-6 bg-white/20"
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}