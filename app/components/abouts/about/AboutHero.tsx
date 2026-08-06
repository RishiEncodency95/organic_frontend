"use client";

import React from "react";
import aboutBanner from "../../../assets/about/about.png";
import { Sprout, Users, Globe2, Heart } from "lucide-react";

const features = [
  { icon: Sprout, label: "Sustainable\nFuture" },
  { icon: Users, label: "Stronger\nCommunity" },
  { icon: Globe2, label: "Ethical\nPractices" },
  { icon: Heart, label: "Healthy\nLiving" },
];

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-[350px] md:min-h-[610px] flex items-center overflow-hidden bg-[#f4f7f4]">
      {/* Background Image */}
      <img
        src={aboutBanner.src}
        alt="About Us Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content Overlay */}
      <div className="relative z-10 w-full  px-4 sm:px-6 lg:px-11 h-full flex flex-col justify-center">
        <div className="w-full lg:w-1/2 flex flex-col items-start">

          <span className="text-[#3b8c2a] text-[13px] md:text-[15px] font-extrabold tracking-widest uppercase mb-4 md:mb-6">
            ABOUT US
          </span>

          <h1 className="text-[30px] md:text-[40px] lg:text-[30px] xl:text-[30px] font-extrabold leading-[1.1] mb-6 text-[#111827]">
            Rooted in Nature.<br />
            Committed to a<br />
            <span className="text-[#3b8c2a]">Better Tomorrow.</span>
          </h1>

          <div className="w-12 h-[2px] bg-[#3b8c2a] mb-6 rounded-full opacity-50" />

          <p className="text-[13px] md:text-[15px] text-[#475569] max-w-md lg:max-w-lg leading-relaxed mb-10 font-medium">
            Bharat Organic Expo is India's leading platform that brings together organic brands, farmers, innovators, experts and conscious consumers to promote sustainable living, healthy choices and a greener future.
          </p>


        </div>
      </div>
    </section>
  );
};

export default AboutHero;
