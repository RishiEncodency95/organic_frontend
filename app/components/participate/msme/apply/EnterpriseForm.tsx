"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Building2, MapPin, Check, ChevronDown, Calendar, CheckCircle, ArrowRight, Lock } from "lucide-react";
import { verifyApi, msmeApi, msmeStorage } from "@/lib/api";
import type { UdyamExtractedData } from "../eligibility/EligibilityContext";
import Swal from "sweetalert2";

const INDIAN_STATES_AND_UTS = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
  "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

// The dropdowns render from these, and the certificate's printed values are matched
// against them, so a value can never be pre-filled into an option that doesn't exist.
const ENTERPRISE_TYPES = ["Micro", "Small", "Medium"];
const MAJOR_ACTIVITIES = ["Manufacturing", "Services", "Trading"];
const CATEGORIES = ["General", "OBC", "SC/ST", "Women"];
const GENDERS = ["Male", "Female", "Other"];
const CONSTITUTIONS = [
  "Private Limited Company", "Proprietorship", "Partnership", "LLP", "Public Limited Company",
];

/** Every Udyam number embeds its state code (UDYAM-UP-28-0121009), which is the one
 *  reliable way to recover the state when the printed string doesn't match our list. */
const UDYAM_STATE_CODES: Record<string, string> = {
  AN: "Andaman and Nicobar Islands", AP: "Andhra Pradesh", AR: "Arunachal Pradesh",
  AS: "Assam", BR: "Bihar", CH: "Chandigarh", CG: "Chhattisgarh",
  DN: "Dadra and Nagar Haveli and Daman and Diu", DD: "Dadra and Nagar Haveli and Daman and Diu",
  DL: "Delhi", GA: "Goa", GJ: "Gujarat", HR: "Haryana", HP: "Himachal Pradesh",
  JK: "Jammu and Kashmir", JH: "Jharkhand", KA: "Karnataka", KL: "Kerala", LA: "Ladakh",
  LD: "Lakshadweep", MP: "Madhya Pradesh", MH: "Maharashtra", MN: "Manipur", ML: "Meghalaya",
  MZ: "Mizoram", NL: "Nagaland", OD: "Odisha", OR: "Odisha", PY: "Puducherry", PB: "Punjab",
  RJ: "Rajasthan", SK: "Sikkim", TN: "Tamil Nadu", TG: "Telangana", TS: "Telangana",
  TR: "Tripura", UP: "Uttar Pradesh", UA: "Uttarakhand", UK: "Uttarakhand", WB: "West Bengal",
};

/** Certificates print states in their own style — "NCT OF DELHI", "ORISSA", "JAMMU & KASHMIR" —
 *  none of which equal our option values on a plain compare. */
const STATE_ALIASES: Record<string, string> = {
  "orissa": "Odisha",
  "pondicherry": "Puducherry",
  "nct of delhi": "Delhi",
  "delhi (nct)": "Delhi",
  "new delhi": "Delhi",
  "uttaranchal": "Uttarakhand",
  "jammu & kashmir": "Jammu and Kashmir",
  "andaman & nicobar islands": "Andaman and Nicobar Islands",
  "dadra & nagar haveli and daman & diu": "Dadra and Nagar Haveli and Daman and Diu",
  "dadra and nagar haveli": "Dadra and Nagar Haveli and Daman and Diu",
  "daman and diu": "Dadra and Nagar Haveli and Daman and Diu",
};

const canon = (value: string) => value.trim().toLowerCase().replace(/\s+/g, " ");

/** Matches a printed value against a dropdown's own options, ignoring case and spacing. */
const resolveOption = (raw: string | null | undefined, options: string[]): string => {
  if (!raw) return "";
  const key = canon(raw);
  return options.find((option) => canon(option) === key) || "";
};

/** Falls back to the state code inside the Udyam number when the printed state is missing
 *  or spelled in a way the dropdown doesn't carry. */
const resolveState = (raw: string | null | undefined, udyamNumber: string): string => {
  if (raw) {
    const key = canon(raw);
    const exact = INDIAN_STATES_AND_UTS.find((s) => canon(s) === key);
    if (exact) return exact;
    if (STATE_ALIASES[key]) return STATE_ALIASES[key];
    const byCode = UDYAM_STATE_CODES[raw.trim().toUpperCase()];
    if (byCode) return byCode;
  }
  const code = udyamNumber.match(/^UDYAM-([A-Z]{2})-/i)?.[1]?.toUpperCase();
  return (code && UDYAM_STATE_CODES[code]) || "";
};

/** <input type="date"> renders nothing unless the value is yyyy-mm-dd, while certificates
 *  print dd/mm/yyyy — so an un-normalised date silently shows as an empty field. */
const toDateInputValue = (raw: string | null | undefined): string => {
  if (!raw) return "";
  const value = raw.trim();
  const iso = value.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})$/);
  if (iso) return `${iso[1]}-${iso[2].padStart(2, "0")}-${iso[3].padStart(2, "0")}`;
  // Indian certificates are day-first, so 10/05/2019 is 10 May, never 5 October.
  const dmy = value.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/);
  if (dmy) return `${dmy[3]}-${dmy[2].padStart(2, "0")}-${dmy[1].padStart(2, "0")}`;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "";
  // Built from local parts on purpose: toISOString() would shift the date a day back in IST.
  return `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, "0")}-${String(parsed.getDate()).padStart(2, "0")}`;
};

// A PAN's 4th character is its holder-type code and is drawn from a fixed set, so
// checking it rejects the masked forms Udyam certificates print ("AAXXX1234X",
// "XXXXX1234X") — which a plain 5-letters-4-digits-1-letter shape would happily accept.
const PAN_RE = /^[A-Z]{3}[ABCFGHJLPT][A-Z][0-9]{4}[A-Z]$/;
const IFSC_RE = /^[A-Z]{4}0[A-Z0-9]{6}$/;
const GSTIN_RE = /^[0-9]{2}[A-Z]{3}[ABCFGHJLPT][A-Z][0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]$/;
// Indian mobile numbers are 10 digits and always start with 6-9.
const MOBILE_RE = /^[6-9][0-9]{9}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

/** Only a structurally complete value is worth pre-filling — a masked one would lock in
 *  something the applicant cannot correct and the backend cannot use. */
const resolvePan = (raw: string | null | undefined): string => {
  const value = (raw || "").replace(/\s/g, "").toUpperCase();
  return PAN_RE.test(value) ? value : "";
};

const resolveGstin = (raw: string | null | undefined): string => {
  const value = (raw || "").replace(/\s/g, "").toUpperCase();
  return GSTIN_RE.test(value) ? value : "";
};

/** A GSTIN carries its holder's PAN in characters 3-12 by construction, so a certificate
 *  that prints the GSTIN has already given us the PAN even when the PAN line is masked. */
const panFromGstin = (gstin: string): string => {
  if (!GSTIN_RE.test(gstin)) return "";
  const candidate = gstin.slice(2, 12);
  return PAN_RE.test(candidate) ? candidate : "";
};

/** The two states any field can be in: read off the certificate (locked) or open for input. */
const fieldCls = (locked: boolean, openExtra = "", always = "") =>
  `w-full h-[32px] px-3 rounded-md border text-[12px] font-semibold focus:outline-none ${always} ${
    locked
      ? "bg-[#f1f6f1] border-[#cfe3d3] text-gray-600 cursor-not-allowed"
      : `bg-[#fafbfa] text-gray-800 ${openExtra || "border-[#e5e7eb]"}`
  }`;

const LockedTag = () => (
  <span className="ml-1.5 inline-flex items-center gap-1 align-middle rounded bg-[#e8f3ea] px-1.5 py-[1px] text-[9px] font-semibold uppercase tracking-wide text-[#176b27]">
    <Lock size={9} strokeWidth={3} />
    From certificate
  </span>
);

export default function EnterpriseForm() {
  const router = useRouter();

  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [udyamNumber, setUdyamNumber] = useState("");
  const [udyamVerified, setUdyamVerified] = useState(false);
  const [enterpriseName, setEnterpriseName] = useState("");
  const [enterpriseType, setEnterpriseType] = useState("");
  const [majorActivity, setMajorActivity] = useState("");
  const [constitution, setConstitution] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfIncorporation, setDateOfIncorporation] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [gstin, setGstin] = useState("");
  const [pan, setPan] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [branch, setBranch] = useState("");

  const [isSaving, setIsSaving] = useState(false);

  /** Which fields the certificate itself answered. Those are shown settled and read-only;
   *  everything absent from the certificate stays open for the applicant to fill in. */
  const [lockedFields, setLockedFields] = useState<Record<string, boolean>>({});

  // Verification States
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [emailOtp, setEmailOtp] = useState("");
  const [phoneOtp, setPhoneOtp] = useState("");
  const [emailTimer, setEmailTimer] = useState(0);
  const [phoneTimer, setPhoneTimer] = useState(0);
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [isPhoneLoading, setIsPhoneLoading] = useState(false);

  const emailTimerRef = useRef<number | null>(null);
  const phoneTimerRef = useRef<number | null>(null);

  // Pre-fill from the certificate reading the eligibility-check step saved, so the
  // applicant never retypes it. Each value that lands is also locked — the certificate
  // is the source of truth for those fields — while anything it didn't answer is left
  // blank and editable. The reading is re-read from the database rather than trusted
  // from the browser, since the form locks fields on the strength of it.
  useEffect(() => {
    let cancelled = false;

    const applyExtract = (extract: Partial<UdyamExtractedData>) => {
      if (!extract || extract.documentType !== "valid_udyam_certificate") return;

      const locked: Record<string, boolean> = {};
      /** A field is only filled and locked when the certificate gave a value we can actually
       *  use — a half-read mobile or an unmatched state stays open rather than locking in junk. */
      const apply = (key: string, value: string, set: (v: string) => void) => {
        if (!value) return;
        set(value);
        locked[key] = true;
      };

      const udyamNumberValue = extract.udyamRegistrationNumber?.trim().toUpperCase() || "";
      apply("udyamNumber", udyamNumberValue, (v) => {
        setUdyamNumber(v);
        setUdyamVerified(true);
      });
      apply("enterpriseName", extract.enterpriseName?.trim() || "", setEnterpriseName);
      apply("enterpriseType", resolveOption(extract.enterpriseType, ENTERPRISE_TYPES), setEnterpriseType);
      apply("majorActivity", resolveOption(extract.majorActivity, MAJOR_ACTIVITIES), setMajorActivity);

      // The form offers one category dropdown where the certificate prints two separate facts,
      // so a woman-owned enterprise is recorded as "Women" ahead of its social category.
      const socialCategory =
        extract.socialCategory === "SC" || extract.socialCategory === "ST" ? "SC/ST" : extract.socialCategory;
      apply(
        "category",
        extract.gender === "Female" ? "Women" : resolveOption(socialCategory, CATEGORIES),
        setCategory
      );

      apply("constitution", resolveOption(extract.constitution, CONSTITUTIONS), setConstitution);
      apply("gender", resolveOption(extract.gender, GENDERS), setGender);
      apply("dateOfIncorporation", toDateInputValue(extract.dateOfIncorporation), setDateOfIncorporation);
      apply("address", extract.address?.trim() || "", setAddress);
      apply("state", resolveState(extract.state, udyamNumberValue), setState);
      apply("district", extract.district?.trim() || "", setDistrict);

      const pincodeDigits = (extract.pincode || "").replace(/\D/g, "");
      apply("pincode", pincodeDigits.length === 6 ? pincodeDigits : "", setPincode);

      const gstinValue = resolveGstin(extract.gstin);
      apply("gstin", gstinValue, setGstin);
      // Falls back to the PAN embedded in the GSTIN, which is the same value by construction.
      apply("pan", resolvePan(extract.pan) || panFromGstin(gstinValue), setPan);

      // Mobile and email are pre-filled but deliberately never locked: both still have to
      // clear an OTP, and a certificate often carries a number or address the applicant no
      // longer has. Locking them would leave nowhere to go once the OTP never arrives.
      const mobileDigits = (extract.mobile || "").replace(/\D/g, "").slice(-10);
      if (mobileDigits.length === 10) setMobile(mobileDigits);

      const emailValue = extract.email?.trim() || "";
      if (emailValue) setEmail(emailValue);

      // Bank details are pre-filled but left editable: the certificate records the
      // enterprise's registered account, while this section is the account they want
      // the funds paid into, and those are not always the same one.
      const bankNameValue = extract.bankName?.trim() || "";
      if (bankNameValue) setBankName(bankNameValue);

      const ifscValue = (extract.bankIfsc || "").replace(/\s/g, "").toUpperCase();
      if (IFSC_RE.test(ifscValue)) setIfsc(ifscValue);

      const accountDigits = (extract.bankAccountNumber || "").replace(/\D/g, "");
      if (accountDigits) setAccountNumber(accountDigits);

      // The certificate names the enterprise, which is who the registered account belongs to.
      const holderName = extract.enterpriseName?.trim() || "";
      if (bankNameValue && holderName) setAccountHolderName(holderName);

      setLockedFields(locked);
    };

    const load = async () => {
      const verificationId = msmeStorage.getUdyamVerificationId();
      if (verificationId) {
        try {
          const res = await msmeApi.getUdyamVerification(verificationId);
          if (cancelled) return;
          if (res?.success && res.data?.extractedData) {
            applyExtract(res.data.extractedData);
            return;
          }
        } catch {
          // Fall through to the browser's copy rather than showing an empty form.
        }
      }
      // Only a fallback: covers a failed read, and eligibility checks run before ids were kept.
      const cached = msmeStorage.getUdyamExtract();
      if (!cancelled && cached) applyExtract(cached);
    };

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (emailTimer > 0) {
      emailTimerRef.current = window.setInterval(() => {
        setEmailTimer((prev) => prev - 1);
      }, 1000);
    } else if (emailTimerRef.current) {
      clearInterval(emailTimerRef.current);
    }
    return () => {
      if (emailTimerRef.current) clearInterval(emailTimerRef.current);
    };
  }, [emailTimer]);

  useEffect(() => {
    if (phoneTimer > 0) {
      phoneTimerRef.current = window.setInterval(() => {
        setPhoneTimer((prev) => prev - 1);
      }, 1000);
    } else if (phoneTimerRef.current) {
      clearInterval(phoneTimerRef.current);
    }
    return () => {
      if (phoneTimerRef.current) clearInterval(phoneTimerRef.current);
    };
  }, [phoneTimer]);

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setMobile(value);
    setPhoneVerified(false);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailVerified(false);
  };

  const handleEnterpriseNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnterpriseName(e.target.value);
  };

  const handleSendEmailOtp = async () => {
    if (!email) {
      Swal.fire({ title: "Error", text: "Please enter your email first.", icon: "error" });
      return;
    }
    setIsEmailLoading(true);
    try {
      const res = await verifyApi.sendEmailOtp(email, "EXHIBITOR");
      if (res.success) {
        setEmailTimer(60);
      } else {
        Swal.fire({ title: "Error", text: res.message || "Failed to send OTP.", icon: "error" });
      }
    } catch (error) {
      Swal.fire({ title: "Error", text: "Failed to send email OTP.", icon: "error" });
    } finally {
      setIsEmailLoading(false);
    }
  };

  const handleVerifyEmailOtp = async () => {
    if (!emailOtp || emailOtp.length < 6) {
      Swal.fire({ title: "Error", text: "Please enter a valid 6-digit OTP.", icon: "error" });
      return;
    }
    setIsEmailLoading(true);
    try {
      const res = await verifyApi.verifyEmailOtp(email, emailOtp);
      if (res.success) {
        setEmailVerified(true);
        setEmailOtp("");
      } else {
        Swal.fire({ title: "Invalid OTP", text: "The OTP is incorrect.", icon: "error" });
      }
    } catch (error) {
      Swal.fire({ title: "Error", text: "Verification failed.", icon: "error" });
    } finally {
      setIsEmailLoading(false);
    }
  };

  const handleSendPhoneOtp = async () => {
    if (!mobile || mobile.length < 10) {
      Swal.fire({ title: "Error", text: "Please enter a valid 10-digit mobile number.", icon: "error" });
      return;
    }
    setIsPhoneLoading(true);
    try {
      const nameToSend = enterpriseName || "Exhibitor";
      const phoneToSend = mobile.length === 10 ? `91${mobile}` : mobile;
      const res = await verifyApi.sendPhoneOtp(phoneToSend, "EXHIBITOR", nameToSend);
      if (res.success) {
        setPhoneTimer(60);
      } else {
        Swal.fire({ title: "Error", text: res.message || "Failed to send OTP.", icon: "error" });
      }
    } catch (error) {
      Swal.fire({ title: "Error", text: "Failed to send WhatsApp OTP.", icon: "error" });
    } finally {
      setIsPhoneLoading(false);
    }
  };

  const handleVerifyPhoneOtp = async () => {
    if (!phoneOtp || phoneOtp.length < 6) {
      Swal.fire({ title: "Error", text: "Please enter a valid 6-digit OTP.", icon: "error" });
      return;
    }
    setIsPhoneLoading(true);
    try {
      const phoneToSend = mobile.length === 10 ? `91${mobile}` : mobile;
      const res = await verifyApi.verifyPhoneOtp(phoneToSend, phoneOtp);
      if (res.success) {
        setPhoneVerified(true);
        setPhoneOtp("");
      } else {
        Swal.fire({ title: "Invalid OTP", text: "The OTP is incorrect.", icon: "error" });
      }
    } catch (error) {
      Swal.fire({ title: "Error", text: "Verification failed.", icon: "error" });
    } finally {
      setIsPhoneLoading(false);
    }
  };

  const handleSaveAndProceed = async () => {
    if (!isFormValid) return;

    setIsSaving(true);
    try {
      const existingId = msmeStorage.getApplicationId();
      const res = await msmeApi.saveEnterpriseDetails(existingId, {
        udyamNumber,
        enterpriseName,
        enterpriseType,
        majorActivity,
        constitution,
        category,
        gender,
        dateOfIncorporation,
        address,
        state,
        district,
        pincode,
        gstin,
        pan,
        bank: { accountHolderName, bankName, accountNumber, ifsc, branch },
        mobile,
        email,
        verifiedMobile: phoneVerified ? mobile : undefined,
        verifiedEmail: emailVerified ? email : undefined,
      });

      if (!res.success) {
        Swal.fire({ title: "Error", text: res.message || "Could not save your details. Please try again.", icon: "error" });
        return;
      }

      msmeStorage.setApplicationId(res.data.applicationId);
      router.push("/participate/msme/apply/participation-details");
    } catch (error) {
      Swal.fire({ title: "Error", text: "Something went wrong while saving. Please try again.", icon: "error" });
    } finally {
      setIsSaving(false);
    }
  };

  const lockedCount = Object.keys(lockedFields).length;

  // Format checks, shown under a field only once the applicant has typed into it.
  const mobileError = mobile && !MOBILE_RE.test(mobile) ? "Enter a valid 10-digit mobile number starting with 6-9." : "";
  const emailError = email && !EMAIL_RE.test(email.trim()) ? "Enter a valid email address, e.g. name@company.com." : "";
  const pincodeError = pincode && pincode.length !== 6 ? "PIN code must be 6 digits." : "";
  const panError = pan && !PAN_RE.test(pan) ? "Enter a valid 10-character PAN, e.g. AAXCR1234R." : "";
  const gstinError = gstin && !GSTIN_RE.test(gstin) ? "Enter a valid 15-character GSTIN." : "";
  const ifscError = ifsc && !IFSC_RE.test(ifsc) ? "Enter a valid 11-character IFSC, e.g. HDFC0001234." : "";

  /** Every starred field, paired with whether it currently holds a usable value. */
  const requiredChecks: [string, boolean][] = [
    ["Udyam Registration Number", !!udyamNumber.trim()],
    ["Enterprise Name", !!enterpriseName.trim()],
    ["Enterprise Type", !!enterpriseType],
    ["Major Activity", !!majorActivity],
    ["Constitution", !!constitution],
    ["Entrepreneur Category", !!category],
    ["Gender", !!gender],
    ["Date of Incorporation", !!dateOfIncorporation],
    ["Address", !!address.trim()],
    ["State", !!state],
    ["District", !!district.trim()],
    ["PIN Code", pincode.length === 6],
    ["Mobile Number", MOBILE_RE.test(mobile)],
    ["Email ID", EMAIL_RE.test(email.trim())],
    ["PAN Number", PAN_RE.test(pan)],
    ["Account Holder Name", !!accountHolderName.trim()],
    ["Bank Name", !!bankName.trim()],
    ["Account Number", !!accountNumber],
    ["IFSC Code", IFSC_RE.test(ifsc)],
    ["Branch", !!branch.trim()],
  ];
  const missingFields = requiredChecks.filter(([, ok]) => !ok).map(([label]) => label);
  // A correctly formatted number or address still has to clear its OTP before the applicant moves on.
  if (MOBILE_RE.test(mobile) && !phoneVerified) missingFields.push("Mobile OTP verification");
  if (EMAIL_RE.test(email.trim()) && !emailVerified) missingFields.push("Email OTP verification");
  const isFormValid = missingFields.length === 0 && !gstinError;

  return (
    <div className="w-full bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-3 md:p-4">
      {/* Header */}
      <div className="mb-4 border-b border-[#e5e7eb] pb-3">
        <div className="flex items-center gap-2 mb-2">
          <Building2 size={22} className="text-[#176b27]" strokeWidth={2.5} />
          <h2 className="text-[17px] font-semibold uppercase text-[#176b27] tracking-wide">
            1. Enterprise Details
          </h2>
        </div>
        <p className="text-gray-500 text-[13px] font-medium">
          — Please provide your enterprise information as per Udyam Registration.
        </p>
        {lockedCount > 0 && (
          <div className="mt-3 flex items-start gap-2 rounded-md border border-[#cfe3d3] bg-[#f1f6f1] px-3 py-2">
            <Lock size={13} className="mt-[2px] shrink-0 text-[#176b27]" strokeWidth={2.5} />
            <p className="text-[11px] font-medium leading-relaxed text-gray-600">
              <span className="font-semibold text-[#176b27]">
                {lockedCount} field{lockedCount === 1 ? "" : "s"}
              </span>{" "}
              below were read from your Udyam certificate and are locked so they keep matching it.
              Please fill in the remaining fields yourself.
            </p>
          </div>
        )}
      </div>

      {/* Form Fields - Section 1 */}
      <div className="flex flex-col gap-3">
        {/* Row 1 */}
        <div className="w-full">
          <label className="block text-[11px] font-semibold text-gray-700 mb-1">
            Udyam Registration Number <span className="text-red-500">*</span>
            {lockedFields.udyamNumber && <LockedTag />}
          </label>
          <div className="relative">
            <input
              type="text"
              value={udyamNumber}
              readOnly={!!lockedFields.udyamNumber}
              onChange={(e) => { setUdyamNumber(e.target.value.toUpperCase()); setUdyamVerified(false); }}
              placeholder="e.g. UDYAM-DL-02-0118490"
              className={fieldCls(
                !!lockedFields.udyamNumber,
                udyamVerified ? "border-[#176b27]" : "",
                udyamVerified ? "pr-[90px]" : ""
              )}
            />
            {udyamVerified && (
              <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#e8f3ea] text-[#176b27] px-2 py-1 rounded-md flex items-center gap-1">
                <Check size={14} strokeWidth={3} />
                <span className="text-[11px] font-semibold">Verified</span>
              </div>
            )}
          </div>
          {!udyamVerified && (
            <p className="mt-1 text-[10.5px] font-medium text-gray-500">
              Not verified via certificate upload — you can still enter it manually.
            </p>
          )}
        </div>

        {/* Row 2 */}
        <div className="w-full">
          <label className="block text-[11px] font-semibold text-gray-700 mb-1">
            Enterprise Name <span className="text-red-500">*</span>
            {lockedFields.enterpriseName && <LockedTag />}
          </label>
          <input
            type="text"
            value={enterpriseName}
            readOnly={!!lockedFields.enterpriseName}
            onChange={handleEnterpriseNameChange}
            placeholder="e.g. RAMMANI TRADELINK PRIVATE LIMITED"
            className={fieldCls(!!lockedFields.enterpriseName)}
          />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="w-full relative">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Enterprise Type <span className="text-red-500">*</span>
              {lockedFields.enterpriseType && <LockedTag />}
            </label>
            <select
              value={enterpriseType}
              disabled={!!lockedFields.enterpriseType}
              onChange={(e) => setEnterpriseType(e.target.value)}
              className={fieldCls(!!lockedFields.enterpriseType, "", "appearance-none")}
            >
              <option value="">Select Enterprise Type</option>
              {ENTERPRISE_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-[23px] text-gray-400 pointer-events-none" />
          </div>
          <div className="w-full relative">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Major Activity <span className="text-red-500">*</span>
              {lockedFields.majorActivity && <LockedTag />}
            </label>
            <select
              value={majorActivity}
              disabled={!!lockedFields.majorActivity}
              onChange={(e) => setMajorActivity(e.target.value)}
              className={fieldCls(!!lockedFields.majorActivity, "", "appearance-none")}
            >
              <option value="">Select Major Activity</option>
              {MAJOR_ACTIVITIES.map((a) => (
                <option key={a} value={a}>{a}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-[23px] text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="w-full relative">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Constitution / Organisation <span className="text-red-500">*</span>
              {lockedFields.constitution && <LockedTag />}
            </label>
            <select
              value={constitution}
              disabled={!!lockedFields.constitution}
              onChange={(e) => setConstitution(e.target.value)}
              className={fieldCls(!!lockedFields.constitution, "", "appearance-none")}
            >
              <option value="">Select Constitution</option>
              {CONSTITUTIONS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-[23px] text-gray-400 pointer-events-none" />
          </div>
          <div className="w-full relative">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Entrepreneur Category <span className="text-red-500">*</span>
              {lockedFields.category && <LockedTag />}
            </label>
            <select
              value={category}
              disabled={!!lockedFields.category}
              onChange={(e) => setCategory(e.target.value)}
              className={fieldCls(!!lockedFields.category, "", "appearance-none")}
            >
              <option value="">Select Category</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-[23px] text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="w-full relative">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Gender of Entrepreneur <span className="text-red-500">*</span>
              {lockedFields.gender && <LockedTag />}
            </label>
            <select
              value={gender}
              disabled={!!lockedFields.gender}
              onChange={(e) => setGender(e.target.value)}
              className={fieldCls(!!lockedFields.gender, "", "appearance-none")}
            >
              <option value="">Select Gender</option>
              {GENDERS.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-[23px] text-gray-400 pointer-events-none" />
          </div>
          <div className="w-full relative">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Date of Incorporation <span className="text-red-500">*</span>
              {lockedFields.dateOfIncorporation && <LockedTag />}
            </label>
            <input
              type="date"
              value={dateOfIncorporation}
              readOnly={!!lockedFields.dateOfIncorporation}
              onChange={(e) => setDateOfIncorporation(e.target.value)}
              className={fieldCls(!!lockedFields.dateOfIncorporation)}
            />
          </div>
        </div>
      </div>


      {/* Section 2: Address */}
      <div className="mt-5 mb-4 border-b border-[#e5e7eb] pb-2 flex items-center gap-2">
        <MapPin size={18} className="text-[#176b27]" strokeWidth={2.5} />
        <h3 className="text-[13px] font-semibold uppercase text-[#176b27] tracking-wide">
          Registered Office Address
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        <div className="w-full">
          <label className="block text-[11px] font-semibold text-gray-700 mb-1">
            Address <span className="text-red-500">*</span>
            {lockedFields.address && <LockedTag />}
          </label>
          <input
            type="text"
            value={address}
            readOnly={!!lockedFields.address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="e.g. East Delhi"
            className={fieldCls(!!lockedFields.address)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="w-full relative">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              State <span className="text-red-500">*</span>
              {lockedFields.state && <LockedTag />}
            </label>
            <select
              value={state}
              disabled={!!lockedFields.state}
              onChange={(e) => setState(e.target.value)}
              className={fieldCls(!!lockedFields.state, "", "appearance-none")}
            >
              <option value="">Select State</option>
              {INDIAN_STATES_AND_UTS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-[23px] text-gray-400 pointer-events-none" />
          </div>
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              District <span className="text-red-500">*</span>
              {lockedFields.district && <LockedTag />}
            </label>
            <input
              type="text"
              value={district}
              readOnly={!!lockedFields.district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder="e.g. East Delhi"
              className={fieldCls(!!lockedFields.district)}
            />
          </div>
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              PIN Code <span className="text-red-500">*</span>
              {lockedFields.pincode && <LockedTag />}
            </label>
            <input
              type="text"
              value={pincode}
              readOnly={!!lockedFields.pincode}
              onChange={(e) => setPincode(e.target.value.replace(/\D/g, "").slice(0, 6))}
              placeholder="e.g. 110092"
              className={fieldCls(!!lockedFields.pincode)}
            />
            {pincodeError && <p className="mt-1 text-[10.5px] font-medium text-red-500">{pincodeError}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                value={mobile}
                onChange={handleMobileChange}
                maxLength={10}
                placeholder="10-digit mobile number"
                className={fieldCls(false, mobileError ? "border-red-400" : MOBILE_RE.test(mobile) && !phoneVerified ? "border-[#176b27]" : "")}
              />
              {MOBILE_RE.test(mobile) && !phoneVerified && (
                <button type="button" onClick={handleSendPhoneOtp} disabled={isPhoneLoading || phoneTimer > 0} className="absolute right-1 top-[2px] h-[28px] px-3 bg-[#25D366] text-white text-[10px] font-semibold uppercase rounded hover:bg-[#20b858] transition-colors disabled:opacity-50">
                  {phoneTimer > 0 ? `Resend in ${phoneTimer}s` : isPhoneLoading ? "Sending..." : "Verify"}
                </button>
              )}
              {phoneVerified && (
                <div className="absolute right-2 top-1.5 flex items-center gap-1 text-[#176b27] bg-[#f1f6f1] px-2 py-0.5 rounded text-[10px] font-semibold">
                  <CheckCircle size={12} /> Verified
                </div>
              )}
            </div>
            {mobileError && <p className="mt-1 text-[10.5px] font-medium text-red-500">{mobileError}</p>}
            {/* Phone OTP Input */}
            {phoneTimer > 0 && !phoneVerified && (
              <div className="mt-2 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  value={phoneOtp}
                  onChange={(e) => setPhoneOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="w-full h-[32px] px-3 bg-white border border-[#25D366] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#25D366]"
                />
                <button
                  type="button"
                  onClick={handleVerifyPhoneOtp}
                  disabled={phoneOtp.length !== 6 || isPhoneLoading}
                  className="h-[32px] px-4 bg-[#176b27] text-white text-[11px] font-semibold uppercase rounded-md hover:bg-[#115d20] transition-colors disabled:opacity-50 whitespace-nowrap"
                >
                  Confirm
                </button>
              </div>
            )}
          </div>
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Email ID <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="e.g. info@rammanitradelink.com"
                className={fieldCls(false, emailError ? "border-red-400" : email && !emailVerified ? "border-[#176b27]" : "")}
              />
              {email && !emailVerified && EMAIL_RE.test(email.trim()) && (
                <button type="button" onClick={handleSendEmailOtp} disabled={isEmailLoading || emailTimer > 0} className="absolute right-1 top-[2px] h-[28px] px-3 bg-[#176b27] text-white text-[10px] font-semibold uppercase rounded hover:bg-[#115d20] transition-colors disabled:opacity-50">
                  {emailTimer > 0 ? `Resend in ${emailTimer}s` : isEmailLoading ? "Sending..." : "Verify"}
                </button>
              )}
              {emailVerified && (
                <div className="absolute right-2 top-1.5 flex items-center gap-1 text-[#176b27] bg-[#f1f6f1] px-2 py-0.5 rounded text-[10px] font-semibold">
                  <CheckCircle size={12} /> Verified
                </div>
              )}
            </div>
            {emailError && <p className="mt-1 text-[10.5px] font-medium text-red-500">{emailError}</p>}
            {/* Email OTP Input */}
            {emailTimer > 0 && !emailVerified && (
              <div className="mt-2 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  maxLength={6}
                  value={emailOtp}
                  onChange={(e) => setEmailOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="w-full h-[32px] px-3 bg-white border border-[#176b27] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none focus:ring-1 focus:ring-[#176b27]"
                />
                <button
                  type="button"
                  onClick={handleVerifyEmailOtp}
                  disabled={emailOtp.length !== 6 || isEmailLoading}
                  className="h-[32px] px-4 bg-[#176b27] text-white text-[11px] font-semibold uppercase rounded-md hover:bg-[#115d20] transition-colors disabled:opacity-50 whitespace-nowrap"
                >
                  Confirm
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              GSTIN <span className="text-gray-400 font-medium">(If available)</span>
              {lockedFields.gstin && <LockedTag />}
            </label>
            <input
              type="text"
              value={gstin}
              readOnly={!!lockedFields.gstin}
              onChange={(e) => setGstin(e.target.value.replace(/\s/g, "").toUpperCase().slice(0, 15))}
              placeholder="e.g. 07AAXCR1234R1Z5"
              className={fieldCls(!!lockedFields.gstin)}
            />
            {gstinError && <p className="mt-1 text-[10.5px] font-medium text-red-500">{gstinError}</p>}
          </div>
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              PAN Number <span className="text-red-500">*</span>
              {lockedFields.pan && <LockedTag />}
            </label>
            <input
              type="text"
              value={pan}
              readOnly={!!lockedFields.pan}
              onChange={(e) => setPan(e.target.value.replace(/\s/g, "").toUpperCase().slice(0, 10))}
              placeholder="e.g. AAXCR1234R"
              className={fieldCls(!!lockedFields.pan)}
            />
            {panError && <p className="mt-1 text-[10.5px] font-medium text-red-500">{panError}</p>}
          </div>
        </div>
      </div>


      {/* Section 3: Bank Details */}
      <div className="mt-5 mb-4 pb-1">
        <label className="block text-[13px] font-semibold text-gray-800 mb-1">
          Bank Account Details <span className="text-gray-500 font-medium">(For fund transfer, if applicable)</span>
        </label>
      </div>

      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Account Holder Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={accountHolderName}
              onChange={(e) => setAccountHolderName(e.target.value)}
              placeholder="Company or Individual Name"
              className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
            />
          </div>
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Bank Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              placeholder="e.g. HDFC BANK LTD."
              className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Account Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, ""))}
              placeholder="e.g. 1234567894321"
              className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
            />
          </div>
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              IFSC Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={ifsc}
              onChange={(e) => setIfsc(e.target.value.replace(/\s/g, "").toUpperCase().slice(0, 11))}
              placeholder="e.g. HDFC0001234"
              className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
            />
            {ifscError && <p className="mt-1 text-[10.5px] font-medium text-red-500">{ifscError}</p>}
          </div>
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Branch <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              placeholder="e.g. LAXMI NAGAR, DELHI"
              className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Save & Proceed */}
      <div className="mt-5 flex flex-col items-end gap-2">
        {!isFormValid && (
          <p className="text-right text-[11px] font-medium text-gray-500">
            {missingFields.length > 0
              ? `Please complete: ${missingFields.join(", ")}`
              : "Please correct the highlighted fields."}
          </p>
        )}
        <button
          type="button"
          onClick={handleSaveAndProceed}
          disabled={isSaving || !isFormValid}
          className="h-[38px] px-8 rounded-md bg-[#176b27] text-white font-semibold text-[13px] uppercase tracking-wide hover:bg-[#115d20] transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#176b27]"
        >
          {isSaving ? "Saving..." : (
            <>
              Save &amp; Proceed to Next <ArrowRight size={18} strokeWidth={2.5} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
