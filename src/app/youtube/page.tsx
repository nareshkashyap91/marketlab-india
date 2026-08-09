import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { YOUTUBE_VIDEOS } from "@/data/youtube";
import { Youtube, Clock, FileText, CheckCircle2, ShieldAlert } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";

export const metadata: Metadata = {
  title: "Educational Video Hub & Masterclasses | MarketLab India",
  description: "Curated financial educational video masterclasses, technical analysis lessons, options Greeks breakdowns, timestamps, and full searchable transcripts.",
};

export default function YoutubeHubPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="space-y-3">
        <span className="text-xs font-mono text-rose-400 uppercase tracking-wider flex items-center gap-2">
          <Youtube className="w-4 h-4" /> Video Knowledge Base
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100">Educational Video Masterclasses</h1>
        <p className="text-sm text-slate-400 max-w-2xl">
          Data-driven video lessons, technical math breakdowns, options payoff tutorials, and complete searchable transcripts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Video Library */}
        <div className="lg:col-span-2 space-y-8">
          {YOUTUBE_VIDEOS.map((video) => (
            <div key={video.id} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
              {/* Working Embedded YouTube Video Iframe */}
              <div className="relative aspect-video rounded-2xl bg-slate-950 overflow-hidden border border-slate-800 shadow-2xl">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-rose-400 bg-rose-500/10 px-2.5 py-0.5 rounded border border-rose-500/20 font-bold">
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
                  <span className="text-xs font-mono text-cyan-400 uppercase font-bold">Lesson Timestamps:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                    {video.timestamps.map((ts, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="text-cyan-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 font-bold">{ts.time}</span>
                        <span className="line-clamp-1">{ts.topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transcript snippet */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 space-y-1">
                  <span className="font-mono text-rose-400 font-bold flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5" /> Educational Transcript Notes:
                  </span>
                  <p className="italic">{video.transcript}</p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <Link href={`/articles/${video.relatedArticleSlug}`} className="text-cyan-400 hover:underline flex items-center gap-1 font-bold">
                    Read Companion Masterclass Article &rarr;
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
              <Youtube className="w-4 h-4 text-rose-400" /> Educational Guidelines
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Strictly education-first financial video masterclasses.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Zero buy/sell stock tips or WhatsApp signal calls.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Mathematical derivations and Python strategy code walkthroughs.</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p>
              <strong>Disclaimer:</strong> Videos hosted in this educational hub are provided for financial literacy and quantitative learning purposes.
            </p>
          </div>

          <AdBanner slot="youtube-sidebar" format="rectangle" />
        </div>
      </div>
    </div>
  );
}
