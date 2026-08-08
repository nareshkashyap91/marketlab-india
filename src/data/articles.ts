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
      { title: "Moving Average Crossovers (EMA vs SMA)", slug: "moving-average-crossovers-guide" },
      { title: "Python for Technical Analysis: Vectorized Indicators", slug: "python-technical-analysis-vectorized" }
    ],
    relatedTools: [
      { name: "RSI Calculator", slug: "rsi-calculator" },
      { name: "EMA Calculator", slug: "ema-calculator" },
      { name: "Trading Journal", slug: "trading-journal" }
    ],
    sources: [
      "Wilder, J. Welles. New Concepts in Technical Trading Systems. Trend Research, 1978.",
      "Murphy, John J. Technical Analysis of the Financial Markets. New York Institute of Finance, 1999."
    ],
    youtubeVideoId: "dQw4w9WgXcQ"
  },

  // 2. OPTIONS EDUCATION ARTICLE
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
      <p>Option contracts do not trade in a linear fashion like equity shares. Their market price (premium) is governed by multiple variables including underlying asset price, strike price, time until expiry, risk-free interest rate, and implied volatility (IV). The partial derivatives of the Black-Scholes pricing model with respect to these variables are called <strong>The Options Greeks</strong>.</p>

      <h2>2. Delta (\(\\Delta\)): Sensitivity to Price</h2>
      <p>Delta measures the expected change in option premium for a ₹1 change in the underlying index or stock price.</p>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Call Options:</strong> Delta ranges from 0 to +1.0 (ATM Calls typically ~ 0.50).</li>
        <li><strong>Put Options:</strong> Delta ranges from 0 to -1.0 (ATM Puts typically ~ -0.50).</li>
      </ul>

      <h2>3. Theta (\(\\Theta\)): Time Decay Rate</h2>
      <p>Theta represents option premium decay per day as time moves closer to expiry. Options are wasting assets; as expiry approaches, extrinsic time value declines non-linearly, accelerating in the final 30 days before expiry.</p>

      <h2>4. Vega (\(\\nu\)): Sensitivity to Implied Volatility</h2>
      <p>Vega measures how much an option's premium changes for every 1% change in Implied Volatility (IV). Higher IV increases options premiums for both Calls and Puts.</p>

      <h2>5. Educational Options Risk Table</h2>
      <table class="w-full text-left my-4 border-collapse border border-slate-800">
        <thead>
          <tr class="bg-slate-900 text-cyan-400">
            <th class="p-3 border border-slate-800">Greek</th>
            <th class="p-3 border border-slate-800">Measures Sensitivity To</th>
            <th class="p-3 border border-slate-800">Long Option Impact</th>
            <th class="p-3 border border-slate-800">Short Option Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3 border border-slate-800 font-bold">Delta</td>
            <td class="p-3 border border-slate-800">Underlying Price Change</td>
            <td class="p-3 border border-slate-800 text-emerald-400">Directional Gain</td>
            <td class="p-3 border border-slate-800 text-rose-400">Directional Risk</td>
          </tr>
          <tr>
            <td class="p-3 border border-slate-800 font-bold">Theta</td>
            <td class="p-3 border border-slate-800">Passage of Time (Daily)</td>
            <td class="p-3 border border-slate-800 text-rose-400">Decay Loss (-)</td>
            <td class="p-3 border border-slate-800 text-emerald-400">Decay Gain (+)</td>
          </tr>
          <tr>
            <td class="p-3 border border-slate-800 font-bold">Vega</td>
            <td class="p-3 border border-slate-800">1% IV Expansion/Crush</td>
            <td class="p-3 border border-slate-800 text-emerald-400">Benefits from IV Expansion</td>
            <td class="p-3 border border-slate-800 text-rose-400">Hurt by IV Expansion</td>
          </tr>
        </tbody>
      </table>
    `,
    faqs: [
      {
        question: "Why does Theta decay accelerate near option expiry?",
        answer: "Extrinsic value is proportional to the square root of time remaining. As time approaches zero, the probability distribution narrows rapidly, accelerating Theta decay."
      },
      {
        question: "What is IV Crush?",
        answer: "IV Crush occurs after expected events (like quarterly earnings results or election results) when implied volatility drops sharply, reducing option premiums regardless of underlying price movement."
      }
    ],
    relatedArticles: [
      { title: "Relative Strength Index (RSI) Guide", slug: "relative-strength-index-rsi-guide" },
      { title: "Python for Options Backtesting", slug: "python-options-backtesting-guide" }
    ],
    relatedTools: [
      { name: "Option Payoff Calculator", slug: "option-payoff-calculator" },
      { name: "Risk/Reward Calculator", slug: "risk-reward-calculator" }
    ],
    sources: [
      "Black, Fischer, and Myron Scholes. The Pricing of Options and Corporate Liabilities. Journal of Political Economy, 1973.",
      "Natenberg, Sheldon. Option Volatility and Pricing. McGraw-Hill, 2014."
    ]
  },

  // 3. FUNDAMENTAL ANALYSIS ARTICLE
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
      <p>The P/E ratio is the cornerstone valuation metric in fundamental stock analysis. It is calculated by dividing current market price per share by earnings per share (EPS):</p>
      
      <div class="math-card p-4 my-4 rounded">
        <p class="font-mono text-cyan-400">P/E Ratio = Market Price per Share / Earnings per Share (EPS)</p>
        <p class="font-mono text-emerald-400 mt-2">EPS = (Net Income - Preferred Dividends) / Total Shares Outstanding</p>
      </div>

      <h2>2. Trailing (TTM) vs. Forward P/E</h2>
      <p>Understanding which earnings figure is used is essential for accurate valuation analysis:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Trailing P/E (TTM):</strong> Uses audited earnings from the past 4 quarters (Trailing Twelve Months). It is based on historical fact but may lag current economic shifts.</li>
        <li><strong>Forward P/E:</strong> Uses projected consensus earnings estimates for the upcoming fiscal year. It reflects future expectations but carries forecasting error risk.</li>
      </ul>

      <h2>3. Industry Peer Comparison Benchmark</h2>
      <p>A P/E ratio in isolation is meaningless. A P/E of 30 might be cheap for a fast-growing IT/SaaS firm growing profits at 40% per year, while a P/E of 12 might be expensive for a cyclical steel manufacturer with declining revenue.</p>
    `,
    faqs: [
      {
        question: "Can a company have a negative P/E ratio?",
        answer: "Technically yes, if earnings are negative (net loss). However, financial databases typically report N/A or negative EPS rather than a negative P/E ratio."
      },
      {
        question: "What is PEG ratio?",
        answer: "The Price/Earnings-to-Growth (PEG) ratio divides P/E by annual EPS growth rate percentage to adjust valuation for growth speed."
      }
    ],
    relatedArticles: [
      { title: "Relative Strength Index (RSI) Guide", slug: "relative-strength-index-rsi-guide" }
    ],
    relatedTools: [
      { name: "P/E Calculator", slug: "pe-calculator" },
      { name: "CAGR Calculator", slug: "cagr-calculator" }
    ],
    sources: [
      "Graham, Benjamin, and David Dodd. Security Analysis. McGraw-Hill, 1934.",
      "Damodaran, Aswath. Investment Valuation: Tools and Techniques for Determining the Value of Any Asset. Wiley, 2012."
    ]
  }
];
