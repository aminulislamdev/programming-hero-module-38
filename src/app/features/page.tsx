import NextLink from "next/link";
import { Button } from "@heroui/react";

const features = [
  {
    title: "Work Smarter",
    description: "Everything you need to manage your work in one simple platform.",
    icon: "⚡",
  },
  {
    title: "Track Progress",
    description: "Stay focused on your goals and keep track of every milestone.",
    icon: "📊",
  },
  {
    title: "Grow Together",
    description: "Collaborate, share ideas, and build something amazing together.",
    icon: "🚀",
  },
  {
    title: "Secure Auth",
    description: "Enterprise-grade authentication built-in from day one.",
    icon: "🔒",
  },
  {
    title: "Real-time Sync",
    description: "Changes reflect instantly across all your devices.",
    icon: "🔄",
  },
  {
    title: "Analytics",
    description: "Understand your team's performance with detailed insights.",
    icon: "📈",
  },
];

export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen bg-[#09090b] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,255,0,0.06),transparent_55%)]" />

      <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent">
            FEATURES
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-400">
            Powerful features designed to help your team move faster.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-white/10 bg-white/2 p-6 transition hover:-translate-y-1 hover:border-accent/30 hover:bg-white/4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 text-2xl">
                {f.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-400">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <NextLink href="/sign-up">
            <Button
              variant="primary"
              size="lg"
              className="rounded-xl bg-accent px-8 py-6 font-semibold text-black hover:brightness-110"
            >
              Get Started Free →
            </Button>
          </NextLink>
        </div>
      </section>
    </main>
  );
}