import { ArrowUpRight } from "./Icons";
import { Link } from "react-router-dom";
import { renderProjectCard } from "./project-ui";
import { useLanguage } from "../i18n";

export default function Projects() {
  const { language, projects, t } = useLanguage();
  const en = language === "en";
  const cardLabels = {
    readProject: en ? "Read about" : "Læs om",
    screenshot: en ? "Screenshot of" : "Skærmbillede af",
    explore: en ? "Explore the project" : "Udforsk projektet",
    technologies: t("technologies"),
  };
  return (
    <section
      className="work-section section-space"
      id="project"
      aria-labelledby="work-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / {en ? "Selected work" : "Udvalgt arbejde"}</span>
            <h2 id="work-title">
              {en ? "Ideas turned into" : "Idéer, der er blevet"}
              <br />
              {en ? <em>reality.</em> : <>til <em>virkelighed.</em></>}
            </h2>
          </div>
          <div className="section-heading-aside">
            <p>
              {en ? "From party games to your next great read." : "Fra selskabsspil til din næste gode bog."}
              <br />
              {en ? "A selection of things I've built." : "Et udvalg af det, jeg har bygget."}
            </p>
            <Link className="text-link" to="/projekter">
              {en ? "View all projects" : "Se alle projekter"} <span className="count">{String(projects.length).padStart(2, "0")}</span>
              <span aria-hidden="true"><ArrowUpRight /></span>
            </Link>
          </div>
        </div>
        <div className="project-grid">
          {projects.slice(0, 2).map((project, index) =>
            renderProjectCard(project, index, cardLabels),
          )}
        </div>
        <Link className="projects-archive-link" to="/projekter">
          <span>
            <span className="eyebrow">{en ? "The complete portfolio" : "Hele portfolioet"}</span>
            <strong>{en ? "View all my projects" : "Se alle mine projekter"}</strong>
          </span>
          <span className="projects-archive-meta">
            {String(projects.length).padStart(2, "0")} {en ? "projects" : "projekter"}
            <span className="projects-archive-icon" aria-hidden="true">
              <ArrowUpRight />
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
}
