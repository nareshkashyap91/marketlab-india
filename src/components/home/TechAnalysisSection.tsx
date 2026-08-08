import React from "react";
import Link from "next/link";
import { LineChart, ArrowRight, Activity, CheckCircle2 } from "lucide-react";

export function TechAnalysisSection() {
  return (
    <section className="w-full py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <LineChart className="w-4 h-4" /> Technical Analysis Module
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 leading-tight">
              Master Indicator Math & <br />
              <span className="gradient-text-cyan">Price Action Mechanics</span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Technical analysis is not crystal ball forecasting — it is the quantitative measurement of price momentum, volatility, and volume dynamics. Learn how oscillators are computed and tested on historical Indian stock data.
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Wilder Smoothed RSI (14 Period) & Centerline 50 Shifts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Exponential vs Simple Moving Average Crossover Strategies</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Regular & Hidden Divergence Detection Frameworks</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/pillars/relative-strength-index-rsi"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-glow-cyan transition-all"
              >
                <span>Read RSI Topic Cluster Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Code/Math Preview Box */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono text-cyan-400">RSI Indicator Equation</span>
              <span className="text-[10px] font-mono text-slate-500">LaTeX / Math Syntax</span>
            </div>
            <div className="math-card p-4 rounded-xl space-y-2">
              <div className="font-mono text-xs text-cyan-400">RS = Avg Gain_14 / Avg Loss_14</div>
              <div className="font-mono text-xs text-emerald-400">RSI = 100 - [ 100 / (1 + RS) ]</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our educational interactive RSI calculator allows you to input raw price series and view Wilder smoothing step-by-step.
            </p>
            <Link
              href="/tools/rsi-calculator"
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 text-xs font-mono font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors"
            >
              <Activity className="w-4 h-4" /> Launch Interactive RSI Calculator
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
