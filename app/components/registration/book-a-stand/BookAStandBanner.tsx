import React from "react";
import { Globe, ShieldCheck, Target, TrendingUp } from "lucide-react";

const BookAStandBanner = () => {
    return (
        <div className="w-full px-4 lg:px-11">
            <section className="grid grid-cols-1 md:flex md:items-center md:justify-between my-3 p-4 md:py-3 md:px-2 gap-4 md:gap-0 bg-white border border-gray-100 rounded-xl shadow-sm">
                {[
                    {
                        icon: <Globe className="w-6 h-6 md:w-8 md:h-8 text-[#19491A]" strokeWidth={1.8} />,
                        title: 'Global Platform',
                        desc: 'Uniting the organic, natural, and sustainable industries',
                    },
                    {
                        icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-[#19491A]" strokeWidth={1.8} />,
                        title: 'Trusted Brands',
                        desc: "Connect with India's top organic brands & manufacturers",
                    },
                    {
                        icon: <Target className="w-6 h-6 md:w-8 md:h-8 text-[#19491A]" strokeWidth={1.8} />,
                        title: 'Targeted Audience',
                        desc: 'Engage with qualified buyers, distributors & decision makers',
                    },
                    {
                        icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-[#19491A]" strokeWidth={1.8} />,
                        title: 'Business Growth',
                        desc: 'Expand your market & accelerate your organic growth',
                    },
                ].map((item, i) => (
                    <React.Fragment key={i}>
                        <div className="flex items-start gap-4 flex-1 px-2 md:px-4">
                            {/* Icon Circle */}
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#f0f7e6] flex items-center justify-center shrink-0 p-2 md:p-3">
                                {item.icon}
                            </div>
                            {/* Text */}
                            <div>
                                <h3 className="text-base font-bold text-gray-900 mb-1 leading-snug">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                        {/* Divider */}
                        {i < 3 && (
                            <>
                                <div className="hidden md:block w-px h-12 bg-gray-200 shrink-0" />
                                <div className="block md:hidden h-px w-full bg-gray-100 my-1" />
                            </>
                        )}
                    </React.Fragment>
                ))}
            </section>
        </div>
    );
};

export default React.memo(BookAStandBanner);
