"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
} from "@/shared/components/common/ui/animated-modal";
import { Input } from "@/shared/components/common/ui/input";
import { Label } from "@/shared/components/common/ui/label";

type AuthView = "signIn" | "signUp";

export function AuthModal({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState<AuthView>("signIn");
  const t = useTranslations("AuthModal");

  return (
    <Modal>
      <ModalTrigger className="p-0">{children}</ModalTrigger>
      <ModalBody className="max-w-md bg-white dark:bg-black">
        <ModalContent className="p-4 md:p-8">
          {view === "signIn" ? (
            <SignInForm t={t} onSwitchToSignUp={() => setView("signUp")} />
          ) : (
            <SignUpForm t={t} onSwitchToSignIn={() => setView("signIn")} />
          )}
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}

function SignInForm({
  t,
  onSwitchToSignUp,
}: {
  t: ReturnType<typeof useTranslations>;
  onSwitchToSignUp: () => void;
}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sign In submitted");
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-none bg-white p-0 md:rounded-2xl dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        {t("signIn.title")}
      </h2>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
        {t("signIn.subtitle")}
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">{t("signIn.email")}</Label>
          <Input
            id="email"
            placeholder="email@example.com"
            type="email"
            autoComplete="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="password">{t("signIn.password")}</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            autoComplete="current-password"
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          {t("signIn.submit")} &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
          {t("signIn.noAccount")}{" "}
          <button
            type="button"
            onClick={onSwitchToSignUp}
            className="font-medium text-neutral-800 hover:text-black dark:text-neutral-300 dark:hover:text-white"
          >
            {t("signIn.signUpLink")}
          </button>
        </p>
      </form>
    </div>
  );
}

function SignUpForm({
  t,
  onSwitchToSignIn,
}: {
  t: ReturnType<typeof useTranslations>;
  onSwitchToSignIn: () => void;
}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sign Up submitted");
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-none bg-white p-0 md:rounded-2xl dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        {t("signUp.title")}
      </h2>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
        {t("signUp.subtitle")}
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <LabelInputContainer>
            <Label htmlFor="firstname">{t("signUp.name")}</Label>
            <Input
              id="firstname"
              placeholder={t("signUp.namePlaceholder")}
              type="text"
              autoComplete="name"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="signup-email">{t("signUp.email")}</Label>
          <Input
            id="signup-email"
            placeholder="email@example.com"
            type="email"
            autoComplete="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="signup-password">{t("signUp.password")}</Label>
          <Input
            id="signup-password"
            placeholder="••••••••"
            type="password"
            autoComplete="new-password"
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-emerald-600 to-emerald-800 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_#065f46_inset,0px_-1px_0px_0px_#065f46_inset]"
          type="submit"
        >
          {t("signUp.submit")} &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
          {t("signUp.hasAccount")}{" "}
          <button
            type="button"
            onClick={onSwitchToSignIn}
            className="font-medium text-neutral-800 hover:text-black dark:text-neutral-300 dark:hover:text-white"
          >
            {t("signUp.signInLink")}
          </button>
        </p>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
