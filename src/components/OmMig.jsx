import parse from 'html-react-parser';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function OmMig({ post }) {
    AOS.init();
    return (
        <article >
            <h2 className='title'>{parse(post.title.rendered)}</h2>
            <div className='text_og_billede' data-aos="fade-down">
                <span className='content'>
                    <p>Hey, jeg hedder som sagt Emil og jeg er 25 år gammel.</p> <p>Jeg har færdiggjort min uddannelse i multimediedesign på Erhvervsakademiet Aarhus og er nu i gang med at videreuddanne mig inden for webudvikling. Jeg er i øjeblikket på mit andet semester og fordyber mig yderligere i at skabe brugervenlige og funktionelle brugergrænseflader, der giver den bedst mulige oplevelse for brugerne. Jeg brænder for at udvikle intuitive og brugervenlige løsninger og stræber altid efter at lære noget nyt og forbedre mine færdigheder. Lige nu er jeg i gang med at søge praktik, hvor jeg håber at kunne omsætte min viden til praksis og få endnu mere erfaring inden for webudvikling.</p>
                </span>
                <img className='img_container smil_emil_img' src="./smil_emil.png" alt="Mig(Emil Schmidt) der smiler med mine hænder bag ryggen" />
            </div>

            <div className='billede_og_text' data-aos="fade-up">

                <img className='img_container blodtud_img' src="./emil_blodtud.png" alt="Mig(Emil Schmidt) der har fået en blodtud som har en tampon i næsen" />

                <p className='content_2'>
                    Ud over min passion for at studere Webudvikling, deler jeg også en stor interesse for sport, især fodbold. Som du måske kan se på billedet, er jeg også en aktiv deltager og spiller fra tid til anden. Sport er ikke kun en hobby for mig, men også en måde at holde mig aktiv og engageret i fællesskabet.
                </p>
            </div>

        </article>
    )
}