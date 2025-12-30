"use client";

import React, { useEffect, useRef, useState, memo } from "react";
import {
    createChart,
    IChartApi,
    ISeriesApi,
    CandlestickData,
    UTCTimestamp,
    CandlestickSeries,
    LineSeries,
} from "lightweight-charts";

/* ---------------- TYPES ---------------- */

type Candle = {
    time: string | number;
    open: number;
    high: number;
    low: number;
    close: number;
};

type Trade = {
    id: string | number;
    entryTime: string | number;
    exitTime?: string | number;
    entryPrice: number;
    exitPrice?: number;
    side: "long" | "short";
    pnlR?: number;
};

type Props = {
    candles: Candle[];
    trades: Trade[];
    height?: number;
    showReplay?: boolean;
};

/* ---------------- HELPERS ---------------- */

function toUnixSeconds(t: string | number): UTCTimestamp {
    if (typeof t === "number") {
        return (t > 1e12 ? Math.floor(t / 1000) : Math.floor(t)) as UTCTimestamp;
    }
    return Math.floor(new Date(t).getTime() / 1000) as UTCTimestamp;
}

function buildCandles(candles: Candle[]): CandlestickData[] {
    return candles.map((c) => ({
        time: toUnixSeconds(c.time),
        open: c.open,
        high: c.high,
        low: c.low,
        close: c.close,
    }));
}

/* 🔥 TRADE ZONE (SAFE LOOK) */
function addTradeZone(
    chart: IChartApi,
    entryTs: UTCTimestamp,
    exitTs: UTCTimestamp,
    entryPrice: number,
    exitPrice: number,
    win: boolean
) {
    const color = win ? "rgba(24,190,122,0.5)" : "rgba(255,107,107,0.5)";
    const commonOptions = {
        lineWidth: 1 as any, // Cast to any to satisfy LineWidth type
        priceLineVisible: false,
        crosshairMarkerVisible: false,
        color,
        lineStyle: 2, // Dashed
    };

    // Top Line
    const s1 = chart.addSeries(LineSeries, commonOptions);
    s1.setData([
        { time: entryTs, value: entryPrice },
        { time: exitTs, value: entryPrice },
    ]);

    // Bottom Line
    const s2 = chart.addSeries(LineSeries, commonOptions);
    s2.setData([
        { time: entryTs, value: exitPrice },
        { time: exitTs, value: exitPrice },
    ]);

    return [s1, s2];
}

/* ---------------- COMPONENT ---------------- */

const TradeChart: React.FC<Props> = ({
    candles,
    trades,
    height = 480,
    showReplay = true,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const chartRef = useRef<IChartApi | null>(null);
    const candleSeriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
    const zonesRef = useRef<Record<string, ISeriesApi<"Line">[]>>({});

    const [playIndex, setPlayIndex] = useState<number | null>(null);
    const playIntervalRef = useRef<number | null>(null);
    const [chartReady, setChartReady] = useState(false);

    /* -------- INIT CHART -------- */

    useEffect(() => {
        if (!containerRef.current) return;

        const chart = createChart(containerRef.current, {
            width: containerRef.current.clientWidth,
            height,
            layout: {
                backgroundColor: "transparent",
                textColor: "#A1A1AA", // zinc-400
            },
            grid: {
                vertLines: { color: "rgba(255,255,255,0.04)" },
                horzLines: { color: "rgba(255,255,255,0.04)" },
            },
            timeScale: { timeVisible: true },
            rightPriceScale: { borderVisible: false },
        });

        chartRef.current = chart;

        const candleSeries = chart.addSeries(CandlestickSeries, {
            upColor: "#18BE7A",
            downColor: "#FF6B6B",
            wickUpColor: "#18BE7A",
            wickDownColor: "#FF6B6B",
            borderVisible: false,
        });

        candleSeriesRef.current = candleSeries;

        const resize = new ResizeObserver(() => {
            chart.applyOptions({
                width: containerRef.current!.clientWidth,
                height,
            });
        });
        resize.observe(containerRef.current);

        setChartReady(true);

        return () => {
            setChartReady(false);
            resize.disconnect();
            chart.remove();
            chartRef.current = null;
            candleSeriesRef.current = null;
        };
    }, [height]);

    /* -------- SET CANDLES -------- */

    useEffect(() => {
        if (!chartReady || !candleSeriesRef.current) return;
        candleSeriesRef.current.setData(buildCandles(candles));
        chartRef.current?.timeScale().fitContent();
    }, [candles, chartReady]);

    /* -------- DRAW TRADES -------- */

    useEffect(() => {
        if (!chartReady || !chartRef.current || !candleSeriesRef.current) return;

        // clear old zones
        Object.values(zonesRef.current).forEach((arr) => arr.forEach((z) => z.remove()));
        zonesRef.current = {};

        const markers: any[] = [];

        trades.forEach((t) => {
            const entryTs = toUnixSeconds(t.entryTime);
            const exitTs = t.exitTime ? toUnixSeconds(t.exitTime) : undefined;
            const win = typeof t.pnlR === "number" ? t.pnlR > 0 : false;

            /* ENTRY MARKER */
            markers.push({
                time: entryTs,
                position: t.side === "long" ? "belowBar" : "aboveBar",
                shape: t.side === "long" ? "arrowUp" : "arrowDown",
                color: t.side === "long" ? "#18BE7A" : "#FF6B6B",
                text: "ENTRY",
            });

            /* EXIT + ZONE */
            if (exitTs && t.exitPrice !== undefined) {
                markers.push({
                    time: exitTs,
                    position: t.side === "long" ? "aboveBar" : "belowBar",
                    shape: "circle",
                    color: win ? "#18BE7A" : "#FF6B6B",
                    text: win ? "EXIT +R" : "EXIT -R",
                });

                const zones = addTradeZone(
                    chartRef.current,
                    entryTs,
                    exitTs,
                    t.entryPrice,
                    t.exitPrice,
                    win
                );

                zonesRef.current[String(t.id)] = zones;
            }
        });

        if ((candleSeriesRef.current as any).setMarkers) {
            (candleSeriesRef.current as any).setMarkers(markers);
        }
    }, [trades, candles, chartReady]);

    /* -------- REPLAY -------- */

    useEffect(() => {
        if (!chartReady || playIndex === null || !chartRef.current) return;

        const t = trades[playIndex];
        if (!t || !t.exitTime) return;

        const from = toUnixSeconds(t.entryTime) - 3600 * 6;
        const to = toUnixSeconds(t.exitTime) + 3600 * 6;

        chartRef.current.timeScale().setVisibleRange({ from, to });

        chartRef.current.applyOptions({
            layout: { backgroundColor: "#0A0A0A" },
        });

        return () => {
            chartRef.current?.applyOptions({
                layout: { backgroundColor: "transparent" },
            });
        };
    }, [playIndex, chartReady]);

    const startReplay = () => {
        let i = 0;
        setPlayIndex(i);
        playIntervalRef.current = window.setInterval(() => {
            i++;
            if (i >= trades.length) {
                stopReplay();
            } else {
                setPlayIndex(i);
            }
        }, 1800);
    };

    const stopReplay = () => {
        if (playIntervalRef.current) {
            clearInterval(playIntervalRef.current);
            playIntervalRef.current = null;
        }
        setPlayIndex(null);
    };

    /* -------- RENDER -------- */

    return (
        <div style={{ position: "relative", width: "100%" }}>
            <div ref={containerRef} style={{ width: "100%", height }} />

            {showReplay && (
                <div className="absolute bottom-3 left-3 flex gap-2">
                    <button
                        onClick={startReplay}
                        className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                    >
                        Replay
                    </button>
                    <button
                        onClick={stopReplay}
                        className="px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                    >
                        Stop
                    </button>
                </div>
            )}
        </div>
    );
};



export default memo(TradeChart);
