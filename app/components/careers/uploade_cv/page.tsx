"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
    ArrowRight,
    BriefcaseBusiness,
    ChartNoAxesColumnIncreasing,
    CheckCircle2,
    FileUp,
    GraduationCap,
    LockKeyhole,
    MapPin,
    X,
} from "lucide-react";
import businessPersonClean from "@/app/assets/carrer/business-person-clean.png";
import leafDecoration from "@/app/assets/carrer/leaf-decoration.jpg";

type Job = {
    title?: string;
    department?: string;
    description?: string;
    location?: string;
    type?: string;
    experience?: string;
};

const DESIGN_WIDTH = 1500;
const DESIGN_HEIGHT = 910;
const MODAL_WIDTH = "min(92vw, 1440px, calc(92vh * 1500 / 910))";

const jobCopy = {
    title: "Sales Manager – Domestic Exhibition Sales & Sponsorships",
    company: "Namo Gange Wellness Pvt. Ltd.",
    brand: "Bharat Organic Expo",
    opportunity:
        "Be a part of Bharat Organic Expo and help grow a movement for a healthier, more sustainable India. Drive exhibition stall/space sales and sponsorships, connect with leading brands, and build long-term partnerships.",
};

const responsibilities = [
    "Generate exhibitor and sponsorship sales",
    "Meet prospective clients and negotiate deals",
    "Manage the complete sales cycle from lead to booking",
    "Achieve monthly and exhibition-wise targets",
];

const applyCriteria = [
    "Graduate in any discipline (MBA/PGDM preferred)",
    "3 – 6 years in B2B sales / business development",
    "Exhibition / trade show sales experience (preferred)",
    "Strong communication and negotiation skills",
    "Based in Delhi NCR; travel as required",
];

function MetaItem({
    icon: Icon,
    children,
    last = false,
}: {
    icon: React.ElementType;
    children: React.ReactNode;
    last?: boolean;
}) {
    return (
        <div
            className={[
                "flex min-w-0 items-center gap-[12px] pr-[22px]",
                last ? "" : "border-r border-[#d8dfdf]",
            ].join(" ")}
        >
            <Icon className="h-[24px] w-[24px] shrink-0 text-[#006b48]" strokeWidth={2} />
            <span className="text-[14px] font-bold leading-tight text-[#173047]">{children}</span>
        </div>
    );
}

function LeafHeading({ title }: { title: string }) {
    return (
        <div className="flex items-center gap-[16px]">
            <span className="relative h-[27px] w-[27px] shrink-0">
                <span className="absolute left-[2px] top-[3px] h-[22px] w-[13px] rotate-[-38deg] rounded-[100%_0_100%_0] bg-[#78b523]" />
                <span className="absolute left-[14px] top-[15px] h-[11px] w-px rotate-[-42deg] bg-[#0c7547]" />
            </span>
            <h3 className="text-[22px] font-black leading-none text-[#00563f]">{title}</h3>
        </div>
    );
}

function InfoSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section>
            <LeafHeading title={title} />
            <div className="ml-[43px] mt-[9px] text-[15.8px] leading-[1.42] text-[#21354b]">
                {children}
            </div>
        </section>
    );
}

function UploadBox({ onFile }: { onFile: (file: File) => void }) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState("");

    const chooseFile = () => inputRef.current?.click();
    const setSelectedFile = (file: File) => {
        setFileName(file.name);
        onFile(file);
    };

    return (
        <div
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
                event.preventDefault();
                const file = event.dataTransfer.files?.[0];
                if (file) setSelectedFile(file);
            }}
            className="rounded-[12px] border border-dashed border-[#9bc7b1] bg-white/45 px-[24px] py-[17px] text-center"
        >
            <input
                ref={inputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) setSelectedFile(file);
                }}
            />

            <FileUp className="mx-auto h-[52px] w-[52px] text-[#007a50]" strokeWidth={2.3} />
            <h3 className="mt-[10px] text-[20px] font-black leading-none text-[#152840]">
                Upload Your CV
            </h3>
            <p className="mt-[9px] text-[15px] leading-[1.25] text-[#42546b]">
                Drag & drop your file here or click to browse
                <br />
                PDF, DOC or DOCX (Max 5 MB)
            </p>
            {fileName && (
                <p className="mx-auto mt-[9px] max-w-[310px] truncate text-[13px] font-bold text-[#007a50]">
                    {fileName}
                </p>
            )}
            <button
                type="button"
                onClick={chooseFile}
                className="mt-[13px] h-[48px] w-[260px] rounded-[7px] bg-[linear-gradient(180deg,#008d55,#007346)] text-[18px] font-black text-white shadow-[0_5px_10px_rgba(0,84,51,0.18)]"
            >
                Choose File
            </button>
        </div>
    );
}

export default function UploadCvModal({
    job,
    onClose,
}: {
    job?: Job;
    onClose: () => void;
}) {
    const [file, setFile] = useState<File | null>(null);
    const title = job?.title?.includes("Domastic")
        ? jobCopy.title
        : job?.title || jobCopy.title;

    if (!job) return null;

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3">
            <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[5px]" onClick={onClose} />

            <div
                className="relative overflow-hidden rounded-[18px] bg-[#fbfcf9] shadow-[0_30px_90px_rgba(0,0,0,0.28)]"
                style={{
                    width: MODAL_WIDTH,
                    aspectRatio: `${DESIGN_WIDTH} / ${DESIGN_HEIGHT}`,
                }}
            >
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="absolute left-0 top-0 grid overflow-hidden bg-[#fbfcf9]"
                        style={{
                            width: `${DESIGN_WIDTH}px`,
                            height: `${DESIGN_HEIGHT}px`,
                            gridTemplateColumns: "65% 35%",
                            transform: `scale(calc(${MODAL_WIDTH} / ${DESIGN_WIDTH}px))`,
                            transformOrigin: "top left",
                        }}
                    >
                        <button
                            type="button"
                            aria-label="Close"
                            onClick={onClose}
                            className="absolute right-[15px] top-[15px] z-40 grid h-[42px] w-[42px] place-items-center text-[#0d1e35] transition hover:text-[#006b48]"
                        >
                            <X className="h-[30px] w-[30px]" strokeWidth={2.5} />
                        </button>

                        <section className="relative overflow-hidden bg-white px-[45px] py-[42px]">
                            <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[300px]">
                                <Image
                                    src={businessPersonClean}
                                    alt=""
                                    fill
                                    priority
                                    sizes="300px"
                                    className="object-fill"
                                />
                            </div>

                            <div className="relative z-10 max-w-[635px]">
                                <div className="flex items-center gap-[13px]">
                                    <span className="h-[3px] w-[55px] bg-[#0b734d]/70" />
                                    <span className="text-[20px] font-black tracking-[0.36em] text-[#00563f]">
                                        JOIN OUR TEAM
                                    </span>
                                    <span className="h-[3px] w-[55px] bg-[#0b734d]/70" />
                                </div>

                                <h1 className="mt-[17px] max-w-[635px] text-[37px] font-black leading-[1.08] tracking-[-0.03em] text-[#043f3d]">
                                    {title}
                                </h1>

                                <div className="mt-[15px] flex items-center gap-[18px] text-[17px] leading-none text-[#263b53]">
                                    <span>{jobCopy.company}</span>
                                    <span className="h-[25px] w-px bg-[#d4dadd]" />
                                    <span>{jobCopy.brand}</span>
                                </div>

                                <div className="mt-[26px] flex items-center gap-[15px] border-b border-[#dce2e3] pb-[25px]">
                                    <MetaItem icon={MapPin}>{job.location || "Delhi NCR"}</MetaItem>
                                    <MetaItem icon={BriefcaseBusiness}>{job.type || "Full Time"}</MetaItem>
                                    <MetaItem icon={ChartNoAxesColumnIncreasing}>
                                        {job.experience || "3 – 6 Years"}
                                    </MetaItem>
                                    <MetaItem icon={GraduationCap} last>
                                        <span>
                                            Graduate
                                            <br />
                                            <span className="text-[11px] font-medium">(MBA/PGDM Preferred)</span>
                                        </span>
                                    </MetaItem>
                                </div>

                                <div className="mt-[22px] space-y-[27px]">
                                    <InfoSection title="The Opportunity">
                                        <p>{jobCopy.opportunity}</p>
                                    </InfoSection>

                                    <InfoSection title="Key Responsibilities">
                                        <ul className="list-disc space-y-[7px] pl-[21px] marker:text-[#006b48]">
                                            {responsibilities.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </InfoSection>

                                    <InfoSection title="Who Can Apply">
                                        <ul className="list-disc space-y-[7px] pl-[21px] marker:text-[#006b48]">
                                            {applyCriteria.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </InfoSection>
                                </div>

                                <button
                                    type="button"
                                    className="mt-[25px] inline-flex items-center gap-[13px] border-b-2 border-[#007a50] pb-[5px] text-[17px] font-black text-[#006342]"
                                >
                                    View Full Job Details
                                    <ArrowRight className="h-[24px] w-[24px]" />
                                </button>
                            </div>
                        </section>

                        <aside className="relative overflow-hidden bg-[#f2f9f3] px-[43px] py-[40px]">
                            <div className="pointer-events-none absolute bottom-0 right-0 h-[160px] w-[220px]">
                                <Image
                                    src="/separated-assets/bottom.png"
                                    alt="Leaf decoration"
                                    fill
                                    sizes="220px"
                                    className="object-contain object-bottom-right"
                                />
                            </div>

                            <div className="relative z-10">
                                <div className="text-[17px] font-black tracking-[0.34em] text-[#00563f]">
                                    LET AI HELP YOU
                                </div>
                                <h2 className="mt-[12px] text-[32px] font-black leading-[1.03] tracking-[-0.04em] text-[#10243f]">
                                    Check Your Eligibility
                                    <br />
                                    <span className="text-[#007a50]">with AI</span>
                                </h2>
                                <p className="mt-[12px] text-[17px] leading-[1.25] text-[#354b63]">
                                    Upload your CV and get an instant analysis
                                    <br />
                                    of how well your profile matches this position.
                                </p>

                                <div className="mt-[16px]">
                                    <UploadBox onFile={setFile} />
                                </div>

                                <div className="mt-[15px]">
                                    <h3 className="text-[18px] font-black text-[#00563f]">AI will check:</h3>
                                    <ul className="mt-[9px] space-y-[7px] text-[15.5px] leading-none text-[#253950]">
                                        {[
                                            "Relevant experience",
                                            "Exhibition / Trade show sales experience",
                                            "Key skills and qualifications",
                                            "Overall profile match",
                                        ].map((item) => (
                                            <li key={item} className="flex items-center gap-[11px]">
                                                <CheckCircle2 className="h-[20px] w-[20px] shrink-0 fill-[#007a50] text-white" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-[15px] flex items-center gap-[22px] rounded-[8px] bg-[#e1f4e6] px-[16px] py-[10px]">
                                    <div
                                        className="relative grid h-[90px] w-[90px] shrink-0 place-items-center rounded-full"
                                        style={{
                                            background:
                                                "conic-gradient(#2fb734 0deg 144deg,#cbd0d4 144deg 360deg)",
                                        }}
                                    >
                                        <div className="absolute inset-[12px] rounded-full bg-white" />
                                        <span className="relative text-[27px] font-black text-[#12334a]">40%</span>
                                    </div>

                                    <div>
                                        <p className="text-[21px] font-black leading-[1.15] text-[#007a50]">
                                            40% or above
                                            <br />= Eligible to Apply
                                        </p>
                                        <p className="mt-[9px] text-[14.5px] leading-[1.3] text-[#42566c]">
                                            Even if your score is lower, you may
                                            <br />
                                            still reach out to us for future opportunities.
                                        </p>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => {
                                        if (!file) document.querySelector<HTMLInputElement>('input[type="file"]')?.click();
                                    }}
                                    className="mt-[12px] flex h-[55px] w-full items-center justify-center gap-[18px] rounded-[7px] bg-[linear-gradient(180deg,#008d55,#007346)] text-[21px] font-black text-white shadow-[0_7px_13px_rgba(0,84,51,0.22)]"
                                >
                                    Analyze My CV
                                    <ArrowRight className="h-[29px] w-[29px]" />
                                </button>

                                <div className="relative z-10 mt-[13px] flex items-center gap-[10px] text-[12px] text-[#526174]">
                                    <LockKeyhole className="h-[20px] w-[20px] shrink-0 fill-[#007a50] text-white" />
                                    Your data is secure and will only be used for recruitment purposes.
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
}
