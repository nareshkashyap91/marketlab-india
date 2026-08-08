import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ARTICLES } from "@/data/articles";
import { BookOpen, Clock, User, ArrowRight } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";

export const metadata: Metadata = {
  title: "Educational Articles & Deep Dives | MarketLab India",
  description: "Browse data-driven educational articles on technical analysis math, options Greeks, Python backtesting, fundamental auditing, and AI in finance.",
};

export default function ArticlesIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="space-y-3">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Educational Library</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100">Articles & Masterclasses</h1>
        <p className="text-sm text-slate-400 max-w-2xl">
          Comprehensive, peer-reviewed educational articles on Indian stock market principles. Zero tips. 100% data-driven analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ARTICLES.map((art) => (
          <Link
            key={art.slug}
            href={`/articles/${art.slug}`}
            className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 glass-card-hover flex flex-col justify-between space-y-4 group transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-cyan-400">{art.category}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-500" /> {art.readTime}
                </span>
              </div>
              <h2 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors line-clamp-2">
                {art.title}
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{art.shortAnswer}</p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <User className="w-3.5 h-3.5 text-cyan-400" /> {art.author}
              </span>
              <ArrowRight className="w-4 h-4 group-hover:text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>

      <AdBanner slot="articles-index-bottom" />
    </div>
  );
}
