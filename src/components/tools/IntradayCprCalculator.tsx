"use client";

import React, { useState } from "react";
import { Activity, RefreshCw, Zap, TrendingUp, TrendingDown, Info, ShieldAlert } from "lucide-react";

export function IntradayCprCalculator() {
  // Default values based on recent Nifty spot levels
  const [high, setHigh] = useState<number>(24350);
  const [low, setLow] = useState<number>(24120);
  const [close, setClose] = useState<number>(24280);

  // Pivot & CPR Formulas
  const pivot = (high + low + close) / 3;
  const bc = (high + low) / 2;
  const tc = (pivot - bc) + pivot;

  // Pivot Range width
  const cprWidth = Math.abs(tc - bc);
  const cprWidthPct = (cprWidth / pivot) * 100;
  const cprType = cprWidthPct < 0.25 ? "Narrow CPR (High Breakout Expectation)" : cprWidthPct > 0.6 ? "Wide CPR (Range-Bound Expectation)" : "Average CPR";

  // Support and Resistance Levels
  const r1 = 2 * pivot - low;
  const s1 = 2 * pivot - high;
  const r2 = pivot + (high - low);
  const s2 = pivot - (high - low);
  const r3 = high + 2 * (pivot - low);
  const s3 = low - 2 * (high - pivot);

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-slate-100">Intraday CPR & Pivot Points Calculator</h3>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Market Live Ready
              </span>
            </div>
            <p className="text-xs text-slate-400">Calculate Central Pivot Range (CPR), R1-R3, and S1-S3 levels for Nifty 50 & BankNifty</p>
          </div>
        </div>
        <button
          onClick={() => {
            setHigh(24350);
            setLow(24120);
            setClose(24280);
          }}
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 text-xs flex items-center gap-1.5 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      {/* Input Form */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Previous Day High (₹):</label>
          <input
            type="number"
            value={high}
            onChange={(e) => setHigh(parseFloat(e.target.value) || 0)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-amber-500 focus:outline-none font-mono text-sm"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Previous Day Low (₹):</label>
          <input
            type="number"
            value={low}
            onChange={(e) => setLow(parseFloat(e.target.value) || 0)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-amber-500 focus:outline-none font-mono text-sm"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-slate-300">Previous Day Close (₹):</label>
          <input
            type="number"
            value={close}
            onChange={(e) => setClose(parseFloat(e.target.value) || 0)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-amber-500 focus:outline-none font-mono text-sm"
          />
        </div>
      </div>

      {/* CPR Summary Card */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">CPR Classification:</span>
          <h4 className="text-base font-bold text-slate-100">{cprType}</h4>
          <p className="text-xs text-slate-400">CPR Width: {cprWidth.toFixed(2)} pts ({cprWidthPct.toFixed(2)}%)</p>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs">
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-slate-500 block text-[10px]">TC (Top CPR)</span>
            <span className="text-cyan-400 font-bold">{tc.toFixed(2)}</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-amber-500/40">
            <span className="text-slate-500 block text-[10px]">Pivot (P)</span>
            <span className="text-amber-400 font-bold">{pivot.toFixed(2)}</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
            <span className="text-slate-500 block text-[10px]">BC (Bottom CPR)</span>
            <span className="text-cyan-400 font-bold">{bc.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Intraday Levels Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Resistance Levels */}
        <div className="p-4 rounded-xl bg-slate-950 border border-rose-500/20 space-y-3">
          <h4 className="text-xs font-mono text-rose-400 uppercase font-bold flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4" /> Intraday Resistance Levels (Bulls Target)
          </h4>
          <div className="space-y-2 font-mono text-xs">
            <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
              <span className="text-rose-400 font-bold">R3 (Extreme Extension)</span>
              <span className="text-slate-100 font-bold">{r3.toFixed(2)}</span>
            </div>
            <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
              <span className="text-rose-400 font-bold">R2 (Major Resistance)</span>
              <span className="text-slate-100 font-bold">{r2.toFixed(2)}</span>
            </div>
            <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
              <span className="text-rose-400 font-bold">R1 (First Target)</span>
              <span className="text-slate-100 font-bold">{r1.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Support Levels */}
        <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/20 space-y-3">
          <h4 className="text-xs font-mono text-emerald-400 uppercase font-bold flex items-center gap-1.5">
            <TrendingDown className="w-4 h-4" /> Intraday Support Levels (Bears Target)
          </h4>
          <div className="space-y-2 font-mono text-xs">
            <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
              <span className="text-emerald-400 font-bold">S1 (First Demand Zone)</span>
              <span className="text-slate-100 font-bold">{s1.toFixed(2)}</span>
            </div>
            <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
              <span className="text-emerald-400 font-bold">S2 (Major Support)</span>
              <span className="text-slate-100 font-bold">{s2.toFixed(2)}</span>
            </div>
            <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
              <span className="text-emerald-400 font-bold">S3 (Extreme Demand)</span>
              <span className="text-slate-100 font-bold">{s3.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Note */}
      <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 leading-relaxed font-sans">
        <p className="font-semibold text-slate-200 mb-1 flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-cyan-400" /> How Intraday Traders Use CPR in Live Market:
        </p>
        If the current live price opens ABOVE Top CPR (TC), bias is bullish. If live price opens BELOW Bottom CPR (BC), bias is bearish. A narrow CPR width indicates a high probability of a strong trending intraday move.
      </div>
    </div>
  );
}
