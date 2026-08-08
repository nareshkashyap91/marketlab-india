import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MarketLab India",
  description: "Privacy Policy for MarketLab India. We do not sell user data or store unnecessary personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Privacy Terms</span>
        <h1 className="text-3xl font-extrabold text-slate-100">Privacy Policy</h1>
      </div>

      <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 space-y-4 leading-relaxed">
        <p>
          MarketLab India respects your privacy. We collect minimal personal information strictly necessary for newsletter delivery (email address) and contact inquiry response.
        </p>

        <h3 className="text-base font-bold text-slate-100">1. Data Minimization</h3>
        <p>
          We do not require account registration to access our 20 free educational calculators or articles. Interactive tool inputs (e.g. price series in RSI calculator) are calculated locally in your web browser.
        </p>

        <h3 className="text-base font-bold text-slate-100">2. Cookies & Analytics</h3>
        <p>
          We use standard privacy-respecting analytics to measure website performance and Core Web Vitals. Google AdSense cookies may be used for educational ad serving in compliance with standard policies.
        </p>
      </div>
    </div>
  );
}
