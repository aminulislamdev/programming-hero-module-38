const badges = [
  {
    label: "Easy to use",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-accent">
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),
  },
  {
    label: "Built for modern teams",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-accent">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    ),
  },
  {
    label: "Secure experience",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-accent">
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function TrustBadges() {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-zinc-500 sm:text-sm">
      {badges.map((badge, index) => (
        <div key={badge.label} className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            {badge.icon}
            {badge.label}
          </span>
          {index < badges.length - 1 && (
            <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
          )}
        </div>
      ))}
    </div>
  );
}