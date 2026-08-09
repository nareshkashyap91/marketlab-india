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
  // 1. RSI PILLAR & TOPIC CLUSTER
  {
    slug: "relative-strength-index-rsi-guide",
    title: "Relative Strength Index (RSI): The Definitive Educational Guide",
    category: "Technical Analysis",
    categorySlug: "technical-analysis",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-01-15",
    updatedDate: "2026-08-01",
    readTime: "12 min read",
    shortAnswer: "The Relative Strength Index (RSI) is a bounded momentum oscillator developed by J. Welles Wilder Jr. in 1978. It measures the speed and magnitude of recent price changes on a scale of 0 to 100 to evaluate overbought (70+) or oversold (30-) conditions in financial assets.",
    contentHtml: `
      <h2>1. Introduction to the Relative Strength Index</h2>
      <p>The <strong>Relative Strength Index (RSI)</strong> is one of the most widely referenced technical indicators in financial market education. Unlike relative strength comparisons between two separate stocks, RSI measures the internal strength of a single security against its own historical price performance over a specified lookback period (traditionally 14 periods).</p>

      <h2>2. Mathematical Formula & Step-by-Step Calculation</h2>
      <p>RSI is calculated using a two-step mathematical process. First, we compute the Relative Strength (RS), which is the ratio of average price gains to average price losses over the lookback period \(N\):</p>
      
      <div class="math-card p-4 my-4 rounded">
        <p class="font-mono text-cyan-400">RS = Average Gain / Average Loss</p>
        <p class="font-mono text-emerald-400 mt-2">RSI = 100 - [ 100 / (1 + RS) ]</p>
      </div>

      <h3>Step-by-Step Wilder's Smoothing Method:</h3>
      <ol class="list-decimal pl-6 space-y-2">
        <li>Calculate price change for each period: \(\\Delta P = P_t - P_{t-1}\).</li>
        <li>Separate changes into positive gains (\(G\)) and negative losses (\(L\)).</li>
        <li>For the initial 14 periods, calculate the simple arithmetic average of gains and losses.</li>
        <li>For subsequent periods, apply Welles Wilder's exponential smoothing filter:
          <br><code>AvgGain_t = (AvgGain_{t-1} * 13 + CurrentGain) / 14</code>
          <br><code>AvgLoss_t = (AvgLoss_{t-1} * 13 + CurrentLoss) / 14</code>
        </li>
        <li>Compute RS and normalize to a 0-100 scale using the RSI equation.</li>
      </ol>

      <h2>3. Understanding RSI Thresholds & Market Dynamics</h2>
      <p>RSI values oscillate strictly between 0 and 100. Standard interpretation establishes key reference levels:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Overbought Zone (&ge; 70):</strong> Indicates intense buying momentum where price has risen rapidly relative to historical gains. It warns that buyers may be overextended.</li>
        <li><strong>Oversold Zone (&le; 30):</strong> Indicates heavy selling pressure. It indicates momentum may be hitting extreme downward exhaustion.</li>
        <li><strong>Centerline (50):</strong> Acts as a trend filter. RSI &gt; 50 signals bullish momentum bias, while RSI &lt; 50 signals bearish bias.</li>
      </ul>

      <h2>4. RSI Divergence Analysis (Bullish vs. Bearish)</h2>
      <p>Divergence occurs when price action and RSI oscillator movement disagree, signaling a potential shift in momentum:</p>
      <table class="w-full text-left my-4 border-collapse border border-slate-800">
        <thead>
          <tr class="bg-slate-900 text-cyan-400">
            <th class="p-3 border border-slate-800">Divergence Type</th>
            <th class="p-3 border border-slate-800">Price Action</th>
            <th class="p-3 border border-slate-800">RSI Oscillator</th>
            <th class="p-3 border border-slate-800">Educational Interpretation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3 border border-slate-800 font-semibold text-emerald-400">Regular Bullish Divergence</td>
            <td class="p-3 border border-slate-800">Makes Lower Low (LL)</td>
            <td class="p-3 border border-slate-800">Makes Higher Low (HL)</td>
            <td class="p-3 border border-slate-800">Downward price momentum is weakening despite lower price.</td>
          </tr>
          <tr>
            <td class="p-3 border border-slate-800 font-semibold text-rose-400">Regular Bearish Divergence</td>
            <td class="p-3 border border-slate-800">Makes Higher High (HH)</td>
            <td class="p-3 border border-slate-800">Makes Lower High (LH)</td>
            <td class="p-3 border border-slate-800">Upward buying momentum is slowing despite higher price.</td>
          </tr>
        </tbody>
      </table>

      <h2>5. Limitations & Common Mistakes in Technical Analysis</h2>
      <div class="bg-slate-900 border-l-4 border-amber-500 p-4 my-4 rounded">
        <h4 class="text-amber-400 font-bold mb-1">Critical Educational Disclaimer:</h4>
        <p>1. <strong>Strong Trends Cause Persistent Overbought Readings:</strong> During strong bull trends (e.g. Nifty 50 rallying 2000 points), RSI can remain above 70 for weeks. Selling purely because RSI &ge; 70 in a strong uptrend often leads to premature exit.</p>
        <p class="mt-2">2. <strong>False Signals in Sideways Markets:</strong> In range-bound markets, RSI frequently whipsaws across 50, creating false breakout signals.</p>
      </div>

      <h2>6. Python Code Tutorial: Calculating 14-Period RSI</h2>
      <pre><code>import pandas as pd
import numpy as np

def calculate_rsi(data, period=14):
    # Calculate price differences
    delta = data['Close'].diff()
    
    # Separate gains and losses
    gain = (delta.where(delta > 0, 0))
    loss = (-delta.where(delta < 0, 0))
    
    # Calculate Wilder's Exponential Moving Average
    avg_gain = gain.ewm(alpha=1/period, min_periods=period, adjust=False).mean()
    avg_loss = loss.ewm(alpha=1/period, min_periods=period, adjust=False).mean()
    
    # Calculate Relative Strength (RS)
    rs = avg_gain / avg_loss
    
    # Compute RSI
    rsi = 100 - (100 / (1 + rs))
    return rsi

# Example Usage with Pandas DataFrame
# df['RSI_14'] = calculate_rsi(df)
</code></pre>
    `,
    faqs: [
      {
        question: "What is the standard lookback period for RSI?",
        answer: "The classic default period created by J. Welles Wilder is 14 periods (e.g. 14 days on a daily chart, or 14 minutes on an intraday chart)."
      },
      {
        question: "Does an RSI above 70 mean I should sell immediately?",
        answer: "No. In strong uptrends, RSI can remain in overbought territory (above 70) for extended periods while prices continue rising. Traders look for confirmations such as divergence or trendline breaks."
      },
      {
        question: "How does RSI differ from MACD?",
        answer: "RSI is a bounded oscillator (0 to 100) measuring speed of price movement. MACD is an unbounded indicator measuring the convergence and divergence of two exponential moving averages."
      }
    ],
    relatedArticles: [
      { title: "RSI Divergence: Bullish vs Bearish Patterns", slug: "rsi-divergence-patterns" },
      { title: "Moving Average Crossovers (EMA vs SMA)", slug: "moving-average-crossovers-ema-vs-sma-guide" }
    ],
    relatedTools: [
      { name: "RSI Calculator", slug: "rsi-calculator" },
      { name: "EMA Calculator", slug: "ema-calculator" }
    ],
    sources: [
      "Wilder, J. Welles. New Concepts in Technical Trading Systems. Trend Research, 1978.",
      "Murphy, John J. Technical Analysis of the Financial Markets. New York Institute of Finance, 1999."
    ],
    youtubeVideoId: "dQw4w9WgXcQ"
  },

  // 2. TECHNICAL ANALYSIS 2: MOVING AVERAGE CROSSOVERS
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
    shortAnswer: "Exponential Moving Averages (EMA) assign higher weighting to recent price data, while Simple Moving Averages (SMA) treat all periods equally. Moving Average Crossover strategies (e.g., Golden Cross 50/200 SMA) are cornerstone technical trend filters.",
    contentHtml: `
      <h2>1. The Mathematics of SMA vs EMA</h2>
      <p>Moving averages smooth price noise to reveal underlying trend direction:</p>
      
      <div class="math-card p-4 my-4 rounded">
        <p class="font-mono text-cyan-400">SMA_N = \\frac{\\sum_{i=1}^{N} P_i}{N}</p>
        <p class="font-mono text-emerald-400 mt-2">EMA_t = P_t \\times K + EMA_{t-1} \\times (1 - K), \\quad K = \\frac{2}{N + 1}</p>
      </div>

      <h2>2. The Golden Cross & Death Cross Patterns</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Golden Cross:</strong> Occurs when short-term moving average (e.g. 50-day SMA) crosses above long-term moving average (e.g. 200-day SMA). Signals long-term bullish structural shift.</li>
        <li><strong>Death Cross:</strong> Occurs when 50-day SMA crosses below 200-day SMA. Signals long-term bearish structural weakness.</li>
      </ul>
    `,
    faqs: [
      {
        question: "Why do quants prefer EMA over SMA?",
        answer: "EMA reduces lag by placing exponential weight on recent bar prices, making it faster to react to sharp trend shifts."
      }
    ],
    relatedArticles: [
      { title: "Relative Strength Index (RSI) Guide", slug: "relative-strength-index-rsi-guide" }
    ],
    relatedTools: [
      { name: "EMA Calculator", slug: "ema-calculator" },
      { name: "SMA Calculator", slug: "sma-calculator" }
    ],
    sources: [
      "Murphy, John J. Technical Analysis of the Financial Markets, 1999."
    ]
  },

  // 3. ALGO TRADING: PYTHON VECTORIZED BACKTESTING
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
    shortAnswer: "Vectorized backtesting evaluates trading rules on historical price data using NumPy and Pandas arrays without slow Python for-loops. It measures Sharpe Ratio, Maximum Drawdown, and Cumulative Compound Returns.",
    contentHtml: `
      <h2>1. What is Vectorized Backtesting?</h2>
      <p>Vectorized backtesting executes matrix operations over entire price arrays simultaneously, completing 10 years of Nifty daily backtests in under 10 milliseconds.</p>

      <h2>2. Key Performance Metrics Evaluated</h2>
      <div class="math-card p-4 my-4 rounded">
        <p class="font-mono text-cyan-400">Sharpe Ratio = \\frac{R_p - R_f}{\\sigma_p}</p>
        <p class="font-mono text-emerald-400 mt-2">Max Drawdown = \\frac{\\text{Peak Value} - \\text{Trough Value}}{\\text{Peak Value}}</p>
      </div>

      <h2>3. Complete Python Backtesting Script</h2>
      <pre><code>import pandas as pd
import numpy as np

def backtest_ma_crossover(df, short_window=20, long_window=50):
    df['SMA20'] = df['Close'].rolling(window=short_window).mean()
    df['SMA50'] = df['Close'].rolling(window=long_window).mean()
    
    # Generate Signal: 1 for Long, 0 for Cash
    df['Signal'] = np.where(df['SMA20'] > df['SMA50'], 1, 0)
    
    # Calculate Strategy Daily Returns
    df['Market_Returns'] = df['Close'].pct_change()
    df['Strategy_Returns'] = df['Market_Returns'] * df['Signal'].shift(1)
    
    # Cumulative Compound Growth
    df['Cumulative_Market'] = (1 + df['Market_Returns']).cumprod()
    df['Cumulative_Strategy'] = (1 + df['Strategy_Returns']).cumprod()
    
    return df
</code></pre>
    `,
    faqs: [
      {
        question: "What is Look-Ahead Bias in Backtesting?",
        answer: "Look-Ahead Bias occurs when future price data is accidentally leaked into current bar trade decisions, inflating backtest performance."
      }
    ],
    relatedArticles: [
      { title: "Moving Average Crossovers Guide", slug: "moving-average-crossovers-ema-vs-sma-guide" }
    ],
    relatedTools: [
      { name: "Backtesting Template", slug: "backtesting-template" },
      { name: "Drawdown Calculator", slug: "drawdown-calculator" }
    ],
    sources: [
      "Clenow, Andreas F. Trading Evolved: Anyone Can Build Killer Trading Strategies in Python, 2019."
    ]
  },

  // 4. STOCK MARKET BASICS 1: NSE & BSE FRAMEWORK
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
    shortAnswer: "The National Stock Exchange (NSE) and Bombay Stock Exchange (BSE) form the primary trading framework in India. Orders executed via stockbrokers are cleared and settled by clearing corporations under SEBI regulatory oversight.",
    contentHtml: `
      <h2>1. Introduction to Indian Stock Exchanges</h2>
      <p>India features two major national stock exchanges: the <strong>National Stock Exchange (NSE)</strong> established in 1992 (pioneering electronic screen-based trading) and the <strong>Bombay Stock Exchange (BSE)</strong> established in 1875 (Asia's oldest stock exchange).</p>
    `,
    faqs: [
      {
        question: "What is the difference between NSE and BSE?",
        answer: "NSE is India's largest exchange by trading volume and derivatives market share, benchmarked by the Nifty 50. BSE is the oldest exchange with over 5,000 listed companies, benchmarked by the Sensex."
      }
    ],
    relatedArticles: [
      { title: "Demat & Trading Account Basics", slug: "demat-and-trading-account-basics-guide" }
    ],
    relatedTools: [
      { name: "Risk/Reward Calculator", slug: "risk-reward-calculator" }
    ],
    sources: [
      "Securities and Exchange Board of India (SEBI). Market Masterclasses, 2024."
    ]
  },

  // 5. STOCK MARKET BASICS 2: DEMAT ACCOUNT BASICS
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
    shortAnswer: "A Trading Account executes buy/sell orders on stock exchanges, while a Demat (Dematerialized) Account holds securities in electronic format. NSDL and CDSL act as central depositories safeguarding Indian investor assets.",
    contentHtml: `
      <h2>1. The Architecture of Stock Trading Accounts</h2>
      <p>To participate in Indian equity markets, an investor requires a 3-in-1 account ecosystem: Bank, Trading, and Demat account.</p>
    `,
    faqs: [
      {
        question: "Is my share safe in a Demat account if my stockbroker goes bankrupt?",
        answer: "Yes! Shares are held directly with central depositories (NSDL or CDSL), not with the stockbroker."
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

  // 6. STOCK MARKET BASICS 3: MARKET ORDER TYPES
  {
    slug: "market-order-types-limit-stop-loss-gtt-guide",
    title: "Market Order Types Explained: Market, Limit, Stop-Loss (SL-M), & GTT Orders",
    category: "Stock Market Basics",
    categorySlug: "stock-market-basics",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-08-09",
    updatedDate: "2026-08-09",
    readTime: "11 min read",
    shortAnswer: "Stock exchange order types determine price execution parameters. Market orders execute immediately at current bid/ask price, Limit orders execute only at specified price or better, while Stop-Loss (SL) and GTT orders automate risk management.",
    contentHtml: `
      <h2>1. The Four Core Order Types in Equity Trading</h2>
      <p>When placing an order on NSE or BSE, choosing the correct order type protects traders from execution slippage and unintended losses.</p>
    `,
    faqs: [
      {
        question: "What is execution slippage in Market orders?",
        answer: "Slippage is the difference between expected price when placing a market order and actual executed price."
      }
    ],
    relatedArticles: [
      { title: "NSE & BSE Stock Exchange Framework", slug: "nse-and-bse-stock-exchange-framework-guide" }
    ],
    relatedTools: [
      { name: "Risk/Reward Calculator", slug: "risk-reward-calculator" }
    ],
    sources: [
      "NSE Order Execution Protocols, 2024."
    ]
  },

  // 7. STOCK MARKET BASICS 4: MARKET CAPITALIZATION
  {
    slug: "market-capitalization-large-cap-mid-cap-small-cap-guide",
    title: "Market Capitalization Demystified: Large-Cap, Mid-Cap, Small-Cap & SEBI Rules",
    category: "Stock Market Basics",
    categorySlug: "stock-market-basics",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-08-09",
    updatedDate: "2026-08-09",
    readTime: "9 min read",
    shortAnswer: "Market Capitalization measures total rupee market value of a company's outstanding shares. SEBI strictly categorizes Indian listed stocks into Large-Cap (1-100), Mid-Cap (101-250), and Small-Cap (251+) by market cap rank.",
    contentHtml: `
      <h2>1. The Formula for Market Capitalization</h2>
      <p>Market Cap reflects total equity value assigned to a company by market participants.</p>
    `,
    faqs: [
      {
        question: "What is Free-Float Market Capitalization?",
        answer: "Free-Float Market Cap excludes promoter-held shares and counts only shares available for public trading."
      }
    ],
    relatedArticles: [
      { title: "SIP Compounding Matrix", slug: "sip-compounding-matrix-and-wealth-projection-guide" }
    ],
    relatedTools: [
      { name: "P/E Calculator", slug: "pe-calculator" }
    ],
    sources: [
      "SEBI Categorization Circular for Mutual Funds, 2017."
    ]
  },

  // 8. STOCK MARKET BASICS 5: CORPORATE ACTIONS
  {
    slug: "corporate-actions-dividends-stock-splits-bonus-rights-guide",
    title: "Corporate Actions Guide: Dividend Yields, Stock Splits, Bonus Issues & Ex-Date Math",
    category: "Stock Market Basics",
    categorySlug: "stock-market-basics",
    author: "Naresh Kashyap",
    authorRole: "Founder & Chief Quantitative Analyst",
    publishedDate: "2026-08-09",
    updatedDate: "2026-08-09",
    readTime: "10 min read",
    shortAnswer: "Corporate actions are events initiated by a listed company that impact its equity structure or financial payouts. Key corporate actions include cash dividends, stock splits, bonus shares, and rights issues.",
    contentHtml: `
      <h2>1. Understanding Key Corporate Actions</h2>
      <p>Listed companies return value or alter capital structure through corporate actions.</p>
    `,
    faqs: [
      {
        question: "Does stock price drop on Ex-Dividend date?",
        answer: "Yes, on the Ex-Dividend date, the stock price automatically adjusts downward by approximately the dividend payout amount."
      }
    ],
    relatedArticles: [
      { title: "Market Capitalization Demystified", slug: "market-capitalization-large-cap-mid-cap-small-cap-guide" }
    ],
    relatedTools: [
      { name: "Dividend Yield Calculator", slug: "dividend-yield-calculator" }
    ],
    sources: [
      "BSE Corporate Actions Rules, 2024."
    ]
  },

  // 9. OPTIONS DELTA & THETA MECHANICS
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
    shortAnswer: "Options Delta measures the expected change in option premium per ₹1 movement in underlying stock index price, while Theta quantifies daily non-linear time decay loss. Understanding Delta and Theta is vital for risk-managing derivatives portfolios in Nifty 50 and BankNifty options.",
    contentHtml: `
      <h2>1. Introduction to Derivatives Greeks</h2>
      <p>Option contracts do not trade in a simple linear ratio like shares. Their market price is governed by Black-Scholes sensitivity metrics known as Options Greeks.</p>
    `,
    faqs: [
      {
        question: "What is an At-The-Money (ATM) option Delta?",
        answer: "ATM Call options generally have a Delta of approximately +0.50, while ATM Put options have a Delta of approximately -0.50."
      }
    ],
    relatedArticles: [
      { title: "Understanding Options Greeks", slug: "understanding-options-greeks-delta-theta-vega" }
    ],
    relatedTools: [
      { name: "Option Payoff Calculator", slug: "option-payoff-calculator" }
    ],
    sources: [
      "Black, Fischer, and Myron Scholes (1973)."
    ]
  },

  // 10. SIP COMPOUNDING MATRIX
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
    shortAnswer: "A Systematic Investment Plan (SIP) uses monthly compound interest mathematics and rupee-cost averaging to build long-term wealth. The SIP Compounding Matrix proves how time duration exponentially dominates investment size over 10 to 30 years.",
    contentHtml: `
      <h2>1. The Mathematics of SIP Compounding</h2>
      <p>A Systematic Investment Plan allows investors to deploy a fixed sum of money into mutual funds at regular monthly intervals.</p>
    `,
    faqs: [
      {
        question: "What is a realistic CAGR assumption for Nifty 50 index funds in India?",
        answer: "Historically, Nifty 50 TRI has delivered between 11% to 13% CAGR over 15+ year time horizons."
      }
    ],
    relatedArticles: [
      { title: "Demystifying P/E Ratio", slug: "demystifying-price-to-earnings-pe-ratio" }
    ],
    relatedTools: [
      { name: "SIP Calculator", slug: "sip-calculator" }
    ],
    sources: [
      "Bogle, John C. (2017)."
    ]
  },

  // 11. OPTIONS GREEKS OVERVIEW ARTICLE
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
    shortAnswer: "Options Greeks measure how sensitive an option contract's price is to changes in underlying stock price (Delta), time decay (Theta), implied volatility (Vega), and Delta's rate of change (Gamma). Understanding Greeks is essential for risk-managing derivatives portfolios.",
    contentHtml: `
      <h2>1. What Are Options Greeks?</h2>
      <p>Option contracts do not trade in a linear fashion like equity shares.</p>
    `,
    faqs: [
      {
        question: "Why does Theta decay accelerate near option expiry?",
        answer: "Extrinsic value is proportional to the square root of time remaining."
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

  // 12. FUNDAMENTAL ANALYSIS ARTICLE
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
    shortAnswer: "The Price-to-Earnings (P/E) ratio measures a stock's current share price relative to its earnings per share (EPS). It indicates how many rupees investors are paying for every ₹1 of company net profit.",
    contentHtml: `
      <h2>1. The Mathematics of Price-to-Earnings</h2>
      <p>The P/E ratio is the cornerstone valuation metric in fundamental stock analysis.</p>
    `,
    faqs: [
      {
        question: "Can a company have a negative P/E ratio?",
        answer: "Technically yes, if earnings are negative (net loss)."
      }
    ],
    relatedArticles: [
      { title: "Relative Strength Index (RSI) Guide", slug: "relative-strength-index-rsi-guide" }
    ],
    relatedTools: [
      { name: "P/E Calculator", slug: "pe-calculator" }
    ],
    sources: [
      "Graham, Benjamin (1934)."
    ]
  }
];
