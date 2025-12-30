"use client";

import { Trade, ColumnConfig, DEFAULT_COLUMNS } from "./trade-types";

const TRADES_KEY = "tradebrain_trades";
const COLUMNS_KEY = "tradebrain_columns";

export function getTrades(): Trade[] {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem(TRADES_KEY);
    return data ? JSON.parse(data) : [];
}

export function saveTrades(trades: Trade[]): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(TRADES_KEY, JSON.stringify(trades));
}

export function addTrade(trade: Trade): void {
    const trades = getTrades();
    trades.push(trade);
    saveTrades(trades);
}

export function updateTrade(id: string, updates: Partial<Trade>): void {
    const trades = getTrades();
    const index = trades.findIndex((t) => t.id === id);
    if (index !== -1) {
        trades[index] = { ...trades[index], ...updates };
        saveTrades(trades);
    }
}

export function deleteTrade(id: string): void {
    const trades = getTrades();
    saveTrades(trades.filter((t) => t.id !== id));
}

export function getColumns(): ColumnConfig[] {
    if (typeof window === "undefined") return DEFAULT_COLUMNS;
    const data = localStorage.getItem(COLUMNS_KEY);
    return data ? JSON.parse(data) : DEFAULT_COLUMNS;
}

export function saveColumns(columns: ColumnConfig[]): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(COLUMNS_KEY, JSON.stringify(columns));
}

export function generateId(): string {
    return `trade_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function calculatePnL(trade: Trade): number | undefined {
    if (!trade.exitPrice) return undefined;
    const multiplier = trade.direction === "long" ? 1 : -1;
    const grossPnl =
        (trade.exitPrice - trade.entryPrice) * trade.quantity * multiplier;
    return grossPnl - (trade.fees || 0);
}

export function calculateRiskReward(trade: Trade): number | undefined {
    if (!trade.stopLoss || !trade.takeProfit) return undefined;
    const risk = Math.abs(trade.entryPrice - trade.stopLoss);
    const reward = Math.abs(trade.takeProfit - trade.entryPrice);
    console.log("risk", risk, "reward", reward);
    return risk > 0 ? Number((reward / risk).toFixed(2)) : Number(2);
}

export interface DayStats {
    date: string;
    totalPnl: number;
    tradeCount: number;
    winCount: number;
    lossCount: number;
}

export function getTradesByDay(): Map<string, DayStats> {
    const trades = getTrades();
    const dayMap = new Map<string, DayStats>();

    trades.forEach((trade) => {
        const dateKey = trade.entryDate.split("T")[0];
        const existing = dayMap.get(dateKey) || {
            date: dateKey,
            totalPnl: 0,
            tradeCount: 0,
            winCount: 0,
            lossCount: 0,
        };

        existing.tradeCount++;
        if (trade.pnl !== undefined) {
            existing.totalPnl += trade.pnl;
            if (trade.pnl > 0) existing.winCount++;
            else if (trade.pnl < 0) existing.lossCount++;
        }

        dayMap.set(dateKey, existing);
    });

    return dayMap;
}
