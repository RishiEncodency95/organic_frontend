import {
  Award,
  CheckCircle2,
  Leaf,
  Calendar,
  MapPin,
  FileSearch,
  BadgeCheck,
  FileText,
  ChevronRight,
  Download,
  ShieldCheck,
  Landmark,
  Users,
  FileCheck2,
} from "lucide-react";

export default function OfficialRecognitionBanner() {
  return (
    <section
      aria-labelledby="official-recognition-heading"
      className="w-full bg-white px-4 pt-8 pb-6 md:px-11"
    >
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.1fr_0.8fr_0.85fr] lg:gap-6">
          {/* ---------------- Left: Content ---------------- */}
          <div>
            {/* Eyebrow badge */}
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2B40E]/20">
                <Award className="h-5 w-5 text-[#F2B40E]" strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="border-b-2 border-[#F2B40E] pb-1 text-[11px] font-semibold tracking-widest text-[#1b5e20] sm:text-[12px]">
                OFFICIAL RECOGNITION
              </span>
            </div>

            <h1
              id="official-recognition-heading"
              className="text-[24px] font-semibold leading-[1.1] tracking-tight text-slate-900 md:text-[32px]"
            >
              Bharat Organic Expo
              <br />
              Approved under PMS*
            </h1>

            <p className="mb-5 max-w-xl text-[14px] leading-relaxed text-slate-600 md:text-[15px]">
              <span className="font-semibold text-slate-900">Bharat Organic Expo 2027</span> has
              received approval/sanction under the applicable{" "}
              <span className="font-semibold text-slate-900">
                Procurement &amp; Marketing Support (PMS) Scheme
              </span>{" "}
              component, enabling eligible participating MSEs to apply for applicable exhibition
              assistance subject to PMS guidelines and individual eligibility.
            </p>

            {/* Feature strip */}
            <ul className="mb-6 grid max-w-xl grid-cols-3 gap-3 rounded-2xl bg-white p-4">
              <li className="flex flex-col items-center gap-2 text-center">
                <FileCheck2 className="h-7 w-7 text-[#1b5e20]" aria-hidden="true" />
                <span className="text-[12px] font-medium leading-snug text-slate-700 sm:text-[13px]">
                  Government Approved Exhibition
                </span>
              </li>
              <li className="flex flex-col items-center gap-2 text-center">
                <Users className="h-7 w-7 text-[#1b5e20]" aria-hidden="true" />
                <span className="text-[12px] font-medium leading-snug text-slate-700 sm:text-[13px]">
                  Support for MSE Growth
                </span>
              </li>
              <li className="flex flex-col items-center gap-2 text-center">
                <BadgeCheck className="h-7 w-7 text-[#1b5e20]" aria-hidden="true" />
                <span className="text-[12px] font-medium leading-snug text-slate-700 sm:text-[13px]">
                  Applicable for Eligible MSEs Only
                </span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex items-center gap-6">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-[#1b5e20] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#2d7a2d] sm:text-[14px]"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                VIEW OFFICIAL APPROVAL
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <a
                href="#pms-scheme"
                className="text-[14px] font-medium text-[#1b5e20] underline decoration-[#1b5e20]/40 underline-offset-4 hover:decoration-[#1b5e20] sm:text-[15px]"
              >
                Know more about PMS Scheme →
              </a>
            </div>
          </div>

          {/* ---------------- Middle: Approval Card ---------------- */}
          <div className="relative mt-4 lg:mt-0 flex">
            <div className="absolute left-1/2 top-0 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#1b5e20] shadow-md ring-4 ring-white">
              <CheckCircle2 className="h-7 w-7 text-white" aria-hidden="true" />
            </div>

            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl w-full">
              <div className="bg-[#1b5e20] py-4 pt-8 text-center text-[13px] font-semibold uppercase tracking-wide text-white sm:text-[14px]">
                MSME PMS Approved Event
              </div>

              <div className="p-5 sm:p-6">
                <div className="mb-4 flex flex-col items-center gap-3 text-center">
                  <Leaf className="h-9 w-9 shrink-0 text-[#3b8c2a]" aria-hidden="true" />
                  <p className="text-[18px] font-semibold leading-tight text-slate-900">
                    BHARAT
                    <br />
                    ORGANIC EXPO
                    <br />
                    2027
                  </p>
                </div>

                <div className="mb-3 flex items-center gap-3 text-[14px] font-semibold text-slate-700">
                  <Calendar className="h-4 w-4 shrink-0 text-[#1b5e20]" aria-hidden="true" />
                  19–21 FEBRUARY 2027
                </div>
                <div className="mb-5 flex items-center gap-3 text-[14px] font-semibold text-slate-700">
                  <MapPin className="h-4 w-4 shrink-0 text-[#1b5e20]" aria-hidden="true" />
                  BHARAT MANDAPAM, NEW DELHI
                </div>

                <div className="mb-3 h-px bg-gray-200" />

                <dl>
                  <div className="mb-3 flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EFF7EE]">
                      <FileSearch className="h-4 w-4 text-[#1b5e20]" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-[12px] text-slate-500">Approval / Sanction No.</dt>
                      <dd className="text-[14px] font-semibold text-[#1b5e20]">
                        PMS/DFO-DELHI/2024-25/487
                      </dd>
                    </div>
                  </div>
                  <div className="mb-3 flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EFF7EE]">
                      <BadgeCheck className="h-4 w-4 text-[#1b5e20]" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-[12px] text-slate-500">Issued By</dt>
                      <dd className="text-[14px] font-semibold text-[#1b5e20]">MSME-DFO, DELHI</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EFF7EE]">
                      <Calendar className="h-4 w-4 text-[#1b5e20]" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-[12px] text-slate-500">Approval Date</dt>
                      <dd className="text-[14px] font-semibold text-[#1b5e20]">18 APRIL 2024</dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* ---------------- Right: Certificate ---------------- */}
          <div className="mt-4 lg:mt-0 flex">
            <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-lg sm:p-6 w-full">
              <div className="mb-3 flex flex-col items-center text-center">
                <Landmark className="mb-2 h-8 w-8 text-slate-700" aria-hidden="true" />
                <p className="text-[11px] leading-snug text-slate-600 sm:text-[12px]">भारत सरकार</p>
                <p className="text-[11px] font-semibold tracking-wide text-slate-900 sm:text-[12px]">
                  GOVERNMENT OF INDIA
                </p>
                <p className="mt-1 text-[11px] leading-snug text-slate-600 sm:text-[12px]">
                  सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय
                </p>
                <p className="text-[11px] font-semibold text-slate-900 sm:text-[12px]">MINISTRY OF</p>
                <p className="text-[11px] font-semibold text-slate-900 sm:text-[12px]">
                  MICRO, SMALL &amp; MEDIUM ENTERPRISES
                </p>
                <p className="mt-1 text-[11px] font-semibold text-slate-600 sm:text-[12px]">
                  MSME-DFO, DELHI
                </p>
              </div>

              <div className="mb-3 flex items-start justify-between text-[10px] text-slate-500 sm:text-[11px]">
                <span>
                  क्रमांक / Ref. No.:
                  <br />
                  PMS/DFO-DELHI/2024-25/487
                </span>
                <span className="text-right">दिनांक / Date: 18.04.2024</span>
              </div>

              <p className="mb-2 text-center text-[13px] font-semibold text-slate-900 underline underline-offset-4 sm:text-[14px]">
                To Whomsoever It May Concern
              </p>

              <p className="mb-2 text-justify text-[11px] leading-relaxed text-slate-600 sm:text-[12px]">
                This is to certify that{" "}
                <span className="font-semibold text-slate-900">Bharat Organic Expo 2027</span>{" "}
                (19–21 February 2027) to be held at Bharat Mandapam,{" "}
                <span className="font-semibold text-slate-900">New Delhi</span> has been approved
                under the Procurement &amp; Marketing Support (PMS) Scheme component for the
                financial year 2024-25.
              </p>
              <p className="mb-4 text-justify text-[11px] leading-relaxed text-slate-600 sm:text-[12px]">
                This approval is subject to the terms &amp; conditions of the PMS Scheme
                guidelines issued by the Ministry of MSME from time to time.
              </p>

              <div className="flex items-end justify-between gap-3">
                <div className="text-[11px] leading-snug text-slate-600 sm:text-[12px]">
                  <p className="mb-0.5 font-semibold text-slate-700">(Authorised Signatory)</p>
                  <p>MSME-DFO, Delhi</p>
                  <p>Ministry of MSME</p>
                  <p>Government of India</p>
                </div>
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-[#1b5e20]/30 text-center text-[6px] leading-tight text-[#1b5e20]/60"
                  aria-hidden="true"
                >
                  OFFICIAL SEAL
                </div>
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
        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-lg sm:p-4">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1b5e20]">
            <ShieldCheck className="h-4 w-4 text-white" aria-hidden="true" />
          </span>
          <p className="text-[13px] leading-relaxed text-slate-600 sm:text-[14px]">
            Event approval does not guarantee reimbursement. Individual eligibility,
            documentation and final <br/>sanction are subject to applicable PMS Scheme guidelines and
            decision of the competent authority.
          </p>
        </div>
      </div>
    </section>
  );
}