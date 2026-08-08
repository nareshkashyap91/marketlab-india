"use client";

import React, { useState } from "react";
import { calculateRiskReward } from "@/lib/calculators";
import { formatINR, formatNumber } from "@/lib/utils";
import { ShieldAlert, RefreshCw, CheckCircle2, XCircle } from "lucide-react";

export function RiskRewardCalculator() {
  const [entry, setEntry] = useState(2500);
  const [stopLoss, setStopLoss] = useState(2450);
  const [target, setTarget] = useState(2650);
  const [capital, setCapital] = useState(100000);
  const [riskPercent, setRiskPercent] = useState(2);

  const result = calculateRiskReward(entry, stopLoss, target, capital, riskPercent);

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">Interactive Risk/Reward Calculator</h3>
            <p className="text-xs text-slate-400">Calculate trade R:R ratio, position sizing, and maximum monetary risk</p>
          </div>
        </div>
        <button
          onClick={() => {
            setEntry(2500);
            setStopLoss(2450);
            setTarget(2650);
            setCapital(100000);
            setRiskPercent(2);
          }}
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 text-xs flex items-center gap-1.5 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      {/* Input Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Entry Price (₹):</label>
          <input
            type="number"
            value={entry}
            onChange={(e) => setEntry(parseFloat(e.target.value) || 0)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-amber-500 focus:outline-none font-mono text-sm"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 text-rose-400">Stop Loss (₹):</label>
          <input
            type="number"
            value={stopLoss}
            onChange={(e) => setStopLoss(parseFloat(e.target.value) || 0)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-rose-400 focus:border-rose-500 focus:outline-none font-mono text-sm"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300 text-emerald-400">Target Price (₹):</label>
          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(parseFloat(e.target.value) || 0)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-emerald-400 focus:border-emerald-500 focus:outline-none font-mono text-sm"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Total Capital (₹):</label>
          <input
            type="number"
            value={capital}
            onChange={(e) => setCapital(parseFloat(e.target.value) || 0)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-amber-500 focus:outline-none font-mono text-sm"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Max Risk % per Trade:</label>
          <input
            type="number"
            step="0.5"
            value={riskPercent}
            onChange={(e) => setRiskPercent(parseFloat(e.target.value) || 1)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-amber-500 focus:outline-none font-mono text-sm"
          />
        </div>
      </div>

      {/* Output Results */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <span className="text-xs font-mono text-slate-400">Risk : Reward Ratio</span>
          <div className="text-3xl font-extrabold font-mono text-amber-400 my-1">1 : {result.rrRatio}</div>
          <div className="my-1">
            {result.rrRatio >= 2 ? (
              <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" /> Passes 1:2 Minimum Rule
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[11px] text-rose-400 font-semibold">
                <XCircle className="w-3.5 h-3.5" /> Below 1:2 Standard
              </span>
            )}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <span className="text-xs font-mono text-slate-400">Position Size (Shares)</span>
          <div className="text-2xl font-bold font-mono text-cyan-400 my-1">{formatNumber(result.positionSizeShares, 0)} Shares</div>
          <div className="text-[11px] text-slate-500">Capital Needed: {formatINR(result.totalInvestmentNeeded)}</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <span className="text-xs font-mono text-slate-400">Max Monetary Loss</span>
          <div className="text-2xl font-bold font-mono text-rose-400 my-1">-{formatINR(result.totalMaxLoss)}</div>
          <div className="text-[11px] text-slate-500">{riskPercent}% of Portfolio</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <span className="text-xs font-mono text-slate-400">Potential Target Profit</span>
          <div className="text-2xl font-bold font-mono text-emerald-400 my-1">+{formatINR(result.totalPotentialProfit)}</div>
          <div className="text-[11px] text-slate-500">Target Gain</div>
        </div>
      </div>
    </div>
  );
}
