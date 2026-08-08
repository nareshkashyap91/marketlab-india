import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CandlestickVisualizer } from "@/components/tools/CandlestickVisualizer";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";

export const metadata: Metadata = {
  title: "Candlestick Learning Tool | Interactive Price Action Explorer",
  description: "Interactive visual tool for candlestick patterns (Hammer, Doji, Bullish Engulfing). Learn identification rules and price action anatomy.",
};

export default function CandlestickToolPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <Link href="/tools" className="text-xs font-mono text-rose-400 hover:underline flex items-center gap-1.5 w-fit">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Free Tools Directory
      </Link>

      <div className="space-y-2">
        <span className="text-xs font-mono text-rose-400 uppercase tracking-wider">Technical Analysis Tool</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100">Candlestick Pattern Learning Tool</h1>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          Interactive visual guide to candlestick anatomy, wicks, real bodies, and reversal pattern identification.
        </p>
      </div>

      <CandlestickVisualizer />

      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2.5">
        <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
        <span>Educational Disclaimer: Candlestick patterns represent historical price action. They are not guaranteed predictors of future stock prices.</span>
      </div>

      <AdBanner slot="tool-candlestick-bottom" />
    </div>
  );
}
