import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { whoShouldAttendApi, SERVER_URL } from '@/app/lib/api';

interface WhoShouldAttendData {
    subheading: string;
    heading: string;
    highlightText: string;
    image: string;
    imageAlt: string;
    groups: string[];
}

const WhoShouldAttendSection: React.FC = () => {
    const [data, setData] = useState<WhoShouldAttendData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await whoShouldAttendApi.get();
                if (result) {
                    setData(result);
                }
            } catch (error) {
                console.error("Error fetching Who Should Attend data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const renderHeading = (text: string, highlight: string) => {
        if (!highlight || !text.includes(highlight)) {
            return text.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                    {line}
                    {i < text.split('\n').length - 1 && <br />}
                </React.Fragment>
            ));
        }
        
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <>
                {parts.map((part, index) => 
                    part.toLowerCase() === highlight.toLowerCase() ? (
                        <span key={index} className="text-[#3b8c2a]">{part}</span>
                    ) : (
                        part.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                {i < part.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        ))
                    )
                )}
            </>
        );
    };

    if (loading) {
        return (
            <div className="py-20 flex justify-center items-center bg-[#F4FAF4]">
                <div className="w-10 h-10 border-4 border-[#3b8c2a] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!data) return null;

    const imageUrl = data.image.startsWith('http') ? data.image : `${SERVER_URL}${data.image}`;

    return (
        <section className="py-16 bg-[#F4FAF4]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="relative">
                    {/* Background Accent */}
                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-[120%] bg-[#3b8c2a]/5 rounded-full blur-3xl pointer-events-none" />

                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-stretch relative z-10">
                        {/* Image Side */}
                        <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl order-2 lg:order-1 min-h-[500px] lg:min-h-[600px]" data-aos="fade-right">
                            <img loading="lazy" decoding="async" src={imageUrl}
                                alt={data.imageAlt}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>

                        {/* Content Side */}
                        <div className="order-1 lg:order-2 flex flex-col justify-center py-4" data-aos="fade-left">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="h-px w-8 bg-[#e63946]" />
                                <span className="uppercase tracking-[0.3em] text-[#e63946] font-bold text-[10px]">{data.subheading}</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-inter text-slate-900 mb-6 leading-tight">
                                {renderHeading(data.heading, data.highlightText)}
                            </h2>

                            <div className="grid gap-4">
                                {data.groups && data.groups.map((group, idx) => (
                                    <div
                                        key={idx}
                                        data-aos="fade-up"
                                        data-aos-delay={idx * 50}
                                        className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-[#3b8c2a]/10 hover:border-[#3b8c2a]/30 hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <div className="w-9 h-9 rounded-xl bg-[#3b8c2a]/5 flex items-center justify-center text-[#3b8c2a] group-hover:bg-[#3b8c2a] group-hover:text-white transition-all duration-300">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <span className="text-[14px] font-semibold text-slate-800 tracking-tight">{group}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoShouldAttendSection;
