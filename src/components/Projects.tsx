import React from "react";
import { projects, moreProjects, privateNote, personal } from "../data/resume";
import Reveal from "./Reveal";
import Icon from "./Icons";

function trackSpotlight(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--cx", `${((e.clientX - r.left) / r.width) * 100}%`);
  el.style.setProperty("--cy", `${((e.clientY - r.top) / r.height) * 100}%`);
}

function ProjectCard({ project, lead }: { project: (typeof projects)[number]; lead: boolean }) {
  const inner = (
    <>
      <div className="project__top">
        <div>
          <div className="project__name">{project.name}</div>
          <div className="project__tagline">{project.tagline}</div>
        </div>
        <div className="project__badges">
          {typeof project.stars === "number" && (
            <span className="project__badge">
              <Icon name="star" size={12} />
              {project.stars}
            </span>
          )}
          <span
            className={`project__badge ${
              project.status === "In development" ? "project__badge--dev" : ""
            }`}
          >
            {project.status}
          </span>
        </div>
      </div>

      <p className="project__desc">{project.description}</p>

      <div className="project__foot">
        <div className="chips">
          {project.stack.map((s) => (
            <span className="chip" key={s}>
              {s}
            </span>
          ))}
        </div>
        <span className={`project__arrow ${project.href ? "" : "project__arrow--static"}`}>
          <Icon name={project.href ? "arrow" : "cpu"} size={17} />
        </span>
      </div>
    </>
  );

  const className = `project ${lead ? "project--lead" : ""}`;

  return project.href ? (
    <a
      className={className}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={trackSpotlight}
    >
      {inner}
    </a>
  ) : (
    <div className={className} onMouseMove={trackSpotlight}>
      {inner}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section shell" id="projects">
      <Reveal className="section-head">
        <span className="section-head__idx">02</span>
        <h2 className="section-head__title">
          Stuff I've <em>built</em>
        </h2>
        <span className="section-head__rule" />
        <span className="section-head__meta">mostly open source</span>
      </Reveal>

      <Reveal className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} lead={i === 0} />
        ))}
      </Reveal>

      <Reveal className="workshop">
        <div className="workshop__head">
          <span className="kicker">More from the workshop</span>
          <a className="workshop__all" href={personal.github} target="_blank" rel="noopener noreferrer">
            All repos on GitHub
            <Icon name="arrow" size={14} />
          </a>
        </div>
        {moreProjects.map((m) => (
          <a className="wrow" key={m.name} href={m.href} target="_blank" rel="noopener noreferrer">
            <span className="wrow__name">{m.name}</span>
            <span className="wrow__blurb">{m.blurb}</span>
            <Icon name="arrow" size={15} className="wrow__arrow" />
          </a>
        ))}
        <div className="wrow wrow--note">
          <span className="wrow__name">Private work</span>
          <span className="wrow__blurb">{privateNote}</span>
        </div>
      </Reveal>
    </section>
  );
}
