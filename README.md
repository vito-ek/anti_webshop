Teknisk dokumentation – AWARE
Om projektet
AWARE er udviklet som en del af Tema 8 – Web II på multimediedesigneruddannelsen. Projektet er en uafhængig beauty-platform, der hjælper forbrugere med at træffe mere informerede valg gennem produktinformation og anmeldelser.Vi har udviklet et dynamisk website med HTML, CSS og JavaScript, hvor produktdata hentes fra DummyJSON API'et.
Målgruppen er forbrugere i alderen 20–45 år, som ønsker at undersøge beauty-produkter og læse anmeldelser, før de træffer en købsbeslutning.
Sitet giver brugeren mulighed for at:
Se beauty-produkter på forsiden.
Filtrere produkter efter kategori.
Sortere produkter efter bedømmelse.
Klikke videre til en produktside med flere oplysninger.
Undersøge produktinformation og anmeldelser.
Selv anmelde
Få viden om AWARE i siden about

Links
GitHub repository: https://github.com/vito-ek/anti_webshop.git
GitHub Pages: https://vito-ek.github.io/anti_webshop/
Figma: https://www.figma.com/design/bzi6oDgxUnChiOEbxRa7FD/Tema-8---Web-II?node-id=478-384&t=I4LJPlhg8iF6R4IT-1
Trello: https://trello.com/invite/b/6ac385b2f70538df9fc3018d/ATTI26bb2cdd03e1acf4cc731180204875340025833D/scrum-tema-8
ProjektstrukturProjektet er opbygget med HTML-sider, CSS-filer til styling og JavaScript-filer til det dynamiske indhold.

ANTI_WEBSHOP/
├── img/
│ ├── hero.webp
│ └── lighter_gradient.jpg
├── about.html
├── about.css
├── index.html
├── index.css
├── index.js
├── productdetails.html
├── productdetails.css
├── productdetails.js
├── review.html
├── review.css
├── review.js
├── script.js
├── style.css
└── README.md

Filbeskrivelser
index.html – Forside med hero-sektion, filtre og produktoversigt.
index.css – Styling af forsiden.
index.js – Funktionalitet på forsiden, fx hentning og visning af produkter.
productdetails.html – Detaljeside for det valgte produkt.
productdetails.css – Styling af produktsiden.
productdetails.js – Henter og viser oplysninger om det valgte produkt.
about.html – Om AWARE-siden.
about.css – Styling af om-siden.
review.html – Side til at anmelde produkter.
review.css – Styling af anmeldelsessiden.
review.js – Funktionalitet til anmeldelsesformularen.
style.css – Fælles styling, fx header, navigation.
script.js – Fælles JavaScript-funktionalitet.
img/ – Mappen med billeder, der bruges på hjemmesiden.
README.md – Teknisk dokumentation for projektet.

Hvordan koden fungerer
Vi bruger JavaScript til at hente data fra DummyJSON API'et og vise produkterne dynamisk på hjemmesiden. På den måde behøver vi ikke at oprette hvert produkt manuelt i HTML.Hentning af data fra APIVi anvender DummyJSON API'et til at hente produktdata fra kategorierne beauty og fragrances.Eksempler på API-endpoints:
https://dummyjson.com/products/category/beauty
https://dummyjson.com/products/category/fragrances
JavaScript bruger fetch() til at hente dataene. Svaret konverteres til JSON, hvorefter produkterne kan gennemgås og vises på siden.

Flow

1. Brugeren åbner hjemmesiden.
2. JavaScript henter produktdata fra API'et.
3. Data konverteres til JSON.
4. JavaScript gennemgår produkterne med et loop.
5. HTML-elementer oprettes dynamisk med produktbilleder, navne og anmeldelser.
6. Brugeren kan interagere med produkterne gennem filtrering, sortering og links til produktsiderne.

Filtrering og sortering
Filtreringen bruges til at vise produkter fra de valgte kategorier, eksempelvis beauty eller fragrances.
Sorteringen bruges til at ændre rækkefølgen af produkterne efter deres bedømmelse. Det giver brugeren mulighed for at sammenligne produkterne ud fra deres ratings.

Produktdetaljer
Når brugeren klikker på et produkt, sendes produktets id med i URL'en til produktsiden.Id'et kan derefter læses med JavaScript ved hjælp af URLSearchParams. Det bruges til at identificere det valgte produkt og hente eller vise de relevante oplysninger.Denne løsning gør det muligt at genbruge den samme produktside til flere forskellige produkter.

Navngivning
Vi har anvendt beskrivende variabel- og funktionsnavne for at gøre vores JavaScript-kode overskuelig og let at forstå.

Eksempelvis bruger vi variablerne produktliste, allData og rating til at håndtere produktvisning, produktdata og stjernebedømmelser.

Derudover har vi anvendt funktionsnavne som getData(), visData(), filter() og sorter(), der tydeligt beskriver funktionernes formål.

Kommentarer i koden
Vi har anvendt kommentarer til at skabe overblik og opdele koden i forskellige sektioner. I review.js har vi eksempelvis benyttet /_ Produkter _/, /_ Stjerner _/ og /_ Send _/ til at tydeliggøre de forskellige funktionaliteter. I productdetails.js har vi anvendt // til at forklare, at brugeren sendes videre til anmeldelsessiden.

Data og JSON-struktur
Vi henter produktdata fra DummyJSON API'et i JSON-format.Et produkt kan eksempelvis indeholde følgende felter:
{ "id": 1, "title": "Product name", "description": "Product description", "category": "beauty", "rating": 4.5,}

Felter vi bruger

- id – identificerer produktet og bruges til at finde det korrekte produkt på detaljesiden.- title – produktets navn.- description – beskrivelse af produktet.- category – produktets kategori.- rating – produktets bedømmelse.De konkrete felter afhænger af, hvilke oplysninger vi anvender i vores HTML og JavaScript.
  Git og branches
  Vi bruger Git og GitHub til versionsstyring og samarbejde om projektet.Branches gør det muligt at arbejde på forskellige funktioner uden at ændre direkte i main-branchen.
  Workflow

1. Oprette en branch til en bestemt funktion.
2. Udvikle og teste funktionen.
3. Committe ændringerne.
4. Pushe branchen til GitHub.
5. Merge ændringerne til main, når de fungerer.
   Dette workflow hjælper os med at holde styr på ændringer og samarbejde om projektet.

Bæredygtighed
Vi har fokus på at udvikle et enkelt website med en overskuelig informationsarkitektur og så lidt unødvendig belastning som muligt.
Mulige tiltag i projektet:
Genbrug af HTML, CSS og JavaScript, hvor det giver mening.
Begrænset brug af tunge eksterne ressourcer.
Optimering af billeder.
Enkel navigation og tydelig struktur.
Fokus på at undgå unødvendigt indhold og kode.

Vi vurderer løbende, hvordan design og tekniske løsninger kan bidrage til et mere effektivt website.

Udfordringer undervejs
En udfordring i projektet har været at hente og vise data fra DummyJSON API'et korrekt på hjemmesiden.Det kræver, at dataene hentes asynkront, konverteres fra JSON og indsættes dynamisk i HTML. Derudover skal produktets id følge med til detaljesiden, så den rigtige information vises.At få filtrering og sortering til at fungere sammen med produktlisten og sikre, at layoutet fungerer på både mobil og desktop.Løsninger
Teste API-endpoints direkte i browseren.
Undersøge dataenes struktur i JSON-format.
Bruge console.log() til at kontrollere data under udviklingen.
Opdele JavaScript i mindre funktioner.
Teste filtrering, sortering og navigation løbende.

Mulige forbedringer
Hvis vi skulle arbejde videre med AWARE, kunne vi blandt andet tilføje:
En søgefunktion til produkter.
Flere oplysninger om anmeldelser og gennemsnitlige bedømmelser.
Loading states og fejlmeddelelser ved problemer med API'et.
Forbedret tilgængelighed og yderligere mobiloptimering.
Yderligere test af brugervenlighed og navigation.

Gruppemedlemmer
Laura Porcelli
Noah Adrian Hahn Kristensensen
Vigga Tøt Østergaard
Nikoline Christensen
