import React from "react";
import { roles } from "../data/resume";
import Reveal from "./Reveal";

export default function Work() {
  return (
    <section className="section shell" id="work">
      <Reveal className="section-head">
        <span className="section-head__idx">01</span>
        <h2 className="section-head__title">
          Where I've <em>worked</em>
        </h2>
        <span className="section-head__rule" />
        <span className="section-head__meta">since 2020</span>
      </Reveal>

      <div className="work">
        {roles.map((role, i) => (
          <Reveal
            key={role.company + role.period}
            className={`role ${role.current ? "role--current" : ""}`}
            delay={i * 40}
          >
            <div className="role__aside">
              <div className="role__period">{role.period}</div>
              {role.current && (
                <div className="role__live">
                  <span className="dot" /> Current
                </div>
              )}
            </div>

            <div className="role__body">
              <span className="role__node" />
              <h3 className="role__title">{role.title}</h3>
              <div className="role__company">
                {role.company}
                {role.location && <span className="loc">{role.location}</span>}
              </div>
              <p className="role__summary">{role.summary}</p>
              <ul className="role__points">
                {role.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
              <div className="chips">
                {role.stack.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
