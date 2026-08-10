export interface ToolMeta {
  id: string;
  name: string;
  slug: string;
  category: string;
  iconName: string;
  tagline: string;
  description: string;
  isInteractive: boolean;
  formula: string;
  useCase: string;
}

export const TOOLS: ToolMeta[] = [
  {
    id: "cpr-calculator",
    name: "Intraday CPR Calculator",
    slug: "cpr-calculator",
    category: "Technical Analysis",
    iconName: "Zap",
    tagline: "Calculate Central Pivot Range (CPR), Pivot (P), R1-R3, and S1-S3 levels for Live Market trading.",
    description: "Determine exact Top CPR (TC), Pivot, and Bottom CPR (BC) for Nifty 50, BankNifty, and Indian stocks during live market hours.",
    isInteractive: true,
    formula: "P = (H + L + C) / 3 | BC = (H + L) / 2 | TC = (P - BC) + P",
    useCase: "Intraday live market trading level planning, breakout detection, and target setting."
  },
  {
    id: "rsi-calculator",
    name: "RSI Calculator",
    slug: "rsi-calculator",
    category: "Technical Analysis",
    iconName: "Activity",
    tagline: "Compute 14-period Relative Strength Index with smooth Wilder gain/loss averaging.",
    description: "Calculate exact RSI values from historical price series. Understand overbought (70+) and oversold (30-) mathematical thresholds and momentum changes.",
    isInteractive: true,
    formula: "RSI = 100 - (100 / (1 + RS)) where RS = Avg Gain / Avg Loss",
    useCase: "Educational momentum analysis and mathematical verification of RSI indicator calculations."
  },
  {
    id: "cagr-calculator",
    name: "CAGR Calculator",
    slug: "cagr-calculator",
    category: "Fundamental Analysis",
    iconName: "TrendingUp",
    tagline: "Calculate Compound Annual Growth Rate of investments over multi-year periods.",
    description: "Determine the smoothed annual rate of growth for equity portfolios, mutual funds, or business metrics like revenue and earnings.",
    isInteractive: true,
    formula: "CAGR = (Ending Value / Beginning Value)^(1 / Years) - 1",
    useCase: "Evaluating multi-year investment growth rates and comparing stock historical returns."
  },
  {
    id: "risk-reward-calculator",
    name: "Risk/Reward Calculator",
    slug: "risk-reward-calculator",
    category: "Risk Management",
    iconName: "ShieldAlert",
    tagline: "Evaluate trade Risk-to-Reward ratio, maximum loss, and reward potential.",
    description: "Input entry price, stop-loss, and profit target to compute R:R ratio. Enforce the 1:2 risk management rule to avoid bad trade setups.",
    isInteractive: true,
    formula: "Risk = Entry - StopLoss | Reward = Target - Entry | R:R = Reward / Risk",
    useCase: "Pre-trade risk assessment and mathematical discipline in capital preservation."
  },
  {
    id: "sip-calculator",
    name: "SIP Calculator",
    slug: "sip-calculator",
    category: "Personal Finance",
    iconName: "PiggyBank",
    tagline: "Project future corpus wealth from Systematic Investment Plans in mutual funds or index ETFs.",
    description: "Estimate compound returns over 1 to 30 years with monthly investment contributions and expected annual return percentages.",
    isInteractive: true,
    formula: "FV = P × [ (1 + i)^n - 1 ] × (1 + i) / i",
    useCase: "Long-term financial planning, compounding simulation, and dollar-cost averaging math."
  },
  {
    id: "xirr-calculator",
    name: "XIRR Calculator",
    slug: "xirr-calculator",
    category: "Personal Finance",
    iconName: "Calculator",
    tagline: "Compute Extended Internal Rate of Return for non-periodic cash flows.",
    description: "Determine annualized returns for irregular investment inflows and outflows, mutual fund redemptions, and dividend receipts.",
    isInteractive: false,
    formula: "Sum( CF_t / (1 + XIRR)^((d_t - d_0)/365) ) = 0",
    useCase: "Analyzing real-world portfolio performance with lump-sum add-ons and withdrawals."
  },
  {
    id: "position-size-calculator",
    name: "Position Size Calculator",
    slug: "position-size-calculator",
    category: "Risk Management",
    iconName: "Sliders",
    tagline: "Determine exact number of shares/lots based on account risk % and stop-loss distance.",
    description: "Avoid over-allocating capital. Calculate exact share quantity so a stopped-out trade never risks more than your defined portfolio limit (e.g. 1% or 2%).",
    isInteractive: true,
    formula: "Position Size = (Account Capital × Max Risk %) / (Entry Price - Stop Loss)",
    useCase: "Mathematical capital preservation and risk sizing discipline."
  },
  {
    id: "ema-calculator",
    name: "EMA Calculator",
    slug: "ema-calculator",
    category: "Technical Analysis",
    iconName: "LineChart",
    tagline: "Calculate Exponential Moving Average with weight multiplier α = 2 / (N + 1).",
    description: "Learn how EMAs react faster to recent price action compared to Simple Moving Averages.",
    isInteractive: false,
    formula: "EMA_today = (Price_today × Multiplier) + (EMA_yesterday × (1 - Multiplier))",
    useCase: "Technical indicator trend estimation and moving average smoothing logic."
  },
  {
    id: "sma-calculator",
    name: "SMA Calculator",
    slug: "sma-calculator",
    category: "Technical Analysis",
    iconName: "BarChart",
    tagline: "Calculate arithmetic Simple Moving Average over N periods.",
    description: "Understand basic moving average calculation, trend direction identification, and dynamic support levels.",
    isInteractive: false,
    formula: "SMA = (Price_1 + Price_2 + ... + Price_N) / N",
    useCase: "Fundamental technical indicator baseline for smooth price series data."
  },
  {
    id: "option-payoff-calculator",
    name: "Option Payoff Calculator",
    slug: "option-payoff-calculator",
    category: "Options Education",
    iconName: "Target",
    tagline: "Plot visual payoff diagrams for Call and Put options across spot prices.",
    description: "Select Call/Put and Buy/Sell. View max profit, max loss, breakeven spot price, and interactive payoff graph.",
    isInteractive: true,
    formula: "Call Payoff = Max(0, Spot - Strike) - Premium | Put Payoff = Max(0, Strike - Spot) - Premium",
    useCase: "Visualizing options risk-reward profile before entry."
  },
  {
    id: "option-breakeven-calculator",
    name: "Option Breakeven Calculator",
    slug: "option-breakeven-calculator",
    category: "Options Education",
    iconName: "Scale",
    tagline: "Determine exact spot price required at expiry to break even on option positions.",
    description: "Calculate breakeven points for long and short options, account for premium paid/received and broker commissions.",
    isInteractive: false,
    formula: "Call Breakeven = Strike + Premium | Put Breakeven = Strike - Premium",
    useCase: "Options trade planning and probability of profit math."
  },
  {
    id: "drawdown-calculator",
    name: "Drawdown Calculator",
    slug: "drawdown-calculator",
    category: "Backtesting",
    iconName: "ArrowDownRight",
    tagline: "Measure peak-to-trough decline percentage and capital recovery required.",
    description: "Understand portfolio drawdown severity and calculate exact percentage gain needed to recover from a loss.",
    isInteractive: false,
    formula: "Drawdown % = (Peak Value - Trough Value) / Peak Value × 100",
    useCase: "Risk modeling and understanding why a 50% loss requires a 100% gain to recover."
  },
  {
    id: "compounding-calculator",
    name: "Compounding Calculator",
    slug: "compounding-calculator",
    category: "Personal Finance",
    iconName: "Zap",
    tagline: "Visualize daily, monthly, or annual compound interest growth.",
    description: "Simulate how compounding frequency impacts total wealth accumulation over time.",
    isInteractive: false,
    formula: "A = P(1 + r/n)^(nt)",
    useCase: "Understanding compound growth dynamics in financial instruments."
  },
  {
    id: "pe-calculator",
    name: "P/E Ratio Calculator",
    slug: "pe-calculator",
    category: "Fundamental Analysis",
    iconName: "PieChart",
    tagline: "Compute Price-to-Earnings ratio and earnings yield %.",
    description: "Evaluate relative market valuation of stocks compared to industry peer averages.",
    isInteractive: false,
    formula: "P/E = Market Price per Share / Earnings per Share (EPS)",
    useCase: "Equity valuation screening and earnings yield comparison."
  },
  {
    id: "dividend-yield-calculator",
    name: "Dividend Yield Calculator",
    slug: "dividend-yield-calculator",
    category: "Fundamental Analysis",
    iconName: "DollarSign",
    tagline: "Calculate annual dividend yield % and payout ratio.",
    description: "Measure passive cash income generated per rupee invested in dividend-paying stocks.",
    isInteractive: false,
    formula: "Dividend Yield = (Annual Dividend per Share / Stock Price) × 100",
    useCase: "Income investing evaluation and cash flow return math."
  },
  {
    id: "portfolio-allocation-calculator",
    name: "Portfolio Allocation Calculator",
    slug: "portfolio-allocation-calculator",
    category: "Personal Finance",
    iconName: "Layers",
    tagline: "Analyze asset class weights across Equity, Debt, Gold, and Cash.",
    description: "Maintain target asset allocation and calculate rebalancing amounts required to maintain risk targets.",
    isInteractive: false,
    formula: "Asset Weight % = (Asset Value / Total Portfolio Value) × 100",
    useCase: "Portfolio risk management and periodic rebalancing strategy."
  },
  {
    id: "trading-journal",
    name: "Trading Journal",
    slug: "trading-journal",
    category: "Backtesting",
    iconName: "BookMarked",
    tagline: "Log trade performance, track Win Rate %, Profit Factor, and average R:R.",
    description: "Interactive journal template to log paper trades, analyze mistakes, and track equity curve performance.",
    isInteractive: false,
    formula: "Win Rate = (Winning Trades / Total Trades) × 100 | Profit Factor = Gross Profit / Gross Loss",
    useCase: "Trader self-audit, performance analytics, and strategy refinement."
  },
  {
    id: "backtesting-template",
    name: "Backtesting Template",
    slug: "backtesting-template",
    category: "Backtesting",
    iconName: "FileSpreadsheet",
    tagline: "Excel & Python template framework for historical strategy simulation.",
    description: "Structure backtest data feeds, trade log matrices, slippage deductions, and performance metrics.",
    isInteractive: false,
    formula: "Net Return = Sum(Trade Returns) - Slippage - Transaction Costs",
    useCase: "Quantitative strategy testing prior to paper trading."
  },
  {
    id: "fundamental-analysis-checklist",
    name: "Fundamental Analysis Checklist",
    slug: "fundamental-analysis-checklist",
    category: "Fundamental Analysis",
    iconName: "CheckSquare",
    tagline: "20-point audit checklist for evaluating Indian company fundamentals.",
    description: "Systematic checklist covering management quality, debt ratios, ROE > 15%, promoter pledge, cash flow conversion, and competitive moat.",
    isInteractive: false,
    formula: "Score = (Passed Checks / 20) × 100",
    useCase: "Systematic stock research and fundamental due diligence."
  },
  {
    id: "candlestick-tool",
    name: "Candlestick Learning Tool",
    slug: "candlestick-tool",
    category: "Technical Analysis",
    iconName: "Flame",
    tagline: "Interactive visual pattern identifier (Doji, Hammer, Engulfing, Morning Star).",
    description: "Explore candlestick anatomy (O, H, L, C), body-to-wick ratios, and pattern reliability context.",
    isInteractive: true,
    formula: "Body = |Close - Open| | Upper Shadow = High - Max(Open, Close) | Lower Shadow = Min(Open, Close) - Low",
    useCase: "Visual candlestick pattern recognition training."
  },
  {
    id: "margin-leverage-calculator",
    name: "Margin/Leverage Calculator",
    slug: "margin-leverage-calculator",
    category: "Options Education",
    iconName: "Percent",
    tagline: "Compute SPAN + Exposure margin requirements for futures & options writing in India.",
    description: "Understand SEBI peak margin rules, leverage limits, and margin shortfall penalties.",
    isInteractive: false,
    formula: "Total Margin = SPAN Margin + Exposure Margin",
    useCase: "Derivatives capital requirement planning."
  }
];
