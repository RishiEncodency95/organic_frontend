import React from "react";
import Image from "next/image";
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

// Placeholder for board members. The user can replace with actual images.
const placeholderImg = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop";

const boardMembers = [
    {
        name: "Prof. Dr. G.S. Tomar",
        designation: "PRESIDENT",
        organization: "International President of Vishwa Ayurveda Mission, National Vice-President Arogya Bharti.",
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
        <section className="w-full py-2 md:py-6 bg-[#FAF7EF]">
            <div className="w-full px-5 lg:px-11">

                {/* Section header — a pressed-seal mark rather than a pill badge,
                    echoing the certificate/charter language of institutional trust. */}
                <div className="w-full flex flex-col items-center text-center mb-4 md:mb-6">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-[2px] bg-[#f97316]"></div>
                        <Leaf size={14} className="text-[#3b8c2a] fill-[#3b8c2a]" />
                        <span className="text-[#f97316] text-[12px] md:text-[14px] font-bold tracking-[0.2em] uppercase">
                            Vishwa Ayurveda Mission
                        </span>
                        <Leaf size={14} className="text-[#3b8c2a] fill-[#3b8c2a]" />
                        <div className="w-10 h-[2px] bg-[#f97316]"></div>
                    </div>
                    <h2 className="font-serif text-[#113d29] font-semibold text-[22px] sm:text-[24px] lg:text-[28px] leading-[1.2] tracking-tight">
                        Our Esteemed Advisory Board
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
                    {boardMembers.map((member, index) => (
                        <article
                            key={index}
                            className="group relative flex flex-col bg-white rounded-[4px] border border-[#173822]/10 overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_40px_-16px_rgba(23,56,34,0.25)]"
                        >
                            {/* Portrait */}
                            <div className="relative w-full aspect-square overflow-hidden bg-[#EFE9D8]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover object-top grayscale-[15%] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2417]/85 via-[#0F2417]/10 to-transparent" />

                                {/* Designation sits on the image, seal-style */}
                                {member.designation && (
                                    <span className="absolute left-4 bottom-4 inline-flex items-center text-[14px] font-bold tracking-[0.18em] uppercase text-[#F4E3A1] border-l-2 border-[#C9982E] pl-2">
                                        {member.designation}
                                    </span>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow px-4 pt-3 pb-3">
                                <h3 className="font-serif text-[#173822] text-[17px] leading-snug mb-1 line-clamp-2">
                                    {member.name}
                                </h3>

                                <p className="text-[#5b6b5e] text-[13px] leading-relaxed mb-2 flex-grow line-clamp-2">
                                    {member.organization || "\u00A0"}
                                </p>

                                <div className="flex items-center justify-between pt-3 mt-1 border-t border-[#173822]/8">
                                    <span className="flex items-center gap-1.5 text-[#5b6b5e] text-[13px] font-semibold">
                                        <MapPin size={18} className="text-[#C9982E]" />
                                        {member.location}
                                    </span>

                                    <button
                                        type="button"
                                        className="flex items-center gap-1 text-[#173822] text-[14px] font-semibold tracking-wide hover:text-[#C9982E] transition-colors"
                                    >
                                        View profile
                                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AdvisoryBoardGrid;