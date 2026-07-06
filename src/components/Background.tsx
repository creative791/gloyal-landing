import { useEffect, useRef } from "react";

/**
 * Page-level decorative layer (root-frame decor from Figma `1:12`), behind content (z-0).
 * - Hero glow = soft radial halo around the 3D figure (high/right).
 * - Hero 3D figure = transparent render of `37:5` (lime pill + blue knot). It follows the
 *   mouse vertically (and a touch horizontally) with a smooth eased lerp.
 * - Purple ambient glow blobs ≈ ellipses `130:18..26`, down the page, alternating sides.
 * Non-interactive (pointer-events-none).
 */
const blobs = [
  { top: "13.6%", side: "left", x: "-12%", size: 820 },
  { top: "20.6%", side: "right", x: "-6%", size: 880 },
  { top: "30.6%", side: "left", x: "4%", size: 780 },
  { top: "40.3%", side: "right", x: "-8%", size: 860 },
  { top: "50%", side: "left", x: "-10%", size: 820 },
  { top: "59%", side: "right", x: "-2%", size: 880 },
  { top: "68.8%", side: "left", x: "0%", size: 800 },
  { top: "77.8%", side: "right", x: "-6%", size: 860 },
  { top: "85.5%", side: "left", x: "6%", size: 720 },
];

export default function Background() {
  const figureRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      // normalized -1..1 from screen center; vertical drives the up/down follow
      target.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const tick = () => {
      cur.x += (target.x - cur.x) * 0.06;
      cur.y += (target.y - cur.y) * 0.06;
      // only the 3D figure follows the mouse — the glow stays put
      if (figureRef.current) {
        figureRef.current.style.transform = `translate3d(${cur.x * 26}px, ${cur.y * 42}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* hero glow — soft lime halo под фигуру (radial gradient → fades to transparent
          on every side, so it never shows a hard crop at any screen edge). Static. */}
      {/* now: the exported Figma glow image (42:18) — rich lime core + blue halo.
          mix-blend-screen drops its dark bg; a radial mask fades the crop edges. */}
      <img
        src="/assets/decor/hero-glow.png"
        alt=""
        aria-hidden
        draggable={false}
        className="pointer-events-none absolute select-none mix-blend-screen
                   top-[-40px] right-[-160px] w-[680px] max-w-none
                   lg:top-[-90px] lg:right-[-220px] lg:w-[1600px]"
        style={{
          maskImage: "radial-gradient(closest-side, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(closest-side, black 60%, transparent 100%)",
        }}
      />

      {/* hero 3D figure — slides in from the right (wrapper), then follows the mouse (img).
          Positions match the Figma macet: mobile node 379:22, desktop node 379:20. */}
      <div
        className="fig-in absolute
                   top-[150px] right-[-140px] w-[560px]
                   lg:top-[100px] lg:right-[calc(-16vw-100px)] lg:w-[clamp(1100px,92vw,1330px)]"
      >
        <img
          ref={figureRef}
          src="/assets/decor/hero-figure.png"
          alt=""
          className="w-full select-none will-change-transform"
        />
      </div>

      {/* purple ambient glows down the page (ellipses 130:18..26) */}
      {blobs.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-purple/12 blur-[150px]"
          style={{
            top: b.top,
            [b.side]: b.x,
            width: b.size,
            height: b.size,
          }}
        />
      ))}
    </div>
  );
}
