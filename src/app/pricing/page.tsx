import NextLink from "next/link";
import { Button } from "@heroui/react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: ["Up to 3 projects", "1 team member", "Basic analytics", "Community support"],
    highlighted: false,
    cta: "Get Started",
    href: "/sign-up",
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Best for growing teams",
    features: [
      "Unlimited projects",
      "Up to 10 members",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
    ],
    highlighted: true,
    cta: "Start Free Trial",
    href: "/sign-up",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Unlimited members",
      "SSO & SAML",
      "Dedicated support",
      "SLA guarantee",
    ],
    highlighted: false,
    cta: "Contact Sales",
    href: "/contact",
  },
];

export default function PricingPage() {
  return (
    <main className="relative min-h-screen bg-[#09090b] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,255,0,0.06),transparent_55%)]" />

      <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent">
            PRICING
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, transparent pricing.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-zinc-400">
            Choose the plan that fits your team. No hidden fees.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition ${plan.highlighted
                  ? "border-accent/40 bg-accent/5 lg:scale-105"
                  : "border-white/10 bg-white/2 hover:border-white/20"
                }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-black">
                  MOST POPULAR
                </span>
              )}

              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-1 text-sm text-zinc-400">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.period && <span className="text-sm text-zinc-500">{plan.period}</span>}
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-zinc-400">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="mt-0.5 shrink-0 text-accent"
                    >
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <NextLink href={plan.href} className="mt-8 block">
                <Button
                  variant="primary"
                  size="lg"
                  className={`w-full rounded-xl py-6 font-semibold ${plan.highlighted
                      ? "bg-accent text-black hover:brightness-110"
                      : "border border-white/15 bg-white/5 text-white hover:border-accent/50"
                    }`}
                >
                  {plan.cta}
                </Button>
              </NextLink>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}