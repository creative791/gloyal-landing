/**
 * Page-level decorative layer (root-frame decor from Figma `1:12`).
 * - Soft green/blue hero glow = exported image `42:18`. Its dark bg is baked in,
 *   so we use mix-blend-screen to drop the black and keep only the light.
 * - Purple glow blobs down the page ≈ ellipses `130:18..26`, reproduced as CSS.
 * Sits behind all content (z-0), non-interactive.
 */
export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* hero green/blue glow (top-right) */}
      <img
        src="/assets/decor/mascot-green.png"
        alt=""
        className="absolute mix-blend-screen select-none
                   -top-40 -right-32 w-[520px]
                   lg:-top-[360px] lg:left-[555px] lg:w-[1615px] lg:right-auto"
      />

      {/* purple ambient glows (approx of blurred bg ellipses) */}
      <div className="absolute left-[-10%] top-[14%] h-[680px] w-[680px] rounded-full bg-purple/20 blur-[160px]" />
      <div className="absolute right-[-8%] top-[34%] h-[720px] w-[720px] rounded-full bg-purple/15 blur-[170px]" />
      <div className="absolute left-[6%] top-[58%] h-[640px] w-[640px] rounded-full bg-purple/15 blur-[160px]" />
      <div className="absolute right-[-6%] top-[78%] h-[700px] w-[700px] rounded-full bg-purple/12 blur-[170px]" />
    </div>
  );
}
