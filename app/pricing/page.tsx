import { Navigation } from "@/components/navigation";
import { PricingCards } from "@/components/pricing/pricing-cards";
import { ComparisonTable } from "@/components/pricing/comparison-table";
import { PricingFaq } from "@/components/pricing/pricing-faq";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight lg:text-6xl">
                Simple, transparent pricing
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Choose the plan that fits your needs. All plans include a 14-day
                free trial.
              </p>
            </div>

            <PricingCards />
          </div>
        </section>

        <section className="py-20 lg:py-32">
          <ComparisonTable />
        </section>

        <PricingFaq />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
