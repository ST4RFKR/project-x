"use client";

import { useState } from "react";
import { BackgroundRippleEffect } from "@/shared/components/common/background-ripple-effect";
import { FlipWords } from "@/shared/components/common/flip-words";
import { HoverEffect } from "@/shared/components/common/ui/card-hover-effect";
import { useTranslations } from "next-intl";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import {
  ArrowRight,
  Smartphone,
  MapPin,
  Clock,
  Camera,
  WifiOff,
  BarChart3,
  Truck,
  Users,
  Shield,
  Zap,
  CheckCircle2,
  Mail,
  Phone,
  MapPinned,
  Check,
} from "lucide-react";
import { AuthModal } from "../auth-modal";

export function Main() {
  const t = useTranslations("HomePage.Hero");
  const tFeatures = useTranslations("HomePage.Features");
  const tHowItWorks = useTranslations("HomePage.HowItWorks");
  const tBenefits = useTranslations("HomePage.Benefits");
  const tPricing = useTranslations("HomePage.Pricing");
  const tFooter = useTranslations("Footer");

  const [isYearly, setIsYearly] = useState(false);

  const flipWords = t.raw("flipWords") as string[];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const features = [
    {
      title: tFeatures("nfcTracking.title"),
      description: tFeatures("nfcTracking.description"),
      link: "#features",
      icon: <CheckCircle2 className="h-8 w-8 text-neutral-500" />,
    },
    {
      title: tFeatures("offlineMode.title"),
      description: tFeatures("offlineMode.description"),
      link: "#features",
      icon: <WifiOff className="h-8 w-8 text-neutral-500" />,
    },
    {
      title: tFeatures("routeTracking.title"),
      description: tFeatures("routeTracking.description"),
      link: "#features",
      icon: <MapPin className="h-8 w-8 text-neutral-500" />,
    },
    {
      title: tFeatures("photoReports.title"),
      description: tFeatures("photoReports.description"),
      link: "#features",
      icon: <Camera className="h-8 w-8 text-neutral-500" />,
    },
    {
      title: tFeatures("timeTracking.title"),
      description: tFeatures("timeTracking.description"),
      link: "#features",
      icon: <Clock className="h-8 w-8 text-neutral-500" />,
    },
    {
      title: tFeatures("analytics.title"),
      description: tFeatures("analytics.description"),
      link: "#features",
      icon: <BarChart3 className="h-8 w-8 text-neutral-500" />,
    },
  ];

  const steps = [
    {
      number: "01",
      icon: Truck,
      title: tHowItWorks("step1.title"),
      description: tHowItWorks("step1.description"),
    },
    {
      number: "02",
      icon: Smartphone,
      title: tHowItWorks("step2.title"),
      description: tHowItWorks("step2.description"),
    },
    {
      number: "03",
      icon: MapPin,
      title: tHowItWorks("step3.title"),
      description: tHowItWorks("step3.description"),
    },
    {
      number: "04",
      icon: BarChart3,
      title: tHowItWorks("step4.title"),
      description: tHowItWorks("step4.description"),
    },
  ];

  const benefits = [
    { icon: Shield, text: tBenefits("security") },
    { icon: Zap, text: tBenefits("speed") },
    { icon: Users, text: tBenefits("team") },
    { icon: WifiOff, text: tBenefits("offline") },
  ];

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
    <div className="relative">
      {/* Hero Section */}
      <section className="relative flex w-full overflow-hidden">
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
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {t("actions.howItWorks")}
              </Button>
            </div>

            <div
              className="
    mt-12
    border-t border-neutral-200 pt-8
    dark:border-neutral-800

    grid grid-cols-[max-content_max-content]
    gap-x-12 gap-y-6
    justify-center

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
                  <span className="whitespace-nowrap">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900 md:text-4xl dark:text-neutral-100">
              {tFeatures("title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
              {tFeatures("subtitle")}
            </p>
          </div>

          <HoverEffect items={features} />
        </Container>
      </section>

      {/* How It Works Section - Redesigned */}
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
                        <step.icon className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
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

      {/* Pricing Section */}
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

      {/* CTA Section */}
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

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-neutral-200 bg-neutral-50 py-16 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <Container>
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600">
                  <Truck className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold text-neutral-900 dark:text-white">
                  Ingress
                </span>
              </div>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                {tFooter("description")}
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="mb-4 font-semibold text-neutral-900 dark:text-white">
                {tFooter("product")}
              </h4>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>
                  <a
                    href="#features"
                    onClick={(e) => handleSmoothScroll(e, "features")}
                    className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                  >
                    {tFooter("features")}
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    onClick={(e) => handleSmoothScroll(e, "pricing")}
                    className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                  >
                    {tFooter("pricing")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                  >
                    {tFooter("mobileApp")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 font-semibold text-neutral-900 dark:text-white">
                {tFooter("company")}
              </h4>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                  >
                    {tFooter("about")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                  >
                    {tFooter("blog")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                  >
                    {tFooter("careers")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 font-semibold text-neutral-900 dark:text-white">
                {tFooter("contact")}
              </h4>
              <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a
                    href="mailto:hello@ingress.ua"
                    className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                  >
                    example@ingress.ua
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a
                    href="tel:+380696969696"
                    className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                  >
                    +38 (069) 696-96-96
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPinned className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>{tFooter("address")}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 text-sm text-neutral-600 md:flex-row dark:border-neutral-800 dark:text-neutral-400">
            <p>
              © {new Date().getFullYear()} Ingress. {tFooter("rights")}
            </p>
            <div>
              {"Developed with 💚 by "}
              <a
                href="https://t.me/Evg_Supr"
                className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              >
                {"Eugene"}
              </a>
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              >
                {tFooter("privacy")}
              </a>
              <a
                href="#"
                className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              >
                {tFooter("terms")}
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
