"use client";
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import gallarybg from '@/app/assets/banner/gallog2.png';
import { Leaf } from 'lucide-react';
import SectionContainer from '@/app/components/layout/SectionContainer';

const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50, 
    scale: 0.92, 
    filter: 'blur(12px)', 
    rotateX: -15 
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    rotateX: 0,
    transition: { 
      duration: 1.4, 
      ease: customEase,
    },
  },
};

const titleContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const charVariants: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: -50, filter: 'blur(10px)', scale: 0.9 },
  visible: {
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    filter: 'blur(0px)',
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: customEase,
    }
  }
};

const Hero = () => {
  const [settings] = useState({
    heading: 'GLIMPSES',
    subheading: 'Moments of Knowledge, Collaboration & Wellness',
    description: 'Relive the inspiring moments from past editions of Organic Expo \nwhere experts, researchers and industry leaders came together \nto shape the future of organic trade and sustainable living.',
  });

  const titleChars = (settings.heading || "GLIMPSES").split("");
  const bgUrl = typeof gallarybg === 'string' ? gallarybg : gallarybg.src;

  return (
    <section className="relative w-full py-8 md:py-12 lg:py-16 bg-[#f8faf8] overflow-hidden font-inter" style={{ perspective: 1200 }}>
      {/* Background Image Setup */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          transformOrigin: 'center'
        }}
        initial={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.8, ease: customEase }}
      />

      <SectionContainer className="relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center flex flex-col items-center relative -left-8 md:-left-20 lg:-left-32 xl:-left-40"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{ perspective: 1200 }}
        >
          {/* Animated Title Character by Character */}
          <motion.h1
            variants={titleContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1b5e20] mb-2 tracking-tight uppercase flex justify-center"
            style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.7)' }}
          >
            {titleChars.map((char, index) => (
              <motion.span key={index} variants={charVariants} style={{ display: 'inline-block' }}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-[22px] md:text-[28px] text-[#4B1426] font-medium mb-1 italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {settings.subheading}
          </motion.h2>

          {/* Decorative Divider */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 mb-2 w-full max-w-[240px]"
          >
            <motion.div 
              className="h-[1px] bg-[#1b5e20]/80 flex-1 relative"
              initial={{ scaleX: 0, transformOrigin: 'right' }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.8, ease: customEase }}
            >
              <div className="absolute right-1 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#1b5e20]" />
            </motion.div>
            
            <motion.div
              initial={{ scale: 0, rotate: -180, filter: 'blur(4px)' }}
              whileInView={{ scale: 1, rotate: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6 }}
            >
              <Leaf size={18} className="text-[#1b5e20]" fill="currentColor" />
            </motion.div>

            <motion.div 
              className="h-[1px] bg-[#1b5e20]/80 flex-1 relative"
              initial={{ scaleX: 0, transformOrigin: 'left' }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.8, ease: customEase }}
            >
              <div className="absolute left-1 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-[#1b5e20]" />
            </motion.div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-900 text-sm md:text-base max-w-3xl font-medium leading-relaxed whitespace-pre-line font-inter"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {settings.description}
          </motion.p>
        </motion.div>
      </SectionContainer>
    </section>
  );
};

export default Hero;
