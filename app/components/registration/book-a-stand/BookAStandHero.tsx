import React from "react";
import bgImg from "../../../assets/registration/book_a_stand.png";

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
            <div className="w-full px-4 lg:px-11">
                <div className="w-full">
                    <div className="relative z-10 py-6 md:py-12 flex flex-col gap-2 w-full md:w-[60%] lg:w-[55%] bg-black/40 md:bg-transparent p-4 md:p-0 rounded-2xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none">

                        {/* Tagline Highlight */}
                        <div className="flex items-center justify-start gap-2.5 mt-4 mb-1">
                            <span className="w-8 h-[2.5px] bg-[#ea580c] shrink-0" />
                            <p className="text-[#ea580c] text-[12px] sm:text-[13px] md:text-[15px] font-bold uppercase tracking-[0.18em] text-left">
                                EXHIBITION STALL BOOKING
                            </p>
                            <span className="w-8 h-[2.5px] bg-[#ea580c] shrink-0" />
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
