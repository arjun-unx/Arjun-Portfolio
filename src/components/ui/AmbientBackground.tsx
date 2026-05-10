/**
 * AmbientBackground — fixed ambient layer rendered once at root.
 *
 * Why a separate component: keeping the ambient blobs OUT of section
 * components means they never repaint when sections enter/leave the
 * viewport. The compositor scrolls foreground content over a constant
 * GPU-rasterized layer.
 *
 * Choices:
 *  - Pure transform-based drift (no width/height/blur changes per frame)
 *  - `pointer-events:none` so it never intercepts hover/click
 *  - Masked grid that fades to nothing at the edges (focal center)
 *  - Theme-aware via CSS variables — no JS theme switching needed
 */
export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Layer 1 — ambient gradient blobs (drift on transform only) */}
      <div className="absolute inset-0">
        <div
          className="ambient-blob animate-drift"
          style={{
            top: "-12%",
            left: "-10%",
            width: "55%",
            height: "55%",
            background:
              "radial-gradient(circle at 30% 30%, var(--accent-glow) 0%, transparent 60%)",
            animationDelay: "0s",
          }}
        />
        <div
          className="ambient-blob animate-drift"
          style={{
            top: "20%",
            right: "-15%",
            width: "55%",
            height: "60%",
            background:
              "radial-gradient(circle at 70% 30%, color-mix(in srgb, var(--accent-2) 40%, transparent) 0%, transparent 60%)",
            animationDelay: "-6s",
          }}
        />
        <div
          className="ambient-blob animate-drift"
          style={{
            bottom: "-15%",
            left: "20%",
            width: "45%",
            height: "45%",
            background:
              "radial-gradient(circle at 50% 50%, color-mix(in srgb, var(--accent) 35%, transparent) 0%, transparent 60%)",
            animationDelay: "-12s",
            opacity: 0.35,
          }}
        />
      </div>

      {/* Layer 2 — masked editorial grid */}
      <div className="absolute inset-0 bg-grid mask-fade opacity-60" />

      {/* Layer 3 — soft top vignette to deepen the navbar transition */}
      <div
        className="absolute inset-x-0 top-0 h-[40vh]"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in srgb, var(--bg) 80%, transparent), transparent)",
        }}
      />
    </div>
  );
}
