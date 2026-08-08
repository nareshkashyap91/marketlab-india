import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { CATEGORIES } from "@/data/categories";
import { BookOpen, ArrowRight } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";

export const metadata: Metadata = {
  title: "All Categories | MarketLab India",
  description: "Browse all 10 educational categories covering Stock Market Basics, Technical Analysis, Fundamental Analysis, Options, Algo Trading, Python, AI & Backtesting.",
};

export default function CategoriesDirectoryPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="space-y-3">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Information Architecture</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100">Primary Educational Categories</h1>
        <p className="text-sm text-slate-400 max-w-2xl">
          Explore our structured 10 primary learning categories designed for investors, traders, and quantitative developers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`/categories/${cat.slug}`}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 glass-card-hover flex flex-col justify-between space-y-4 group transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20 font-bold">
                  {cat.title}
                </span>
                <BookOpen className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{cat.fullDesc}</p>
              
              <div className="space-y-1.5 pt-2 border-t border-slate-800">
                <span className="text-[11px] font-mono text-slate-500 uppercase">Core Subtopics:</span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.subtopics.map((sub, idx) => (
                    <span key={idx} className="text-[11px] bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-400 font-mono">
              <span>View Category Hub</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      <AdBanner slot="categories-directory-bottom" />
    </div>
  );
}
