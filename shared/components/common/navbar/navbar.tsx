"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/shared/components/common/resizable-navbar";
import { useState } from "react";
import { Button } from "../ui/button";
import { LanguageSwitcher } from "../language-switcher/language-switcher";
import { AuthModal } from "../auth-modal";
import { useTranslations } from "next-intl";

type Props = {
  items: { name: string; link: string }[];
};

export function NavbarDemo({ items }: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("Header");

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={items} />
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <AuthModal>
              <Button variant={"outline"}>{t("login")}</Button>
            </AuthModal>
            <Button>{t("downloadApp")}</Button>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {items.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={(e) => {
                  if (item.link.startsWith("#")) {
                    e.preventDefault();
                    const element = document.getElementById(item.link.slice(1));
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <LanguageSwitcher />
              <AuthModal>
                <Button className="w-full">{t("login")}</Button>
              </AuthModal>
              <Button>{t("downloadApp")}</Button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

