// Checks the chat runs on what the visitor types, before anything is saved or sent to the AI:
// is this really a name, is the language abusive, is a typed mobile number / email wrong.

import { emailProblem } from "@/lib/emailCheck";

type Lang = "en" | "hi";

/** Lower-case, common letter swaps undone ("f@ck", "ch00tiya") and stretched letters shortened ("fuuuck") */
const normalise = (text: string) =>
    text
        .toLowerCase()
        .replace(/[@4]/g, "a")
        .replace(/0/g, "o")
        .replace(/[1!]/g, "i")
        .replace(/[$5]/g, "s")
        .replace(/3/g, "e")
        .replace(/[*_.\-]/g, "")
        .replace(/(.)\1{2,}/g, "$1");

// Whole words only: short ones would otherwise match inside ordinary words
const ABUSE_WORDS = new Set([
    "fuck", "fucker", "fucking", "fuk", "fck", "motherfucker", "mf", "shit", "bullshit", "bitch", "bastard", "asshole", "ass",
    "dick", "pussy", "slut", "whore", "cunt", "wtf", "stfu",
    "mc", "bc", "bkl", "mkc", "bsdk", "chutiya", "chutiye", "chutia", "chutya", "chut", "gandu", "gaandu", "gand", "gaand",
    "lund", "lauda", "lavda", "lavde", "loda", "lode", "laude", "randi", "rand", "harami", "haramzada", "haramzade", "haramkhor",
    "kamina", "kamine", "kutta", "kutte", "kutiya", "kuttiya", "suar", "saale", "saala", "tatti", "jhant", "jhaant",
]);
// Long enough to be matched anywhere, also when typed without spaces
const ABUSE_PARTS = ["madarchod", "madarchot", "maderchod", "behenchod", "bhenchod", "bhanchod", "bahenchod", "benchod", "bhosdi", "bhosad", "bhosri", "chutiya", "chutiye", "motherfuck", "gandmar", "gaandmar"];
const ABUSE_HINDI = /चूतिय|चुतिय|मादरचोद|बहनचोद|भेनचोद|बहेनचोद|भोसड़|भोसड|गांडू|गाँडू|हरामी|हरामज़ाद|हरामजाद|रंडी|कमीन|कुत्ते|कुत्ता|लौड़|लौड|लंड/;

/** True when the text has abusive words (English, Hindi or Hinglish) */
export const hasAbuse = (text: string) => {
    if (ABUSE_HINDI.test(text)) return true;
    const clean = normalise(text);
    const joined = clean.replace(/[^a-z]/g, "");
    if (ABUSE_PARTS.some((part) => joined.includes(part))) return true;
    return clean.split(/[^a-z]+/).some((word) => ABUSE_WORDS.has(word));
};

export const ABUSE_REPLY: Record<Lang, string> = {
    en: "I don't respond to that kind of language. Please keep it respectful. 🙏\nI'm happy to help with anything about Bharat Organic Expo 2027.",
    hi: "मैं ऐसे शब्दों का जवाब नहीं देता। कृपया सभ्य भाषा का प्रयोग करें। 🙏\nभारत ऑर्गेनिक एक्सपो 2027 से जुड़ी किसी भी जानकारी में मैं ज़रूर मदद करूँगा।",
};

// Things people type first that are not a name: greetings, yes/no, question words, expo words, keyboard mashing
const GREETING_WORDS = new Set([
    "hi", "hii", "hiii", "hello", "helo", "hellow", "hey", "heyy", "hy", "hlo", "hlw", "hola", "yo", "namaste", "namaskar", "namaskaar",
    "pranam", "gm", "good", "morning", "afternoon", "evening", "night",
]);
const NOT_NAME_WORDS = new Set([
    "ok", "okay", "okk", "k", "yes", "yeah", "yep", "no", "nope", "nahi", "nhi", "haan", "han", "ha", "ji", "sir", "madam", "mam", "maam",
    "bhai", "bro", "dear", "friend", "team", "anyone", "there", "what", "why", "how", "when", "where", "who", "which", "kya", "kyu", "kyun",
    "kyon", "kaise", "kab", "kahan", "kaun", "help", "info", "information", "detail", "details", "price", "cost", "rate", "rates", "stall",
    "stalls", "booking", "book", "register", "registration", "visitor", "exhibitor", "buyer", "expo", "organic", "event", "date", "venue",
    "ticket", "pass", "entry", "free", "contact", "number", "phone", "mobile", "email", "call", "whatsapp", "test", "testing", "demo", "abc",
    "abcd", "xyz", "asdf", "asd", "qwerty", "qwe", "zxc", "name", "naam", "mera", "my", "me", "i", "am", "is", "the", "a", "an", "you",
    "your", "aap", "tum", "please", "pls", "plz", "thanks", "thank", "thankyou", "bye", "nothing", "none", "nil", "na", "user", "guest",
    "anonymous", "unknown", "admin", "bot", "chatbot", "want", "need", "chahiye", "batao", "bataiye", "tell", "know", "about",
]);

export type NameProblem = "abuse" | "greeting" | "not-a-name" | "";

/**
 * Why `raw` (what the visitor typed when asked for a name) cannot be a real name; "" when it can.
 * `parsed` is the cleaned name ("" when the letters-only check already failed).
 */
export const nameProblem = (raw: string, parsed: string): NameProblem => {
    if (hasAbuse(raw)) return "abuse";
    const words = raw.toLowerCase().split(/[^\p{L}\p{M}]+/u).filter(Boolean);
    if (words.length && words.every((w) => GREETING_WORDS.has(w))) return "greeting";
    // A question, a number or an email is not a name
    if (!parsed || /[?@\d]/.test(raw)) return "not-a-name";
    const nameWords = parsed.toLowerCase().split(/\s+/);
    if (nameWords.some((w) => GREETING_WORDS.has(w) || NOT_NAME_WORDS.has(w))) return "not-a-name";
    for (const w of nameWords) {
        if (/^[a-z]+$/.test(w)) {
            // English letters: "sdfgh" (no vowel), "aaaa" (one letter repeated)
            if (w.length >= 3 && !/[aeiouy]/.test(w)) return "not-a-name";
            if (/^(.)\1+$/.test(w)) return "not-a-name";
            // keyboard runs: "asdfgh", "qwerty", "zxcvb"
            if (/asdf|sdfg|dfgh|fghj|hjkl|qwer|wert|erty|zxcv|xcvb|abcd|wxyz/.test(w)) return "not-a-name";
        }
    }
    return "";
};

export const NAME_REPLY: Record<Lang, Record<Exclude<NameProblem, "">, string>> = {
    en: {
        abuse: "Please keep it respectful. 🙏 Type your real name to start the chat.",
        greeting: "Hello! 🙏 Please type your real name first (for example: Rohit Kumar).",
        "not-a-name": "That doesn't look like a name. Please type your real name (for example: Rohit Kumar).",
    },
    hi: {
        abuse: "कृपया सभ्य भाषा का प्रयोग करें। 🙏 चैट शुरू करने के लिए अपना असली नाम लिखें।",
        greeting: "नमस्कार! 🙏 कृपया पहले अपना असली नाम लिखें (जैसे: रोहित कुमार)।",
        "not-a-name": "यह नाम जैसा नहीं लग रहा। कृपया अपना असली नाम लिखें (जैसे: रोहित कुमार)।",
    },
};

const PHONE_WORDS = /phone|mobile|number|numbr|whatsapp|contact|call|नंबर|नम्बर|मोबाइल|फ़ोन|फोन/i;

/**
 * A mobile number typed in the chat that cannot be right (9 digits, 11 digits, starts with 1–5).
 * "" when the message has no number or the number is fine.
 */
export const typedPhoneProblem = (message: string, lang: Lang): string => {
    // Digits with the usual separators: "98765 4321", "+91-98765-432"
    const match = message.match(/\+?\d[\d\s\-()]{5,}\d/);
    if (!match) return "";
    let digits = match[0].replace(/\D/g, "");
    if (digits.length < 7 || digits.length > 14) return "";
    // Only when the message is (mostly) the number, or talks about a phone number — not "110001" in an address
    const rest = message.replace(match[0], "").trim();
    if (rest.length > 25 && !PHONE_WORDS.test(rest)) return "";
    if (digits.length > 10 && digits.startsWith("91")) digits = digits.slice(2);
    else if (digits.length > 10 && digits.startsWith("0")) digits = digits.slice(1);

    if (digits.length !== 10) {
        return lang === "hi"
            ? `यह मोबाइल नंबर सही नहीं लग रहा: इसमें ${digits.length} अंक हैं। मोबाइल नंबर 10 अंकों का होता है। कृपया जाँच कर दोबारा लिखें।`
            : `This mobile number doesn't look right: it has ${digits.length} digits. A mobile number has exactly 10 digits. Please check it and type it again.`;
    }
    if (!/^[6-9]/.test(digits)) {
        return lang === "hi"
            ? "यह मोबाइल नंबर सही नहीं लग रहा: भारतीय मोबाइल नंबर 6, 7, 8 या 9 से शुरू होता है। कृपया जाँच कर दोबारा लिखें।"
            : "This mobile number doesn't look right: an Indian mobile number starts with 6, 7, 8 or 9. Please check it and type it again.";
    }
    if (/^(\d)\1{9}$/.test(digits)) {
        return lang === "hi"
            ? "यह मोबाइल नंबर असली नहीं लग रहा। कृपया अपना सही नंबर लिखें।"
            : "This doesn't look like a real mobile number. Please type your correct number.";
    }
    return "";
};

/** An email address typed in the chat that is wrong ("abc@gmial.com", "abc@gmail", "@gmail.com"); "" otherwise */
export const typedEmailProblem = (message: string, lang: Lang): string => {
    const token = message.split(/\s+/).find((part) => part.includes("@"));
    if (!token) return "";
    const email = token.replace(/^[<("']+|[>)"',;:!?]+$/g, "").replace(/\.+$/, "");
    const problem = emailProblem(email, "Email");
    if (!problem) return "";
    return lang === "hi"
        ? `यह ईमेल पता सही नहीं लग रहा (${email})। कृपया जाँच कर दोबारा लिखें, जैसे name@gmail.com।`
        : `This email address doesn't look right. ${problem} Please check it and type it again.`;
};
