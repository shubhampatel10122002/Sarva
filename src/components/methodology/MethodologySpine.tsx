"use client";

/**
 * Vertical spine rendered on large viewports only. Sits to the left of the
 * methodology content column and gives the page its "systems diagram" feel.
 * Decorative — hidden from screen readers.
 */
export default function MethodologySpine() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-8 top-[15vh] bottom-[10vh] hidden lg:block"
    >
      <div className="spine-line" />
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <span className="block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
      </div>
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
        <span className="block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
      </div>
    </div>
  );
}
