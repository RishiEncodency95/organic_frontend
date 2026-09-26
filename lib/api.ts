export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL ||
  (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4001');

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  (typeof window !== 'undefined' ? '/api' : 'http://localhost:4001/api');

const CLIENT_CACHE_TTL_MS = 5 * 60 * 1000;

type ClientCacheEntry = {
    value: any;
    expiresAt: number;
};

const clientResponseCache = new Map<string, ClientCacheEntry>();
const clientRequestsInFlight = new Map<string, Promise<any>>();

export function primeClientApiCache(
    responses: Partial<Record<string, unknown>>,
    ttlMs = CLIENT_CACHE_TTL_MS,
) {
    if (typeof window === 'undefined') return;

    const expiresAt = Date.now() + ttlMs;
    Object.entries(responses).forEach(([endpoint, value]) => {
        if (value !== null && value !== undefined) {
            clientResponseCache.set(endpoint, { value, expiresAt });
        }
    });
}

const ihwe_API_URL =
  process.env.NEXT_PUBLIC_IHWE_API_URL ||
  (typeof window !== 'undefined' ? '/api' : 'http://localhost:5001/api');
  
const apiCall = async (endpoint: string, options: RequestInit = {}) => {
    const method = (options.method || 'GET').toUpperCase();
    const isCacheableClientGet = typeof window !== 'undefined' && method === 'GET';

    if (isCacheableClientGet) {
        const cached = clientResponseCache.get(endpoint);
        if (cached && cached.expiresAt > Date.now()) {
            return cached.value;
        }

        const inFlight = clientRequestsInFlight.get(endpoint);
        if (inFlight) return inFlight;
    }

    const request = (async () => {
    try {
        const url = `${API_URL}${endpoint}`;
        // On the server, cache for 60s so pages can be statically served and refreshed in
        // the background (ISR) instead of re-rendering on every visit; `no-store` here would
        // force every page that reads SEO/content data to render per request.
        const cacheOptions: RequestInit =
            typeof window === 'undefined'
                ? ({ next: { revalidate: 60 } } as RequestInit)
                : { cache: 'default' };
        const response = await fetch(url, {
            ...cacheOptions,
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });
        
        if (!response.ok) {
            return { data: [] };
        }
        
        const text = await response.text();
        if (!text) return { data: [] };
        
        const data = JSON.parse(text);
        let result = data;
        if (data && typeof data === 'object') {
            if (data.data !== undefined) {
                result = data.data;
            } else if (data.success !== undefined) {
                result = data.success ? data : null;
            }
        }

        if (isCacheableClientGet) {
            clientResponseCache.set(endpoint, {
                value: result,
                expiresAt: Date.now() + CLIENT_CACHE_TTL_MS,
            });
        }

        return result;
    } catch (error) {
        return [];
    }
    })();

    if (isCacheableClientGet) {
        clientRequestsInFlight.set(endpoint, request);
        request.finally(() => clientRequestsInFlight.delete(endpoint));
    }

    return request;
};

const ihweApiCall = async (endpoint: string, options: RequestInit = {}) => {
    try {
        const url = `${ihwe_API_URL}${endpoint}`;
        const response = await fetch(url, {
            cache: 'no-store',
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });
        
        if (!response.ok) {
            return [];
        }
        
        const text = await response.text();
        if (!text) return [];
        
        const data = JSON.parse(text);
        if (data && typeof data === 'object') {
            if (data.data !== undefined) {
                return data.data;
            }
            if (data.success !== undefined) {
                return data.success ? data : null;
            }
        }
        return data;
    } catch (error) {
        return [];
    }
};

export const stallApi = { 
    getStallsByEvent: async (eventId: string) => apiCall(`/stalls/available?eventId=${eventId}`),
    getByEvent: async (eventId: string) => apiCall(`/stalls/available?eventId=${eventId}`)
};

export const stallRateApi = { 
    getAllByEvent: async (eventId: string) => apiCall(`/stall-rates/event/${eventId}`),
    getRate: async (eventId: string, currency: string, stallType: string) => apiCall(`/stall-rates/find?eventId=${eventId}&currency=${currency}&stallType=${stallType}`)
};

export const exhibitorRegistrationApi = { 
    submit: async (data: any) => apiCall('/exhibitor-registration', {
        method: 'POST',
        body: JSON.stringify(data)
    })
};

export const eventApi = { 
    getActive: async () => apiCall('/events/active')
};

export const settingsApi = { 
    get: async () => apiCall(`/settings?website=Organicexpo`),
    getSettings: async () => apiCall(`/settings?website=Organicexpo`)
};

export const ihweSettingsApi = {
    get: async () => ihweApiCall(`/settings?website=Organicexpo`),
    getSettings: async () => ihweApiCall(`/settings?website=Organicexpo`)
};

export const termsApi = { 
    getTerms: async () => apiCall('/terms-and-conditions'),
    getByPage: async (page: string) => apiCall(`/terms-and-conditions/${page}`)
};

export const publicApi = { 
    getEmployees: async () => apiCall('/public/employees'),
    getStaff: async () => apiCall('/public/staff')
};

export const verifyApi = {
    sendEmailOtp: async (email: string, profile: string = 'SPEAKER', name: string = '', eventName: string = process.env.NEXT_PUBLIC_EVENT_NAME || 'BOE2026') => {
        const response = await fetch(`${ihwe_API_URL}/verify/send-email-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, profile, name: name || null, eventName })
        });
        if (!response.ok) {
            const text = await response.text();
            try { return JSON.parse(text); } catch(e) { return { success: false, message: "HTTP " + response.status + ": " + text.substring(0, 50) }; }
        }
        return await response.json();
    },
    verifyEmailOtp: async (email: string, otp: string) => {
        const response = await fetch(`${ihwe_API_URL}/verify/verify-email-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, otp })
        });
        if (!response.ok) {
            const text = await response.text();
            try { return JSON.parse(text); } catch(e) { return { success: false, message: "HTTP " + response.status + ": " + text.substring(0, 50) }; }
        }
        return await response.json();
    },
    sendPhoneOtp: async (phone: string, profile: string = 'CONTACT', name: string = '', eventName: string = process.env.NEXT_PUBLIC_EVENT_NAME || 'BOE2026') => {
        const response = await fetch(`${ihwe_API_URL}/verify/send-phone-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone, profile, name: name || null, eventName })
        });
        if (!response.ok) {
            const text = await response.text();
            try { return JSON.parse(text); } catch(e) { return { success: false, message: "HTTP " + response.status + ": " + text.substring(0, 50) }; }
        }
        return await response.json();
    },
    verifyPhoneOtp: async (phone: string, otp: string) => {
        const response = await fetch(`${ihwe_API_URL}/verify/verify-phone-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone, otp })
        });
        if (!response.ok) {
            const text = await response.text();
            try { return JSON.parse(text); } catch(e) { return { success: false, message: "HTTP " + response.status + ": " + text.substring(0, 50) }; }
        }
        return await response.json();
    }
};

export const heroBackgroundApi = {
    getByPage: async (pageName: string) => apiCall(`/hero-backgrounds/page/${encodeURIComponent(pageName)}`)
};

/** localStorage key the MSME apply flow uses to carry the draft's applicationId across its 3 separate page routes. */
const MSME_APPLICATION_ID_KEY = 'msme_application_id';
/** Carries the eligibility-check page's AI-extracted certificate data forward so the Apply form can pre-fill itself. */
const MSME_UDYAM_EXTRACT_KEY = 'msme_udyam_extract';

export const msmeStorage = {
    getApplicationId: (): string | null => {
        if (typeof window === 'undefined') return null;
        try { return window.localStorage.getItem(MSME_APPLICATION_ID_KEY); } catch { return null; }
    },
    setApplicationId: (id: string) => {
        if (typeof window === 'undefined') return;
        try { window.localStorage.setItem(MSME_APPLICATION_ID_KEY, id); } catch { /* ignore */ }
    },
    clearApplicationId: () => {
        if (typeof window === 'undefined') return;
        try { window.localStorage.removeItem(MSME_APPLICATION_ID_KEY); } catch { /* ignore */ }
    },
    getUdyamExtract: (): Record<string, any> | null => {
        if (typeof window === 'undefined') return null;
        try {
            const raw = window.localStorage.getItem(MSME_UDYAM_EXTRACT_KEY);
            return raw ? JSON.parse(raw) : null;
        } catch { return null; }
    },
    setUdyamExtract: (data: Record<string, any>) => {
        if (typeof window === 'undefined') return;
        try { window.localStorage.setItem(MSME_UDYAM_EXTRACT_KEY, JSON.stringify(data)); } catch { /* ignore */ }
    },
    clearUdyamExtract: () => {
        if (typeof window === 'undefined') return;
        try { window.localStorage.removeItem(MSME_UDYAM_EXTRACT_KEY); } catch { /* ignore */ }
    },
};

export const msmeApi = {
    /** Uploads a Udyam certificate and returns the AI-extracted fields (or a graceful "unclear" result). */
    analyzeUdyamCertificate: async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch(`${API_URL}/msme/udyam/analyze`, {
            method: 'POST',
            body: formData,
        });
        const text = await response.text();
        try { return JSON.parse(text); } catch { return { success: false, message: 'HTTP ' + response.status }; }
    },
    saveEnterpriseDetails: async (applicationId: string | null, enterprise: Record<string, any>) => {
        const response = await fetch(`${API_URL}/msme/applications`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ applicationId: applicationId || undefined, enterprise }),
        });
        const text = await response.text();
        try { return JSON.parse(text); } catch { return { success: false, message: 'HTTP ' + response.status }; }
    },
    getApplication: async (applicationId: string) => {
        const response = await fetch(`${API_URL}/msme/applications/${applicationId}`);
        const text = await response.text();
        try { return JSON.parse(text); } catch { return { success: false, message: 'HTTP ' + response.status }; }
    },
    saveParticipationDetails: async (applicationId: string, participation: Record<string, any>) => {
        const response = await fetch(`${API_URL}/msme/applications/${applicationId}/participation`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ participation }),
        });
        const text = await response.text();
        try { return JSON.parse(text); } catch { return { success: false, message: 'HTTP ' + response.status }; }
    },
    /** Server creates the Razorpay order itself (never trust a client-supplied order id). */
    createPaymentOrder: async (applicationId: string, payload: { amount: number; currency?: string }) => {
        const response = await fetch(`${API_URL}/msme/applications/${applicationId}/payment-order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });
        const text = await response.text();
        try { return JSON.parse(text); } catch { return { success: false, message: 'HTTP ' + response.status }; }
    },
    confirmPayment: async (applicationId: string, payload: { razorpayPaymentId: string; razorpaySignature?: string }) => {
        const response = await fetch(`${API_URL}/msme/applications/${applicationId}/payment-confirm`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });
        const text = await response.text();
        try { return JSON.parse(text); } catch { return { success: false, message: 'HTTP ' + response.status }; }
    },
};

export const crmApi = { 
    getCountries: async () => ihweApiCall('/crm-countries'),
    getStates: async (countryCode: string) => ihweApiCall(`/crm-states?countryCode=${countryCode}`),
    getCities: async (stateCode: string) => ihweApiCall(`/crm-cities?stateCode=${stateCode}`)
};

export const eventHighlightsApi = { 
    get: async () => apiCall('/event-highlights'),
    getHighlights: async () => apiCall('/event-highlights')
};

export const countersApi = { 
    get: async () => apiCall('/counters'),
    getCounters: async () => apiCall('/counters')
};

export const adminApi = { 
    getEmployees: async () => apiCall('/admin/employees')
};

export const visitorApi = {
    submitCorporate: async (data: any) => ihweApiCall('/corporate-visitors', { method: 'POST', body: JSON.stringify({ ...data, mobile: data.mobile || data.mobileNo }) }),
    submitInternational: async (data: any) => ihweApiCall('/international-visitors', { method: 'POST', body: JSON.stringify({ ...data, mobile: data.mobile || data.mobileNo }) }),
    submitGeneral: async (data: any) => ihweApiCall('/general-visitors', { method: 'POST', body: JSON.stringify({ ...data, mobile: data.mobile || data.mobileNo }) }),
    submitGroup: async (data: any) => {
        const payload = { ...data };
        if (payload.persons && Array.isArray(payload.persons)) {
            payload.persons = payload.persons.map((p: any) => ({ ...p, mobile: p.mobile || p.mobileNo }));
        }
        return ihweApiCall('/group-visitors', { method: 'POST', body: JSON.stringify(payload) });
    },
    submitHealthCamp: async (data: any) => ihweApiCall('/health-camp-visitors', { method: 'POST', body: JSON.stringify({ ...data, mobile: data.mobile || data.mobileNo }) })
};

export const buyerApi = {
    getConfig: async () => {
        const response = await fetch(`${ihwe_API_URL}/buyer-registration/config`);
        return await response.json();
    },
    submitInternationalBuyer: async (formData: FormData) => {
        const response = await fetch(`${ihwe_API_URL}/international-buyer/register`, {
            method: 'POST',
            body: formData,
        });
        if (!response.ok) {
            const text = await response.text();
            let json;
            try {
                json = JSON.parse(text);
            } catch(e) {}
            console.error("API Error Response:", text);
            return json || { success: false, message: text };
        }
        if (!response.ok) {
            const text = await response.text();
            try { return JSON.parse(text); } catch(e) { return { success: false, message: "HTTP " + response.status + ": " + text.substring(0, 50) }; }
        }
        return await response.json();
    },
    submitBuyer: async (formData: FormData) => {
        const response = await fetch(`${ihwe_API_URL}/buyer-registration`, {
            method: 'POST',
            body: formData,
            // Let browser set Content-Type for FormData
        });
        if (!response.ok) {
            const text = await response.text();
            let json;
            try {
                json = JSON.parse(text);
            } catch(e) {}
            console.error("API Error Response:", text);
            return json || { success: false, message: text };
        }
        if (!response.ok) {
            const text = await response.text();
            try { return JSON.parse(text); } catch(e) { return { success: false, message: "HTTP " + response.status + ": " + text.substring(0, 50) }; }
        }
        return await response.json();
    }
};

export const policyApi = {
    getByPage: async (page: string) => apiCall(`/policies/${page}`)
};

export const contactEnquiryApi = {
    submitEnquiry: async (payload: any) => {
        const response = await fetch(`${API_URL}/contact-enquiry`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            const text = await response.text();
            try { return JSON.parse(text); } catch(e) { return { success: false, message: "HTTP " + response.status + ": " + text.substring(0, 50) }; }
        }
        return await response.json();
    },
    getAll: async () => {
        const response = await fetch(`${API_URL}/contact-enquiry`);
        const data = await response.json();
        return data.success ? data.data : [];
    },
    delete: async (id: string) => {
        const response = await fetch(`${API_URL}/contact-enquiry/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            const text = await response.text();
            try { return JSON.parse(text); } catch(e) { return { success: false, message: "HTTP " + response.status + ": " + text.substring(0, 50) }; }
        }
        return await response.json();
    }
};

export const sponsorshipEnquiryApi = {
    submit: async (data: any) => {
        const response = await fetch(`${API_URL}/sponsorship-enquiry`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const text = await response.text();
            try { return JSON.parse(text); } catch(e) { return { success: false, message: "HTTP " + response.status + ": " + text.substring(0, 50) }; }
        }
        return await response.json();
    }
};

export const websiteApi = {
    getHomeHero: async () => apiCall('/website/home/home-hero'),
    getHomeSection: async (section: string) => apiCall(`/website/home/${section}`),
    getAudienceStrip: async () => apiCall('/website/home/audience-strip'),
    getIntroductionSection: async () => apiCall('/website/home/introduction-section'),
    getGlobalPlatform: async () => apiCall('/website/home/global-platform'),
    getWhyParticipate: async () => apiCall('/website/home/why-participate'),
    getConferenceSeminars: async () => apiCall('/website/home/conference-seminars'),
    getExpoCategories: async () => apiCall('/website/home/expo-categories'),
    getBeyondExhibition: async () => apiCall('/website/home/beyond-exhibition'),
    getSponsorsAndAttend: async () => apiCall('/website/home/sponsors-attend'),
    getTestimonialsCarousel: async () => apiCall('/website/home/testimonials-carousel'),
    getWhyVisitMatters: async () => apiCall('/website/participate/why-visit/matters'),
    getWhyVisitSegments: async () => apiCall('/website/participate/why-visit/segments'),
};

export const seoApi = {
    getByPage: async (page: string = "home", env?: string) => {
        const query = env ? `?env=${env}` : "";
        return apiCall(`/seo/${page}${query}`);
    },
    save: async (page: string, data: any) => {
        return apiCall(`/seo/${page}`, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    },
};


