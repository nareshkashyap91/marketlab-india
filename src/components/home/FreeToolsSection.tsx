import React from "react";
import Link from "next/link";
import { TOOLS } from "@/data/tools";
import { Wrench, ArrowRight, Activity, TrendingUp, ShieldAlert, PiggyBank, Target, Flame } from "lucide-react";

export function FreeToolsSection() {
  const featuredTools = TOOLS.filter((t) => t.isInteractive);

  return (
    <section className="w-full py-16 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">Interactive Suite</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-1">Free Educational Calculators</h2>
            <p className="text-xs text-slate-400 mt-1">Test formulas, model risk profiles, and verify technical indicator mathematics in real-time.</p>
          </div>
          <Link href="/tools" className="text-xs font-mono text-emerald-400 hover:underline flex items-center gap-1">
            View All 20 Tools Directory &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.slug}`}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 glass-card-hover flex flex-col justify-between group transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                    {tool.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    Interactive
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{tool.tagline}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 group-hover:text-emerald-400 font-mono">
                <span>Open Calculator</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
