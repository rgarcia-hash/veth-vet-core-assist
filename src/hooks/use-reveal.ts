import { useEffect, useRef, useState } from "react";

/**
 * Editorial reveal hook. Adds `is-revealed` class once the element enters
 * the viewport. Pair with the `.reveal` utility in styles.css.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    // If element is already in (or above) the viewport on mount, reveal immediately.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh * 0.95 && rect.bottom > 0) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
          break;
        }
      }
    }, options);
    io.observe(el);

    // Safety net: if observer never fires (e.g. SSR/hydration race), reveal after 1.2s.
    const fallback = window.setTimeout(() => setShown(true), 1200);

    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, shown } as const;
}
