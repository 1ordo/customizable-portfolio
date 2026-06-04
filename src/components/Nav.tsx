import React, { useEffect, useState } from "react";
import { nav, personal } from "../data/resume";
import { useTheme } from "../lib/theme";
import Icon from "./Icons";
import Wordmark from "./Wordmark";
import Monogram from "./Monogram";

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="shell nav__inner">
        <a className="nav__brand" href="#top" aria-label="Mohamed Yousry, back to top">
          <Monogram size={22} draw className="nav__mark" />
          <Wordmark className="nav__wordmark" />
        </a>

        <nav className="nav__links" aria-label="Sections">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav__link ${active === item.id ? "is-active" : ""}`}
            >
              <span>{item.index}</span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <a className="nav__resume" href={personal.resumeUrl} target="_blank" rel="noopener noreferrer">
            <Icon name="download" size={15} />
            <span>Résumé</span>
          </a>
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label="Toggle colour theme"
            title="Toggle theme"
          >
            <Icon name={mounted && theme === "light" ? "moon" : "sun"} size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
