import { ArrowUpRight, ArrowDown, Asterisk } from "./Icons";
import { Link } from "react-router-dom";
import { renderTechnologyList } from "./project-ui";
import { useLanguage } from "../i18n";

export default function Velkommen() {
  const { language, t } = useLanguage();
  const en = language === "en";
  return (
    <section className="hero" id="velkommen" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="small-line" /> {en ? "Web developer with an eye for detail" : "Webudvikler med blik for detaljen"}
          </div>
          <h1 id="hero-title">
            {en ? "From great ideas" : "Fra gode idéer"}
            <br />
            {en ? "to digital" : "til digitale"}
            <br />
            <em>{en ? "experiences" : "oplevelser"}</em>
            <span className="accent-dot" aria-hidden="true">•</span>
          </h1>
          <p>
            {en
              ? "I'm Emil Schmidt, a developer creating websites and web apps with a focus on thoughtful design and usability."
              : "Jeg hedder Emil Schmidt og arbejder med programmering. Jeg udvikler hjemmesider og webapps med fokus på godt design og brugervenlighed."}
          </p>
          <div className="hero-actions">
            <Link className="button button-accent" to="/#project">
              {en ? "View my work" : "Se mit arbejde"} <span aria-hidden="true"><ArrowUpRight /></span>
            </Link>
            <Link className="quiet-link" to="/#about">
              {en ? "About me" : "Lidt om mig"} <span aria-hidden="true"><ArrowDown /></span>
            </Link>
          </div>
        </div>
        <div className="hero-portrait">
          <span className="portrait-index">01 — {en ? "The person behind the code" : "Mennesket bag koden"}</span>
          <div className="portrait-stage">
            <div className="portrait-orbit" />
            <span className="portrait-star" aria-hidden="true">
              <Asterisk />
            </span>
            <img
              src="/emil_linkedin.png"
              alt={en ? "Emil Schmidt with his arms crossed" : "Emil Schmidt med armene over kors"}
              width="480"
              height="590"
            />
            <div className="portrait-caption">
              <span>{en ? "Hi, I'm Emil." : "Hej, jeg er Emil."}</span>
              <span>
                {en ? "Also known as Schmidtii" : "Også kendt som Schmidtii"} <span aria-hidden="true"><ArrowUpRight /></span>
              </span>
            </div>
          </div>
          <div className="portrait-footnote">
            <span>{en ? "Design. Code. Curiosity." : "Design. Kode. Nysgerrighed."}</span>
            <span aria-hidden="true">&lt;/&gt;</span>
          </div>
        </div>
      </div>
      <div className="container hero-bottom">
        <span className="eyebrow">{en ? "Part of my toolkit" : "En del af min værktøjskasse"}</span>
        {renderTechnologyList([
          "React",
          "TypeScript",
          "Node.js",
          "MongoDB",
          "Git",
        ], t("technologies"))}
        <a className="scroll-note" href="#project">
          {en ? "Scroll and explore" : "Scroll og udforsk"} <span aria-hidden="true"><ArrowDown /></span>
        </a>
      </div>
    </section>
  );
}
