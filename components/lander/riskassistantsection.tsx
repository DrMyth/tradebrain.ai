"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gauge, CheckCircle2, Info, Lightbulb, Newspaper } from "lucide-react";

export function RiskAssistantSection() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[80%] lg:max-w-5xl 2xl:max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
                            Know Your Risk <br />
                            <span className="text-brand-cyan">Before You Click.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                            Every trade is a gamble until you have a score. TradeFolio evaluates confluence, news proximity, and your own history to give you a green or red light.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: Gauge,
                                    title: "Pre-Trade AI Risk Score",
                                    desc: "0-100 score based on volatility, liquidity, and market structure.",
                                },
                                {
                                    icon: Lightbulb,
                                    title: "Per-Trade AI Assistant",
                                    desc: "Real-time explanation of why a trade is high or low quality.",
                                },
                                {
                                    icon: Newspaper,
                                    title: "Fundamental Translator",
                                    desc: "Complex macro news converted into simple trading consequences.",
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                                    <div className="h-10 w-10 rounded-lg bg-brand-cyan/10 flex items-center justify-center shrink-0">
                                        <item.icon className="h-5 w-5 text-brand-cyan" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                        <p className="text-sm text-zinc-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="glass rounded-2xl p-6 border-brand-cyan/20 bg-black/40">
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-xs font-bold text-white uppercase tracking-widest">Pre-Trade Checklist</span>
                                <div className="px-2 py-1 rounded bg-brand-cyan/10 text-[10px] text-brand-cyan font-bold">READY TO EXECUTE</div>
                            </div>

                            <div className="flex flex-col items-center mb-8">
                                <div className="relative h-40 w-40 flex items-center justify-center">
                                    <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
                                        <circle
                                            className="text-white/5"
                                            strokeWidth="8"
                                            stroke="currentColor"
                                            fill="transparent"
                                            r="40"
                                            cx="50"
                                            cy="50"
                                        />
                                        <motion.circle
                                            initial={{ strokeDashoffset: 251.2 }}
                                            whileInView={{ strokeDashoffset: 251.2 - (251.2 * 0.85) }}
                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                            className="text-brand-cyan"
                                            strokeWidth="8"
                                            strokeDasharray="251.2"
                                            strokeLinecap="round"
                                            stroke="currentColor"
                                            fill="transparent"
                                            r="40"
                                            cx="50"
                                            cy="50"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-4xl font-bold text-white">85</span>
                                        <span className="text-[10px] text-zinc-500 font-bold">RISK SCORE</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {[
                                    { label: "Market Structure Clarity", value: "High", icon: CheckCircle2, color: "text-green-500" },
                                    { label: "News Proximity (30m)", value: "Safe", icon: CheckCircle2, color: "text-green-500" },
                                    { label: "Personal Win Rate (Setup)", value: "68%", icon: CheckCircle2, color: "text-green-500" },
                                ].map((row, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/5">
                                        <div className="flex items-center gap-2">
                                            <row.icon className={`h-3 w-3 ${row.color}`} />
                                            <span className="text-[10px] text-zinc-300">{row.label}</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-white">{row.value}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-brand-cyan/5 border border-brand-cyan/20 flex gap-3">
                                <Info className="h-4 w-4 text-brand-cyan shrink-0" />
                                <div>
                                    <p className="text-[10px] font-bold text-brand-cyan uppercase mb-1">AI Assistant Suggestion</p>
                                    <p className="text-[10px] text-zinc-400 leading-tight">
                                        "This setup matches your top 5% of trades. Risk is low, but watch for the FOMC volatility expansion in 45 mins. Consider 0.5x size if holding through news."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
