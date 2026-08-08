"use client";

import React, { useState } from "react";
import { calculateSIP } from "@/lib/calculators";
import { formatINR } from "@/lib/utils";
import { PiggyBank, RefreshCw } from "lucide-react";

export function SipCalculator() {
  const [monthly, setMonthly] = useState(10000);
  const [returnRate, setReturnRate] = useState(12);
  const [years, setYears] = useState(15);

  const result = calculateSIP(monthly, returnRate, years);

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <PiggyBank className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">Interactive SIP Calculator</h3>
            <p className="text-xs text-slate-400">Calculate Systematic Investment Plan compounding growth over time</p>
          </div>
        </div>
        <button
          onClick={() => {
            setMonthly(10000);
            setReturnRate(12);
            setYears(15);
          }}
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 text-xs flex items-center gap-1.5 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Monthly Investment (₹):</label>
          <input
            type="number"
            step="1000"
            value={monthly}
            onChange={(e) => setMonthly(parseFloat(e.target.value) || 0)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-purple-500 focus:outline-none font-mono text-sm"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Expected Annual Return (%):</label>
          <input
            type="number"
            step="0.5"
            value={returnRate}
            onChange={(e) => setReturnRate(parseFloat(e.target.value) || 0)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-purple-500 focus:outline-none font-mono text-sm"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Investment Duration (Years):</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(parseInt(e.target.value) || 1)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-purple-500 focus:outline-none font-mono text-sm"
          />
        </div>
      </div>

      {/* Output Results */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <span className="text-xs font-mono text-slate-400">Total Capital Invested</span>
          <div className="text-2xl font-bold font-mono text-slate-100 my-1">{formatINR(result.totalInvestment)}</div>
          <div className="text-[11px] text-slate-500">{years * 12} Monthly Installments</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <span className="text-xs font-mono text-slate-400">Estimated Wealth Returns</span>
          <div className="text-2xl font-bold font-mono text-emerald-400 my-1">+{formatINR(result.estimatedReturns)}</div>
          <div className="text-[11px] text-slate-500">Compound Growth Gain</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <span className="text-xs font-mono text-slate-400">Total Future Corpus Value</span>
          <div className="text-3xl font-extrabold font-mono text-purple-400 my-1">{formatINR(result.totalValue)}</div>
          <div className="text-[11px] text-slate-500">Projected Maturity Value</div>
        </div>
      </div>
    </div>
  );
}
