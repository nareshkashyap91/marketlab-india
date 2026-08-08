import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { RiskRewardCalculator } from "@/components/tools/RiskRewardCalculator";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";

export const metadata: Metadata = {
  title: "Risk/Reward Calculator | Position Size & Risk Management",
  description: "Calculate Risk-to-Reward ratio, maximum monetary loss, target profit, and exact position size in shares for trade risk control.",
};

export default function RiskRewardCalculatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <Link href="/tools" className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-1.5 w-fit">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Free Tools Directory
      </Link>

      <div className="space-y-2">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">Risk Management Tool</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100">Risk/Reward & Position Size Calculator</h1>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Input entry price, stop loss, and target level to evaluate R:R ratios and calculate exact share quantities to preserve capital.
        </p>
      </div>

      <RiskRewardCalculator />

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2.5">
        <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
        <span>Educational Disclaimer: Risk management calculations are for trade discipline learning. MarketLab India does not issue stop-loss calls or trading tips.</span>
      </div>

      <AdBanner slot="tool-rr-bottom" />
    </div>
  );
}
