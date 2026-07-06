import { useEffect, useState } from "react";

/**
 * Floating "back to top" button — frosted glass with an up arrow. Fades/slides in
 * once you've scrolled well down the page; smooth-scrolls to the top on click.
 */
export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 1.2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Наверх"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={[
        "glass fixed bottom-6 right-6 z-40 flex size-12 items-center justify-center rounded-full",
        "text-text transition-all duration-300 hover:text-lime lg:bottom-10 lg:right-10 lg:size-14",
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
      ].join(" ")}
    >
      <svg
        className="size-5 lg:size-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </button>
  );
}
