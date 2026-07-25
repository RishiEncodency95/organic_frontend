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
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 pb-12">
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Left Side: FAQs */}
        <div className="w-full lg:w-3/5">
          <h2 className="text-[#111827] text-[20px] font-bold mb-6">Frequently Asked Questions</h2>
          
          <div className="flex flex-col gap-3 mb-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50/50 transition-colors"
                >
                  <span className="text-[#111827] text-[13px] font-semibold">{faq.question}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-40 py-4 border-t border-gray-100 opacity-100' : 'max-h-0 py-0 opacity-0'
                  }`}
                >
                  <p className="text-[#64748b] text-[12px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a href="#" className="inline-flex items-center gap-1.5 text-[#3b8c2a] text-[13px] font-bold hover:underline">
            View All FAQs <ArrowRight size={14} />
          </a>
        </div>

        {/* Right Side: Newsletter & Social */}
        <div className="w-full lg:w-2/5 flex flex-col gap-6">
          
          {/* Newsletter Box */}
          <div className="bg-[#f8fdf9] border border-[#e8f5ec] rounded-3xl p-6 md:p-8 relative overflow-hidden h-full flex flex-col justify-center">
            
            {/* Decorative Leaves Image placeholder */}
            <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')] bg-cover bg-center rounded-tl-[100px]"></div>

            <div className="relative z-10">
              <h3 className="text-[#111827] text-[18px] font-bold mb-2">Stay Updated with Organic Expo</h3>
              <p className="text-[#64748b] text-[12px] leading-relaxed mb-6">
                Subscribe to our newsletter and never miss any update about events, offers and announcements.
              </p>
              
              <div className="flex items-center gap-2 bg-white rounded-lg p-1.5 border border-gray-200 shadow-sm">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-3 py-2 text-[12px] bg-transparent focus:outline-none"
                />
                <button className="bg-[#3b8c2a] hover:bg-[#2b6b1e] text-white px-5 py-2.5 rounded-md text-[11px] font-bold uppercase tracking-wider transition-colors">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="text-[#111827] text-[14px] font-bold mb-4">Follow Us On Social Media</h3>
            <div className="flex gap-3">
              {[
                { icon: Facebook, color: "bg-[#1877F2]" },
                { icon: Instagram, color: "bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#C13584]" },
                { icon: Linkedin, color: "bg-[#0A66C2]" },
                { icon: Twitter, color: "bg-[#1DA1F2]" },
                { icon: Youtube, color: "bg-[#FF0000]" }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={i} 
                    href="#" 
                    className={`w-9 h-9 rounded-full ${social.color} flex items-center justify-center text-white hover:-translate-y-1 transition-transform shadow-md`}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactFaqNewsletter;
