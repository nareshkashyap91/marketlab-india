"use client";

import React, { useState } from "react";
import { Calculator, IndianRupee, PieChart, ShieldCheck, Info } from "lucide-react";

export function CapitalGainsTaxCalculator() {
  const [buyPrice, setBuyPrice] = useState<number>(500);
  const [sellPrice, setSellPrice] = useState<number>(750);
  const [quantity, setQuantity] = useState<number>(200);
  const [holdingMonths, setHoldingMonths] = useState<number>(14); // > 12 = Long Term
  const [otherLtcgGains, setOtherLtcgGains] = useState<number>(0); // Other gains utilizing 1.25L limit

  // Calculations
  const totalInvestment = buyPrice * quantity;
  const totalSaleValue = sellPrice * quantity;
  const grossCapitalGain = totalSaleValue - totalInvestment;

  const isLongTerm = holdingMonths >= 12;

  // Budget 2024 tax rules: STCG = 20%, LTCG = 12.5% with ₹1,25,000 annual exemption
  const taxRatePercent = isLongTerm ? 12.5 : 20;

  let taxableGain = 0;
  let exemptionUsed = 0;
  let netTaxPayable = 0;

  if (grossCapitalGain > 0) {
    if (isLongTerm) {
      const maxExemption = 125000;
      const remainingExemption = Math.max(0, maxExemption - otherLtcgGains);
      exemptionUsed = Math.min(grossCapitalGain, remainingExemption);
      taxableGain = Math.max(0, grossCapitalGain - exemptionUsed);
      netTaxPayable = taxableGain * 0.125;
    } else {
      taxableGain = grossCapitalGain;
      netTaxPayable = taxableGain * 0.20;
    }
  }

  const netProfitAfterTax = grossCapitalGain - netTaxPayable;

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
        <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-100">Capital Gains Tax Calculator (India 2024-25)</h3>
          <p className="text-xs text-slate-400">Calculate STCG (@20%) & LTCG (@12.5%) with ₹1.25L exemption limit</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Purchase Price */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="text-slate-300 font-semibold">Buy Price per Share / Unit (₹)</label>
              <span className="font-mono text-cyan-400 font-bold">₹{buyPrice.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="number"
              min="1"
              max="100000"
              value={buyPrice}
              onChange={(e) => setBuyPrice(Math.max(1, Number(e.target.value)))}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 font-mono"
            />
          </div>

          {/* Sale Price */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="text-slate-300 font-semibold">Sale Price per Share / Unit (₹)</label>
              <span className="font-mono text-emerald-400 font-bold">₹{sellPrice.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="number"
              min="1"
              max="100000"
              value={sellPrice}
              onChange={(e) => setSellPrice(Math.max(1, Number(e.target.value)))}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 font-mono"
            />
          </div>

          {/* Quantity */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="text-slate-300 font-semibold">Quantity (Shares / Units)</label>
              <span className="font-mono text-slate-200 font-bold">{quantity.toLocaleString("en-IN")}</span>
            </div>
            <input
              type="number"
              min="1"
              max="1000000"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 font-mono"
            />
          </div>

          {/* Holding Period */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="text-slate-300 font-semibold">Holding Period (Months)</label>
              <span className="font-mono text-amber-400 font-bold">
                {holdingMonths} Month{holdingMonths > 1 ? "s" : ""} ({isLongTerm ? "LTCG" : "STCG"})
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="60"
              value={holdingMonths}
              onChange={(e) => setHoldingMonths(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>1 mo (STCG)</span>
              <span>12 mo (LTCG threshold)</span>
              <span>60 mo (5 yrs)</span>
            </div>
          </div>

          {/* Other LTCG Gains Utilized */}
          {isLongTerm && (
            <div className="space-y-2 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
              <div className="flex justify-between items-center text-xs">
                <label className="text-slate-400 flex items-center gap-1">
                  Other LTCG Gains Used (₹1.25L Limit) <Info className="w-3.5 h-3.5 text-cyan-400" />
                </label>
                <span className="font-mono text-slate-300">₹{otherLtcgGains.toLocaleString("en-IN")}</span>
              </div>
              <input
                type="number"
                min="0"
                max="125000"
                step="5000"
                value={otherLtcgGains}
                onChange={(e) => setOtherLtcgGains(Math.max(0, Math.min(125000, Number(e.target.value))))}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-100 font-mono"
              />
            </div>
          )}
        </div>

        {/* Results Column */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Gain Type</span>
              <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono ${isLongTerm ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"}`}>
                {isLongTerm ? "LTCG (Long Term @ 12.5%)" : "STCG (Short Term @ 20%)"}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Total Investment</span>
                <span className="text-base font-bold font-mono text-slate-200">₹{totalInvestment.toLocaleString("en-IN")}</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 block">Total Sale Value</span>
                <span className="text-base font-bold font-mono text-slate-200">₹{totalSaleValue.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Gross Capital Gain */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Gross Capital Gain / Loss</span>
                <span className={`text-lg font-extrabold font-mono ${grossCapitalGain >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                  {grossCapitalGain >= 0 ? "+" : ""}₹{grossCapitalGain.toLocaleString("en-IN")}
                </span>
              </div>
              <PieChart className="w-6 h-6 text-cyan-400" />
            </div>

            {/* Exemption & Tax Breakdown */}
            <div className="space-y-2 text-xs font-mono">
              {isLongTerm && (
                <div className="flex justify-between text-slate-400">
                  <span>Exemption Applied (₹1.25L Limit):</span>
                  <span className="text-emerald-400 font-bold">-₹{exemptionUsed.toLocaleString("en-IN")}</span>
                </div>
              )}

              <div className="flex justify-between text-slate-400">
                <span>Taxable Capital Gain:</span>
                <span className="text-slate-200 font-bold">₹{taxableGain.toLocaleString("en-IN")}</span>
              </div>

              <div className="flex justify-between text-slate-400">
                <span>Tax Rate Applicable:</span>
                <span className="text-amber-400 font-bold">{taxRatePercent}%</span>
              </div>
            </div>

            {/* Net Tax Liability Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-500/10 to-amber-500/10 border border-rose-500/20 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-rose-400 uppercase font-bold block">Estimated Tax Payable</span>
                <span className="text-2xl font-extrabold font-mono text-rose-400">
                  ₹{netTaxPayable.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                </span>
              </div>
              <IndianRupee className="w-8 h-8 text-rose-400 opacity-60" />
            </div>

            {/* Post-Tax Net Profit */}
            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase font-bold block">Net Profit After Tax</span>
                <span className="text-2xl font-extrabold font-mono text-emerald-400">
                  ₹{netProfitAfterTax.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                </span>
              </div>
              <ShieldCheck className="w-8 h-8 text-emerald-400 opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
