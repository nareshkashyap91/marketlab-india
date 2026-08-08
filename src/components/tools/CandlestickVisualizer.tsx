"use client";

import React, { useState } from "react";
import { Flame, CheckCircle, Info } from "lucide-react";

interface PatternMeta {
  id: string;
  name: string;
  bias: 'Bullish' | 'Bearish' | 'Neutral';
  description: string;
  rules: string[];
  reliability: 'High' | 'Medium';
  canvasType: 'hammer' | 'doji' | 'engulfing' | 'star';
}

const PATTERNS: PatternMeta[] = [
  {
    id: "hammer",
    name: "Hammer Candlestick",
    bias: "Bullish",
    description: "A single candlestick pattern occurring at the bottom of a downtrend, signaling potential downward price rejection and bullish momentum reversal.",
    rules: [
      "Small real body at upper end of total range.",
      "Lower shadow (wick) is at least 2x length of real body.",
      "Little to no upper shadow.",
      "Occurs after a sustained price decline."
    ],
    reliability: "High",
    canvasType: "hammer"
  },
  {
    id: "doji",
    name: "Doji Candlestick",
    bias: "Neutral",
    description: "Formed when open price and close price are virtually identical. Indicates extreme market indecision between buyers and sellers.",
    rules: [
      "Open and Close prices are almost equal.",
      "Upper and lower shadows can be long or short.",
      "Reflects equilibrium in buying and selling pressure."
    ],
    reliability: "Medium",
    canvasType: "doji"
  },
  {
    id: "bullish-engulfing",
    name: "Bullish Engulfing",
    bias: "Bullish",
    description: "A 2-candle pattern where a large green body completely swallows/engulfs the previous small red candle body, signaling aggressive buyer dominance.",
    rules: [
      "Day 1: Small bearish (red) candle.",
      "Day 2: Large bullish (green) candle whose body completely covers Day 1 body.",
      "Appears at potential swing low reversal points."
    ],
    reliability: "High",
    canvasType: "engulfing"
  }
];

export function CandlestickVisualizer() {
  const [selectedPattern, setSelectedPattern] = useState<PatternMeta>(PATTERNS[0]);

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100">Candlestick Pattern Explorer</h3>
            <p className="text-xs text-slate-400">Interactive visual guide to price action candlestick structures</p>
          </div>
        </div>
      </div>

      {/* Pattern Selector Tabs */}
      <div className="flex flex-wrap gap-2">
        {PATTERNS.map((pat) => (
          <button
            key={pat.id}
            onClick={() => setSelectedPattern(pat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedPattern.id === pat.id
                ? "bg-cyan-500 text-slate-950 shadow-glow-cyan"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            {pat.name}
          </button>
        ))}
      </div>

      {/* Detail Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Visual Box */}
        <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center space-y-4">
          <span className="text-xs font-mono text-cyan-400">Visual Pattern Graphic ({selectedPattern.name})</span>
          
          <div className="h-48 w-full flex items-center justify-center">
            {selectedPattern.canvasType === "hammer" && (
              <div className="flex flex-col items-center">
                <div className="w-1.5 h-6 bg-slate-600" />
                <div className="w-12 h-10 bg-emerald-500 rounded-sm border border-emerald-400 shadow-glow-emerald" />
                <div className="w-1.5 h-28 bg-emerald-500" />
              </div>
            )}
            {selectedPattern.canvasType === "doji" && (
              <div className="flex flex-col items-center">
                <div className="w-1.5 h-16 bg-slate-400" />
                <div className="w-14 h-1 bg-cyan-400 shadow-glow-cyan" />
                <div className="w-1.5 h-16 bg-slate-400" />
              </div>
            )}
            {selectedPattern.canvasType === "engulfing" && (
              <div className="flex items-end gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-1 h-4 bg-slate-500" />
                  <div className="w-8 h-10 bg-rose-500 rounded-sm border border-rose-400" />
                  <div className="w-1 h-4 bg-slate-500" />
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-1 h-6 bg-slate-500" />
                  <div className="w-12 h-28 bg-emerald-500 rounded-sm border border-emerald-400 shadow-glow-emerald" />
                  <div className="w-1 h-6 bg-slate-500" />
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">Bias:</span>
            <span className={selectedPattern.bias === 'Bullish' ? 'text-emerald-400 font-bold' : 'text-cyan-400 font-bold'}>
              {selectedPattern.bias} Reversal
            </span>
          </div>
        </div>

        {/* Pattern Explanation Rules */}
        <div className="space-y-4">
          <div>
            <h4 className="text-base font-bold text-slate-100">{selectedPattern.name}</h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">{selectedPattern.description}</p>
          </div>

          <div className="space-y-2">
            <h5 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Identification Rules:</h5>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {selectedPattern.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
