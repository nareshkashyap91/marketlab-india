"use client";

import React, { useState } from "react";
import { calculateRSI, RsiResult } from "@/lib/calculators";
import { Activity, RefreshCw, AlertCircle, CheckCircle, Info } from "lucide-react";

const DEFAULT_PRICES = "2500, 2520, 2510, 2540, 2580, 2570, 2600, 2620, 2610, 2650, 2680, 2660, 2700, 2720, 2750, 2740, 2780, 2800";

export function RsiCalculator() {
  const [priceInput, setPriceInput] = useState(DEFAULT_PRICES);
  const [period, setPeriod] = useState(14);

  const pricesArray = priceInput
    .split(",")
    .map((p) => parseFloat(p.trim()))
    .filter((p) => !isNaN(p));

  const result: RsiResult = calculateRSI(pricesArray, period);

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">Interactive RSI Calculator</h3>
            <p className="text-xs text-slate-400">Calculate 14-period Relative Strength Index with Wilder smoothing math</p>
          </div>
        </div>
        <button
          onClick={() => {
            setPriceInput(DEFAULT_PRICES);
            setPeriod(14);
          }}
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 text-xs flex items-center gap-1.5 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      {/* Input Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
            <span>Comma-Separated Closing Prices (₹):</span>
            <span className="text-[11px] font-mono text-cyan-400">{pricesArray.length} Prices</span>
          </label>
          <textarea
            value={priceInput}
            onChange={(e) => setPriceInput(e.target.value)}
            rows={2}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-cyan-500 focus:outline-none font-mono text-xs"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Lookback Period (N):</label>
          <input
            type="number"
            value={period}
            onChange={(e) => setPeriod(parseInt(e.target.value) || 14)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-cyan-500 focus:outline-none font-mono text-sm"
          />
          <p className="text-[11px] text-slate-500">Standard default is 14 periods.</p>
        </div>
      </div>

      {/* Output Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
          <span className="text-xs font-mono text-slate-400">Current RSI</span>
          <div className="text-3xl font-extrabold font-mono text-cyan-400 my-1">{result.rsi}</div>
          <div className="text-[11px] text-slate-500">Scale: 0 to 100</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
          <span className="text-xs font-mono text-slate-400">Relative Strength (RS)</span>
          <div className="text-2xl font-bold font-mono text-slate-200 my-1">{result.rs}</div>
          <div className="text-[11px] text-slate-500">Avg Gain / Avg Loss</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
          <span className="text-xs font-mono text-slate-400">Avg Gain / Loss</span>
          <div className="text-sm font-mono text-slate-200 my-1">
            <span className="text-emerald-400">+{result.avgGain}</span> / <span className="text-rose-400">-{result.avgLoss}</span>
          </div>
          <div className="text-[11px] text-slate-500">Wilder Smoothed</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
          <span className="text-xs font-mono text-slate-400">Market Status</span>
          <div className="my-1">
            {result.status === 'Overbought' && (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-md border border-rose-500/20">
                <AlertCircle className="w-3.5 h-3.5" /> Overbought (&ge; 70)
              </span>
            )}
            {result.status === 'Oversold' && (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                <CheckCircle className="w-3.5 h-3.5" /> Oversold (&le; 30)
              </span>
            )}
            {result.status === 'Neutral' && (
              <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                <Info className="w-3.5 h-3.5" /> Neutral Zone
              </span>
            )}
          </div>
          <div className="text-[11px] text-slate-500">Momentum Threshold</div>
        </div>
      </div>

      {/* Visual RSI Gauge Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-mono text-slate-400">
          <span>0 (Extreme Oversold)</span>
          <span className="text-emerald-400">30</span>
          <span>50 (Centerline)</span>
          <span className="text-rose-400">70</span>
          <span>100 (Extreme Overbought)</span>
        </div>
        <div className="w-full h-4 bg-slate-950 rounded-full border border-slate-800 relative overflow-hidden">
          {/* Overbought region */}
          <div className="absolute right-0 top-0 bottom-0 w-[30%] bg-rose-500/20 border-l border-rose-500/40" />
          {/* Oversold region */}
          <div className="absolute left-0 top-0 bottom-0 w-[30%] bg-emerald-500/20 border-r border-emerald-500/40" />
          {/* Marker pin */}
          <div
            className="absolute top-0 bottom-0 w-2 bg-cyan-400 shadow-glow-cyan transition-all duration-300"
            style={{ left: `${Math.min(100, Math.max(0, result.rsi))}%` }}
          />
        </div>
      </div>

      {/* Disclaimers & Notes */}
      <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 leading-relaxed font-sans">
        <p className="font-semibold text-slate-200 mb-1">Educational Note on RSI:</p>
        An RSI above 70 indicates strong positive momentum, but does not mean price will reverse immediately. In strong trending markets, RSI can stay overbought for extended periods. Combine RSI with support/resistance levels and trendlines.
      </div>
    </div>
  );
}
