import React from "react";
import { Leaf, ArrowRight, Download } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import { BOTTOM_STATS } from "./data";
import beImg from "../../assets/icons/be.png";
import bleafImg from "../../assets/icons/bleaf.png";

const Sparkle = ({ color, shadow, style }: { color: string; shadow: string; style: React.CSSProperties }) => (
    <div
        className="absolute w-2 h-2 rounded-full animate-ping pointer-events-none z-0"
        style={{
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}, 0 0 20px ${shadow}`,
            ...style
        }}
    />
);

const ExhibitorsCta = () => {
    return (
        <>
        <section className="relative w-full overflow-hidden bg-[#fcfcf0] py-2 border-t border-gray-100 font-inter">
            <div className="container mx-auto max-w-[1400px] px-6 relative z-10">
                {/* Top Block: Info & CTAs */}
                <Reveal>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4 lg:gap-6 text-center lg:text-left">
                            {/* BE Image */}
                            <img
                                src={beImg.src}
                                alt="Be the next"
                                className="hidden sm:block w-12 h-12 md:w-14 md:h-14 object-contain shrink-0"
                            />
                            <div className="max-w-xl">
                                <p className="text-[#1b5e20] text-[12px] font-bold uppercase tracking-wider mb-0.5">
                                    These brands trust Bharat Organic Expo.
                                </p>
                                <h2 className="text-[20px] md:text-[26px] font-bold text-[#154726] leading-tight tracking-tight mb-0.5 font-poppins">
                                    Be the next success story.
                                </h2>
                                <p className="text-black text-[14px] md:text-[15px] font-semibold leading-snug">
                                    Join India's most trusted platform for health, wellness and holistic living.
                                </p>
                            </div>
                        </div>

                        {/* Premium Buttons + Right Leaf */}
                        <div className="flex items-center gap-3 shrink-0">
                            <div className="flex flex-col sm:flex-row items-start gap-3 w-full sm:w-auto">
                                {/* Book Your Stall - Orange Gradient */}
                                <div className="relative w-full sm:w-auto">
                                    <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-12px", left: "10%", animationDelay: "0s" }} />
                                    <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-15px", left: "50%", animationDelay: "0.4s" }} />
                                    <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-10px", right: "10%", animationDelay: "0.8s" }} />
                                    <a
                                        href="/book-a-stand"
                                        className="group relative inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-[10px] uppercase tracking-widest text-white transition-all active:scale-95 shadow-2xl z-10 w-full sm:w-auto overflow-hidden"
                                        style={{
                                            background: "linear-gradient(135deg, #ea580c, #c2410c)",
                                            boxShadow: "0 4px 20px rgba(194,65,12,0.5), 0 0 12px rgba(249,115,22,0.3)",
                                        }}
                                    >
                                        Book Your Stall <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>
                                </div>

                                {/* Download Brochure - Dark Maroon */}
                                <div className="relative w-full sm:w-auto">
                                    <Sparkle color="#4B1426" shadow="#2d0b17" style={{ top: "-12px", left: "10%", animationDelay: "0.2s" }} />
                                    <Sparkle color="#4B1426" shadow="#2d0b17" style={{ top: "-15px", left: "50%", animationDelay: "0.6s" }} />
                                    <Sparkle color="#4B1426" shadow="#2d0b17" style={{ top: "-10px", right: "10%", animationDelay: "1s" }} />
                                    <a
                                        href="/pdf.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download
                                        className="group relative inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-[10px] uppercase tracking-widest text-white transition-all active:scale-95 shadow-2xl z-10 w-full sm:w-auto overflow-hidden"
                                        style={{
                                            background: "linear-gradient(135deg, #4B1426, #2d0b17)",
                                            boxShadow: "0 4px 20px rgba(75,20,38,0.5), 0 0 12px rgba(75,20,38,0.3)",
                                        }}
                                    >
                                        Download Brochure <Download className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                                    </a>
                                </div>
                            </div>

                            {/* Right Leaf Image */}
                            <img
                                src={bleafImg.src}
                                alt=""
                                aria-hidden="true"
                                className="hidden md:block w-28 h-28 lg:w-32 lg:h-32 object-contain shrink-0"
                            />
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>

        {/* Bottom Stats Band */}
        <section className="bg-[#1b5e20] py-3 md:py-4 font-inter relative z-10">
            <div className="container mx-auto max-w-[1400px] px-6">
                <div className="flex flex-nowrap items-center justify-between gap-2 md:gap-0 overflow-x-auto scrollbar-hide">
                    {BOTTOM_STATS.map((stat, idx) => (
                        <React.Fragment key={stat.label}>
                            <div className="flex items-center gap-2 shrink-0 px-3 md:px-4">
                                <Leaf className="w-4 h-4 text-white/60 fill-white/10 stroke-[1.75] shrink-0" />
                                <div className="flex flex-col">
                                    <span className="text-[15px] md:text-[16px] font-bold text-white leading-none">
                                        {stat.value}
                                    </span>
                                    <span className="text-[9px] md:text-[10px] font-bold text-[#facc15] uppercase tracking-widest leading-tight mt-0.5">
                                        {stat.label}
                                    </span>
                                </div>
                            </div>
                            {idx < BOTTOM_STATS.length - 1 && (
                                <div className="w-px h-5 bg-white/20 shrink-0" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
};

export default ExhibitorsCta;