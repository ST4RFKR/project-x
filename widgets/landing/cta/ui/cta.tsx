"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AuthModal } from "@/shared/components/common/auth-modal";
import { Container } from "@/shared/components/ui/container";
import { Button } from "@/shared/components/ui/button";

export const Cta = () => {
  const tBenefits = useTranslations("HomePage.Benefits");

  return (
    <section className="py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-emerald-950 px-8 py-16 text-center shadow-2xl md:px-16 border border-neutral-800">
          {/* Decorative elements */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              {tBenefits("ctaTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-300">
              {tBenefits("ctaDescription")}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <AuthModal>
                <Button
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-500 border-0"
                >
                  {tBenefits("ctaButton")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </AuthModal>
            </div>

            {/* Features list */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>{tBenefits("feature1")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>{tBenefits("feature2")}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>{tBenefits("feature3")}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
