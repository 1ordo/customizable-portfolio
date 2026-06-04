import React from "react";

/**
 * Full-name logotype. "Mohamed" roman, "Yousry" italic, set in the display
 * serif. This is the brand mark (nav + footer), replacing the old monogram.
 */
export default function Wordmark({
  className = "",
  as: As = "span",
}: {
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  return React.createElement(
    As,
    { className: `wordmark ${className}`.trim(), "aria-label": "Mohamed Yousry" },
    <>
      Mohamed <em>Yousry</em>
    </>
  );
}
