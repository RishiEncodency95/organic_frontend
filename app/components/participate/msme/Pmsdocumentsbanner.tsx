import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  FileText,
  Landmark,
  ClipboardCheck,
  Receipt,
  IdCard,
  Truck,
  FileCheck2,
  FileSignature,
  ShieldCheck,
  Stamp,
  FolderOpen,
  Info,
  FileEdit,
  ArrowRight,
} from "lucide-react";
import documentsBgImg from "@/app/assets/participate/msme/documents_ready.jpg";
import SectionContainer from "@/app/components/layout/SectionContainer";

interface PmsDocument {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const pmsDocuments: PmsDocument[] = [
  {
    id: 1,
    title: "Udyam Registration Certificate",
    description: "Valid Udyam Certificate (MSME Registration).",
    icon: BadgeCheck,
  },
  {
    id: 2,
    title: "PAN & GST Certificate",
    description: "PAN Card and GST Registration Certificate.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Bank Details",
    description: "Cancelled Cheque / Bank Passbook First Page.",
    icon: Landmark,
  },
  {
    id: 4,
    title: "Exhibition Participation Proof",
    description: "Stall Allocation / Participation Confirmation / Contract.",
    icon: ClipboardCheck,
  },
  {
    id: 5,
    title: "Invoices & Payment Proof",
    description: "Tax Invoices and Payment Receipts / Proofs.",
    icon: Receipt,
  },
  {
    id: 6,
    title: "Participation Evidence",
    description: "Photos, Videos, Press Coverage, Brochures, etc.",
    icon: IdCard,
  },
  {
    id: 7,
    title: "Dispatch / Delivery Challan",
    description: "Delivery Challans / Despatch Documents.",
    icon: Truck,
  },
  {
    id: 8,
    title: "E-Way Bill (If Applicable)",
    description: "E-Way Bills for dispatch of goods.",
    icon: FileCheck2,
  },
  {
    id: 9,
    title: "Declaration Form",
    description: "Self-declaration / Undertaking as per PMS format.",
    icon: FileSignature,
  },
  {
    id: 10,
    title: "MSME Affidavit / Undertaking",
    description: "Affidavit / Undertaking on non-duplication of claim.",
    icon: ShieldCheck,
  },
  {
    id: 11,
    title: "Cancelled Cheque / Bank Proof",
    description: "Bank account proof in the name of the enterprise.",
    icon: Stamp,
  },
  {
    id: 12,
    title: "Any Other Document (If Required)",
    description: "Additional documents as per PMS guidelines.",
    icon: FolderOpen,
  },
];

export default function PMSDocumentsBanner() {
  return (
    <section
      aria-labelledby="pms-documents-heading"
      className="relative isolate overflow-hidden bg-white py-4"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={documentsBgImg.src}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <SectionContainer>
      {/* Header */}
      <header className="relative mx-auto mb-2 max-w-3xl text-center">
        <h1
          id="pms-documents-heading"
          className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl"
        >
          Keep Your <span className="text-[#1b5e20]">PMS</span> Documents Ready
        </h1>

        {/* Decoration */}
        <div className="mx-auto mt-3 flex w-full max-w-xs items-center gap-2">
          <span className="h-px flex-1 bg-[#1b5e20]/40" />
          <span className="h-2 w-2 rounded-full bg-[#1b5e20]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#1b5e20]" />
          <span className="h-2 w-2 rounded-full bg-[#1b5e20]" />
          <span className="h-px flex-1 bg-[#1b5e20]/40" />
        </div>

        <p className="text-base leading-relaxed text-black sm:text-lg">
          Ensure these essential documents are ready for a smooth{" "}<br/>
          <span className="block font-semibold text-[#1b5e20] sm:inline">
            PMS claim process.
          </span>
        </p>
      </header>

      {/* Document grid */}
      <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {pmsDocuments.map((doc) => {
          const Icon = doc.icon;
          return (
            <li
              key={doc.id}
              className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white px-2 py-3 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <span className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#EFF7EE] ring-1 ring-black/5">
                <Icon
                  className="h-7 w-7 text-[#1b5e20]"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>

              <h2 className="text-[11px] font-semibold leading-snug text-slate-900 sm:text-[13px]">
                {doc.id}. {doc.title}
              </h2>

              <span
                className="my-2 h-0.5 w-8 rounded-full bg-[#3b8c2a]"
                aria-hidden="true"
              />

              <p className="text-[11px] leading-relaxed text-slate-600 sm:text-[12px]">
                {doc.description}
              </p>
            </li>
          );
        })}
      </ul>

      {/* Notice bar */}
      <div className="relative mx-auto mt-4 max-w-7xl overflow-hidden rounded-2xl bg-white px-5 py-3 sm:px-8">
        <div className="flex items-start gap-4 sm:items-center">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EFF7EE] ring-1 ring-black/5">
            <FileText className="h-5 w-5 text-[#1b5e20]" aria-hidden="true" />
          </span>
          <p className="text-[14px] font-medium leading-relaxed text-slate-700 sm:text-[15px]">
            Additional documents may be required depending on applicable PMS
            guidelines and the individual enterprise.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-4 flex justify-center">
        <a
          href="#complete-document-checklist"
          className="inline-flex items-center gap-3 rounded-full bg-[#1b5e20] px-6 py-3 text-[14px] font-semibold tracking-wide text-white shadow-md transition-colors duration-200 hover:bg-[#2d7a2d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b8c2a] focus-visible:ring-offset-2 sm:px-8 sm:text-[15px]"
        >
          <FileEdit className="h-5 w-5" aria-hidden="true" />
          VIEW COMPLETE DOCUMENT CHECKLIST
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
      </SectionContainer>
    </section>
  );
}