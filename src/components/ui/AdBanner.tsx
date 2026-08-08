import React from "react";

interface AdBannerProps {
  slot?: string;
  format?: "auto" | "rectangle" | "horizontal";
  className?: string;
}

export function AdBanner({ slot = "header-banner", format = "horizontal", className = "" }: AdBannerProps) {
  return (
    <div className={`w-full my-6 flex flex-col items-center justify-center p-4 border border-dashed border-slate-700/60 rounded-xl bg-slate-900/40 text-slate-400 text-xs ${className}`}>
      <div className="flex items-center gap-2 mb-1 text-slate-500 font-mono text-[10px] tracking-wider uppercase">
        <span>Advertisement</span>
        <span>•</span>
        <span>Google AdSense Slot [{slot}]</span>
      </div>
      <div className="w-full h-16 flex items-center justify-center bg-slate-900/60 rounded border border-slate-800 text-slate-500 font-sans text-xs">
        [Ad Placement: Educational Financial Sponsor / AdSense Responsive Container]
      </div>
    </div>
  );
}
