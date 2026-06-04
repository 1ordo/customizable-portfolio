import React, { useState } from "react";
import { contactLinks, personal } from "../data/resume";
import Reveal from "./Reveal";
import Icon from "./Icons";
import Wordmark from "./Wordmark";
import Monogram from "./Monogram";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  return (
    <>
      <section className="section shell" id="contact">
        <Reveal className="section-head">
          <span className="section-head__idx">05</span>
          <h2 className="section-head__title">
            Say <em>hi</em>
          </h2>
          <span className="section-head__rule" />
          <span className="section-head__meta">fastest: email</span>
        </Reveal>

        <Reveal>
          <p className="contact__lead">
            Let's build something that <em>stays up.</em>
          </p>
          <p className="contact__sub">
            The fastest way to reach me is email. I read everything and reply to most of it. Got a
            hard backend or AI problem? Even better.
          </p>
        </Reveal>

        <Reveal className="contact__grid">
          {contactLinks.map((c) =>
            c.icon === "mail" ? (
              <button className="contact-card" key={c.label} onClick={copyEmail} type="button">
                <span className="contact-card__ico">
                  <Icon name={c.icon} size={20} />
                </span>
                <span>
                  <span className="contact-card__label">{c.label}</span>
                  <span className="contact-card__value">{c.value}</span>
                </span>
                <span className={`contact-card__action ${copied ? "copy-flash" : ""}`}>
                  <Icon name={copied ? "check" : "copy"} size={17} />
                </span>
              </button>
            ) : (
              <a
                className="contact-card"
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                <span className="contact-card__ico">
                  <Icon name={c.icon} size={20} />
                </span>
                <span>
                  <span className="contact-card__label">{c.label}</span>
                  <span className="contact-card__value">{c.value}</span>
                </span>
                <span className="contact-card__action">
                  <Icon name="arrow" size={17} />
                </span>
              </a>
            )
          )}
        </Reveal>
      </section>

      <footer className="footer">
        <div className="shell footer__inner">
          <div className="footer__brand">
            <div className="footer__lockup">
              <Monogram size={30} className="footer__mark" />
              <Wordmark />
            </div>
            <span className="footer__note">Built this one myself. No template. Mansoura, 2026.</span>
          </div>
          <div className="footer__links">
            <a href={personal.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${personal.email}`}>Email</a>
            <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer">
              Résumé
            </a>
            <a className="footer__top" href="#top">
              Top
              <Icon name="arrow" size={14} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
