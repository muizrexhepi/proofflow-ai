import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { SocialProof } from "@/components/landing/social-proof";
import { ValueProps } from "@/components/landing/value-props";
import { HowItWorks } from "@/components/landing/how-it-works";
import { FeaturesGrid } from "@/components/landing/features-grid";
import { UseCases } from "@/components/landing/use-cases";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SocialProof />
        <ValueProps />
        <HowItWorks />
        <FeaturesGrid />
        <UseCases />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
