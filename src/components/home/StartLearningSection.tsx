import React from "react";
import Link from "next/link";
import { Compass, TrendingUp, BarChart3, Target, Code2, ArrowRight } from "lucide-react";

export function StartLearningSection() {
  const tracks = [
    {
      title: "Stock Market Basics",
      desc: "Learn equity structure, demat accounts, order execution (Market/Limit), NSE & BSE settlement.",
      icon: TrendingUp,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      href: "/categories/stock-market-basics"
    },
    {
      title: "Technical Analysis",
      desc: "Master indicators (RSI, MACD, Moving Averages), candlestick anatomy, and trend support/resistance.",
      icon: Compass,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      href: "/categories/technical-analysis"
    },
    {
      title: "Fundamental Valuation",
      desc: "Deconstruct financial statements, P/E ratios, ROE/ROCE, cash flows, and debt metrics.",
      icon: BarChart3,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      href: "/categories/fundamental-analysis"
    },
    {
      title: "Options & Derivatives",
      desc: "Understand Black-Scholes options pricing, Greeks (Delta, Theta, Vega), and payoff curves.",
      icon: Target,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      href: "/categories/options-education"
    },
    {
      title: "Python & Algo Backtesting",
      desc: "Build quantitative strategy scripts in Python using Pandas, NumPy, and historical data.",
      icon: Code2,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      href: "/categories/algo-trading"
    }
  ];

  return (
    <section className="w-full py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Guided Pathways</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-1">Start Learning Here</h2>
          </div>
          <Link href="/start-here" className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1">
            Explore Full Learning Roadmap &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tracks.map((t, idx) => {
            const Icon = t.icon;
            return (
              <Link
                key={idx}
                href={t.href}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 glass-card-hover flex flex-col justify-between group transition-all"
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-xl ${t.bg} ${t.color} ${t.border} border flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{t.desc}</p>
                </div>
                <div className="pt-4 mt-2 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 group-hover:text-cyan-400 font-mono">
                  <span>Start Module</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
