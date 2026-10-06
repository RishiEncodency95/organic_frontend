"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/lib/api";

/**
 * Settings published from the admin panel's Chatbot Manager (name, greetings, on/off).
 * Empty values mean "not set" — the chat then keeps its built-in text.
 */
export type ChatConfig = {
    enabled: boolean;
    name: string;
    subtitle: string;
    launcher: string;
    messages: Partial<Record<"en" | "hi", { welcomeGreeting?: string; welcomeMessage?: string; closingGreeting?: string; unknownAnswer?: string }>> | null;
};

const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_API_URL || `${API_URL}/chat`;

// One request per page load, shared by the launcher and the panel
let request: Promise<ChatConfig | null> | null = null;
const loadConfig = () => {
    if (!request) {
        request = fetch(`${CHAT_URL}/config`)
            .then((res) => (res.ok ? res.json() : null))
            .then((json) => (json?.data as ChatConfig) || null)
            .catch(() => null);
    }
    return request;
};

export const useChatConfig = (): ChatConfig | null => {
    const [config, setConfig] = useState<ChatConfig | null>(null);
    useEffect(() => {
        let alive = true;
        loadConfig().then((c) => alive && setConfig(c));
        return () => {
            alive = false;
        };
    }, []);
    return config;
};
