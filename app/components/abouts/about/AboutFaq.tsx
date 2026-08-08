"use client";
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is the 9th Indian Health & Wellness Expo (Global Edition)?",
    answer: "It is a premier global platform that brings together healthcare, AYUSH, wellness, digital health, and sustainability sectors for networking, innovation, and business growth."
  },
  {
    question: "Who should attend this expo?",
    answer: "Healthcare professionals, industry leaders, AYUSH practitioners, wellness entrepreneurs, policymakers, and international buyers looking to explore innovations and forge powerful partnerships."
  },
  {
    question: "What are the key highlights of the expo?",
    answer: "The event features a 40,000+ sq ft international exhibition, the Arogya Sangoshthi knowledge summit, B2B buyer-seller meets, and the prestigious Global Excellence Awards."
  },
  {
    question: "What industries are covered in the expo?",
    answer: "Key sectors include Medical Equipment, AYUSH, Digital Health, Preventive Wellness, Hospital Infrastructure, Health Tourism, and Sustainable Medical Practices."
  },
  {
    question: "How can I participate in the expo?",
    answer: "You can participate as an exhibitor, delegate, sponsor, or visitor. Please register through our website or contact our help desk for specific participation opportunities."
  }
];

const AboutFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section className="w-full bg-white py-2 md:py-4 border-t border-gray-100">
        <div className="w-full px-4 md:px-11 xl:px-11 ">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[1px] bg-[#113d29]"></div>
              <h3 className="text-[12px] md:text-[13px] font-bold text-[#113d29] tracking-[0.2em] uppercase">
                SUPPORT & INFO
              </h3>
              <div className="w-8 h-[1px] bg-[#113d29]"></div>
            </div>

            <h2 className="text-[28px] md:text-[26px] lg:text-[26px] font-semibold text-[#113d29] leading-tight mb-2">
              Frequently Asked <span className="text-[#3b8c2a]">Questions</span>
            </h2>

            <p className="text-[14px] text-gray-600 max-w-2xl mx-auto">
              Find answers to common inquiries about the 9th Indian Health & Wellness Expo (Global Edition).
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">

            {/* Left Column: FAQ Accordion */}
            <div className="flex-1 lg:max-w-[55%] flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`border transition-all duration-300 ${isOpen ? 'border-[#e85d1c] border-l-[4px] shadow-sm bg-white' : 'border-gray-100 bg-[#f8f9fa] hover:bg-white'}`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-3 pr-4">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${isOpen ? 'bg-[#113d29] text-white' : 'bg-transparent text-gray-400'}`}>
                          <HelpCircle size={14} />
                        </div>
                        <span className={`text-[14px] md:text-[15px] font-bold ${isOpen ? 'text-[#111]' : 'text-gray-800'}`}>
                          Q{index + 1}. {faq.question}
                        </span>
                      </div>

                      <div className={`w-6 h-6 flex items-center justify-center shrink-0 rounded-sm ${isOpen ? 'bg-[#e85d1c] text-white' : 'bg-white border border-gray-200 text-gray-400'}`}>
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 md:px-5 pb-5 pt-0">
                        <div className="pl-9 border-t border-gray-100 pt-3">
                          <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed text-justify">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Image & Help Desk */}
            <div className="flex-1 flex flex-col">
              <div className="flex-1 bg-gray-100 rounded-t-xl overflow-hidden relative min-h-[200px] md:min-h-[300px]">
                {/* Image Placeholder */}
                {/* <Image src={exhibitionImage} alt="Exhibition" fill className="object-cover" /> */}
              </div>

              <div className="bg-white border border-t-0 border-gray-200 rounded-b-xl py-3 px-4 flex flex-col items-center justify-center text-center shadow-sm">
                <p className="text-[12px] md:text-[13px] text-gray-600 italic mb-2">
                  "Still have questions about exhibiting at the Expo?"
                </p>
                <button className="bg-[#113d29] hover:bg-[#0b2418] text-white text-[12px] font-bold uppercase tracking-wider py-2 px-5 rounded-md transition-colors">
                  CONTACT OUR HELP DESK
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="w-full bg-[#113d29] py-2 md:py-4 border-t-4 border-[#e85d1c] relative overflow-hidden">
        {/* Subtle background pattern/glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3b8c2a] opacity-20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3b8c2a] opacity-20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="w-full px-4 md:px-11 xl:px-11 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-6 h-[2px] bg-[#e85d1c]"></div>
                <h3 className="text-[12px] md:text-[14px] font-bold text-[#e85d1c] tracking-[0.15em] uppercase">
                  IGNITE YOUR GROWTH
                </h3>
              </div>
              <h2 className="text-[28px] md:text-[32px] lg:text-[26px] font-semibold text-white leading-tight mb-2">
                Be Part of India's Global Wellness Movement
              </h2>
              <p className="text-[13px] md:text-[14px] text-gray-300">
                Exhibit. Connect. Collaborate. Grow. Join healthcare leaders in building the future of wellness.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 w-full lg:w-auto mt-2 lg:mt-0">
              <button className="bg-gradient-to-r from-[#f97316] to-[#e85d1c] hover:from-[#ea580c] hover:to-[#c2410c] text-white text-[11px] md:text-[12px] font-bold uppercase tracking-wider py-2 px-4 rounded shadow-lg transition-all hover:scale-105">
                BOOK YOUR STALL
              </button>
              <button className="bg-white hover:bg-gray-100 text-[#113d29] text-[11px] md:text-[12px] font-bold uppercase tracking-wider py-2 px-4 rounded shadow-lg transition-all hover:scale-105">
                VISITOR REGISTRATION
              </button>
              <button className="bg-white hover:bg-gray-100 text-[#113d29] text-[11px] md:text-[12px] font-bold uppercase tracking-wider py-2 px-4 rounded shadow-lg transition-all hover:scale-105">
                DELEGATE REGISTER
              </button>
              <button className="bg-white hover:bg-gray-100 text-[#113d29] text-[11px] md:text-[12px] font-bold uppercase tracking-wider py-2 px-4 rounded shadow-lg transition-all hover:scale-105">
                BUYER REGISTER
              </button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutFaq;
