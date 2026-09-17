import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { renderTechnologyList } from "../components/project-ui";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  if (!project)
    return (
      <section className="container not-found">
        <span className="eyebrow">404 / Projektet findes ikke</span>
        <h1>En idé til en anden dag.</h1>
        <Link className="button button-dark" to="/projekter">
          Se alle projekter ↗
        </Link>
      </section>
    );
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <article className="container project-detail section-space">
      <Link className="back-link" to="/projekter">
        ← Alle projekter
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
            Åbn live demo <span aria-hidden="true">↗</span>
          </a>
          {project.github && (
            <a
              className="text-link"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              Se koden på GitHub ↗
            </a>
          )}
        </div>
      </div>
      <div className={`detail-image ${project.theme}`}>
        <img src={project.image} alt={`Skærmbillede af ${project.title}`} />
      </div>
      <div className="detail-content">
        <aside>
          <span className="eyebrow">Om projektet</span>
          {project.stack.length > 0 && (
            <>
              <h2>Værktøjerne bag</h2>
              {renderTechnologyList(project.stack)}
            </>
          )}
        </aside>
        <div>
          <h2>Fra idé til oplevelse.</h2>
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
          <span className="eyebrow">Næste projekt</span>
          <h2>{next.title}</h2>
        </div>
        <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
