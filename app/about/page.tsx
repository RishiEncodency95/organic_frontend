"use client"
import React, { useRef, useEffect, useState } from "react";
import SectionContainer from "@/app/components/layout/SectionContainer";
import { ArrowRight, Calendar, MapPin, Globe, HeartPulse, Sprout, User, MonitorDot, Plane, Leaf, GraduationCap, Trophy, Handshake, CheckCircle2, Users, Landmark, TrendingUp, Award } from "lucide-react";
import StatsCounter from "@/app/components/about/StatsCounter";
import ExhibitorLogos from "@/app/components/about/ExhibitorLogos";
import FAQSection from "@/app/components/about/FAQSection";
import GlobalPlatform from "@/app/components/about/GlobalPlatform";
import MissionVision from "@/app/components/about/MissionVision";
import WhyAttend from "@/app/components/home/WhyAttend";
import WhoShouldAttend from "@/app/components/about/WhoShouldAttend";
import OrganizedBy from "@/app/components/home/OrganizedBy";
import { heroBackgroundApi, eventOverviewApi, SERVER_URL, visionMissionApi, aboutOrganizerApi, ourJourneyApi } from "@/app/lib/api";

import * as LucideIcons from "lucide-react";
import PragatiMaidanImg from "@/app/assets/Pragati-Maidan.jpg";
import InternationalImg from "@/assets/international.png";
import ConferenceImg from "@/assets/conference.png";
import B2BImg from "@/assets/b2b.png";
import AwardImg from "@/assets/global.png";
import G1 from "@/assets/G1.png";
import G2 from "@/assets/G2.png";
import G3 from "@/assets/G3.png";
import G4 from "@/assets/G4.png";
import AOS from "aos";
import "aos/dist/aos.css";

import EventOverview from "@/app/components/about/EventOverview";
import Hero from "@/app/components/about/Hero";

import { VenueStats } from "@/app/components/about/AboutStats";
import Link from "next/link";

const About = () => {
  const [eventOverviewData, setEventOverviewData] = useState<any>(null);
  const [visionMission, setVisionMission] = useState<any>(null);
  const [organizerData, setOrganizerData] = useState<any>(null);
  const [journeyData, setJourneyData] = useState<any>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const wrap = canvas.parentElement!;

    const resize = () => {
      canvas.width = wrap.offsetWidth;
      canvas.height = wrap.offsetHeight;
    };
    resize();

    const dots = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.5,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      a: Math.random() * 0.7 + 0.3,
    }));

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226,147,42,${d.a})`;
        ctx.fill();
      });

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(226,147,42,${0.25 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const fetchEventOverview = async () => {
      try {
        const data = await eventOverviewApi.get();
        if (data) {
          setEventOverviewData(data);
        }
        const vmData = await visionMissionApi.get();
        if (vmData) setVisionMission(vmData);

        const orgData = await aboutOrganizerApi.get();
        if (orgData) setOrganizerData(orgData);

        const jData = await ourJourneyApi.get();
        if (jData) setJourneyData(jData);

        setTimeout(() => AOS.refresh(), 500);
      } catch (error) {
        console.error("Error fetching event overview:", error);
      }
    };

    fetchEventOverview();
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="bg-white font-inter overflow-x-hidden">
      {/* HERO SECTION */}
      <Hero/>

      {/* STATS COUNTER BAR - OVERLAPPING */}
      <div className="relative z-20">
        <StatsCounter variant="hero" />
      </div>

      {/* DYNAMIC GLOBAL PLATFORM SECTION */}
      <GlobalPlatform />

      {/* EVENT OVERVIEW + KEY SECTORS */}
      <EventOverview />


  {/* ABOUT THE ORGANIZER */}
<section className="relative overflow-hidden border-t border-[#DCE5D2] bg-[#F5F3E8] pt-10 pb-8">

  {/* Organic Background Glow */}
  <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#3b8c2a]/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#D6A84F]/10 blur-3xl" />

  <SectionContainer>

    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">

      {/* LEFT - About Bharat Organic Expo */}
      <div className="relative z-10">

        {/* Eyebrow */}
        <p
          className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#B58A3A]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="inline-block h-[1.5px] w-7 bg-[#D6A84F]" />

          About Bharat Organic Expo
        </p>

        {/* Title */}
        <h2
          className="mb-4 text-2xl font-black leading-[1.25] text-[#3b8c2a] md:text-3xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Where India's Organic Future Meets the World
        </h2>

        {/* Description */}
        <div
          className="mb-5 space-y-3 text-justify text-[13px] leading-[1.75] text-[#53675A]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >

          <p>
            Bharat Organic Expo is a premier platform bringing India's
            organic, natural, and sustainable product ecosystem together
            under one powerful global marketplace.
          </p>

          <p>
            The expo connects farmers, organic producers, brands,
            manufacturers, buyers, retailers, distributors, exporters,
            investors, and industry leaders to discover new opportunities,
            build partnerships, and grow meaningful business relationships.
          </p>

          <p>
            From organic food and beverages to natural wellness, Ayurveda,
            sustainable agriculture, and eco-friendly products, Bharat
            Organic Expo showcases India's innovation while opening doors
            to emerging domestic and international markets.
          </p>

        </div>

        {/* Core Focus */}
        <p
          className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3b8c2a]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Expo Focus Areas
        </p>

        <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">

          {[
            "Organic food & beverages",
            "Sustainable agriculture",
            "Natural health & wellness",
            "Ayurveda & herbal products",
            "Eco-friendly lifestyle products",
            "Global B2B trade & networking",
          ].map((item, i) => (

            <div
              key={i}
              className="flex items-start gap-2.5"
            >

              <div className="mt-[2px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-[#3b8c2a]/30 bg-[#EAF1E2]">

                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  className="h-[9px] w-[9px]"
                >
                  <path
                    d="M2 6l3 3 5-5"
                    stroke="#3b8c2a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </div>

              <span
                className="text-[12px] font-medium leading-[1.5] text-[#405448]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* RIGHT - Organic Expo Visual */}
      <div className="flex items-center justify-center lg:pl-6">

        <div className="relative h-[380px] w-full max-w-md">

          {/* Decorative Dot Pattern - Top Right */}
          {/* <div
            className="pointer-events-none absolute -right-5 -top-5 z-0 h-24 w-24"
            style={{
              backgroundImage:
                "radial-gradient(circle, #D6A84F 1.2px, transparent 1.2px)",
              backgroundSize: "9px 9px",
              opacity: 0.35,
            }}
          /> */}

          {/* Decorative Dot Pattern - Bottom Left */}
          {/* <div
            className="pointer-events-none absolute -bottom-5 -left-5 z-0 h-24 w-24"
            style={{
              backgroundImage:
                "radial-gradient(circle, #3b8c2a 1.2px, transparent 1.2px)",
              backgroundSize: "9px 9px",
              opacity: 0.25,
            }}
          /> */}

          {/* Image Frame */}
          <div className="group relative z-10 h-full w-full overflow-hidden rounded-2xl">

            <div className="relative h-full w-full overflow-hidden rounded-xl">

              <img
                loading="lazy"
                decoding="async"
                src="https://api.ihwe.in/uploads/about/organizer-1778836542941.webp"
                alt="Organic products and sustainable food ecosystem"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3b8c2a]/80 via-transparent to-transparent" />

              {/* Bottom Image Text */}
              <div className="absolute bottom-5 left-5 right-5">

                <p
                  className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D6A84F]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  India's Organic Ecosystem
                </p>

                <p
                  className="text-xl font-black text-white"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Connecting Nature, Business & Opportunity
                </p>

              </div>

            </div>

            {/* Organic Accent Bars */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#3b8c2a] via-[#D6A84F] to-[#3b8c2a]" />

          </div>

          {/* Edition Badge */}
          <div className="absolute -bottom-4 -right-4 z-20 flex h-[88px] w-[88px] flex-col items-center justify-center rounded-full border-4 border-[#F5F3E8] bg-gradient-to-br from-[#3b8c2a] to-[#2c6e1f] text-center shadow-[0_10px_25px_rgba(23,61,43,0.3)]">

            <span
              className="text-2xl font-black leading-none text-[#D6A84F]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              9th
            </span>

            <span
              className="mt-1 text-[8px] font-bold uppercase tracking-[0.12em] text-white"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Edition
            </span>

          </div>

        </div>

      </div>

    </div>

  </SectionContainer>

</section>

      {/* OUR JOURNEY & FLAGSHIP EVENTS */}
  <section className="relative overflow-hidden bg-[#F5F3E8] pt-2 pb-8 border-t border-[#DCE5D2]">

  {/* Background Decorative Elements */}
  <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#3b8c2a]/10 blur-3xl" />

  <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#D6A84F]/10 blur-3xl" />

  <SectionContainer>

    {/* Header */}
    <div className="relative z-10 mb-5">

      <p
        className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3b8c2a]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <span className="inline-block h-[1.5px] w-6 bg-[#3b8c2a]" />

        Our Journey & Organic Legacy
      </p>

      <h2
        className="mb-1 text-2xl font-black leading-[1.3] text-[#3b8c2a]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Growing India's Organic Future
      </h2>

      <p
        className="mt-1 text-[13px] leading-[1.7] text-[#405448]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        From supporting India's organic ecosystem to creating powerful
        platforms for business and collaboration, Bharat Organic Expo
        continues to connect brands, producers, farmers, buyers, and
        innovators shaping a healthier and more sustainable future.
      </p>

    </div>


    {/* 3 Column Cards */}
    <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-3">


      {/* CARD 1 - JOURNEY */}
      <div className="group relative overflow-hidden rounded-2xl border border-[#D8E2D0] bg-gradient-to-br from-white via-[#F8FAF2] to-[#EEF4E8] p-5 shadow-[0_10px_30px_rgba(35,75,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#3b8c2a] hover:shadow-[0_16px_38px_rgba(35,75,42,0.13)]">

        {/* Top Accent */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#3b8c2a] via-[#D6A84F] to-[#3b8c2a]" />

        {/* Organic Glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#3b8c2a]/10 blur-2xl transition-all duration-300 group-hover:bg-[#3b8c2a]/20" />

        <div className="relative z-10">

          {/* Card Header */}
          <div className="mb-4 flex items-center gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#D6A84F]/30 bg-gradient-to-br from-[#3b8c2a] to-[#2c6e1f] shadow-[0_5px_12px_rgba(23,61,43,0.18)]">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>

            </div>

            <p
              className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#3b8c2a]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our Journey: Growing the Organic Movement
            </p>

          </div>


          {/* Timeline */}
          <div className="flex flex-col gap-4 border-l-2 border-[#3b8c2a]/40 pl-3">

            {/* 2016 */}
            <div className="flex gap-3">

              <span
                className="mt-[2px] w-12 shrink-0 text-[11px] font-black text-[#B58A3A]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                2016
              </span>

              <p
                className="text-[12px] leading-[1.6] text-[#53675A]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                The journey began with a vision to promote organic
                agriculture, sustainable farming, and healthier choices
                for communities and consumers.
              </p>

            </div>


            {/* 2016-25 */}
            <div className="flex gap-3">

              <span
                className="mt-[2px] w-12 shrink-0 text-[11px] font-black text-[#B58A3A]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                2016–25
              </span>

              <p
                className="text-[12px] leading-[1.6] text-[#53675A]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Built meaningful connections between farmers, organic
                producers, brands, buyers, retailers, and industry
                stakeholders through impactful exhibitions and
                business platforms.
              </p>

            </div>


            {/* 2026 */}
            <div className="flex gap-3">

              <span
                className="mt-[2px] w-12 shrink-0 text-[11px] font-black text-[#B58A3A]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                2026
              </span>

              <p
                className="text-[12px] leading-[1.6] text-[#53675A]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Bharat Organic Expo enters its 9th Edition, bringing
                India's organic ecosystem closer to global markets,
                buyers, and new business opportunities.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* CARD 2 - CORE SECTORS */}
      <div className="group relative overflow-hidden rounded-2xl border border-[#D8E2D0] bg-gradient-to-br from-white via-[#F8FAF2] to-[#EEF4E8] p-5 shadow-[0_10px_30px_rgba(35,75,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#3b8c2a] hover:shadow-[0_16px_38px_rgba(35,75,42,0.13)]">

        {/* Top Accent */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#3b8c2a] via-[#D6A84F] to-[#3b8c2a]" />

        {/* Organic Glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#3b8c2a]/10 blur-2xl transition-all duration-300 group-hover:bg-[#3b8c2a]/20" />

        <div className="relative z-10">

          {/* Card Header */}
          <div className="mb-4 flex items-center gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#D6A84F]/30 bg-gradient-to-br from-[#3b8c2a] to-[#2c6e1f] shadow-[0_5px_12px_rgba(23,61,43,0.18)]">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>

            </div>

            <p
              className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#3b8c2a]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Driving Growth Across the Organic Ecosystem
            </p>

          </div>


          {/* Sectors */}
          <div className="flex flex-col gap-3">

            <div className="flex gap-2">

              <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6A84F] shadow-[0_0_0_3px_rgba(214,168,79,0.12)]" />

              <p
                className="text-[12px] leading-[1.55] text-[#53675A]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="font-semibold text-[#3b8c2a]">
                  Organic Agriculture:
                </span>{" "}
                Supporting natural farming practices, soil health,
                sustainable production, and farmer-led innovation.
              </p>

            </div>


            <div className="flex gap-2">

              <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6A84F] shadow-[0_0_0_3px_rgba(214,168,79,0.12)]" />

              <p
                className="text-[12px] leading-[1.55] text-[#53675A]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="font-semibold text-[#3b8c2a]">
                  Organic Products:
                </span>{" "}
                Connecting consumers and businesses with trusted
                organic food, beverages, natural products, and
                sustainable brands.
              </p>

            </div>


            <div className="flex gap-2">

              <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6A84F] shadow-[0_0_0_3px_rgba(214,168,79,0.12)]" />

              <p
                className="text-[12px] leading-[1.55] text-[#53675A]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="font-semibold text-[#3b8c2a]">
                  Natural Wellness:
                </span>{" "}
                Bringing together Ayurveda, herbal products,
                natural health, wellness, and conscious living
                solutions.
              </p>

            </div>


            <div className="flex gap-2">

              <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6A84F] shadow-[0_0_0_3px_rgba(214,168,79,0.12)]" />

              <p
                className="text-[12px] leading-[1.55] text-[#53675A]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="font-semibold text-[#3b8c2a]">
                  Global Trade:
                </span>{" "}
                Creating new opportunities for Indian organic brands
                to connect with buyers, distributors, and international
                markets.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* CARD 3 - ORGANIC PLATFORM */}
      <div className="group relative overflow-hidden rounded-2xl border border-[#D8E2D0] bg-gradient-to-br from-white via-[#F8FAF2] to-[#EEF4E8] p-5 shadow-[0_10px_30px_rgba(35,75,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#3b8c2a] hover:shadow-[0_16px_38px_rgba(35,75,42,0.13)]">

        {/* Top Accent */}
        <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#3b8c2a] via-[#D6A84F] to-[#3b8c2a]" />

        {/* Organic Glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#3b8c2a]/10 blur-2xl transition-all duration-300 group-hover:bg-[#3b8c2a]/20" />

        <div className="relative z-10">

          {/* Card Header */}
          <div className="mb-4 flex items-center gap-3">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#D6A84F]/30 bg-gradient-to-br from-[#3b8c2a] to-[#2c6e1f] shadow-[0_5px_12px_rgba(23,61,43,0.18)]">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>

            </div>

            <p
              className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#3b8c2a]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              A Platform Built for Organic Growth
            </p>

          </div>


          {/* Description */}
          <p
            className="mb-3 text-[11px] leading-[1.5] text-[#68776D]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Bharat Organic Expo brings together a diverse ecosystem
            focused on organic agriculture, sustainable living, natural
            wellness, and responsible business growth.
          </p>


          {/* Events */}
          <div className="flex flex-col gap-2">

            {[
              "Bharat Organic Expo",
              "Organic Food & Beverage Showcase",
              "Organic Farming & Agriculture Forum",
              "Natural Health & Wellness Showcase",
              "Sustainable Living & Eco Products",
              "Organic Business & Trade Connect",
              "Farmer–Buyer Networking Platform",
              "Global Organic Market Connect",
            ].map((event, i) => (

              <div
                key={i}
                className="flex items-center gap-2"
              >

                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D6A84F] shadow-[0_0_0_3px_rgba(214,168,79,0.12)]" />

                <span
                  className="text-[12px] text-[#53675A]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {event}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  </SectionContainer>

</section>

      {/* DYNAMIC MISSION & VISION SECTION */}
      <MissionVision />

      {/* ONE PLATFORM. FOUR POWERFUL PILLARS. */}
   <section className="relative overflow-hidden border-t border-[#D8CFAE] bg-[#F3EFE2] py-8">

  {/* Subtle Organic Background Details */}
  <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#3b8c2a]/10 blur-3xl" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#D6A84F]/10 blur-3xl" />

  <div className="relative mx-auto max-w-[1400px] px-6">

    {/* Heading */}
    <div className="mb-6 text-center">

      <p
        className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#9A7430]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        The Bharat Organic Expo Experience
      </p>

      <h2
        className="text-[18px] font-black uppercase tracking-[0.18em] text-[#3b8c2a]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        ONE EXPO. FOUR POWERFUL EXPERIENCES.
      </h2>

    </div>

    {/* Pillars */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

    {[
  {
    title: ["ORGANIC", "EXHIBITION"],
    themeColor: "#3b8c2a",
    desc: "Explore a curated showcase of organic food, beverages, natural wellness, Ayurveda, herbal products, sustainable agriculture, and eco-friendly innovations from India's leading producers and emerging brands.",
    icon: <Globe className="h-5 w-5 text-white" />,
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1000&q=85",
  },
  {
    title: ["KNOWLEDGE &", "INNOVATION"],
    themeColor: "#3b8c2a",
    desc: "Gain insights from industry leaders, farmers, entrepreneurs, policymakers, and sustainability experts through meaningful conversations focused on organic growth, responsible production, and the future of sustainable living.",
    icon: <GraduationCap className="h-5 w-5 text-white" />,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&q=85",
  },
  {
    title: ["ORGANIC", "EXCELLENCE"],
    themeColor: "#C3943E",
    desc: "Celebrate the people, brands, and innovations shaping India's organic movement. Recognise outstanding contributions across agriculture, wellness, sustainability, and natural products.",
    icon: <Trophy className="h-5 w-5 text-white" />,
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1000&q=85",
  },
  {
    title: ["B2B BUSINESS", "CONNECT"],
    themeColor: "#3b8c2a",
    desc: "Build meaningful business relationships through focused buyer-seller meetings, curated networking opportunities, and connections between producers, retailers, distributors, exporters, investors, and global buyers.",
    icon: <Handshake className="h-5 w-5 text-white" />,
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1000&q=85",
  },
].map((pillar, i) => (

        <div
          key={i}
          className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-xl border border-[#3b8c2a]/30 bg-[#173D2B] shadow-[0_12px_30px_rgba(23,61,43,0.15)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(23,61,43,0.25)]"
        >

          {/* Image */}
          <div className="relative h-[155px] overflow-hidden">

            <img
              loading="lazy"
              decoding="async"
              src={pillar.img}
              alt={pillar.title.join(" ")}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#173D2B]/90 via-[#173D2B]/20 to-transparent" />

            {/* Icon */}
            <div
              className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#F3EFE2] shadow-lg"
              style={{ backgroundColor: pillar.themeColor }}
            >
              {pillar.icon}
            </div>

            {/* Number */}
            <span className="absolute right-4 top-4 text-[11px] font-bold tracking-[0.2em] text-white/70">
              0{i + 1}
            </span>

          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col px-5 pb-5 pt-5">

            <h3
              className="mb-3 flex flex-col text-[13px] font-black uppercase leading-[1.3] tracking-[0.08em]"
              style={{
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span style={{ color: pillar.themeColor }}>
                {pillar.title[0]}
              </span>

              <span className="text-[#F3EFE2]">
                {pillar.title[1]}
              </span>
            </h3>

            <p
              className="text-justify text-[11px] font-medium leading-[1.7] text-[#C8D6BE]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {pillar.desc}
            </p>

          </div>

          {/* Bottom Accent */}
          <div
            className="h-[3px] w-full"
            style={{ backgroundColor: pillar.themeColor }}
          />

        </div>

      ))}

    </div>

  </div>

</section>

      {/* OUR VENUE - Why Pragati Maidan */}
     <section className="relative overflow-hidden border-t border-[#D8CFAE] bg-[#F3EFE2] py-8">

  {/* Organic Background Details */}
  <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#3b8c2a]/10 blur-3xl" />
  <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#D6A84F]/10 blur-3xl" />

  <SectionContainer>

    <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_1fr]">

      {/* LEFT - EXPO VENUE IMAGE */}
      <div className="group relative">

        {/* Decorative Frame */}
        <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b border-l border-[#D6A84F]/60" />
        <div className="absolute -right-4 -top-4 h-24 w-24 border-r border-t border-[#3b8c2a]/50" />

        <div className="relative overflow-hidden border border-[#C8D6BE] bg-[#EAF1E2] p-2 shadow-[0_18px_40px_rgba(23,61,43,0.14)]">

          <div className="relative h-[250px] overflow-hidden md:h-[350px]">

            <img
              loading="lazy"
              decoding="async"
              src={PragatiMaidanImg.src}
              alt="Bharat Organic Expo venue at Bharat Mandapam, New Delhi"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Organic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#3b8c2a]/80 via-[#3b8c2a]/10 to-transparent" />

            {/* Venue Tag */}
            <span
              className="absolute right-4 top-4 border border-[#D6A84F]/60 bg-[#3b8c2a]/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-[#D6A84F]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              India's Organic Marketplace
            </span>

            {/* Location */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 border border-white/20 bg-[#F3EFE2]/95 px-3 py-2">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3b8c2a"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>

              <p
                className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#3b8c2a]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Pragati Maidan, New Delhi
              </p>

            </div>

          </div>

          {/* Bottom Accent */}
          <div className="h-1 w-full bg-gradient-to-r from-[#3b8c2a] via-[#D6A84F] to-[#3b8c2a]" />

        </div>

      </div>


      {/* RIGHT - CONTENT */}
      <div>

        {/* Eyebrow */}
        <p
          className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#9A7430] md:text-[12px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="inline-block h-[1.5px] w-7 bg-[#D6A84F]" />
          The Expo Destination
        </p>

        {/* Heading */}
        <h2
          className="mb-3 text-[25px] font-black leading-[1.25] text-[#3b8c2a] md:text-[34px]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Where India's Organic Ecosystem Comes Together
        </h2>

        <p
          className="max-w-xl text-[13px] leading-[1.75] text-[#53675A]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Set in the heart of New Delhi, Bharat Organic Expo creates a
          powerful meeting ground for India's organic producers, sustainable
          brands, buyers, investors, and global business communities.
        </p>


        {/* Highlights */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">

          {[
            {
              color: "#3b8c2a",
              bg: "#EAF1E2",
              text: "A premium platform for organic brands, producers, farmers, and sustainable businesses",
              icon: (
                  <Sprout />
              ),
            },
            {
              color: "#B58A3A",
              bg: "#F4EBD5",
              text: "Connect with buyers, retailers, distributors, exporters, and global market partners",
              icon: (
                  <Globe />
              ),
            },
            {
              color: "#3b8c2a",
              bg: "#EAF1E2",
              text: "Discover innovations across organic food, wellness, Ayurveda, agriculture, and lifestyle",
              icon: (
                  <Leaf />
              ),
            },
            {
              color: "#B58A3A",
              bg: "#F4EBD5",
              text: "A focused environment designed for meaningful networking and business growth",
              icon: (
                  <Handshake />
              ),
            },
            {
              color: "#3b8c2a",
              bg: "#EAF1E2",
              text: "Bring India's sustainable innovations closer to domestic and international markets",
              icon: (
                  <TrendingUp />
              ),
            },
            {
              color: "#B58A3A",
              bg: "#F4EBD5",
              text: "A destination where organic ideas, products, people, and opportunities connect",
              icon: (
                  <LucideIcons.Sparkles />
              ),
            },
          ].map((item, i) => (

            <div
              key={i}
              className="flex items-center gap-3"
            >

              {/* Icon */}
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                style={{
                  backgroundColor: item.bg,
                  border: `1.5px solid ${item.color}`,
                }}
              >
                <div style={{ color: item.color }}>
                  {React.cloneElement(item.icon, {
                    className: "h-[17px] w-[17px]",
                    strokeWidth: 1.7,
                  })}
                </div>
              </div>

              {/* Text */}
              <p
                className="text-[12px] font-medium leading-[1.55] text-[#405448]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  </SectionContainer>

</section>

      <style>{`
        @keyframes goldShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0%   { left: -75%; }
          100% { left: 150%; }
        }
        @keyframes sparkleAnim {
          0%   { opacity: 0; transform: scale(0.5) translateY(0); }
          40%  { opacity: 1; transform: scale(1.2) translateY(-4px); }
          80%  { opacity: 0.6; transform: scale(0.9) translateY(-6px); }
          100% { opacity: 0; transform: scale(0.5) translateY(-8px); }
        }
        .golden-btn-footer {
          background: linear-gradient(135deg, #f5c842 0%, #ffdd00 30%, #ffa500 60%, #f5c842 100%);
          background-size: 200% 200%;
          animation: goldShift 2.5s ease infinite;
          box-shadow: 0 0 16px 4px rgba(255,200,0,0.3), 0 4px 15px rgba(255,165,0,0.25);
          position: relative;
          overflow: hidden;
        }
        .golden-btn-footer::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          animation: shimmer 2s infinite;
        }
      `}</style>

            <FAQSection />

<section className="relative overflow-hidden border-t border-[#D8BFA5] bg-[#E8D5C1] py-6">

  {/* Soft Decorative Shapes */}
  <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-[#B85C38]/10 blur-3xl" />

  <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#8C3F2B]/10 blur-3xl" />

  <canvas
    ref={canvasRef}
    className="pointer-events-none absolute inset-0 opacity-20"
  />

  <SectionContainer className="relative z-10">

    <div className="flex flex-col items-center justify-between gap-6 xl:flex-row">

      {/* Text */}
      <div
        className="max-w-2xl text-center xl:text-left"
        data-aos="fade-right"
      >

        <div className="mb-2 flex items-center justify-center gap-2.5 xl:justify-start">

          <div className="h-px w-7 bg-[#B85C38]" />

          <span
            className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8C3F2B]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Be Part Of The Movement
          </span>

        </div>

        <h3
          className="mb-2 px-4 text-xl font-bold leading-tight text-[#34231D] md:text-2xl xl:px-0"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Bring Your Organic Brand to the Right Audience
        </h3>

        <p
          className="mx-auto max-w-xl px-4 text-[13px] leading-[1.55] text-[#624D43] xl:mx-0 xl:px-0"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Meet buyers, discover new opportunities, and become part of India's
          rapidly growing organic and sustainable products ecosystem.
        </p>

      </div>


      {/* Actions */}
      <div
        className="grid w-full grid-cols-2 gap-2.5 px-4 md:grid-cols-4 xl:flex xl:w-auto xl:px-0"
        data-aos="fade-left"
      >

        {[
          {
            label: "BOOK YOUR STALL",
            link: "/book-a-stand",
            primary: true,
          },
          {
            label: "VISITOR REGISTRATION",
            link: "/visitor-registration",
          },
          {
            label: "DELEGATE REGISTER",
            link: "/contact",
          },
          {
            label: "BUYER REGISTER",
            link: "/buyer-registration",
          },
        ].map((btn, i) => (

          <Link
            key={i}
            href={btn.link}
            className={`
              flex items-center justify-center rounded-md
              px-3 py-2 text-center text-[10px]
              font-bold uppercase tracking-[0.05em]
              transition-all duration-300 hover:-translate-y-1
              xl:min-w-[145px]

              ${
                btn.primary
                  ? "bg-[#8C3F2B] text-[#FFF8F1] shadow-lg hover:bg-[#713022]"
                  : "border border-[#9D725F] bg-[#F4E7D9] text-[#6F3426] hover:bg-[#8C3F2B] hover:text-white"
              }
            `}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {btn.label}
          </Link>

        ))}

      </div>

    </div>

  </SectionContainer>

</section>




{/* THE SCALE. THE IMPACT. */}
<div className="">

  {/* Impact Panel */}
  <div className="relative overflow-hidden border border-[#D8C9B8] bg-[#EDE5D8] px-5 py-5 shadow-[0_12px_30px_rgba(75,55,38,0.08)] md:px-8">

    {/* Abstract Organic Shapes */}
    <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full border-[16px] border-[#B85C38]/10" />

    <div className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full border-[14px] border-[#D6A84F]/15" />

    {/* Decorative Dots */}
    <div
      className="pointer-events-none absolute right-6 top-5 h-16 w-16 opacity-30"
      style={{
        backgroundImage:
          "radial-gradient(circle, #B85C38 1px, transparent 1px)",
        backgroundSize: "7px 7px",
      }}
    />

    <div className="relative z-10 container mx-auto px-6 max-w-[1400px]">

      {/* Intro */}
      <div className="mb-5 text-center">

        <p
          className="text-xs font-bold uppercase tracking-[0.22em] text-[#B85C38]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          India's Organic Marketplace
        </p>

        <p
          className="mt-1 text-xs font-medium text-[#62584D]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Connecting India's organic producers with buyers, brands and global opportunities.
        </p>

      </div>


      {/* Stats */}
      <div className="grid grid-cols-2 gap-y-5 md:grid-cols-4 md:gap-y-0">

        {[
          {
            value: "200+",
            label: "Exhibitors",
          },
          {
            value: "8+",
            label: "Organic Sectors",
          },
          {
            value: "25+",
            label: "Global Markets",
          },
          {
            value: "1",
            label: "Connected Ecosystem",
          },
        ].map((stat, index) => (

          <div
            key={index}
            className={`
              text-center
              md:px-5
              ${index !== 3 ? "md:border-r md:border-[#CFC1B0]" : ""}
            `}
          >

            <p
              className="text-[25px] font-black leading-none text-[#292522] md:text-[29px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {stat.value}
            </p>

            <p
              className="mt-2 text-[8px] font-bold uppercase tracking-[0.13em] text-[#8C3F2B] md:text-[9px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {stat.label}
            </p>

          </div>

        ))}

      </div>

    </div>

  </div>

</div>

      <ExhibitorLogos />
    </div>
  );
};

export default About;