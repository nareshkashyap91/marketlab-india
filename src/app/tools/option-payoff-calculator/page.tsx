import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { OptionPayoffCalculator } from "@/components/tools/OptionPayoffCalculator";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";

export const metadata: Metadata = {
  title: "Option Payoff Calculator | Visual Call & Put Expiry Graph",
  description: "Plot visual payoff diagrams for Call and Put options across spot price ranges. Calculate max profit, max loss, and breakeven levels.",
};

export default function OptionPayoffPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <Link href="/tools" className="text-xs font-mono text-orange-400 hover:underline flex items-center gap-1.5 w-fit">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Free Tools Directory
      </Link>

      <div className="space-y-2">
        <span className="text-xs font-mono text-orange-400 uppercase tracking-wider">Options Education Tool</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100">Option Payoff Calculator</h1>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Select Call/Put and Buy/Sell to plot expiry payoff curves, calculate breakeven spot prices, and analyze option risk floors.
        </p>
      </div>

      <OptionPayoffCalculator />

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2.5">
        <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
        <span>Educational Disclaimer: Options involve significant financial risk. This payoff calculator is designed for derivatives education only.</span>
      </div>

      <AdBanner slot="tool-payoff-bottom" />
    </div>
  );
}
