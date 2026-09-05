"use client";

import React, { useState } from "react";
import { PiggyBank, ArrowUpRight, ShieldCheck, AlertCircle } from "lucide-react";

export function SwpCalculator() {
  const [initialCorpus, setInitialCorpus] = useState<number>(2500000); // ₹25 Lakhs
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState<number>(20000); // ₹20,000/mo
  const [expectedReturnRate, setExpectedReturnRate] = useState<number>(12); // 12% p.a.
  const [durationYears, setDurationYears] = useState<number>(15); // 15 Years

  // SWP Compound Simulation Math
  const totalMonths = durationYears * 12;
  const monthlyRate = expectedReturnRate / 100 / 12;

  let currentCorpus = initialCorpus;
  let totalWithdrawn = 0;
  let isDepletedEarly = false;
  let depletionMonth = 0;

  for (let m = 1; m <= totalMonths; m++) {
    if (currentCorpus <= 0) {
      if (!isDepletedEarly) {
        isDepletedEarly = true;
        depletionMonth = m - 1;
      }
      break;
    }

    const withdrawAmount = Math.min(currentCorpus, monthlyWithdrawal);
    currentCorpus -= withdrawAmount;
    totalWithdrawn += withdrawAmount;

    // Apply monthly compound growth on remaining balance
    currentCorpus += currentCorpus * monthlyRate;
  }

  const finalBalance = Math.max(0, currentCorpus);
  const netWealthGenerated = totalWithdrawn + finalBalance - initialCorpus;

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
        <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <PiggyBank className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-100">SWP (Systematic Withdrawal Plan) Calculator</h3>
          <p className="text-xs text-slate-400">Calculate monthly passive cash payouts & remaining investment balance</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Initial Investment Corpus */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="text-slate-300 font-semibold">Total Initial Investment Corpus (₹)</label>
              <span className="font-mono text-cyan-400 font-bold">₹{initialCorpus.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="range"
              min="100000"
              max="50000000"
              step="50000"
              value={initialCorpus}
              onChange={(e) => setInitialCorpus(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>₹1 Lakh</span>
              <span>₹50 Lakhs</span>
              <span>₹5 Crores</span>
            </div>
          </div>

          {/* Monthly Withdrawal Amount */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="text-slate-300 font-semibold">Monthly Withdrawal Amount (₹)</label>
              <span className="font-mono text-emerald-400 font-bold">₹{monthlyWithdrawal.toLocaleString("en-IN")}/mo</span>
            </div>
            <input
              type="range"
              min="1000"
              max="500000"
              step="1000"
              value={monthlyWithdrawal}
              onChange={(e) => setMonthlyWithdrawal(Number(e.target.value))}
              className="w-full accent-emerald-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>₹1,000</span>
              <span>₹50,000</span>
              <span>₹5 Lakhs</span>
            </div>
          </div>

          {/* Expected Return Rate */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="text-slate-300 font-semibold">Expected Return Rate (% p.a.)</label>
              <span className="font-mono text-amber-400 font-bold">{expectedReturnRate}% p.a.</span>
            </div>
            <input
              type="range"
              min="1"
              max="25"
              step="0.5"
              value={expectedReturnRate}
              onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>1% (Conservative)</span>
              <span>12% (Equity MF Avg)</span>
              <span>25% (High Growth)</span>
            </div>
          </div>

          {/* Duration (Years) */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="text-slate-300 font-semibold">Withdrawal Time Period (Years)</label>
              <span className="font-mono text-blue-400 font-bold">{durationYears} Years</span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              value={durationYears}
              onChange={(e) => setDurationYears(Number(e.target.value))}
              className="w-full accent-blue-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>1 Year</span>
              <span>15 Years</span>
              <span>30 Years</span>
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Plan Sustainability</span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono ${isDepletedEarly ? "bg-rose-500/10 text-rose-400 border border-rose-500/20" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"}`}>
                {isDepletedEarly ? `Depleted in ${(depletionMonth / 12).toFixed(1)} Yrs` : "Corpus Growing / Sustainable"}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Initial Investment</span>
                <span className="text-base font-bold font-mono text-slate-200">₹{initialCorpus.toLocaleString("en-IN")}</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Total Withdrawn Cash</span>
                <span className="text-base font-bold font-mono text-emerald-400">₹{totalWithdrawn.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
              </div>
            </div>

            {/* Remaining Final Balance */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Remaining Final Balance after {durationYears} Yrs</span>
                <span className="text-2xl font-extrabold font-mono text-cyan-400">
                  ₹{finalBalance.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                </span>
              </div>
              <ArrowUpRight className="w-8 h-8 text-cyan-400 opacity-60" />
            </div>

            {/* Warning or Sustainability Notice */}
            {isDepletedEarly ? (
              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center gap-3 text-xs text-rose-300">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                <p>
                  <strong>Caution:</strong> Your monthly withdrawal of ₹{monthlyWithdrawal.toLocaleString("en-IN")} is higher than the compound growth rate. The corpus runs out in {(depletionMonth / 12).toFixed(1)} years.
                </p>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3 text-xs text-emerald-300">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <p>
                  <strong>Sustainable Plan:</strong> Your return rate ({expectedReturnRate}%) covers your monthly payout. Net wealth growth of ₹{netWealthGenerated.toLocaleString("en-IN", { maximumFractionDigits: 0 })} created above initial principal!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
