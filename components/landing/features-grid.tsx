import React from "react";

export function FeaturesGrid() {
  const features = [
    {
      tag: "AI-Powered",
      title: "Smart Transcription & Analysis",
      description:
        "Upload your client interviews and get accurate transcriptions with speaker identification in minutes. Our AI understands context and extracts key insights automatically.",
      illustration: "/placeholder.svg?height=500&width=700",
      subFeatures: [
        {
          title: "Automatic speaker detection",
          description: "Identifies and labels different speakers automatically",
        },
        {
          title: "50+ language support",
          description: "Transcribe interviews in any major language",
        },
      ],
    },
    {
      tag: "Content Generation",
      title: "AI-Generated Marketing Assets",
      description:
        "Transform raw interviews into polished case studies, social posts, and marketing content. One interview becomes multiple assets across all your channels.",
      illustration: "/placeholder.svg?height=500&width=700",
      subFeatures: [
        {
          title: "Narrative extraction",
          description:
            "Automatically identifies the story arc and key moments that resonate with your audience",
        },
        {
          title: "Metrics identification",
          description:
            "Pulls out ROI, growth stats, and success metrics to strengthen your case studies",
        },
      ],
    },
    {
      tag: "Multi-Channel",
      title: "Export & Distribution",
      description:
        "Professional, branded case studies ready for any platform. Export to PDF, embed on your website, or share directly to social media with one click.",
      illustration: "/placeholder.svg?height=500&width=700",
      subFeatures: [
        {
          title: "PDF case studies",
          description:
            "Professional, branded case study documents with custom layouts and your company branding",
        },
        {
          title: "Social media posts",
          description:
            "LinkedIn, Twitter, and Instagram-ready content optimized for maximum engagement",
        },
      ],
    },
  ];

  return (
    <section id="features">
      <div className="space-y-px">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#141516] via-background to-background"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
              {/* Main Feature Header */}
              <div className="mb-12 max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {feature.tag}
                </div>
                <h3 className="mb-4 text-3xl font-bold lg:text-5xl tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>

              {/* Main Illustration Skeleton */}
              <div className="mb-12">
                <div className="overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
                  <div className="aspect-[16/10] bg-gradient-to-br from-muted/50 to-muted">
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto" />
                        <div className="h-4 w-48 bg-muted-foreground/20 rounded mx-auto" />
                        <div className="h-3 w-64 bg-muted-foreground/10 rounded mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border">
                <div className="grid md:grid-cols-2">
                  {feature.subFeatures.map((subFeature, subIndex) => (
                    <div
                      key={subIndex}
                      className={`
                        md:p-8 py-8 space-y-6 md:pl-0
                        ${subIndex % 2 === 1 ? "md:border-l md:pr-0 md:pl-8 border-border" : ""}
                        ${subIndex >= 2 ? "border-t border-border" : ""}
                      `}
                    >
                      {/* Sub-feature Text */}
                      <div>
                        <h4 className="mb-2 text-2xl font-semibold">
                          {subFeature.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {subFeature.description}
                        </p>
                      </div>

                      {/* Sub-feature Illustration Skeleton */}
                      <div className="overflow-hidden rounded-lg border border-border bg-card">
                        <div className="aspect-[4/3] bg-gradient-to-br from-muted/30 to-muted/50 animate-pulse">
                          <div className="h-full w-full flex items-center justify-center p-6">
                            <div className="text-center space-y-3">
                              <div className="w-12 h-12 bg-primary/10 rounded mx-auto" />
                              <div className="h-2 w-32 bg-muted-foreground/10 rounded mx-auto" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesGrid;
