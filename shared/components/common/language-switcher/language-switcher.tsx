"use client";
import { Locale, useLocale, useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Globe } from "lucide-react";
import { setLocaleInCookie } from "@/lib/server/set-locale-in-cookie";
import { Flags } from "./flags";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("Header.LanguageSwitcher");

  const locales = [
    { locale: "en", name: t("Lang.en") },
    { locale: "uk", name: t("Lang.uk") },
    { locale: "ru", name: t("Lang.ru") },
  ] satisfies { locale: Locale; name: string }[];

  async function changeLocale(locale: Locale) {
    await setLocaleInCookie(locale);
  }
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="border-none bg-transparent">
            <Globe />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          align="end"
          className="flex flex-col gap-2 w-full"
        >
          {locales.map((l) => (
            <Button
              key={l.name}
              className={cn(
                "flex items-center gap-2 p-2 text-light-100 max-w-37.5 w-full"
              )}
              disabled={l.locale === locale}
              variant={"ghost"}
              onClick={() => changeLocale(l.locale)}
            >
              {<Flags locale={l.locale} />} {l.name}
            </Button>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
}
