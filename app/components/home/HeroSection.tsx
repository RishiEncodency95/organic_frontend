"use client";
import home1 from "../../assets/home/home11.png";
import home2 from "../../assets/home/home22.png";
import home3 from "../../assets/home/home33.png";
import home4 from "../../assets/home/home44.png";
import home5 from "../../assets/home/home55.png";
import home6 from "../../assets/home/home1.jpg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CalendarDays, MapPin, ArrowRight, ChevronLeft, ChevronRight, Leaf } from "lucide-react";

// Sparkle component for button highlights
const Sparkle = ({ style, color = '#7ca142' }: { style?: React.CSSProperties, color?: string }) => (
  <span
    style={{
      position: 'absolute',
      pointerEvents: 'none',
      fontSize: '18px',
      color: color,
      textShadow: `0 0 6px ${color}, 0 0 12px ${color}`,
      animation: 'sparkleAnimHero 1.6s ease-in-out infinite',
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

const slides = [
  {
    bgImage: home1,
    tagline: "ORGANIC FOOD & BEVERAGES",
    titlePrimary: "PURE & CERTIFIED",
    titleSecondary: "ORGANIC STAPLES",
    subtitle: "Taste the purity of nature.",
    description: "Discover a diverse range of certified organic staples, farm-fresh produce, healthy snacks, and plant-based drinks.",
    date: "19-21 FEBRUARY 2027",
    dateSub: "Friday – Sunday",
    location: "PRAGATI MAIDAN",
    locationSub: "New Delhi, India",
    eventDate: "2027-02-19T00:00:00"
  },
  {
    bgImage: home2,
    tagline: "SUPERFOODS",
    titlePrimary: "BOOST YOUR",
    titleSecondary: "IMMUNITY",
    subtitle: "Health straight from the earth.",
    description: "Explore premium natural dietary supplements, organic protein powders, and powerful superfoods to fuel your everyday life.",
    date: "19-21 FEBRUARY 2027",
    dateSub: "Friday – Sunday",
    location: "PRAGATI MAIDAN",
    locationSub: "New Delhi, India",
    eventDate: "2027-02-19T00:00:00"
  },
  {
    bgImage: home5,
    tagline: "NATURAL BEAUTY",
    titlePrimary: "CLEAN & CRUELTY",
    titleSecondary: "FREE COSMETICS",
    subtitle: "Radiance without the chemicals.",
    description: "Source top-tier organic skincare, vegan cosmetics, and non-toxic personal hygiene products that care for you and the planet.",
    date: "19-21 FEBRUARY 2027",
    dateSub: "Friday – Sunday",
    location: "PRAGATI MAIDAN",
    locationSub: "New Delhi, India",
    eventDate: "2027-02-19T00:00:00"
  },
  {
    bgImage: home3,
    tagline: "SMART & SUSTAINABLE FARMING",
    titlePrimary: "INNOVATING",
    titleSecondary: "AGRICULTURE",
    subtitle: "Empowering farmers with green tech.",
    description: "Experience the latest in organic seeds, bio-fertilizers, agri-tech innovations, and vertical farming solutions.",
    date: "19-21 FEBRUARY 2027",
    dateSub: "Friday – Sunday",
    location: "PRAGATI MAIDAN",
    locationSub: "New Delhi, India",
    eventDate: "2027-02-19T00:00:00"
  },
  {
    bgImage: home4,
    tagline: "HERBAL WELLNESS & AYURVEDA",
    titlePrimary: "ANCIENT WISDOM",
    titleSecondary: "MODERN HEALING",
    subtitle: "Balance your mind, body, and soul.",
    description: "Immerse yourself in authentic Ayurvedic therapies, holistic herbal supplements, essential oils, and detox solutions.",
    date: "19-21 FEBRUARY 2027",
    dateSub: "Friday – Sunday",
    location: "PRAGATI MAIDAN",
    locationSub: "New Delhi, India",
    eventDate: "2027-02-19T00:00:00"
  },

  {
    bgImage: home6,
    tagline: "LIVE EXPO & NETWORKING",
    titlePrimary: "EXPERIENCE THE",
    titleSecondary: "MEGA EVENT",
    subtitle: "Connect with industry leaders.",
    description: "Join thousands of experts, buyers, and exhibitors at the most anticipated organic and wellness mega event of the year.",
    date: "19-21 FEBRUARY 2027",
    dateSub: "Friday – Sunday",
    location: "PRAGATI MAIDAN",
    locationSub: "New Delhi, India",
    eventDate: "2027-02-19T00:00:00"
  }
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
    }),
    center: {
      x: 0,
      zIndex: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      zIndex: 0,
    }),
  };

  return (
    <section className="relative w-full overflow-hidden bg-white h-[580px] sm:h-[480px] md:h-[555px] lg:h-[610px]  flex items-center">
      <style>{`
        @keyframes sparkleAnimHero {
          0%   { opacity: 0; transform: scale(0.5) translateY(0); }
          40%  { opacity: 1; transform: scale(1.2) translateY(-2px); }
          80%  { opacity: 0.6; transform: scale(0.9) translateY(-4px); }
          100% { opacity: 0; transform: scale(0.5) translateY(-6px); }
        }
        @keyframes shimmerHero {
          0%   { left: -75%; }
          100% { left: 150%; }
        }
        .hero-shimmer-btn {
          position: relative;
          overflow: hidden;
        }
        .hero-shimmer-btn::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          animation: shimmerHero 2.5s infinite;
        }
        .hero-shimmer-btn-dark::before {
          background: linear-gradient(to right, transparent, rgba(43,88,37,0.15), transparent);
        }
      `}</style>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", ease: "easeInOut", duration: 0.8 }
          }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[current].bgImage.src}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Light gradient overlay to make dark text readable and highlight the left side */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fcfcf0]/70 via-[#fcfcf0]/0 to-transparent z-10 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 container mx-auto max-w-[1400px] px-6 h-full flex flex-col justify-center">
        <div className="max-w-xl text-left mt-16 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.5 } }}
              className="space-y-4 w-full max-w-2xl"
            >
              {/* Tagline Badge */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-[2px] bg-[#7ca142]/60"></div>
                <Leaf className="w-4 h-4 text-[#7ca142] fill-[#7ca142]" />
                <span className="text-[#1a3617] text-[12px] md:text-[13px] lg:text-[14px] font-extrabold tracking-widest uppercase">
                  {slides[current].tagline}
                </span>
                <div className="w-8 h-[2px] bg-[#7ca142]/60"></div>
              </div>

              {/* Title */}
              <h1 className="leading-[1.1] font-black uppercase pb-1">
                <div className="text-[#1f471b] text-[34px] md:text-[48px] lg:text-[60px] tracking-tight">
                  {slides[current].titlePrimary}
                </div>
                <div className="text-[#7ca142] text-[34px] md:text-[48px] lg:text-[60px] tracking-tight mt-1">
                  {slides[current].titleSecondary}
                </div>
              </h1>

              {/* Subtitle */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#1f471b] font-serif italic font-medium text-[20px] md:text-[24px] lg:text-[28px] leading-[1.3]">
                  {slides[current].subtitle}
                </span>
                <Leaf className="w-5 h-5 text-[#7ca142] fill-[#7ca142]" />
              </div>

              {/* Description */}
              <p className="text-[#4a4a4a] font-normal text-[16px] md:text-[18px] leading-[1.6] max-w-[600px] mb-6">
                {slides[current].description}
              </p>

              {/* Details (Date & Location) */}
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 pt-2 pb-2">

                {/* Date */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center">
                    <CalendarDays className="w-8 h-8 text-[#2b5825]" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col text-[#2b5825]">
                    <div className="font-extrabold text-[14px] md:text-[15px] tracking-tight">
                      {slides[current].date}
                    </div>
                    <div className="text-[#4a4a4a] text-[13px] md:text-[14px]">
                      {slides[current].dateSub}
                    </div>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="w-[1px] h-10 bg-[#c2d6b3] hidden sm:block"></div>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-[#2b5825]" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col text-[#2b5825]">
                    <div className="font-extrabold text-[14px] md:text-[15px] tracking-tight">
                      {slides[current].location}
                    </div>
                    <div className="text-[#4a4a4a] text-[13px] md:text-[14px]">
                      {slides[current].locationSub}
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-nowrap items-center gap-2 sm:gap-4 pt-3 relative overflow-visible w-full overflow-x-auto hide-scrollbar pb-2">
                {/* Floating Sparkles around buttons - Multi-colored to match logo theme */}
                <Sparkle style={{ top: '-15px', left: '15%', animationDelay: '0s', color: '#F2B40E' }} />
                <Sparkle style={{ bottom: '-10px', left: '35%', animationDelay: '0.4s', color: '#3b8c2a' }} />
                <Sparkle style={{ top: '-5px', right: '45%', animationDelay: '0.8s', color: '#F6A003' }} />
                <Sparkle style={{ top: '-20px', right: '15%', animationDelay: '0.2s', color: '#7ca142' }} />
                <Sparkle style={{ bottom: '-5px', right: '5%', animationDelay: '0.6s', color: '#2b5825' }} />

                <Link
                  href="/book-a-stand"
                  className="hero-shimmer-btn w-fit bg-[#2b5825] hover:bg-[#1f471b] text-white px-4 py-2 sm:py-2.5 rounded-md font-bold text-[10px] sm:text-[12px] md:text-[13px] tracking-tight sm:tracking-wider uppercase transition-all shadow-md hover:-translate-y-0.5 text-center flex items-center justify-center whitespace-nowrap"
                >
                  Book Your Stall
                </Link>
                <Link
                  href="/visitor-registration"
                  className="hero-shimmer-btn hero-shimmer-btn-dark w-fit bg-white hover:bg-gray-50 text-[#2b5825] border border-[#2b5825] px-4 py-2 sm:py-2.5 rounded-md font-bold text-[10px] sm:text-[12px] md:text-[13px] tracking-tight sm:tracking-wider uppercase transition-all shadow-sm hover:-translate-y-0.5 text-center flex items-center justify-center whitespace-nowrap"
                >
                  Register as Visitor
                </Link>
                <Link
                  href="/delegate-registration"
                  className="hero-shimmer-btn w-fit bg-[#7ca142] hover:bg-[#688a35] text-white px-4 py-2 sm:py-2.5 rounded-md font-bold text-[10px] sm:text-[12px] md:text-[13px] tracking-tight sm:tracking-wider uppercase transition-all shadow-md hover:-translate-y-0.5 text-center flex items-center justify-center whitespace-nowrap"
                >
                  Register as Delegate
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
