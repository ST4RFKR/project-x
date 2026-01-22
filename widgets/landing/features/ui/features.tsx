"use client";

import { HoverEffect } from "@/shared/components/ui/card-hover-effect";
import { Container } from "@/shared/components/ui/container";
import { CheckCircle2, WifiOff, MapPin, Camera, Clock, BarChart3 } from "lucide-react";
import { useTranslations } from "next-intl";

export const Features = () => {
  const tFeatures = useTranslations("HomePage.Features");

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

  return (
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
  );
};
