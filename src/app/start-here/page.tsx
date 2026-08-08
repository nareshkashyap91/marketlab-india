import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { BookOpen, Compass, CheckCircle2, ArrowRight, TrendingUp, BarChart3, Target, Code2, Sparkles } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";

export const metadata: Metadata = {
  title: "Start Here: Guided Learning Roadmap | MarketLab India",
  description: "Begin your financial education journey with MarketLab India. Step-by-step guided pathways for stock market basics, technical analysis, options, and Python backtesting.",
};

export default function StartHerePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono">
          <Compass className="w-4 h-4" /> GUIDED FINANCIAL ROADMAP
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100">
          Where Should You Start?
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Whether you are an absolute beginner opening your first Demat account or a programmer building quantitative Python backtesting algorithms, follow our structured educational tracks.
        </p>
      </div>

      {/* Pathways Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Track 1 */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-blue-400">Track 1</span>
              <h2 className="text-xl font-bold text-slate-100">Stock Market Foundations</h2>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Designed for beginners. Master equity markets, NSE & BSE order types, clearing corporations, Demat account safety, and SIP compounding.
          </p>
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div className="text-xs font-mono text-slate-500 uppercase">Recommended Starting Points:</div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Stock Market Basics Category
                </span>
                <Link href="/categories/stock-market-basics" className="text-blue-400 hover:underline">Explore &rarr;</Link>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> SIP Investment Calculator
                </span>
                <Link href="/tools/sip-calculator" className="text-blue-400 hover:underline">Launch Tool &rarr;</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Track 2 */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400">Track 2</span>
              <h2 className="text-xl font-bold text-slate-100">Technical & Price Action</h2>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Master price charts, candlestick patterns, RSI oscillator math, moving average crossovers, and 1:2 Risk-to-Reward rules.
          </p>
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div className="text-xs font-mono text-slate-500 uppercase">Recommended Starting Points:</div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> RSI Pillar Page Cluster
                </span>
                <Link href="/pillars/relative-strength-index-rsi" className="text-emerald-400 hover:underline">Read Pillar &rarr;</Link>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Risk/Reward & Position Sizer
                </span>
                <Link href="/tools/risk-reward-calculator" className="text-emerald-400 hover:underline">Launch Tool &rarr;</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Track 3 */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-amber-400">Track 3</span>
              <h2 className="text-xl font-bold text-slate-100">Options Derivatives</h2>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Deconstruct Black-Scholes options pricing, options Greeks (Delta, Theta, Vega), implied volatility rank, and risk-defined payoff spreads.
          </p>
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div className="text-xs font-mono text-slate-500 uppercase">Recommended Starting Points:</div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Options Greeks Master Guide
                </span>
                <Link href="/articles/understanding-options-greeks-delta-theta-vega" className="text-amber-400 hover:underline">Read Article &rarr;</Link>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Option Payoff Calculator
                </span>
                <Link href="/tools/option-payoff-calculator" className="text-amber-400 hover:underline">Launch Tool &rarr;</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Track 4 */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-purple-400">Track 4</span>
              <h2 className="text-xl font-bold text-slate-100">Python Algo & Quant</h2>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Build quantitative strategy engines in Python using Pandas, NumPy, YFinance, backtesting metric modules, and broker execution APIs.
          </p>
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div className="text-xs font-mono text-slate-500 uppercase">Recommended Starting Points:</div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Algo Trading Category
                </span>
                <Link href="/categories/algo-trading" className="text-purple-400 hover:underline">Explore Category &rarr;</Link>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free Tools Directory
                </span>
                <Link href="/tools" className="text-purple-400 hover:underline">Explore Tools &rarr;</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <AdBanner slot="start-here-bottom" />
    </div>
  );
}
