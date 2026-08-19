<<<<<<< HEAD
import React from "react";
import {
    Leaf,
    Users,
    Handshake,
    Globe2,
    Store,
} from "lucide-react";

import { HERO_STATS } from "./data";

import bannerLeft from "../../assets/exhibitors/banner_left.png";
import bannerRight from "../../assets/exhibitors/banner_right.png";

const ExhibitorsHero = () => {
    const statIcons = [Store, Users, Handshake, Globe2];

    return (
        <section
            className="
                hero-3d
                relative
                w-full
                overflow-hidden
                isolate
                bg-[#fcf7e9]

                min-h-[620px]
                sm:min-h-[500px]
                md:min-h-[550px]
                lg:min-h-[610px]
            "
        >
            {/* =====================================================
                BACKGROUND
            ===================================================== */}

            <div
                className="
                    hero-bg
                    absolute
                    inset-0
                    pointer-events-none
                    overflow-hidden
                "
            >
                {/* Main cream atmosphere */}
                <div
                    className="
                        absolute
                        -top-40
                        -left-32
                        w-[520px]
                        h-[520px]
                        rounded-full
                        bg-[#dcebb8]/35
                        blur-[110px]
                    "
                />

                {/* Bottom warm glow */}
                <div
                    className="
                        absolute
                        -bottom-40
                        left-[30%]
                        w-[500px]
                        h-[500px]
                        rounded-full
                        bg-[#d9df9c]/25
                        blur-[120px]
                    "
                />

                {/* Soft golden atmosphere */}
                <div
                    className="
                        absolute
                        top-[18%]
                        right-[25%]
                        w-[320px]
                        h-[320px]
                        rounded-full
                        bg-[#e8b84b]/[0.08]
                        blur-[100px]
                    "
                />

                {/* Subtle organic texture */}
                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.035]
                        bg-[radial-gradient(circle_at_20%_30%,#154726_1px,transparent_1px)]
                        bg-[length:26px_26px]
                    "
                />

                {/* Right side depth gradient */}
                <div
                    className="
                        absolute
                        inset-y-0
                        right-0
                        w-[65%]
                        bg-gradient-to-l
                        from-[#dcebb8]/30
                        via-transparent
                        to-transparent
                    "
                />

                {/* 3D light rings */}
                <div className="hero-ring hero-ring-1" />
                <div className="hero-ring hero-ring-2" />
            </div>

            {/* =====================================================
                LEFT DECORATIVE IMAGE
            ===================================================== */}

            <img
                src={bannerLeft.src}
                alt=""
                aria-hidden="true"
                className="
                    hero-side-image
                    hidden
                    md:block

                    absolute
                    left-[-25px]
                    lg:left-[-10px]

                    top-0

                    w-[95px]
                    lg:w-[125px]
                    xl:w-[150px]

                    h-auto

                    opacity-70

                    z-[1]
                    pointer-events-none
                "
            />

            {/* =====================================================
                MAIN CONTAINER
            ===================================================== */}

            <div
                className="
                    relative
                    z-10

                    container
                    mx-auto
                    max-w-[1400px]

                    px-6

                    min-h-[620px]
                    sm:min-h-[500px]
                    md:min-h-[550px]
                    lg:min-h-[610px]

                    flex
                    items-center
                "
            >
                {/* =================================================
                    LEFT CONTENT
                ================================================= */}

                <div
                    className="
                        relative
                        z-30

                        w-full
                        lg:w-[54%]
                        xl:w-[53%]

                        py-16
                        md:py-12
                        lg:py-0
                    "
                >
                    {/* TRUST BADGE */}

                    <div className="hero-content hero-delay-1">
                        <div
                            className="
                                inline-flex
                                items-center
                                gap-2

                                mb-4

                                rounded-full

                                bg-[#063f25]

                                border
                                border-[#a8cf22]/30

                                px-3.5
                                py-1.5

                                shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                            "
                        >
                            <Leaf
                                className="
                                    w-3.5
                                    h-3.5
                                    text-[#a8cf22]
                                "
                                strokeWidth={2.5}
                            />

                            <span
                                className="
                                    text-[9px]
                                    md:text-[10px]

                                    uppercase
                                    tracking-[0.22em]

                                    font-extrabold

                                    text-[#d8eb7a]
                                "
                            >
                                Trusted by India's Leading Brands
                            </span>
                        </div>
                    </div>

                    {/* MAIN HEADING */}

                    <div className="hero-content hero-delay-2">
                        <h1
                            className="
                                max-w-[720px]

                                text-[35px]
                                sm:text-[40px]
                                md:text-[48px]
                                lg:text-[52px]
                                xl:text-[56px]

                                font-black

                                uppercase

                                leading-[0.98]

                                tracking-[-0.035em]

                                mb-5
                            "
                        >
                            <span className="text-[#154726]">
                                150+{" "}
                            </span>

                            <span className="text-[#3b8c2a]">
                                Leading
                            </span>

                            <br />

                            <span className="text-[#F2B40E]">
                                Health &amp; Wellness Brands
                            </span>
                        </h1>
                    </div>

                    {/* DESCRIPTION */}

                    <div className="hero-content hero-delay-3">
                        <p
                            className="
                                max-w-[620px]

                                text-[14px]
                                sm:text-[15px]
                                md:text-[16px]

                                leading-[1.55]

                                text-[#154726]/70

                                mb-6
                            "
                        >
                            India's most influential health, Ayurveda,
                            fitness and wellness companies have chosen
                            Bharat Organic Expo as the platform to showcase,
                            connect and grow.
                        </p>
                    </div>

                    {/* STATISTICS */}

                    <div className="hero-content hero-delay-4">
                        <div
                            className="
                                border-t
                                border-[#154726]/15

                                pt-5

                                max-w-[650px]
                            "
                        >
                            <div
                                className="
                                    grid

                                    grid-cols-2
                                    sm:grid-cols-4

                                    gap-x-5
                                    gap-y-6
                                "
                            >
                                {HERO_STATS.map((stat, index) => {
                                    const Icon =
                                        statIcons[
                                            index % statIcons.length
                                        ];

                                    return (
                                        <div
                                            key={stat.label}
                                            className="
                                                flex
                                                flex-col
                                                gap-2
                                            "
                                        >
                                            {/* Icon */}

                                            <div
                                                className="
                                                    w-10
                                                    h-10

                                                    md:w-11
                                                    md:h-11

                                                    flex
                                                    items-center
                                                    justify-center

                                                    text-[#3b8c2a]
                                                "
                                            >
                                                <Icon
                                                    className="
                                                        w-7
                                                        h-7

                                                        md:w-8
                                                        md:h-8
                                                    "
                                                    strokeWidth={1.7}
                                                />
                                            </div>

                                            {/* Number */}

                                            <div
                                                className="
                                                    text-[20px]
                                                    md:text-[22px]

                                                    font-black

                                                    leading-none

                                                    text-[#154726]
                                                "
                                            >
                                                {stat.value}
                                            </div>

                                            {/* Label */}

                                            <div
                                                className="
                                                    text-[8px]
                                                    md:text-[9px]

                                                    font-bold

                                                    uppercase

                                                    tracking-[0.13em]

                                                    text-[#154726]/60

                                                    leading-tight
                                                "
                                            >
                                                {stat.label}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* =================================================
                    RIGHT SIDE 3D IMAGE
                ================================================= */}

                <div
                    className="
                        absolute

                        right-[-55px]
                        sm:right-[-70px]
                        md:right-[-85px]
                        lg:right-[-110px]
                        xl:right-[-125px]

                        top-1/2
                        -translate-y-1/2

                        w-[60%]
                        sm:w-[58%]
                        md:w-[58%]
                        lg:w-[57%]
                        xl:w-[55%]

                        h-[95%]

                        z-20

                        pointer-events-none
                    "
                    style={{
                        perspective: "1400px",
                    }}
                >
                    {/* IMAGE GLOW */}

                    <div
                        className="
                            absolute

                            right-[12%]
                            top-[14%]

                            w-[65%]
                            h-[68%]

                            rounded-full

                            bg-[#a8cf22]/10

                            blur-[90px]
                        "
                    />

                    {/* 3D IMAGE */}

                    <div
                        className="
                            hero-image-wrapper

                            absolute
                            inset-0

                            flex
                            items-center
                            justify-end
                        "
                    >
                        <img
                            src={bannerRight.src}
                            alt="Bharat Organic Expo exhibitors"
                            className="
                                hero-main-image

                                relative

                                w-full
                                h-auto

                                object-contain

                                origin-center

                                drop-shadow-[-25px_30px_50px_rgba(0,0,0,0.25)]
                            "
                        />
                    </div>
                </div>

                {/* =================================================
                    3D PARTICLES
                ================================================= */}

                <div className="hero-particle hero-particle-1" />

                <div className="hero-particle hero-particle-2" />

                <div className="hero-particle hero-particle-3" />

                <div className="hero-particle hero-particle-4" />
            </div>

            {/* =====================================================
                BOTTOM FADE
            ===================================================== */}

            <div
                className="
                    absolute

                    bottom-0
                    left-0
                    right-0

                    h-20

                    bg-gradient-to-t
                    from-[#fcf7e9]/90
                    to-transparent

                    pointer-events-none

                    z-30
                "
            />

            {/* =====================================================
                ANIMATION CSS
            ===================================================== */}

            <style>{`
                /* =====================================================
                   MAIN HERO ENTRANCE
                ===================================================== */

                .hero-3d {
                    perspective: 1600px;
                }

                /*
                 * Background enters first.
                 * Slight scale creates cinematic camera movement.
                 */

                .hero-bg {
                    animation:
                        heroBackgroundIn
                        1.5s
                        cubic-bezier(.16,1,.3,1)
                        both;
                }

                @keyframes heroBackgroundIn {
                    0% {
                        opacity: 0;
                        transform:
                            scale(1.12)
                            translateZ(-100px);
                    }

                    100% {
                        opacity: 1;
                        transform:
                            scale(1)
                            translateZ(0);
                    }
                }


                /* =====================================================
                   LEFT DECORATIVE IMAGE
                ===================================================== */

                .hero-side-image {
                    animation:
                        sideImageIn
                        1.35s
                        cubic-bezier(.16,1,.3,1)
                        .12s
                        both;
                }

                @keyframes sideImageIn {
                    0% {
                        opacity: 0;
                        transform:
                            translate3d(-45px, 35px, -180px)
                            rotateY(18deg)
                            scale(.86);
                        filter: blur(7px);
                    }

                    65% {
                        opacity: .72;
                    }

                    100% {
                        opacity: .7;
                        transform:
                            translate3d(0,0,0)
                            rotateY(0deg)
                            scale(1);
                        filter: blur(0);
                    }
                }


                /* =====================================================
                   CONTENT ENTRANCE
                ===================================================== */

                .hero-content {
                    opacity: 0;
                    transform:
                        translate3d(0, 35px, -80px)
                        rotateX(8deg)
                        scale(.97);

                    transform-origin: center bottom;

                    animation:
                        contentReveal
                        .9s
                        cubic-bezier(.16,1,.3,1)
                        forwards;
                }

                .hero-delay-1 {
                    animation-delay: .15s;
                }

                .hero-delay-2 {
                    animation-delay: .27s;
                }

                .hero-delay-3 {
                    animation-delay: .39s;
                }

                .hero-delay-4 {
                    animation-delay: .51s;
                }

                @keyframes contentReveal {
                    0% {
                        opacity: 0;
                        transform:
                            translate3d(0, 35px, -80px)
                            rotateX(8deg)
                            scale(.97);
                        filter: blur(5px);
                    }

                    60% {
                        opacity: 1;
                    }

                    100% {
                        opacity: 1;
                        transform:
                            translate3d(0,0,0)
                            rotateX(0deg)
                            scale(1);
                        filter: blur(0);
                    }
                }


                /* =====================================================
                   MAIN 3D IMAGE
                ===================================================== */

                .hero-image-wrapper {
                    transform-style: preserve-3d;

                    animation:
                        heroImageIn
                        1.65s
                        cubic-bezier(.16,1,.3,1)
                        .05s
                        both;
                }

                .hero-main-image {
                    transform-style: preserve-3d;

                    animation:
                        imageSettle
                        1.65s
                        cubic-bezier(.16,1,.3,1)
                        .05s
                        both;
                }

                @keyframes heroImageIn {
                    0% {
                        opacity: 0;
                        transform:
                            translate3d(90px, 20px, -350px)
                            rotateY(-12deg)
                            rotateX(5deg)
                            scale(.78);
                        filter: blur(12px);
                    }

                    55% {
                        opacity: 1;
                        filter: blur(2px);
                    }

                    100% {
                        opacity: 1;
                        transform:
                            translate3d(0,0,0)
                            rotateY(0deg)
                            rotateX(0deg)
                            scale(1);
                        filter: blur(0);
                    }
                }

                @keyframes imageSettle {
                    0% {
                        transform:
                            translateZ(-80px)
                            rotateZ(-1deg);
                    }

                    70% {
                        transform:
                            translateZ(20px)
                            rotateZ(.25deg);
                    }

                    100% {
                        transform:
                            translateZ(0)
                            rotateZ(0deg);
                    }
                }


                /* =====================================================
                   3D RINGS / ATMOSPHERE
                ===================================================== */

                .hero-ring {
                    position: absolute;
                    border: 1px solid rgba(59, 140, 42, .08);
                    border-radius: 9999px;
                    pointer-events: none;

                    animation:
                        ringReveal
                        1.8s
                        cubic-bezier(.16,1,.3,1)
                        both;
                }

                .hero-ring-1 {
                    width: 420px;
                    height: 420px;
                    right: 8%;
                    top: 8%;
                    transform: rotateX(65deg);
                }

                .hero-ring-2 {
                    width: 620px;
                    height: 620px;
                    right: -5%;
                    top: -10%;
                    border-color: rgba(168, 207, 34, .06);
                    transform: rotateX(65deg);
                    animation-delay: .15s;
                }

                @keyframes ringReveal {
                    0% {
                        opacity: 0;
                        transform:
                            rotateX(65deg)
                            scale(.65)
                            translateZ(-250px);
                    }

                    100% {
                        opacity: 1;
                        transform:
                            rotateX(65deg)
                            scale(1)
                            translateZ(0);
                    }
                }


                /* =====================================================
                   PARTICLES
                   One-time entrance only — no infinite animation
                ===================================================== */

                .hero-particle {
                    position: absolute;
                    border-radius: 9999px;
                    pointer-events: none;
                    opacity: 0;

                    animation:
                        particleEntrance
                        1.5s
                        cubic-bezier(.16,1,.3,1)
                        forwards;
                }

                .hero-particle-1 {
                    right: 38%;
                    top: 25%;
                    width: 8px;
                    height: 8px;
                    background: #f2b40e;
                    box-shadow:
                        0 0 18px
                        rgba(242,180,14,.55);
                    animation-delay: .25s;
                }

                .hero-particle-2 {
                    right: 31%;
                    top: 38%;
                    width: 6px;
                    height: 6px;
                    background: #a8cf22;
                    box-shadow:
                        0 0 15px
                        rgba(168,207,34,.55);
                    animation-delay: .4s;
                }

                .hero-particle-3 {
                    right: 45%;
                    bottom: 28%;
                    width: 6px;
                    height: 6px;
                    background: #e2b43d;
                    box-shadow:
                        0 0 15px
                        rgba(226,180,61,.55);
                    animation-delay: .55s;
                }

                .hero-particle-4 {
                    right: 25%;
                    top: 20%;
                    width: 4px;
                    height: 4px;
                    background: #3b8c2a;
                    animation-delay: .7s;
                }

                @keyframes particleEntrance {
                    0% {
                        opacity: 0;
                        transform:
                            translate3d(
                                0,
                                35px,
                                -180px
                            )
                            scale(.2);
                        filter: blur(5px);
                    }

                    60% {
                        opacity: .85;
                    }

                    100% {
                        opacity: .55;
                        transform:
                            translate3d(
                                0,
                                0,
                                0
                            )
                            scale(1);
                        filter: blur(0);
                    }
                }


                /* =====================================================
                   ACCESSIBILITY
                ===================================================== */

                @media (prefers-reduced-motion: reduce) {
                    .hero-bg,
                    .hero-side-image,
                    .hero-content,
                    .hero-image-wrapper,
                    .hero-main-image,
                    .hero-ring,
                    .hero-particle {
                        animation: none !important;
                        opacity: 1 !important;
                        transform: none !important;
                        filter: none !important;
                    }
                }


                /* =====================================================
                   TABLET
                ===================================================== */

                @media (max-width: 1023px) {
                    section img[alt="Bharat Organic Expo exhibitors"] {
                        opacity: .42;
                    }
                }


                /* =====================================================
                   MOBILE
                ===================================================== */

                @media (max-width: 767px) {
                    section img[alt="Bharat Organic Expo exhibitors"] {
                        opacity: .16;
                    }

                    .hero-ring {
                        display: none;
                    }

                    .hero-particle {
                        display: none;
                    }
                }
            `}</style>
        </section>
    );
=======
"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin, Leaf } from "lucide-react";
import bgImg from "../../assets/banner/exhog.webp";
import leafImg from "../../assets/icons/leafs.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

const Sparkle = ({ style, color = "#ffdd00", shadow = "#ffa500" }: { style?: React.CSSProperties; color?: string; shadow?: string }) => (
  <span
    style={{
      position: "absolute",
      pointerEvents: "none",
      fontSize: "12px",
      color,
      textShadow: `0 0 6px ${shadow}, 0 0 12px ${shadow}`,
      animation: "sparkleAnim 1.6s ease-in-out infinite",
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

const ExhibitorsHero = () => {
  return (
    <>
      <style>{`
        @keyframes sparkleAnim {
          0%   { opacity: 0; transform: scale(0.5) translateY(0); }
          40%  { opacity: 1; transform: scale(1.2) translateY(-2px); }
          80%  { opacity: 0.6; transform: scale(0.9) translateY(-4px); }
          100% { opacity: 0; transform: scale(0.5) translateY(-6px); }
        }
        @keyframes shimmerHero {
          0%   { left: -75%; }
          100% { left: 150%; }
        }
        .blue-btn-hero-exh {
          background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 30%, #0e3b1c 60%, #1b5e20 100%);
          background-size: 200% 200%;
          box-shadow: 0 0 16px 4px rgba(27,94,32,0.3), 0 4px 15px rgba(27,94,32,0.25);
          position: relative;
          overflow: hidden;
        }
        .blue-btn-hero-exh::before {
          content: '';
          position: absolute;
          top: -50%; left: -75%;
          width: 50%; height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg);
          animation: shimmerHero 2.5s infinite;
        }
      `}</style>

      <section className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] flex items-center overflow-hidden font-inter pt-3 md:pt-5 pb-4 md:pb-6 border-b-4 border-[#ea580c]">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${bgImg.src})`,
            backgroundPosition: "center top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Floating Leaf */}
        <div className="absolute -left-10 lg:-left-8 top-[10%] lg:top-[15%] z-10 hidden sm:block w-28 md:w-36 lg:w-[150px] pointer-events-none">
          <img src={leafImg.src} alt="Organic Leaf" className="w-full h-auto object-contain drop-shadow-lg" />
        </div>

        {/* Content */}
        <SectionContainer className="relative z-10">
          <div className="max-w-2xl -translate-y-2 md:-translate-y-4 lg:-translate-y-5">

            {/* Tagline Badge */}
            <div className="flex items-center justify-start gap-2.5 mb-2">
              <span className="w-8 h-[2.5px] bg-[#c2410c] shrink-0" />
              <p className="text-[#c2410c] text-[13px] md:text-[15px] lg:text-[16px] font-bold uppercase tracking-[0.18em] text-left">
                TRUSTED BY
              </p>
              <span className="w-8 h-[2.5px] bg-[#c2410c] shrink-0" />
            </div>

            {/* Heading */}
            <h1 className="font-semibold leading-[1.05] mb-4 font-poppins" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}>
              <span className="text-4xl md:text-5xl lg:text-[38px] text-[#001810] block mb-1">
                150+{" "}<span className="text-[#3b8c2a]">Leading</span>
              </span>
              <span className="text-3xl md:text-4xl lg:text-[38px] text-[#001810] block">
                Health &amp; Wellness Brands
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#131730] text-sm md:text-[15px] font-bold leading-relaxed max-w-lg mt-3 mb-4">
              India's most influential health, Ayurveda, fitness and wellness
              companies have chosen Bharat Organic Expo as the platform to showcase,
              connect and grow.
            </p>

            {/* Date & Venue */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-5 text-[#4B1426] text-sm md:text-[15px] font-bold">
              <div className="flex items-center gap-2">
                <CalendarDays size={18} className="shrink-0 text-[#ea580c]" />
                <span>19-21 February 2027</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-[#4B1426]/30"></div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="shrink-0 text-[#ea580c]" />
                <span>Hall 12, Bharat Mandapam, New Delhi</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-start gap-3">
              <div className="relative w-full sm:w-auto">
                <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-12px", left: "10%", animationDelay: "0.2s" }} />
                <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-15px", left: "50%", animationDelay: "0.6s" }} />
                <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-10px", right: "10%", animationDelay: "1s" }} />
                <Link
                  href="/visitor-registration"
                  className="blue-btn-hero-exh text-white px-4 py-2 rounded-lg font-semibold text-[10px] uppercase tracking-widest flex items-center justify-start gap-2 transition-all active:scale-95 shadow-lg relative z-10 w-full sm:w-auto"
                >
                  REGISTER AS A BUYER <ArrowRight size={14} />
                </Link>
              </div>
              <div className="relative w-full sm:w-auto">
                <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-12px", left: "10%", animationDelay: "0s" }} />
                <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-15px", left: "50%", animationDelay: "0.4s" }} />
                <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-10px", right: "10%", animationDelay: "0.8s" }} />
                <Link
                  href="/book-a-stand"
                  className="group relative inline-flex items-center justify-start gap-2 px-4 py-2 rounded-lg font-semibold text-[10px] uppercase tracking-widest text-white transition-all active:scale-95 shadow-2xl z-10 w-full sm:w-auto overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #ea580c, #c2410c)",
                    boxShadow: "0 4px 20px rgba(194,65,12,0.5), 0 0 12px rgba(249,115,22,0.3)",
                  }}
                >
                  <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                  PARTICIPATE AS AN EXHIBITOR <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </SectionContainer>
      </section>
    </>
  );
>>>>>>> 467be4d3e8a1afbeebaa621db28932406bf79535
};

export default ExhibitorsHero;