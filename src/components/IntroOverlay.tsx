import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Monogram from "./Monogram";
import Wordmark from "./Wordmark";

/**
 * Opening sequence: the monogram draws itself on a warm field, the wordmark
 * rises, then the curtain lifts to reveal the page (whose hero animation is
 * held back via --intro-hold, set pre-paint in _document.tsx).
 *
 * Plays once per session. Click skips it. Reduced motion never sees it —
 * _document's inline script only adds html.intro when motion is allowed.
 */
const LIFT_AT_MS = 1750;

export default function IntroOverlay() {
  const [phase, setPhase] = useState<"idle" | "playing" | "lifting">("idle");

  const finish = useCallback(() => {
    try {
      sessionStorage.setItem("introSeen", "1");
    } catch {}
    document.documentElement.classList.remove("intro");
  }, []);

  useEffect(() => {
    if (!document.documentElement.classList.contains("intro")) return;
    setPhase("playing");
    const t = setTimeout(() => setPhase("lifting"), LIFT_AT_MS);
    return () => clearTimeout(t);
  }, []);

  const skip = () => {
    // Let the hero start immediately instead of waiting out the hold.
    document.documentElement.style.setProperty("--intro-hold", "0s");
    finish();
    setPhase("idle");
  };

  if (phase === "idle") return null;

  return (
    <AnimatePresence>
      {phase !== "idle" && (
        <motion.div
          className="intro-overlay"
          role="presentation"
          aria-hidden="true"
          onClick={skip}
          initial={{ y: 0 }}
          animate={phase === "lifting" ? { y: "-100%" } : { y: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => {
            if (phase === "lifting") {
              finish();
              setPhase("idle");
            }
          }}
        >
          <div className="intro-overlay__inner">
            <Monogram size={104} draw className="intro-overlay__mark" />
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <Wordmark className="intro-overlay__wordmark" />
            </motion.div>
            <motion.span
              className="intro-overlay__kicker"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.05 }}
            >
              Backend &amp; AI · Cairo
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
