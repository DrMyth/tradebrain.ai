"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Zap, MousePointer2, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-20 sm:px-6 lg:px-8">
            {/* Background blobs with refined opacity and blur */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[1000px] rounded-full bg-brand-cyan/5 blur-[120px]" />
            <div className="absolute -top-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-brand-purple/5 blur-[120px]" />
            <div className="absolute -bottom-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-brand-cyan/5 blur-[120px]" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative z-10 mx-auto max-w-6xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-8 flex justify-center"
                >
                    {/* <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-4 py-2 backdrop-blur-md"> */}
                    {/* <div className="flex -space-x-2">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-5 w-5 rounded-full border border-black bg-zinc-800 flex items-center justify-center overflow-hidden">
                                    <div className="h-full w-full bg-gradient-to-br from-brand-cyan/40 to-brand-purple/40" />
                                </div>
                            ))}
                        </div> */}
                    {/* <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase"> */}
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                        <Sparkles className="h-4 w-4 text-brand-cyan" />
                        {/* Trusted by 10,000+ elite traders */}
                        The World's First AI Trading Brain
                    </div>
                    {/* </span> */}
                    {/* </div> */}
                </motion.div>

                <h1 className="mb-8 text-6xl font-black leading-[0.95] tracking-tighter sm:text-8xl lg:text-9xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="block"
                    >
                        The AI Brain
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gradient block text-6xl font-bold leading-[1] tracking-tight sm:text-8xl lg:text-9xl drop-shadow-[0_0_30px_rgba(0,242,255,0.2)]"
                    >
                        That Learns You.
                    </motion.span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="mx-auto mb-12 max-w-2xl text-lg font-medium text-zinc-500 sm:text-xl leading-relaxed"
                >
                    {/* TradeFolio isn't another signal bot. It's a personalized neural network that
                    synchronizes with your psychology, habits, and historical edge. */}
                    TradeFolio is a personalized AI trading system that learns your behavior, risk patterns, and historical edge and adapts every insight to you
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center gap-6 sm:flex-row"
                >
                    <Link href="/login">
                        <Button size="lg" className="group h-16 px-10 bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-all rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                            Build Your Brain
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                    <Link href="/login">
                        <Button size="lg" variant="outline" className="h-16 px-10 border-white/10 bg-white/[0.02] hover:bg-white/5 text-lg font-bold rounded-2xl backdrop-blur-xl">
                            <MousePointer2 className="mr-2 h-5 w-5 text-brand-cyan" />
                            Live Preview
                        </Button>
                    </Link>
                </motion.div>

                {/* Re-designed Preview */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-24 relative mx-auto max-w-5xl"
                >
                    <div className="relative group">
                        {/* Ambient light behind the card */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-[2.5rem] blur-2xl opacity-10 group-hover:opacity-20 transition duration-1000" />

                        <div className="glass relative overflow-hidden rounded-[2rem] border border-white/10 p-1 shadow-2xl">
                            <div className="rounded-[1.9rem] bg-zinc-950/80 p-6 backdrop-blur-3xl overflow-hidden relative">
                                {/* Header of the UI Mockup */}
                                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-purple p-0.5">
                                            <div className="h-full w-full rounded-[10px] bg-black flex items-center justify-center">
                                                <Zap className="h-5 w-5 text-brand-cyan" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Active Analysis</div>
                                            <div className="text-sm font-bold text-white tracking-tight">BTC/USDT 5m Perpetual</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="h-8 w-24 rounded-lg bg-white/5 border border-white/5 animate-pulse" />
                                        <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/5" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                    {/* Left Column: Bias */}
                                    <div className="space-y-6">
                                        <div className="rounded-2xl bg-white/[0.03] border border-white/5 p-5">
                                            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3 text-center">Net Bias</div>
                                            <div className="text-center">
                                                <div className="text-4xl font-black text-brand-cyan tracking-tighter">BULLISH</div>
                                                <div className="text-[10px] text-zinc-500 mt-1 font-mono uppercase tracking-widest">Confidence 89.2%</div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-[10px] font-bold text-zinc-500 uppercase tracking-widest px-1">
                                                <span>Risk Level</span>
                                                <span className="text-green-400">Low</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: "24%" }}
                                                    transition={{ duration: 1, delay: 0.8 }}
                                                    className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Middle: Visualizations */}
                                    <div className="md:col-span-2 space-y-6">
                                        <div className="h-[180px] w-full relative">
                                            {/* Decorative Chart */}
                                            <svg className="w-full h-full overflow-visible">
                                                <motion.path
                                                    d="M0 150 C 50 140, 100 160, 150 120 C 200 80, 250 100, 300 40 C 350 -20, 400 40, 450 10"
                                                    fill="none"
                                                    stroke="url(#gradient)"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    initial={{ pathLength: 0 }}
                                                    animate={{ pathLength: 1 }}
                                                    transition={{ duration: 2, delay: 1 }}
                                                />
                                                <defs>
                                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#00F2FF" />
                                                        <stop offset="100%" stopColor="#AD00FF" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            {/* Floating Tooltip */}
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 2.2 }}
                                                className="absolute top-4 right-1/4 glass px-3 py-1.5 rounded-lg border border-brand-purple/30"
                                            >
                                                <div className="text-[10px] font-bold text-brand-purple">SMART MONEY ENTRY</div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Right: AI Insights */}
                                    <div className="space-y-4">
                                        <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest px-1">AI Feedback</div>
                                        <div className="space-y-3">
                                            {[
                                                { label: "FOMO Detection", value: "None", color: "text-green-400" },
                                                { label: "Session Alignment", value: "94%", color: "text-brand-cyan" },
                                                { label: "Historical Edge", value: "High", color: "text-brand-purple" }
                                            ].map((item, i) => (
                                                <div key={i} className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                                                    <div className="text-[9px] text-zinc-500 uppercase font-bold tracking-wider">{item.label}</div>
                                                    <div className={`text-xs font-bold ${item.color} mt-0.5`}>{item.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Footer line */}
                                <div className="mt-8 pt-4 border-t border-white/5 flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Neural Engine Synced</span>
                                    </div>
                                    <div className="text-[9px] font-mono text-zinc-600">v4.0.2-TA-BETA</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating badges for extra aesthetic juice */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -left-10 hidden lg:block"
                        >
                            <div className="glass px-6 py-4 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-3xl">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                                        <Shield className="h-5 w-5 text-brand-cyan" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-white">Risk Protected</div>
                                        <div className="text-[10px] text-zinc-400 mt-0.5">Automated safeguard active</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-10 -right-10 hidden lg:block"
                        >
                            <div className="glass px-6 py-4 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-3xl">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-brand-purple/20 flex items-center justify-center">
                                        <Brain className="h-5 w-5 text-brand-purple" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-white">Pattern Recognition</div>
                                        <div className="text-[10px] text-zinc-400 mt-0.5">Learning your winning edge...</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
