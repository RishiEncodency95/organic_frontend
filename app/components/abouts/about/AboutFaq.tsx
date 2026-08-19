"use client";
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import faqImg from '@/app/assets/about/faq.png';
import vleafImg from '@/app/assets/icons/vleaf.png';
import SectionContainer from '@/app/components/layout/SectionContainer';

const faqs = [
  {
    question: "What is the Bharat Organic Expo 2027?",
    answer: "It is India's premier international exhibition & conference dedicated to organic products, natural healthcare, Ayurveda, and sustainable living solutions under one integrated platform."
  },
  {
    question: "Who should attend this expo?",
    answer: "Organic farmers, wholesale buyers, retailers, distributors, wellness entrepreneurs, policymakers, and international trade delegations looking to discover authentic organic products and build global partnerships."
  },
  {
    question: "What are the key highlights of the expo?",
    answer: "The event features a large international exhibition pavilion, technical knowledge conferences, B2B buyer-seller meets, and prestigious industry excellence recognition programs."
  },
  {
    question: "What industries are covered in the expo?",
    answer: "Key sectors include Certified Organic Foods, Natural Herbal Healthcare, Ayurveda, Organic Farming Inputs, Eco-Friendly Packaging, and Sustainable Agriculture Technologies."
  },
  {
    question: "How can I participate in the expo?",
    answer: "You can register as an exhibitor, visitor, B2B buyer, or conference delegate directly on our website or by getting in touch with our event help desk."
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
      <style>{`
        @keyframes goldShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0%   { left: -75%; }
          100% { left: 150%; }
        }
        @keyframes sparkleAnim {
          0%   { opacity: 0; transform: scale(0.5) translateY(0); }
          40%  { opacity: 1; transform: scale(1.2) translateY(-4px); }
          80%  { opacity: 0.6; transform: scale(0.9) translateY(-6px); }
          100% { opacity: 0; transform: scale(0.5) translateY(-8px); }
        }
        .golden-btn-footer {
          background: linear-gradient(135deg, #f5c842 0%, #ffdd00 30%, #ffa500 60%, #f5c842 100%);
          background-size: 200% 200%;
          animation: goldShift 2.5s ease infinite;
          box-shadow: 0 0 16px 4px rgba(255,200,0,0.3), 0 4px 15px rgba(255,165,0,0.25);
          position: relative;
          overflow: hidden;
        }
        .golden-btn-footer::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          animation: shimmer 2s infinite;
        }
      `}</style>

      {/* SUPPORT & INFO SECTION */}
      <section className="w-full bg-white pt-6 pb-8 border-t border-gray-100 font-inter relative overflow-hidden">
        {/* Decorative Top Right Corner Leaf (vleaf.png) */}
        <div className="absolute right-0 top-0 pointer-events-none opacity-80 w-24 sm:w-32 md:w-40 lg:w-[170px] z-0">
          <Image
            src={vleafImg}
            alt="Organic Leaf Decoration Top Right"
            className="w-full h-auto object-contain translate-x-1/6 -translate-y-1/6"
          />
        </div>

        <SectionContainer className="relative z-10">

          {/* Header */}
          <div className="flex flex-col items-center text-center mb-6">
            <p className="flex items-center gap-2 text-[#d26019] font-bold text-[11px] md:text-[13px] uppercase tracking-[0.22em] mb-2">
              <span className="inline-block w-6 h-[1.5px] bg-[#d26019]" />
              SUPPORT & INFO
              <span className="inline-block w-6 h-[1.5px] bg-[#d26019]" />
            </p>

            <h2 
              className="text-[22px] md:text-[28px] font-semibold text-[#23471d] leading-[1.2] mb-2 font-poppins"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
            >
              Frequently Asked <span className="text-[#3b8c2a]">Questions</span>
            </h2>

            <p className="text-[13px] md:text-[14px] text-gray-600 font-medium max-w-3xl mx-auto">
              Find answers to common inquiries about the Bharat Organic Expo 2027.
            </p>
          </div>

          <div className="flex w-full flex-col lg:flex-row items-stretch gap-6 lg:gap-8">

            {/* Left Column: FAQ Accordion */}
            <div className="lg:w-[65%] flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`border rounded-xl transition-all duration-300 overflow-hidden ${isOpen ? 'border-[#d26019] border-l-[4px] shadow-sm bg-white' : 'border-gray-200 bg-[#f8f9fa] hover:bg-white'}`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-3 pr-4">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${isOpen ? 'bg-[#23471d] text-white' : 'bg-gray-100 text-gray-400'}`}>
                          <HelpCircle size={16} />
                        </div>
                        <span className={`text-[14px] md:text-[15px] font-semibold leading-[1.3] ${isOpen ? 'text-[#23471d]' : 'text-gray-800'}`}>
                          Q{index + 1}. {faq.question}
                        </span>
                      </div>

                      <div className={`w-6 h-6 flex items-center justify-center shrink-0 rounded-md ${isOpen ? 'bg-[#d26019] text-white' : 'bg-white border border-gray-200 text-gray-400'}`}>
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 md:px-5 pb-4 pt-0">
                        <div className="pl-10 border-t border-gray-100 pt-3">
                          <p className="text-[13px] md:text-[14px] text-gray-700 leading-[1.6] font-medium text-justify">
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
              <div className="flex-1 bg-gray-100 rounded-t-xl overflow-hidden relative min-h-[220px] md:min-h-[280px] group border border-gray-200">
                <Image src={faqImg} alt="FAQ Expo Support" fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" />
              </div>

              <div className="bg-[#f0f7f0] border border-t-0 border-[#23471d]/20 rounded-b-xl py-4 px-6 flex flex-col items-center justify-center text-center shadow-sm">
                <p className="text-[13px] md:text-[14px] text-gray-700 font-semibold italic mb-3">
                  "Still have questions about exhibiting at the Expo?"
                </p>
                <Link 
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-[#F2B40E] bg-[#23471d] text-white font-semibold text-[12px] uppercase tracking-wide hover:bg-[#F2B40E] hover:text-[#0b2912] transition-colors duration-300 group shadow-md hover:shadow-lg"
                >
                  CONTACT OUR HELP DESK
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </Link>
              </div>
            </div>

          </div>
        </SectionContainer>
      </section>

      {/* IGNITE YOUR GROWTH CTA BANNER (EXACT 9TH IHWE) */}
      <section className="py-4 bg-[#23471d] relative overflow-hidden border-t border-white/5 font-inter">
        <SectionContainer className="relative z-10">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-4">
            
            {/* Text Side */}
            <div className="text-center xl:text-left max-w-2xl">
              <div className="flex items-center justify-center xl:justify-start gap-2.5 mb-1.5">
                <div className="h-[1.5px] w-6 bg-[#F3B71B]" />
                <span className="text-[#F3B71B] font-bold text-[9px] md:text-[10px] uppercase tracking-[0.25em]">
                  Ignite Your Growth
                </span>
              </div>
              <h3
                className="text-white font-semibold text-lg md:text-2xl mb-1 leading-tight px-4 xl:px-0 font-poppins"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
              >
                Be Part of India's Global Organic Movement
              </h3>
              <p className="text-white/80 font-semibold text-[10px] md:text-[11px] max-w-xl mx-auto xl:mx-0 px-4 xl:px-0">
                Exhibit. Connect. Collaborate. Grow. Join industry leaders, buyers, innovators and organic brands shaping a healthier, sustainable future.
              </p>
            </div>

            {/* Buttons Side */}
            <div className="grid grid-cols-2 md:grid-cols-4 xl:flex xl:flex-nowrap items-center justify-center gap-2.5 w-full xl:w-auto px-4 xl:px-0">
              {[
                { label: "BOOK YOUR STALL", link: "/registration/book-a-stand", style: "gold" },
                { label: "VISITOR REGISTRATION", link: "/registration/visitor-registration", style: "visitor" },
                { label: "DELEGATE REGISTER", link: "/contact", style: "delegate" },
                { label: "BUYER REGISTER", link: "/registration/buyer-registration", style: "buyer" },
              ].map((btn, i) => (
                <div key={i} className="relative group/btn flex-1 xl:flex-none">
                  {btn.style === "gold" && (
                    <>
                      <span style={{ position: 'absolute', pointerEvents: 'none', fontSize: '10px', color: '#fff176', textShadow: '0 0 6px gold', animation: 'sparkleAnim 1.6s ease-in-out infinite', opacity: 0, zIndex: 20, top: '-6px', left: '10%', animationDelay: '0s' }} className="group-hover/btn:opacity-100 transition-opacity">✦</span>
                      <span style={{ position: 'absolute', pointerEvents: 'none', fontSize: '10px', color: '#fff176', textShadow: '0 0 6px gold', animation: 'sparkleAnim 1.6s ease-in-out infinite', opacity: 0, zIndex: 20, top: '-8px', left: '40%', animationDelay: '0.4s' }} className="group-hover/btn:opacity-100 transition-opacity">✦</span>
                      <span style={{ position: 'absolute', pointerEvents: 'none', fontSize: '10px', color: '#fff176', textShadow: '0 0 6px gold', animation: 'sparkleAnim 1.6s ease-in-out infinite', opacity: 0, zIndex: 20, top: '-5px', right: '15%', animationDelay: '0.8s' }} className="group-hover/btn:opacity-100 transition-opacity">✦</span>
                      <span style={{ position: 'absolute', pointerEvents: 'none', fontSize: '10px', color: '#fff176', textShadow: '0 0 6px gold', animation: 'sparkleAnim 1.6s ease-in-out infinite', opacity: 0, zIndex: 20, bottom: '-6px', left: '25%', animationDelay: '0.2s' }} className="group-hover/btn:opacity-100 transition-opacity">✦</span>
                    </>
                  )}
                  {btn.style === "visitor" && (
                    <>
                      <span style={{ position: 'absolute', pointerEvents: 'none', fontSize: '10px', color: '#ffb3c6', textShadow: '0 0 6px #4B1426', animation: 'sparkleAnim 1.6s ease-in-out infinite', opacity: 0, zIndex: 20, top: '-6px', left: '10%', animationDelay: '0s' }} className="group-hover/btn:opacity-100 transition-opacity">✦</span>
                      <span style={{ position: 'absolute', pointerEvents: 'none', fontSize: '10px', color: '#ffb3c6', textShadow: '0 0 6px #4B1426', animation: 'sparkleAnim 1.6s ease-in-out infinite', opacity: 0, zIndex: 20, top: '-8px', left: '40%', animationDelay: '0.4s' }} className="group-hover/btn:opacity-100 transition-opacity">✦</span>
                      <span style={{ position: 'absolute', pointerEvents: 'none', fontSize: '10px', color: '#fff', textShadow: '0 0 6px #4B1426', animation: 'sparkleAnim 1.6s ease-in-out infinite', opacity: 0, zIndex: 20, top: '-5px', right: '15%', animationDelay: '0.8s' }} className="group-hover/btn:opacity-100 transition-opacity">✦</span>
                      <span style={{ position: 'absolute', pointerEvents: 'none', fontSize: '10px', color: '#ffb3c6', textShadow: '0 0 6px #4B1426', animation: 'sparkleAnim 1.6s ease-in-out infinite', opacity: 0, zIndex: 20, bottom: '-6px', left: '25%', animationDelay: '0.2s' }} className="group-hover/btn:opacity-100 transition-opacity">✦</span>
                    </>
                  )}
                  {btn.style === "delegate" && (
                    <>
                      <span style={{ position: 'absolute', pointerEvents: 'none', fontSize: '10px', color: '#c4b5fd', textShadow: '0 0 6px #321E48', animation: 'sparkleAnim 1.6s ease-in-out infinite', opacity: 0, zIndex: 20, top: '-6px', left: '10%', animationDelay: '0s' }} className="group-hover/btn:opacity-100 transition-opacity">✦</span>
                      <span style={{ position: 'absolute', pointerEvents: 'none', fontSize: '10px', color: '#c4b5fd', textShadow: '0 0 6px #321E48', animation: 'sparkleAnim 1.6s ease-in-out infinite', opacity: 0, zIndex: 20, top: '-8px', left: '40%', animationDelay: '0.4s' }} className="group-hover/btn:opacity-100 transition-opacity">✦</span>
                      <span style={{ position: 'absolute', pointerEvents: 'none', fontSize: '10px', color: '#fff', textShadow: '0 0 6px #321E48', animation: 'sparkleAnim 1.6s ease-in-out infinite', opacity: 0, zIndex: 20, top: '-5px', right: '15%', animationDelay: '0.8s' }} className="group-hover/btn:opacity-100 transition-opacity">✦</span>
                      <span style={{ position: 'absolute', pointerEvents: 'none', fontSize: '10px', color: '#c4b5fd', textShadow: '0 0 6px #321E48', animation: 'sparkleAnim 1.6s ease-in-out infinite', opacity: 0, zIndex: 20, bottom: '-6px', left: '25%', animationDelay: '0.2s' }} className="group-hover/btn:opacity-100 transition-opacity">✦</span>
                    </>
                  )}
                  {btn.style === "buyer" && (
                    <>
                      <span style={{ position: 'absolute', pointerEvents: 'none', fontSize: '10px', color: '#ffffff', textShadow: '0 0 6px #ffffff', animation: 'sparkleAnim 1.6s ease-in-out infinite', opacity: 0, zIndex: 20, top: '-6px', left: '10%', animationDelay: '0s' }} className="group-hover/btn:opacity-100 transition-opacity">✦</span>
                      <span style={{ position: 'absolute', pointerEvents: 'none', fontSize: '10px', color: '#ffffff', textShadow: '0 0 6px #ffffff', animation: 'sparkleAnim 1.6s ease-in-out infinite', opacity: 0, zIndex: 20, top: '-8px', left: '40%', animationDelay: '0.4s' }} className="group-hover/btn:opacity-100 transition-opacity">✦</span>
                      <span style={{ position: 'absolute', pointerEvents: 'none', fontSize: '10px', color: '#ffffff', textShadow: '0 0 6px #ffffff', animation: 'sparkleAnim 1.6s ease-in-out infinite', opacity: 0, zIndex: 20, top: '-5px', right: '15%', animationDelay: '0.8s' }} className="group-hover/btn:opacity-100 transition-opacity">✦</span>
                      <span style={{ position: 'absolute', pointerEvents: 'none', fontSize: '10px', color: '#ffffff', textShadow: '0 0 6px #ffffff', animation: 'sparkleAnim 1.6s ease-in-out infinite', opacity: 0, zIndex: 20, bottom: '-6px', left: '25%', animationDelay: '0.2s' }} className="group-hover/btn:opacity-100 transition-opacity">✦</span>
                    </>
                  )}
                  <Link
                    href={btn.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-2.5 text-[9px] font-black uppercase tracking-[0.05em] transition-all duration-300 rounded-lg shadow-lg hover:-translate-y-1 active:translate-y-0 text-center flex items-center justify-center w-full xl:min-w-[145px] relative z-10
                      ${btn.style === "gold" ? "golden-btn-footer text-[#1a3516]" : ""}
                      ${btn.style === "visitor" ? "bg-[#4B1426] text-white hover:bg-[#631c33] border border-[#631c33]" : ""}
                      ${btn.style === "delegate" ? "bg-[#321E48] text-white hover:bg-[#462a64] border border-[#462a64]" : ""}
                      ${btn.style === "buyer" ? "bg-white text-[#23471d] hover:bg-[#F3B71B]" : ""}
                    `}
                  >
                    {btn.label}
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </SectionContainer>
      </section>
    </>
  );
};

export default AboutFaq;
