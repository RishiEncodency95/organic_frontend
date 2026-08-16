"use client";

import React, { useState } from "react";
import {
  ClipboardList,
  Link2,
  Send,
  ShieldCheck,
  Upload,
} from "lucide-react";
import { Reveal } from "../../shared/Reveal";

interface FormState {
  applicantType: string;
  orgName: string;
  contactPerson: string;
  designation: string;
  mobile: string;
  email: string;
  website: string;
  city: string;
  stateCountry: string;
  awardCategory: string;
  briefProfile: string;
  yearsExperience: string;
  teamSize: string;
  keyServices: string;
  keyAchievements: string;
  uniqueContribution: string;
  impactCreated: string;
  innovation: string;
  whyDeserve: string;
  deckFileName: string;
  certFileName: string;
  mediaFileName: string;
  socialLink: string;
  declaration: boolean;
}

const INITIAL_FORM: FormState = {
  applicantType: "",
  orgName: "",
  contactPerson: "",
  designation: "",
  mobile: "",
  email: "",
  website: "",
  city: "",
  stateCountry: "",
  awardCategory: "",
  briefProfile: "",
  yearsExperience: "",
  teamSize: "",
  keyServices: "",
  keyAchievements: "",
  uniqueContribution: "",
  impactCreated: "",
  innovation: "",
  whyDeserve: "",
  deckFileName: "",
  certFileName: "",
  mediaFileName: "",
  socialLink: "",
  declaration: false,
};

const APPLICANT_TYPES = ["Individual", "Organization", "Startup"];

const YEARS_EXPERIENCE = [
  "Less than 1 Year",
  "1 – 3 Years",
  "3 – 5 Years",
  "5 – 10 Years",
  "10 – 15 Years",
  "15+ Years",
];

const TEAM_SIZES = ["1 – 10", "11 – 50", "51 – 200", "200+"];

const INDIAN_STATES = [
  "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa", "Gujarat",
  "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh",
  "Maharashtra", "Odisha", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Other (India)", "International",
];

const AWARD_CATEGORIES = [
  "Best Hospital / Healthcare Institution",
  "Excellence in Medical Practice",
  "Ayurveda & Natural Healing Leader",
  "Wellness & Spa Brand of the Year",
  "Fitness Innovation Award",
  "Nutrition & Organic Excellence",
  "Medical Tourism Excellence",
  "Healthcare Startup of the Year",
  "Women Leadership in Healthcare",
  "Lifetime Achievement Award",
];

function Field({
  label,
  placeholder,
  required = false,
  type = "text",
  span = 1,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  span?: number;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className={span === 2 ? "sm:col-span-2" : ""}>
      <label className="block text-sm font-medium text-emerald-950 mb-1">
        {label} {required && <span className="text-amber-600">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-emerald-900/15 bg-white px-3 py-2 text-sm text-emerald-950 placeholder:text-xs placeholder:text-emerald-950/60 outline-none transition-all duration-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 hover:border-emerald-900/30"
      />
    </div>
  );
}

function Select({
  label,
  placeholder,
  required = false,
  options = [],
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  options?: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-emerald-950 mb-1">
        {label} {required && <span className="text-amber-600">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-emerald-900/15 bg-white px-3 py-2 text-sm text-emerald-950 outline-none transition-all duration-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 hover:border-emerald-900/30"
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextArea({
  label,
  placeholder,
  required = false,
  span = 1,
  className = "",
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  span?: number;
  className?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className={span === 2 ? "sm:col-span-2" : span === 4 ? "sm:col-span-2 lg:col-span-4" : ""}>
      <label className="block text-sm font-medium text-emerald-950 mb-1">
        {label} {required && <span className="text-amber-600">*</span>}
      </label>
      <textarea
        rows={2}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full resize-none rounded-md border border-emerald-900/15 bg-white px-3 py-1 text-sm text-emerald-950 placeholder:text-xs placeholder:text-emerald-950/60 outline-none transition-all duration-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 hover:border-emerald-900/30 ${className}`}
      />
    </div>
  );
}

function UploadRow({
  label,
  subLabel,
  fileName,
  onChange,
}: {
  label: string;
  subLabel: string;
  fileName: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <div className="mb-1">
        <p className="text-sm font-medium text-emerald-950">{label}</p>
        <p className="text-xs text-emerald-950/70">{subLabel}</p>
      </div>
      <label className="flex h-16 md:h-20 w-full cursor-pointer flex-col items-center justify-center gap-0.5 rounded-md border border-dashed border-amber-500/50 bg-amber-50 text-sm text-emerald-950/70 transition-colors duration-200 hover:bg-amber-100">
        <Upload className="h-5 w-5 shrink-0 text-amber-600" />
        Upload File
        <span className="text-xs text-emerald-950/60">{fileName || "No file chosen"}</span>
        <input
          type="file"
          className="hidden"
          onChange={(e) => onChange(e.target.files?.[0]?.name || "")}
        />
      </label>
    </div>
  );
}

function SectionBadge({ n, title }: { n: number; title: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-lime-600 text-base font-bold text-white shadow-sm shadow-lime-600/40">
        {n}
      </span>
      <h3 className="text-base font-bold tracking-wide text-emerald-950">
        {title}
      </h3>
    </div>
  );
}

export default function NominationForm({
  onSubmitted,
}: {
  onSubmitted: () => void;
}) {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const update = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const handleSubmit = () => {
    if (!form.applicantType) return setError("Please select applicant type.");
    if (!form.orgName.trim()) return setError("Full name / organisation name is required.");
    if (!form.contactPerson.trim()) return setError("Contact person is required.");
    if (!form.designation.trim()) return setError("Designation is required.");
    if (!form.mobile.trim()) return setError("Mobile number is required.");
    if (!form.email.trim()) return setError("Email ID is required.");
    if (!form.city.trim()) return setError("City / state / country is required.");
    if (!form.stateCountry) return setError("Please select state / country.");
    if (!form.awardCategory) return setError("Please select an award category.");
    if (!form.briefProfile.trim()) return setError("Brief profile is required.");
    if (!form.yearsExperience) return setError("Please select years of experience.");
    if (!form.keyServices.trim()) return setError("Key services / products are required.");
    if (!form.keyAchievements.trim()) return setError("Key achievements are required.");
    if (!form.uniqueContribution.trim()) return setError("Unique contribution is required.");
    if (!form.impactCreated.trim()) return setError("Impact created is required.");
    if (!form.whyDeserve.trim()) return setError("Please share why you deserve this award.");
    if (!form.declaration) return setError("Please accept the declaration.");

    setSubmitting(true);
    setError("");
    setTimeout(() => {
      setSubmitting(false);
      onSubmitted();
    }, 800);
  };

  return (
    <div className="min-w-0">
      <Reveal className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-emerald-800" />
            <div>
              <h2 className="text-[22px] md:text-[24px] font-extrabold text-emerald-950">
                NOMINATION FORM
              </h2>
              <p className="text-base text-emerald-950/85">
                Please fill in the details below to submit your nomination.
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <ShieldCheck className="h-8 w-8 text-amber-500" />
            <div className="flex flex-col leading-tight">
              <p className="text-base font-bold text-emerald-950">100% Secure</p>
              <p className="text-xs text-emerald-950/70">Confidential</p>
            </div>
          </div>
        </div>

        {/* 1. Applicant details */}
        <SectionBadge n={1} title="APPLICANT DETAILS" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Select
            label="Applicant Type"
            placeholder="Select Type"
            required
            options={APPLICANT_TYPES}
            value={form.applicantType}
            onChange={(v) => update("applicantType", v)}
          />
          <Field
            label="Full Name / Org Name"
            placeholder="Enter full name or organization name"
            required
            value={form.orgName}
            onChange={(v) => update("orgName", v)}
          />
          <Field
            label="Contact Person"
            placeholder="Enter contact person name"
            required
            value={form.contactPerson}
            onChange={(v) => update("contactPerson", v)}
          />
          <Field
            label="Designation"
            placeholder="Enter designation"
            value={form.designation}
            onChange={(v) => update("designation", v)}
          />
          <Field
            label="Mobile Number"
            placeholder="Enter mobile number"
            type="tel"
            required
            value={form.mobile}
            onChange={(v) => update("mobile", v)}
          />
          <Field
            label="Email ID"
            placeholder="Enter email address"
            type="email"
            required
            value={form.email}
            onChange={(v) => update("email", v)}
          />
          <Field
            label="Website (If any)"
            placeholder="www.example.com"
            value={form.website}
            onChange={(v) => update("website", v)}
          />
          <Select
            label="City / State / Country"
            placeholder="Select state / country"
            required
            options={INDIAN_STATES}
            value={form.stateCountry}
            onChange={(v) => update("stateCountry", v)}
          />
        </div>

        {/* 2. Award category */}
        <div className="mt-6">
          <SectionBadge n={2} title="AWARD CATEGORY" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Select
                label="Select Award Category"
                placeholder="-- Select Award Category --"
                required
                options={AWARD_CATEGORIES}
                value={form.awardCategory}
                onChange={(v) => update("awardCategory", v)}
              />
            </div>
          </div>
        </div>

        {/* 3. Profile details */}
        <div className="mt-6">
          <SectionBadge n={3} title="PROFILE DETAILS" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <TextArea
              label="Brief Profile (150 – 200 words)"
              placeholder="Tell us about yourself / your organization and your core purpose."
              required
              span={2}
              value={form.briefProfile}
              onChange={(v) => update("briefProfile", v)}
            />
            <Select
              label="Years of Experience"
              placeholder="Select Experience"
              required
              options={YEARS_EXPERIENCE}
              value={form.yearsExperience}
              onChange={(v) => update("yearsExperience", v)}
            />
            <Select
              label="Team Size (If Organization)"
              placeholder="Select Team Size"
              options={TEAM_SIZES}
              value={form.teamSize}
              onChange={(v) => update("teamSize", v)}
            />
            <TextArea
              label="Key Services / Products Offered"
              placeholder="Write about the key services or products you offer."
              required
              span={4}
              value={form.keyServices}
              onChange={(v) => update("keyServices", v)}
            />
          </div>
        </div>

        {/* 4. Achievements & impact */}
        <div className="mt-6">
          <SectionBadge n={4} title="ACHIEVEMENTS & IMPACT" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <TextArea
              label="Key Achievements (Max 5 points)"
              placeholder="List your major achievements, awards, recognitions or milestones."
              required
              className="h-24"
              value={form.keyAchievements}
              onChange={(v) => update("keyAchievements", v)}
            />
            <TextArea
              label="Unique Contribution to Healthcare / Wellness"
              placeholder="What makes you unique and your contribution to the industry?"
              required
              className="h-24"
              value={form.uniqueContribution}
              onChange={(v) => update("uniqueContribution", v)}
            />
            <TextArea
              label="Impact Created"
              placeholder="Share the impact created, people served, lives touched, growth metrics, etc."
              required
              className="h-24"
              value={form.impactCreated}
              onChange={(v) => update("impactCreated", v)}
            />
            <TextArea
              label="Innovation / Technology Used (If any)"
              placeholder="Mention any innovation, technology or research that adds value."
              className="h-24"
              value={form.innovation}
              onChange={(v) => update("innovation", v)}
            />
            <TextArea
              label="Why do you deserve this award? (Max 100 words)"
              placeholder="Share why you believe you are the right choice for this award."
              required
              span={2}
              className="h-24"
              value={form.whyDeserve}
              onChange={(v) => update("whyDeserve", v)}
            />
          </div>
        </div>

        {/* 5. Supporting documents */}
        <div className="mt-6">
          <SectionBadge n={5} title="SUPPORTING DOCUMENTS" />
          <p className="mb-3 text-sm text-emerald-950/80">
            Upload supporting documents (PDF, DOC, JPG, PNG – Max size 10MB each)
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <UploadRow
              label="Profile Deck"
              subLabel="Profile / Company Deck"
              fileName={form.deckFileName}
              onChange={(v) => update("deckFileName", v)}
            />
            <UploadRow
              label="Certifications"
              subLabel="Certifications / Awards"
              fileName={form.certFileName}
              onChange={(v) => update("certFileName", v)}
            />
            <UploadRow
              label="Images Videos"
              subLabel="Images / Videos"
              fileName={form.mediaFileName}
              onChange={(v) => update("mediaFileName", v)}
            />
            <div>
              <div className="mb-1">
                <p className="text-sm font-medium text-emerald-950">Social Links</p>
                <p className="text-xs text-emerald-950/70">Website / Social Links</p>
              </div>
              <div className="relative">
                <Link2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-600" />
                <input
                  type="url"
                  placeholder="https://www.example.com"
                  value={form.socialLink}
                  onChange={(e) => update("socialLink", e.target.value)}
                  className="w-full rounded-md border border-emerald-900/15 bg-white py-2 pl-9 pr-3 text-sm text-emerald-950 placeholder:text-xs placeholder:text-emerald-950/60 outline-none transition-all duration-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-400/30 hover:border-emerald-900/30"
                />
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs italic text-emerald-950/75">
            You can upload multiple files after submission.
          </p>
        </div>

        {/* 6. Declaration */}
        <div className="mt-6">
          <SectionBadge n={6} title="DECLARATION" />
          <label className="flex items-start gap-2 rounded-md bg-emerald-50/60 p-2.5 text-sm text-emerald-950/95 cursor-pointer">
            <input
              type="checkbox"
              checked={form.declaration}
              onChange={(e) => update("declaration", e.target.checked)}
              className="mt-0.5 h-3.5 w-3.5 accent-emerald-800"
            />
            <span>
              I hereby declare that the information provided above is true,
              correct and complete to the best of my knowledge.
            </span>
          </label>

          {error && (
            <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-base font-semibold text-red-600">
              {error}
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-emerald-950 py-2.5 text-base font-bold text-white shadow-md transition-all duration-300 hover:bg-emerald-900 hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto sm:px-8"
          >
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            {submitting ? "SUBMITTING..." : "SUBMIT NOMINATION"}
          </button>
          <p className="mt-3 text-base text-emerald-950/80">
            <ShieldCheck className="mr-1 inline h-3.5 w-3.5 text-amber-600" />
            Your information is secure and will be kept confidential.
          </p>
        </div>
      </Reveal>
    </div>
  );
}