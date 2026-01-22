"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Truck, Smartphone, MapPin, BarChart3 } from "lucide-react";
import { Container } from "@/shared/components/ui/container";
import { AnimationIcon } from "@/shared/components/common/animation-icon/animation-icon";
import { NfcCarAnimation } from "@/shared/components/common/animation-icon/step-1";
import { NfcScanAnimationStep2 } from "@/shared/components/common/animation-icon/step-2";
import { NfcTrackingAnimationStep3 } from "@/shared/components/common/animation-icon/step-3";
import { NfcExportAnimationStep4 } from "@/shared/components/common/animation-icon/step-4";
import { cn } from "@/lib/utils";

export const HowItWorks = () => {
  const tHowItWorks = useTranslations("HomePage.HowItWorks");
  const [openStep, setOpenStep] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      icon: Truck,
      title: tHowItWorks("step1.title"),
      description: tHowItWorks("step1.description"),
      animateComponent: <NfcCarAnimation isVisible={openStep === 0} />,
    },
    {
      number: "02",
      icon: Smartphone,
      title: tHowItWorks("step2.title"),
      description: tHowItWorks("step2.description"),
      animateComponent: <NfcScanAnimationStep2 isVisible={openStep === 1} />,
    },
    {
      number: "03",
      icon: MapPin,
      title: tHowItWorks("step3.title"),
      description: tHowItWorks("step3.description"),
      animateComponent: (
        <NfcTrackingAnimationStep3 isVisible={openStep === 2} />
      ),
    },
    {
      number: "04",
      icon: BarChart3,
      title: tHowItWorks("step4.title"),
      description: tHowItWorks("step4.description"),
      animateComponent: <NfcExportAnimationStep4 isVisible={openStep === 3} />,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="bg-neutral-50 py-24 dark:bg-neutral-900/50"
    >
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl dark:text-neutral-100">
            {tHowItWorks("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
            {tHowItWorks("subtitle")}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neutral-200 via-emerald-500 to-neutral-200 dark:from-neutral-800 dark:via-emerald-500 dark:to-neutral-800" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                key={i}
                className={cn(
                  "relative flex flex-col md:flex-row gap-8 md:gap-0",
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                )}
              >
                {/* Icon Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white dark:border-neutral-950 bg-emerald-500 z-10 shadow-lg" />

                {/* Content Card */}
                <div
                  className={cn(
                    "ml-12 md:ml-0 md:w-1/2",
                    i % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:text-left",
                  )}
                >
                  <div className="p-6 bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 hover:border-emerald-500/50 transition-colors">
                    <div
                      className={cn(
                        "flex items-center gap-4 mb-4",
                        i % 2 === 0 ? "md:justify-end" : "md:justify-start",
                      )}
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                        {step.number}
                      </span>
                      <AnimationIcon
                        isOpen={openStep === i}
                        setIsOpen={(open) => setOpenStep(open ? i : null)}
                        title={step.title}
                        suptitle={`Step ${step.number}`}
                        description={step.description}
                        animateComponent={step.animateComponent}
                      >
                        <step.icon className="w-6 h-6 text-neutral-700 dark:text-neutral-300 cursor-pointer" />
                      </AnimationIcon>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
