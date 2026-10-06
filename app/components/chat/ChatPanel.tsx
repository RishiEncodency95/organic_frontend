"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, CheckCheck, ChevronDown, FileText, LayoutGrid, ChevronRight, Handshake, Headset, HeartHandshake, Info, List, LogOut, MessageCircleMore, Minus, Presentation, Send, Settings, Store, ThumbsDown, ThumbsUp, Users, X, type LucideIcon } from "lucide-react";
import { API_URL, verifyApi } from "@/lib/api";
import { SITE_CONFIG } from "@/app/constants/siteConfig";
import { clearChatSession, newSessionId, readChatSession, saveChatSession } from "./chatSession";
import { useChatConfig } from "./chatConfig";

const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_API_URL || `${API_URL}/chat`;
const FALLBACK = "Maaf kijiye, abhi reply nahi de pa raha. Kripya +91 96549 00525 par call ya WhatsApp karein.";
/** Questions a visitor can ask before name + mobile (WhatsApp OTP) are asked for */
const FREE_QUESTIONS = 3;

/** A quick reply: `step` continues a scripted flow on this page, `ask` sends the question to the assistant */
type ChatOption = { label: string; ask?: string; step?: string; /** passed to the step instead of the label */ choice?: string };

/** A link under a scripted reply that jumps to another step without a new visitor message */
type ChatNav = { label: string; step: string; icon: "back" | "list" };

type Message = {
    role: "user" | "assistant";
    content: string;
    /** Quick replies shown as pills under the bubble */
    options?: ChatOption[];
    /** Pills per row (default 2) */
    columns?: 2 | 3;
    /** Small "ⓘ" line under the pills */
    note?: string;
    /** Links under the reply; when set they replace "Main Menu" */
    nav?: ChatNav[];
    /** Button inside the bubble that opens a page of the website */
    link?: { label: string; href: string };
    /** Shows the main menu cards under the bubble */
    menu?: boolean;
    /** Quotation request form for this stall size (e.g. "12 sq.m"); `sent` once submitted */
    quote?: { stall: string; sent?: boolean };
    /** "Chat on WhatsApp" / "Request a Callback" buttons under the bubble; `stall` may be empty */
    sales?: { stall: string };
    /** Callback request form; `stall` may be empty */
    callback?: { stall: string; sent?: boolean };
    /** OTP check before showing a returning visitor's previous enquiries; `done` once verified */
    verify?: { done?: boolean };
    /** Previous enquiries of a verified visitor */
    history?: HistoryItem[];
    /** Estimated price card for this stall size; `sides` is the open-side preference picked on it */
    price?: StallChoice;
    /** "Your Stall Preference" summary card under the bubble */
    summary?: StallChoice;
    /** "Open Stall Booking Form" button + Change Preference / Talk to Sales under the bubble */
    booking?: StallChoice;
    /** "Request Received" confirmation card for this stall size */
    receipt?: { stall: string };
    /** Follow-up buttons after a quotation request: brochure, main menu, WhatsApp, end chat */
    followUp?: { stall: string };
};

type OpenSides = 1 | 2 | 3;

/** One earlier chat, as returned by POST /chat/history */
type HistoryItem = {
    startedAt: string;
    requests: { type: "stall-quotation" | "sales-callback"; stallSize?: string; preferredTime?: string }[];
    question: string;
};
type StallChoice = { stall: string; sqm: number; sides?: OpenSides };

const FOLLOW_UP_PILL =
    "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#dfe6d8] bg-white px-3 py-2 text-[12px] font-medium leading-tight text-[#0b2912] shadow-sm transition hover:border-[#14532d] hover:bg-[#f1f7ee]";

const WHATSAPP_NUMBER = SITE_CONFIG.rawPhone.replace(/\D/g, "");
const PHONE_PATH =
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z";

const WHATSAPP_PATH =
    "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

// ─── Welcome screen: topics + English / हिंदी text ───────────────────────────

type Lang = "en" | "hi";
const LANG_KEY = "organicMitraLang";

const readLang = (): Lang => {
    try {
        return window.localStorage.getItem(LANG_KEY) === "hi" ? "hi" : "en";
    } catch {
        return "en";
    }
};

const saveLang = (lang: Lang) => {
    try {
        window.localStorage.setItem(LANG_KEY, lang);
    } catch {
        // ignore
    }
};

type Topic = {
    id: string;
    icon: LucideIcon;
    label: Record<Lang, string>;
    ask: Record<Lang, string>;
    /** Topics with a scripted flow (see FLOW) answer from here, without asking for contact details */
    step?: string;
};

// ─── Scripted flows ──────────────────────────────────────────────────────────

type FlowStep = {
    /** The visitor's bubble when they open this step */
    say: string;
    replies: Message[];
    /** Input hint while this step is being discussed */
    placeholder: string;
};

const STALL_SIZES = [6, 9, 12, 18, 24, 36];

/** `choice` is the label of the pill that opened the step (e.g. "12 sq.m") */
const FLOW: Record<string, (lang: Lang, choice: string) => FlowStep> = {
    stall: (lang) =>
        lang === "hi"
            ? {
                  say: "मुझे स्टॉल बुक करना है।",
                  placeholder: "स्टॉल बुकिंग के बारे में पूछें...",
                  replies: [
                      {
                          role: "assistant",
                          content: "ज़रूर! आप क्या जानना चाहेंगे?",
                          options: [
                              { label: "स्टॉल साइज़", step: "stall-sizes" },
                              { label: "स्टॉल की कीमत", ask: "स्टॉल की कीमत क्या है?" },
                              { label: "ब्रोशर पाएं", ask: "कृपया एग्ज़िबिटर ब्रोशर भेजें।" },
                              { label: "सेल्स टीम से बात करें", step: "sales", choice: "" },
                          ],
                      },
                      {
                          role: "assistant",
                          content: "आप सीधे हमारी वेबसाइट से भी बुक कर सकते हैं।",
                          link: { label: "स्टॉल बुकिंग पर जाएं", href: "/registration/book-a-stand" },
                      },
                  ],
              }
            : {
                  say: "I want to book a stall.",
                  placeholder: "Ask about stall booking...",
                  replies: [
                      {
                          role: "assistant",
                          content: "Happy to help! What would you like to explore?",
                          options: [
                              { label: "Stall Sizes", step: "stall-sizes" },
                              { label: "Stall Pricing", ask: "What is the price of a stall?" },
                              { label: "Get Brochure", ask: "Please share the exhibitor brochure." },
                              { label: "Talk to Sales", step: "sales", choice: "" },
                          ],
                      },
                      {
                          role: "assistant",
                          content: "You can also book directly through our website.",
                          link: { label: "Proceed to Stall Booking", href: "/registration/book-a-stand" },
                      },
                  ],
              },

    "stall-sizes": (lang) => ({
        say: lang === "hi" ? "मैं कौन-से स्टॉल साइज़ चुन सकता हूँ?" : "What stall sizes can I choose?",
        placeholder: lang === "hi" ? "स्टॉल साइज़ के बारे में पूछें..." : "Ask about stall sizes...",
        replies: [
            {
                role: "assistant",
                content: lang === "hi" ? "अपना पसंदीदा स्टॉल साइज़ चुनें:" : "Choose your preferred stall size:",
                options: STALL_SIZES.map((size) => ({ label: `${size} sq.m`, step: "stall-size" })),
                columns: 3,
            },
        ],
    }),

    "stall-size": (lang, size) =>
        lang === "hi"
            ? {
                  say: size,
                  placeholder: "स्टॉल साइज़ के बारे में पूछें...",
                  replies: [
                      {
                          role: "assistant",
                          content: `**${size} चुना गया**\nक्या आप कीमत देखना चाहेंगे या कोटेशन मंगवाना चाहेंगे?`,
                          options: [
                              { label: "कीमत देखें", step: "stall-price", choice: size },
                              { label: "कोटेशन मंगवाएं", step: "stall-quote", choice: size },
                          ],
                          note: "अंतिम उपलब्धता और लेआउट हमारी सेल्स टीम कन्फर्म करेगी।",
                          nav: [
                              { label: "दूसरे साइज़", step: "stall-sizes", icon: "back" },
                              { label: "स्टॉल विकल्पों पर वापस", step: "stall", icon: "list" },
                          ],
                      },
                  ],
              }
            : {
                  say: size,
                  placeholder: "Ask about stall sizes...",
                  replies: [
                      {
                          role: "assistant",
                          content: `**${size} selected**\nWould you like to view pricing or request a quotation?`,
                          options: [
                              { label: "View Pricing", step: "stall-price", choice: size },
                              { label: "Request Quotation", step: "stall-quote", choice: size },
                          ],
                          note: "Final availability and layout will be confirmed by our sales team.",
                          nav: [
                              { label: "Other Sizes", step: "stall-sizes", icon: "back" },
                              { label: "Back to Stall Options", step: "stall", icon: "list" },
                          ],
                      },
                  ],
              },

    "stall-price": (lang, size) => ({
        say: lang === "hi" ? `${size} स्टॉल की कीमत देखें` : `View pricing for ${size}`,
        placeholder: lang === "hi" ? "कीमत के बारे में पूछें..." : "Ask about pricing...",
        replies: [
            {
                role: "assistant",
                content: lang === "hi" ? "आपके चुने गए स्टॉल की अनुमानित कीमत यह है।" : "Here is the estimated price for your selected stall.",
                price: { stall: size, sqm: parseFloat(size), sides: 1 },
            },
        ],
    }),

    history: (lang) => ({
        say: lang === "hi" ? "मेरी पिछली पूछताछ देखें" : "View my previous enquiry",
        placeholder: lang === "hi" ? "एक्सपो के बारे में कुछ भी पूछें..." : "Ask anything about the expo...",
        replies: [
            {
                role: "assistant",
                content:
                    lang === "hi"
                        ? "अपनी पिछली पूछताछ सुरक्षित रूप से देखने के लिए कृपया अपना रजिस्टर्ड मोबाइल नंबर वेरिफ़ाई करें।"
                        : "Please verify your registered mobile number to securely view your previous enquiry.",
                verify: {},
            },
        ],
    }),

    "new-question": (lang) => ({
        say: lang === "hi" ? "नया सवाल पूछें" : "Ask a new question",
        placeholder: lang === "hi" ? "एक्सपो के बारे में कुछ भी पूछें..." : "Ask anything about the expo...",
        replies: [{ role: "assistant", content: TEXT[lang].menuPrompt, menu: true }],
    }),

    sales: (lang, size) => ({
        say: lang === "hi" ? "मुझे सेल्स टीम से बात करनी है।" : "I'd like to talk to sales.",
        placeholder: lang === "hi" ? "एक और सवाल पूछें..." : "Ask another question...",
        replies: [
            {
                role: "assistant",
                content: lang === "hi" ? "हमारी सेल्स टीम आपकी कैसे मदद करे?" : "How would you like our sales team to assist you?",
                sales: { stall: size },
            },
        ],
    }),

    "sales-callback": (lang, size) => ({
        say: lang === "hi" ? "कॉलबैक चाहिए" : "Request a callback",
        placeholder: lang === "hi" ? "एक और सवाल पूछें..." : "Ask another question...",
        replies: [
            {
                role: "assistant",
                content:
                    lang === "hi"
                        ? "कृपया अपना नाम और नंबर दें। हम आपका अनुरोध सेल्स टीम तक पहुँचा देंगे।"
                        : "Please share your name and number. We'll pass your request to our sales team.",
                callback: { stall: size },
            },
        ],
    }),

    "stall-quote": (lang, size) => ({
        say: lang === "hi" ? `${size} स्टॉल के लिए कोटेशन चाहिए` : `Request a quotation for ${size}`,
        placeholder: lang === "hi" ? "कोई सवाल है? यहाँ लिखें..." : "Have a question? Type here...",
        replies: [
            {
                role: "assistant",
                content:
                    lang === "hi"
                        ? "कृपया अपना विवरण दें ताकि हमारी सेल्स टीम आपका कोटेशन तैयार कर सके।"
                        : "Please share your details so our sales team can prepare your quotation.",
                quote: { stall: size },
            },
        ],
    }),
};

// `label` is shown on the card; `ask` is what the assistant receives
const TOPICS: Topic[] = [
    {
        id: "stall",
        icon: Store,
        label: { en: "Book a Stall", hi: "स्टॉल बुक करें" },
        ask: { en: "I want to book a stall. How do I book one and what are the options?", hi: "मुझे स्टॉल बुक करना है। स्टॉल कैसे बुक करें और क्या विकल्प हैं?" },
        step: "stall",
    },
    {
        id: "visit",
        icon: Users,
        label: { en: "Visit the Expo", hi: "एक्सपो देखने आएं" },
        ask: { en: "I want to visit the expo. How do I register as a visitor?", hi: "मुझे एक्सपो देखने आना है। विज़िटर रजिस्ट्रेशन कैसे करें?" },
    },
    {
        id: "msme",
        icon: Settings,
        label: { en: "MSME / PMS Support", hi: "MSME / PMS सहायता" },
        ask: { en: "Tell me about MSME / PMS support for exhibitors.", hi: "एग्ज़िबिटर्स के लिए MSME / PMS सहायता के बारे में बताइए।" },
    },
    {
        id: "bsm",
        icon: Handshake,
        label: { en: "Buyer–Seller Meet", hi: "बायर–सेलर मीट" },
        ask: { en: "What is the Buyer–Seller Meet and how can I join it?", hi: "बायर–सेलर मीट क्या है और इसमें कैसे जुड़ें?" },
    },
    {
        id: "conference",
        icon: Presentation,
        label: { en: "Conference & Awards", hi: "कॉन्फ्रेंस और अवॉर्ड्स" },
        ask: { en: "Tell me about the conference and the awards.", hi: "कॉन्फ्रेंस और अवॉर्ड्स के बारे में बताइए।" },
    },
    {
        id: "sponsorship",
        icon: HeartHandshake,
        label: { en: "Sponsorship & Partners", hi: "स्पॉन्सरशिप और पार्टनर्स" },
        ask: { en: "Tell me about sponsorship and partnership opportunities.", hi: "स्पॉन्सरशिप और पार्टनरशिप के अवसरों के बारे में बताइए।" },
    },
];

const TALK_TO_TEAM: Topic = {
    id: "team",
    icon: Headset,
    label: { en: "Talk to Our Team", hi: "हमारी टीम से बात करें" },
    ask: { en: "I want to talk to your team. How can I contact them?", hi: "मुझे आपकी टीम से बात करनी है। उनसे कैसे संपर्क करें?" },
};

const TEXT = {
    en: {
        subtitle: "Bharat Organic Expo Assistant",
        greeting: "Namo Gange Namaskar! 🙏\nHow can I help you today?",
        greetingName: (name: string) => `Namo Gange Namaskar, ${name}! 🙏\nHow can I help you today?`,
        welcomeBack: "Namo Gange Namaskar! 🙏\nWelcome back! How can I help you today?",
        viewPrevious: "View my previous enquiry",
        askNew: "Ask a new question",
        withoutVerify: "You can ask a new question without verification.",
        continueWithout: "Continue without verification",
        historyFound: "Here are your previous enquiries:",
        historyEmpty: "We couldn't find any previous enquiry for these details.",
        historyChat: "Chat with Organic Mitra",
        historyQuote: "Stall quotation",
        historyCallback: "Callback request",
        placeholder: "Type your question...",
        typing: "Organic Mitra is typing...",
        footer: "Automated assistant • Contact details only for follow-up",
        footerShort: "Automated assistant",
        mainMenu: "Main Menu",
        quoteSubmitted: "Quotation request submitted",
        quoteThanks: "Thank you! Your quotation request has been received.",
        receiptTitle: "Request Received",
        stallPreference: "Stall preference:",
        receiptBody: "Our sales team will contact you using the details you provided.",
        receiptNote: "This is an enquiry confirmation. Your stall booking is not yet confirmed.",
        anythingElse: "Can I help you with anything else?",
        getBrochure: "Get Brochure",
        brochureAsk: "Please share the exhibitor brochure.",
        whatsapp: "Chat on WhatsApp",
        whatsappText: (stall: string) => `Hello! I have requested a quotation for a ${stall} stall at Bharat Organic Expo 2027.`,
        salesWhatsappText: (stall: string) =>
            `Hello! I'd like to talk to your sales team about ${stall ? `a ${stall} stall` : "booking a stall"} at Bharat Organic Expo 2027.`,
        requestCallback: "Request a Callback",
        askAnother: "Ask another question...",
        chatEnded: "Chat ended",
        endedThanks: "Thank you for connecting with Bharat Organic Expo.",
        endedBye: "Namo Gange Namaste! 🙏",
        helpful: "Was this chat helpful?",
        yes: "Yes",
        no: "No",
        feedbackOptional: "Feedback is optional.",
        feedbackThanks: "Thanks for your feedback!",
        newChat: "Start a New Chat",
        closeChat: "Close Chat",
        menuPrompt: "What else can I help you with?",
        endChat: "End Chat",
        minimize: "Minimize chat",
        back: "Back",
        detailsFor: "To help you with",
        detailsForEnd: ", please share your details.",
        detailsGeneric: "Please share your details to continue the chat.",
        fields: {
            name: { label: "Full Name", placeholder: "Your name" },
            phone: { label: "Mobile Number", placeholder: "10-digit mobile number" },
        },
        continue: "Continue",
        sendOtp: "Send OTP on WhatsApp",
        otpLabel: "WhatsApp OTP",
        otpPh: "6-digit OTP",
        otpSent: (to: string) => `OTP sent on WhatsApp to +91 ${to}`,
        verifyContinue: "Verify & Continue",
        change: "Change",
        resend: "Resend OTP",
        resendIn: (s: number) => `Resend OTP in ${s}s`,
        otpError: "Please enter the 6-digit OTP.",
        wait: "Please wait...",
        safe: "Your details are safe with us.",
        genericError: "Something went wrong. Please try again.",
        expired: "Session expired. Please share your details again to continue.",
    },
    hi: {
        subtitle: "भारत ऑर्गेनिक एक्सपो सहायक",
        greeting: "नमो गंगे नमस्कार! 🙏\nमैं आपकी क्या मदद कर सकता हूँ?",
        greetingName: (name: string) => `नमो गंगे नमस्कार, ${name}! 🙏\nमैं आपकी क्या मदद कर सकता हूँ?`,
        welcomeBack: "नमो गंगे नमस्कार! 🙏\nफिर से स्वागत है! मैं आपकी क्या मदद कर सकता हूँ?",
        viewPrevious: "मेरी पिछली पूछताछ देखें",
        askNew: "नया सवाल पूछें",
        withoutVerify: "आप बिना वेरिफ़िकेशन के नया सवाल पूछ सकते हैं।",
        continueWithout: "बिना वेरिफ़िकेशन आगे बढ़ें",
        historyFound: "आपकी पिछली पूछताछ यह रही:",
        historyEmpty: "इन विवरणों से कोई पिछली पूछताछ नहीं मिली।",
        historyChat: "Organic Mitra से चैट",
        historyQuote: "स्टॉल कोटेशन",
        historyCallback: "कॉलबैक अनुरोध",
        placeholder: "अपना सवाल लिखें...",
        typing: "Organic Mitra लिख रहा है...",
        footer: "स्वचालित सहायक • संपर्क विवरण केवल फॉलो-अप के लिए",
        footerShort: "स्वचालित सहायक",
        mainMenu: "मुख्य मेनू",
        quoteSubmitted: "कोटेशन अनुरोध भेज दिया",
        quoteThanks: "धन्यवाद! आपका कोटेशन अनुरोध मिल गया है।",
        receiptTitle: "अनुरोध प्राप्त हुआ",
        stallPreference: "स्टॉल पसंद:",
        receiptBody: "हमारी सेल्स टीम आपके दिए गए विवरण पर आपसे संपर्क करेगी।",
        receiptNote: "यह पूछताछ की पुष्टि है। आपकी स्टॉल बुकिंग अभी कन्फर्म नहीं हुई है।",
        anythingElse: "क्या मैं और किसी चीज़ में आपकी मदद कर सकता हूँ?",
        getBrochure: "ब्रोशर पाएं",
        brochureAsk: "कृपया एग्ज़िबिटर ब्रोशर भेजें।",
        whatsapp: "WhatsApp पर चैट करें",
        whatsappText: (stall: string) => `Hello! I have requested a quotation for a ${stall} stall at Bharat Organic Expo 2027.`,
        salesWhatsappText: (stall: string) =>
            `Hello! I'd like to talk to your sales team about ${stall ? `a ${stall} stall` : "booking a stall"} at Bharat Organic Expo 2027.`,
        requestCallback: "कॉलबैक मंगवाएं",
        askAnother: "एक और सवाल पूछें...",
        chatEnded: "चैट समाप्त",
        endedThanks: "भारत ऑर्गेनिक एक्सपो से जुड़ने के लिए धन्यवाद।",
        endedBye: "नमो गंगे नमस्ते! 🙏",
        helpful: "क्या यह चैट मददगार रही?",
        yes: "हाँ",
        no: "नहीं",
        feedbackOptional: "फ़ीडबैक देना ज़रूरी नहीं है।",
        feedbackThanks: "आपके फ़ीडबैक के लिए धन्यवाद!",
        newChat: "नई चैट शुरू करें",
        closeChat: "चैट बंद करें",
        menuPrompt: "मैं और किस बारे में आपकी मदद करूँ?",
        endChat: "चैट समाप्त करें",
        minimize: "चैट छोटा करें",
        back: "वापस",
        detailsFor: "",
        detailsForEnd: " में मदद के लिए कृपया अपना विवरण दें।",
        detailsGeneric: "चैट जारी रखने के लिए कृपया अपना विवरण दें।",
        fields: {
            name: { label: "पूरा नाम", placeholder: "आपका नाम" },
            phone: { label: "मोबाइल नंबर", placeholder: "10 अंकों का मोबाइल नंबर" },
        },
        continue: "आगे बढ़ें",
        sendOtp: "WhatsApp पर OTP भेजें",
        otpLabel: "WhatsApp OTP",
        otpPh: "6 अंकों का OTP",
        otpSent: (to: string) => `+91 ${to} पर WhatsApp से OTP भेजा गया`,
        verifyContinue: "वेरिफ़ाई करें और आगे बढ़ें",
        change: "बदलें",
        resend: "OTP दोबारा भेजें",
        resendIn: (s: number) => `${s} सेकंड में OTP दोबारा भेजें`,
        otpError: "कृपया 6 अंकों का OTP लिखें।",
        wait: "कृपया प्रतीक्षा करें...",
        safe: "आपका विवरण हमारे पास सुरक्षित है।",
        genericError: "कुछ गड़बड़ हो गई। कृपया दोबारा कोशिश करें।",
        expired: "सेशन समाप्त हो गया। जारी रखने के लिए कृपया अपना विवरण फिर से दें।",
    },
} as const;

const LEAF_PATH =
    "M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z";

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
    <div className="w-8 h-8 shrink-0 rounded-full bg-white shadow-sm ring-2 ring-[#F2B40E]/50 flex items-center justify-center" aria-hidden="true">
        <Image src="/android-chrome-192x192.png" alt="" width={28} height={28} className="w-[22px] h-[22px] object-contain" />
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
                <path d={PHONE_PATH} />
            </svg>
        ),
    },
] as const;

/** Must match CHAT_LEAD_OTP_PROFILE in the backend's chat controller */
const LEAD_OTP_PROFILE = "CHAT_LEAD";
const OTP_RESEND_SECONDS = 30;

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

// ─── Quotation request (inside the chat) ─────────────────────────────────────

type QuoteDetails = { name: string; phone: string; company: string; email: string; time: string };
type QuoteErrors = Partial<Record<keyof QuoteDetails | "agree", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const QUOTE_TEXT = {
    en: {
        title: "Quotation Request",
        selected: "Selected stall:",
        change: "Change",
        name: "Full Name",
        namePh: "Enter your name",
        phone: "Mobile / WhatsApp",
        phonePh: "Enter mobile number",
        company: "Company Name",
        companyPh: "Enter company name",
        email: "Email (Optional)",
        emailPh: "For quotation by email",
        agree: "I agree to be contacted about this enquiry.",
        agreeError: "Please agree so our team can contact you.",
        emailError: "Please enter a valid email address.",
        submit: "Submit Request",
        sending: "Submitting...",
        back: "Back to Stall Options",
        sent: "Request submitted",
        callbackTitle: "Callback Request",
        enquiry: "Stall enquiry",
        time: "Preferred Time (Optional)",
        times: ["Any working-hour slot", "Morning (10 AM – 1 PM)", "Afternoon (1 PM – 4 PM)", "Evening (4 PM – 6 PM)"],
        callbackSubmit: "Request Callback",
        callbackSent: "Callback requested",
        callbackNote: "Callback requests are handled during working hours.",
        stallOptions: "Stall Options",
        sendOtp: "Send OTP on WhatsApp",
        otp: "WhatsApp OTP",
        otpPh: "6-digit OTP",
        otpSent: (to: string) => `OTP sent on WhatsApp to +91 ${to}`,
        verifySubmit: "Verify & Submit",
        resend: "Resend OTP",
        resendIn: (s: number) => `Resend OTP in ${s}s`,
        otpError: "Please enter the 6-digit OTP.",
        verified: "Verified",
    },
    hi: {
        title: "कोटेशन अनुरोध",
        selected: "चुना गया स्टॉल:",
        change: "बदलें",
        name: "पूरा नाम",
        namePh: "अपना नाम लिखें",
        phone: "मोबाइल / WhatsApp",
        phonePh: "मोबाइल नंबर लिखें",
        company: "कंपनी का नाम",
        companyPh: "कंपनी का नाम लिखें",
        email: "ईमेल (वैकल्पिक)",
        emailPh: "ईमेल पर कोटेशन के लिए",
        agree: "मैं इस पूछताछ के बारे में संपर्क किए जाने के लिए सहमत हूँ।",
        agreeError: "कृपया सहमति दें ताकि हमारी टीम आपसे संपर्क कर सके।",
        emailError: "कृपया सही ईमेल पता लिखें।",
        submit: "अनुरोध भेजें",
        sending: "भेजा जा रहा है...",
        back: "स्टॉल विकल्पों पर वापस",
        sent: "अनुरोध भेज दिया गया",
        callbackTitle: "कॉलबैक अनुरोध",
        enquiry: "स्टॉल पूछताछ",
        time: "पसंदीदा समय (वैकल्पिक)",
        times: ["कामकाजी समय में कभी भी", "सुबह (10 – 1 बजे)", "दोपहर (1 – 4 बजे)", "शाम (4 – 6 बजे)"],
        callbackSubmit: "कॉलबैक मंगवाएं",
        callbackSent: "कॉलबैक अनुरोध भेजा गया",
        callbackNote: "कॉलबैक अनुरोध कामकाजी समय में संभाले जाते हैं।",
        stallOptions: "स्टॉल विकल्प",
        sendOtp: "WhatsApp पर OTP भेजें",
        otp: "WhatsApp OTP",
        otpPh: "6 अंकों का OTP",
        otpSent: (to: string) => `+91 ${to} पर WhatsApp से OTP भेजा गया`,
        verifySubmit: "वेरिफ़ाई करें और भेजें",
        resend: "OTP दोबारा भेजें",
        resendIn: (s: number) => `${s} सेकंड में OTP दोबारा भेजें`,
        otpError: "कृपया 6 अंकों का OTP लिखें।",
        verified: "वेरिफ़ाइड",
    },
} as const;

type QuoteFormProps = {
    lang: Lang;
    /** "callback" asks for a preferred time instead of company and email */
    kind?: "quote" | "callback";
    stall: string;
    sent: boolean;
    defaultName: string;
    /** Number this chat already verified with the WhatsApp OTP; any other number is asked to verify */
    verifiedPhone: string;
    onSubmit: (details: QuoteDetails) => Promise<string | null>;
    onChange: () => void;
    onBack: () => void;
};

const QuoteForm: React.FC<QuoteFormProps> = ({ lang, kind = "quote", stall, sent, defaultName, verifiedPhone, onSubmit, onChange, onBack }) => {
    const q = QUOTE_TEXT[lang];
    const callback = kind === "callback";
    const [form, setForm] = useState<QuoteDetails>({ name: defaultName, phone: verifiedPhone, company: "", email: "", time: "" });
    const [agree, setAgree] = useState(false);
    const [errors, setErrors] = useState<QuoteErrors>({});
    const [formError, setFormError] = useState("");
    const [submitting, setSubmitting] = useState(false);
    // WhatsApp OTP: the number it was sent to ("" until sent), the code, resend countdown, and the number it verified
    const [otpSentTo, setOtpSentTo] = useState("");
    const [otp, setOtp] = useState("");
    const [timer, setTimer] = useState(0);
    const [otpVerifiedFor, setOtpVerifiedFor] = useState("");

    useEffect(() => {
        if (!timer) return;
        const id = window.setTimeout(() => setTimer((s) => s - 1), 1000);
        return () => window.clearTimeout(id);
    }, [timer]);

    const phoneVerified = !!form.phone && (form.phone === verifiedPhone || form.phone === otpVerifiedFor);

    const set = (key: keyof QuoteDetails, value: string) => {
        setForm((prev) => ({ ...prev, [key]: value }));
        if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

    const resetOtp = () => {
        setOtpSentTo("");
        setOtp("");
        setTimer(0);
    };

    const validate = () => {
        const next: QuoteErrors = { ...validateLead({ name: form.name, phone: form.phone }) };
        if (form.email.trim() && !EMAIL_PATTERN.test(form.email.trim())) next.email = q.emailError;
        if (!agree) next.agree = q.agreeError;
        setErrors(next);
        setFormError("");
        return !Object.keys(next).length;
    };

    const sendOtp = async () => {
        if (!validate()) return;
        setSubmitting(true);
        try {
            const res = await verifyApi.sendPhoneOtp(form.phone, LEAD_OTP_PROFILE, form.name.trim());
            if (!res?.success) throw new Error(res?.msg || res?.message || "");
            setOtpSentTo(form.phone);
            setOtp("");
            setTimer(OTP_RESEND_SECONDS);
        } catch (err) {
            setFormError((err as Error).message || "Could not send the OTP. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        // A new number gets a WhatsApp OTP first; the request goes out once it is verified
        if (!phoneVerified && otpSentTo !== form.phone) return sendOtp();
        if (!validate()) return;
        if (!phoneVerified && otp.length !== 6) {
            setFormError(q.otpError);
            return;
        }
        setSubmitting(true);
        try {
            if (!phoneVerified) {
                const res = await verifyApi.verifyPhoneOtp(form.phone, otp);
                if (!res?.success) throw new Error(res?.msg || res?.message || "");
                setOtpVerifiedFor(form.phone);
                resetOtp();
            }
            const error = await onSubmit({ ...form, name: form.name.trim(), company: form.company.trim(), email: form.email.trim() });
            if (error) setFormError(error);
        } catch (err) {
            setFormError((err as Error).message || "Verification failed. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const input = (error?: string) =>
        `w-full h-10 rounded-lg bg-white border px-3 text-[13px] text-slate-800 placeholder:text-slate-400 outline-none transition focus:ring-4 disabled:bg-slate-50 ${
            error ? "border-red-400 focus:border-red-500 focus:ring-red-500/15" : "border-[#dfe6d8] focus:border-[#3b8c2a] focus:ring-[#3b8c2a]/15"
        }`;
    const label = "text-[12.5px] font-medium text-slate-800";
    const fieldError = (key: keyof QuoteErrors) =>
        errors[key] && (
            <span role="alert" className="text-[11px] text-red-600">
                {errors[key]}
            </span>
        );

    return (
        <form
            onSubmit={submit}
            noValidate
            className="relative bg-white rounded-2xl border border-[#3b8c2a]/10 shadow-[0_4px_20px_-8px_rgba(11,41,18,0.2)] px-3.5 pt-3 pb-3 flex flex-col gap-2.5"
        >
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <p className="mr-auto font-poppins font-semibold text-[16px] text-[#14532d]">{callback ? q.callbackTitle : q.title}</p>
                {callback ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f3e2] px-2.5 py-1 text-[11.5px] font-medium text-[#14532d]">
                        <Store className="w-3.5 h-3.5" aria-hidden="true" />
                        {q.enquiry}
                        {stall && ` • ${stall}`}
                    </span>
                ) : (
                    <span className="rounded-full bg-[#e8f3e2] px-2.5 py-1 text-[11.5px] font-medium text-[#14532d]">
                        {q.selected} {stall}
                    </span>
                )}
                {!sent && !callback && (
                    <button type="button" onClick={onChange} className="text-[12.5px] font-medium text-[#14532d] underline underline-offset-2 hover:text-[#3b8c2a]">
                        {q.change}
                    </button>
                )}
            </div>

            <fieldset disabled={sent || submitting} className="flex flex-col gap-2.5 min-w-0">
                <div className={`grid gap-2.5 ${callback ? "grid-cols-1" : "grid-cols-2"}`}>
                    <label className="flex flex-col gap-1 min-w-0">
                        <span className={label}>
                            {q.name} <span className="text-red-500">*</span>
                        </span>
                        <input
                            value={form.name}
                            onChange={(e) => set("name", cleanName(e.target.value))}
                            autoComplete="name"
                            maxLength={60}
                            placeholder={q.namePh}
                            aria-invalid={!!errors.name}
                            className={input(errors.name)}
                        />
                        {fieldError("name")}
                    </label>
                    <label className="flex flex-col gap-1 min-w-0">
                        <span className={label}>
                            {q.phone} <span className="text-red-500">*</span>
                        </span>
                        <span className="relative">
                            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[13px] font-medium text-slate-700" aria-hidden="true">
                                +91
                            </span>
                            <input
                                type="tel"
                                inputMode="numeric"
                                autoComplete="tel-national"
                                value={form.phone}
                                onChange={(e) => set("phone", cleanMobile(e.target.value))}
                                onPaste={(e) => {
                                    // maxLength would cut "+91 98765 43210" before it can be cleaned
                                    e.preventDefault();
                                    set("phone", cleanMobile(e.clipboardData.getData("text")));
                                }}
                                maxLength={10}
                                readOnly={!!otpSentTo}
                                placeholder={q.phonePh}
                                aria-invalid={!!errors.phone}
                                className={`${input(errors.phone)} !pl-10 ${phoneVerified && !otpSentTo ? "!pr-8" : "!pr-2"} ${otpSentTo ? "bg-slate-50" : ""}`}
                            />
                            {/* Only an icon inside: the field is half the form wide, so text here would cover the number */}
                            {phoneVerified && !otpSentTo && (
                                <span
                                    title={q.verified}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 grid h-[18px] w-[18px] place-items-center rounded-full bg-[#3b8c2a] text-white"
                                >
                                    <Check className="w-3 h-3" strokeWidth={3} aria-hidden="true" />
                                    <span className="sr-only">{q.verified}</span>
                                </span>
                            )}
                        </span>
                        {otpSentTo && (
                            <button
                                type="button"
                                onClick={() => {
                                    resetOtp();
                                    setFormError("");
                                }}
                                className="self-end text-[11.5px] font-semibold text-[#14532d] underline underline-offset-2 hover:text-[#3b8c2a]"
                            >
                                {q.change}
                            </button>
                        )}
                        {fieldError("phone")}
                    </label>
                </div>

                {otpSentTo && (
                    <label className="flex flex-col gap-1">
                        <span className={label}>
                            {q.otp} <span className="text-red-500">*</span>
                        </span>
                        <span className="text-[11.5px] text-[#14532d]">{q.otpSent(otpSentTo)}</span>
                        <input
                            type="text"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            autoFocus
                            maxLength={6}
                            value={otp}
                            onChange={(e) => {
                                setOtp(e.target.value.replace(/\D/g, "").slice(0, 6));
                                if (formError) setFormError("");
                            }}
                            placeholder={q.otpPh}
                            className={`${input()} tracking-[0.3em] placeholder:tracking-normal`}
                        />
                        <span className="text-right text-[11.5px]">
                            {timer > 0 ? (
                                <span className="text-slate-500">{q.resendIn(timer)}</span>
                            ) : (
                                <button type="button" onClick={sendOtp} className="font-semibold text-[#14532d] hover:text-[#3b8c2a]">
                                    {q.resend}
                                </button>
                            )}
                        </span>
                    </label>
                )}

                {callback ? (
                    <label className="flex flex-col gap-1">
                        <span className={label}>{q.time}</span>
                        <span className="relative">
                            <select
                                value={form.time}
                                onChange={(e) => set("time", e.target.value)}
                                className={`${input()} appearance-none pr-9 cursor-pointer`}
                            >
                                {q.times.map((slot, idx) => (
                                    <option key={slot} value={idx ? slot : ""}>
                                        {slot}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" aria-hidden="true" />
                        </span>
                    </label>
                ) : (
                <>
                <label className="flex flex-col gap-1">
                    <span className={label}>{q.company}</span>
                    <input
                        value={form.company}
                        onChange={(e) => set("company", e.target.value.replace(/^\s+/, ""))}
                        autoComplete="organization"
                        maxLength={100}
                        placeholder={q.companyPh}
                        className={input()}
                    />
                </label>

                <label className="flex flex-col gap-1">
                    <span className={label}>{q.email}</span>
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value.trim())}
                        autoComplete="email"
                        maxLength={100}
                        placeholder={q.emailPh}
                        aria-invalid={!!errors.email}
                        className={input(errors.email)}
                    />
                    {fieldError("email")}
                </label>
                </>
                )}

                <label className="flex items-start gap-2 text-[12.5px] text-slate-700 cursor-pointer">
                    <input
                        type="checkbox"
                        checked={agree}
                        onChange={(e) => {
                            setAgree(e.target.checked);
                            if (errors.agree) setErrors((prev) => ({ ...prev, agree: undefined }));
                        }}
                        className="mt-0.5 w-4 h-4 shrink-0 accent-[#14532d]"
                    />
                    {q.agree}
                </label>
                {fieldError("agree")}

                {formError && (
                    <p role="alert" className="text-[12px] text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                        {formError}
                    </p>
                )}

                <button
                    type="submit"
                    className="h-11 rounded-lg bg-[#14532d] hover:bg-[#1b5e20] text-white font-poppins font-medium text-[15px] flex items-center justify-center gap-2 transition active:scale-[0.99] disabled:opacity-70"
                >
                    {sent ? (
                        <>
                            <CheckCheck className="w-5 h-5" aria-hidden="true" />
                            {callback ? q.callbackSent : q.sent}
                        </>
                    ) : submitting ? (
                        <>
                            <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" aria-hidden="true" />
                            {q.sending}
                        </>
                    ) : !phoneVerified ? (
                        otpSentTo ? q.verifySubmit : q.sendOtp
                    ) : (
                        <>
                            {callback ? q.callbackSubmit : q.submit}
                            {!callback && <ArrowRight className="w-5 h-5" aria-hidden="true" />}
                        </>
                    )}
                </button>
                {callback && <p className="-mt-1 text-center text-[11px] text-slate-500">{q.callbackNote}</p>}
            </fieldset>

            {!sent && !callback && (
                <button
                    type="button"
                    onClick={onBack}
                    className="self-start inline-flex items-center gap-1.5 text-[13px] font-medium text-[#14532d] underline underline-offset-2 hover:text-[#3b8c2a]"
                >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    {q.back}
                </button>
            )}
        </form>
    );
};

// ─── Estimated stall price (inside the chat) ─────────────────────────────────

/** Used until the admin sets a rate in Add by Admin → Events & Stalls → Stall rates */
const FALLBACK_RATE = { stallType: "Standard", ratePerSqm: 11200 };
const GST_PERCENT = 18;
/** Extra on the base rent for each open side beyond the first */
const OPEN_SIDE_PREMIUM: Record<OpenSides, number> = { 1: 0, 2: 10, 3: 15 };

type StallRate = { stallType: string; ratePerSqm: number };
let rateRequest: Promise<StallRate> | null = null;

/** INR rate per sq.m of the active event's "Standard" stalls (or its first INR rate); one request per page load */
const loadStallRate = (): Promise<StallRate> => {
    rateRequest ??= (async () => {
        const getData = async (path: string) => {
            const res = await fetch(`${API_URL}${path}`);
            return res.ok ? (await res.json())?.data : null;
        };
        try {
            const events = await getData("/events/active");
            const eventId = Array.isArray(events) ? events[0]?._id : null;
            if (!eventId) return FALLBACK_RATE;
            const rates = await getData(`/stall-rates/event/${eventId}`);
            const inr = (Array.isArray(rates) ? (rates as (StallRate & { currency: string })[]) : []).filter(
                (r) => r.currency === "INR" && r.ratePerSqm > 0
            );
            const rate = inr.find((r) => /standard/i.test(r.stallType)) || inr[0];
            return rate ? { stallType: rate.stallType, ratePerSqm: rate.ratePerSqm } : FALLBACK_RATE;
        } catch {
            rateRequest = null; // try again next time
            return FALLBACK_RATE;
        }
    })();
    return rateRequest;
};

/** Base rent, open-side premium on it, then GST on the revised amount */
const priceBreakdown = (ratePerSqm: number, sqm: number, sides: OpenSides) => {
    const pct = OPEN_SIDE_PREMIUM[sides];
    const base = sqm * ratePerSqm;
    const premium = Math.round((base * pct) / 100);
    const gst = Math.round(((base + premium) * GST_PERCENT) / 100);
    return { pct, base, premium, gst, total: base + premium + gst };
};

/** Active event's stall rate, or null while it loads */
const useStallRate = () => {
    const [rate, setRate] = useState<StallRate | null>(null);
    useEffect(() => {
        let cancelled = false;
        loadStallRate().then((r) => {
            if (!cancelled) setRate(r);
        });
        return () => {
            cancelled = true;
        };
    }, []);
    return rate;
};

const rupees = (amount: number) => `₹${Math.round(amount).toLocaleString("en-IN")}`;

const PRICE_TEXT = {
    en: {
        stall: "Stall",
        open: (sides: number) => `${sides}-side open`,
        rate: "Rate per sq.m",
        base: "Base Amount",
        premium: (pct: number) => `Open-side premium (${pct}%)`,
        gst: `GST (${GST_PERCENT}%)`,
        total: "Estimated Total",
        sidesLabel: "Open-side preference",
        side: (sides: number) => `${sides}-side`,
        premiumNote: "Premium applies to base rent. GST is calculated on the revised amount.",
        confirmNote: "Final availability and quotation will be confirmed by our sales team.",
        proceed: "Proceed to Booking",
        quote: "Request Quotation",
        changeSize: "Change Size",
        sales: "Talk to Sales",
    },
    hi: {
        stall: "स्टॉल",
        open: (sides: number) => `${sides}-साइड खुला`,
        rate: "प्रति sq.m दर",
        base: "बेस राशि",
        premium: (pct: number) => `ओपन-साइड प्रीमियम (${pct}%)`,
        gst: `GST (${GST_PERCENT}%)`,
        total: "अनुमानित कुल",
        sidesLabel: "ओपन-साइड पसंद",
        side: (sides: number) => `${sides}-साइड`,
        premiumNote: "प्रीमियम बेस किराए पर लगता है। GST बदली हुई राशि पर लगता है।",
        confirmNote: "अंतिम उपलब्धता और कोटेशन हमारी सेल्स टीम कन्फर्म करेगी।",
        proceed: "बुकिंग पर जाएं",
        quote: "कोटेशन मंगवाएं",
        changeSize: "साइज़ बदलें",
        sales: "सेल्स टीम से बात करें",
    },
} as const;

type PriceCardProps = { lang: Lang; stall: string; sqm: number; sides: OpenSides; onSides: (sides: OpenSides) => void };

const PriceCard: React.FC<PriceCardProps> = ({ lang, stall, sqm, sides, onSides }) => {
    const pt = PRICE_TEXT[lang];
    const rate = useStallRate();
    const { pct, base, premium, gst, total } = priceBreakdown(rate?.ratePerSqm || 0, sqm, sides);
    const amount = (value: number) => (rate ? rupees(value) : <span className="inline-block w-16 h-3.5 rounded bg-slate-200 animate-pulse align-middle" />);

    const rows: [string, React.ReactNode][] = [
        [pt.rate, amount(rate?.ratePerSqm || 0)],
        [pt.base, amount(base)],
        ...(pct ? ([[pt.premium(pct), amount(premium)]] as [string, React.ReactNode][]) : []),
        [pt.gst, amount(gst)],
    ];

    return (
        <div className="ml-[40px] bg-white rounded-2xl border border-[#3b8c2a]/10 shadow-sm px-3.5 pt-3 pb-2.5" aria-live="polite">
            <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-poppins font-bold text-[17px] text-[#14532d]">
                    {stall} {pt.stall}
                </p>
                <span className="rounded-full bg-[#e8f3e2] px-3 py-1 text-[12px] font-medium text-[#14532d]">
                    {rate?.stallType || FALLBACK_RATE.stallType} • {pt.open(sides)}
                </span>
            </div>

            <dl className="mt-2 text-[13.5px]">
                {rows.map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between gap-3 border-b border-slate-100 px-1 py-1.5">
                        <dt className="text-slate-700">{label}</dt>
                        <dd className="font-medium text-slate-900 tabular-nums">{value}</dd>
                    </div>
                ))}
            </dl>

            <div className="mt-2 flex items-center justify-between gap-3 rounded-xl bg-[#e8f3e2] px-3 py-2.5">
                <span className="font-poppins font-semibold text-[15px] text-[#14532d]">{pt.total}</span>
                <span className="font-poppins font-bold text-[19px] text-[#14532d] tabular-nums">{amount(total)}</span>
            </div>

            <p className="mt-2.5 text-[12.5px] font-medium text-slate-800">{pt.sidesLabel}</p>
            <div className="mt-1.5 grid grid-cols-3 gap-1.5" role="radiogroup" aria-label={pt.sidesLabel}>
                {([1, 2, 3] as const).map((n) => (
                    <button
                        key={n}
                        type="button"
                        role="radio"
                        aria-checked={sides === n}
                        onClick={() => onSides(n)}
                        className={`rounded-full border px-1 py-1.5 text-[12.5px] font-medium transition ${
                            sides === n ? "bg-[#14532d] border-[#14532d] text-white" : "bg-white border-[#14532d]/60 text-[#0b2912] hover:bg-[#f1f7ee]"
                        }`}
                    >
                        {pt.side(n)}
                        {OPEN_SIDE_PREMIUM[n] ? ` (+${OPEN_SIDE_PREMIUM[n]}%)` : ""}
                    </button>
                ))}
            </div>
            <p className="mt-2 pb-2 border-b border-slate-100 text-[11px] leading-snug text-slate-500">{pt.premiumNote}</p>
            <p className="mt-2 flex items-start gap-1.5 text-[11px] leading-snug text-slate-500">
                <Info className="w-3.5 h-3.5 shrink-0 mt-px" aria-hidden="true" />
                {pt.confirmNote}
            </p>
        </div>
    );
};

// ─── Returning visitor: verify with OTP before showing previous enquiries ────

const VERIFY_TEXT = {
    en: {
        phoneLabel: "Registered mobile number",
        phonePh: "Enter mobile number",
        emailLabel: "Registered email",
        emailPh: "Enter email address",
        send: "Send OTP",
        sending: "Sending...",
        otpLabel: (to: string) => `Enter the 6-digit OTP sent to ${to}`,
        otpPh: "6-digit OTP",
        verify: "Verify & View",
        verifying: "Verifying...",
        resend: "Resend OTP",
        resendIn: (s: number) => `Resend OTP in ${s}s`,
        change: "Change",
        verified: "Verified",
        note: "Your previous chats are shown only after verification.",
        useEmail: "Use registered email instead",
        usePhone: "Use registered mobile number instead",
        phoneError: "Enter a valid 10-digit mobile number.",
        emailError: "Enter a valid email address.",
        otpError: "Enter the 6-digit OTP.",
        failed: "Something went wrong. Please try again.",
    },
    hi: {
        phoneLabel: "रजिस्टर्ड मोबाइल नंबर",
        phonePh: "मोबाइल नंबर लिखें",
        emailLabel: "रजिस्टर्ड ईमेल",
        emailPh: "ईमेल पता लिखें",
        send: "OTP भेजें",
        sending: "भेजा जा रहा है...",
        otpLabel: (to: string) => `${to} पर भेजा गया 6 अंकों का OTP लिखें`,
        otpPh: "6 अंकों का OTP",
        verify: "वेरिफ़ाई करें और देखें",
        verifying: "वेरिफ़ाई हो रहा है...",
        resend: "OTP दोबारा भेजें",
        resendIn: (s: number) => `${s} सेकंड में OTP दोबारा भेजें`,
        change: "बदलें",
        verified: "वेरिफ़ाई हो गया",
        note: "आपकी पिछली चैट वेरिफ़िकेशन के बाद ही दिखाई जाती है।",
        useEmail: "इसकी जगह रजिस्टर्ड ईमेल इस्तेमाल करें",
        usePhone: "इसकी जगह रजिस्टर्ड मोबाइल नंबर इस्तेमाल करें",
        phoneError: "सही 10 अंकों का मोबाइल नंबर लिखें।",
        emailError: "सही ईमेल पता लिखें।",
        otpError: "6 अंकों का OTP लिखें।",
        failed: "कुछ गड़बड़ हो गई। कृपया दोबारा कोशिश करें।",
    },
} as const;

/** Must match CHAT_HISTORY_OTP_PROFILE in the backend's chat controller */
const HISTORY_OTP_PROFILE = "CHAT_HISTORY";
const RESEND_SECONDS = 30;

type VerifyTarget = { phone: string } | { email: string };

type VerifyCardProps = {
    lang: Lang;
    done: boolean;
    /** Loads the history once the OTP is verified; returns an error message, or null */
    onVerified: (target: VerifyTarget) => Promise<string | null>;
};

const VerifyCard: React.FC<VerifyCardProps> = ({ lang, done, onVerified }) => {
    const v = VERIFY_TEXT[lang];
    const [mode, setMode] = useState<"phone" | "email">("phone");
    const [value, setValue] = useState("");
    const [sentTo, setSentTo] = useState("");
    const [otp, setOtp] = useState("");
    const [busy, setBusy] = useState(false);
    const [error, setError] = useState("");
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        if (!timer) return;
        const id = window.setTimeout(() => setTimer((s) => s - 1), 1000);
        return () => window.clearTimeout(id);
    }, [timer]);

    const isPhone = mode === "phone";
    const target = (): VerifyTarget => (isPhone ? { phone: value } : { email: value.trim().toLowerCase() });

    const sendOtp = async () => {
        if (isPhone ? !/^[6-9]\d{9}$/.test(value) : !EMAIL_PATTERN.test(value.trim())) {
            setError(isPhone ? v.phoneError : v.emailError);
            return;
        }
        setBusy(true);
        setError("");
        try {
            const res = isPhone
                ? await verifyApi.sendPhoneOtp(value, HISTORY_OTP_PROFILE)
                : await verifyApi.sendEmailOtp(value.trim().toLowerCase(), HISTORY_OTP_PROFILE);
            if (!res?.success) throw new Error(res?.msg || res?.message || "");
            setSentTo(isPhone ? `+91 ${value}` : value.trim());
            setOtp("");
            setTimer(RESEND_SECONDS);
        } catch (err) {
            setError((err as Error).message || v.failed);
        } finally {
            setBusy(false);
        }
    };

    const verify = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!sentTo) return sendOtp();
        if (otp.length !== 6) {
            setError(v.otpError);
            return;
        }
        setBusy(true);
        setError("");
        try {
            const t = target();
            const res = "phone" in t ? await verifyApi.verifyPhoneOtp(t.phone, otp) : await verifyApi.verifyEmailOtp(t.email, otp);
            if (!res?.success) throw new Error(res?.msg || res?.message || "");
            const loadError = await onVerified(t);
            if (loadError) throw new Error(loadError);
        } catch (err) {
            setError((err as Error).message || v.failed);
        } finally {
            setBusy(false);
        }
    };

    const reset = (nextMode = mode) => {
        setMode(nextMode);
        setSentTo("");
        setOtp("");
        setError("");
        setTimer(0);
        if (nextMode !== mode) setValue("");
    };

    const field =
        "w-full h-10 rounded-lg bg-white border border-[#dfe6d8] px-3 text-[13.5px] text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-[#3b8c2a] focus:ring-4 focus:ring-[#3b8c2a]/15 disabled:bg-slate-50";

    return (
        <form onSubmit={verify} noValidate className="ml-[42px] bg-white rounded-2xl border border-[#3b8c2a]/10 shadow-sm px-3.5 pt-3 pb-3 flex flex-col gap-2.5">
            <fieldset disabled={done || busy} className="flex flex-col gap-2.5 min-w-0">
                <label className="flex flex-col gap-1.5">
                    <span className="text-[13px] font-medium text-slate-800">{isPhone ? v.phoneLabel : v.emailLabel}</span>
                    <span className="relative flex items-center">
                        {isPhone && (
                            <span className="absolute left-0 inset-y-0 flex items-center px-3 border-r border-[#dfe6d8] text-[13.5px] font-medium text-slate-700" aria-hidden="true">
                                +91
                            </span>
                        )}
                        <input
                            type={isPhone ? "tel" : "email"}
                            inputMode={isPhone ? "numeric" : "email"}
                            autoComplete={isPhone ? "tel-national" : "email"}
                            value={value}
                            readOnly={!!sentTo}
                            onChange={(e) => {
                                setValue(isPhone ? cleanMobile(e.target.value) : e.target.value.trim());
                                setError("");
                            }}
                            onPaste={
                                isPhone
                                    ? (e) => {
                                          // maxLength would cut "+91 98765 43210" before it can be cleaned
                                          e.preventDefault();
                                          setValue(cleanMobile(e.clipboardData.getData("text")));
                                      }
                                    : undefined
                            }
                            maxLength={isPhone ? 10 : 100}
                            placeholder={isPhone ? v.phonePh : v.emailPh}
                            className={`${field} ${isPhone ? "!pl-[60px]" : ""} ${sentTo ? "!pr-16 bg-slate-50" : ""}`}
                        />
                        {sentTo && !done && (
                            <button
                                type="button"
                                onClick={() => reset()}
                                className="absolute right-3 text-[12px] font-medium text-[#14532d] underline underline-offset-2 hover:text-[#3b8c2a]"
                            >
                                {v.change}
                            </button>
                        )}
                    </span>
                </label>

                {sentTo && (
                    <label className="flex flex-col gap-1.5">
                        <span className="text-[12.5px] text-slate-700">{v.otpLabel(sentTo)}</span>
                        <input
                            type="text"
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            value={otp}
                            onChange={(e) => {
                                setOtp(e.target.value.replace(/\D/g, "").slice(0, 6));
                                setError("");
                            }}
                            maxLength={6}
                            placeholder={v.otpPh}
                            autoFocus
                            className={`${field} tracking-[0.3em] placeholder:tracking-normal`}
                        />
                    </label>
                )}

                {error && (
                    <p role="alert" className="text-[12px] text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    className="h-11 rounded-full bg-[#14532d] hover:bg-[#1b5e20] text-white font-poppins font-medium text-[15px] flex items-center justify-center gap-2 transition active:scale-[0.99] disabled:opacity-70"
                >
                    {done ? (
                        <>
                            <CheckCheck className="w-5 h-5" aria-hidden="true" />
                            {v.verified}
                        </>
                    ) : busy ? (
                        <>
                            <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" aria-hidden="true" />
                            {sentTo ? v.verifying : v.sending}
                        </>
                    ) : sentTo ? (
                        v.verify
                    ) : (
                        v.send
                    )}
                </button>
            </fieldset>

            {!done && (
                <div className="flex flex-col items-center gap-1 text-center text-[11.5px] leading-snug text-slate-500">
                    {sentTo ? (
                        <button
                            type="button"
                            onClick={sendOtp}
                            disabled={busy || timer > 0}
                            className="font-medium text-[#14532d] underline underline-offset-2 hover:text-[#3b8c2a] disabled:no-underline disabled:text-slate-400"
                        >
                            {timer > 0 ? v.resendIn(timer) : v.resend}
                        </button>
                    ) : (
                        <p>{v.note}</p>
                    )}
                    <button
                        type="button"
                        onClick={() => reset(isPhone ? "email" : "phone")}
                        disabled={busy}
                        className="font-medium text-[#14532d] underline underline-offset-2 hover:text-[#3b8c2a]"
                    >
                        {isPhone ? v.useEmail : v.usePhone}
                    </button>
                </div>
            )}
        </form>
    );
};

const HistoryList: React.FC<{ lang: Lang; items: HistoryItem[] }> = ({ lang, items }) => {
    const t = TEXT[lang];
    return (
        <ul className="ml-[42px] flex flex-col gap-2">
            {items.map((item, idx) => (
                <li key={idx} className="bg-white rounded-2xl border border-[#3b8c2a]/10 shadow-sm px-3.5 py-2.5">
                    <p className="text-[11.5px] text-slate-500">
                        {new Date(item.startedAt).toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </p>
                    {item.requests.length > 0 && (
                        <div className="mt-1 flex flex-wrap gap-1.5">
                            {item.requests.map((r, j) => (
                                <span key={j} className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f3e2] px-2.5 py-1 text-[11.5px] font-medium text-[#14532d]">
                                    <Store className="w-3.5 h-3.5" aria-hidden="true" />
                                    {r.type === "sales-callback" ? t.historyCallback : t.historyQuote}
                                    {r.stallSize && ` • ${r.stallSize}`}
                                    {r.preferredTime && ` • ${r.preferredTime}`}
                                </span>
                            ))}
                        </div>
                    )}
                    <p className="mt-1 text-[13px] leading-snug text-slate-800 break-words">{item.question || (item.requests.length ? "" : t.historyChat)}</p>
                </li>
            ))}
        </ul>
    );
};

// ─── Proceed to booking (inside the chat) ────────────────────────────────────

const BOOKING_TEXT = {
    en: {
        say: "Proceed to booking",
        ready: "You're ready to continue to the stall booking form.",
        title: "Your Stall Preference",
        size: "Stall Size",
        sides: "Open Sides",
        total: "Estimated Total (incl. GST)",
        next: "Complete your exhibitor details and review the booking terms on the next page.",
        open: "Open Stall Booking Form",
        carry: "Your selected size and open-side preference will carry forward.",
        subject: "Stall allocation is subject to availability and booking confirmation.",
        change: "Change Preference",
        placeholder: "Need help with booking?...",
    },
    hi: {
        say: "बुकिंग पर आगे बढ़ें",
        ready: "आप स्टॉल बुकिंग फॉर्म पर आगे बढ़ने के लिए तैयार हैं।",
        title: "आपकी स्टॉल पसंद",
        size: "स्टॉल साइज़",
        sides: "ओपन साइड",
        total: "अनुमानित कुल (GST सहित)",
        next: "अगले पेज पर अपना एग्ज़िबिटर विवरण भरें और बुकिंग की शर्तें देखें।",
        open: "स्टॉल बुकिंग फॉर्म खोलें",
        carry: "आपका चुना गया साइज़ और ओपन-साइड पसंद आगे साथ जाएगी।",
        subject: "स्टॉल आवंटन उपलब्धता और बुकिंग कन्फर्मेशन पर निर्भर है।",
        change: "पसंद बदलें",
        placeholder: "बुकिंग में मदद चाहिए?...",
    },
} as const;

const StallSummary: React.FC<{ lang: Lang; choice: StallChoice }> = ({ lang, choice }) => {
    const bt = BOOKING_TEXT[lang];
    const rate = useStallRate();
    const sides = choice.sides ?? 1;
    const { total } = priceBreakdown(rate?.ratePerSqm || 0, choice.sqm, sides);

    return (
        <div className="ml-[42px] bg-white rounded-2xl border border-[#3b8c2a]/10 shadow-sm px-3.5 pt-3 pb-3" aria-live="polite">
            <p className="font-poppins font-semibold text-[16px] text-[#14532d]">{bt.title}</p>
            <dl className="mt-1.5 text-[13.5px]">
                {[
                    [bt.size, choice.stall],
                    [bt.sides, PRICE_TEXT[lang].open(sides)],
                ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between gap-3 border-t border-slate-100 px-1 py-1.5">
                        <dt className="text-slate-700">{label}</dt>
                        <dd className="font-medium text-slate-900">{value}</dd>
                    </div>
                ))}
            </dl>
            <div className="mt-1 flex items-center justify-between gap-3 rounded-xl bg-[#e8f3e2] px-3 py-2.5">
                <span className="font-poppins font-semibold text-[14.5px] text-[#14532d]">{bt.total}</span>
                <span className="font-poppins font-bold text-[19px] text-[#14532d] tabular-nums">
                    {rate ? rupees(total) : <span className="inline-block w-20 h-4 rounded bg-slate-200 animate-pulse align-middle" />}
                </span>
            </div>
        </div>
    );
};

// ─── Panel ───────────────────────────────────────────────────────────────────

type Props = { open: boolean; onClose: () => void };

const ChatPanel: React.FC<Props> = ({ open, onClose }) => {
    // Resume this browser's chat only while it is still active (see chatSession.ts)
    const [initial] = useState(readChatSession);
    const [sessionId, setSessionId] = useState(() => (initial.status === "active" ? initial.sessionId : newSessionId()));
    // null until the mobile number is verified — the chat is then saved as "Visitor <ip>"
    const [visitorName, setVisitorName] = useState<string | null>(initial.status === "active" ? initial.name || null : null);
    // AI questions sent without details (the details form comes after FREE_QUESTIONS)
    const [freeAsked, setFreeAsked] = useState(0);
    // Name, greetings and on/off published from the admin panel's Chatbot Manager
    const config = useChatConfig();
    // Mobile number this chat verified with the WhatsApp OTP
    const [verifiedPhone, setVerifiedPhone] = useState(initial.status === "active" ? initial.phone : "");
    const [lang, setLangState] = useState<Lang>(readLang);
    const config0 = TEXT[lang];
    const published = config?.messages?.[lang];
    const botName = config?.name?.trim() || "Organic Mitra";
    const t = {
        ...config0,
        subtitle: config?.subtitle?.trim() || config0.subtitle,
        typing: config0.typing.replace("Organic Mitra", botName),
        greeting: published?.welcomeGreeting || published?.welcomeMessage
            ? [published?.welcomeGreeting, published?.welcomeMessage].filter(Boolean).join("\n")
            : config0.greeting,
        endedBye: published?.closingGreeting || config0.endedBye,
    };

    // Welcome screen first; the details form only appears once the visitor picks a topic or asks something
    const [askDetails, setAskDetails] = useState(false);
    const [pending, setPending] = useState<{ message: string; topic: string } | null>(null);
    const [form, setForm] = useState<LeadForm>({ name: "", phone: "" });
    const [fieldErrors, setFieldErrors] = useState<LeadErrors>({});
    const [formError, setFormError] = useState("");
    const [submitting, setSubmitting] = useState(false);
    // WhatsApp OTP for the details form: the number it was sent to ("" until sent), the code typed, resend countdown
    const [otpSentTo, setOtpSentTo] = useState("");
    const [otp, setOtp] = useState("");
    const [otpTimer, setOtpTimer] = useState(0);
    const [otpVerified, setOtpVerified] = useState(false);

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    // Scripted step being discussed, for the input hint ("Ask about stall booking...")
    const [flowAt, setFlowAt] = useState<{ step: string; choice: string } | null>(null);
    // "Chat ended" screen after a callback request, with optional 👍 / 👎
    const [ended, setEnded] = useState(false);
    // After "Start a New Chat": "Welcome back" with previous enquiry / new question instead of the topic cards
    const [returning, setReturning] = useState(false);
    const [feedback, setFeedback] = useState<"yes" | "no" | null>(null);

    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const animatedOnce = useRef(false);

    // Opening: the panel springs up from the launcher (bottom-right), then the header, greeting,
    // topic cards and input slide in one after another. Closing: a quick fade + drop.
    useLayoutEffect(() => {
        const panel = panelRef.current;
        if (!panel) return;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const parts = panel.querySelectorAll<HTMLElement>("[data-chat-anim]");
        const ctx = gsap.context(() => {
            gsap.killTweensOf([panel, ...parts]);
            if (open) {
                if (reduce) {
                    gsap.set(panel, { autoAlpha: 1, y: 0, scale: 1 });
                    gsap.set(parts, { autoAlpha: 1, y: 0, scale: 1 });
                    return;
                }
                gsap.timeline()
                    .fromTo(
                        panel,
                        { autoAlpha: 0, y: 40, scale: 0.86, transformOrigin: "100% 100%" },
                        { autoAlpha: 1, y: 0, scale: 1, duration: 0.55, ease: "back.out(1.5)" }
                    )
                    .fromTo(
                        parts,
                        { autoAlpha: 0, y: 14, scale: 0.97 },
                        { autoAlpha: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out", stagger: 0.045, clearProps: "transform" },
                        "-=0.32"
                    );
            } else if (animatedOnce.current) {
                gsap.to(panel, {
                    autoAlpha: 0,
                    y: 24,
                    scale: 0.92,
                    transformOrigin: "100% 100%",
                    duration: reduce ? 0 : 0.24,
                    ease: "power2.in",
                });
            } else {
                gsap.set(panel, { autoAlpha: 0 });
            }
        }, panel);
        animatedOnce.current = true;
        return () => ctx.kill();
    }, [open]);

    const showForm = !ended && !visitorName && askDetails;
    const showWelcome = !showForm && messages.length === 0;
    const showWelcomeBack = showWelcome && returning;

    const setLang = (next: Lang) => {
        setLangState(next);
        saveLang(next);
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (el && messages.length) el.scrollTop = el.scrollHeight;
    }, [messages, loading]);

    useEffect(() => {
        if (open && !showForm && !loading) inputRef.current?.focus();
    }, [open, showForm, loading]);

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

    const setLastReply = (update: (text: string) => string) =>
        setMessages((prev) => {
            const next = [...prev];
            const last = next[next.length - 1];
            next[next.length - 1] = { ...last, content: update(last.content) };
            return next;
        });

    useEffect(() => {
        if (!otpTimer) return;
        const id = window.setTimeout(() => setOtpTimer((s) => s - 1), 1000);
        return () => window.clearTimeout(id);
    }, [otpTimer]);

    const resetOtp = () => {
        setOtpSentTo("");
        setOtp("");
        setOtpTimer(0);
        setOtpVerified(false);
    };

    /** Forget the current visitor and go back to the welcome screen for the next person. */
    const startNewChat = (notice = "") => {
        clearChatSession();
        setSessionId(newSessionId());
        setVisitorName(null);
        setVerifiedPhone("");
        setFreeAsked(0);
        setMessages([]);
        setInput("");
        setPending(null);
        setFlowAt(null);
        setEnded(false);
        setFeedback(null);
        setReturning(false);
        setAskDetails(!!notice);
        setForm({ name: "", phone: "" });
        setFieldErrors({});
        setFormError(notice);
        resetOtp();
    };

    /**
     * Saves clicks, scripted replies and feedback for the admin panel — under the visitor's IP until
     * the mobile number is verified. Fire-and-forget: the chat never waits for or breaks on it.
     */
    const track = (messages: { role: "user" | "assistant"; content: string }[], feedbackValue?: "yes" | "no") => {
        const toSave = messages.filter((m) => m.content.trim()).map((m) => ({ role: m.role, content: m.content.trim().slice(0, 2000) }));
        if (!toSave.length && !feedbackValue) return;
        fetch(`${CHAT_URL}/track`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            keepalive: true,
            body: JSON.stringify({
                sessionId,
                pageUrl: window.location.href,
                ...(toSave.length ? { messages: toSave.slice(0, 10) } : {}),
                ...(feedbackValue ? { feedback: feedbackValue } : {}),
            }),
        }).catch(() => {});
    };

    const sendMessage = async (text: string, topic = "", name = visitorName) => {
        const message = text.trim().slice(0, 1000);
        if (!message || loading) return;

        // Visitors chat freely at first; name + mobile (OTP) are asked before question FREE_QUESTIONS + 1
        if (!name && freeAsked >= FREE_QUESTIONS) {
            // Saved now, so the question is not lost if the visitor leaves at the details form
            track([{ role: "user", content: message }]);
            setPending({ message, topic: topic || message });
            setInput("");
            setFormError("");
            setAskDetails(true);
            return;
        }

        // Panel left open for 30+ minutes (or browser restarted) — treat it as a new visitor
        if (readChatSession().status === "expired") {
            startNewChat(TEXT[lang].expired);
            setPending({ message, topic: topic || message });
            return;
        }
        saveChatSession(sessionId, name || "");
        if (!name) setFreeAsked((n) => n + 1);

        setInput("");
        setLoading(true);
        setMessages((prev) => [...prev, { role: "user", content: topic || message }, { role: "assistant", content: "" }]);

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
                    startNewChat(TEXT[lang].expired);
                    setPending({ message, topic: topic || message });
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

    /** Scripted answer from FLOW: no contact details needed; a short "typing" pause so it reads like a reply */
    const runStep = (step: string, choice = "", silent = false) => {
        const flow = FLOW[step]?.(lang, choice);
        if (!flow || loading) return;
        track([...(silent ? [] : [{ role: "user" as const, content: flow.say }]), ...flow.replies.map((r) => ({ role: r.role, content: r.content }))]);
        setFlowAt({ step, choice });
        if (!silent) setMessages((prev) => [...prev, { role: "user", content: flow.say }]);
        setLoading(true);
        window.setTimeout(() => {
            setMessages((prev) => [...prev, ...flow.replies]);
            setLoading(false);
        }, 700);
    };

    const pickTopic = (topic: Topic) => {
        if (loading) return;
        if (topic.step) {
            runStep(topic.step);
            return;
        }
        setFlowAt(null);
        sendMessage(topic.ask[lang], topic.label[lang]);
    };

    const pickOption = (option: ChatOption) => {
        if (option.step) runStep(option.step, option.choice ?? option.label);
        else if (option.ask) sendMessage(option.ask, option.label);
    };

    /** Saves a quotation / callback request as a chat lead; returns an error message, or null when it was sent */
    const submitQuote = async (index: number, stall: string, details: QuoteDetails, kind: "quote" | "callback" = "quote"): Promise<string | null> => {
        try {
            const res = await fetch(`${CHAT_URL}/lead`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    sessionId,
                    name: details.name,
                    phone: details.phone,
                    pageUrl: window.location.href,
                    // Not stored by /chat/lead yet; sent so the backend can pick them up
                    enquiryType: kind === "callback" ? "sales-callback" : "stall-quotation",
                    stallSize: stall,
                    company: details.company,
                    email: details.email,
                    preferredTime: details.time,
                }),
            });
            if (!res.ok) {
                const json = await res.json().catch(() => null);
                return json?.errors?.[0]?.split(": ").pop() || json?.message || t.genericError;
            }
        } catch {
            return t.genericError;
        }
        if (kind === "callback") {
            // The sales team takes it from here — close this conversation; the next visitor starts fresh
            clearChatSession();
            setFlowAt(null);
            setMessages((prev) => prev.map((m, i) => (i === index && m.callback ? { ...m, callback: { ...m.callback, sent: true } } : m)));
            setLoading(true);
            window.setTimeout(() => {
                setEnded(true);
                setLoading(false);
            }, 700);
            return null;
        }
        saveChatSession(sessionId, details.name, details.phone);
        setVisitorName(details.name);
        setVerifiedPhone(details.phone);
        setFlowAt(null);
        setMessages((prev) => [
            ...prev.map((m, i) => (i === index && m.quote ? { ...m, quote: { ...m.quote, sent: true } } : m)),
            { role: "user", content: t.quoteSubmitted },
        ]);
        setLoading(true);
        window.setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: t.quoteThanks },
                { role: "assistant", content: "", receipt: { stall } },
                { role: "assistant", content: t.anythingElse, followUp: { stall } },
            ]);
            setLoading(false);
        }, 700);
        return null;
    };

    /** Previous chats after the OTP check; returns an error message, or null when they are shown */
    const loadHistory = async (index: number, target: VerifyTarget): Promise<string | null> => {
        let items: HistoryItem[];
        try {
            const res = await fetch(`${CHAT_URL}/history`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(target),
            });
            const json = await res.json().catch(() => null);
            if (!res.ok) return json?.errors?.[0]?.split(": ").pop() || json?.message || t.genericError;
            items = Array.isArray(json?.data) ? json.data : [];
        } catch {
            return t.genericError;
        }
        setMessages((prev) => [
            ...prev.map((m, i) => (i === index && m.verify ? { ...m, verify: { done: true } } : m)),
            items.length ? { role: "assistant", content: t.historyFound, history: items } : { role: "assistant", content: t.historyEmpty },
        ]);
        return null;
    };

    const setPriceSides = (index: number, sides: OpenSides) =>
        setMessages((prev) => prev.map((m, i) => (i === index && m.price ? { ...m, price: { ...m.price, sides } } : m)));

    /** "Proceed to Booking" on the price card: sum up the choice in the chat, then link to the booking form */
    const proceedToBooking = (choice: StallChoice) => {
        if (loading) return;
        const bt = BOOKING_TEXT[lang];
        setFlowAt({ step: "booking", choice: choice.stall });
        track([
            { role: "user", content: bt.say },
            { role: "assistant", content: bt.ready },
            { role: "assistant", content: bt.next },
        ]);
        setMessages((prev) => [...prev, { role: "user", content: bt.say }]);
        setLoading(true);
        window.setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: bt.ready, summary: choice },
                { role: "assistant", content: bt.next, booking: choice },
            ]);
            setLoading(false);
        }, 700);
    };

    const showMainMenu = () => {
        setFlowAt(null);
        setMessages((prev) => [...prev, { role: "assistant", content: t.menuPrompt, menu: true }]);
    };

    /** Sends the WhatsApp OTP for the details form; the form then asks for the code */
    const sendLeadOtp = async () => {
        setFormError("");
        const errors = validateLead(form);
        setFieldErrors(errors);
        if (Object.keys(errors).length) return;

        setSubmitting(true);
        try {
            const res = await verifyApi.sendPhoneOtp(form.phone, LEAD_OTP_PROFILE, form.name.trim());
            if (!res?.success) throw new Error(res?.msg || res?.message || "");
            setOtpSentTo(form.phone);
            setOtp("");
            setOtpVerified(false);
            setOtpTimer(OTP_RESEND_SECONDS);
        } catch (err) {
            setFormError((err as Error).message || t.genericError);
        } finally {
            setSubmitting(false);
        }
    };

    const submitLead = async (e: React.FormEvent) => {
        e.preventDefault();
        // Step 1: send the OTP; step 2 (below): verify it, then start the chat
        if (!otpSentTo || otpSentTo !== form.phone) return sendLeadOtp();
        setFormError("");
        const errors = validateLead(form);
        setFieldErrors(errors);
        if (Object.keys(errors).length) return;
        if (otp.length !== 6) {
            setFormError(t.otpError);
            return;
        }
        const name = form.name.trim();
        const phone = form.phone;

        setSubmitting(true);
        try {
            // An OTP can be verified only once — on a retry after a failed /lead call, skip straight to it
            if (!otpVerified) {
                const verified = await verifyApi.verifyPhoneOtp(phone, otp);
                if (!verified?.success) throw new Error(verified?.msg || verified?.message || "");
                setOtpVerified(true);
            }

            const res = await fetch(`${CHAT_URL}/lead`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sessionId, name, phone, pageUrl: window.location.href }),
            });
            if (!res.ok) {
                const json = await res.json().catch(() => null);
                throw new Error(json?.errors?.[0]?.split(": ").pop() || json?.message || "");
            }
            saveChatSession(sessionId, name, phone);
            setVisitorName(name);
            setVerifiedPhone(phone);
            setAskDetails(false);
            resetOtp();
            const question = pending;
            setPending(null);
            if (question) sendMessage(question.message, question.topic, name);
        } catch (err) {
            setFormError((err as Error).message || t.genericError);
        } finally {
            setSubmitting(false);
        }
    };

    const backToMenu = () => {
        setAskDetails(false);
        setPending(null);
        setFormError("");
        setFieldErrors({});
        resetOtp();
    };

    const last = messages[messages.length - 1];
    const waitingForFirstWord = loading && (last?.role === "user" || (last?.role === "assistant" && !last.content));
    const canShowMainMenu = !loading && last?.role === "assistant" && !last.menu && !last.nav && !last.quote && !last.callback && !last.verify && !last.followUp && !last.price && !!last.content;
    const showFollowUp = !loading && !!last?.followUp;
    const placeholder = showFollowUp
        ? t.askAnother
        : flowAt?.step === "booking"
          ? BOOKING_TEXT[lang].placeholder
          : (flowAt && FLOW[flowAt.step]?.(lang, flowAt.choice).placeholder) || (returning ? FLOW.history(lang, "").placeholder : t.placeholder);
    const inChat = messages.length > 0 || !!visitorName;

    const topicCards = (
        <>
            <div className="relative grid grid-cols-2 gap-2 pt-0.5">
                {TOPICS.map((topic) => (
                    <button
                        key={topic.id}
                        data-chat-anim
                        type="button"
                        onClick={() => pickTopic(topic)}
                        disabled={loading}
                        className="group flex items-center gap-2.5 min-h-[56px] rounded-xl bg-white border border-[#e3e9dc] px-2.5 py-2 text-left shadow-[0_1px_2px_rgba(11,41,18,0.06)] transition-all duration-200 hover:border-[#3b8c2a]/60 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_-12px_rgba(11,41,18,0.45)] disabled:pointer-events-none"
                    >
                        <span className="w-8 h-8 shrink-0 rounded-lg bg-[#eaf4e5] text-[#1b5e20] flex items-center justify-center transition-colors group-hover:bg-[#14532d] group-hover:text-white">
                            <topic.icon className="w-[17px] h-[17px]" strokeWidth={1.9} aria-hidden="true" />
                        </span>
                        <span className="font-poppins font-medium text-[12px] leading-tight text-[#14532d]">{topic.label[lang]}</span>
                    </button>
                ))}
            </div>

            <div data-chat-anim className="relative flex items-center gap-3 pt-0.5">
                <span className="flex-1 h-px bg-[#dfe6d8]" aria-hidden="true" />
                <button
                    type="button"
                    onClick={() => pickTopic(TALK_TO_TEAM)}
                    disabled={loading}
                    className="group inline-flex items-center gap-1.5 rounded-full bg-white hover:bg-[#14532d] border border-[#cfe0c8] hover:border-[#14532d] px-3.5 py-1.5 font-poppins font-medium text-[12.5px] text-[#14532d] hover:text-white shadow-[0_1px_2px_rgba(11,41,18,0.06)] transition-colors"
                >
                    <Headset className="w-4 h-4" strokeWidth={1.9} aria-hidden="true" />
                    {TALK_TO_TEAM.label[lang]}
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </button>
                <span className="flex-1 h-px bg-[#dfe6d8]" aria-hidden="true" />
            </div>
        </>
    );

    return (
        <div
            role="dialog"
            aria-modal="false"
            aria-label="Organic Mitra chat"
            aria-hidden={!open}
            inert={!open}
            lang={lang}
            ref={panelRef}
            style={{ visibility: "hidden", opacity: 0 }}
            className={`fixed z-[110] right-4 sm:right-6 inset-y-0 my-auto w-[380px] h-[580px] max-h-[calc(100svh-32px)] max-[480px]:inset-x-0 max-[480px]:top-auto max-[480px]:bottom-0 max-[480px]:my-0 max-[480px]:w-full max-[480px]:h-[88svh] max-[480px]:max-h-none flex flex-col bg-gradient-to-b from-[#F6FAF4] to-[#EEF5EB] rounded-[20px] max-[480px]:rounded-b-none shadow-[0_30px_80px_-20px_rgba(11,41,18,0.55),0_0_0_1px_rgba(20,83,45,0.08)] overflow-clip font-inter text-[13.5px] leading-[1.55] ${
                open ? "" : "pointer-events-none"
            }`}
        >
            {/* ── Header ── */}
            <div data-chat-anim className="relative shrink-0 overflow-clip bg-gradient-to-br from-[#1f6b2a] via-[#185f2b] to-[#0f4424] text-white">
                <svg className="absolute -right-6 -bottom-10 w-32 h-32 text-white/[0.06]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={LEAF_PATH} />
                </svg>
                <span className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#F2B40E] via-[#f58220] to-[#F2B40E] opacity-80" aria-hidden="true" />

                <div className="relative flex items-center gap-2.5 pl-3.5 pr-2.5 py-3">
                    <div className="relative w-[42px] h-[42px] shrink-0 rounded-full bg-white ring-2 ring-white/30 flex items-center justify-center shadow-md">
                        <Image src="/android-chrome-192x192.png" alt="Bharat Organic Expo logo" width={36} height={36} className="w-[30px] h-[30px] object-contain" />
                        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#4ade80] ring-2 ring-[#185f2b]" aria-hidden="true" />
                    </div>

                    <div className="flex-1 min-w-0">
                        <p className="font-poppins font-semibold text-[15.5px] leading-tight whitespace-nowrap">{botName}</p>
                        <p className="mt-0.5 flex items-center gap-1.5 text-[11px] leading-snug text-white/85">
                            <span className="truncate">{t.subtitle}</span>
                        </p>
                    </div>

                    {/* Language switch */}
                    <div className="shrink-0 flex items-center rounded-full bg-white/10 p-0.5 text-[10.5px]" role="group" aria-label="Language">
                        {(["en", "hi"] as const).map((l) => (
                            <button
                                key={l}
                                type="button"
                                onClick={() => setLang(l)}
                                aria-pressed={lang === l}
                                className={`rounded-full px-2 py-0.5 font-semibold transition-colors ${
                                    lang === l ? "bg-white text-[#14532d] shadow-sm" : "text-white/75 hover:text-white"
                                }`}
                            >
                                {l === "en" ? "EN" : "हिं"}
                            </button>
                        ))}
                    </div>

                    {/* Both keep the conversation; "End Chat" in the footer clears it */}
                    <div className="shrink-0 flex items-center gap-1">
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label={t.minimize}
                            title={t.minimize}
                            className="w-7 h-7 shrink-0 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                        >
                            <Minus className="w-4 h-4" strokeWidth={2.5} />
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close chat"
                            className="w-7 h-7 shrink-0 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                        >
                            <X className="w-4 h-4" strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>

            {showForm ? (
                /* ── Visitor details (asked once, before the first question) ── */
                <form
                    onSubmit={submitLead}
                    noValidate
                    className="flex-1 overflow-y-auto overflow-x-hidden overscroll-contain px-4 pt-3.5 pb-3 flex flex-col gap-3"
                    data-lenis-prevent
                >
                    <button
                        type="button"
                        onClick={backToMenu}
                        className="self-start inline-flex items-center gap-1 text-[12.5px] font-medium text-[#1b5e20] hover:text-[#3b8c2a]"
                    >
                        <ArrowLeft className="w-4 h-4" /> {t.back}
                    </button>

                    <div className="flex items-start gap-2.5">
                        <BotAvatar />
                        <div className="bg-white rounded-2xl rounded-tl-md shadow-sm border border-[#3b8c2a]/10 px-3.5 py-2 text-[13.5px] text-slate-700">
                            {pending ? (
                                <>
                                    {t.detailsFor} <strong className="text-[#1b5e20]">{pending.topic}</strong>
                                    {t.detailsForEnd}
                                </>
                            ) : (
                                t.detailsGeneric
                            )}
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
                                            {t.fields[f.key].label} <span className="text-[#f58220]">*</span>
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
                                                placeholder={t.fields[f.key].placeholder}
                                                maxLength={isPhone ? 10 : 60}
                                                value={form[f.key]}
                                                aria-invalid={!!error}
                                                aria-describedby={error ? `lead-${f.key}-error` : undefined}
                                                readOnly={isPhone && !!otpSentTo}
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
                                            {isPhone &&
                                                (otpSentTo ? (
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            resetOtp();
                                                            setFormError("");
                                                        }}
                                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[11.5px] font-semibold text-[#1b5e20] hover:text-[#3b8c2a] underline underline-offset-2"
                                                    >
                                                        {t.change}
                                                    </button>
                                                ) : (
                                                    <span
                                                        className={`absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-semibold ${form.phone.length === 10 ? "text-[#3b8c2a]" : "text-slate-400"}`}
                                                        aria-hidden="true"
                                                    >
                                                        {form.phone.length}/10
                                                    </span>
                                                ))}
                                        </span>
                                        {error && (
                                            <span id={`lead-${f.key}-error`} role="alert" className="text-[11.5px] text-red-600">
                                                {error}
                                            </span>
                                        )}
                                    </label>
                                );
                            })}

                            {otpSentTo && (
                                <label className="flex flex-col gap-1">
                                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0b2912]">
                                        {t.otpLabel} <span className="text-[#f58220]">*</span>
                                    </span>
                                    <span className="text-[11.5px] text-[#1b5e20]">{t.otpSent(otpSentTo)}</span>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        autoComplete="one-time-code"
                                        autoFocus
                                        maxLength={6}
                                        value={otp}
                                        onChange={(e) => {
                                            setOtp(e.target.value.replace(/\D/g, "").slice(0, 6));
                                            if (formError) setFormError("");
                                        }}
                                        placeholder={t.otpPh}
                                        className="w-full px-3 py-2.5 rounded-xl bg-[#f7faf5] border border-[#dfe8db] text-[15px] tracking-[0.3em] text-slate-800 placeholder:tracking-normal placeholder:text-[14px] placeholder:text-slate-400 outline-none transition focus:bg-white focus:border-[#3b8c2a] focus:ring-4 focus:ring-[#3b8c2a]/15"
                                    />
                                    <span className="text-right text-[11.5px]">
                                        {otpTimer > 0 ? (
                                            <span className="text-slate-500">{t.resendIn(otpTimer)}</span>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={sendLeadOtp}
                                                disabled={submitting}
                                                className="font-semibold text-[#1b5e20] hover:text-[#3b8c2a] disabled:opacity-50"
                                            >
                                                {t.resend}
                                            </button>
                                        )}
                                    </span>
                                </label>
                            )}

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
                                <span className="absolute inset-y-0 -left-1/3 w-1/4 skew-x-[-20deg] bg-white/25 animate-[mitra-shimmer_2.6s_ease-in-out_infinite]" aria-hidden="true" />
                                {submitting ? (
                                    <>
                                        <span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" aria-hidden="true" />
                                        {t.wait}
                                    </>
                                ) : (
                                    <>
                                        {otpSentTo ? t.verifyContinue : t.sendOtp}
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
                        {t.safe}
                    </p>
                </form>
            ) : ended ? (
                /* ── Chat ended (after a callback request) ── */
                <div className="relative flex-1 overflow-y-auto overflow-x-hidden overscroll-contain px-5 pt-5 pb-4 flex flex-col" data-lenis-prevent>
                    <div className="flex items-center gap-3 text-[13px] text-slate-500">
                        <span className="flex-1 h-px bg-[#dfe6d8]" aria-hidden="true" />
                        {t.chatEnded}
                        <span className="flex-1 h-px bg-[#dfe6d8]" aria-hidden="true" />
                    </div>

                    <div className="mt-4 flex items-start gap-2.5">
                        <BotAvatar />
                        <div className="max-w-[85%] bg-white rounded-2xl rounded-tl-md shadow-sm border border-[#3b8c2a]/10 px-4 py-3 text-[15px] text-[#14532d]">
                            <p>{t.endedThanks}</p>
                            <p className="mt-1 font-semibold">{t.endedBye}</p>
                        </div>
                    </div>

                    <div className="mt-7 flex flex-col items-center">
                        <p className="font-poppins font-medium text-[15px] text-[#0b2912]">{t.helpful}</p>
                        <div className="mt-3 grid grid-cols-2 gap-3 w-full max-w-[290px]" role="group" aria-label={t.helpful}>
                            {(
                                [
                                    ["yes", t.yes, ThumbsUp],
                                    ["no", t.no, ThumbsDown],
                                ] as const
                            ).map(([value, label, Icon]) => (
                                <button
                                    key={value}
                                    type="button"
                                    onClick={() => {
                                        setFeedback(value);
                                        track([], value);
                                    }}
                                    aria-pressed={feedback === value}
                                    className={`inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-[14px] font-medium transition ${
                                        feedback === value
                                            ? "bg-[#14532d] border-[#14532d] text-white"
                                            : "bg-white border-[#14532d]/70 text-[#0b2912] hover:bg-[#f1f7ee]"
                                    }`}
                                >
                                    <Icon className="w-[18px] h-[18px]" aria-hidden="true" />
                                    {label}
                                </button>
                            ))}
                        </div>
                        <p className="mt-2 text-[12px] text-slate-500" aria-live="polite">
                            {feedback ? t.feedbackThanks : t.feedbackOptional}
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                startNewChat();
                                setReturning(true);
                            }}
                            className="mt-6 w-full max-w-[340px] inline-flex items-center justify-center gap-2.5 rounded-full bg-[#14532d] hover:bg-[#1b5e20] px-4 py-3 font-poppins font-medium text-[15px] text-white shadow-md transition active:scale-[0.99]"
                        >
                            <MessageCircleMore className="w-5 h-5" aria-hidden="true" />
                            {t.newChat}
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                startNewChat();
                                onClose();
                            }}
                            className="mt-3 text-[14px] font-medium text-[#14532d] underline underline-offset-2 hover:text-[#3b8c2a]"
                        >
                            {t.closeChat}
                        </button>
                    </div>

                    <p className="mt-auto pt-4 border-t border-[#dfe6d8] text-center text-[11.5px] text-slate-500">
                        {botName} • {t.subtitle}
                    </p>
                </div>
            ) : (
                <>
                    <div
                        ref={scrollRef}
                        className="relative flex-1 overflow-y-auto overflow-x-hidden overscroll-contain px-3.5 pt-3.5 pb-3 flex flex-col gap-2.5"
                        data-lenis-prevent
                        aria-live="polite"
                    >
                        {/* faint leaves in the corners, like the website background (clipped, so nothing sticks out sideways) */}
                        <div className="pointer-events-none absolute inset-0 overflow-clip" aria-hidden="true">
                            <svg className="absolute -left-8 top-24 w-32 h-32 text-[#3b8c2a]/[0.07] -rotate-45" viewBox="0 0 24 24" fill="currentColor">
                                <path d={LEAF_PATH} />
                            </svg>
                            <svg className="absolute -right-8 bottom-16 w-32 h-32 text-[#3b8c2a]/[0.07] rotate-12" viewBox="0 0 24 24" fill="currentColor">
                                <path d={LEAF_PATH} />
                            </svg>
                        </div>

                        <div data-chat-anim className="relative flex items-start gap-2.5">
                            <BotAvatar />
                            <div className="max-w-[82%] bg-white rounded-2xl rounded-tl-md shadow-[0_1px_2px_rgba(11,41,18,0.06)] border border-[#3b8c2a]/10 px-3.5 py-2 text-[13.5px] text-slate-800">
                                {(returning ? t.welcomeBack : visitorName && !showWelcome ? t.greetingName(visitorName) : t.greeting).split("\n").map((line, i) =>
                                    i === 0 ? (
                                        <p key={i} className="font-semibold text-[#0b2912]">
                                            {line}
                                        </p>
                                    ) : (
                                        <p key={i}>{line}</p>
                                    )
                                )}
                            </div>
                        </div>

                        {showWelcomeBack ? (
                            <div className="relative ml-[42px] grid grid-cols-2 gap-2">
                                {[
                                    [t.viewPrevious, "history"],
                                    [t.askNew, "new-question"],
                                ].map(([label, step]) => (
                                    <button
                                        key={step}
                                        type="button"
                                        onClick={() => runStep(step)}
                                        disabled={loading}
                                        className="rounded-full border border-[#14532d] bg-white px-2 py-2 text-[13px] font-medium leading-tight text-[#0b2912] transition hover:bg-[#14532d] hover:text-white disabled:pointer-events-none"
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            showWelcome && topicCards
                        )}

                        {messages.map((m, i) =>
                            m.role === "assistant" && !m.content && !m.receipt ? null : m.role === "user" ? (
                                <div key={i} className="relative self-end flex items-end gap-1 max-w-[85%]">
                                    <div className="bg-[#14532d] text-white rounded-2xl rounded-tr-md shadow-sm px-4 py-2.5 whitespace-pre-wrap break-words">
                                        {m.content}
                                    </div>
                                    <CheckCheck className="w-4 h-4 shrink-0 text-[#3b82f6]" aria-label="Sent" />
                                </div>
                            ) : (
                                <div key={i} className="relative flex flex-col gap-2.5">
                                    {m.receipt && (
                                        <div className="ml-[42px] bg-white rounded-2xl border border-[#3b8c2a]/10 shadow-sm px-4 pt-3.5 pb-3">
                                            <div className="flex items-start gap-3">
                                                <span className="w-10 h-10 shrink-0 rounded-full bg-[#1f8a3a] text-white flex items-center justify-center shadow-sm" aria-hidden="true">
                                                    <Check className="w-6 h-6" strokeWidth={3} />
                                                </span>
                                                <div className="min-w-0 flex flex-col items-start gap-2">
                                                    <p className="font-poppins font-semibold text-[16px] leading-tight text-[#14532d] pt-0.5">{t.receiptTitle}</p>
                                                    {m.receipt.stall && (
                                                        <span className="rounded-full bg-[#e8f3e2] px-3 py-1 text-[12.5px] font-medium text-[#14532d]">
                                                            {t.stallPreference} {m.receipt.stall}
                                                        </span>
                                                    )}
                                                    <p className="text-[13px] leading-snug text-slate-700">{t.receiptBody}</p>
                                                </div>
                                            </div>
                                            <p className="mt-3 pt-2.5 border-t border-slate-200 text-[12px] leading-snug text-slate-500">{t.receiptNote}</p>
                                        </div>
                                    )}
                                    {!!m.content && (
                                    <div className="flex items-start gap-2.5">
                                        <BotAvatar />
                                        <div
                                            className={`${m.link ? "flex-1" : ""} max-w-[80%] bg-white rounded-2xl rounded-tl-md shadow-sm border border-[#3b8c2a]/10 px-4 py-2.5 text-slate-800 break-words`}
                                        >
                                            <MessageText text={m.content} />
                                            {m.link && (
                                                <Link
                                                    href={m.link.href}
                                                    onClick={onClose}
                                                    className="mt-2.5 mb-0.5 flex items-center justify-center gap-2 rounded-lg bg-[#14532d] hover:bg-[#1b5e20] px-4 py-2.5 font-poppins font-medium text-[14px] text-white transition"
                                                >
                                                    {m.link.label}
                                                    <ArrowUpRight className="w-[18px] h-[18px]" aria-hidden="true" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                    )}
                                    {m.followUp && i === messages.length - 1 && !loading && (
                                        <div className="flex flex-col gap-2">
                                            <div className="flex flex-wrap gap-1.5 [&>*]:flex-auto">
                                                {[
                                                    {
                                                        label: t.getBrochure,
                                                        icon: <FileText className="w-4 h-4 shrink-0" aria-hidden="true" />,
                                                        onClick: () => sendMessage(t.brochureAsk, t.getBrochure),
                                                    },
                                                    { label: t.mainMenu, icon: <LayoutGrid className="w-4 h-4 shrink-0" aria-hidden="true" />, onClick: showMainMenu },
                                                ].map((a) => (
                                                    <button key={a.label} type="button" onClick={a.onClick} className={FOLLOW_UP_PILL}>
                                                        {a.icon}
                                                        {a.label}
                                                    </button>
                                                ))}
                                                <a
                                                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsappText(m.followUp.stall))}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={FOLLOW_UP_PILL}
                                                >
                                                    <svg className="w-4 h-4 shrink-0 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                        <path d={WHATSAPP_PATH} />
                                                    </svg>
                                                    {t.whatsapp}
                                                </a>
                                            </div>
                                            <button type="button" onClick={() => startNewChat()} className={`${FOLLOW_UP_PILL} self-end px-4 border-[#14532d]/40`}>
                                                <LogOut className="w-4 h-4 shrink-0" aria-hidden="true" />
                                                <span className="underline underline-offset-2">{t.endChat}</span>
                                            </button>
                                        </div>
                                    )}
                                    {m.options && (
                                        <div className={`ml-[42px] grid gap-2 ${m.columns === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                                            {m.options.map((o) => (
                                                <button
                                                    key={o.label}
                                                    type="button"
                                                    onClick={() => pickOption(o)}
                                                    disabled={loading}
                                                    className="rounded-full border border-[#14532d] bg-white px-2 py-2 text-[13.5px] font-medium text-[#0b2912] transition hover:bg-[#14532d] hover:text-white disabled:pointer-events-none"
                                                >
                                                    {o.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                    {m.note && (
                                        <p className="ml-[42px] -mt-0.5 flex items-start gap-1.5 text-[11px] leading-snug text-slate-500">
                                            <Info className="w-3.5 h-3.5 shrink-0 mt-px" aria-hidden="true" />
                                            {m.note}
                                        </p>
                                    )}
                                    {m.nav && i === messages.length - 1 && !loading && (
                                        <div className="ml-[42px] -mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] font-medium text-[#14532d]">
                                            {m.nav.map((n, j) => (
                                                <React.Fragment key={n.step}>
                                                    {j > 0 && <span className="h-3.5 w-px bg-slate-300" aria-hidden="true" />}
                                                    <button
                                                        type="button"
                                                        onClick={() => runStep(n.step, "", true)}
                                                        className="inline-flex items-center gap-1.5 underline underline-offset-2 hover:text-[#3b8c2a]"
                                                    >
                                                        {n.icon === "back" ? <ArrowLeft className="w-4 h-4" aria-hidden="true" /> : <List className="w-4 h-4" aria-hidden="true" />}
                                                        {n.label}
                                                    </button>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    )}
                                    {m.price && (
                                        <PriceCard
                                            lang={lang}
                                            stall={m.price.stall}
                                            sqm={m.price.sqm}
                                            sides={m.price.sides ?? 1}
                                            onSides={(sides) => setPriceSides(i, sides)}
                                        />
                                    )}
                                    {m.summary && <StallSummary lang={lang} choice={m.summary} />}
                                    {m.booking && (
                                        <div className="flex flex-col gap-2">
                                            {/* Continues in the chat: WhatsApp / callback request with the sales team */}
                                            <button
                                                type="button"
                                                onClick={() => runStep("sales", m.booking!.stall)}
                                                disabled={loading}
                                                className="flex items-center justify-center gap-2 rounded-full bg-[#14532d] hover:bg-[#1b5e20] px-4 py-2.5 font-poppins font-medium text-[14px] text-white shadow-sm transition disabled:pointer-events-none"
                                            >
                                                {BOOKING_TEXT[lang].open}
                                                <ArrowUpRight className="w-[18px] h-[18px]" aria-hidden="true" />
                                            </button>
                                            <p className="text-center text-[11.5px] leading-snug text-slate-500">{BOOKING_TEXT[lang].carry}</p>
                                            <p className="-mt-1 flex items-start justify-center gap-1.5 text-[11.5px] leading-snug text-slate-500">
                                                <Info className="w-3.5 h-3.5 shrink-0 mt-px" aria-hidden="true" />
                                                {BOOKING_TEXT[lang].subject}
                                            </p>
                                            {i === messages.length - 1 && !loading && (
                                                <div className="grid grid-cols-2 gap-2">
                                                    {[
                                                        { label: BOOKING_TEXT[lang].change, onClick: () => runStep("stall-price", m.booking!.stall, true) },
                                                        {
                                                            label: PRICE_TEXT[lang].sales,
                                                            onClick: () => runStep("sales", m.booking!.stall),
                                                        },
                                                    ].map((a) => (
                                                        <button
                                                            key={a.label}
                                                            type="button"
                                                            onClick={a.onClick}
                                                            className="rounded-full border border-[#14532d]/60 bg-white px-2 py-2 text-[13px] font-medium leading-tight text-[#0b2912] transition hover:bg-[#14532d] hover:text-white"
                                                        >
                                                            {a.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                    {m.price && i === messages.length - 1 && !loading && (
                                        <div className="flex flex-col gap-2">
                                            <button
                                                type="button"
                                                onClick={() => proceedToBooking(m.price!)}
                                                className="flex items-center justify-center gap-2 rounded-full bg-[#14532d] hover:bg-[#1b5e20] px-4 py-2.5 font-poppins font-medium text-[14px] text-white shadow-sm transition"
                                            >
                                                {PRICE_TEXT[lang].proceed}
                                                <ArrowRight className="w-[18px] h-[18px]" aria-hidden="true" />
                                            </button>
                                            <div className="grid grid-cols-3 gap-1.5">
                                                {[
                                                    { label: PRICE_TEXT[lang].quote, onClick: () => runStep("stall-quote", m.price!.stall) },
                                                    { label: PRICE_TEXT[lang].changeSize, onClick: () => runStep("stall-sizes", "", true) },
                                                    {
                                                        label: PRICE_TEXT[lang].sales,
                                                        onClick: () => runStep("sales", m.price!.stall),
                                                    },
                                                ].map((a) => (
                                                    <button
                                                        key={a.label}
                                                        type="button"
                                                        onClick={a.onClick}
                                                        className="rounded-full border border-[#14532d]/60 bg-white px-1.5 py-2 text-[12.5px] font-medium leading-tight text-[#0b2912] transition hover:bg-[#14532d] hover:text-white"
                                                    >
                                                        {a.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {m.verify && <VerifyCard lang={lang} done={!!m.verify.done} onVerified={(target) => loadHistory(i, target)} />}
                                    {m.verify && !m.verify.done && i === messages.length - 1 && !loading && (
                                        <div className="flex flex-col items-center gap-0.5 text-center text-[12.5px] text-slate-600">
                                            <p>{t.withoutVerify}</p>
                                            <button
                                                type="button"
                                                onClick={() => runStep("new-question", "", true)}
                                                className="font-medium text-[#14532d] underline underline-offset-2 hover:text-[#3b8c2a]"
                                            >
                                                {t.continueWithout}
                                            </button>
                                        </div>
                                    )}
                                    {m.history && <HistoryList lang={lang} items={m.history} />}
                                    {m.sales && (
                                        <div className="ml-[42px] grid grid-cols-2 gap-2">
                                            <a
                                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.salesWhatsappText(m.sales.stall))}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#14532d] bg-white px-2 py-2 text-[13px] font-medium leading-tight text-[#0b2912] transition hover:bg-[#f1f7ee]"
                                            >
                                                <svg className="w-[18px] h-[18px] shrink-0 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                    <path d={WHATSAPP_PATH} />
                                                </svg>
                                                {t.whatsapp}
                                            </a>
                                            <button
                                                type="button"
                                                onClick={() => runStep("sales-callback", m.sales!.stall)}
                                                disabled={loading}
                                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#14532d] hover:bg-[#1b5e20] px-2 py-2 text-[13px] font-medium leading-tight text-white shadow-sm transition disabled:pointer-events-none"
                                            >
                                                <svg {...iconProps} className="w-4 h-4 shrink-0" fill="currentColor" stroke="none" aria-hidden="true">
                                                    <path d={PHONE_PATH} />
                                                </svg>
                                                {t.requestCallback}
                                            </button>
                                        </div>
                                    )}
                                    {m.callback && (
                                        <>
                                            <QuoteForm
                                                lang={lang}
                                                kind="callback"
                                                stall={m.callback.stall}
                                                sent={!!m.callback.sent}
                                                defaultName={visitorName || ""}
                                                verifiedPhone={verifiedPhone}
                                                onSubmit={(details) => submitQuote(i, m.callback!.stall, details, "callback")}
                                                onChange={() => runStep("stall-sizes", "", true)}
                                                onBack={() => runStep("stall", "", true)}
                                            />
                                            {!m.callback.sent && i === messages.length - 1 && !loading && (
                                                <button
                                                    type="button"
                                                    onClick={() => runStep("stall", "", true)}
                                                    className="self-start inline-flex items-center gap-1.5 text-[13px] font-medium text-[#14532d] underline underline-offset-2 hover:text-[#3b8c2a]"
                                                >
                                                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                                                    {QUOTE_TEXT[lang].stallOptions}
                                                </button>
                                            )}
                                        </>
                                    )}
                                    {m.quote && (
                                        <QuoteForm
                                            lang={lang}
                                            stall={m.quote.stall}
                                            sent={!!m.quote.sent}
                                            defaultName={visitorName || ""}
                                            verifiedPhone={verifiedPhone}
                                            onSubmit={(details) => submitQuote(i, m.quote!.stall, details)}
                                            onChange={() => runStep("stall-sizes", "", true)}
                                            onBack={() => runStep("stall", "", true)}
                                        />
                                    )}
                                    {m.menu && topicCards}
                                </div>
                            )
                        )}

                        {canShowMainMenu && (
                            <button
                                type="button"
                                onClick={showMainMenu}
                                className="relative self-start ml-[42px] -mt-1 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#14532d] underline underline-offset-2 hover:text-[#3b8c2a]"
                            >
                                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                                {t.mainMenu}
                            </button>
                        )}

                        {waitingForFirstWord && (
                            <div className="relative flex items-start gap-2.5" aria-label="Organic Mitra is typing">
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
                        data-chat-anim
                        className="shrink-0 px-3 pt-2 pb-2 border-t border-[#e3e9dc]/70 bg-white/60 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-2 bg-white rounded-full border border-[#e3e9dc] shadow-[0_4px_14px_-8px_rgba(11,41,18,0.3)] pl-4 pr-1 py-1 transition focus-within:border-[#3b8c2a] focus-within:ring-4 focus-within:ring-[#3b8c2a]/15">
                            <input
                                ref={inputRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                disabled={loading}
                                maxLength={1000}
                                placeholder={loading ? t.typing : placeholder}
                                aria-label="Type your message"
                                className="flex-1 min-w-0 bg-transparent text-[13.5px] text-slate-800 placeholder:text-slate-400 outline-none disabled:cursor-not-allowed"
                            />
                            <button
                                type="submit"
                                disabled={loading || !input.trim()}
                                aria-label="Send message"
                                className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-[#1f6b2a] to-[#14532d] text-white flex items-center justify-center shadow-md transition hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <Send className="w-4 h-4 -ml-0.5" strokeWidth={2.2} aria-hidden="true" />
                            </button>
                        </div>
                        {showFollowUp ? (
                            <p className="mt-1.5 px-2 text-[11px] text-slate-500">{t.footerShort}</p>
                        ) : inChat ? (
                            <div className="mt-1.5 px-2 flex items-center justify-between text-[11px] text-slate-500">
                                <span>{t.footerShort}</span>
                                {/* Clears this conversation; on a shared computer the next person starts fresh */}
                                <button
                                    type="button"
                                    onClick={() => startNewChat()}
                                    disabled={loading}
                                    className="inline-flex items-center gap-1 font-medium text-[#14532d] underline underline-offset-2 hover:text-[#3b8c2a] disabled:opacity-50"
                                >
                                    <LogOut className="w-3.5 h-3.5" aria-hidden="true" />
                                    {t.endChat}
                                </button>
                            </div>
                        ) : (
                            <p className="text-[10.5px] text-slate-500 text-center mt-1.5">{t.footer}</p>
                        )}
                    </form>
                </>
            )}
        </div>
    );
};

export default ChatPanel;
