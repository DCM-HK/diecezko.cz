import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import PageMain from "../../components/layouts/page-main";
import ProfileCard from "../../components/layouts/profile-card";
import ContainerH2 from "../../components/layouts/container-h2";
import ContainerUl from "../../components/layouts/container-ul";
import ContainerLi from "../../components/layouts/container-li";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconWorld,
} from "@tabler/icons";
export default async function DCM() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>DCM Hradec Králové</ContainerTitle>
          <ContainerDescription>
            Jsme zde pro všechny mladé lidi. Doprovázíme je na cestě jejich
            růstu a&nbsp;dozrávání, hledání a&nbsp;nacházení Boha, aby skrze
            konkrétní život z&nbsp;víry byli svědectvím dobra a&nbsp;nadějí pro
            tento svět.
          </ContainerDescription>
          <ContainerParagraph>
            Snažíme se posílit duchovní život mladých lidí, vychovávat ke
            svědectví, ke službě, k&nbsp;zodpovědnosti, k&nbsp;pravdě
            a&nbsp;k&nbsp;radosti být mladým křesťanem. Pořádáme různé akce
            zaměřené na rozvoj osobnosti v&nbsp;oblastech náboženství,
            mezilidských vztahů, vnímání krásy a&nbsp;umění. To vše skrze život
            ve společenství, modlitby, diskuse a&nbsp;pomocí
            her&nbsp;a&nbsp;přednášek.
          </ContainerParagraph>
          <ContainerH2>Poslání DCM</ContainerH2>
          <ContainerUl>
            <ContainerLi>
              Or�anizuje diecézní a&nbsp;jiná setkání mládeže.
            </ContainerLi>
            <ContainerLi>
              Podílí se na formaci animátorů společenství mládeže.
            </ContainerLi>
            <ContainerLi>
              Spolupracuje s&nbsp;kaplany pro mládež a&nbsp;mladými zástupci
              jednotlivých vikariátů.
            </ContainerLi>
            <ContainerLi>
              Spoluzajišťuje provoz{" "}
              <Link
                href="/dczm-vesmir"
                className="underline"
                title="DCZM Vesmír"
              >
                Diecézního centra života mládeže (DCŽM) Vesmír
              </Link>
              .
            </ContainerLi>
            <ContainerLi>
              Spolupracuje s&nbsp;ostatními diecézemi v&nbsp;rámci{" "}
              <Link
                href="https://cbk.cirkev.cz/sekce-pro-mladez"
                className="underline"
                rel="external"
                target="_blank"
                title="Sekce pro mládež ČBK"
              >
                Sekce pro mládež ČBK
              </Link>
              .
            </ContainerLi>
          </ContainerUl>
          <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 items-center my-6">
            {dcm.map((p) => {
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
          <ContainerH2>Kontakt</ContainerH2>
          <ContainerUl className={`!list-none !pl-0 mb-6`}>
            <ContainerLi>
              Diecézní centrum pro mládež
              <br />
              Velké náměstí 32
              <br />
              500 03 Hradec Králové
            </ContainerLi>
            <ContainerLi>
              email:{" "}
              <Link className="underline" href="mailto:dcm@bihk.cz">
                dcm@bihk.cz
              </Link>
              ,{" "}
              <Link className="underline" href="mailto:dcm.bihk@gmail.com">
                dcm.bihk@�mail.com
              </Link>
              <br />
              telefon:{" "}
              <Link className="underline" href="tel:+420734435358">
                734 435 358
              </Link>{" "}
              (Klára Petrová, vedoucí DCM)
            </ContainerLi>
            <ContainerLi className="mt-2">
              <Link
                href={`https://www.facebook.com/DCM.HradecKralove/`}
                target="_blank"
                rel="external"
                title="Facebook"
              >
                <IconBrandFacebook className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.instagram.com/dcm_hk`}
                target="_blank"
                rel="external"
                title="Instagram"
              >
                <IconBrandInstagram className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.youtube.com/@dcmhradeckralove5644`}
                target="_blank"
                rel="external"
                title="Youtube kanál"
              >
                <IconBrandYoutube className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.bihk.cz/biskupstvi/diecezni-centrum-pro-mladez`}
                target="_blank"
                rel="external"
                title="Webové stránky"
              >
                <IconWorld className="inline mr-2" size={30} />
              </Link>
            </ContainerLi>
          </ContainerUl>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}

export const dcm = [
  {
    name: "P. Jenda Pitřinec",
    description:
      "O. Jenda je od září 2025 novým ředitelem DCŽM Vesmír a DCM Hradec Králové. Prošel skautem, VeKou, ZUŠkou (hraje na housle) a&nbsp;�ymplem. Část seminárních studií prožil v&nbsp;Římě. Provozuje všechny druhy sportů od windsurfu přes tenis, fotbal až k&nbsp;lyžím a&nbsp;snowboardu. Rád poslouchá, ale i&nbsp;se aktivně zapojuje do hudby či zpěvu. Miluje jídlo – především to z&nbsp;hovězího. Těší jej povídání si s&nbsp;druhými zvlášť při kafi či jiných dobrých italských pochutinách.",
    jpgPath: "/assets/images/dcm/pitrinec.jpg",
    webpPath: "/assets/images/dcm/pitrinec.webp",
    altText: "Profilová fotka P. Jendy Pitřince",
    className: "",
  },
  {
    name: "Klárka Petrová",
    description:
      "Klárka je naše vedoucí, která má vše pod palcem. Přišla k&nbsp;nám již před nějakou dobou z&nbsp;vesmírného týmu, kde strávila dva roky. Je naším motorem při práci a&nbsp;poradách. Ve volných chvílích maluje, čte a&nbsp;studuje historii a&nbsp;náboženskou výchovu na univerzitě v&nbsp;Hradci Králové.",
    jpgPath: "/assets/images/dcm/petrova.jpg",
    webpPath: "/assets/images/dcm/petrova.webp",
    altText: "Profilová fotka Klárky Petrové",
    className: "",
  },
  {
    name: "Josi Pazderová",
    description:
      "Josi je naší nejmladší členkou týmu. Má na starosti spolupráci se Sekcí pro mládež a&nbsp;aktivně podporuje ministrantky. Ve volném čase miluje detektivky, tanec a&nbsp;pilates. Ráda si odpočine u&nbsp;uklízení a&nbsp;nedá dopustit na kvalitní spánek. Když má možnost, utíká za sluncem a&nbsp;klidem do Portu�alska, kam se ráda vrací.",
    jpgPath: "/assets/images/dcm/pazderova.jpg",
    webpPath: "/assets/images/dcm/pazderova.webp",
    altText: "Profilová fotka Josi Pazderové",
    className: "",
  },
  {
    name: "Dan Blažek",
    description:
      "Dan je náš nejnovější člen týmu. Má na starost koordinaci farních aktivit a&nbsp;rád přemýšlí, jak věci fun�ují, a&nbsp;ještě raději to zkouší v&nbsp;praxi. Baví ho 3D tisk a&nbsp;různé technické vychytávky. Když chytí slinu, napíše krátký příběh nebo báseň. Pochází z&nbsp;Nového Města nad Metují, vystudoval strojařinu, prošel teolo�ickým konviktem, rokem v&nbsp;týmu na Vesmíru i&nbsp;římským seminářem.",
    jpgPath: "/assets/images/dcm/blazek.jpg",
    webpPath: "/assets/images/dcm/blazek.webp",
    altText: "Profilová fotka Dana Blažka",
    className: "",
  },
  {
    name: "Jindra Řezníček",
    description:
      "Jindra má rád práci všeho druhu. Nezalekne se dřeva, cihel, elektřiny, vody či topení. Své nadšení uplatňuje při drobných opravách, které nám zpříjemňují prostředí. Ve volných chvílích se zajímá o&nbsp;psycholo�ii a&nbsp;pro�ramování. Je velký milovník železnice a&nbsp;toulání se v&nbsp;přírodě. Má na starost technické věci, novinky na webu a&nbsp;komunikaci s&nbsp;vikariátními kaplany a&nbsp;zástupci pro mládež.",
    jpgPath: "/assets/images/dcm/reznicek.jpg",
    webpPath: "/assets/images/dcm/reznicek.webp",
    altText: "Profilová fotka Jindry Řezníčka",
    className: "",
  },
  {
    name: "Evžen Holub",
    description:
      "Při vanutí Ducha byl k&nbsp;nám seslán pan Holub. Pravděpodobně holubice nebyla toho času k&nbsp;dispozici. Mladí si pana Holuba velmi oblíbili a&nbsp;bez dlouhého váhání jej začali oslovovat jménem Evžen. A&nbsp;tak se z&nbsp;Evžena Holuba stal maskot královéhradecké mládeže.",
    jpgPath: "/assets/images/jadro/evzen.jpg",
    webpPath: "/assets/images/jadro/evzen.webp",
    altText: "Profilová fotka Holuba Evžena",
    className: "",
  },
];
