import { useEffect, useRef, useState } from "react";
import { Globe, Users, TrendingUp, Heart, Building } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { countersApi, SERVER_URL } from "@/app/lib/api";

const ICON_MAP: Record<string, any> = {
    Globe,
    Users,
    TrendingUp,
    Heart
};

function useCountUp(end: number, duration: number, started: boolean) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!started) return;
        let startTime: number | null = null;
        const step = (ts: number) => {
            if (!startTime) startTime = ts;
            const progress = Math.min((ts - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [started, end, duration]);
    return count;
}

type StatCardProps = {
    icon: string;
    end: number;
    prefix?: string;
    suffix: string;
    label: string;
    bg: string;
    overlay: number;
    delay: number;
    sectionVisible: boolean;
};

const StatCard = ({ icon, end, prefix = "", suffix, label, bg, overlay, delay, sectionVisible }: StatCardProps) => {
    const [started, setStarted] = useState(false);
    const Icon = ICON_MAP[icon] || Globe;

    useEffect(() => {
        if (!sectionVisible) return;
        const t = setTimeout(() => setStarted(true), delay);
        return () => clearTimeout(t);
    }, [sectionVisible, delay]);

    const count = useCountUp(end, 1600, started);

    return (
        <div className="relative overflow-hidden rounded-2xl group min-h-[140px] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/10">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${SERVER_URL}${bg})` }}
            />
            <div
                className="absolute inset-0 transition-colors duration-500 group-hover:bg-black/50"
                style={{ backgroundColor: `rgba(0, 0, 0, ${overlay})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            <div className="relative z-10 p-4 pb-0 flex justify-end">
                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-[#F5A623] group-hover:scale-110 transition-all duration-500 shadow-sm">
                    <Icon className="w-4 h-4 text-white group-hover:text-white" />
                </div>
            </div>
            <div className="relative z-10 p-5 pt-4">
                <div className="text-3xl lg:text-4xl font-black text-white leading-none mb-1 tabular-nums tracking-tighter drop-shadow-xl">
                    {prefix}{count.toLocaleString()}{suffix}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 group-hover:text-white transition-colors duration-300">
                    {label}
                </div>
                <div className="mt-3 h-1 w-0 bg-[#F5A623] group-hover:w-16 transition-all duration-500 rounded-full" />
            </div>
        </div>
    );
};

// Helper component for count animation
const CounterNumber = ({ end, started, delay }: { end: number, started: boolean, delay: number }) => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        if (started) {
            const t = setTimeout(() => setActive(true), delay);
            return () => clearTimeout(t);
        }
    }, [started, delay]);
    const count = useCountUp(end, 1600, active);
    return <>{count.toLocaleString()}</>;
};

interface StatsCounterProps {
    variant?: "default" | "hero";
}

const StatsCounter = ({ variant = "default" }: StatsCounterProps) => {
    const [stats, setStats] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const data = await countersApi.get();
                setStats(data);
            } catch (error) {
                console.error("Error fetching stats:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchStats();
    }, []);

    useEffect(() => {
        if (loading || !sectionRef.current) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [loading]);

    if (loading) {
        return variant === "default" ? (
            <div className="py-20 bg-[#F9FAFB] flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-[#3b8c2a] border-t-transparent rounded-full animate-spin"></div>
            </div>
        ) : null;
    }

    if (!stats || stats.length === 0) return null;

    // ── HERO VARIANT ──
    if (variant === "hero") {
        const heroStats = [
            {
                number: 1500,
                sup: "+",
                label: "EXHIBITORS",
                sub: "Across Successful Editions",
                icon: <Users className="w-4 h-4" />,
            },
            {
                number: 80000,
                sup: "+",
                label: "VISITORS / DELEGATES",
                sub: "Across Successful Editions",
                icon: <Globe className="w-4 h-4" />,
            },
            {
                number: 10,
                sup: "+",
                label: "YEARS",
                sub: "Legacy of Trust & Growth",
                icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                ),
            },
            {
                number: 1500,
                sup: "CR+",
                prefix: "₹",
                label: "BUSINESS GENERATED",
                sub: "Over the Years",
                icon: <TrendingUp className="w-4 h-4" />,
            },
        ];

        return (
            <div className="relative z-30 w-full px-4 md:px-6 mt-4 md:-mt-8">
                <div 
                    className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/10"
                    style={{ background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)' }}
                >
                    <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {heroStats.map((s, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 md:gap-3 px-2 md:px-4 py-2 group hover:bg-white/5 transition-colors duration-300"
                            >
                                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#F5A623] transition-colors duration-300 text-white group-hover:text-[#1B5E20] shadow-sm">
                                    {s.icon}
                                </div>
                                <div className="flex flex-col justify-center">
                                    <div className="flex items-baseline leading-none mb-0.5 gap-0.5">
                                        {s.prefix && (
                                            <span className="text-white font-black text-base">
                                                {s.prefix}
                                            </span>
                                        )}
                                        <span className="text-white font-extrabold text-base md:text-lg tabular-nums tracking-tight">
                                            <CounterNumber end={s.number} started={visible} delay={index * 100} />
                                        </span>
                                        <span className="text-white/80 font-bold text-[10px] md:text-xs">{s.sup}</span>
                                    </div>
                                    <p 
                                        className="font-bold text-[7px] md:text-[8px] uppercase tracking-[0.1em] md:tracking-[0.15em] leading-tight"
                                        style={{ color: '#F5A623' }}
                                    >
                                        {s.label}
                                    </p>
                                    <p className="text-white/60 text-[6.5px] md:text-[7.5px] mt-0.5 leading-tight">{s.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // ── DEFAULT VARIANT ──
    return (
        <section className="py-10 bg-[#F9FAFB] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((s, index) => (
                        <StatCard
                            key={s._id || index}
                            icon={s.icon}
                            end={isNaN(Number(s.end)) ? 0 : Number(s.end)}
                            prefix={s.prefix}
                            suffix={s.suffix}
                            label={s.label}
                            bg={s.bg}
                            overlay={s.overlay}
                            delay={index * 100}
                            sectionVisible={visible}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;