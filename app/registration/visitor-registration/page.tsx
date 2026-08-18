"use client";
import React, { useRef, useEffect, useState } from "react";
import VisitorHero from "../../components/registration/visitor-registration/Hero";
import FeatureStrip from "../../components/buyer-seller-meet/FeatureStrip";
import CategorySelect from "../../components/registration/visitor-registration/CategorySelect";
import DomesticVisitorForm from "../../components/registration/visitor-registration/DomesticVisitorForm";
import InternationalVisitorForm from "../../components/registration/visitor-registration/InternationalVisitorForm";
import GroupVisitorForm from "../../components/registration/visitor-registration/GroupVisitorForm";
import { ShieldCheck } from "lucide-react";

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
              {/* Form card */}
              <div
                className="bg-white border border-slate-500 shadow-2xl overflow-hidden rounded-sm"
              >
                <div className="bg-green-800 px-6 py-1 text-white flex justify-between items-center border-b-2 border-[#a8d060]">
                  <div>
                      <h2 className="text-sm font-medium uppercase tracking-wider text-white">
                          {visitorType === "domestic" ? "Domestic Visitor Registration" : visitorType === "international" ? "International Visitor Registration" : "Group Registration"}
                      </h2>
                      <p className="text-[10px] text-green-200 uppercase tracking-widest font-semibold mt-0.5">
                          Premier Edition of Bharat Organic Expo 2027 (Global Edition)
                      </p>
                  </div>
                  <ShieldCheck className="text-[#a8d060]" size={22} />
                </div>
                <div className="px-4 pt-4 pb-8 space-y-2 bg-white">
                  {visitorType === "domestic" ? <DomesticVisitorForm /> : visitorType === "international" ? <InternationalVisitorForm /> : <GroupVisitorForm />}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

    </main>
  );
}
