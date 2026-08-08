import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | MarketLab India",
  description: "Terms of Service for using MarketLab India educational platform and free calculators.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Legal Terms</span>
        <h1 className="text-3xl font-extrabold text-slate-100">Terms of Service</h1>
      </div>

      <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed">
        <p>
          By accessing MarketLab India, you agree to these Terms of Service. If you do not agree, please do not use our website or educational tools.
        </p>

        <h3 className="text-base font-bold text-slate-100">1. Educational Usage Only</h3>
        <p>
          All material is provided strictly for educational purposes. You agree not to rely on MarketLab India content as professional investment advice.
        </p>

        <h3 className="text-base font-bold text-slate-100">2. Limitation of Liability</h3>
        <p>
          MarketLab India and its authors shall not be liable for any trading losses, financial decisions, or damages arising from the use of our calculators or articles.
        </p>
      </div>
    </div>
  );
}
