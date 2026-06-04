import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  id?: string;
  children: React.ReactNode;
};

/**
 * Lightweight scroll-in reveal. Adds `.is-in` when the element enters view.
 * Honours prefers-reduced-motion by showing immediately.
 */
export default function Reveal({ as = "div", className = "", delay = 0, id, children }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return React.createElement(
    as,
    {
      ref,
      id,
      className: `reveal ${inView ? "is-in" : ""} ${className}`.trim(),
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children
  );
}
