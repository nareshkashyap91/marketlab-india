import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CagrCalculator } from "@/components/tools/CagrCalculator";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";

export const metadata: Metadata = {
  title: "CAGR Calculator | Compound Annual Growth Rate",
  description: "Calculate Compound Annual Growth Rate (CAGR) for stocks, mutual funds, and investments over multi-year periods. Free educational tool.",
};

export default function CagrCalculatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <Link href="/tools" className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1.5 w-fit">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Free Tools Directory
      </Link>

      <div className="space-y-2">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Fundamental Valuation Tool</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100">CAGR Calculator</h1>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Determine the annualized compound growth rate of equity investments, mutual funds, or business revenue across multiple years.
        </p>
      </div>

      <CagrCalculator />

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2.5">
        <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
        <span>Educational Disclaimer: This calculator is provided for learning mathematical growth formulas. It does not guarantee future financial returns.</span>
      </div>

      <AdBanner slot="tool-cagr-bottom" />
    </div>
  );
}
