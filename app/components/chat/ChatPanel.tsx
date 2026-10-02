"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { API_URL } from "@/lib/api";
import { clearChatSession, newSessionId, readChatSession, saveChatSession } from "./chatSession";

const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_API_URL || `${API_URL}/chat`;
const FALLBACK = "Maaf kijiye, abhi reply nahi de pa raha. Kripya +91 96549 00525 par call ya WhatsApp karein.";

const QUICK_QUESTIONS = [
    "Stall kaise book karein?",
    "Visitor registration link?",
    "Buyer-Seller Meet kya hai?",
    "Contact number?",
];

type Message = { role: "user" | "assistant"; content: string };

// ─── Minimal, safe markdown: [text](https://…), bare https:// links, **bold**, "- " bullets ───

const INLINE = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|\*\*([^*]+)\*\*|(https?:\/\/[^\s)]+)/g;

const renderInline = (text: string, keyPrefix: string): React.ReactNode[] => {
    const nodes: React.ReactNode[] = [];
    let last = 0;
    let i = 0;
    for (const match of text.matchAll(INLINE)) {
        const start = match.index ?? 0;
        if (start > last) nodes.push(text.slice(last, start));
        const [, linkText, linkUrl, bold, bareUrl] = match;
        const key = `${keyPrefix}-${i++}`;
        if (linkUrl || bareUrl) {
            nodes.push(
                <a
                    key={key}
                    href={linkUrl || bareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3b8c2a] font-semibold underline underline-offset-2 break-words hover:text-[#14532d]"
                >
                    {linkText || bareUrl}
                </a>
            );
        } else if (bold) {
            nodes.push(<strong key={key}>{bold}</strong>);
        }
        last = start + match[0].length;
    }
    if (last < text.length) nodes.push(text.slice(last));
    return nodes;
};

const MessageText: React.FC<{ text: string }> = ({ text }) => (
    <>
        {text.split("\n").map((line, idx) => {
            const bullet = /^\s*[-*•]\s+/.test(line);
            const content = bullet ? line.replace(/^\s*[-*•]\s+/, "") : line;
            if (!content.trim()) return <div key={idx} className="h-2" />;
            return (
                <div key={idx} className={bullet ? "flex gap-1.5" : undefined}>
                    {bullet && <span aria-hidden="true">•</span>}
                    <span>{renderInline(content, String(idx))}</span>
                </div>
            );
        })}
    </>
);

// ─── Small UI pieces ─────────────────────────────────────────────────────────

const BotAvatar: React.FC = () => (
    <div className="w-8 h-8 shrink-0 rounded-full bg-white shadow-sm ring-2 ring-[#F2B40E]/60 flex items-center justify-center" aria-hidden="true">
        <Image src="/android-chrome-192x192.png" alt="" width={24} height={24} className="w-6 h-6 object-contain" />
    </div>
);

const iconProps = {
    className: "w-4 h-4",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
} as const;

const LEAD_FIELDS = [
    {
        key: "name",
        label: "Full Name",
        type: "text",
        autoComplete: "name",
        placeholder: "Aapka naam",
        icon: (
            <svg {...iconProps}>
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21a8 8 0 0 1 16 0" />
            </svg>
        ),
    },
    {
        key: "phone",
        label: "Mobile Number",
        type: "tel",
        autoComplete: "tel-national",
        placeholder: "10-digit mobile number",
        icon: (
            <svg {...iconProps}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
] as const;

type LeadForm = { name: string; phone: string };
type LeadErrors = Partial<Record<keyof LeadForm, string>>;

const NAME_PATTERN = /^\p{L}[\p{L}\p{M} .'-]*$/u;

/** Letters (any language), spaces, dots, apostrophes and hyphens only — digits are dropped as you type */
const cleanName = (value: string) => value.replace(/[^\p{L}\p{M} .'-]/gu, "").replace(/^\s+/, "").replace(/\s{2,}/g, " ");

/** Digits only, max 10; a pasted "+91 98765 43210" or "098765..." becomes "9876543210" */
const cleanMobile = (value: string) => {
    let digits = value.replace(/\D/g, "");
    if (digits.length > 10 && digits.startsWith("91")) digits = digits.slice(2);
    if (digits.length > 10 && digits.startsWith("0")) digits = digits.slice(1);
    return digits.slice(0, 10);
};

const validateLead = ({ name, phone }: LeadForm): LeadErrors => {
    const errors: LeadErrors = {};
    const n = name.trim();
    if (!n) errors.name = "Please enter your name.";
    else if (n.length < 2) errors.name = "Name is too short.";
    else if (!NAME_PATTERN.test(n)) errors.name = "Name can contain letters only.";

    if (!phone) errors.phone = "Please enter your mobile number.";
    else if (phone.length !== 10) errors.phone = "Mobile number must be exactly 10 digits.";
    else if (!/^[6-9]/.test(phone)) errors.phone = "Mobile number must start with 6, 7, 8 or 9.";
    return errors;
};

// ─── Panel ───────────────────────────────────────────────────────────────────

type Props = { open: boolean; onClose: () => void };

const ChatPanel: React.FC<Props> = ({ open, onClose }) => {
    // Resume this browser's chat only while it is still active (see chatSession.ts)
    const [initial] = useState(readChatSession);
    const [sessionId, setSessionId] = useState(() => (initial.status === "active" ? initial.sessionId : newSessionId()));
    const [visitorName, setVisitorName] = useState<string | null>(initial.status === "active" ? initial.name : null);
    const [form, setForm] = useState<LeadForm>({ name: "", phone: "" });
    const [fieldErrors, setFieldErrors] = useState<LeadErrors>({});
    const [formError, setFormError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (el) el.scrollTop = el.scrollHeight;
    }, [messages, loading]);

    useEffect(() => {
        if (open && visitorName && !loading) inputRef.current?.focus();
    }, [open, visitorName, loading]);

    // Lock the page behind the chat while it is open
    useEffect(() => {
        if (!open) return;
        const html = document.documentElement;
        const body = document.body;
        const prev = { html: html.style.overflow, body: body.style.overflow, padding: body.style.paddingRight };
        const scrollbar = window.innerWidth - html.clientWidth;
        html.style.overflow = "hidden";
        body.style.overflow = "hidden";
        if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
        return () => {
            html.style.overflow = prev.html;
            body.style.overflow = prev.body;
            body.style.paddingRight = prev.padding;
        };
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    const submitLead = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormError("");
        const errors = validateLead(form);
        setFieldErrors(errors);
        if (Object.keys(errors).length) return;
        const name = form.name.trim();
        const phone = form.phone;

        setSubmitting(true);
        try {
            const res = await fetch(`${CHAT_URL}/lead`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sessionId, name, phone, pageUrl: window.location.href }),
            });
            if (!res.ok) {
                const json = await res.json().catch(() => null);
                throw new Error(json?.errors?.[0]?.split(": ").pop() || json?.message || "");
            }
            saveChatSession(sessionId, name);
            setVisitorName(name);
        } catch (err) {
            setFormError((err as Error).message || "Kuch gadbad ho gayi. Kripya dobara try karein.");
        } finally {
            setSubmitting(false);
        }
    };

    const setLastReply = (update: (text: string) => string) =>
        setMessages((prev) => {
            const next = [...prev];
            const last = next[next.length - 1];
            next[next.length - 1] = { ...last, content: update(last.content) };
            return next;
        });

    /** Forget the current visitor and show the details form for the next person. */
    const startNewChat = (notice = "") => {
        clearChatSession();
        setSessionId(newSessionId());
        setVisitorName(null);
        setMessages([]);
        setInput("");
        setForm({ name: "", phone: "" });
        setFieldErrors({});
        setFormError(notice);
    };

    const sendMessage = async (text: string) => {
        const message = text.trim().slice(0, 1000);
        if (!message || loading || !visitorName) return;

        // Panel left open for 30+ minutes (or browser restarted) — treat it as a new visitor
        if (readChatSession().status !== "active") {
            startNewChat("Session expired. Please share your details again to continue.");
            return;
        }
        saveChatSession(sessionId, visitorName);

        setInput("");
        setLoading(true);
        setMessages((prev) => [...prev, { role: "user", content: message }, { role: "assistant", content: "" }]);

        try {
            const res = await fetch(CHAT_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sessionId, message, pageUrl: window.location.href }),
            });

            if (!res.ok || !res.body) {
                const json = await res.json().catch(() => null);
                // The server lost this visitor's details (e.g. new device) — ask for them again
                if (res.status === 400 && /details|mobile number first/i.test(json?.message || "")) {
                    startNewChat();
                    return;
                }
                setLastReply(() => json?.message || FALLBACK);
                return;
            }

            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let buffer = "";
            let gotText = false;

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                buffer += decoder.decode(value, { stream: true });

                // SSE events are separated by a blank line
                const events = buffer.split("\n\n");
                buffer = events.pop() || "";
                for (const evt of events) {
                    const line = evt.split("\n").find((l) => l.startsWith("data:"));
                    if (!line) continue;
                    let data: { delta?: string; done?: boolean; error?: string };
                    try {
                        data = JSON.parse(line.slice(5).trim());
                    } catch {
                        continue;
                    }
                    if (data.delta) {
                        gotText = true;
                        setLastReply((t) => t + data.delta);
                    } else if (data.error) {
                        setLastReply((t) => (t ? `${t}\n\n${data.error}` : data.error!));
                        gotText = true;
                    }
                }
            }
            if (!gotText) setLastReply(() => FALLBACK);
        } catch {
            setLastReply((t) => t || FALLBACK);
        } finally {
            setLoading(false);
        }
    };

    const last = messages[messages.length - 1];
    const waitingForFirstWord = loading && last?.role === "assistant" && !last.content;

    return (
        <div
            role="dialog"
            aria-modal="false"
            aria-label="Organic Mitra chat"
            aria-hidden={!open}
            inert={!open}
            className={`fixed z-[110] right-4 sm:right-6 inset-y-0 my-auto w-[360px] h-[540px] max-h-[calc(100svh-32px)] max-[480px]:inset-x-0 max-[480px]:top-auto max-[480px]:bottom-0 max-[480px]:my-0 max-[480px]:w-full max-[480px]:h-[88svh] max-[480px]:max-h-none flex flex-col bg-white rounded-[22px] max-[480px]:rounded-b-none shadow-[0_28px_70px_-15px_rgba(11,41,18,0.55)] ring-1 ring-black/5 overflow-hidden font-inter text-[14px] leading-[1.55] origin-right transition-all duration-300 ease-out ${
                open ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-4 scale-95 pointer-events-none invisible"
            }`}
        >
            {/* ── Header ── */}
            <div className="relative shrink-0 overflow-hidden bg-[#fff8e6] text-[#0b2912] border-b border-[#F2B40E]/30">
                {/* website-style accent bar: green → gold → saffron */}
                <div className="h-[3px] bg-gradient-to-r from-[#3b8c2a] via-[#F2B40E] to-[#f58220]" aria-hidden="true" />

                {/* decorative leaf + glow */}
                <svg className="absolute -right-4 -bottom-6 w-28 h-28 text-[#3b8c2a]/10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                </svg>
                <span className="absolute -top-12 left-1/3 w-32 h-32 rounded-full bg-[#F2B40E]/20 blur-2xl" aria-hidden="true" />

                <div className="relative flex items-center gap-3 px-4 py-3">
                    <div className="relative shrink-0">
                        <div className="w-11 h-11 rounded-full bg-white ring-2 ring-[#F2B40E] ring-offset-2 ring-offset-[#fff8e6] flex items-center justify-center shadow-md">
                            <Image src="/android-chrome-192x192.png" alt="Bharat Organic Expo logo" width={36} height={36} className="w-8 h-8 object-contain" />
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#22c55e] border-2 border-[#fff8e6]" aria-hidden="true" />
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                            <p className="font-poppins font-semibold text-[16px] leading-tight text-[#1b5e20]">Organic Mitra</p>
                        </div>
                        <p className="text-[12px] text-[#7a4f00] truncate">Bharat Organic Expo 2027</p>
                        <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                            <span className="text-[11px] text-[#15803d] font-medium flex items-center gap-1">
                                <span className="relative flex w-1.5 h-1.5">
                                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75 animate-ping" />
                                    <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                                </span>
                                Online
                            </span>
                            {/* Shared computer: the next person starts their own chat and lead */}
                            {visitorName && (
                                <button
                                    type="button"
                                    onClick={() => startNewChat()}
                                    disabled={loading}
                                    title={`Not ${visitorName}? Start a new chat with your own details`}
                                    className="inline-flex items-center gap-1 rounded-full border border-[#3b8c2a]/30 bg-white hover:bg-[#3b8c2a] hover:border-[#3b8c2a] hover:text-white px-2 py-0.5 text-[11px] font-medium text-[#1b5e20] transition-colors disabled:opacity-50"
                                >
                                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
                                        <path d="M3 3v5h5" />
                                    </svg>
                                    Not you? New chat
                                </button>
                            )}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close chat"
                        className="self-start w-8 h-8 rounded-full text-[#7a4f00] bg-[#F2B40E]/20 hover:bg-[#f58220] hover:text-white flex items-center justify-center transition-colors"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                            <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            {!visitorName ? (
                /* ── Step 1: visitor details ── */
                <form
                    onSubmit={submitLead}
                    noValidate
                    className="flex-1 overflow-y-auto overscroll-contain bg-[#f7faf5] bg-[radial-gradient(#e3ecdf_1px,transparent_1px)] bg-[size:16px_16px] px-4 pt-3.5 pb-3 flex flex-col gap-3"
                    data-lenis-prevent
                >
                    <div className="flex items-start gap-2.5">
                        <BotAvatar />
                        <div className="bg-white rounded-2xl rounded-tl-md shadow-sm border border-[#3b8c2a]/10 px-3.5 py-2 text-[13.5px] text-slate-700">
                            Namaste! 🙏 I&apos;m <strong className="text-[#1b5e20]">Organic Mitra</strong>. Please share your details to start
                            the chat, so our team can assist you better.
                        </div>
                    </div>

                    <div className="relative bg-white rounded-2xl shadow-[0_4px_20px_-6px_rgba(11,41,18,0.15)] border border-[#3b8c2a]/10 overflow-hidden">
                        <div className="h-[3px] bg-gradient-to-r from-[#3b8c2a] to-[#f58634]" aria-hidden="true" />
                        <div className="p-3.5 flex flex-col gap-2.5">
                            {LEAD_FIELDS.map((f) => {
                                const isPhone = f.key === "phone";
                                const error = fieldErrors[f.key];
                                return (
                                    <label key={f.key} className="flex flex-col gap-1">
                                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0b2912]">
                                            {f.label} <span className="text-[#f58220]">*</span>
                                        </span>
                                        <span className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3b8c2a]" aria-hidden="true">
                                                {f.icon}
                                            </span>
                                            {isPhone && (
                                                <span className="absolute left-9 top-1/2 -translate-y-1/2 text-[14px] font-semibold text-[#1b5e20] border-r border-slate-300 pr-2" aria-hidden="true">
                                                    +91
                                                </span>
                                            )}
                                            <input
                                                type={f.type}
                                                required
                                                autoComplete={f.autoComplete}
                                                inputMode={isPhone ? "numeric" : "text"}
                                                placeholder={f.placeholder}
                                                maxLength={isPhone ? 10 : 60}
                                                value={form[f.key]}
                                                aria-invalid={!!error}
                                                aria-describedby={error ? `lead-${f.key}-error` : undefined}
                                                onChange={(e) => {
                                                    const value = isPhone ? cleanMobile(e.target.value) : cleanName(e.target.value);
                                                    setForm((prev) => ({ ...prev, [f.key]: value }));
                                                    if (error) setFieldErrors((prev) => ({ ...prev, [f.key]: undefined }));
                                                }}
                                                onPaste={
                                                    isPhone
                                                        ? (e) => {
                                                              // maxLength would cut "+91 98765 43210" before it can be cleaned
                                                              e.preventDefault();
                                                              setForm((prev) => ({ ...prev, phone: cleanMobile(e.clipboardData.getData("text")) }));
                                                          }
                                                        : undefined
                                                }
                                                className={`w-full ${isPhone ? "pl-[78px] pr-14" : "pl-10 pr-3"} py-2.5 rounded-xl bg-[#f7faf5] border text-[14px] text-slate-800 placeholder:text-slate-400 outline-none transition focus:bg-white focus:ring-4 ${
                                                    error
                                                        ? "border-red-400 focus:border-red-500 focus:ring-red-500/15"
                                                        : "border-[#dfe8db] focus:border-[#3b8c2a] focus:ring-[#3b8c2a]/15"
                                                }`}
                                            />
                                            {isPhone && (
                                                <span
                                                    className={`absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-semibold ${form.phone.length === 10 ? "text-[#3b8c2a]" : "text-slate-400"}`}
                                                    aria-hidden="true"
                                                >
                                                    {form.phone.length}/10
                                                </span>
                                            )}
                                        </span>
                                        {error && (
                                            <span id={`lead-${f.key}-error`} role="alert" className="text-[11.5px] text-red-600">
                                                {error}
                                            </span>
                                        )}
                                    </label>
                                );
                            })}

                            {formError && (
                                <p role="alert" className="text-[12.5px] text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                                    {formError}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={submitting}
                                className="group relative mt-1 overflow-hidden py-2.5 rounded-xl bg-gradient-to-r from-[#3b8c2a] to-[#1b5e20] text-white font-poppins font-semibold text-[13.5px] uppercase tracking-wider shadow-md shadow-[#3b8c2a]/30 transition hover:shadow-lg hover:shadow-[#3b8c2a]/40 active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-2"
                            >
                                {/* website-style shimmer */}
                                <span className="absolute inset-y-0 -left-1/3 w-1/4 skew-x-[-20deg] bg-white/25 animate-[mitra-shimmer_2.6s_ease-in-out_infinite]" aria-hidden="true" />
                                {submitting ? (
                                    <>
                                        <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" aria-hidden="true" />
                                        Please wait...
                                    </>
                                ) : (
                                    <>
                                        Start Chat
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <path d="M5 12h14M13 6l6 6-6 6" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
                        <svg className="w-3.5 h-3.5 text-[#3b8c2a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        Your details are safe with us.
                    </p>
                </form>
            ) : (
                /* ── Step 2: chat ── */
                <>
                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto overscroll-contain bg-[#f7faf5] bg-[radial-gradient(#e3ecdf_1px,transparent_1px)] bg-[size:16px_16px] px-4 pt-4 pb-3 flex flex-col gap-3"
                        data-lenis-prevent
                        aria-live="polite"
                    >
                        <div className="flex items-start gap-2.5">
                            <BotAvatar />
                            <div className="max-w-[80%] bg-white rounded-2xl rounded-tl-md shadow-sm border border-[#3b8c2a]/10 px-3.5 py-2.5 text-slate-700">
                                Namaste <strong className="text-[#1b5e20]">{visitorName}</strong>! 🌿 Bharat Organic Expo 2027 ke baare mein kuch bhi
                                poochhiye: stall booking, registration, Buyer-Seller Meet, venue ya dates.
                            </div>
                        </div>

                        {messages.length === 0 && (
                            <div className="pl-[42px] flex flex-col gap-2">
                                <p className="text-[10.5px] font-bold uppercase tracking-wider text-[#f58220]">Popular questions</p>
                                <div className="flex flex-wrap gap-2">
                                    {QUICK_QUESTIONS.map((q) => (
                                        <button
                                            key={q}
                                            type="button"
                                            onClick={() => sendMessage(q)}
                                            className="px-3 py-1.5 rounded-full bg-white border border-[#F2B40E]/70 text-[#0b2912] text-[12.5px] font-medium shadow-sm transition hover:bg-[#F2B40E] hover:border-[#F2B40E] hover:-translate-y-0.5"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {messages.map((m, i) =>
                            m.role === "assistant" && !m.content ? null : m.role === "user" ? (
                                <div
                                    key={i}
                                    className="self-end max-w-[80%] bg-gradient-to-br from-[#3b8c2a] to-[#1b5e20] text-white rounded-2xl rounded-tr-md shadow-sm px-3.5 py-2.5 whitespace-pre-wrap break-words"
                                >
                                    {m.content}
                                </div>
                            ) : (
                                <div key={i} className="flex items-start gap-2.5">
                                    <BotAvatar />
                                    <div className="max-w-[80%] bg-white rounded-2xl rounded-tl-md shadow-sm border border-[#3b8c2a]/10 border-l-[3px] border-l-[#3b8c2a] px-3.5 py-2.5 text-slate-700 break-words">
                                        <MessageText text={m.content} />
                                    </div>
                                </div>
                            )
                        )}

                        {waitingForFirstWord && (
                            <div className="flex items-start gap-2.5" aria-label="Organic Mitra is typing">
                                <BotAvatar />
                                <div className="bg-white rounded-2xl rounded-tl-md shadow-sm border border-[#3b8c2a]/10 px-4 py-3.5 flex gap-1.5">
                                    {["#3b8c2a", "#F2B40E", "#f58220"].map((c, d) => (
                                        <span key={c} className="w-2 h-2 rounded-full animate-bounce" style={{ background: c, animationDelay: `${d * 150}ms` }} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            sendMessage(input);
                        }}
                        className="shrink-0 bg-white border-t border-[#3b8c2a]/10 px-3 pt-2.5 pb-2"
                    >
                        <div className="flex items-center gap-2 bg-[#f7faf5] rounded-full border border-[#dfe8db] pl-4 pr-1.5 py-1.5 transition focus-within:border-[#3b8c2a] focus-within:ring-4 focus-within:ring-[#3b8c2a]/15 focus-within:bg-white">
                            <input
                                ref={inputRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                disabled={loading}
                                maxLength={1000}
                                placeholder={loading ? "Organic Mitra is typing..." : "Type your question..."}
                                aria-label="Type your message"
                                className="flex-1 min-w-0 bg-transparent text-[14px] text-slate-800 placeholder:text-slate-400 outline-none disabled:cursor-not-allowed"
                            />
                            <button
                                type="submit"
                                disabled={loading || !input.trim()}
                                aria-label="Send message"
                                className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-[#3b8c2a] to-[#1b5e20] text-white flex items-center justify-center shadow-md transition hover:brightness-110 active:scale-95 disabled:opacity-40 disabled:shadow-none"
                            >
                                <svg className="w-4 h-4 -ml-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m22 2-7 20-4-9-9-4z" />
                                    <path d="M22 2 11 13" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-[10px] text-slate-400 text-center mt-1.5">
                            Powered by <span className="font-semibold text-[#3b8c2a]">Bharat Organic Expo</span>{" "}
                            <span className="font-semibold text-[#f58220]">2027</span>
                        </p>
                    </form>
                </>
            )}
        </div>
    );
};

export default ChatPanel;
