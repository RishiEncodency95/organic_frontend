"use client";
import React, { useState } from 'react';
import { User, Mail, Tag, MessageSquare, Send, MessageCircle, Handshake, Mic, Camera, Headphones, Phone, CheckCircle2 } from 'lucide-react';
import cleaf from '@/app/assets/icons/cleaf.png';
import leafs from '@/app/assets/icons/leafs.png';
import footerright from '@/app/assets/icons/footerright.webp';
import SectionContainer from '@/app/components/layout/SectionContainer';

const ContactForm = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const handleSendOtp = (e: React.MouseEvent) => {
    e.preventDefault();
    setOtpSent(true);
  };

  const handleVerifyOtp = (e: React.MouseEvent) => {
    e.preventDefault();
    setOtpVerified(true);
  };

  const whyContactReasons = [
    {
      icon: <MessageCircle size={18} className="text-[#032e1c]" />,
      title: 'General Inquiries',
      desc: 'Any questions? We\'re happy to help.'
    },
    {
      icon: <Handshake size={18} className="text-[#032e1c]" />,
      title: 'Partnerships & Sponsorships',
      desc: 'Let\'s build something meaningful together.'
    },
    {
      icon: <Mic size={18} className="text-[#032e1c]" />,
      title: 'Speaker & Paper Queries',
      desc: 'Interested in speaking or presenting?'
    },
    {
      icon: <Camera size={18} className="text-[#032e1c]" />,
      title: 'Media & Press',
      desc: 'For media collaborations and interviews.'
    },
    {
      icon: <Headphones size={18} className="text-[#032e1c]" />,
      title: 'Event Support',
      desc: 'Need help with registration or events?'
    }
  ];

  return (
    <section className="w-full bg-[#fbfcf7] pb-16 font-inter relative z-10 -mt-8 md:-mt-12 overflow-hidden">
      
      {/* Decorative Left Image */}
      <img 
        src={(leafs as any)?.src || (leafs as unknown as string)} 
        alt="leaf decoration" 
        className="absolute left-0 top-1/2 -translate-y-1/2 w-32 md:w-48 opacity-100 pointer-events-none -translate-x-1/4 z-0" 
      />
      
      {/* Decorative Right Image */}
      <img 
        src={(footerright as any)?.src || (footerright as unknown as string)} 
        alt="right decoration" 
        className="absolute right-0 top-0 mt-4 w-32 md:w-48 opacity-100 pointer-events-none z-20" 
      />

      <SectionContainer className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 mt-0 md:mt-2">
          
          {/* Left Column: Form */}
          <div 
            className="flex-1 bg-white rounded-2xl px-6 py-4 md:px-10 md:pt-6 md:pb-8 relative"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' }}
          >
            <h2 className="text-[#0c290d] font-inter font-semibold text-2xl md:text-3xl mb-4">
              <span className="underline decoration-[#032e1c] underline-offset-[12px] decoration-2">Send</span> Us a Message
            </h2>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* Row 1 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <User size={18} className="text-black" />
                  </div>
                  <input 
                    type="text" 
                    placeholder=" " 
                    className="peer w-full pl-11 pr-4 py-3 bg-transparent relative z-20 border border-gray-200 rounded-lg focus:outline-none focus:border-[#032e1c] focus:ring-1 focus:ring-[#032e1c] text-sm text-gray-700"
                    required
                  />
                  <div className="absolute inset-y-0 left-11 flex items-center pointer-events-none text-sm text-gray-400 z-0 opacity-0 peer-placeholder-shown:opacity-100 transition-opacity">
                    Full Name <span className="text-red-500 ml-1">*</span>
                  </div>
                </div>
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <Mail size={18} className="text-black" />
                  </div>
                  <input 
                    type="email" 
                    placeholder=" " 
                    className="peer w-full pl-11 pr-4 py-3 bg-transparent relative z-20 border border-gray-200 rounded-lg focus:outline-none focus:border-[#032e1c] focus:ring-1 focus:ring-[#032e1c] text-sm text-gray-700"
                    required
                  />
                  <div className="absolute inset-y-0 left-11 flex items-center pointer-events-none text-sm text-gray-400 z-0 opacity-0 peer-placeholder-shown:opacity-100 transition-opacity">
                    Email Address <span className="text-red-500 ml-1">*</span>
                  </div>
                </div>
              </div>

              {/* Row 2: Phone Numbers */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* WhatsApp Number */}
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <Phone size={18} className="text-black" />
                  </div>
                  <input 
                    type="tel" 
                    placeholder=" " 
                    className="peer w-full pl-11 pr-32 py-3 bg-transparent relative z-20 border border-gray-200 rounded-lg focus:outline-none focus:border-[#032e1c] focus:ring-1 focus:ring-[#032e1c] text-sm text-gray-700 disabled:opacity-70 disabled:bg-gray-50 transition-all"
                    required
                    disabled={otpVerified}
                  />
                  <div className="absolute inset-y-0 left-11 flex items-center pointer-events-none text-sm text-gray-400 z-0 opacity-0 peer-placeholder-shown:opacity-100 transition-opacity">
                    WhatsApp Number <span className="text-red-500 ml-1">*</span>
                  </div>
                  {!otpVerified && (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-[#032e1c] hover:bg-[#044026] text-white text-xs font-medium rounded-md transition-colors z-30"
                    >
                      {otpSent ? 'Resend OTP' : 'Send OTP'}
                    </button>
                  )}
                  {otpVerified && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 z-30 text-green-600 flex items-center gap-1">
                      <CheckCircle2 size={16} />
                      <span className="text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>

                {/* Alternate Number (Optional) */}
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <Phone size={18} className="text-black" />
                  </div>
                  <input 
                    type="tel" 
                    placeholder=" " 
                    className="peer w-full pl-11 pr-4 py-3 bg-transparent relative z-20 border border-gray-200 rounded-lg focus:outline-none focus:border-[#032e1c] focus:ring-1 focus:ring-[#032e1c] text-sm text-gray-700 transition-all"
                  />
                  <div className="absolute inset-y-0 left-11 flex items-center pointer-events-none text-sm text-gray-400 z-0 opacity-0 peer-placeholder-shown:opacity-100 transition-opacity">
                    Alternate Number <span className="text-gray-400 ml-1 text-xs">(Optional)</span>
                  </div>
                </div>
              </div>

              {/* OTP Input Row */}
              {otpSent && !otpVerified && (
                <div className="flex flex-col md:flex-row gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                      <MessageSquare size={18} className="text-black" />
                    </div>
                    <input 
                      type="text" 
                      placeholder=" " 
                      maxLength={6}
                      className="peer w-full pl-11 pr-28 py-3 bg-transparent relative z-20 border border-gray-200 rounded-lg focus:outline-none focus:border-[#032e1c] focus:ring-1 focus:ring-[#032e1c] text-sm text-gray-700 tracking-widest"
                      required
                    />
                    <div className="absolute inset-y-0 left-11 flex items-center pointer-events-none text-sm text-gray-400 z-0 opacity-0 peer-placeholder-shown:opacity-100 transition-opacity tracking-normal">
                      Enter OTP <span className="text-red-500 ml-1">*</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleVerifyOtp}
                      className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-green-600 hover:bg-green-700 text-white text-xs font-medium rounded-md transition-colors z-30"
                    >
                      Verify
                    </button>
                  </div>
                  {/* Empty space to align OTP with WhatsApp field */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              )}

              {/* Verified Alert */}
              {otpVerified && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center gap-3 animate-in fade-in zoom-in-95 duration-300">
                  <div className="bg-green-100 p-1.5 rounded-full">
                    <CheckCircle2 size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-green-800">WhatsApp Verified Successfully!</h4>
                    <p className="text-xs text-green-600">Your number has been authenticated. You can now proceed to send the message.</p>
                  </div>
                </div>
              )}

              {/* Row 3 */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                  <Tag size={18} className="text-black" />
                </div>
                <input 
                  type="text" 
                  placeholder=" " 
                  className="peer w-full pl-11 pr-4 py-3 bg-transparent relative z-20 border border-gray-200 rounded-lg focus:outline-none focus:border-[#032e1c] focus:ring-1 focus:ring-[#032e1c] text-sm text-gray-700"
                  required
                />
                <div className="absolute inset-y-0 left-11 flex items-center pointer-events-none text-sm text-gray-400 z-0 opacity-0 peer-placeholder-shown:opacity-100 transition-opacity">
                  Subject <span className="text-red-500 ml-1">*</span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="relative">
                <div className="absolute top-4 left-0 pl-4 pointer-events-none z-10">
                  <MessageSquare size={18} className="text-black" />
                </div>
                <textarea 
                  placeholder=" " 
                  rows={4}
                  className="peer w-full pl-11 pr-4 py-3 bg-transparent relative z-20 border border-gray-200 rounded-lg focus:outline-none focus:border-[#032e1c] focus:ring-1 focus:ring-[#032e1c] text-sm text-gray-700 resize-none"
                  required
                ></textarea>
                <div className="absolute top-[13px] left-11 pointer-events-none text-sm text-gray-400 z-0 opacity-0 peer-placeholder-shown:opacity-100 transition-opacity">
                  Your Message <span className="text-red-500 ml-1">*</span>
                </div>
              </div>

              {/* Submit Area */}
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
                <button 
                  type="submit" 
                  className="bg-[#032e1c] hover:bg-[#044026] text-white px-8 py-3 rounded-lg font-medium text-sm transition-colors flex items-center gap-2"
                >
                  <Send size={16} /> Send Message
                </button>
                
                {/* Arrow and handwritten text */}
                <div className="flex items-center gap-2 hidden sm:flex">
                  <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10 C 20 -5, 40 25, 58 10" stroke="#032e1c" strokeWidth="1.5" fill="none"/>
                    <path d="M52 5 L58 10 L52 15" stroke="#032e1c" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-['Caveat',_cursive] italic text-gray-600 text-lg">We will get back to you soon!</span>
                </div>
              </div>

            </form>
          </div>

          {/* Right Column: Why Contact Us */}
          <div 
            className="w-full lg:w-[400px] xl:w-[450px] bg-[#f4f7ed] rounded-2xl px-6 py-4 md:px-8 md:pt-6 md:pb-6 relative overflow-hidden"
            style={{ boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px' }}
          >
            <h3 className="text-[#0c290d] font-inter font-semibold text-xl md:text-2xl mb-4">
              Why contact us?
            </h3>

            <div className="space-y-6 relative z-10">
              {whyContactReasons.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#e3eed5] flex items-center justify-center shrink-0 border border-[#d3e3be]">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-[#000000] font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-black text-xs font-medium leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Leaf */}
            <img src={(cleaf as any)?.src || (cleaf as unknown as string)} alt="decoration" className="absolute -bottom-8 right-0 w-20 md:w-28 pointer-events-none opacity-80" />
          </div>

        </div>
      </SectionContainer>
    </section>
  );
};

export default ContactForm;
