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
