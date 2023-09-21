export default function Projects(){
    function reveal(){
        var reveals = document.getElementsByClassName("reveal");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elemntTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
          if (elemntTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      window.addEventListener("scroll", reveal);
      reveal();
    return (
      <section>
        
          <div className="project1 reveal">
          <div className="title_text">
                   <h3>
                        Mark Ebert Webdoc 
                    </h3>
                    <p>I andet semester af min uddannelse arbejdede vi på en spændende webdokumentar, hvor vi eksperimenterede med parallax-effekter for at skabe en dybdegående og engagerende brugeroplevelse. Vores webdokumentar fokuserede på kunstneren Mark Ebert og hans unikke kreative rejse. Det var en fantastisk mulighed for mig at kombinere mine færdigheder inden for multimediedesign og webudvikling for at formidle Mark Eberts historie på en interaktiv og visuelt imponerende måde.</p>
                </div>
                <div>

                        <div className="img_container project_github">
                    <a href="https://karlg.dk/keramik_2/">
                    <img className="projects_img" src="./den_gamle_slagter_keramik.png" alt="Billede af forsiden til den gamle slagter keramik"/>
                    </a>

                    <a href="">
                        <img className="github" src="./github.png" alt="Billede af Gibhub logoet" />
                    </a>
                        </div>
          </div>
          </div>
          <div className="project2 reveal">
            
            <div className="img_container project_github">
                <a href="https://karlg.dk/keramik_2/">
                    <img className="projects_img" src="./den_gamle_slagter_keramik.png" alt="Billede af forsiden til den gamle slagter keramik"/>
                    </a>

                    <a href="">
                        <img className="github" src="./github.png" alt="Billede af Github logoet" />
                    </a>
                        </div>
                    <div className="title_text">

                    <h3>
                        Den gamle slagter keramik Eksamensprojekt
                    </h3>
                    <p> I 2. semester arbejdede jeg på et spændende eksamensprojekt, hvor jeg udviklede en hjemmeside til 'Den Gamle Slagter Keramik'. På denne hjemmeside kunne besøgende udforske en række forskellige keramikere og deres arbejde. Derudover tilføjede jeg en funktion, der gjorde det muligt for folk at booke tid til keramikworkshops. Det var en fantastisk mulighed for mig at kombinere mine design- og udviklingsfærdigheder for at skabe en interaktiv platform, hvor folk kunne udforske og engagere sig i keramikkens verden.</p>
                </div>
          </div>
      </section>
    );
}
console.log("test");