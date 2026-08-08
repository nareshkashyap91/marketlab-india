import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { StartLearningSection } from "@/components/home/StartLearningSection";
import { PopularTopicsSection } from "@/components/home/PopularTopicsSection";
import { FreeToolsSection } from "@/components/home/FreeToolsSection";
import { LatestArticlesSection } from "@/components/home/LatestArticlesSection";
import { TechAnalysisSection } from "@/components/home/TechAnalysisSection";
import { FundamentalSection } from "@/components/home/FundamentalSection";
import { OptionsSection } from "@/components/home/OptionsSection";
import { PythonAlgoSection } from "@/components/home/PythonAlgoSection";
import { AIFinanceSection } from "@/components/home/AIFinanceSection";
import { LearningPathsSection } from "@/components/home/LearningPathsSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { YoutubeSection } from "@/components/home/YoutubeSection";
import { AdBanner } from "@/components/ui/AdBanner";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Start Learning */}
      <StartLearningSection />

      {/* Section 3: Popular Topics */}
      <PopularTopicsSection />

      {/* Educational Ad Banner Placement */}
      <div className="max-w-7xl mx-auto px-4 w-full">
        <AdBanner slot="homepage-middle" />
      </div>

      {/* Section 4: Free Tools */}
      <FreeToolsSection />

      {/* Section 5: Latest Articles */}
      <LatestArticlesSection />

      {/* Section 6: Technical Analysis */}
      <TechAnalysisSection />

      {/* Section 7: Fundamental Analysis */}
      <FundamentalSection />

      {/* Section 8: Options Education */}
      <OptionsSection />

      {/* Section 9: Python & Algo Trading */}
      <PythonAlgoSection />

      {/* Section 10: AI & Finance */}
      <AIFinanceSection />

      {/* Section 11: Learning Paths */}
      <LearningPathsSection />

      {/* Section 12: Newsletter */}
      <NewsletterSection />

      {/* Section 13: YouTube */}
      <YoutubeSection />
    </div>
  );
}
