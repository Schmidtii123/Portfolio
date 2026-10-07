import { ArrowUpRight, ArrowLeft } from "../components/Icons";
import { Link, useParams } from "react-router-dom";
import { renderTechnologyList } from "../components/project-ui";
import { useLanguage } from "../i18n";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { language, projects, t } = useLanguage();
  const en = language === "en";
  const project = projects.find((item) => item.slug === slug);
  if (!project)
    return (
      <section className="container not-found">
        <span className="eyebrow">404 / {en ? "Project not found" : "Projektet findes ikke"}</span>
        <h1>{en ? "An idea for another day." : "En idé til en anden dag."}</h1>
        <Link className="button button-dark" to="/projekter">
          {en ? "View all projects" : "Se alle projekter"} <ArrowUpRight />
        </Link>
      </section>
    );
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <article className="container project-detail section-space">
      <Link className="back-link" to="/projekter">
        <ArrowLeft /> {en ? "All projects" : "Alle projekter"}
      </Link>
      <div className="detail-heading">
        <div>
          <span className="eyebrow">
            {project.category} / {project.type}
          </span>
          <h1>
            {project.title}
            <span className="accent-dot" aria-hidden="true">.</span>
          </h1>
        </div>
        {project.status && (
          <span className="project-status">
            <span />
            {project.status}
          </span>
        )}
      </div>
      <div className="detail-intro">
        <p>{project.description}</p>
        <div className="detail-actions">
          <a
            className="button button-dark"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            {project.demoLabel || (en ? "Open live demo" : "Åbn live demo")} <span aria-hidden="true"><ArrowUpRight /></span>
          </a>
          {project.github && (
            <a
              className="text-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              {en ? "View the code on GitHub" : "Se koden på GitHub"} <ArrowUpRight />
            </a>
          )}
        </div>
      </div>
      <div className={`detail-image ${project.theme}`}>
        <img src={project.image} alt={`${en ? "Screenshot of" : "Skærmbillede af"} ${project.title}`} />
      </div>
      <div className="detail-content">
        <aside>
          <span className="eyebrow">{en ? "About the project" : "Om projektet"}</span>
          {project.stack.length > 0 && (
            <>
              <h2>Techstack</h2>
              {project.stackGroups
                ? Object.entries(project.stackGroups).map(([group, stack]) => (
                    <div className="stack-group" key={group}>
                      <h3>{group}</h3>
                      {renderTechnologyList(stack, t("technologies"))}
                    </div>
                  ))
                : renderTechnologyList(project.stack, t("technologies"))}
            </>
          )}
        </aside>
        <div>
          <h2>{en ? "From idea to experience." : "Fra idé til oplevelse."}</h2>
          <p className="detail-lead">{project.intro}</p>
          <div className="feature-list">
            {project.features.map(([title, text], index) => (
              <section key={title}>
                <span className="feature-number">0{index + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Link className="next-project" to={`/projekter/${next.slug}`}>
        <div>
          <span className="eyebrow">{en ? "Next project" : "Næste projekt"}</span>
          <h2>{next.title}</h2>
        </div>
        <span aria-hidden="true"><ArrowUpRight /></span>
      </Link>
    </article>
  );
}
