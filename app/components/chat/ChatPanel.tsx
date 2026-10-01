"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { API_URL } from "@/lib/api";

const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_API_URL || `${API_URL}/chat`;
const SESSION_KEY = "organicMitraSessionId";
const LEAD_KEY = "organicMitraLead";
const FALLBACK = "Maaf kijiye, abhi reply nahi de pa raha. Kripya +91 96549 00525 par call ya WhatsApp karein.";

const QUICK_QUESTIONS = [
    "Stall kaise book karein?",
    "Visitor registration link?",
    "Buyer-Seller Meet kya hai?",
    "Contact number?",
];

type Message = { role: "user" | "assistant"; content: string };

const storage = {
    get(key: string): string | null {
        try {
            return window.localStorage.getItem(key);
        } catch {
            return null;
        }
    },
    set(key: string, value: string) {
        try {
            window.localStorage.setItem(key, value);
        } catch {
            // Private mode / blocked storage — the chat still works for this visit
        }
    },
    remove(key: string) {
        try {
            window.localStorage.removeItem(key);
        } catch {
            // ignore
        }
    },
};

const getSessionId = (): string => {
    const saved = storage.get(SESSION_KEY);
    if (saved) return saved;
    let id: string;
    try {
        id = crypto.randomUUID();
    } catch {
        id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    }
    storage.set(SESSION_KEY, id);
    return id;
};

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
    <div className="w-8 h-8 shrink-0 rounded-full bg-white shadow-sm ring-1 ring-[#3b8c2a]/20 flex items-center justify-center" aria-hidden="true">
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
        key: "email",
        label: "Email",
        type: "email",
        autoComplete: "email",
        placeholder: "you@example.com",
        icon: (
            <svg {...iconProps}>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 6-10 7L2 6" />
            </svg>
        ),
    },
    {
        key: "phone",
        label: "Phone / WhatsApp",
        type: "tel",
        autoComplete: "tel",
        placeholder: "98XXXXXXXX",
        icon: (
            <svg {...iconProps}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
] as const;

// ─── Panel ───────────────────────────────────────────────────────────────────

type Props = { open: boolean; onClose: () => void };

const ChatPanel: React.FC<Props> = ({ open, onClose }) => {
    const [sessionId] = useState(getSessionId);
    const [visitorName, setVisitorName] = useState<string | null>(() => storage.get(LEAD_KEY));
    const [form, setForm] = useState({ name: "", email: "", phone: "" });
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
        const name = form.name.trim();
        const email = form.email.trim();
        const phone = form.phone.trim();
        if (name.length < 2) return setFormError("Kripya apna naam likhein.");
        if (!/^\S+@\S+\.\S+$/.test(email)) return setFormError("Kripya sahi email likhein.");
        if (!/^\d{10,15}$/.test(phone.replace(/[\s+()-]/g, ""))) return setFormError("Kripya sahi phone number likhein.");

        setSubmitting(true);
        try {
            const res = await fetch(`${CHAT_URL}/lead`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sessionId, name, email, phone, pageUrl: window.location.href }),
            });
            if (!res.ok) {
                const json = await res.json().catch(() => null);
                throw new Error(json?.errors?.[0]?.split(": ").pop() || json?.message || "");
            }
            storage.set(LEAD_KEY, name);
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

    const sendMessage = async (text: string) => {
        const message = text.trim().slice(0, 1000);
        if (!message || loading) return;

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
                if (res.status === 400 && /details|name, email/i.test(json?.message || "")) {
                    storage.remove(LEAD_KEY);
                    setVisitorName(null);
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
            className={`fixed z-[110] right-4 sm:right-6 bottom-[150px] sm:bottom-[144px] lg:bottom-28 w-[360px] h-[520px] max-h-[calc(100svh-176px)] lg:max-h-[calc(100svh-136px)] max-[480px]:inset-x-0 max-[480px]:bottom-0 max-[480px]:w-full max-[480px]:h-[88svh] max-[480px]:max-h-none flex flex-col bg-[#f6f9f3] rounded-3xl max-[480px]:rounded-b-none shadow-[0_24px_60px_-12px_rgba(20,83,45,0.45)] ring-1 ring-black/5 overflow-hidden font-inter text-[14px] leading-[1.55] origin-bottom-right transition-all duration-300 ease-out ${
                open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none invisible"
            }`}
        >
            {/* Header */}
            <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-[#14532d] via-[#1f6b34] to-[#3b8c2a] text-white px-4 pt-3 pb-5">
                {/* soft decorative circles */}
                <span className="absolute -top-10 -right-8 w-32 h-32 rounded-full bg-white/10" aria-hidden="true" />
                <span className="absolute -bottom-14 left-10 w-28 h-28 rounded-full bg-[#F3B71B]/15" aria-hidden="true" />

                <div className="relative flex items-center gap-3">
                    <div className="relative shrink-0">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center">
                            <Image src="/android-chrome-192x192.png" alt="Bharat Organic Expo logo" width={40} height={40} className="w-9 h-9 object-contain" />
                        </div>
                        <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#4ade80] border-2 border-[#1f6b34]" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="font-poppins font-semibold text-[16px] leading-tight tracking-wide">Organic Mitra</p>
                        <p className="text-[12px] text-white/80 truncate">Bharat Organic Expo 2027</p>
                        <p className="text-[11px] text-[#bbf7d0] mt-0.5 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" aria-hidden="true" />
                            Online · turant jawab
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close chat"
                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                            <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            {!visitorName ? (
                /* Step 1 — visitor details */
                <form
                    onSubmit={submitLead}
                    noValidate
                    className="relative flex-1 overflow-y-auto overscroll-contain -mt-3 rounded-t-3xl bg-[#f6f9f3] px-4 pt-4 pb-3 flex flex-col gap-3"
                    data-lenis-prevent
                >
                    <div className="flex items-start gap-2.5">
                        <BotAvatar />
                        <div className="bg-white rounded-2xl rounded-tl-md shadow-sm border border-[#3b8c2a]/10 px-3.5 py-2 text-slate-700">
                            Namaste! 🙏 I&apos;m <strong className="text-[#14532d]">Organic Mitra</strong>. Please share your details to start
                            the chat, so our team can assist you better.
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-[#3b8c2a]/10 p-3.5 flex flex-col gap-2.5">
                        {LEAD_FIELDS.map((f) => (
                            <label key={f.key} className="flex flex-col gap-1.5">
                                <span className="sr-only">{f.label}</span>
                                <span className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3b8c2a]" aria-hidden="true">
                                        {f.icon}
                                    </span>
                                    <input
                                        type={f.type}
                                        required
                                        autoComplete={f.autoComplete}
                                        placeholder={f.placeholder}
                                        maxLength={f.key === "phone" ? 20 : 150}
                                        value={form[f.key]}
                                        onChange={(e) => setForm((prev) => ({ ...prev, [f.key]: e.target.value }))}
                                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#f6f9f3] border border-slate-200 text-[14px] text-slate-800 placeholder:text-slate-400 outline-none transition focus:bg-white focus:border-[#3b8c2a] focus:ring-4 focus:ring-[#3b8c2a]/15"
                                    />
                                </span>
                            </label>
                        ))}

                        {formError && (
                            <p role="alert" className="text-[13px] text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                                {formError}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={submitting}
                            className="mt-0.5 py-2.5 rounded-xl bg-gradient-to-r from-[#3b8c2a] to-[#14532d] text-white font-poppins font-semibold shadow-md shadow-[#3b8c2a]/30 transition hover:brightness-110 active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-2"
                        >
                            {submitting ? (
                                <>
                                    <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" aria-hidden="true" />
                                    Please wait...
                                </>
                            ) : (
                                <>
                                    Start Chat
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M5 12h14M13 6l6 6-6 6" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>

                    <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
                        <svg className="w-3.5 h-3.5 text-[#3b8c2a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="3" y="11" width="18" height="11" rx="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        Aapki details safe hain, sirf expo ki jaankari ke liye.
                    </p>
                </form>
            ) : (
                /* Step 2 — chat */
                <>
                    <div
                        ref={scrollRef}
                        className="relative flex-1 overflow-y-auto overscroll-contain -mt-3 rounded-t-3xl bg-[#f6f9f3] px-4 pt-5 pb-3 flex flex-col gap-3"
                        data-lenis-prevent
                        aria-live="polite"
                    >
                        <div className="flex items-start gap-2.5">
                            <BotAvatar />
                            <div className="max-w-[80%] bg-white rounded-2xl rounded-tl-md shadow-sm border border-[#3b8c2a]/10 px-3.5 py-2.5 text-slate-700">
                                Namaste <strong className="text-[#14532d]">{visitorName}</strong>! 🌿 Bharat Organic Expo 2027 ke baare mein kuch bhi
                                poochhiye: stall booking, registration, Buyer-Seller Meet, venue ya dates.
                            </div>
                        </div>

                        {messages.length === 0 && (
                            <div className="pl-[42px] flex flex-col gap-2">
                                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Popular sawaal</p>
                                <div className="flex flex-wrap gap-2">
                                    {QUICK_QUESTIONS.map((q) => (
                                        <button
                                            key={q}
                                            type="button"
                                            onClick={() => sendMessage(q)}
                                            className="px-3 py-1.5 rounded-full bg-white border border-[#3b8c2a]/40 text-[#14532d] text-[13px] font-medium shadow-sm transition hover:bg-[#3b8c2a] hover:border-[#3b8c2a] hover:text-white hover:-translate-y-0.5"
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
                                    className="self-end max-w-[80%] bg-gradient-to-br from-[#3b8c2a] to-[#2a6d1d] text-white rounded-2xl rounded-tr-md shadow-sm px-3.5 py-2.5 whitespace-pre-wrap break-words"
                                >
                                    {m.content}
                                </div>
                            ) : (
                                <div key={i} className="flex items-start gap-2.5">
                                    <BotAvatar />
                                    <div className="max-w-[80%] bg-white rounded-2xl rounded-tl-md shadow-sm border border-[#3b8c2a]/10 px-3.5 py-2.5 text-slate-700 break-words">
                                        <MessageText text={m.content} />
                                    </div>
                                </div>
                            )
                        )}

                        {waitingForFirstWord && (
                            <div className="flex items-start gap-2.5" aria-label="Organic Mitra is typing">
                                <BotAvatar />
                                <div className="bg-white rounded-2xl rounded-tl-md shadow-sm border border-[#3b8c2a]/10 px-4 py-3.5 flex gap-1.5">
                                    {[0, 150, 300].map((d) => (
                                        <span key={d} className="w-2 h-2 rounded-full bg-[#3b8c2a] animate-bounce" style={{ animationDelay: `${d}ms` }} />
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
                        className="shrink-0 bg-white border-t border-slate-100 px-3 pt-3 pb-2"
                    >
                        <div className="flex items-center gap-2 bg-[#f6f9f3] rounded-full border border-slate-200 pl-4 pr-1.5 py-1.5 transition focus-within:border-[#3b8c2a] focus-within:ring-4 focus-within:ring-[#3b8c2a]/15 focus-within:bg-white">
                            <input
                                ref={inputRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                disabled={loading}
                                maxLength={1000}
                                placeholder={loading ? "Organic Mitra likh raha hai..." : "Apna sawaal likhein..."}
                                aria-label="Type your message"
                                className="flex-1 min-w-0 bg-transparent text-[14px] text-slate-800 placeholder:text-slate-400 outline-none disabled:cursor-not-allowed"
                            />
                            <button
                                type="submit"
                                disabled={loading || !input.trim()}
                                aria-label="Send message"
                                className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-[#3b8c2a] to-[#14532d] text-white flex items-center justify-center shadow-md transition hover:brightness-110 active:scale-95 disabled:opacity-40 disabled:shadow-none"
                            >
                                <svg className="w-4 h-4 -ml-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <path d="m22 2-7 20-4-9-9-4z" />
                                    <path d="M22 2 11 13" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-[10px] text-slate-400 text-center mt-1.5">
                            Powered by <span className="font-semibold text-[#3b8c2a]">Bharat Organic Expo 2027</span>
                        </p>
                    </form>
                </>
            )}
        </div>
    );
};

export default ChatPanel;
