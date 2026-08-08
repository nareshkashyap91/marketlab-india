"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Search,
  BookOpen,
  Wrench,
  Youtube,
  Mail,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Sun,
  Moon
} from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { SearchModal } from "@/components/ui/SearchModal";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (document.documentElement.classList.contains("light")) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Tagline Badge */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-emerald-500 p-0.5 shadow-glow-cyan">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-slate-100 flex items-center gap-1.5">
                  MARKETLAB <span className="text-cyan-400">INDIA</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase -mt-1 hidden sm:block">
                  Learn • Analyse • Build • Backtest
                </span>
              </div>
            </Link>

            {/* SEBI Educational Badge */}
            <span className="hidden lg:inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 ml-2">
              <Sparkles className="w-3 h-3" /> Education First
            </span>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <Link href="/start-here" className="hover:text-cyan-400 transition-colors">
              Start Here
            </Link>

            {/* Categories Dropdown */}
            <div className="relative" onMouseEnter={() => setCategoriesOpen(true)} onMouseLeave={() => setCategoriesOpen(false)}>
              <button
                className="flex items-center gap-1 hover:text-cyan-400 transition-colors py-2"
                onClick={() => setCategoriesOpen(!categoriesOpen)}
              >
                <span>Categories</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${categoriesOpen ? "rotate-180 text-cyan-400" : ""}`} />
              </button>

              {categoriesOpen && (
                <div className="absolute top-full left-0 w-80 p-3 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl grid grid-cols-1 gap-1 animate-fadeIn">
                  {CATEGORIES.slice(0, 8).map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/categories/${cat.slug}`}
                      className="p-2 rounded-lg hover:bg-slate-800/80 flex items-start gap-2.5 transition-colors group"
                      onClick={() => setCategoriesOpen(false)}
                    >
                      <div className="p-1.5 rounded-md bg-slate-800 text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-400">
                          {cat.title}
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1">{cat.shortDesc}</p>
                      </div>
                    </Link>
                  ))}
                  <div className="pt-2 mt-1 border-t border-slate-800/80 text-center">
                    <Link href="/categories" className="text-xs text-cyan-400 hover:underline font-mono">
                      View All 10 Categories &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/tools" className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors">
              <Wrench className="w-4 h-4 text-emerald-400" />
              <span>Free Tools</span>
            </Link>

            <Link href="/youtube" className="flex items-center gap-1.5 hover:text-rose-400 transition-colors">
              <Youtube className="w-4 h-4 text-rose-400" />
              <span>YouTube</span>
            </Link>

            <Link href="/newsletter" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Newsletter</span>
            </Link>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3">
            {/* Quick Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 text-xs transition-all"
              title="Search Knowledge Base (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">Search...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-slate-800 text-slate-400 rounded border border-slate-700">
                Ctrl K
              </kbd>
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors"
              title="Toggle Theme Mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 py-4 space-y-3 animate-fadeIn">
            <Link
              href="/start-here"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-200 hover:text-cyan-400"
            >
              Start Here (Roadmap)
            </Link>

            <div className="space-y-1.5 pt-2 border-t border-slate-900">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Categories</span>
              <div className="grid grid-cols-2 gap-2 pt-1">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/categories/${cat.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-cyan-400"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-900 flex flex-col gap-2.5 text-sm">
              <Link href="/tools" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-emerald-400">
                Free Tools (20 Calculators)
              </Link>
              <Link href="/youtube" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-rose-400">
                YouTube Masterclasses
              </Link>
              <Link href="/newsletter" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-amber-400">
                MarketLab Weekly Newsletter
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-cyan-400">
                About MarketLab India
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
