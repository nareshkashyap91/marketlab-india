import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { OptionGreeksCalculator } from "@/components/tools/OptionGreeksCalculator";
import { AdBanner } from "@/components/ui/AdBanner";
import { SocialShareBar } from "@/components/ui/SocialShareBar";

export const metadata: Metadata = {
  title: "Black-Scholes Option Greeks Calculator (Delta, Gamma, Theta, Vega) | MarketLab India",
  description: "Calculate Black-Scholes Call and Put theoretical option prices, Delta, Gamma, Theta decay, and Vega volatility sensitivity for Nifty, BankNifty, and stock options.",
};

export default function OptionGreeksCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Back Link */}
      <Link href="/tools" className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1.5 w-fit">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Free Tools Library
      </Link>

      <div className="space-y-3">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Free Options Derivatives Tool</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100">Black-Scholes Option Greeks Calculator</h1>
        <p className="text-sm text-slate-400 max-w-2xl">
          Compute real-time Call & Put theoretical values and option sensitivity Greeks (Delta, Gamma, Theta decay per day, and Vega) using the Black-Scholes mathematical pricing formula.
        </p>
      </div>

      <SocialShareBar title="Black-Scholes Option Greeks Calculator (Delta, Gamma, Theta, Vega)" />

      {/* Interactive Tool Component */}
      <OptionGreeksCalculator />

      <AdBanner slot="option-greeks-bottom" />
    </div>
  );
}
