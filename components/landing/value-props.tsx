export function ValueProps() {
  const cards = [
    {
      title: "Purpose-built for case studies",
      illustration: "/placeholder.svg?height=400&width=500",
    },
    {
      title: "Designed to move fast",
      illustration: "/placeholder.svg?height=400&width=500",
    },
    {
      title: "Crafted to perfection",
      illustration: "/placeholder.svg?height=400&width=500",
    },
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header section with title on left, description on right */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-5xl font-bold tracking-tight lg:text-6xl leading-[1.1]">
              Made for modern marketing teams
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Casevia is shaped by the practices and principles that distinguish
              world-class marketing teams from the rest: relentless focus, fast
              execution, and a commitment to the quality of craft.{" "}
              <a
                href="#"
                className="text-foreground hover:underline underline-offset-4 inline-flex items-center gap-1 transition-colors"
              >
                Make the switch
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </p>
          </div>
        </div>

        {/* Three feature cards */}
        <div className="grid gap-2 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-card p-8 transition-all hover:border-border/80"
            >
              {/* Illustration container */}
              <div className="mb-8 aspect-[4/3] overflow-hidden rounded-xl bg-muted/50">
                <img
                  src={card.illustration || "/placeholder.svg"}
                  alt={card.title}
                  className="h-full w-full object-cover opacity-60 transition-opacity group-hover:opacity-80"
                />
              </div>

              {/* Title and expand icon */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold leading-tight">
                  {card.title}
                </h3>
                <button
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-foreground hover:text-foreground hover:bg-muted/30"
                  aria-label="Learn more"
                >
                  <span className="text-lg leading-none">+</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
