"use client";
import home1 from "../../assets/home/home1.jpg";
import home2 from "../../assets/home/home2.png";
import home3 from "../../assets/home/home3.png";
import home4 from "../../assets/home/home4.jpg";
import home5 from "../../assets/home/home5.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { CalendarDays, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    bgImage: home1,
    tagline: "India's Largest",
    titlePrimary: "BHARAT ORGANIC",
    titleSecondary: "EXPO 2027",
    subtitle: "Connect. Collaborate. Grow.",
    description: "India's largest platform bringing together the global wellness, organic & healthcare community to build a healthier, sustainable future.",
    date: "19-21 FEBRUARY 2027",
    dateSub: "Friday – Sunday",
    location: "PRAGATI MAIDAN",
    locationSub: "New Delhi, India",
    eventDate: "2027-02-19T00:00:00"
  },
  {
    bgImage: home2,
    tagline: "INDIA'S LARGEST",
    titlePrimary: "BHARAT ORGANIC",
    titleSecondary: "EXPO 2027",
    subtitle: "Connect. Collaborate. Grow.",
    description: "A global platform uniting organic brands, wellness innovators, and health-conscious communities to build a sustainable future together.",
     date: "19-21 FEBRUARY 2027",
    dateSub: "Friday – Sunday",
     location: "PRAGATI MAIDAN",
    locationSub: "New Delhi, India",
    eventDate: "2027-02-19T00:00:00"
  },
  {
    bgImage: home3,
    tagline: "GLOBAL WELLNESS FESTIVAL",
    titlePrimary: "BHARAT ORGANIC",
    titleSecondary: "EXPO 2027",
    subtitle: "Discover. Source. Network.",
    description: "Join thousands of industry experts, buyers, and exhibitors to explore the latest innovations in natural and organic products.",
  date: "19-21 FEBRUARY 2027",
    dateSub: "Friday – Sunday",
  location: "PRAGATI MAIDAN",
    locationSub: "New Delhi, India",
    eventDate: "2027-02-19T00:00:00"
  },
  {
    bgImage: home4,
    tagline: "SUSTAINABLE FUTURE",
    titlePrimary: "BHARAT ORGANIC",
    titleSecondary: "EXPO 2027",
    subtitle: "Innovate. Inspire. Impact.",
    description: "Experience the finest organic agriculture, eco-friendly technologies, and natural health products from around the world.",
  date: "19-21 FEBRUARY 2027",
    dateSub: "Friday – Sunday",
   location: "PRAGATI MAIDAN",
    locationSub: "New Delhi, India",
    eventDate: "2027-02-19T00:00:00"
  },
  {
    bgImage: home5,
    tagline: "HEALTH & WELLNESS",
    titlePrimary: "BHARAT ORGANIC",
    titleSecondary: "EXPO 2027",
    subtitle: "Pure. Natural. Authentic.",
    description: "Your gateway to the booming organic market. Discover the latest trends in organic food, ayurveda, and holistic wellness.",
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
          {/* Subtle gradient overlay to make text readable */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/30 to-transparent z-10 pointer-events-none" /> */}
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 container mx-auto max-w-[1400px] px-6 h-full flex flex-col justify-center">
        <div className="max-w-xl text-left mt-16 md:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6 }}
              className="space-y-3 w-full max-w-xl"
              style={{ textShadow: '0px 2px 15px rgba(255,255,255,1), 0px 4px 30px rgba(255,255,255,0.8)' }}
            >
              {/* Tagline */}
              <div className="flex items-center gap-2">
                <span className="text-slate-800 text-xs md:text-sm font-bold tracking-wider uppercase">
                  {slides[current].tagline}
                </span>
              </div>

              {/* Title */}
              <h1 className="leading-tight font-black -mt-1">
                <div className="text-[#3b8c2a] text-2xl md:text-5xl lg:text-5xl mb-1">
                  {slides[current].titlePrimary}
                </div>
                <div className="text-[#F08902] text-2xl md:text-5xl lg:text-5xl">
                  {slides[current].titleSecondary}
                </div>
              </h1>

              {/* Subtitle */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-[#3b8c2a]"></div>
                <span className="text-slate-800 font-bold text-base md:text-lg tracking-wide uppercase">
                  {slides[current].subtitle}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-800 font-semibold text-xs md:text-sm leading-snug max-w-lg">
                {slides[current].description}
              </p>

              {/* Details (Date & Location) */}
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 pt-3 mt-4">
                <div className="flex items-start gap-2">
                  <CalendarDays className="w-5 h-5 text-[#3b8c2a]" />
                  <div className="flex flex-col justify-center">
                    <div className="text-slate-900 font-bold text-xs md:text-sm">
                      {slides[current].date}
                    </div>
                    <div className="text-slate-800 font-semibold text-[10px] md:text-xs">
                      {slides[current].dateSub}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[#3b8c2a]" />
                  <div className="flex flex-col justify-center">
                    <div className="text-slate-900 font-bold text-xs md:text-sm">
                      {slides[current].location}
                    </div>
                    <div className="text-slate-800 font-semibold text-[10px] md:text-xs">
                      {slides[current].locationSub}
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <Link
                  href="/book-a-stand"
                  className="bg-[#3b8c2a] hover:bg-[#2c6e1f] text-white px-6 py-2.5 rounded-lg font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  BOOK YOUR SPACE
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/visitor-registration"
                  className="bg-white hover:bg-slate-100 text-[#3b8c2a] px-6 py-2.5 rounded-lg font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-[#3b8c2a]"
                >
                  ATTEND CONFERENCE
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Countdown Timer */}
              <div className="pt-4 flex flex-col items-start">
                <div className="text-slate-800 text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-2 flex items-center justify-start gap-2 w-full">
                  <div className="w-4 h-0.5 bg-slate-800 hidden sm:block"></div>
                  EVENT BEGINS IN
                </div>
                <div className="flex justify-start gap-2 sm:gap-3 w-full">
                  {['DAYS', 'HOURS', 'MINS', 'SECS'].map((label, idx) => (
                    <div key={label} className="bg-white/95 backdrop-blur border border-white rounded-lg px-2 py-0.5 sm:px-2.5 sm:py-1 min-w-[45px] sm:min-w-[55px] flex flex-col items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.06)] hover:-translate-y-0.5 transition-transform duration-300">
                      <span className="text-[#3b8c2a] text-base sm:text-lg font-black leading-none mb-0.5 tracking-tight">
                        {[29, 13, 13, 19][idx]}
                      </span>
                      <span className="text-slate-500 text-[7px] sm:text-[8px] font-bold tracking-widest uppercase">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`w-12 h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-[#3b8c2a]" : "bg-white/30 hover:bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
