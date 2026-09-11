import re

with open("app/components/abouts/nominate/NominateForm.tsx", "r") as f:
    content = f.read()

# 1. Imports
imports = """import React, { useState, useEffect, useRef } from "react";
import { Users, ArrowRight, ShieldCheck, User, Building2, Mail, Phone, ChevronDown, Check, MapPin, CheckCircle, Send, AtSign } from "lucide-react";
import { verifyApi } from "@/lib/api";
import Swal from "sweetalert2";"""
content = re.sub(r'import React.*lucide-react";', imports, content, flags=re.DOTALL)

# 2. Add State and Functions
state_code = """
    const [achievements, setAchievements] = useState("");
    const [reason, setReason] = useState("");

    // Form state for Nominator
    const [nominatorEmail, setNominatorEmail] = useState("");
    const [nominatorPhone, setNominatorPhone] = useState("");

    // Verification States
    const [emailVerified, setEmailVerified] = useState(false);
    const [phoneVerified, setPhoneVerified] = useState(false);
    const [emailOtp, setEmailOtp] = useState("");
    const [phoneOtp, setPhoneOtp] = useState("");
    const [emailTimer, setEmailTimer] = useState(0);
    const [phoneTimer, setPhoneTimer] = useState(0);
    const [isEmailLoading, setIsEmailLoading] = useState(false);
    const [isPhoneLoading, setIsPhoneLoading] = useState(false);
    const [verificationError, setVerificationError] = useState<string | null>(null);
    const emailTimerRef = useRef<number | null>(null);
    const phoneTimerRef = useRef<number | null>(null);

    useEffect(() => {
        if (emailTimer > 0) {
            emailTimerRef.current = window.setInterval(() => {
                setEmailTimer(prev => prev - 1);
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
                setPhoneTimer(prev => prev - 1);
            }, 1000);
        } else if (phoneTimerRef.current) {
            clearInterval(phoneTimerRef.current);
        }
        return () => {
            if (phoneTimerRef.current) clearInterval(phoneTimerRef.current);
        };
    }, [phoneTimer]);

    const handleSendEmailOtp = async () => {
        if (!nominatorEmail) {
            setVerificationError("Please enter your email first.");
            return;
        }
        setIsEmailLoading(true);
        setVerificationError(null);
        try {
            const res = await verifyApi.sendEmailOtp(nominatorEmail, 'NOMINATOR');
            if (res.success) {
                setEmailTimer(60);
                setVerificationError(null);
            } else {
                setVerificationError(res.message || "Failed to send email OTP.");
            }
        } catch (error) {
            setVerificationError("Failed to send email OTP. Please try again.");
        } finally {
            setIsEmailLoading(false);
        }
    };

    const handleVerifyEmailOtp = async () => {
        if (!emailOtp || emailOtp.length < 6) {
            setVerificationError("Please enter a valid 6-digit OTP.");
            return;
        }
        setIsEmailLoading(true);
        setVerificationError(null);
        try {
            const res = await verifyApi.verifyEmailOtp(nominatorEmail, emailOtp);
            if (res.success) {
                setEmailVerified(true);
                setEmailOtp("");
                setVerificationError(null);
            } else {
                Swal.fire({ title: 'Invalid OTP', text: 'The OTP you entered is incorrect or expired.', icon: 'error', confirmButtonColor: '#23471d' });
            }
        } catch (error) {
            Swal.fire({ title: 'Error', text: 'Verification failed. Please try again.', icon: 'error', confirmButtonColor: '#23471d' });
        } finally {
            setIsEmailLoading(false);
        }
    };

    const handleSendPhoneOtp = async () => {
        if (!nominatorPhone) {
            setVerificationError("Please enter your mobile number first.");
            return;
        }
        setIsPhoneLoading(true);
        setVerificationError(null);
        try {
            const res = await verifyApi.sendPhoneOtp(nominatorPhone, 'NOMINATOR', 'Nominator');
            if (res.success) {
                setPhoneTimer(60);
                setVerificationError(null);
            } else {
                setVerificationError(res.message || "Failed to send WhatsApp OTP.");
            }
        } catch (error) {
            setVerificationError("Failed to send WhatsApp OTP. Please try again.");
        } finally {
            setIsPhoneLoading(false);
        }
    };

    const handleVerifyPhoneOtp = async () => {
        if (!phoneOtp || phoneOtp.length < 6) {
            setVerificationError("Please enter a valid 6-digit OTP.");
            return;
        }
        setIsPhoneLoading(true);
        setVerificationError(null);
        try {
            const res = await verifyApi.verifyPhoneOtp(nominatorPhone, phoneOtp);
            if (res.success) {
                setPhoneVerified(true);
                setPhoneOtp("");
                setVerificationError(null);
            } else {
                Swal.fire({ title: 'Invalid OTP', text: 'The OTP you entered is incorrect or expired.', icon: 'error', confirmButtonColor: '#23471d' });
            }
        } catch (error) {
            Swal.fire({ title: 'Error', text: 'Verification failed. Please try again.', icon: 'error', confirmButtonColor: '#23471d' });
        } finally {
            setIsPhoneLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!emailVerified || !phoneVerified) {
            setVerificationError("Verification Required: Please verify your Email and WhatsApp mobile number before proceeding.");
            return;
        }

        Swal.fire({
            title: 'Success!',
            text: 'Nomination submitted successfully.',
            icon: 'success',
            confirmButtonColor: '#0a4d22'
        });
    };
"""
content = re.sub(r'    const \[achievements, setAchievements\].*?setReason\(text\);\n        }\n    };', state_code + '\n    const handleAchievementsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {\n        const text = e.target.value;\n        const words = text.trim().split(/\\s+/).filter(w => w.length > 0);\n        if (words.length <= 300) {\n            setAchievements(text);\n        }\n    };\n\n    const handleReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {\n        const text = e.target.value;\n        const words = text.trim().split(/\\s+/).filter(w => w.length > 0);\n        if (words.length <= 400) {\n            setReason(text);\n        }\n    };', content, flags=re.DOTALL)

# 3. Form Submit
content = content.replace('<form className="space-y-2 md:space-y-3">', '<form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">')
content = content.replace('<button type="button" className="group inline-flex', '<button type="submit" className="group inline-flex')

# 4. Error Display
error_display = """
            {verificationError && (
                <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-[13px] font-medium flex items-start gap-2">
                    <ShieldCheck size={18} className="text-red-500 shrink-0 mt-0.5" />
                    <p>{verificationError}</p>
                </div>
            )}
            <form onSubmit={handleSubmit}"""
content = content.replace('<form onSubmit={handleSubmit}', error_display)

# 5. Email field
old_email = """<div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Email Address <span className="text-red-500">*</span></label>
                            <input type="email" placeholder="your.email@domain.com" className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                        </div>"""
new_email = """<div className="flex flex-col gap-1.5 md:col-span-1">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Email Address <span className="text-red-500">*</span></label>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <div className="relative flex-1">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Mail size={16} />
                                    </span>
                                    <input type="email" required 
                                        value={nominatorEmail} 
                                        onChange={(e) => {
                                            setNominatorEmail(e.target.value);
                                            setEmailVerified(false);
                                            setVerificationError(null);
                                        }} 
                                        disabled={emailVerified}
                                        className={`w-full pl-9 pr-3 py-2.5 rounded-lg border ${emailVerified ? 'bg-green-50 border-green-200 text-green-700' : 'border-[#e2e8f0]'} text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400`} 
                                        placeholder="your.email@domain.com" />
                                    {emailVerified && (
                                        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-green-600 bg-green-100 rounded-full p-0.5">
                                            <CheckCircle size={14} />
                                        </div>
                                    )}
                                </div>
                                {!emailVerified && nominatorEmail && (
                                    <button type="button" onClick={handleSendEmailOtp} disabled={emailTimer > 0 || isEmailLoading}
                                        className="px-4 py-2 bg-[#0a4d22] text-white text-[13px] font-medium rounded-lg hover:bg-[#073617] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap transition-colors flex items-center gap-1.5">
                                        {isEmailLoading ? 'Sending...' : emailTimer > 0 ? `Resend in ${emailTimer}s` : (
                                            <><Send size={14} /> Verify</>
                                        )}
                                    </button>
                                )}
                            </div>
                            {!emailVerified && emailTimer > 0 && (
                                <div className="flex gap-2 mt-1 animate-in slide-in-from-top-2 duration-300">
                                    <input type="text" placeholder="Enter 6-digit OTP" maxLength={6}
                                        value={emailOtp} onChange={(e) => setEmailOtp(e.target.value.replace(/\\D/g, ''))}
                                        className="w-full px-3 py-2 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22]" />
                                    <button type="button" onClick={handleVerifyEmailOtp} disabled={isEmailLoading || emailOtp.length !== 6}
                                        className="px-4 py-2 bg-green-600 text-white text-[13px] font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 whitespace-nowrap transition-colors">
                                        Confirm OTP
                                    </button>
                                </div>
                            )}
                        </div>"""
content = content.replace(old_email, new_email)

# 6. Phone field
old_phone = """<div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Phone / Mobile Number <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Phone size={16} />
                                </span>
                                <input type="tel" placeholder="+91 98765 43210" className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                            </div>
                        </div>"""
new_phone = """<div className="flex flex-col gap-1.5 md:col-span-1">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Phone / Mobile Number <span className="text-red-500">*</span></label>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <div className="relative flex-1">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Phone size={16} />
                                    </span>
                                    <input type="tel" required 
                                        value={nominatorPhone} 
                                        onChange={(e) => {
                                            const val = e.target.value.replace(/\\D/g, '').slice(0, 10);
                                            setNominatorPhone(val);
                                            setPhoneVerified(false);
                                            setVerificationError(null);
                                        }} 
                                        disabled={phoneVerified}
                                        className={`w-full pl-9 pr-3 py-2.5 rounded-lg border ${phoneVerified ? 'bg-green-50 border-green-200 text-green-700' : 'border-[#e2e8f0]'} text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400`} 
                                        placeholder="Enter 10 digit mobile" />
                                    {phoneVerified && (
                                        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-green-600 bg-green-100 rounded-full p-0.5">
                                            <CheckCircle size={14} />
                                        </div>
                                    )}
                                </div>
                                {!phoneVerified && nominatorPhone.length >= 10 && (
                                    <button type="button" onClick={handleSendPhoneOtp} disabled={phoneTimer > 0 || isPhoneLoading}
                                        className="px-4 py-2 bg-[#0a4d22] text-white text-[13px] font-medium rounded-lg hover:bg-[#073617] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap transition-colors flex items-center gap-1.5">
                                        {isPhoneLoading ? 'Sending...' : phoneTimer > 0 ? `Resend in ${phoneTimer}s` : (
                                            <><Send size={14} /> Verify</>
                                        )}
                                    </button>
                                )}
                            </div>
                            {!phoneVerified && phoneTimer > 0 && (
                                <div className="flex gap-2 mt-1 animate-in slide-in-from-top-2 duration-300">
                                    <input type="text" placeholder="Enter 6-digit OTP" maxLength={6}
                                        value={phoneOtp} onChange={(e) => setPhoneOtp(e.target.value.replace(/\\D/g, ''))}
                                        className="w-full px-3 py-2 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22]" />
                                    <button type="button" onClick={handleVerifyPhoneOtp} disabled={isPhoneLoading || phoneOtp.length !== 6}
                                        className="px-4 py-2 bg-green-600 text-white text-[13px] font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 whitespace-nowrap transition-colors">
                                        Confirm OTP
                                    </button>
                                </div>
                            )}
                        </div>"""
content = content.replace(old_phone, new_phone)

with open("app/components/abouts/nominate/NominateForm.tsx", "w") as f:
    f.write(content)

