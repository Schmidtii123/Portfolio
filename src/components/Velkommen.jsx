const skills = [
  ["./html_logo.png", "HTML5 logo"],
  ["./css3_logo.png", "CSS3 logo"],
  ["./javascript-logo.png", "JavaScript logo"],
  ["./react-logo.webp", "React logo"],
  ["/MySQL.svg", "MySQL logo"],
  ["/git-logo.png", "Git logo"],
  ["/vue.png", "Vue.js logo"],
  ["/mongodb.png", "MongoDB logo"],
  ["/php.png", "PHP logo"],
  ["/next-js.png", "Next.js logo"],
  ["/react-router.png", "React Router logo"],
  ["/typescript.png", "TypeScript logo"],
  ["/node-js.png", "Node.js logo"],
  ["/github.png", "GitHub logo"],
];

export default function Velkommen() {
  return (
    <div className="velkommen" id="velkommen">
      <div className="velkommen_text">
        <h1>Hej og velkommen til min portefølje!</h1>
        <p>
          Jeg er Emil Schmidt, men de fleste kalder mig bare Schmidt eller
          Schmidtii. Her kan du udforske mine projekter og de teknologier,
          jeg arbejder med.
        </p>
        <h2>Mine færdigheder</h2>
        <div className="logos">
          {skills.map(([src, alt]) => (
            <div className="logo-container" key={src}>
              <img src={src} alt={alt} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>

      <div className="img_container">
        <img
          className="velkommen_img"
          src="./emil_linkedin.png"
          alt="Billede af Emil Schmidt"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </div>
  );
}
