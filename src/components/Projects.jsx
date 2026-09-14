export default function Projects() {
  const projects = [
    {
      className: "project1",
      animation: "fade-right",
      title: "Bookify - bogapp til mobil",
      description: "Bookify er en mobiltilpasset bogapp, hvor brugere kan udforske og søge efter bøger, se bogdetaljer, oprette en profil, gemme favoritter og organisere bøger i egne samlinger. Projektet er bygget med React Router 7, TypeScript, Node.js og MongoDB.",
      image: "./Bookify-3-semester.png",
      imageAlt: "Forsiden af Bookify",
      codeUrl: "https://github.com/eaaa-dob-wu-e24a/awu-exam-Schmidtii123",
      demoUrl: "https://awu-exam-schmidtii123.onrender.com/",
    },
    {
      className: "project2",
      animation: "fade-left",
      title: "Crit Card - Kickstarter",
      description: "Et koncept til en Crit Cards-platform for DnD-spillere. Brugere kan oprette eller joine en lobby via ID eller link, mens en DM styrer spillet og trækker kort i realtid. Frontend er bygget med Vue og TypeScript, backend med Laravel og realtime-kommunikation med Pusher.",
      image: "./crit_card.png",
      imageAlt: "Forsiden af Crit Card",
      codeUrl: "https://github.com/Schmidtii123/kortspil-backend",
      demoUrl: "https://chipper-moonbeam-100da6.netlify.app/",
    },
    {
      className: "project1",
      animation: "fade-right",
      title: "BookByNight - bordbooking",
      description: "En løsning til bordbooking på klubber og barer i Aarhus med både bruger- og administrationsside. Projektet håndterer login, reservationer og administration af venue-data.",
      image: "./BookBynight.png",
      imageAlt: "Forsiden af BookByNight",
      codeUrl: "https://github.com/Schmidtii123/final-project-nemesis",
      demoUrl: "https://bookbynight-nams.vercel.app/",
    },
    {
      className: "project2",
      animation: "fade-left",
      title: "Den Gamle Slagter Keramik",
      description: "Et eksamensprojekt for Den Gamle Slagter Keramik, hvor besøgende kan udforske keramikeres arbejde og booke workshops. Projektet kombinerer interaktivt design med en enkel brugerrejse.",
      image: "./den_gamle_slagter_keramik.png",
      imageAlt: "Forsiden af Den Gamle Slagter Keramik",
      codeUrl: "https://github.com/Schmidtii123/keramik-2.semester-eksamen",
      demoUrl: "https://keramik-2-semester-eksamen.vercel.app/",
    },
    {
      className: "project1",
      animation: "fade-right",
      title: "Mark Ebert Webdoc",
      description: "En interaktiv webdokumentar om kunstneren Mark Ebert. Projektet bruger parallax-effekter og visuel storytelling til at præsentere hans kreative arbejde.",
      image: "./mark_ebert.png",
      imageAlt: "Forsiden af Mark Ebert Webdoc",
      codeUrl: "https://github.com/Schmidtii123/Webdoc",
      demoUrl: "https://brozat.dk/Webdoc/",
    },
  ];

  return (
    <article id="project">
      <h2 className="title">Projekter</h2>
      <div className="projects">
        {projects.map((project) => (
          <section
            className={project.className}
            data-aos={project.animation}
            key={project.title}
          >
            <div className="img_container project_github">
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                <img
                  className="projects_img"
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
            <div className="title_text">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.codeUrl} target="_blank" rel="noreferrer">
                <img src="./github.png" alt="GitHub-logo" loading="lazy" decoding="async" />
                Kode
              </a>
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                <img src="./demo_img.png" alt="Demo-ikon" loading="lazy" decoding="async" />
                Live demo
              </a>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
