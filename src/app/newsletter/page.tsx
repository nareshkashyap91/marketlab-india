import React from "react";
import { Metadata } from "next";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { Mail, CheckCircle2, ShieldAlert } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";

export const metadata: Metadata = {
  title: "MarketLab Weekly Newsletter | Financial Education",
  description: "Subscribe to MarketLab Weekly. Every Sunday: 1 Concept, 1 Tool, 1 Tutorial, 1 Case Study, 1 AI/Algo Resource. 100% education. Zero stock tips.",
};

export default function NewsletterPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono">
          <Mail className="w-4 h-4" /> SUNDAY FINANCIAL DISPATCH
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100">MarketLab Weekly</h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          Join thousands of Indian investors and quants receiving our free Sunday educational analysis.
        </p>
      </div>

      <NewsletterSection />

      {/* Newsletter Format Breakdown */}
      <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
        <h2 className="text-xl font-bold text-slate-100">Inside Every Issue of MarketLab Weekly:</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-amber-400 font-bold">1. Concept</span>
            <p className="text-slate-400 font-sans text-[11px]">Deep dive into 1 technical or fundamental concept.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-emerald-400 font-bold">2. Tool</span>
            <p className="text-slate-400 font-sans text-[11px]">Practical calculator or spreadsheet template breakdown.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-cyan-400 font-bold">3. Tutorial</span>
            <p className="text-slate-400 font-sans text-[11px]">Step-by-step code or chart calculation walkthrough.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-purple-400 font-bold">4. Case Study</span>
            <p className="text-slate-400 font-sans text-[11px]">Historical Indian market case study analysis.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
            <span className="text-rose-400 font-bold">5. AI / Quant</span>
            <p className="text-slate-400 font-sans text-[11px]">1 AI prompt engineering or algo trading resource.</p>
          </div>
        </div>
      </div>

      <AdBanner slot="newsletter-page-bottom" />
    </div>
  );
}
