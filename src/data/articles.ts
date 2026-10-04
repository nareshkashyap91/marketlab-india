export interface Article {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  author: string;
  authorRole: string;
  publishedDate: string;
  updatedDate: string;
  readTime: string;
  shortAnswer: string;
  contentHtml: string;
  faqs: { question: string; answer: string }[];
  relatedArticles: { title: string; slug: string }[];
  relatedTools: { name: string; slug: string }[];
  sources: string[];
  youtubeVideoId?: string;
}

export const ARTICLES: Article[] = [
  // 1. TECHNICAL TOOLS: CHARTINK SCREENER FORMULAS
  {
    slug: "chartink-screener-formulas-volume-breakout-guide",
    title: "Chartink Screener Formulas: How to Write Custom Volume Breakout & Momentum Scanners",
    category: "Technical Tools",
    categorySlug: "technical-tools",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-09-06",
    updatedDate: "2026-09-06",
    readTime: "13 min read",
    shortAnswer: "Chartink screeners allow Indian stock traders to scan 5,000+ listed equities for technical conditions in real time. Writing custom Chartink formulas combining volume surges (2x 20-day average), RSI momentum (>60), and 52-week high breakouts identifies high-probability swing trading setups.",
    contentHtml: `
      <h2>1. Introduction to Chartink Screener Syntax</h2>
      <p>Chartink is one of India's most popular free technical stock scanning engines. It allows traders to write multi-timeframe conditional statements to scan NSE and BSE stocks.</p>

      <h2>2. Volume Breakout Screener Logic Formula</h2>
      <p>A classic volume breakout scanner identifies stocks making a fresh 20-day high with a massive expansion in trading volume:</p>
      
      <div class="math-card p-4 my-4 rounded font-mono text-cyan-400">
        Filter: Latest Close > Latest 20 Period High AND Latest Volume > (Latest 20 Period SMA(Volume) * 2)
      </div>

      <h2>3. Chartink Condition Breakdown:</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><code>[0] daily Close > [0] daily Max(20, daily High)</code>: Confirms price is breaking above 20-day resistance.</li>
        <li><code>[0] daily Volume > [0] daily Sma(20, daily Volume) * 2</code>: Confirms institutional buying volume is at least 200% of average.</li>
        <li><code>[0] daily RSI(14) > 55</code>: Ensures momentum is firmly bullish.</li>
      </ul>

      <h2>4. Python Equivalent Code (Pandas Market Scanner)</h2>
      <pre><code>import pandas as pd

def chartink_volume_breakout(df):
    df['SMA_Vol_20'] = df['Volume'].rolling(20).mean()
    df['Max_High_20'] = df['High'].shift(1).rolling(20).max()
    
    # Condition 1: Breakout above 20-day high
    cond_price = df['Close'] > df['Max_High_20']
    
    # Condition 2: Volume > 2x 20-day SMA
    cond_vol = df['Volume'] > (df['SMA_Vol_20'] * 2)
    
    return df[cond_price & cond_vol]
</code></pre>
    `,
    faqs: [
      {
        question: "Is Chartink free for intraday and swing scanners?",
        answer: "Yes, Chartink offers free end-of-day and 15-minute delayed scanning, as well as premium real-time intraday scans."
      },
      {
        question: "What is the best RSI filter setting for breakout screeners?",
        answer: "Setting RSI > 55 or RSI > 60 filters out sluggish range-bound stocks and isolates high-momentum momentum breakouts."
      }
    ],
    relatedArticles: [
      { title: "Relative Strength Index (RSI) Guide", slug: "relative-strength-index-rsi-guide" },
      { title: "Mastering Swing Trading Setups", slug: "swing-trading-setups-price-action-risk-reward-guide" }
    ],
    relatedTools: [
      { name: "RSI Calculator", slug: "rsi-calculator" },
      { name: "Risk/Reward Calculator", slug: "risk-reward-calculator" }
    ],
    sources: [
      "Chartink Documentation & Custom Indicator Reference, 2024.",
      "Bulkowski, Thomas N. Encyclopedia of Chart Patterns. Wiley, 2021."
    ]
  },

  // 2. TRADING STRATEGIES: SWING TRADING SETUPS
  {
    slug: "swing-trading-setups-price-action-risk-reward-guide",
    title: "Mastering Swing Trading Setups: Price Action Breakouts & 1:2 Risk-Reward Control",
    category: "Trading Strategies",
    categorySlug: "trading-strategies",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-09-06",
    updatedDate: "2026-09-06",
    readTime: "14 min read",
    shortAnswer: "Swing trading captures short-to-medium term stock price moves over several days to weeks. Combining price action support/resistance levels, 20 EMA trend pullback entry triggers, and strict 1:2 risk-reward position sizing protects capital while maximizing compound returns.",
    contentHtml: `
      <h2>1. The Core Principles of Swing Trading</h2>
      <p>Unlike intraday trading (which closes positions by 3:30 PM) or long-term investing (which holds for years), <strong>Swing Trading</strong> aims to capture individual market swings lasting 3 to 15 trading days.</p>

      <h2>2. The 20 EMA Pullback Setup</h2>
      <p>In a strong trending market, prices frequently pull back to test the 20-day Exponential Moving Average (20 EMA) before resuming the primary trend:</p>

      <div class="math-card p-4 my-4 rounded">
        <p class="font-mono text-cyan-400">Entry Trigger = Bullish Reversal Candlestick at 20 EMA</p>
        <p class="font-mono text-emerald-400 mt-2">Stop Loss = Below Swing Low | Profit Target = Entry + (2 \\times Risk)</p>
      </div>

      <h2>3. The 1:2 Risk-Reward Math Matrix</h2>
      <p>A trader with a 40% win rate remains mathematically profitable if their average reward is twice their risk:</p>
      
      <div class="math-card p-4 my-4 rounded font-mono text-amber-400">
        Mathematical Expectancy = (Win Rate \\times Average Gain) - (Loss Rate \\times Average Loss)
      </div>
    `,
    faqs: [
      {
        question: "What is the best timeframe for swing trading Indian stocks?",
        answer: "The Daily (1D) timeframe is optimal for trend identification, paired with 75-minute or 15-minute charts for precise entries."
      },
      {
        question: "How much capital should I risk per swing trade?",
        answer: "Professional quantitative risk rules limit risk to no more than 1% to 2% of total capital on any single trade."
      }
    ],
    relatedArticles: [
      { title: "Chartink Screener Formulas Guide", slug: "chartink-screener-formulas-volume-breakout-guide" },
      { title: "Moving Average Crossovers Guide", slug: "moving-average-crossovers-ema-vs-sma-guide" }
    ],
    relatedTools: [
      { name: "Risk/Reward Calculator", slug: "risk-reward-calculator" },
      { name: "Position Size Calculator", slug: "position-size-calculator" }
    ],
    sources: [
      "Elder, Alexander. Trading for a Living. Wiley, 1993.",
      "Zerodha Varsity Module 2: Technical Analysis & Risk Management."
    ]
  },

  // 3. DATA AUTOMATION: POWER BI & POWER QUERY
  {
    slug: "power-bi-stock-market-dashboard-and-power-query-guide",
    title: "Building Power BI Stock Market Dashboards: Advanced Power Query M-Code & Live API Feeds",
    category: "Data Automation",
    categorySlug: "data-automation",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-09-06",
    updatedDate: "2026-09-06",
    readTime: "15 min read",
    shortAnswer: "Power BI and Power Query allow financial analysts to automate stock market report generation. Writing custom M-code to query REST APIs, parsing JSON stock responses, and building DAX measures for portfolio CAGR and drawdown creates interactive live financial dashboards.",
    contentHtml: `
      <h2>1. Architecture of Automated Power BI Financial Dashboards</h2>
      <p>Modern equity research requires consolidating multiple data feeds (NSE prices, financial balance sheets, FII data) into an automated visual dashboard.</p>

      <h2>2. Advanced Power Query M-Code for Web API Fetching</h2>
      <p>Power Query uses the functional <strong>M Language</strong> to make Web HTTP requests and parse nested JSON payloads:</p>

      <pre><code>let
    Source = Json.Document(Web.Contents("https://api.example.com/v1/stock/nifty50")),
    data = Source[data],
    #"Converted to Table" = Table.FromList(data, Splitter.SplitByNothing(), null, null, ExtraValues.Error),
    #"Expanded Column" = Table.ExpandRecordColumn(#"Converted to Table", "Column1", { "symbol", "close", "change_pct" })
in
    #"Expanded Column"
</code></pre>

      <h2>3. DAX Formulas for CAGR & Portfolio Returns</h2>
      <div class="math-card p-4 my-4 rounded font-mono text-cyan-400">
        CAGR % = ( ( MAX('Portfolio'[CurrentVal]) / MIN('Portfolio'[InitialVal]) ) ^ ( 1 / [TotalYears] ) ) - 1
      </div>
    `,
    faqs: [
      {
        question: "Can Power BI automatically refresh stock data?",
        answer: "Yes! Power BI Service supports scheduled auto-refreshes up to 8 times daily on Pro accounts or up to 48 times on Premium accounts."
      },
      {
        question: "What is the difference between Power Query M-Code and DAX?",
        answer: "Power Query M-Code is used for Data Extraction & Transformation (ETL), while DAX is used for Data Modeling & Analytical Calculations."
      }
    ],
    relatedArticles: [
      { title: "Python Vectorized Backtesting Guide", slug: "python-vectorized-backtesting-for-trading-strategies-guide" }
    ],
    relatedTools: [
      { name: "CAGR Calculator", slug: "cagr-calculator" }
    ],
    sources: [
      "Microsoft Power BI Official Documentation & M Formula Language Reference, 2024.",
      "Ferrari, Alberto, and Marco Russo. The Definitive Guide to DAX. Microsoft Press, 2019."
    ]
  },

  // 4. RSI PILLAR & TOPIC CLUSTER
  {
    slug: "relative-strength-index-rsi-guide",
    title: "Relative Strength Index (RSI): The Definitive Educational Guide",
    category: "Technical Analysis",
    categorySlug: "technical-analysis",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-01-15",
    updatedDate: "2026-09-05",
    readTime: "12 min read",
    shortAnswer: "The Relative Strength Index (RSI) is a bounded momentum oscillator developed by J. Welles Wilder Jr. in 1978. It measures the speed and magnitude of recent price changes on a scale of 0 to 100 to evaluate overbought (70+) or oversold (30-) conditions in financial assets.",
    contentHtml: `
      <h2>1. Introduction to the Relative Strength Index</h2>
      <p>The <strong>Relative Strength Index (RSI)</strong> is one of the most widely referenced technical indicators in financial market education.</p>
    `,
    faqs: [
      {
        question: "What is the standard lookback period for RSI?",
        answer: "The classic default period created by J. Welles Wilder is 14 periods."
      }
    ],
    relatedArticles: [
      { title: "MACD Indicator & Histogram Math", slug: "macd-indicator-strategy-and-histogram-math-guide" }
    ],
    relatedTools: [
      { name: "RSI Calculator", slug: "rsi-calculator" }
    ],
    sources: [
      "Wilder, J. Welles (1978)."
    ]
  },

  // 5. OPTIONS IMPLIED VOLATILITY & IV CRUSH
  {
    slug: "options-implied-volatility-and-iv-crush-guide",
    title: "Options Implied Volatility (IV) & IV Crush: How Major Events Impact Pricing",
    category: "Options Education",
    categorySlug: "options-education",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-09-05",
    updatedDate: "2026-09-05",
    readTime: "14 min read",
    shortAnswer: "Implied Volatility (IV) measures market expectations of future underlying price fluctuation. IV Crush occurs when uncertainty resolves after major announcements.",
    contentHtml: `
      <h2>1. What is Implied Volatility (IV)?</h2>
      <p>Implied Volatility is forward-looking and derived from Black-Scholes pricing.</p>
    `,
    faqs: [
      {
        question: "Why do options premiums drop after major news events?",
        answer: "Because implied volatility drops sharply as event uncertainty resolves."
      }
    ],
    relatedArticles: [
      { title: "Options Delta & Theta Mechanics", slug: "options-delta-and-theta-mechanics-guide" }
    ],
    relatedTools: [
      { name: "Option Payoff Calculator", slug: "option-payoff-calculator" }
    ],
    sources: [
      "Sheldon Natenberg (2014)."
    ]
  },

  // 6. TECHNICAL ANALYSIS: MACD INDICATOR & HISTOGRAM MATH
  {
    slug: "macd-indicator-strategy-and-histogram-math-guide",
    title: "MACD Indicator & Histogram Math: Signal Line Crossovers & Momentum Shifts",
    category: "Technical Analysis",
    categorySlug: "technical-analysis",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-09-05",
    updatedDate: "2026-09-05",
    readTime: "11 min read",
    shortAnswer: "MACD subtracts the 26-period EMA from the 12-period EMA, plotting a Signal Line (9-period EMA) and Histogram.",
    contentHtml: `
      <h2>1. The Core Formulas of MACD</h2>
      <p>MACD transforms two moving averages into a momentum oscillator.</p>
    `,
    faqs: [
      {
        question: "What is standard MACD setting?",
        answer: "(12, 26, 9) Exponential Moving Averages."
      }
    ],
    relatedArticles: [
      { title: "Relative Strength Index (RSI) Guide", slug: "relative-strength-index-rsi-guide" }
    ],
    relatedTools: [
      { name: "EMA Calculator", slug: "ema-calculator" }
    ],
    sources: [
      "Gerald Appel (2005)."
    ]
  },

  // 7. TECHNICAL ANALYSIS: MOVING AVERAGE CROSSOVERS
  {
    slug: "moving-average-crossovers-ema-vs-sma-guide",
    title: "Moving Average Crossovers (EMA vs SMA): 20/50 Day Strategy Math",
    category: "Technical Analysis",
    categorySlug: "technical-analysis",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-08-09",
    updatedDate: "2026-08-09",
    readTime: "12 min read",
    shortAnswer: "Exponential Moving Averages assign higher weight to recent prices, while Simple Moving Averages treat all periods equally.",
    contentHtml: `
      <h2>1. The Mathematics of SMA vs EMA</h2>
      <p>Moving averages smooth price noise to reveal trend direction.</p>
    `,
    faqs: [
      {
        question: "Why prefer EMA over SMA?",
        answer: "EMA reduces lag by placing exponential weight on recent prices."
      }
    ],
    relatedArticles: [
      { title: "Relative Strength Index (RSI) Guide", slug: "relative-strength-index-rsi-guide" }
    ],
    relatedTools: [
      { name: "EMA Calculator", slug: "ema-calculator" }
    ],
    sources: [
      "John J. Murphy (1999)."
    ]
  },

  // 8. ALGO TRADING: PYTHON VECTORIZED BACKTESTING
  {
    slug: "python-vectorized-backtesting-for-trading-strategies-guide",
    title: "Python Vectorized Backtesting: Building Nifty 50 Strategy Engine with Pandas",
    category: "Algo Trading",
    categorySlug: "algo-trading",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-08-09",
    updatedDate: "2026-08-09",
    readTime: "13 min read",
    shortAnswer: "Vectorized backtesting evaluates trading rules on price arrays using NumPy/Pandas without slow loops.",
    contentHtml: `
      <h2>1. What is Vectorized Backtesting?</h2>
      <p>Vectorized backtesting executes matrix operations over entire price series.</p>
    `,
    faqs: [
      {
        question: "What is Look-Ahead Bias?",
        answer: "When future price data leaks into current trade decisions."
      }
    ],
    relatedArticles: [
      { title: "Moving Average Crossovers Guide", slug: "moving-average-crossovers-ema-vs-sma-guide" }
    ],
    relatedTools: [
      { name: "Backtesting Template", slug: "backtesting-template" }
    ],
    sources: [
      "Andreas F. Clenow (2019)."
    ]
  },

  // 9. STOCK MARKET BASICS 1: NSE & BSE FRAMEWORK
  {
    slug: "nse-and-bse-stock-exchange-framework-guide",
    title: "NSE & BSE Stock Exchange Framework: Order Matching, SEBI & Clearing Houses",
    category: "Stock Market Basics",
    categorySlug: "stock-market-basics",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-08-09",
    updatedDate: "2026-08-09",
    readTime: "10 min read",
    shortAnswer: "The National Stock Exchange (NSE) and Bombay Stock Exchange (BSE) form the primary trading framework in India.",
    contentHtml: `
      <h2>1. Introduction to Indian Stock Exchanges</h2>
      <p>NSE and BSE operate on price-time priority order matching engines.</p>
    `,
    faqs: [
      {
        question: "Difference between NSE and BSE?",
        answer: "NSE is benchmarked by Nifty 50, BSE is benchmarked by Sensex."
      }
    ],
    relatedArticles: [
      { title: "Demat Account Basics", slug: "demat-and-trading-account-basics-guide" }
    ],
    relatedTools: [
      { name: "Risk/Reward Calculator", slug: "risk-reward-calculator" }
    ],
    sources: [
      "SEBI Market Circulars, 2024."
    ]
  },

  // 10. STOCK MARKET BASICS 2: DEMAT ACCOUNT BASICS
  {
    slug: "demat-and-trading-account-basics-guide",
    title: "Demat & Trading Account Basics: NSDL, CDSL, T+1 Settlement & DP Charges",
    category: "Stock Market Basics",
    categorySlug: "stock-market-basics",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-08-09",
    updatedDate: "2026-08-09",
    readTime: "9 min read",
    shortAnswer: "A Trading Account executes buy/sell orders, while a Demat Account holds securities in electronic format.",
    contentHtml: `
      <h2>1. The Architecture of Stock Trading Accounts</h2>
      <p>Investors require a Bank, Trading, and Demat account.</p>
    `,
    faqs: [
      {
        question: "Are shares safe in Demat?",
        answer: "Yes, shares reside with central depositories NSDL or CDSL."
      }
    ],
    relatedArticles: [
      { title: "NSE & BSE Stock Exchange Framework", slug: "nse-and-bse-stock-exchange-framework-guide" }
    ],
    relatedTools: [
      { name: "Position Size Calculator", slug: "position-size-calculator" }
    ],
    sources: [
      "NSDL Investor Education Handbook, 2024."
    ]
  },

  // 11. OPTIONS DELTA & THETA MECHANICS
  {
    slug: "options-delta-and-theta-mechanics-guide",
    title: "Options Delta & Theta Mechanics: Price Sensitivity & Time Decay Explained",
    category: "Options Education",
    categorySlug: "options-education",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-08-09",
    updatedDate: "2026-08-09",
    readTime: "14 min read",
    shortAnswer: "Delta measures premium change per ₹1 spot move, while Theta quantifies daily time decay loss.",
    contentHtml: `
      <h2>1. Introduction to Derivatives Greeks</h2>
      <p>Option premiums are calculated by Black-Scholes sensitivity metrics.</p>
    `,
    faqs: [
      {
        question: "What is ATM Call Delta?",
        answer: "ATM Call Delta is approximately +0.50."
      }
    ],
    relatedArticles: [
      { title: "Understanding Options Greeks", slug: "understanding-options-greeks-delta-theta-vega" }
    ],
    relatedTools: [
      { name: "Option Payoff Calculator", slug: "option-payoff-calculator" }
    ],
    sources: [
      "Black-Scholes (1973)."
    ]
  },

  // 12. SIP COMPOUNDING MATRIX
  {
    slug: "sip-compounding-matrix-and-wealth-projection-guide",
    title: "SIP Compounding Matrix: How Monthly SIPs Multiply Long-Term Wealth",
    category: "Stock Market Basics",
    categorySlug: "stock-market-basics",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-08-09",
    updatedDate: "2026-08-09",
    readTime: "11 min read",
    shortAnswer: "A Systematic Investment Plan uses compound interest math and rupee-cost averaging to build wealth.",
    contentHtml: `
      <h2>1. The Mathematics of SIP Compounding</h2>
      <p>SIP deploys fixed monthly sums into equity mutual funds.</p>
    `,
    faqs: [
      {
        question: "Realistic Nifty CAGR?",
        answer: "Historically 11% to 13% CAGR over 15+ years."
      }
    ],
    relatedArticles: [
      { title: "Demystifying P/E Ratio", slug: "demystifying-price-to-earnings-pe-ratio" }
    ],
    relatedTools: [
      { name: "SIP Calculator", slug: "sip-calculator" }
    ],
    sources: [
      "John C. Bogle (2017)."
    ]
  },

  // 13. OPTIONS GREEKS OVERVIEW ARTICLE
  {
    slug: "understanding-options-greeks-delta-theta-vega",
    title: "Understanding Options Greeks: Delta, Theta, Vega & Gamma Explained",
    category: "Options Education",
    categorySlug: "options-education",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-02-10",
    updatedDate: "2026-08-02",
    readTime: "15 min read",
    shortAnswer: "Options Greeks measure sensitivity of option price to spot price, time decay, IV, and Delta change rate.",
    contentHtml: `
      <h2>1. What Are Options Greeks?</h2>
      <p>Option contracts trade non-linearly based on Black-Scholes partial derivatives.</p>
    `,
    faqs: [
      {
        question: "Why Theta decay accelerates near expiry?",
        answer: "Extrinsic value is proportional to square root of time remaining."
      }
    ],
    relatedArticles: [
      { title: "Options Implied Volatility & IV Crush", slug: "options-implied-volatility-and-iv-crush-guide" }
    ],
    relatedTools: [
      { name: "Option Payoff Calculator", slug: "option-payoff-calculator" }
    ],
    sources: [
      "Sheldon Natenberg (2014)."
    ]
  },

  // 14. FUNDAMENTAL ANALYSIS ARTICLE
  {
    slug: "demystifying-price-to-earnings-pe-ratio",
    title: "Demystifying P/E Ratio: How to Evaluate Valuation Metrics in Indian Stocks",
    category: "Fundamental Analysis",
    categorySlug: "fundamental-analysis",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-03-01",
    updatedDate: "2026-08-03",
    readTime: "10 min read",
    shortAnswer: "The Price-to-Earnings ratio measures share price relative to EPS, showing how many rupees investors pay per ₹1 net profit.",
    contentHtml: `
      <h2>1. The Mathematics of Price-to-Earnings</h2>
      <p>The P/E ratio is the cornerstone metric in stock valuation.</p>
    `,
    faqs: [
      {
        question: "Can P/E be negative?",
        answer: "Technically yes, if net income is negative."
      }
    ],
    relatedArticles: [
      { title: "Relative Strength Index (RSI) Guide", slug: "relative-strength-index-rsi-guide" }
    ],
    relatedTools: [
      { name: "P/E Calculator", slug: "pe-calculator" }
    ],
    sources: [
      "Graham & Dodd (1934)."
    ]
  },

  // 15. SEBI NEW INDEX DERIVATIVES & ALGO RULES 2026
  {
    slug: "sebi-new-index-derivatives-algo-rules-2026-impact-guide",
    title: "SEBI New Index Derivatives & Algo Rules 2026: Impact on Weekly Expiries, Lot Sizes & Retail Strategies",
    category: "Daily Market Updates",
    categorySlug: "daily-market-updates",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-09-07",
    updatedDate: "2026-09-07",
    readTime: "14 min read",
    shortAnswer: "SEBI's 2026 index derivative regulatory framework introduces unified weekly benchmark expiries, increased minimum contract sizes to ₹15-20 Lakhs, upfront intraday margin collection, and automated algo order rate limits to safeguard retail capital and curb speculative volatility.",
    contentHtml: `
      <h2>1. Overview of SEBI's 2026 Derivatives Framework</h2>
      <p>The Securities and Exchange Board of India (SEBI) has finalized landmark regulatory changes aimed at strengthening risk management across Equity Index Derivatives (Options & Futures) on the NSE and BSE. These measures address the rapid expansion of retail option buying and zero-day-to-expiry (0DTE) speculative activity.</p>
      
      <h2>2. Key Structural Changes & Rule Summary</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>One Weekly Benchmark Expiry Per Exchange:</strong> Exchanges are permitted to offer weekly options contracts on only ONE primary benchmark index (e.g., Nifty 50 on NSE, Sensex on BSE). Secondary index weekly contracts (like BankNifty, Midcap Nifty, Sensex 50) have been rationalized to monthly cycles.</li>
        <li><strong>Increased Minimum Contract Value:</strong> Contract size floor has been raised from ₹5 Lakhs to ₹15–20 Lakhs. Lot sizes for Nifty and BankNifty contracts have been recalibrated to ensure higher entry capital requirements for option writers and buyers alike.</li>
        <li><strong>Upfront Option Premium Collection:</strong> Brokers must collect 100% upfront option buyer premium prior to order execution to eliminate intraday leverage extensions.</li>
        <li><strong>Extreme Loss Margin (ELM) Surcharge:</strong> An additional 2% ELM buffer is levied on short option positions on expiry days to absorb tail-risk gamma squeezes.</li>
      </ul>

      <h2>3. Impact on Retail Traders & Quantitative Algos</h2>
      <p>Quantitative traders and algorithmic systems must adapt to structural changes in implied volatility (IV) surfaces and intraday liquidity distribution:</p>

      <div class="math-card p-4 my-4 rounded font-mono text-cyan-400">
        Margin Required = Max( Initial Margin + ELM Surcharge, Upfront Option Premium )
      </div>

      <p>Because weekly option liquidity is now concentrated into single flagship expiry days (Thursdays for NSE Nifty 50 and Fridays for BSE Sensex), intraday theta decay curves have become steeper during afternoon sessions (2:00 PM – 3:30 PM IST).</p>

      <h2>4. Python Code: Simulating Expiry Day Volatility & Margin Calculation</h2>
      <pre><code>import numpy as np
import pandas as pd

def calculate_sebi_option_margin(spot_price, strike_price, option_premium, lot_size, is_short=True):
    """
    Calculates required margin under SEBI 2026 2% ELM Surcharge rules.
    """
    contract_value = spot_price * lot_size
    base_span_margin = contract_value * 0.12  # ~12% SPAN margin estimate
    elm_surcharge = contract_value * 0.02    # 2% SEBI Expiry Surcharge
    
    if is_short:
        total_margin = base_span_margin + elm_surcharge + (option_premium * lot_size)
    else:
        total_margin = option_premium * lot_size  # Upfront premium
        
    return {
        "Contract Value (INR)": contract_value,
        "Total Margin Required (INR)": round(total_margin, 2),
        "Upfront Cushion (INR)": round(elm_surcharge, 2)
    }

# Example Calculation for Nifty 50 Short Call at 24,500
result = calculate_sebi_option_margin(spot_price=24500, strike_price=24500, option_premium=85, lot_size=25, is_short=True)
print(result)
</code></pre>

      <h2>5. Recommended Trader Action Plan</h2>
      <ol class="list-decimal pl-6 space-y-2">
        <li><strong>Adjust Position Sizing:</strong> Higher lot size values require recalculating risk per trade. Ensure no single option trade exceeds 2% of total trading account equity.</li>
        <li><strong>Shift to Spread Strategies:</strong> Credit spreads (Bull Put / Bear Call) and Iron Condors defined-risk setups shield option sellers from uncapped margin spikes.</li>
        <li><strong>Monitor Broker Order API Rate Limits:</strong> Algo traders on Zerodha, Angel One, or Upstox must comply with SEBI's 20 orders per second rate limit per client ID.</li>
      </ol>
    `,
    faqs: [
      {
        question: "When did SEBI's new index derivative rules take full effect?",
        answer: "The phased rollout began in late 2024 and mid-2025, with final lot size and single-weekly-expiry mandates fully enforced for 2026."
      },
      {
        question: "Can retail traders still buy out-of-the-money (OTM) options on expiry days?",
        answer: "Yes, but deep OTM strikes beyond SEBI's specified price bands may have restricted order placement to prevent illiquid gamma manipulation."
      },
      {
        question: "How does this affect automated Python algo strategies?",
        answer: "Algo traders must update lot size parameters in API code and incorporate strict margin buffer checks before placing automated order bursts."
      }
    ],
    relatedArticles: [
      { title: "Understanding Options Greeks: Delta, Theta, Vega & Gamma", slug: "understanding-options-greeks-delta-theta-vega" },
      { title: "Mastering Swing Trading Setups", slug: "swing-trading-setups-price-action-risk-reward-guide" },
      { title: "Chartink Screener Formulas & Volume Scanners", slug: "chartink-screener-formulas-volume-breakout-guide" }
    ],
    relatedTools: [
      { name: "Option Payoff Calculator", slug: "option-payoff-calculator" },
      { name: "Risk/Reward Calculator", slug: "risk-reward-calculator" }
    ],
    sources: [
      "SEBI Master Circular for Stock Exchanges and Clearing Corporations on Derivatives, 2025/2026.",
      "National Stock Exchange (NSE) Circular on Revision of Lot Sizes for Index Options.",
      "Hull, John C. Options, Futures, and Other Derivatives. Pearson, 11th Edition."
    ]
  },

  // 16. AI & MACHINE LEARNING IN ALGO TRADING
  {
    slug: "ai-machine-learning-python-xgboost-lstm-trading-guide",
    title: "AI & Machine Learning in Indian Algo Trading: Building Python XGBoost & Feature Engineering Models",
    category: "Algo Trading",
    categorySlug: "algo-trading",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-09-07",
    updatedDate: "2026-09-07",
    readTime: "16 min read",
    shortAnswer: "Applying Machine Learning to Indian stock trading requires domain-driven feature engineering (technical momentum, volatility spread, order flow imbalance) combined with gradient-boosted decision trees (XGBoost) and walk-forward validation to eliminate lookahead bias.",
    contentHtml: `
      <h2>1. Why Traditional Moving Averages Fail in High-Frequency Regimes</h2>
      <p>Simple crossover strategies suffer from lag and whipsaws in sideways Indian markets. Modern quantitative funds utilize supervised machine learning models to capture non-linear interactions across technical indicators, option chain IV skew, and institutional order flow.</p>

      <h2>2. Feature Engineering Pipeline for Nifty 50</h2>
      <p>High-predictive features combine price momentum, volatility ratio, and volume velocity:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>RSI Velocity (5-day ΔRSI):</strong> Captures rate of acceleration in momentum before price breakouts occur.</li>
        <li><strong>Bollinger Band Width Ratio:</strong> Measures volatility compression (squeeze setups) prior to explosive directional moves.</li>
        <li><strong>Relative Volume Ratio (RVOL):</strong> Measures current bar volume against the 20-day trailing volume median.</li>
      </ul>

      <h2>3. Executable Python Code: XGBoost Directional Classifier</h2>
      <pre><code>import numpy as np
import pandas as pd
from xgboost import XGBClassifier
from sklearn.model_selection import TimeSeriesSplit
from sklearn.metrics import accuracy_score, classification_report

def create_ml_features(df):
    """
    Computes technical features and target binary directional label.
    """
    df = df.copy()
    
    # Feature 1: Log Returns
    df['Log_Ret'] = np.log(df['Close'] / df['Close'].shift(1))
    
    # Feature 2: Volatility (20-day rolling std)
    df['Vol_20'] = df['Log_Ret'].rolling(20).std()
    
    # Feature 3: Volume Ratio
    df['RVOL'] = df['Volume'] / df['Volume'].rolling(20).median()
    
    # Target: 1 if Next Day Close > Today Close else 0
    df['Target'] = (df['Close'].shift(-1) > df['Close']).astype(int)
    
    return df.dropna()

# Simulated Training Workflow
# X = df[['Log_Ret', 'Vol_20', 'RVOL']]
# y = df['Target']
# model = XGBClassifier(n_estimators=100, max_depth=3, learning_rate=0.05)
# model.fit(X_train, y_train)
</code></pre>

      <h2>4. Overfitting Prevention & Purged Walk-Forward Cross Validation</h2>
      <p>Standard k-fold cross-validation corrupts financial time series due to temporal leakage. Quant traders must implement <strong>TimeSeriesSplit</strong> with purging and embargo intervals to prevent test data leakage into training folds.</p>

      <h2>5. Performance Metrics & Strategy Guidelines</h2>
      <ol class="list-decimal pl-6 space-y-2">
        <li><strong>Sharpe Ratio Floor:</strong> Target an annualized Sharpe Ratio > 1.5 in out-of-sample backtesting.</li>
        <li><strong>Max Drawdown Control:</strong> Set a hard stop-loss trigger at 10% portfolio equity drawdown.</li>
        <li><strong>Execution Friction:</strong> Account for 0.05% slippage + STT (Securities Transaction Tax) in all backtested trades.</li>
      </ol>
    `,
    faqs: [
      {
        question: "Which algorithm performs best for daily stock prediction: XGBoost or LSTM?",
        answer: "XGBoost consistently outperforms LSTM on tabular daily price data due to lower variance and resistance to overfitting on noisy financial signals."
      },
      {
        question: "How much historical data is required to train an Indian stock ML model?",
        answer: "5 to 10 years of daily candlestick data (incorporating bull, bear, and sideways regimes) is recommended to ensure robust out-of-sample generalization."
      }
    ],
    relatedArticles: [
      { title: "SEBI New Index Derivatives & Algo Rules 2026", slug: "sebi-new-index-derivatives-algo-rules-2026-impact-guide" },
      { title: "Chartink Screener Formulas & Volume Scanners", slug: "chartink-screener-formulas-volume-breakout-guide" }
    ],
    relatedTools: [
      { name: "Risk/Reward Calculator", slug: "risk-reward-calculator" },
      { name: "Option Payoff Calculator", slug: "option-payoff-calculator" }
    ],
    sources: [
      "De Prado, Marcos López. Advances in Financial Machine Learning. Wiley, 2018.",
      "Chen, Tianqi, and Carlos Guestrin. 'XGBoost: A Scalable Tree Boosting System.' ACM SIGKDD, 2016."
    ]
  },

  // 17. VIRAL TOPIC: CAPITAL GAINS TAX (STCG & LTCG) 2026 & TAX HARVESTING GUIDE
  {
    slug: "capital-gains-tax-stcg-ltcg-rules-2026-tax-harvesting-guide",
    title: "Capital Gains Tax (STCG & LTCG) Rules 2026 for Indian Investors: Tax Harvesting Calculator & Strategy",
    category: "Daily Market Updates",
    categorySlug: "daily-market-updates",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-10-04",
    updatedDate: "2026-10-04",
    readTime: "14 min read",
    shortAnswer: "Under Indian Income Tax rules, equity Short-Term Capital Gains (STCG) are taxed at 20%, while Long-Term Capital Gains (LTCG) over 12 months are taxed at 12.5% above the annual ₹1.25 Lakh exemption threshold. Utilizing Tax Loss Harvesting allows investors to legally offset gains against unrealized losses before March 31st to minimize tax liability.",
    contentHtml: `
      <h2>1. Overview of 2026 Capital Gains Tax Structure for Equity & Mutual Funds</h2>
      <p>Understanding capital gains taxation is essential for every Indian stock market trader and mutual fund investor. Following recent Union Budget tax updates, equity taxation rules have undergone significant adjustments to tax rates and annual exemption limits.</p>
      
      <h2>2. Summary of Key Tax Rates for Stock & Mutual Fund Investors</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Short-Term Capital Gains (STCG):</strong> Equity holdings sold within 12 months are taxed at a flat rate of <strong>20%</strong> (plus applicable cess and surcharge).</li>
        <li><strong>Long-Term Capital Gains (LTCG):</strong> Equity holdings held for more than 12 months are taxed at <strong>12.5%</strong> on realized gains exceeding the annual exemption limit of <strong>₹1.25 Lakhs</strong> per financial year.</li>
        <li><strong>Debt Mutual Funds & F&O Trading:</strong> F&O profits are treated as Non-Speculative Business Income and taxed as per your individual Income Tax slab rate. Debt mutual funds purchased after April 1, 2023 are taxed as per the investor's tax slab regardless of holding period.</li>
      </ul>

      <h2>3. Tax Loss Harvesting: How to Legally Reduce Your Income Tax Bill</h2>
      <p>Tax Loss Harvesting is a strategic method where investors sell loss-making stocks or mutual fund units near the end of the financial year (before March 31st) to offset realized capital gains. The sold units can be repurchased immediately or substituted with similar instruments to maintain portfolio asset allocation.</p>

      <div class="math-card p-4 my-4 rounded font-mono text-cyan-400">
        Net Taxable STCG = Total Realized STCG - Realized STCL (Short-Term Capital Loss)
      </div>

      <div class="math-card p-4 my-4 rounded font-mono text-cyan-400">
        Net Taxable LTCG = Max( 0, Total Realized LTCG - Realized LTCL - ₹1,25,000 Exemption )
      </div>

      <h2>4. Key Rules for Set-Off and Carry Forward of Capital Losses</h2>
      <ol class="list-decimal pl-6 space-y-2">
        <li><strong>STCL Offset Flexibility:</strong> Short-Term Capital Losses (STCL) can be set off against BOTH Short-Term Capital Gains (STCG) and Long-Term Capital Gains (LTCG).</li>
        <li><strong>LTCL Restriction:</strong> Long-Term Capital Losses (LTCL) can ONLY be set off against Long-Term Capital Gains (LTCG). They cannot offset STCG.</li>
        <li><strong>8-Year Carry Forward:</strong> Unadjusted capital losses can be carried forward for up to <strong>8 consecutive Assessment Years</strong> provided your ITR (Income Tax Return) is filed on or before the due date.</li>
      </ol>

      <h2>5. Python Automation Code: Capital Gains & Tax Loss Harvesting Analyzer</h2>
      <p>Below is a Python script using Pandas to analyze tax liability from your Zerodha, Groww, or Upstox P&L trade history and detect tax loss harvesting opportunities:</p>

      <pre><code>import pandas as pd
import numpy as np

def calculate_capital_gains_and_harvesting(pnl_df):
    """
    pnl_df expected columns: ['Symbol', 'Buy_Date', 'Sell_Date', 'Gain_Loss', 'Holding_Days']
    """
    # Categorize into STCG and LTCG
    stcg_df = pnl_df[pnl_df['Holding_Days'] <= 365]
    ltcg_df = pnl_df[pnl_df['Holding_Days'] > 365]
    
    stcg_gains = stcg_df[stcg_df['Gain_Loss'] > 0]['Gain_Loss'].sum()
    stcg_losses = abs(stcg_df[stcg_df['Gain_Loss'] < 0]['Gain_Loss'].sum())
    
    ltcg_gains = ltcg_df[ltcg_df['Gain_Loss'] > 0]['Gain_Loss'].sum()
    ltcg_losses = abs(ltcg_df[ltcg_df['Gain_Loss'] < 0]['Gain_Loss'].sum())
    
    # Net STCG
    net_stcg = max(0, stcg_gains - stcg_losses)
    stcg_tax = net_stcg * 0.20
    
    # Net LTCG with ₹1.25 Lakh exemption
    net_ltcg = max(0, ltcg_gains - ltcg_losses - 125000)
    ltcg_tax = net_ltcg * 0.125
    
    total_tax_estimate = stcg_tax + ltcg_tax
    
    print(f"--- CAPITAL GAINS TAX SUMMARY (FY 2025-26) ---")
    print(f"Net Realized STCG: ₹{net_stcg:,.2f} | Estimated STCG Tax (20%): ₹{stcg_tax:,.2f}")
    print(f"Net Realized LTCG: ₹{net_ltcg:,.2f} | Estimated LTCG Tax (12.5%): ₹{ltcg_tax:,.2f}")
    print(f"Total Tax Liability: ₹{total_tax_estimate:,.2f}")
    
    return {
        'stcg_tax': stcg_tax,
        'ltcg_tax': ltcg_tax,
        'total_tax': total_tax_estimate
    }

# Example Usage:
# df_pnl = pd.read_csv('zerodha_tax_pnl_2026.csv')
# calculate_capital_gains_and_harvesting(df_pnl)
</code></pre>

      <h2>6. Practical Checklist Before Filing Your ITR-2 or ITR-3</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li>Download official <strong>Tax P&L Statements</strong> directly from your broker dashboard (Zerodha Console, Groww Tax Report, Upstox Reports).</li>
        <li>Verify Annual Information Statement (AIS) and Form 26AS on the Income Tax e-filing portal to cross-check reported dividend income and STT transactions.</li>
        <li>Ensure all intraday trading transactions are reported under Business Income (ITR-3) rather than Capital Gains (ITR-2).</li>
      </ul>
    `,
    faqs: [
      {
        question: "What is the annual LTCG tax exemption limit on equity shares in India?",
        answer: "Long-Term Capital Gains on equity shares and equity mutual funds are exempt up to ₹1.25 Lakhs per financial year. Realized LTCG above ₹1.25 Lakhs is taxed at 12.5%."
      },
      {
        question: "Can Short-Term Capital Losses (STCL) be offset against Long-Term Capital Gains (LTCG)?",
        answer: "Yes, Short-Term Capital Losses can be set off against both STCG and LTCG. However, Long-Term Capital Losses (LTCL) can only be set off against LTCG."
      }
    ],
    relatedArticles: [
      { title: "SEBI New Index Derivatives & Algo Rules 2026", slug: "sebi-new-index-derivatives-algo-rules-2026-impact-guide" },
      { title: "Demystifying Price-to-Earnings (P/E) Ratio", slug: "demystifying-price-to-earnings-pe-ratio" }
    ],
    relatedTools: [
      { name: "CAGR Calculator", slug: "cagr-calculator" },
      { name: "SIP Calculator", slug: "sip-calculator" }
    ],
    sources: [
      "Income Tax Department of India, Tax Rates & Capital Gains Guidelines FY 2025-26.",
      "Union Budget Equity Capital Gains Tax Notification, Ministry of Finance, Govt of India."
    ]
  },

  // 18. CPR TRADING STRATEGY
  {
    slug: "cpr-trading-strategy-nifty-banknifty-intraday-guide",
    title: "CPR (Central Pivot Range) Trading Strategy: Nifty 50 & BankNifty Intraday Reversal Setup",
    category: "Technical Analysis",
    categorySlug: "technical-analysis",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-10-04",
    updatedDate: "2026-10-04",
    readTime: "12 min read",
    shortAnswer: "Central Pivot Range (CPR) is a technical indicator derived from high, low, and close prices of the previous trading day. A narrow CPR indicates a high-probability trending breakout day, while a wide CPR signals a sideways range-bound market for Nifty 50 and BankNifty intraday trading.",
    contentHtml: `
      <h2>1. What is Central Pivot Range (CPR)?</h2>
      <p>Central Pivot Range (CPR) is one of the most powerful leading intraday indicators used by professional Indian traders. Unlike lagging indicators like moving averages, CPR calculates static support and resistance levels before the market opens.</p>
      
      <h2>2. CPR Calculation Formulas</h2>
      <div class="math-card p-4 my-4 rounded font-mono text-cyan-400">
        Pivot (P) = ( High + Low + Close ) / 3<br>
        Bottom Central Pivot (BC) = ( High + Low ) / 2<br>
        Top Central Pivot (TC) = ( Pivot - BC ) + Pivot
      </div>

      <h2>3. The 3 Core CPR Intraday Patterns</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Narrow CPR:</strong> Indicates low volatility on the previous day. Expect a strong directional breakout or trending move in Nifty or BankNifty.</li>
        <li><strong>Wide CPR:</strong> Indicates high volatility on the previous day. Expect prices to oscillate within the range, creating ideal setups for option sellers.</li>
        <li><strong>Virgin CPR:</strong> A CPR range where price does not touch or cross during the entire trading session. Acts as strong support/resistance in subsequent sessions.</li>
      </ul>

      <h2>4. Python Code: Automated CPR Calculator</h2>
      <pre><code>def calculate_cpr(high, low, close):
    pivot = (high + low + close) / 3.0
    bc = (high + low) / 2.0
    tc = (pivot - bc) + pivot
    
    # Ensure TC is top and BC is bottom
    top_pivot = max(tc, bc)
    bottom_pivot = min(tc, bc)
    
    width_pct = ((top_pivot - bottom_pivot) / pivot) * 100
    cpr_type = "Narrow" if width_pct < 0.25 else "Wide"
    
    return {
        'Pivot': round(pivot, 2),
        'TC': round(top_pivot, 2),
        'BC': round(bottom_pivot, 2),
        'Width_Pct': round(width_pct, 4),
        'Type': cpr_type
    }

# Example Nifty Previous Day: High=24800, Low=24600, Close=24750
print(calculate_cpr(24800, 24600, 24750))
</code></pre>
    `,
    faqs: [
      {
        question: "How do you trade a Narrow CPR in BankNifty?",
        answer: "When BankNifty opens above a Narrow CPR, wait for a 5-minute candle to close above TC and enter long with a stop-loss below BC."
      },
      {
        question: "What is a Virgin CPR in stock trading?",
        answer: "A Virgin CPR occurs when price never touches the CPR boundaries during the day. It acts as a powerful magnetic support/resistance zone for future sessions."
      }
    ],
    relatedArticles: [
      { title: "Swing Trading Setups & Price Action", slug: "swing-trading-setups-price-action-risk-reward-guide" },
      { title: "Relative Strength Index (RSI) Guide", slug: "relative-strength-index-rsi-guide" }
    ],
    relatedTools: [
      { name: "CPR Calculator", slug: "cpr-calculator" },
      { name: "Risk/Reward Calculator", slug: "risk-reward-calculator" }
    ],
    sources: [
      "Person, John L. Candlestick and Pivot Point Trading Triggers. Wiley, 2020.",
      "NSE India Historical Daily Bhavcopy Data."
    ]
  },

  // 19. BROKERAGE CHARGES COMPARISON 2026
  {
    slug: "zerodha-vs-groww-vs-angel-one-brokerage-charges-2026-comparison",
    title: "Zerodha vs Groww vs Angel One Brokerage Charges 2026: F&O, Delivery & Hidden Fee Comparison",
    category: "Daily Market Updates",
    categorySlug: "daily-market-updates",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-10-04",
    updatedDate: "2026-10-04",
    readTime: "11 min read",
    shortAnswer: "Zerodha, Groww, and Angel One are India's top discount brokers. While equity delivery is ₹0 brokerage on Zerodha and Angel One, intraday and F&O trades incur flat ₹20 per executed order across all three brokers. Understanding STT, GST, and SEBI turnover charges is critical for calculating net trading profitability.",
    contentHtml: `
      <h2>1. Brokerage & Fee Structure Overview for 2026</h2>
      <p>Selecting the right discount broker impacts your net trading returns, especially for high-frequency intraday and options traders. Below is a detailed breakdown of transaction costs across Zerodha, Groww, and Angel One.</p>
      
      <h2>2. Detailed Brokerage Comparison Matrix</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Equity Delivery:</strong> Zerodha (₹0), Angel One (₹0), Groww (₹20 or 0.05% whichever is lower).</li>
        <li><strong>Intraday Equity:</strong> Flat ₹20 or 0.03% across Zerodha, Groww, and Angel One.</li>
        <li><strong>Futures & Options (F&O):</strong> Flat ₹20 per executed order across all three discount brokers.</li>
        <li><strong>Account Opening Fee:</strong> Zerodha (₹200 for Trading+Demat), Groww (₹0), Angel One (₹0).</li>
        <li><strong>Demat AMC (Annual Maintenance Charge):</strong> Zerodha (₹300/year), Groww (₹0), Angel One (₹240/year waived for 1st year).</li>
      </ul>

      <h2>3. Regulatory Taxes & Government Levies Breakdown</h2>
      <p>In addition to broker fees, traders pay mandatory government taxes:</p>
      <div class="math-card p-4 my-4 rounded font-mono text-cyan-400">
        Total Cost = Brokerage + STT (0.1% Delivery / 0.0625% Options Sell) + Exchange Charges + GST (18%) + SEBI Charges + Stamp Duty
      </div>

      <h2>4. Python Code: Total Brokerage & Tax Calculator</h2>
      <pre><code>def calculate_trade_charges(turnover, trade_type="options_sell", brokerage=20):
    stt = turnover * 0.000625 if trade_type == "options_sell" else turnover * 0.001
    exc_charge = turnover * 0.0005
    gst = (brokerage + exc_charge) * 0.18
    sebi_fee = turnover * 0.000001
    
    total_charges = brokerage + stt + exc_charge + gst + sebi_fee
    return round(total_charges, 2)

# Example: Selling ₹5,00,000 worth of Nifty Options
print("Total Tax & Fee:", calculate_trade_charges(500000, "options_sell"))
</code></pre>
    `,
    faqs: [
      {
        question: "Which broker is cheapest for options trading in India?",
        answer: "Zerodha, Groww, and Angel One all charge a flat ₹20 per order for equity options trading."
      },
      {
        question: "What is the STT charge on option buying vs option selling in India?",
        answer: "Option buying incurs 0% STT on premium, whereas Option selling (shorting) incurs 0.0625% STT on the premium turnover."
      }
    ],
    relatedArticles: [
      { title: "Capital Gains Tax Rules 2026 & Tax Harvesting", slug: "capital-gains-tax-stcg-ltcg-rules-2026-tax-harvesting-guide" },
      { title: "SEBI New Index Derivatives & Algo Rules 2026", slug: "sebi-new-index-derivatives-algo-rules-2026-impact-guide" }
    ],
    relatedTools: [
      { name: "Option Payoff Calculator", slug: "option-payoff-calculator" },
      { name: "Risk/Reward Calculator", slug: "risk-reward-calculator" }
    ],
    sources: [
      "NSE India Schedule of Charges & Government Stamp Duty Rates, 2026.",
      "Brokerage Tariff Sheets: Zerodha Broking Ltd, Groww (Nextbillion Technology), Angel One Ltd."
    ]
  },

  // 20. OPTIONS OPEN INTEREST & PCR ANALYSIS
  {
    slug: "options-open-interest-pcr-ratio-analysis-smart-money-guide",
    title: "Options Open Interest (OI) & Put Call Ratio (PCR) Analysis: Spot Institutional Smart Money",
    category: "Options Education",
    categorySlug: "options-education",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-10-04",
    updatedDate: "2026-10-04",
    readTime: "15 min read",
    shortAnswer: "Open Interest (OI) represents the total number of outstanding derivative contracts. Analyzing Put-Call Ratio (PCR) alongside Change in Open Interest helps traders identify institutional support/resistance levels and predict short-term trend reversals in Nifty and BankNifty.",
    contentHtml: `
      <h2>1. Understanding Open Interest (OI) vs Volume</h2>
      <p>While volume measures the total number of contracts traded during a session, Open Interest measures active open contracts held overnight by traders and institutional option writers.</p>

      <h2>2. Interpretation of Price vs Open Interest (OI) Signals</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Long Buildup:</strong> Price Increases + Open Interest Increases. Strong bullish trend.</li>
        <li><strong>Short Buildup:</strong> Price Decreases + Open Interest Increases. Strong bearish pressure.</li>
        <li><strong>Short Covering:</strong> Price Increases + Open Interest Decreases. Short sellers exiting, bullish bounce.</li>
        <li><strong>Long Unwinding:</strong> Price Decreases + Open Interest Decreases. Long holders taking profit, short-term pullback.</li>
      </ul>

      <h2>3. Put-Call Ratio (PCR) Trading Rules</h2>
      <div class="math-card p-4 my-4 rounded font-mono text-cyan-400">
        Put Call Ratio (PCR) = Total Put Open Interest / Total Call Open Interest
      </div>
      <p>PCR > 1.3 indicates an oversold/bullish signal (heavy put writing support), while PCR < 0.7 signals an overbought/bearish market condition.</p>

      <h2>4. Python Code: Real-Time PCR & OI Analyzer</h2>
      <pre><code>def analyze_pcr_sentiment(total_put_oi, total_call_oi):
    pcr = total_put_oi / float(total_call_oi)
    
    if pcr > 1.3:
        sentiment = "Extremely Bullish / Oversold (Put Writer Support)"
    elif pcr < 0.7:
        sentiment = "Extremely Bearish / Overbought (Call Resistance)"
    else:
        sentiment = "Neutral / Range-Bound"
        
    return round(pcr, 3), sentiment

print(analyze_pcr_sentiment(12500000, 8500000))
</code></pre>
    `,
    faqs: [
      {
        question: "What does high Call Open Interest at a strike price mean?",
        answer: "A strike price with the highest Call Open Interest acts as a major resistance level because institutional option writers defend that level."
      },
      {
        question: "How often is NSE Open Interest data updated?",
        answer: "NSE publishes snapshot Open Interest data every 3 minutes for public feeds and real-time tick data for direct API feeds."
      }
    ],
    relatedArticles: [
      { title: "Understanding Options Greeks Guide", slug: "understanding-options-greeks-delta-theta-vega" },
      { title: "SEBI New Index Derivatives Rules 2026", slug: "sebi-new-index-derivatives-algo-rules-2026-impact-guide" }
    ],
    relatedTools: [
      { name: "Option Payoff Calculator", slug: "option-payoff-calculator" },
      { name: "RSI Calculator", slug: "rsi-calculator" }
    ],
    sources: [
      "Hull, John C. Options, Futures, and Other Derivatives. Pearson, 2021.",
      "NSE India Derivative Open Interest & Option Chain Analytics."
    ]
  },

  // 21. TOP CANDLESTICK PATTERNS FOR INTRADAY
  {
    slug: "best-candlestick-patterns-intraday-trading-indian-stocks",
    title: "Top 5 Candlestick Patterns for Intraday Trading in Indian Stock Market",
    category: "Technical Analysis",
    categorySlug: "technical-analysis",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-10-04",
    updatedDate: "2026-10-04",
    readTime: "10 min read",
    shortAnswer: "Mastering high-probability intraday candlestick patterns like Bullish Engulfing, Hammer, Shooting Star, Morning Star, and Doji combined with volume confirmation boosts win-rates for day trading Indian equities and index futures.",
    contentHtml: `
      <h2>1. Importance of Price Action & Candlestick Patterns</h2>
      <p>Candlestick charts display the emotional battle between buyers and sellers over specific timeframes. Intraday day traders use 5-minute and 15-minute timeframe candles to spot immediate reversal and continuation setups.</p>

      <h2>2. Top 5 Intraday Candlestick Patterns</h2>
      <ol class="list-decimal pl-6 space-y-2">
        <li><strong>Hammer (Bullish Reversal):</strong> Forms after a downtrend with a long lower shadow (at least 2x body length). Shows buyers aggressively pushing back.</li>
        <li><strong>Shooting Star (Bearish Reversal):</strong> Forms at the top of an uptrend with a long upper shadow. Signals heavy rejection from sellers.</li>
        <li><strong>Bullish Engulfing:</strong> A large green candle completely covers the body of the previous red candle, indicating strong momentum shift.</li>
        <li><strong>Bearish Engulfing:</strong> A large red candle completely engulfs the prior green candle, signaling institutional distribution.</li>
        <li><strong>Doji / Spinning Top:</strong> Small real body indicating indecision between bulls and bears. A breakout beyond Doji high/low defines direction.</li>
      </ol>

      <h2>3. Python Code: Automated Candlestick Pattern Detector</h2>
      <pre><code>def detect_hammer(open_p, high, low, close):
    body = abs(close - open_p)
    lower_wick = min(open_p, close) - low
    upper_wick = high - max(open_p, close)
    
    is_hammer = (lower_wick >= 2 * body) and (upper_wick <= body * 0.5)
    return is_hammer

# Example Candle: Open=100, High=101, Low=90, Close=99
print("Is Hammer Pattern:", detect_hammer(100, 101, 90, 99))
</code></pre>
    `,
    faqs: [
      {
        question: "Which timeframe is best for intraday candlestick patterns?",
        answer: "The 5-minute timeframe is ideal for entry timing, while the 15-minute timeframe provides cleaner trend validation."
      },
      {
        question: "Should you trade candlestick patterns without volume?",
        answer: "No. Always demand volume confirmation; breakouts accompanied by 1.5x average volume have significantly higher success rates."
      }
    ],
    relatedArticles: [
      { title: "CPR Trading Strategy Guide", slug: "cpr-trading-strategy-nifty-banknifty-intraday-guide" },
      { title: "Swing Trading Setups & Price Action", slug: "swing-trading-setups-price-action-risk-reward-guide" }
    ],
    relatedTools: [
      { name: "Candlestick Tool", slug: "candlestick-tool" },
      { name: "Risk/Reward Calculator", slug: "risk-reward-calculator" }
    ],
    sources: [
      "Nison, Steve. Japanese Candlestick Charting Techniques. New York Institute of Finance, 2001."
    ]
  },

  // 22. PYTHON OPTION CHAIN SCREENER
  {
    slug: "python-option-chain-screener-nse-india-api-guide",
    title: "How to Build a Python NSE Option Chain Scanner for Live Nifty & BankNifty Data",
    category: "Python for Trading",
    categorySlug: "python-for-trading",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-10-04",
    updatedDate: "2026-10-04",
    readTime: "16 min read",
    shortAnswer: "Learn how to fetch live option chain JSON data from NSE India using Python requests, extract Call/Put Open Interest, calculate Max Pain, and filter strike prices for algorithmic trading strategies.",
    contentHtml: `
      <h2>1. Introduction to Automated Option Chain Data Fetching</h2>
      <p>Tracking live Option Chain metrics gives traders an edge in identifying institutional support and resistance zones. Python allows you to automate JSON parsing from exchange endpoints.</p>

      <h2>2. Python Script: Fetch & Parse NSE Option Chain</h2>
      <pre><code>import requests
import pandas as pd

def fetch_nse_option_chain(symbol="NIFTY"):
    url = f"https://www.nseindia.com/api/option-chain-indices?symbol={symbol}"
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
    }
    
    session = requests.Session()
    session.get("https://www.nseindia.com", headers=headers)
    response = session.get(url, headers=headers)
    
    data = response.json()
    records = data['records']['data']
    
    parsed = []
    for item in records:
        strike = item.get('strikePrice')
        ce = item.get('CE', {})
        pe = item.get('PE', {})
        
        parsed.append({
            'Strike': strike,
            'CE_OI': ce.get('openInterest', 0),
            'CE_IV': ce.get('impliedVolatility', 0),
            'PE_OI': pe.get('openInterest', 0),
            'PE_IV': pe.get('impliedVolatility', 0)
        })
        
    return pd.DataFrame(parsed)

# df_oc = fetch_nse_option_chain("NIFTY")
# print(df_oc.head())
</code></pre>
    `,
    faqs: [
      {
        question: "Why does requests.get() fail on NSE India website?",
        answer: "NSE requires valid browser session cookies and headers. First visit the home page using requests.Session() before requesting API endpoints."
      }
    ],
    relatedArticles: [
      { title: "Options Open Interest & PCR Analysis", slug: "options-open-interest-pcr-ratio-analysis-smart-money-guide" }
    ],
    relatedTools: [
      { name: "Option Payoff Calculator", slug: "option-payoff-calculator" }
    ],
    sources: [
      "NSE India Official Developer & Public API Reference."
    ]
  },

  // 23. SIP VS LUMPSUM INVESTING
  {
    slug: "sip-vs-lumpsum-investing-xirr-vs-cagr-guide",
    title: "SIP vs Lumpsum Mutual Fund Investing 2026: XIRR vs CAGR Performance & Wealth Calculation",
    category: "Stock Market Basics",
    categorySlug: "stock-market-basics",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-10-04",
    updatedDate: "2026-10-04",
    readTime: "11 min read",
    shortAnswer: "SIP (Systematic Investment Plan) averages purchase costs during market downturns (Rupee Cost Averaging), making it ideal for volatile markets. Lumpsum investing yields higher returns when entering at market bottoms. XIRR is the correct metric for SIP returns, whereas CAGR measures single lumpsum returns.",
    contentHtml: `
      <h2>1. SIP vs Lumpsum: Core Comparison</h2>
      <p>Both SIP and Lumpsum strategies help investors build wealth through equity mutual funds and index funds. Understanding when to deploy cash versus staggered monthly investments optimizes portfolio risk.</p>

      <h2>2. Understanding CAGR vs XIRR Return Metrics</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>CAGR (Compound Annual Growth Rate):</strong> Measures return for single cash flow investments (Lumpsum) over multiple years.</li>
        <li><strong>XIRR (Extended Internal Rate of Return):</strong> Measures real annual return for multiple staggered cash flows (Monthly SIPs).</li>
      </ul>

      <h2>3. Python Code: SIP Wealth & Future Value Calculator</h2>
      <pre><code>def calculate_sip_future_value(monthly_amt, annual_rate_pct, years):
    i = (annual_rate_pct / 100.0) / 12.0
    n = years * 12
    fv = monthly_amt * (((1 + i)**n - 1) / i) * (1 + i)
    total_invested = monthly_amt * n
    wealth_gain = fv - total_invested
    
    return round(total_invested, 2), round(fv, 2), round(wealth_gain, 2)

print("SIP Output (10k/mo, 12%, 15yrs):", calculate_sip_future_value(10000, 12, 15))
</code></pre>
    `,
    faqs: [
      {
        question: "Is XIRR higher than CAGR in a bull market?",
        answer: "Yes, because recent cash flows in a bull market experience quick compounding, elevating XIRR returns."
      }
    ],
    relatedArticles: [
      { title: "Capital Gains Tax Rules 2026 & Tax Harvesting", slug: "capital-gains-tax-stcg-ltcg-rules-2026-tax-harvesting-guide" }
    ],
    relatedTools: [
      { name: "SIP Calculator", slug: "sip-calculator" },
      { name: "CAGR Calculator", slug: "cagr-calculator" }
    ],
    sources: [
      "Bogle, John C. The Little Book of Common Sense Investing. Wiley, 2017."
    ]
  },

  // 24. SUPERTREND INDICATOR STRATEGY
  {
    slug: "supertrend-indicator-strategy-tradingview-intraday-guide",
    title: "Supertrend Indicator Strategy on TradingView: Multi-Timeframe Intraday & Swing Rules",
    category: "Technical Analysis",
    categorySlug: "technical-analysis",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-10-04",
    updatedDate: "2026-10-04",
    readTime: "12 min read",
    shortAnswer: "The Supertrend indicator is a trend-following overlay based on Average True Range (ATR). Combining Supertrend (10, 3) with a 200 EMA trend filter eliminates whipsaws in intraday and swing trading.",
    contentHtml: `
      <h2>1. How the Supertrend Indicator Works</h2>
      <p>Supertrend constructs dynamic trailing stop-loss lines above or below price based on ATR volatility multiplier settings.</p>

      <h2>2. Python Code: Supertrend Calculation</h2>
      <pre><code>import pandas as pd
import numpy as np

def calculate_supertrend(df, period=10, multiplier=3):
    df['ATR'] = df['High'].comb(df['Low'], max) - df['Low'] # simplified ATR
    hl2 = (df['High'] + df['Low']) / 2.0
    df['Upperband'] = hl2 + (multiplier * df['ATR'])
    df['Lowerband'] = hl2 - (multiplier * df['ATR'])
    return df
</code></pre>
    `,
    faqs: [
      {
        question: "What are the best Supertrend settings for intraday trading?",
        answer: "Period 10 and Multiplier 3 (or 7, 2 for scalping) are widely used for intraday 5-minute charts."
      }
    ],
    relatedArticles: [
      { title: "Chartink Screener Formulas & Volume Scanners", slug: "chartink-screener-formulas-volume-breakout-guide" }
    ],
    relatedTools: [
      { name: "RSI Calculator", slug: "rsi-calculator" }
    ],
    sources: [
      "Kaufman, Perry J. Trading Systems and Methods. Wiley, 2019."
    ]
  },

  // 25. READ BALANCE SHEETS OF INDIAN STOCKS
  {
    slug: "how-to-read-balance-sheet-cash-flow-statement-indian-stocks",
    title: "How to Read Balance Sheets & Cash Flow Statements of Indian Public Companies",
    category: "Fundamental Analysis",
    categorySlug: "fundamental-analysis",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-10-04",
    updatedDate: "2026-10-04",
    readTime: "14 min read",
    shortAnswer: "Analyzing balance sheets and cash flow statements reveals a company's financial solvency, debt burdens, Return on Equity (ROE), and Operating Cash Flow (CFO). Ensuring CFO > Net Profit filters out accounting manipulation.",
    contentHtml: `
      <h2>1. Understanding the 3 Main Financial Statements</h2>
      <p>Fundamental analysis requires evaluating the Income Statement, Balance Sheet, and Cash Flow Statement to confirm financial strength before investing long-term.</p>
    `,
    faqs: [
      {
        question: "Why is Operating Cash Flow (CFO) more important than Net Profit?",
        answer: "Net profit can be manipulated through accrual accounting, but CFO measures actual cash collected from core business operations."
      }
    ],
    relatedArticles: [
      { title: "Demystifying Price-to-Earnings (P/E) Ratio", slug: "demystifying-price-to-earnings-pe-ratio" }
    ],
    relatedTools: [
      { name: "CAGR Calculator", slug: "cagr-calculator" }
    ],
    sources: [
      "Damodaran, Aswath. Investment Valuation. Wiley, 2012."
    ]
  },

  // 26. OPTION BUYING VS OPTION SELLING
  {
    slug: "option-buying-vs-option-selling-risk-reward-winrate-guide",
    title: "Option Buying vs Option Selling in Indian Stock Market: Win Rate, Risk & Capital Analysis",
    category: "Options Education",
    categorySlug: "options-education",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-10-04",
    updatedDate: "2026-10-04",
    readTime: "13 min read",
    shortAnswer: "Option buyers have limited risk and unlimited reward with lower win rates (~33%), whereas Option sellers have high win rates (~67%) backed by Theta time decay, but require higher margin capital and strict risk management.",
    contentHtml: `
      <h2>1. Structural Dynamics: Buyer vs Seller</h2>
      <p>Option buyers purchase asymmetric rights, whereas option sellers collect upfront premium income and profit from time decay.</p>
    `,
    faqs: [
      {
        question: "Which is better for small capital accounts: Option buying or selling?",
        answer: "Option buying requires low capital (e.g. ₹5,000), but Option selling requires ₹1 Lakh+ margin per lot unless defined-risk spreads (Hedges) are deployed."
      }
    ],
    relatedArticles: [
      { title: "Understanding Options Greeks Guide", slug: "understanding-options-greeks-delta-theta-vega" }
    ],
    relatedTools: [
      { name: "Option Payoff Calculator", slug: "option-payoff-calculator" }
    ],
    sources: [
      "Natenberg, Sheldon. Option Volatility and Pricing. McGraw-Hill, 2014."
    ]
  },

  // 27. AUTOMATED BACKTESTING IN PYTHON
  {
    slug: "python-automated-backtesting-backtrader-vectorbt-nse-guide",
    title: "Automated Backtesting in Python using Backtrader & Vectorbt for NSE Equity & Futures Data",
    category: "Algo Trading",
    categorySlug: "algo-trading",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-10-04",
    updatedDate: "2026-10-04",
    readTime: "15 min read",
    shortAnswer: "Backtesting algorithm strategies in Python using Vectorbt or Backtrader allows quantitative traders to evaluate Sharpe Ratios, maximum drawdown, win rates, and transaction costs on historical NSE market data.",
    contentHtml: `
      <h2>1. Introduction to Vectorbt Vectorized Backtesting</h2>
      <p>Vectorbt enables high-speed vectorized strategy simulation across thousands of stocks simultaneously.</p>

      <h2>2. Python Code: Vectorbt Moving Average Crossover</h2>
      <pre><code>import vectorbt as vbt

# Fast SMA 20 / Slow SMA 50 Crossover
fast_ma = vbt.MA.run(price, 20)
slow_ma = vbt.MA.run(price, 50)

entries = fast_ma.ma_crossed_above(slow_ma)
exits = fast_ma.ma_crossed_below(slow_ma)

portfolio = vbt.Portfolio.from_signals(price, entries, exits, init_cash=100000)
print(portfolio.stats())
</code></pre>
    `,
    faqs: [
      {
        question: "What is look-ahead bias in algorithmic backtesting?",
        answer: "Look-ahead bias occurs when a strategy uses future price data (e.g. today's close) to execute a trade in historical simulation at open."
      }
    ],
    relatedArticles: [
      { title: "SEBI New Index Derivatives & Algo Rules 2026", slug: "sebi-new-index-derivatives-algo-rules-2026-impact-guide" }
    ],
    relatedTools: [
      { name: "Risk/Reward Calculator", slug: "risk-reward-calculator" }
    ],
    sources: [
      "Vectorbt Documentation & Python Algorithmic Trading Frameworks, 2025."
    ]
  }
];
