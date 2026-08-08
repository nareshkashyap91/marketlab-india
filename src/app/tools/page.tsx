import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { TOOLS } from "@/data/tools";
import { Wrench, ArrowRight, ShieldAlert } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";

export const metadata: Metadata = {
  title: "20 Free Educational Financial Calculators | MarketLab India",
  description: "Directory of 20 interactive educational calculators for RSI, CAGR, Risk/Reward, SIP, Position Size, Options Payoff, Candlestick patterns, and P/E ratios.",
};

export default function ToolsDirectoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="space-y-3">
        <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Free Tools Directory</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100">Educational Financial Calculators</h1>
        <p className="text-sm text-slate-400 max-w-2xl">
          Comprehensive suite of 20 interactive tools, calculators, and visualizers built to reinforce financial math and risk management discipline.
        </p>
      </div>

      {/* SEBI Callout */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-center gap-2.5">
        <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
        <span>
          <strong>Educational Notice:</strong> All calculators are for academic learning and mathematical modeling only. They do not constitute investment advice or trading signals.
        </span>
      </div>

      {/* 20 Tools Directory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TOOLS.map((tool) => (
          <Link
            key={tool.id}
            href={`/tools/${tool.slug}`}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 glass-card-hover flex flex-col justify-between space-y-4 group transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  {tool.category}
                </span>
                {tool.isInteractive && (
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    Live Tool
                  </span>
                )}
              </div>

              <h2 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                {tool.name}
              </h2>

              <p className="text-xs text-slate-400 leading-relaxed">{tool.description}</p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 space-y-2">
              <div className="text-[11px] font-mono text-slate-500 line-clamp-1">Formula: {tool.formula}</div>
              <div className="flex items-center justify-between text-xs text-emerald-400 font-mono">
                <span>Open Calculator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <AdBanner slot="tools-directory-bottom" />
    </div>
  );
}
