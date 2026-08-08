import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES } from "@/data/categories";
import { ARTICLES } from "@/data/articles";
import { TOOLS } from "@/data/tools";
import { BookOpen, Wrench, ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.title} Educational Hub | MarketLab India`,
    description: category.fullDesc,
  };
}

export default function CategoryDetailPage({ params }: { params: { slug: string } }) {
  const category = CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) notFound();

  const relatedArticles = ARTICLES.filter(
    (a) => a.categorySlug === category.slug || a.category.toLowerCase().includes(category.title.toLowerCase())
  );
  const relatedTools = TOOLS.filter(
    (t) => t.category.toLowerCase().includes(category.title.toLowerCase()) || category.title.toLowerCase().includes(t.category.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <Link href="/categories" className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1.5 w-fit">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to All Categories
      </Link>

      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 font-bold">
          Category Hub
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100">{category.title}</h1>
        <p className="text-sm text-slate-400 leading-relaxed">{category.fullDesc}</p>
      </div>

      {/* Subtopics Pills */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
        <span className="text-xs font-mono text-slate-400 uppercase">Category Topic Modules:</span>
        <div className="flex flex-wrap gap-2">
          {category.subtopics.map((sub, idx) => (
            <span key={idx} className="text-xs bg-slate-950 text-cyan-400 px-3 py-1 rounded-lg border border-slate-800 font-mono">
              {sub}
            </span>
          ))}
        </div>
      </div>

      {/* Category Articles */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-cyan-400" /> Articles in {category.title}
        </h2>
        {relatedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((art) => (
              <Link
                key={art.slug}
                href={`/articles/${art.slug}`}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 glass-card-hover flex flex-col justify-between space-y-3 group transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="text-cyan-400">{art.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" /> {art.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{art.shortAnswer}</p>
                </div>
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-cyan-400 font-mono">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
            Articles for {category.title} are regularly added to our educational queue. Check back soon or explore our interactive tools below!
          </div>
        )}
      </div>

      {/* Category Tools */}
      {relatedTools.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-slate-800">
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-emerald-400" /> Educational Tools & Calculators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.slug}`}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 glass-card-hover space-y-3 group transition-all"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {tool.category}
                  </span>
                  <h3 className="text-sm font-bold text-slate-100 group-hover:text-emerald-400">{tool.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{tool.tagline}</p>
                </div>
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-emerald-400 font-mono">
                  <span>Open Tool</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <AdBanner slot="category-detail-bottom" />
    </div>
  );
}
