"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background effects - Linear style subtle gradients */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[1000px] bg-[radial-gradient(ellipse_at_top,_rgba(120,119,198,0.15)_0%,_rgba(59,130,246,0.1)_30%,_transparent_70%)] opacity-40"></div>

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main headline */}
          <h1 className="text-5xl font-bold tracking-tight lg:text-7xl leading-[1.1] mb-6">
            Turn client interviews into polished case studies
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Meet the system for modern case study creation. Transform raw client
            conversations into professional marketing assets in minutes.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group gap-2 bg-white text-black hover:bg-white/90 transition-all"
              asChild
            >
              <Link href="/signup">
                Start building
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="gap-2 border border-border hover:bg-card/50 transition-all"
              asChild
            >
              <Link href="#demo">Watch demo</Link>
            </Button>
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="mt-20 lg:mt-28 relative">
          {/* Fade effect at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none"></div>

          {/* Main preview container */}
          <div className="relative">
            {/* Subtle glow behind */}
            <div className="absolute -inset-[100px] bg-[radial-gradient(circle_at_center,_rgba(120,119,198,0.08)_0%,_transparent_70%)] blur-3xl"></div>

            {/* Image container - simulating Linear's tilted perspective */}
            <div
              className="relative rounded-xl border border-border overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)]"
              style={{
                transform: "perspective(2000px) rotateX(5deg)",
                transformOrigin: "center top",
              }}
            >
              <div className="relative aspect-[16/10] bg-background">
                <img
                  src="/placeholder.svg?height=1000&width=1600"
                  alt="Casevia Dashboard"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
