import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Activity, BookOpen, Code2, Wrench, FileSpreadsheet, AlertTriangle, ArrowRight, CheckCircle2, LineChart } from "lucide-react";
import { RsiCalculator } from "@/components/tools/RsiCalculator";
import { AdBanner } from "@/components/ui/AdBanner";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";

export const metadata: Metadata = {
  title: "RSI Pillar Page: Relative Strength Index Topic Cluster",
  description: "The complete educational pillar page on Relative Strength Index (RSI). Master RSI formula, step-by-step Wilder calculation, divergence, limitations, Python backtesting, Google Sheets tutorial, and interactive calculator.",
};

export default function RsiPillarPage() {
  const clusterPages = [
    { title: "What is RSI?", slug: "/articles/relative-strength-index-rsi-guide#what-is-rsi", icon: BookOpen, desc: "Fundamental definition of bounded momentum oscillators." },
    { title: "RSI Formula & Math", slug: "/articles/relative-strength-index-rsi-guide#rsi-formula", icon: LineChart, desc: "Mathematical breakdown of RS and 0-100 normalization." },
    { title: "RSI Calculation Step-by-Step", slug: "/articles/relative-strength-index-rsi-guide#rsi-calculation", icon: Activity, desc: "Wilder's exponential smoothing filter applied to gains and losses." },
    { title: "RSI Divergence (Bullish vs Bearish)", slug: "/articles/relative-strength-index-rsi-guide#rsi-divergence", icon: AlertTriangle, desc: "Identifying momentum exhaustion vs price new extremes." },
    { title: "RSI Limitations & False Signals", slug: "/articles/relative-strength-index-rsi-guide#rsi-limitations", icon: AlertTriangle, desc: "Why RSI stays overbought in strong bull trends." },
    { title: "RSI Historical Nifty Examples", slug: "/articles/relative-strength-index-rsi-guide#rsi-historical-examples", icon: BookOpen, desc: "Case study analysis on Nifty 50 and BankNifty daily charts." },
    { title: "RSI Backtesting Strategy", slug: "/articles/relative-strength-index-rsi-guide#rsi-backtesting", icon: FileSpreadsheet, desc: "Testing 14-period RSI strategies on 10-year historical data." },
    { title: "RSI Python Tutorial", slug: "/articles/relative-strength-index-rsi-guide#rsi-python-tutorial", icon: Code2, desc: "Pandas and NumPy code script for vectorized RSI computation." },
    { title: "RSI Google Sheets Tutorial", slug: "/articles/relative-strength-index-rsi-guide#rsi-google-sheets", icon: FileSpreadsheet, desc: "Building RSI formulas directly in spreadsheets without code." },
    { title: "RSI Interactive Calculator", slug: "/tools/rsi-calculator", icon: Wrench, desc: "Real-time interactive calculator with Wilder smoothing engine." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <JsonLdSchema type="WebSite" data={{}} />

      {/* Pillar Breadcrumbs */}
      <nav className="text-xs font-mono text-slate-400 flex items-center gap-2">
        <Link href="/" className="hover:text-cyan-400">Home</Link>
        <span>/</span>
        <Link href="/categories/technical-analysis" className="hover:text-cyan-400">Technical Analysis</Link>
        <span>/</span>
        <span className="text-cyan-400">RSI Pillar Cluster</span>
      </nav>

      {/* Pillar Header */}
      <div className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono">
          <Activity className="w-4 h-4" /> TOPIC CLUSTER PILLAR PAGE
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 leading-tight">
          Relative Strength Index (RSI): <br />
          <span className="gradient-text-cyan">Complete Educational Topic Cluster</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          Welcome to the master pillar page for the Relative Strength Index (RSI). This cluster connects 10 dedicated educational resources covering RSI momentum theory, mathematical derivations, divergence patterns, Python backtesting code, spreadsheet models, and interactive tools.
        </p>
      </div>

      {/* Interactive Tool Embed directly inside Pillar */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
          <Wrench className="w-5 h-5 text-cyan-400" /> Embedded Interactive RSI Tool
        </h2>
        <RsiCalculator />
      </div>

      {/* Topic Cluster Navigation Grid */}
      <div className="space-y-6 pt-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-100">RSI Cluster Architecture</h2>
          <p className="text-xs text-slate-400 mt-1">Explore all sub-topics in this educational cluster with intelligent internal links.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clusterPages.map((page, idx) => {
            const Icon = page.icon;
            return (
              <Link
                key={idx}
                href={page.slug}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 glass-card-hover flex flex-col justify-between space-y-3 group transition-all"
              >
                <div className="space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{page.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-cyan-400 font-mono">
                  <span>Explore Subtopic</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <AdBanner slot="rsi-pillar-bottom" />
    </div>
  );
}
