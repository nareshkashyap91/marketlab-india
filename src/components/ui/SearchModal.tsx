"use client";

import React, { useState, useEffect } from "react";
import { Search, X, BookOpen, Wrench, ArrowRight } from "lucide-react";
import Link from "next/link";
import { TOOLS } from "@/data/tools";
import { ARTICLES } from "@/data/articles";
import { CATEGORIES } from "@/data/categories";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open search modal
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredTools = TOOLS.filter(
    (t) => t.name.toLowerCase().includes(query.toLowerCase()) || t.category.toLowerCase().includes(query.toLowerCase())
  );
  const filteredArticles = ARTICLES.filter(
    (a) => a.title.toLowerCase().includes(query.toLowerCase()) || a.category.toLowerCase().includes(query.toLowerCase())
  );
  const filteredCategories = CATEGORIES.filter(
    (c) => c.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden">
        {/* Search Header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-900/90">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topics, indicators, calculators (e.g. RSI, CAGR, Options)..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-sm font-sans"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {/* Categories */}
          {filteredCategories.length > 0 && (
            <div>
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Categories</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredCategories.slice(0, 4).map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/categories/${cat.slug}`}
                    onClick={onClose}
                    className="p-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 flex items-center justify-between text-xs text-slate-200 hover:text-cyan-400 transition-all"
                  >
                    <span>{cat.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Tools & Calculators */}
          {filteredTools.length > 0 && (
            <div>
              <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5" /> Free Calculators ({filteredTools.length})
              </h4>
              <div className="space-y-1.5">
                {filteredTools.slice(0, 5).map((tool) => (
                  <Link
                    key={tool.id}
                    href={`/tools/${tool.slug}`}
                    onClick={onClose}
                    className="p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 flex items-center justify-between group transition-all"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-emerald-400 flex items-center gap-2">
                        {tool.name}
                        {tool.isInteractive && (
                          <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded font-mono">
                            Interactive
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">{tool.tagline}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Articles */}
          {filteredArticles.length > 0 && (
            <div>
              <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> Educational Articles
              </h4>
              <div className="space-y-1.5">
                {filteredArticles.map((art) => (
                  <Link
                    key={art.slug}
                    href={`/articles/${art.slug}`}
                    onClick={onClose}
                    className="p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 flex items-center justify-between group transition-all"
                  >
                    <div>
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-indigo-400">
                        {art.title}
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">{art.shortAnswer}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {filteredCategories.length === 0 && filteredTools.length === 0 && filteredArticles.length === 0 && (
            <div className="text-center py-8 text-slate-500 text-sm">
              No matching topic or calculator found for &quot;{query}&quot;. Try searching &quot;RSI&quot; or &quot;Options&quot;.
            </div>
          )}
        </div>

        <div className="px-4 py-2.5 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Search MarketLab India Knowledge Base</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
