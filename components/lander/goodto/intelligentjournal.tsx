"use client";

import { motion } from "framer-motion";
import { BookOpen, Brain, ChevronRight, Database, LineChart } from "lucide-react";

export function IntelligentJournal() {
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
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-cyan/10 text-brand-cyan">
                                <BookOpen className="h-4 w-4" />
                            </div>
                            <span className="text-xs font-bold tracking-widest text-brand-cyan uppercase">Experience Database</span>
                        </div>
                        <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl 2xl:text-6xl">
                            The Journal That <br />
                            <span className="text-zinc-500">Self-Corrects.</span>
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-zinc-500 max-w-xl">
                            Beyond simple logging. TradeBrain's journal is a living neural network that
                            ingests every entry, exit, and emotion to build your "Edge Profile."
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Omni-Channel Import",
                                    desc: "Connect directly to MetaTrader, TradingView, or CTrader for zero-latency sync.",
                                    icon: Database
                                },
                                {
                                    title: "Neural Feedback Loop",
                                    desc: "AI identifies winning setups and losing patterns you didn't even know you had.",
                                    icon: Brain
                                },
                                {
                                    title: "Visual KPI Engine",
                                    desc: "Real-time expectancy, drawdown analysis, and session-specific performance.",
                                    icon: LineChart
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
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="glass relative aspect-[4/3] rounded-3xl p-6 shadow-2xl">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex gap-2">
                                    <div className="h-2 w-8 rounded-full bg-brand-cyan/20" />
                                    <div className="h-2 w-16 rounded-full bg-white/5" />
                                </div>
                                <div className="h-6 w-24 rounded-full bg-white/5" />
                            </div>

                            <div className="space-y-4">
                                {[1, 2, 3].map((_, i) => (
                                    <div key={i} className="flex items-center justify-between rounded-xl bg-white/[0.02] p-4 border border-white/5">
                                        <div className="flex items-center gap-4">
                                            <div className={`h-10 w-10 rounded-lg ${i === 0 ? 'bg-emerald-500/10' : 'bg-red-500/10'} flex items-center justify-center`}>
                                                <div className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-emerald-500' : 'bg-red-500'}`} />
                                            </div>
                                            <div>
                                                <div className="h-3 w-20 rounded bg-white/5 mb-1.5" />
                                                <div className="h-2 w-12 rounded bg-white/[0.02]" />
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className={`text-sm font-bold ${i === 0 ? 'text-emerald-500' : 'text-red-500'}`}>{i === 0 ? '+2.4 R' : '-1.0 R'}</div>
                                            <div className="text-[10px] text-zinc-600">USD/JPY</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 rounded-2xl bg-brand-cyan/[0.03] p-6 border border-brand-cyan/10">
                                <div className="flex items-center gap-2 mb-4">
                                    <Brain className="h-4 w-4 text-brand-cyan" />
                                    <span className="text-xs font-bold text-brand-cyan">AI INSIGHT</span>
                                </div>
                                <p className="text-sm text-zinc-400 italic">
                                    "You have a 82% win rate on London Open setups when USD Volatility is above 15. Suggesting increased size for next session."
                                </p>
                            </div>
                        </div>

                        {/* Decorative background glow */}
                        <div className="absolute -inset-4 -z-10 bg-brand-cyan/5 blur-3xl rounded-[3rem]" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
