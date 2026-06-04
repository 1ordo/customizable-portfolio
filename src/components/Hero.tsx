import React from "react";
import { personal } from "../data/resume";
import Icon from "./Icons";

export default function Hero() {
  return (
    <section className="hero shell" id="top">
      <div className="hero__grid">
        <div className="hero__main">
          <div className="hero__eyebrow">
            <span className="hero__mark" />
            Lead Engineer / Backend &amp; AI / Mansoura, EG
          </div>

          <h1 className="hero__name">
            Mohamed
            <br />
            <span className="last">Yousry</span>
          </h1>

          <p className="hero__intro">
            I build production AI systems, scalable backends, and{" "}
            <span className="hl">automation that actually ships</span>. I run models on hardware they
            weren't meant for, put most of what I build out in the{" "}
            <span className="hl">open source</span>, and care a little too much about systems that
            stay up. Right now I'm leading engineering at Drive-Nova.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={personal.resumeUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="download" size={17} />
              Résumé
            </a>
            <a className="btn btn--ghost" href={personal.github} target="_blank" rel="noopener noreferrer">
              <Icon name="github" size={17} />
              GitHub
            </a>
            <a className="btn btn--ghost" href={`mailto:${personal.email}`}>
              <Icon name="mail" size={17} />
              Email
            </a>
          </div>
        </div>

        <figure className="hero__photo">
          <div className="hero__frame">
            <img
              className="hero__portrait"
              src="/mohamed.jpg"
              alt="Mohamed Yousry"
              width={800}
              height={800}
            />
            <span className="tick tl" />
            <span className="tick tr" />
            <span className="tick bl" />
            <span className="tick br" />
          </div>
        </figure>
      </div>

      <div className="hero__now">
        <div className="hero__now-row">
          <span className="k">Now</span>
          <span className="v">{personal.currentNow}</span>
        </div>
        <div className="hero__now-row">
          <span className="k">Prev</span>
          <span className="v dim">Pillar (Fractional CTO), MyAly.AI, TotallyNot, and freelance since 2020</span>
        </div>
      </div>
    </section>
  );
}
