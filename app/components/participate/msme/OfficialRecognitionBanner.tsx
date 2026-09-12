"use client";
import {
  Award,
  CalendarDays,
  MapPin,
  FileSearch,
  Download,
  ShieldCheck,
  Building2,
  CheckCircle,
  Check,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import govApproved from "@/app/assets/participate/msme/government_approved.png";
import supportImg from "@/app/assets/participate/msme/support.png";
import applicableImg from "@/app/assets/participate/msme/applicable.png";
import secureImg from "@/app/assets/participate/msme/secure.png";
import leafRecognition from "@/app/assets/participate/msme/bharat_recognition_leaf.png";
import ashokaImg from "@/app/assets/participate/msme/ashoka.png";
import stampImg from "@/app/assets/participate/msme/stamp.png";
import leafsImg from "@/app/assets/participate/msme/bharat_organic.png";
import awardImg from "@/app/assets/participate/msme/award.png";
import approvedImg from "@/app/assets/participate/msme/approved.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

const LeafIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C12 2 12 12 17 12C22 12 22 2 22 2C22 2 12 2 12 2Z"
      fill="#387f39"
    />
    <path
      d="M12 22C12 22 12 12 7 12C2 12 2 22 2 22C2 22 12 22 12 22Z"
      fill="#4ade80"
      opacity="0.8"
    />
    <path
      d="M12 2V22"
      stroke="#166534"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const SignaturePlaceholder = () => (
  <div className="h-6 w-16 border-b border-gray-400/50 mb-0.5 flex items-end justify-center">
    <span className="font-['Brush_Script_MT',cursive] text-[20px] text-gray-600 -rotate-3">
      Signature
    </span>
  </div>
);

const OFFICIAL_RECOGNITION_DATA = [
  {
    id: 1,
    sectionTitle: "OFFICIAL RECOGNITION",
    headingMain: "Bharat Organic Expo",
    headingSub: "Approved under PMS*",
    descriptionText: "Bharat Organic Expo 2027 has received approval/sanction under the applicable Procurement & Marketing Support (PMS) Scheme component, enabling eligible participating MSMEs to apply for applicable exhibition assistance subject to PMS guidelines and individual eligibility.",
    featureGrid: [
      { id: 1, text1: "Government Approved", text2: "Exhibition", icon: govApproved },
      { id: 2, text1: "Support for", text2: "MSME Growth", icon: supportImg },
      { id: 3, text1: "Applicable for Eligible", text2: "MSMEs Only", icon: applicableImg }
    ],
    ctaBtnText: "View Official Approval",
    ctaLinkText: "Know more about PMS Scheme →",
    ctaHref: "/participate/msme/apply/payment",
    approvalCard: {
      badgeTitle: "MSME PMS APPROVED EVENT",
      eventNameLine1: "BHARAT",
      eventNameLine2: "ORGANIC EXPO",
      eventNameLine3: "2027",
      date: "19–21 FEBRUARY 2027",
      venue: "BHARAT MANDAPAM, NEW DELHI",
      details: [
        { id: "sanctionNo", label: "Approval / Sanction No.", value: "Approval Pending", icon: FileSearch },
        { id: "issuedBy", label: "Issued By", value: "Approval Pending", icon: Building2 },
        { id: "approvalDate", label: "Approval Date", value: "Approval Pending", icon: CalendarDays }
      ]
    },
    certificate: {
      comingSoonText: "Coming Soon",
      refNo: "PMS/DFO-DELHI/2024-25/487",
      refDate: "18.04.2024",
      title: "To Whomsoever It May Concern",
      pdfUrl: "/download/MSME_Approval_Letter.pdf"
    },
    disclaimerText: "Event approval does not guarantee reimbursement. Individual eligibility, documentation and final sanction are subject to applicable PMS Scheme guidelines and decision of the competent authority."
  }
];

export default function OfficialRecognitionBanner() {
  return (
    <section
      aria-labelledby="official-recognition-heading"
      className="w-full py-8 font-inter relative overflow-hidden transition-all duration-500 bg-[#fdfcf9]"
    >
      <SectionContainer>
        {OFFICIAL_RECOGNITION_DATA.map((data) => (
          <div key={data.id} className="w-full relative z-10">
            <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_0.67fr_0.67fr] lg:gap-5">

              {/* ---------------- Left: Content ---------------- */}
              <div className="flex flex-col pt-3">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4ebd0] shadow-sm">
                    <img
                      src={awardImg.src}
                      alt=""
                      className="h-6 w-6 object-contain"
                    />
                  </span>

                  <span className="text-base font-semibold text-[#0c3b1d] uppercase font-poppins border-b border-[#e0d5b7] pb-2">
                    {data.sectionTitle}
                  </span>
                </div>

                <h2
                  id="official-recognition-heading"
                  className="text-[28px] sm:text-[34px] md:text-[46px] font-semibold leading-[1.15] tracking-tight mb-2 font-poppins"
                >
                  <span className="text-[#044826]">{data.headingMain}</span>
                  <br />
                  <span className="">{data.headingSub}</span>
                </h2>

                <div
                  className="mb-4 h-[3px] w-[70px] mt-4 bg-[#b39540]"
                  aria-hidden="true"
                />

                <p className="mb-4 max-w-[550px] text-base leading-[1.7] font-medium text-justify">
                  Bharat Organic Expo <strong className="text-[#1b5e20]">2027</strong> has
                  received approval/sanction under the applicable{" "}
                  <strong className="text-gray-900">
                    Procurement &amp; Marketing Support (PMS) Scheme
                  </strong>{" "}
                  component, enabling eligible participating MSMEs to apply for applicable exhibition
                  assistance subject to PMS guidelines and individual eligibility.
                </p>

                <div className="mb-4 flex items-stretch w-full max-w-[550px] bg-[#f6f7f0] rounded-xl border border-[#a4ba96] overflow-hidden shadow-[0_4px_15px_rgba(0,0,0,0.08)] py-4">
                  {data.featureGrid.map((feat) => (
                    <div key={feat.id} className="flex-1 flex flex-col items-center justify-center gap-2 py-1 px-2 border-r border-[#a4ba96] last:border-r-0">
                      <Image
                        src={feat.icon}
                        alt={feat.text1}
                        className="w-12 h-12 object-contain"
                      />
                      <span className="text-[12px] font-semibold text-[#0c3b1d] leading-tight text-center">
                        {feat.text1}
                        <br />
                        {feat.text2}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <button className="flex items-center gap-2 whitespace-nowrap shrink-0 rounded-full bg-[#0d3b15] py-3 px-4 text-[14px] font-bold text-white transition-colors hover:bg-[#0a2e11]">
                    <FileText className="h-5 w-5" aria-hidden="true" />
                    {data.ctaBtnText}
                    <ChevronRight />
                  </button>

                  <Link
                    href={data.ctaHref}
                    className="text-[16px] font-semibold text-[#0d3b15] underline decoration-[#0d3b15]/40 underline-offset-2 hover:decoration-[#0d3b15] transition-colors whitespace-nowrap pb-2"
                  >
                    {data.ctaLinkText}
                  </Link>
                </div>
              </div>

              {/* ---------------- Middle: Approval Card ---------------- */}
              <div className="relative flex flex-col w-full h-full">
                <div className="absolute -inset-3 bg-white/20 backdrop-blur-md rounded-[28px] z-0" />

                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <img
                    src={approvedImg.src}
                    alt=""
                    className="h-[74px] w-[74px] object-contain"
                  />
                </div>

                <div className="overflow-hidden rounded-[20px] bg-white border border-gray-100 flex flex-col relative z-10 h-full shadow-[0_4px_20px_rgba(0,0,0,0.12)] mt-6">
                  <div className="bg-gradient-to-b from-[#1b5e20] to-[#124215] pt-8 pb-3.5 px-4 text-center rounded-t-[18px] relative">
                    <h3 className="text-[12px] font-semibold uppercase tracking-widest text-white font-poppins mt-1">
                      {data.approvalCard.badgeTitle}
                    </h3>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="mb-5 mt-4 flex items-center justify-center gap-3">
                        <Image
                          src={leafsImg}
                          alt="Leaf Icon"
                          className="w-16 h-16 object-contain -mt-4"
                        />

                        <p className="text-[22px] font-semibold leading-[1.15] text-[#266e3b] font-poppins tracking-wide uppercase text-left">
                          {data.approvalCard.eventNameLine1}
                          <br />
                          {data.approvalCard.eventNameLine2}
                          <br />
                          {data.approvalCard.eventNameLine3}
                        </p>
                      </div>

                      <div className="space-y-3 mb-5 pl-2">
                        <div className="flex items-center gap-3 text-[14px] font-semibold">
                          <CalendarDays
                            className="h-8 w-8 shrink-0 text-[#1b5e20]"
                            aria-hidden="true"
                          />
                          {data.approvalCard.date}
                        </div>

                        <div className="flex items-center gap-3 text-[14px] font-semibold">
                          <MapPin
                            className="h-8 w-8 shrink-0 text-[#1b5e20]"
                            aria-hidden="true"
                          />
                          {data.approvalCard.venue}
                        </div>
                      </div>

                      <div className="mb-5 h-[1px] w-full bg-emerald-900" />
                    </div>

                    <div className="flex flex-col gap-4">
                      {data.approvalCard.details.map((detail) => {
                        const IconComp = detail.icon;
                        return (
                          <div key={detail.id} className="flex items-center gap-3">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eef5ef] border border-[#d3e3d6]">
                              <IconComp
                                className="h-8 w-8 text-[#266e3b]"
                                strokeWidth={2}
                              />
                            </div>

                            <div>
                              <p className="text-[14px] font-medium mb-0.5">
                                {detail.label}
                              </p>
                              <p className="text-[14px] font-bold text-[#1b5e20]">
                                {detail.value}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

            {/* ---------------- Right: Certificate ---------------- */}
            <div className="flex flex-col w-full h-full pt-4 min-h-0">
              <div className="relative h-full min-h-full rounded-[16px] border border-[#e5e7eb] bg-gray shadow-[0_4px_20px_rgba(0,0,0,0.12)] overflow-hidden">

                  <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-[2px]">
                    <p className="text-[20px] font-bold tracking-wide text-gray-700 uppercase">
                      {data.certificate.comingSoonText}
                    </p>
                  </div>

                  <div className="rounded-[16px] border border-[#e5e7eb] bg-white p-4 flex-1 flex flex-col relative z-10 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">

                    <div className="mb-3 relative">
                      <Image
                        src={ashokaImg}
                        alt="Ashoka Emblem"
                        className="absolute left-0 top-0 w-10 h-12 object-contain"
                      />

                      <div className="flex flex-col items-center text-center pl-12">
                        <p className="text-[11px] font-semibold leading-[1.1] text-gray-800">
                          भारत सरकार
                        </p>
                        <p className="text-[11px] font-bold tracking-wide text-gray-900 mb-0.5">
                          GOVERNMENT OF INDIA
                        </p>
                        <p className="text-[11px] font-semibold leading-[1.1] text-gray-800">
                          सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय
                        </p>
                        <p className="text-[11px] font-bold text-gray-900">
                          MINISTRY OF
                        </p>
                        <p className="text-[11px] font-bold text-gray-900 mb-0.5">
                          MICRO, SMALL &amp; MEDIUM ENTERPRISES
                        </p>
                        <p className="text-[11px] font-semibold text-gray-700">
                          MSME-DFO, DELHI
                        </p>
                      </div>
                    </div>

                    <div className="mb-3 flex items-start justify-between text-[11px] font-medium text-gray-600 border-t border-b border-gray-100 py-2">
                      <span className="leading-[1.3]">
                        <span className="font-bold text-gray-800">
                          क्रमांक / Ref. No.:
                        </span>
                        <br />
                        {data.certificate.refNo}
                      </span>

                      <span className="text-right leading-[1.3]">
                        <span className="font-bold text-gray-800">
                          दिनांक / Date:
                        </span>
                        {data.certificate.refDate}
                      </span>
                    </div>

                    <p className="mb-3 text-center text-[11px] font-bold text-gray-900 underline underline-offset-2">
                      {data.certificate.title}
                    </p>

                    <div className="flex-1">
                      <p className="mb-2 text-justify text-[12px] leading-relaxed text-gray-700 font-medium tracking-tight">
                        This is to certify that{" "}
                        <strong className="font-bold text-gray-900">
                          Bharat Organic Expo 2027
                        </strong>{" "}
                        (19–21 February 2027) to be held at Bharat Mandapam,{" "}
                        <strong className="font-bold text-gray-900">
                          New Delhi
                        </strong>{" "}
                        has been approved under the Procurement &amp; Marketing
                        Support (PMS) Scheme component for the financial year
                        2024-25.
                      </p>

                      <p className="text-justify text-[12px] leading-relaxed text-gray-700 font-medium tracking-tight">
                        This approval is subject to the terms &amp; conditions of
                        the PMS Scheme guidelines issued by the Ministry of MSME
                        from time to time.
                      </p>
                    </div>

                    <div className="flex items-end justify-end gap-2 mt-3 pt-2 border-t border-gray-100">
                      <div className="text-[9px] leading-tight text-gray-600 flex flex-col text-center">
                        <SignaturePlaceholder />
                        <p className="font-bold text-gray-800 mt-1">
                          (Authorised Signatory)
                        </p>
                        <p>MSME-DFO, Delhi</p>
                        <p>Ministry of MSME</p>
                        <p>Government of India</p>
                      </div>

                      <Image
                        src={stampImg}
                        alt="Official Seal"
                        className="w-16 h-16 object-contain"
                      />
                    </div>

                  </div>

                  <a
                    href={data.certificate.pdfUrl}
                    download="MSME_Approval_Letter.pdf"
                    target="_blank"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-full text-[#1b5e20] py-3 text-[13px] font-bold transition-colors hover:text-[#2d7a2d]"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    DOWNLOAD APPROVAL LETTER (PDF)
                  </a>
                </div>
              </div>
            </div>

            {/* ---------------- Disclaimer ---------------- */}
            <div className="mt-10 flex items-center relative z-10">
              <div className="flex items-center gap-3 rounded-xl bg-[#f8f7f1] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e5efdf] w-[60%]">
                <div className="w-14 h-14 shrink-0 rounded-full bg-[#e8eddf] flex items-center justify-center">
                  <Image
                    src={secureImg}
                    alt="Secure"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <p className="text-[14px] leading-snug text-gray-700 font-medium m-0">
                  {data.disclaimerText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </SectionContainer>

      <Image
        src={leafRecognition}
        alt="Recognition Leaf"
        className="w-50 h-40 shrink-0 object-contain ml-auto absolute right-0 bottom-0"
      />
    </section>
  );
}

