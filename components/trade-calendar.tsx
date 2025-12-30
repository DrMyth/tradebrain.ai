"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getTradesByDay, DayStats } from "@/lib/trade-store";
import { ChevronLeft, ChevronRight, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TradeCalendarProps {
  refreshKey?: number;
}

export function TradeCalendar({ refreshKey }: TradeCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dayStats, setDayStats] = useState<Map<string, DayStats>>(new Map());

  useEffect(() => {
    setDayStats(getTradesByDay());
  }, [refreshKey]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const startingDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const getDayKey = (day: number) => {
    const d = new Date(year, month, day);
    return d.toISOString().split("T")[0];
  };

  const days = [];
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const today = new Date();
  const isToday = (day: number) =>
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear();

  let monthlyPnl = 0;
  let monthlyTrades = 0;
  let monthlyWins = 0;
  let monthlyLosses = 0;

  for (let i = 1; i <= daysInMonth; i++) {
    const stats = dayStats.get(getDayKey(i));
    if (stats) {
      monthlyPnl += stats.totalPnl;
      monthlyTrades += stats.tradeCount;
      monthlyWins += stats.winCount;
      monthlyLosses += stats.lossCount;
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Calendar View</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-zinc-400">Monthly P&L:</span>
            <span
              className={cn(
                "font-mono font-semibold",
                monthlyPnl > 0
                  ? "text-emerald-400"
                  : monthlyPnl < 0
                    ? "text-rose-400"
                    : "text-zinc-400"
              )}
            >
              {monthlyPnl > 0 ? "+" : ""}${monthlyPnl.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center gap-1 text-sm text-zinc-500">
            <span className="text-emerald-400">{monthlyWins}W</span>
            <span>/</span>
            <span className="text-rose-400">{monthlyLosses}L</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-semibold text-white">
              {monthNames[month]} {year}
            </h3>
            <Button
              variant="outline"
              size="sm"
              onClick={goToToday}
              className="text-xs"
            >
              Today
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon-sm" onClick={prevMonth}>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon-sm" onClick={nextMonth}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map((day) => (
            <div
              key={day}
              className="text-center text-xs font-medium text-zinc-500 py-2"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            if (day === null) {
              return <div key={`empty-${index}`} className="aspect-square" />;
            }

            const stats = dayStats.get(getDayKey(day));
            const hasTrades = stats && stats.tradeCount > 0;
            const pnl = stats?.totalPnl || 0;

            return (
              <div
                key={day}
                className={cn(
                  "aspect-square rounded-lg p-1.5 flex flex-col transition-all cursor-pointer hover:ring-1 hover:ring-zinc-600",
                  isToday(day)
                    ? "ring-2 ring-emerald-500/50 bg-emerald-500/5"
                    : "bg-zinc-800/30",
                  hasTrades &&
                  pnl > 0 &&
                  "bg-emerald-500/10 hover:bg-emerald-500/20",
                  hasTrades && pnl < 0 && "bg-rose-500/10 hover:bg-rose-500/20",
                  hasTrades && pnl === 0 && "bg-zinc-700/30"
                )}
              >
                <span
                  className={cn(
                    "text-xs font-medium",
                    isToday(day) ? "text-emerald-400" : "text-zinc-400"
                  )}
                >
                  {day}
                </span>
                {hasTrades && (
                  <div className="flex-1 flex flex-col justify-end">
                    <span
                      className={cn(
                        "text-xs font-mono font-semibold truncate",
                        pnl > 0
                          ? "text-emerald-400"
                          : pnl < 0
                            ? "text-rose-400"
                            : "text-zinc-400"
                      )}
                    >
                      {pnl > 0 ? "+" : ""}${pnl.toFixed(0)}
                    </span>
                    <span className="text-[10px] text-zinc-500">
                      {stats.tradeCount} trade{stats.tradeCount !== 1 ? "s" : ""}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-emerald-500/30" />
            <span className="text-xs text-zinc-400">Profitable Day</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-rose-500/30" />
            <span className="text-xs text-zinc-400">Loss Day</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-zinc-600/30" />
            <span className="text-xs text-zinc-400">Break Even</span>
          </div>
        </div>
      </div>
    </div>
  );
}
