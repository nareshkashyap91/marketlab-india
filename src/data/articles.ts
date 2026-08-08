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
      { title: "Moving Average Crossovers (EMA vs SMA)", slug: "moving-average-crossovers-guide" }
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

  // 2. NEW ARTICLE: SIP COMPOUNDING MATRIX
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
      <p>A <strong>Systematic Investment Plan (SIP)</strong> allows investors to deploy a fixed sum of money into equity mutual funds or index funds at regular monthly intervals. Unlike a lump-sum deposit, each SIP instalment compounds for a different duration.</p>
      <p>The Future Value (\(FV\)) of an annuity-due SIP formula is expressed mathematically as:</p>
      
      <div class="math-card p-4 my-4 rounded">
        <p class="font-mono text-cyan-400">FV = P \\times \\left[ \\frac{(1 + i)^n - 1}{i} \\right] \\times (1 + i)</p>
        <p class="font-mono text-emerald-400 mt-2">where P = Monthly SIP, i = Expected Monthly Rate (CAGR / 12), n = Total Months</p>
      </div>

      <h2>2. The Definitive SIP Compounding Matrix (12% Expected CAGR)</h2>
      <p>The matrix below demonstrates the total wealth created (Invested Amount vs. Projected Corpus) across different monthly investment levels and time horizons assuming a realistic 12% annual compounding rate (Nifty 50 historical benchmark average):</p>

      <table class="w-full text-left my-4 border-collapse border border-slate-800 text-xs">
        <thead>
          <tr class="bg-slate-900 text-cyan-400">
            <th class="p-3 border border-slate-800">Monthly SIP</th>
            <th class="p-3 border border-slate-800">10 Years</th>
            <th class="p-3 border border-slate-800">15 Years</th>
            <th class="p-3 border border-slate-800">20 Years</th>
            <th class="p-3 border border-slate-800">25 Years</th>
            <th class="p-3 border border-slate-800">30 Years</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3 border border-slate-800 font-bold text-amber-400">₹5,000 / mo</td>
            <td class="p-3 border border-slate-800">₹11.6 Lacs</td>
            <td class="p-3 border border-slate-800">₹25.2 Lacs</td>
            <td class="p-3 border border-slate-800">₹49.9 Lacs</td>
            <td class="p-3 border border-slate-800">₹94.9 Lacs</td>
            <td class="p-3 border border-slate-800 font-bold text-emerald-400">₹1.76 Crore</td>
          </tr>
          <tr>
            <td class="p-3 border border-slate-800 font-bold text-amber-400">₹10,000 / mo</td>
            <td class="p-3 border border-slate-800">₹23.2 Lacs</td>
            <td class="p-3 border border-slate-800">₹50.5 Lacs</td>
            <td class="p-3 border border-slate-800">₹99.9 Lacs</td>
            <td class="p-3 border border-slate-800 text-emerald-400">₹1.90 Crore</td>
            <td class="p-3 border border-slate-800 font-bold text-emerald-400">₹3.53 Crore</td>
          </tr>
          <tr>
            <td class="p-3 border border-slate-800 font-bold text-amber-400">₹25,000 / mo</td>
            <td class="p-3 border border-slate-800">₹58.1 Lacs</td>
            <td class="p-3 border border-slate-800">₹1.26 Crore</td>
            <td class="p-3 border border-slate-800">₹2.50 Crore</td>
            <td class="p-3 border border-slate-800 font-bold text-emerald-400">₹4.74 Crore</td>
            <td class="p-3 border border-slate-800 font-bold text-emerald-400">₹8.82 Crore</td>
          </tr>
          <tr>
            <td class="p-3 border border-slate-800 font-bold text-amber-400">₹50,000 / mo</td>
            <td class="p-3 border border-slate-800">₹1.16 Crore</td>
            <td class="p-3 border border-slate-800">₹2.52 Crore</td>
            <td class="p-3 border border-slate-800 font-bold text-emerald-400">₹4.99 Crore</td>
            <td class="p-3 border border-slate-800 font-bold text-emerald-400">₹9.49 Crore</td>
            <td class="p-3 border border-slate-800 font-bold text-emerald-400">₹17.65 Crore</td>
          </tr>
        </tbody>
      </table>

      <h2>3. The Cost of Delay: Why Starting 5 Years Early Matters</h2>
      <p>Compounding power builds disproportionately in the final decade. Delaying a ₹10,000 monthly SIP start date by just 5 years results in a massive wealth gap at age 60:</p>

      <div class="bg-slate-900 border-l-4 border-amber-500 p-4 my-4 rounded">
        <h4 class="text-amber-400 font-bold mb-1">Comparative Cost of Delay Example:</h4>
        <p>• <strong>Investor A (Starts at Age 25):</strong> Invests ₹10,000/month for 35 Years @ 12% CAGR. Total Invested = ₹42 Lacs. <strong>Final Wealth = ₹6.49 Crore.</strong></p>
        <p class="mt-2">• <strong>Investor B (Starts at Age 30):</strong> Invests ₹10,000/month for 30 Years @ 12% CAGR. Total Invested = ₹36 Lacs. <strong>Final Wealth = ₹3.53 Crore.</strong></p>
        <p class="mt-2 text-cyan-400"><strong>Wealth Penalty for 5-Year Delay: ₹2.96 Crore Loss!</strong> (Investor B sacrificed ₹2.96 Crore wealth to save just ₹6 Lacs in contributions).</p>
      </div>

      <h2>4. Step-Up SIP: The Wealth Accelerator</h2>
      <p>A <strong>Step-Up SIP</strong> automatically increases your monthly investment by a fixed percentage (e.g. 10% annual increment) to align with annual salary hikes. A ₹10,000 SIP stepped up by 10% yearly produces nearly <strong>double the corpus</strong> of a flat SIP over 20 years!</p>

      <h2>5. Python Script: Simulating SIP Compounding Schedules</h2>
      <pre><code>def calculate_sip_corpus(monthly_investment, annual_rate_pct, years, step_up_pct=0):
    total_months = years * 12
    monthly_rate = (annual_rate_pct / 100) / 12
    corpus = 0
    total_invested = 0
    current_sip = monthly_investment
    
    for month in range(1, total_months + 1):
        # Apply annual step up every 12 months
        if month > 1 and (month - 1) % 12 == 0:
            current_sip += current_sip * (step_up_pct / 100)
            
        corpus = (corpus + current_sip) * (1 + monthly_rate)
        total_invested += current_sip
        
    return {
        'total_invested': round(total_invested),
        'final_corpus': round(corpus),
        'wealth_gain': round(corpus - total_invested)
    }

# Example 10,000 SIP for 20 years at 12% CAGR with 10% step-up
res = calculate_sip_corpus(10000, 12, 20, step_up_pct=10)
print("Total Invested:", res['total_invested'])
print("Final Step-Up Corpus:", res['final_corpus'])
</code></pre>
    `,
    faqs: [
      {
        question: "What is a realistic CAGR assumption for Nifty 50 index funds in India?",
        answer: "Historically, the Nifty 50 Total Returns Index (TRI) has delivered between 11% to 13% CAGR over rolling 15+ year time horizons."
      },
      {
        question: "What is Rupee-Cost Averaging?",
        answer: "Rupee-Cost Averaging means buying more fund units when prices drop and fewer units when prices rise, lowering your average cost per unit over market cycles."
      },
      {
        question: "How is Equity Mutual Fund SIP taxed under LTCG in India?",
        answer: "Long-Term Capital Gains (LTCG) above ₹1.25 Lacs per financial year are taxed at 12.5% without indexation benefit (as per revised budget regulations)."
      }
    ],
    relatedArticles: [
      { title: "Demystifying Price-to-Earnings (P/E) Ratio", slug: "demystifying-price-to-earnings-pe-ratio" },
      { title: "Relative Strength Index (RSI) Guide", slug: "relative-strength-index-rsi-guide" }
    ],
    relatedTools: [
      { name: "SIP Calculator", slug: "sip-calculator" },
      { name: "CAGR Calculator", slug: "cagr-calculator" }
    ],
    sources: [
      "Bogle, John C. The Little Book of Common Sense Investing. Wiley, 2017.",
      "Malkiel, Burton G. A Random Walk Down Wall Street. W. W. Norton & Company, 2019."
    ]
  },

  // 3. OPTIONS DELTA & THETA MECHANICS
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
      <p>Option contracts do not trade in a simple linear ratio like shares. Their market price (premium) is determined by the Black-Scholes partial differential equation based on underlying spot price, strike price, time until expiration, implied volatility, and risk-free interest rates. The core sensitivity metrics derived from this model are <strong>The Options Greeks</strong>.</p>

      <h2>2. Options Delta (\(\\Delta\)): Directional Sensitivity</h2>
      <p><strong>Delta</strong> measures the change in option premium for a ₹1 change in the underlying asset price:</p>
      
      <div class="math-card p-4 my-4 rounded">
        <p class="font-mono text-cyan-400">Delta (\\Delta) = \\frac{\\partial V}{\\partial S}</p>
        <p class="font-mono text-emerald-400 mt-2">Expected Premium Change = Delta \\times \\Delta Spot</p>
      </div>

      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Call Options (CE):</strong> Positive Delta ranging from 0 to +1.0. An At-The-Money (ATM) Call has a Delta of approximately +0.50. If Nifty rises by 10 points, an ATM Call premium rises by ~₹5.</li>
        <li><strong>Put Options (PE):</strong> Negative Delta ranging from 0 to -1.0. An At-The-Money (ATM) Put has a Delta of approximately -0.50. If Nifty rises by 10 points, an ATM Put premium drops by ~₹5.</li>
        <li><strong>Delta as Probability Proxy:</strong> In quantitative option models, Delta is frequently used as an approximate statistical probability that the option will expire In-The-Money (ITM).</li>
      </ul>

      <h2>3. Options Theta (\(\\Theta\)): The Non-Linear Time Decay Curve</h2>
      <p><strong>Theta</strong> represents the monetary loss in an option contract's extrinsic value per day due to the passage of time:</p>

      <div class="math-card p-4 my-4 rounded font-mono text-amber-400">
        Theta (\\Theta) = \\frac{\\partial V}{\\partial t}
      </div>

      <p>Options are wasting assets. Time decay does not occur linearly — it follows a square-root curve. Extrinsic time value decays gradually when expiration is 60+ days away, but accelerates non-linearly during the final 30 days before expiry.</p>

      <h2>4. Comparative Options Greeks Matrix (Nifty 50 Example)</h2>
      <table class="w-full text-left my-4 border-collapse border border-slate-800 text-xs">
        <thead>
          <tr class="bg-slate-900 text-amber-400">
            <th class="p-3 border border-slate-800">Option Moneyness</th>
            <th class="p-3 border border-slate-800">Call Delta (\(\\Delta\))</th>
            <th class="p-3 border border-slate-800">Put Delta (\(\\Delta\))</th>
            <th class="p-3 border border-slate-800">Theta Decay Speed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3 border border-slate-800 font-bold text-emerald-400">Deep ITM (In-The-Money)</td>
            <td class="p-3 border border-slate-800">0.80 to 0.95</td>
            <td class="p-3 border border-slate-800">-0.80 to -0.95</td>
            <td class="p-3 border border-slate-800">Low (Mostly Intrinsic Value)</td>
          </tr>
          <tr>
            <td class="p-3 border border-slate-800 font-bold text-cyan-400">ATM (At-The-Money)</td>
            <td class="p-3 border border-slate-800">~ 0.50</td>
            <td class="p-3 border border-slate-800">~ -0.50</td>
            <td class="p-3 border border-slate-800 text-rose-400 font-bold">Maximum Daily Theta Decay</td>
          </tr>
          <tr>
            <td class="p-3 border border-slate-800 font-bold text-slate-400">OTM (Out-of-The-Money)</td>
            <td class="p-3 border border-slate-800">0.05 to 0.30</td>
            <td class="p-3 border border-slate-800">-0.05 to -0.30</td>
            <td class="p-3 border border-slate-800">High relative to small premium</td>
          </tr>
        </tbody>
      </table>

      <h2>5. Common Mistakes in Options Buying & Selling</h2>
      <div class="bg-slate-900 border-l-4 border-rose-500 p-4 my-4 rounded">
        <h4 class="text-rose-400 font-bold mb-1">Critical Educational Risk Warning:</h4>
        <p>1. <strong>Holding OTM Long Options Across Expiry Week:</strong> Buying far Out-of-the-Money (OTM) options because premiums look cheap (e.g. ₹5 or ₹10) is a frequent retail trap. OTM options have low Delta (~0.10) and high relative Theta decay, causing rapid total loss of premium if spot price does not make an extreme move.</p>
        <p class="mt-2">2. <strong>Ignoring Expiry Day Accelerated Theta:</strong> On weekly expiry days (Thursdays for Nifty 50), Theta decay reaches maximum velocity as time value shrinks to zero by 3:30 PM.</p>
      </div>

      <h2>6. Python Script: Calculating Option Delta & Theta via SciPy</h2>
      <pre><code>import math
from scipy.stats import norm

def black_scholes_greeks(S, K, T, r, sigma, option_type='call'):
    d1 = (math.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * math.sqrt(T))
    d2 = d1 - sigma * math.sqrt(T)
    
    if option_type == 'call':
        delta = norm.cdf(d1)
        theta = (- (S * norm.pdf(d1) * sigma) / (2 * math.sqrt(T)) 
                 - r * K * math.exp(-r * T) * norm.cdf(d2)) / 365
    else:
        delta = norm.cdf(d1) - 1
        theta = (- (S * norm.pdf(d1) * sigma) / (2 * math.sqrt(T)) 
                 + r * K * math.exp(-r * T) * norm.cdf(-d2)) / 365
        
    return {'delta': round(delta, 4), 'theta_per_day': round(theta, 4)}

# Example: Nifty Spot = 24000, Strike = 24000, 7 Days to Expiry (7/365), Volatility = 15% (0.15)
greeks = black_scholes_greeks(24000, 24000, 7/365, 0.07, 0.15, 'call')
print("ATM Call Delta:", greeks['delta'])
print("ATM Daily Theta Decay (₹):", greeks['theta_per_day'])
</code></pre>
    `,
    faqs: [
      {
        question: "What is an At-The-Money (ATM) option Delta?",
        answer: "At-The-Money Call options generally have a Delta of approximately +0.50, while ATM Put options have a Delta of approximately -0.50."
      },
      {
        question: "Why does Theta decay accelerate as expiry approaches?",
        answer: "Option time value is non-linear and proportional to the square root of remaining time. As days to expiry drop towards zero, extrinsic value collapses rapidly."
      },
      {
        question: "How does Delta relate to Gamma?",
        answer: "Gamma measures the rate of change of Delta per ₹1 move in underlying price. High Gamma means Delta shifts rapidly."
      }
    ],
    relatedArticles: [
      { title: "Understanding Options Greeks: Delta, Theta, Vega & Gamma Explained", slug: "understanding-options-greeks-delta-theta-vega" },
      { title: "Relative Strength Index (RSI) Guide", slug: "relative-strength-index-rsi-guide" }
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

  // 4. OPTIONS GREEKS OVERVIEW ARTICLE
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
      { title: "Options Delta & Theta Mechanics", slug: "options-delta-and-theta-mechanics-guide" }
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

  // 5. FUNDAMENTAL ANALYSIS ARTICLE
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
