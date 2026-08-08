export interface Category {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  color: string;
  subtopics: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: "stock-market-basics",
    title: "Stock Market Basics",
    slug: "stock-market-basics",
    iconName: "TrendingUp",
    shortDesc: "Master equity markets, NSE/BSE structure, demat accounts, order types, and market participants.",
    fullDesc: "Comprehensive educational guide to how Indian equity markets function. Learn about stock exchanges (NSE & BSE), SEBI regulatory frameworks, clearing corporations, primary vs secondary markets, order execution mechanisms, market liquidity, and basic investing terminology.",
    color: "from-blue-500 to-cyan-500",
    subtopics: ["NSE & BSE Framework", "Demat & Trading Account Basics", "Market Order Types", "Market Capitalization", "Corporate Actions (Dividends, Splits)"]
  },
  {
    id: "technical-analysis",
    title: "Technical Analysis",
    slug: "technical-analysis",
    iconName: "LineChart",
    shortDesc: "Understand chart patterns, momentum indicators, moving averages, trendlines, and candlestick signals.",
    fullDesc: "Learn the quantitative art and math behind price chart patterns. Explore momentum oscillators (RSI, MACD, Stochastic), trend indicators (EMA, SMA, Supertrend), support & resistance mathematical levels, and multi-timeframe chart analysis.",
    color: "from-emerald-500 to-teal-500",
    subtopics: ["RSI Oscillator", "Moving Average Crossovers (EMA/SMA)", "Candlestick Patterns", "MACD Signal Math", "Support & Resistance Levels"]
  },
  {
    id: "fundamental-analysis",
    title: "Fundamental Analysis",
    slug: "fundamental-analysis",
    iconName: "BarChart3",
    shortDesc: "Evaluate balance sheets, P&L statements, financial ratios (P/E, ROE, ROCE), cash flows, and valuation.",
    fullDesc: "Educational framework for evaluating company intrinsic value. Understand audited financial statements, key accounting metrics, profitability ratios, working capital cycles, debt-to-equity metrics, and discounted cash flow (DCF) concepts.",
    color: "from-indigo-500 to-purple-500",
    subtopics: ["Price-to-Earnings (P/E) Ratio", "Return on Equity (ROE)", "ROCE & Capital Efficiency", "Free Cash Flow Analysis", "Balance Sheet Health Check"]
  },
  {
    id: "options-education",
    title: "Options Education",
    slug: "options-education",
    iconName: "Target",
    shortDesc: "Learn Options Greeks (Delta, Theta, Vega, Gamma), payoff curves, strike selection, and risk management.",
    fullDesc: "In-depth options derivative education tailored for Indian index (Nifty 50, BankNifty) and stock options. Master options math, intrinsic vs time value, Black-Scholes pricing principles, Greeks analysis, and risk-defined strategy payoff mechanics.",
    color: "from-amber-500 to-orange-500",
    subtopics: ["Options Greeks (Delta, Theta, Vega)", "Call & Put Payoff Graphs", "Implied Volatility (IV) & Rank", "Bull Call & Bear Put Spreads", "Options Breakeven Mechanics"]
  },
  {
    id: "algo-trading",
    title: "Algo Trading",
    slug: "algo-trading",
    iconName: "Cpu",
    shortDesc: "Design algorithmic execution rules, order APIs, signal logic, and automated risk controls.",
    fullDesc: "Introduction to algorithmic trading architectures. Learn how programmatic trading engines process market data feeds, evaluate rule-based entry/exit signals, manage order state machines, and enforce automated risk controls.",
    color: "from-cyan-500 to-blue-600",
    subtopics: ["Algorithmic Architecture 101", "Execution APIs (SmartAPI, Broker APIs)", "Order State Management", "Automated Risk Limits", "Slippage & Latency Analysis"]
  },
  {
    id: "python-for-trading",
    title: "Python for Trading",
    slug: "python-for-trading",
    iconName: "Code2",
    shortDesc: "Use Pandas, NumPy, YFinance, and Matplotlib to analyze stock data, compute indicators, and build tools.",
    fullDesc: "Practical code-driven tutorials using Python for financial data analysis. Download OHLCV data, compute vectorised moving averages, calculate historical volatility, plot candlestick charts, and clean financial datasets.",
    color: "from-emerald-400 to-green-600",
    subtopics: ["Pandas DataFrames for Stock Data", "Vectorized Indicator Calculations", "Plotting Financial Graphs", "Fetching Market Data via Python", "Data Cleaning & Alignment"]
  },
  {
    id: "ai-and-finance",
    title: "AI & Finance",
    slug: "ai-and-finance",
    iconName: "Sparkles",
    shortDesc: "Explore AI applications in data extraction, sentiment analysis, machine learning models, and LLMs for research.",
    fullDesc: "Educational exploration of artificial intelligence and machine learning applications in modern finance. Learn natural language processing (NLP) for financial news sentiment, tabular ML model building, and prompt engineering for financial research.",
    color: "from-purple-500 to-pink-500",
    subtopics: ["Financial NLP & Sentiment Analysis", "Machine Learning for Pattern Recognition", "LLM Prompting for SEC/SEBI Filing Analysis", "Feature Engineering for Price Series", "AI Ethics in Quantitative Analysis"]
  },
  {
    id: "backtesting",
    title: "Backtesting",
    slug: "backtesting",
    iconName: "RotateCcw",
    shortDesc: "Validate trading strategies on historical data, measure Max Drawdown, Sharpe Ratio, and Win Rate.",
    fullDesc: "Rigorous quantitative backtesting methodology. Learn how to simulate strategy performance on historical Indian stock data, avoid forward-looking bias, account for transaction costs/brokerage, and evaluate metrics like Profit Factor and CAGR.",
    color: "from-rose-500 to-red-600",
    subtopics: ["Backtesting Framework Setup", "Avoiding Curve Fitting & Overfitting", "Sharpe & Sortino Ratios", "Maximum Drawdown Calculation", "Transaction Cost & Slippage Modeling"]
  },
  {
    id: "free-tools",
    title: "Free Tools",
    slug: "free-tools",
    iconName: "Wrench",
    shortDesc: "Interactive educational calculators for RSI, CAGR, Risk/Reward, SIP, Option Payoff, and Position Sizing.",
    fullDesc: "Suite of 20 interactive financial calculators and visualizers designed to reinforce theoretical learning with real-time math.",
    color: "from-yellow-400 to-amber-600",
    subtopics: ["RSI Calculator", "CAGR Calculator", "Risk/Reward Calculator", "Option Payoff Calculator", "Position Size Calculator"]
  },
  {
    id: "learning-hub",
    title: "Learning Hub",
    slug: "learning-hub",
    iconName: "BookOpen",
    shortDesc: "Structured learning paths, topic clusters, article archives, case studies, and financial terms glossary.",
    fullDesc: "Central repository of all MarketLab India educational materials, organized into clear beginner-to-advanced learning tracks.",
    color: "from-sky-500 to-indigo-600",
    subtopics: ["Beginner Track", "Trader Track", "Quant Track", "Glossary", "Case Studies"]
  }
];
