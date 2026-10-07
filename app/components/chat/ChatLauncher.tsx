"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { MessageCircleMore, X } from "lucide-react";
import { readChatSession } from "./chatSession";
import { useChatConfig } from "./chatConfig";

// The panel (form, chat, streaming) is only downloaded the first time someone opens it,
// so the chatbot adds almost nothing to page load.
const ChatPanel = dynamic(() => import("./ChatPanel"), { ssr: false });

// Animated launcher icon (Lottie), browser only. Nothing is shown until it is ready; the plain
// chat icon appears only if the animation fails to load, so the chat stays reachable.
// lib/dotLottie serves the player's WASM from this site instead of a public CDN.
const DotLottieReact = dynamic(() => import("@/lib/dotLottie").then((m) => m.DotLottieReact), {
    ssr: false,
});
const LAUNCHER_LOTTIE = "/chatbot.lottie";

const ChatLauncher: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [opened, setOpened] = useState(false);
    const [panelKey, setPanelKey] = useState(0);
    const [lottieState, setLottieState] = useState<"loading" | "ready" | "failed">("loading");
    // Switched off / renamed from the admin panel's Chatbot Manager (Settings → published)
    const config = useChatConfig();

    const toggle = () => {
        // Previous visitor's chat timed out (30 min idle / browser restarted) — start fresh
        if (!open && opened && readChatSession().status === "expired") setPanelKey((k) => k + 1);
        setOpened(true);
        setOpen((v) => !v);
    };

    if (config && !config.enabled) return null;

    return (
        <>
            {/* Stays mounted after the first open so the conversation survives closing the panel */}
            {opened && <ChatPanel key={panelKey} open={open} onClose={() => setOpen(false)} />}

            {/* Same height as the WhatsApp/Call buttons on the left, clear of the mobile bottom nav */}
            <div
                className={`fixed right-4 sm:right-6 bottom-[84px] sm:bottom-20 lg:bottom-8 z-[100] flex items-end gap-3 ${open ? "max-[480px]:hidden" : ""}`}
            >
                {/* Same look as the WhatsApp / Call buttons on the left */}
                <button
                    type="button"
                    onClick={toggle}
                    aria-label={open ? "Close Organic Mitra chat" : "Chat with Organic Mitra"}
                    aria-expanded={open}
                    className="group relative block shrink-0"
                >
                    {/* "May I help you?" bubble above the robot while the chat is closed (appears with it) */}
                    {!open && lottieState !== "loading" && (
                        <span className="pointer-events-none absolute bottom-full right-0 -mb-1 px-3 py-1.5 rounded-xl bg-white border border-[#3b8c2a]/30 text-[#14532d] text-[12px] lg:text-[13px] font-semibold font-poppins whitespace-nowrap shadow-lg transition-transform duration-200 group-hover:-translate-y-1 animate-[mitra-pop_0.35s_ease-out]">
                            {config?.launcher?.trim() || "May I help you?"}
                            <span className="absolute -bottom-[5px] right-11 lg:right-[52px] w-2.5 h-2.5 rotate-45 bg-white border-r border-b border-[#3b8c2a]/30" aria-hidden="true" />
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
                            {lottieState === "failed" && (
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
