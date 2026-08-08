import React from "react";
import Link from "next/link";
import { YOUTUBE_VIDEOS } from "@/data/youtube";
import { Youtube, Play, Clock, ArrowRight } from "lucide-react";

export function YoutubeSection() {
  return (
    <section className="w-full py-16 bg-slate-900/40 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <Youtube className="w-4 h-4" /> MarketLab YouTube Channel
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-1">Video Tutorials & Masterclasses</h2>
          </div>
          <Link href="/youtube" className="text-xs font-mono text-rose-400 hover:underline flex items-center gap-1">
            Visit Video Library &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {YOUTUBE_VIDEOS.map((video) => (
            <Link
              key={video.id}
              href="/youtube"
              className="p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-rose-500/40 glass-card-hover space-y-3 group transition-all"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video rounded-xl bg-slate-950 overflow-hidden border border-slate-800 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="w-12 h-12 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] font-mono text-slate-300 border border-slate-800">
                  {video.duration}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                  {video.type}
                </span>
                <h3 className="text-sm font-bold text-slate-100 group-hover:text-rose-400 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{video.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>{video.timestamps.length} Key Timestamps</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:text-rose-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
