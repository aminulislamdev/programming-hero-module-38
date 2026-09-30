const sidebarItems = ["Overview", "My Projects", "Analytics", "Settings"];

const projects = [
  { name: "Website redesign", progress: "85%" },
  { name: "Mobile application", progress: "65%" },
  { name: "Marketing campaign", progress: "45%" },
];

export default function DashboardPreview() {
  return (
    <div className="relative mt-20 w-full max-w-4xl">
      <div className="absolute -inset-1 rounded-2xl bg-linear-to-b from-accent/20 to-transparent opacity-50 blur-xl" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111113] text-left shadow-2xl shadow-black/50">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
          </div>

          <span className="text-xs font-medium tracking-wide text-zinc-500">
            ACME WORKSPACE
          </span>

          <div className="h-2 w-10 rounded-full bg-white/10" />
        </div>

        {/* Content */}
        <div className="grid gap-5 p-5 sm:grid-cols-[1fr_1.5fr] sm:gap-8 sm:p-8">
          {/* Sidebar */}
          <div className="hidden flex-col gap-5 border-r border-white/5 pr-6 sm:flex">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-sm font-black text-black">
                A
              </div>
              <div>
                <p className="text-sm font-semibold text-white">ACME</p>
                <p className="text-xs text-zinc-500">Workspace</p>
              </div>
            </div>

            {sidebarItems.map((item, index) => (
              <div
                key={item}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-xs ${index === 0
                    ? "bg-accent/10 font-medium text-accent"
                    : "text-zinc-500"
                  }`}
              >
                <span className="h-2 w-2 rounded-sm bg-current opacity-70" />
                {item}
              </div>
            ))}
          </div>

          {/* Dashboard Body */}
          <div className="min-w-0">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs text-zinc-500">Your workspace</p>
                <h2 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                  Overview
                </h2>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-400">
                This week⌄
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/3 p-4">
                <p className="text-xs text-zinc-500">Total projects</p>
                <p className="mt-2 text-2xl font-bold text-white">12</p>
                <p className="mt-2 text-xs text-accent">+2 this month</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/3 p-4">
                <p className="text-xs text-zinc-500">Tasks completed</p>
                <p className="mt-2 text-2xl font-bold text-white">84%</p>
                <p className="mt-2 text-xs text-accent">+12% this week</p>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-4 rounded-xl border border-white/10 bg-white/3 p-4">
              <div className="mb-4 flex items-center justify-between gap-2">
                <p className="text-xs font-medium text-zinc-300">
                  Project progress
                </p>
                <span className="text-xs text-accent">On track</span>
              </div>

              <div className="space-y-4">
                {projects.map((project) => (
                  <div key={project.name}>
                    <div className="mb-2 flex items-center justify-between gap-2 text-xs">
                      <span className="truncate text-zinc-400">
                        {project.name}
                      </span>
                      <span className="text-zinc-300">{project.progress}</span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: project.progress }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}