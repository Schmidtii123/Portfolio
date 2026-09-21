import { ArrowUpRight, ArrowDown } from "./Icons";
import { renderTechnologyList } from "./project-ui";
import { technologies } from "../data/projects";

// Product-specific labels can share a logo; show each technology only once here.
const skillNames = [...new Map(
  Object.entries(technologies).map(([name, logo]) => [logo, name]),
).values()];

export default function OmMig() {
  return (
    <section
      className="about-section section-space"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="container about-grid">
        <div className="about-portrait">
          <span className="eyebrow">Mere end en skærmfuld kode</span>
          <img
            src="/smil_emil.png"
            alt="Emil Schmidt smiler med hænderne bag ryggen"
            width="430"
            height="510"
            loading="lazy"
          />
          <span className="about-signature">
            Emil Schmidt <span aria-hidden="true"><ArrowUpRight /></span>
          </span>
        </div>
        <div className="about-copy">
          <span className="eyebrow">02 / Lidt om mig</span>
          <h2 id="about-title">
            Nysgerrig af natur.
            <br />
            <em>Udvikler af lyst.</em>
          </h2>
          <p>
            Hej, jeg er Emil — men de fleste kalder mig Schmidt eller Schmidtii.
            Jeg kan godt lide at forstå, hvordan ting hænger sammen, og at
            omsætte den forståelse til noget, andre kan bruge.
          </p>
          <p>
            Jeg går op i løsninger, der både fungerer og føles gode at bruge.
            Jeg trives med at lære nyt, fordybe mig og blive udfordret. Og jeg
            tror på, at de bedste idéer bliver endnu bedre med sparring og
            feedback.
          </p>
          <a className="text-link" href="/Mit_CV.pdf" download>
            Hent mit CV <span aria-hidden="true"><ArrowDown /></span>
          </a>
          <div className="about-tools">
            <h3>Teknologier, jeg arbejder med</h3>
            {renderTechnologyList(skillNames)}
          </div>
        </div>
      </div>
    </section>
  );
}
