import { ArrowUpRight, ArrowLeft } from "../components/Icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { renderProjectCard } from "../components/project-ui";
import { useLanguage } from "../i18n";

export default function ProjectPage() {
  const { language, projects, t } = useLanguage();
  const en = language === "en";
  const filters = [
    { id: "all", label: en ? "All" : "Alle" },
    { id: "webapps", label: "Webapps" },
    { id: "bots", label: en ? "Bots & automation" : "Bots & automatisering" },
    { id: "stories", label: en ? "Interactive stories" : "Interaktive fortællinger" },
  ];
  const [filter, setFilter] = useState("all");
  const visible = projects.filter(
    (project) =>
      filter === "all" ||
      (filter === "webapps" && project.category === "Webapp") ||
      (filter === "bots" && ["Bot & automatisering", "Bot & automation"].includes(project.category)) ||
      (filter === "stories" && ["Interaktiv fortælling", "Interactive story"].includes(project.category)),
  );
  const cardLabels = {
    readProject: en ? "Read about" : "Læs om",
    screenshot: en ? "Screenshot of" : "Skærmbillede af",
    explore: en ? "Explore the project" : "Udforsk projektet",
    technologies: t("technologies"),
  };
  return (
    <section className="container projects-page section-space">
      <Link className="back-link" to="/">
        <ArrowLeft /> {en ? "Home" : "Til forsiden"}
      </Link>
      <div className="section-heading">
        <div>
          <span className="eyebrow">
            Portfolio / {String(projects.length).padStart(2, "0")} {en ? "projects" : "projekter"}
          </span>
          <h1>
            {en ? "A look into" : "Et kig ind i"}<br />
            {en ? <>my <em>work.</em></> : <>mit <em>arbejde.</em></>}
          </h1>
        </div>
        <p>
          {en ? "Different ideas. Different technologies." : "Forskellige idéer. Forskellige teknologier."}
          <br />
          {en ? "The same drive to create things that work." : "Den samme lyst til at skabe noget, der virker."}
        </p>
      </div>
      <div className="project-filters" aria-label={en ? "Filter projects" : "Filtrer projekter"}>
        {filters.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
          >
            {label}
            {id === "all" && <span>{projects.length}</span>}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {en ? `Showing ${visible.length} projects` : `Viser ${visible.length} projekter`}
      </p>
      <div className="project-grid">
        {visible.map((project) =>
          renderProjectCard(project, projects.indexOf(project), cardLabels),
        )}
      </div>
      <div className="project-page-cta">
        <h2>{en ? "Shall we create something together?" : "Skal vi skabe noget sammen?"}</h2>
        <Link className="button button-dark" to="/#contact">
          {en ? "Let's talk" : "Lad os tage en snak"} <span aria-hidden="true"><ArrowUpRight /></span>
        </Link>
      </div>
    </section>
  );
}
