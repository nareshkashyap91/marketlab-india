"use client";

import React, { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";

interface SocialShareBarProps {
  title: string;
  url?: string;
}

export function SocialShareBar({ title, url }: SocialShareBarProps) {
  const [copied, setCopied] = useState(false);
  const currentUrl = url || (typeof window !== "undefined" ? window.location.href : "https://marketlab-india-blog.vercel.app");

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `Check out this free educational financial tool/guide: "${title}"\n👉 ${currentUrl}`
  )}`;

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `Learning Indian Stock Market Math: "${title}"\n\nTest the free educational tool at @MarketLabIndia 👇`
  )}&url=${encodeURIComponent(currentUrl)}`;

  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="p-4 rounded-2xl bg-slate-900/90 border border-cyan-500/20 shadow-lg my-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
        <Share2 className="w-4 h-4 text-cyan-400" />
        <span className="font-bold">Share with Fellow Indian Traders & Investors:</span>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <a
          href={whatsappShareUrl}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
        >
          <span>Share on WhatsApp</span>
        </a>

        <a
          href={twitterShareUrl}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
        >
          <span>Share on X</span>
        </a>

        <a
          href={linkedinShareUrl}
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
        >
          <span>LinkedIn</span>
        </a>

        <button
          onClick={handleCopy}
          className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Copied!" : "Copy Link"}</span>
        </button>
      </div>
    </div>
  );
}
