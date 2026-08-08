"use client";

import React, { useState } from "react";
import { calculateCAGR } from "@/lib/calculators";
import { formatINR, formatPercent, formatNumber } from "@/lib/utils";
import { TrendingUp, RefreshCw, Layers } from "lucide-react";

export function CagrCalculator() {
  const [initialValue, setInitialValue] = useState(100000);
  const [finalValue, setFinalValue] = useState(250000);
  const [years, setYears] = useState(5);

  const result = calculateCAGR(initialValue, finalValue, years);

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">Interactive CAGR Calculator</h3>
            <p className="text-xs text-slate-400">Calculate Compound Annual Growth Rate of investments and stock portfolios</p>
          </div>
        </div>
        <button
          onClick={() => {
            setInitialValue(100000);
            setFinalValue(250000);
            setYears(5);
          }}
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 text-xs flex items-center gap-1.5 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      {/* Input Form Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Initial Investment (₹):</label>
          <input
            type="number"
            value={initialValue}
            onChange={(e) => setInitialValue(parseFloat(e.target.value) || 0)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-emerald-500 focus:outline-none font-mono text-sm"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Final Investment Value (₹):</label>
          <input
            type="number"
            value={finalValue}
            onChange={(e) => setFinalValue(parseFloat(e.target.value) || 0)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-emerald-500 focus:outline-none font-mono text-sm"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Time Duration (Years):</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(parseFloat(e.target.value) || 1)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-emerald-500 focus:outline-none font-mono text-sm"
          />
        </div>
      </div>

      {/* Result Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <span className="text-xs font-mono text-slate-400">Annual CAGR</span>
          <div className="text-3xl font-extrabold font-mono text-emerald-400 my-1">{formatPercent(result.cagr)}</div>
          <div className="text-[11px] text-slate-500">Compounded Annually</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <span className="text-xs font-mono text-slate-400">Total Absolute Gain</span>
          <div className="text-2xl font-bold font-mono text-slate-100 my-1">{formatINR(result.totalGain)}</div>
          <div className="text-[11px] text-emerald-400 font-mono">+{formatPercent(result.totalPercentage)}</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <span className="text-xs font-mono text-slate-400">Wealth Multiplier</span>
          <div className="text-2xl font-bold font-mono text-cyan-400 my-1">{result.multiplier}x</div>
          <div className="text-[11px] text-slate-500">Capital Growth Factor</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <span className="text-xs font-mono text-slate-400">Holding Period</span>
          <div className="text-2xl font-bold font-mono text-slate-100 my-1">{years} Years</div>
          <div className="text-[11px] text-slate-500">{years * 12} Months</div>
        </div>
      </div>

      {/* Year-by-Year Growth Table */}
      {result.projections.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4" /> Year-by-Year Projected Compounding Schedule
          </h4>
          <div className="overflow-x-auto border border-slate-800 rounded-xl">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-3">Year</th>
                  <th className="p-3">Projected Portfolio Value (₹)</th>
                  <th className="p-3">Cumulative Gain (₹)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-900/40">
                {result.projections.map((p) => (
                  <tr key={p.year} className="hover:bg-slate-800/40">
                    <td className="p-3 text-cyan-400 font-bold">Year {p.year}</td>
                    <td className="p-3 text-slate-200">{formatINR(p.value)}</td>
                    <td className="p-3 text-emerald-400">+{formatINR(p.value - initialValue)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Formula Explanation */}
      <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 space-y-1 font-sans">
        <span className="font-semibold text-slate-200">CAGR Formula:</span>
        <div className="font-mono text-cyan-400">CAGR = (Final Value / Initial Value)^(1 / Years) - 1</div>
        <p>
          CAGR represents the constant rate at which an investment would have grown if it had compounded at a steady rate each year. It smoothes out historical market volatility.
        </p>
      </div>
    </div>
  );
}
