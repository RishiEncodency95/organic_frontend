"use client";
import React, { useEffect, useState } from 'react';
import { MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import contactbg from '@/app/assets/banner/contactbgog.webp';
import SectionContainer from '@/app/components/layout/SectionContainer';
import { SITE_CONFIG } from '@/app/constants/siteConfig';
import { API_URL } from '@/lib/api';

const ICON_MAP: Record<string, any> = { MapPin, Mail, Phone, Clock };

interface ContactHeroItem {
  title: string;
  description: string;
  icon: string;
}

interface ContactHeroData {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  items: ContactHeroItem[];
}

const DEFAULT_DATA: ContactHeroData = {
  eyebrow: 'CONTACT US',
  title: "Let's Grow Organic Together",
  subtitle: "We're here to answer your questions, help exhibitors, guide visitors, and support partners.",
  image: '',
  items: [
    { title: 'Visit Us', description: 'Pragati Maidan, New Delhi - 110001, India', icon: 'MapPin' },
    { title: 'Email Us', description: `${SITE_CONFIG.email}`, icon: 'Mail' },
    { title: 'Call Us', description: `${SITE_CONFIG.phone}`, icon: 'Phone' },
    { title: 'Office Hours', description: 'Mon - Sat: 9:00 AM - 6:00 PM (Sunday: Closed)', icon: 'Clock' },
  ],
};

const ContactHero = () => {
  const [data, setData] = useState<ContactHeroData>(DEFAULT_DATA);

  useEffect(() => {
    let active = true;
    fetch(`${API_URL}/settings`, { cache: 'no-store' })
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => {
        const settings = json?.data || json;
        const sections = settings?.contactPage?.sections;
        const hero = Array.isArray(sections) ? sections.find((s: any) => s.key === 'contact-hero') : null;
        if (active && hero) {
          setData({
            eyebrow: hero.eyebrow || DEFAULT_DATA.eyebrow,
            title: hero.title || DEFAULT_DATA.title,
            subtitle: hero.subtitle || DEFAULT_DATA.subtitle,
            image: typeof hero.image === 'string' ? hero.image.trim() : '',
            items: Array.isArray(hero.items) && hero.items.length > 0 ? hero.items : DEFAULT_DATA.items,
          });
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  const bgUrl = data.image || (contactbg as any)?.src || contactbg;

  return (
    <section className="relative w-full pb-20 pt-0 bg-[#fbfcf7]">
      {/* Hero Banner Section */}
      <div className="w-full h-[320px] md:h-[420px] relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-right md:bg-center"
          style={{ backgroundImage: `url(${bgUrl})` }}
        >
        </div>

        {/* Mobile-only gradient overlay for text readability (desktop remains untouched) */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white/95 via-white/85 to-transparent/30 md:hidden pointer-events-none" />

        {/* Hero Content */}
        <SectionContainer className="relative z-10 w-full">
          <div className="max-w-xl -mt-2 md:-mt-8 ml-1 sm:ml-4 md:ml-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e9f0cd] text-[#032e1c] px-3.5 py-1 md:px-4 md:py-1.5 rounded-full text-[11px] md:text-xs font-bold tracking-wider mb-2 md:mb-3 border border-[#dce3ca] shadow-sm">
              <Send size={13} className="-rotate-45" /> {data.eyebrow}
            </div>

            {/* Heading */}
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-[700] text-[#03221c] leading-tight mb-2 md:mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {(() => {
                const words = data.title.trim().split(/\s+/);
                const lastWord = words.pop();
                return (
                  <>
                    {words.join(" ")}{words.length > 0 ? " " : ""}
                    <span className="text-[#fe7c0c]">{lastWord}</span>
                  </>
                );
              })()}
            </h1>

            {/* Decoration line */}
            <svg width="60" height="10" viewBox="0 0 60 10" className="mb-2 md:mb-4" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5C10 -2 20 12 30 5C40 -2 50 12 60 5" stroke="#fe7c0c" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* Subtitle */}
            <p className="text-slate-900 font-semibold text-xs sm:text-sm md:text-base max-w-md leading-relaxed">
              {data.subtitle}
            </p>
          </div>
        </SectionContainer>
      </div>

      {/* Contact Info Bar */}
      <SectionContainer className="relative z-20 -mt-6 md:-mt-8">
        <div className="bg-[#fefefe] rounded-2xl shadow-lg border border-gray-100 py-4 px-6 md:py-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">

          {data.items.map((info, idx) => {
            const IconComponent = ICON_MAP[info.icon] || MapPin;
            return (
              <div key={idx} className="flex items-start justify-start md:justify-center gap-3 xl:gap-4 flex-1 w-full border-b md:border-b-0 md:border-r border-gray-200 pb-4 md:pb-0 md:px-4 first:pl-0 last:border-0 last:pb-0 md:last:pr-0">
                <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full bg-[#e9f0cd] flex items-center justify-center shrink-0 border border-[#dce3ca]">
                  <IconComponent size={20} className="text-[#032e1c]" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-[600] text-[#032e1c] text-sm mb-1">{info.title}</h4>
                  <div
                    className="text-black text-[11px] xl:text-xs font-medium leading-tight [&_p]:m-0"
                    dangerouslySetInnerHTML={{ __html: info.description }}
                  />
                </div>
              </div>
            );
          })}

        </div>
      </SectionContainer>

    </section>
  );
};

export default ContactHero;
