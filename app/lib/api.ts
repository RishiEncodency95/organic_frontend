import { useAuthStore } from "@/app/stores/authStore";
import axios from "axios";
export interface SidebarItemType {
    _id: string;
    label: string;
    type: "heading" | "item" | "dropdown";
    path?: string;
    icon?: string;
    roles?: string[];
    children?: any[];
}


export const sidebarApi = {
    getTree: async (roleId?: string, isSuperAdmin: boolean = false): Promise<SidebarItemType[]> => {
        return [
            {
                _id: "dashboard",
                label: "Main",
                type: "heading",
            },
            {
                _id: "dashboard-link",
                label: "Dashboard",
                type: "item",
                path: "/dashboard",
                icon: "LayoutDashboard",
            },
            {
                _id: "website-management",
                label: "Website Management",
                type: "heading",
            },
            {
                _id: "home-slider",
                label: "Home Slider",
                type: "item",
                path: "/admin/home-slider",
                icon: "Image",
            },
            {
                _id: "about-us",
                label: "About Us",
                type: "item",
                path: "/admin/about",
                icon: "Info",
            },
            {
                _id: "testimonials",
                label: "Testimonials",
                type: "item",
                path: "/admin/testimonials",
                icon: "MessageSquare",
            },
            {
                _id: "services",
                label: "Services",
                type: "item",
                path: "/admin/services",
                icon: "Briefcase",
            },
        ];
    },
};

export const roleApi = {
    getRoles: async () => {
        return [{ _id: "1", roleName: "Super Admin" }];
    },
};

// const BASE_API_URL = (import.meta.env.VITE_API_URL || (window.location.hostname === "localhost" ? "http://localhost:5000/api" : "/api")).replace(/\/$/, "");
const BASE_API_URL="http://localhost:5000/"
export const API_URL = BASE_API_URL.endsWith("/api") ? BASE_API_URL : `${BASE_API_URL}/api`;
export const SERVER_URL = API_URL.replace(/\/api$/, "") || window.location.origin;
export const api = axios.create({
    baseURL: SERVER_URL,
});

export const heroApi = {
    getAll: async () => {
        const response = await fetch(`${API_URL}/hero/all?website=Organicexpo`);
        const data = await response.json();
        return data.success ? data.data : [];
    }
};

export const eventHighlightsApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/event-highlights`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const aboutApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/about`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const settingsApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/settings?website=Organicexpo`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const downloadPdfApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/download-pdf`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const marqueeApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/marquee`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const whoWeAreApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/who-we-are`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const featuredServicesApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/featured-services`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const serviceDetailApi = {
    getByCardId: async (cardId: string) => {
        const response = await fetch(`${API_URL}/service-details/${cardId}`);
        const data = await response.json();
        return data.success ? data.data : null;
    },
    getBySlug: async (slug: string) => {
        const response = await fetch(`${API_URL}/service-details/slug/${slug}`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const faqApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/faq`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const glimpseApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/glimpse`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const supportedByApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/supported-by`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const introductionApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/introduction`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const nationalExpoApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/national-expo`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const integratedFormatApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/integrated-format`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const clientApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/client`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};
export const parallaxApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/parallax`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const testimonialsApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/testimonials`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};
export const countersApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/counters`);
        const data = await response.json();
        return data.success ? data.data : [];
    }
};

export const blogApi = {
    getAll: async (params?: { category?: string; search?: string }) => {
        let url = `${API_URL}/blogs`;
        if (params) {
            const query = new URLSearchParams();
            if (params.category) query.append('category', params.category);
            if (params.search) query.append('search', params.search);
            const queryString = query.toString();
            if (queryString) url += `?${queryString}`;
        }
        const response = await fetch(url);
        return await response.json();
    },
    getLatest: async (limit: number = 3) => {
        const response = await fetch(`${API_URL}/blogs`);
        const data = await response.json();
        if (data.success) {
            data.data = data.data.slice(0, limit);
        }
        return data;
    },
    getBySlug: async (slug: string) => {
        const response = await fetch(`${API_URL}/blogs/${slug}`);
        return await response.json();
    },
    getExpertInsights: async () => {
        const response = await fetch(`${API_URL}/blogs/expert-insights`);
        return await response.json();
    },
    getMediaResources: async () => {
        const response = await fetch(`${API_URL}/blogs/media-resources`);
        return await response.json();
    },
    getSettings: async () => {
        const response = await fetch(`${API_URL}/blogs/settings`);
        return await response.json();
    },
    subscribe: async (email: string) => {
        const response = await fetch(`${API_URL}/blogs/subscribe`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        return await response.json();
    }
};


export const seoApi = {
    getByPath: async (path: string) => {
        const response = await fetch(`${API_URL}/seo/page?path=${encodeURIComponent(path)}`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const heroBackgroundApi = {
    getAll: async () => {
        const response = await fetch(`${API_URL}/hero-background?t=${Date.now()}`);
        const data = await response.json();
        return data.success ? data.data : [];
    },
    getByPage: async (pageName: string) => {
        const response = await fetch(`${API_URL}/hero-background?t=${Date.now()}`);
        const data = await response.json();
        if (data.success) {
            return data.data.find((item: any) => item.pageName === pageName);
        }
        return null;
    }
};

export const partnerComparisonApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/partner-categories`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};
export const printingBrandingPartnerApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/printing-branding-partner`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const logisticPartnerApi = {
    get: async () => {
        try {
            const response = await fetch(`${API_URL}/logistic-partner`);
            const data = await response.json();
            return data.success ? data.data : null;
        } catch (error) {
            console.error("Error fetching logistic partner:", error);
            return null;
        }
    }
};
export const hospitalityPartnerApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/hospitality-partner`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const globalPlatformApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/global-platform`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};
export const eventOverviewApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/event-overview`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};
export const aboutOrganizerApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/about-organizer`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};
export const ourJourneyApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/our-journey`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};
export const visionMissionApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/vision-mission`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};
export const whyAttendApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/why-attend`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const whoShouldAttendApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/who-should-attend`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const organizedByApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/organized-by`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const whyExhibitApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/why-exhibit-manage`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const whyVisitApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/why-visit`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const exhibitorProfileApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/exhibitor-profile`);
        const data = await response.json();
        // Since the backend returns the object directly or with data property
        // We'll normalize it here if needed, but usually it's just the data
        return data;
    }
};

export const ePromotionApi = {
    getContent: async () => {
        const response = await fetch(`${API_URL}/e-promotion/content`);
        const data = await response.json();
        return data.success ? data.data : null;
    },
    submitEnquiry: async (payload: any) => {
        const response = await fetch(`${API_URL}/e-promotion/enquiry`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        return await response.json();
    }
};

export const ePromotionPackagesApi = {
    getAll: async () => {
        const response = await fetch(`${API_URL}/e-promotion-packages/packages`);
        const data = await response.json();
        return data.success ? data.data : [];
    }
};

export const ePromotionAddonsApi = {
    getAll: async () => {
        const response = await fetch(`${API_URL}/e-promotion-packages/addons`);
        const data = await response.json();
        return data.success ? data.data : [];
    }
};

export const ePromotionReachApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/e-promotion-packages/reach`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const ePromotionTestimonialsApi = {
    getAll: async () => {
        const response = await fetch(`${API_URL}/e-promotion-packages/testimonials`);
        const data = await response.json();
        return data.success ? data.data : [];
    }
};

export const stallVendorApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/stall-vendor`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const exhibitorApi = {
    get: async (params?: { category?: string; search?: string; page?: number; limit?: number }) => {
        let url = `${API_URL}/exhibitor`;
        const query = new URLSearchParams();
        if (params) {
            if (params.category && params.category !== 'ALL') query.append('category', params.category);
            if (params.search) query.append('search', params.search);
            if (params.page) query.append('page', params.page.toString());
            if (params.limit) query.append('limit', params.limit.toString());
            const queryString = query.toString();
            if (queryString) url += `?${queryString}`;
        }
        const response = await fetch(url, { cache: 'no-store' });
        const data = await response.json();

        // Return full object if pagination metadata is present
        if (data.success && data.pagination) {
            return { data: data.data, pagination: data.pagination };
        }
        return data.success ? data.data : [];
    }
};
export const partnersApi = {
    getAll: async () => {
        const response = await fetch(`${API_URL}/partners`);
        const data = await response.json();
        return data.success ? data.data : [];
    }
};

export const advisoryApi = {
    getAll: async () => {
        const response = await fetch(`${API_URL}/advisory-members`);
        const data = await response.json();
        return data.success ? data.data : [];
    }
};

export const chairmanMessageApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/chairman-message`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const advisoryNominationApi = {
    submit: async (payload: any) => {
        const isFormData = payload instanceof FormData;
        const response = await fetch(`${API_URL}/advisory-nomination`, {
            method: 'POST',
            headers: isFormData ? {} : { 'Content-Type': 'application/json' },
            body: isFormData ? payload : JSON.stringify(payload)
        });
        return await response.json();
    },
    getAll: async () => {
        const response = await fetch(`${API_URL}/advisory-nomination`);
        const data = await response.json();
        return data.success ? data.data : [];
    },
    updateStatus: async (id: string, status: string) => {
        const response = await fetch(`${API_URL}/advisory-nomination/${id}/status`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status })
        });
        return await response.json();
    }
};

export const galleryApi = {
    getAll: async (category?: string) => {
        const url = category ? `${API_URL}/gallery?category=${category}` : `${API_URL}/gallery`;
        const response = await fetch(url);
        const data = await response.json();
        return data.success ? data.data : [];
    },
    getCategories: async (type?: string) => {
        const url = type ? `${API_URL}/gallery-category?type=${type}` : `${API_URL}/gallery-category`;
        const response = await fetch(url);
        const data = await response.json();
        return data.success ? data.data : [];
    }
};

export const contactEnquiryApi = {
    submitEnquiry: async (payload: any) => {
        const response = await fetch(`${API_URL}/contact-enquiry`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
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
        return await response.json();
    }
};

export const buyerRegistrationApi = {
    submit: async (payload: any) => {
        const isFormData = payload instanceof FormData;
        const response = await fetch(`${API_URL}/buyer-registration`, {
            method: 'POST',
            headers: isFormData ? {} : { 'Content-Type': 'application/json' },
            body: isFormData ? payload : JSON.stringify(payload)
        });
        return await response.json();
    },
    getAll: async () => {
        const response = await fetch(`${API_URL}/buyer-registration`);
        const data = await response.json();
        return data.success ? data.data : [];
    },
    delete: async (id: string) => {
        const response = await fetch(`${API_URL}/buyer-registration/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    },
    createOrder: async (amount: number) => {
        const response = await fetch(`${API_URL}/buyer-registration/create-order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount })
        });
        return await response.json();
    },
    verifyPayment: async (regId: string, paymentDetails: any) => {
        const response = await fetch(`${API_URL}/buyer-registration/verify-payment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ regId, paymentDetails })
        });
        return await response.json();
    },
    getConfig: async () => {
        const response = await fetch(`${API_URL}/buyer-registration/config`);
        return await response.json();
    }
};

export const internationalExhibitorApi = {
    submit: async (payload: any) => {
        const isFormData = payload instanceof FormData;
        const response = await fetch(`${API_URL}/international-exhibitor/register`, {
            method: 'POST',
            headers: isFormData ? {} : { 'Content-Type': 'application/json' },
            body: isFormData ? payload : JSON.stringify(payload)
        });
        return await response.json();
    },
    getAll: async () => {
        const response = await fetch(`${API_URL}/international-exhibitor`);
        const data = await response.json();
        return data.success ? data.data : [];
    },
    getConfig: async () => {
        const response = await fetch(`${API_URL}/international-exhibitor/config`);
        return await response.json();
    }
};

export const internationalBuyerApi = {
    submit: async (payload: any) => {
        const isFormData = payload instanceof FormData;
        const response = await fetch(`${API_URL}/international-buyer/register`, {
            method: 'POST',
            headers: isFormData ? {} : { 'Content-Type': 'application/json' },
            body: isFormData ? payload : JSON.stringify(payload)
        });
        return await response.json();
    },
    getAll: async () => {
        const response = await fetch(`${API_URL}/international-buyer`);
        const data = await response.json();
        return data.success ? data.data : [];
    },
    getConfig: async () => {
        const response = await fetch(`${API_URL}/international-buyer/config`);
        return await response.json();
    },
    updateConfig: async (payload: any) => {
        const response = await fetch(`${API_URL}/international-buyer/config`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        return await response.json();
    }
};

export const sellerRegistrationApi = {
    submit: async (payload: any) => {
        const isFormData = payload instanceof FormData;
        const response = await fetch(`${API_URL}/seller-registration`, {
            method: 'POST',
            headers: isFormData ? {} : { 'Content-Type': 'application/json' },
            body: isFormData ? payload : JSON.stringify(payload)
        });
        return await response.json();
    },
    getAll: async () => {
        const response = await fetch(`${API_URL}/seller-registration`);
        const data = await response.json();
        return data.success ? data.data : [];
    },
    delete: async (id: string) => {
        const response = await fetch(`${API_URL}/seller-registration/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    },
    createOrder: async (amount: number) => {
        const response = await fetch(`${API_URL}/seller-registration/create-order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount })
        });
        return await response.json();
    },
    verifyPayment: async (regId: string, paymentDetails: any) => {
        const response = await fetch(`${API_URL}/seller-registration/verify-payment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ regId, paymentDetails })
        });
        return await response.json();
    }
};

export const otpApi = {
    request: async (identifier: string, type: 'email' | 'phone', name?: string, source?: string) => {
        const response = await fetch(`${API_URL}/otp/request`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ identifier, type, name, source })
        });
        return await response.json();
    },
    verify: async (identifier: string, otp: string, type: 'email' | 'phone') => {
        const response = await fetch(`${API_URL}/otp/verify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ identifier, otp, type })
        });
        return await response.json();
    }
};

export const socialMediaApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/social-media`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const verifyApi = {
    sendEmailOtp: async (email: string, profile: string = 'SPEAKER') => {
        const response = await fetch(`${API_URL}/verify/send-email-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, profile })
        });
        return await response.json();
    },
    verifyEmailOtp: async (email: string, otp: string) => {
        const response = await fetch(`${API_URL}/verify/verify-email-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, otp })
        });
        return await response.json();
    },
    sendPhoneOtp: async (phone: string, profile: string = 'CONTACT', name: string = '') => {
        const response = await fetch(`${API_URL}/verify/send-phone-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone, profile, name: name || null })
        });
        return await response.json();
    },
    verifyPhoneOtp: async (phone: string, otp: string) => {
        const response = await fetch(`${API_URL}/verify/verify-phone-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone, otp })
        });
        return await response.json();
    }
};

export const analyticsApi = {
    logClick: async (iconName: string) => {
        try {
            const response = await fetch(`${API_URL}/analytics/log`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ iconName })
            });
            return await response.json();
        } catch (error) {
            console.error("Error logging click:", error);
            return { success: false };
        }
    }
};

export const stallApi = {
    getAvailable: async () => {
        const response = await fetch(`${API_URL}/stalls/available`);
        const data = await response.json();
        return data.success ? data.data : [];
    },
    getByEvent: async (eventId: string) => {
        const response = await fetch(`${API_URL}/stalls/available?eventId=${eventId}`);
        const data = await response.json();
        return data.success ? data.data : [];
    }
};

export const eventApi = {
    getAll: async () => {
        const response = await fetch(`${API_URL}/events`);
        const data = await response.json();
        return data.success ? data.data : [];
    },
    getActive: async () => {
        const response = await fetch(`${API_URL}/events/active`);
        const data = await response.json();
        return data.success ? data.data : [];
    }
};

export const stallRateApi = {
    getRate: async (eventId: string, currency: string, stallType: string) => {
        const response = await fetch(`${API_URL}/stall-rates/find?eventId=${eventId}&currency=${currency}&stallType=${stallType}`);
        const data = await response.json();
        return data.success ? data.data : null;
    },
    getAllByEvent: async (eventId: string) => {
        const response = await fetch(`${API_URL}/stall-rates/event/${eventId}`);
        const data = await response.json();
        return data.success ? data.data : [];
    }
};

export const termsApi = {
    getByPage: async (pageName: string, eventId?: string) => {
        let url = `${API_URL}/terms-and-conditions/${pageName}`;
        if (eventId) {
            url += `?eventId=${eventId}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const exhibitorRegistrationApi = {
    submit: async (payload: any) => {
        const response = await fetch(`${API_URL}/exhibitor-registration`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        return await response.json();
    }
};

export const publicApi = {
    getEmployees: async (): Promise<any[]> => {
        const response = await fetch(`${API_URL}/public/employees`);
        const data = await response.json();
        return data.success ? data.data : [];
    },
    getStaff: async (): Promise<any[]> => {
        const response = await fetch(`${API_URL}/public/staff`);
        const data = await response.json();
        return data.success ? data.data : [];
    }
};

export const travelAccommodationApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/travel-accommodation`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};


export const visitorAuthApi = {
    sendOtp: async (credentials: string) => {
        const response = await fetch(`${API_URL}/visitor-auth/send-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ credentials })
        });
        return await response.json();
    },
    verifyOtp: async (credentials: string, otp: string) => {
        const response = await fetch(`${API_URL}/visitor-auth/verify-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ credentials, otp })
        });
        return await response.json();
    }
};

export const expoSupportEnquiryApi = {
    submit: async (payload: any) => {
        const response = await fetch(`${API_URL}/expo-support-enquiry`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        return await response.json();
    },
    getAll: async (token: string) => {
        const response = await fetch(`${API_URL}/expo-support-enquiry`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return await response.json();
    },
    delete: async (id: string, token: string) => {
        const response = await fetch(`${API_URL}/expo-support-enquiry/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return await response.json();
    },
    updateStatus: async (id: string, status: string, token: string) => {
        const response = await fetch(`${API_URL}/expo-support-enquiry/${id}/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ status })
        });
        return await response.json();
    }
};

export const visitorApi = {
    submitCorporate: async (payload: any) => {
        const response = await fetch(`${API_URL}/corporate-visitors`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        return await response.json();
    },
    submitGeneral: async (payload: any) => {
        const response = await fetch(`${API_URL}/general-visitors`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        return await response.json();
    },
    submitGroup: async (payload: any) => {
        const response = await fetch(`${API_URL}/group-visitors`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        return await response.json();
    },
    submitHealthCamp: async (payload: any) => {
        const response = await fetch(`${API_URL}/health-camp-visitors`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        return await response.json();
    }
};

export const conferenceTrackApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/conference-tracks`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const policyApi = {
    getByPage: async (page: string) => {
        const response = await fetch(`${API_URL}/policies/${page}`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const floatingVideoApi = {
    getAll: async () => {
        const response = await fetch(`${API_URL}/floating-videos`);
        const data = await response.json();
        return data.success ? data.data : [];
    },
    getSettings: async () => {
        const response = await fetch(`${API_URL}/floating-videos/settings`);
        const data = await response.json();
        return data.success ? data.timer : 7;
    }
};

export const crmApi = {
    getCountries: async () => {
        const response = await fetch(`${API_URL}/crm-countries`);
        const data = await response.json();
        return Array.isArray(data) ? data : (data.data || []);
    },
    getStates: async (countryCode?: number) => {
        const url = countryCode ? `${API_URL}/crm-states?countryCode=${countryCode}` : `${API_URL}/crm-states`;
        const response = await fetch(url);
        const data = await response.json();
        return Array.isArray(data) ? data : (data.data || []);
    },
    getCities: async (stateCode?: number) => {
        const url = stateCode ? `${API_URL}/crm-cities?stateCode=${stateCode}` : `${API_URL}/crm-cities`;
        const response = await fetch(url);
        const data = await response.json();
        return Array.isArray(data) ? data : (data.data || []);
    }
};

export const adminApi = {
    getAll: async () => {
        const response = await fetch(`${API_URL}/admin/all`);
        const data = await response.json();
        return data.success ? data.data : [];
    }
};

export const brochureLeadApi = {
    submit: async (payload: any) => {
        const response = await fetch(`${API_URL}/brochure-leads/submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        return await response.json();
    }
};

export const whyParticipateApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/why-participate`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const newTestimonialsApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/new-testimonials`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};


// ─── Awards Nomination API ───
export const awardsNominationApi = {
    submit: async (payload: any) => {
        const response = await fetch(`${API_URL}/awards-nomination`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        return await response.json();
    },
    uploadFile: async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch(`${API_URL}/awards-nomination/upload`, {
            method: 'POST',
            body: formData
        });
        return await response.json();
    },
    getAll: async (filters?: { status?: string; awardCategory?: string; search?: string }) => {
        const params = new URLSearchParams(filters as any);
        const response = await fetch(`${API_URL}/awards-nomination?${params}`);
        return await response.json();
    },
    getById: async (id: string) => {
        const response = await fetch(`${API_URL}/awards-nomination/${id}`);
        return await response.json();
    },
    updateStatus: async (id: string, status: string, adminRemarks?: string) => {
        const response = await fetch(`${API_URL}/awards-nomination/${id}/status`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status, adminRemarks })
        });
        return await response.json();
    },
    delete: async (id: string) => {
        const response = await fetch(`${API_URL}/awards-nomination/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    }
};

// ─── Award Categories API ───
export const awardCategoryApi = {
    getAll: async () => {
        const response = await fetch(`${API_URL}/award-categories`);
        const data = await response.json();
        return data.success ? data.data : [];
    }
};
export const agendaApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/agenda`);
        const data = await response.json();
        return data.success ? data.data : [];
    }
};

export const conferenceTestimonialsApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/conference-testimonials`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};
export const speakerApi = {
    get: async (status?: string) => {
        const url = status ? `${API_URL}/speaker?status=${status}` : `${API_URL}/speaker`;
        const response = await fetch(url);
        const data = await response.json();
        return data.success ? data.data : [];
    }
};

export const msmePmsSchemeApi = {
    submit: async (payload: FormData) => {
        const response = await fetch(`${API_URL}/msme-pms-scheme/apply`, {
            method: 'POST',
            body: payload
        });
        return await response.json();
    },
    getPageContent: async () => {
        const response = await fetch(`${API_URL}/msme-pms-scheme/page-content`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const distinguishedSpeakerApi = {
    getAll: async () => {
        const response = await fetch(`${API_URL}/distinguished-speakers`);
        const data = await response.json();
        return data.success ? data.data : [];
    }
};

export const exhibitorTestimonialsApi = {
    get: async () => {
        const response = await fetch(`${API_URL}/exhibitor-testimonials`);
        const data = await response.json();
        return data.success ? data.data : null;
    }
};

export const mediaRegistrationApi = {
    getPageData: async () => {
        try {
            const response = await fetch(`${API_URL}/media-registration/data`);
            const data = await response.json();
            return data.success ? data.data : null;
        } catch (error) {
            console.error("Error fetching media page data:", error);
            return null;
        }
    },
    submitEnquiry: async (payload: any) => {
        try {
            const response = await fetch(`${API_URL}/media-registration/enquiry`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            return await response.json();
        } catch (error) {
            console.error("Error submitting media enquiry:", error);
            return { success: false, message: "Network error" };
        }
    }
};

export const partnerRegistrationApi = {
    submit: async (payload: FormData) => {
        try {
            const response = await fetch(`${API_URL}/partner-registration`, {
                method: 'POST',
                body: payload
            });
            return await response.json();
        } catch (error) {
            console.error("Error submitting partner registration:", error);
            return { success: false, message: "Network error" };
        }
    }
};


export const sponsorComparisonApi = {
    get: async () => {
        try {
            const response = await fetch(`${API_URL}/sponsor-comparison`);
            const data = await response.json();
            return data.success ? data.data : null;
        } catch (error) {
            console.error("Error fetching sponsor-comparison:", error);
            return null;
        }
    }
};
