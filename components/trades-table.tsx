"use client";

import { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Trade, ColumnConfig, DEFAULT_COLUMNS } from "@/lib/trade-types";
import { AddTradeDialog } from "@/components/add-trade-dialog";
import {
    getTrades,
    getColumns,
    saveColumns,
    deleteTrade,
    generateId,
} from "@/lib/trade-store";
import {
    Settings2,
    Trash2,
    TrendingUp,
    TrendingDown,
    ArrowUpRight,
    ArrowDownRight,
    Plus,
    X,
    Edit,
    Download,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TradesTableProps {
    onRefresh?: () => void;
    refreshKey?: number;
}

export function TradesTable({ refreshKey, onRefresh }: TradesTableProps) {
    const [trades, setTrades] = useState<Trade[]>([]);
    const [columns, setColumns] = useState<ColumnConfig[]>(DEFAULT_COLUMNS);
    const [newColumnName, setNewColumnName] = useState("");
    const [showAddColumn, setShowAddColumn] = useState(false);
    const [editingTrade, setEditingTrade] = useState<Trade | null>(null);
    const [showEditDialog, setShowEditDialog] = useState(false);

    useEffect(() => {
        setTrades(getTrades());
        setColumns(getColumns());
    }, [refreshKey]);

    const visibleColumns = columns.filter((col) => col.visible);

    const toggleColumn = (columnId: string) => {
        const col = columns.find((c) => c.id === columnId);
        if (col?.required) return;

        const updated = columns.map((col) =>
            col.id === columnId ? { ...col, visible: !col.visible } : col
        );
        setColumns(updated);
        saveColumns(updated);
    };

    const handleAddCustomColumn = () => {
        if (!newColumnName.trim()) return;

        const customId = `custom_${generateId()}`;
        const newColumn: ColumnConfig = {
            id: customId,
            label: newColumnName.trim(),
            visible: true,
            custom: true,
        };

        const updated = [...columns, newColumn];
        setColumns(updated);
        saveColumns(updated);
        setNewColumnName("");
        setShowAddColumn(false);
    };

    const handleDeleteCustomColumn = (columnId: string) => {
        const updated = columns.filter((col) => col.id !== columnId);
        setColumns(updated);
        saveColumns(updated);
    };

    const handleDelete = (id: string) => {
        deleteTrade(id);
        setTrades(getTrades());
    };

    const handleEdit = (trade: Trade) => {
        setEditingTrade(trade);
        setShowEditDialog(true);
    };

    const handleEditComplete = () => {
        setTrades(getTrades());
        setShowEditDialog(false);
        setEditingTrade(null);
    };

    const handleExportCSV = () => {
        if (trades.length === 0) return;

        const headers = [
            "ID",
            "Symbol",
            "Direction",
            "Entry Date",
            "Entry Price",
            "Exit Date",
            "Exit Price",
            "Quantity",
            "Stop Loss",
            "Take Profit",
            "Fees",
            "PnL",
            "Status",
            "Setup",
            "Notes",
            "Tags"
        ];

        const csvContent = [
            headers.join(","),
            ...trades.map(trade => [
                trade.id,
                trade.symbol,
                trade.direction,
                trade.entryDate,
                trade.entryPrice,
                trade.exitDate || "",
                trade.exitPrice || "",
                trade.quantity,
                trade.stopLoss || "",
                trade.takeProfit || "",
                trade.fees || "",
                trade.pnl || "",
                trade.status,
                trade.setup || "",
                `"${(trade.notes || "").replace(/"/g, '""')}"`, // Escape quotes in notes
                `"${(trade.tags || []).join(",")}"`
            ].join(","))
        ].join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);

        link.setAttribute("href", url);
        link.setAttribute("download", `trades-export-${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const formatValue = (trade: Trade, columnId: string) => {
        const value = trade[columnId as keyof Trade] || trade.customFields?.[columnId];

        switch (columnId) {
            case "direction":
                return (
                    <span
                        className={cn(
                            "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border",
                            value === "long"
                                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                                : "bg-rose-500/10 text-rose-400 border-rose-500/30"
                        )}
                    >
                        {value === "long" ? (
                            <TrendingUp className="w-3.5 h-3.5" />
                        ) : (
                            <TrendingDown className="w-3.5 h-3.5" />
                        )}
                        {String(value).toUpperCase()}
                    </span>
                );
            case "pnl":
                if (value === undefined || value === null) return <span className="text-muted-foreground">—</span>;
                const pnl = Number(value);
                return (
                    <span
                        className={cn(
                            "inline-flex items-center gap-1.5 font-mono font-bold text-base",
                            pnl > 0 ? "text-emerald-400" : pnl < 0 ? "text-rose-400" : "text-muted-foreground"
                        )}
                    >
                        {pnl > 0 ? (
                            <ArrowUpRight className="w-4 h-4" />
                        ) : pnl < 0 ? (
                            <ArrowDownRight className="w-4 h-4" />
                        ) : null}
                        {pnl > 0 ? "+" : ""}
                        ${pnl.toFixed(2)}
                    </span>
                );
            case "entryPrice":
            case "exitPrice":
            case "stopLoss":
            case "takeProfit":
            case "fees":
                return value !== undefined && value !== null ? (
                    <span className="font-mono">${Number(value).toFixed(2)}</span>
                ) : (
                    "—"
                );
            case "riskReward":
                return value !== undefined && value !== null ? (
                    <span className="font-mono text-amber-400">{Number(value).toFixed(2)}R</span>
                ) : (
                    "—"
                );
            case "entryDate":
            case "exitDate":
                if (!value) return "—";
                return new Date(String(value)).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                });
            case "status":
                return (
                    <span
                        className={cn(
                            "px-2 py-0.5 rounded-full text-xs font-medium",
                            value === "open"
                                ? "bg-amber-500/20 text-amber-400"
                                : "bg-zinc-500/20 text-zinc-400"
                        )}
                    >
                        {String(value).toUpperCase()}
                    </span>
                );
            case "tags":
                if (!value || !Array.isArray(value) || value.length === 0) return "—";
                return (
                    <div className="flex gap-1 flex-wrap">
                        {value.map((tag: string, i: number) => (
                            <span
                                key={i}
                                className="px-1.5 py-0.5 bg-violet-500/20 text-violet-400 rounded text-xs"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                );
            case "symbol":
                return <span className="font-bold text-foreground text-base">{String(value)}</span>;
            default:
                return value !== undefined && value !== null ? <span className="text-sm">{String(value)}</span> : <span className="text-muted-foreground">—</span>;
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-bold text-foreground tracking-tight">Trade Journal</h2>
                    <span className="text-xs font-semibold text-muted-foreground bg-card border border-border/50 px-3 py-1.5 rounded-lg">
                        {trades.length} {trades.length === 1 ? 'trade' : 'trades'}
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all font-medium"
                        onClick={handleExportCSV}
                        disabled={trades.length === 0}
                    >
                        <Download className="w-4 h-4" />
                        <span className="font-medium">Export</span>
                    </Button>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline" size="sm" className="gap-2 border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all font-medium">
                                <Settings2 className="w-4 h-4" />
                                <span className="font-medium">Columns</span>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-72 p-4 bg-popover border-border/50" align="end">
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-sm font-semibold text-foreground">
                                    Manage Columns
                                </p>
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() => setShowAddColumn(!showAddColumn)}
                                    className="h-8 px-2 text-primary hover:text-primary hover:bg-primary/10"
                                >
                                    <Plus className="w-4 h-4 mr-1" />
                                    Add
                                </Button>
                            </div>

                            {showAddColumn && (
                                <div className="mb-4 p-3 bg-muted/30 rounded-xl border border-border/30">
                                    <Input
                                        value={newColumnName}
                                        onChange={(e) => setNewColumnName(e.target.value)}
                                        placeholder="Column name..."
                                        className="mb-2 h-9 text-sm bg-input border-border/50"
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                e.preventDefault();
                                                handleAddCustomColumn();
                                            }
                                        }}
                                    />
                                    <div className="flex gap-2">
                                        <Button
                                            size="sm"
                                            onClick={handleAddCustomColumn}
                                            className="flex-1 h-8 text-xs bg-primary hover:bg-primary/90"
                                            disabled={!newColumnName.trim()}
                                        >
                                            Create
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => {
                                                setShowAddColumn(false);
                                                setNewColumnName("");
                                            }}
                                            className="flex-1 h-8 text-xs border-border/50"
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-3 max-h-[400px] overflow-y-auto">
                                {columns.map((col) => (
                                    <div
                                        key={col.id}
                                        className="flex items-center gap-3"
                                    >
                                        <label
                                            className={cn(
                                                "flex items-center gap-3 text-sm cursor-pointer group flex-1",
                                                col.required && "opacity-50 cursor-not-allowed"
                                            )}
                                        >
                                            <Checkbox
                                                checked={col.visible}
                                                onCheckedChange={() => toggleColumn(col.id)}
                                                disabled={col.required}
                                                className="border-border/50"
                                            />
                                            <span className="text-foreground font-medium group-hover:text-primary transition-colors flex-1">
                                                {col.label}
                                            </span>
                                            {col.required && (
                                                <span className="text-xs text-muted-foreground">(required)</span>
                                            )}
                                            {col.custom && (
                                                <span className="text-xs text-primary/70">(custom)</span>
                                            )}
                                        </label>
                                        {col.custom && (
                                            <Button
                                                size="icon-sm"
                                                variant="ghost"
                                                onClick={() => handleDeleteCustomColumn(col.id)}
                                                className="h-6 w-6 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                                            >
                                                <X className="w-3.5 h-3.5" />
                                            </Button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </PopoverContent>
                    </Popover>
                    <AddTradeDialog onTradeAdded={() => {
                        setTrades(getTrades());
                        onRefresh?.();
                    }} />
                </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-card/50 backdrop-blur-xl overflow-hidden shadow-xl shadow-black/5">
                <Table>
                    <TableHeader>
                        <TableRow className="border-white/10 hover:bg-transparent bg-muted/30">
                            {visibleColumns.map((col, index) => (
                                <TableHead
                                    key={col.id}
                                    className={cn(
                                        "text-muted-foreground font-semibold text-xs uppercase tracking-widest",
                                        index === 0 && "pl-6"
                                    )}
                                >
                                    {col.label}
                                </TableHead>
                            ))}
                            <TableHead className="w-12 border-l border-white/10"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {trades.length === 0 ? (
                            <TableRow className="hover:bg-transparent">
                                <TableCell
                                    colSpan={visibleColumns.length + 1}
                                    className="text-center py-20 text-muted-foreground"
                                >
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="p-4 rounded-2xl bg-muted/30 border border-white/10">
                                            <TrendingUp className="w-10 h-10 text-muted-foreground/50" />
                                        </div>
                                        <div>
                                            <p className="text-base font-semibold text-foreground mb-1">No trades yet</p>
                                            <p className="text-sm text-muted-foreground">Add your first trade to get started</p>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : (
                            trades.map((trade) => (
                                <TableRow
                                    key={trade.id}
                                    className="border-white/10 hover:bg-muted/20 transition-all duration-200"
                                >
                                    {visibleColumns.map((col, index) => (
                                        <TableCell
                                            key={col.id}
                                            className={cn(
                                                "text-foreground font-medium",
                                                index === 0 && "pl-6"
                                            )}
                                        >
                                            {formatValue(trade, col.id)}
                                        </TableCell>
                                    ))}
                                    <TableCell>
                                        <div className="flex items-center gap-1">
                                            <Button
                                                variant="ghost"
                                                size="icon-sm"
                                                onClick={() => handleEdit(trade)}
                                                className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                                            >
                                                <Edit className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon-sm"
                                                onClick={() => handleDelete(trade.id)}
                                                className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            {showEditDialog && editingTrade && (
                <AddTradeDialog
                    trade={editingTrade}
                    isEditing={true}
                    onTradeAdded={handleEditComplete}
                />
            )}
        </div>
    );
}
