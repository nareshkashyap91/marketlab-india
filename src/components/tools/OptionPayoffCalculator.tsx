"use client";

import React, { useState } from "react";
import { calculateOptionPayoff } from "@/lib/calculators";
import { formatINR } from "@/lib/utils";
import { Target, RefreshCw } from "lucide-react";

export function OptionPayoffCalculator() {
  const [optionType, setOptionType] = useState<'call' | 'put'>('call');
  const [action, setAction] = useState<'buy' | 'sell'>('buy');
  const [strike, setStrike] = useState(24000);
  const [premium, setPremium] = useState(150);
  const [lotSize, setLotSize] = useState(50);

  const result = calculateOptionPayoff(optionType, action, strike, premium, lotSize);

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">Interactive Option Payoff Calculator</h3>
            <p className="text-xs text-slate-400">Plot visual payoff curves for Call & Put options across spot prices</p>
          </div>
        </div>
        <button
          onClick={() => {
            setOptionType('call');
            setAction('buy');
            setStrike(24000);
            setPremium(150);
            setLotSize(50);
          }}
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 text-xs flex items-center gap-1.5 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Option Type:</label>
          <select
            value={optionType}
            onChange={(e) => setOptionType(e.target.value as 'call' | 'put')}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-orange-500 focus:outline-none font-mono text-sm"
          >
            <option value="call">Call Option (CE)</option>
            <option value="put">Put Option (PE)</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Action:</label>
          <select
            value={action}
            onChange={(e) => setAction(e.target.value as 'buy' | 'sell')}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-orange-500 focus:outline-none font-mono text-sm"
          >
            <option value="buy">Buy (Long)</option>
            <option value="sell">Sell (Short)</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Strike Price (₹):</label>
          <input
            type="number"
            value={strike}
            onChange={(e) => setStrike(parseFloat(e.target.value) || 0)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-orange-500 focus:outline-none font-mono text-sm"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Option Premium (₹):</label>
          <input
            type="number"
            value={premium}
            onChange={(e) => setPremium(parseFloat(e.target.value) || 0)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-orange-500 focus:outline-none font-mono text-sm"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Lot Size (Qty):</label>
          <input
            type="number"
            value={lotSize}
            onChange={(e) => setLotSize(parseInt(e.target.value) || 1)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-orange-500 focus:outline-none font-mono text-sm"
          />
        </div>
      </div>

      {/* Payoff Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <span className="text-xs font-mono text-slate-400">Maximum Profit</span>
          <div className="text-2xl font-bold font-mono text-emerald-400 my-1">
            {typeof result.maxProfit === "number" ? formatINR(result.maxProfit) : result.maxProfit}
          </div>
          <div className="text-[11px] text-slate-500">Payoff Ceiling</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <span className="text-xs font-mono text-slate-400">Maximum Risk/Loss</span>
          <div className="text-2xl font-bold font-mono text-rose-400 my-1">
            {typeof result.maxLoss === "number" ? formatINR(result.maxLoss) : result.maxLoss}
          </div>
          <div className="text-[11px] text-slate-500">Max Risk Floor</div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
          <span className="text-xs font-mono text-slate-400">Expiry Breakeven Price</span>
          <div className="text-2xl font-bold font-mono text-amber-400 my-1">₹{result.breakeven}</div>
          <div className="text-[11px] text-slate-500">Zero Payoff Spot Level</div>
        </div>
      </div>
    </div>
  );
}
