"use client";

import React, { useState, useEffect, useRef } from "react";
import { Users, ArrowRight, ShieldCheck, User, Building2, Mail, Phone, ChevronDown, Check, MapPin, CheckCircle, Send, AtSign } from "lucide-react";
import { verifyApi } from "@/lib/api";
import Swal from "sweetalert2";

const NominateForm = () => {
    const [achievements, setAchievements] = useState("");
    const [reason, setReason] = useState("");

    // Form state for Nominee (Section 1)
    const [nomineeEmail, setNomineeEmail] = useState("");
    const [nomineePhone, setNomineePhone] = useState("");

    // Form state for Nominator (Section 3)
    const [nominatorEmail, setNominatorEmail] = useState("");
    const [nominatorPhone, setNominatorPhone] = useState("");

    // Verification States - Nominee Email
    const [nomineeEmailVerified, setNomineeEmailVerified] = useState(false);
    const [nomineeEmailOtp, setNomineeEmailOtp] = useState("");
    const [nomineeEmailTimer, setNomineeEmailTimer] = useState(0);
    const [isNomineeEmailLoading, setIsNomineeEmailLoading] = useState(false);
    const nomineeEmailTimerRef = useRef<number | null>(null);

    // Verification States - Nominee Phone
    const [nomineePhoneVerified, setNomineePhoneVerified] = useState(false);
    const [nomineePhoneOtp, setNomineePhoneOtp] = useState("");
    const [nomineePhoneTimer, setNomineePhoneTimer] = useState(0);
    const [isNomineePhoneLoading, setIsNomineePhoneLoading] = useState(false);
    const nomineePhoneTimerRef = useRef<number | null>(null);

    // Verification States - Nominator Email
    const [nominatorEmailVerified, setNominatorEmailVerified] = useState(false);
    const [nominatorEmailOtp, setNominatorEmailOtp] = useState("");
    const [nominatorEmailTimer, setNominatorEmailTimer] = useState(0);
    const [isNominatorEmailLoading, setIsNominatorEmailLoading] = useState(false);
    const nominatorEmailTimerRef = useRef<number | null>(null);

    // Verification States - Nominator Phone
    const [nominatorPhoneVerified, setNominatorPhoneVerified] = useState(false);
    const [nominatorPhoneOtp, setNominatorPhoneOtp] = useState("");
    const [nominatorPhoneTimer, setNominatorPhoneTimer] = useState(0);
    const [isNominatorPhoneLoading, setIsNominatorPhoneLoading] = useState(false);
    const nominatorPhoneTimerRef = useRef<number | null>(null);

    const [verificationError, setVerificationError] = useState<string | null>(null);

    // --- Timers ---
    useEffect(() => {
        if (nomineeEmailTimer > 0) {
            nomineeEmailTimerRef.current = window.setInterval(() => setNomineeEmailTimer(prev => prev - 1), 1000);
        } else if (nomineeEmailTimerRef.current) clearInterval(nomineeEmailTimerRef.current);
        return () => { if (nomineeEmailTimerRef.current) clearInterval(nomineeEmailTimerRef.current); };
    }, [nomineeEmailTimer]);

    useEffect(() => {
        if (nomineePhoneTimer > 0) {
            nomineePhoneTimerRef.current = window.setInterval(() => setNomineePhoneTimer(prev => prev - 1), 1000);
        } else if (nomineePhoneTimerRef.current) clearInterval(nomineePhoneTimerRef.current);
        return () => { if (nomineePhoneTimerRef.current) clearInterval(nomineePhoneTimerRef.current); };
    }, [nomineePhoneTimer]);

    useEffect(() => {
        if (nominatorEmailTimer > 0) {
            nominatorEmailTimerRef.current = window.setInterval(() => setNominatorEmailTimer(prev => prev - 1), 1000);
        } else if (nominatorEmailTimerRef.current) clearInterval(nominatorEmailTimerRef.current);
        return () => { if (nominatorEmailTimerRef.current) clearInterval(nominatorEmailTimerRef.current); };
    }, [nominatorEmailTimer]);

    useEffect(() => {
        if (nominatorPhoneTimer > 0) {
            nominatorPhoneTimerRef.current = window.setInterval(() => setNominatorPhoneTimer(prev => prev - 1), 1000);
        } else if (nominatorPhoneTimerRef.current) clearInterval(nominatorPhoneTimerRef.current);
        return () => { if (nominatorPhoneTimerRef.current) clearInterval(nominatorPhoneTimerRef.current); };
    }, [nominatorPhoneTimer]);

    // --- Nominee Email Handlers ---
    const handleSendNomineeEmailOtp = async () => {
        if (!nomineeEmail) return setVerificationError("Please enter Nominee's email first.");
        setIsNomineeEmailLoading(true); setVerificationError(null);
        try {
            const res = await verifyApi.sendEmailOtp(nomineeEmail, 'EXHIBITOR');
            if (res.success) { setNomineeEmailTimer(60); setVerificationError(null); }
            else setVerificationError(res.message || "Failed to send email OTP.");
        } catch (error) { setVerificationError("Failed to send email OTP."); }
        finally { setIsNomineeEmailLoading(false); }
    };

    const handleVerifyNomineeEmailOtp = async () => {
        if (!nomineeEmailOtp || nomineeEmailOtp.length < 6) return setVerificationError("Enter valid 6-digit OTP.");
        setIsNomineeEmailLoading(true); setVerificationError(null);
        try {
            const res = await verifyApi.verifyEmailOtp(nomineeEmail, nomineeEmailOtp);
            if (res.success) { setNomineeEmailVerified(true); setNomineeEmailOtp(""); setVerificationError(null); }
            else Swal.fire({ title: 'Invalid OTP', text: 'Incorrect or expired.', icon: 'error', confirmButtonColor: '#23471d' });
        } catch (error) { Swal.fire({ title: 'Error', text: 'Verification failed.', icon: 'error', confirmButtonColor: '#23471d' }); }
        finally { setIsNomineeEmailLoading(false); }
    };

    // --- Nominee Phone Handlers ---
    const handleSendNomineePhoneOtp = async () => {
        if (!nomineePhone) return setVerificationError("Please enter Nominee's mobile number first.");
        setIsNomineePhoneLoading(true); setVerificationError(null);
        try {
            const res = await verifyApi.sendPhoneOtp(nomineePhone, 'EXHIBITOR', 'Nominee');
            if (res.success) { setNomineePhoneTimer(60); setVerificationError(null); }
            else setVerificationError(res.message || "Failed to send WhatsApp OTP.");
        } catch (error) { setVerificationError("Failed to send WhatsApp OTP."); }
        finally { setIsNomineePhoneLoading(false); }
    };

    const handleVerifyNomineePhoneOtp = async () => {
        if (!nomineePhoneOtp || nomineePhoneOtp.length < 6) return setVerificationError("Enter valid 6-digit OTP.");
        setIsNomineePhoneLoading(true); setVerificationError(null);
        try {
            const res = await verifyApi.verifyPhoneOtp(nomineePhone, nomineePhoneOtp);
            if (res.success) { setNomineePhoneVerified(true); setNomineePhoneOtp(""); setVerificationError(null); }
            else Swal.fire({ title: 'Invalid OTP', text: 'Incorrect or expired.', icon: 'error', confirmButtonColor: '#23471d' });
        } catch (error) { Swal.fire({ title: 'Error', text: 'Verification failed.', icon: 'error', confirmButtonColor: '#23471d' }); }
        finally { setIsNomineePhoneLoading(false); }
    };

    // --- Nominator Email Handlers ---
    const handleSendNominatorEmailOtp = async () => {
        if (!nominatorEmail) return setVerificationError("Please enter Nominator's email first.");
        setIsNominatorEmailLoading(true); setVerificationError(null);
        try {
            const res = await verifyApi.sendEmailOtp(nominatorEmail, 'EXHIBITOR');
            if (res.success) { setNominatorEmailTimer(60); setVerificationError(null); }
            else setVerificationError(res.message || "Failed to send email OTP.");
        } catch (error) { setVerificationError("Failed to send email OTP."); }
        finally { setIsNominatorEmailLoading(false); }
    };

    const handleVerifyNominatorEmailOtp = async () => {
        if (!nominatorEmailOtp || nominatorEmailOtp.length < 6) return setVerificationError("Enter valid 6-digit OTP.");
        setIsNominatorEmailLoading(true); setVerificationError(null);
        try {
            const res = await verifyApi.verifyEmailOtp(nominatorEmail, nominatorEmailOtp);
            if (res.success) { setNominatorEmailVerified(true); setNominatorEmailOtp(""); setVerificationError(null); }
            else Swal.fire({ title: 'Invalid OTP', text: 'Incorrect or expired.', icon: 'error', confirmButtonColor: '#23471d' });
        } catch (error) { Swal.fire({ title: 'Error', text: 'Verification failed.', icon: 'error', confirmButtonColor: '#23471d' }); }
        finally { setIsNominatorEmailLoading(false); }
    };

    // --- Nominator Phone Handlers ---
    const handleSendNominatorPhoneOtp = async () => {
        if (!nominatorPhone) return setVerificationError("Please enter Nominator's mobile number first.");
        setIsNominatorPhoneLoading(true); setVerificationError(null);
        try {
            const res = await verifyApi.sendPhoneOtp(nominatorPhone, 'EXHIBITOR', 'Nominator');
            if (res.success) { setNominatorPhoneTimer(60); setVerificationError(null); }
            else setVerificationError(res.message || "Failed to send WhatsApp OTP.");
        } catch (error) { setVerificationError("Failed to send WhatsApp OTP."); }
        finally { setIsNominatorPhoneLoading(false); }
    };

    const handleVerifyNominatorPhoneOtp = async () => {
        if (!nominatorPhoneOtp || nominatorPhoneOtp.length < 6) return setVerificationError("Enter valid 6-digit OTP.");
        setIsNominatorPhoneLoading(true); setVerificationError(null);
        try {
            const res = await verifyApi.verifyPhoneOtp(nominatorPhone, nominatorPhoneOtp);
            if (res.success) { setNominatorPhoneVerified(true); setNominatorPhoneOtp(""); setVerificationError(null); }
            else Swal.fire({ title: 'Invalid OTP', text: 'Incorrect or expired.', icon: 'error', confirmButtonColor: '#23471d' });
        } catch (error) { Swal.fire({ title: 'Error', text: 'Verification failed.', icon: 'error', confirmButtonColor: '#23471d' }); }
        finally { setIsNominatorPhoneLoading(false); }
    };


    const handleAchievementsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        const words = text.trim().split(/\s+/).filter(w => w.length > 0);
        if (words.length <= 300) setAchievements(text);
    };

    const handleReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        const words = text.trim().split(/\s+/).filter(w => w.length > 0);
        if (words.length <= 400) setReason(text);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!nomineeEmailVerified || !nomineePhoneVerified || !nominatorEmailVerified || !nominatorPhoneVerified) {
            setVerificationError("Verification Required: Please verify both Nominee's and Nominator's Email and Mobile numbers before proceeding.");
            return;
        }

        Swal.fire({
            title: 'Success!',
            text: 'Nomination submitted successfully.',
            icon: 'success',
            confirmButtonColor: '#0a4d22'
        });
    };

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

            {verificationError && (
                <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-[13px] font-medium flex items-start gap-2">
                    <ShieldCheck size={18} className="text-red-500 shrink-0 mt-0.5" />
                    <p>{verificationError}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
                {/* Section 1: Nominee Information */}
                <div className="bg-[#F8F9FD] rounded-[16px] md:rounded-[20px] p-4 px-6 py-3 border border-[#f1f5f9] shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-[26px] h-[26px] rounded-full bg-[#0a4d22] text-white flex items-center justify-center text-[13px] font-bold shrink-0">1</div>
                        <h3 className="font-semibold text-[#0a4d22] text-[15px] md:text-[16px]">Nominee Information</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Full Name of Nominee <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <User size={16} />
                                </span>
                                <input type="text" placeholder="Enter full name" className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Designation <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="e.g., CEO, Founder, Director" className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Organisation / Institution <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Building2 size={16} />
                                </span>
                                <input type="text" placeholder="Enter organisation / institution" className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Industry / Sector <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <select className="w-full px-3 py-2.5 pr-8 rounded-lg border border-[#e2e8f0] text-[13px] text-gray-500 focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors bg-white appearance-none cursor-pointer">
                                    <option value="" disabled selected>Select industry / sector</option>
                                    <option value="agriculture">Agriculture</option>
                                    <option value="technology">Technology</option>
                                    <option value="retail">Retail</option>
                                </select>
                                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Nominee Email Field with OTP */}
                        <div className="flex flex-col gap-1.5 md:col-span-1">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Email Address <span className="text-red-500">*</span></label>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <div className="relative flex-1">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Mail size={16} />
                                    </span>
                                    <input type="email" required 
                                        value={nomineeEmail} 
                                        onChange={(e) => {
                                            setNomineeEmail(e.target.value);
                                            setNomineeEmailVerified(false);
                                            setVerificationError(null);
                                        }} 
                                        disabled={nomineeEmailVerified}
                                        className={`w-full pl-9 pr-3 py-2.5 rounded-lg border ${nomineeEmailVerified ? 'bg-green-50 border-green-200 text-green-700' : 'border-[#e2e8f0]'} text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400`} 
                                        placeholder="your.email@domain.com" />
                                    {nomineeEmailVerified && (
                                        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-green-600 bg-green-100 rounded-full p-0.5">
                                            <CheckCircle size={14} />
                                        </div>
                                    )}
                                </div>
                                {!nomineeEmailVerified && nomineeEmail && (
                                    <button type="button" onClick={handleSendNomineeEmailOtp} disabled={nomineeEmailTimer > 0 || isNomineeEmailLoading}
                                        className="px-4 py-2 bg-[#0a4d22] text-white text-[13px] font-medium rounded-lg hover:bg-[#073617] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap transition-colors flex items-center gap-1.5">
                                        {isNomineeEmailLoading ? 'Sending...' : nomineeEmailTimer > 0 ? `Resend in ${nomineeEmailTimer}s` : (
                                            <><Send size={14} /> Verify</>
                                        )}
                                    </button>
                                )}
                            </div>
                            {!nomineeEmailVerified && nomineeEmailTimer > 0 && (
                                <div className="flex gap-2 mt-1 animate-in slide-in-from-top-2 duration-300">
                                    <input type="text" placeholder="Enter 6-digit OTP" maxLength={6}
                                        value={nomineeEmailOtp} onChange={(e) => setNomineeEmailOtp(e.target.value.replace(/\D/g, ''))}
                                        className="w-full px-3 py-2 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22]" />
                                    <button type="button" onClick={handleVerifyNomineeEmailOtp} disabled={isNomineeEmailLoading || nomineeEmailOtp.length !== 6}
                                        className="px-4 py-2 bg-green-600 text-white text-[13px] font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 whitespace-nowrap transition-colors">
                                        Confirm OTP
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Nominee Phone Field with OTP */}
                        <div className="flex flex-col gap-1.5 md:col-span-1">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Phone / Mobile Number <span className="text-red-500">*</span></label>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <div className="relative flex-1">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Phone size={16} />
                                    </span>
                                    <input type="tel" required 
                                        value={nomineePhone} 
                                        onChange={(e) => {
                                            const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                                            setNomineePhone(val);
                                            setNomineePhoneVerified(false);
                                            setVerificationError(null);
                                        }} 
                                        disabled={nomineePhoneVerified}
                                        className={`w-full pl-9 pr-3 py-2.5 rounded-lg border ${nomineePhoneVerified ? 'bg-green-50 border-green-200 text-green-700' : 'border-[#e2e8f0]'} text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400`} 
                                        placeholder="Enter 10 digit mobile" />
                                    {nomineePhoneVerified && (
                                        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-green-600 bg-green-100 rounded-full p-0.5">
                                            <CheckCircle size={14} />
                                        </div>
                                    )}
                                </div>
                                {!nomineePhoneVerified && nomineePhone.length >= 10 && (
                                    <button type="button" onClick={handleSendNomineePhoneOtp} disabled={nomineePhoneTimer > 0 || isNomineePhoneLoading}
                                        className="px-4 py-2 bg-[#0a4d22] text-white text-[13px] font-medium rounded-lg hover:bg-[#073617] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap transition-colors flex items-center gap-1.5">
                                        {isNomineePhoneLoading ? 'Sending...' : nomineePhoneTimer > 0 ? `Resend in ${nomineePhoneTimer}s` : (
                                            <><Send size={14} /> Verify</>
                                        )}
                                    </button>
                                )}
                            </div>
                            {!nomineePhoneVerified && nomineePhoneTimer > 0 && (
                                <div className="flex gap-2 mt-1 animate-in slide-in-from-top-2 duration-300">
                                    <input type="text" placeholder="Enter 6-digit OTP" maxLength={6}
                                        value={nomineePhoneOtp} onChange={(e) => setNomineePhoneOtp(e.target.value.replace(/\D/g, ''))}
                                        className="w-full px-3 py-2 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22]" />
                                    <button type="button" onClick={handleVerifyNomineePhoneOtp} disabled={isNomineePhoneLoading || nomineePhoneOtp.length !== 6}
                                        className="px-4 py-2 bg-green-600 text-white text-[13px] font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 whitespace-nowrap transition-colors">
                                        Confirm OTP
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-1.5 md:col-span-2">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Professional Profile / LinkedIn <span className="font-normal text-gray-500">(if available)</span></label>
                            <div className="relative">
                                <input type="url" placeholder="https://linkedin.com/in/yourprofile" className="w-full px-3 py-2.5 pr-10 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#0077b5] text-white font-bold text-[11px] px-1.5 py-0.5 rounded-[3px]">
                                    in
                                </span>
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
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Areas of Expertise <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <select className="w-full px-3 py-2.5 pr-8 rounded-lg border border-[#e2e8f0] text-[13px] text-gray-500 focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors bg-white appearance-none cursor-pointer">
                                        <option value="" disabled selected>Select areas of expertise</option>
                                        <option value="farming">Organic Farming</option>
                                        <option value="supply">Supply Chain</option>
                                        <option value="policy">Policy Making</option>
                                    </select>
                                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Key Achievements / Contributions <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <textarea
                                        rows={1}
                                        placeholder="Briefly describe key achievements (max 300 words)"
                                        className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors resize-none pb-7 placeholder:text-gray-400"
                                        value={achievements}
                                        onChange={handleAchievementsChange}
                                    ></textarea>
                                    <span className="absolute bottom-2 right-3 text-[11px] text-gray-400 font-medium">
                                        {achievements.trim() === "" ? 0 : achievements.trim().split(/\s+/).length}/300
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Why do you think this person should be on our Advisory Board? <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <textarea
                                    rows={1}
                                    placeholder="Share your reason for nomination (max 400 words)"
                                    className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors resize-none pb-7 placeholder:text-gray-400"
                                    value={reason}
                                    onChange={handleReasonChange}
                                ></textarea>
                                <span className="absolute bottom-2 right-3 text-[11px] text-gray-400 font-medium">
                                    {reason.trim() === "" ? 0 : reason.trim().split(/\s+/).length}/400
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 3: Nominator Information */}
                <div className="bg-[#F8F9FD] rounded-[16px] md:rounded-[20px] p-4 px-6 py-3 border border-[#f1f5f9] shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-[26px] h-[26px] rounded-full bg-[#0a4d22] text-white flex items-center justify-center text-[13px] font-bold shrink-0">3</div>
                        <h3 className="font-semibold text-[#0a4d22] text-[15px] md:text-[16px]">Nominator Information</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-6">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Your Name <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="Your full name" className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Your Designation <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="Your designation" className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Organisation / Institution <span className="text-red-500">*</span></label>
                            <input type="text" placeholder="Enter organisation / institution" className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400" />
                        </div>
                        
                        {/* Nominator Email Field with OTP */}
                        <div className="flex flex-col gap-1.5 md:col-span-1">
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
                                            setNominatorEmailVerified(false);
                                            setVerificationError(null);
                                        }} 
                                        disabled={nominatorEmailVerified}
                                        className={`w-full pl-9 pr-3 py-2.5 rounded-lg border ${nominatorEmailVerified ? 'bg-green-50 border-green-200 text-green-700' : 'border-[#e2e8f0]'} text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400`} 
                                        placeholder="your.email@domain.com" />
                                    {nominatorEmailVerified && (
                                        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-green-600 bg-green-100 rounded-full p-0.5">
                                            <CheckCircle size={14} />
                                        </div>
                                    )}
                                </div>
                                {!nominatorEmailVerified && nominatorEmail && (
                                    <button type="button" onClick={handleSendNominatorEmailOtp} disabled={nominatorEmailTimer > 0 || isNominatorEmailLoading}
                                        className="px-4 py-2 bg-[#0a4d22] text-white text-[13px] font-medium rounded-lg hover:bg-[#073617] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap transition-colors flex items-center gap-1.5">
                                        {isNominatorEmailLoading ? 'Sending...' : nominatorEmailTimer > 0 ? `Resend in ${nominatorEmailTimer}s` : (
                                            <><Send size={14} /> Verify</>
                                        )}
                                    </button>
                                )}
                            </div>
                            {!nominatorEmailVerified && nominatorEmailTimer > 0 && (
                                <div className="flex gap-2 mt-1 animate-in slide-in-from-top-2 duration-300">
                                    <input type="text" placeholder="Enter 6-digit OTP" maxLength={6}
                                        value={nominatorEmailOtp} onChange={(e) => setNominatorEmailOtp(e.target.value.replace(/\D/g, ''))}
                                        className="w-full px-3 py-2 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22]" />
                                    <button type="button" onClick={handleVerifyNominatorEmailOtp} disabled={isNominatorEmailLoading || nominatorEmailOtp.length !== 6}
                                        className="px-4 py-2 bg-green-600 text-white text-[13px] font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 whitespace-nowrap transition-colors">
                                        Confirm OTP
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Nominator Phone Field with OTP */}
                        <div className="flex flex-col gap-1.5 md:col-span-1">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Phone / Mobile Number <span className="text-red-500">*</span></label>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <div className="relative flex-1">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                        <Phone size={16} />
                                    </span>
                                    <input type="tel" required 
                                        value={nominatorPhone} 
                                        onChange={(e) => {
                                            const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                                            setNominatorPhone(val);
                                            setNominatorPhoneVerified(false);
                                            setVerificationError(null);
                                        }} 
                                        disabled={nominatorPhoneVerified}
                                        className={`w-full pl-9 pr-3 py-2.5 rounded-lg border ${nominatorPhoneVerified ? 'bg-green-50 border-green-200 text-green-700' : 'border-[#e2e8f0]'} text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors placeholder:text-gray-400`} 
                                        placeholder="Enter 10 digit mobile" />
                                    {nominatorPhoneVerified && (
                                        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-green-600 bg-green-100 rounded-full p-0.5">
                                            <CheckCircle size={14} />
                                        </div>
                                    )}
                                </div>
                                {!nominatorPhoneVerified && nominatorPhone.length >= 10 && (
                                    <button type="button" onClick={handleSendNominatorPhoneOtp} disabled={nominatorPhoneTimer > 0 || isNominatorPhoneLoading}
                                        className="px-4 py-2 bg-[#0a4d22] text-white text-[13px] font-medium rounded-lg hover:bg-[#073617] disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap transition-colors flex items-center gap-1.5">
                                        {isNominatorPhoneLoading ? 'Sending...' : nominatorPhoneTimer > 0 ? `Resend in ${nominatorPhoneTimer}s` : (
                                            <><Send size={14} /> Verify</>
                                        )}
                                    </button>
                                )}
                            </div>
                            {!nominatorPhoneVerified && nominatorPhoneTimer > 0 && (
                                <div className="flex gap-2 mt-1 animate-in slide-in-from-top-2 duration-300">
                                    <input type="text" placeholder="Enter 6-digit OTP" maxLength={6}
                                        value={nominatorPhoneOtp} onChange={(e) => setNominatorPhoneOtp(e.target.value.replace(/\D/g, ''))}
                                        className="w-full px-3 py-2 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22]" />
                                    <button type="button" onClick={handleVerifyNominatorPhoneOtp} disabled={isNominatorPhoneLoading || nominatorPhoneOtp.length !== 6}
                                        className="px-4 py-2 bg-green-600 text-white text-[13px] font-medium rounded-lg hover:bg-green-700 disabled:opacity-50 whitespace-nowrap transition-colors">
                                        Confirm OTP
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[12px] md:text-[13px] font-semibold text-[#1a1a1a]">Relationship with Nominee <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <select className="w-full px-3 py-2.5 pr-8 rounded-lg border border-[#e2e8f0] text-[13px] text-gray-500 focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors bg-white appearance-none cursor-pointer">
                                    <option value="" disabled selected>Select relationship</option>
                                    <option value="colleague">Colleague</option>
                                    <option value="manager">Manager</option>
                                    <option value="self">Self</option>
                                </select>
                                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    <label className="flex items-center gap-3 cursor-pointer mt-4">
                        <input type="checkbox" className="hidden" />
                        <div className="w-5 h-5 rounded-[4px] bg-[#0a4d22] flex items-center justify-center shrink-0">
                            <Check size={14} className="text-white stroke-[3]" />
                        </div>
                        <span className="text-[#333] text-[13px] font-medium">I confirm that the information provided is accurate to the best of my knowledge.</span>
                    </label>
                </div>

                {/* Section 4: Additional Information */}
                <div className="bg-[#F8F9FD] rounded-[16px] md:rounded-[20px] p-4 px-6 py-3 border border-[#f1f5f9] shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-[26px] h-[26px] rounded-full bg-[#0a4d22] text-white flex items-center justify-center text-[13px] font-bold shrink-0">4</div>
                        <h3 className="font-semibold text-[#0a4d22] text-[15px] md:text-[16px]">Additional Information (Optional)</h3>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <textarea
                            rows={1}
                            placeholder="Any additional information that may support this nomination"
                            className="w-full px-3 py-2.5 rounded-lg border border-[#e2e8f0] text-[13px] focus:outline-none focus:border-[#0a4d22] focus:ring-1 focus:ring-[#0a4d22] transition-colors resize-y placeholder:text-gray-400"
                        ></textarea>
                    </div>
                </div>

                {/* Submit Area */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-3">
                    <button type="submit" className="group inline-flex items-center justify-center gap-2 px-10 py-2 rounded-lg font-bold text-[14px] md:text-[15px] text-white transition-all active:scale-95 shadow-md bg-[#0a4d22] hover:bg-[#073617] w-full sm:w-[50%] md:w-[45%] lg:w-[40%]">
                        Submit Nomination <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex items-center gap-2 text-[#555] justify-center sm:justify-end w-full sm:w-auto">
                        <ShieldCheck size={20} className="text-[#0a4d22]" />
                        <span className="text-[13px] font-semibold">Secure • Confidential</span>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default NominateForm;
