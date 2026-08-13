"use client";
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import faqImg from '@/app/assets/about/faq.png';

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
  },
  {
    question: "How can I participate in the expo?",
    answer: "You can participate as an exhibitor, delegate, sponsor, or visitor. Please register through our website or contact our help desk for specific participation opportunities."
  }
];

const AboutFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="w-full bg-white py-2 md:py-4 lg:py-4 border-t border-gray-100">
        <div className="w-full px-4 md:px-11">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-[1px] bg-[#113d29]"></div>
              <h3 className="text-[12px] md:text-[16px] font-semibold text-[#113d29] tracking-[0.2em] uppercase">
                SUPPORT & INFO
              </h3>
              <div className="w-8 h-[1px] bg-[#113d29]"></div>
            </div>

            <h2 className="text-[18px] md:text-[26px] lg:text-[28px] font-semibold text-[#113d29] leading-[1.2] mb-2">
              Frequently Asked <span className="text-[#3b8c2a]">Questions</span>
            </h2>

            <p className="text-[14px] md:text-[16px] text-gray-600 leading-[1.6] max-w-4xl mx-auto">
              Find answers to common inquiries about the 9th Indian Health & Wellness Expo (Global Edition).
            </p>
          </div>

          <div className="flex w-full flex-col lg:flex-row items-stretch gap-3 lg:gap-4">

            {/* Left Column: FAQ Accordion */}
            <div className="lg:w-[65%] flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`border transition-all duration-300 ${isOpen ? 'border-[#e85d1c] border-l-[4px] shadow-sm bg-white' : 'border-gray-100 bg-[#f8f9fa] hover:bg-white'}`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-full flex items-center justify-between p-2 md:px-5 md:py-4 text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-2 pr-4">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${isOpen ? 'bg-[#113d29] text-white' : 'bg-transparent text-gray-400'}`}>
                          <HelpCircle size={16} />
                        </div>
                        <span className={`text-[16px] md:text-[18px] font-semibold leading-[1.3] ${isOpen ? 'text-[#111]' : 'text-gray-800'}`}>
                          Q{index + 1}. {faq.question}
                        </span>
                      </div>

                      <div className={`w-6 h-6 flex items-center justify-center shrink-0 rounded-sm ${isOpen ? 'bg-[#e85d1c] text-white' : 'bg-white border border-gray-200 text-gray-400'}`}>
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 md:px-5 pb-5 pt-0">
                        <div className="pl-9 border-t border-gray-100 pt-3 mt-1">
                          <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.6]">
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
            <div className="flex lg:w-[35%] flex-col">
              <div className="flex-1 bg-gray-100 rounded-t-xl overflow-hidden relative min-h-[200px] md:min-h-[300px] group">
                {/* Image Placeholder */}
                <Image src={faqImg} alt="FAQ Expo Support" fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
              </div>

              <div className="bg-[#f4f9f4] border border-t-0 border-[#d3e5d3] rounded-b-xl py-4 px-6 flex flex-col items-center justify-center text-center shadow-sm">
                <p className="text-[14px] md:text-[16px] text-gray-600 italic mb-4">
                  "Still have questions about exhibiting at the Expo?"
                </p>
                <button className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[#F2B40E] bg-[#3b8c2a] text-white font-semibold text-[12px] md:text-[14px] uppercase tracking-wide hover:bg-[#F2B40E] hover:text-[#0b2912] transition-colors duration-300 group shadow-md hover:shadow-lg">
                  CONTACT OUR HELP DESK
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative w-full overflow-hidden bg-[#EFF7EE] border-t border-[#e85d1c]/70">
        {/* Decorative background */}
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#3b8c2a]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-[#e85d1c]/10 blur-3xl pointer-events-none" />

        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(17,61,41,0.15) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative z-10  px-5 py-2 sm:px-8 md:py-4 lg:px-11 xl:px-16">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT CONTENT */}
            <div className="max-w-[700px]">

              {/* Eyebrow */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e85d1c]/30 bg-[#e85d1c]/10 px-4 py-2 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e85d1c] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e85d1c]"></span>
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#e85d1c]">
                  Ignite Your Growth
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-[580px] text-[28px] lg:text-[32px] font-extrabold leading-[1.12] tracking-tight text-[#113d29] sm:text-[36px] md:text-[42px] lg:text-[48px]">
                Be Part of India's{" "}
                <span className="bg-gradient-to-r from-[#3b8c2a] via-[#4F8F35] to-[#F2B40E] bg-clip-text text-transparent drop-shadow-sm">
                  Global Organic Movement
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-gray-600 sm:text-[16px]">
                Exhibit. Connect. Collaborate. Grow. Join industry leaders,
                buyers, innovators and organic brands shaping a healthier,
                sustainable future.
              </p>

              {/* Small trust line */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] font-semibold uppercase tracking-wide text-gray-500">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#3b8c2a]" />
                  19–21 February 2027
                </span>

                <span className="hidden h-4 w-px bg-gray-300 sm:block" />

                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#e85d1c]" />
                  Pragati Maidan, New Delhi
                </span>
              </div>
            </div>

            {/* RIGHT CTA AREA */}
            <div className="w-full lg:max-w-[560px]">

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                {/* Primary CTA */}
                <button
                  className="
              group relative flex min-h-[62px] items-center
              justify-between overflow-hidden rounded-xl
              border border-[#e85d1c]
              bg-gradient-to-r from-[#e85d1c] to-[#d04a11]
              px-5 text-left
              shadow-[0_10px_30px_rgba(232,93,28,0.3)]
              transition-all duration-500
              hover:-translate-y-1.5
              hover:shadow-[0_20px_40px_rgba(232,93,28,0.4)]
            "
                >
                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 z-0 flex -translate-x-[150%] items-center justify-center bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] transition-all duration-700 ease-out group-hover:translate-x-[150%]"></div>

                  <div className="relative z-10">
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-white/80">
                      For Exhibitors
                    </span>

                    <span className="mt-1 block text-[15px] font-extrabold uppercase tracking-wide text-white drop-shadow-sm">
                      Book Your Stall
                    </span>
                  </div>

                  <span className="relative z-10 text-xl text-white transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </button>

                {/* Visitor */}
                <button
                  className="
              group relative flex min-h-[62px] items-center
              justify-between overflow-hidden rounded-xl
              border border-gray-200
              bg-white/60
              px-5 text-left
              backdrop-blur-md
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[#3b8c2a]/40
              hover:bg-white
              hover:shadow-[0_10px_20px_rgba(59,140,42,0.1)]
            "
                >
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-gray-500">
                      For Visitors
                    </span>

                    <span className="mt-1 block text-[14px] font-extrabold uppercase tracking-wide text-[#113d29]">
                      Visitor Registration
                    </span>
                  </div>

                  <span className="text-xl text-[#3b8c2a] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                {/* Delegate */}
                <button
                  className="
              group relative flex min-h-[62px] items-center
              justify-between overflow-hidden rounded-xl
              border border-gray-200
              bg-white/60
              px-5 text-left
              backdrop-blur-md
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[#3b8c2a]/40
              hover:bg-white
              hover:shadow-[0_10px_20px_rgba(59,140,42,0.1)]
            "
                >
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-gray-500">
                      Knowledge Platform
                    </span>

                    <span className="mt-1 block text-[14px] font-extrabold uppercase tracking-wide text-[#113d29]">
                      Delegate Registration
                    </span>
                  </div>

                  <span className="text-xl text-[#3b8c2a] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                {/* Buyer */}
                <button
                  className="
              group relative flex min-h-[62px] items-center
              justify-between overflow-hidden rounded-xl
              border border-gray-200
              bg-white/60
              px-5 text-left
              backdrop-blur-md
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[#3b8c2a]/40
              hover:bg-white
              hover:shadow-[0_10px_20px_rgba(59,140,42,0.1)]
            "
                >
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-gray-500">
                      B2B Networking
                    </span>

                    <span className="mt-1 block text-[14px] font-extrabold uppercase tracking-wide text-[#113d29]">
                      Buyer Registration
                    </span>
                  </div>

                  <span className="text-xl text-[#3b8c2a] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

              </div>

              {/* Bottom note */}
              <div className="mt-4 flex items-center justify-center gap-2 text-[11px] font-medium text-gray-500">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3b8c2a]" />
                Connect with India's organic & wellness ecosystem
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutFaq;
