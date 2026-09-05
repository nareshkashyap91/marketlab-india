import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { PdfToWordConverter } from "@/components/tools/PdfToWordConverter";
import { AdBanner } from "@/components/ui/AdBanner";
import { SocialShareBar } from "@/components/ui/SocialShareBar";

export const metadata: Metadata = {
  title: "Free Online PDF to Word (.docx) Converter | MarketLab India",
  description: "Convert PDF documents to editable Microsoft Word (.doc / .docx) files online for free. 100% private, browser-based conversion with zero server uploads.",
};

export default function PdfToWordConverterPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Back Link */}
      <Link href="/tools" className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1.5 w-fit">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to Free Tools Library
      </Link>

      <div className="space-y-3">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Free Data Utility Tool</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100">Online PDF to Word (.docx) Converter</h1>
        <p className="text-sm text-slate-400 max-w-2xl">
          Upload any PDF report, research paper, or financial statement and instantly convert it into an editable Microsoft Word document (.doc / .docx). 100% free with zero ads and complete browser privacy.
        </p>
      </div>

      <SocialShareBar title="Free Online PDF to Word (.docx) Converter" />

      {/* Interactive Tool Component */}
      <PdfToWordConverter />

      <AdBanner slot="pdf-to-word-bottom" />
    </div>
  );
}
