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
      className="relative isolate overflow-hidden bg-white px-4 py-6 md:px-11"
    >
      {/* Header */}
      <header className="relative mx-auto mb-6 max-w-3xl text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-green-700 sm:w-12" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-[0.2em] text-green-700 sm:text-sm">
            BE PREPARED
          </span>
          <span className="h-px w-8 bg-green-700 sm:w-12" aria-hidden="true" />
        </div>

        <h1
          id="pms-documents-heading"
          className="text-2xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-3xl"
        >
          Keep Your <span className="text-green-700">PMS</span> Documents Ready
        </h1>

        <div className="mx-auto my-3 flex items-center justify-center gap-2" aria-hidden="true">
          <span className="h-px w-10 bg-green-700 sm:w-16" />
          <span className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-700" />
            <span className="h-1.5 w-1.5 rounded-full bg-green-700" />
            <span className="h-1.5 w-1.5 rounded-full bg-green-700" />
          </span>
          <span className="h-px w-10 bg-green-700 sm:w-16" />
        </div>

        <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
          Ensure these essential documents are ready for a smooth{" "}
          <span className="block font-semibold text-green-700 sm:inline">
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
              className="flex flex-col items-center rounded-2xl border border-green-900/10 bg-white/80 px-4 py-5 text-center shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-md"
            >
              <span className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 ring-1 ring-green-900/5">
                <Icon
                  className="h-7 w-7 text-green-800"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>

              <h2 className="text-sm font-semibold leading-snug text-slate-900 sm:text-base">
                {doc.id}. {doc.title}
              </h2>

              <span
                className="my-2 h-0.5 w-8 rounded-full bg-green-700"
                aria-hidden="true"
              />

              <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                {doc.description}
              </p>
            </li>
          );
        })}
      </ul>

      {/* Notice bar */}
      <div className="relative mx-auto mt-6 max-w-7xl overflow-hidden rounded-2xl bg-green-50 px-5 py-4 sm:px-8">
        <div className="flex items-start gap-4 sm:items-center">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-green-900/10">
            <Info className="h-5 w-5 text-green-800" aria-hidden="true" />
          </span>
          <p className="text-sm font-medium leading-relaxed text-slate-800 sm:text-base">
            Additional documents may be required depending on applicable PMS
            guidelines and the individual enterprise.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 flex justify-center">
        <a
          href="#complete-document-checklist"
          className="inline-flex items-center gap-3 rounded-full bg-green-800 px-6 py-4 text-sm font-semibold tracking-wide text-white shadow-md transition-colors duration-200 hover:bg-green-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 sm:px-8 sm:text-base"
        >
          <FileEdit className="h-5 w-5" aria-hidden="true" />
          VIEW COMPLETE DOCUMENT CHECKLIST
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}