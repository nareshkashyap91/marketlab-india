import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { SwpCalculator } from "@/components/tools/SwpCalculator";
import { AdBanner } from "@/components/ui/AdBanner";
import { SocialShareBar } from "@/components/ui/SocialShareBar";

export const metadata: Metadata = {
  title: "SWP (Systematic Withdrawal Plan) Calculator | MarketLab India",
  description: "Calculate monthly withdrawal cash payouts, remaining corpus balance, and compound wealth growth for Mutual Fund SWP investments.",
};

export default function SwpCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Back Link */}
      <Link href="/tools" className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1.5 w-fit">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Free Tools Library
      </Link>

      <div className="space-y-3">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Free Personal Finance Utility</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100">SWP (Systematic Withdrawal Plan) Calculator</h1>
        <p className="text-sm text-slate-400 max-w-2xl">
          Simulate monthly passive income payouts from your mutual fund investments. Calculate total cash withdrawn, remaining principal corpus, and plan sustainability.
        </p>
      </div>

      <SocialShareBar title="SWP (Systematic Withdrawal Plan) Calculator" />

      {/* Interactive Tool Component */}
      <SwpCalculator />

      <AdBanner slot="swp-calculator-bottom" />
    </div>
  );
}
