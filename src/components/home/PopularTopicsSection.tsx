import React from "react";
import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { ArrowRight, BookOpen } from "lucide-react";

export function PopularTopicsSection() {
  return (
    <section className="w-full py-16 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Information Architecture</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-1">Popular Topic Categories</h2>
          <p className="text-xs text-slate-400 mt-1">Structured educational clusters covering fundamentals, quantitative math, and algo trading.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.slice(0, 6).map((cat) => (
            <Link
              key={cat.id}
              href={`/categories/${cat.slug}`}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 glass-card-hover space-y-4 group transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20">
                  {cat.title}
                </span>
                <BookOpen className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{cat.fullDesc}</p>
              
              <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-500 uppercase">Featured Subtopics:</span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.subtopics.slice(0, 3).map((sub, idx) => (
                    <span key={idx} className="text-[11px] bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
