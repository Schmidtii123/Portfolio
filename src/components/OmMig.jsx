import { ArrowUpRight, ArrowDown } from "./Icons";
import { renderTechnologyList } from "./project-ui";
import { technologies } from "../data/projects";
import { useLanguage } from "../i18n";

// Product-specific labels can share a logo; show each technology only once here.
const skillNames = [...new Map(
  Object.entries(technologies).map(([name, logo]) => [logo, name]),
).values()];

export default function OmMig() {
  const { language, t } = useLanguage();
  const en = language === "en";
  return (
    <section
      className="about-section section-space"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="container about-grid">
        <div className="about-portrait">
          <span className="eyebrow">{en ? "More than a screenful of code" : "Mere end en skærmfuld kode"}</span>
          <img
            src="/smil_emil.png"
            alt={en ? "Emil Schmidt smiling with his hands behind his back" : "Emil Schmidt smiler med hænderne bag ryggen"}
            width="430"
            height="510"
            loading="lazy"
          />
          <span className="about-signature">
            Emil Schmidt <span aria-hidden="true"><ArrowUpRight /></span>
          </span>
        </div>
        <div className="about-copy">
          <span className="eyebrow">02 / {en ? "About me" : "Lidt om mig"}</span>
          <h2 id="about-title">
            {en ? "Curious by nature." : "Nysgerrig af natur."}
            <br />
            <em>{en ? "Developer by choice." : "Udvikler af lyst."}</em>
          </h2>
          <p>
            {en
              ? "Hi, I'm Emil — though most people call me Schmidt or Schmidtii. I enjoy understanding how things fit together and turning that insight into something useful for others."
              : "Hej, jeg er Emil — men de fleste kalder mig Schmidt eller Schmidtii. Jeg kan godt lide at forstå, hvordan ting hænger sammen, og at omsætte den forståelse til noget, andre kan bruge."}
          </p>
          <p>
            {en
              ? "I care about solutions that work well and feel good to use. I thrive on learning, going deep and being challenged — and I believe the best ideas become even better through collaboration and feedback."
              : "Jeg går op i løsninger, der både fungerer og føles gode at bruge. Jeg trives med at lære nyt, fordybe mig og blive udfordret. Og jeg tror på, at de bedste idéer bliver endnu bedre med sparring og feedback."}
          </p>
          <a className="text-link" href="/Mit_CV.pdf" download>
            {en ? "Download my CV" : "Hent mit CV"} <span aria-hidden="true"><ArrowDown /></span>
          </a>
          <div className="about-tools">
            <h3>{en ? "Technologies I work with" : "Teknologier, jeg arbejder med"}</h3>
            {renderTechnologyList(skillNames, t("technologies"))}
          </div>
        </div>
      </div>
    </section>
  );
}
