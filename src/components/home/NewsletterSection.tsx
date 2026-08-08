"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className="w-full py-16 bg-slate-950 border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono">
              <Mail className="w-3.5 h-3.5" /> WEEKLY EDUCATIONAL NEWSLETTER
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100">
              MarketLab Weekly
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Every Sunday morning: 1 Educational Concept • 1 Practical Tool • 1 Python Tutorial • 1 Case Study • 1 AI/Algo Resource. <strong>Strictly zero buy/sell stock calls.</strong>
            </p>
          </div>

          {/* Value Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-xs text-slate-300">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Free Educational Content</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Zero Stock Tips or Signals</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Unsubscribe Anytime with 1-Click</span>
            </div>
          </div>

          {/* Subscription Form */}
          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center space-y-2 max-w-md mx-auto">
              <CheckCircle2 className="w-8 h-8 mx-auto" />
              <h4 className="font-bold text-base">You are subscribed to MarketLab Weekly!</h4>
              <p className="text-xs text-slate-300">Check your inbox for this Sunday&apos;s educational breakdown.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-amber-400 focus:outline-none text-xs font-sans placeholder-slate-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs font-mono shrink-0 shadow-lg transition-all"
              >
                {loading ? "Subscribing..." : "Subscribe Free"}
              </button>
            </form>
          )}

          <div className="text-center text-[11px] text-slate-500 font-mono flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            We respect your privacy. No spam. No commercial tip marketing.
          </div>
        </div>
      </div>
    </section>
  );
}
