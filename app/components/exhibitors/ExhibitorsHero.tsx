import React, { useRef } from "react";
import {
    Leaf,
    Users,
    Handshake,
    Globe2,
    Store,
} from "lucide-react";

import { Reveal } from "../shared/Reveal";
import { HERO_STATS } from "./data";

import bannerLeft from "../../assets/exhibitors/banner_left.png";
import bannerRight from "../../assets/exhibitors/banner_right.png";

const ExhibitorsHero = () => {
    const heroRef = useRef<HTMLElement>(null);

    /* -------------------------------------------------------------
       Mouse based 3D parallax
    ------------------------------------------------------------- */

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const hero = heroRef.current;

        if (!hero) return;

        const rect = hero.getBoundingClientRect();

        const mouseX =
            (e.clientX - rect.left) / rect.width - 0.5;

        const mouseY =
            (e.clientY - rect.top) / rect.height - 0.5;

        hero.style.setProperty(
            "--mouse-x",
            mouseX.toString()
        );

        hero.style.setProperty(
            "--mouse-y",
            mouseY.toString()
        );
    };

    const handleMouseLeave = () => {
        const hero = heroRef.current;

        if (!hero) return;

        hero.style.setProperty("--mouse-x", "0");
        hero.style.setProperty("--mouse-y", "0");
    };

    /* -------------------------------------------------------------
       Stat Icons
    ------------------------------------------------------------- */

    const statIcons = [
        Store,
        Users,
        Handshake,
        Globe2,
    ];

    return (
        <section
            ref={heroRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="
                relative
                w-full
                overflow-hidden
                isolate
                bg-[#fcfcf0]

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
                    absolute
                    inset-0
                    pointer-events-none
                    overflow-hidden
                "
            >

                {/* Main green glow */}

                <div
                    className="
                        absolute
                        -top-40
                        -left-32
                        w-[520px]
                        h-[520px]
                        rounded-full
                        bg-[#3e9b37]/20
                        blur-[110px]
                    "
                />

                {/* Bottom lime glow */}

                <div
                    className="
                        absolute
                        -bottom-40
                        left-[30%]
                        w-[500px]
                        h-[500px]
                        rounded-full
                        bg-[#a8cf22]/10
                        blur-[120px]
                    "
                />

                {/* Golden glow */}

                <div
                    className="
                        absolute
                        top-[18%]
                        right-[25%]
                        w-[320px]
                        h-[320px]
                        rounded-full
                        bg-[#f2b40e]/[0.06]
                        blur-[100px]
                    "
                />

                {/* Very subtle organic texture */}

                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.035]
                        bg-[radial-gradient(circle_at_20%_30%,white_1px,transparent_1px)]
                        bg-[length:26px_26px]
                    "
                />

                {/* Soft right side gradient */}

                <div
                    className="
                        absolute
                    inset-y-0
                    right-0
                    w-[65%]
                    bg-gradient-to-l
                    from-[#3b8c2a]/10
                    via-transparent
                    to-transparent
                "
            />
            </div>


            {/* =====================================================
                LEFT DECORATIVE IMAGE
            ===================================================== */}

            <img
                src={bannerLeft.src}
                alt=""
                aria-hidden="true"
                className="
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

                    animate-[sideFloat_7s_ease-in-out_infinite]
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

                    {/* =============================================
                        TRUST BADGE
                    ============================================= */}

                    <Reveal>

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

                    </Reveal>


                    {/* =============================================
                        MAIN HEADING
                    ============================================= */}

                    <Reveal delay={100}>

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

                            <span className="text-[#154726]">
                                Health &amp; Wellness Brands
                            </span>

                        </h1>

                    </Reveal>


                    {/* =============================================
                        DESCRIPTION
                    ============================================= */}

                    <Reveal delay={180}>

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

                    </Reveal>


                    {/* =============================================
                        STATISTICS
                    ============================================= */}

                    <Reveal delay={260}>

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
                                                group

                                                flex
                                                flex-col
                                                gap-2

                                                transition-all
                                                duration-500

                                                hover:-translate-y-1
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

                                                    transition-all
                                                    duration-500

                                                    group-hover:scale-110
                                                    group-hover:rotate-[-5deg]
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

                    </Reveal>

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

                    {/* =============================================
                        IMAGE GLOW
                    ============================================= */}

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


                    {/* =============================================
                        3D IMAGE WRAPPER
                    ============================================= */}

                    <div
                        className="
                            absolute
                            inset-0

                            flex
                            items-center
                            justify-end
                        "
                        style={{
                            transform: `
                                translate3d(
                                    calc(var(--mouse-x, 0) * 12px),
                                    calc(var(--mouse-y, 0) * 10px),
                                    0
                                )

                                rotateY(
                                    calc(var(--mouse-x, 0) * -4deg)
                                )

                                rotateX(
                                    calc(var(--mouse-y, 0) * 2deg)
                                )
                            `,
                            transition:
                                "transform 0.25s cubic-bezier(.2,.8,.2,1)",
                        }}
                    >

                        <img
                            src={bannerRight.src}
                            alt="Bharat Organic Expo exhibitors"
                            className="
                                relative

                                w-full
                                h-auto

                                object-contain

                                origin-center

                                drop-shadow-[-25px_30px_50px_rgba(0,0,0,0.30)]

                                animate-[heroFloat_7s_ease-in-out_infinite]
                            "
                        />

                    </div>

                </div>


                {/* =================================================
                    SMALL GOLD PARTICLES
                ================================================= */}

                <div
                    className="
                        absolute
                        right-[38%]
                        top-[25%]

                        w-2
                        h-2

                        rounded-full

                        bg-[#f2b40e]

                        shadow-[0_0_15px_rgba(242,180,14,0.8)]

                        animate-[particleOne_4s_ease-in-out_infinite]
                    "
                />

                <div
                    className="
                        absolute
                        right-[31%]
                        top-[38%]

                        w-1.5
                        h-1.5

                        rounded-full

                        bg-[#d7ed58]

                        shadow-[0_0_12px_rgba(215,237,88,0.8)]

                        animate-[particleTwo_5s_ease-in-out_infinite]
                    "
                />

                <div
                    className="
                        absolute
                        right-[45%]
                        bottom-[28%]

                        w-1.5
                        h-1.5

                        rounded-full

                        bg-[#f2b40e]

                        shadow-[0_0_12px_rgba(242,180,14,0.8)]

                        animate-[particleThree_6s_ease-in-out_infinite]
                    "
                />

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
                    from-[#fcfcf0]/80
                    to-transparent

                    pointer-events-none

                    z-30
                "
            />


            {/* =====================================================
                ANIMATIONS
            ===================================================== */}

            <style>{`

                /* -----------------------------------------------
                   Main exhibition image floating animation
                ----------------------------------------------- */

                @keyframes heroFloat {

                    0%,
                    100% {
                        transform:
                            translate3d(0, 0, 0)
                            rotateZ(0deg);
                    }

                    50% {
                        transform:
                            translate3d(0, -10px, 0)
                            rotateZ(0.25deg);
                    }
                }


                /* -----------------------------------------------
                   Side decorative image
                ----------------------------------------------- */

                @keyframes sideFloat {

                    0%,
                    100% {
                        transform:
                            translateX(0);
                    }

                    50% {
                        transform:
                            translateX(7px)
                            translateY(10px);
                    }
                }


                /* -----------------------------------------------
                   Floating leaves
                ----------------------------------------------- */

                /* -----------------------------------------------
                   Floating particles
                ----------------------------------------------- */

                @keyframes particleOne {

                    0%,
                    100% {
                        opacity: 0.3;
                        transform: translate(0, 0) scale(1);
                    }

                    50% {
                        opacity: 1;
                        transform: translate(10px, -18px) scale(1.5);
                    }
                }


                @keyframes particleTwo {

                    0%,
                    100% {
                        opacity: 0.2;
                        transform: translate(0, 0);
                    }

                    50% {
                        opacity: 1;
                        transform: translate(-12px, 12px);
                    }
                }


                @keyframes particleThree {

                    0%,
                    100% {
                        opacity: 0.25;
                        transform: translate(0, 0) scale(1);
                    }

                    50% {
                        opacity: 1;
                        transform: translate(15px, -10px) scale(1.4);
                    }
                }


                /* -----------------------------------------------
                   Accessibility
                ----------------------------------------------- */

                @media (prefers-reduced-motion: reduce) {

                    *,
                    *::before,
                    *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }


                /* -----------------------------------------------
                   Tablet
                ----------------------------------------------- */

                @media (max-width: 1023px) {

                    section img[alt="Bharat Organic Expo exhibitors"] {
                        opacity: 0.42;
                    }
                }


                /* -----------------------------------------------
                   Mobile
                ----------------------------------------------- */

                @media (max-width: 767px) {

                    section img[alt="Bharat Organic Expo exhibitors"] {
                        opacity: 0.16;
                    }
                }

            `}</style>

        </section>
    );
};

export default ExhibitorsHero;