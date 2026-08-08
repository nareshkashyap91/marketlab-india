import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { RsiCalculator } from "@/components/tools/RsiCalculator";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";

export const metadata: Metadata = {
  title: "RSI Calculator | Interactive Relative Strength Index Tool",
  description: "Calculate 14-period RSI using Wilder's smoothed gains and losses algorithm. Free educational technical analysis calculator for Indian stock prices.",
};

export default function RsiCalculatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <Link href="/tools" className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1.5 w-fit">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Free Tools Directory
      </Link>

      <div className="space-y-2">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Technical Analysis Tool</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100">Relative Strength Index (RSI) Calculator</h1>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Compute Wilder&apos;s 14-period RSI from historical stock closing prices. Understand momentum thresholds and RS ratio math.
        </p>
      </div>

      <RsiCalculator />

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2.5">
        <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
        <span>Educational Disclaimer: This calculator is provided for learning mathematical indicator formulas. It is not investment advice or a trade recommendation.</span>
      </div>

      <AdBanner slot="tool-rsi-bottom" />
    </div>
  );
}
