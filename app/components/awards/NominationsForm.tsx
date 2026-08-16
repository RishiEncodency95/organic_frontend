"use client";

import React from "react";
import { Trophy } from "lucide-react";
import { Reveal } from "../shared/Reveal";

const CATEGORIES = [
  "Organic Food & Nutrition Excellence",
  "Ayush, Herbal & Wellness Excellence",
  "Organic Agriculture Excellence",
  "Natural Living & Personal Care Excellence",
  "GreenTech & Sustainability Excellence",
  "Trade, Certification & Global Business Excellence",
  "Prestigious Grand Awards",
];

const NominationsForm = () => {
  return (
    <section className="bg-[#fcfcf0] py-2 md:py-4">
      <div className="container mx-auto max-w-[1400px] px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200/60 bg-white p-5 shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-6 w-6 text-[#3b8c2a]" />
              <h2 className="text-[#3b8c2a] text-[22px] md:text-[28px] font-bold leading-[1.2]">
                Nomination Form
              </h2>
            </div>
            <p className="text-[#64748b] text-[15px] md:text-[16px] leading-[1.6] mb-6">
              Fill out the form below and our team will guide you through the
              nomination process for the Bharat Organic Excellence Awards 2027.
            </p>

            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#111827] text-[12px] md:text-[14px] font-bold">
                    Brand / Company Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[15px] md:text-[16px] transition-colors bg-[#f8fdf9] min-h-[44px]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#111827] text-[12px] md:text-[14px] font-bold">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[15px] md:text-[16px] transition-colors bg-[#f8fdf9] min-h-[44px]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#111827] text-[12px] md:text-[14px] font-bold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[15px] md:text-[16px] transition-colors bg-[#f8fdf9] min-h-[44px]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#111827] text-[12px] md:text-[14px] font-bold">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[15px] md:text-[16px] transition-colors bg-[#f8fdf9] min-h-[44px]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#111827] text-[12px] md:text-[14px] font-bold">
                    Country *
                  </label>
                  <select className="w-full px-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[15px] md:text-[16px] transition-colors bg-[#f8fdf9] text-gray-700 min-h-[44px]">
                    <option>Select Country</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#111827] text-[12px] md:text-[14px] font-bold">
                    Award Category *
                  </label>
                  <select className="w-full px-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[15px] md:text-[16px] transition-colors bg-[#f8fdf9] text-gray-700 min-h-[44px]">
                    <option>Select Category</option>
                    {CATEGORIES.map((cat) => (
                      <option key={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[#111827] text-[12px] md:text-[14px] font-bold">
                  Tell Us About Your Contribution *
                </label>
                <textarea
                  rows={5}
                  className="w-full px-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[15px] md:text-[16px] transition-colors bg-[#f8fdf9] resize-none"
                />
              </div>

              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  id="nomTerms"
                  className="rounded border-gray-300 w-4 h-4 text-[#3b8c2a] focus:ring-[#3b8c2a]"
                />
                <label
                  htmlFor="nomTerms"
                  className="text-[#64748b] text-[14px] md:text-[15px]"
                >
                  I agree to the{" "}
                  <a href="#" className="text-[#3b8c2a] hover:underline font-semibold">
                    Privacy Policy
                  </a>{" "}
                  &{" "}
                  <a href="#" className="text-[#3b8c2a] hover:underline font-semibold">
                    Terms
                  </a>
                </label>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="bg-[#3b8c2a] hover:bg-[#2b6b1e] text-white px-6 py-3 rounded-md text-[15px] md:text-[16px] font-bold uppercase tracking-wide transition-all duration-300 shadow-sm w-full md:w-auto min-h-[44px]"
                >
                  Submit Nomination →
                </button>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default NominationsForm;