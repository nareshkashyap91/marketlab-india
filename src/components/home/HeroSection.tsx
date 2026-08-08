import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, Wrench, ShieldCheck, Database, Code, LineChart } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Subtle Glow Background Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs font-mono tracking-wide shadow-glow-cyan">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INDIAN STOCK MARKET EDUCATION PLATFORM</span>
        </div>

        {/* Required Hero Heading & Tagline Copy */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
            Understand Markets. <br />
            <span className="gradient-text-cyan">Learn the Data.</span> <br />
            Build Better Financial Knowledge.
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans">
            Data-first educational hub for Indian equity fundamentals, technical analysis math, options Greeks, Python strategy backtesting, and quantitative financial research. Zero tips. 100% education.
          </p>
        </div>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/start-here"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-base shadow-glow-cyan flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            <BookOpen className="w-5 h-5" />
            <span>Start Learning</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/tools"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-200 font-semibold text-base flex items-center justify-center gap-2 transition-all hover:bg-slate-800"
          >
            <Wrench className="w-5 h-5 text-emerald-400" />
            <span>Explore Free Tools</span>
          </Link>
        </div>

        {/* Value Proposition Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-center gap-2.5 text-xs text-slate-300">
            <LineChart className="w-4 h-4 text-cyan-400" />
            <span>Technical Analysis</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-center gap-2.5 text-xs text-slate-300">
            <Database className="w-4 h-4 text-emerald-400" />
            <span>Fundamental Audit</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-center gap-2.5 text-xs text-slate-300">
            <Code className="w-4 h-4 text-purple-400" />
            <span>Python & Algo Trading</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800 flex items-center justify-center gap-2.5 text-xs text-slate-300">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Education First</span>
          </div>
        </div>
      </div>
    </section>
  );
}
