import { ArrowUpRight } from "./Icons";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { renderProjectCard } from "./project-ui";

export default function Projects() {
  return (
    <section
      className="work-section section-space"
      id="project"
      aria-labelledby="work-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / Udvalgt arbejde</span>
            <h2 id="work-title">
              Idéer, der er blevet
              <br />
              til <em>virkelighed.</em>
            </h2>
          </div>
          <div className="section-heading-aside">
            <p>
              Fra selskabsspil til din næste gode bog.
              <br />
              Et udvalg af det, jeg har bygget.
            </p>
            <Link className="text-link" to="/projekter">
              Se alle projekter <span className="count">04</span>
              <span aria-hidden="true"><ArrowUpRight /></span>
            </Link>
          </div>
        </div>
        <div className="project-grid">
          {projects.slice(0, 2).map(renderProjectCard)}
        </div>
      </div>
    </section>
  );
}
