'use client'

import BetaBadge from "./BetaBadge";
import HeroCTA from "./HeroCTA";
import TrustBadges from "./TrustBadges";
import DashboardPreview from "./DashboardPreview";

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex min-h-170 max-w-7xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8 lg:min-h-185">
      <BetaBadge />

      <h1 className="max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
        Build faster.
        <br />
        <span className="bg-linear-to-r from-accent via-[#e2ff75] to-accent bg-clip-text text-transparent">
          Achieve more.
        </span>
      </h1>

      <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
        The all-in-one platform for modern teams. Organize your workflow,
        track progress, and turn your biggest ideas into reality.
      </p>

      <HeroCTA />
      <TrustBadges />
      <DashboardPreview />
    </section>
  );
}