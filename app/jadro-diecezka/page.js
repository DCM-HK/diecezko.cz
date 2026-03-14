import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import PageMain from "../../components/layouts/page-main";
import ContainerDescription from "../../components/layouts/container-description";
import ProfileCard from "../../components/layouts/profile-card";
import ContainerH2 from "../../components/layouts/container-h2";
import ContainerParagraph from "../../components/layouts/container-paragraph";
export default async function Vikariaty() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Jádro Diecézka (Éčko)</ContainerTitle>
          <ContainerDescription>
            Diecézní setkání mládeže je možné zor�anizovat díky dobrovolníkům,
            kteří se&nbsp;do jeho příprav zapojili. Tým, který se&nbsp;schází
            již od&nbsp;podzima, aby pro vás Diecézko připravil, si&nbsp;říká
            Éčko. Víte proč? Podle maskota mládeže královéhradecké diecéze
            holuba Evžena! Se&nbsp;členy Éčka a&nbsp;jejich úkoly se&nbsp;můžete
            seznámit níže.
          </ContainerDescription>
          <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 items-center">
            {ecko.map((p) => {
              return (
                <ProfileCard
                  key={p.name}
                  name={p.name}
                  description={p.description}
                  jpgPath={p.jpgPath}
                  webpPath={p.webpPath}
                  pngPath={p.pngPath}
                  altText={p.altText}
                  className={p.className}
                />
              );
            })}
          </div>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
export const ecko = [
  {
    name: "Evžen Holub",
    description: "Pan Holub drží holubí dohled nad celým Diecézkem.",
    jpgPath: "/assets/images/jadro/evzen.jpg",
    webpPath: "/assets/images/jadro/evzen.webp",
    altText: "Profilová fotka Holuba Evžena",
    className: "",
  },
  {
    name: "P. Jenda Pitřinec",
    description:
      "Jenda je nejen ředitelem Vesmíru a&nbsp;DCM, ale hlavně duchovní opora celého přípravného týmu. Rád se zamýšlí nad průběhem celého Diecézka a&nbsp;přichází s&nbsp;pointy k&nbsp;vylepšení.",
    jpgPath: "/assets/images/jadro/pitrinec.jpg",
    webpPath: "/assets/images/jadro/pitrinec.webp",
    altText: "Profilová fotka o. Jendy Pitřince",
    className: "",
  },
  {
    name: "Mons. Prokop Brož",
    description:
      "Biskup Prokop má na starosti pastorační činnost v&nbsp;naší diecézi. Stará se o&nbsp;to, aby všichni táhli za jeden provaz. Řídí se heslem: Bez Ducha Svatého ani ránu!",
    jpgPath: "/assets/images/jadro/broz.jpg",
    webpPath: "/assets/images/jadro/broz.webp",
    altText: "Profilová fotka Mons. Prokopa Brože",
    className: "",
  },  
  {
    name: "Klárka Petrová",
    description:
      "Klárka je vedoucí DCM. Koordinuje přípravu a&nbsp;průběh Diecézka. Též se stará o&nbsp;všechny, kteří setkání připravují.",
    jpgPath: "/assets/images/jadro/petrova.jpg",
    webpPath: "/assets/images/jadro/petrova.webp",
    altText: "Profilová fotka Klárky Petrové",
    className: "",
  },
  {
    name: "Klárka Kopecká",
    description:
      "Manažerka Klárka komunikuje s&nbsp;hosty. Domlouvá s&nbsp;nimi detaily jejich přednášek a&nbsp;stará se o&nbsp;ně v&nbsp;průběhu Diecézka.",
    jpgPath: "/assets/images/jadro/kopecka.jpg",
    webpPath: "/assets/images/jadro/kopecka.webp",
    altText: "Profilová fotka Klárky Kopecké",
    className: "",
  },
  {
    name: "Josi Pazderová",
    description:
      "Josi vás se svým týmem označí náramkem při vstupu do Filharmonie. Také se stará o&nbsp;to, aby po Diecézku bylo všude uklizeno.",
    jpgPath: "/assets/images/jadro/pazderova.jpg",
    webpPath: "/assets/images/jadro/pazderova.webp",
    altText: "Profilová fotka Josi Pazderové",
    className: "",
  },
  {
    name: "Anička Marie Maříková",
    description:
      "Anička má na starosti režijní pro�ram, který nás bude provázet během dopoledne ve Filharmonii.",
    jpgPath: "/assets/images/jadro/marikova.jpg",
    webpPath: "/assets/images/jadro/marikova.webp",
    altText: "Profilová fotka Aničky Maříkové",
    className: "",
  },
  {
    name: "Terezka Škarydová",
    description:
      "Terezka společně s&nbsp;Aničkou&nbsp;K. pečují o&nbsp;pohodlí našich žaludků po celý den.",
    jpgPath: "/assets/images/jadro/skarydova.jpg",
    webpPath: "/assets/images/jadro/skarydova.webp",
    altText: "Profilová fotka Terezky Škarydové",
    className: "",
  },  
  {
    name: "Anička Koubková",
    description:
      "Anička společně s&nbsp;Terezkou pečují o&nbsp;pohodlí našich žaludků po celý den.",
    jpgPath: "/assets/images/jadro/koubkova.jpg",
    webpPath: "/assets/images/jadro/koubkova.webp",
    altText: "Profilová fotka Aničky Koubkové",
    className: "",
  },
  {
    name: "Dan Blažek",
    description:
      "Dan a&nbsp;jeho tým v&nbsp;oranžových vestičkách vám zajistí bezpečný doprovod až na přednášku.",
    jpgPath: "/assets/images/jadro/blazek.jpg",
    webpPath: "/assets/images/jadro/blazek.webp",
    altText: "Profilová fotka Dana Blažka",
    className: "",
  },
  {
    name: "Matyáš Mesi Meisner",
    description:
      "Mesi připravuje slavnostní slavení společné mše svaté na závěr Diecézka. Též přispívá svými praktickými poznámkami k&nbsp;průběhu setkání.",
    jpgPath: "/assets/images/jadro/meisner.jpg",
    webpPath: "/assets/images/jadro/meisner.webp",
    altText: "Profilová fotka Matyáše Meisnera",
    className: "",
  },       
  {
    name: "Jindra Řezníček",
    description:
      "Jindra se stará o&nbsp;kaplany pro mládež a&nbsp;jejich zástupce a pomáhá sytit web obsahem.",
    jpgPath: "/assets/images/jadro/reznicek.jpg",
    webpPath: "/assets/images/jadro/reznicek.webp",
    altText: "Profilová fotka Jindry Řezníčka",
    className: "",
  },
  {
    name: "Martin Rychtár",
    description:
      "Martin se svým týmem připravuje zázemí na Bi�y pro celý přípravný tým a odpolední přednášky",
    jpgPath: "/assets/images/vikariaty/rychtar.jpg",
    webpPath: "/assets/images/vikariaty/rychtar.webp",
    altText: "Profilová fotka Martina Rychtára",
    className: "",
  },
  /* {
    name: "Pavel Vocl",
    description:
      "Pavel má na starosti technickou stránku režijního pro�ramu ve Filharmonii.",
    altText: "Profilová fotka Pavel Vocl",
    jpgPath: "/assets/images/jadro/vocl.jpg",
    webpPath: "/assets/images/jadro/vocl.webp",
    className: "",
  }, */
  {
    name: "Vojta Vlach",
    description:
      "Vojta vytváří web diecézko.cz a&nbsp;pomáhá s&nbsp;technickým zabezpečením celé akce.",
    jpgPath: "/assets/images/jadro/vlach.jpg",
    webpPath: "/assets/images/jadro/vlach.webp",
    altText: "Profilová fotka Vojty Vlacha",
    className: "",
  },
];
