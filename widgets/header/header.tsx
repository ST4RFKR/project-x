import { NavbarDemo } from "@/shared/components/common/navbar/navbar";
import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("Header.Links");
  const navItems = [
    {
      name: t("features"),
      link: "#features",
    },

    {
      name: t("howItWorks"),
      link: "#how-it-works",
    },

    {
      name: t("pricing"),
      link: "#pricing",
    },
    {
      name: t("reviews"),
      link: "#reviews",
    },
    {
      name: t("contacts"),
      link: "#contact",
    },
  ];
  return (
    <div className="flex items-center justify-between py-4 h-16">
      <NavbarDemo items={navItems} />
    </div>
  );
}
