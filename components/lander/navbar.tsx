"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl 2xl:max-w-7xl border border-white/10 bg-black/60 backdrop-blur-xl rounded-full shadow-2xl overflow-hidden transition-all duration-300">
            <div className="mx-auto flex items-center justify-between px-6 py-3">
                <div className="flex items-center gap-2">
                    {/* <Image
                        src="/logo.png"
                        alt="TradeFolio Logo"
                        width={40}
                        height={40}
                        className="h-8 w-auto object-contain translate-y-[1px] translate-x-[2px]"
                    /> */}
                    <span className="font-display text-xl font-bold tracking-tighter">
                        TRADE<span className="text-brand-cyan">FOLIO</span>
                    </span>
                </div>

                <div className="hidden md:flex md:items-center md:gap-8">
                    {["Features", "AI Brain", "Pricing", "Journal"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
                        >
                            {item}
                        </a>
                    ))}
                    <div className="flex items-center gap-3">
                        <Link href="/login">
                            <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-white/5 rounded-full px-6">
                                Log In
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button className="bg-gradient-to-r from-brand-cyan to-brand-purple text-black font-semibold hover:opacity-90 rounded-full px-6 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-zinc-400 hover:text-white p-2"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="border-t border-white/5 bg-black/90 px-6 py-8 md:hidden rounded-b-[2rem]"
                >
                    <div className="flex flex-col gap-4">
                        {["Features", "AI Brain", "Pricing", "Journal"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(" ", "-")}`}
                                className="text-lg font-medium text-zinc-400"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <hr className="border-white/5" />
                        <Link href="/login" className="w-full">
                            <Button variant="outline" className="w-full justify-center">
                                Log In
                            </Button>
                        </Link>
                        <Link href="/login" className="w-full">
                            <Button className="w-full justify-center bg-gradient-to-r from-brand-cyan to-brand-purple text-black font-semibold">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
