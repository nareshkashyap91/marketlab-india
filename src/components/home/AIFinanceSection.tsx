import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Bot, Cpu, FileText } from "lucide-react";

export function AIFinanceSection() {
  return (
    <section className="w-full py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" /> Artificial Intelligence & Finance
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100">
            LLMs, Financial NLP & Machine Learning
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Explore how artificial intelligence is transforming modern financial research — from automated SEBI quarterly report parsing to news sentiment scoring and machine learning pattern recognition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit border border-cyan-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-100">SEBI Filing Analysis with LLMs</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Use prompt engineering techniques to extract key risk factors, management discussion & analysis (MD&A), and contingent liabilities from Indian corporate annual reports.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 w-fit border border-purple-500/20">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-100">Financial News Sentiment NLP</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Understand FinBERT and Transformer models trained on financial news text to measure market sentiment indicators objectively.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit border border-emerald-500/20">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-100">Feature Engineering for ML</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Construct tabular datasets from technical indicators, volume ratios, and macroeconomic indicators for supervised Machine Learning models.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
