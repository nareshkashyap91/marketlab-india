import React from "react";
import Link from "next/link";
import { Target, ArrowRight, CheckCircle2, Scale } from "lucide-react";

export function OptionsSection() {
  return (
    <section className="w-full py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <Target className="w-4 h-4" /> Options Education & Risk Derivatives
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 leading-tight">
              Deconstruct Options Greeks & <br />
              <span className="gradient-text-gold">Non-Linear Payoff Curves</span>
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Options are non-linear derivatives whose price sensitivity changes continuously across spot movement, time decay, and volatility fluctuations. Learn Black-Scholes mathematical fundamentals.
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Delta, Theta, Vega, and Gamma Sensitivity Analysis</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Implied Volatility (IV) Rank & Volatility Crush Mechanics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Risk-Defined Options Spreads (Bull Call, Bear Put, Spreads)</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/categories/options-education"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg transition-all"
              >
                <span>Learn Options Greeks</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono text-amber-400">Call Payoff Equation</span>
              <span className="text-[10px] font-mono text-slate-500">Expiry Payoff Math</span>
            </div>
            <div className="math-card p-4 rounded-xl space-y-1">
              <div className="font-mono text-xs text-amber-400">Payoff_LongCall = Max(0, Spot - Strike) - Premium</div>
              <div className="font-mono text-xs text-emerald-400">Breakeven = Strike + Premium Paid</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Use our interactive payoff diagram calculator to test Call & Put options across spot ranges before executing simulated positions.
            </p>
            <Link
              href="/tools/option-payoff-calculator"
              className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-mono font-semibold flex items-center justify-center gap-2 border border-slate-700 transition-colors"
            >
              <Scale className="w-4 h-4" /> Launch Option Payoff Calculator
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
