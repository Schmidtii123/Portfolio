export const technologies = {
  HTML: "/html_logo.png",
  CSS: "/css3_logo.png",
  JavaScript: "/javascript-logo.png",
  React: "/react-logo.webp",
  TypeScript: "/typescript.png",
  "React Router": "/react-router.png",
  "Node.js": "/node-js.png",
  MongoDB: "/mongodb.png",
  MySQL: "/MySQL.svg",
  Git: "/git-logo.png",
  "Vue.js": "/vue.png",
  PHP: "/php.png",
  "Next.js": "/next-js.png",
  GitHub: "/github.png",
  Laravel: "/stacks/laravel.svg",
  Pinia: "/stacks/pinia.svg",
  Pusher: "/stacks/pusher.svg",
  Vite: "/vite.svg",
  "Vercel Functions": "/stacks/vercel.svg",
  "Upstash Redis": "/stacks/upstash.svg",
  "Pusher Channels": "/stacks/pusher.svg",
};

const imposterStack = {
  Frontend: ["React", "TypeScript", "Vite", "CSS"],
  Backend: ["TypeScript", "Vercel Functions", "Upstash Redis", "Pusher Channels"],
};

export const projects = [
  {
    slug: "hvem-er-imposter",
    title: "Hvem er imposter?",
    category: "Webapp",
    type: "Selskabsspil",
    image: "/imposter.png",
    theme: "imposter",
    status: "Under udvikling",
    description:
      "Et selskabsspil med bluff, skjulte roller og mistænkeligt gode pokerfjæs. Spil sammen på én telefon eller fra hver jeres enhed.",
    stack: [...new Set(Object.values(imposterStack).flat())],
    stackGroups: imposterStack,
    demo: "https://imposter.brozat.dk/",
    intro:
      "Et browserbaseret selskabsspil, der gør det nemt at samle vennerne om en omgang bluff og skjulte roller. Frontenden er bygget med React, TypeScript, Vite og CSS. Backenden bruger TypeScript, Vercel Functions, Upstash Redis og Pusher Channels. Ingen app skal installeres — spillet åbnes direkte i browseren.",
    en: {
      title: "Who is the Impostor?",
      category: "Webapp",
      type: "Party game",
      status: "In development",
      description:
        "A party game full of bluffing, hidden roles and suspiciously convincing poker faces. Play together on one phone or from your own devices.",
      intro:
        "A browser-based party game that makes it easy to gather friends for a round of bluffing and hidden roles. The frontend is built with React, TypeScript, Vite and CSS. The backend uses TypeScript, Vercel Functions, Upstash Redis and Pusher Channels. There is nothing to install — the game runs directly in the browser.",
      features: [
        [
          "One phone. The whole party.",
          "Play locally by passing the phone around so each player can see their hidden role.",
        ],
        [
          "Together, on separate devices.",
          "Create or join an online room where everyone plays from their own phone.",
        ],
        [
          "A project in motion.",
          "The game is still in development, with plenty of room to keep refining the experience.",
        ],
      ],
    },
    features: [
      [
        "Én telefon. Hele selskabet.",
        "Spil lokalt ved at sende telefonen rundt, så hver spiller kan se sin skjulte rolle.",
      ],
      [
        "Sammen, fra hver sin enhed.",
        "Opret eller deltag i et online-rum, hvor alle spiller fra deres egen telefon.",
      ],
      [
        "Et projekt i bevægelse.",
        "Spillet er stadig under udvikling med plads til at arbejde videre med oplevelsen.",
      ],
    ],
  },
  {
    slug: "faceit-roast-bot",
    title: "Faceit Roast Bot",
    category: "Bot & automatisering",
    type: "Discord & kampdata",
    image: "/faceit-roast-bot.png",
    theme: "faceit-bot",
    status: "Under udvikling",
    description:
      "En serverless Discord-bot, der overvåger FACEIT-spillere og forvandler nye CS2-kampe til performance-analyser, Bot-rating og danske roasts.",
    stack: ["TypeScript", "Node.js"],
    demo: "https://faceit-roast-bot.schmidtii2000.workers.dev/health",
    demoLabel: "Se live health check",
    intro:
      "FaceitRoastBot kobler FACEITs kampdata sammen med Discord i et automatisk og driftssikkert flow. Projektet kører på Cloudflare Workers og D1, analyserer spillere mod både holdet og lobbyen og genererer forklarlige vurderinger og mere end 100 regelbaserede roast-formuleringer — helt uden en betalt AI-tjeneste.",
    features: [
      [
        "Automatisk kampovervågning.",
        "Et shardet cron-flow finder nye FACEIT-kampe, lader statistikken modne og behandler dem gennem en D1-baseret kø med deduplikering og kontrollerede retries.",
      ],
      [
        "Forklarlig analyse og dansk roast.",
        "En transparent Bot-rating kombinerer K/D, ADR, K/R, resultat og sekundær impact. En deterministisk regelmotor omsætter derefter spillerens faktiske præstation til ros eller roast.",
      ],
      [
        "Discord som brugerflade.",
        "Resultatet leveres som et visuelt embed med statistik, placeringer, ELO, map og matchlink. Slash-kommandoen /latest kan hente en valgfri spillers seneste kamp.",
      ],
    ],
    en: {
      category: "Bot & automation",
      type: "Discord & match data",
      status: "In development",
      description:
        "A serverless Discord bot that monitors FACEIT players and transforms new CS2 matches into performance analysis, a Bot Rating and Danish roasts.",
      demoLabel: "View live health check",
      intro:
        "FaceitRoastBot connects FACEIT match data with Discord through an automated and reliable workflow. Running on Cloudflare Workers and D1, it evaluates players against both their team and the full lobby and generates explainable ratings and more than 100 rule-based roast lines — without relying on a paid AI service.",
      features: [
        [
          "Automatic match monitoring.",
          "A sharded cron workflow detects new FACEIT matches, allows statistics to mature and processes them through a D1-backed queue with deduplication and controlled retries.",
        ],
        [
          "Explainable analysis and Danish roasts.",
          "A transparent Bot Rating combines K/D, ADR, K/R, the result and secondary impact. A deterministic rule engine then turns the player's actual performance into praise or a roast.",
        ],
        [
          "Discord as the interface.",
          "Results arrive as a visual embed with statistics, rankings, ELO, map artwork and a match link. The /latest command retrieves any player's latest completed match.",
        ],
      ],
    },
  },
  {
    slug: "bookify",
    title: "Bookify",
    category: "Webapp",
    type: "Bøger & samlinger",
    image: "/Bookify-3-semester.png",
    theme: "bookify",
    description:
      "Dit næste læseeventyr, lige ved hånden. En mobiltilpasset bogapp til at opdage bøger, gemme favoritter og samle din læselyst ét sted.",
    stack: ["React", "React Router", "TypeScript", "Node.js", "MongoDB"],
    demo: "https://awu-exam-schmidtii123.onrender.com/",
    intro:
      "Bookify er en mobiltilpasset bogapp, der samler opdagelse og organisering af bøger. Projektet er bygget med React Router 7, TypeScript, Node.js og MongoDB.",
    en: {
      category: "Webapp",
      type: "Books & collections",
      description:
        "Your next reading adventure, right at your fingertips. A mobile-first book app for discovering books, saving favourites and keeping your reading life in one place.",
      intro:
        "Bookify is a mobile-first book app that brings book discovery and organisation together. The project is built with React Router 7, TypeScript, Node.js and MongoDB.",
      features: [
        [
          "Find your next book.",
          "Explore and search for books, then dive into the details before choosing your next read.",
        ],
        [
          "A personal library.",
          "Create a profile, save your favourites and organise books into your own collections.",
        ],
        [
          "Built for mobile.",
          "The experience is designed for a small screen, keeping your books close at hand.",
        ],
      ],
    },
    features: [
      [
        "Find din næste bog.",
        "Udforsk og søg efter bøger, og gå på opdagelse i detaljerne, inden du vælger dit næste læseeventyr.",
      ],
      [
        "Et personligt bibliotek.",
        "Opret en profil, gem dine favoritter, og organiser bøgerne i dine egne samlinger.",
      ],
      [
        "Bygget til mobilen.",
        "Oplevelsen er tilpasset en lille skærm, så bøgerne er lige ved hånden.",
      ],
    ],
  },
  {
    slug: "crit-card",
    title: "Crit Card",
    category: "Webapp",
    type: "DnD & realtid",
    image: "/crit_card.png",
    theme: "crit",
    description:
      "Et digitalt kortbord til DnD-spillere. Saml gruppen i en lobby, og lad jeres Dungeon Master styre spillet i realtid.",
    stack: [
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "PHP",
      "Laravel",
      "Pinia",
      "MySQL",
      "Pusher",
    ],
    demo: "https://critcard.netlify.app/",
    github: "https://github.com/Schmidtii123/kortspil-backend",
    intro:
      "På mit afsluttende semester udviklede jeg en webapp som koncept til en Crit Cards-platform for DnD-spillere. Frontenden er bygget med Vue, TypeScript, JavaScript og Pinia, med PHP, Laravel og MySQL på backend. Pusher håndterer realtidskommunikationen.",
    en: {
      category: "Webapp",
      type: "DnD & real-time",
      description:
        "A digital card table for DnD players. Gather the group in a lobby and let your Dungeon Master run the game in real time.",
      intro:
        "During my final semester, I developed a webapp concept for a Crit Cards platform for DnD players. The frontend is built with Vue, TypeScript, JavaScript and Pinia, with PHP, Laravel and MySQL on the backend. Pusher handles real-time communication.",
      features: [
        [
          "Gather the adventurers.",
          "Players can create and join a lobby using an ID or a shared link.",
        ],
        [
          "The Dungeon Master at the helm.",
          "A DM runs the game and draws cards while the group follows along in real time through Pusher.",
        ],
        [
          "From idea to webapp.",
          "A final-semester project focused on turning a game concept into an interactive experience.",
        ],
      ],
    },
    features: [
      [
        "Saml eventyrerne.",
        "Spillere kan oprette og deltage i en lobby via et ID eller et delt link.",
      ],
      [
        "Dungeon Master ved roret.",
        "En DM styrer spillet og trækker kort, mens gruppen følger med i realtid via Pusher.",
      ],
      [
        "Fra idé til webapp.",
        "Et afsluttende semesterprojekt med fokus på at omsætte et spilkoncept til en interaktiv oplevelse.",
      ],
    ],
  },
  {
    slug: "mark-ebert",
    title: "Mark Ebert",
    category: "Interaktiv fortælling",
    type: "Webdokumentar",
    image: "/mark_ebert.png",
    theme: "webdoc",
    description:
      "Et møde med kunstneren bag værkerne. En interaktiv webdokumentar med visuel storytelling og parallax-effekter.",
    stack: ["HTML", "CSS", "JavaScript"],
    demo: "https://brozat.dk/Webdoc/",
    github: "https://github.com/Schmidtii123/Webdoc",
    intro:
      "På andet semester arbejdede vi med en interaktiv webdokumentar om kunstneren Mark Ebert. Projektet kombinerer multimediedesign og webudvikling for at fortælle historien om hans kreative rejse.",
    en: {
      category: "Interactive story",
      type: "Web documentary",
      description:
        "Meet the artist behind the work. An interactive web documentary featuring visual storytelling and parallax effects.",
      intro:
        "During my second semester, we created an interactive web documentary about the artist Mark Ebert. The project combines multimedia design and web development to tell the story of his creative journey.",
      features: [
        [
          "The story at the centre.",
          "A visual narrative that invites visitors to explore the artist's work.",
        ],
        [
          "Motion with purpose.",
          "Parallax effects add depth to the experience as visitors move through the story.",
        ],
        [
          "Where design meets code.",
          "A student project with room to experiment with interactive storytelling on the web.",
        ],
      ],
    },
    features: [
      [
        "Historien i centrum.",
        "En visuel fortælling, der lader den besøgende gå på opdagelse i kunstnerens arbejde.",
      ],
      [
        "Bevægelse med mening.",
        "Parallax-effekter giver dybde til oplevelsen, mens man bevæger sig gennem historien.",
      ],
      [
        "Design møder kode.",
        "Et studieprojekt med plads til at eksperimentere med interaktiv formidling på nettet.",
      ],
    ],
  },
];
