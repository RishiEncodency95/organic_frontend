"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import introImg from "../../assets/home/homeIntro.png";
import leafog from "@/app/assets/icons/leafs.png";
import { websiteApi } from "@/lib/api";

const DEFAULT_INTRO = {
  enabled: true,
  eyebrow: "INTRODUCTION",
  titlePrimary: "WELCOME TO BHARAT ORGANIC EXPO",
  titleSecondary: "2027",
  subtitle:
    "India's Premier Platform for Organic Products, Sustainable Agriculture & Natural Living",
  description:
    "Bharat Organic Expo 2027 is India's leading international exhibition dedicated to organic products, sustainable agriculture, natural wellness, eco-friendly innovations, and green business opportunities. The Expo brings together manufacturers, exhibitors, buyers, importers, exporters, investors, government organizations, industry experts, startups, researchers, and global delegates under one dynamic platform.",
  description2:
    "Designed to foster business growth, knowledge sharing, innovation, and international collaboration, Bharat Organic Expo serves as the perfect destination for discovering new products, building strategic partnerships, expanding global markets, and promoting a sustainable future.",
  buttonLabel: "Explore Exhibition",
  buttonHref: "/about",
  timerTitle: "EVENT BEGINS IN",
  eventDate: "2027-02-19T00:00:00",
  showTimer: true,
  image: "",
  imageAlt: "Bharat Organic Expo 2027 Introduction",
};

const IntroductionSection = () => {
  const [data, setData] = useState(DEFAULT_INTRO);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  // Fetch dynamic content from backend
  useEffect(() => {
    let isMounted = true;
    const fetchIntro = async () => {
      try {
        const res = await websiteApi.getIntroductionSection();
        const serverData = res?.data || res;
        if (serverData && isMounted) {
          setData((prev) => ({
            ...prev,
            enabled: serverData.enabled !== false,
            eyebrow: serverData.eyebrow || prev.eyebrow,
            titlePrimary: serverData.titlePrimary || prev.titlePrimary,
            titleSecondary: serverData.titleSecondary || prev.titleSecondary,
            subtitle: serverData.subtitle || prev.subtitle,
            description: serverData.description || prev.description,
            description2:
              serverData.description2 !== undefined
                ? serverData.description2
                : prev.description2,
            buttonLabel: serverData.buttonLabel || prev.buttonLabel,
            buttonHref: serverData.buttonHref || prev.buttonHref,
            timerTitle: serverData.timerTitle || prev.timerTitle,
            eventDate: serverData.eventDate || prev.eventDate,
            showTimer: serverData.showTimer !== false,
            image: serverData.image || prev.image,
            imageAlt: serverData.imageAlt || prev.imageAlt,
          }));
        }
      } catch (err) {
        console.error("Failed to load introduction section:", err);
      }
    };

    fetchIntro();
    return () => {
      isMounted = false;
    };
  }, []);

  // Dynamic Countdown Timer
  useEffect(() => {
    const rawDate = data.eventDate || "2027-02-19T00:00:00";
    const targetDate = new Date(rawDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (isNaN(distance) || distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [data.eventDate]);

  if (!data.enabled) {
    return null;
  }

  const activeImage = data.image && typeof data.image === "string" && data.image.trim()
    ? data.image
    : introImg;

  return (
    <section className="py-2 md:py-6 overflow-hidden relative font-inter bg-white">
      {/* Decorative Background Elements */}
      <img
        src={leafog.src}
        alt="Leaf Decoration"
        className="absolute -left-16 md:-left-32 top-1/2 -translate-y-1/2 w-32 md:w-64 object-contain pointer-events-none z-0 opacity-30 md:opacity-50"
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3b8c2a]/5 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3b6fd4]/5 rounded-full blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="w-full px-4 sm:px-6 lg:px-14 relative z-10">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 items-center mb-2">
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[60%]"
          >
            {/* Introduction Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#3b8c2a]/10 to-[#F2B40E]/10 border border-[#3b8c2a]/20 shadow-[0_4px_15px_rgba(59,140,42,0.06)] mb-2 transform hover:scale-105 transition-transform duration-300">
              <span className="w-2 h-2 rounded-full bg-[#F2B40E] animate-pulse"></span>
              <span className="text-[11px] md:text-[14px] font-semibold uppercase tracking-[0.2em] md:tracking-[0.25em] text-[#1a6b3a]">
                {data.eyebrow}
              </span>
            </div>

            {/* Title */}
            {(() => {
              const full = data.titlePrimary || "WELCOME TO BHARAT ORGANIC EXPO";
              let prefix = "";
              let highlightMain = full;

              if (full.toUpperCase().startsWith("WELCOME TO ")) {
                prefix = full.slice(0, 11);
                highlightMain = full.slice(11);
              } else {
                const words = full.split(" ");
                if (words.length > 2) {
                  prefix = words.slice(0, 2).join(" ") + " ";
                  highlightMain = words.slice(2).join(" ");
                }
              }

              return (
                <h2 className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold font-poppins text-slate-900 leading-[1.3] md:leading-[1.4] mb-4 tracking-tight">
                  {prefix}
                  <span className="relative inline-block max-w-full">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b8c2a] to-[#1a6b3a] whitespace-normal break-words">
                      {highlightMain}
                    </span>{" "}
                    {data.titleSecondary ? (
                      <span className="text-[#F2B40E] inline-block">
                        {data.titleSecondary}
                      </span>
                    ) : null}
                    <svg
                      className="absolute w-full h-2 md:h-3 -bottom-0.5 md:-bottom-1 left-0 text-[#F2B40E]/40"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 5 Q 50 10 100 5"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                      />
                    </svg>
                  </span>{" "}
                  {data.subtitle ? (
                    <span className="text-[13px] sm:text-[15px] md:text-[18px] font-medium text-black mt-3 block tracking-normal leading-snug">
                      {data.subtitle}
                    </span>
                  ) : null}
                </h2>
              );
            })()}

            {/* Descriptions */}
            <div className="mb-2 lg:mb-4 space-y-3 sm:space-y-4">
              {/* Description Paragraph 1 */}
              {data.description ? (
                <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] text-slate-700 font-medium border-l-4 border-[#F2B40E] pl-3.5 sm:pl-5 bg-gradient-to-r from-[#F2B40E]/5 to-transparent py-3 sm:py-4 rounded-r-xl shadow-sm">
                  {data.description}
                </p>
              ) : null}

              {/* Description Paragraph 2 */}
              {data.description2 ? (
                <p className="text-[13.5px] sm:text-[14px] md:text-[16px] leading-[1.7] text-slate-600">
                  {data.description2}
                </p>
              ) : null}
            </div>

            {/* Action Buttons */}
            {data.buttonLabel ? (
              <div className="flex items-center gap-4 pt-1 lg:pt-4">
                <a
                  href={data.buttonHref || "/about"}
                  className="w-full sm:w-auto text-center px-6 py-2.5 bg-[#3b8c2a] border-2 border-[#F2B40E] hover:bg-[#F2B40E] hover:text-[#0b2912] text-white text-[12px] font-bold uppercase tracking-wider rounded-full shadow-[0_10px_20px_rgba(59,140,42,0.2)] hover:shadow-[0_15px_30px_rgba(59,140,42,0.3)] transition-all duration-300"
                >
                  {data.buttonLabel}
                </a>
              </div>
            ) : null}
          </motion.div>

          {/* RIGHT: Image & Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[40%] flex flex-col items-center gap-4 relative mt-2 lg:mt-0"
          >
            {/* Highly Highlighted White Countdown Timer */}
            {data.showTimer ? (
              <div className="w-full sm:w-fit self-center bg-white rounded-xl p-2 sm:p-2.5 shadow-[0_15px_40px_rgba(59,140,42,0.25)] border-2 border-[#3b8c2a] flex flex-col items-center justify-center transform hover:-translate-y-1 transition-all duration-500 group relative z-20 overflow-hidden">
                {/* Soft decorative glow inside the card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F2B40E] opacity-10 blur-2xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#3b8c2a] opacity-10 blur-2xl rounded-full"></div>

                <div className="text-[#3b8c2a] text-[10px] md:text-[14px] font-semibold tracking-[0.2em] md:tracking-[0.25em] uppercase mb-1.5 flex items-center justify-center gap-1.5 w-full relative z-10 drop-shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F2B40E] animate-pulse"></span>
                  {data.timerTitle || "EVENT BEGINS IN"}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F2B40E] animate-pulse"></span>
                </div>

                <div className="flex justify-center gap-1.5 sm:gap-2.5 w-full relative z-10">
                  {["DAYS", "HOURS", "MINS", "SECS"].map((label, idx) => {
                    const value =
                      idx === 0
                        ? timeLeft.days
                        : idx === 1
                        ? timeLeft.hours
                        : idx === 2
                        ? timeLeft.mins
                        : timeLeft.secs;
                    return (
                      <div
                        key={label}
                        className="flex-1 max-w-[80px] bg-gradient-to-b from-[#f6fbf7] to-white border border-[#3b8c2a]/30 rounded-lg px-1 py-1.5 sm:px-3 sm:py-2 flex flex-col items-center justify-center shadow-inner group-hover:border-[#F2B40E] group-hover:shadow-[0_4px_15px_rgba(242,180,14,0.2)] transition-all duration-300"
                      >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a6b3a] to-[#3b8c2a] text-lg sm:text-2xl font-bold leading-none tracking-tighter drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
                          {value.toString().padStart(2, "0")}
                        </span>
                        <span className="text-[#F2B40E] text-[9px] sm:text-[12px] font-bold uppercase mt-1">
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}

            {/* Image Container */}
            <div className="relative z-10 p-2 md:p-3 rounded-[1.5rem] bg-white/60 backdrop-blur-md border border-white shadow-[0_15px_40px_rgba(0,0,0,0.06)] w-full">
              {activeImage ? (
                typeof activeImage === "string" ? (
                  <img
                    src={activeImage}
                    alt={data.imageAlt || "Bharat Organic Expo"}
                    className="w-full aspect-[16/9] md:aspect-auto h-[200px] sm:h-[260px] md:h-auto object-cover rounded-2xl"
                  />
                ) : (
                  <Image
                    src={activeImage}
                    alt={data.imageAlt || "Bharat Organic Expo"}
                    width={640}
                    height={480}
                    sizes="(max-width: 768px) 100vw, 40vw"
                    quality={75}
                    className="w-full aspect-[16/9] md:aspect-auto h-[200px] sm:h-[260px] md:h-auto object-cover rounded-2xl"
                  />
                )
              ) : (
                <div className="w-full aspect-video md:aspect-[4/3] rounded-2xl bg-slate-100 flex items-center justify-center">
                  <span className="text-slate-400 font-bold">
                    Image Placeholder
                  </span>
                </div>
              )}

              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjM2I4YzJhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjQgNCIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] animate-[spin_20s_linear_infinite] pointer-events-none z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;