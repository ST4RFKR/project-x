"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { Container } from "@/shared/components/ui/container";
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/lib/utils";

export const Pricing = () => {
  const tPricing = useTranslations("HomePage.Pricing");
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: tPricing("starter.title"),
      description: tPricing("starter.description"),
      price: tPricing("starter.price"),
      features: tPricing.raw("starter.features") as string[],
    },
    {
      name: tPricing("growth.title"),
      description: tPricing("growth.description"),
      price: tPricing("growth.price"),
      features: tPricing.raw("growth.features") as string[],
    },
    {
      name: tPricing("business.title"),
      description: tPricing("business.description"),
      price: tPricing("business.price"),
      features: tPricing.raw("business.features") as string[],
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl dark:text-neutral-100">
            {tPricing("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            {tPricing("subtitle")}
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span
              className={cn(
                "text-sm",
                !isYearly
                  ? "font-bold text-neutral-900 dark:text-white"
                  : "text-neutral-500",
              )}
            >
              {tPricing("monthly")}
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative h-6 w-12 rounded-full bg-neutral-200 dark:bg-neutral-800 transition-colors focus:outline-none"
            >
              <div
                className={cn(
                  "absolute top-1 left-1 h-4 w-4 rounded-full bg-emerald-500 transition-transform",
                  isYearly && "translate-x-6",
                )}
              />
            </button>
            <span
              className={cn(
                "text-sm",
                isYearly
                  ? "font-bold text-neutral-900 dark:text-white"
                  : "text-neutral-500",
              )}
            >
              {tPricing("yearly")}
            </span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={cn(
                "relative flex flex-col p-8 rounded-3xl border transition-all duration-300",
                i === 1
                  ? "bg-emerald-600 border-emerald-600 shadow-xl scale-105 z-10"
                  : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/50",
              )}
            >
              <div className="mb-8">
                <h3
                  className={cn(
                    "text-lg font-medium",
                    i === 1
                      ? "text-emerald-100"
                      : "text-neutral-500 dark:text-neutral-400",
                  )}
                >
                  {plan.name}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-sm",
                    i === 1
                      ? "text-emerald-50"
                      : "text-neutral-600 dark:text-neutral-400",
                  )}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-8 flex items-baseline gap-2">
                <span
                  className={cn(
                    "text-4xl font-bold",
                    i === 1
                      ? "text-white"
                      : "text-neutral-900 dark:text-white",
                  )}
                >
                  {tPricing("ua")} {plan.price}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    i === 1
                      ? "text-emerald-100"
                      : "text-neutral-500 dark:text-neutral-400",
                  )}
                >
                  {tPricing("month")}
                </span>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-5 w-5 items-center justify-center rounded-full",
                        i === 1
                          ? "bg-white/20 text-white"
                          : "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
                      )}
                    >
                      <Check className="h-3 w-3" />
                    </div>
                    <span
                      className={cn(
                        "text-sm",
                        i === 1
                          ? "text-white"
                          : "text-neutral-600 dark:text-neutral-300",
                      )}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                className={cn(
                  "w-full py-6 text-base font-semibold transition-all",
                  i === 1
                    ? "bg-white text-emerald-600 hover:bg-emerald-50 border-0"
                    : "bg-transparent border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20",
                )}
              >
                {tPricing("selectPlan")}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
