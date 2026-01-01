"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, CheckCircle2, ShieldCheck, Target } from "lucide-react";

export function RiskShield() {
    return (
        <section className="relative overflow-hidden py-24 lg:py-32">
            <div className="relative z-10 mx-auto max-w-[80%] lg:max-w-5xl 2xl:max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-6 flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                                <ShieldCheck className="h-4 w-4" />
                            </div>
                            <span className="text-xs font-bold tracking-widest text-emerald-500 uppercase">Risk Intelligence</span>
                        </div>
                        <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl 2xl:text-6xl">
                            Execution with <br />
                            <span className="text-zinc-500">Absolute Clarity.</span>
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-zinc-500 max-w-xl">
                            Before you click execute, TradeBrain runs a 24-point check on market volatility,
                            liquidity, and your own historical performance in similar regimes.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Real-time Liquidity & Volatility Scan",
                                "Historical Confluence Matching",
                                "Pre-Trade Emotional State Baseline",
                                "Dynamic R:R Optimization Suggestion"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                    <span className="text-white font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="glass rounded-3xl overflow-hidden border-white/5 shadow-2xl">
                            <div className="bg-white/[0.03] p-6 border-b border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded bg-emerald-500/20 flex items-center justify-center">
                                        <Target className="h-4 w-4 text-emerald-500" />
                                    </div>
                                    <span className="font-bold text-white">Pre-Trade Panel</span>
                                </div>
                                <div className="text-[10px] font-mono text-zinc-500">ID: TB-9921</div>
                            </div>

                            <div className="p-8">
                                <div className="mb-8 text-center">
                                    <div className="inline-block relative">
                                        <svg className="h-32 w-32 -rotate-90">
                                            <circle
                                                cx="64"
                                                cy="64"
                                                r="58"
                                                stroke="currentColor"
                                                strokeWidth="8"
                                                fill="transparent"
                                                className="text-white/5"
                                            />
                                            <motion.circle
                                                cx="64"
                                                cy="64"
                                                r="58"
                                                stroke="currentColor"
                                                strokeWidth="8"
                                                fill="transparent"
                                                strokeDasharray="364.42"
                                                initial={{ strokeDashoffset: 364.42 }}
                                                whileInView={{ strokeDashoffset: 364.42 * 0.12 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className="text-emerald-500"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-3xl font-bold text-white">88</span>
                                            <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-tighter">Risk Score</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="rounded-2xl bg-white/[0.02] p-4 border border-white/5">
                                        <div className="text-[10px] text-zinc-500 uppercase mb-1">Spread Health</div>
                                        <div className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            <span className="text-sm font-bold">Optimal</span>
                                        </div>
                                    </div>
                                    <div className="rounded-2xl bg-white/[0.02] p-4 border border-white/5">
                                        <div className="text-[10px] text-zinc-500 uppercase mb-1">News Proximity</div>
                                        <div className="flex items-center gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                                            <span className="text-sm font-bold">42m (CPI)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-2xl bg-emerald-500/5 p-4 border border-emerald-500/20">
                                    <div className="flex items-start gap-3">
                                        <BarChart3 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                                        <div>
                                            <div className="text-xs font-bold text-white mb-1">Edge Alignment High</div>
                                            <p className="text-[11px] text-zinc-400 leading-relaxed">
                                                This setup has a 74% win-rate in your last 50 trades during similar high-volatility regimes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
