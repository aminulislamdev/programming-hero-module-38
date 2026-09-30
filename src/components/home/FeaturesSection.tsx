const features = [
  {
    number: "01",
    title: "Work Smarter",
    description:
      "Everything you need to manage your work in one simple platform.",
  },
  {
    number: "02",
    title: "Track Progress",
    description:
      "Stay focused on your goals and keep track of every milestone.",
  },
  {
    number: "03",
    title: "Grow Together",
    description:
      "Collaborate, share ideas, and build something amazing together.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <div className="mb-12 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] text-accent">
          WHY ACME
        </span>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Everything in one place.
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
          A simpler way to organize your work, stay productive, and move
          forward with confidence.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.number}
            className="group rounded-2xl border border-white/10 bg-white/2 p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/4 sm:p-8"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 text-sm font-bold text-accent transition group-hover:bg-accent group-hover:text-black">
              {feature.number}
            </span>

            <h3 className="mt-6 text-lg font-semibold text-white">
              {feature.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-zinc-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}