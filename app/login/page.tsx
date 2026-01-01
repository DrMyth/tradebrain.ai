"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Mail, ChevronRight, Sparkles, Shield, Zap, ArrowLeft, Cpu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const loginMethods = [
    {
        name: "Google",
        icon: () => (
            <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
        ),
    },
    {
        name: "Apple",
        icon: () => (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
            </svg>
        ),
    },
    {
        name: "Facebook",
        icon: () => (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
    {
        name: "Email",
        icon: Mail,
    },
];

export default function LoginPage() {
    const router = useRouter();

    const handleGuestLogin = () => {
        router.push("/home");
    };

    return (
        <main className="min-h-screen bg-zinc-950 flex relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,242,255,0.05),transparent_70%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-brand-purple/5 blur-[150px] rounded-full" />

            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.03, 0.06, 0.03],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-brand-cyan/20 blur-[100px] -z-10"
            />

            {/* Content Container */}
            <div className="relative z-10 mx-auto max-w-[90%] lg:max-w-5xl xl:max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center min-h-screen gap-12 lg:gap-20">
                {/* Left Panel - Branding */}
                <div className="flex flex-col justify-center w-full lg:w-[45%] py-8 lg:py-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link href="/" className="flex items-center gap-4 mb-12 group">
                            <ArrowLeft className="h-5 w-5 text-zinc-500 group-hover:text-white transition-colors" />
                            <span className="font-display text-2xl font-bold tracking-tighter text-white">
                                TRADE<span className="text-brand-cyan">FOLIO</span>
                            </span>
                        </Link>

                        <div className="max-w-xl">
                            <div className="mb-6 flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-500/10 text-zinc-500">
                                    <Cpu className="h-4 w-4" />
                                </div>
                                <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Secure Gateway</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                                Enter the <br />
                                <span className="text-zinc-500">Workspace.</span>
                            </h1>

                            <p className="text-zinc-500 text-base lg:text-lg leading-relaxed mb-10 max-w-md">
                                Synchronize with your trading portfolio. Access your personalized
                                <span className="text-white"> risk guard</span> and <span className="text-brand-cyan">market bias</span> analysis.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Shield, label: "Encryption", value: "Military Grade" },
                                    { icon: Zap, label: "Sync", value: "Real-time" },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                                        <div className="h-10 w-10 rounded-full bg-zinc-500/5 flex items-center justify-center shrink-0 border border-white/5">
                                            <item.icon className="h-4 w-4 text-zinc-400" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">{item.label}</p>
                                            <p className="text-sm font-bold text-white">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Panel - Login Form */}
                <div className="w-full lg:w-[45%] flex items-start justify-center py-8 lg:pt-10 2xl:pt-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full max-w-sm xl:max-w-md"
                    >
                        <div className="glass rounded-[2rem] border border-white/10 bg-zinc-900/50 p-6 lg:p-10 shadow-2xl relative overflow-hidden group">
                            {/* Accent Glow */}
                            <div className="absolute top-0 right-0 h-32 w-32 bg-brand-cyan/10 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-cyan/15 transition-colors" />

                            <div className="relative z-10">
                                <div className="mb-10">
                                    <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Initialize Session</h2>
                                    <p className="text-zinc-500 text-sm font-medium">Select your authentication protocol</p>
                                </div>

                                {/* Guest Login - Primary Action */}
                                <motion.button
                                    onClick={handleGuestLogin}
                                    whileHover={{ scale: 1.01, backgroundColor: "rgba(255,255,255,0.95)" }}
                                    whileTap={{ scale: 0.99 }}
                                    className="w-full h-16 rounded-2xl bg-white text-black font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,242,255,0.1)] transition-all mb-8"
                                >
                                    <User className="h-4 w-4" />
                                    Continue as Guest
                                    <ChevronRight className="h-4 w-4 ml-1" />
                                </motion.button>

                                {/* Divider */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="flex-1 h-px bg-white/5" />
                                    <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-widest">WIP Protocols</span>
                                    <div className="flex-1 h-px bg-white/5" />
                                </div>

                                {/* Disabled Login Methods */}
                                <div className="grid grid-cols-4 gap-3 mb-10">
                                    {loginMethods.map((method) => (
                                        <div key={method.name} className="relative group/method">
                                            <button
                                                disabled
                                                className="w-full aspect-square rounded-xl bg-white/[0.02] border border-white/5 text-zinc-600 flex flex-col items-center justify-center gap-1.5 cursor-not-allowed transition-all"
                                            >
                                                <method.icon />
                                            </button>
                                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-bold uppercase tracking-wider text-zinc-600 opacity-0 group-hover/method:opacity-100 transition-opacity whitespace-nowrap">
                                                {method.name} Soon
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Neural Preview Notice */}
                                <div className="rounded-2xl bg-zinc-900/50 border border-white/5 p-5 flex items-center gap-5">
                                    <div className="h-10 w-10 rounded-full bg-brand-cyan/5 flex items-center justify-center flex-shrink-0 border border-brand-cyan/10">
                                        <Sparkles className="h-4 w-4 text-brand-cyan" />
                                    </div>
                                    <p className="text-[11px] text-zinc-500 leading-relaxed font-medium">
                                        Full account synchronization is launching in upcoming versions. Guest sessions provide full feature access.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
