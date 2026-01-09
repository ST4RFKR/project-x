import { BackgroundRippleEffect } from "@/shared/components/common/background-ripple-effect";
import { FlipWords } from "@/shared/components/common/flip-words";
import { useTranslations } from "next-intl";
import { Container } from "../ui/container";

export function BackgroundRippleEffectDemo() {
  const t = useTranslations("HomePage.Hero");

  const flipWords = t.raw("flipWords") as string[];
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] w-full overflow-hidden">
      <BackgroundRippleEffect />
      <div className="relative z-10 mt-15 ml-20 max-w-xl ">
        <h1 className="text-3xl font-bold text-neutral-900 md:text-5xl lg:text-6xl dark:text-neutral-100">
          {t("title")}
          <span className="whitespace-nowrap">
            {t("flipPrefix")} <FlipWords words={flipWords} />
          </span>
        </h1>

        <p className="mt-3 text-base text-neutral-700 dark:text-neutral-400">
          {t("description")}
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-lg bg-neutral-900 px-6 py-3 text-white dark:bg-neutral-100 dark:text-neutral-900">
            {t("actions.requestDemo")}
          </button>
          <button className="rounded-lg border border-neutral-300 px-6 py-3 dark:border-neutral-700">
            {t("actions.howItWorks")}
          </button>
        </div>
      </div>
    </div>
  );
}
