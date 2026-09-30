export default function BetaBadge() {
  return (
    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>

      <span className="text-xs font-medium tracking-wider text-accent">
        NOW IN BETA
      </span>

      <span className="text-xs text-zinc-500">·</span>

      <span className="text-xs text-zinc-400">
        Explore what&apos;s possible
      </span>
    </div>
  );
}