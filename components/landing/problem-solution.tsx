export function ProblemSolution() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-5xl">
            Made for modern teams
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Transform how you capture and share client success stories
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-accent p-8 transition-all hover:border-border/50">
            <div className="mb-6 aspect-video rounded-lg bg-card flex items-center justify-center overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Upload interviews"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Upload & Transcribe</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Simply upload your client interview recordings. Our AI
              automatically transcribes and identifies speakers.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-accent p-8 transition-all hover:border-border/50">
            <div className="mb-6 aspect-video rounded-lg bg-card flex items-center justify-center overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="AI analysis"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold">AI Analysis</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Advanced AI extracts key insights, metrics, and compelling
              narratives from your conversations.
            </p>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-border bg-accent p-8 transition-all hover:border-border/50">
            <div className="mb-6 aspect-video rounded-lg bg-card flex items-center justify-center overflow-hidden">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Export content"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="mb-2 text-xl font-semibold">Export & Share</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get polished case studies, social posts, and testimonials ready to
              publish across all channels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
