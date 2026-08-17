"use client";
import React, { useRef, useEffect, useState } from "react";
import VisitorHero from "../../components/registration/visitor-registration/Hero";
import FeatureStrip from "../../components/buyer-seller-meet/FeatureStrip";
import CategorySelect from "../../components/registration/visitor-registration/CategorySelect";
import DomesticVisitorForm from "../../components/registration/visitor-registration/DomesticVisitorForm";
import InternationalVisitorForm from "../../components/registration/visitor-registration/InternationalVisitorForm";
import GroupVisitorForm from "../../components/registration/visitor-registration/GroupVisitorForm";

export default function VisitorRegistrationPage() {
  const [visitorType, setVisitorType] = useState<"domestic" | "international" | "group" | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visitorType && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [visitorType]);

  return (
    <main className="min-h-screen bg-[#FDFDFD] font-inter text-slate-900">

      {/* Hero Section */}
      <VisitorHero />

      {/* Feature Strip (can reuse from buyer-seller-meet as it's general styling) */}
      <FeatureStrip />

      {/* Category Selector */}
      <CategorySelect visitorType={visitorType} onChange={setVisitorType} />

      {/* Registration Form */}
      <div ref={formRef} className="scroll-mt-10">
        {visitorType && (
          <section className="w-full bg-white pb-16">
            <div className="max-w-[1410px] mx-auto px-4 md:px-8">
              {/* Divider */}
              <div className="flex items-center gap-4 pt-8 pb-6">
                <span className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  {visitorType === "domestic" ? "Domestic Visitor" : visitorType === "international" ? "International Visitor" : "Group"} Registration Form
                </span>
                <span className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200" />
              </div>

              {/* Form card */}
              <div
                className={`w-full rounded-2xl border p-6 md:p-8 shadow-sm transition-all duration-300 ${visitorType === "domestic"
                  ? "border-[#a8d060]/50 bg-[#fafff5]"
                  : visitorType === "international"
                    ? "border-[#a8d060]/50 bg-[#fafff5]"
                    : "border-[#a8d060]/50 bg-[#fafff5]"
                  }`}
              >
                {visitorType === "domestic" ? <DomesticVisitorForm /> : visitorType === "international" ? <InternationalVisitorForm /> : <GroupVisitorForm />}
              </div>
            </div>
          </section>
        )}
      </div>

    </main>
  );
}
