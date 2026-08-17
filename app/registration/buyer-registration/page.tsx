"use client";
import React, { useRef, useEffect, useState } from "react";
import BuyerHero from "../../components/registration/buyer-registration/Hero";
import FeatureStrip from "../../components/buyer-seller-meet/FeatureStrip";
import CategorySelect from "../../components/registration/buyer-registration/CategorySelect";
import DomesticForm from "../../components/registration/buyer-registration/DomesticForm";
import InternationalForm from "../../components/registration/buyer-registration/InternationalForm";

export default function BuyerRegistrationPage() {
  const [buyerType, setBuyerType] = useState<"domestic" | "international" | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (buyerType && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [buyerType]);

  return (
    <main className="min-h-screen bg-[#FDFDFD] font-inter text-slate-900">

      {/* Hero Section */}
      <BuyerHero />

      {/* Feature Strip */}
      <FeatureStrip />

      {/* Category Selector */}
      <CategorySelect buyerType={buyerType} onChange={setBuyerType} />

      {/* Registration Form */}
      <div ref={formRef} className="scroll-mt-10">
        {buyerType && (
          <section className="w-full bg-white pb-16">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
              {/* Divider */}
              <div className="flex items-center gap-4 pt-8 pb-6">
                <span className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                  {buyerType === "domestic" ? "Domestic Buyer" : "International Buyer"} Registration Form
                </span>
                <span className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200" />
              </div>

              {/* Form card */}
              <div
                className={`w-full rounded-2xl border p-6 md:p-8 shadow-sm transition-all duration-300 ${buyerType === "domestic"
                    ? "border-[#a8d060]/40 bg-[#fafff5]"
                    : "border-[#4f8fe0]/40 bg-[#f8faff]"
                  }`}
              >
                {buyerType === "domestic" ? <DomesticForm /> : <InternationalForm />}
              </div>
            </div>
          </section>
        )}
      </div>

    </main>
  );
}
