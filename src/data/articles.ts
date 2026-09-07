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
  }
];
