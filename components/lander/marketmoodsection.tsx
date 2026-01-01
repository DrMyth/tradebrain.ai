"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Info, TrendingDown, TrendingUp, AlertCircle, BarChart2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MarketMoodSection() {
    return (
        <section className="relative overflow-hidden py-24 lg:py-32 bg-zinc-950/50">
            <div className="relative z-10 mx-auto max-w-[80%] lg:max-w-5xl 2xl:max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="glass rounded-3xl p-8 border-brand-cyan/10">
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center gap-2">
                                    <BarChart2 className="h-5 w-5 text-brand-purple" />
                                    <h3 className="font-bold text-white">Market Mood Engine</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                                    <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider">Live Analysis</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/10 flex items-start gap-4">
                                    <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-bold text-red-500 mb-1">AI Guard: Risk Detected</p>
                                        <p className="text-xs text-zinc-400 leading-relaxed">You are attempting to trade during high-impact CPI news. Spreads are currently 4.2x higher than your average.</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <p className="text-[10px] text-zinc-500 uppercase font-bold mb-2">Social Sentiment</p>
                                        <div className="flex items-center gap-2">
                                            <TrendingUp className="h-4 w-4 text-green-500" />
                                            <span className="text-xl font-bold text-white">Extreme Greed</span>
                                        </div>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <p className="text-[10px] text-zinc-500 uppercase font-bold mb-2">Liquidity Score</p>
                                        <div className="flex items-center gap-2">
                                            <TrendingDown className="h-4 w-4 text-red-500" />
                                            <span className="text-xl font-bold text-white">Fragmented</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 rounded-2xl bg-brand-purple/5 border border-brand-purple/10 relative overflow-hidden">
                                    <div className="flex items-center gap-2 mb-2 relative z-10">
                                        <Info className="h-4 w-4 text-brand-purple" />
                                        <p className="text-xs font-bold text-brand-purple uppercase">AI Insight</p>
                                    </div>
                                    <p className="text-sm text-zinc-300 italic leading-relaxed relative z-10">
                                        "Market is currently rumor-driven. Smart money activity has decreased by 18% in the last 2 hours. Recommend staying flat."
                                    </p>
                                    <div className="absolute top-0 right-0 h-24 w-24 bg-brand-purple/5 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="mb-6 flex items-center gap-2">
                            <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-zinc-500/10 text-zinc-500">
                                <ShieldAlert className="h-4 w-4" />
                            </div>
                            <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Mood Intelligence</span>
                        </div>
                        <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl 2xl:text-6xl">
                            Navigate the <br />
                            <span className="text-zinc-500">Invisible Market.</span>
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-zinc-500 max-w-xl">
                            Most traders only see price. TradeBrain sees the emotions driving it. Our Mood Engine aggregates news, social signals, and liquidity data into actionable warnings.
                        </p>

                        <div className="space-y-6">
                            {[
                                { title: "Boredom Trade Detection", desc: "Detects periods of low volatility that typically lead to over-trading.", icon: AlertCircle },
                                { title: "Smart Money Tracking", desc: "Monitors large order flows and institutional positioning in real-time.", icon: BarChart2 },
                                { title: "News Consequence AI", desc: "Translates abstract headlines into direct impact on your specific pairs.", icon: Info }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] group-hover:border-brand-purple/30 transition-colors">
                                        <feature.icon className="h-4 w-4 text-zinc-400 group-hover:text-brand-purple transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                                        <p className="text-sm text-zinc-500 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link href="/login">
                            <Button variant="ghost" className="mt-8 text-brand-purple hover:text-brand-purple hover:bg-brand-purple/5 -ml-4">
                                Explore Mood Engine <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
