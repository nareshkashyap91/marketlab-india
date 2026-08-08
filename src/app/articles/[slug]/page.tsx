import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, Article } from "@/data/articles";
import { Clock, User, Calendar, CheckCircle2, HelpCircle, Wrench, BookOpen, ShieldAlert, ArrowLeft, Share2 } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";
import { RsiCalculator } from "@/components/tools/RsiCalculator";
import { OptionPayoffCalculator } from "@/components/tools/OptionPayoffCalculator";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.title,
    description: article.shortAnswer,
    openGraph: {
      title: article.title,
      description: article.shortAnswer,
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      authors: [article.author],
    },
  };
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <JsonLdSchema type="Article" data={article} />
      {article.faqs && article.faqs.length > 0 && (
        <JsonLdSchema type="FAQPage" data={{ faqs: article.faqs }} />
      )}

      {/* Back Link */}
      <Link href="/articles" className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1.5 w-fit">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Articles Library
      </Link>

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-800 pb-8">
        <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
          {article.category}
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 leading-tight">
          {article.title}
        </h1>

        {/* Author Profile Metadata Pill */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-bold">
              NK
            </div>
            <div>
              <span className="text-slate-200 font-bold block">{article.author}</span>
              <span className="text-[10px] text-slate-500">{article.authorRole}</span>
            </div>
          </div>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-500" /> Updated: {article.updatedDate}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-500" /> {article.readTime}
          </span>
        </div>
      </header>

      {/* Short Answer / Featured Snippet Callout Box */}
      <div className="p-6 rounded-2xl bg-slate-900 border-l-4 border-cyan-500 border border-slate-800 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
          <CheckCircle2 className="w-4 h-4" /> Short Answer / Key Takeaway:
        </div>
        <p className="text-sm text-slate-200 leading-relaxed">{article.shortAnswer}</p>
      </div>

      <AdBanner slot="article-top" />

      {/* Embedded Calculator Box directly inside Article */}
      {article.slug.includes("rsi") && (
        <div className="my-8">
          <h3 className="text-lg font-bold text-slate-100 mb-3 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-cyan-400" /> Embedded RSI Calculator Tool
          </h3>
          <RsiCalculator />
        </div>
      )}

      {article.slug.includes("options") && (
        <div className="my-8">
          <h3 className="text-lg font-bold text-slate-100 mb-3 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-amber-400" /> Embedded Option Payoff Tool
          </h3>
          <OptionPayoffCalculator />
        </div>
      )}

      {/* Main Body HTML Content */}
      <div
        className="prose prose-invert max-w-none prose-headings:text-slate-100 prose-headings:font-bold prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-strong:text-cyan-400 space-y-6"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />

      {/* FAQ Accordion Section */}
      {article.faqs && article.faqs.length > 0 && (
        <section className="space-y-4 pt-8 border-t border-slate-800">
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-cyan-400" /> Frequently Asked Questions (FAQs)
          </h3>
          <div className="space-y-3">
            {article.faqs.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <h4 className="text-sm font-semibold text-slate-200">{faq.question}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Tools & Related Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-slate-800">
        {article.relatedTools && article.relatedTools.length > 0 && (
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Wrench className="w-4 h-4" /> Related Educational Tools
            </h4>
            <ul className="space-y-2 text-xs">
              {article.relatedTools.map((tool, idx) => (
                <li key={idx}>
                  <Link href={`/tools/${tool.slug}`} className="text-slate-200 hover:text-emerald-400 flex items-center justify-between">
                    <span>{tool.name}</span>
                    <span className="text-[10px] font-mono text-emerald-400">Launch &rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {article.relatedArticles && article.relatedArticles.length > 0 && (
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Related Articles
            </h4>
            <ul className="space-y-2 text-xs">
              {article.relatedArticles.map((art, idx) => (
                <li key={idx}>
                  <Link href={`/articles/${art.slug}`} className="text-slate-200 hover:text-cyan-400 flex items-center justify-between">
                    <span className="line-clamp-1">{art.title}</span>
                    <span className="text-[10px] font-mono text-cyan-400">Read &rarr;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Sources & Citations */}
      {article.sources && article.sources.length > 0 && (
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-500 font-mono space-y-1">
          <span className="font-bold text-slate-400">Academic & Industry Citations:</span>
          <ul className="list-disc pl-4 space-y-0.5">
            {article.sources.map((src, idx) => (
              <li key={idx}>{src}</li>
            ))}
          </ul>
        </div>
      )}

      {/* SEBI Educational Disclaimer Footer Box */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
        <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <p>
          <strong>Educational Disclaimer:</strong> This article is published exclusively for academic learning and quantitative analysis. MarketLab India does not provide stock tips, buy/sell targets, or investment advice.
        </p>
      </div>

      <AdBanner slot="article-bottom" />
    </article>
  );
}
