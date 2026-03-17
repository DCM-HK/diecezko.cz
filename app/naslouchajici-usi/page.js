import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerParagraph from "../../components/layouts/container-paragraph";
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
          <ContainerTitle>Naslouchající uši</ContainerTitle>
          <ProgramDetail p={program[3]} className={``} />
          <ContainerDescription>
            Během Diecézního setkání mládeže budou přítomny také tzv. naslouchající uši. Jsou to
            lidé, kteří jsou během dne k dispozici pro osobní rozhovor s účastníky. Pokud bude
            někdo chtít něco sdílet, na něco se zeptat, poradit se nebo si jen v klidu popovídat,
            může se na ně obrátit.
          </ContainerDescription>
          <ContainerParagraph>
            Úkolem naslouchajících uší je především naslouchat, být blízko a nabídnout podporu.
            V případě zájmu se mohou s mladými také pomodlit nebo je nasměrovat na další pomoc.
          </ContainerParagraph>
          <div>
            {ears.map((w) => {
              return (
                <div
                  key={w.title}
                  id={w.id !== undefined ? w.id : ""}
                  className="flex flex-col items-center md:flex-row border-[#444] border rounded-xl p-6 sm:p-6 transition h-full hover:scale-[1.02] hover:rotate-1 mt-8"
                >
                  <div className="flex items-center justify-center md:flex-col">
                    <AvatarImage
                      altText={`Avatar hosta ${w.name} k přednášce ${w.title}.`}
                      jpgPath={w.jpgPath}
                      pngPath={w.pngPath}
                      webpPath={w.webpPath}
                      className="!rounded-full h-32 w-32 md:h-36 md:w-36 border-2 border-[#444] bg-[#444] mb-4 md:mb-0 md:mr-8 mx-1 md:my-1"
                    />
                    {w.jpgPath2 !== undefined ||
                    w.pngPath2 !== undefined ||
                    w.webpPath2 !== undefined ? (
                      <AvatarImage
                        altText={`Avatar hosta ${w.name} k přednášce ${w.title}.`}
                        jpgPath={w.jpgPath2}
                        pngPath={w.pngPath2}
                        webpPath={w.webpPath2}
                        className="!rounded-full h-32 w-32 md:h-36 md:w-36 border-2 border-[#444] bg-[#444] mb-4 md:mb-0 md:mr-8 mx-1 md:my-1"
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-col items-start justify-center w-full sm:w-[450px]">
                    <h2
                      dangerouslySetInnerHTML={{ __html: w.name }}
                      className="text-xl font-semibold w-full"
                    />
                    <span className="tracking-widest mt-1 flex flex-row items-center justify-start italic">
                      <ParmIcon
                        iconName={w.type}
                        className={`inline`}
                        size={18}
                      />
                      <span
                        dangerouslySetInnerHTML={{ __html: w.title }}
                      />
                    </span>
                    {w.about !== undefined ? (
                      <p
                        className="text-lg w-full mt-2"
                        dangerouslySetInnerHTML={{ __html: w.about }}
                      />
                    ) : null}
                    {w.social !== undefined ? (
                      <div className="mt-1 flex flex-row items-center justify-start">
                        <h3 className="uppercase mr-2">Sleduj na: </h3>
                        {w.social.web !== undefined ? (
                          <Link
                            target="_blank"
                            rel="external"
                            href={w.social.web}
                            className="inline ml-1"
                            title={`Odkaz na web ${w.name}`}
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
                            title={`Odkaz na Instagram ${w.name}`}
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
                            title={`Odkaz na Facebook ${w.name}`}
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
                            title={`Odkaz na Spotify ${w.name}`}
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
                            title={`Odkaz na X ${w.name}`}
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
                            title={`Odkaz na Youtube ${w.name}`}
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

const ears = [
  {
    name: "P. Josef Roušar",
    jpgPath: "/assets/images/ears/rousar.jpg",
    webpPath: "/assets/images/ears/rousar.webp",
    title: "Sdílená radost, dvojnásobná radost. Sdílená bolest, poloviční bolest. Mám čas.",
    about: "Josef Roušar, je z trojčat, má dvě sestry,  45 let, 19 let knězem, působí v Nížkově na Vysočině. Má rád chůzi (ne tak schůzi), zpěv, četbu, Vysočinu – kraj i salám (mňam)."
  },
  {
    name: "Eva Liškutinová, FMA",
    jpgPath: "/assets/images/ears/liskutinova.jpg",
    webpPath: "/assets/images/ears/liskutinova.webp",
    title: "Můžeš si přijít popovídat o radostech, bolestech a starostech, které nosíš ve svém srdci. Společně je pak svěříme Bohu.",
    about: "Jsem sestra salesiánka, aktuálně v komunitě v Hradci Králové, za kterou jsem zodpovědná. Pracuji v Salesiánském domově mladých. Ráda prožívám čas s Bohem a s mladými a každý rozhovor je pro mě velkým obohacením. Baví mě hudba, tanec a sport. "
  },
  {
    name: "sr. Gratia Pavla Štulířová, OSF",
    jpgPath: "/assets/images/ears/stulirova.jpg",
    webpPath: "/assets/images/ears/stulirova.webp",
    title: "Jsem tu pro vás, přijď kdykoliv, s čímkoliv. Můžeme se společně pomodlit nebo si jen tak povídat.",
    about: "Jsem \"štastně Bohu zasvěcená žena\", mám ráda modlitbu chval, toulání po lesních cestách a Řím."
  },
  {
    name: "S. Antonína Bílková (kon�re�ace Školských sester sv. Františka)",
    jpgPath: "/assets/images/ears/bilkova.jpg",
    webpPath: "/assets/images/ears/bilkova.webp",
    title: "Pokud máš nějaké otázky nebo pochybnosti, dotazy, na které se bojíš zeptat, něco, za co se chceš s někým pomodlit nebo třeba potřebuješ jen něco sdílet a nevíš s kým, jsem tu pro Tebe k dispozici.",
    about: "Už rok a půl jsem v komunitě na Hoješíně u Seče. Z mé služby na tomto místě mám nejraději čas s dětmi a mladými lidmi při výuce náboženství, spolčích nebo na akcích u nás. Jinak mě baví spousta věcí, od hraní na klavír, přes pečení, různé kreativní činnosti, hraní her, filmy až po historii."
  },
  {
    name: "sr. Romana Dvořáková",
    jpgPath: "/assets/images/ears/dvorakova.jpg",
    webpPath: "/assets/images/ears/dvorakova.webp",
    title: "Máš pocit, že musíš žít podle očekávání druhých? Máš pocit, že mluvíš „řečí jiného kmene“ než tví rodiče? Jak skloubit víru se životem, který žiješ? Neboj se: JSI PRO MĚ DŮLEŽITÝ/Á! CHCI TI NASLOUCHAT A POSVÍTIT NA CESTU.",
    about: "Sestra Romana Dvořáková je řádovou sestrou z generace X. Patří k vincentkám z komunity v Hradci Králové. Dříve pracovala se seniory, lidmi bez přístřeší a sociálně vyloučenými. Nyní pracuje jako terénní sociální pracovnice neziskovky Salinger – Triangl. Navštěvuje rodiny, ve kterých něco nefunguje (chybí denní režim, při výchově nejsou nastaveny hranice, děti nebo rodiče zažívají/zažili trauma, které se jim prolíná do současného života, …). Má ráda přírodu, procházky, rozhovory s lidmi, děti a mládež a hezké čtení."
  },
];
