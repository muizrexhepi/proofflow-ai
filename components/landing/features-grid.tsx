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
          label: "Automatic speaker detection",
          description: "Identifies and labels different speakers automatically",
        },
        {
          label: "50+ language support",
          description: "Transcribe interviews in any major language",
        },
        {
          label: "Timestamp generation",
          description: "Every quote is timestamped for easy reference",
        },
        {
          label: "Custom vocabulary",
          description: "Train the AI on industry-specific terms",
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
          label: "Narrative extraction",
          description: "Automatically identifies the story arc and key moments",
        },
        {
          label: "Metrics identification",
          description: "Pulls out ROI, growth stats, and success metrics",
        },
        {
          label: "Quote highlighting",
          description: "Finds the most impactful customer quotes",
        },
        {
          label: "SEO optimization",
          description: "Generates SEO-friendly titles and meta descriptions",
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
          label: "PDF case studies",
          description: "Professional, branded case study documents",
        },
        {
          label: "Social media posts",
          description: "LinkedIn, Twitter, and Instagram-ready content",
        },
        {
          label: "Website embeds",
          description: "Responsive case study widgets for your site",
        },
        {
          label: "Email templates",
          description: "Ready-to-send customer success emails",
        },
      ],
    },
  ];

  return (
    <section
      id="features"
      className="py-20 lg:py-32 bg-gradient-to-b from-white/10 to-background"
    >
      <div className="mb-20 mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
          Everything you need to showcase success
        </h2>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Powerful features that transform raw interviews into marketing gold
        </p>
      </div>

      <div className="space-y-px">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                {index % 2 === 0 ? (
                  <>
                    {/* Text on left */}
                    <div>
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature.tag}
                      </div>
                      <h3 className="mb-4 text-3xl font-bold lg:text-4xl">
                        {feature.title}
                      </h3>
                      <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>

                      <div className="space-y-4">
                        {feature.subFeatures.map((subFeature, subIndex) => (
                          <div key={subIndex} className="flex gap-3">
                            <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <div>
                              <h4 className="mb-1 text-sm font-semibold">
                                {subFeature.label}
                              </h4>
                              <p className="text-sm leading-relaxed text-muted-foreground">
                                {subFeature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Image on right */}
                    <div className="flex items-center">
                      <div className="overflow-hidden rounded-lg border border-border bg-background shadow-xl">
                        <img
                          src={feature.illustration || "/placeholder.svg"}
                          alt={feature.title}
                          className="h-auto w-full"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Image on left */}
                    <div className="flex items-center">
                      <div className="overflow-hidden rounded-lg border border-border bg-background shadow-xl">
                        <img
                          src={feature.illustration || "/placeholder.svg"}
                          alt={feature.title}
                          className="h-auto w-full"
                        />
                      </div>
                    </div>

                    {/* Text on right */}
                    <div>
                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature.tag}
                      </div>
                      <h3 className="mb-4 text-3xl font-bold lg:text-4xl">
                        {feature.title}
                      </h3>
                      <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                        {feature.description}
                      </p>

                      <div className="space-y-4">
                        {feature.subFeatures.map((subFeature, subIndex) => (
                          <div key={subIndex} className="flex gap-3">
                            <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <div>
                              <h4 className="mb-1 text-sm font-semibold">
                                {subFeature.label}
                              </h4>
                              <p className="text-sm leading-relaxed text-muted-foreground">
                                {subFeature.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
