import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { IntradayCprCalculator } from "@/components/tools/IntradayCprCalculator";
import { AdBanner } from "@/components/ui/AdBanner";
import { SocialShareBar } from "@/components/ui/SocialShareBar";

export const metadata: Metadata = {
  title: "Intraday CPR & Pivot Points Calculator | MarketLab India",
  description: "Calculate Central Pivot Range (CPR), Pivot (P), R1, R2, R3, S1, S2, and S3 levels for live intraday trading in Nifty 50, BankNifty, and Indian stocks.",
};

export default function CprCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Back Link */}
      <Link href="/tools" className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1.5 w-fit">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Free Tools
      </Link>

      <div className="space-y-3">
        <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">Live Intraday Tool</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100">Intraday CPR & Pivot Points Calculator</h1>
        <p className="text-sm text-slate-400 max-w-2xl">
          Enter previous day High, Low, and Close to instantly compute Top CPR (TC), Pivot (P), Bottom CPR (BC), R1-R3 resistance levels, and S1-S3 support levels.
        </p>
      </div>

      <SocialShareBar title="Intraday CPR & Pivot Points Calculator" />

      {/* Interactive Tool Component */}
      <IntradayCprCalculator />

      <AdBanner slot="cpr-calculator-bottom" />
    </div>
  );
}
