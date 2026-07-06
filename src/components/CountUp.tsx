import { useEffect, useRef, useState } from "react";

/**
 * Animated number counter. Takes the final display string (e.g. "-29%", "40 000+",
 * "2×", "10 100", "3 дня"), keeps any prefix/suffix, and counts the numeric part
 * up from zero once the element scrolls into view. Restores the exact original
 * string at the end so formatting is always pixel-correct.
 */
function parse(s: string) {
  const first = s.search(/\d/);
  if (first === -1) return null;
  let last = first;
  for (let i = s.length - 1; i >= 0; i--) {
    if (/\d/.test(s[i])) {
      last = i;
      break;
    }
  }
  const numRaw = s.slice(first, last + 1);
  const cleaned = numRaw.replace(/\s| /g, "").replace(",", ".");
  const num = parseFloat(cleaned);
  if (Number.isNaN(num)) return null;
  const decimals = (cleaned.split(".")[1] || "").length;
  const grouped = /\d[\s ]\d/.test(numRaw) || Math.abs(num) >= 10000;
  return { prefix: s.slice(0, first), suffix: s.slice(last + 1), num, decimals, grouped };
}

function fmt(v: number, decimals: number, grouped: boolean) {
  if (grouped)
    return v.toLocaleString("ru-RU", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  return decimals ? v.toFixed(decimals) : String(Math.round(v));
}

export default function CountUp({
  value,
  duration = 1900,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = parse(value);
  const [text, setText] = useState(() =>
    parsed ? parsed.prefix + fmt(0, parsed.decimals, parsed.grouped) + parsed.suffix : value,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || !parsed) {
      setText(value);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(value);
      return;
    }
    let raf = 0;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started) return;
        started = true;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          if (t < 1) {
            setText(parsed.prefix + fmt(parsed.num * eased, parsed.decimals, parsed.grouped) + parsed.suffix);
            raf = requestAnimationFrame(tick);
          } else {
            setText(value); // exact original formatting at the end
          }
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
