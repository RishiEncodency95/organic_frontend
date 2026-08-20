import React from "react";
import { Leaf, ArrowUpRight, MapPin } from "lucide-react";
import tomarImg from "../../../assets/about/advisory_board_member/tomar.png";
import pradeepImg from "../../../assets/about/advisory_board_member/pradeep.png";
import nareshImg from "../../../assets/about/advisory_board_member/naresh.png";
import kamleshImg from "../../../assets/about/advisory_board_member/kamlesh.png";
import atulImg from "../../../assets/about/advisory_board_member/atul.png";
import sandeepImg from "../../../assets/about/advisory_board_member/sandeep.png";
import jagdishImg from "../../../assets/about/advisory_board_member/jagdish.png";
import dnsharmaImg from "../../../assets/about/advisory_board_member/dnsharma.png";
import rohitImg from "../../../assets/about/advisory_board_member/rohit.png";

import SectionContainer from "@/app/components/layout/SectionContainer";

const boardMembers = [
    {
        name: "Prof. Dr. G.S. Tomar",
        designation: "PRESIDENT",
        organization: "International President of Our Ayurveda Mission, National Vice-President Arogya Bharti.",
        location: "India",
        image: tomarImg.src,
    },
    {
        name: "Professor (Vd.) Pradeep Kumar Prajapati",
        designation: "DIRECTOR",
        organization: "All India Institute of Ayurveda (AIIA)",
        location: "India",
        image: pradeepImg.src,
    },
    {
        name: "Dr. Naresh Kumar Chhavania",
        designation: "PRESIDENT",
        organization: "IMA AYUS",
        location: "India",
        image: nareshImg.src,
    },
    {
        name: "Dr. Kamlesh Kumar Dwivedi",
        designation: "MEMBER OF THE BOARD OF AYURVEDA",
        organization: "National Commission for Indian System of Medicine (NCISM), Ministry of Ayush",
        location: "India",
        image: kamleshImg.src,
    },
    {
        name: "Prof. (Dr.) Atul Babu Varshney",
        designation: "MEMBER OF THE BOARD OF AYURVEDA",
        organization: "National Commission for Indian System of Medicine (NCISM), Ministry of Ayush",
        location: "India",
        image: atulImg.src,
    },
    {
        name: "Dr. Sandeep Marwah",
        designation: "FOUNDER OF NOIDA FILM CITY",
        organization: "Marwah Studios",
        location: "India",
        image: sandeepImg.src,
    },
    {
        name: "ACHARYA SHRI JAGDISHJI MAHARAJ",
        designation: "FOUNDER OF NAMO GANGE TRUST",
        organization: "",
        location: "India",
        image: jagdishImg.src,
    },
    {
        name: "Dr. D.N. Sharma",
        designation: "VICE PRESIDENT",
        organization: "International Naturopathy Organisation (INO)",
        location: "India",
        image: dnsharmaImg.src,
    },
    {
        name: "Dr. Rohit Bhandari",
        designation: "FOUNDER & DIRECTOR",
        organization: "The Homeo Healers Homeopathy Worldwide",
        location: "India",
        image: rohitImg.src,
    }
];

const AdvisoryBoardGrid = () => {
    return (
        <section className="w-full py-6 md:py-6 bg-[#FAF7EF] font-inter relative overflow-hidden">
            <style>{`
                @keyframes marqueeScrollRTL {
                    0% { transform: translate3d(0, 0, 0); }
                    100% { transform: translate3d(-50%, 0, 0); }
                }
                .marquee-wrapper-board {
                    display: flex;
                    width: max-content;
                    will-change: transform;
                    animation: marqueeScrollRTL 120s linear infinite;
                }
                .marquee-wrapper-board:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <SectionContainer className="relative z-10">

                {/* Section header */}
                <div className="w-full flex flex-col items-center text-center ">
                    <span className="flex items-center gap-2 text-[#d26019] text-[15px] md:text-[17px] font-semibold tracking-[0.18em] uppercase mb-2 font-poppins">
                        <Leaf size={16} strokeWidth={2.2} className="text-[#3b8c2a] fill-[#3b8c2a]" />
                        Our Ayurveda Mission
                        <Leaf size={16} strokeWidth={2.2} className="text-[#3b8c2a] fill-[#3b8c2a]" />
                    </span>
                    <h2 className="font-poppins font-semibold text-[#23471d] text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.2]">
                        Our Esteemed Advisory Board
                    </h2>
                    <div className="mt-2 h-px w-20 bg-gradient-to-r from-transparent via-[#d26019] to-transparent" />
                </div>
                <div className="w-full overflow-hidden mt-2 relative z-10">
                    <div className="marquee-wrapper-board gap-4 py-4">
                        {[1, 2, 3, 4].map((set) => (
                            <div key={set} className="flex gap-2 pr-4">
                                {boardMembers.map((member, index) => (
                                    <article
                                        key={`${set}-${index}`}
                                        className="w-[240px] flex-shrink-0 group relative flex flex-col bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-gray-100"
                                        style={{ boxShadow: "rgba(0, 0, 0, 0.04) 0px 4px 12px" }}
                                    >
                                        {/* Portrait */}
                                        <div className="relative w-full aspect-[4/3.5] overflow-hidden bg-gray-50 border-b border-gray-100">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                            />

                                            {/* Designation Badge */}
                                            {member.designation && (
                                                <div className="absolute bottom-2 left-2">
                                                    <span className="inline-flex items-center text-[10.5px] font-semibold tracking-wider uppercase text-white bg-[#23471d]/90 backdrop-blur-md px-2.5 py-1 rounded shadow-sm font-poppins">
                                                        {member.designation}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col p-4 flex-grow text-left">
                                            <h3 className="font-poppins font-semibold text-[#23471d] text-[17px] leading-snug mb-1.5 line-clamp-2">
                                                {member.name}
                                            </h3>

                                            <p className="text-[#4B1426] font-medium text-[13px] leading-relaxed mb-4 flex-grow font-inter line-clamp-4">
                                                {member.organization || "\u00A0"}
                                            </p>

                                            <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                                                <span className="flex items-center gap-1.5 text-gray-500 text-[12px] font-medium font-inter">
                                                    <MapPin size={14} className="text-[#d26019]" />
                                                    {member.location}
                                                </span>

                                                <button
                                                    type="button"
                                                    className="flex items-center gap-1 text-[#23471d] text-[12.5px] font-semibold hover:text-[#d26019] transition-colors"
                                                >
                                                    View Profile
                                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
};

export default AdvisoryBoardGrid;