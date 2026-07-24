import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { whyAttendApi } from '@/app/lib/api';

interface HighlightCard {
    _id?: string;
    title: string;
    icon: string;
    desc: string;
}

interface WhyAttendData {
    subheading: string;
    heading: string;
    highlightText: string;
    cards: HighlightCard[];
}

const WhyAttendSection: React.FC = () => {
    const [data, setData] = useState<WhyAttendData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await whyAttendApi.get();
                if (result) {
                    setData(result);
                }
            } catch (error) {
                console.error("Error fetching Why Attend data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const renderHeading = (text: string, highlight: string) => {
        if (!highlight || !text.includes(highlight)) return text;
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <>
                {parts.map((part, index) => 
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <span key={index} className="text-[#e63946]">{part}</span>
                    ) : (
                        part
                    )
                )}
            </>
        );
    };

    if (loading) {
        return (
            <div className="py-20 flex justify-center items-center bg-white">
                <div className="w-10 h-10 border-4 border-[#3b8c2a] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!data) return null;

    return (
        <section className="py-16 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <div className="h-px w-6 bg-[#3b8c2a]" />
                        <span className="uppercase tracking-[0.3em] text-[#3b8c2a] font-bold text-[11px]">{data.subheading}</span>
                        <div className="h-px w-6 bg-[#3b8c2a]" />
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-inter text-slate-900 leading-tight">
                        {renderHeading(data.heading, data.highlightText)}
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {data.cards.map((item, idx) => {
                        const Icon = (LucideIcons as any)[item.icon] || LucideIcons.HelpCircle;
                        return (
                            <div
                                key={item._id || idx}
                                data-aos="fade-up"
                                data-aos-delay={idx * 70}
                                className="group relative flex flex-col gap-4 p-7 bg-[#0f1f0c] rounded-2xl shadow-md hover:shadow-xl hover:shadow-[#3b8c2a]/20 hover:bg-[#162810] transition-all duration-300 cursor-default"
                            >
                                {/* Number badge */}
                                <span className="absolute top-5 right-5 text-[11px] font-black text-white/10 group-hover:text-[#e63946]/40 transition-colors tabular-nums">
                                    {String(idx + 1).padStart(2, "0")}
                                </span>

                                {/* Icon */}
                                <div className="w-11 h-11 rounded-xl bg-[#3b8c2a] flex items-center justify-center text-white group-hover:bg-[#e63946] transition-colors duration-300 shadow-lg">
                                    <Icon size={20} />
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="text-[15px] font-bold text-white mb-1.5 group-hover:text-[#e63946] transition-colors leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-[12px] text-white/50 leading-relaxed">{item.desc}</p>
                                </div>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-7 right-7 h-px bg-white/5 group-hover:bg-[#e63946]/30 transition-colors" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyAttendSection;
