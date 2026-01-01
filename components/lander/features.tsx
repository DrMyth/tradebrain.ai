"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    BookOpen,
    BrainCircuit,
    Layers,
    AlertTriangle,
    Zap,
    CloudLightning,
    Globe,
    ShieldAlert,
    LayoutDashboard,
    RefreshCcw,
    ArrowRight
} from "lucide-react";

const features = [
    {
        title: "Trade Journal",
        description: "Log or import trades via connectors. Track win rate, R:R, and expectancy.",
        icon: BookOpen,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "group-hover:border-blue-500/30",
    },
    {
        title: "Personalized AI",
        description: "AI builds a profile based on your past trades and winning setups.",
        icon: BrainCircuit,
        color: "text-brand-cyan",
        bg: "bg-brand-cyan/10",
        border: "group-hover:border-brand-cyan/30",
    },
    {
        title: "Multi-Brain Analysis",
        description: "Technical, fundamental, and psychological alignment in one bias.",
        icon: Layers,
        color: "text-brand-purple",
        bg: "bg-brand-purple/10",
        border: "group-hover:border-brand-purple/30",
    },
    {
        title: "Psychology Detection",
        description: "Detects revenge trading, FOMO entries, and FUD exits.",
        icon: AlertTriangle,
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        border: "group-hover:border-orange-500/30",
    },
    {
        title: "Pre-Trade Risk Score",
        description: "Evaluates volatility, confluence, and emotional state before entry.",
        icon: Zap,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "group-hover:border-yellow-500/30",
    },
    {
        title: "Market Mood Engine",
        description: "Aggregates sentiment into Fear, Greed, and Smart Money signals.",
        icon: CloudLightning,
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        border: "group-hover:border-indigo-500/30",
    },
    {
        title: "Per-Trade Assistant",
        description: "Explains trade quality and suggests improvements in real-time.",
        icon: LayoutDashboard,
        color: "text-pink-500",
        bg: "bg-pink-500/10",
        border: "group-hover:border-pink-500/30",
    },
    {
        title: "Feedback Loop",
        description: "Insights like 'You are overtrading' based on recent performance.",
        icon: RefreshCcw,
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
        border: "group-hover:border-cyan-500/30",
    },
];

export function Features() {
    return (
        <section id="features" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950/50 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-brand-purple/5 blur-[150px] rounded-full" />

            <div className="relative z-10 mx-auto max-w-[80%] lg:max-w-5xl 2xl:max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <div className="mb-6 flex justify-center">
                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2">
                            <Layers className="h-4 w-4 text-brand-purple" />
                            <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Core Features</span>
                        </div>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                        Everything You Need to <br />
                        <span className="text-zinc-500">Master the Markets.</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        TradeBrain isn't just a tool—it's your personalized edge. It learns your habits
                        to protect your capital and grow your account.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:bg-white/[0.04] ${feature.border}`}
                        >
                            <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${feature.bg} transition-transform group-hover:scale-110`}>
                                <feature.icon className={`h-5 w-5 ${feature.color}`} />
                            </div>
                            <h3 className="mb-2 text-sm font-bold text-white">{feature.title}</h3>
                            <p className="text-xs leading-relaxed text-zinc-500">
                                {feature.description}
                            </p>
                            <div className={`absolute -bottom-4 -right-4 h-20 w-20 ${feature.bg} opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity`} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <a href="#ai-brain" className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyan hover:text-brand-cyan/80 transition-colors">
                        Explore All Features <ArrowRight className="h-4 w-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
