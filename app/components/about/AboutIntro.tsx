"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Star, Globe, Leaf, Users, Sprout, Award } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  {
    icon: Star,
    title: "India's Premier",
    text: "Organic Platform",
  },
  {
    icon: Globe,
    title: "Global Reach",
    text: "Buyers & Sellers",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    text: "Future Together",
  },
  {
    icon: Users,
    title: "Networking",
    text: "Industry Leaders",
  },
  {
    icon: Sprout,
    title: "100% Organic",
    text: "Certified Products",
  },
  {
    icon: Award,
    title: "Quality Assured",
    text: "Trusted Brands",
  }
];

const AboutIntro = () => {
  return (
    <section className="relative w-full bg-[#fdfefd] py-2 lg:py-4 px-2 lg:px-11 overflow-hidden font-inter border-y border-[#3b8c2a]/10">

      {/* Super Subtle Background Leaf Vector */}
      <Leaf className="absolute -top-20 -right-20 w-[600px] h-[600px] text-[#3b8c2a] opacity-[0.02] transform rotate-[-45deg] pointer-events-none" />

      <div className="w-full  relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">

          {/* Left Side: Content */}
          <div className="w-full lg:w-[50%] flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#3b8c2a]/10 mb-2"
            >
              <span className="text-[#3b8c2a] text-sm">🌿</span>
              <span className="text-[#154726] text-[12px] font-bold tracking-[0.2em] uppercase">
                Who We Are
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#0d2a1b] text-[12px] md:text-[26px] lg:text-[26px] font-black leading-[1.1] mb-2 tracking-tight"
            >
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b8c2a] to-[#154726]">
                Bharat Organic Expo
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#4b5563] text-[13px] md:text-[14px] leading-relaxed mb-3 font-medium text-justify"
            >
              Bharat Organic Expo is India's leading and most comprehensive platform dedicated entirely to organic agriculture, sustainable living, natural healthcare, and Ayurveda. We bring together a diverse community of eco-friendly innovators, traditional farmers, and modern enterprises to foster responsible networking and showcase the incredible potential of organic products on a global stage. Our mission is to promote wellness through nature while ensuring economic growth for grassroot producers.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[#64748b] text-[13px] md:text-[14px] leading-relaxed mb-5 text-justify"
            >
              Every year, thousands of passionate visitors, wholesale buyers, manufacturers, visionary investors, international exporters, and key policymakers converge at our event. Together, they participate in groundbreaking discussions, discover new market trends, and form lasting partnerships to actively build a cleaner, greener, and more sustainable future for India and the world.
            </motion.p>

            {/* Badges Layout - Structured neatly under text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 w-full mb-4"
            >
              {badges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div key={index} className="flex items-start gap-2 px-3 py-1.5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:border-[#3b8c2a]/30 transition-colors">
                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#f4fbf5] flex items-center justify-center text-[#3b8c2a]">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <div className="flex flex-col pt-0.5">
                      <span className="text-[#154726] font-bold text-[13px] leading-tight mb-0.5">{badge.title}</span>
                      <span className="text-[#64748b] text-[12px]">{badge.text}</span>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="w-full flex justify-center mt-1"
            >
              <Link 
                href="#our-story"
                className="bg-[#3b8c2a] hover:bg-[#2c6e1f] text-white px-6 py-2.5 rounded-lg font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                OUR JOURNEY <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Premium Bento Box Grid */}
          <div className="w-full lg:w-[42%] h-[300px] md:h-[380px] lg:h-[450px]">
            <div className="grid grid-cols-2 gap-3 h-full">

              {/* Tall Left Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="row-span-2 rounded-[24px] overflow-hidden shadow-md group relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&w=2000&auto=format&fit=crop"
                  alt="Organic Expo Main Event"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#154726]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Top Right Square Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-[24px] overflow-hidden shadow-md group relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop"
                  alt="Organic Products Display"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#3b8c2a]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              </motion.div>

              {/* Bottom Right Square Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-[24px] overflow-hidden shadow-md group relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1600&auto=format&fit=crop"
                  alt="People Networking at Expo"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#154726]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
