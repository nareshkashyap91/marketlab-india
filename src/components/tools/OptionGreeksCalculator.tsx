"use client";

import React, { useState } from "react";
import { Activity, Target, Zap, Clock, ShieldAlert } from "lucide-react";

// Normal cumulative distribution function N(x) approximation
function cdf(x: number): number {
  const a1 = 0.31938153;
  const a2 = -0.356563782;
  const a3 = 1.781477937;
  const a4 = -1.821255978;
  const a5 = 1.330274429;
  const k = 1.0 / (1.0 + 0.2316419 * Math.abs(x));
  const poly = 1.0 - ((((a5 * k + a4) * k + a3) * k + a2) * k + a1) * k * Math.exp(-x * x / 2.0) / Math.sqrt(2 * Math.PI);
  return x >= 0 ? poly : 1.0 - poly;
}

// Probability density function N'(x)
function pdf(x: number): number {
  return Math.exp(-x * x / 2.0) / Math.sqrt(2 * Math.PI);
}

export function OptionGreeksCalculator() {
  const [spotPrice, setSpotPrice] = useState<number>(24500); // Nifty Spot
  const [strikePrice, setStrikePrice] = useState<number>(24500); // Strike
  const [dte, setDte] = useState<number>(7); // 7 days to expiry
  const [volatility, setVolatility] = useState<number>(15); // 15% IV
  const [riskFreeRate, setRiskFreeRate] = useState<number>(7); // 7% rate

  // Black-Scholes Calculations
  const S = Math.max(1, spotPrice);
  const K = Math.max(1, strikePrice);
  const T = Math.max(0.0001, dte / 365.0);
  const sigma = Math.max(0.01, volatility / 100.0);
  const r = riskFreeRate / 100.0;

  const d1 = (Math.log(S / K) + (r + (sigma * sigma) / 2.0) * T) / (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);

  // Prices
  const callPrice = S * cdf(d1) - K * Math.exp(-r * T) * cdf(d2);
  const putPrice = K * Math.exp(-r * T) * cdf(-d2) - S * cdf(-d1);

  // Greeks
  const callDelta = cdf(d1);
  const putDelta = cdf(d1) - 1.0;

  const gamma = pdf(d1) / (S * sigma * Math.sqrt(T));

  // Theta (annualized -> convert to per calendar day)
  const thetaCallAnnual = -(S * pdf(d1) * sigma) / (2 * Math.sqrt(T)) - r * K * Math.exp(-r * T) * cdf(d2);
  const thetaPutAnnual = -(S * pdf(d1) * sigma) / (2 * Math.sqrt(T)) + r * K * Math.exp(-r * T) * cdf(-d2);
  const thetaCallDaily = thetaCallAnnual / 365.0;
  const thetaPutDaily = thetaPutAnnual / 365.0;

  // Vega (per 1% IV change)
  const vega = (S * pdf(d1) * Math.sqrt(T)) / 100.0;

  const moneyness = S > K ? "ITM (In The Money)" : S < K ? "OTM (Out of The Money)" : "ATM (At The Money)";

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
        <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Activity className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-100">Black-Scholes Option Greeks Calculator</h3>
          <p className="text-xs text-slate-400">Calculate Call/Put Theoretical Pricing, Delta, Gamma, Theta & Vega</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Spot Price */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="text-slate-300 font-semibold">Underlying Spot Price (S)</label>
              <span className="font-mono text-cyan-400 font-bold">₹{spotPrice.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="number"
              min="10"
              max="500000"
              value={spotPrice}
              onChange={(e) => setSpotPrice(Math.max(10, Number(e.target.value)))}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 font-mono"
            />
          </div>

          {/* Strike Price */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="text-slate-300 font-semibold">Option Strike Price (K)</label>
              <span className="font-mono text-emerald-400 font-bold">₹{strikePrice.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="number"
              min="10"
              max="500000"
              value={strikePrice}
              onChange={(e) => setStrikePrice(Math.max(10, Number(e.target.value)))}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 font-mono"
            />
          </div>

          {/* Days to Expiration (DTE) */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="text-slate-300 font-semibold">Days to Expiration (DTE)</label>
              <span className="font-mono text-amber-400 font-bold">{dte} Day{dte > 1 ? "s" : ""}</span>
            </div>
            <input
              type="range"
              min="1"
              max="90"
              value={dte}
              onChange={(e) => setDte(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
          </div>

          {/* Implied Volatility (IV %) */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="text-slate-300 font-semibold">Implied Volatility (IV %)</label>
              <span className="font-mono text-purple-400 font-bold">{volatility}%</span>
            </div>
            <input
              type="range"
              min="1"
              max="150"
              step="0.5"
              value={volatility}
              onChange={(e) => setVolatility(Number(e.target.value))}
              className="w-full accent-purple-400 cursor-pointer"
            />
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Price Summary Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* CALL */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-400">
                <span>CALL (CE) PRICE</span>
                <span className="text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded font-mono">B-S Model</span>
              </div>
              <span className="text-2xl font-extrabold font-mono text-emerald-400 block">
                ₹{callPrice.toFixed(2)}
              </span>
              <div className="text-[11px] font-mono text-slate-400 pt-1 space-y-1 border-t border-slate-800">
                <div className="flex justify-between">
                  <span>Delta (Δ):</span>
                  <span className="text-emerald-400 font-bold">+{callDelta.toFixed(3)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Theta (Θ/day):</span>
                  <span className="text-rose-400 font-bold">{thetaCallDaily.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* PUT */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-rose-500/30 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-rose-400">
                <span>PUT (PE) PRICE</span>
                <span className="text-[10px] bg-rose-500/10 px-2 py-0.5 rounded font-mono">B-S Model</span>
              </div>
              <span className="text-2xl font-extrabold font-mono text-rose-400 block">
                ₹{putPrice.toFixed(2)}
              </span>
              <div className="text-[11px] font-mono text-slate-400 pt-1 space-y-1 border-t border-slate-800">
                <div className="flex justify-between">
                  <span>Delta (Δ):</span>
                  <span className="text-rose-400 font-bold">{putDelta.toFixed(3)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Theta (Θ/day):</span>
                  <span className="text-rose-400 font-bold">{thetaPutDaily.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Common Option Greeks Table */}
          <div className="p-5 rounded-3xl bg-slate-950 border border-slate-800 space-y-3">
            <h4 className="text-xs font-mono text-cyan-400 uppercase font-bold tracking-wider">Option Sensitivity Greeks</h4>

            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 block uppercase">Gamma (Γ) [Both]</span>
                <span className="text-sm font-bold text-cyan-400">{gamma.toFixed(5)}</span>
                <span className="text-[9px] text-slate-500 block">Delta change per ₹1 spot move</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 block uppercase">Vega (ν) [Both]</span>
                <span className="text-sm font-bold text-purple-400">₹{vega.toFixed(2)}</span>
                <span className="text-[9px] text-slate-500 block">Price change per +1% IV move</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center text-xs">
              <span className="text-slate-400">Call Strike Moneyness:</span>
              <span className="font-mono text-amber-400 font-bold">{moneyness}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
