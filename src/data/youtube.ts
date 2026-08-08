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
    id: "rsi-indicator-masterclass",
    title: "RSI Indicator Masterclass: Math, Divergence & Backtesting in Python",
    category: "Technical Analysis",
    duration: "24:15",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=60",
    youtubeId: "dQw4w9WgXcQ",
    description: "Deep dive educational masterclass explaining the 14-period RSI formula, Wilder's smoothing filter, bullish/bearish divergence identification on Nifty 50 charts, and python strategy backtesting.",
    type: "Long Form Masterclass",
    transcript: "Welcome to MarketLab India's technical analysis masterclass. Today we are unpacking the exact mathematical mechanics behind J. Welles Wilder's Relative Strength Index...",
    timestamps: [
      { time: "00:00", topic: "Introduction to Internal Momentum" },
      { time: "03:45", topic: "Deriving the RS & RSI Equation" },
      { time: "08:12", topic: "Wilder's Smoothing vs Simple Average" },
      { time: "14:30", topic: "Regular vs Hidden Divergence" },
      { time: "19:40", topic: "Python Script Walkthrough & Vectorization" }
    ],
    relatedArticleSlug: "relative-strength-index-rsi-guide"
  },
  {
    id: "options-greeks-explained-visually",
    title: "Options Greeks Explained Visually: Delta, Theta & Vega Payoff Curves",
    category: "Options Education",
    duration: "18:40",
    thumbnail: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&auto=format&fit=crop&q=60",
    youtubeId: "dQw4w9WgXcQ",
    description: "Visual breakdown of options Greeks. Learn how Delta shifts with spot price, why Theta decay accelerates in the last 30 days before expiry, and how Vega measures IV expansion.",
    type: "Long Form Masterclass",
    transcript: "Options contracts are non-linear derivatives. In this educational lesson, we use 3D payoff graphs to explain Delta, Theta, Vega, and Gamma...",
    timestamps: [
      { time: "00:00", topic: "Non-Linear Derivatives Overview" },
      { time: "04:10", topic: "Delta Sensitivity & Probability" },
      { time: "09:15", topic: "Theta Decay Non-Linearity" },
      { time: "14:20", topic: "Vega & IV Crush Mechanics" }
    ],
    relatedArticleSlug: "understanding-options-greeks-delta-theta-vega"
  },
  {
    id: "risk-reward-1-2-rule-short",
    title: "Why 90% of Traders Fail: The Math of the 1:2 Risk/Reward Rule",
    category: "Risk Management",
    duration: "00:59",
    thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=60",
    youtubeId: "dQw4w9WgXcQ",
    description: "Short educational video showing why win rate alone doesn't guarantee trading survival without mathematical risk-to-reward control.",
    type: "Short Tutorial",
    transcript: "Did you know a trader with only a 40% win rate can remain mathematically profitable if their average Risk/Reward ratio is 1:2? Here is the exact proof...",
    timestamps: [
      { time: "00:00", topic: "Win Rate vs Risk/Reward Matrix" },
      { time: "00:30", topic: "Mathematical Expectancy Equation" }
    ],
    relatedArticleSlug: "relative-strength-index-rsi-guide"
  }
];
