import React from "react";
import Link from "next/link";
import { Code2, ArrowRight, CheckCircle2, Terminal } from "lucide-react";

export function PythonAlgoSection() {
  return (
    <section className="w-full py-16 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono text-purple-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" /> rsi_strategy.py
              </span>
              <span className="text-[10px] font-mono text-slate-500">Python 3.11 / Pandas</span>
            </div>
            <pre className="text-[11px] font-mono text-slate-300 leading-relaxed overflow-x-auto bg-slate-900/90 p-4 rounded-xl border border-slate-800">
{`import pandas as pd
import numpy as np

# Download Indian Stock OHLC Data
df = pd.read_csv('NIFTY50_historical.csv')

# Vectorized 14-period RSI
delta = df['Close'].diff()
gain = delta.where(delta > 0, 0)
loss = -delta.where(delta < 0, 0)

avg_gain = gain.ewm(alpha=1/14, min_periods=14).mean()
avg_loss = loss.ewm(alpha=1/14, min_periods=14).mean()

rs = avg_gain / avg_loss
df['RSI'] = 100 - (100 / (1 + rs))

print("RSI Vectorized Processing Complete.")`}
            </pre>
          </div>

          <div className="order-1 lg:order-2 space-y-4">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Python & Algorithmic Trading
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 leading-tight">
              Build Backtesting Engines & <br />
              <span className="gradient-text-cyan">Vectorized Financial Code</span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Transition from manual chart watching to systematic Python data analysis. Learn how to parse financial time series data, compute vectorized technical indicators, eliminate forward-looking bias, and model transaction costs.
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Pandas, NumPy, and YFinance for Historical Indian Market Data</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Sharpe Ratio, Sortino Ratio, and Max Drawdown Python Modules</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Broker API Order State Machine Architectures (SmartAPI, Broker APIs)</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/categories/python-for-trading"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-slate-100 font-bold text-xs shadow-lg transition-all"
              >
                <span>View Python Tutorials</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
