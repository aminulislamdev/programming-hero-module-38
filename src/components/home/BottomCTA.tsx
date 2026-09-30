'use client'

import NextLink from "next/link";
import { Button } from "@heroui/react";
import { useAuth } from "@/hooks/useAuth";

export default function BottomCTA() {
  const { isLoggedIn, isPending } = useAuth();

  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-accent/4 px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-[90px]" />

        <div className="relative">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to get started?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            Bring your ideas to life. Create your account and start building
            your next big thing.
          </p>

          {!isPending && !isLoggedIn && (
            <NextLink href="/sign-up" className="mt-8 inline-flex">
              <Button
                variant="primary"
                size="lg"
                className="rounded-xl bg-accent px-8 py-6 font-semibold text-black transition hover:scale-[1.02] hover:brightness-110"
              >
                Get Started Free →
              </Button>
            </NextLink>
          )}

          {!isPending && isLoggedIn && (
            <NextLink href="/dashboard" className="mt-8 inline-flex">
              <Button
                variant="primary"
                size="lg"
                className="rounded-xl bg-accent px-8 py-6 font-semibold text-black transition hover:scale-[1.02] hover:brightness-110"
              >
                Explore Dashboard →
              </Button>
            </NextLink>
          )}
        </div>
      </div>
    </section>
  );
}