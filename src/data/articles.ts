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

  // 2. STOCK MARKET BASICS 1: NSE & BSE FRAMEWORK
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

      <h2>2. Order Matching Engine & NEAT System</h2>
      <p>Trading on NSE and BSE operates on an anonymous electronic limit order book system. Orders matched by price-time priority automatically connect buyers and sellers without specialist market makers.</p>
      
      <div class="math-card p-4 my-4 rounded">
        <p class="font-mono text-cyan-400">Order Matching Priority = Price Priority &rarr; Time Priority</p>
      </div>

      <h2>3. The Clearing & Settlement Framework (T+1 Settlement)</h2>
      <p>India is a global pioneer in adopting the <strong>T+1 Rolling Settlement Cycle</strong>. When a stock transaction occurs on Day T (e.g., Monday), shares and funds are settled by the Clearing Corporation (NSCCL for NSE, ICCL for BSE) by Day T+1 (Tuesday).</p>

      <h2>4. Regulatory Oversight: SEBI's Role</h2>
      <p>The Securities and Exchange Board of India (SEBI) regulates exchange operations, broker margin rules, insider trading prevention, and investor protection frameworks.</p>
    `,
    faqs: [
      {
        question: "What is the difference between NSE and BSE?",
        answer: "NSE is India's largest exchange by trading volume and derivatives market share, benchmarked by the Nifty 50. BSE is the oldest exchange with over 5,000 listed companies, benchmarked by the Sensex."
      },
      {
        question: "What is T+1 settlement in India?",
        answer: "T+1 means stock transactions are finalized, funds transferred, and shares delivered to Demat accounts within 1 business day after the trade date."
      }
    ],
    relatedArticles: [
      { title: "Demat & Trading Account Basics", slug: "demat-and-trading-account-basics-guide" },
      { title: "Market Order Types Explained", slug: "market-order-types-limit-stop-loss-gtt-guide" }
    ],
    relatedTools: [
      { name: "Risk/Reward Calculator", slug: "risk-reward-calculator" },
      { name: "Position Size Calculator", slug: "position-size-calculator" }
    ],
    sources: [
      "Securities and Exchange Board of India (SEBI). Market Masterclasses & Circulars, 2024.",
      "National Stock Exchange of India (NSE). NCFM Capital Market Module Handbook, 2023."
    ]
  },

  // 3. STOCK MARKET BASICS 2: DEMAT & TRADING ACCOUNT BASICS
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
      <p>To participate in Indian equity markets, an investor requires a 3-in-1 account ecosystem:</p>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Bank Account:</strong> Transfers money to and from the broker.</li>
        <li><strong>Trading Account:</strong> Executes buy and sell orders on NSE/BSE.</li>
        <li><strong>Demat Account:</strong> Electronic vault where shares, ETFs, and bonds are safely stored.</li>
      </ul>

      <h2>2. Depositories: NSDL vs. CDSL</h2>
      <p>Shares in India are dematerialized and maintained by central depositories:</p>
      <table class="w-full text-left my-4 border-collapse border border-slate-800 text-xs">
        <thead>
          <tr class="bg-slate-900 text-cyan-400">
            <th class="p-3 border border-slate-800">Depository</th>
            <th class="p-3 border border-slate-800">Promoter / Exchange</th>
            <th class="p-3 border border-slate-800">Demat Account ID Format</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3 border border-slate-800 font-bold">NSDL (National Securities Depository Ltd)</td>
            <td class="p-3 border border-slate-800">NSE, IDBI Bank</td>
            <td class="p-3 border border-slate-800 font-mono">14 digits starting with 'IN'</td>
          </tr>
          <tr>
            <td class="p-3 border border-slate-800 font-bold">CDSL (Central Depository Services Ltd)</td>
            <td class="p-3 border border-slate-800">BSE, SBI, HDFC Bank</td>
            <td class="p-3 border border-slate-800 font-mono">16 numeric digits</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Understanding DP Charges & Brokerage Costs</h2>
      <p>Depository Participant (DP) charges are flat fees charged by depositories and brokers whenever shares are debited (sold) from a Demat account, regardless of transaction value.</p>
    `,
    faqs: [
      {
        question: "Is my share safe in a Demat account if my stockbroker goes bankrupt?",
        answer: "Yes! Shares are held directly with central depositories (NSDL or CDSL), not with the stockbroker. If a broker fails, your shares remain safe in your NSDL/CDSL account."
      },
      {
        question: "What is DP Charge when selling stock?",
        answer: "DP Charge is a flat fee (~₹13.5 to ₹20 + GST) levied per stock sell transaction per day by CDSL/NSDL and your broker."
      }
    ],
    relatedArticles: [
      { title: "NSE & BSE Stock Exchange Framework", slug: "nse-and-bse-stock-exchange-framework-guide" },
      { title: "Market Order Types Explained", slug: "market-order-types-limit-stop-loss-gtt-guide" }
    ],
    relatedTools: [
      { name: "Position Size Calculator", slug: "position-size-calculator" },
      { name: "SIP Calculator", slug: "sip-calculator" }
    ],
    sources: [
      "National Securities Depository Limited (NSDL). Investor Education Handbook, 2024.",
      "Central Depository Services Limited (CDSL). Depository Regulations, 2023."
    ]
  },

  // 4. STOCK MARKET BASICS 3: MARKET ORDER TYPES
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

      <h2>2. Market Order vs. Limit Order</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Market Order:</strong> Instructs the exchange to execute immediately at the best available market price. Subject to slippage during high volatility.</li>
        <li><strong>Limit Order:</strong> Specifies the maximum price you are willing to pay (Buy Limit) or minimum price you are willing to accept (Sell Limit). Protects against bad fills.</li>
      </ul>

      <h2>3. Stop-Loss Orders (SL & SL-M)</h2>
      <p>Stop-loss orders trigger automatically when stock price breaches a designated Trigger Price:</p>
      
      <div class="math-card p-4 my-4 rounded">
        <p class="font-mono text-cyan-400">SL Order = Trigger Price &rarr; Converts to Limit Order</p>
        <p class="font-mono text-emerald-400 mt-2">SL-M Order = Trigger Price &rarr; Converts to Market Order</p>
      </div>

      <h2>4. Good-Till-Triggered (GTT) Orders</h2>
      <p>GTT orders remain active for up to 1 year on Indian broker platforms, triggering buy or sell orders only when target price is hit.</p>
    `,
    faqs: [
      {
        question: "What is execution slippage in Market orders?",
        answer: "Slippage is the difference between expected price when placing a market order and actual executed price caused by fast market movements or low liquidity."
      },
      {
        question: "Why did SEBI ban SL-M orders in options trading?",
        answer: "SEBI restricted SL-M in options due to freak trades and low market depth causing catastrophic execution fills."
      }
    ],
    relatedArticles: [
      { title: "Demat & Trading Account Basics", slug: "demat-and-trading-account-basics-guide" },
      { title: "NSE & BSE Stock Exchange Framework", slug: "nse-and-bse-stock-exchange-framework-guide" }
    ],
    relatedTools: [
      { name: "Risk/Reward Calculator", slug: "risk-reward-calculator" },
      { name: "Position Size Calculator", slug: "position-size-calculator" }
    ],
    sources: [
      "NSE India. Order Matching Engine Execution Protocols, 2024.",
      "Zerodha Varsity. Technical Analysis & Module 1 Trading Mechanics."
    ]
  },

  // 5. STOCK MARKET BASICS 4: MARKET CAPITALIZATION
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
      <p>Market Cap reflects total equity value assigned to a company by market participants:</p>

      <div class="math-card p-4 my-4 rounded font-mono text-cyan-400">
        Market Capitalization = Current Share Price \\times Total Outstanding Shares
      </div>

      <h2>2. SEBI Categorization Framework</h2>
      <p>Under SEBI circular guidelines, AMFI updates twice-yearly market cap rankings for equity mutual fund classification:</p>

      <table class="w-full text-left my-4 border-collapse border border-slate-800 text-xs">
        <thead>
          <tr class="bg-slate-900 text-cyan-400">
            <th class="p-3 border border-slate-800">Category</th>
            <th class="p-3 border border-slate-800">Market Rank (AMFI)</th>
            <th class="p-3 border border-slate-800">Risk Profile</th>
            <th class="p-3 border border-slate-800">Growth Profile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3 border border-slate-800 font-bold text-emerald-400">Large-Cap</td>
            <td class="p-3 border border-slate-800">Top 1st to 100th Stock</td>
            <td class="p-3 border border-slate-800">Lowest Volatility / High Stability</td>
            <td class="p-3 border border-slate-800">Steady 10-14% Compound Growth</td>
          </tr>
          <tr>
            <td class="p-3 border border-slate-800 font-bold text-cyan-400">Mid-Cap</td>
            <td class="p-3 border border-slate-800">101st to 250th Stock</td>
            <td class="p-3 border border-slate-800">Moderate Volatility</td>
            <td class="p-3 border border-slate-800">High Growth Potential</td>
          </tr>
          <tr>
            <td class="p-3 border border-slate-800 font-bold text-amber-400">Small-Cap</td>
            <td class="p-3 border border-slate-800">251st Stock and Below</td>
            <td class="p-3 border border-slate-800 text-rose-400">High Volatility & Drawdown Risk</td>
            <td class="p-3 border border-slate-800">Multibagger Growth Opportunity</td>
          </tr>
        </tbody>
      </table>
    `,
    faqs: [
      {
        question: "What is Free-Float Market Capitalization?",
        answer: "Free-Float Market Cap excludes promoter-held shares and counts only shares available for public trading on stock exchanges. Nifty 50 is weighted by Free-Float Market Cap."
      },
      {
        question: "How often does SEBI update market cap categories?",
        answer: "AMFI releases updated market capitalization lists semi-annually (in January and July)."
      }
    ],
    relatedArticles: [
      { title: "Demystifying Price-to-Earnings (P/E) Ratio", slug: "demystifying-price-to-earnings-pe-ratio" },
      { title: "SIP Compounding Matrix", slug: "sip-compounding-matrix-and-wealth-projection-guide" }
    ],
    relatedTools: [
      { name: "P/E Calculator", slug: "pe-calculator" },
      { name: "CAGR Calculator", slug: "cagr-calculator" }
    ],
    sources: [
      "SEBI Categorization Circular for Mutual Funds, 2017.",
      "Association of Mutual Funds in India (AMFI) Semi-Annual Market Cap Data."
    ]
  },

  // 6. STOCK MARKET BASICS 5: CORPORATE ACTIONS
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
      <p>Listed companies return value or alter capital structure through corporate actions:</p>

      <h2>2. Cash Dividends & Dividend Yield</h2>
      <p>Dividends represent net profits distributed to shareholders:</p>
      
      <div class="math-card p-4 my-4 rounded font-mono text-cyan-400">
        Dividend Yield (%) = (Annual Dividend per Share / Current Stock Price) \\times 100
      </div>

      <h2>3. Stock Splits vs. Bonus Issues</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Stock Split (e.g. 1:5 Split):</strong> Decreases face value of shares (e.g. ₹10 to ₹2). Total market cap remains identical, while share quantity multiplies by 5.</li>
        <li><strong>Bonus Issue (e.g. 1:1 Bonus):</strong> Capitalizes free reserves to issue free additional shares. Face value remains unchanged.</li>
      </ul>

      <h2>4. The Importance of Record Date & Ex-Date Math</h2>
      <p>To be eligible for dividends or bonus shares under T+1 settlement, investors must purchase stock at least 1 trading day before the <strong>Ex-Date</strong>.</p>
    `,
    faqs: [
      {
        question: "Does stock price drop on Ex-Dividend date?",
        answer: "Yes, on the Ex-Dividend date, the stock price automatically adjusts downward by approximately the dividend payout amount per share."
      },
      {
        question: "What is the difference between Record Date and Ex-Date?",
        answer: "Record Date is the cutoff date set by the company to verify shareholders in depository records. Ex-Date is the date on which trading starts without eligibility for the corporate action."
      }
    ],
    relatedArticles: [
      { title: "Demystifying Price-to-Earnings (P/E) Ratio", slug: "demystifying-price-to-earnings-pe-ratio" },
      { title: "Market Capitalization Demystified", slug: "market-capitalization-large-cap-mid-cap-small-cap-guide" }
    ],
    relatedTools: [
      { name: "Dividend Yield Calculator", slug: "dividend-yield-calculator" },
      { name: "P/E Calculator", slug: "pe-calculator" }
    ],
    sources: [
      "BSE Corporate Actions Governance Rules, 2024.",
      "SEBI Listing Obligations and Disclosure Requirements (LODR) Regulations."
    ]
  },

  // 7. OPTIONS DELTA & THETA MECHANICS
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

  // 8. OPTIONS GREEKS OVERVIEW ARTICLE
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

  // 9. FUNDAMENTAL ANALYSIS ARTICLE
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
