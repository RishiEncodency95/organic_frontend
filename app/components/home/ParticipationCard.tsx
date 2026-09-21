"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import SectionContainer from "../layout/SectionContainer";

const ParticipationCard = () => {
  return (
    <section className="bg-white py-8 md:py-12 overflow-hidden font-inter">
      <SectionContainer>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-[#f8fdf8] to-[#eef6ee] rounded-3xl border border-[#d4e8d4] overflow-hidden"
        >
          {/* Decorative leaf - right side */}
          <div className="absolute right-0 top-0 h-full w-[200px] md:w-[280px] opacity-60 pointer-events-none">
            <Image
              src="/assets/participation-leaf-real.png"
              alt=""
              fill
              className="object-contain object-right"
              sizes="280px"
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 md:gap-10 p-6 md:p-10 lg:p-12">
            {/* LEFT - Card Preview */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-[380px] shrink-0"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white">
                <Image
                  src="/assets/participation-card-template.png"
                  alt="Participation Card Preview"
                  width={380}
                  height={240}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </motion.div>

            {/* CENTER - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex-1 text-center lg:text-left"
            >
              <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-[#0d3d1c] leading-tight mb-3">
                Get Your Participation Card
              </h2>

              <p className="font-inter text-sm md:text-base text-[#4a5568] leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
                Download your personalised participation card and share it with your network.
              </p>

              <Link
                href="/download/participation-card"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a5c2a] hover:bg-[#144a22] text-white rounded-xl font-poppins font-semibold text-sm tracking-wide transition-all hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                <Download className="w-4 h-4" />
                <span>Download Card</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
};

export default ParticipationCard;
