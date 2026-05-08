import { type ReactNode, type ElementType, type CSSProperties } from "react";
import { useReveal } from "@/hooks/use-reveal";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Animation variant matching `.reveal--<variant>` in styles.css */
  variant?: "rise" | "mask" | "blur" | "fade";
  /** Delay in ms */
  delay?: number;
  style?: CSSProperties;
};

export function Reveal({
  children,
  as: As = "div",
  className = "",
  variant = "rise",
  delay = 0,
  style,
}: RevealProps) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <As
      ref={ref}
      className={`reveal reveal--${variant} ${shown ? "is-revealed" : ""} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </As>
  );
}

/** Triggers `.stagger` children sequentially when in view. */
export function StaggerGrid({
  children,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <As ref={ref} className={`stagger ${shown ? "is-revealed" : ""} ${className}`}>
      {children}
    </As>
  );
}


/** Splits a string into word spans for kinetic headline reveals. */
export function KineticHeadline({
  text,
  className = "",
  highlight,
  highlightClassName = "",
  delayStep = 60,
  startDelay = 0,
}: {
  text: string;
  className?: string;
  /** Substring to wrap in a highlight span (case sensitive). */
  highlight?: string;
  highlightClassName?: string;
  delayStep?: number;
  startDelay?: number;
}) {
  const { ref, shown } = useReveal<HTMLSpanElement>();
  const parts = highlight && text.includes(highlight)
    ? text.split(new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`))
    : [text];

  let i = 0;
  return (
    <span ref={ref} className={`kinetic ${shown ? "is-revealed" : ""} ${className}`}>
      {parts.map((chunk, ci) => {
        const isHL = chunk === highlight;
        const words = chunk.split(/(\s+)/);
        return (
          <span key={ci} className={isHL ? highlightClassName : undefined}>
            {words.map((w, wi) => {
              if (/^\s+$/.test(w)) return <span key={wi}>{w}</span>;
              const idx = i++;
              return (
                <span key={wi} className="kinetic__word">
                  <span
                    className="kinetic__inner"
                    style={{ transitionDelay: `${startDelay + idx * delayStep}ms` }}
                  >
                    {w}
                  </span>
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
