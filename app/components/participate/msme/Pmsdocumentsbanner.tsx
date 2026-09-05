"use client";

import type {
  ReactNode,
  SVGProps,
} from "react";

import {
  ArrowRight,
  FileEdit,
  FileText,
} from "lucide-react";

import documentsBgImg from "@/app/assets/participate/msme/documents_ready.jpg";
import docsImg from "@/app/assets/participate/msme/docs.png";

/* ================================================================
   TYPES
================================================================ */

interface PmsDocument {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<
    SVGProps<SVGSVGElement>
  >;
}

/* ================================================================
   CUSTOM ICONS
   Reference-style illustrated icons
================================================================ */

function UdyamCertificateIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      {...props}
    >
      <path
        d="M20 10h35v47H20z"
        fill="#fff"
        stroke="#263524"
        strokeWidth="2"
      />

      <path
        d="M25 16h25"
        stroke="#557B2C"
        strokeWidth="2"
      />

      <path
        d="M28 24h18M28 30h18M28 36h13"
        stroke="#69766A"
        strokeWidth="1.7"
      />

      <circle
        cx="37.5"
        cy="17"
        r="4"
        fill="#E8F3D5"
        stroke="#4D7B1F"
        strokeWidth="1.5"
      />

      <path
        d="m37.5 14.7.8 1.6 1.8.3-1.3 1.3.3 1.8-1.6-.9-1.6.9.3-1.8-1.3-1.3 1.8-.3z"
        fill="#4D7B1F"
      />

      <circle
        cx="48"
        cy="49"
        r="9"
        fill="#86B741"
        stroke="#2E5018"
        strokeWidth="2"
      />

      <path
        d="M43.5 57v10l4.5-3 4.5 3V57"
        fill="#9BC64C"
        stroke="#2E5018"
        strokeWidth="1.7"
      />

      <path
        d="m44.5 49 2.2 2.2 4.7-5"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PanGstIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      {...props}
    >
      <path
        d="M17 14h31v44H17z"
        fill="#fff"
        stroke="#263524"
        strokeWidth="2"
      />

      <path
        d="M37 14 48 25H37z"
        fill="#DDECC4"
        stroke="#263524"
        strokeWidth="1.4"
      />

      <text
        x="23"
        y="27"
        fontSize="9"
        fontWeight="700"
        fill="#224B11"
      >
        PAN
      </text>

      <path
        d="M23 34h18M23 40h14M23 46h17"
        stroke="#69766A"
        strokeWidth="1.5"
      />

      <rect
        x="38"
        y="42"
        width="26"
        height="20"
        rx="2"
        fill="#5C8C21"
        stroke="#2C4B17"
        strokeWidth="2"
      />

      <text
        x="43"
        y="55"
        fontSize="8"
        fontWeight="700"
        fill="white"
      >
        GST
      </text>

      <path
        d="M58 42v20"
        stroke="#8FB44E"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function BankIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      {...props}
    >
      <path
        d="M14 29 39 15l25 14z"
        fill="#DCE8C8"
        stroke="#263524"
        strokeWidth="2"
      />

      <text
        x="29"
        y="26"
        fontSize="7"
        fontWeight="700"
        fill="#365918"
      >
        BANK
      </text>

      <path
        d="M20 32h38"
        stroke="#263524"
        strokeWidth="2"
      />

      {[23, 34, 45, 56].map(
        (x) => (
          <g key={x}>
            <path
              d={`M${x} 33v22`}
              stroke="#456B2D"
              strokeWidth="3"
            />
            <path
              d={`M${x - 3} 55h6`}
              stroke="#263524"
              strokeWidth="2"
            />
          </g>
        )
      )}

      <path
        d="M17 59h45"
        stroke="#263524"
        strokeWidth="2.3"
      />

      <circle
        cx="57"
        cy="56"
        r="10"
        fill="#86B741"
        stroke="#31531A"
        strokeWidth="2"
      />

      <text
        x="53.5"
        y="60"
        fontSize="12"
        fontWeight="700"
        fill="#fff"
      >
        ₹
      </text>
    </svg>
  );
}

function ParticipationProofIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      {...props}
    >
      <path
        d="M21 15h38v48H21z"
        fill="#fff"
        stroke="#2C392B"
        strokeWidth="2"
      />

      <path
        d="M33 15v-4h14v4"
        stroke="#2C392B"
        strokeWidth="2"
      />

      <rect
        x="32"
        y="9"
        width="16"
        height="8"
        rx="2"
        fill="#7FA63E"
        stroke="#2D4E18"
        strokeWidth="1.5"
      />

      <path
        d="M28 27h24M28 34h24M28 41h18M28 48h14"
        stroke="#687769"
        strokeWidth="1.6"
      />

      <circle
        cx="54"
        cy="54"
        r="8"
        fill="#86B741"
        stroke="#31531A"
        strokeWidth="2"
      />

      <path
        d="M51 54h6M54 51v6"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M50 61v8l4-2 4 2v-8"
        fill="#92BE46"
        stroke="#31531A"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function InvoiceIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      {...props}
    >
      <path
        d="M21 13h32l10 10v43H21z"
        fill="#fff"
        stroke="#263524"
        strokeWidth="2"
      />

      <path
        d="M53 13v10h10"
        fill="#DCEAC8"
        stroke="#263524"
        strokeWidth="1.6"
      />

      <text
        x="28"
        y="28"
        fontSize="7"
        fontWeight="700"
        fill="#31531A"
      >
        INVOICE
      </text>

      <text
        x="34"
        y="49"
        fontSize="23"
        fontWeight="700"
        fill="#182217"
      >
        ₹
      </text>

      <path
        d="M28 57h18"
        stroke="#6A7869"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ParticipationEvidenceIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      {...props}
    >
      <path
        d="M27 13 33 5l6 12"
        stroke="#2C392B"
        strokeWidth="3"
      />

      <path
        d="M53 13 47 5l-6 12"
        stroke="#2C392B"
        strokeWidth="3"
      />

      <path
        d="M32 14h16v10H32z"
        fill="#80AB3D"
        stroke="#2E5018"
        strokeWidth="1.5"
      />

      <rect
        x="20"
        y="22"
        width="40"
        height="42"
        rx="3"
        fill="#fff"
        stroke="#263524"
        strokeWidth="2"
      />

      <circle
        cx="32"
        cy="39"
        r="6"
        fill="#1D2A1D"
      />

      <path
        d="M23 56c1-8 5-12 9-12s8 4 9 12"
        fill="#1D2A1D"
      />

      <path
        d="M45 34h10M45 40h10M45 46h8"
        stroke="#567054"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function DeliveryTruckIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      {...props}
    >
      <path
        d="M13 24h36v31H13z"
        fill="#79A93B"
        stroke="#263524"
        strokeWidth="2"
      />

      <path
        d="M49 34h13l7 10v11H49z"
        fill="#93BE48"
        stroke="#263524"
        strokeWidth="2"
      />

      <path
        d="M56 37h5l5 7H56z"
        fill="#EAF1DF"
        stroke="#263524"
        strokeWidth="1.5"
      />

      <circle
        cx="26"
        cy="57"
        r="7"
        fill="#263524"
      />
      <circle
        cx="26"
        cy="57"
        r="3"
        fill="#D9E8C4"
      />

      <circle
        cx="58"
        cy="57"
        r="7"
        fill="#263524"
      />
      <circle
        cx="58"
        cy="57"
        r="3"
        fill="#D9E8C4"
      />

      <circle
        cx="31"
        cy="36"
        r="8"
        fill="#EAF3DC"
        stroke="#31531A"
        strokeWidth="1.5"
      />

      <path
        d="m27.5 36 2.5 2.5 4.5-5"
        stroke="#4A7D25"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EwayBillIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      {...props}
    >
      <path
        d="M22 12h31l9 9v45H22z"
        fill="#fff"
        stroke="#263524"
        strokeWidth="2"
      />

      <path
        d="M53 12v9h9"
        fill="#DCEAC7"
        stroke="#263524"
        strokeWidth="1.5"
      />

      <rect
        x="26"
        y="20"
        width="26"
        height="10"
        fill="#78A63B"
      />

      <text
        x="29"
        y="27"
        fontSize="6"
        fontWeight="700"
        fill="white"
      >
        E-WAY
      </text>

      <text
        x="31"
        y="39"
        fontSize="7"
        fontWeight="700"
        fill="#31531A"
      >
        BILL
      </text>

      <path
        d="M29 45h21M29 51h17M29 57h12"
        stroke="#697869"
        strokeWidth="1.6"
      />

      <circle
        cx="56"
        cy="55"
        r="8"
        fill="#7EAC3C"
        stroke="#31531A"
        strokeWidth="2"
      />

      <path
        d="m52.5 55 2.2 2.2 4.5-5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DeclarationIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      {...props}
    >
      <path
        d="M18 12h37l8 8v45H18z"
        fill="#fff"
        stroke="#263524"
        strokeWidth="2"
      />

      <path
        d="M55 12v8h8"
        fill="#DCEAC8"
        stroke="#263524"
        strokeWidth="1.5"
      />

      <circle
        cx="28"
        cy="29"
        r="4"
        fill="#6C9A30"
      />

      <path
        d="M23 38c1-5 3-7 5-7s4 2 5 7"
        stroke="#4A692B"
        strokeWidth="1.5"
      />

      <circle
        cx="28"
        cy="46"
        r="4"
        fill="#6C9A30"
      />

      <path
        d="M23 55c1-5 3-7 5-7s4 2 5 7"
        stroke="#4A692B"
        strokeWidth="1.5"
      />

      <path
        d="M38 28h13M38 34h10M38 44h13M38 50h10"
        stroke="#687769"
        strokeWidth="1.5"
      />

      <path
        d="m46 62 12-12 4 4-12 12-6 2z"
        fill="#7FA63E"
        stroke="#263524"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function AffidavitIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      {...props}
    >
      <path
        d="M19 13h40v52H19z"
        fill="#fff"
        stroke="#263524"
        strokeWidth="2"
      />

      <path
        d="M30 13v-4h18v4"
        stroke="#263524"
        strokeWidth="2"
      />

      <rect
        x="29"
        y="8"
        width="20"
        height="8"
        rx="2"
        fill="#7FA63E"
        stroke="#31531A"
        strokeWidth="1.5"
      />

      {[27, 37, 47].map(
        (y) => (
          <g key={y}>
            <path
              d={`m27 ${y} 3 3 5-6`}
              stroke="#579126"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d={`M39 ${y}h12`}
              stroke="#687769"
              strokeWidth="1.5"
            />
          </g>
        )
      )}

      <path
        d="M49 51 62 56v9c-4 5-8 7-13 8-5-1-9-3-13-8v-9z"
        fill="#6E9F32"
        stroke="#31531A"
        strokeWidth="1.6"
      />

      <path
        d="m43 62 4 4 8-9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StampIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      {...props}
    >
      <circle
        cx="40"
        cy="20"
        r="10"
        fill="#7DAA39"
        stroke="#263524"
        strokeWidth="2"
      />

      <path
        d="M34 29h12l5 18H29z"
        fill="#7DAA39"
        stroke="#263524"
        strokeWidth="2"
      />

      <path
        d="M23 47h34v9H23z"
        fill="#91BC45"
        stroke="#263524"
        strokeWidth="2"
      />

      <path
        d="M18 58h44v7H18z"
        fill="#DCE9C9"
        stroke="#263524"
        strokeWidth="2"
      />
    </svg>
  );
}

function FolderDocumentIcon(
  props: SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      {...props}
    >
      <path
        d="M29 13h30v40H29z"
        fill="#fff"
        stroke="#263524"
        strokeWidth="1.8"
      />

      <path
        d="M34 22h18M34 28h18M34 34h13"
        stroke="#687769"
        strokeWidth="1.5"
      />

      <path
        d="M15 35h23l5 6h22l-6 24H20z"
        fill="#6F9D34"
        stroke="#263524"
        strokeWidth="2"
      />

      <path
        d="M20 41h45"
        stroke="#A4C669"
        strokeWidth="2"
      />
    </svg>
  );
}

/* ================================================================
   DATA
================================================================ */

const pmsDocuments: PmsDocument[] = [
  {
    id: 1,
    title:
      "Udyam Registration Certificate",
    description:
      "Valid Udyam Certificate (MSME Registration).",
    icon: UdyamCertificateIcon,
  },

  {
    id: 2,
    title:
      "PAN & GST Certificate",
    description:
      "PAN Card and GST Registration Certificate.",
    icon: PanGstIcon,
  },

  {
    id: 3,
    title:
      "Bank Details",
    description:
      "Cancelled Cheque / Bank Passbook First Page.",
    icon: BankIcon,
  },

  {
    id: 4,
    title:
      "Exhibition Participation Proof",
    description:
      "Stall Allocation / Participation Confirmation / Contract.",
    icon: ParticipationProofIcon,
  },

  {
    id: 5,
    title:
      "Invoices & Payment Proof",
    description:
      "Tax Invoices and Payment Receipts / Proofs.",
    icon: InvoiceIcon,
  },

  {
    id: 6,
    title:
      "Participation Evidence",
    description:
      "Photos, Videos, Press Coverage, Brochures, etc.",
    icon: ParticipationEvidenceIcon,
  },

  {
    id: 7,
    title:
      "Dispatch / Delivery Challan",
    description:
      "Delivery Challans / Despatch Documents.",
    icon: DeliveryTruckIcon,
  },

  {
    id: 8,
    title:
      "E-Way Bill (If Applicable)",
    description:
      "E-Way Bills for dispatch of goods.",
    icon: EwayBillIcon,
  },

  {
    id: 9,
    title:
      "Declaration Form",
    description:
      "Self-declaration / Undertaking as per PMS format.",
    icon: DeclarationIcon,
  },

  {
    id: 10,
    title:
      "MSME Affidavit / Undertaking",
    description:
      "Affidavit / Undertaking on non-duplication of claim.",
    icon: AffidavitIcon,
  },

  {
    id: 11,
    title:
      "Cancelled Cheque / Bank Proof",
    description:
      "Bank account proof in the name of the enterprise.",
    icon: StampIcon,
  },

  {
    id: 12,
    title:
      "Any Other Document (If Required)",
    description:
      "Additional documents as per PMS guidelines.",
    icon: FolderDocumentIcon,
  },
];

/* ================================================================
   DOCUMENT CARD
================================================================ */

function DocumentCard({
  document,
}: {
  document: PmsDocument;
}) {
  const Icon =
    document.icon;

  return (
    <li
      className="
        flex
        h-full
        min-w-0
        flex-col
        items-center
        overflow-hidden
        rounded-[9px]
        border
        border-[#E7E9E3]
        bg-[rgba(255,255,255,0.95)]
        px-[8%]
        pb-[7%]
        pt-[4.5%]
        text-center
        shadow-[0_3px_9px_rgba(42,54,32,0.10)]
      "
    >
      {/* ICON CIRCLE */}

      <div
        className="
          flex
          aspect-square
          w-[55%]
          max-w-[84px]
          items-center
          justify-center
          rounded-full
          bg-[#F1F5E8]
        "
      >
        <Icon
          className="
            h-[78%]
            w-[78%]
          "
        />
      </div>

      {/* TITLE */}

      <h3
        className="
          mt-[4%]
          min-h-[38px]
          text-[clamp(11px,1.1vw,16px)]
          font-semibold
          leading-[1.18]
          tracking-[-0.015em]
          text-[#121B2C]
        "
      >
        {document.id}.{" "}
        {document.title}
      </h3>

      {/* GREEN LINE */}

      <span
        className="
          mt-[5%]
          h-[2px]
          w-[26px]
          rounded-full
          bg-[#6D952E]
        "
      />

      {/* DESCRIPTION */}

      <p
        className="
          mt-[6%]
          text-[clamp(9px,0.82vw,12px)]
          font-[500]
          leading-[1.38]
          text-[#303640]
        "
      >
        {document.description}
      </p>
    </li>
  );
}

/* ================================================================
   MAIN SECTION
================================================================ */

export default function PMSDocumentsBanner() {
  return (
    <section
      id="pms-documents"
      aria-labelledby="pms-documents-heading"
      className="
        relative
        left-1/2
        isolate
        w-screen
        -translate-x-1/2
        overflow-hidden
        bg-[#FAFBF8]

        lg:aspect-[1140/757]
      "
    >
      {/* ==========================================================
          BACKGROUND
      ========================================================== */}

      <img
        src={documentsBgImg.src}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
          object-center
        "
      />

      {/* subtle white layer */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[rgba(255,255,252,0.08)]
        "
      />

      {/* ==========================================================
          DESKTOP PIXEL-MATCHED VERSION
      ========================================================== */}

      <div
        className="
          relative
          z-10
          hidden
          h-full
          w-full
          lg:block
        "
      >
        {/* ========================================================
            BE PREPARED
        ======================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-[3.3%]
            flex
            -translate-x-1/2
            items-center
            gap-[10px]
          "
        >
          <span
            className="
              h-px
              w-[49px]
              bg-[#799557]
            "
          />

          <span
            className="
              h-[5px]
              w-[5px]
              rounded-full
              bg-[#426F11]
            "
          />

          <p
            className="
              whitespace-nowrap
              text-[clamp(11px,1.35vw,18px)]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-[#315D10]
            "
          >
            Be Prepared
          </p>

          <span
            className="
              h-[5px]
              w-[5px]
              rounded-full
              bg-[#426F11]
            "
          />

          <span
            className="
              h-px
              w-[49px]
              bg-[#799557]
            "
          />
        </div>

        {/* ========================================================
            MAIN TITLE
        ======================================================== */}

        <h2
          id="pms-documents-heading"
          className="
            absolute
            left-1/2
            top-[7.7%]
            w-[90%]
            -translate-x-1/2
            whitespace-nowrap
            text-center
            text-[clamp(34px,4.2vw,55px)]
            font-semibold
            leading-[1]
            tracking-[-0.035em]
            text-[#0D1726]
          "
        >
          Keep Your{" "}

          <span
            className="
              text-[#285C0E]
            "
          >
            PMS
          </span>{" "}

          Documents Ready
        </h2>

        {/* ========================================================
            TITLE DECORATION
        ======================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-[14%]
            flex
            -translate-x-1/2
            items-center
            gap-[7px]
          "
        >
          <span
            className="
              h-px
              w-[65px]
              bg-[#769557]
            "
          />

          <span
            className="
              h-[7px]
              w-[7px]
              rounded-full
              bg-[#3E7415]
            "
          />

          <span
            className="
              h-[8px]
              w-[8px]
              rounded-full
              bg-[#3E7415]
            "
          />

          <span
            className="
              h-[7px]
              w-[7px]
              rounded-full
              bg-[#3E7415]
            "
          />

          <span
            className="
              h-px
              w-[65px]
              bg-[#769557]
            "
          />
        </div>

        {/* ========================================================
            SUBTITLE
        ======================================================== */}

        <p
          className="
            absolute
            left-1/2
            top-[16%]
            w-[75%]
            -translate-x-1/2
            text-center
            text-[clamp(12px,1.48vw,19px)]
            font-[500]
            leading-[1.25]
            text-[#20232A]
          "
        >
          Ensure these essential
          documents are ready for a
          smooth
          <br />

          <span
            className="
              font-semibold
              text-[#38720D]
            "
          >
            PMS claim process.
          </span>
        </p>

        {/* ========================================================
            12 CARD GRID

            reference:
            x ≈ 45 → 1092
            y ≈ 207 → 598
        ======================================================== */}

        <ul
          className="
            absolute
            left-[4%]
            top-[24%]
            grid
            h-[51.8%]
            w-[91.7%]
            grid-cols-6
            grid-rows-2
            gap-x-[1.35%]
            gap-y-[2.1%]
          "
        >
          {pmsDocuments.map(
            (doc) => (
              <DocumentCard
                key={doc.id}
                document={doc}
              />
            )
          )}
        </ul>

        {/* ========================================================
            NOTICE STRIP
        ======================================================== */}

        <div
          className="
            absolute
            left-[4.4%]
            top-[78%]
            h-[8.55%]
            w-[91.1%]
            overflow-hidden
            rounded-[8px]
            border
            border-[#E5E7DD]
            bg-[rgba(244,246,235,0.94)]
          "
        >
          <div
            className="
              flex
              h-full
              items-center
            "
          >
            {/* icon */}

            <div
              className="
                ml-[2.2%]
                flex
                aspect-square
                h-[71%]
                items-center
                justify-center
                rounded-full
                bg-[#E6EFD6]
              "
            >
              <FileText
                className="
                  h-[52%]
                  w-[52%]
                  text-[#315F18]
                "
                strokeWidth={1.7}
              />
            </div>

            {/* text */}

            <p
              className="
                ml-[2%]
                max-w-[72%]
                text-[clamp(11px,1.3vw,18px)]
                font-[500]
                leading-[1.32]
                text-[#202531]
              "
            >
              Additional documents
              may be required depending
              on applicable PMS
              guidelines
              <br />

              and the individual
              enterprise.
            </p>
          </div>

          {/* EXACT RIGHT DOCUMENT ART */}

          <img
            src={docsImg.src}
            alt=""
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-[12%]
              right-[1.1%]
              h-[133%]
              w-auto
              object-contain
            "
          />
        </div>

        {/* ========================================================
            CTA
        ======================================================== */}

        <a
          href="#complete-document-checklist"
          className="
            absolute
            left-1/2
            top-[92.1%]
            flex
            h-[5.9%]
            w-[41.5%]
            -translate-x-1/2
            items-center
            justify-center
            gap-[2.5%]
            rounded-full
            bg-[linear-gradient(180deg,#376F02_0%,#1E5500_100%)]
            px-[2%]
            text-[clamp(11px,1.35vw,18px)]
            font-semibold
            uppercase
            tracking-[0.015em]
            text-white
            shadow-[0_5px_12px_rgba(36,78,0,0.24)]
            transition
            hover:brightness-110
          "
        >
          <FileEdit
            className="
              h-[25px]
              w-[25px]
              shrink-0
            "
            strokeWidth={1.6}
          />

          <span
            className="
              whitespace-nowrap
            "
          >
            View Complete Document
            Checklist
          </span>

          <ArrowRight
            className="
              h-[22px]
              w-[22px]
              shrink-0
            "
          />
        </a>
      </div>

      {/* ==========================================================
          MOBILE / TABLET
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[900px]
          px-5
          py-5
          lg:hidden
        "
      >
        {/* PREPARED */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span
            className="
              h-px
              w-10
              bg-[#799557]
            "
          />

          <span
            className="
              h-[5px]
              w-[5px]
              rounded-full
              bg-[#426F11]
            "
          />

          <p
            className="
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-[#315D10]
            "
          >
            Be Prepared
          </p>

          <span
            className="
              h-[5px]
              w-[5px]
              rounded-full
              bg-[#426F11]
            "
          />

          <span
            className="
              h-px
              w-10
              bg-[#799557]
            "
          />
        </div>

        {/* TITLE */}

        <h2
          className="
            mt-5
            text-center
            text-[34px]
            font-semibold
            leading-[1.05]
            tracking-[-0.035em]
            text-[#0D1726]
          "
        >
          Keep Your{" "}

          <span
            className="
              text-[#285C0E]
            "
          >
            PMS
          </span>{" "}

          Documents Ready
        </h2>

        {/* DOTS */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <span
            className="
              h-px
              w-12
              bg-[#78965B]
            "
          />

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-[#3E7415]
            "
          />

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-[#3E7415]
            "
          />

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-[#3E7415]
            "
          />

          <span
            className="
              h-px
              w-12
              bg-[#78965B]
            "
          />
        </div>

        {/* SUBTITLE */}

        <p
          className="
            mt-4
            text-center
            text-[15px]
            leading-[1.5]
            text-[#20232A]
          "
        >
          Ensure these essential
          documents are ready for a
          smooth{" "}

          <span
            className="
              font-semibold
              text-[#38720D]
            "
          >
            PMS claim process.
          </span>
        </p>

        {/* MOBILE GRID */}

        <ul
          className="
            mt-8
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-2
            md:grid-cols-3
          "
        >
          {pmsDocuments.map(
            (doc) => (
              <li
                key={doc.id}
                className="
                  flex
                  min-h-[230px]
                  flex-col
                  items-center
                  rounded-xl
                  border
                  border-[#E5E8E0]
                  bg-white
                  px-4
                  py-5
                  text-center
                  shadow-sm
                "
              >
                <div
                  className="
                    flex
                    h-[88px]
                    w-[88px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F1F5E8]
                  "
                >
                  <doc.icon
                    className="
                      h-[68px]
                      w-[68px]
                    "
                  />
                </div>

                <h3
                  className="
                    mt-4
                    text-[14px]
                    font-semibold
                    leading-[1.3]
                    text-[#121B2C]
                  "
                >
                  {doc.id}.{" "}
                  {doc.title}
                </h3>

                <span
                  className="
                    mt-3
                    h-[2px]
                    w-8
                    bg-[#6D952E]
                  "
                />

                <p
                  className="
                    mt-3
                    text-[12px]
                    leading-[1.5]
                    text-[#363B43]
                  "
                >
                  {
                    doc.description
                  }
                </p>
              </li>
            )
          )}
        </ul>

        {/* NOTICE */}

        <div
          className="
            relative
            mt-5
            overflow-hidden
            rounded-xl
            border
            border-[#E5E7DD]
            bg-[#F4F6EB]
            px-5
            py-5
          "
        >
          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#E6EFD6]
              "
            >
              <FileText
                className="
                  h-6
                  w-6
                  text-[#315F18]
                "
              />
            </div>

            <p
              className="
                pr-[80px]
                text-[13px]
                leading-[1.5]
                text-[#202531]
              "
            >
              Additional documents
              may be required depending
              on applicable PMS
              guidelines and the
              individual enterprise.
            </p>
          </div>

          <img
            src={docsImg.src}
            alt=""
            className="
              absolute
              -bottom-2
              right-0
              h-[95px]
              w-auto
              object-contain
            "
          />
        </div>

        {/* CTA */}

        <div
          className="
            mt-5
            flex
            justify-center
          "
        >
          <a
            href="#complete-document-checklist"
            className="
              inline-flex
              min-h-[52px]
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[linear-gradient(180deg,#376F02,#1E5500)]
              px-6
              text-center
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.01em]
              text-white
              shadow-md
            "
          >
            <FileEdit
              className="
                h-5
                w-5
                shrink-0
              "
            />

            View Complete Document
            Checklist

            <ArrowRight
              className="
                h-5
                w-5
                shrink-0
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}