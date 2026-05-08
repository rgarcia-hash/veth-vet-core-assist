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
    return () => io.disconnect();
  }, [shown, options]);

  return { ref, shown } as const;
}
