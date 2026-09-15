export default function Projects() {
  return (
    <article id="project">
      <h2 className="title">Projekter</h2>
      <div className="projects">
        <div className="project1" data-aos="fade-left">
          <div><div className="img_container project_github"><a href="https://awu-exam-schmidtii123.onrender.com/" target="_blank" rel="noreferrer"><img className="projects_img" src="./Bookify-3-semester.png" alt="Forsiden af Bookify" /></a></div></div>
          <div className="title_text">
            <h3>Bookify - bogapp til mobil</h3>
            <p>Bookify er en mobiltilpasset bogapp, hvor brugere kan udforske og søge efter bøger, se bogdetaljer, oprette en profil, gemme favoritter og organisere bøger i egne samlinger. Projektet er bygget med React Router 7, TypeScript, Node.js og MongoDB.</p>
            <div className="github_code">
              <a className="code" href="https://awu-exam-schmidtii123.onrender.com/" target="_blank" rel="noreferrer"><img className="github_img" src="./demo_img.png" alt="Demo-ikon" />Live Demo</a>
              </div>
              </div>
        </div>

        <div className="project1" data-aos="fade-right">
          <div><div className="img_container project_github"><a href="critcard.netlify.app" target="_blank" rel="noreferrer"><img className="projects_img" src="./crit_card.png" alt="Forsiden af Crit Card" /></a></div></div>
          <div className="title_text"><h3>Crit Card - Kickstarter</h3><p>På mit afsluttende semester udviklede jeg en webapp som et koncept til en Crit Cards-platform for DnD-spillere. Brugere kan oprette og joine en lobby via ID eller link, mens en DM styrer spillet og trækker kort i realtid.</p><div className="github_code"><a className="github" href="https://github.com/Schmidtii123/kortspil-backend" target="_blank" rel="noreferrer"><img className="github_img" src="./github.png" alt="GitHub-logo" />Kode</a><a className="code" href="critcard.netlify.app" target="_blank" rel="noreferrer"><img className="github_img" src="./demo_img.png" alt="Demo-ikon" />Live Demo</a></div></div>
        </div>
        <div className="project2" data-aos="fade-left">
          <div className="title_text"><h3>Mark Ebert Webdoc</h3><p>En interaktiv webdokumentar om kunstneren Mark Ebert, der bruger parallax-effekter og visuel storytelling.</p><div className="github_code"><a className="github" href="https://github.com/Schmidtii123/Webdoc" target="_blank" rel="noreferrer"><img className="github_img" src="./github.png" alt="GitHub-logo" />Kode</a><a className="code" href="https://brozat.dk/Webdoc/" target="_blank" rel="noreferrer"><img className="github_img" src="./demo_img.png" alt="Demo-ikon" />Live Demo</a></div></div>
          <div><div className="img_container project_github"><a href="https://brozat.dk/Webdoc/" target="_blank" rel="noreferrer"><img className="projects_img" src="./mark_ebert.png" alt="Forsiden af Mark Ebert Webdoc" /></a></div></div>
        </div>
      </div>
    </article>
  );
}
