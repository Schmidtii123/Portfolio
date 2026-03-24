import parse from 'html-react-parser';

export default function OmMig({ post }) {
    return (
        <article >
            <h2 className='title'>{parse(post.title.rendered)}</h2>
            <div className='text_og_billede' data-aos="fade-down">
                <span className='content'>
                    <p>Hey, jeg hedder Emil, er 26 år og en nysgerrig og engageret person, der godt kan lide at fordybe mig i det, jeg arbejder med. Jeg trives bedst, når jeg kan lære nyt, blive udfordret og hele tiden udvikle mine færdigheder. <br /><br />
                    
                    Jeg går op i at lave løsninger, der ikke bare virker, men også giver en god oplevelse for brugeren. Samtidig sætter jeg stor pris på sparring og feedback, da jeg mener, det er en vigtig del af både at blive bedre og skabe de bedste løsninger. <br /><br />

                    Jeg er typen, der godt kan lide at forstå tingene i dybden, og jeg bruger gerne tid på at blive klogere på nye teknologier og værktøjer.</p>
                </span>
                <img className='img_container smil_emil_img' src="./smil_emil.png" alt="Mig(Emil Schmidt) der smiler med mine hænder bag ryggen" />
            </div>

            <div className='billede_og_text' data-aos="fade-up">

                <img className='img_container blodtud_img' src="./emil_blodtud.png" alt="Mig(Emil Schmidt) der har fået en blodtud som har en tampon i næsen" />

                <p className='content_2'>
                    Ud over min passion for at arbejde med softwareudvikling, deler jeg også en stor interesse for sport, især fodbold. Som du måske kan se på billedet, er jeg også en aktiv deltager og spiller fra tid til anden. Sport er ikke kun en hobby for mig, men også en måde at holde mig aktiv og engageret i fællesskabet.
                </p>
            </div>

        </article>
    )
}