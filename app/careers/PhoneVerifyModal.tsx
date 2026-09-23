"use client";

import { useEffect, useRef, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Loader2,
    LockKeyhole,
    Phone,
    ShieldCheck,
    X,
} from "lucide-react";
import { verifyApi } from "@/lib/api";

const OTP_LENGTH = 6;

const digitsOnly = (value?: string | null) => (value || "").replace(/\D/g, "");

/** Last 10 digits — what the WhatsApp OTP API expects, country code stripped. */
const nationalDigits = (value?: string | null) => digitsOnly(value).slice(-10);

/** "9876543210" -> "+91 98765 43210" */
const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (digits.length <= 5) return `+91 ${digits}`.trim();
    return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
};

/**
 * WhatsApp OTP verification, shown when the candidate clicks "Continue & Apply" on the
 * eligibility screen — one step after the analysis, not right after it. `phoneOptions`
 * are the numbers already known for this candidate (from the CV); when there are none,
 * the popup opens straight on the manual-entry step.
 */
export default function PhoneVerifyModal({
    isOpen,
    phoneOptions,
    candidateName,
    onVerified,
    onDismiss,
    onCloseAll,
}: {
    isOpen: boolean;
    /** Numbers to offer as radio choices; already filtered to ones that can take a WhatsApp OTP. */
    phoneOptions: string[];
    candidateName?: string;
    /** Called with the verified number, formatted "+91 98765 43210". */
    onVerified: (verifiedPhone: string) => void;
    /** Steps back out of this popup only, revealing the eligibility screen behind it. */
    onDismiss: () => void;
    /** Closes the whole "Apply Now" flow, same as the X on every other step. */
    onCloseAll: () => void;
}) {
    const [step, setStep] = useState<"SELECT" | "PHONE" | "OTP">("SELECT");
    const [selectedPhone, setSelectedPhone] = useState("");
    /** Which step sent the OTP, so Back from the code step returns there. */
    const [sentFrom, setSentFrom] = useState<"SELECT" | "PHONE">("SELECT");
    const [mobileNumber, setMobileNumber] = useState("");
    const [otpCode, setOtpCode] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [isVerifying, setIsVerifying] = useState(false);
    const [error, setError] = useState("");
    const [resendIn, setResendIn] = useState(0);
    const otpInputsRef = useRef<(HTMLInputElement | null)[]>([]);

    // Reset to the right starting step every time the popup opens.
    useEffect(() => {
        if (!isOpen) return;

        setError("");
        setOtpCode("");
        setResendIn(0);

        if (phoneOptions.length > 0) {
            setSelectedPhone(phoneOptions[0]);
            setMobileNumber(nationalDigits(phoneOptions[0]));
            setStep("SELECT");
            setSentFrom("SELECT");
        } else {
            setSelectedPhone("");
            setMobileNumber("");
            setStep("PHONE");
            setSentFrom("PHONE");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    // Resend cooldown after each successful send.
    useEffect(() => {
        if (resendIn <= 0) return;
        const timer = setTimeout(() => setResendIn((seconds) => seconds - 1), 1000);
        return () => clearTimeout(timer);
    }, [resendIn]);

    // Drop the caret straight into the first OTP box when the step opens.
    useEffect(() => {
        if (step === "OTP") otpInputsRef.current[0]?.focus();
    }, [step]);

    if (!isOpen) return null;

    /** One step back inside the popup; from its first step, close the popup entirely. */
    const handleBack = () => {
        setError("");

        if (step === "OTP") {
            setOtpCode("");
            setStep(sentFrom);
            return;
        }

        if (step === "PHONE" && phoneOptions.length > 0) {
            setStep("SELECT");
            return;
        }

        onDismiss();
    };

    const handleSend = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        const cleanedPhone = mobileNumber.replace(/\D/g, "");
        if (cleanedPhone.length < 10) {
            setError("Please enter a valid 10-digit mobile number.");
            return;
        }

        setIsSending(true);
        setError("");

        try {
            const result = await verifyApi.sendPhoneOtp(
                cleanedPhone,
                "CAREER_CANDIDATE",
                candidateName || "Candidate",
                "BOE2027"
            );

            // `msg` is present on failures too, so only `success` may advance the step.
            if (result?.success) {
                setSentFrom(step === "OTP" ? sentFrom : step);
                setStep("OTP");
                setOtpCode("");
                setResendIn(30);
            } else {
                setError(result?.message || result?.msg || "Failed to send WhatsApp OTP. Please try again.");
            }
        } catch (err: any) {
            setError(err?.message || "Failed to send WhatsApp OTP.");
        } finally {
            setIsSending(false);
        }
    };

    // ─── OTP box helpers ─────────────────────────────────────────────────────
    // `otpCode` stays the single source of truth; the six boxes are just a view of it.
    const focusOtpBox = (index: number) => {
        otpInputsRef.current[Math.max(0, Math.min(index, OTP_LENGTH - 1))]?.focus();
    };

    const handleBoxChange = (index: number, raw: string) => {
        const digits = raw.replace(/\D/g, "");
        if (!digits) return;
        const next = (otpCode.slice(0, index) + digits).slice(0, OTP_LENGTH);
        setOtpCode(next);
        setError("");
        focusOtpBox(next.length);
    };

    const handleBoxKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace") {
            e.preventDefault();
            if (otpCode[index]) {
                setOtpCode(otpCode.slice(0, index) + otpCode.slice(index + 1));
                focusOtpBox(index);
            } else if (index > 0) {
                setOtpCode(otpCode.slice(0, index - 1) + otpCode.slice(index));
                focusOtpBox(index - 1);
            }
        } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            focusOtpBox(index - 1);
        } else if (e.key === "ArrowRight") {
            e.preventDefault();
            focusOtpBox(index + 1);
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        const digits = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
        if (!digits) return;
        e.preventDefault();
        setOtpCode(digits);
        setError("");
        focusOtpBox(digits.length);
    };

    const handleVerify = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!otpCode || otpCode.trim().length < 4) {
            setError("Please enter the OTP received on WhatsApp.");
            return;
        }

        const cleanedPhone = mobileNumber.replace(/\D/g, "");
        setIsVerifying(true);
        setError("");

        try {
            const result = await verifyApi.verifyPhoneOtp(cleanedPhone, otpCode.trim());

            if (result && (result.success || result.statusCode === 200)) {
                onVerified(formatPhone(cleanedPhone));
            } else {
                setError(result?.message || result?.msg || "Invalid OTP code. Please enter the correct OTP.");
            }
        } catch (err: any) {
            setError(err?.message || "OTP verification failed. Please try again.");
        } finally {
            setIsVerifying(false);
        }
    };

    return (
        <div
            className="fixed inset-0 z-[100000] flex items-center justify-center bg-[#04140d]/70 p-4 backdrop-blur-[6px]"
            // Clicking outside the card closes the whole flow too, matching the main modal's backdrop.
            onClick={onCloseAll}
        >
            <div
                className="relative w-full max-w-[430px] overflow-hidden rounded-[20px] bg-[#FBFCF9] shadow-[0_30px_80px_rgba(0,45,28,0.4)] ring-1 ring-[#cfe4d7]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* ── Brand header ───────────────────────────────── */}
                <div className="relative overflow-hidden bg-[linear-gradient(135deg,#00563f_0%,#00714f_55%,#008d55_100%)] px-6 py-5">
                    <span className="pointer-events-none absolute -right-10 -top-14 h-36 w-36 rounded-full bg-white/10" />
                    <span className="pointer-events-none absolute -bottom-16 right-10 h-28 w-28 rounded-full bg-white/[0.07]" />

                    <div className="absolute right-4 top-4 flex items-center gap-2">
                        <button
                            type="button"
                            aria-label="Go back one step"
                            onClick={handleBack}
                            className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
                        >
                            <ArrowLeft className="h-[18px] w-[18px]" strokeWidth={2.4} />
                        </button>
                        <button
                            type="button"
                            aria-label="Close"
                            onClick={onCloseAll}
                            className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
                        >
                            <X className="h-[18px] w-[18px]" strokeWidth={2.4} />
                        </button>
                    </div>

                    <div className="relative flex items-center gap-3">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white/15 ring-1 ring-white/25">
                            <ShieldCheck className="h-6 w-6 text-white" strokeWidth={2.2} />
                        </div>
                        <div className="min-w-0">
                            <h3 className="font-poppins text-[19px] font-semibold leading-tight text-white">
                                WhatsApp Verification
                            </h3>
                            <p className="mt-[3px] flex items-center gap-1.5 text-[12px] font-medium text-[#bfe6cf]">
                                <span className="inline-block h-[7px] w-[7px] rounded-full bg-[#5df095]" />
                                Bharat Organic Expo 2027
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── Body ───────────────────────────────────────── */}
                <div className="px-6 pb-6 pt-5">
                    {step === "SELECT" ? (
                        <form onSubmit={handleSend} className="space-y-4">
                            <div className="flex items-start gap-2.5 rounded-[10px] border border-[#c6e9d2] bg-[#eef9f2] px-3.5 py-3">
                                <CheckCircle2 className="mt-[1px] h-[17px] w-[17px] shrink-0 fill-[#007a50] text-white" />
                                <p className="text-[12.5px] font-semibold leading-snug text-[#0d5c40]">
                                    One last step — verify your mobile number to continue with your application.
                                </p>
                            </div>

                            <div>
                                <p className="mb-2 text-[13.5px] leading-[1.5] text-[#42566c]">
                                    {phoneOptions.length > 1
                                        ? "We found these numbers on your CV. Choose the one to receive the OTP on WhatsApp."
                                        : "We found this number on your CV. Confirm it to receive the OTP on WhatsApp."}
                                </p>

                                <div className="space-y-2">
                                    {phoneOptions.map((option) => {
                                        const isSelected = nationalDigits(option) === nationalDigits(selectedPhone);
                                        return (
                                            <label
                                                key={option}
                                                className={`flex cursor-pointer items-center gap-3 rounded-[10px] border bg-white px-3.5 py-3 transition ${isSelected
                                                    ? "border-[#008d55] ring-[3px] ring-[#008d55]/15"
                                                    : "border-[#c3d8cb] hover:border-[#9cc3ac]"
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="boe-cv-phone"
                                                    value={option}
                                                    checked={isSelected}
                                                    onChange={() => {
                                                        setSelectedPhone(option);
                                                        setMobileNumber(nationalDigits(option));
                                                        setError("");
                                                    }}
                                                    className="h-[17px] w-[17px] shrink-0 accent-[#007a50]"
                                                />
                                                <Phone className="h-[17px] w-[17px] shrink-0 text-[#00563f]" strokeWidth={2.2} />
                                                <span className="text-[15px] font-semibold tracking-[0.02em] text-[#12334a]">
                                                    {formatPhone(nationalDigits(option))}
                                                </span>
                                            </label>
                                        );
                                    })}
                                </div>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setStep("PHONE");
                                        setMobileNumber("");
                                        setSelectedPhone("");
                                        setError("");
                                    }}
                                    className="mt-2.5 text-[12px] font-semibold text-[#007a50] underline underline-offset-2 transition hover:text-[#00563f]"
                                >
                                    Use a different number
                                </button>
                            </div>

                            {error && (
                                <p className="rounded-[8px] border border-[#f3c9c4] bg-[#fdf2f1] px-3 py-2.5 text-[12.5px] font-medium text-[#b23b2e]">
                                    {error}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={isSending || mobileNumber.length < 10}
                                className="flex h-[46px] w-full items-center justify-center gap-2.5 rounded-[9px] bg-[linear-gradient(180deg,#008d55,#007346)] text-[15px] font-semibold text-white shadow-[0_6px_14px_rgba(0,84,51,0.25)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:bg-none disabled:bg-[#b6c4bc] disabled:shadow-none"
                            >
                                {isSending ? (
                                    <>
                                        <Loader2 className="h-[18px] w-[18px] animate-spin" />
                                        Sending OTP…
                                    </>
                                ) : (
                                    <>
                                        Send OTP on WhatsApp
                                        <ArrowRight className="h-[18px] w-[18px]" />
                                    </>
                                )}
                            </button>

                            <p className="flex items-center justify-center gap-1.5 text-[11.5px] text-[#6b7a87]">
                                <LockKeyhole className="h-[13px] w-[13px] text-[#007a50]" />
                                Your number stays private and is used only for this verification.
                            </p>
                        </form>
                    ) : step === "PHONE" ? (
                        <form onSubmit={handleSend} className="space-y-4">
                            <p className="text-[13.5px] leading-[1.5] text-[#42566c]">
                                Enter the mobile number to receive a one-time password on WhatsApp.
                                We verify it once before continuing to your application.
                            </p>

                            <div>
                                <label htmlFor="boe-otp-phone" className="mb-1.5 block text-[12px] font-semibold tracking-[0.02em] text-[#00563f]">
                                    Mobile Number <span className="text-[#c0392b]">*</span>
                                </label>
                                <div className="flex items-stretch overflow-hidden rounded-[10px] border border-[#c3d8cb] bg-white transition focus-within:border-[#008d55] focus-within:ring-[3px] focus-within:ring-[#008d55]/15">
                                    <span className="flex items-center gap-2 border-r border-[#dce8e1] bg-[#f2f9f3] px-3 text-[14px] font-semibold text-[#00563f]">
                                        <Phone className="h-[17px] w-[17px]" strokeWidth={2.2} />
                                        +91
                                    </span>
                                    <input
                                        id="boe-otp-phone"
                                        type="tel"
                                        inputMode="numeric"
                                        autoComplete="tel-national"
                                        maxLength={10}
                                        required
                                        autoFocus
                                        placeholder="98765 43210"
                                        value={mobileNumber}
                                        onChange={(e) => {
                                            setMobileNumber(e.target.value.replace(/\D/g, ""));
                                            setError("");
                                        }}
                                        className="w-full bg-transparent px-3 py-3 text-[15px] font-semibold tracking-[0.03em] text-[#12334a] outline-none placeholder:font-normal placeholder:tracking-normal placeholder:text-[#9aa8b4]"
                                    />
                                </div>
                            </div>

                            {error && (
                                <p className="rounded-[8px] border border-[#f3c9c4] bg-[#fdf2f1] px-3 py-2.5 text-[12.5px] font-medium text-[#b23b2e]">
                                    {error}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={isSending || mobileNumber.length < 10}
                                className="flex h-[46px] w-full items-center justify-center gap-2.5 rounded-[9px] bg-[linear-gradient(180deg,#008d55,#007346)] text-[15px] font-semibold text-white shadow-[0_6px_14px_rgba(0,84,51,0.25)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:bg-none disabled:bg-[#b6c4bc] disabled:shadow-none"
                            >
                                {isSending ? (
                                    <>
                                        <Loader2 className="h-[18px] w-[18px] animate-spin" />
                                        Sending OTP…
                                    </>
                                ) : (
                                    <>
                                        Send OTP on WhatsApp
                                        <ArrowRight className="h-[18px] w-[18px]" />
                                    </>
                                )}
                            </button>

                            <p className="flex items-center justify-center gap-1.5 text-[11.5px] text-[#6b7a87]">
                                <LockKeyhole className="h-[13px] w-[13px] text-[#007a50]" />
                                Your number stays private and is used only for this verification.
                            </p>
                        </form>
                    ) : (
                        <form onSubmit={handleVerify} className="space-y-4">
                            <div className="flex items-start gap-2.5 rounded-[10px] border border-[#c6e9d2] bg-[#eef9f2] px-3.5 py-3">
                                <CheckCircle2 className="mt-[1px] h-[17px] w-[17px] shrink-0 fill-[#007a50] text-white" />
                                <div className="min-w-0 flex-1">
                                    <p className="text-[12.5px] font-semibold leading-snug text-[#0d5c40]">
                                        OTP sent to {formatPhone(mobileNumber)}
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setStep(phoneOptions.length > 0 ? "SELECT" : "PHONE");
                                            setOtpCode("");
                                            setError("");
                                        }}
                                        className="mt-[3px] text-[11.5px] font-semibold text-[#007a50] underline underline-offset-2 transition hover:text-[#00563f]"
                                    >
                                        Change number
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="mb-2 block text-center text-[12.5px] font-semibold text-[#00563f]">
                                    Enter the {OTP_LENGTH}-digit code
                                </label>
                                <div className="flex justify-center gap-2" onPaste={handlePaste}>
                                    {Array.from({ length: OTP_LENGTH }).map((_, index) => (
                                        <input
                                            key={index}
                                            ref={(el) => {
                                                otpInputsRef.current[index] = el;
                                            }}
                                            type="text"
                                            inputMode="numeric"
                                            autoComplete={index === 0 ? "one-time-code" : "off"}
                                            maxLength={1}
                                            aria-label={`Digit ${index + 1}`}
                                            value={otpCode[index] ?? ""}
                                            onChange={(e) => handleBoxChange(index, e.target.value)}
                                            onKeyDown={(e) => handleBoxKeyDown(index, e)}
                                            onFocus={(e) => e.currentTarget.select()}
                                            className={`h-[52px] w-[46px] rounded-[10px] border bg-white text-center text-[21px] font-semibold text-[#12334a] outline-none transition ${error
                                                ? "border-[#e0a49c]"
                                                : otpCode[index]
                                                    ? "border-[#008d55]"
                                                    : "border-[#c3d8cb]"
                                                } focus:border-[#008d55] focus:ring-[3px] focus:ring-[#008d55]/15`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {error && (
                                <p className="rounded-[8px] border border-[#f3c9c4] bg-[#fdf2f1] px-3 py-2.5 text-center text-[12.5px] font-medium text-[#b23b2e]">
                                    {error}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={isVerifying || otpCode.length < OTP_LENGTH}
                                className="flex h-[46px] w-full items-center justify-center gap-2.5 rounded-[9px] bg-[linear-gradient(180deg,#008d55,#007346)] text-[15px] font-semibold text-white shadow-[0_6px_14px_rgba(0,84,51,0.25)] transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:bg-none disabled:bg-[#b6c4bc] disabled:shadow-none"
                            >
                                {isVerifying ? (
                                    <>
                                        <Loader2 className="h-[18px] w-[18px] animate-spin" />
                                        Verifying…
                                    </>
                                ) : (
                                    <>
                                        Verify &amp; Continue
                                        <ArrowRight className="h-[18px] w-[18px]" />
                                    </>
                                )}
                            </button>

                            <p className="text-center text-[12px] text-[#6b7a87]">
                                Didn&apos;t receive the code?{" "}
                                {resendIn > 0 ? (
                                    <span className="font-semibold text-[#42566c]">
                                        Resend in {resendIn}s
                                    </span>
                                ) : (
                                    <button
                                        type="button"
                                        disabled={isSending}
                                        onClick={() => handleSend()}
                                        className="font-semibold text-[#007a50] underline underline-offset-2 transition hover:text-[#00563f] disabled:opacity-50"
                                    >
                                        Resend OTP
                                    </button>
                                )}
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
