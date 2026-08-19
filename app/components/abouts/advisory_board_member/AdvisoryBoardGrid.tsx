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
        <section className="w-full py-6 md:py-8 bg-[#FAF7EF] font-inter">
            <SectionContainer>

                {/* Section header */}
                <div className="w-full flex flex-col items-center text-center mb-4 md:mb-6">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                    {boardMembers.map((member, index) => (
                        <article
                            key={index}
                            className="group relative flex flex-col bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
                            style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
                        >
                            {/* Portrait without overlay */}
                            <div className="relative w-full aspect-[4/4.2] overflow-hidden bg-gray-100">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-all duration-700 ease-out"
                                />

                                {/* Designation sits on the image with solid badge */}
                                {member.designation && (
                                    <span className="absolute left-2 bottom-2 inline-flex items-center text-[9px] font-bold tracking-[0.1em] uppercase text-white bg-[#23471d]/90 backdrop-blur-sm px-2 py-0.5 rounded font-poppins shadow-sm">
                                        {member.designation}
                                    </span>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow p-3">
                                <h3 className="font-poppins font-semibold text-[#23471d] text-[13px] sm:text-[14px] leading-tight mb-1 line-clamp-2">
                                    {member.name}
                                </h3>

                                <p className="text-[#4B1426] font-medium text-[11px] leading-snug mb-2 flex-grow line-clamp-3 font-inter">
                                    {member.organization || "\u00A0"}
                                </p>

                                <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                                    <span className="flex items-center gap-1 text-gray-600 text-[11px] font-semibold font-inter">
                                        <MapPin size={13} className="text-[#d26019]" />
                                        {member.location}
                                    </span>

                                    <button
                                        type="button"
                                        className="flex items-center gap-0.5 text-[#23471d] text-[11px] font-semibold tracking-wide hover:text-[#d26019] transition-colors font-inter"
                                    >
                                        View profile
                                        <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </SectionContainer>
        </section>
    );
};

export default AdvisoryBoardGrid;