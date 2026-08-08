import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { YOUTUBE_VIDEOS } from "@/data/youtube";
import { Youtube, Play, Clock, ArrowRight, FileText, CheckCircle2 } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";

export const metadata: Metadata = {
  title: "YouTube Video Hub & Transcripts | MarketLab India",
  description: "Explore MarketLab India YouTube video masterclasses, short tutorials, embedded video players, timestamps, and full transcripts.",
};

export default function YoutubeHubPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="space-y-3">
        <span className="text-xs font-mono text-rose-400 uppercase tracking-wider flex items-center gap-2">
          <Youtube className="w-4 h-4" /> Video Knowledge Base
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100">YouTube Masterclasses & Transcripts</h1>
        <p className="text-sm text-slate-400 max-w-2xl">
          Long-form video tutorials, short concept breakdowns, and complete searchable transcripts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Video Library */}
        <div className="lg:col-span-2 space-y-8">
          {YOUTUBE_VIDEOS.map((video) => (
            <div key={video.id} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              {/* Embed Box */}
              <div className="relative aspect-video rounded-2xl bg-slate-950 overflow-hidden border border-slate-800 flex items-center justify-center">
                <div className="text-center space-y-2 p-6">
                  <div className="w-16 h-16 rounded-full bg-rose-600/90 text-white flex items-center justify-center mx-auto shadow-2xl">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 block">[YouTube Video Player Embed Placeholder: {video.title}]</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded border border-rose-500/20">
                    {video.type}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Duration: {video.duration}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-100">{video.title}</h2>
                <p className="text-xs text-slate-400 leading-relaxed">{video.description}</p>

                {/* Timestamps */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase">Video Timestamps:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                    {video.timestamps.map((ts, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-cyan-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">{ts.time}</span>
                        <span className="line-clamp-1">{ts.topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transcript snippet */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 space-y-1">
                  <span className="font-mono text-rose-400 font-bold flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" /> Transcript Sample:
                  </span>
                  <p className="italic">{video.transcript}</p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <Link href={`/articles/${video.relatedArticleSlug}`} className="text-cyan-400 hover:underline flex items-center gap-1">
                    Read Companion Article &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-slate-100 flex items-center gap-2">
              <Youtube className="w-4 h-4 text-rose-400" /> Channel Educational Rules
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Zero live trading calls or WhatsApp groups.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Focus on math, code, and historical data.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Clear distinction between hypothetical and historical data.</span>
              </li>
            </ul>
          </div>

          <AdBanner slot="youtube-sidebar" format="rectangle" />
        </div>
      </div>
    </div>
  );
}
