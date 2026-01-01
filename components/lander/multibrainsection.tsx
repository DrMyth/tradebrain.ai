"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, BarChart3, TrendingUp, Heart, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MultiBrainSection() {
    return (
        <section id="ai-brain" className="relative overflow-hidden py-24 lg:py-32 bg-zinc-950/50">
            <div className="relative z-10 mx-auto max-w-[80%] lg:max-w-5xl 2xl:max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-6 flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-500/10 text-zinc-500">
                                <Cpu className="h-4 w-4" />
                            </div>
                            <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Core Architecture</span>
                        </div>
                        <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl 2xl:text-6xl">
                            Three Minds, <br />
                            <span className="text-zinc-500">One Unified Bias.</span>
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-zinc-500 max-w-xl">
                            TradeBrain's Multi-Brain engine processes thousands of data points across technical, fundamental, and psychological domains to give you a single, high-conviction bias.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: BarChart3,
                                    title: "Technical Brain",
                                    desc: "Real-time pattern recognition, liquidity zones, and order flow analysis.",
                                    color: "text-brand-cyan"
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Fundamental Brain",
                                    desc: "Macro event translation into immediate market consequences.",
                                    color: "text-brand-purple"
                                },
                                {
                                    icon: Heart,
                                    title: "Psychological Brain",
                                    desc: "Alignment checks against your personal historical edge and current state.",
                                    color: "text-red-500"
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] group-hover:border-brand-cyan/30 transition-colors">
                                        <item.icon className={`h-4 w-4 text-zinc-400 group-hover:${item.color} transition-colors`} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                                        <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link href="/login">
                            <Button variant="ghost" className="mt-8 text-brand-cyan hover:text-brand-cyan hover:bg-brand-cyan/5 -ml-4">
                                Explore Neural Network <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square glass rounded-full flex items-center justify-center p-8 relative border-brand-cyan/10">
                            {/* Orbital rings */}
                            <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                            <div className="absolute inset-8 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="absolute inset-16 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-brand-cyan to-brand-purple p-1 mb-6 shadow-[0_0_40px_rgba(0,242,255,0.2)]">
                                    <div className="h-full w-full bg-black rounded-[20px] flex items-center justify-center">
                                        <Brain className="h-12 w-12 text-brand-cyan" />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-1">Net Sentiment</div>
                                    <div className="text-5xl font-bold text-white tracking-tight">BULLISH</div>
                                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 border border-green-500/20">
                                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] font-bold text-green-500">85% CONVICTION</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Satellite data points */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute top-1/4 -right-4 glass rounded-lg px-3 py-2 text-[10px] font-mono border-white/10 bg-white/5 backdrop-blur-md"
                        >
                            <span className="text-brand-cyan">Tech:</span> +14.2%
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                            className="absolute bottom-1/4 -left-4 glass rounded-lg px-3 py-2 text-[10px] font-mono border-white/10 bg-white/5 backdrop-blur-md"
                        >
                            <span className="text-brand-purple">Macro:</span> Bullish
                        </motion.div>
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute -top-4 left-1/2 -translate-x-1/2 glass rounded-lg px-3 py-2 text-[10px] font-mono border-white/10 bg-white/5 backdrop-blur-md"
                        >
                            <span className="text-red-500">Psych:</span> Stable
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
