"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import sidebarFooterImage from "../../assets/carrer/grow-organic-grow-india.png";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Edit3,
  Eye,
  FileText,
  GraduationCap,
  Home,
  Info,
  Mail,
  MapPin,
  Pencil,
  Phone,
  RefreshCw,
  ShieldCheck,
  Target,
  Trophy,
  User,
} from "lucide-react";

/* =========================================================
   SAME POPUP CANVAS / DIMENSIONS
   ========================================================= */

const DESIGN_WIDTH = 1500;
const DESIGN_HEIGHT = 1180;

/* =========================================================
   ASSETS
   ========================================================= */

const asset = (file: string) => `/separated-assets/${file}`;

const assets = {
  headerLeaf: "/separated-assets/bharat-organic-leaf.png",
  sidebarTop: asset("ChatGPT Image Sep 16, 2026, 04_29_31 PM.png"),
  sidebarFooter: sidebarFooterImage,
  profile: "/career-submit-resume-assets/profile.png",

  building: asset("building.png"),
  location: asset("location.png"),
  briefcase: asset("briefcase.png"),
  chart: asset("bar-chart.png"),
  graduation: asset("graduation-cap.png"),
  users: asset("users-large.png"),
};

/* =========================================================
   EDITABLE DATA
   ========================================================= */

const brandHeader = {
  title: "Bharat Organic Expo",
  tagline: "People • Ideas • Partnerships for a Greener Tomorrow",
};

const job = {
  title: "Sales Manager – Domestic Exhibition Sales & Sponsorships",
  company: "Namo Gange Wellness Pvt. Ltd.",
  brand: "Bharat Organic Expo",
};

const profile = {
  name: "Vijay Sharma",
  email: "vijay.sharma@gmail.com",
  phone: "+91 98765 43210",
  linkedin: "linkedin.com/in/vijay-sharma",
  image: assets.profile,
  cvName: "Vijay_Sharma_CV.pdf",
  cvSize: "842 KB",
};

const aiSummary = {
  score: 72,
  title: "Good Match!",
  text: "You meet the key requirements for this position.",
};

const cvDetails = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "MBA (Marketing)\nDelhi University",
  },
  {
    icon: ShieldCheck,
    label: "Key Skills",
    value: "B2B Sales, Client Acquisition,\nNegotiation, Event Management",
  },
  {
    icon: BriefcaseBusiness,
    label: "Industry Experience",
    value: "Exhibition / Trade Shows\n(4+ years)",
  },
  {
    icon: Trophy,
    label: "Relevant Achievements",
    value: "Increased exhibitor base by 30%\nin last event cycle",
  },
];

/* =========================================================
   HELPERS
   ========================================================= */

function Field({
  label,
  required,
  icon: Icon,
  value,
  onChange,
  rightIcon,
  type = "text",
}: {
  label: string;
  required?: boolean;
  icon?: React.ElementType;
  value: string;
  onChange: (value: string) => void;
  rightIcon?: React.ReactNode;
  type?: string;
}) {
  return (
    <label className="block min-w-0">
      <div className="mb-[5px] text-[13px] font-bold text-[#163a67]">
        {label}
        {required && <span className="ml-[3px] text-[#d92027]">*</span>}
      </div>

      <div className="flex h-[39px] items-center rounded-[5px] border border-[#cbd8e4] bg-white px-[10px] shadow-[inset_0_1px_2px_rgba(0,0,0,.02)] focus-within:border-[#4e91c9] focus-within:ring-1 focus-within:ring-[#4e91c9]/20">
        {Icon && (
          <Icon className="mr-[9px] h-[18px] w-[18px] shrink-0 text-[#58749a]" />
        )}

        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="min-w-0 flex-1 bg-transparent text-[13px] text-[#29445f] outline-none"
        />

        {rightIcon}
      </div>
    </label>
  );
}

function SelectField({
  label,
  required,
  icon: Icon,
  value,
  onChange,
  options,
}: {
  label: string;
  required?: boolean;
  icon?: React.ElementType;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="block min-w-0">
      <div className="mb-[5px] text-[13px] font-bold text-[#163a67]">
        {label}
        {required && <span className="ml-[3px] text-[#d92027]">*</span>}
      </div>

      <div className="relative flex h-[39px] items-center rounded-[5px] border border-[#cbd8e4] bg-white px-[10px] focus-within:border-[#4e91c9] focus-within:ring-1 focus-within:ring-[#4e91c9]/20">
        {Icon && (
          <Icon className="mr-[9px] h-[18px] w-[18px] shrink-0 text-[#58749a]" />
        )}

        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="min-w-0 flex-1 appearance-none bg-transparent pr-[24px] text-[13px] text-[#29445f] outline-none"
        >
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-[10px] h-[16px] w-[16px] text-[#17395f]" />
      </div>
    </label>
  );
}

function SectionTitle({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex h-[52px] items-center gap-[12px] rounded-t-[9px] border border-b-0 border-[#dceae1] bg-[linear-gradient(90deg,#f2fbf4,#edf8f0)] px-[16px]">
      <Icon className="h-[30px] w-[30px] text-[#076c3d]" strokeWidth={2.4} />
      <h2 className="text-[21px] font-black text-[#0b5b3c]">{title}</h2>
    </div>
  );
}

function RadioRow({
  name,
  value,
  checked,
  onChange,
  children,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-[8px] text-[13px] text-[#284567]">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="h-[20px] w-[20px] cursor-pointer accent-[#0c7ad8]"
      />
      {children}
    </label>
  );
}

/* =========================================================
   PROGRESS
   ========================================================= */

function ProgressSteps() {
  const steps = [
    { label: "Upload CV", done: true },
    { label: "AI Analysis", done: true },
    { label: "Fill Application", active: true },
    { label: "Review & Submit" },
  ];

  return (
    <div className="relative mx-auto h-full w-[82%]">
      <div className="absolute left-[12.5%] right-[12.5%] top-[17px] h-[2px] bg-[#d9e0e7]" />
      <div className="absolute left-[12.5%] top-[17px] h-[2px] w-[50%] bg-[#0a874d]" />

      <div className="relative grid h-full grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.label} className="flex flex-col items-center">
            <div
              className={[
                "grid h-[34px] w-[34px] place-items-center rounded-full text-[13px] font-black",
                step.done || step.active
                  ? "bg-[#078346] text-white"
                  : "bg-[#e1e8ee] text-[#17395f]",
              ].join(" ")}
            >
              {step.done ? (
                <Check className="h-[20px] w-[20px]" strokeWidth={3} />
              ) : (
                index + 1
              )}
            </div>

            <span className="mt-[6px] whitespace-nowrap text-[12px] font-bold text-[#17395f]">
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   PERSONAL INFORMATION
   ========================================================= */

function PersonalInformation() {
  const [fullName, setFullName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [location, setLocation] = useState("Delhi, NCR");
  const [relocate, setRelocate] = useState("Yes");

  return (
    <div className="overflow-hidden rounded-[9px] border border-[#dce8e0] bg-white">
      <SectionTitle icon={User} title="Personal Information" />

      <div className="grid grid-cols-[310px_1fr] gap-[16px] px-[14px] py-[12px]">
        {/* PHOTO + NOTE */}
        <div className="grid grid-cols-[108px_1fr] gap-[12px]">
          <div className="relative h-[127px] overflow-hidden rounded-[6px] border border-[#d8e3dc] bg-[#eef4f0]">
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              className="object-cover"
            />

            <span className="absolute bottom-[5px] right-[5px] grid h-[25px] w-[25px] place-items-center rounded-full bg-[#088049] text-white">
              <Pencil className="h-[13px] w-[13px]" />
            </span>
          </div>

          <div className="rounded-[6px] border border-[#bfe9cf] bg-[#effbf3] p-[10px]">
            <div className="flex items-center gap-[6px] text-[12px] font-black text-[#0a7043]">
              <CheckCircle2 className="h-[17px] w-[17px] fill-[#13a451] text-white" />
              Photo is mandatory <span className="text-[#d91d26]">*</span>
            </div>

            <p className="mt-[5px] text-[11px] leading-[1.28] text-[#2e5c49]">
              A clear photograph helps us to know you better.
            </p>

            <p className="mt-[6px] text-[10.5px] leading-[1.3] text-[#335a4a]">
              Recommended: JPG/PNG,
              <br />
              max 2 MB
            </p>
          </div>
        </div>

        {/* FIELDS */}
        <div className="grid grid-cols-3 gap-x-[14px] gap-y-[10px]">
          <Field
            label="Full Name"
            required
            icon={User}
            value={fullName}
            onChange={setFullName}
          />

          <Field
            label="Email Address"
            required
            icon={Mail}
            type="email"
            value={email}
            onChange={setEmail}
            rightIcon={<CheckCircle2 className="h-[17px] w-[17px] fill-[#11a050] text-white" />}
          />

          <Field
            label="Phone Number"
            required
            icon={Phone}
            value={phone}
            onChange={setPhone}
            rightIcon={<CheckCircle2 className="h-[17px] w-[17px] fill-[#11a050] text-white" />}
          />

          <div className="col-span-1">
            <SelectField
              label="Current Location"
              required
              icon={MapPin}
              value={location}
              onChange={setLocation}
              options={["Delhi, NCR", "Noida", "Gurugram", "Ghaziabad", "Faridabad", "Other"]}
            />
          </div>

          <div className="col-span-2">
            <div className="mb-[6px] text-[13px] font-bold text-[#163a67]">
              Willing to Relocate? <span className="text-[#d92027]">*</span>
            </div>

            <div className="flex h-[39px] items-center gap-[24px]">
              <RadioRow
                name="relocate"
                value="Yes"
                checked={relocate === "Yes"}
                onChange={setRelocate}
              >
                Yes
              </RadioRow>

              <RadioRow
                name="relocate"
                value="No"
                checked={relocate === "No"}
                onChange={setRelocate}
              >
                No
              </RadioRow>

              <RadioRow
                name="relocate"
                value="Yes, Pan India"
                checked={relocate === "Yes, Pan India"}
                onChange={setRelocate}
              >
                Yes, Pan India
              </RadioRow>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PROFESSIONAL DETAILS
   ========================================================= */

function ProfessionalDetails() {
  const [employmentStatus, setEmploymentStatus] = useState("Currently Employed");
  const [company, setCompany] = useState("ABC Exhibitions Pvt. Ltd.");
  const [openRoles, setOpenRoles] = useState(true);
  const [designation, setDesignation] = useState("Senior Sales Executive");
  const [experience, setExperience] = useState("5 Years 8 Months");
  const [noticePeriod, setNoticePeriod] = useState("30 Days");
  const [expectedCTC, setExpectedCTC] = useState("As per industry standards");
  const [ctcFlexible, setCtcFlexible] = useState("Yes");

  return (
    <div className="overflow-hidden rounded-[9px] border border-[#dce8e0] bg-white">
      <SectionTitle icon={BriefcaseBusiness} title="Professional Details" />

      <div className="grid grid-cols-[270px_1fr] gap-[18px] px-[14px] py-[12px]">
        {/* EMPLOYMENT STATUS */}
        <div className="border-r border-[#e3e8eb] pr-[18px]">
          <div className="mb-[8px] text-[13px] font-bold text-[#163a67]">
            Employment Status <span className="text-[#d92027]">*</span>
          </div>

          <div className="space-y-[10px]">
            <RadioRow
              name="employment"
              value="Currently Employed"
              checked={employmentStatus === "Currently Employed"}
              onChange={setEmploymentStatus}
            >
              Currently Employed
            </RadioRow>

            <div>
              <RadioRow
                name="employment"
                value="Not Currently Employed"
                checked={employmentStatus === "Not Currently Employed"}
                onChange={setEmploymentStatus}
              >
                Not Currently Employed
              </RadioRow>
              <div className="ml-[28px] mt-[2px] text-[10.5px] text-[#65819e]">
                (Looking for new opportunity)
              </div>
            </div>

            <div>
              <RadioRow
                name="employment"
                value="Fresher"
                checked={employmentStatus === "Fresher"}
                onChange={setEmploymentStatus}
              >
                Fresher
              </RadioRow>
              <div className="ml-[28px] mt-[2px] text-[10.5px] text-[#65819e]">
                (No prior work experience)
              </div>
            </div>
          </div>

          <div className="mt-[20px] rounded-[5px] border border-[#c8def0] bg-[#f0f7fd] px-[10px] py-[7px] text-[10.5px] leading-[1.3] text-[#487096]">
            <div className="flex items-start gap-[7px]">
              <Info className="mt-[1px] h-[15px] w-[15px] shrink-0 text-[#1f6fae]" />
              <span>
                Since you are currently employed, please share accurate details.
                If you are in notice period, mention your last working day.
              </span>
            </div>
          </div>
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-2 gap-x-[18px] gap-y-[10px]">
          <div>
            <Field
              label="Current Company"
              required
              icon={Building2}
              value={company}
              onChange={setCompany}
              rightIcon={<CheckCircle2 className="h-[17px] w-[17px] fill-[#11a050] text-white" />}
            />

            <label className="mt-[7px] flex cursor-pointer items-center gap-[7px] text-[11.5px] text-[#365b78]">
              <input
                type="checkbox"
                checked={openRoles}
                onChange={(e) => setOpenRoles(e.target.checked)}
                className="h-[18px] w-[18px] cursor-pointer accent-[#0a8148]"
              />
              I am open to similar or other roles
            </label>
          </div>

          <Field
            label="Current Designation"
            required
            icon={User}
            value={designation}
            onChange={setDesignation}
            rightIcon={<CheckCircle2 className="h-[17px] w-[17px] fill-[#11a050] text-white" />}
          />

          <SelectField
            label="Total Experience"
            required
            icon={Target}
            value={experience}
            onChange={setExperience}
            options={[
              "Fresher",
              "1 Year",
              "2 Years",
              "3 Years",
              "4 Years",
              "5 Years 8 Months",
              "6+ Years",
            ]}
          />

          <SelectField
            label="Notice Period"
            required
            icon={Clock3}
            value={noticePeriod}
            onChange={setNoticePeriod}
            options={["Immediate", "15 Days", "30 Days", "45 Days", "60 Days", "90 Days"]}
          />

          <SelectField
            label="Expected CTC (Annual)"
            required
            value={expectedCTC}
            onChange={setExpectedCTC}
            options={[
              "As per industry standards",
              "₹4 - 6 LPA",
              "₹6 - 8 LPA",
              "₹8 - 10 LPA",
              "₹10 - 12 LPA",
              "₹12+ LPA",
            ]}
          />

          <div>
            <div className="mb-[6px] text-[13px] font-bold text-[#163a67]">
              Expected CTC is Flexible?
            </div>

            <div className="flex h-[39px] items-center gap-[24px]">
              <RadioRow
                name="ctcFlexible"
                value="Yes"
                checked={ctcFlexible === "Yes"}
                onChange={setCtcFlexible}
              >
                Yes
              </RadioRow>

              <RadioRow
                name="ctcFlexible"
                value="No"
                checked={ctcFlexible === "No"}
                onChange={setCtcFlexible}
              >
                No
              </RadioRow>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   TELL US MORE
   ========================================================= */

function TellUsMore() {
  const [interest, setInterest] = useState(
    "I am passionate about the exhibition and event industry and would love to contribute to Bharat Organic Expo's mission of promoting a healthier and more sustainable India."
  );
  const [confirmed, setConfirmed] = useState(true);

  return (
    <div className="overflow-hidden rounded-[9px] border border-[#dce8e0] bg-white">
      <SectionTitle icon={FileText} title="Tell Us More (Optional)" />

      <div className="px-[14px] py-[10px]">
        <div className="text-[12.5px] font-bold text-[#163a67]">
          Why are you interested in this role?
        </div>

        <div className="relative mt-[5px]">
          <textarea
            value={interest}
            onChange={(e) => setInterest(e.target.value.slice(0, 500))}
            className="min-h-[64px] w-full resize-none rounded-[5px] border border-[#ccd9e3] bg-white px-[11px] py-[8px] pr-[62px] text-[12px] leading-[1.35] text-[#29445f] outline-none focus:border-[#4e91c9] focus:ring-1 focus:ring-[#4e91c9]/20"
          />

          <span className="pointer-events-none absolute bottom-[7px] right-[8px] text-[10px] text-[#7890a7]">
            {interest.length}/500
          </span>
        </div>

        <div className="mt-[10px] flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-[8px] text-[11.5px] text-[#355979]">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="h-[22px] w-[22px] cursor-pointer accent-[#0b7d47]"
            />
            I confirm that the information provided is accurate and up to date.
          </label>

          <button
            type="button"
            disabled={!confirmed}
            onClick={() => {
              if (confirmed) {
                alert("Form reviewed successfully.");
              }
            }}
            className={[
              "flex h-[42px] min-w-[220px] items-center justify-center gap-[12px] rounded-[5px] px-[20px] text-[13px] font-black text-white shadow-sm",
              confirmed
                ? "bg-[#08743e] hover:bg-[#076637]"
                : "cursor-not-allowed bg-[#9eb8aa]",
            ].join(" ")}
          >
            Review & Continue
            <ArrowRight className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SIDEBAR
   ========================================================= */

function CVCard() {
  return (
    <div className="rounded-[8px] border border-[#dce8e0] bg-white p-[14px] shadow-sm">
      <h3 className="text-[17px] font-black text-[#123963]">Your CV</h3>

      <div className="mt-[10px] flex items-center gap-[14px] rounded-[5px] bg-[#f2f7fa] px-[13px] py-[12px]">
        <div className="relative grid h-[64px] w-[56px] place-items-center rounded-[5px] border-[3px] border-[#087447] text-[#087447]">
          <FileText className="h-[32px] w-[32px]" />

          <span className="absolute -bottom-[8px] -right-[8px] grid h-[23px] w-[23px] place-items-center rounded-full bg-[#087447] text-white">
            <Check className="h-[14px] w-[14px]" strokeWidth={3} />
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="truncate text-[13px] font-black text-[#14385f]">{profile.cvName}</h4>
          <p className="mt-[2px] text-[12px] text-[#58708c]">{profile.cvSize}</p>

          <div className="mt-[7px] flex gap-[18px] text-[11.5px] font-bold text-[#0874ce]">
            <button className="flex items-center gap-[5px]">
              <Eye className="h-[14px] w-[14px]" />
              View File
            </button>

            <button className="flex items-center gap-[5px]">
              <RefreshCw className="h-[14px] w-[14px]" />
              Upload Different CV
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[10px] flex items-center gap-[10px] rounded-[5px] bg-[#effaf3] px-[12px] py-[9px] text-[11.5px] leading-[1.3] text-[#2e5f48]">
        <CheckCircle2 className="h-[22px] w-[22px] shrink-0 fill-[#14a451] text-white" />
        <span>
          Great! We&apos;ve pre-filled this form using your CV.
          <br />
          Please review and complete the remaining details.
        </span>
      </div>
    </div>
  );
}

function AISummaryCard() {
  return (
    <div className="rounded-[8px] border border-[#dce8e0] bg-white p-[14px] shadow-sm">
      <h3 className="text-[17px] font-black text-[#123963]">AI Analysis Summary</h3>

      <div className="mt-[10px] grid grid-cols-[132px_1fr] gap-[13px]">
        <div
          className="relative grid aspect-square place-items-center rounded-full"
          style={{
            background: `conic-gradient(#28aa42 ${aiSummary.score * 3.6}deg,#d7e4dd ${aiSummary.score * 3.6}deg)`,
          }}
        >
          <div className="absolute inset-[11px] rounded-full bg-white" />

          <div className="relative z-10 text-center">
            <div className="text-[34px] font-black leading-none text-[#123963]">
              {aiSummary.score}%
            </div>
            <div className="mt-[4px] text-[11px] font-bold text-[#123963]">Match Score</div>
          </div>
        </div>

        <div className="rounded-[6px] bg-[#effaf2] px-[13px] py-[12px]">
          <h4 className="text-[16px] font-black text-[#11813e]">{aiSummary.title}</h4>
          <p className="mt-[6px] text-[12px] leading-[1.35] text-[#284f3f]">{aiSummary.text}</p>

          <button className="mt-[12px] flex items-center gap-[8px] text-[12px] font-black text-[#0b6941]">
            View Detailed Analysis
            <ArrowRight className="h-[15px] w-[15px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

function CVDetailsCard() {
  return (
    <div className="rounded-[8px] border border-[#dce8e0] bg-white p-[14px] shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-[16px] font-black text-[#123963]">Key Details from CV</h3>

        <button className="flex items-center gap-[5px] text-[12px] font-bold text-[#0874ce]">
          <Edit3 className="h-[14px] w-[14px]" />
          Edit
        </button>
      </div>

      <div className="mt-[8px] divide-y divide-[#e6ece8]">
        {cvDetails.map(({ icon: Icon, label, value }) => (
          <div key={label} className="grid grid-cols-[28px_122px_1fr_22px] items-start gap-[6px] py-[9px]">
            <Icon className="mt-[1px] h-[20px] w-[20px] text-[#123f70]" />
            <div className="text-[11.5px] font-bold text-[#17395f]">{label}</div>
            <div className="whitespace-pre-line text-[11.2px] leading-[1.25] text-[#294a6c]">{value}</div>
            <CheckCircle2 className="h-[18px] w-[18px] fill-[#0ca34e] text-white" />
          </div>
        ))}
      </div>
    </div>
  );
}

function UpdateCVCard() {
  return (
    <div className="rounded-[8px] border border-[#dce8e0] bg-white p-[14px] shadow-sm">
      <div className="flex items-start gap-[10px]">
        <Info className="mt-[1px] h-[25px] w-[25px] shrink-0 text-[#0b7350]" />

        <div className="min-w-0">
          <h3 className="text-[14px] font-black text-[#17395f]">Need to Update CV Details?</h3>
          <p className="mt-[4px] text-[11.5px] leading-[1.35] text-[#47617d]">
            You can edit any field or upload a different CV
            <br />
            to re-analyze your profile.
          </p>

          <button className="mt-[10px] h-[34px] min-w-[190px] rounded-[4px] border border-[#0b7049] bg-white px-[18px] text-[11.5px] font-black text-[#0b7049]">
            Upload New CV
          </button>
        </div>
      </div>
    </div>
  );
}

function SidebarFooter() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[165px] overflow-hidden">
      <Image
        src={assets.sidebarFooter}
        alt=""
        fill
        sizes="32vw"
        className="object-cover object-bottom"
      />
    </div>
  );
}

function Sidebar({ onClose }: { onClose: () => void }) {
  return (
    <aside className="relative flex h-full min-h-0 flex-col overflow-y-auto border-l border-[#e4ebe5] bg-[linear-gradient(180deg,#f8fcf9,#eef8f1)] px-[16px] pb-[20px] pt-[8px]">
      <SidebarFooter />

      <div className="relative z-10 flex h-[84px] shrink-0 items-start justify-between">
        <Image
          src={assets.sidebarTop}
          alt="Together for a Healthier Tomorrow"
          width={2040}
          height={771}
          className="h-[78px] w-[240px] object-contain object-left-top"
        />

        <button
          type="button"
          onClick={onClose}
          className="mt-[8px] flex h-[37px] items-center gap-[8px] rounded-[4px] bg-[#08743e] px-[13px] text-[11px] font-black text-white"
        >
          <Home className="h-[15px] w-[15px]" />
          Back to Website
        </button>
      </div>

      <div className="relative z-10 mt-[7px] space-y-[10px]">
        <CVCard />
        <AISummaryCard />
        <CVDetailsCard />
        <UpdateCVCard />
      </div>
    </aside>
  );
}

/* =========================================================
   POPUP CONTENT
   ========================================================= */

function ApplicationFormContent({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="relative grid min-h-full w-full overflow-hidden bg-white text-[#10243f]"
      style={{
        width: `${DESIGN_WIDTH}px`,
        gridTemplateColumns: "68.2% 31.8%",
      }}
    >
      {/* LEFT */}
      <section className="flex h-full min-h-0 flex-col overflow-y-auto px-[36px] pb-[24px] pt-[16px]">
        {/* HEADER */}
        <div className="flex shrink-0 items-center gap-[10px]">
          <Image
            src={assets.headerLeaf}
            alt=""
            width={82}
            height={92}
            priority
            className="h-[46px] w-[42px] shrink-0 object-contain"
          />

          <div className="min-w-0">
            <div className="truncate text-[23px] font-black leading-[1] text-[#103f31]">
              {brandHeader.title}
            </div>
            <div className="mt-[3px] truncate text-[11.5px] font-semibold leading-[1.05] text-[#2d6f62]">
              {brandHeader.tagline}
            </div>
          </div>
        </div>

        {/* TITLE */}
        <div className="mt-[10px] shrink-0">
          <Link
            href="/careers"
            className="flex w-fit items-center gap-[7px] text-[14px] font-extrabold text-[#0d5d3c]"
          >
            <ArrowLeft className="h-[16px] w-[16px]" />
            Back
          </Link>

          <h1 className="mt-[8px] text-[30px] font-black leading-none tracking-[-0.02em] text-[#123963]">
            {job.title}
          </h1>

          <div className="mt-[7px] flex items-center gap-[12px] text-[16px] text-[#1c4b78]">
            <span>{job.company}</span>
            <span className="h-[17px] w-px bg-[#c8d3dc]" />
            <span>{job.brand}</span>
          </div>
        </div>

        {/* STEPS */}
        <div className="mt-[10px] shrink-0">
          <ProgressSteps />
        </div>

        {/* FORM */}
        <div className="mt-[12px] flex shrink-0 flex-col gap-[12px]">
          <PersonalInformation />
          <ProfessionalDetails />
          <TellUsMore />
        </div>
      </section>

      {/* RIGHT */}
      <Sidebar onClose={onClose} />
    </div>
  );
}

/* =========================================================
   MODAL
   ========================================================= */

const MODAL_WIDTH = "min(92vw, 1440px, calc(92vh * 1500 / 972))";

export function ApplicationFormModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop += e.deltaY;
      e.stopPropagation();
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3">
      <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[5px]" onClick={onClose} />

      <div
        ref={scrollRef}
        onWheel={handleWheel}
        className="relative max-h-[92vh] overflow-y-auto overflow-x-hidden rounded-[18px] bg-[#fbfcf9] shadow-[0_30px_90px_rgba(0,0,0,0.28)]"
        style={{
          width: MODAL_WIDTH,
          touchAction: "pan-y",
        }}
      >
        <div className="relative w-full overflow-hidden">
          <div
            className="left-0 top-0 overflow-hidden bg-[#fbfcf9]"
            style={{
              width: `${DESIGN_WIDTH}px`,
              height: `${DESIGN_HEIGHT}px`,
              transform: `scale(calc(${MODAL_WIDTH} / ${DESIGN_WIDTH}px))`,
              transformOrigin: "top left",
            }}
          >
            <ApplicationFormContent onClose={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PAGE
   ========================================================= */

export default function CareerApplicationFormPage() {
  const [open, setOpen] = useState(true);

  return (
    <main className="min-h-screen bg-white">
      {!open && (
        <div className="flex min-h-screen items-center justify-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-[8px] bg-[#08743e] px-6 py-3 text-sm font-bold text-white"
          >
            Open Application Form
          </button>
        </div>
      )}

      <ApplicationFormModal isOpen={open} onClose={() => setOpen(false)} />
    </main>
  );
}
