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
    updatedDate: "2026-09-05",
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
      { title: "MACD Indicator & Histogram Math", slug: "macd-indicator-strategy-and-histogram-math-guide" },
      { title: "Moving Average Crossovers (EMA vs SMA)", slug: "moving-average-crossovers-ema-vs-sma-guide" }
    ],
    relatedTools: [
      { name: "RSI Calculator", slug: "rsi-calculator" },
      { name: "EMA Calculator", slug: "ema-calculator" }
    ],
    sources: [
      "Wilder, J. Welles. New Concepts in Technical Trading Systems. Trend Research, 1978.",
      "Murphy, John J. Technical Analysis of the Financial Markets. New York Institute of Finance, 1999."
    ]
  },

  // 2. OPTIONS IMPLIED VOLATILITY & IV CRUSH
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
    shortAnswer: "Implied Volatility (IV) measures market expectations of future underlying price fluctuation. IV Crush occurs when uncertainty resolves after major announcements (like quarterly earnings or union budgets), causing option premiums to collapse rapidly even if spot price moves in your direction.",
    contentHtml: `
      <h2>1. What is Implied Volatility (IV)?</h2>
      <p>Unlike historical volatility (which measures past price fluctuations), <strong>Implied Volatility (IV)</strong> is forward-looking. It is backed out of current option market prices using numerical root-finding algorithms (like Newton-Raphson) on the Black-Scholes formula.</p>

      <div class="math-card p-4 my-4 rounded">
        <p class="font-mono text-cyan-400">Market Premium = BlackScholes(S, K, T, r, IV)</p>
        <p class="font-mono text-amber-400 mt-2">Higher IV &rarr; Higher Extrinsic Option Value for both Calls & Puts</p>
      </div>

      <h2>2. Understanding IV Crush Mechanics</h2>
      <p>Before binary corporate events (such as Reliance earnings or RBI Policy decisions), demand for options hedging spikes IV to elevated levels (e.g. 40%+). Immediately after the event result is announced, event risk disappears, causing IV to drop back to normal levels (e.g. 15%).</p>

      <div class="bg-slate-900 border-l-4 border-rose-500 p-4 my-4 rounded">
        <h4 class="text-rose-400 font-bold mb-1">IV Crush Loss Scenario:</h4>
        <p>If you buy a Call option with IV at 45% right before earnings, and IV collapses to 18% after earnings, the option premium can drop 50% even if the stock price moves up slightly! This is called <strong>IV Crush</strong>.</p>
      </div>

      <h2>3. Vega (\(\\nu\)): Measuring IV Sensitivity</h2>
      <p>Vega measures the change in option premium per 1% change in Implied Volatility:</p>
      
      <div class="math-card p-4 my-4 rounded font-mono text-emerald-400">
        \\Delta Premium = Vega \\times \\Delta IV
      </div>
    `,
    faqs: [
      {
        question: "Why do options premiums drop after major news events?",
        answer: "Because implied volatility drops sharply as event uncertainty resolves, collapsing the extrinsic Vega component of option premiums."
      },
      {
        question: "How can option traders protect against IV Crush?",
        answer: "Traders avoid buying naked out-of-the-money options right before major binary events, or use defined-risk spreads like Vertical Spreads."
      }
    ],
    relatedArticles: [
      { title: "Options Delta & Theta Mechanics", slug: "options-delta-and-theta-mechanics-guide" },
      { title: "Understanding Options Greeks", slug: "understanding-options-greeks-delta-theta-vega" }
    ],
    relatedTools: [
      { name: "Option Payoff Calculator", slug: "option-payoff-calculator" }
    ],
    sources: [
      "Natenberg, Sheldon. Option Volatility and Pricing. McGraw-Hill, 2014.",
      "Hull, John C. Options, Futures, and Other Derivatives. Pearson, 2018."
    ]
  },

  // 3. TECHNICAL ANALYSIS: MACD INDICATOR & HISTOGRAM MATH
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
    shortAnswer: "Moving Average Convergence Divergence (MACD) is an unbounded momentum indicator developed by Gerald Appel. It subtracts the 26-period EMA from the 12-period EMA, plotting a Signal Line (9-period EMA of MACD) and Histogram to identify momentum acceleration.",
    contentHtml: `
      <h2>1. The Core Formulas of MACD</h2>
      <p>MACD transforms two trend-following moving averages into a momentum oscillator:</p>

      <div class="math-card p-4 my-4 rounded">
        <p class="font-mono text-cyan-400">MACD Line = EMA_{12}(Close) - EMA_{26}(Close)</p>
        <p class="font-mono text-emerald-400 mt-2">Signal Line = EMA_9(MACD Line)</p>
        <p class="font-mono text-amber-400 mt-2">MACD Histogram = MACD Line - Signal Line</p>
      </div>

      <h2>2. Interpreting Crossovers & Histogram Momentum</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Bullish Signal Crossover:</strong> MACD Line crosses above Signal Line (Histogram turns positive). Signals accelerating upward momentum.</li>
        <li><strong>Bearish Signal Crossover:</strong> MACD Line crosses below Signal Line (Histogram turns negative). Signals accelerating downward momentum.</li>
        <li><strong>Zero Line Crossovers:</strong> MACD crossing 0 confirms that the 12 EMA has crossed the 26 EMA.</li>
      </ul>
    `,
    faqs: [
      {
        question: "What is the standard setting for MACD?",
        answer: "The classic setting created by Gerald Appel is (12, 26, 9) using Exponential Moving Averages."
      }
    ],
    relatedArticles: [
      { title: "Relative Strength Index (RSI) Guide", slug: "relative-strength-index-rsi-guide" },
      { title: "Moving Average Crossovers Guide", slug: "moving-average-crossovers-ema-vs-sma-guide" }
    ],
    relatedTools: [
      { name: "EMA Calculator", slug: "ema-calculator" },
      { name: "RSI Calculator", slug: "rsi-calculator" }
    ],
    sources: [
      "Appel, Gerald. Technical Analysis: Power Tools for Active Investors. Financial Times Prentice Hall, 2005."
    ]
  },

  // 4. TECHNICAL ANALYSIS: MOVING AVERAGE CROSSOVERS
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
    `,
    faqs: [
      {
        question: "Why do quants prefer EMA over SMA?",
        answer: "EMA reduces lag by placing exponential weight on recent bar prices."
      }
    ],
    relatedArticles: [
      { title: "Relative Strength Index (RSI) Guide", slug: "relative-strength-index-rsi-guide" }
    ],
    relatedTools: [
      { name: "EMA Calculator", slug: "ema-calculator" }
    ],
    sources: [
      "Murphy, John J. Technical Analysis of the Financial Markets, 1999."
    ]
  },

  // 5. ALGO TRADING: PYTHON VECTORIZED BACKTESTING
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
    `,
    faqs: [
      {
        question: "What is Look-Ahead Bias in Backtesting?",
        answer: "Look-Ahead Bias occurs when future price data is accidentally leaked into current bar trade decisions."
      }
    ],
    relatedArticles: [
      { title: "Moving Average Crossovers Guide", slug: "moving-average-crossovers-ema-vs-sma-guide" }
    ],
    relatedTools: [
      { name: "Backtesting Template", slug: "backtesting-template" }
    ],
    sources: [
      "Clenow, Andreas F. Trading Evolved, 2019."
    ]
  },

  // 6. STOCK MARKET BASICS 1: NSE & BSE FRAMEWORK
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
      <p>India features two major national stock exchanges: the <strong>National Stock Exchange (NSE)</strong> and <strong>Bombay Stock Exchange (BSE)</strong>.</p>
    `,
    faqs: [
      {
        question: "What is the difference between NSE and BSE?",
        answer: "NSE is benchmarked by Nifty 50, BSE is benchmarked by Sensex."
      }
    ],
    relatedArticles: [
      { title: "Demat & Trading Account Basics", slug: "demat-and-trading-account-basics-guide" }
    ],
    relatedTools: [
      { name: "Risk/Reward Calculator", slug: "risk-reward-calculator" }
    ],
    sources: [
      "SEBI Market Circulars, 2024."
    ]
  },

  // 7. STOCK MARKET BASICS 2: DEMAT ACCOUNT BASICS
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
    shortAnswer: "A Trading Account executes buy/sell orders on stock exchanges, while a Demat (Dematerialized) Account holds securities in electronic format.",
    contentHtml: `
      <h2>1. The Architecture of Stock Trading Accounts</h2>
      <p>To participate in Indian equity markets, an investor requires a Bank, Trading, and Demat account.</p>
    `,
    faqs: [
      {
        question: "Is my share safe in a Demat account if my stockbroker goes bankrupt?",
        answer: "Yes! Shares reside with central depositories NSDL or CDSL."
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

  // 8. OPTIONS DELTA & THETA MECHANICS
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
    shortAnswer: "Options Delta measures expected change in premium per ₹1 spot move, while Theta quantifies daily time decay loss.",
    contentHtml: `
      <h2>1. Introduction to Derivatives Greeks</h2>
      <p>Option premiums are calculated by Black-Scholes partial differential equations.</p>
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
      "Black, Fischer, and Myron Scholes (1973)."
    ]
  },

  // 9. SIP COMPOUNDING MATRIX
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
    shortAnswer: "A Systematic Investment Plan (SIP) uses monthly compound interest mathematics and rupee-cost averaging to build long-term wealth.",
    contentHtml: `
      <h2>1. The Mathematics of SIP Compounding</h2>
      <p>SIP allows deploying fixed sums into equity mutual funds at regular monthly intervals.</p>
    `,
    faqs: [
      {
        question: "What is realistic Nifty 50 CAGR?",
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

  // 10. OPTIONS GREEKS OVERVIEW ARTICLE
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
    shortAnswer: "Options Greeks measure sensitivity of option price to underlying spot price, time decay, IV, and Delta change rate.",
    contentHtml: `
      <h2>1. What Are Options Greeks?</h2>
      <p>Option contracts trade non-linearly based on Black-Scholes partial derivatives.</p>
    `,
    faqs: [
      {
        question: "Why does Theta decay accelerate near expiry?",
        answer: "Extrinsic value is proportional to the square root of remaining time."
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

  // 11. FUNDAMENTAL ANALYSIS ARTICLE
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
    shortAnswer: "The Price-to-Earnings (P/E) ratio measures share price relative to EPS, showing how many rupees investors pay per ₹1 net profit.",
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
  }
];
