import React from "react";
import { Metadata } from "next";
import { ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "SEBI & Educational Disclaimer | MarketLab India",
  description: "Official educational disclaimer for MarketLab India. Zero investment advice, stock tips, buy/sell recommendations, or guaranteed return claims.",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center gap-3">
        <ShieldAlert className="w-8 h-8 shrink-0" />
        <div>
          <h1 className="text-xl font-bold text-slate-100">SEBI & Educational Disclaimer</h1>
          <p className="text-xs text-amber-300">Last Updated: August 2026</p>
        </div>
      </div>

      <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed">
        <p className="font-semibold text-slate-100">
          1. Education-First Platform Mandate
        </p>
        <p>
          MarketLab India (accessible at marketlabindia.com) is operated solely as an <strong>education-first</strong> research and analytical software platform. MarketLab India is NOT a SEBI-registered Investment Adviser (RIA), Research Analyst (RA), or Portfolio Management Service (PMS) provider.
        </p>

        <p className="font-semibold text-slate-100">
          2. No Investment Advice, Stock Tips, or Signals
        </p>
        <p>
          No content published on MarketLab India — including articles, interactive tools, Python scripts, options payoff graphs, videos, newsletters, or social media posts — constitutes financial advice, stock tips, target price calls, stop-loss recommendations, or buy/sell signals.
        </p>

        <p className="font-semibold text-slate-100">
          3. Hypothetical & Historical Examples
        </p>
        <p>
          All references to securities (such as Nifty 50, BankNifty, or listed Indian equities) are provided strictly as hypothetical, historical, or academic illustrations to demonstrate technical analysis formulas, indicator mathematics, or spreadsheet logic.
        </p>

        <p className="font-semibold text-slate-100">
          4. Calculator & Tool Disclaimer
        </p>
        <p>
          Interactive tools (including RSI, CAGR, Risk/Reward, SIP, and Option Payoff calculators) utilize standard mathematical formulas. They do not account for real-time market slippage, sudden market gap openings, brokerage tax changes, or individual liquidity constraints.
        </p>
      </div>
    </div>
  );
}
