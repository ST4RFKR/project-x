"use client";

import { useTranslations } from "next-intl";
import { Truck, Mail, Phone, MapPinned } from "lucide-react";
import { Container } from "@/shared/components/ui/container";

export const Footer = () => {
  const tFooter = useTranslations("Footer");

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

  return (
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
  );
};
