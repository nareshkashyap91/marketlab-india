import React from "react";
import Link from "next/link";
import { GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";

export function LearningPathsSection() {
  const paths = [
    {
      level: "Level 1: Beginner Investor",
      target: "Absolute Beginners & SIP Investors",
      topics: ["Stock Market Structure 101", "Demat Account Setup", "SIP Compounding Math", "Order Execution Types"],
      href: "/categories/stock-market-basics"
    },
    {
      level: "Level 2: Technical Trader",
      target: "Chart Analysts & Active Traders",
      topics: ["Candlestick Pattern Mastery", "RSI Oscillator & Divergence", "Moving Average Crossovers", "1:2 Risk/Reward Rule"],
      href: "/categories/technical-analysis"
    },
    {
      level: "Level 3: Options Derivatives",
      target: "Index & Stock Options Learners",
      topics: ["Black-Scholes Model Basics", "Options Greeks (Delta, Theta, Vega)", "Payoff Diagram Construction", "Implied Volatility"],
      href: "/categories/options-education"
    },
    {
      level: "Level 4: Quantitative Developer",
      target: "Programmers & Algo Engineers",
      topics: ["Python Pandas for Financial Data", "Vectorized Indicators", "Backtesting Strategy Engine", "Broker API State Machine"],
      href: "/categories/algo-trading"
    }
  ];

  return (
    <section className="w-full py-16 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center justify-center gap-1.5">
            <GraduationCap className="w-4 h-4" /> Structured Curriculum
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100">Step-by-Step Learning Paths</h2>
          <p className="text-xs sm:text-sm text-slate-400">Choose your structured educational track based on your experience level.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((p, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20">
                  {p.level}
                </span>
                <h3 className="text-sm font-bold text-slate-100">{p.target}</h3>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  {p.topics.map((t, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={p.href}
                className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-semibold flex items-center justify-center gap-1.5 transition-colors border border-slate-700"
              >
                <span>Start Path</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
