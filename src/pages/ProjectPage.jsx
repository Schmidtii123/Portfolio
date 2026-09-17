import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { renderProjectCard } from "../components/project-ui";

const filters = ["Alle", "Webapps", "Interaktive fortællinger"];

export default function ProjectPage() {
  const [filter, setFilter] = useState("Alle");
  const visible = projects.filter(
    (project) =>
      filter === "Alle" ||
      project.category ===
        (filter === "Webapps" ? "Webapp" : "Interaktiv fortælling"),
  );
  return (
    <section className="container projects-page section-space">
      <Link className="back-link" to="/">
        ← Til forsiden
      </Link>
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            Portfolio / {String(projects.length).padStart(2, "0")} projekter
          </span>
          <h1>
            Et kig ind i<br />
            mit <em>arbejde.</em>
          </h1>
        </div>
        <p>
          Forskellige idéer. Forskellige teknologier.
          <br />
          Den samme lyst til at skabe noget, der virker.
        </p>
      </div>
      <div className="project-filters" aria-label="Filtrer projekter">
        {filters.map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={filter === name}
            onClick={() => setFilter(name)}
          >
            {name}
            {name === "Alle" && <span>{projects.length}</span>}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        Viser {visible.length} projekter
      </p>
      <div className="project-grid">
        {visible.map((project) =>
          renderProjectCard(project, projects.indexOf(project)),
        )}
      </div>
      <div className="project-page-cta">
        <h2>Skal vi skabe noget sammen?</h2>
        <Link className="button button-dark" to="/#contact">
          Lad os tage en snak <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
