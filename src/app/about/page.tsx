import NextLink from "next/link";
import { Button } from "@heroui/react";

const values = [
  {
    title: "Simplicity First",
    description:
      "We believe great software should feel effortless. Every feature we build starts with one question — does this make life easier?",
    icon: "✨",
  },
  {
    title: "Built for Teams",
    description:
      "Collaboration is at the heart of everything we do. Our tools are designed to bring people together, not slow them down.",
    icon: "🤝",
  },
  {
    title: "Crafted with Care",
    description:
      "We sweat the details. From pixel-perfect interfaces to sub-second performance, quality is non-negotiable.",
    icon: "🎨",
  },
];

const stats = [
  { value: "10K+", label: "Active teams" },
  { value: "99.9%", label: "Uptime" },
  { value: "150+", label: "Countries" },
  { value: "4.9/5", label: "User rating" },
];

const team = [
  { name: "Alex Morgan", role: "Founder & CEO", initials: "AM" },
  { name: "Sarah Chen", role: "Head of Product", initials: "SC" },
  { name: "David Park", role: "Lead Engineer", initials: "DP" },
  { name: "Maya Patel", role: "Head of Design", initials: "MP" },
];

const timeline = [
  {
    year: "2022",
    title: "The Beginning",
    description:
      "Started as a side project to solve our own team's workflow problems.",
  },
  {
    year: "2023",
    title: "First 1,000 Users",
    description:
      "Launched publicly and crossed our first thousand teams within six months.",
  },
  {
    year: "2024",
    title: "Going Global",
    description:
      "Expanded to 150+ countries and shipped multi-language support.",
  },
  {
    year: "2025",
    title: "The Next Chapter",
    description:
      "Introducing AI-powered workflows to help teams move even faster.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#09090b] text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,255,0,0.06),transparent_55%)]" />

      {/* ===== HERO ===== */}
      <section className="relative mx-auto max-w-7xl px-5 py-24 text-center sm:px-8">
        <span className="text-xs font-semibold tracking-[0.2em] text-accent">
          ABOUT US
        </span>

        <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          We&apos;re building the future of{" "}
          <span className="bg-linear-to-r from-accent via-[#e2ff75] to-accent bg-clip-text text-transparent">
            teamwork.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
          ACME started with a simple idea: great tools should feel invisible.
          Today, thousands of teams around the world use our platform to ship
          faster, collaborate better, and enjoy their work more.
        </p>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/2 p-6 text-center transition hover:border-accent/30"
            >
              <p className="text-3xl font-bold text-accent sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-zinc-400 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== OUR VALUES ===== */}
      <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent">
            OUR VALUES
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            What we stand for.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="group rounded-2xl border border-white/10 bg-white/2 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/4 sm:p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 text-2xl">
                {v.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent">
            OUR JOURNEY
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            How we got here.
          </h2>
        </div>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-linear-to-b from-accent/40 via-white/10 to-transparent sm:left-1/2" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-[#09090b] sm:left-1/2" />

                {/* Content */}
                <div
                  className={`ml-12 flex-1 rounded-2xl border border-white/10 bg-white/2 p-5 sm:ml-0 sm:w-1/2 sm:p-6 ${i % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
                    }`}
                >
                  <span className="text-xs font-bold tracking-wider text-accent">
                    {item.year}
                  </span>
                  <h3 className="mt-2 text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent">
            THE TEAM
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Meet the people behind it.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-white/10 bg-white/2 p-6 text-center transition hover:border-accent/30"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-lg font-bold text-accent">
                {member.initials}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-xs text-zinc-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-accent/4 px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-[90px]" />

          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Join us on our journey.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              Be part of something bigger. Start building with ACME today.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <NextLink href="/sign-up">
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-xl bg-accent px-8 py-6 font-semibold text-black transition hover:scale-[1.02] hover:brightness-110"
                >
                  Get Started Free →
                </Button>
              </NextLink>
              <NextLink href="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="rounded-xl border border-white/15 bg-white/5 px-8 py-6 font-semibold text-white transition hover:border-accent/50 hover:bg-white/10"
                >
                  Contact Us
                </Button>
              </NextLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}