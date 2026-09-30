'use client'

import NextLink from "next/link";
import { Button } from "@heroui/react";
import { useAuth } from "@/hooks/useAuth";

export default function HeroCTA() {
  const { user, isLoggedIn, isPending } = useAuth();

  if (isPending) {
    return (
      <div className="mt-10 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm text-zinc-400">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-500/30 border-t-accent" />
        Checking your account...
      </div>
    );
  }

  if (isLoggedIn) {
    return (
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
        <NextLink href="/dashboard" className="w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            className="w-full rounded-xl bg-accent px-8 py-6 font-semibold text-black transition hover:scale-[1.02] hover:brightness-110 sm:w-auto"
          >
            Go to Dashboard
            <span className="ml-2 text-lg">→</span>
          </Button>
        </NextLink>

        <p className="text-sm text-zinc-400">
          Welcome back,{" "}
          <span className="font-semibold text-white">
            {user?.name || "there"}
          </span>
          !
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
      <NextLink href="/sign-up" className="w-full sm:w-auto">
        <Button
          variant="primary"
          size="lg"
          className="w-full rounded-xl bg-accent px-8 py-6 font-semibold text-black transition hover:scale-[1.02] hover:brightness-110 sm:w-auto"
        >
          Get Started Free
          <span className="ml-2 text-lg">→</span>
        </Button>
      </NextLink>

      <NextLink href="/sign-in" className="w-full sm:w-auto">
        <Button
          variant="primary"
          size="lg"
          className="w-full rounded-xl border border-white/15 bg-white/5 px-8 py-6 font-semibold text-white transition hover:border-accent/50 hover:bg-white/10 sm:w-auto"
        >
          Sign In
        </Button>
      </NextLink>
    </div>
  );
}