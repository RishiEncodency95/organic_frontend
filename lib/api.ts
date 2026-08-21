export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:5000';
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const apiCall = async (endpoint: string, options: RequestInit = {}) => {
    try {
        const url = `${API_URL}${endpoint}`;
        const response = await fetch(url, {
            cache: 'no-store',
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
        const response = await fetch(`${API_URL}/verify/send-email-otp`, {
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
        const response = await fetch(`${API_URL}/verify/verify-email-otp`, {
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
        const response = await fetch(`${API_URL}/verify/send-phone-otp`, {
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
        const response = await fetch(`${API_URL}/verify/verify-phone-otp`, {
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

export const crmApi = { 
    getCountries: async () => apiCall('/crm-countries'),
    getStates: async (countryCode: string) => apiCall(`/crm-states?countryCode=${countryCode}`),
    getCities: async (stateCode: string) => apiCall(`/crm-cities?stateCode=${stateCode}`)
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
    submitCorporate: async (data: any) => apiCall('/corporate-visitors', { method: 'POST', body: JSON.stringify({ ...data, mobile: data.mobile || data.mobileNo }) }),
    submitInternational: async (data: any) => apiCall('/international-visitors', { method: 'POST', body: JSON.stringify({ ...data, mobile: data.mobile || data.mobileNo }) }),
    submitGeneral: async (data: any) => apiCall('/general-visitors', { method: 'POST', body: JSON.stringify({ ...data, mobile: data.mobile || data.mobileNo }) }),
    submitGroup: async (data: any) => {
        const payload = { ...data };
        if (payload.persons && Array.isArray(payload.persons)) {
            payload.persons = payload.persons.map((p: any) => ({ ...p, mobile: p.mobile || p.mobileNo }));
        }
        return apiCall('/group-visitors', { method: 'POST', body: JSON.stringify(payload) });
    },
    submitHealthCamp: async (data: any) => apiCall('/health-camp-visitors', { method: 'POST', body: JSON.stringify({ ...data, mobile: data.mobile || data.mobileNo }) })
};

export const buyerApi = {
    submitInternationalBuyer: async (formData: FormData) => {
        const response = await fetch(`${API_URL}/international-buyer/register`, {
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
        const response = await fetch(`${API_URL}/buyer-registration`, {
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
