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
      className="w-full bg-[#F7F6F1] px-4 py-12 md:px-11 sm:py-16 lg:py-16"
    >
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_0.8fr_0.85fr] lg:gap-8">
          {/* ---------------- Left: Content ---------------- */}
          <div>
            {/* Eyebrow badge */}
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                <Award className="h-5 w-5 text-amber-600" strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="border-b-2 border-amber-400 pb-1 text-xs font-bold tracking-widest text-emerald-800 sm:text-sm">
                OFFICIAL RECOGNITION
              </span>
            </div>

            <h1
              id="official-recognition-heading"
              className="text-4xl font-extrabold leading-[1.1] tracking-tight text-emerald-950 sm:text-5xl"
            >
              Bharat Organic Expo
              <br />
              Approved under PMS*
            </h1>

            <div className="my-6 h-1 w-16 rounded-full bg-amber-400" aria-hidden="true" />

            <p className="mb-8 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
              <span className="font-semibold text-gray-800">Bharat Organic Expo 2027</span> has
              received approval/sanction under the applicable{" "}
              <span className="font-semibold text-gray-800">
                Procurement &amp; Marketing Support (PMS) Scheme
              </span>{" "}
              component, enabling eligible participating MSEs to apply for applicable exhibition
              assistance subject to PMS guidelines and individual eligibility.
            </p>

            {/* Feature strip */}
            <ul className="mb-9 grid max-w-xl grid-cols-3 gap-4 rounded-2xl bg-emerald-50/70 p-6">
              <li className="flex flex-col items-center gap-2 text-center">
                <FileCheck2 className="h-7 w-7 text-emerald-700" aria-hidden="true" />
                <span className="text-xs font-medium leading-snug text-gray-700 sm:text-sm">
                  Government Approved Exhibition
                </span>
              </li>
              <li className="flex flex-col items-center gap-2 text-center">
                <Users className="h-7 w-7 text-emerald-700" aria-hidden="true" />
                <span className="text-xs font-medium leading-snug text-gray-700 sm:text-sm">
                  Support for MSE Growth
                </span>
              </li>
              <li className="flex flex-col items-center gap-2 text-center">
                <BadgeCheck className="h-7 w-7 text-emerald-700" aria-hidden="true" />
                <span className="text-xs font-medium leading-snug text-gray-700 sm:text-sm">
                  Applicable for Eligible MSEs Only
                </span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-6">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 sm:text-base"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                VIEW OFFICIAL APPROVAL
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <a
                href="#pms-scheme"
                className="text-sm font-medium text-emerald-900 underline decoration-emerald-900/40 underline-offset-4 hover:decoration-emerald-900 sm:text-base"
              >
                Know more about PMS Scheme →
              </a>
            </div>
          </div>

          {/* ---------------- Middle: Approval Card ---------------- */}
          <div className="relative mt-4 lg:mt-0">
            <div className="absolute left-1/2 top-0 z-10 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md ring-4 ring-white">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-700">
                <CheckCircle2 className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>

            <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl">
              <div className="bg-emerald-800 py-4 pt-8 text-center text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
                MSME PMS Approved Event
              </div>

              <div className="p-6 sm:p-7">
                <div className="mb-6 flex items-center gap-3">
                  <Leaf className="h-9 w-9 shrink-0 text-emerald-600" aria-hidden="true" />
                  <p className="text-lg font-extrabold leading-tight text-emerald-950">
                    BHARAT
                    <br />
                    ORGANIC EXPO
                    <br />
                    2027
                  </p>
                </div>

                <div className="mb-3 flex items-center gap-3 text-sm font-semibold text-gray-700">
                  <Calendar className="h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                  19–21 FEBRUARY 2027
                </div>
                <div className="mb-5 flex items-center gap-3 text-sm font-semibold text-gray-700">
                  <MapPin className="h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                  BHARAT MANDAPAM, NEW DELHI
                </div>

                <div className="mb-5 h-px bg-gray-200" />

                <dl>
                  <div className="mb-4 flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                      <FileSearch className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-xs text-gray-500">Approval / Sanction No.</dt>
                      <dd className="text-sm font-bold text-emerald-900">
                        PMS/DFO-DELHI/2024-25/487
                      </dd>
                    </div>
                  </div>
                  <div className="mb-4 flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                      <BadgeCheck className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-xs text-gray-500">Issued By</dt>
                      <dd className="text-sm font-bold text-emerald-900">MSME-DFO, DELHI</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                      <Calendar className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="text-xs text-gray-500">Approval Date</dt>
                      <dd className="text-sm font-bold text-emerald-900">18 APRIL 2024</dd>
                    </div>
                  </div>
                </dl>

                <div className="mt-5 h-px bg-gray-200" />

                <button
                  type="button"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-emerald-800 py-3 text-xs font-bold text-white transition-colors hover:bg-emerald-700 sm:text-sm"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  DOWNLOAD APPROVAL LETTER (PDF)
                </button>
              </div>
            </div>
          </div>

          {/* ---------------- Right: Certificate ---------------- */}
          <div className="mt-4 lg:mt-0">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg sm:p-8">
              <div className="mb-4 flex flex-col items-center text-center">
                <Landmark className="mb-2 h-8 w-8 text-gray-700" aria-hidden="true" />
                <p className="text-[11px] leading-snug text-gray-700 sm:text-xs">भारत सरकार</p>
                <p className="text-[11px] font-bold tracking-wide text-gray-800 sm:text-xs">
                  GOVERNMENT OF INDIA
                </p>
                <p className="mt-1 text-[11px] leading-snug text-gray-700 sm:text-xs">
                  सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय
                </p>
                <p className="text-[11px] font-bold text-gray-800 sm:text-xs">MINISTRY OF</p>
                <p className="text-[11px] font-bold text-gray-800 sm:text-xs">
                  MICRO, SMALL &amp; MEDIUM ENTERPRISES
                </p>
                <p className="mt-1 text-[11px] font-semibold text-gray-600 sm:text-xs">
                  MSME-DFO, DELHI
                </p>
              </div>

              <div className="mb-4 flex items-start justify-between text-[10px] text-gray-500 sm:text-[11px]">
                <span>
                  क्रमांक / Ref. No.:
                  <br />
                  PMS/DFO-DELHI/2024-25/487
                </span>
                <span className="text-right">दिनांक / Date: 18.04.2024</span>
              </div>

              <p className="mb-3 text-center text-xs font-bold text-gray-800 underline underline-offset-4 sm:text-sm">
                To Whomsoever It May Concern
              </p>

              <p className="mb-3 text-justify text-[11px] leading-relaxed text-gray-600 sm:text-xs">
                This is to certify that{" "}
                <span className="font-semibold text-gray-800">Bharat Organic Expo 2027</span>{" "}
                (19–21 February 2027) to be held at Bharat Mandapam,{" "}
                <span className="font-semibold text-gray-800">New Delhi</span> has been approved
                under the Procurement &amp; Marketing Support (PMS) Scheme component for the
                financial year 2024-25.
              </p>
              <p className="mb-6 text-justify text-[11px] leading-relaxed text-gray-600 sm:text-xs">
                This approval is subject to the terms &amp; conditions of the PMS Scheme
                guidelines issued by the Ministry of MSME from time to time.
              </p>

              <div className="flex items-end justify-between gap-3">
                <div className="text-[11px] leading-snug text-gray-600 sm:text-xs">
                  <p className="mb-1 font-semibold text-gray-700">(Authorised Signatory)</p>
                  <p>MSME-DFO, Delhi</p>
                  <p>Ministry of MSME</p>
                  <p>Government of India</p>
                </div>
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-indigo-300 text-center text-[6px] leading-tight text-indigo-400"
                  aria-hidden="true"
                >
                  OFFICIAL SEAL
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Disclaimer ---------------- */}
        <div className="mt-10 flex items-start gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5 sm:p-6">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-700">
            <ShieldCheck className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
            Event approval does not guarantee reimbursement. Individual eligibility,
            documentation and final sanction are subject to applicable PMS Scheme guidelines and
            decision of the competent authority.
          </p>
        </div>
      </div>
    </section>
  );
}