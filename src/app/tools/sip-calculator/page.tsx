import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { SipCalculator } from "@/components/tools/SipCalculator";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";

export const metadata: Metadata = {
  title: "SIP Calculator | Systematic Investment Plan Wealth Projector",
  description: "Project future corpus returns from monthly SIP mutual fund contributions. Free educational compounding calculator.",
};

export default function SipCalculatorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <Link href="/tools" className="text-xs font-mono text-purple-400 hover:underline flex items-center gap-1.5 w-fit">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Free Tools Directory
      </Link>

      <div className="space-y-2">
        <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">Personal Finance Tool</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100">SIP Calculator</h1>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Model long-term compound wealth growth from monthly Systematic Investment Plans in mutual funds or ETFs.
        </p>
      </div>

      <SipCalculator />

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2.5">
        <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
        <span>Educational Disclaimer: Mutual fund investments are subject to market risks. SIP calculations are hypothetical compounding projections.</span>
      </div>

      <AdBanner slot="tool-sip-bottom" />
    </div>
  );
}
