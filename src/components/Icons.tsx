import React from "react";

/**
 * Hand-drawn, single-family line-icon set. One stroke weight, round joins,
 * everything inherits `currentColor`. No emoji, no icon library — these are
 * tuned to sit on the same optical baseline as the type.
 */

type IconProps = {
  name: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

const STROKE = 1.6;

const paths: Record<string, React.ReactNode> = {
  // ---- skill-group icons ----
  code: (
    <>
      <path d="M8 8 4 12l4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13 6-2 12" />
    </>
  ),
  server: (
    <>
      <rect x="3.5" y="4.5" width="17" height="6" rx="1.5" />
      <rect x="3.5" y="13.5" width="17" height="6" rx="1.5" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </>
  ),
  brain: (
    <>
      <path d="M12 5.5a2.5 2.5 0 0 0-5 .2 2.4 2.4 0 0 0-1.5 3.6A2.6 2.6 0 0 0 6 14a2.5 2.5 0 0 0 4.7 1.2" />
      <path d="M12 5.5a2.5 2.5 0 0 1 5 .2 2.4 2.4 0 0 1 1.5 3.6A2.6 2.6 0 0 1 18 14a2.5 2.5 0 0 1-4.7 1.2" />
      <path d="M12 5.5v13" />
    </>
  ),
  device: (
    <>
      <rect x="6.5" y="3.5" width="11" height="17" rx="2" />
      <path d="M11 17.5h2" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="2.8" />
      <path d="M5 6v12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V6" />
      <path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
    </>
  ),
  terminal: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="m7.5 9.5 2.5 2.5-2.5 2.5" />
      <path d="M12.5 15h4" />
    </>
  ),
  // ---- beyond-the-code icons ----
  cpu: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M10 10h4v4h-4z" />
      <path d="M9.5 4v2M14.5 4v2M9.5 18v2M14.5 18v2M4 9.5h2M4 14.5h2M18 9.5h2M18 14.5h2" />
    </>
  ),
  bug: (
    <>
      <path d="M9 8a3 3 0 0 1 6 0" />
      <rect x="8" y="8" width="8" height="9" rx="4" />
      <path d="M8 11H4M16 11h4M8 14H4.5M16 14h3.5M8.5 8.5 6.5 6.5M15.5 8.5l2-2M12 17v3" />
    </>
  ),
  wave: (
    <>
      <path d="M3 12c1.5 0 1.5-4 3-4s1.5 8 3 8 1.5-10 3-10 1.5 8 3 8 1.5-4 3-4" />
    </>
  ),
  // ---- contact / utility icons ----
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </>
  ),
  document: (
    <>
      <path d="M14 3.5H7a1.5 1.5 0 0 0-1.5 1.5v14A1.5 1.5 0 0 0 7 20.5h10a1.5 1.5 0 0 0 1.5-1.5V8z" />
      <path d="M14 3.5V8h4.5" />
      <path d="M8.5 12.5h7M8.5 15.5h7M8.5 9.5h2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  star: (
    <path
      d="M12 4.5l2.1 4.6 5 .5-3.7 3.4 1 4.9L12 16l-4.4 2.4 1-4.9L4.9 9.6l5-.5z"
      fill="currentColor"
      stroke="none"
    />
  ),
  arrow: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
    </>
  ),
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4 7 7 0 1 0 20 14.5Z" />,
  download: (
    <>
      <path d="M12 4v10" />
      <path d="m8 11 4 4 4-4" />
      <path d="M5 19.5h14" />
    </>
  ),
  copy: (
    <>
      <rect x="8.5" y="8.5" width="11" height="11" rx="2" />
      <path d="M5.5 15.5h-1A1.5 1.5 0 0 1 3 14V5a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 15 5v1" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
};

// GitHub keeps its real mark (filled) so it reads as a recognizable logo.
const githubMark = (
  <path
    fill="currentColor"
    stroke="none"
    d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
  />
);

const linkedinMark = (
  <path
    fill="currentColor"
    stroke="none"
    d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"
  />
);

export default function Icon({ name, size = 22, className, strokeWidth = STROKE }: IconProps) {
  if (name === "github" || name === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
        focusable="false"
      >
        {name === "github" ? githubMark : linkedinMark}
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] ?? null}
    </svg>
  );
}
