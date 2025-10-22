import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out Casevia",
    features: [
      "1 case study per month",
      "10 min interview length",
      "AI narrative extraction",
      "5 MB storage",
      "1 template",
      "1 team seat",
      "Basic analytics",
      "Branding watermark",
      "Email support (48h)",
    ],
    cta: "Get started",
    href: "/signup",
    popular: false,
  },
  {
    name: "Starter",
    price: "$29",
    description: "For freelancers and consultants",
    features: [
      "5 case studies per month",
      "30 min interview length",
      "AI narrative extraction",
      "50 MB storage",
      "3 templates",
      "1 team seat",
      "Basic analytics",
      "No watermark",
      "Email support (24h)",
    ],
    cta: "Get started",
    href: "/signup?plan=starter",
    popular: false,
  },
  {
    name: "Pro",
    price: "$79",
    description: "For growing businesses",
    features: [
      "20 case studies per month",
      "60 min interview length",
      "AI narrative extraction",
      "3 AI social posts per case",
      "2 GB storage",
      "SEO-friendly title/slug",
      "10 templates",
      "5 team seats",
      "Full analytics",
      "No watermark",
      "Priority support (4h)",
    ],
    cta: "Get started",
    href: "/signup?plan=pro",
    popular: true,
  },
  {
    name: "Agency",
    price: "$199",
    description: "For agencies and enterprises",
    features: [
      "50 case studies per month",
      "120 min interview length",
      "AI narrative extraction",
      "Unlimited AI social posts",
      "5 GB storage",
      "SEO-friendly title/slug",
      "10 templates",
      "Unlimited team seats",
      "Full analytics",
      "No watermark",
      "High priority processing",
      "Dedicated support",
    ],
    cta: "Contact sales",
    href: "/contact",
    popular: false,
  },
];

export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`relative rounded-2xl border p-8 bg-card transition-all ${
            plan.popular ? "border-white/20 shadow-lg" : "border-border"
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-white text-black px-3 py-1 text-xs font-semibold">
                Most popular
              </span>
            </div>
          )}

          <div className="mb-8">
            <h3 className="mb-2 text-2xl font-semibold">{plan.name}</h3>
            <div className="mb-2 flex items-baseline gap-1">
              <span className="text-5xl font-bold">{plan.price}</span>
              {plan.price !== "$0" && (
                <span className="text-muted-foreground text-sm">/month</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{plan.description}</p>
          </div>

          <Button
            className={`mb-8 w-full ${plan.popular ? "bg-white text-black hover:bg-white/90" : "bg-transparent border-border hover:bg-accent"}`}
            variant={plan.popular ? "default" : "outline"}
            asChild
          >
            <Link href={plan.href}>{plan.cta}</Link>
          </Button>

          <ul className="space-y-4">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start gap-3 text-sm">
                <Check className="h-4 w-4 shrink-0 text-white mt-0.5" />
                <span className="text-muted-foreground leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
