"use client";

import React, { useEffect, useState } from "react";
import { Users, ArrowRight, ShieldCheck, User, Building2, Mail, Phone, ChevronDown, Check, MapPin, CheckCircle, Send, Loader2 } from "lucide-react";
import { advisoryNominationApi, verifyApi } from "@/lib/api";
import { check, errorList, showErrors } from "@/lib/registration";
import Swal from "sweetalert2";
import { useDropdowns } from "@/lib/dropdowns";

/*
 * Advisory Board nomination (/about/nominate_advisory_board). Saved by POST /advisory-nominations
 * and listed in Admin → Advisory Nominations. The nominee and nominator are different people,
 * so their email and mobile must differ — except for a self-nomination ("Self"), where the
 * nominator's details are the nominee's own and are not verified twice.
 */

// Admin-managed (Dropdown Manager); these are the fallback options.
const ADVISORY_DROPDOWNS = {
    "advisory-industry-sector": [
        { label: "Agriculture", value: "agriculture" },
        { label: "Technology", value: "technology" },
        { label: "Retail", value: "retail" },
    ],
    "advisory-expertise-area": [
        { label: "Organic Farming", value: "farming" },
        { label: "Supply Chain", value: "supply" },
        { label: "Policy Making", value: "policy" },
    ],
    "advisory-relationship": [
        { label: "Colleague", value: "colleague" },
        { label: "Manager", value: "manager" },
        { label: "Self", value: "self" },
    ],
};

const OTP_PROFILE = "ADVISORY_NOMINATION";
const RESEND_SECONDS = 60;
const LIMITS = { achievements: 300, reason: 400, additionalInfo: 200 };
const LINKEDIN_RE = /^(https?:\/\/)?([a-z]{2,3}\.)?linkedin\.com\/(in|pub|company)\/[A-Za-z0-9_%.-]+\/?(\?\S*)?$/i;

const words = (s: string) => (s.trim() ? s.trim().split(/\s+/).length : 0);
const lettersOnly = (v: string) => v.replace(/[^\p{L}\p{M} .'-]/gu, "").replace(/^\s+/, "");
const digits10 = (v: string) => v.replace(/\D/g, "").slice(0, 10);

type Person = { name: string; designation: string; organisation: string; email: string; phone: string };
const EMPTY_PERSON: Person = { name: "", designation: "", organisation: "", email: "", phone: "" };

/**
 * One OTP check (email or WhatsApp). `verifiedFor` is the exact value that was verified, so
 * editing the field afterwards makes it unverified again.
 */
function useOtp(kind: "email" | "phone") {
    const [sentTo, setSentTo] = useState("");
    const [code, setCode] = useState("");
    const [timer, setTimer] = useState(0);
    const [busy, setBusy] = useState(false);
    const [verifiedFor, setVerifiedFor] = useState("");

    useEffect(() => {
        if (timer <= 0) return;
        const id = window.setTimeout(() => setTimer((t) => t - 1), 1000);
        return () => window.clearTimeout(id);
    }, [timer]);

    const send = async (value: string, name: string) => {
        const problem = kind === "email" ? check.email(value) : check.indianMobile(value, "Mobile number");
        if (problem) return showErrors([problem]);
        setBusy(true);
        try {
            const res = kind === "email" ? await verifyApi.sendEmailOtp(value, OTP_PROFILE, name) : await verifyApi.sendPhoneOtp(value, OTP_PROFILE, name);
            if (!res?.success) throw new Error(res?.message || res?.msg || "");
            setSentTo(value);
            setCode("");
            setTimer(RESEND_SECONDS);
        } catch (err) {
            Swal.fire({ icon: "error", title: "Could not send OTP", text: (err as Error).message || "Please try again.", confirmButtonColor: "#0a4d22" });
        } finally {
            setBusy(false);
        }
    };

    const verify = async () => {
        if (code.length !== 6) return showErrors(["Please enter the 6-digit OTP."]);
        setBusy(true);
        try {
            const res = kind === "email" ? await verifyApi.verifyEmailOtp(sentTo, code) : await verifyApi.verifyPhoneOtp(sentTo, code);
            if (!res?.success) throw new Error(res?.message || res?.msg || "");
            setVerifiedFor(sentTo);
            setSentTo("");
            setCode("");
            setTimer(0);
        } catch (err) {
            Swal.fire({ icon: "error", title: "Invalid OTP", text: (err as Error).message || "The OTP is incorrect or has expired.", confirmButtonColor: "#0a4d22" });
        } finally {
            setBusy(false);
        }
    };

    const reset = () => {
        setSentTo("");
        setCode("");
        setTimer(0);
        setVerifiedFor("");
    };

    return { sentTo, code, setCode, timer, busy, verifiedFor, send, verify, reset };
}

type Otp = ReturnType<typeof useOtp>;

const inputBase =
    "w-full py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400 disabled:bg-gray-50 disabled:text-gray-500";
const labelCls = "text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]";
const req = <span className="text-red-500">*</span>;

/** Email / mobile field with Verify → OTP → Confirm, and a tick once verified */
function VerifiedField({
    kind,
    label,
    value,
    onChange,
    otp,
    name,
    readOnly = false,
    note,
}: {
    kind: "email" | "phone";
    label: string;
    value: string;
    onChange: (v: string) => void;
    otp: Otp;
    name: string;
    readOnly?: boolean;
    note?: string;
}) {
    const verified = !!value && otp.verifiedFor === value;
    // A read-only copy (self-nomination) never shows the OTP box: the original field does
    const awaiting = !readOnly && !!otp.sentTo && otp.sentTo === value && !verified;
    const Icon = kind === "email" ? Mail : Phone;
    return (
        <div className="flex flex-col gap-1.5 md:col-span-1">
            <label className={labelCls}>
                {label} {req}
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <Icon size={16} />
                    </span>
                    <input
                        type={kind === "email" ? "email" : "tel"}
                        inputMode={kind === "email" ? "email" : "numeric"}
                        maxLength={kind === "email" ? 120 : 10}
                        value={value}
                        onChange={(e) => onChange(kind === "email" ? e.target.value.trim() : digits10(e.target.value))}
                        disabled={readOnly || verified || awaiting}
                        className={`${inputBase} pl-9 pr-8 ${verified ? "!bg-green-50 !border-green-200 !text-green-700" : ""}`}
                        placeholder={kind === "email" ? "name@domain.com" : "Enter 10 digit mobile"}
                    />
                    {verified && (
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-green-600 bg-green-100 rounded-full p-0.5" title="Verified">
                            <CheckCircle size={14} />
                        </div>
                    )}
                </div>
                {!readOnly && !verified && !awaiting && (
                    <button
                        type="button"
                        onClick={() => otp.send(value, name)}
                        disabled={otp.busy || !value}
                        className="px-4 py-2 bg-[#0a4d22] text-white text-[13px] font-medium rounded-lg hover:bg-[#073617] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap transition-colors flex items-center gap-1.5"
                    >
                        {otp.busy ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />} Verify
                    </button>
                )}
            </div>
            {awaiting && (
                <div className="flex flex-col gap-1 animate-in slide-in-from-top-2 duration-300">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            placeholder="Enter 6-digit OTP"
                            maxLength={6}
                            value={otp.code}
                            onChange={(e) => otp.setCode(e.target.value.replace(/\D/g, ""))}
                            className={`${inputBase} px-3 py-2 tracking-[0.25em]`}
                        />
                        <button
                            type="button"
                            onClick={otp.verify}
                            disabled={otp.busy || otp.code.length !== 6}
                            className="px-4 py-2 bg-green-600 text-white text-[13px] font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 whitespace-nowrap transition-colors"
                        >
                            Confirm OTP
                        </button>
                    </div>
                    <div className="flex justify-between text-[11.5px]">
                        <button type="button" onClick={otp.reset} className="font-semibold text-gray-600 underline">
                            Change {kind === "email" ? "email" : "number"}
                        </button>
                        {otp.timer > 0 ? (
                            <span className="text-gray-500">Resend OTP in {otp.timer}s</span>
                        ) : (
                            <button type="button" onClick={() => otp.send(value, name)} disabled={otp.busy} className="font-semibold text-[#0a4d22] underline disabled:opacity-50">
                                Resend OTP
                            </button>
                        )}
                    </div>
                </div>
            )}
            {note && <p className="text-[11.5px] text-gray-500">{note}</p>}
        </div>
    );
}

function SelectField({ label, value, onChange, options, placeholder }: { label: string; value: string; onChange: (v: string) => void; options: { label: string; value: string }[]; placeholder: string }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className={labelCls}>
                {label} {req}
            </label>
            <div className="relative">
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={`${inputBase} px-3 pr-8 bg-white appearance-none cursor-pointer ${value ? "text-[#1a1a1a]" : "text-gray-500"}`}
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>
                    {options.map((o) => (
                        <option key={o.value} value={o.value}>
                            {o.label}
                        </option>
                    ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
        </div>
    );
}

function WordArea({ label, value, onChange, limit, placeholder, required = true, rows = 3 }: { label: string; value: string; onChange: (v: string) => void; limit: number; placeholder: string; required?: boolean; rows?: number }) {
    const count = words(value);
    return (
        <div className="flex flex-col gap-1.5">
            {label && (
                <label className={labelCls}>
                    {label} {required && req}
                </label>
            )}
            <div className="relative">
                <textarea
                    rows={rows}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => {
                        // Stop at the limit, but always allow deleting
                        if (words(e.target.value) <= limit || e.target.value.length < value.length) onChange(e.target.value);
                    }}
                    className={`${inputBase} px-3 resize-y pb-7`}
                />
                <span className={`absolute bottom-2 right-3 text-[11px] font-medium ${count >= limit ? "text-red-500" : "text-gray-400"}`}>
                    {count}/{limit} words
                </span>
            </div>
        </div>
    );
}

const NominateForm = () => {
    const dropdowns = useDropdowns(ADVISORY_DROPDOWNS);

    const [nominee, setNominee] = useState({ ...EMPTY_PERSON, industry: "", linkedin: "" });
    const [expertiseArea, setExpertiseArea] = useState("");
    const [achievements, setAchievements] = useState("");
    const [reason, setReason] = useState("");
    const [nominator, setNominator] = useState<Person>(EMPTY_PERSON);
    const [relationship, setRelationship] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [declaration, setDeclaration] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const nomineeEmailOtp = useOtp("email");
    const nomineePhoneOtp = useOtp("phone");
    const nominatorEmailOtp = useOtp("email");
    const nominatorPhoneOtp = useOtp("phone");

    // "Self": the nominator is the nominee, so their details (and verification) are the nominee's
    const relationshipLabel = dropdowns["advisory-relationship"].find((o) => o.value === relationship)?.label || relationship;
    const isSelf = relationshipLabel.trim().toLowerCase() === "self";
    const effectiveNominator: Person = isSelf
        ? { name: nominee.name, designation: nominee.designation, organisation: nominee.organisation, email: nominee.email, phone: nominee.phone }
        : nominator;

    const setNomineeField = (key: keyof typeof nominee, value: string) => setNominee((p) => ({ ...p, [key]: value }));
    const setNominatorField = (key: keyof Person, value: string) => setNominator((p) => ({ ...p, [key]: value }));

    const verified = {
        nomineeEmail: !!nominee.email && nomineeEmailOtp.verifiedFor === nominee.email,
        nomineePhone: !!nominee.phone && nomineePhoneOtp.verifiedFor === nominee.phone,
        nominatorEmail: isSelf || (!!nominator.email && nominatorEmailOtp.verifiedFor === nominator.email),
        nominatorPhone: isSelf || (!!nominator.phone && nominatorPhoneOtp.verifiedFor === nominator.phone),
    };

    const validate = () => {
        const n = nominee;
        const m = effectiveNominator;
        const sameEmail = !!n.email && n.email.toLowerCase() === m.email.toLowerCase();
        const samePhone = !!n.phone && n.phone === m.phone;
        return errorList(
            // 1. Nominee
            check.name(n.name, "Nominee's full name"),
            check.required(n.designation, "Nominee's designation"),
            check.required(n.organisation, "Nominee's organisation / institution"),
            check.required(n.industry, "Nominee's industry / sector"),
            check.email(n.email, "Nominee's email"),
            check.indianMobile(n.phone, "Nominee's mobile number"),
            !!n.linkedin.trim() && !LINKEDIN_RE.test(n.linkedin.trim()) && "LinkedIn profile must be a linkedin.com/in/… link.",
            // 2. Expertise
            check.required(expertiseArea, "Area of expertise"),
            !achievements.trim() ? "Key achievements are required." : words(achievements) < 10 && "Key achievements must be at least 10 words.",
            !reason.trim() ? "The reason for the nomination is required." : words(reason) < 10 && "The reason for the nomination must be at least 10 words.",
            // 3. Nominator
            check.required(relationship, "Relationship with the nominee"),
            !isSelf && check.name(m.name, "Your name"),
            !isSelf && check.required(m.designation, "Your designation"),
            !isSelf && check.required(m.organisation, "Your organisation / institution"),
            !isSelf && check.email(m.email, "Your email"),
            !isSelf && check.indianMobile(m.phone, "Your mobile number"),
            !isSelf && sameEmail && "Your email must be different from the nominee's. If you are nominating yourself, choose “Self” as the relationship.",
            !isSelf && samePhone && "Your mobile number must be different from the nominee's. If you are nominating yourself, choose “Self” as the relationship.",
            !isSelf && !!m.name && !!n.name && m.name.trim().toLowerCase() === n.name.trim().toLowerCase() && "Your name is the same as the nominee's. If you are nominating yourself, choose “Self” as the relationship.",
            // Verification
            !verified.nomineeEmail && !!n.email && "Please verify the nominee's email with OTP.",
            !verified.nomineePhone && !!n.phone && "Please verify the nominee's mobile number with OTP.",
            !verified.nominatorEmail && !!m.email && "Please verify your email with OTP.",
            !verified.nominatorPhone && !!m.phone && "Please verify your mobile number with OTP.",
            !declaration && "Please confirm that the information provided is accurate.",
        );
    };

    // The Submit button works only once nothing is missing; until then the list below it says what is
    const missing = validate();
    const ready = missing.length === 0;

    const reset = () => {
        setNominee({ ...EMPTY_PERSON, industry: "", linkedin: "" });
        setExpertiseArea("");
        setAchievements("");
        setReason("");
        setNominator(EMPTY_PERSON);
        setRelationship("");
        setAdditionalInfo("");
        setDeclaration(false);
        [nomineeEmailOtp, nomineePhoneOtp, nominatorEmailOtp, nominatorPhoneOtp].forEach((o) => o.reset());
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!showErrors(validate())) return;
        setSubmitting(true);
        const res = await advisoryNominationApi.submit({
            nominee: { ...nominee, linkedin: nominee.linkedin.trim() },
            expertiseArea,
            achievements: achievements.trim(),
            reason: reason.trim(),
            nominator: effectiveNominator,
            relationship,
            additionalInfo: additionalInfo.trim(),
            declaration,
        });
        setSubmitting(false);
        if (!res.ok) {
            Swal.fire({ icon: "error", title: "Nomination not submitted", text: res.message, confirmButtonColor: "#0a4d22" });
            return;
        }
        setSubmitted(true);
        reset();
    };

    if (submitted) {
        return (
            <div className="w-full bg-white shadow-sm font-inter border-2 border-gray-200 p-8 rounded-lg flex flex-col items-center text-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#e8f5e9] flex items-center justify-center">
                    <CheckCircle size={34} className="text-[#0a4d22]" />
                </div>
                <h2 className="text-[18px] md:text-[20px] font-semibold text-[#111] font-poppins">Nomination Submitted</h2>
                <p className="text-[#555] text-[14px] max-w-md">
                    Thank you! Our team will review the nomination and contact the nominee if they are shortlisted for the Advisory Board.
                </p>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-2 px-6 py-2 rounded-lg bg-[#0a4d22] hover:bg-[#073617] text-white text-[14px] font-semibold">
                    Nominate someone else
                </button>
            </div>
        );
    }

    return (
        <div className="w-full bg-white shadow-sm font-inter border border-gray-200 p-4 rounded-lg border-2">
            {/* Header */}
            <div className="flex items-center gap-3.5 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#e8f5e9] flex items-center justify-center shrink-0 relative">
                    <Users size={22} className="text-[#0a4d22]" />
                    <MapPin size={14} className="text-[#0a4d22] absolute top-2 right-2 bg-[#e8f5e9] rounded-full" />
                </div>
                <div>
                    <h2 className="text-[14px] md:text-[18px] font-semibold text-[#111] font-poppins">Nomination Details</h2>
                    <p className="text-[#555] text-[14px]">Please share information about the nominee</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-2 md:space-y-3">
                {/* Section 1: Nominee Information */}
                <div className="bg-[#F8F9FD] rounded-[16px] md:rounded-[20px] p-4 px-6 py-3 border border-[#f1f5f9] shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-[26px] h-[26px] rounded-full bg-[#0a4d22] text-white flex items-center justify-center text-[13px] font-bold shrink-0">1</div>
                        <h3 className="font-semibold text-[#0a4d22] text-[15px] md:text-[16px]">Nominee Information</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className={labelCls}>Full Name of Nominee {req}</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <User size={16} />
                                </span>
                                <input value={nominee.name} onChange={(e) => setNomineeField("name", lettersOnly(e.target.value))} maxLength={80} placeholder="Enter full name" className={`${inputBase} pl-9 pr-3`} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className={labelCls}>Designation {req}</label>
                            <input value={nominee.designation} onChange={(e) => setNomineeField("designation", e.target.value.replace(/^\s+/, ""))} maxLength={120} placeholder="e.g., CEO, Founder, Director" className={`${inputBase} px-3`} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className={labelCls}>Organisation / Institution {req}</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Building2 size={16} />
                                </span>
                                <input value={nominee.organisation} onChange={(e) => setNomineeField("organisation", e.target.value.replace(/^\s+/, ""))} maxLength={200} placeholder="Enter organisation / institution" className={`${inputBase} pl-9 pr-3`} />
                            </div>
                        </div>
                        <SelectField label="Industry / Sector" value={nominee.industry} onChange={(v) => setNomineeField("industry", v)} options={dropdowns["advisory-industry-sector"]} placeholder="Select industry / sector" />

                        <VerifiedField kind="email" label="Email Address" value={nominee.email} onChange={(v) => setNomineeField("email", v)} otp={nomineeEmailOtp} name={nominee.name} />
                        <VerifiedField kind="phone" label="Phone / Mobile Number" value={nominee.phone} onChange={(v) => setNomineeField("phone", v)} otp={nomineePhoneOtp} name={nominee.name} />

                        <div className="flex flex-col gap-1.5 md:col-span-2">
                            <label className={labelCls}>
                                Professional Profile / LinkedIn <span className="font-normal text-gray-500">(if available)</span>
                            </label>
                            <div className="relative">
                                <input
                                    type="url"
                                    inputMode="url"
                                    value={nominee.linkedin}
                                    onChange={(e) => setNomineeField("linkedin", e.target.value.trim())}
                                    maxLength={300}
                                    placeholder="https://linkedin.com/in/yourprofile"
                                    className={`${inputBase} px-3 pr-10`}
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#0077b5] text-white font-bold text-[11px] px-1.5 py-0.5 rounded-[3px]">in</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 2: Nominee's Expertise */}
                <div className="bg-[#F8F9FD] rounded-[16px] md:rounded-[20px] p-4 px-6 py-3 border border-[#f1f5f9] shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-[26px] h-[26px] rounded-full bg-[#0a4d22] text-white flex items-center justify-center text-[13px] font-bold shrink-0">2</div>
                        <h3 className="font-semibold text-[#0a4d22] text-[15px] md:text-[16px]">Nominee&apos;s Expertise & Contribution</h3>
                    </div>

                    <div className="flex flex-col gap-5 md:gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                            <SelectField label="Areas of Expertise" value={expertiseArea} onChange={setExpertiseArea} options={dropdowns["advisory-expertise-area"]} placeholder="Select areas of expertise" />
                            <WordArea label="Key Achievements / Contributions" value={achievements} onChange={setAchievements} limit={LIMITS.achievements} placeholder="Briefly describe key achievements (10–300 words)" rows={2} />
                        </div>
                        <WordArea label="Why do you think this person should be on our Advisory Board?" value={reason} onChange={setReason} limit={LIMITS.reason} placeholder="Share your reason for nomination (10–400 words)" rows={2} />
                    </div>
                </div>

                {/* Section 3: Nominator Information */}
                <div className="bg-[#F8F9FD] rounded-[16px] md:rounded-[20px] p-4 px-6 py-3 border border-[#f1f5f9] shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-[26px] h-[26px] rounded-full bg-[#0a4d22] text-white flex items-center justify-center text-[13px] font-bold shrink-0">3</div>
                        <h3 className="font-semibold text-[#0a4d22] text-[15px] md:text-[16px]">Nominator Information</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-2">
                        <SelectField label="Relationship with Nominee" value={relationship} onChange={setRelationship} options={dropdowns["advisory-relationship"]} placeholder="Select relationship" />
                        <p className="self-end text-[12px] text-gray-500 md:pb-2.5">
                            {isSelf
                                ? "You are nominating yourself — your details below are taken from the nominee section."
                                : "Your email and mobile must be different from the nominee's. Nominating yourself? Choose “Self”."}
                        </p>

                        <div className="flex flex-col gap-1.5">
                            <label className={labelCls}>Your Name {req}</label>
                            <input value={effectiveNominator.name} onChange={(e) => setNominatorField("name", lettersOnly(e.target.value))} disabled={isSelf} maxLength={80} placeholder="Your full name" className={`${inputBase} px-3`} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className={labelCls}>Your Designation {req}</label>
                            <input value={effectiveNominator.designation} onChange={(e) => setNominatorField("designation", e.target.value.replace(/^\s+/, ""))} disabled={isSelf} maxLength={120} placeholder="Your designation" className={`${inputBase} px-3`} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className={labelCls}>Organisation / Institution {req}</label>
                            <input value={effectiveNominator.organisation} onChange={(e) => setNominatorField("organisation", e.target.value.replace(/^\s+/, ""))} disabled={isSelf} maxLength={200} placeholder="Enter organisation / institution" className={`${inputBase} px-3`} />
                        </div>
                        <div className="hidden md:block" />

                        <VerifiedField
                            kind="email"
                            label="Email Address"
                            value={effectiveNominator.email}
                            onChange={(v) => setNominatorField("email", v)}
                            otp={isSelf ? nomineeEmailOtp : nominatorEmailOtp}
                            name={effectiveNominator.name}
                            readOnly={isSelf}
                            note={isSelf ? "Same as the nominee's (verified above)." : undefined}
                        />
                        <VerifiedField
                            kind="phone"
                            label="Phone / Mobile Number"
                            value={effectiveNominator.phone}
                            onChange={(v) => setNominatorField("phone", v)}
                            otp={isSelf ? nomineePhoneOtp : nominatorPhoneOtp}
                            name={effectiveNominator.name}
                            readOnly={isSelf}
                            note={isSelf ? "Same as the nominee's (verified above)." : undefined}
                        />
                    </div>

                    <label className="flex items-center gap-3 cursor-pointer mt-4">
                        <input type="checkbox" checked={declaration} onChange={(e) => setDeclaration(e.target.checked)} className="peer sr-only" />
                        <span
                            className={`w-5 h-5 rounded-[4px] border flex items-center justify-center shrink-0 peer-focus-visible:ring-2 peer-focus-visible:ring-[#0a4d22] ${declaration ? "bg-[#0a4d22] border-[#0a4d22]" : "bg-white border-gray-400"}`}
                            aria-hidden="true"
                        >
                            {declaration && <Check size={14} className="text-white stroke-[3]" />}
                        </span>
                        <span className="text-[#333] text-[13px] font-medium">
                            I confirm that the information provided is accurate to the best of my knowledge. {req}
                        </span>
                    </label>
                </div>

                {/* Section 4: Additional Information */}
                <div className="bg-[#F8F9FD] rounded-[16px] md:rounded-[20px] p-4 px-6 py-3 border border-[#f1f5f9] shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-[26px] h-[26px] rounded-full bg-[#0a4d22] text-white flex items-center justify-center text-[13px] font-bold shrink-0">4</div>
                        <h3 className="font-semibold text-[#0a4d22] text-[15px] md:text-[16px]">Additional Information (Optional)</h3>
                    </div>
                    <WordArea label="" value={additionalInfo} onChange={setAdditionalInfo} limit={LIMITS.additionalInfo} placeholder="Any additional information that may support this nomination" required={false} rows={2} />
                </div>

                {/* Submit Area */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3">
                    <button
                        type="submit"
                        disabled={submitting || !ready}
                        title={ready ? undefined : "Fill in all required fields and verify the email / mobile numbers first"}
                        className="group inline-flex items-center justify-center gap-2 px-10 py-2 rounded-lg font-bold text-[14px] md:text-[15px] text-white transition-all active:scale-95 shadow-md bg-[#0a4d22] hover:bg-[#073617] disabled:cursor-not-allowed disabled:bg-gray-400 disabled:shadow-none disabled:active:scale-100 w-full sm:w-[50%] md:w-[45%] lg:w-[40%]"
                    >
                        {submitting ? (
                            <>
                                <Loader2 size={18} className="animate-spin" /> Submitting...
                            </>
                        ) : (
                            <>
                                Submit Nomination <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                    <div className="flex items-center gap-2 text-[#555] justify-center sm:justify-end w-full sm:w-auto">
                        <ShieldCheck size={20} className="text-[#0a4d22]" />
                        <span className="text-[13px] font-semibold">Secure • Confidential</span>
                    </div>
                </div>
                {!ready && (
                    <div className="pb-3 text-[12px] text-[#7a4a12]" aria-live="polite">
                        <p className="font-semibold">
                            {missing.length} item{missing.length === 1 ? "" : "s"} left before you can submit:
                        </p>
                        <ul className="mt-1 list-disc pl-5 space-y-0.5">
                            {missing.slice(0, 4).map((m) => (
                                <li key={m}>{m}</li>
                            ))}
                        </ul>
                        {missing.length > 4 && <p className="mt-0.5 pl-5 text-gray-500">…and {missing.length - 4} more</p>}
                    </div>
                )}
            </form>
        </div>
    );
};

export default NominateForm;
