export default function BackgroundEffects() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(204,255,0,0.08),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-96 h-80 w-80 rounded-full bg-accent/5 blur-[120px]" />
    </>
  );
}