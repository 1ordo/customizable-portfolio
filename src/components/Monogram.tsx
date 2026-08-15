import React from "react";
import { motion } from "framer-motion";

/**
 * Drawn MY ligature mark (not a typeface). One stroke forms the M; a second
 * drops a stem from the M's center valley, which doubles as the Y's tail.
 * Used as the brand mark in the nav, footer, and favicon.
 */
export default function Monogram({
  size = 26,
  draw = false,
  className,
}: {
  size?: number;
  draw?: boolean;
  className?: string;
}) {
  const strokes = ["M9 35 V13 L20 25 L31 13 V35", "M20 25 V37"];

  return (
    <svg
      viewBox="0 0 40 44"
      width={(size * 40) / 44}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Mohamed Yousry"
      role="img"
    >
      {strokes.map((d, i) =>
        draw ? (
          <motion.path
            key={i}
            d={d}
            className={i === 1 ? "monogram__tail" : undefined}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 0.9, delay: 0.15 + i * 0.3, ease: [0.65, 0, 0.35, 1] },
              opacity: { duration: 0.2, delay: 0.15 + i * 0.3 },
            }}
          />
        ) : (
          <path key={i} d={d} className={i === 1 ? "monogram__tail" : undefined} />
        )
      )}
    </svg>
  );
}
