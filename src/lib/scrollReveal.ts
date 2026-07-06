import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Wires scroll-driven reveals, scoped to `root`:
 *  - [data-reveal]  → block/heading fades + slides up when it enters the viewport.
 *  - [data-stagger] → its direct children appear one by one, left → right (DOM order).
 * Returns a cleanup that reverts everything (GSAP context).
 */
export function initScrollReveal(root: HTMLElement) {
  const ctx = gsap.context(() => {
    // gentle, even ease-out for a soft fluid settle (starts a touch early so the
    // motion reads as smooth rather than snapping in)
    const ease = "power2.out";

    gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
      gsap.from(el, {
        autoAlpha: 0,
        y: 60,
        duration: 2.2,
        ease,
        scrollTrigger: { trigger: el, start: "top 94%", once: true },
      });
    });

    gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
      const items = Array.from(group.children) as HTMLElement[];
      if (!items.length) return;
      // fixed per-item step (not a shared budget) so each tile clearly
      // waits for the previous one; dense grids (logo wall) override it
      // via data-stagger-each="0.07"
      const each = parseFloat(group.dataset.staggerEach ?? "") || 0.35;
      gsap.from(items, {
        autoAlpha: 0,
        y: 52,
        x: -30,
        duration: each < 0.2 ? 1.1 : 2.0,
        ease,
        stagger: { each, from: "start" },
        scrollTrigger: { trigger: group, start: "top 92%", once: true },
      });
    });

    // sequential reveal in strict DOM order (e.g. How steps 1 → 2 → 3 → 4),
    // even across multiple rows, from a single trigger.
    gsap.utils.toArray<HTMLElement>("[data-seq]").forEach((group) => {
      const items = group.querySelectorAll<HTMLElement>("[data-seq-item]");
      if (!items.length) return;
      gsap.from(items, {
        autoAlpha: 0,
        y: 50,
        duration: 1.8,
        ease,
        stagger: 0.45,
        scrollTrigger: { trigger: group, start: "top 90%", once: true },
      });
    });
  }, root);

  // make sure positions are correct once fonts/images settle
  ScrollTrigger.refresh();
  return () => ctx.revert();
}
