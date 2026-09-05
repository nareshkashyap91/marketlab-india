import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { CapitalGainsTaxCalculator } from "@/components/tools/CapitalGainsTaxCalculator";
import { AdBanner } from "@/components/ui/AdBanner";
import { SocialShareBar } from "@/components/ui/SocialShareBar";

export const metadata: Metadata = {
  title: "Capital Gains Tax Calculator India (STCG @ 20% & LTCG @ 12.5%) | MarketLab India",
  description: "Calculate Short-Term (STCG @ 20%) and Long-Term (LTCG @ 12.5%) Capital Gains Tax on Indian stocks and mutual funds. Includes ₹1.25 Lakh annual LTCG exemption limit.",
};

export default function CapitalGainsTaxCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Back Link */}
      <Link href="/tools" className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1.5 w-fit">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Free Tools Library
      </Link>

      <div className="space-y-3">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Free Tax & Wealth Utility</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100">Capital Gains Tax Calculator (India 2024-25)</h1>
        <p className="text-sm text-slate-400 max-w-2xl">
          Calculate exact Short-Term Capital Gains (STCG @ 20%) and Long-Term Capital Gains (LTCG @ 12.5%) tax liability for stock market and mutual fund investments as per the latest Budget regulations.
        </p>
      </div>

      <SocialShareBar title="Capital Gains Tax Calculator India (STCG & LTCG)" />

      {/* Interactive Tool Component */}
      <CapitalGainsTaxCalculator />

      <AdBanner slot="capital-gains-tax-bottom" />
    </div>
  );
}
