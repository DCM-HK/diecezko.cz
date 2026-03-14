import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import PageMain from "../../components/layouts/page-main";
import ProgramDetail from "../../components/layouts/program-detail";
import program from "../../components/switcher/program.json";
import AvatarImage from "../../components/layouts/avatar-image";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandSpotify,
  IconBrandYoutube,
  IconMapPin,
  IconWorld,
} from "@tabler/icons";
import ParmIcon from "../../components/layouts/parm-icon";
import Button from "../../components/layouts/button";
import IconCustomBrandX from "../../components/images/brand-x";
export default async function PrednaskyWorhsopy() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Přednášky a workshopy</ContainerTitle>
          <ProgramDetail p={program[4]} className={``} />
          <ContainerDescription>
            V první části odpoledne si můžete vybrat z&nbsp;bohaté nabídky
            přednášek, několika workshopů nebo sportu. Další workshopy budou přibývat
            v&nbsp;průběhu března.
          </ContainerDescription>
          <div className="flex flex-row items-center justify-center flex-wrap">
            <Link href={`#prednaska-start`}>
              <Button className={``}>
                <ParmIcon iconName={`person`} /> Přednášky
              </Button>
            </Link>
            <Link href={`#workshop-start`}>
              <Button>
                <ParmIcon iconName={`workshop`} /> Workshopy
              </Button>
            </Link>
            <Link href={`#sport-start`}>
              <Button>
                <ParmIcon iconName={`sport`} /> Sporty
              </Button>
            </Link>
          </div>
          <div>
            {workshops.map((w) => {
              return (
                <div
                  key={w.title}
                  id={w.id !== undefined ? w.id : ""}
                  className="flex flex-col items-center md:flex-row border-[#444] border rounded-xl p-6 sm:p-6 transition h-full hover:scale-[1.02] hover:rotate-1 mt-8"
                >
                  <div className="flex items-center justify-center md:flex-col">
                    <AvatarImage
                      altText={`Avatar hosta ${w.speaker.name} k přednášce ${w.title}.`}
                      jpgPath={w.speaker.jpgPath}
                      pngPath={w.speaker.pngPath}
                      webpPath={w.speaker.webpPath}
                      className="!rounded-full h-32 w-32 md:h-36 md:w-36 border-2 border-[#444] bg-[#444] mb-4 md:mb-0 md:mr-8 mx-1 md:my-1"
                    />
                    {w.speaker.jpgPath2 !== undefined ||
                    w.speaker.pngPath2 !== undefined ||
                    w.speaker.webpPath2 !== undefined ? (
                      <AvatarImage
                        altText={`Avatar hosta ${w.speaker.name} k přednášce ${w.title}.`}
                        jpgPath={w.speaker.jpgPath2}
                        pngPath={w.speaker.pngPath2}
                        webpPath={w.speaker.webpPath2}
                        className="!rounded-full h-32 w-32 md:h-36 md:w-36 border-2 border-[#444] bg-[#444] mb-4 md:mb-0 md:mr-8 mx-1 md:my-1"
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-col items-start justify-center w-full sm:w-[450px]">
                    <h2
                      dangerouslySetInnerHTML={{ __html: w.title }}
                      className="text-xl font-semibold w-full"
                    />
                    <span className="tracking-widest mt-1 font-light flex flex-row items-center justify-start">
                      <ParmIcon
                        iconName={w.type}
                        className={`inline`}
                        size={18}
                      />
                      <span
                        dangerouslySetInnerHTML={{ __html: w.speaker.name }}
                      />
                    </span>
                    <span className="font-semibold flex flex-row items-center justify-start">
                      <IconMapPin
                        className="inline mr-1"
                        size={18}
                        stroke={1.5}
                      />
                    {w.place !== undefined ? (
                      <Link
                        href={
                          w.place.includes("Orlovna")
                            ? `/mapa?x=${50.2069553}&y=${15.8349681}` // Orlovna
                            : w.place.includes("Nové Adalbertinum")
                            ? `/mapa?x=${50.2090269}&y=${15.8334453}` // Nove Adalbertinum
                            : w.place.includes("Biskupská rezidence")
                            ? `/mapa?x=${50.208725}&y=${15.8323194}` // Biskupská rezidence
                            : `/mapa?x=${50.2062919}&y=${15.8337133}` // BiGy
                        }
                        target="_self"
                        className="underline"
                      >
                        {w.place}
                      </Link>
                    ) : (
                      <span className="font-extralight italic flex flex-row items-center justify-start">
                        Místo bude upřesněno.
                      </span>
                    )}
                    </span>
                    {w.about !== undefined ? (
                      <p
                        className="text-lg w-full mt-2 italic"
                        dangerouslySetInnerHTML={{ __html: w.about }}
                      />
                    ) : null}
                    <p
                      className="text-lg w-full mt-2"
                      dangerouslySetInnerHTML={{ __html: w.descritpion }}
                    />
                    {w.social !== undefined ? (
                      <div className="mt-1 flex flex-row items-center justify-start">
                        <h3 className="uppercase mr-2">Sleduj na: </h3>
                        {w.social.web !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.web}
                            className="inline ml-1"
                            title={`Odkaz na web ${w.speaker.name}`}
                          >
                            <IconWorld stroke={1.5} />
                          </Link>
                        ) : null}
                        {w.social.ig !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.ig}
                            className="inline ml-1"
                            title={`Odkaz na Instagram ${w.speaker.name}`}
                          >
                            <IconBrandInstagram stroke={1.5} />
                          </Link>
                        ) : null}
                        {w.social.fb !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.fb}
                            className="inline ml-1"
                            title={`Odkaz na Facebook ${w.speaker.name}`}
                          >
                            <IconBrandFacebook stroke={1.5} />
                          </Link>
                        ) : null}
                        {w.social.spotify !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.spotify}
                            className="inline ml-1"
                            title={`Odkaz na Spotify ${w.speaker.name}`}
                          >
                            <IconBrandSpotify stroke={1.5} />
                          </Link>
                        ) : null}
                        {w.social.x !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.x}
                            className="inline ml-1"
                            title={`Odkaz na X ${w.speaker.name}`}
                          >
                            <IconCustomBrandX stroke={1.5} color={"#fff"} />
                          </Link>
                        ) : null}
                        {w.social.youtube !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.youtube}
                            className="inline ml-1"
                            title={`Odkaz na Youtube ${w.speaker.name}`}
                          >
                            <IconBrandYoutube stroke={1.5} color={"#fff"} />
                          </Link>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}

const workshops = [
  {
    title:
      "Víra pod tlakem: Jak si&nbsp;obhájit svou&nbsp;víru před&nbsp;sebou i&nbsp;před druhými",
    type: "person",
    id: "prednaska-start",
    about: "P. Josef Kvapilík je kněz z generace Z, který doprovází mladé na Centru života mládeže v Rajnochovicích. Má rád hudbu, lyžování a dobré otázky. Offline i online jako Pater Pepa otevírá témata víry, vztahů a smyslu života tak, aby dávala smysl lidem dnešní generace.",
    descritpion:
      "Co dělat, když ve škole nebo na síti dostaneš otázku na svou víru a nevíš, co říct? A co když máš otázky sám? Na základě své zkušenosti z života, ale taky z YouTube nebo Instagramu, bych se s Tebou chtěl podělit o svou cestu hledání i praktické tipy, jak o víře přemýšlet a mluvit. Přijď načerpat odvahu, argumenty a naději.",
    speaker: {
      name: "P. Josef Kvapilík",
      jpgPath: "/assets/images/speakers/pater_pepa.jpg",
    },
    social: {
      ig: "https://www.instagram.com/paterpepa/",
    },
  },
  {
    title: "Dobrovolnictví, které dává&nbsp;víc, než&nbsp;bere",
    type: "person",
    about: `Minulý rok jsem působila jako dobrovolnice na salesiánské škole v Albánii a díky této zkušenosti jsem se po návratu do České republiky rozhodla pracovat jako asistentka pedagoga v mateřské škole.`,
    descritpion:
      "Chceš zažít něco, co tě vytáhne z komfortní zóny a změní ti pohled na svět? Láká tě vyrazit do světa jako dobrovolník, nebo tě jen zajímá, jak vypadá život v Albánii a jaké výzvy a překvapení mi tento rok služby přinesl? Přijď si poslechnout příběh o mém dobrovolnictví – a třeba inspiruje i tebe.",
    speaker: {
      name: "Majki Kašparová",
      jpgPath: "/assets/images/speakers/majki_koko.jpg",
    },
  },
  {
    title: "Jak jsme se ocitli v semináři…",
    type: "person",
    about: `Kluci z různých koutů – od Krkonoš, z Polabí a od Svatého Hostýna –, leč toho času bytem v Thákurově 3 na Praze 6. Disponujeme věkovým průměrem zhruba 34 let a velmi různými zkušenostmi, ale jedno máme společné: jsme bohoslovci za královéhradeckou diecézi.`,
    descritpion: `Asi každý z nás zná nějakého kněze, ale zeptali jsme se jich někdy, jak se kněžími stali? Jak se to vůbec stane, že jde někdo do kněžského semináře? Jestli vás to zajímá, můžete si o tom popovídat se třemi bohoslovci za naši diecézi, rádi vám povíme, co k tomu vedlo nás.`,
    speaker: {
      name: "Ondra Mařík, Tomáš Chlápek, Petr Hák",
      jpgPath: "/assets/images/speakers/bohoslovci.jpg",
    },
  },
  {
    title: "Jak na hudbu při mši aneb od výběru písní po dirigování",
    type: "workshop",
    id: "workshop-start",
    about: `Jmenuji se František Novák, učím hudební výchovu a varhany, vedu sbor Squadra Risonante při BIGY v Hradci Králové a vyučuji varhany na UHK. Liturgické hudbě se věnuji také jako vedoucí nově vznikajícího Centra pro liturgickou hudbu při Biskupství královéhradeckém.`,
    descritpion: `Workshop je určen zejména pro vedoucí schol a aktivní hudebníky ve farnostech, kteří se chtějí potkat, sdílet zkušenosti a načerpat inspiraci. Společně se zaměříme na výběr vhodných písní ke konkrétním příležitostem, vyzkoušíme si základy dirigování, dotkneme se aranžování pro nástroje a zazní i praktické tipy z praxe. Chybět nebude prostor pro dotazy a diskuzi.`,
    speaker: {
      name: "František Novák",
      jpgPath: "/assets/images/speakers/novak.jpg",
    },
  },
  {
    title: "Pubquiz",
    type: "workshop",
    about: `Salaš je živý studentský spolek v Hradci Králové, který propojuje víru, přátelství a akademický život. Nabízí prostor pro setkávání, debaty i zábavu – otevřeně a bez póz.`,
    descritpion: `Troufneš si na výzvu? Přijď ukázat, co máš v hlavě, a staň se hvězdou našeho kvízu!`,
    speaker: {
      name: "KAK Salaš",
      pngPath: "/assets/images/speakers/pub_quiz.png",
    },
  },
  {
    title: "Otčenáš jinak než slovy",
    type: "workshop",
    about: `Jsem lektorka osobnostně vzdělávácích programů a učitelka dramatického oboru na ZUŠ Střezina v Hradci Králové. Zároveň pracuji na Katechetickém a pedagogickém centru Biskupství královehradeckého.`,
    descritpion: `V tomto workshopu si zažijeme Modlitbu Páně skrze divadelní metody a prvky dramatické výchovy, které otevírají prostor pro osobní prožitek, emoce a představivost. Metody mohou inspirovat k vlastní hlubší modlitbě i nabídnout konkrétní nástroje pro vedení skupin.`,
    speaker: {
      name: "Markéta Rumpíková",
      pngPath: "/assets/images/speakers/rumpikova.jpg",
    },
  },
  {
    title: "Knižní ilustrace a jak na ní?",
    type: "workshop",
    about: `Mgr. Patricie Koubská (nar. 1973) se věnuje dětské ilustraci od r. 1997, kdy vyšla první knížka s jejími obrázky. Od té doby ilustrovala více než 60 knížek, několik jich také sama napsala. Mnoho let se také podílela na časopise Informatorium, pro který vytvořila řadu pracovních listů.`,
    descritpion: `Co je to knižní ilustrace? Jaká jsou její specifika? Čím se odlišuje od jiných výtvarných disciplín? S prací ilustrátora se můžete seznámit na besedě s Patricií Koubskou, která se této činnosti věnuje již témeř 30 let. (Možná si to budete moci i vyzkoušet, zbyde-li trochu času)`,
    speaker: {
      name: "Patricie Koubská",
      pngPath: "/assets/images/speakers/koubska.jpg",
    },
  },
  {
    title: "Sportovní workshop",
    type: "sport",
    id: "sport-start",
    about: ``,
    descritpion: `Sporty pro Vás připravujeme i letos. Více info již brzy tady.`, //Nechceš trávit odpoledne sezením a&nbsp;máš chuť se hýbat? Máš možnost přijít na workshop různých sportů. Pokud nejsi profi sportovec, tak nevadí! Přijít může každý, kdo má zájem, jen pamatuj na oblečení, ve kterém se ti bude dobře pohybovat a přezuvky do tělocvičny.`,
    speaker: {
      name: "Organizátor bude upřesněn;",
      // jpgPath: "/assets/images/speakers/TODO.jpg",
    },
  },
];
