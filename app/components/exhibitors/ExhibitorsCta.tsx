import React from "react";
import { Leaf, ArrowRight, Download } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import { BOTTOM_STATS } from "./data";
import beTheLeft from "../../assets/exhibitors/be_the_left.png";
import beTheRight from "../../assets/exhibitors/be_the_right.png";

const ExhibitorsCta = () => {
    return (
        <>
            <section className="relative w-full overflow-hidden bg-[#fcfcf0] py-2 md:py-4">
                <img
                    src={beTheLeft.src}
                    alt=""
                    aria-hidden="true"
                    className="hidden md:block absolute left-0 bottom-0 h-56 lg:h-64 w-auto opacity-40 z-0"
                />
                <img
                    src={beTheRight.src}
                    alt=""
                    aria-hidden="true"
                    className="hidden md:block absolute right-0 top-0 h-56 lg:h-64 w-auto z-0"
                />
                <Reveal>
                    <div className="relative rounded-2xl p-6 sm:p-8 md:px-14 lg:px-20">
                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#3b8c2a]/5" />
                        <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-[#3b8c2a]/5" />
                        <div className="relative z-10 container mx-auto max-w-[1400px] flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="max-w-2xl text-center lg:text-left">
                                <p className="text-[#3b8c2a] text-[13px] md:text-[14px] font-semibold mb-1">
                                    These brands trust Bharat Organic Expo.
                                </p>
                                <h2 className="text-[26px] md:text-[34px] font-extrabold text-[#154726] leading-tight tracking-tight mb-2">
                                    Be the next success story.
                                </h2>
                                <p className="text-[#154726]/70 text-[15px] md:text-[16px] leading-relaxed max-w-2xl">
                                    Join India's most trusted platform for health, wellness and holistic living.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto flex-shrink-0">
                                <a
                                    href="/book-a-stand"
                                    className="group w-full sm:w-auto px-5 py-2.5 bg-[#F2B40E] hover:bg-[#ffc533] text-[#0b2912] rounded-md font-bold text-[11px] md:text-[12px] uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 whitespace-nowrap"
                                >
                                    Book Your Stall <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                                <a
                                    href="/pdf.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                    className="group w-full sm:w-auto px-5 py-2.5 bg-transparent hover:bg-[#2b5825]/5 text-[#2b5825] border-2 border-[#2b5825] rounded-md font-bold text-[11px] md:text-[12px] uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 whitespace-nowrap"
                                >
                                    Download Brochure <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            <section className="bg-[#0b2912] py-2 md:py-4">
                <div className="container mx-auto max-w-[1400px] px-6">
                    <div className="grid grid-cols-2 md:flex md:flex-nowrap justify-between items-center gap-y-4 gap-x-4">
                        {BOTTOM_STATS.map((stat, idx) => (
                            <Reveal key={stat.label} delay={idx * 70} direction={idx % 2 === 0 ? "zoom" : "up"} className="flex-1">
                                <div className="flex items-center gap-3 md:gap-4 justify-start">
                                    <div className="text-white shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-[#F2B40E]/25 flex items-center justify-center">
                                        <Leaf className="w-5 h-5 text-[#F2B40E]" />
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <span className="text-white text-[13px] md:text-[16px] font-extrabold leading-tight">{stat.value}</span>
                                        <span className="text-[#b8d9b9] text-[9px] md:text-[11px] leading-tight font-medium uppercase tracking-wide">{stat.label}</span>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ExhibitorsCta;