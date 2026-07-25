"use client";

import React from 'react';
import { ChevronDown, ArrowRight } from "lucide-react";

// Custom Social SVG Components (Lucide does not export brand icons in newer versions)
const Facebook = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>);
const Instagram = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>);
const Twitter = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>);
const Linkedin = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>);
const Youtube = (props: any) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>);

const faqs = [
  {
    question: "How can I register for the expo?",
    answer: "You can register online through our website's registration portal or on-site at the venue during the exhibition days."
  },
  {
    question: "How can I become an exhibitor?",
    answer: "To become an exhibitor, please fill out the 'Book Your Stall' form or contact our sales team directly at sales@bharatorganicexpo.com."
  },
  {
    question: "What are the stall booking charges?",
    answer: "Stall booking charges vary depending on the size and location. Please download our brochure or contact the sales team for detailed pricing."
  },
  {
    question: "What is the cancellation and refund policy?",
    answer: "Cancellation requests must be submitted in writing. Refunds are processed based on the timeframe outlined in our Terms & Conditions."
  },
  {
    question: "Is parking available at the venue?",
    answer: "Yes, ample parking space for over 500+ cars is available at Pragati Maidan for exhibitors and visitors."
  }
];

const ContactFaqNewsletter = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 pb-10">
      <div className="w-full flex flex-col items-center">
        
        <h2 className="text-[#3b8c2a] text-[16px] md:text-[18px] font-semibold mb-6 text-center">Frequently Asked Questions</h2>
        
        <div className="w-full flex flex-col gap-2.5 mb-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white border transition-all duration-300 rounded-xl shadow-sm overflow-hidden ${openIndex === index ? 'border-[#3b8c2a]/50 shadow-md' : 'border-gray-100 hover:border-[#e8f5ec]'}`}
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-5 py-4 md:py-3 flex items-center justify-between text-left group"
              >
                <span className={`text-[15px] md:text-[16px] font-medium transition-colors ${openIndex === index ? 'text-[#3b8c2a]' : 'text-[#111827] group-hover:text-[#3b8c2a]'}`}>{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === index ? 'bg-[#3b8c2a] text-white' : 'bg-[#f8fdf9] text-[#3b8c2a] group-hover:bg-[#e8f5ec]'}`}>
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </div>
              </button>
              
              <div 
                className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'
                }`}
              >
                <p className="text-[#64748b] text-[14px] md:text-[15px] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <a href="#" className="inline-flex items-center gap-2 text-white bg-[#154726] hover:bg-[#0b2912] px-6 py-2.5 rounded-md text-[13px] md:text-[14px] font-bold transition-colors shadow-sm">
          View All FAQs <ArrowRight size={16} />
        </a>

      </div>
    </section>
  );
};

export default ContactFaqNewsletter;
