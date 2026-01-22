import { Hero } from "@/widgets/landing/hero/ui/hero";
import { Features } from "@/widgets/landing/features/ui/features";
import { HowItWorks } from "@/widgets/landing/how-it-works/ui/how-it-works";
import { Pricing } from "@/widgets/landing/pricing/ui/pricing";
import { Cta } from "@/widgets/landing/cta/ui/cta";
import { Footer } from "@/widgets/landing/footer/ui/footer";

export const LandingPage = () => {
  return (
    <div className="relative">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Cta />
      <Footer />
    </div>
  );
};
