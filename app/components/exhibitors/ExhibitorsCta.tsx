import React from "react";
import { Leaf, ArrowRight, Download } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import beImg from "../../assets/icons/be.png";
import bleafImg from "../../assets/icons/bleaf.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

// Mock API response / JSON array of objects
const EXHIBITORS_CTA_DATA = [
  {
    id: "exhibitors-cta-1",
    tagline: "These brands trust Bharat Organic Expo.",
    title: "Be the next success story.",
    description: "Join India's most trusted platform for health, wellness and holistic living.",
    beImg: beImg.src,
    leafImg: bleafImg.src,
    buttons: [
      {
        id: "btn-stall",
        label: "Book Your Stall",
        href: "/registration/book-a-stand",
        type: "orange",
        target: "_blank",
        sparkles: [
          { color: "#f97316", shadow: "#c2410c", style: { top: "-12px", left: "10%", animationDelay: "0s" } },
          { color: "#f97316", shadow: "#c2410c", style: { top: "-15px", left: "50%", animationDelay: "0.4s" } },
          { color: "#f97316", shadow: "#c2410c", style: { top: "-10px", right: "10%", animationDelay: "0.8s" } },
        ],
      },
      {
        id: "btn-brochure",
        label: "Download Brochure",
        href: "/download/invited card.pdf",
        type: "maroon",
        target: "_blank",
        sparkles: [
          { color: "#4B1426", shadow: "#2d0b17", style: { top: "-12px", left: "10%", animationDelay: "0.2s" } },
          { color: "#4B1426", shadow: "#2d0b17", style: { top: "-15px", left: "50%", animationDelay: "0.6s" } },
          { color: "#4B1426", shadow: "#2d0b17", style: { top: "-10px", right: "10%", animationDelay: "1s" } },
        ],
      },
    ],
    bottomStats: [
      { id: "stat-1", value: "200+", label: "Exhibitors" },
      { id: "stat-2", value: "8,000+", label: "Visitors" },
      { id: "stat-3", value: "3 Days", label: "Of Knowledge" },
      { id: "stat-4", value: "PAN India", label: "Participation" },
      { id: "stat-5", value: "B2B + B2C", label: "Business Opportunity" },
    ],
  },
];

const Sparkle = ({ color, shadow, style }: { color: string; shadow: string; style: React.CSSProperties }) => (
  <div
    className="absolute w-2 h-2 rounded-full animate-ping pointer-events-none z-0"
    style={{
      backgroundColor: color,
      boxShadow: `0 0 10px ${color}, 0 0 20px ${shadow}`,
      ...style,
    }}
  />
);

const ExhibitorsCta = () => {
  return (
    <>
      {EXHIBITORS_CTA_DATA.map((data) => (
        <React.Fragment key={data.id}>
          <section className="relative w-full overflow-hidden bg-[#fcfcf0] py-3 md:py-4 border-t border-gray-100 font-inter">
            <SectionContainer className="relative z-10">
              {/* Top Block: Info & CTAs */}
              <Reveal>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4 lg:gap-6 text-center lg:text-left">
                    {/* BE Image */}
                    <img
                      src={data.beImg}
                      alt="Be the next"
                      className="hidden sm:block w-12 h-12 md:w-14 md:h-14 object-contain shrink-0"
                    />
                    <div className="max-w-xl">
                      <p className="text-[#1b5e20] text-[12px] md:text-[13px] font-bold uppercase tracking-wider mb-0.5">
                        {data.tagline}
                      </p>
                      <h2 className="text-[20px] md:text-[26px] font-bold text-[#154726] leading-tight tracking-tight mb-0.5 font-poppins">
                        {data.title}
                      </h2>
                      <p className="text-black text-[14px] md:text-[15px] font-semibold leading-snug">
                        {data.description}
                      </p>
                    </div>
                  </div>

                  {/* Premium Buttons + Right Leaf */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                      {data.buttons.map((btn) => (
                        <div key={btn.id} className="relative w-full sm:w-auto">
                          {btn.sparkles.map((sp, idx) => (
                            <Sparkle key={idx} color={sp.color} shadow={sp.shadow} style={sp.style} />
                          ))}
                          <a
                            href={btn.href}
                            target={btn.target}
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-[12px] md:text-[13px] uppercase tracking-wider text-white transition-all active:scale-95 shadow-2xl z-10 w-full sm:w-auto overflow-hidden font-poppins"
                            style={
                              btn.type === "orange"
                                ? {
                                    background: "linear-gradient(135deg, #ea580c, #c2410c)",
                                    boxShadow: "0 4px 20px rgba(194,65,12,0.5), 0 0 12px rgba(249,115,22,0.3)",
                                  }
                                : {
                                    background: "linear-gradient(135deg, #4B1426, #2d0b17)",
                                    boxShadow: "0 4px 20px rgba(75,20,38,0.5), 0 0 12px rgba(75,20,38,0.3)",
                                  }
                            }
                          >
                            <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                            {btn.label}{" "}
                            {btn.type === "orange" ? (
                              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            ) : (
                              <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                            )}
                          </a>
                        </div>
                      ))}
                    </div>

                    {/* Right Leaf Image */}
                    <img
                      src={data.leafImg}
                      alt=""
                      aria-hidden="true"
                      className="hidden md:block w-24 h-24 lg:w-28 lg:h-28 object-contain shrink-0"
                    />
                  </div>
                </div>
              </Reveal>
            </SectionContainer>
          </section>

          {/* Bottom Stats Band */}
          <section className="bg-[#1b5e20] py-2.5 md:py-3 font-inter relative z-10">
            <SectionContainer>
              <div className="flex flex-nowrap items-center justify-between gap-2 md:gap-0 overflow-x-auto scrollbar-hide">
                {data.bottomStats.map((stat, idx) => (
                  <React.Fragment key={stat.id}>
                    <div className="flex items-center gap-2 shrink-0 px-3 md:px-4">
                      <Leaf className="w-4 h-4 text-white/60 fill-white/10 stroke-[1.75] shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[15px] md:text-[16px] font-bold text-white leading-none font-inter">
                          {stat.value}
                        </span>
                        <span className="text-[9px] md:text-[10px] font-bold text-[#facc15] uppercase tracking-widest leading-tight mt-0.5 font-inter">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                    {idx < data.bottomStats.length - 1 && <div className="w-px h-5 bg-white/20 shrink-0" />}
                  </React.Fragment>
                ))}
              </div>
            </SectionContainer>
          </section>
        </React.Fragment>
      ))}
    </>
  );
};

export default ExhibitorsCta;