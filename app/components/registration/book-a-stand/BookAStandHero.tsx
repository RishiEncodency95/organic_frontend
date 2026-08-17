import React from "react";
import bgImg from "../../../assets/registration/book_a_stand.png";
import { Users, Store, Megaphone, Handshake } from "lucide-react";

const BookAStandHero = () => {
    return (
        <section
            className="hero-background-registration relative overflow-hidden !aspect-auto md:!aspect-[16/5] !h-auto md:!h-auto py-6 md:py-0"
            style={{
                backgroundImage: `url(${bgImg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'left',
                backgroundRepeat: 'no-repeat',
                fontFamily: "'Barlow', sans-serif",
            }}
        >
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="w-full">
                    <div className="relative z-10 py-6 md:py-12 flex flex-col gap-2 w-full md:w-[60%] lg:w-[55%] bg-black/40 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none">

                        {/* Register as a Buyer */}
                        <div className="inline-block mt-4 px-4 py-1 bg-[#a8d060]/15 border border-[#a8d060]/40 rounded-lg text-[#a8d060] text-xs font-bold uppercase tracking-[0.2em] w-fit backdrop-blur-sm shadow-[0_0_20px_rgba(168,208,96,0.2)]">
                            Exhibition stall booking
                        </div>

                        {/* Main Heading */}
                        <div className="mt-2 mb-3">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] md:leading-tight tracking-tight uppercase">
                                Book Your <br />
                                Exhibition <span className="text-[#a8d060]">Stand</span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-lg mb-6">
                            Showcase your organic products & innovations to 15,000+ industry professionals—fill the form and get a customized stall for your brand.
                        </p>

                        {/* Stats Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-2 md:gap-x-1.5 mt-4 w-fit">
                            {[
                                {
                                    label: '15,000+ Industry\nProfessionals',
                                    icon: <Users className="w-4 h-4 md:w-5 md:h-5 text-[#a8d060]" strokeWidth={2} />
                                },
                                {
                                    label: 'Custom Stall\nSolutions',
                                    icon: <Store className="w-4 h-4 md:w-5 md:h-5 text-[#a8d060]" strokeWidth={2} />
                                },
                                {
                                    label: 'Maximum Brand\nVisibility',
                                    icon: <Megaphone className="w-4 h-4 md:w-5 md:h-5 text-[#a8d060]" strokeWidth={2} />
                                },
                                {
                                    label: 'B2B Networking\n& Partnerships',
                                    icon: <Handshake className="w-4 h-4 md:w-5 md:h-5 text-[#a8d060]" strokeWidth={2} />
                                },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-2 md:p-1.5 backdrop-blur-md shadow-lg transition-all duration-300 cursor-default w-full max-w-[260px]"
                                >
                                    <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#a8d060]/15 border border-[#a8d060]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_15px_rgba(168,208,96,0.1)]">
                                        {stat.icon}
                                    </div>
                                    <div className="text-[10px] md:text-[13px] lg:text-[14px] font-medium text-white/95 leading-tight whitespace-pre-line break-words sm:mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5">
                            <button className="flex items-center gap-3 bg-[#4a8f2f] hover:bg-[#3d7a26] text-white px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md transition-all duration-300 hover:scale-[1.03]">
                                Book Your Stall Now
                                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-[#4a8f2f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M13 6l6 6-6 6" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                    </div>

                    <div className="w-[40%]">
                        {/* <img loading="lazy" decoding="async" src="/bsmeet/bsherob.webp" alt="" /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(BookAStandHero);
