"use client";

import { BackgroundRippleEffect } from "@/shared/components/ui/background-ripple-effect";
import { FlipWords } from "@/shared/components/ui/flip-words";
import { useTranslations } from "next-intl";
import { Container } from "@/shared/components/ui/container";
import { Button } from "@/shared/components/ui/button";
import { ArrowRight, Shield, Zap, Users, WifiOff } from "lucide-react";
import { AuthModal } from "@/shared/components/common/auth-modal";

export const Hero = () => {
  const t = useTranslations("HomePage.Hero");
  const tBenefits = useTranslations("HomePage.Benefits");
  
  const flipWords = t.raw("flipWords") as string[];

  const benefits = [
    { icon: Shield, text: tBenefits("security") },
    { icon: Zap, text: tBenefits("speed") },
    { icon: Users, text: tBenefits("team") },
    { icon: WifiOff, text: tBenefits("offline") },
  ];

  const handleScrollToHowItWorks = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex w-full">
      <BackgroundRippleEffect />
      <Container>
        <div className="relative z-10 mt-8 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 text-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-neutral-600 dark:text-neutral-400">
              {t("badge")}
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl dark:text-neutral-100">
            {t("title")}
            <span className="whitespace-nowrap">
              {t("flipPrefix")} <FlipWords words={flipWords} />
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <AuthModal>
              <Button size="lg" className="group w-full">
                {t("actions.sigUp")}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </AuthModal>

            <Button
              variant="outline"
              size="lg"
              onClick={handleScrollToHowItWorks}
            >
              {t("actions.howItWorks")}
            </Button>
          </div>

          <div
            className="
              mt-12
              border-t border-neutral-200 pt-8
              dark:border-neutral-800

              grid grid-cols-2
              gap-x-6 gap-y-6
              justify-center

              sm:grid-cols-[max-content_max-content]

              md:flex md:flex-nowrap md:justify-center
            "
          >
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="
                  flex items-center gap-2
                  text-sm text-neutral-600 dark:text-neutral-400
                "
              >
                <benefit.icon className="h-4 w-4 text-green-500 shrink-0" />
                <span className="sm:whitespace-nowrap">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
