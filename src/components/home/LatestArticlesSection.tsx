import React from "react";
import Link from "next/link";
import { ARTICLES } from "@/data/articles";
import { BookOpen, ArrowRight, Clock, User } from "lucide-react";

export function LatestArticlesSection() {
  return (
    <section className="w-full py-16 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Educational Articles</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-1">Latest Deep Dives</h2>
          </div>
          <Link href="/articles" className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1">
            Browse All Articles &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((art) => (
            <Link
              key={art.slug}
              href={`/articles/${art.slug}`}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 glass-card-hover flex flex-col justify-between group transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="text-cyan-400">{art.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" /> {art.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{art.shortAnswer}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <User className="w-3.5 h-3.5 text-cyan-400" /> {art.author}
                </span>
                <ArrowRight className="w-4 h-4 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
