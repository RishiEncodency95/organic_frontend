import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Calendar, Clock, Eye, Link as LinkIcon, MessageCircle,
    Leaf, TrendingUp, Users, Globe, CheckCircle2, ShoppingCart, Truck, Zap,
    ChevronRight, Handshake, Award
} from "lucide-react";
import articleImg1 from "@/app/assets/blog/latest_1.webp";
import articleImg2 from "@/app/assets/blog/latest_2.webp";
import articleImg3 from "@/app/assets/blog/featured_article1.webp";
import articleImg4 from "@/app/assets/blog/featured_article2.webp";

// Social Icons SVGs
const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);
const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);

// Map string names to Lucide components for dynamic rendering
const iconMap: Record<string, any> = {
    TrendingUp,
    Users,
    Globe,
    ShoppingCart,
    Leaf,
    Zap
};

// --- DYNAMIC DATA START ---
const blogData = {
    breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Industry News", href: "/blog/category/industry-news" }
    ],
    category: "INDUSTRY NEWS",
    title: "India's Organic Market: Growth, Opportunities & Future Outlook",
    description: "A closer look at the dynamic trends shaping India's organic industry and the vast opportunities that lie ahead for businesses, farmers, and conscious consumers. As global demand for sustainable products rises.",
    meta: {
        date: "May 20, 2025",
        readTime: "5 min read",
        views: "1,256 Views"
    },
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop",
    paragraphs: [
        "The organic industry in India is no longer a niche segment - it has become a fast-growing movement redefining the future of food, farming, health and sustainability.",
        "With a rich heritage of natural living and a strong shift towards conscious consumption, India is positioned as a global leader in organic."
    ],
    sections: [
        {
            id: 1,
            title: "The Growth Story",
            content: "India ranks among the top countries in the world in terms of organic producers and cultivated area. The market is expanding steadily across food, beverages, personal care, textiles, and more.",
            type: "stats",
            data: [
                { icon: "TrendingUp", value: "₹ 75,000 Cr+", label: "Estimated Organic Market Size in India (2024)" },
                { icon: "TrendingUp", value: "20%+", label: "CAGR Growth (2024 - 2030)" },
                { icon: "Users", value: "2.8 Mn+", label: "Organic Farmers in India" },
                { icon: "Globe", value: "190+", label: "Countries Importing Organic from India" }
            ]
        },
        {
            id: 2,
            title: "Key Drivers",
            type: "list",
            data: [
                { title: "Health Awareness:", desc: "Consumers are choosing organic for a healthier life." },
                { title: "Sustainable Farming:", desc: "Organic practices improve soil health and reduce environmental impact." },
                { title: "Government Support:", desc: "Schemes like Paramparagat Krishi Vikas Yojana (PKVY) and NPOP certification are boosting the ecosystem." },
                { title: "Global Demand:", desc: "Rising international demand for organic products from India." }
            ]
        },
        {
            id: 3,
            title: "Opportunities Ahead",
            type: "cards",
            data: [
                { icon: "ShoppingCart", title: "Expanding Domestic Market", desc: "More urban consumers are embracing organic lifestyle." },
                { icon: "Globe", title: "Export Potential", desc: "Huge opportunities in Europe, USA, Middle East & Asia." },
                { icon: "Leaf", title: "Value-Added Products", desc: "Scope in organic processed foods, herbal & wellness products." },
                { icon: "Zap", title: "Innovation & Technology", desc: "Agri-tech, traceability, and digital platforms will drive growth." }
            ]
        },
        {
            id: 4,
            title: "Future Outlook",
            content: "With the right collaboration between farmers, businesses, policymakers, and consumers, India's organic industry is set to become a global powerhouse that leads the way towards a healthier and sustainable planet.",
            type: "quote",
            data: {
                main: "The future is organic. The time is now.",
                sub: "Together, let's grow a healthier India and a sustainable world."
            }
        }
    ]
};

const sidebarData = {
    author: {
        name: "Bharat Organic Expo Team",
        description: "Dedicated to promoting organic, natural and sustainable solutions through knowledge, innovation and global collaboration."
    },
    relatedArticles: [
        {
            title: "Natural Farming vs Organic Farming: Understanding the Difference",
            date: "May 18, 2025",
            image: articleImg1
        },
        {
            title: "AYUSH Systems and Their Role in Building a Healthy Bharat",
            date: "May 15, 2025",
            image: articleImg2
        },
        {
            title: "Sustainability in Action: Building a Greener Tomorrow",
            date: "May 12, 2025",
            image: articleImg3
        },
        {
            title: "Global Demand for Organic Products: Trends & Trade Opportunities",
            date: "May 10, 2025",
            image: articleImg4
        }
    ],
    categories: [
        { name: "Industry News", active: true },
        { name: "Organic Farming", active: false },
        { name: "AYUSH & Wellness", active: false },
        { name: "Sustainability", active: false },
        { name: "Market Insights", active: false },
        { name: "Event Updates", active: false }
    ]
};

const bottomBannerData = [
    { icon: Leaf, label: "100% Organic Focus" },
    { icon: Users, label: "Global Participation" },
    { icon: Handshake, label: "Business Opportunities" },
    { icon: Award, label: "Knowledge & Innovation" }
];
// --- DYNAMIC DATA END ---

export default function BlogDetail() {
    return (
        <div className="min-h-screen bg-white font-sans text-neutral-800">
            <div className="w-full px-4 md:px-8 lg:px-14 py-6">
                {/* Breadcrumbs */}
                <nav className="flex items-center text-[13px] text-neutral-500 mt-7 mb-2 whitespace-nowrap overflow-x-auto">
                    {blogData.breadcrumbs.map((crumb, idx) => (
                        <React.Fragment key={idx}>
                            <Link href={crumb.href} className="hover:text-green-700 transition-colors">{crumb.label}</Link>
                            <ChevronRight className="w-3.5 h-3.5 mx-2 flex-shrink-0 text-neutral-400" />
                        </React.Fragment>
                    ))}
                    <span className="text-neutral-500 truncate">{blogData.title}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-14">
                    {/* Main Content Column */}
                    <main>
                        {/* Header */}
                        <div className="mb-4">
                            <span className="inline-block bg-[#2D6A4F] text-white text-[11px] font-bold px-3 py-1 rounded-[4px] uppercase tracking-wide mb-2">
                                {blogData.category}
                            </span>
                            <h1 className="text-xl md:text-3xl font-semibold text-[#2D6A4F] leading-[1.2] mb-2">
                                {blogData.title}
                            </h1>
                            <p className="text-[15px] text-neutral-600 mb-4 leading-relaxed">
                                {blogData.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-6 text-[13px] text-neutral-500 font-medium border-b border-gray-100 pb-2">
                                <div className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4 text-neutral-400" />
                                    <span>{blogData.meta.date}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock className="w-4 h-4 text-neutral-400" />
                                    <span>{blogData.meta.readTime}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Eye className="w-4 h-4 text-neutral-400" />
                                    <span>{blogData.meta.views}</span>
                                </div>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="w-full aspect-[3/1] relative rounded-xl overflow-hidden mb-2 shadow-sm">
                            <Image
                                src={blogData.image}
                                alt="Organic farm field at sunset"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Article Content */}
                        <div className="text-[15px] text-neutral-700 max-w-none space-y-2">
                            {blogData.paragraphs.map((para, idx) => (
                                <p key={idx} className="leading-relaxed">{para}</p>
                            ))}

                            {/* Dynamic Sections */}
                            {blogData.sections.map((section) => (
                                <div key={section.id} className="pt-2">
                                    <h2 className="flex items-center gap-3 text-lg font-semibold text-[#1B4332] mb-1">
                                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#34A853] text-white text-[15px] shrink-0">{section.id}</span>
                                        {section.title}
                                    </h2>
                                    {section.content && (
                                        <p className="mb-6 text-[15px] text-neutral-700 leading-relaxed">
                                            {section.content}
                                        </p>
                                    )}

                                    {/* Stats Type */}
                                    {section.type === "stats" && (
                                        <div className="grid grid-cols-2 md:grid-cols-4 bg-[#F4FBF4] rounded-lg border border-green-50/50">
                                            {(section.data as any[]).map((stat: any, idx: number) => {
                                                const IconComponent = iconMap[stat.icon];
                                                return (
                                                    <div key={idx} className={`text-center p-3 border-r border-gray-300/30 md:border-r ${idx === (section.data as any[]).length - 1 ? 'border-0 md:border-r-0' : ''}`}>
                                                        {IconComponent && <IconComponent className="w-6 h-6 mx-auto text-[#34A853] mb-2" />}
                                                        <div className="font-bold text-lg text-[#1B4332]">{stat.value}</div>
                                                        <div className="text-[12px] text-neutral-500 mt-1">{stat.label}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}

                                    {/* List Type */}
                                    {section.type === "list" && (
                                        <ul className="space-y-3 list-none pl-0 text-[15px] text-neutral-700">
                                            {(section.data as any[]).map((item: any, idx: number) => (
                                                <li key={idx} className="flex items-start gap-2.5">
                                                    <CheckCircle2 className="w-5 h-5 text-[#34A853] shrink-0 mt-0.5 fill-[#34A853] text-white" />
                                                    <div><span className="font-semibold text-[#1B4332]">{item.title}</span> {item.desc}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {/* Cards Type */}
                                    {section.type === "cards" && (
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-3">
                                            {(section.data as any[]).map((card: any, idx: number) => {
                                                const IconComponent = iconMap[card.icon];
                                                return (
                                                    <div key={idx} className="group text-center px-2 py-4 bg-[#F9FBF9] rounded-lg border border-gray-200 hover:border-[#2D6A4F]/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                                                        <div className="w-[42px] h-[42px] mx-auto rounded-full border border-[#2D6A4F] flex items-center justify-center mb-3 bg-white shadow-sm group-hover:bg-[#2D6A4F] transition-colors duration-300">
                                                            {IconComponent && <IconComponent className="w-[22px] h-[22px] text-[#2D6A4F] group-hover:text-white transition-colors duration-300" />}
                                                        </div>
                                                        <div className="font-bold text-[#1B4332] text-[12.5px] leading-snug mb-2" dangerouslySetInnerHTML={{ __html: card.title.replace(' ', '<br class="hidden md:block" /> ') }}></div>
                                                        <div className="text-[11px] text-neutral-600 leading-relaxed">{card.desc}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}

                                    {/* Quote Type */}
                                    {section.type === "quote" && (
                                        <div className="flex gap-4 px-5 py-2 bg-[#F9FBF9] rounded-lg border-l-[3px] border-[#34A853]">
                                            <Leaf className="w-6 h-6 text-[#34A853] shrink-0 fill-[#34A853]" />
                                            <div>
                                                <p className="italic text-[15px] font-semibold text-[#1B4332] mb-1">{(section.data as any).main}</p>
                                                <p className="italic text-[14px] text-[#34A853]">{(section.data as any).sub}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </main>

                    {/* Sidebar Column */}
                    <aside className="space-y-4">
                        {/* Share */}
                        <div>
                            <h3 className="text-[13px] font-bold text-neutral-800 mb-3 tracking-wider">Share this article</h3>
                            <div className="flex items-center gap-2">
                                <button className="w-8 h-8 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                    <FacebookIcon />
                                </button>
                                <button className="w-8 h-8 rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                    <TwitterIcon />
                                </button>
                                <button className="w-8 h-8 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                    <LinkedinIcon />
                                </button>
                                <button className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity">
                                    <MessageCircle className="w-4 h-4" />
                                </button>
                                <button className="w-8 h-8 rounded-full bg-neutral-100 text-neutral-500 border border-gray-200 flex items-center justify-center hover:bg-neutral-200 transition-colors">
                                    <LinkIcon className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Author */}
                        <section
                            className="bg-[#FAFBFA] rounded-lg p-5 text-center border border-gray-100"
                            itemScope
                            itemType="https://schema.org/Organization"
                        >
                            <h3 className="text-[13px] font-bold text-neutral-700 mb-4 uppercase tracking-wider">About the Author</h3>
                            <div className="w-14 h-14 rounded-full bg-white border border-green-100 flex items-center justify-center mx-auto mb-3 shadow-sm" aria-hidden="true">
                                <Leaf className="w-6 h-6 text-[#34A853] fill-[#34A853]" />
                            </div>
                            <div itemProp="name" className="font-bold text-[#1B4332] text-[14px] mb-1">
                                {sidebarData.author.name}
                            </div>
                            <p itemProp="description" className="text-[12px] text-neutral-500 leading-relaxed px-2">
                                {sidebarData.author.description}
                            </p>
                        </section>

                        {/* Related Articles */}
                        <div>
                            <h3 className="text-[15px] font-bold text-[#1B4332] mb-4 pb-2">Related Articles</h3>
                            <div className="space-y-4">
                                {sidebarData.relatedArticles.map((article, i) => (
                                    <div key={i} className="flex gap-3 group cursor-pointer border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                                        <div className="w-20 h-20 rounded-md overflow-hidden shrink-0 relative bg-neutral-100">
                                            <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                        </div>
                                        <div>
                                            <h4 className="text-[13px] font-bold text-neutral-700 leading-[1.3] group-hover:text-[#34A853] transition-colors mb-1.5 line-clamp-2">
                                                {article.title}
                                            </h4>
                                            <div className="text-[11px] text-neutral-400">{article.date}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Categories */}
                        <div>
                            <h3 className="text-[15px] font-bold text-[#1B4332] mb-4 pb-2">Categories</h3>
                            <div className="flex flex-wrap gap-2">
                                {sidebarData.categories.map((cat, i) => (
                                    <Link
                                        href="#"
                                        key={i}
                                        className={`px-3 py-1.5 text-[12px] font-medium rounded-full border transition-colors ${cat.active
                                            ? "bg-[#2D6A4F] text-white border-[#2D6A4F]"
                                            : "bg-white text-neutral-500 border-gray-200 hover:border-[#2D6A4F] hover:text-[#2D6A4F]"
                                            }`}
                                    >
                                        {cat.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Stay Updated */}
                        <div className="bg-[#FAFBFA] rounded-lg p-5 border border-[#E5ECE7] relative overflow-hidden">
                            <div className="absolute -right-3 -top-3 opacity-5">
                                <Leaf className="w-20 h-20 text-[#34A853]" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-[15px] font-bold text-[#1B4332] mb-1.5">Stay Updated</h3>
                                <p className="text-[12px] text-neutral-500 mb-4">
                                    Subscribe to our newsletter and get the latest articles, insights and expo updates.
                                </p>
                                <form className="space-y-2.5">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-3 py-2.5 rounded-md border border-gray-200 focus:outline-none focus:border-[#34A853] focus:ring-1 focus:ring-[#34A853] bg-white text-[13px]"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-[#2D6A4F] text-white font-medium py-2.5 rounded-md hover:bg-[#1B4332] transition-colors text-[13px] flex items-center justify-center gap-1.5"
                                    >
                                        <MessageCircle className="w-4 h-4" /> Subscribe Now
                                    </button>
                                </form>
                                <p className="text-[10px] text-neutral-400 mt-3 flex items-center gap-1 justify-center">
                                    <CheckCircle2 className="w-3 h-3 fill-neutral-400 text-white" /> We respect your privacy. Unsubscribe anytime.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Bottom Banner */}
            <div className="w-full bg-[#FAFBFA] border-t border-gray-100 py-1">
                <div className="w-full ">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-gray-100">
                        {bottomBannerData.map((item, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row items-center justify-center gap-2 p-2">
                                <div className="bg-white p-2 rounded-full border border-gray-100 shadow-sm">
                                    <item.icon className="w-5 h-5 text-[#34A853]" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-[#1B4332] text-[13px]">{item.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
