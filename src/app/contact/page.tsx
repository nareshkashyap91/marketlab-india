"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldAlert } from "lucide-react";
import { AdBanner } from "@/components/ui/AdBanner";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Educational Query");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Input Sanitization & Validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    // Rate limit simulation delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="space-y-3 text-center max-w-2xl mx-auto">
        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Get in Touch</span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100">Contact MarketLab India</h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          Have feedback on our calculators, tutorial suggestions, or editorial corrections? We welcome community input.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact info sidebar */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-slate-100">Educational Inquiries</h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>support@marketlabindia.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>New Delhi / Remote, India</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              <strong>Notice:</strong> We do NOT answer requests for stock tips, personal portfolio reviews, or buy/sell advice.
            </span>
          </div>
        </div>

        {/* Form Container */}
        <div className="md:col-span-2 p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 shadow-2xl">
          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 mx-auto" />
              <h3 className="text-xl font-bold">Message Received!</h3>
              <p className="text-xs text-slate-300">
                Thank you for contacting MarketLab India. Our editorial team will review your query within 24-48 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Full Name:</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-cyan-400 focus:outline-none text-xs font-sans placeholder-slate-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Email Address:</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul@example.com"
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-cyan-400 focus:outline-none text-xs font-sans placeholder-slate-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Topic Category:</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-cyan-400 focus:outline-none text-xs font-sans"
                >
                  <option value="Educational Query">Educational Query</option>
                  <option value="Calculator Feedback">Calculator Feedback / Bug Report</option>
                  <option value="Article Suggestion">Article Topic Suggestion</option>
                  <option value="Corrections">Content Correction Request</option>
                  <option value="Sponsorship">Sponsorship & Advertising</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Your Message:</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your inquiry..."
                  className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:border-cyan-400 focus:outline-none text-xs font-sans placeholder-slate-500"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2 shadow-glow-cyan transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? "Sending..." : "Submit Message"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
