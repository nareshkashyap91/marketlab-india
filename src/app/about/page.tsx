import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { TrendingUp, ShieldCheck, User, Award, CheckCircle2, BookOpen } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";

export const metadata: Metadata = {
  title: "About MarketLab India & Author Profile",
  description: "Learn about MarketLab India's mission as an education-first financial platform, editorial standards, and Founder/Author Naresh Kashyap.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono">
          <TrendingUp className="w-4 h-4" /> ABOUT MARKETLAB INDIA
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100">
          Education-First Financial Research
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          MarketLab India was founded to demystify Indian stock market mechanics, quantitative technical analysis, options pricing math, and Python backtesting through open, data-driven education.
        </p>
      </div>

      {/* Author Profile Card */}
      <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 p-1 shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-2xl font-extrabold text-cyan-400">
              NK
            </div>
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h2 className="text-2xl font-bold text-slate-100">Naresh Kashyap</h2>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                Founder & Lead Financial Analyst
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Quantitative financial analyst and computer science researcher focused on algorithmic market data systems, options Greeks risk modeling, and technical oscillator mechanics.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs font-mono text-slate-500 pt-1">
              <span>Location: India</span>
              <span>•</span>
              <span>Expertise: Technical Math & Algo Trading</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-cyan-400 font-bold">100% Non-Advisory</span>
            <p className="text-slate-400 text-[11px]">Strict zero stock tips or buy/sell recommendations policy.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-emerald-400 font-bold">Empirical Research</span>
            <p className="text-slate-400 text-[11px]">All formulas are derived mathematically and tested on historical data.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-amber-400 font-bold">Open Tools</span>
            <p className="text-slate-400 text-[11px]">20 free interactive financial calculators for public educational access.</p>
          </div>
        </div>
      </div>

      {/* Editorial Principles */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-100">Our Four Core Commitments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-cyan-400">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" /> 1. No Guaranteed Returns Claims
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              We never promote &quot;multibagger&quot; promises or &quot;sure-shot&quot; strategies. Financial markets involve inherent risk and uncertainty.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-400">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" /> 2. Educational Distinction
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              All chart examples are explicitly demarcated as historical, hypothetical, or academic illustrations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-purple-400">
              <CheckCircle2 className="w-5 h-5 text-purple-400" /> 3. Code Transparency
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Our Python scripts and spreadsheet formulas are provided with complete source code so learners can inspect the math.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold text-amber-400">
              <CheckCircle2 className="w-5 h-5 text-amber-400" /> 4. SEBI Regulatory Respect
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              We uphold SEBI regulations regarding investor education and do not offer PMS, tip services, or unauthorized advisory.
            </p>
          </div>
        </div>
      </div>

      <AdBanner slot="about-page-bottom" />
    </div>
  );
}
