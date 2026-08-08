import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | MarketLab India",
  description: "Transparency disclosure regarding educational affiliate links and books.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Transparency</span>
        <h1 className="text-3xl font-extrabold text-slate-100">Affiliate Disclosure</h1>
      </div>

      <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed">
        <p>
          In accordance with FTC and ASCI guidelines, MarketLab India discloses that some external links (such as recommended financial books on Amazon or educational software subscriptions) may be affiliate links.
        </p>

        <h3 className="text-base font-bold text-slate-100">Monetization Ethics</h3>
        <p>
          If you purchase a book through an affiliate link, MarketLab India may earn a small referral commission at no extra cost to you. We NEVER accept affiliate compensation from unverified tip services, illegal Signal schemes, or binary options platforms.
        </p>
      </div>
    </div>
  );
}
