import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Projects(){

    AOS.init();
    return(
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
                    <img className="projects_img" src="./mark_ebert.png" alt="Billede af forsiden til den gamle slagter keramik"/>
                    </a>

                        </div>
                </div>
                
            </div>
            <div className="project2" data-aos="fade-right">
                
                        <div className="img_container project_github">
                <a href="https://karlg.dk/keramik_2/" target="_blank">
                    <img className="projects_img" src="./den_gamle_slagter_keramik.png" alt="Billede af forsiden til den gamle slagter keramik"/>
                    </a>
                        </div>
                    <div className="title_text">

                    <h3>
                        Den gamle slagter keramik Eksamensprojekt
                    </h3>
                    <p> I 2. semester udviklede jeg en hjemmeside til 'Den Gamle Slagter Keramik', hvor besøgende kunne udforske forskellige keramikeres arbejde og booke keramikworkshops. Dette projekt kombinerede mine design- og udviklingsfærdigheder for at skabe en interaktiv platform til keramikentusiaster.</p>
                    
                     
                     <div className="github_code">

                    <a className="github" href="https://github.com/karl0905/keramik-2.semester-eksamen"target="_blank">
                        <img className="github_img" src="./github.png" alt="Billede af Github logoet" />
                        Kode
                    </a>
                    <a className="code" href="karlg.dk/keramik_2"target="_blank">
                    <img className="github_img" src="./demo_img.png" alt="Billede af en computer med en demo" />
                        Live Demo
                    </a>
                     </div>
                
                </div>
                    </div>
            </div>
        </article>
    )
}

