"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, BrainCircuit, Target, History, Sparkles } from "lucide-react";

export function JournalLearningSection() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
            <div className="mx-auto max-w-[80%] lg:max-w-5xl 2xl:max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold tracking-tight text-white mb-6">
                            A Journal That <br />
                            <span className="text-brand-cyan font-display">Learns Your DNA.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                            Stop logging data and start building an edge. TradeFolio's journal doesn't just store numbers; it analyzes your behavior to build a personalized trading profile unique to your style.
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    icon: History,
                                    title: "Deep Trade History",
                                    desc: "Automated imports of entry, exit, risk, and screenshots.",
                                },
                                {
                                    icon: BrainCircuit,
                                    title: "Pattern Recognition",
                                    desc: "AI identifies your most profitable setups and costly mistakes.",
                                },
                                {
                                    icon: Sparkles,
                                    title: "Custom Trading Rules",
                                    desc: "Dynamically generated rules based on what actually works for you.",
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
                        <div className="glass rounded-2xl p-6 border-brand-cyan/20 overflow-hidden">
                            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded bg-brand-cyan/20 flex items-center justify-center">
                                        <BookOpen className="h-4 w-4 text-brand-cyan" />
                                    </div>
                                    <span className="text-sm font-bold text-white uppercase tracking-widest">Trade Journal</span>
                                </div>
                                <div className="text-[10px] text-zinc-500 font-mono">USER_ID: TB-8821</div>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { symbol: "BTC/USDT", result: "+$1,240", type: "Breakout", status: "Winner" },
                                    { symbol: "XAU/USD", result: "-$420", type: "Reversal", status: "Losing Pattern" },
                                ].map((trade, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: 20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.2 }}
                                        className="p-4 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden group"
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-bold text-white">{trade.symbol}</span>
                                            <span className={`text-xs font-bold ${trade.result.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                                                {trade.result}
                                            </span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-zinc-400">{trade.type}</span>
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${trade.status === "Winner" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`}>
                                                {trade.status}
                                            </span>
                                        </div>
                                        {trade.status === "Losing Pattern" && (
                                            <div className="mt-3 pt-3 border-t border-white/5">
                                                <p className="text-[10px] text-red-400 leading-tight">
                                                    <span className="font-bold uppercase mr-1">AI Detection:</span>
                                                    This entry was 14 mins before news. You historically lose 82% of trades in this window.
                                                </p>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}

                                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-brand-cyan/20 to-brand-purple/20 border border-brand-cyan/30">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Target className="h-4 w-4 text-brand-cyan" />
                                        <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider">Learning Progress</span>
                                    </div>
                                    <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "74%" }}
                                            className="h-full bg-brand-cyan shadow-[0_0_10px_rgba(0,242,255,0.5)]"
                                        />
                                    </div>
                                    <p className="mt-2 text-[10px] text-zinc-400">Personalized profile 74% complete. Rules updating...</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
