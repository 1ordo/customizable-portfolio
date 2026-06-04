import React, { useEffect, useRef } from "react";

/**
 * Atmosphere + interaction hub (monochrome): faint dot-grid, slow drifting
 * ambient blobs, a cursor-following spotlight, and a scroll-progress line.
 * The spotlight is a GPU-translated blurred circle (cheap), not a repainting
 * gradient. All motion is disabled under prefers-reduced-motion.
 */
export default function Backdrop() {
  const raf = useRef(0);

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let x = window.innerWidth / 2;
    let y = window.innerHeight * 0.16;
    let tx = x;
    let ty = y;

    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      root.style.setProperty("--mxpx", `${x.toFixed(1)}px`);
      root.style.setProperty("--mypx", `${y.toFixed(1)}px`);
      if (Math.abs(tx - x) > 0.4 || Math.abs(ty - y) > 0.4) {
        raf.current = requestAnimationFrame(loop);
      } else {
        raf.current = 0;
      }
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf.current) raf.current = requestAnimationFrame(loop);
    };

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--sp", h > 0 ? (window.scrollY / h).toFixed(4) : "0");
    };

    if (!reduce) window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    root.style.setProperty("--mxpx", `${x}px`);
    root.style.setProperty("--mypx", `${y}px`);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="backdrop" aria-hidden="true">
        <div className="backdrop__grid" />
        <div className="backdrop__drift" />
        <div className="backdrop__spot" />
      </div>
    </>
  );
}
