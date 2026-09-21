# Emil Schmidts portfolio

React-portfolio med Vite og React Router. Designet bruger mørkegrøn, varm sand og en orange accent og tilpasser sig desktop, tablet og mobil.

## Lokal udvikling

```sh
npm install
npm run dev
```

Åbn http://localhost:5173/. Vite viser ændringer løbende.

## Indhold

- `/`: introduktion, udvalgte projekter, om mig og kontakt.
- `/projekter`: alle projekter med kategorifiltre.
- `/projekter/:slug`: projektside med beskrivelse, stack, demo og eventuelt GitHub-link.
- Projekttekster, kategorier, links og teknologier redigeres samlet i `src/data/projects.js`.
- De første to projekter i listen vises på forsiden.
- Designvariabler og responsive layouts findes i `src/App.css`.
- Billeder, CV og stack-logoer ligger i `public/`. Kilder til nye logoer findes i `public/stacks/README.md`.
- Bookify-visningen bruger `public/bookify-preview-mask.svg` til at skjule baggrunden omkring telefonerne uden at ændre originalbilledet. Masken passer til `Bookify-3-semester.png` og skal tilpasses, hvis billedets komposition ændres.
- Kontaktformularen bruger den eksisterende EmailJS-service og skabelon. Feltnavnene er `user_name`, `user_email` og `message`.

## Kontrol og build

```sh
npm run lint
npm run build
npm run preview
```

Buildet ligger i `dist/`. Ved deployment skal webserveren returnere `index.html` for appens ruter, f.eks. `/projekter/bookify`, så direkte links og genindlæsning virker. Eksisterende statiske filer skal serveres normalt. Vites udviklingsserver håndterer dette automatisk.

Browserkontrollen omfatter desktop, mobil ned til 320 px, projektfiltre, projektsider, billeder og formularens validering. Der afsendes ikke rigtige e-mails under kontrollen.
