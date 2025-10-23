"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
  Twitter,
  Linkedin,
  CheckCircle,
  Loader2,
  ArrowRight,
  UserCircle, // Kept for the nav icon
  Users, // New icon for the count
} from "lucide-react";

// Helper function to format the number with commas
const formatNumber = (num: number | null) => {
  if (num === null) return "loading...";
  return num.toLocaleString();
};

const WaitlistLanding = () => {
  // --- START: ORIGINAL LOGIC (RESTORED) ---
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");
  // Initial state is null, so we know when it's loading vs 0
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  useEffect(() => {
    // Fetch waitlist count on mount
    fetchWaitlistCount();
  }, []);

  const fetchWaitlistCount = async () => {
    try {
      const response = await fetch("/api/waitlist/count");
      if (response.ok) {
        const data = await response.json();
        // Ensure count is treated as a number
        setWaitlistCount(Number(data.count));
      } else {
        // Fallback to a default number if API fails (e.g., 100)
        setWaitlistCount(100);
      }
    } catch (error) {
      console.error("Failed to fetch waitlist count:", error);
      setWaitlistCount(100); // Fail-safe default
    }
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage("Please enter your email address");
      setStatus("error");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle specific error codes from your API (e.g., 409 for duplicate)
        if (response.status === 409) {
          throw new Error("You are already on the waitlist!");
        }
        throw new Error(data.error || "Failed to join waitlist");
      }

      setStatus("success");
      setEmail("");
      // Add 1 to the count immediately for a snappy feel, then refresh
      setWaitlistCount((prevCount) => (prevCount !== null ? prevCount + 1 : 1));
      // You can remove this full refresh if you want the optimistic update to stick
      // fetchWaitlistCount();
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );
    }
  };
  // --- END: ORIGINAL LOGIC (RESTORED) ---

  // --- START: NEW UI (GREEN THEME) ---
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0B0B0F] text-gray-300 font-sans">
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 z-0">
        {/* Center radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-white/5 rounded-full filter blur-[150px] opacity-70"></div>

        {/* Top-left crosshair (Green Theme) */}
        <div className="absolute left-[10%] top-[25%] w-[300px] h-[1px] bg-gradient-to-r from-transparent via-lime-500/70 to-transparent"></div>
        <div className="absolute left-[calc(10%+150px)] top-[calc(25%-150px)] w-[1px] h-[300px] bg-gradient-to-b from-transparent via-lime-500/70 to-transparent"></div>

        {/* Bottom-right crosshair (Green Theme) */}
        <div className="absolute right-[10%] bottom-[25%] w-[300px] h-[1px] bg-gradient-to-r from-transparent via-green-500/70 to-transparent"></div>
        <div className="absolute right-[calc(10%+150px)] bottom-[calc(25%-150px)] w-[1px] h-[300px] bg-gradient-to-b from-transparent via-green-500/70 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen px-6">
        {/* Header / Nav (Removed to keep it focused, can be uncommented) */}
        {/* <header className="container mx-auto max-w-5xl py-6 flex justify-between items-center">
          <span className="text-xl font-semibold text-white">Casevia</span>
          <nav className="flex items-center space-x-4">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Updates
            </a>
            <button className="w-8 h-8 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-500 hover:text-white transition-colors">
              <UserCircle className="w-5 h-5" />
            </button>
          </nav>
        </header> */}

        {/* Hero Section */}
        <main className="flex-grow flex flex-col items-center justify-center text-center py-20">
          {/* Logo */}
          <div className="w-16 h-16 mb-6 bg-gray-900/80 border border-gray-700 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm">
            <span className="text-3xl font-bold text-white">C</span>
          </div>

          <p className="text-sm font-medium text-gray-400 tracking-wider uppercase mb-4">
            Casevia
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl mb-8 leading-tight">
            Join the waitlist for
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-green-500">
              {" "}
              Casevia!
            </span>
          </h1>

          {/* WAITLIST COUNT DISPLAY (NEW) */}
          <div className="flex flex-col items-center mb-10 w-full max-w-md">
            <div className="flex items-center justify-center gap-2 mb-2 text-gray-300">
              <Users
                className={`w-5 h-5 ${waitlistCount === null ? "animate-pulse text-gray-500" : "text-lime-400"}`}
              />
              <p className="font-semibold text-lg">
                {formatNumber(waitlistCount)}{" "}
                {/* Display the formatted count */}
              </p>
              <p className="text-gray-500 text-sm">
                people already on the list.
              </p>
            </div>
            {/* Simple progress/status bar */}
            <div className="w-4/5 h-2 bg-gray-800 rounded-full overflow-hidden mt-1">
              <div
                className={`h-full bg-gradient-to-r from-lime-400 to-green-500 transition-all duration-1000 ease-out ${waitlistCount === null ? "w-[10%]" : "w-full"}`}
                style={{
                  // Target a percentage based on count (e.g., max 1000)
                  width:
                    waitlistCount !== null
                      ? `${Math.min((waitlistCount / 1000) * 100, 100)}%`
                      : "10%",
                }}
              />
            </div>
          </div>
          {/* END WAITLIST COUNT DISPLAY */}

          {/* Form Section */}
          {status !== "success" ? (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md mx-auto space-y-4"
            >
              {/* Email Input (Green Theme Focus) */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 z-10" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Email address..."
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-900/70 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500/50 focus:border-lime-500 backdrop-blur-sm transition-all"
                  disabled={status === "loading"}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-8 py-3.5 bg-gray-900 border border-gray-700 hover:bg-gray-800 rounded-lg font-medium text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Join the Waitlist</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Error Message */}
              {status === "error" && (
                <p className="pt-2 text-red-400 text-sm text-center">
                  {errorMessage}
                </p>
              )}
            </form>
          ) : (
            // Success State (Already green, looks great)
            <div className="w-full max-w-md mx-auto p-6 bg-gray-900/70 border border-green-600/50 rounded-lg backdrop-blur-sm">
              <div className="flex flex-col items-center justify-center gap-3 text-green-400">
                <CheckCircle className="w-7 h-7" />
                <p className="text-lg font-medium">You're on the waitlist!</p>
                <p className="text-gray-400 text-sm text-center">
                  Thanks for joining. You are number **
                  {formatNumber(waitlistCount)}** on the list. We'll be in touch
                  soon!
                </p>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="container mx-auto max-w-5xl py-8 text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm text-gray-500">Casevia is coming soon.</p>
            {/* Social links (Green Theme Hover) */}
            <div className="flex gap-6">
              <a
                href="https://twitter.com/muiz_rexhepi" // Keeping your original link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-lime-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/muiz-rexhepi" // Keeping your original link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-lime-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Casevia. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
  // --- END: NEW UI (GREEN THEME) ---
};

export default WaitlistLanding;
