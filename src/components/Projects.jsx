import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Projects() {

    AOS.init();
    return (
        <article id='project'>
            <h2 className="title">Projekter</h2>
            <div className="projects">
                <div className="project1" data-aos="fade-left">
                    <div className="title_text">
                        <h3>
                            Mark Ebert Webdoc
                        </h3>
                        <p>I andet semester arbejdede vi på en webdokumentar, hvor vi brugte parallax-effekter for at skabe en engagerende brugeroplevelse. Projektet fokuserede på kunstneren Mark Ebert og kombinerede mine færdigheder inden for multimediedesign og webudvikling for at præsentere hans kreative rejse interaktivt og visuelt imponerende.

                        </p>
                        <div className="github_code">

                            <a className="github" href="https://github.com/Schmidtii123/Webdoc" target="_blank">
                                <img className="github_img" src="./github.png" alt="Billede af Gibhub logoet" />Kode</a>
                            <a className="code" href="https://brozat.dk/Webdoc/" target="_blank" >
                                <img className="github_img" src="./demo_img.png" alt="Billede af en computer med en demo" />
                                Live Demo
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="img_container project_github">
                            <a href="https://brozat.dk/Webdoc/" target="_blank">
                                <img className="projects_img" src="./mark_ebert.png" alt="Billede af forsiden til den gamle slagter keramik" />
                            </a>

                        </div>
                    </div>

                </div>
                <div className="project2" data-aos="fade-right">

                    <div className="img_container project_github">
                        <a href="https://keramik-2-semester-eksamen.vercel.app/" target="_blank">
                            <img className="projects_img" src="./den_gamle_slagter_keramik.png" alt="Billede af forsiden til den gamle slagter keramik" />
                        </a>
                    </div>
                    <div className="title_text">

                        <h3>
                            Den gamle slagter keramik Eksamensprojekt
                        </h3>
                        <p> I 2. semester udviklede jeg en hjemmeside til 'Den Gamle Slagter Keramik', hvor besøgende kunne udforske forskellige keramikeres arbejde og booke keramikworkshops. Dette projekt kombinerede mine design- og udviklingsfærdigheder for at skabe en interaktiv platform til keramikentusiaster.</p>


                        <div className="github_code">

                            <a className="github" href="https://github.com/Schmidtii123/keramik-2.semester-eksamen" target="_blank">
                                <img className="github_img" src="./github.png" alt="Billede af Github logoet" />
                                Kode
                            </a>
                            <a className="code" href="https://keramik-2-semester-eksamen.vercel.app/" target="_blank">
                                <img className="github_img" src="./demo_img.png" alt="Billede af en computer med en demo" />
                                Live Demo
                            </a>
                        </div>

                    </div>
                </div>
                <div className="project1" data-aos="fade-left">
                    <div className="title_text">
                        <h3>
                            BookBazr - Webapp
                        </h3>
                        <p>I 3 semester fik vi til opgave at lave en webapp, her er en webapp, der kan hjælpe studerende med at sælge og købe brugte studiebøger, så de kan spare penge. Der er mulighed for at chatte, og med brug af ISBN nummer henter vi bogens information fra en google API, Den er kun lavet til mobil, og er derfor ikke responsiv.

                        </p>
                        <div className="github_code">

                            <a className="github" href="https://github.com/Schmidtii123/webapp" target="_blank">
                                <img className="github_img" src="./github.png" alt="Billede af Gibhub logoet" />Kode</a>
                            <a className="code" href="https://bookbazr.vercel.app/" target="_blank" >
                                <img className="github_img" src="./demo_img.png" alt="Billede af en computer med en demo" />
                                Live Demo
                            </a>
                        </div>
                    </div>

                    <div>
                        <div className="img_container project_github">
                            <a href="https://bookbazr.vercel.app/" target="_blank">
                                <img className="projects_img" src="./BookBazr.png" alt="Billede af forsiden til den gamle slagter keramik" />
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </article>
    )
}

