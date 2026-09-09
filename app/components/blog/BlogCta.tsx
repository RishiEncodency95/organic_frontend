"use client";

import React from "react";
import Link from "next/link";
import { Leaf, Calendar, MapPin } from "lucide-react";
import { Reveal } from "./BlogReveal";
import ctaLeft from "../../assets/blog/cta_left.webp";
import ctaRight from "../../assets/blog/cta_right_tight.webp";

const blogCtaData = {
  title: "Exhibit. Attend. Connect. Grow.",
  description: "Join farmers, brands, buyers, exporters, retailers and sustainability leaders shaping India's organic and natural products economy.",
  buttons: [
    {
      text: "Register as Visitor",
      link: "/registration/visitor-registration",
      styleClass: "bg-[#1b5e20] hover:bg-[#154726] text-white"
    },
    {
      text: "Register as Exhibitor",
      link: "/registration/book-a-stand",
      styleClass: "bg-[#F2B40E] text-[#0b2912] hover:bg-[#ffc533]"
    },
    {
      text: "Register as Buyer",
      link: "/registration/buyer-registration",
      styleClass: "border-2 border-[#1b5e20] text-[#1b5e20] hover:bg-[#1b5e20] hover:text-white"
    }
  ],
  info: [
    {
      icon: Calendar,
      text: "19–21 February 2027"
    },
    {
      icon: MapPin,
      text: "Pragati Maidan, New Delhi"
    }
  ]
};

const BlogCta = () => {
  return (
    <section className="relative overflow-hidden bg-[#fbf7e9] py-6 font-inter">
      <div className="hidden md:block absolute left-0 bottom-0 z-0 w-40 lg:w-48 xl:w-56">
        <img src={ctaLeft.src} alt="" aria-hidden="true" className="w-full h-auto object-contain" />
      </div>
      <div className="hidden md:block absolute right-0 bottom-0 z-0 w-40 lg:w-48 xl:w-56">
        <img src={ctaRight.src} alt="" aria-hidden="true" className="w-full h-auto object-contain" />
      </div>
      <div className="relative z-10 container mx-auto max-w-[1400px] px-6 md:px-40 lg:px-52 xl:px-60">
        <div className="flex flex-col items-center text-center gap-6 lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <Reveal direction="left" className="w-full lg:max-w-xl">
            <div>

              <h2 className="font-poppins font-semibold text-[22px] md:text-[26px] lg:text-[28px] text-[#1b5e20] mb-2 leading-[1.15] tracking-wide">
                {blogCtaData.title}
              </h2>
              <p className="font-inter text-[15px] text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {blogCtaData.description}
              </p>
            </div>
          </Reveal>
          <Reveal delay={150} direction="right" className="w-full lg:w-auto lg:flex-shrink-0">
            <div className="flex flex-col items-center lg:items-start gap-2.5">
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {blogCtaData.buttons.map((btn, i) => (
                  <a
                    key={i}
                    href={btn.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-5 py-2.5 rounded-md text-[11px] md:text-[12px] font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 font-poppins text-center ${btn.styleClass}`}
                  >
                    {btn.text}
                  </a>
                ))}
              </div>
              <p className="text-[12px] md:text-[13px] text-gray-600 flex flex-wrap justify-center lg:justify-start items-center gap-5 font-medium font-inter">
                {blogCtaData.info.map((infoItem, i) => {
                  const Icon = infoItem.icon;
                  return (
                    <span key={i} className="flex items-center gap-1.5">
                      <Icon className="w-4 h-4 text-[#3b8c2a]" /> {infoItem.text}
                    </span>
                  );
                })}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BlogCta;