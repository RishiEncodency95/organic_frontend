"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/lib/api";

/** A main-menu button from the Manager's "Buttons & Flows" (active ones, in order) */
export type ChatButton = {
    label: string;
    hindi: string;
    action: "Show Options" | "Show Answer" | "Open Form" | "Open Link" | "Talk to Team";
    reply: string;
    /** Next options for "Show Options" */
    options: string[];
    /** Link for "Open Link", form name for "Open Form", team for "Talk to Team" */
    target: string;
};

/** Show / required for one optional field of a chat form */
export type ChatFormField = { show: boolean; required: boolean };

/** The Quotation / Callback form as set up in the Manager's "Forms & Routing" */
export type ChatFormSettings = {
    active: boolean;
    submitLabel: string;
    consent: string;
    confirmation: string;
    company?: ChatFormField;
    email?: ChatFormField;
    time?: ChatFormField;
};

/**
 * Settings published from the admin panel's Chatbot Manager (name, avatar, greetings, menu
 * buttons, forms, on/off). Empty values mean "not set" — the chat then keeps its built-in text,
 * menu and forms.
 */
export type ChatConfig = {
    enabled: boolean;
    name: string;
    subtitle: string;
    launcher: string;
    /** Uploaded avatar URL, "" for the default logo */
    avatar: string;
    messages: Partial<Record<"en" | "hi", { welcomeGreeting?: string; welcomeMessage?: string; closingGreeting?: string; unknownAnswer?: string }>> | null;
    /** null until Buttons & Flows is published */
    buttons: ChatButton[] | null;
    forms: { quote?: ChatFormSettings; callback?: ChatFormSettings } | null;
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
