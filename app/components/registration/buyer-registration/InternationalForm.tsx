
import { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  CheckCircle,
  ShieldCheck,
  Loader2,
  CreditCard,
  Smartphone,
  AtSign,
  FileText,
  Lock,
  AlertTriangle,
  Ban,
  ChevronDown,
  X,
  Store,
  Factory,
  Globe,
  Laptop,
  HeartPulse,
  Leaf,
  Hotel,
  Briefcase,
  ChevronsUpDown,
  Upload,
  Signature,
  Scale
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Checkbox } from "@/app/components/ui/checkbox";



import { verifyApi, buyerApi, crmApi, policyApi } from "@/lib/api";
import Swal from "sweetalert2";
const toast = { error: (msg: any) => Swal.fire({ icon: "error", text: msg }), success: (msg: any) => Swal.fire({ icon: "success", text: msg }) };
import { useEffect as useEffectDropdown } from "react";



interface MultiSelectDropdownProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  accentColor?: string;
  badgeColor?: string;
}

const MultiSelectDropdown = ({
  options,
  selected,
  onChange,
  placeholder = "Select options",
  error = false,
  disabled = false,
  accentColor = "emerald",
}: MultiSelectDropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffectDropdown(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggle = (item: string) => {
    if (selected.includes(item)) {
      onChange(selected.filter((s) => s !== item));
    } else {
      onChange([...selected, item]);
    }
  };

  const accentClasses: Record<string, { bg: string; border: string; text: string; check: string; tag: string; tagText: string; tagX: string }> = {
    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-300",
      text: "text-emerald-700",
      check: "data-[state=checked]:bg-emerald-500 border-emerald-400",
      tag: "bg-emerald-100 border-emerald-300",
      tagText: "text-emerald-700",
      tagX: "text-emerald-500 hover:text-emerald-700",
    },
    amber: {
      bg: "bg-amber-50",
      border: "border-amber-300",
      text: "text-amber-700",
      check: "data-[state=checked]:bg-amber-500 border-amber-400",
      tag: "bg-amber-100 border-amber-300",
      tagText: "text-amber-700",
      tagX: "text-amber-500 hover:text-amber-700",
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-300",
      text: "text-blue-700",
      check: "data-[state=checked]:bg-blue-500 border-blue-400",
      tag: "bg-blue-100 border-blue-300",
      tagText: "text-blue-700",
      tagX: "text-blue-500 hover:text-blue-700",
    },
    slate: {
      bg: "bg-slate-50",
      border: "border-slate-300",
      text: "text-slate-700",
      check: "data-[state=checked]:bg-slate-500 border-slate-400",
      tag: "bg-slate-100 border-slate-300",
      tagText: "text-slate-700",
      tagX: "text-slate-500 hover:text-slate-700",
    },
  };

  const ac = accentClasses[accentColor] || accentClasses.emerald;

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen((p) => !p)}
        className={`w-full min-h-[34px] px-3 py-1.5 rounded-[2px] border text-left text-[12px] font-medium bg-white transition-all outline-none flex items-center justify-between gap-2 flex-wrap
                    ${disabled ? "opacity-50 cursor-not-allowed bg-slate-50" : ""}
                    ${error ? "border-red-400" : open ? `border-[#23471d]` : "border-slate-400"} hover:border-[#23471d]`}
      >
        <span className="flex flex-wrap gap-1 flex-1">
          {selected.length === 0 ? (
            <span className="text-slate-400">{placeholder}</span>
          ) : (
            selected.slice(0, 3).map((s) => (
              <span
                key={s}
                className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${ac.tag} ${ac.tagText}`}
              >
                {s}
                <span
                  role="button"
                  onClick={(e) => { e.stopPropagation(); toggle(s); }}
                  className={`cursor-pointer ${ac.tagX}`}
                >
                  <X size={9} />
                </span>
              </span>
            ))
          )}
          {selected.length > 3 && (
            <span className={`inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full border ${ac.tag} ${ac.tagText}`}>
              +{selected.length - 3} more
            </span>
          )}
        </span>
        <ChevronDown
          size={14}
          className={`shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-xl max-h-[220px] overflow-y-auto custom-scrollbar">
          {options.length === 0 ? (
            <p className="text-[11px] text-slate-400 text-center py-3">No options available</p>
          ) : (
            options.map((opt) => {
              const isChecked = selected.includes(opt);
              return (
                <label
                  key={opt}
                  className={`flex items-center gap-2.5 px-3 py-2 cursor-pointer text-[12px] font-medium transition-colors
                                        ${isChecked ? `${ac.bg} ${ac.text}` : "text-slate-700 hover:bg-slate-50"}`}
                >
                  <Checkbox
                    checked={isChecked}
                    onCheckedChange={() => toggle(opt)}
                    className={`h-3.5 w-3.5 shrink-0 ${ac.check}`}
                  />
                  {opt}
                </label>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const InternationalBuyerRegistration = () => {
  const [config, setConfig] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [heroData, setHeroData] = useState<any>(null);
  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);

  const [emailOtpSent, setEmailOtpSent] = useState(false);
  const [emailOtpVerified, setEmailOtpVerified] = useState(false);
  const [emailOtpValue, setEmailOtpValue] = useState("");
  const [mobileOtpSent, setMobileOtpSent] = useState(false);
  const [mobileOtpVerified, setMobileOtpVerified] = useState(false);
  const [mobileOtpValue, setMobileOtpValue] = useState("");
  const [isVerifying, setIsVerifying] = useState({ email: false, mobile: false });
  const [emailResendTimer, setEmailResendTimer] = useState(0);
  const [mobileResendTimer, setMobileResendTimer] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loadingLocations, setLoadingLocations] = useState({ states: false, cities: false });
  const [newSocialLink, setNewSocialLink] = useState("");

  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPaymentConfirmModal, setShowPaymentConfirmModal] = useState(false);
  const [tempSelectedPackage, setTempSelectedPackage] = useState<any>(null);
  const [activePolicyTab, setActivePolicyTab] = useState<'info' | 'payment' | 'refund' | 'privacy' | 'rules'>('info');
  const [policyConsents, setPolicyConsents] = useState({
    infoAccurate: false,
    paymentTerms: false,
    refundPolicy: false,
    privacyPolicy: false,
    participationRules: false
  });

  const [policiesData, setPoliciesData] = useState<Record<string, any>>({});
  const [showMembershipOptions, setShowMembershipOptions] = useState(false);

  const membershipPackages = useMemo(() => config?.packages?.filter((p: any) => p.category === 'Membership') || [], [config]);
  const passPackages = useMemo(() => config?.packages?.filter((p: any) => p.category === 'Pass') || [], [config]);

  const initialFormState = {
    brandName: "",
    legalEntityType: "",
    countryOfRegistration: "",
    registrationStatus: "Other Country",
    yearOfEstablishment: "",
    registrationNumber: "",
    taxRegistrationNumber: "",
    importExportCode: "",
    businessLicenseNumber: "",
    natureOfBusiness: [] as string[],
    address: "",
    city: "",
    stateProvince: "",
    country: "",
    postalCode: "",
    website: "",
    linkedInPage: "",
    socialMediaLinks: [] as string[],
    primaryContact: {
      fullName: "",
      designation: "",
      mobileNumber: "",
      whatsappNumber: "",
      emailId: ""
    },
    secondaryContact: {
      fullName: "",
      designation: "",
      contactNumber: "",
      emailId: ""
    },
    productCategories: [] as string[],
    stallRequirement: {
      preferredStallType: "",
      stallSize: "",
      cornerStallRequired: "No",
      preferredHallNumber: "",
      preferredStallLocation: "",
      countryPavilionParticipation: "No"
    },
    sponsorship: {
      interested: "No",
      preferredType: ""
    },
    businessProfile: {
      companyProfileShort: "",
      keyProductsServices: "",
      exportCountries: "",
      existingMajorClients: "",
      certifications: [] as string[]
    },
    b2bInterest: {
      interested: "No",
      lookingFor: [] as string[]
    },
    travelSupport: {
      visaInvitation: "No",
      hotelBooking: "No",
      airportPickup: "No",
      translatorSupport: "No",
      arrivalDate: "",
      departureDate: ""
    },
    billingDetails: {
      billingName: "",
      billingAddress: "",
      accountsContactPerson: "",
      accountsEmail: "",
      accountsMobileNumber: "",
      invoiceRequired: "No",
      paymentMode: "Online Payment Gateway",
      bookingAmountPaid: "",
      utrTransactionId: ""
    },
    declarations: {
      infoAccurate: false,
      agreeTerms: false,
      acceptCancellationPolicy: false,
      acceptPrivacyPolicy: false,
      agreeParticipationRules: false,
      digitalSignature: ""
    },
    vipProgram: {
      interested: "No"
    },
    registrationCategory: "",
    registrationFee: "$0",
    transactionId: ""
  };

  const [formData, setFormData] = useState(initialFormState);
  const [files, setFiles] = useState<Record<string, File | null>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [hData, cRes, configRes, paymentRes, refundRes, privacyRes, rulesRes] = await Promise.all([
          Promise.resolve(null),
          crmApi.getCountries(),
          buyerApi.getInternationalConfig(),
          policyApi.getByPage('terms-of-service').catch(() => null),
          policyApi.getByPage('refund-policy').catch(() => null),
          policyApi.getByPage('privacy-policy').catch(() => null),
          policyApi.getByPage('international-participation-rules').catch(() => null)
        ]);

        if (cRes) setCountries(cRes);
        if (configRes?.success) setConfig(configRes.data);

        const extractContent = (res: any) => (res?.content ? res : res?.data?.content ? res.data : null);

        setPoliciesData({
          'payment': extractContent(paymentRes) || { content: "<h3>Terms & Conditions</h3><p>Standard terms and conditions for Bharat Organic Expo 2027 apply. Payment is non-refundable unless stated otherwise.</p>" },
          'refund': extractContent(refundRes) || { content: "<h3>Refund Policy</h3><p>Cancellations made 30 days prior to the event are eligible for a 50% refund. No refunds thereafter.</p>" },
          'privacy': extractContent(privacyRes) || { content: "<h3>Privacy Policy</h3><p>Your data will be securely processed and used only for event-related communications.</p>" },
          'rules': extractContent(rulesRes) || { content: "<h3>International Participation Rules</h3><p>By participating in Bharat Organic Expo 2027, international exhibitors and buyers agree to comply with all local laws and event-specific guidelines.</p>" }
        });
      } catch (err) { console.error("Error fetching data:", err); }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (showTermsModal || showPaymentConfirmModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [showTermsModal, showPaymentConfirmModal]);


  useEffect(() => {
    const fetchStates = async () => {
      if (!formData.country) return;
      const selectedCountry = countries.find(c => c.name === formData.country);
      if (selectedCountry) {
        setLoadingLocations(prev => ({ ...prev, states: true }));
        try { setStates(await crmApi.getStates(selectedCountry.countryCode)); }
        catch (err) { console.error(err); }
        finally { setLoadingLocations(prev => ({ ...prev, states: false })); }
      }
    };
    fetchStates();
  }, [formData.country, countries]);

  useEffect(() => {
    const fetchCities = async () => {
      if (!formData.stateProvince) return;
      const selectedState = states.find(s => s.name === formData.stateProvince);
      if (selectedState) {
        setLoadingLocations(prev => ({ ...prev, cities: true }));
        try { setCities(await crmApi.getCities(selectedState.stateCode)); }
        catch (err) { console.error(err); }
        finally { setLoadingLocations(prev => ({ ...prev, cities: false })); }
      }
    };
    fetchCities();
  }, [formData.stateProvince, states]);

  useEffect(() => {
    let eTimer: any;
    if (emailResendTimer > 0) eTimer = setInterval(() => setEmailResendTimer(p => p - 1), 1000);
    return () => clearInterval(eTimer);
  }, [emailResendTimer]);

  useEffect(() => {
    let mTimer: any;
    if (mobileResendTimer > 0) mTimer = setInterval(() => setMobileResendTimer(p => p - 1), 1000);
    return () => clearInterval(mTimer);
  }, [mobileResendTimer]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let { name, value } = e.target;

    // Numeric field validations (no chars, spaces allowed)
    if (name.includes('mobileNumber') || name.includes('whatsappNumber') || name.includes('contactNumber')) {
      value = value.replace(/\D/g, '').slice(0, 15);
    }
    if (name === 'yearOfEstablishment') {
      value = value.replace(/\D/g, '').slice(0, 4);
    }

    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({ ...prev, [parent]: { ...(prev[parent as keyof typeof prev] as any), [child]: value } }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAddSocialLink = () => {
    if (newSocialLink.trim()) {
      const links = Array.isArray(formData.socialMediaLinks) ? formData.socialMediaLinks : [];
      setFormData(prev => ({ ...prev, socialMediaLinks: [...links, newSocialLink.trim()] }));
      setNewSocialLink("");
    }
  };
  const handleRemoveSocialLink = (index: number) => {
    const links = Array.isArray(formData.socialMediaLinks) ? [...formData.socialMediaLinks] : [];
    links.splice(index, 1);
    setFormData(prev => ({ ...prev, socialMediaLinks: links }));
  };

  const handleSelectChange = (name: string, value: string) => {
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({ ...prev, [parent]: { ...(prev[parent as keyof typeof prev] as any), [child]: value } }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleMultiSelectChange = (name: string, value: string[]) => {
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({ ...prev, [parent]: { ...(prev[parent as keyof typeof prev] as any), [child]: value } }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files: selectedFiles } = e.target;
    if (selectedFiles && selectedFiles[0]) setFiles(prev => ({ ...prev, [name]: selectedFiles[0] }));
  };

  const requestOtp = async (type: 'email' | 'mobile') => {
    const identifier = type === 'email' ? formData.primaryContact.emailId : formData.primaryContact.mobileNumber;
    if (!identifier) { toast.error(`Please enter a valid ${type} first.`); return; }
    setIsVerifying(prev => ({ ...prev, [type]: true }));
    try {
      const res = type === 'email'
        ? await verifyApi.sendEmailOtp(identifier, 'INTERNATIONAL_BUYER', formData.primaryContact.fullName)
        : await verifyApi.sendPhoneOtp(identifier, 'INTERNATIONAL_BUYER', formData.primaryContact.fullName);
      if (res.success) {
        toast.success(`OTP sent to your ${type === 'email' ? 'Email' : 'Mobile'}.`);
        if (type === 'email') { setEmailOtpSent(true); setEmailResendTimer(30); }
        else { setMobileOtpSent(true); setMobileResendTimer(30); }
      } else { toast.error(res.message || "Failed to send OTP."); }
    } catch (err) { toast.error("Connection error."); }
    finally { setIsVerifying(prev => ({ ...prev, [type]: false })); }
  };

  const verifyOtp = async (type: 'email' | 'mobile') => {
    const identifier = type === 'email' ? formData.primaryContact.emailId : formData.primaryContact.mobileNumber;
    const otp = type === 'email' ? emailOtpValue : mobileOtpValue;
    if (!otp) { toast.error("Please enter the OTP."); return; }
    setIsVerifying(prev => ({ ...prev, [type]: true }));
    try {
      const res = type === 'email'
        ? await verifyApi.verifyEmailOtp(identifier, otp)
        : await verifyApi.verifyPhoneOtp(identifier, otp);
      if (res.success) {
        toast.success(`${type === 'email' ? 'Email' : 'Mobile'} Verified!`);
        type === 'email' ? setEmailOtpVerified(true) : setMobileOtpVerified(true);
      } else { toast.error("Invalid OTP."); }
    } catch (err) { toast.error("Verification failed."); }
    finally { setIsVerifying(prev => ({ ...prev, [type]: false })); }
  };

  const handlePackageSelection = (pkg: any) => {
    if (!emailOtpVerified || !mobileOtpVerified) { toast.error("Please verify Email and Mobile OTP first."); return; }
    setTempSelectedPackage(pkg);
    setPolicyConsents({ infoAccurate: false, paymentTerms: false, refundPolicy: false, privacyPolicy: false, participationRules: false });
    setActivePolicyTab('info');
    setShowTermsModal(true);
  };

  const initiateRazorpayPayment = async () => {
    const razorpayLoaded = await loadRazorpayScript();
    if (!razorpayLoaded) { toast.error("Failed to load payment gateway."); return; }
    const gatewayPrice = Math.round(tempSelectedPackage.price * 1.025);
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_RTd9y3ngRanKxq",
      amount: gatewayPrice * 100,
      currency: "USD",
      name: "BOE 2027",
      description: `${tempSelectedPackage.name} Registration`,
      handler: async (response: any) => {
        setFormData(prev => ({ ...prev, registrationCategory: tempSelectedPackage.name, registrationFee: `$${tempSelectedPackage.price}`, transactionId: response.razorpay_payment_id }));
        setShowTermsModal(false); setShowPaymentConfirmModal(false);
        await submitFinal(response.razorpay_payment_id);
      },
      prefill: { name: formData.primaryContact.fullName, email: formData.primaryContact.emailId, contact: formData.primaryContact.mobileNumber },
      theme: { color: "#4d7f1d" },
      modal: {
        confirm_close: true,
        ondismiss: function () {
          Swal.fire({ icon: 'warning', title: 'Cancelled', text: 'Payment cancelled.', scrollbarPadding: false });
        }
      }
    };
    const razorpay = new (window as any).Razorpay(options);
    razorpay.on('payment.failed', async function (response: any) {
      Swal.fire({ icon: 'error', title: 'Failed', text: 'Payment failed.', scrollbarPadding: false });
      setShowTermsModal(false); setShowPaymentConfirmModal(false);
      await submitFinal(response.error?.metadata?.payment_id || "FAILED");
    });
    razorpay.open();
  };

  const submitFinal = async (transactionId: string) => {
    setIsSubmitting(true);
    try {
      const payload = {
        ...formData,
        buyerType: 'International',
        registrationCategory: tempSelectedPackage.name,
        registrationFee: `${tempSelectedPackage.price}`,
        transactionId,
        paymentStatus: transactionId === "N/A" ? "Free" : "Completed"
      };

      // Add any files if needed, but none are currently supported by JSON. 
      // If the backend requires FormData for files, IHWE's api handles it. 
      // Since there are no files in this form, JSON is perfect.

      const res = await buyerApi.submitInternationalBuyer(payload);
      if (res.success) { setSubmitted(true); window.scrollTo({ top: 0, behavior: "smooth" }); }
      else toast.error(res.message || "Submission failed.");
    } catch (error) { toast.error("Submission error."); }
    finally { setIsSubmitting(false); }
  };

  const inputClasses = "rounded border border-slate-400 h-7 focus:border-[#23471d] focus:ring-[#23471d]/10 transition-all text-[12px] bg-white placeholder:text-slate-400 text-slate-900 font-normal shadow-none outline-none px-3 w-full text-left";
  const labelClasses = "text-[11px] font-medium uppercase text-slate-800 mb-1 block text-left";
  const sectionTitleClasses = "text-[12px] font-medium text-[#4d7f1d] uppercase tracking-[0.05em]";
  const sectionTitleWrapperClasses = "pb-1 border-b border-slate-500 mb-3 mt-6 flex justify-between items-end";

  if (submitted) {
    return (
      <div className="bg-white border border-slate-200 p-12 flex flex-col items-center text-center space-y-5 shadow-2xl rounded-2xl animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle size={48} className="text-emerald-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900">Registration Successful!</h2>
        <p className="text-slate-500 max-w-md">Thank you for registering. Our international relations team will contact you shortly with your participation details.</p>
        <Link href="/" className="inline-flex items-center justify-center rounded-full bg-[#23471d] hover:bg-[#1a3516] px-8 h-12 text-sm font-bold uppercase tracking-widest text-white transition-colors">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <>
      <form className="w-full space-y-2 animate-in fade-in duration-500">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#4d7f1d] flex items-center justify-center shrink-0 shadow-md">
            <User size={18} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1a3352] uppercase tracking-wide font-poppins">International Buyer Registration</h3>
            <p className="text-[12px] text-gray-500 font-medium">Bharat Organic Expo 2027</p>
          </div>
        </div>

        {/* Section 1: Company Information */}
        <div className="space-y-1">
          <div className={sectionTitleWrapperClasses}><h3 className={sectionTitleClasses}>Section 1 – Company Information</h3></div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div><label className={labelClasses}>Company / Brand Name <span className="text-red-600">*</span></label><input name="brandName" value={formData.brandName} onChange={handleInputChange} className={inputClasses} placeholder="Enter brand name" /></div>
            <div>
              <label className={labelClasses}>Legal Entity Type <span className="text-red-600">*</span></label>
              <select value={formData.legalEntityType} onChange={(e) => { const v = e.target.value; handleSelectChange('legalEntityType', v) }} className={inputClasses}>
                <option value="">Select type</option>
                {(config?.companyTypes || ['Private Limited', 'Public Limited', 'LLC', 'LLP', 'Partnership', 'Proprietorship', 'Government Organization', 'Trade Association', 'Embassy / Delegation', 'Other']).map((t: any, i: number) => <option key={`${t}-${i}`} value={t}>{t}</option>)}
              </select>
            </div>
            <div><label className={labelClasses}>Country of Registration <span className="text-red-600">*</span></label><input name="countryOfRegistration" value={formData.countryOfRegistration} onChange={handleInputChange} className={inputClasses} placeholder="Country name" /></div>
            <div><label className={labelClasses}>Year of Establishment</label><input name="yearOfEstablishment" value={formData.yearOfEstablishment} onChange={handleInputChange} className={inputClasses} placeholder="YYYY" /></div>
            <div><label className={labelClasses}>Company Registration Number</label><input name="registrationNumber" value={formData.registrationNumber} onChange={handleInputChange} className={inputClasses} placeholder="Reg number" /></div>
            <div><label className={labelClasses}>VAT / GST / Tax ID</label><input name="taxRegistrationNumber" value={formData.taxRegistrationNumber} onChange={handleInputChange} className={inputClasses} placeholder="Tax ID" /></div>
            <div><label className={labelClasses}>Import Export Code (IEC)</label><input name="importExportCode" value={formData.importExportCode} onChange={handleInputChange} className={inputClasses} placeholder="IEC Code" /></div>
            <div><label className={labelClasses}>Business License Number</label><input name="businessLicenseNumber" value={formData.businessLicenseNumber} onChange={handleInputChange} className={inputClasses} placeholder="License number" /></div>
            <div className="lg:col-span-2"><label className={labelClasses}>Nature of Business <span className="text-red-600">*</span></label><MultiSelectDropdown options={config?.supplierTypes || ['Manufacturer', 'Exporter', 'Importer', 'Distributor', 'Wholesaler', 'Service Provider', 'Government Body', 'Startup', 'Franchise Brand', 'Medical Institution', 'Hospital Group', 'AYUSH Organization']} selected={formData.natureOfBusiness} onChange={val => handleMultiSelectChange('natureOfBusiness', val)} placeholder="Select business nature" /></div>
          </div>
        </div>

        {/* Section 2: Registered Office Details */}
        <div className="space-y-1">
          <h3 className={sectionTitleClasses}>Section 2 – Registered Office Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4">
            <div><label className={labelClasses}>Full Registered Address <span className="text-red-600">*</span></label><input name="address" value={formData.address} onChange={handleInputChange} className={inputClasses} placeholder="Full address" /></div>
            <div><label className={labelClasses}>Country <span className="text-red-600">*</span></label><select value={formData.country} onChange={(e) => { const v = e.target.value; handleSelectChange('country', v) }} className={inputClasses}><option value="">Select Country</option>{countries.map(c => <option key={c._id} value={c.name}>{c.name}</option>)}</select></div>
            <div><label className={labelClasses}>State / Province</label><select value={formData.stateProvince} onChange={(e) => handleSelectChange('stateProvince', e.target.value)} disabled={!formData.country} className={inputClasses}><option value="">Select State</option>{states.map(s => <option key={s._id} value={s.name}>{s.name}</option>)}</select></div>
            <div><label className={labelClasses}>City</label><select value={formData.city} onChange={(e) => handleSelectChange('city', e.target.value)} disabled={!formData.stateProvince} className={inputClasses}><option value="">Select City</option>{cities.map(c => <option key={c._id} value={c.name}>{c.name}</option>)}</select></div>
            <div><label className={labelClasses}>Postal Code</label><input name="postalCode" value={formData.postalCode} onChange={handleInputChange} className={inputClasses} placeholder="PIN/Postal" /></div>
            <div><label className={labelClasses}>Company Website</label><input name="website" value={formData.website} onChange={handleInputChange} className={inputClasses} placeholder="https://..." /></div>
            <div><label className={labelClasses}>LinkedIn Company Page</label><input name="linkedInPage" value={formData.linkedInPage} onChange={handleInputChange} className={inputClasses} placeholder="https://linkedin.com/company/..." /></div>
            <div>
              <label className={labelClasses}>Social Media Links</label>
              <div className="flex gap-2">
                <input
                  value={newSocialLink}
                  onChange={(e) => setNewSocialLink(e.target.value)}
                  className={inputClasses}
                  placeholder="Instagram, Facebook, Twitter links..."
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddSocialLink();
                    }
                  }}
                />
                <button type="button" onClick={handleAddSocialLink} className="bg-[#23471d] text-white px-3 rounded text-[10px] uppercase font-bold transition hover:bg-[#1a3516] h-7 shrink-0">ADD</button>
              </div>
              {Array.isArray(formData.socialMediaLinks) && formData.socialMediaLinks.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {formData.socialMediaLinks.map((link: string, idx: number) => (
                    <span key={idx} className="bg-slate-100 text-slate-700 px-2 py-1 text-[10px] rounded flex items-center gap-1 border border-slate-200">
                      <a href={link} target="_blank" rel="noopener noreferrer" className="truncate max-w-[150px]">{link}</a>
                      <button type="button" onClick={() => handleRemoveSocialLink(idx)} className="text-slate-500 hover:text-red-500 ml-1"><X size={10} /></button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>


        <div className="space-y-1">
          <h3 className={sectionTitleClasses}>Section 3 – Primary Contact Person</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div><label className={labelClasses}>Full Name <span className="text-red-600">*</span></label><input name="primaryContact.fullName" value={formData.primaryContact.fullName} onChange={handleInputChange} className={inputClasses} placeholder="Full name" /></div>
            <div><label className={labelClasses}>Designation</label><input name="primaryContact.designation" value={formData.primaryContact.designation} onChange={handleInputChange} className={inputClasses} placeholder="e.g. CEO, Manager" /></div>
            <div><label className={labelClasses}>WhatsApp Number</label><input type="tel" name="primaryContact.whatsappNumber" value={formData.primaryContact.whatsappNumber} onChange={handleInputChange} className={inputClasses} placeholder="WhatsApp with country code" /></div>
            <div className="lg:col-span-2">
              <label className={labelClasses}>Official Email ID <span className="text-red-600">*</span></label>
              <div className="flex gap-2">
                <input type="email" name="primaryContact.emailId" value={formData.primaryContact.emailId} onChange={handleInputChange} className={inputClasses} disabled={emailOtpVerified || emailOtpSent} placeholder="email@example.com" />
                {!emailOtpVerified && !emailOtpSent && <button type="button" onClick={() => requestOtp('email')} disabled={!formData.primaryContact.emailId || isVerifying.email} className="bg-[#4d7f1d] text-white px-3 rounded text-[10px] uppercase font-bold transition hover:bg-[#3b6315] h-7 disabled:opacity-50 shrink-0">{isVerifying.email ? <Loader2 className="animate-spin" size={14} /> : 'OTP'}</button>}
                {emailOtpSent && !emailOtpVerified && <button type="button" onClick={() => verifyOtp('email')} disabled={!emailOtpValue || isVerifying.email} className="bg-[#23471d] text-white px-3 rounded text-[10px] uppercase font-bold transition hover:bg-[#1a3516] h-7 shrink-0">{isVerifying.email ? <Loader2 className="animate-spin" size={14} /> : 'VERIFY'}</button>}
                {emailOtpVerified && <CheckCircle size={16} className="text-emerald-500 self-center shrink-0" />}
              </div>
              {emailOtpSent && !emailOtpVerified && (
                <div className="space-y-1 mt-1">
                  <input type="text" placeholder="Enter 6-digit OTP" value={emailOtpValue} onChange={e => setEmailOtpValue(e.target.value)} className={`${inputClasses} text-center tracking-[0.3em] font-bold`} maxLength={6} inputMode="numeric" />
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">Didn't receive it?</span>
                    {emailResendTimer > 0 ? (
                      <span className="text-[10px] font-bold text-slate-400">Resend in {emailResendTimer}s</span>
                    ) : (
                      <button type="button" onClick={() => requestOtp('email')} disabled={isVerifying.email} className="text-[10px] font-bold text-[#23471d] hover:underline disabled:opacity-50">
                        Resend OTP
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="lg:col-span-2">
              <label className={labelClasses}>Mobile Number <span className="text-red-600">*</span> (with Country Code)</label>
              <div className="flex gap-2">
                <input type="tel" name="primaryContact.mobileNumber" value={formData.primaryContact.mobileNumber} onChange={handleInputChange} className={inputClasses} disabled={mobileOtpVerified || mobileOtpSent} placeholder="+91 9XXXXXXXXX" />
                {!mobileOtpVerified && !mobileOtpSent && <button type="button" onClick={() => requestOtp('mobile')} disabled={!formData.primaryContact.mobileNumber || isVerifying.mobile} className="bg-[#4d7f1d] text-white px-3 rounded text-[10px] uppercase font-bold transition hover:bg-[#3b6315] h-7 disabled:opacity-50 shrink-0">{isVerifying.mobile ? <Loader2 className="animate-spin" size={14} /> : 'OTP'}</button>}
                {mobileOtpSent && !mobileOtpVerified && <button type="button" onClick={() => verifyOtp('mobile')} disabled={!mobileOtpValue || isVerifying.mobile} className="bg-[#23471d] text-white px-3 rounded text-[10px] uppercase font-bold transition hover:bg-[#1a3516] h-7 shrink-0">{isVerifying.mobile ? <Loader2 className="animate-spin" size={14} /> : 'VERIFY'}</button>}
                {mobileOtpVerified && <CheckCircle size={16} className="text-emerald-500 self-center shrink-0" />}
              </div>
              {mobileOtpSent && !mobileOtpVerified && (
                <div className="space-y-1 mt-1">
                  <input type="text" placeholder="Enter 6-digit OTP" value={mobileOtpValue} onChange={e => setMobileOtpValue(e.target.value)} className={`${inputClasses} text-center tracking-[0.3em] font-bold`} maxLength={6} inputMode="numeric" />
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400">Didn't receive it?</span>
                    {mobileResendTimer > 0 ? (
                      <span className="text-[10px] font-bold text-slate-400">Resend in {mobileResendTimer}s</span>
                    ) : (
                      <button type="button" onClick={() => requestOtp('mobile')} disabled={isVerifying.mobile} className="text-[10px] font-bold text-[#23471d] hover:underline disabled:opacity-50">
                        Resend OTP
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className={sectionTitleClasses}>Section 4 – Secondary Contact Person</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div><label className={labelClasses}>Full Name</label><input name="secondaryContact.fullName" value={formData.secondaryContact.fullName} onChange={handleInputChange} className={inputClasses} placeholder="Full name" /></div>
            <div><label className={labelClasses}>Designation</label><input name="secondaryContact.designation" value={formData.secondaryContact.designation} onChange={handleInputChange} className={inputClasses} placeholder="Designation" /></div>
            <div><label className={labelClasses}>Contact Number</label><input type="tel" name="secondaryContact.contactNumber" value={formData.secondaryContact.contactNumber} onChange={handleInputChange} className={inputClasses} placeholder="Mobile" /></div>
            <div><label className={labelClasses}>Email ID</label><input type="email" name="secondaryContact.emailId" value={formData.secondaryContact.emailId} onChange={handleInputChange} className={inputClasses} placeholder="email@example.com" /></div>
          </div>
        </div>


        <div className="space-y-1">
          <h3 className={sectionTitleClasses}>Section 5 – Product Category</h3>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-5">
              <MultiSelectDropdown options={config?.primaryProductInterests || ['Healthcare Products', 'Medical Equipment', 'Hospital Infrastructure', 'Wellness Products', 'Ayurveda', 'Pharmaceuticals', 'Diagnostics', 'Nutraceuticals', 'Organic Products', 'Beauty & Personal Care', 'Fitness & Rehabilitation', 'Medical Tourism', 'Franchise Opportunities', 'Startups', 'Government Participation', 'International Pavilion']} selected={formData.productCategories} onChange={val => handleMultiSelectChange('productCategories', val)} placeholder="Select interest categories" />
            </div>
          </div>
        </div>


        <div className="space-y-1">
          <h3 className={sectionTitleClasses}>Section 6 – Stall Requirement</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div>
              <label className={labelClasses}>Preferred Stall Type</label>
              <select value={formData.stallRequirement.preferredStallType} onChange={(e) => { const v = e.target.value; handleSelectChange('stallRequirement.preferredStallType', v) }} className={inputClasses}>
                <option value="">Select type</option>

                {['Shell Scheme', 'Bare Space', 'Premium Pavilion', 'International Pavilion', 'Country Pavilion', 'Startup Pavilion'].map(o => <option key={o} value={o}>{o}</option>)}

              </select>
            </div>
            <div>
              <label className={labelClasses}>Stall Size Requirement</label>
              <select value={formData.stallRequirement.stallSize} onChange={(e) => { const v = e.target.value; handleSelectChange('stallRequirement.stallSize', v) }} className={inputClasses}>
                <option value="">Select size</option>

                {['9 sqm', '18 sqm', '27 sqm', '36 sqm', '54 sqm', 'Custom Size'].map(s => <option key={s} value={s}>{s}</option>)}

              </select>
            </div>
            <div>
              <label className={labelClasses}>Corner Stall Required?</label>
              <select value={formData.stallRequirement.cornerStallRequired} onChange={(e) => { const v = e.target.value; handleSelectChange('stallRequirement.cornerStallRequired', v) }} className={inputClasses}>
                <option value="">No</option>
                <option value="Yes">Yes</option><option value="No">No</option>
              </select>
            </div>

            <div>
              <label className={labelClasses}>Preferred Stall Location</label>
              <select value={formData.stallRequirement.preferredStallLocation} onChange={(e) => { const v = e.target.value; handleSelectChange('stallRequirement.preferredStallLocation', v) }} className={inputClasses}>
                <option value="">Select...</option>

                <option value="One Side Open">One Side Open</option>
                <option value="Two Side Open">Two Side Open</option>
                <option value="Three Side Open">Three Side Open</option>

              </select>
            </div>
            <div>
              <label className={labelClasses}>Country Pavilion Participation</label>
              <select value={formData.stallRequirement.countryPavilionParticipation} onChange={(e) => { const v = e.target.value; handleSelectChange('stallRequirement.countryPavilionParticipation', v) }} className={inputClasses}>
                <option value="">No</option>
                <option value="Yes">Yes</option><option value="No">No</option>
              </select>
            </div>
          </div>
        </div>


        <div className="space-y-1">
          <h3 className={sectionTitleClasses}>Section 7 – Sponsorship Interest</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div>
              <label className={labelClasses}>Interested in Sponsorship?</label>
              <select value={formData.sponsorship.interested} onChange={(e) => { const v = e.target.value; handleSelectChange('sponsorship.interested', v) }} className={inputClasses}>
                <option value="">No</option>
                <option value="Yes">Yes</option><option value="No">No</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>Preferred Sponsorship Type</label>
              <select value={formData.sponsorship.preferredType} onChange={(e) => handleSelectChange('sponsorship.preferredType', e.target.value)} disabled={formData.sponsorship.interested === 'No'} className={inputClasses}>
                <option value="">Select type</option>

                {['Title Sponsor', 'Powered By Sponsor', 'Associate Sponsor', 'Session Sponsor', 'Delegate Bag Sponsor', 'Lanyard Sponsor', 'Registration Desk Sponsor', 'Knowledge Session Sponsor', 'International Buyer Lounge Sponsor'].map(s => <option key={s} value={s}>{s}</option>)}

              </select>
            </div>
          </div>
        </div>

        {/* Section 8 & 9: Profile & B2B */}
        <div className="space-y-1">
          <h3 className={sectionTitleClasses}>Section 8 & 9 – Profile & B2B</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-2">
            <div><label className={labelClasses}>Company Profile (Short)</label><input name="businessProfile.companyProfileShort" value={formData.businessProfile.companyProfileShort} onChange={handleInputChange} className={inputClasses} placeholder="Short bio" /></div>
            <div><label className={labelClasses}>Key Products / Services</label><input name="businessProfile.keyProductsServices" value={formData.businessProfile.keyProductsServices} onChange={handleInputChange} className={inputClasses} placeholder="Top products" /></div>
            <div><label className={labelClasses}>Export Countries</label><input name="businessProfile.exportCountries" value={formData.businessProfile.exportCountries} onChange={handleInputChange} className={inputClasses} placeholder="Countries you export to" /></div>
            <div><label className={labelClasses}>Existing Major Clients</label><input name="businessProfile.existingMajorClients" value={formData.businessProfile.existingMajorClients} onChange={handleInputChange} className={inputClasses} placeholder="Key clients" /></div>
            <div>
              <label className={labelClasses}>Certifications</label>
              <MultiSelectDropdown
                options={['ISO', 'CE', 'FDA', 'GMP', 'WHO-GMP', 'AYUSH Certified', 'Organic Certification', 'Other']}
                selected={formData.businessProfile.certifications}
                onChange={val => handleMultiSelectChange('businessProfile.certifications', val)}
                placeholder="Select certifications"
              />
            </div>
            <div>
              <label className={labelClasses}>Interested in B2B Meetings?</label>
              <select value={formData.b2bInterest.interested} onChange={(e) => { const v = e.target.value; handleSelectChange('b2bInterest.interested', v) }} className={inputClasses}>
                <option value="">No</option>
                <option value="Yes">Yes</option><option value="No">No</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>Looking For</label>
              <MultiSelectDropdown
                options={["Distributors", "Importers", "Hospital Buyers", "Government Buyers", "Franchise Partners", "Investors", "OEM Partners", "Strategic Collaborations"]}
                selected={formData.b2bInterest.lookingFor}
                onChange={val => handleMultiSelectChange('b2bInterest.lookingFor', val)}
                placeholder="Select interests..."
                disabled={formData.b2bInterest.interested === 'No'}
              />
            </div>
          </div>
        </div>

        {/* Section 10: Travel Support */}
        <div className="space-y-1">
          <h3 className={sectionTitleClasses}>Section 10 – Travel Support</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-2">
            <div>
              <label className={labelClasses}>Visa Letter Required?</label>
              <select value={formData.travelSupport.visaInvitation} onChange={(e) => { const v = e.target.value; handleSelectChange('travelSupport.visaInvitation', v) }} className={inputClasses}>
                <option value="">No</option>
                <option value="Yes">Yes</option><option value="No">No</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>Hotel Booking Support?</label>
              <select value={formData.travelSupport.hotelBooking} onChange={(e) => { const v = e.target.value; handleSelectChange('travelSupport.hotelBooking', v) }} className={inputClasses}>
                <option value="">No</option>
                <option value="Yes">Yes</option><option value="No">No</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>Airport Pickup?</label>
              <select value={formData.travelSupport.airportPickup} onChange={(e) => { const v = e.target.value; handleSelectChange('travelSupport.airportPickup', v) }} className={inputClasses}>
                <option value="">No</option>
                <option value="Yes">Yes</option><option value="No">No</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>Translator Support?</label>
              <select value={formData.travelSupport.translatorSupport} onChange={(e) => { const v = e.target.value; handleSelectChange('travelSupport.translatorSupport', v) }} className={inputClasses}>
                <option value="">No</option>
                <option value="Yes">Yes</option><option value="No">No</option>
              </select>
            </div>
            <div><label className={labelClasses}>Arrival Date</label><input type="date" name="travelSupport.arrivalDate" value={formData.travelSupport.arrivalDate} onChange={handleInputChange} className={inputClasses} /></div>
            <div><label className={labelClasses}>Departure Date</label><input type="date" name="travelSupport.departureDate" value={formData.travelSupport.departureDate} onChange={handleInputChange} className={inputClasses} /></div>
          </div>
        </div>

        {/* Section 11: Billing & Payment Details */}
        <div className="space-y-1">
          <h3 className={sectionTitleClasses}>Section 11 – Billing & Payment Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-2">
            <div><label className={labelClasses}>Billing Name</label><input name="billingDetails.billingName" value={formData.billingDetails.billingName} onChange={handleInputChange} className={inputClasses} placeholder="Entity name for invoice" /></div>
            <div><label className={labelClasses}>Billing Address</label><input name="billingDetails.billingAddress" value={formData.billingDetails.billingAddress} onChange={handleInputChange} className={inputClasses} placeholder="Complete billing address" /></div>
            <div><label className={labelClasses}>Accounts Contact Person</label><input name="billingDetails.accountsContactPerson" value={formData.billingDetails.accountsContactPerson} onChange={handleInputChange} className={inputClasses} placeholder="Name" /></div>
            <div><label className={labelClasses}>Accounts Email</label><input type="email" name="billingDetails.accountsEmail" value={formData.billingDetails.accountsEmail} onChange={handleInputChange} className={inputClasses} placeholder="email@example.com" /></div>
            <div><label className={labelClasses}>Accounts Mobile Number</label><input type="tel" name="billingDetails.accountsMobileNumber" value={formData.billingDetails.accountsMobileNumber} onChange={handleInputChange} className={inputClasses} placeholder="Mobile" /></div>
            <div>
              <label className={labelClasses}>Invoice Required?</label>
              <select value={formData.billingDetails.invoiceRequired} onChange={(e) => { const v = e.target.value; handleSelectChange('billingDetails.invoiceRequired', v) }} className={inputClasses}>
                <option value="">No</option>
                <option value="Yes">Yes</option><option value="No">No</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>Payment Mode</label>
              <select value={formData.billingDetails.paymentMode} onChange={(e) => { const v = e.target.value; handleSelectChange('billingDetails.paymentMode', v) }} className={inputClasses}>
                <option value="">Select Mode</option>

                <option value="Bank Transfer">Bank Transfer</option>
                <option value="International Wire Transfer">International Wire Transfer</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Online Payment Gateway">Online Payment Gateway</option>

              </select>
            </div>
            <div><label className={labelClasses}>Booking Amount Paid</label><input name="billingDetails.bookingAmountPaid" value={formData.billingDetails.bookingAmountPaid} onChange={handleInputChange} className={inputClasses} placeholder="e.g. $25000" /></div>
            <div className="lg:col-span-2"><label className={labelClasses}>UTR / Transaction ID</label><input name="billingDetails.utrTransactionId" value={formData.billingDetails.utrTransactionId} onChange={handleInputChange} className={inputClasses} placeholder="Transaction reference" /></div>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className={sectionTitleClasses}>Section 12 – Document Upload</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: 'Company Registration', name: 'companyRegistrationCertificate' },
              { label: 'Tax Registration', name: 'taxRegistrationCertificate' },
              { label: 'Passport Copy', name: 'passportCopy' },
              { label: 'Product Catalogue', name: 'productCatalogue' },
              { label: 'Company Brochure', name: 'companyBrochure' },
              { label: 'Logo (High Res)', name: 'logo' },
              { label: 'Visiting Card', name: 'visitingCard' },
              { label: 'Product Certs', name: 'productCertifications' },
              { label: 'Previous Proof', name: 'previousParticipationProof' }
            ].map(doc => (
              <div key={doc.name} className="px-3 py-2 border border-dashed border-slate-300 rounded-md bg-slate-50 flex flex-col gap-2">
                <label className="text-[11px] font-bold">{doc.label}</label>
                <div className="flex items-center gap-2">
                  <input type="file" name={doc.name} onChange={handleFileChange} className="hidden" id={`file-${doc.name}`} />
                  <label htmlFor={`file-${doc.name}`} className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-300 rounded cursor-pointer hover:bg-slate-50 transition-colors">
                    <Upload size={14} className="text-[#23471d]" />
                    <span className="text-[10px] text-slate-500 truncate">{files[doc.name]?.name || "Upload"}</span>
                  </label>
                  {files[doc.name] && <CheckCircle size={14} className="text-emerald-500" />}
                </div>
              </div>
            ))}
          </div>
        </div>


        <div id="package-section" className="space-y-4 pt-2 pb-6">
          <h3 className={sectionTitleClasses}> Registration Category 🔹</h3>
          <div className="relative">
            {!showMembershipOptions ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2 px-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <p className="text-sm font-medium text-slate-600 uppercase tracking-[0.2em] ">Available Registration Passes</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                  {passPackages.map((pkg: any) => {
                    const isSelected = formData.registrationCategory === pkg.name;
                    const colorMap: Record<string, any> = {
                      blue: { border: 'border-blue-400 bg-blue-50/10', accent: 'text-blue-700', badge: 'bg-emerald-500' },
                      yellow: { border: 'border-amber-400 bg-amber-50/10', accent: 'text-amber-700', badge: 'bg-amber-400' },
                      green: { border: 'border-emerald-400 bg-emerald-50/10', accent: 'text-emerald-700', badge: 'bg-emerald-500' },
                      red: { border: 'border-red-400 bg-red-50/10', accent: 'text-red-700', badge: 'bg-red-500' }
                    };
                    const theme = colorMap[pkg.color] || colorMap.blue;

                    return (
                      <div
                        key={pkg.name}
                        onClick={() => handlePackageSelection(pkg)}
                        className={`relative bg-green-500/10 p-5 border-2 transition-all cursor-pointer rounded-xl flex flex-col h-full group 
                                                                        ${isSelected ? `border-[#23471d]  shadow-2xl ring-2 ring-emerald-100 scale-[1.02] z-10` : `border-green-200  hover:border-emerald-300 hover:shadow-lg`}
                                                                    `}
                      >
                        {pkg.badge && (
                          <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm z-20 text-white ${theme.badge}`}>
                            ⭐ {pkg.badge}
                          </div>
                        )}

                        <div className="mb-3">
                          <h4 className="text-[15px] font-semibold leading-tight text-slate-800 group-hover:text-[#23471d] transition-colors">
                            {pkg.name} – ${pkg.price}
                          </h4>
                          {pkg.tagline && (
                            <p className={`text-[10px] font-bold uppercase tracking-tight mt-1 ${theme.accent}`}>
                              {pkg.tagline}
                            </p>
                          )}
                        </div>

                        <div className="flex-1 space-y-4">
                          {pkg.description && (
                            <p className="text-[11px] text-slate-500 leading-relaxed italic border-l-2 border-slate-200 pl-2">
                              {pkg.description}
                            </p>
                          )}

                          {pkg.benefits && pkg.benefits.length > 0 && (
                            <div className="space-y-1.5">
                              <p className="text-[9px] font-black text-gray-500 uppercase tracking-widest">What You Get:</p>
                              <ul className="text-[11px] text-gray-700 space-y-1.5 font-medium">
                                {pkg.benefits.map((b: string, i: number) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <CheckCircle size={12} className="text-emerald-500 mt-0.5 shrink-0" />
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {pkg.whyChoose && (
                            <div className={`p-2 rounded-lg ${theme.border} border`}>
                              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Why Choose This:</p>
                              <p className="text-[10px] text-slate-700 font-semibold leading-snug">
                                {pkg.whyChoose}
                              </p>
                            </div>
                          )}
                        </div>

                        <div className={`mt-4 w-full py-2.5 text-white rounded-lg bg-green-600 hover:bg-green-700 text-center text-[11px] font-medium uppercase tracking-widest transition-all 
                                                                        ${isSelected ? ' shadow-lg' : ''}
                                                                    `}>
                          {pkg.cta || "Select Plan"}
                        </div>

                        {/* <div className="flex justify-center">
                                                                        <button
                                                                            className="flex justify-between items-center gap-3 px-5 py-1 rounded-lg font-medium uppercase tracking-widest text-[11px] text-white w-fit bg-green-600 hover:bg-green-700"
                                                                        >
                                                                            <span>{pkg.cta || "Select Plan"}</span>
                                                                            <span
                                                                                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                                                                                style={{ background: 'rgba(168,208,96,0.2)', border: '1.5px solid rgba(168,208,96,0.6)' }}
                                                                            >
                                                                                <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                                                    <path d="M5 12h14M13 6l6 6-6 6" />
                                                                                </svg>
                                                                            </span>
                                                                        </button>
                                                                    </div> */}
                      </div>
                    );
                  })}

                  {membershipPackages.length > 0 && (
                    <div className="relative">

                      {/* Badge — card ke upar half bahar */}
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md text-white bg-emerald-500 whitespace-nowrap">
                        ⭐ Recommended
                      </div>

                      {/* Card */}
                      <div
                        onClick={() => setShowMembershipOptions(true)}
                        className="relative border-2 border-dashed border-emerald-300 transition-all rounded-xl cursor-pointer hover:border-emerald-400 overflow-hidden"
                        style={{
                          backgroundImage: 'url(/buyer/optionbg.webp)',
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          minHeight: '120px',
                        }}
                      >
                        {/* Overlay */}
                        <div className="absolute inset-0 rounded-xl"
                          style={{ background: 'linear-gradient(135deg, rgba(26,61,20,0.82) 0%, rgba(74,143,47,0.55) 100%)' }}
                        />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center justify-between h-full px-4 pt-6 pb-4 gap-3">

                          {/* Top — Logo + org name */}
                          <div className="flex flex-col items-center gap-1">
                            <img loading="lazy" decoding="async" src="/assets/registration/icoa.webp"
                              alt="ICOA"
                              className="w-48 h-auto object-contain"
                              style={{
                                filter: 'drop-shadow(0 0 12px rgba(168,208,96,0.9)) drop-shadow(0 0 24px rgba(168,208,96,0.5)) drop-shadow(0 0 40px rgba(168,208,96,0.3))',
                              }}
                            />
                            <p
                              className="text-lg font-bold uppercase tracking-[0.18em] text-center"
                              style={{
                                background: 'linear-gradient(90deg, #a8d060, #d4f07a, #a8d060)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                textShadow: 'none',
                              }}
                            >
                              International Council of Ayush
                            </p>
                          </div>

                          {/* Middle — Heading */}
                          <h4
                            className="text-[15px] font-black text-white text-center leading-tight"
                            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
                          >
                            Unlock <span className="text-[#a8d060]">Premium</span> Membership
                          </h4>

                          <p className="text-sm text-white/80 text-center leading-relaxed px-2">
                            Join ICOA's exclusive network of<br />
                            Ayush professionals & wellness brands.<br />
                            Get certified, grow your reach,<br />
                            and unlock global opportunities.
                          </p>

                          {/* Bottom — Button */}
                          <button
                            className="flex items-center gap-3 px-5 py-1 rounded-lg font-medium uppercase tracking-widest text-[11px] text-white w-fit"
                            style={{
                              background: 'linear-gradient(135deg, #2d7a1f, #4a9e2f)',
                              border: '1.5px solid rgba(168,208,96,0.6)',
                              animation: 'gentlePulse 2s ease-in-out infinite',
                            }}
                          >
                            Register Now
                            <span
                              className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                              style={{ background: 'rgba(168,208,96,0.25)', border: '1px solid rgba(168,208,96,0.5)' }}
                            >
                              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                              </svg>
                            </span>
                          </button>

                        </div>

                        <style>{`
      @keyframes gentlePulse {
        0%, 100% { box-shadow: 0 0 8px rgba(168,208,96,0.5); }
        50%       { box-shadow: 0 0 18px rgba(168,208,96,0.9); }
      }
    `}</style>

                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <p className="text-[11px] font-black text-slate-600 uppercase tracking-[0.2em] ">Exclusive Membership Plans</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                  {membershipPackages.map((pkg: any) => {
                    const isSelected = formData.registrationCategory === pkg.name;
                    const colorMap: Record<string, any> = {
                      blue: { border: 'border-blue-400 bg-blue-50/10', accent: 'text-blue-700', badge: 'bg-emerald-500' },
                      yellow: { border: 'border-amber-400 bg-amber-50/10', accent: 'text-amber-700', badge: 'bg-amber-400' },
                      green: { border: 'border-emerald-400 bg-emerald-50/10', accent: 'text-emerald-700', badge: 'bg-emerald-500' },
                      red: { border: 'border-red-400 bg-red-50/10', accent: 'text-red-700', badge: 'bg-red-500' }
                    };
                    const theme = colorMap[pkg.color] || colorMap.blue;

                    return (
                      <div
                        key={pkg.name}
                        onClick={() => handlePackageSelection(pkg)}
                        className={`relative bg-green-500/10 p-5 border-2 transition-all rounded-xl flex flex-col h-full group cursor-pointer
                                                                        ${isSelected ? `border-[#23471d] shadow-2xl ring-1 ring-emerald-100 scale-[1.02] z-10` : `border-green-100 hover:border-emerald-300 hover:shadow-lg`}
                                                                    `}
                      >
                        {pkg.badge && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm z-20 text-white bg-emerald-500">
                            ⭐ {pkg.badge}
                          </div>
                        )}

                        <div className="mb-3">
                          <h4 className="text-[15px] font-black leading-tight text-slate-800 group-hover:text-[#23471d] transition-colors">
                            {pkg.name} – ${pkg.price}
                          </h4>
                          {pkg.tagline && (
                            <p className={`text-[10px] font-bold uppercase tracking-tight mt-1 ${theme.accent}`}>
                              {pkg.tagline}
                            </p>
                          )}
                        </div>

                        <div className="flex-1 space-y-4">
                          {pkg.description && (
                            <p className="text-[11px] text-slate-500 leading-relaxed italic border-l-2 border-slate-200 pl-2">
                              {pkg.description}
                            </p>
                          )}

                          {pkg.benefits && pkg.benefits.length > 0 && (
                            <div className="space-y-1.5">
                              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">What You Get:</p>
                              <ul className="text-[11px] text-slate-700 space-y-1.5 font-medium">
                                {pkg.benefits.map((b: string, i: number) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <CheckCircle size={12} className="text-emerald-500 mt-0.5 shrink-0" />
                                    <span>{b}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {pkg.whyChoose && (
                            <div className={`p-2 rounded-lg ${theme.border} border`}>
                              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Why Choose This:</p>
                              <p className="text-[10px] text-slate-700 font-semibold leading-snug">
                                {pkg.whyChoose}
                              </p>
                            </div>
                          )}
                        </div>

                        <div className={`mt-4 w-full py-1.5 rounded-lg text-white text-center text-xs bg-green-600 hover:bg-green-700 font-medium uppercase tracking-widest transition-all
                                                                        ${isSelected ? 'shadow-lg' : ''}
                                                                    `}>
                          {pkg.cta || "Select Plan"}
                        </div>
                      </div>
                    );
                  })}
                  <div className="flex justify-end px-2 h-7 text-center items-center">
                    <button type="button" onClick={() => setShowMembershipOptions(false)} className="px-6 py-1.5 text-sm text-white font-medium bg-red-500 hover:bg-red-600 border border-red-600 rounded-lg transition-all shadow-sm">← Back to Passes</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>

      {/* Terms Modal with Integrated Declaration */}
      <AnimatePresence>
        {
          showTermsModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm bg-black/40">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
                <div className="bg-[#23471d] p-4 text-white flex justify-between items-center">
                  <div><h3 className="font-bold text-[14px] uppercase tracking-widest">Declaration & Legal Terms</h3><p className="text-[9px] text-emerald-300 uppercase tracking-[0.2em]">{tempSelectedPackage?.name} - ${tempSelectedPackage?.price}</p></div>
                  <button onClick={() => setShowTermsModal(false)}><X size={20} /></button>
                </div>

                <div className="flex border-b bg-slate-50 sticky top-0 z-10">
                  {['info', 'payment', 'refund', 'privacy', 'rules'].map((tab: any) => (
                    <button key={tab} onClick={() => setActivePolicyTab(tab)} className={`flex-1 px-4 py-2.5 text-[11px] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${activePolicyTab === tab ? 'bg-white text-[#23471d] border-b-2 border-[#23471d]' : 'text-slate-500 hover:text-[#23471d]'}`}>
                      {tab === 'info' && <CheckCircle size={14} />}
                      {tab === 'payment' && <FileText size={14} />}
                      {tab === 'refund' && <AlertTriangle size={14} />}
                      {tab === 'privacy' && <Lock size={14} />}
                      {tab === 'rules' && <Scale size={14} />}
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar overscroll-contain">
                  <div className="bg-slate-50 border border-slate-100 rounded-lg p-5 text-[11px] text-slate-600 leading-relaxed  min-h-[300px]">
                    {activePolicyTab === 'info' && (
                      <div className="space-y-4">
                        <h4 className="font-bold text-[#23471d] uppercase tracking-widest">General Declaration</h4>
                        <p>As an international applicant for the 9th International Health & Wellness Expo 2026, you are required to confirm the accuracy of all submitted documents and information.</p>
                      </div>
                    )}
                    {activePolicyTab !== 'info' && policiesData[activePolicyTab]?.content ? <div dangerouslySetInnerHTML={{ __html: policiesData[activePolicyTab].content }} /> : (activePolicyTab !== 'info' && <div className="flex flex-col items-center justify-center py-12 text-slate-400 gap-4"><Loader2 size={32} className="animate-spin" /><p className="font-bold uppercase tracking-[0.2em]">Fetching details...</p></div>)}
                  </div>

                  <div className="p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl">
                    {activePolicyTab === 'info' && <label className="flex items-start gap-3 cursor-pointer"><Checkbox checked={policyConsents.infoAccurate} onCheckedChange={(v: any) => setPolicyConsents(p => ({ ...p, infoAccurate: !!v }))} /><span className="text-[11px] font-bold uppercase">I confirm all submitted information is true and accurate.</span></label>}
                    {activePolicyTab === 'payment' && <label className="flex items-start gap-3 cursor-pointer"><Checkbox checked={policyConsents.paymentTerms} onCheckedChange={(v: any) => setPolicyConsents(p => ({ ...p, paymentTerms: !!v }))} /><span className="text-[11px] font-bold uppercase">I agree to Terms & Conditions</span></label>}
                    {activePolicyTab === 'refund' && <label className="flex items-start gap-3 cursor-pointer"><Checkbox checked={policyConsents.refundPolicy} onCheckedChange={(v: any) => setPolicyConsents(p => ({ ...p, refundPolicy: !!v }))} /><span className="text-[11px] font-bold uppercase">I accept Cancellation & Refund Policy</span></label>}
                    {activePolicyTab === 'privacy' && <label className="flex items-start gap-3 cursor-pointer"><Checkbox checked={policyConsents.privacyPolicy} onCheckedChange={(v: any) => setPolicyConsents(p => ({ ...p, privacyPolicy: !!v }))} /><span className="text-[11px] font-bold uppercase">I accept Privacy Policy</span></label>}
                    {activePolicyTab === 'rules' && <label className="flex items-start gap-3 cursor-pointer"><Checkbox checked={policyConsents.participationRules} onCheckedChange={(v: any) => setPolicyConsents(p => ({ ...p, participationRules: !!v }))} /><span className="text-[11px] font-bold uppercase">I agree to International Participation Rules</span></label>}
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end gap-4">
                  <Button variant="outline" onClick={() => setShowTermsModal(false)} className="rounded-full px-8 uppercase text-[11px] font-bold">Cancel</Button>
                  {activePolicyTab !== 'rules' ? (
                    <Button onClick={() => setActivePolicyTab(activePolicyTab === 'info' ? 'payment' : activePolicyTab === 'payment' ? 'refund' : activePolicyTab === 'refund' ? 'privacy' : 'rules')} disabled={!policyConsents[activePolicyTab === 'info' ? 'infoAccurate' : activePolicyTab === 'payment' ? 'paymentTerms' : activePolicyTab === 'refund' ? 'refundPolicy' : 'privacyPolicy']} className="rounded-full px-12 bg-[#23471d] uppercase text-[11px] font-bold shadow-lg">Next Step →</Button>
                  ) : (
                    <Button onClick={() => { setShowTermsModal(false); setShowPaymentConfirmModal(true); }} disabled={!policyConsents.participationRules} className="rounded-full px-12 bg-emerald-600 uppercase text-[11px] font-bold shadow-lg">Proceed to Pay</Button>
                  )}
                </div>
              </motion.div>
            </div>
          )
        }
      </AnimatePresence >

      {/* Payment Confirm Modal */}
      <AnimatePresence>
        {
          showPaymentConfirmModal && tempSelectedPackage && (
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 backdrop-blur-md bg-black/60">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white w-full max-w-md rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-[#1B5E20] p-6 text-white text-center">
                  <CreditCard size={32} className="mx-auto mb-2" />
                  <h3 className="text-xl font-bold uppercase tracking-wider">Confirm Payment</h3>
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-2 border-b pb-4">
                    <div className="flex justify-between"><span>Plan:</span><span className="font-bold">{tempSelectedPackage.name}</span></div>
                    <div className="flex justify-between"><span>Fee:</span><span className="font-bold">${tempSelectedPackage.price}</span></div>
                    <div className="flex justify-between text-[#1B5E20] font-black uppercase tracking-widest pt-2"><span>Total (+Tax/Fee):</span><span>${Math.round(tempSelectedPackage.price * 1.025)}</span></div>
                  </div>
                  <Button onClick={initiateRazorpayPayment} disabled={isSubmitting} className="w-full h-14 rounded-xl bg-[#1B5E20] hover:bg-[#3b6315] text-white font-black uppercase tracking-[0.2em] shadow-xl text-white">Pay Now</Button>
                </div>
              </motion.div>
            </div>
          )
        }
      </AnimatePresence>
    </>
  );
};

export default InternationalBuyerRegistration;
