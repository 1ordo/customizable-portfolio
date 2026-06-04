import React from "react";
import { beyond } from "../data/resume";
import Reveal from "./Reveal";
import Icon from "./Icons";

export default function Beyond() {
  return (
    <section className="section shell" id="beyond">
      <Reveal className="section-head">
        <span className="section-head__idx">04</span>
        <h2 className="section-head__title">
          Off the <em>clock</em>
        </h2>
        <span className="section-head__rule" />
        <span className="section-head__meta">yes, the garlic thing is real</span>
      </Reveal>

      <div className="beyond-grid">
        {beyond.map((item, i) => (
          <Reveal className="beyond-card" key={i} delay={i * 50}>
            <span className="beyond-card__ico">
              <Icon name={item.icon} size={20} />
            </span>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
