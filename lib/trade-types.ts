export type TradeDirection = "long" | "short";
export type TradeStatus = "open" | "closed";

export interface Trade {
    id: string;
    symbol: string;
    direction: TradeDirection;
    entryDate: string;
    entryPrice: number;
    exitDate?: string;
    exitPrice?: number;
    quantity: number;
    stopLoss?: number;
    takeProfit?: number;
    pnl?: number;
    fees?: number;
    setup?: string;
    notes?: string;
    status: TradeStatus;
    riskReward?: number;
    timezone?: string;
    screenshot?: string;
    tags?: string[];
    customFields?: Record<string, string | number>;
}

export interface ColumnConfig {
    id: string;
    label: string;
    visible: boolean;
    required?: boolean;
    custom?: boolean;
}

export const DEFAULT_COLUMNS: ColumnConfig[] = [
    { id: "symbol", label: "Symbol", visible: true, required: true },
    { id: "direction", label: "Direction", visible: true, required: true },
    { id: "entryDate", label: "Entry Date", visible: true, required: true },
    { id: "entryPrice", label: "Entry Price", visible: true, required: true },
    { id: "exitDate", label: "Exit Date", visible: true },
    { id: "exitPrice", label: "Exit Price", visible: true },
    { id: "quantity", label: "Quantity", visible: true },
    { id: "pnl", label: "P&L", visible: true },
    { id: "stopLoss", label: "Stop Loss", visible: false },
    { id: "takeProfit", label: "Take Profit", visible: false },
    { id: "riskReward", label: "R:R", visible: false },
    { id: "fees", label: "Fees", visible: false },
    { id: "setup", label: "Setup", visible: false },
    { id: "timezone", label: "Timezone", visible: false },
    { id: "status", label: "Status", visible: true },
    { id: "notes", label: "Notes", visible: false },
    { id: "tags", label: "Tags", visible: false },
];

export const SETUP_OPTIONS = [
    "Breakout",
    "Breakdown",
    "Support Bounce",
    "Resistance Rejection",
    "Trend Continuation",
    "Reversal",
    "Range Play",
    "Gap Fill",
    "News Play",
    "Scalp",
    "Swing",
    "Other",
];

export const TIMEZONE_OPTIONS = [
    "UTC",
    "America/New_York",
    "America/Chicago",
    "America/Los_Angeles",
    "Europe/London",
    "Europe/Paris",
    "Asia/Tokyo",
    "Asia/Hong_Kong",
    "Asia/Singapore",
    "Australia/Sydney",
];
