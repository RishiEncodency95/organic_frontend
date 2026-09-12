import { Info, ArrowRight, CheckCircle2, CircleCheck } from "lucide-react";
import Link from "next/link";
import { LucideProps } from "lucide-react";

// Placeholder for custom SVG icons if lucide doesn't perfectly match the design
function TimerIcon(props: LucideProps) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function UserIcon(props: LucideProps) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function BadgeCheckIcon(props: LucideProps) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function BuildingIcon(props: LucideProps) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 22h16" />
      <path d="M4 22V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18" />
      <path d="M9 16v6" />
      <path d="M15 16v6" />
      <path d="M8 8h.01" />
      <path d="M16 8h.01" />
      <path d="M12 8h.01" />
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
      <path d="M8 12h.01" />
    </svg>
  );
}

export const APPLY_SIDEBAR_DATA = {
  aboutScheme: {
    title: "About PMS Scheme",
    description:
      "The MSME Promotion & Marketing Assistance (PMS) Scheme provides financial assistance to eligible MSMEs for participating in approved exhibitions.",
    linkText: "View Scheme Guidelines",
    linkHref: "#",
  },
  assistanceStructure: [
    {
      id: 1,
      icon: TimerIcon,
      title: "100% Assistance",
      subtitle: "For Women Enterprises,\nSC/ST category MSMEs",
    },
    {
      id: 2,
      icon: UserIcon,
      title: "80% Assistance",
      subtitle: "For General (Male)\ncategory MSMEs",
    },
    {
      id: 3,
      icon: BadgeCheckIcon,
      title: "Up to ₹1.5 Lakh",
      subtitle: "Maximum reimbursement\nper eligible enterprise",
    },
    {
      id: 4,
      icon: BuildingIcon,
      title: "Min. 9 sqm Stall",
      subtitle: "Minimum stall size required\nto be eligible",
    },
  ],
  documentsRequired: [
    "Udyam Registration Certificate",
    "PAN Card",
    "GST Registration Certificate (if applicable)",
    "Bank Account Details (Cancelled Cheque)",
    "Bharat Organic Expo Booking Confirmation",
    "Stall Invoice / Payment Proof",
    "Other documents as per PMS guidelines",
  ],
};

export default function ApplySidebar() {
  const data = APPLY_SIDEBAR_DATA;

  return (
    <div className="flex flex-col gap-6">

      {/* About PMS Scheme */}
      <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 border border-[#edf0ed]">
        <div className="flex items-center gap-2 mb-4">
          <Info size={20} className="text-[#176b27]" strokeWidth={2.5} />
          <h3 className="text-[14px] font-semibold uppercase text-[#176b27] tracking-wide">
            {data.aboutScheme.title}
          </h3>
        </div>
        <p className="text-[14px] text-gray-700 font-medium leading-relaxed mb-4">
          {data.aboutScheme.description}
        </p>
        <Link href={data.aboutScheme.linkHref} className="inline-flex items-center gap-1.5 text-[12px] font-extrabold text-[#176b27] hover:underline">
          {data.aboutScheme.linkText} <ArrowRight size={14} strokeWidth={3} />
        </Link>
      </div>

      {/* Assistance Structure */}
      <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 border border-[#edf0ed]">
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-[14px] font-semibold uppercase text-[#176b27] tracking-wide">
            Assistance Structure
          </h3>
        </div>

        <div className="flex flex-col gap-5">
          {data.assistanceStructure.map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.id} className="flex items-start gap-4">
                <IconComp size={24} className="text-[#176b27] shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <h4 className="text-[13px] font-extrabold text-[#111827] mb-0.5">{item.title}</h4>
                  <p className="text-[12px] text-gray-600 font-medium leading-snug whitespace-pre-line">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Documents Required */}
      <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-6 border border-[#edf0ed]">
        <div className="flex items-center gap-2 mb-4">
          <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="text-[#176b27]">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <h3 className="text-[14px] font-semibold uppercase text-[#176b27] tracking-wide">
            Documents Required
          </h3>
        </div>

        <ul className="flex flex-col gap-3 mt-5">
          {data.documentsRequired.map((doc, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <CircleCheck size={16} className="text-[#176b27] shrink-0 mt-[1px]" strokeWidth={2} />
              <span className="text-[12px] font-medium text-gray-700 leading-tight">
                {doc}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
