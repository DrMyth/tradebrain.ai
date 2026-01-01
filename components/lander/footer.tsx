"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Brain,
    Twitter,
    Github,
    Linkedin,
    Mail,
    ArrowUpRight,
    Globe,
    ShieldCheck,
    Cpu
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Footer() {
    const router = useRouter();

    const handleJoin = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/login");
    };

    return (
        <footer className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-white/5">
            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-brand-cyan/5 to-transparent pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-[80%] lg:max-w-5xl 2xl:max-w-7xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-16 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden group-hover:border-brand-cyan/50 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <Brain className="h-6 w-6 text-white group-hover:text-brand-cyan transition-colors" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-black tracking-widest text-white">TRADEFOLIO</span>
                                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Cognitive Terminal</span>
                            </div>
                        </Link>

                        <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
                            TradeFolio is a personalized AI trading system that learns your behavior, risk patterns, and historical edge and adapts every insight to you
                        </p>

                        <div className="flex items-center gap-4">
                            {[
                                { icon: Twitter, href: "/login" },
                                { icon: Github, href: "/login" },
                                { icon: Linkedin, href: "/login" },
                                { icon: Mail, href: "/login" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/30 transition-all bg-white/5"
                                >
                                    <social.icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-xs font-black text-white uppercase tracking-widest">Platform</h4>
                        <ul className="space-y-4">
                            {["Terminal", "AI Core", "Neural Vault", "Pricing", "Status"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-zinc-500 hover:text-brand-cyan transition-colors flex items-center gap-1 group">
                                        {item}
                                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* <div className="lg:col-span-2 space-y-6">
                        <h4 className="text-xs font-black text-white uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4">
                            {["About", "Research", "Security", "Careers", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-zinc-500 hover:text-brand-purple transition-colors flex items-center gap-1 group">
                                        {item}
                                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div> */}

                    {/* Newsletter Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <h4 className="text-xs font-black text-white uppercase tracking-widest">TradeFolio Newsletter</h4>
                        <p className="text-sm text-zinc-500">Get weekly insights on market psychology and AI trading strategies.</p>
                        <form onSubmit={handleJoin} className="relative group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full h-14 bg-zinc-900 border border-white/10 rounded-2xl px-6 text-sm text-white focus:outline-none focus:border-brand-cyan/50 transition-colors"
                            />
                            <button type="submit" className="absolute right-2 top-2 bottom-2 px-6 rounded-xl bg-white text-black text-xs font-black uppercase hover:bg-brand-cyan transition-colors">
                                Join
                            </button>
                        </form>

                        <div className="flex items-center gap-6 pt-4">
                            <div className="flex items-center gap-2">
                                <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter">Systems Operational</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="h-3 w-3 text-zinc-600" />
                                <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter">Global Node: NY-01</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-zinc-600">
                        © {new Date().getFullYear()} TradeFolio AI. All rights reserved.
                    </p>
                    <p className="text-xs text-zinc-600">
                        Built for traders who value their edge.
                    </p>
                </div>
            </div>
        </footer>
    );
}
