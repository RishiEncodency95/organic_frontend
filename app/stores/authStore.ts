import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    username: string;
    role: string;
    mobile?: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isOtpVerified: boolean;
    login: (username: string, password: string) => Promise<boolean>;
    verifyOtp: (otp: string) => Promise<boolean>;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            isOtpVerified: false,

            login: async (username, password) => {
                // Mock login - in a real app this would be an API call
                if (username && password) {
                    set({
                        user: {
                            username,
                            role: "Super Admin",
                            mobile: "1234567890"
                        },
                        isAuthenticated: true,
                        isOtpVerified: false
                    });
                    return true;
                }
                return false;
            },

            verifyOtp: async (otp) => {
                // Mock OTP verification - code is 123456
                if (otp === "123456") {
                    set({ isOtpVerified: true });
                    return true;
                }
                return false;
            },

            logout: () => {
                set({ user: null, isAuthenticated: false, isOtpVerified: false });
                localStorage.removeItem('auth-storage');
            },
        }),
        {
            name: 'auth-storage',
        }
    )
);
