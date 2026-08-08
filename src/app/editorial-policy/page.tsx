import React from "react";
import { Metadata } from "next";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Editorial Integrity Policy | MarketLab India",
  description: "MarketLab India editorial integrity policy regarding research standards, fact-checking, academic citations, and independence.",
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Editorial Integrity</span>
        <h1 className="text-3xl font-extrabold text-slate-100">Editorial Policy & Research Standards</h1>
      </div>

      <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed">
        <p>
          At MarketLab India, we maintain strict editorial independence to ensure our readers receive accurate, data-backed financial education.
        </p>

        <h3 className="text-base font-bold text-slate-100">1. Fact-Checking & Academic Citations</h3>
        <p>
          Every article published undergoes rigorous peer review. Formulas for indicators (RSI, EMA, MACD, Options Black-Scholes) are mathematically verified against primary sources, academic literature, or authoritative financial textbooks.
        </p>

        <h3 className="text-base font-bold text-slate-100">2. Never Fabricate Statistics or Citations</h3>
        <p>
          We do not invent research, fake statistical claims, or synthesize bogus citations. All references are verified against real market historical data.
        </p>

        <h3 className="text-base font-bold text-slate-100">3. Separation of Educational Content & Sponsorship</h3>
        <p>
          Sponsored placements or educational affiliate links are clearly disclosed and visually distinct from core editorial analysis.
        </p>
      </div>
    </div>
  );
}
