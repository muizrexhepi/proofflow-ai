"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/waitlist";
import { CheckCircle, Loader2, Twitter } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [count, setCount] = useState(0);

  // ✅ Fetch waitlist count on mount
  useEffect(() => {
    const fetchCount = async () => {
      const { count } = await supabase
        .from("waitlist")
        .select("*", { count: "exact", head: true });

      setCount(count || 0);
    };

    fetchCount();
  }, []);

  // ✅ Email regex validation
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // ✅ Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email.trim()) {
      setStatus("error");
      setErrorMessage("Email is required.");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid work email address.");
      return;
    }

    setStatus("loading");

    const { error } = await supabase.from("waitlist").insert([{ email }]);

    if (error) {
      setStatus("error");
      setErrorMessage(error.message);
    } else {
      setStatus("success");
      setEmail("");
      setCount((prev) => prev + 1); // ✅ Instantly update
    }
  };

  return (
    <div className="min-h-screen text-white flex flex-col relative overflow-hidden font-sans">
      <header className="relative z-10 pt-10 pb-6">
        <div className="flex justify-center">
          <Image
            src="/logo.svg"
            alt="ProofFlow.ai"
            width={160}
            height={60}
            className="w-40 h-auto"
          />
        </div>
      </header>

      <section className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-6 text-center py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight text-white max-w-5xl tracking-tight font-['var(--font-lora)']">
          Instantly Convert Customer Interviews into{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            High-Impact Case Studies
          </span>
        </h1>

        <p className="text-md md:text-xl text-white/70 mb-10 max-w-3xl leading-normal">
          Stop wasting hours on write-ups.{" "}
          <strong className="text-white/95">ProofFlow.ai</strong> uses AI to
          generate polished, persuasive case studies directly from your customer
          interviews.
        </p>

        <div className="w-full max-w-xl mx-auto mb-10">
          {status !== "success" ? (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl">
                <input
                  type="email"
                  required
                  placeholder="Work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading"}
                  className="flex-1 px-5 py-3 bg-transparent border-none focus:outline-none text-white placeholder:text-white/40 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-white text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <span>Get Early Access</span>
                  )}
                </button>
              </div>
              {status === "error" && (
                <p className="mt-3 text-sm text-red-300 text-left px-2">
                  {errorMessage}
                </p>
              )}
            </form>
          ) : (
            <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-5 shadow-xl">
              <div className="flex items-center justify-center space-x-2 text-green-300">
                <CheckCircle className="w-5 h-5" />
                <p className="font-semibold text-lg">
                  Success! You&apos;ve secured your spot.{" "}
                  <strong className="text-green-200">Check your inbox</strong>{" "}
                  for next steps.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center space-x-3 mt-4">
          <div className="flex -space-x-2">
            <div className="w-9 h-9 rounded-full bg-purple-500/80 flex items-center justify-center text-white text-xs font-bold ring-2 ring-[#0A1628]">
              JD
            </div>
            <div className="w-9 h-9 rounded-full bg-blue-500/80 flex items-center justify-center text-white text-xs font-bold ring-2 ring-[#0A1628]">
              AS
            </div>
            <div className="w-9 h-9 rounded-full bg-green-500/80 flex items-center justify-center text-white text-xs font-bold ring-2 ring-[#0A1628]">
              MK
            </div>
          </div>
          <p className="text-white/70 text-base font-medium">
            <span className="text-white font-extrabold">
              {count.toLocaleString()}+
            </span>{" "}
            users in line for early access.
          </p>
        </div>
      </section>

      <footer className="relative z-10 py-6">
        <div className="flex items-center justify-center">
          <a
            href="https://twitter.com/muiz_rexhepi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-white transition-colors flex items-center space-x-2"
          >
            <Twitter className="w-4 h-4" />
            <span className="text-sm">Follow the founder</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
