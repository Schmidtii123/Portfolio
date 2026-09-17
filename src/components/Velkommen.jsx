import { Link } from "react-router-dom";
import { renderTechnologyList } from "./project-ui";

export default function Velkommen() {
  return (
    <section className="hero" id="velkommen" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="small-line" /> Webudvikler med blik for detaljen
          </div>
          <h1 id="hero-title">
            Fra gode idéer
            <br />
            til digitale
            <br />
            <em>oplevelser</em>
            <span className="accent-dot" aria-hidden="true">•</span>
          </h1>
          <p>
            Jeg hedder Emil Schmidt og arbejder med programmering. Jeg udvikler
            hjemmesider og webapps med fokus på godt design og brugervenlighed.
          </p>
          <div className="hero-actions">
            <Link className="button button-accent" to="/#project">
              Se mit arbejde <span aria-hidden="true">↗</span>
            </Link>
            <Link className="quiet-link" to="/#about">
              Lidt om mig <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
        <div className="hero-portrait">
          <span className="portrait-index">01 — Mennesket bag koden</span>
          <div className="portrait-stage">
            <div className="portrait-orbit" />
            <span className="portrait-star" aria-hidden="true">
              ✳
            </span>
            <img
              src="/emil_linkedin.png"
              alt="Emil Schmidt med armene over kors"
              width="480"
              height="590"
            />
            <div className="portrait-caption">
              <span>Hej, jeg er Emil.</span>
              <span>
                Også kendt som Schmidtii <span aria-hidden="true">↗</span>
              </span>
            </div>
          </div>
          <div className="portrait-footnote">
            <span>Design. Kode. Nysgerrighed.</span>
            <span aria-hidden="true">&lt;/&gt;</span>
          </div>
        </div>
      </div>
      <div className="container hero-bottom">
        <span className="eyebrow">En del af min værktøjskasse</span>
        {renderTechnologyList([
          "React",
          "TypeScript",
          "Node.js",
          "MongoDB",
          "Git",
        ])}
        <a className="scroll-note" href="#project">
          Scroll og udforsk <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
