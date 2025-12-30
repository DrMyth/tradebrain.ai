"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TradesTable } from "@/components/trades-table";
import { TradeCalendar } from "@/components/trade-calendar";
import { Brain, LayoutGrid, Calendar, Zap } from "lucide-react";
import TradingViewWidget from "@/components/tv-chart";
import TradeChart from "@/components/trade-chart";

export default function Home() {
    const [refreshKey, setRefreshKey] = useState(0);

    const handleTradeAdded = () => {
        setRefreshKey((prev) => prev + 1);
    };

    const demoCandles = [
        { time: "2025-12-09T00:00:00Z", open: 1942, high: 1948, low: 1938, close: 1945 },
        { time: "2025-12-09T04:00:00Z", open: 1945, high: 1952, low: 1943, close: 1950 },
        { time: "2025-12-09T08:00:00Z", open: 1950, high: 1956, low: 1947, close: 1954 },
        { time: "2025-12-09T12:00:00Z", open: 1954, high: 1959, low: 1950, close: 1952 },
        { time: "2025-12-09T16:00:00Z", open: 1952, high: 1960, low: 1951, close: 1958 },
        { time: "2025-12-09T20:00:00Z", open: 1958, high: 1964, low: 1956, close: 1961 },

        { time: "2025-12-10T00:00:00Z", open: 1961, high: 1966, low: 1957, close: 1960 },
        { time: "2025-12-10T04:00:00Z", open: 1960, high: 1963, low: 1952, close: 1955 },
        { time: "2025-12-10T08:00:00Z", open: 1955, high: 1959, low: 1949, close: 1952 },
        { time: "2025-12-10T12:00:00Z", open: 1952, high: 1958, low: 1946, close: 1950 },
        { time: "2025-12-10T16:00:00Z", open: 1950, high: 1962, low: 1948, close: 1960 },
        { time: "2025-12-10T20:00:00Z", open: 1960, high: 1966, low: 1957, close: 1963 },

        { time: "2025-12-11T00:00:00Z", open: 1963, high: 1972, low: 1960, close: 1969 },
        { time: "2025-12-11T04:00:00Z", open: 1969, high: 1975, low: 1962, close: 1971 },
        { time: "2025-12-11T08:00:00Z", open: 1971, high: 1973, low: 1960, close: 1964 },
        { time: "2025-12-11T12:00:00Z", open: 1964, high: 1968, low: 1956, close: 1960 },
        { time: "2025-12-11T16:00:00Z", open: 1960, high: 1965, low: 1954, close: 1958 },
        { time: "2025-12-11T20:00:00Z", open: 1958, high: 1962, low: 1950, close: 1952 },
    ];

    const demoTrades = [
        {
            id: 1,
            entryTime: "2025-12-10T04:00:00Z",
            exitTime: "2025-12-10T20:00:00Z",
            entryPrice: 1960,
            exitPrice: 1963,
            side: "long" as const,
            pnlR: 0.9,
        },
        {
            id: 2,
            entryTime: "2025-12-11T04:00:00Z",
            exitTime: "2025-12-11T12:00:00Z",
            entryPrice: 1971,
            exitPrice: 1960,
            side: "short" as const,
            pnlR: -1.1,
        },
    ];

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            <main className="relative max-w-[90rem] mx-auto px-6 lg:px-8 py-12">
                <Tabs defaultValue="table" className="space-y-8 animate-scale-in">

                    <TabsList className="inline-flex items-center rounded-lg bg-muted p-1 shadow-inner">
                        <TabsTrigger
                            value="table"
                            className="
      flex items-center gap-2 rounded-md px-3 py-1.5 text-sm
      data-[state=active]:bg-background
      data-[state=active]:text-foreground
      data-[state=active]:shadow-sm
      transition
    "
                        >
                            <LayoutGrid className="h-4 w-4" />
                            Table
                        </TabsTrigger>

                        <TabsTrigger
                            value="calendar"
                            className="
      flex items-center gap-2 rounded-md px-3 py-1.5 text-sm
      data-[state=active]:bg-background
      data-[state=active]:text-foreground
      data-[state=active]:shadow-sm
      transition
    "
                        >
                            <Calendar className="h-4 w-4" />
                            Calendar
                        </TabsTrigger>

                        <TabsTrigger
                            value="charts"
                            className="
      flex items-center gap-2 rounded-md px-3 py-1.5 text-sm
      data-[state=active]:bg-background
      data-[state=active]:text-foreground
      data-[state=active]:shadow-sm
      transition
    "
                        >
                            <Zap className="h-4 w-4" />
                            Charts
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="table" className="mt-0">
                        <TradesTable refreshKey={refreshKey} onRefresh={handleTradeAdded} />
                    </TabsContent>

                    <TabsContent value="calendar" className="mt-0">
                        <TradeCalendar refreshKey={refreshKey} />
                    </TabsContent>
                    <TabsContent value="charts" className="mt-0">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-4">
                                <h2 className="text-2xl font-bold text-foreground tracking-tight">Trading Chart</h2>
                            </div>
                        </div>
                        <div className="w-full h-[500px] lg:h-[550px] 2xl:h-[650px] mb-8 border border-border bg-card rounded-lg overflow-hidden shadow-sm">
                            {/* <div style={{ height: 520 }}><TradeChart candles={demoCandles} trades={demoTrades} /></div> */}
                            <div style={{ height: "calc(100vh - 16rem)" }}><TradingViewWidget /></div>
                        </div>
                    </TabsContent>

                </Tabs>
            </main>

            <footer className="fixed bottom-0 left-0 right-0 w-full z-50 bg-background border-t border-border/40">
                <div className="max-w-[90rem] mx-auto px-6 lg:px-8 py-8">
                    <p className="text-center text-sm text-muted-foreground">
                        TradeBrain — The world&apos;s first AI trading brain that learns you.
                    </p>
                </div>
            </footer>
        </div>
    );
}

interface StatsCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    sublabel: string;
    color: "emerald" | "amber" | "indigo" | "rose";
    delay: number;
}

function StatsCard({ icon, label, value, sublabel, color, delay }: StatsCardProps) {
    const colorClasses = {
        emerald: "from-emerald-500/10 via-emerald-500/5 to-transparent group-hover:from-emerald-500/20 text-emerald-400 shadow-emerald-500/10",
        amber: "from-amber-500/10 via-amber-500/5 to-transparent group-hover:from-amber-500/20 text-amber-400 shadow-amber-500/10",
        indigo: "from-indigo-500/10 via-indigo-500/5 to-transparent group-hover:from-indigo-500/20 text-indigo-400 shadow-indigo-500/10",
        rose: "from-rose-500/10 via-rose-500/5 to-transparent group-hover:from-rose-500/20 text-rose-400 shadow-rose-500/10",
    };

    return (
        <div
            className="relative group"
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="absolute -inset-px bg-gradient-to-br from-border/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-xl p-6 transition-all duration-300 group-hover:border-border group-hover:shadow-xl group-hover:shadow-black/10">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-2">
                            {label}
                        </p>
                        <p className="text-3xl font-bold text-foreground font-mono tracking-tight">
                            {value}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1.5 font-medium">
                            {sublabel}
                        </p>
                    </div>
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[color]} shadow-lg transition-all duration-300`}>
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    );
}
