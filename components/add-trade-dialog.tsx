"use client";

import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Trade, SETUP_OPTIONS, TIMEZONE_OPTIONS } from "@/lib/trade-types";
import {
    addTrade,
    updateTrade,
    generateId,
    calculatePnL,
    calculateRiskReward,
} from "@/lib/trade-store";
import { Plus, TrendingUp, TrendingDown, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AddTradeDialogProps {
    onTradeAdded?: () => void;
    trade?: Trade;
    isEditing?: boolean;
}

export function AddTradeDialog({ onTradeAdded, trade, isEditing = false }: AddTradeDialogProps) {
    const [open, setOpen] = useState(false);
    const [screenshot, setScreenshot] = useState<string>("");
    const [formData, setFormData] = useState({
        symbol: "",
        direction: "long" as "long" | "short",
        entryDate: new Date().toISOString().slice(0, 16),
        entryPrice: "",
        exitDate: "",
        exitPrice: "",
        quantity: "1",
        stopLoss: "",
        takeProfit: "",
        fees: "",
        setup: "",
        notes: "",
        timezone: "UTC",
        tags: "",
    });

    useEffect(() => {
        if (trade && isEditing && open) {
            setFormData({
                symbol: trade.symbol,
                direction: trade.direction,
                entryDate: trade.entryDate,
                entryPrice: trade.entryPrice.toString(),
                exitDate: trade.exitDate || "",
                exitPrice: trade.exitPrice?.toString() || "",
                quantity: trade.quantity.toString(),
                stopLoss: trade.stopLoss?.toString() || "",
                takeProfit: trade.takeProfit?.toString() || "",
                fees: trade.fees?.toString() || "",
                setup: trade.setup || "",
                notes: trade.notes || "",
                timezone: trade.timezone || "UTC",
                tags: trade.tags?.join(", ") || "",
            });
            setScreenshot(trade.screenshot || "");
        }
    }, [trade, isEditing, open]);

    const resetForm = () => {
        setFormData({
            symbol: "",
            direction: "long",
            entryDate: new Date().toISOString().slice(0, 16),
            entryPrice: "",
            exitDate: "",
            exitPrice: "",
            quantity: "1",
            stopLoss: "",
            takeProfit: "",
            fees: "",
            setup: "",
            notes: "",
            timezone: "UTC",
            tags: "",
        });
        setScreenshot("");
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setScreenshot(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const tradeData: Trade = {
            id: isEditing && trade ? trade.id : generateId(),
            symbol: formData.symbol.toUpperCase(),
            direction: formData.direction,
            entryDate: formData.entryDate,
            entryPrice: parseFloat(formData.entryPrice),
            exitDate: formData.exitDate || undefined,
            exitPrice: formData.exitPrice ? parseFloat(formData.exitPrice) : undefined,
            quantity: parseFloat(formData.quantity),
            stopLoss: formData.stopLoss ? parseFloat(formData.stopLoss) : undefined,
            takeProfit: formData.takeProfit
                ? parseFloat(formData.takeProfit)
                : undefined,
            fees: formData.fees ? parseFloat(formData.fees) : undefined,
            setup: formData.setup || undefined,
            notes: formData.notes || undefined,
            timezone: formData.timezone,
            tags: formData.tags
                ? formData.tags.split(",").map((t) => t.trim())
                : undefined,
            status: formData.exitPrice ? "closed" : "open",
            pnl: undefined,
            riskReward: undefined,
            screenshot: screenshot || undefined,
            customFields: isEditing && trade?.customFields ? trade.customFields : {},
        };

        tradeData.pnl = calculatePnL(tradeData);
        tradeData.riskReward = calculateRiskReward(tradeData);

        if (isEditing && trade) {
            updateTrade(trade.id, tradeData);
        } else {
            addTrade(tradeData);
        }

        resetForm();
        setOpen(false);
        onTradeAdded?.();
    };

    useEffect(() => {
        if (isEditing && trade) {
            setOpen(true);
        }
    }, [isEditing, trade]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {!isEditing && (
                <DialogTrigger asChild>
                    <Button
                        size="sm"
                        className="gap-1.5 bg-primary hover:bg-primary/90 text-primary-foreground font-medium shadow-md shadow-primary/20 border border-primary/20 transition-all"
                    >
                        <Plus className="w-3.5 h-3.5" />
                        Add Trade
                    </Button>
                </DialogTrigger>
            )}
            <DialogContent className="sm:max-w-[650px] max-h-[90vh] overflow-y-auto bg-popover border-border/50 shadow-2xl">
                <DialogHeader>
                    <DialogTitle className="text-foreground text-2xl font-bold">
                        {isEditing ? "Edit Trade" : "Log New Trade"}
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="space-y-2.5">
                            <label className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Symbol *</label>
                            <Input
                                value={formData.symbol}
                                onChange={(e) =>
                                    setFormData({ ...formData, symbol: e.target.value })
                                }
                                placeholder="AAPL, BTC, EUR/USD"
                                required
                                className="bg-input border-border/50 text-foreground h-11 font-medium"
                            />
                        </div>
                        <div className="space-y-2.5">
                            <label className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Direction *</label>
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, direction: "long" })}
                                    className={cn(
                                        "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all font-bold text-sm",
                                        formData.direction === "long"
                                            ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400 shadow-lg shadow-emerald-500/10"
                                            : "bg-input border-border/50 text-muted-foreground hover:border-border"
                                    )}
                                >
                                    <TrendingUp className="w-4 h-4" />
                                    Long
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, direction: "short" })}
                                    className={cn(
                                        "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 transition-all font-bold text-sm",
                                        formData.direction === "short"
                                            ? "bg-rose-500/10 border-rose-500/50 text-rose-400 shadow-lg shadow-rose-500/10"
                                            : "bg-input border-border/50 text-muted-foreground hover:border-border"
                                    )}
                                >
                                    <TrendingDown className="w-4 h-4" />
                                    Short
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="space-y-2.5">
                            <label className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Entry Date *</label>
                            <Input
                                type="datetime-local"
                                value={formData.entryDate}
                                onChange={(e) =>
                                    setFormData({ ...formData, entryDate: e.target.value })
                                }
                                required
                                className="bg-input border-border/50 text-foreground h-11 font-medium"
                            />
                        </div>
                        <div className="space-y-2.5">
                            <label className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Entry Price *</label>
                            <Input
                                type="number"
                                step="any"
                                value={formData.entryPrice}
                                onChange={(e) =>
                                    setFormData({ ...formData, entryPrice: e.target.value })
                                }
                                placeholder="0.00"
                                required
                                className="bg-input border-border/50 text-foreground h-11 font-medium font-mono"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="space-y-2.5">
                            <label className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Exit Date</label>
                            <Input
                                type="datetime-local"
                                value={formData.exitDate}
                                onChange={(e) =>
                                    setFormData({ ...formData, exitDate: e.target.value })
                                }
                                className="bg-input border-border/50 text-foreground h-11 font-medium"
                            />
                        </div>
                        <div className="space-y-2.5">
                            <label className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Exit Price</label>
                            <Input
                                type="number"
                                step="any"
                                value={formData.exitPrice}
                                onChange={(e) =>
                                    setFormData({ ...formData, exitPrice: e.target.value })
                                }
                                placeholder="0.00"
                                className="bg-input border-border/50 text-foreground h-11 font-medium font-mono"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-5">
                        <div className="space-y-2.5">
                            <label className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Quantity *</label>
                            <Input
                                type="number"
                                step="any"
                                value={formData.quantity}
                                onChange={(e) =>
                                    setFormData({ ...formData, quantity: e.target.value })
                                }
                                placeholder="1"
                                required
                                className="bg-input border-border/50 text-foreground h-11 font-medium font-mono"
                            />
                        </div>
                        <div className="space-y-2.5">
                            <label className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Stop Loss</label>
                            <Input
                                type="number"
                                step="any"
                                value={formData.stopLoss}
                                onChange={(e) =>
                                    setFormData({ ...formData, stopLoss: e.target.value })
                                }
                                placeholder="0.00"
                                className="bg-input border-border/50 text-foreground h-11 font-medium font-mono"
                            />
                        </div>
                        <div className="space-y-2.5">
                            <label className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Take Profit</label>
                            <Input
                                type="number"
                                step="any"
                                value={formData.takeProfit}
                                onChange={(e) =>
                                    setFormData({ ...formData, takeProfit: e.target.value })
                                }
                                placeholder="0.00"
                                className="bg-input border-border/50 text-foreground h-11 font-medium font-mono"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="space-y-2.5">
                            <label className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Setup</label>
                            <Select
                                value={formData.setup}
                                onValueChange={(v) => setFormData({ ...formData, setup: v })}
                            >
                                <SelectTrigger className="bg-input border-border/50 text-foreground w-full h-11 font-medium">
                                    <SelectValue placeholder="Select setup type" />
                                </SelectTrigger>
                                <SelectContent>
                                    {SETUP_OPTIONS.map((setup) => (
                                        <SelectItem key={setup} value={setup}>
                                            {setup}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2.5">
                            <label className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Timezone</label>
                            <Select
                                value={formData.timezone}
                                onValueChange={(v) => setFormData({ ...formData, timezone: v })}
                            >
                                <SelectTrigger className="bg-input border-border/50 text-foreground w-full h-11 font-medium">
                                    <SelectValue placeholder="Select timezone" />
                                </SelectTrigger>
                                <SelectContent>
                                    {TIMEZONE_OPTIONS.map((tz) => (
                                        <SelectItem key={tz} value={tz}>
                                            {tz}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="space-y-2.5">
                            <label className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Fees</label>
                            <Input
                                type="number"
                                step="any"
                                value={formData.fees}
                                onChange={(e) =>
                                    setFormData({ ...formData, fees: e.target.value })
                                }
                                placeholder="0.00"
                                className="bg-input border-border/50 text-foreground h-11 font-medium font-mono"
                            />
                        </div>
                        <div className="space-y-2.5">
                            <label className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Tags (comma separated)</label>
                            <Input
                                value={formData.tags}
                                onChange={(e) =>
                                    setFormData({ ...formData, tags: e.target.value })
                                }
                                placeholder="scalp, momentum, news"
                                className="bg-input border-border/50 text-foreground h-11 font-medium"
                            />
                        </div>
                    </div>

                    <div className="space-y-2.5">
                        <label className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Screenshot</label>
                        <div className="flex flex-col gap-3">
                            <label className="cursor-pointer">
                                <div className="flex items-center justify-center gap-3 px-4 py-3 rounded-xl border-2 border-dashed border-border/50 hover:border-primary/50 bg-input/50 hover:bg-input transition-all">
                                    <ImageIcon className="w-5 h-5 text-muted-foreground" />
                                    <span className="text-sm font-medium text-muted-foreground">
                                        {screenshot ? "Change Screenshot" : "Upload Screenshot"}
                                    </span>
                                </div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                            </label>
                            {screenshot && (
                                <div className="relative">
                                    <img
                                        src={screenshot}
                                        alt="Trade screenshot"
                                        className="w-full h-32 object-cover rounded-xl border border-border/50"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setScreenshot("")}
                                        className="absolute top-2 right-2 px-2 py-1 bg-destructive/90 hover:bg-destructive text-xs font-semibold text-white rounded-lg"
                                    >
                                        Remove
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2.5">
                        <label className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">Notes</label>
                        <textarea
                            value={formData.notes}
                            onChange={(e) =>
                                setFormData({ ...formData, notes: e.target.value })
                            }
                            placeholder="Add any notes about this trade..."
                            className="w-full h-28 px-4 py-3 rounded-xl bg-input border border-border/50 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-medium"
                        />
                    </div>

                    <div className="flex gap-4 pt-6">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setOpen(false)}
                            className="flex-1 h-12 font-semibold border-border/50"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            className="flex-1 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-lg shadow-primary/20"
                        >
                            {isEditing ? "Update Trade" : "Add Trade"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
