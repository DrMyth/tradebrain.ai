"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Zap, Brain, MessageSquare, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PsychologyGuardSection() {
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
                        <div className="glass rounded-3xl p-8 border-brand-purple/10">
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center gap-2">
                                    <Brain className="h-5 w-5 text-brand-purple" />
                                    <h3 className="font-bold text-white">Psychology Guard</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-brand-purple animate-pulse" />
                                    <span className="text-[10px] font-bold text-brand-purple uppercase tracking-wider">Monitoring</span>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="relative h-48 flex items-center justify-center">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0, 0.15] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="h-32 w-32 rounded-full border border-brand-purple/50"
                                        />
                                        <motion.div
                                            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0, 0.1] }}
                                            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                            className="absolute h-24 w-24 rounded-full border border-brand-purple/30"
                                        />
                                    </div>

                                    <div className="text-center z-10">
                                        <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-2">State Detection</div>
                                        <div className="text-3xl font-bold text-white mb-3">REVENGE TRADING</div>
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20">
                                            <AlertTriangle className="h-3 w-3 text-red-500" />
                                            <span className="text-[10px] font-bold text-red-500 uppercase">High Risk Detected</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <p className="text-[10px] text-zinc-500 uppercase font-bold mb-2">FOMO Index</p>
                                        <div className="text-xl font-bold text-white mb-2">42%</div>
                                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "42%" }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                                className="h-full bg-brand-cyan rounded-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                                        <p className="text-[10px] text-zinc-500 uppercase font-bold mb-2">Ego Factor</p>
                                        <div className="text-xl font-bold text-white mb-2">88%</div>
                                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "88%" }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                                className="h-full bg-brand-purple rounded-full"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-5 rounded-2xl bg-brand-purple/5 border border-brand-purple/10 relative overflow-hidden">
                                    <div className="flex items-center gap-2 mb-2 relative z-10">
                                        <MessageSquare className="h-4 w-4 text-brand-purple" />
                                        <span className="text-xs font-bold text-brand-purple uppercase">Feedback Loop</span>
                                    </div>
                                    <p className="text-sm text-zinc-300 italic leading-relaxed relative z-10">
                                        "You've lost 3 trades in a row. History shows you increase size by 2.5x in this state. Stop and step away for 4 hours."
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
                            <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-brand-purple/10 text-brand-purple">
                                <Brain className="h-4 w-4" />
                            </div>
                            <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">Psychology Engine</span>
                        </div>
                        <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-5xl 2xl:text-6xl">
                            The AI That <br />
                            <span className="text-zinc-500">Checks Your Ego.</span>
                        </h2>
                        <p className="mb-8 text-lg leading-relaxed text-zinc-500 max-w-xl">
                            Trading is 90% psychology. TradeBrain detects when you're tilted, revenge trading, or chasing FOMO before your bankroll feels the hit.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: ShieldAlert,
                                    title: "AI Guard (Mistake Prevention)",
                                    desc: "Instant warnings when you deviate from your statistically proven edge.",
                                    color: "text-red-500",
                                    hoverBorder: "group-hover:border-red-500/30",
                                },
                                {
                                    icon: Zap,
                                    title: "Behavioral Detection",
                                    desc: "Identifying revenge trading, boredom trades, and win-streak ego spikes.",
                                    color: "text-brand-purple",
                                    hoverBorder: "group-hover:border-brand-purple/30",
                                },
                                {
                                    icon: MessageSquare,
                                    title: "Personalized Feedback",
                                    desc: "Real-time messages based on your specific psychological patterns.",
                                    color: "text-brand-cyan",
                                    hoverBorder: "group-hover:border-brand-cyan/30",
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] ${item.hoverBorder} transition-colors`}>
                                        <item.icon className={`h-4 w-4 ${item.color}`} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                                        <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link href="/login">
                            <Button variant="ghost" className="mt-8 text-brand-purple hover:text-brand-purple hover:bg-brand-purple/5 -ml-4">
                                Explore Psychology Engine <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
