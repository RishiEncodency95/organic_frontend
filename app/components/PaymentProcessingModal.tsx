import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Loader2, ShieldCheck } from 'lucide-react';

type Status = 'processing' | 'success' | 'failed';

interface PaymentProcessingModalProps {
    status: Status | null;
    stallNo?: string;
    amount?: string;
    onClose?: () => void;
}

export default function PaymentProcessingModal({ status, stallNo, amount, onClose }: PaymentProcessingModalProps) {
    if (!status) return null;

    return (
        <AnimatePresence>
            <motion.div
                key="payment-modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            >
                <motion.div
                    key="payment-modal-card"
                    initial={{ opacity: 0, scale: 0.92, y: 24 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 24 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                    className="bg-white w-full max-w-sm shadow-2xl border border-slate-200 overflow-hidden"
                >
                    {/* Top accent bar */}
                    <div className={`h-1.5 w-full ${
                        status === 'processing' ? 'bg-[#23471d]' :
                        status === 'success' ? 'bg-emerald-500' :
                        'bg-rose-500'
                    }`} />

                    <div className="p-8 flex flex-col items-center text-center gap-5">

                        {/* Icon */}
                        {status === 'processing' && (
                            <div className="relative flex items-center justify-center w-20 h-20">
                                <div className="absolute inset-0 rounded-full border-4 border-[#23471d]/10" />
                                <motion.div
                                    className="absolute inset-0 rounded-full border-4 border-t-[#23471d] border-r-transparent border-b-transparent border-l-transparent"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                />
                                <ShieldCheck className="w-8 h-8 text-[#23471d]" />
                            </div>
                        )}

                        {status === 'success' && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center"
                            >
                                <CheckCircle className="w-10 h-10 text-emerald-500" />
                            </motion.div>
                        )}

                        {status === 'failed' && (
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                className="w-20 h-20 rounded-full bg-rose-50 border-2 border-rose-200 flex items-center justify-center"
                            >
                                <XCircle className="w-10 h-10 text-rose-500" />
                            </motion.div>
                        )}

                        {/* Text */}
                        {status === 'processing' && (
                            <>
                                <div>
                                    <p className="text-[10px] font-black text-[#23471d] uppercase tracking-[0.25em] mb-2">Verifying Payment</p>
                                    <h2 className="text-xl font-black text-slate-900 leading-tight">Processing your booking</h2>
                                    <p className="text-[12px] text-slate-500 font-medium mt-2 leading-relaxed">
                                        Please wait while we confirm your payment and secure your stall. Do not close this window.
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 w-full justify-center">
                                    <Loader2 className="w-3.5 h-3.5 text-slate-400 animate-spin" />
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Communicating with server...</span>
                                </div>
                            </>
                        )}

                        {status === 'success' && (
                            <>
                                <div>
                                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.25em] mb-2">Booking Confirmed</p>
                                    <h2 className="text-xl font-black text-slate-900 leading-tight">Payment Successful!</h2>
                                    <p className="text-[12px] text-slate-500 font-medium mt-2 leading-relaxed">
                                        Your stall has been booked. A confirmation email and WhatsApp message will be sent shortly.
                                    </p>
                                </div>
                                {(stallNo || amount) && (
                                    <div className="w-full bg-emerald-50 border border-emerald-200 p-4 space-y-2">
                                        {stallNo && (
                                            <div className="flex justify-between items-center">
                                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Stall No.</span>
                                                <span className="text-sm font-black text-[#d26019]">{stallNo}</span>
                                            </div>
                                        )}
                                        {amount && (
                                            <div className="flex justify-between items-center">
                                                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Amount Paid</span>
                                                <span className="text-sm font-black text-emerald-700">{amount}</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </>
                        )}

                        {status === 'failed' && (
                            <>
                                <div>
                                    <p className="text-[10px] font-black text-rose-600 uppercase tracking-[0.25em] mb-2">Verification Failed</p>
                                    <h2 className="text-xl font-black text-slate-900 leading-tight">Something went wrong</h2>
                                    <p className="text-[12px] text-slate-500 font-medium mt-2 leading-relaxed">
                                        Your payment was received but we couldn't confirm the booking. Please contact support with your payment ID.
                                    </p>
                                </div>
                                {onClose && (
                                    <button
                                        onClick={onClose}
                                        className="w-full py-2.5 bg-rose-600 text-white text-[11px] font-black uppercase tracking-widest hover:bg-rose-700 transition-all"
                                    >
                                        Close & Contact Support
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
