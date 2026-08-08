import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLdSchema } from "@/components/seo/JsonLdSchema";

export const metadata: Metadata = {
  title: {
    default: "MarketLab India | Indian Stock Market Education & Quantitative Backtesting",
    template: "%s | MarketLab India"
  },
  description: "Data-first educational hub for Indian equity fundamentals, technical analysis, options Greeks, Python strategy backtesting, and AI for finance. Zero tips. 100% education.",
  keywords: [
    "Indian Stock Market Education",
    "Technical Analysis",
    "RSI Calculator",
    "CAGR Calculator",
    "Risk Reward Calculator",
    "Options Education India",
    "Python for Trading",
    "Algo Trading Backtesting"
  ],
  authors: [{ name: "Naresh Kashyap", url: "https://marketlabindia.com/about" }],
  creator: "MarketLab India",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://marketlabindia.com",
    title: "MarketLab India | Learn. Analyse. Build. Backtest.",
    description: "Indian stock market education, technical analysis, options education, Python algo trading, and backtesting.",
    siteName: "MarketLab India"
  },
  twitter: {
    card: "summary_large_image",
    title: "MarketLab India | Financial Education",
    description: "Learn Indian stock market fundamentals, technical analysis, options, and Python backtesting."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <JsonLdSchema type="WebSite" data={{}} />
        <JsonLdSchema type="Organization" data={{}} />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
