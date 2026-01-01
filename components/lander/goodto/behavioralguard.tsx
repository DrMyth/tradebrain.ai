"use client";

import { motion } from "framer-motion";
import { AlertCircle, Eye, HeartPulse, ShieldAlert, Zap } from "lucide-react";

export function BehavioralGuard() {
    return (
        <section className="relative overflow-hidden py-24 lg:py-32 bg-zinc-950/50">
            <div className="relative z-10 mx-auto max-w-[80%] lg:max-w-5xl 2xl:max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="order-2 lg:order-1 2xl:-translate-x-20 2xl:translate-y-10"
                    >
                        <div className="relative">
                            <div className="glass relative aspect-square max-w-[500px] mx-auto rounded-full p-12 flex items-center justify-center border-brand-cyan/20">
                                <div className="absolute inset-0 rounded-full bg-brand-cyan/5 blur-2xl" />

                                <div className="relative z-10 text-center">
                                    <div className="mb-4 flex justify-center">
                                        <HeartPulse className="h-12 w-12 text-red-500 animate-pulse" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-2">Psychology Monitor</h4>
                                    <p className="text-sm text-zinc-500">Real-time state detection</p>

                                    <div className="mt-8 flex flex-col gap-3">
                                        {[
                                            { label: "FOMO Risk", value: "85%", color: "bg-red-500" },
                                            { label: "Revenge Bias", value: "12%", color: "bg-emerald-500" },
                                            { label: "Focus Level", value: "92%", color: "bg-brand-cyan" }
                                        ].map((stat, i) => (
                                            <div key={i} className="flex items-center gap-4 bg-white/[0.03] rounded-full px-4 py-2 border border-white/5">
                                                <span className="text-xs font-bold text-zinc-400 w-24 text-left">{stat.label}</span>
                                                <div className="h-1.5 flex-1 bg-white/5 rounded-full overflow-hidden">
                                                    <div className={`h-full ${stat.color}`} style={{ width: stat.value }} />
                                                </div>
                                                <span className="text-xs font-mono text-zinc-500">{stat.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Floating Alerts */}
                                <motion.div
                                    animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute -top-4 -right-4 glass rounded-2xl p-4 border-red-500/30"
                                >
                                    <div className="flex items-center gap-3">
                                        <ShieldAlert className="h-5 w-5 text-red-500" />
                                        <div>
                                            <div className="text-[10px] font-bold text-red-500 uppercase tracking-widest">AI GUARD BLOCKED</div>
                                            <div className="text-xs text-white">Position size too large for current volatility</div>
                                        </div>
                                    </div>
                                </motion.div>
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
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
                                <Eye className="h-4 w-4" />
                            </div>
                            <span className="text-xs font-bold tracking-widest text-red-500 uppercase">Behavioral Defense</span>
                        </div>
                        <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl 2xl:text-6xl">
                            Stop Trading <br />
                            <span className="text-zinc-500">Against Yourself.</span>
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-zinc-500 max-w-xl">
                            The biggest threat to your PnL isn't the market—it's your psychology.
                            AI Guard detects emotional patterns before they cost you capital.
                        </p>

                        <div className="grid gap-8 sm:grid-cols-2">
                            {[
                                {
                                    title: "FOMO & FUD Detection",
                                    desc: "Identifies panic entries and fear-driven exits based on historical behavior.",
                                    icon: AlertCircle
                                },
                                {
                                    title: "Size Protection",
                                    desc: "Hard-stops random position increases that violate your custom rules.",
                                    icon: Zap
                                },
                                {
                                    title: "Ego Trade Warning",
                                    desc: "Detects over-confidence after win-streaks to prevent the inevitable drawdown.",
                                    icon: HeartPulse
                                },
                                {
                                    title: "Regime Alignment",
                                    desc: "Warns when you're trading setups that historically fail in current volatility.",
                                    icon: Eye
                                }
                            ].map((feature, i) => (
                                <div key={i} className="group">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-red-500/30 transition-colors">
                                        <feature.icon className="h-4 w-4 text-zinc-500 group-hover:text-red-500 transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
