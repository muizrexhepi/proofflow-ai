import { Briefcase, Users, Building2 } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    title: "Freelancers",
    description:
      "Build your portfolio with client success stories that win more projects",
    stats: "3x more leads",
    testimonial:
      "Casevia helped me create 12 case studies in a month. My conversion rate doubled.",
    author: "Sarah Chen, Design Consultant",
  },
  {
    icon: Users,
    title: "Small businesses",
    description: "Showcase your impact without hiring a content team or agency",
    stats: "10 hours saved/week",
    testimonial:
      "We went from zero case studies to a library of 20. Game changer for sales.",
    author: "Marcus Rodriguez, Agency Owner",
  },
  {
    icon: Building2,
    title: "Agencies",
    description:
      "Scale your case study production for multiple clients effortlessly",
    stats: "5x faster delivery",
    testimonial:
      "Our clients love the quality. We can now deliver case studies in days, not weeks.",
    author: "Emily Watson, Marketing Director",
  },
];

export function UseCases() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white/10 to-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-5xl">
            Built for teams of all sizes
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From solo freelancers to enterprise agencies, Casevia scales with
            your needs
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-8"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <useCase.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold">{useCase.title}</h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
              <div className="mb-6 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                {useCase.stats}
              </div>
              <blockquote className="border-l-2 border-primary pl-4">
                <p className="mb-2 text-sm italic text-muted-foreground">
                  {useCase.testimonial}
                </p>
                <footer className="text-xs font-medium">
                  {useCase.author}
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
