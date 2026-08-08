import React from "react";
import Link from "next/link";
import { TrendingUp, ShieldAlert, ArrowRight, Github, Youtube, Twitter, Mail } from "lucide-react";
import { CATEGORIES } from "@/data/categories";

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top SEBI Educational Mandate Banner */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-200">SEBI & Regulatory Educational Notice</h4>
              <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                MarketLab India is strictly an <strong>education-first</strong> research platform. We do NOT provide buy/sell recommendations, stock tips, target prices, stop-loss calls, portfolio management services, or financial advice. All financial calculations, chart analysis, and python scripts are provided for educational and analytical backtesting purposes only.
              </p>
            </div>
          </div>
          <Link
            href="/disclaimer"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold shrink-0 transition-colors border border-slate-700"
          >
            Read Full Disclaimer &rarr;
          </Link>
        </div>

        {/* Core Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-100">
                MARKETLAB <span className="text-cyan-400">INDIA</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Empowering Indian investors, traders, and quants through open, data-driven financial education. Learn market dynamics, master technical indicators, build Python backtesting models, and explore quantitative research.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-rose-400 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-cyan-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-slate-200 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">Categories</h4>
            <ul className="space-y-2.5 text-xs">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link href={`/categories/${cat.slug}`} className="hover:text-cyan-400 transition-colors">
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Free Tools */}
          <div>
            <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-4">Free Tools</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/tools/rsi-calculator" className="hover:text-emerald-400 transition-colors">
                  RSI Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/cagr-calculator" className="hover:text-emerald-400 transition-colors">
                  CAGR Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/risk-reward-calculator" className="hover:text-emerald-400 transition-colors">
                  Risk/Reward Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/sip-calculator" className="hover:text-emerald-400 transition-colors">
                  SIP Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/option-payoff-calculator" className="hover:text-emerald-400 transition-colors">
                  Option Payoff Tool
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-emerald-400 font-mono hover:underline">
                  All 20 Free Tools &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Trust & Policies */}
          <div>
            <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-4">Trust & Legal</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About MarketLab India
                </Link>
              </li>
              <li>
                <Link href="/editorial-policy" className="hover:text-amber-400 transition-colors">
                  Editorial Integrity Policy
                </Link>
              </li>
              <li>
                <Link href="/corrections-policy" className="hover:text-amber-400 transition-colors">
                  Corrections Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-amber-400 transition-colors">
                  Educational Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure" className="hover:text-amber-400 transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <div>
            &copy; {new Date().getFullYear()} MARKETLAB INDIA. All Rights Reserved. Education-First Financial Platform.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/sitemap.xml" className="hover:text-slate-300">XML Sitemap</Link>
            <span>•</span>
            <Link href="/robots.txt" className="hover:text-slate-300">Robots.txt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
