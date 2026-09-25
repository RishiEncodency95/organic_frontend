"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import sidebarFooterImage from "../../assets/carrer/grow-organic-grow-india.png";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Eye,
  FileText,
  GraduationCap,
  Home,
  Info,
  Loader2,
  Lock,
  Mail,
  MapPin,
  Pencil,
  Phone,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  User,
  XCircle,
} from "lucide-react";

/* =========================================================
   SAME POPUP CANVAS / DIMENSIONS
   ========================================================= */

const DESIGN_WIDTH = 1500;
const DESIGN_HEIGHT = 900;

/* =========================================================
   ASSETS
   ========================================================= */

const asset = (file: string) => `/separated-assets/${file}`;

const assets = {
  sidebarTop: asset("career-sidebar-top.png"),
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
  disabled = false,
}: {
  label: string;
  required?: boolean;
  icon?: React.ElementType;
  value: string;
  onChange: (value: string) => void;
  rightIcon?: React.ReactNode;
  type?: string;
  disabled?: boolean;
}) {
  return (  
    <label className="block min-w-0">
      <div className="mb-[4px] flex items-center justify-between text-[12.5px] font-semibold text-[#163a67]">
        <span>
          {label}
          {required && <span className="ml-[3px] text-[#d92027]">*</span>}
        </span>
        {disabled && (
          <span className="flex items-center gap-[3px] text-[10px] font-normal text-[#64748b]">
            <Lock className="h-[9px] w-[9px]" /> Read Only
          </span>
        )}
      </div>

      <div className={`flex h-[32px] items-center rounded-[5px] border border-[#cbd8e4] px-[9px] shadow-[inset_0_1px_2px_rgba(0,0,0,.02)] ${disabled ? 'bg-[#f4f7f5] opacity-85' : 'bg-white focus-within:border-[#4e91c9] focus-within:ring-1 focus-within:ring-[#4e91c9]/20'}`}>
        {Icon && (
          <Icon className="mr-[7px] h-[15px] w-[15px] shrink-0 text-[#58749a]" />
        )}

        <input
          type={type}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className="min-w-0 flex-1 bg-transparent text-[13px] text-[#29445f] outline-none disabled:cursor-not-allowed font-medium"
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
  disabled = false,
}: {
  label: string;
  required?: boolean;
  icon?: React.ElementType;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  disabled?: boolean;
}) {
  return (
    <label className="block min-w-0">
      <div className="mb-[4px] flex items-center justify-between text-[12.5px] font-semibold text-[#163a67]">
        <span>
          {label}
          {required && <span className="ml-[3px] text-[#d92027]">*</span>}
        </span>
        {disabled && (
          <span className="flex items-center gap-[3px] text-[10px] font-normal text-[#64748b]">
            <Lock className="h-[9px] w-[9px]" /> Read Only
          </span>
        )}
      </div>

      <div className={`relative flex h-[32px] items-center rounded-[5px] border border-[#cbd8e4] px-[9px] ${disabled ? 'bg-[#f4f7f5] opacity-85' : 'bg-white focus-within:border-[#4e91c9] focus-within:ring-1 focus-within:ring-[#4e91c9]/20'}`}>
        {Icon && (
          <Icon className="mr-[7px] h-[15px] w-[15px] shrink-0 text-[#58749a]" />
        )}

        <select
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className="min-w-0 flex-1 appearance-none bg-transparent pr-[20px] text-[13px] text-[#29445f] outline-none disabled:cursor-not-allowed font-medium"
        >
          {options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-[9px] h-[14px] w-[14px] text-[#17395f]" />
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
    <div className="flex h-[36px] items-center gap-[11px] rounded-t-[8px] border border-b-0 border-[#dceae1] bg-[linear-gradient(90deg,#f2fbf4,#edf8f0)] px-[16px]">
      <Icon className="h-[18px] w-[18px] text-[#076c3d]" strokeWidth={2.4} />
      <h2 className="text-[15px] font-semibold text-[#0b5b3c]">{title}</h2>
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
    <label className="flex cursor-pointer items-center gap-[7px] text-[13px] font-semibold text-[#284567]">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="h-[15px] w-[15px] cursor-pointer accent-[#0c7ad8]"
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
      <div className="absolute left-[12.5%] right-[12.5%] top-[14px] h-[2px] bg-[#d9e0e7]" />
      <div className="absolute left-[12.5%] top-[14px] h-[2px] w-[50%] bg-[#0a874d]" />

      <div className="relative grid h-full grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.label} className="flex flex-col items-center">
            <div
              className={[
                "grid h-[31px] w-[31px] place-items-center rounded-full text-[13.5px] font-semibold",
                step.done || step.active
                  ? "bg-[#078346] text-white"
                  : "bg-[#e1e8ee] text-[#17395f]",
              ].join(" ")}
            >
              {step.done ? (
                <Check className="h-[16px] w-[16px]" strokeWidth={3} />
              ) : (
                index + 1
              )}
            </div>

            <span className="mt-[5px] whitespace-nowrap text-[13.5px] font-semibold text-[#17395f]">
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   IMAGE BLUR CHECK HELPER
   ========================================================= */

function inspectPhotoBlur(canvas: HTMLCanvasElement): number {
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return 100;
  const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const side = canvas.width;
  const gray = new Float32Array(side * side);
  for (let i = 0; i < gray.length; i += 1) {
    const p = i * 4;
    gray[i] = 0.299 * data[p] + 0.587 * data[p + 1] + 0.114 * data[p + 2];
  }
  let sum = 0;
  let sumSq = 0;
  let count = 0;
  for (let y = 1; y < side - 1; y += 1) {
    for (let x = 1; x < side - 1; x += 1) {
      const i = y * side + x;
      const lap = 4 * gray[i] - gray[i - 1] - gray[i + 1] - gray[i - side] - gray[i + side];
      sum += lap;
      sumSq += lap * lap;
      count += 1;
    }
  }
  const mean = sum / count;
  return sumSq / count - mean * mean;
}

/* =========================================================
   PERSONAL INFORMATION (READ-ONLY DETAILS + MANDATORY PHOTO)
   ========================================================= */

function PersonalInformation({
  candidateData,
  photoSrc,
  setPhotoSrc,
  isPhotoVerified,
  setIsPhotoVerified,
  location,
  setLocation,
  relocate,
  setRelocate,
}: {
  candidateData?: any;
  photoSrc: string | null;
  setPhotoSrc: (url: string | null) => void;
  isPhotoVerified: boolean;
  setIsPhotoVerified: (verified: boolean) => void;
  location: string;
  setLocation: (value: string) => void;
  relocate: string;
  setRelocate: (value: string) => void;
}) {
  const fullName = candidateData?.candidateName || candidateData?.firstName || profile.name;
  const email = candidateData?.email || profile.email;
  const phone = candidateData?.phone || candidateData?.verifiedPhone || profile.phone;

  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationError, setVerificationError] = useState<string | null>(null);
  const [verifiedGender, setVerifiedGender] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoSelect = async (file: File) => {
    setVerificationError(null);
    setIsVerifying(true);
    setIsPhotoVerified(false);

    if (!file.type.startsWith("image/")) {
      setVerificationError("Invalid file. Please select a JPG or PNG photo.");
      setIsVerifying(false);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setVerificationError("Photo size exceeds 5 MB. Please upload a smaller image.");
      setIsVerifying(false);
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      if (!dataUrl) {
        setVerificationError("Failed to read image data.");
        setIsVerifying(false);
        return;
      }

      const img = new window.Image();
      img.onload = async () => {
        if (img.naturalWidth < 150 || img.naturalHeight < 150) {
          setVerificationError("Image size is too small. Minimum resolution is 150x150 pixels.");
          setIsVerifying(false);
          return;
        }

        // 1. Local Canvas Blur check
        const canvas = document.createElement("canvas");
        const side = 160;
        canvas.width = side;
        canvas.height = side;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, side, side);
          const blurScore = inspectPhotoBlur(canvas);
          if (blurScore < 45) {
            setVerificationError("Photo is blurry! Please upload a clear, sharp photograph.");
            setIsVerifying(false);
            return;
          }
        }

        // 2. Deep AI vision check: real human adult face, appropriate content, upright,
        // clear, and (when the résumé states a gender) matching it.
        const resumeGender = candidateData?.fullProfile?.gender || candidateData?.gender || null;
        try {
          const res = await fetch("/api/verify-image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ imageBase64: dataUrl, expectedGender: resumeGender }),
          });

          const json = await res.json();
          if (json.success) {
            setPhotoSrc(dataUrl);
            setIsPhotoVerified(true);
            setVerifiedGender(json.gender || "Human");
            setVerificationError(null);
          } else {
            setVerificationError(
              json.reason || "Please upload a clear, upright photo of your own face."
            );
            setIsPhotoVerified(false);
          }
        } catch (err: any) {
          console.warn("API verify image error:", err);
          // Fail closed: an unverifiable photo must not be silently accepted, since that
          // would defeat this entire check.
          setVerificationError("We couldn't verify this photo right now. Please try again.");
          setIsPhotoVerified(false);
        } finally {
          setIsVerifying(false);
        }
      };

      img.onerror = () => {
        setVerificationError("Could not process image file.");
        setIsVerifying(false);
      };

      img.src = dataUrl;
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="overflow-hidden rounded-[8px] border border-[#dce8e0] bg-white">
      <SectionTitle icon={User} title="Personal Information" />

      <div className="grid grid-cols-[310px_1fr] gap-[14px] px-[14px] py-[12px]">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              handlePhotoSelect(e.target.files[0]);
              e.target.value = "";
            }
          }}
        />

        {/* PHOTO + UPLOAD & AI STATUS */}
        <div className="grid grid-cols-[100px_1fr] gap-[10px]">
          <div
            onClick={() => !isVerifying && fileInputRef.current?.click()}
            className={`relative h-[110px] cursor-pointer overflow-hidden rounded-[6px] border ${
              isPhotoVerified
                ? "border-[#10b981] ring-2 ring-[#10b981]/20"
                : verificationError
                ? "border-[#ef4444] ring-2 ring-[#ef4444]/20"
                : "border-[#d8e3dc] bg-[#8d97a5]"
            } bg-[#f0f4f2] transition-all hover:opacity-95`}
          >
            {photoSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={photoSrc}
                alt={fullName}
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-[#e4efe8] text-[#076d49]">
                <User className="h-[40px] w-[40px] text-[#087447]" />
                <span className="mt-[2px] text-[9.5px] font-semibold text-[#18395d]">Upload Photo</span>
              </div>
            )}

            {isVerifying ? (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/60 text-white">
                <Loader2 className="h-[22px] w-[22px] animate-spin text-emerald-400" />
                <span className="mt-[4px] text-[9px] font-bold">Verifying AI...</span>
              </div>
            ) : (
              <span className="absolute bottom-[4px] right-[4px] z-10 grid h-[24px] w-[24px] place-items-center rounded-full bg-[#088049] text-white shadow-md transition-colors hover:bg-[#06683b]">
                <Pencil className="h-[12px] w-[12px]" />
              </span>
            )}
          </div>

          <div className="flex flex-col justify-start gap-[6px] rounded-[6px] border border-[#bfe9cf] bg-[#effbf3] p-[7px]">
            {isVerifying ? (
              <div className="flex items-center gap-[6px] text-[13px] font-bold text-[#0284c7]">
                <Loader2 className="h-[15px] w-[15px] animate-spin" />
                Checking Vision...
              </div>
            ) : isPhotoVerified ? (
              <div className="space-y-[3px]">
                <div className="flex items-center gap-[5px] text-[13.5px] font-bold text-[#047857]">
                  <CheckCircle2 className="h-[16px] w-[16px] fill-[#059669] text-white" />
                  Photo Verified
                </div>
                <p className="text-[11.5px] font-semibold text-[#065f46]">
                  ✓ Valid male/female face, upright & sharp photo.
                </p>
              </div>
            ) : verificationError ? (
              <div className="space-y-[3px]">
                <div className="flex items-center gap-[5px] text-[13px] font-bold text-[#b91c1c]">
                  <XCircle className="h-[15px] w-[15px] text-[#dc2626]" />
                  Photo Rejected
                </div>
                <p className="text-[11px] font-medium leading-[1.25] text-[#991b1b]">
                  {verificationError}
                </p>
              </div>
            ) : (
              <div className="space-y-[3px]">
                <div className="flex items-center gap-[6px] text-[13.5px] font-bold text-[#0a7043]">
                  <Sparkles className="h-[15px] w-[15px] text-[#059669]" />
                  Photo is Mandatory <span className="text-[#d91d26]">*</span>
                </div>
                <p className="text-[11.5px] leading-[1.25] text-[#2e5c49]">
                  Upload a clear, upright photo of male/female face. No blurry or upside-down photos allowed.
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              disabled={isVerifying}
              className="mt-[6px] h-[26px] w-full rounded-[4px] bg-[#076c3d] text-[11.5px] font-bold text-white shadow-sm hover:bg-[#055630] disabled:opacity-50"
            >
              {photoSrc ? "Change & Re-Verify" : "Choose & Verify Photo"}
            </button>
          </div>
        </div>

        {/* READ-ONLY PERSONAL FIELDS FROM CV */}
        <div className="grid grid-cols-3 gap-x-[12px] gap-y-[8px]">
          <Field
            label="Full Name"
            required
            icon={User}
            value={fullName}
            onChange={() => {}}
            disabled={true}
          />

          <Field
            label="Email"
            required
            icon={Mail}
            type="email"
            value={email}
            onChange={() => {}}
            disabled={true}
            rightIcon={<CheckCircle2 className="h-[15px] w-[15px] fill-[#11a050] text-white" />}
          />

          <Field
            label="Phone No."
            required
            icon={Phone}
            value={phone}
            onChange={() => {}}
            disabled={true}
            rightIcon={<CheckCircle2 className="h-[15px] w-[15px] fill-[#11a050] text-white" />}
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
            <div className="mb-[4px] text-[12.5px] font-semibold text-[#163a67]">
              Willing to Relocate? <span className="text-[#d92027]">*</span>
            </div>

            <div className="flex h-[28px] items-center gap-[20px]">
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
   PROFESSIONAL DETAILS (READ-ONLY FROM RESUME)
   ========================================================= */

function ProfessionalDetails({
  candidateData,
  employmentStatus,
  setEmploymentStatus,
  openRoles,
  setOpenRoles,
  noticePeriod,
  setNoticePeriod,
  expectedCTC,
  setExpectedCTC,
  ctcFlexible,
  setCtcFlexible,
  otherBenefits,
  setOtherBenefits,
}: {
  candidateData?: any;
  employmentStatus: string;
  setEmploymentStatus: (value: string) => void;
  openRoles: boolean;
  setOpenRoles: (value: boolean) => void;
  noticePeriod: string;
  setNoticePeriod: (value: string) => void;
  expectedCTC: string;
  setExpectedCTC: (value: string) => void;
  ctcFlexible: string;
  setCtcFlexible: (value: string) => void;
  otherBenefits: string;
  setOtherBenefits: (value: string) => void;
}) {
  // Read-only values parsed directly from candidate's Resume/CV
  const company = candidateData?.currentCompany || candidateData?.fullProfile?.currentCompany || "ABC Exhibitions Pvt. Ltd.";
  const designation = candidateData?.currentDesignation || candidateData?.fullProfile?.currentDesignation || "Senior Sales Executive";
  const experience = candidateData?.totalExperience || candidateData?.fullProfile?.totalExperience || "5 Years 8 Months";

  const isFresher = employmentStatus === "Fresher";
  const isNotEmployed = employmentStatus === "Not Currently Employed";
  const isCurrentlyEmployed = employmentStatus === "Currently Employed";

  return (
    <div className="overflow-hidden rounded-[8px] border border-[#dce8e0] bg-white">
      <SectionTitle icon={BriefcaseBusiness} title="Professional Details" />

      <div className="grid grid-cols-[250px_1fr] gap-[10px] px-[14px] py-[10px]">
        {/* EMPLOYMENT STATUS */}
        <div className="border-r border-[#e3e8eb] pr-[10px]">
          <div className="mb-[6px] text-[13px] font-semibold text-[#163a67]">
            Employment Status <span className="text-[#d92027]">*</span>
          </div>

          <div className="space-y-[6px]">
            <RadioRow
              name="employment"
              value="Currently Employed"
              checked={isCurrentlyEmployed}
              onChange={(val) => setEmploymentStatus(val)}
            >
              Currently Employed
            </RadioRow>

            <div>
              <RadioRow
                name="employment"
                value="Not Currently Employed"
                checked={isNotEmployed}
                onChange={(val) => {
                  setEmploymentStatus(val);
                  setNoticePeriod("Immediate");
                }}
              >
                Not Currently Employed
              </RadioRow>
              <div className="ml-[26px] mt-[2px] text-[12.5px] text-[#65819e]">
                (Looking for new opportunity)
              </div>
            </div>

            <div>
              <RadioRow
                name="employment"
                value="Fresher"
                checked={isFresher}
                onChange={(val) => {
                  setEmploymentStatus(val);
                  setNoticePeriod("Immediate");
                }}
              >
                Fresher
              </RadioRow>
              <div className="ml-[26px] mt-[2px] text-[12.5px] text-[#65819e]">
                (No prior work experience)
              </div>
            </div>
          </div>

          <div className="mt-[12px] rounded-[5px] border border-[#c8def0] bg-[#f0f7fd] px-[10px] py-[7px] text-[12.5px] leading-[1.35] text-[#487096]">
            <div className="flex items-start gap-[5px]">
              <Info className="mt-[1px] h-[13px] w-[13px] shrink-0 text-[#1f6fae]" />
              <span>
                {isFresher
                  ? "As a Fresher, please share your expected CTC and availability to join."
                  : isNotEmployed
                  ? "Please share details of your previous organization and availability to join."
                  : "These professional fields are extracted from your CV and locked for verification."}
              </span>
            </div>
          </div>
        </div>

        {/* DETAILS GRID (READ-ONLY FOR COMPANY, DESIGNATION, EXPERIENCE) */}
        <div className="grid grid-cols-2 gap-x-[10px] gap-y-[4px]">
          {!isFresher ? (
            <div>
              <Field
                label={isNotEmployed ? "Previous / Last Company" : "Current Company"}
                required={isCurrentlyEmployed}
                icon={Building2}
                value={company}
                onChange={() => {}}
                disabled={true}
                rightIcon={<CheckCircle2 className="h-[15px] w-[15px] fill-[#11a050] text-white" />}
              />

              <label className="mt-[5px] flex cursor-pointer items-center gap-[7px] text-[13.5px] font-semibold text-[#365b78]">
                <input
                  type="checkbox"
                  checked={openRoles}
                  onChange={(e) => setOpenRoles(e.target.checked)}
                  className="h-[15px] w-[15px] cursor-pointer accent-[#0a8148]"
                />
                I am open to similar or other roles
              </label>
            </div>
          ) : (
            <div>
              <Field
                label="Current / Previous Company"
                icon={Building2}
                value="N/A (Fresher)"
                onChange={() => {}}
                disabled={true}
              />
            </div>
          )}

          {!isFresher ? (
            <Field
              label={isNotEmployed ? "Previous / Last Designation" : "Current Designation"}
              required={isCurrentlyEmployed}
              icon={User}
              value={designation}
              onChange={() => {}}
              disabled={true}
              rightIcon={<CheckCircle2 className="h-[15px] w-[15px] fill-[#11a050] text-white" />}
            />
          ) : (
            <Field
              label="Current / Previous Designation"
              icon={User}
              value="N/A (Fresher)"
              onChange={() => {}}
              disabled={true}
            />
          )}

          <SelectField
            label="Total Experience"
            required
            icon={Target}
            value={isFresher ? "Fresher" : experience}
            onChange={() => {}}
            disabled={true}
            options={[
              "Fresher",
              "1 Year",
              "2 Years",
              "3 Years",
              "4 Years",
              "5 Years 8 Months",
              "6+ Years",
              experience,
            ]}
          />

          <SelectField
            label="Notice Period"
            required
            icon={Clock3}
            value={noticePeriod}
            onChange={setNoticePeriod}
            options={["Immediate", "7 Days", "15 Days", "30 Days", "45 Days", "60 Days", "90 Days"]}
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
            <div className="mb-[4px] text-[12.5px] font-semibold text-[#163a67]">
              Expected CTC is Flexible?
            </div>

            <div className="flex h-[28px] items-center gap-[20px]">
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

          <div className="col-span-2">
            <Field
              label="Other Benefits (Optional)"
              icon={Trophy}
              value={otherBenefits}
              onChange={setOtherBenefits}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   TELL US MORE & NAVIGATION GATED BY PHOTO VERIFICATION
   ========================================================= */

function TellUsMore({
  onNext,
  isPhotoVerified,
  interest,
  setInterest,
  confirmed,
  setConfirmed,
}: {
  onNext?: () => void;
  isPhotoVerified: boolean;
  interest: string;
  setInterest: (value: string) => void;
  confirmed: boolean;
  setConfirmed: (value: boolean) => void;
}) {
  const canContinue = confirmed && isPhotoVerified;

  return (
    <div className="rounded-[8px] border border-[#dce8e0] bg-white">
      <SectionTitle icon={FileText} title="Tell Us More (Optional)" />

      <div className="px-[12px] pb-[12px] pt-[7px]">
        <div className="text-[15px] font-semibold text-[#163a67]">
          Why are you interested in this role?
        </div>

        <div className="relative mt-[4px]">
          <textarea
            value={interest}
            onChange={(e) => setInterest(e.target.value.slice(0, 500))}
            className="min-h-[58px] w-full resize-none rounded-[5px] border border-[#ccd9e3] bg-white px-[11px] py-[8px] pr-[58px] text-[14px] leading-[1.4] text-[#29445f] outline-none focus:border-[#4e91c9] focus:ring-1 focus:ring-[#4e91c9]/20"
          />

          <span className="pointer-events-none absolute bottom-[6px] right-[8px] text-[11.5px] text-[#7890a7]">
            {interest.length}/500
          </span>
        </div>

        <div className="mt-[8px] flex items-center justify-between">
          <label className="flex cursor-pointer items-center gap-[7px] text-[13.5px] font-semibold text-[#355979]">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="h-[18px] w-[18px] cursor-pointer accent-[#0b7d47]"
            />
            I confirm that the information provided is accurate and up to date.
          </label>

          <div className="flex flex-col items-end gap-[2px]">
            <button
              type="button"
              disabled={!canContinue}
              onClick={() => {
                if (canContinue && onNext) {
                  onNext();
                }
              }}
              className={[
                "flex h-[40px] min-w-[210px] items-center justify-center gap-[11px] rounded-[5px] px-[18px] text-[15px] font-semibold text-white shadow-sm transition-all",
                canContinue
                  ? "bg-[#08743e] hover:bg-[#076637] cursor-pointer"
                  : "cursor-not-allowed bg-[#9eb8aa]",
              ].join(" ")}
            >
              Review & Continue
              <ArrowRight className="h-[18px] w-[18px]" />
            </button>

            {!isPhotoVerified && (
              <span className="text-[11.5px] font-semibold text-[#b91c1c] flex items-center gap-[3px]">
                <AlertCircle className="h-[12px] w-[12px]" /> Upload & verify photo to enable Next
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   SIDEBAR
   ========================================================= */

function CVCard({ candidateData }: { candidateData?: any }) {
  const cvName = candidateData?.cvName || profile.cvName;
  const cvSize = candidateData?.cvSize || profile.cvSize;
  const cvUrl = candidateData?.cvUrl;

  return (
    <div className="rounded-[10px] border border-[#dce8e0] bg-white p-[11px] shadow-sm">
      <h3 className="text-[16px] font-semibold text-[#123963]">Your CV</h3>

      <div className="mt-[7px] flex items-center gap-[10px] rounded-[6px] bg-[#f2f7fa] px-[10px] py-[8px]">
        <div className="relative grid h-[46px] w-[42px] place-items-center rounded-[6px] border-[2px] border-[#087447] text-[#087447]">
          <FileText className="h-[23px] w-[23px]" />

          <span className="absolute -bottom-[5px] -right-[5px] grid h-[18px] w-[18px] place-items-center rounded-full bg-[#087447] text-white">
            <Check className="h-[11px] w-[11px]" strokeWidth={3} />
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="truncate text-[13.5px] font-semibold text-[#14385f]">{cvName}</h4>
          <p className="mt-[1px] text-[12px] text-[#58708c]">{cvSize}</p>

          <div className="mt-[5px] flex gap-[13px] text-[12px] font-semibold text-[#0874ce]">
            {cvUrl ? (
              <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-[4px]">
                <Eye className="h-[13px] w-[13px]" />
                View File
              </a>
            ) : (
              <button className="flex items-center gap-[4px]">
                <Eye className="h-[13px] w-[13px]" />
                View File
              </button>
            )}

            <button className="flex items-center gap-[4px]">
              <RefreshCw className="h-[13px] w-[13px]" />
              Upload Different CV
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[7px] flex items-center gap-[7px] rounded-[6px] bg-[#effaf3] px-[10px] py-[6px] text-[12.5px] font-semibold leading-[1.3] text-[#2e5f48]">
        <CheckCircle2 className="h-[17px] w-[17px] shrink-0 fill-[#14a451] text-white" />
        <span>
          Great! We&apos;ve pre-filled this form using your CV.
        </span>
      </div>
    </div>
  );
}

function AISummaryCard({ candidateData }: { candidateData?: any }) {
  const score = candidateData?.score ?? aiSummary.score;
  const title = score >= 70 ? "Strong Match!" : score >= 50 ? "Good Match!" : "Needs Review";

  return (
    <div className="rounded-[10px] border border-[#dce8e0] bg-white p-[11px] shadow-sm">
      <h3 className="text-[16px] font-semibold text-[#123963]">AI Analysis Summary</h3>

      <div className="mt-[7px] grid grid-cols-[80px_1fr] gap-[10px]">
        <div
          className="relative grid aspect-square place-items-center rounded-full"
          style={{
            background: `conic-gradient(#28aa42 ${score * 3.6}deg,#d7e4dd ${score * 3.6}deg)`,
          }}
        >
          <div className="absolute inset-[7px] rounded-full bg-white" />

          <div className="relative z-10 text-center">
            <div className="text-[21px] font-semibold leading-none text-[#123963]">
              {score}%
            </div>
            <div className="mt-[2px] text-[9.5px] font-semibold text-[#123963]">Match Score</div>
          </div>
        </div>

        <div className="flex flex-col justify-center rounded-[7px] bg-[#effaf2] px-[10px] py-[7px]">
          <h4 className="text-[14.5px] font-semibold text-[#11813e]">{title}</h4>
          <p className="mt-[3px] text-[14px] leading-[1.3] text-[#284f3f]">
            {candidateData?.summary || aiSummary.text}
          </p>

          <button className="mt-[5px] flex items-center gap-[5px] text-[14px] font-semibold text-[#0b6941]">
            View Detailed Analysis
            <ArrowRight className="h-[12px] w-[12px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

function CVDetailsCard({ candidateData }: { candidateData?: any }) {
  const profile = candidateData?.fullProfile;

  const items: { icon: React.ElementType; label: string; value: string }[] = [];

  if (Array.isArray(profile?.education) && profile.education.length > 0) {
    items.push({ icon: GraduationCap, label: "Education", value: profile.education.join("\n") });
  }

  if (Array.isArray(profile?.skills) && profile.skills.length > 0) {
    items.push({ icon: ShieldCheck, label: "Key Skills", value: profile.skills.join(", ") });
  }

  const industryExperience = Array.isArray(candidateData?.industryExperienceEvidence) && candidateData.industryExperienceEvidence.length > 0
    ? candidateData.industryExperienceEvidence.join("\n")
    : profile?.totalExperience;
  if (industryExperience) {
    items.push({ icon: BriefcaseBusiness, label: "Industry Experience", value: industryExperience });
  }

  if (Array.isArray(profile?.achievements) && profile.achievements.length > 0) {
    items.push({ icon: Trophy, label: "Relevant Achievements", value: profile.achievements.join("\n") });
  }

  if (items.length === 0) return null;

  return (
    <div className="rounded-[10px] border border-[#dce8e0] bg-white p-[11px] shadow-sm">
      <h3 className="text-[16px] font-semibold text-[#123963]">Key Details from CV</h3>

      <div className="mt-[5px] divide-y divide-[#e6ece8]">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="grid grid-cols-[20px_100px_1fr_17px] items-start gap-[5px] py-[4px]">
            <Icon className="mt-[1px] h-[16px] w-[16px] text-[#123f70]" />
            <div className="text-[14px] font-semibold leading-[1.2] text-[#17395f]">{label}</div>
            <div className="whitespace-pre-line text-[14px] leading-[1.25] text-[#294a6c]">{value}</div>
            <CheckCircle2 className="h-[14px] w-[14px] fill-[#0ca34e] text-white" />
          </div>
        ))}
      </div>
    </div>
  );
}

function UpdateCVCard() {
  return (
    <div className="rounded-[8px] border border-[#dce8e0] bg-white p-[10px] shadow-sm">
      <div className="flex items-start gap-[8px]">
        <Info className="mt-[1px] h-[18px] w-[18px] shrink-0 text-[#0b7049]" />

        <div className="min-w-0">
          <h3 className="text-[13.5px] font-semibold text-[#17395f]">Need to Update CV Details?</h3>
          <p className="mt-[2px] text-[11px] leading-[1.25] text-[#47617d]">
            You can edit any field or upload a different CV to re-analyze your profile.
          </p>

          <button className="mt-[6px] h-[28px] min-w-[150px] rounded-[4px] border border-[#0b7049] bg-white px-[12px] text-[11px] font-semibold text-[#0b7049]">
            Upload New CV
          </button>
        </div>
      </div>
    </div>
  );
}

function SidebarFooter() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[175px] overflow-hidden">
      <Image
        src={assets.sidebarFooter}
        alt=""
        fill
        sizes="36vw"
        className="object-cover object-top"
      />
    </div>
  );
}

function Sidebar({ onClose, candidateData }: { onClose: () => void; candidateData?: any }) {
  return (
    <aside className="relative flex h-full min-h-0 flex-col overflow-hidden border-l border-[#e4ebe5] bg-[linear-gradient(180deg,#f8fcf9,#eef8f1)] pl-[28px] pr-[32px] pb-[16px] pt-[8px]">
      <SidebarFooter />

      <div className="relative z-10 flex shrink-0 items-start justify-end">
        <button
          type="button"
          onClick={onClose}
          className="mt-[6px] flex h-[34px] items-center gap-[6px] rounded-[4px] bg-[#08743e] px-[11px] text-[10.5px] font-semibold text-white hover:bg-[#076637] transition-colors"
        >
          <Home className="h-[14px] w-[14px]" />
          Back to Website
        </button>
      </div>

      <div className="relative z-10 mt-[6px] flex-1 min-h-0 overflow-y-auto space-y-[7px] pr-[2px]">
        <CVCard candidateData={candidateData} />
        <AISummaryCard candidateData={candidateData} />
        <CVDetailsCard candidateData={candidateData} />
      </div>
    </aside>
  );
}

/* =========================================================
   POPUP CONTENT
   ========================================================= */

function ApplicationFormContent({
  onClose,
  onBack,
  onNext,
  candidateData,
}: {
  onClose: () => void;
  onBack?: () => void;
  onNext?: (data?: any) => void;
  candidateData?: any;
}) {
  const [photoSrc, setPhotoSrc] = useState<string | null>(candidateData?.image || null);
  const [isPhotoVerified, setIsPhotoVerified] = useState<boolean>(
    Boolean(candidateData?.image)
  );

  const [location, setLocation] = useState(candidateData?.location || "Delhi, NCR");
  const [relocate, setRelocate] = useState(candidateData?.willingToRelocate || "Yes");

  const [employmentStatus, setEmploymentStatus] = useState(candidateData?.employmentStatus || "Currently Employed");
  const [openRoles, setOpenRoles] = useState<boolean>(candidateData?.openToOtherRoles ?? true);
  const [noticePeriod, setNoticePeriod] = useState(candidateData?.noticePeriod || "30 Days");
  const [expectedCTC, setExpectedCTC] = useState(candidateData?.expectedCTC || "As per industry standards");
  const [ctcFlexible, setCtcFlexible] = useState(candidateData?.ctcFlexible || "Yes");
  const [otherBenefits, setOtherBenefits] = useState(candidateData?.otherBenefits || "");

  const [interest, setInterest] = useState(candidateData?.whyInterested || "");
  const [confirmed, setConfirmed] = useState(true);

  const handleNext = () => {
    onNext?.({
      ...candidateData,
      image: photoSrc,
      location,
      willingToRelocate: relocate,
      employmentStatus,
      openToOtherRoles: openRoles,
      noticePeriod,
      expectedCTC,
      ctcFlexible,
      otherBenefits,
      whyInterested: interest,
    });
  };

  return (
    <div
      className="relative grid h-full w-full overflow-hidden bg-white text-[#10243f]"
      style={{
        width: `${DESIGN_WIDTH}px`,
        gridTemplateColumns: "64% 36%",
      }}
    >
      {/* LEFT */}
      <section className="flex h-full min-h-0 flex-col px-[32px] pb-[16px] pt-[8px]">
        {/* TITLE */}
        <div className="shrink-0">
          <button
            type="button"
            onClick={onBack ?? onClose}
            className="flex w-fit items-center gap-[6px] text-[14px] font-semibold text-[#0d5d3c] hover:text-[#d92027] transition-colors"
          >
            <ArrowLeft className="h-[15px] w-[15px]" />
            Preview
          </button>

          <h1 className="mt-[2px] text-[24px] font-semibold leading-none tracking-[-0.02em] text-[#123963]">
            {candidateData?.jobDetails?.title || job.title}
          </h1>

          <div className="mt-[2px] flex items-center gap-[10px] text-[14px] text-[#1c4b78]">
            <span>{candidateData?.jobDetails?.company || job.company}</span>
            <span className="h-[13px] w-px bg-[#c8d3dc]" />
            <span>{candidateData?.jobDetails?.brand || job.brand}</span>
          </div>
        </div>

        {/* STEPS */}
        <div className="mt-[3px] shrink-0">
          <ProgressSteps />
        </div>

        {/* FORM (SCROLLABLE AREA) */}
        <div className="mt-[4px] flex-1 min-h-0 overflow-y-auto pr-[4px] flex flex-col gap-[8px] pb-[20px]">
          <PersonalInformation
            candidateData={candidateData}
            photoSrc={photoSrc}
            setPhotoSrc={setPhotoSrc}
            isPhotoVerified={isPhotoVerified}
            setIsPhotoVerified={setIsPhotoVerified}
            location={location}
            setLocation={setLocation}
            relocate={relocate}
            setRelocate={setRelocate}
          />
          <ProfessionalDetails
            candidateData={candidateData}
            employmentStatus={employmentStatus}
            setEmploymentStatus={setEmploymentStatus}
            openRoles={openRoles}
            setOpenRoles={setOpenRoles}
            noticePeriod={noticePeriod}
            setNoticePeriod={setNoticePeriod}
            expectedCTC={expectedCTC}
            setExpectedCTC={setExpectedCTC}
            ctcFlexible={ctcFlexible}
            setCtcFlexible={setCtcFlexible}
            otherBenefits={otherBenefits}
            setOtherBenefits={setOtherBenefits}
          />
          <TellUsMore
            onNext={handleNext}
            isPhotoVerified={isPhotoVerified}
            interest={interest}
            setInterest={setInterest}
            confirmed={confirmed}
            setConfirmed={setConfirmed}
          />
        </div>
      </section>

      {/* RIGHT */}
      <Sidebar onClose={onClose} candidateData={{ ...candidateData, image: photoSrc }} />
    </div>
  );
}

/* =========================================================
   MODAL
   ========================================================= */

const MODAL_WIDTH = "min(96vw, 1440px, calc(96vh * 1500 / 900))";

export function ApplicationFormModal({
  isOpen,
  onClose,
  onBack,
  onNext,
  candidateData,
}: {
  isOpen: boolean;
  onClose: () => void;
  /** Returns to the eligibility step; falls back to closing when not supplied. */
  onBack?: () => void;
  /** Called with the candidate data merged with whatever was edited on this screen (photo included). */
  onNext?: (data?: any) => void;
  candidateData?: any;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) lockScroll();
    return () => {
      if (isOpen) unlockScroll();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-2 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[5px]" />

      <div
        ref={scrollRef}
        className="relative max-h-[96vh] overflow-hidden rounded-[16px] bg-[#fbfcf9] shadow-[0_30px_90px_rgba(0,0,0,0.28)]"
        style={{
          width: MODAL_WIDTH,
          aspectRatio: "1500 / 900",
        }}
      >
        <div className="relative h-full w-full overflow-hidden">
          <div
            className="left-0 top-0 overflow-hidden bg-[#fbfcf9]"
            style={{
              width: `${DESIGN_WIDTH}px`,
              height: `${DESIGN_HEIGHT}px`,
              transform: `scale(calc(${MODAL_WIDTH} / ${DESIGN_WIDTH}px))`,
              transformOrigin: "top left",
            }}
          >
            <ApplicationFormContent onClose={onClose} onBack={onBack} onNext={onNext} candidateData={candidateData} />
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
