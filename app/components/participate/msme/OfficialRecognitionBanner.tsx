import {
  Award,
  CheckCircle2,
  CalendarDays,
  MapPin,
  FileSearch,
  BadgeCheck,
  FileText,
  ChevronRight,
  Download,
  ShieldCheck,
  Building2,
  Users,
  FileCheck2,
} from "lucide-react";
import Image from "next/image";

const LeafIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C12 2 12 12 17 12C22 12 22 2 22 2C22 2 12 2 12 2Z" fill="#387f39" />
    <path d="M12 22C12 22 12 12 7 12C2 12 2 22 2 22C2 22 12 22 12 22Z" fill="#4ade80" opacity="0.8" />
    <path d="M12 2V22" stroke="#166534" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const EmblemPlaceholder = () => (
  <div className="w-6 h-8 flex items-center justify-center grayscale opacity-80 mb-1">
    <Building2 className="w-5 h-5 text-gray-700" />
  </div>
);

const SignaturePlaceholder = () => (
  <div className="h-6 w-16 border-b border-gray-400/50 mb-0.5 flex items-end justify-center">
    <span className="font-['Brush_Script_MT',cursive] text-[12px] text-gray-600 -rotate-3">Signature</span>
  </div>
);

const SealPlaceholder = () => (
  <div className="w-10 h-10 rounded-full border-2 border-indigo-200 flex flex-col items-center justify-center text-[4px] text-indigo-400 font-bold uppercase text-center leading-tight opacity-70 p-0.5">
    <span className="block border-b border-indigo-100 pb-[1px] mb-[1px]">Govt of India</span>
    <span>Official Seal</span>
  </div>
);

export default function OfficialRecognitionBanner() {
  return (
    <section
      aria-labelledby="official-recognition-heading"
      className="w-full bg-[#f9f8f4] px-3 py-6 md:px-8 font-inter relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 pointer-events-none opacity-[0.03] scale-150 translate-x-1/4 translate-y-1/4">
        <LeafIcon />
      </div>

      <div className="mx-auto w-full max-w-[1280px] relative z-10">
        <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1.2fr_0.9fr_1fr] lg:gap-5">
          
          {/* ---------------- Left: Content ---------------- */}
          <div className="flex flex-col pt-3">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f4ebd0] border border-[#d4a017]/20 shadow-sm">
                <Award className="h-3.5 w-3.5 text-[#b07d10]" strokeWidth={2.5} aria-hidden="true" />
              </span>
              <span className="text-[11px] font-bold tracking-widest text-[#0c3b1d] uppercase font-poppins">
                OFFICIAL RECOGNITION
              </span>
            </div>

            <h1
              id="official-recognition-heading"
              className="text-[24px] sm:text-[30px] md:text-[34px] font-bold leading-[1.05] tracking-tight mb-2 font-poppins"
            >
              <span className="text-[#0c3b1d]">Bharat Organic Expo</span>
              <br />
              <span className="text-[#1a202c]">Approved under PMS*</span>
            </h1>

            <div className="mb-3 h-[3px] w-[40px] bg-[#d4a017]" aria-hidden="true" />

            <p className="mb-4 max-w-lg text-[12.5px] sm:text-[13px] leading-snug text-gray-700 font-medium">
              <strong className="font-bold text-gray-900">Bharat Organic Expo 2027</strong> has
              received approval/sanction under the applicable{" "}
              <strong className="font-bold text-gray-900">
                Procurement &amp; Marketing Support (PMS) Scheme
              </strong>{" "}
              component, enabling eligible participating MSEs to apply for applicable exhibition
              assistance subject to PMS guidelines and individual eligibility.
            </p>

            <div className="mb-4 grid grid-cols-3 gap-2 w-full max-w-[400px]">
              <div className="flex flex-col items-center justify-center gap-1.5 text-center bg-[#f0f5ec] rounded-[10px] p-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Award className="h-3.5 w-3.5 text-[#266e3b]" strokeWidth={2.5} />
                </div>
                <span className="text-[9.5px] font-bold leading-tight text-[#0c3b1d]">
                  Government Approved<br />Exhibition
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1.5 text-center bg-[#f0f5ec] rounded-[10px] p-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Users className="h-3.5 w-3.5 text-[#266e3b]" strokeWidth={2.5} />
                </div>
                <span className="text-[9.5px] font-bold leading-tight text-[#0c3b1d]">
                  Support for<br />MSE Growth
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1.5 text-center bg-[#f0f5ec] rounded-[10px] p-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <FileCheck2 className="h-3.5 w-3.5 text-[#266e3b]" strokeWidth={2.5} />
                </div>
                <span className="text-[9.5px] font-bold leading-tight text-[#0c3b1d]">
                  Applicable for Eligible<br />MSEs Only
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-1 rounded-full bg-[#0c3b1d] px-4 py-2 text-[10px] font-bold text-white transition-all hover:bg-[#072411] tracking-wider uppercase font-poppins whitespace-nowrap"
              >
                <FileText className="h-3 w-3" aria-hidden="true" />
                VIEW OFFICIAL APPROVAL
                <ChevronRight className="h-3 w-3" aria-hidden="true" />
              </button>
              <a
                href="#pms-scheme"
                className="text-[11px] font-bold text-[#266e3b] underline decoration-[#266e3b]/40 underline-offset-2 hover:decoration-[#266e3b] transition-colors whitespace-nowrap"
              >
                Know more about PMS Scheme →
              </a>
            </div>
          </div>

          {/* ---------------- Middle: Approval Card ---------------- */}
          <div className="relative pt-5 flex flex-col w-full h-full">
            <div className="absolute left-1/2 top-0 z-20 flex h-[46px] w-[46px] -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-md border-[3px] border-white">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#16501c] shadow-inner">
                <CheckCircle2 className="h-6 w-6 text-white stroke-[2.5]" aria-hidden="true" />
              </div>
            </div>

            <div className="overflow-hidden rounded-[20px] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col relative z-10 h-full">
              <div className="bg-gradient-to-b from-[#1b5e20] to-[#124215] pt-8 pb-3 px-3 text-center rounded-t-[18px]">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-white font-poppins">
                  MSME PMS APPROVED EVENT
                </h3>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-4 flex items-center justify-center gap-3">
                    <LeafIcon />
                    <p className="text-[14px] font-bold leading-[1.15] text-[#0c3b1d] font-poppins tracking-wide uppercase text-left">
                      BHARAT<br />ORGANIC EXPO<br />2027
                    </p>
                  </div>

                  <div className="space-y-2 mb-4 pl-2">
                    <div className="flex items-center gap-2.5 text-[10px] font-bold text-[#2d3748]">
                      <CalendarDays className="h-3.5 w-3.5 shrink-0 text-[#1b5e20]" aria-hidden="true" />
                      19–21 FEBRUARY 2027
                    </div>
                    <div className="flex items-center gap-2.5 text-[10px] font-bold text-[#2d3748]">
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-[#1b5e20]" aria-hidden="true" />
                      BHARAT MANDAPAM, NEW DELHI
                    </div>
                  </div>

                  <div className="mb-4 h-[1px] w-full bg-gray-200" />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[8px] bg-[#eef5ef] border border-[#d3e3d6]">
                      <FileSearch className="h-4 w-4 text-[#266e3b]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[9px] font-medium text-gray-500 mb-0.5">Approval / Sanction No.</p>
                      <p className="text-[11px] font-bold text-[#1b5e20]">PMS/DFO-DELHI/2024-25/487</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[8px] bg-[#eef5ef] border border-[#d3e3d6]">
                      <Building2 className="h-4 w-4 text-[#266e3b]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[9px] font-medium text-gray-500 mb-0.5">Issued By</p>
                      <p className="text-[11px] font-bold text-[#1b5e20]">MSME-DFO, DELHI</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[8px] bg-[#eef5ef] border border-[#d3e3d6]">
                      <CalendarDays className="h-4 w-4 text-[#266e3b]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[9px] font-medium text-gray-500 mb-0.5">Approval Date</p>
                      <p className="text-[11px] font-bold text-[#1b5e20]">18 APRIL 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- Right: Certificate ---------------- */}
          <div className="flex flex-col pt-5 w-full h-full">
            <div className="rounded-[16px] border border-[#e5e7eb] bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex-1 flex flex-col relative z-10">
              <div className="mb-2 flex flex-col items-center text-center">
                <EmblemPlaceholder />
                <p className="text-[7px] font-semibold leading-[1.1] text-gray-800">भारत सरकार</p>
                <p className="text-[8px] font-bold tracking-wide text-gray-900 mb-0.5">GOVERNMENT OF INDIA</p>
                <p className="text-[7px] font-semibold leading-[1.1] text-gray-800">सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय</p>
                <p className="text-[8px] font-bold text-gray-900">MINISTRY OF</p>
                <p className="text-[8px] font-bold text-gray-900 mb-0.5">MICRO, SMALL &amp; MEDIUM ENTERPRISES</p>
                <p className="text-[7.5px] font-bold text-gray-700">MSME-DFO, DELHI</p>
              </div>

              <div className="mb-2 flex items-start justify-between text-[7.5px] font-medium text-gray-600 border-t border-b border-gray-100 py-1">
                <span className="leading-[1.2]">
                  <span className="font-semibold text-gray-800">क्रमांक / Ref. No.:</span><br />
                  PMS/DFO-DELHI/2024-25/487
                </span>
                <span className="text-right leading-[1.2]">
                  <span className="font-semibold text-gray-800">दिनांक / Date:</span><br />
                  18.04.2024
                </span>
              </div>

              <p className="mb-2 text-center text-[9.5px] font-bold text-gray-900 underline underline-offset-2">
                To Whomsoever It May Concern
              </p>

              <div className="flex-1">
                <p className="mb-1.5 text-justify text-[9px] leading-snug text-gray-700 font-medium tracking-tight">
                  This is to certify that <strong className="font-bold text-gray-900">Bharat Organic Expo 2027</strong> (19–21 February 2027) to be held at Bharat Mandapam, <strong className="font-bold text-gray-900">New Delhi</strong> has been approved under the Procurement &amp; Marketing Support (PMS) Scheme component for the financial year 2024-25.
                </p>
                <p className="text-justify text-[9px] leading-snug text-gray-700 font-medium tracking-tight">
                  This approval is subject to the terms &amp; conditions of the PMS Scheme guidelines issued by the Ministry of MSME from time to time.
                </p>
              </div>

              <div className="flex items-end justify-between mt-2 pt-1 border-t border-gray-50">
                <div className="text-[8px] leading-tight text-gray-600 flex flex-col items-center text-center">
                  <SignaturePlaceholder />
                  <p className="font-bold text-gray-800 mt-0.5">(Authorised Signatory)</p>
                  <p>MSME-DFO, Delhi</p>
                  <p>Ministry of MSME</p>
                  <p>Government of India</p>
                </div>
                <SealPlaceholder />
              </div>

              <button
                type="button"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#1b5e20] py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#2d7a2d] sm:text-[14px]"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                DOWNLOAD APPROVAL LETTER (PDF)
              </button>
            </div>
          </div>
        </div>

        {/* ---------------- Disclaimer ---------------- */}
        <div className="mt-4 flex items-center gap-2.5 rounded-xl bg-[#f0f5ec] p-2.5 md:p-3 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e5efdf] max-w-[90%] relative z-10">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1b5e20] shadow-sm border-[1.5px] border-white">
            <ShieldCheck className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
          </span>
          <p className="text-[10.5px] leading-snug text-gray-700 font-medium m-0">
            Event approval does not guarantee reimbursement. Individual eligibility, documentation and final sanction are subject to applicable PMS Scheme guidelines and decision of the competent authority.
          </p>
        </div>
      </div>
    </section>
  );
}