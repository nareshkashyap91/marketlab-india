export interface YoutubeVideo {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  youtubeId: string;
  description: string;
  type: 'Long Form Masterclass' | 'Short Tutorial' | 'Code Walkthrough';
  transcript: string;
  timestamps: { time: string; topic: string }[];
  relatedArticleSlug: string;
}

export const YOUTUBE_VIDEOS: YoutubeVideo[] = [
  {
    id: "stock-market-basics-nse-framework",
    title: "Stock Market Basics Masterclass: NSE, BSE & T+1 Settlement Mechanics",
    category: "Stock Market Basics",
    duration: "18:20",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=60",
    youtubeId: "Xn7EV6iW_XU",
    description: "Comprehensive investor education video covering how Indian stock exchanges operate, order execution matching on NEAT engine, SEBI depository regulations (NSDL/CDSL), and T+1 rolling settlement.",
    type: "Long Form Masterclass",
    transcript: "Welcome to MarketLab India's financial education series. In this lesson, we examine the structural framework of the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE)...",
    timestamps: [
      { time: "00:00", topic: "Introduction to Indian Capital Markets" },
      { time: "03:15", topic: "Price-Time Order Matching Mechanics" },
      { time: "07:40", topic: "Role of NSDL & CDSL Depositories" },
      { time: "12:50", topic: "Understanding T+1 Rolling Settlement" }
    ],
    relatedArticleSlug: "nse-and-bse-stock-exchange-framework-guide"
  },
  {
    id: "rsi-indicator-masterclass",
    title: "RSI Indicator Masterclass: Math, Divergence & Backtesting in Python",
    category: "Technical Analysis",
    duration: "24:15",
    thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=60",
    youtubeId: "1Z6chqD8Kms",
    description: "Deep dive educational masterclass explaining the 14-period RSI formula, Wilder's smoothing filter, bullish/bearish divergence identification on Nifty 50 charts, and python strategy backtesting.",
    type: "Long Form Masterclass",
    transcript: "Welcome to MarketLab India's technical analysis masterclass. Today we are unpacking the exact mathematical mechanics behind J. Welles Wilder's Relative Strength Index...",
    timestamps: [
      { time: "00:00", topic: "Introduction to Internal Momentum" },
      { time: "03:45", topic: "Deriving the RS & RSI Equation" },
      { time: "08:12", topic: "Wilder's Smoothing vs Simple Average" },
      { time: "14:30", topic: "Regular vs Hidden Divergence" }
    ],
    relatedArticleSlug: "relative-strength-index-rsi-guide"
  },
  {
    id: "options-greeks-explained-visually",
    title: "Options Greeks Explained Visually: Delta, Theta & Vega Payoff Curves",
    category: "Options Education",
    duration: "18:40",
    thumbnail: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&auto=format&fit=crop&q=60",
    youtubeId: "G947t3q7Tfg",
    description: "Visual breakdown of options Greeks. Learn how Delta shifts with spot price, why Theta decay accelerates in the last 30 days before expiry, and how Vega measures IV expansion.",
    type: "Long Form Masterclass",
    transcript: "Options contracts are non-linear derivatives. In this educational lesson, we use 3D payoff graphs to explain Delta, Theta, Vega, and Gamma...",
    timestamps: [
      { time: "00:00", topic: "Non-Linear Derivatives Overview" },
      { time: "04:10", topic: "Delta Sensitivity & Probability" },
      { time: "09:15", topic: "Theta Decay Non-Linearity" }
    ],
    relatedArticleSlug: "options-delta-and-theta-mechanics-guide"
  }
];
