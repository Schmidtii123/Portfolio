import { ArrowUpRight } from "./Icons";
import { Link } from "react-router-dom";
import { technologies } from "../data/projects";

export function renderTechnologyList(stack) {
  return (
    <ul className="tech-list" aria-label="Teknologier">
      {stack.map((name) => (
        <li key={name}>
          <img
            src={technologies[name]}
            width="19"
            height="19"
            alt=""
            loading="lazy"
          />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}

export function renderProjectCard(project, index) {
  return (
    <article className="project-card" key={project.slug}>
      <Link
        className={`project-visual ${project.theme}`}
        to={`/projekter/${project.slug}`}
        aria-label={`Læs om ${project.title}`}
      >
        <div className="visual-topline">
          <span>{project.type}</span>
          <span aria-hidden="true">{String(index + 1).padStart(2, "0")} /</span>
        </div>
        <img
          src={project.image}
          alt={`Skærmbillede af ${project.title}`}
          loading="lazy"
          decoding="async"
        />
        <span className="project-open" aria-hidden="true">
          <ArrowUpRight />
        </span>
      </Link>
      <div className="project-heading">
        <h3>
          <Link to={`/projekter/${project.slug}`}>{project.title}</Link>
        </h3>
        {project.status && (
          <span className="project-status">
            <span />
            {project.status}
          </span>
        )}
      </div>
      <p>{project.description}</p>
      {project.stack.length > 0 && renderTechnologyList(project.stack)}
      <Link className="text-link" to={`/projekter/${project.slug}`}>
        Udforsk projektet <span aria-hidden="true"><ArrowUpRight /></span>
      </Link>
    </article>
  );
}
