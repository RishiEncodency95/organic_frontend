"use client";
import React from 'react';
import Image from 'next/image';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import contactbg from '@/app/assets/banner/contactbgog.webp';
import SectionContainer from '@/app/components/layout/SectionContainer';
import { SITE_CONFIG } from '@/app/constants/siteConfig';

const ContactHero = () => {
  const defaultContactInfo = [
    {
      icon: <MapPin size={20} className="text-[#032e1c]" />,
      title: 'Visit Us',
      lines: ['Pragati Maidan,', 'New Delhi - 110001, India']
    },
    {
      icon: <Mail size={20} className="text-[#032e1c]" />,
      title: 'Email Us',
      lines: [SITE_CONFIG.email, 'info@namogangewellness.com']
    },
    {
      icon: <Phone size={20} className="text-[#032e1c]" />,
      title: 'Call Us',
      lines: [SITE_CONFIG.phone, '+91 11 1234 5678']
    },
    {
      icon: <Clock size={20} className="text-[#032e1c]" />,
      title: 'Office Hours',
      lines: ['Mon - Sat: 9:00 AM - 6:00 PM', 'Sunday: Closed']
    }
  ];

  const contactInfo = defaultContactInfo;

  return (
    <section className="relative w-full pb-20 pt-0 bg-[#fbfcf7]">
      {/* Hero Banner Section */}
      <div className="w-full h-[360px] md:h-[420px] relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-right md:bg-center"
          style={{ backgroundImage: `url(${(contactbg as any)?.src || contactbg})` }}
        >
        </div>

        {/* Soft overlay gradient for high text readability on mobile & desktop */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white/95 via-white/85 to-white/30 md:from-white/90 md:via-white/50 md:to-transparent pointer-events-none" />

        {/* Hero Content */}
        <SectionContainer className="relative z-10 w-full">
          <div className="max-w-xl -mt-2 md:-mt-8 ml-0 sm:ml-4 md:ml-8 p-4 sm:p-0 bg-white/60 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none rounded-2xl border border-white/80 sm:border-0 shadow-sm sm:shadow-none">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e9f0cd] text-[#032e1c] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-3 border border-[#dce3ca]">
              <Send size={14} className="-rotate-45" /> CONTACT US
            </div>

            {/* Heading */}
            <h1 
              className="text-3xl md:text-4xl lg:text-6xl font-[700] text-[#03221c] leading-tight mb-3 font-poppins"
            >
              Let's Grow <br /><span className="text-[#fe7c0c]">Organic</span> Together
            </h1>

            {/* Decoration line */}
            <svg width="60" height="10" viewBox="0 0 60 10" className="mb-3" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5C10 -2 20 12 30 5C40 -2 50 12 60 5" stroke="#fe7c0c" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* Subtitle */}
            <p className="text-slate-800 text-sm md:text-base max-w-md leading-relaxed font-semibold">
              We're here to answer your questions, help exhibitors, guide visitors, and support partners.
            </p>
          </div>
        </SectionContainer>
      </div>

      {/* Contact Info Bar */}
      <SectionContainer className="relative z-20 -mt-6 md:-mt-8">
        <div className="bg-[#fefefe] rounded-2xl shadow-lg border border-gray-100 py-4 px-6 md:py-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">

          {contactInfo.map((info, idx) => (
            <div key={idx} className="flex items-start justify-start md:justify-center gap-3 xl:gap-4 flex-1 w-full border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:px-4 first:pl-0 last:border-0 last:pb-0 md:last:pr-0">
              <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-[#e9f0cd] flex items-center justify-center shrink-0 border border-[#dce3ca]">
                {info.icon}
              </div>
              <div className="flex flex-col">
                <h4 className="font-[600] text-[#032e1c] text-sm mb-1">{info.title}</h4>
                {info.lines.map((line, i) => (
                  <p key={i} className="text-black text-[11px] xl:text-xs font-medium leading-tight">{line}</p>
                ))}
              </div>
            </div>
          ))}

        </div>
      </SectionContainer>

    </section>
  );
};

export default ContactHero;
