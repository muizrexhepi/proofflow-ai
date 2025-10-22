import { Upload, Sparkles, Share2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload your interview",
      description:
        "Drop your audio or video file, or paste a meeting link. We support all major formats and platforms.",
      illustration: "/placeholder.svg?height=400&width=500",
    },
    {
      icon: Sparkles,
      title: "AI generates content",
      description:
        "Our AI transcribes, analyzes, and structures your interview into a compelling narrative with key metrics.",
      illustration: "/placeholder.svg?height=400&width=500",
    },
    {
      icon: Share2,
      title: "Publish & share",
      description:
        "Export to PDF, embed on your website, or generate social media posts. One case study, multiple formats.",
      illustration: "/placeholder.svg?height=400&width=500",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold tracking-tight lg:text-6xl text-balance">
            Three steps to perfect case studies
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Our AI-powered workflow transforms raw interviews into polished
            marketing assets
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-[hsl(0,0%,12%)] border border-[hsl(0,0%,18%)] p-8 transition-all hover:border-[hsl(0,0%,25%)]"
            >
              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
                <step.icon className="h-6 w-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>

              {/* Description */}
              <p className="mb-6 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Illustration */}
              <div className="aspect-[4/3] overflow-hidden rounded-lg bg-[hsl(0,0%,8%)]">
                <img
                  src={step.illustration || "/placeholder.svg"}
                  alt={step.title}
                  className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
