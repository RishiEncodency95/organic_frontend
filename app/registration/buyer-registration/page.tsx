"use client";
import React, { useRef, useEffect, useState } from "react";
import BuyerHero from "../../components/registration/buyer-registration/Hero";
import FeatureStrip from "../../components/buyer-seller-meet/FeatureStrip";
import CategorySelect from "../../components/registration/buyer-registration/CategorySelect";
import DomesticForm from "../../components/registration/buyer-registration/DomesticForm";
import InternationalForm from "../../components/registration/buyer-registration/InternationalForm";
import { ShieldCheck } from "lucide-react";

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
          <section className="w-full bg-white pb-8">
            <div className="max-w-[1410px] mx-auto px-4 md:px-8">
              {/* Form card */}
              <div
                className="bg-white border border-slate-500 shadow-2xl overflow-hidden rounded-sm"
              >
                <div className="bg-green-800 px-6 py-1 text-white flex justify-between items-center border-b-2 border-[#a8d060]">
                  <div>
                      <h2 className="text-sm font-medium uppercase tracking-wider text-white">
                          {buyerType === "domestic" ? "Domestic Buyer Registration" : "International Buyer Registration"}
                      </h2>
                      <p className="text-[10px] text-green-200 uppercase tracking-widest font-semibold mt-0.5">
                          Premier Edition of Bharat Organic Expo 2027 (Global Edition)
                      </p>
                  </div>
                  <ShieldCheck className="text-[#a8d060]" size={22} />
                </div>
                <div className="px-4 pt-4 pb-8 space-y-2 bg-white">
                  {buyerType === "domestic" ? <DomesticForm /> : <InternationalForm />}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

    </main>
  );
}
