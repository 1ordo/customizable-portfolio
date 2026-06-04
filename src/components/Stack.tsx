import React from "react";
import { skills, education } from "../data/resume";
import Reveal from "./Reveal";
import Icon from "./Icons";

export default function Stack() {
  return (
    <section className="section shell" id="stack">
      <Reveal className="section-head">
        <span className="section-head__idx">03</span>
        <h2 className="section-head__title">
          What I <em>actually use</em>
        </h2>
        <span className="section-head__rule" />
        <span className="section-head__meta">daily, mostly</span>
      </Reveal>

      <div className="stack">
        {skills.map((group, i) => (
          <Reveal className="skillrow" key={group.label} delay={i * 30}>
            <div className="skillrow__label">
              <span className="ico">
                <Icon name={group.icon} size={18} />
              </span>
              <span className="skillrow__label-text">{group.label}</span>
            </div>
            <div className="skillrow__items">
              {group.items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}

        {education.map((edu) => (
          <Reveal className="skillrow" key={edu.institution}>
            <div className="skillrow__label">
              <span className="ico">
                <Icon name="document" size={18} />
              </span>
              <span className="skillrow__label-text">Education</span>
            </div>
            <div>
              <div className="edu__inst">{edu.institution}</div>
              <div className="edu__detail">
                {edu.degree}, {edu.field} · {edu.period} · {edu.detail}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
