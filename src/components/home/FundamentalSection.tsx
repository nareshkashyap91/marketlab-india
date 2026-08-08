import React from "react";
import Link from "next/link";
import { BarChart3, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";

export function FundamentalSection() {
  return (
    <section className="w-full py-16 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Card preview */}
          <div className="order-2 lg:order-1 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono text-indigo-400">Fundamental Health Matrix</span>
              <span className="text-[10px] font-mono text-slate-500">SEBI Audited Financials</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500">P/E Ratio</span>
                <div className="text-lg font-bold text-indigo-400 mt-1">22.4x</div>
                <span className="text-[10px] text-slate-500">Industry Avg: 28x</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500">Return on Equity</span>
                <div className="text-lg font-bold text-emerald-400 mt-1">18.5%</div>
                <span className="text-[10px] text-slate-500">Benchmark &gt; 15%</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500">ROCE</span>
                <div className="text-lg font-bold text-cyan-400 mt-1">21.2%</div>
                <span className="text-[10px] text-slate-500">Capital Efficiency</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-500">Debt/Equity</span>
                <div className="text-lg font-bold text-amber-400 mt-1">0.15</div>
                <span className="text-[10px] text-slate-500">Low Leverage</span>
              </div>
            </div>
            <Link
              href="/tools/cagr-calculator"
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-400 text-xs font-mono font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors"
            >
              <TrendingUp className="w-4 h-4" /> Calculate Multi-Year CAGR & Growth
            </Link>
          </div>

          <div className="order-1 lg:order-2 space-y-4">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider flex items-center gap-2">
              <BarChart3 className="w-4 h-4" /> Fundamental Valuation Module
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 leading-tight">
              Evaluate Company Financials & <br />
              <span className="gradient-text-emerald">Intrinsic Balance Sheet Health</span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Understand the core accounting building blocks of Indian listed companies. Learn how to read balance sheets, income statements, cash flow statements, and assess working capital health.
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Demystifying P/E, P/B, EV/EBITDA, and Price-to-Sales Ratios</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Auditing Cash Flow Conversion (Operating Cash Flow vs Net Profit)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>20-Point Indian Equity Fundamental Due Diligence Checklist</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/categories/fundamental-analysis"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-slate-100 font-bold text-xs shadow-lg transition-all"
              >
                <span>Explore Fundamental Analysis Articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
