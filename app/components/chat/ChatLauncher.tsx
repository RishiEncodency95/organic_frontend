"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { MessageCircleMore, X } from "lucide-react";
import { readChatSession } from "./chatSession";
import { chatSounds } from "./chatSounds";

// The panel (form, chat, streaming) is only downloaded the first time someone opens it,
// so the chatbot adds almost nothing to page load.
const ChatPanel = dynamic(() => import("./ChatPanel"), { ssr: false });

// Animated launcher icon (Lottie). Loaded in the browser only; until it is ready, or if the
// file is missing, the plain chat icon is shown instead.
const DotLottieReact = dynamic(() => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact), {
    ssr: false,
});
const LAUNCHER_LOTTIE = "/chatbot.lottie";

const TEASER_KEY = "organicMitraTeaserSeen";

const ChatLauncher: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [opened, setOpened] = useState(false);
    // "Namaste" teaser bubble switched off (the robot's "May I help you?" bubble replaces it)
    // const [teaser, setTeaser] = useState(false);
    const [panelKey, setPanelKey] = useState(0);

    // Chime when the chat opens / closes (not on the first page render)
    const firstRender = useRef(true);
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        if (open) chatSounds.open();
        else chatSounds.close();
    }, [open]);
    const [lottieState, setLottieState] = useState<"loading" | "ready" | "failed">("loading");

    // A small "Namaste" bubble, once per browser session, a few seconds after the page loads
    // useEffect(() => {
    //     try {
    //         if (window.sessionStorage.getItem(TEASER_KEY)) return;
    //     } catch {
    //         return;
    //     }
    //     const show = setTimeout(() => setTeaser(true), 5000);
    //     const hide = setTimeout(() => setTeaser(false), 17000);
    //     return () => {
    //         clearTimeout(show);
    //         clearTimeout(hide);
    //     };
    // }, []);

    const dismissTeaser = () => {
        // setTeaser(false);
        try {
            window.sessionStorage.setItem(TEASER_KEY, "1");
        } catch {
            // ignore
        }
    };

    const toggle = () => {
        dismissTeaser();
        // Previous visitor's chat timed out (30 min idle / browser restarted) — start fresh
        if (!open && opened && readChatSession().status === "expired") setPanelKey((k) => k + 1);
        setOpened(true);
        setOpen((v) => !v);
    };

    return (
        <>
            {/* Stays mounted after the first open so the conversation survives closing the panel */}
            {opened && <ChatPanel key={panelKey} open={open} onClose={() => setOpen(false)} />}

            {/* Same height as the WhatsApp/Call buttons on the left, clear of the mobile bottom nav */}
            <div
                className={`fixed right-4 sm:right-6 bottom-[84px] sm:bottom-20 lg:bottom-8 z-[100] flex items-end gap-3 ${open ? "max-[480px]:hidden" : ""}`}
            >
                {/* "Namaste" teaser bubble — switched off
                {teaser && !open && (
                    <div className="relative mb-2 hidden sm:block bg-white rounded-2xl rounded-br-sm shadow-xl border border-[#3b8c2a]/15 pl-4 pr-8 py-3 max-w-[230px] animate-[mitra-pop_0.35s_ease-out]">
                        <button
                            type="button"
                            onClick={dismissTeaser}
                            aria-label="Dismiss"
                            className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center"
                        >
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                                <path d="M18 6 6 18M6 6l12 12" />
                            </svg>
                        </button>
                        <button type="button" onClick={toggle} className="text-left">
                            <p className="font-poppins font-semibold text-[14px] text-[#14532d] leading-snug">Namaste! 🙏</p>
                            <p className="text-[13px] text-slate-600 leading-snug mt-0.5">Expo ke baare mein kuch poochhna hai? Main madad karunga.</p>
                        </button>
                    </div>
                )}
                */}

                {/* Same look as the WhatsApp / Call buttons on the left */}
                <button
                    type="button"
                    onClick={toggle}
                    aria-label={open ? "Close Organic Mitra chat" : "Chat with Organic Mitra"}
                    aria-expanded={open}
                    className="group relative block shrink-0"
                >
                    {/* "May I help you?" speech bubble above the robot while the chat is closed.
                        Right-aligned with the robot so it never runs off the screen edge. */}
                    {!open && (
                        <span className="pointer-events-none absolute bottom-full mb-1.5 right-0 z-10">
                            <span className="relative block animate-[mitra-float_3.2s_ease-in-out_infinite] rounded-2xl bg-white px-3 py-1.5 font-poppins text-[12.5px] font-semibold text-[#14532d] whitespace-nowrap shadow-[0_8px_20px_-8px_rgba(11,41,18,0.45)] ring-1 ring-[#3b8c2a]/25">
                                May I help you? <span aria-hidden="true">👋</span>
                                <span
                                    className="absolute -bottom-[5px] right-9 lg:right-11 w-2.5 h-2.5 rotate-45 bg-white border-r border-b border-[#3b8c2a]/25"
                                    aria-hidden="true"
                                />
                            </span>
                        </span>
                    )}

                    {open ? (
                        <div className="relative w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#14532d] to-[#3b8c2a] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110">
                            <X className="w-5 h-5 lg:w-6 lg:h-6 text-white relative z-10" strokeWidth={2.5} />
                        </div>
                    ) : (
                        <div className="relative w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                            {lottieState !== "failed" && (
                                <DotLottieReact
                                    src={LAUNCHER_LOTTIE}
                                    loop
                                    autoplay
                                    className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${lottieState === "ready" ? "opacity-100" : "opacity-0"}`}
                                    dotLottieRefCallback={(player) => {
                                        player?.addEventListener("load", () => setLottieState("ready"));
                                        player?.addEventListener("loadError", () => setLottieState("failed"));
                                    }}
                                />
                            )}
                            {lottieState !== "ready" && (
                                <div className="relative w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#14532d] to-[#3b8c2a] rounded-full flex items-center justify-center shadow-lg">
                                    <MessageCircleMore className="w-5 h-5 lg:w-6 lg:h-6 text-white relative z-10" strokeWidth={2.5} />
                                </div>
                            )}
                        </div>
                    )}
                </button>
            </div>
        </>
    );
};

export default ChatLauncher;
