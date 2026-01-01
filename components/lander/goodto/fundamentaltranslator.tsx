"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Newspaper, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FundamentalTranslator() {
    return (
        <section className="relative overflow-hidden py-24 lg:py-32 bg-zinc-950/50">
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="order-2"
                    >
                        <div className="glass rounded-3xl p-8 border-brand-cyan/10">
                            <div className="mb-8 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Globe className="h-5 w-5 text-brand-cyan" />
                                    <span className="font-bold text-white">Macro News Feed</span>
                                </div>
                                <div className="flex h-2 w-2 rounded-full bg-brand-cyan animate-ping" />
                            </div>

                            <div className="space-y-6">
                                <div className="rounded-2xl bg-white/[0.03] p-5 border border-white/5 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-2">
                                        <span className="text-[10px] font-bold text-brand-cyan bg-brand-cyan/10 px-2 py-0.5 rounded">High Impact</span>
                                    </div>
                                    <div className="text-xs text-zinc-500 mb-2">Reuters • 2m ago</div>
                                    <p className="text-sm font-bold text-white mb-4">"US CPI Data comes in at 3.1% vs 2.9% expected."</p>

                                    <div className="flex items-center gap-2 text-brand-cyan">
                                        <Zap className="h-4 w-4" />
                                        <span className="text-xs font-bold uppercase">AI Translation</span>
                                    </div>
                                    <div className="mt-3 grid gap-3">
                                        {[
                                            { pair: "USD", impact: "Strength", color: "text-emerald-500" },
                                            { pair: "GOLD", impact: "Bearish", color: "text-red-500" },
                                            { pair: "SPX", impact: "Volatility Increase", color: "text-brand-cyan" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center justify-between text-xs bg-white/[0.02] p-2 rounded-lg border border-white/5">
                                                <span className="text-zinc-400 font-mono">{item.pair}</span>
                                                <span className={`font-bold ${item.color}`}>{item.impact}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-center">
                                    <motion.div
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="h-1 w-12 rounded-full bg-white/10"
                                    />
                                </div>

                                <div className="p-4 rounded-2xl bg-brand-cyan/5 border border-brand-cyan/10 italic text-xs text-zinc-400">
                                    "Macro Consequence: Higher than expected inflation suggests the Fed will hold rates longer. Expect USD strength and pressure on risk assets."
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1"
                    >
                        <div className="mb-6 flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-500/10 text-zinc-500">
                                <Newspaper className="h-4 w-4" />
                            </div>
                            <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase">Fundamental AI</span>
                        </div>
                        <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            From Noise to <br />
                            <span className="text-zinc-500">Alpha.</span>
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-zinc-500 max-w-xl">
                            Stop guessing how news impacts your pairs. TradeBrain converts complex macro
                            events into simple, actionable trading consequences in real-time.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Instant Macro Decoding",
                                    desc: "Converts CPI, NFP, and FOMC data into direct directional bias for your watchlist.",
                                    icon: TrendingUp
                                },
                                {
                                    title: "Sentiment Correlation",
                                    desc: "Connects news events with market mood to predict 'Buy the Rumor, Sell the News' traps.",
                                    icon: Globe
                                }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] group-hover:border-brand-cyan/30 transition-colors">
                                        <feature.icon className="h-4 w-4 text-zinc-400 group-hover:text-brand-cyan transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                                        <p className="text-sm text-zinc-500 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button variant="ghost" className="mt-8 text-brand-cyan hover:text-brand-cyan hover:bg-brand-cyan/5 -ml-4">
                            Explore Macro Intelligence <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
