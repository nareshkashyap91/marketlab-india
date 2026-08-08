import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corrections Policy | MarketLab India",
  description: "MarketLab India policy for transparently correcting content errors and updating financial formulas.",
};

export default function CorrectionsPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Accuracy Commitment</span>
        <h1 className="text-3xl font-extrabold text-slate-100">Corrections Policy</h1>
      </div>

      <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed">
        <p>
          MarketLab India is committed to complete transparency. If a mathematical error, typo, or outdated regulatory reference is identified in our articles or tools, we correct it promptly.
        </p>

        <h3 className="text-base font-bold text-slate-100">Reporting Errors</h3>
        <p>
          If you discover a formula discrepancy or content error, please submit details via our <a href="/contact" className="text-cyan-400 underline">Contact Page</a>. Minor typo corrections are updated directly, while significant mathematical updates are logged with a &quot;Last Updated&quot; timestamp on the article.
        </p>
      </div>
    </div>
  );
}
