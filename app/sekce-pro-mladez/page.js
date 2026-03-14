import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import PageMain from "../../components/layouts/page-main";
import ContainerImage from "../../components/layouts/container-image";
import ContainerH2 from "../../components/layouts/container-h2";
import ContainerUl from "../../components/layouts/container-ul";
import ContainerLi from "../../components/layouts/container-li";
import Link from "next/link";
import {
  IconWorld,
} from "@tabler/icons";
import SwappingGallery from "../../components/swapping-gallery";
import ProfileCard from "../../components/layouts/profile-card";
export default async function Pehuma() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Sekce pro mládež ČBK</ContainerTitle>
          <ContainerDescription>
            Sekce pro mládež je tým, který v rámci&nbsp;
            <Link href="https://cbk.cirkev.cz" target="_blank" rel="external noopener nofollow" className="underline">
              České biskupské konference
            </Link>
            &nbp;koordinuje pastoraci mládeže v celé České republice. Vznikla v roce 1990,
            aby propojovala práci s mladými lidmi v jednotlivých diecézích a od začátku podporuje
            jejich zapojení do života církve. 
          </ContainerDescription>
          <ContainerParagraph>
            Sekci tvoří dele�át biskupů pro mládež, ředitel se svým týmem a zástupci jednotlivých
            diecézí – především pracovníci diecézních center pro mládež (
            <Link href="/dcm-hradec-kralove" target="_self" className="underline">
              DCM
            </Link>
            ) a diecézních center života mládeže (
            <Link href="/dczm-vesmir" target="_self" className="underline">
              DCŽM
            </Link>
              ). Do služby jsou zapojeni také další spolupracovníci a mladí lidé z jednotlivých
              diecézí. Sekce pro mládež koordinuje spolupráci mezi diecézemi, or�anizuje celostátní
              akce pro mladé, například Celostátní setkání mládeže, a podílí se na přípravě
              Světových dnů mládeže. Jejím cílem je podporovat růst mladých lidí ve víře, pomáhat
              jim nacházet své místo v církvi a vytvářet prostor pro jejich zapojení do života
              církve.
          </ContainerParagraph>
          <ContainerParagraph>
            Sekce pro mládež or�anizuje a podporuje celostátní akce pro mladé, například&nbsp;
            <Link href="https://celostatnisetkanimladeze.cz/" target="_blank" rel="external noopener nofollow" className="underline">
              Celostátní setkání mládeže
            </Link>
            , setkání animátorů nebo přípravu Světových dnů mládeže, a zároveň propojuje práci
            s mládeží mezi jednotlivými diecézemi.
          </ContainerParagraph>
          <ContainerParagraph>
            <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 items-center my-6">
              {members.map((member) => {
                return (
                  <ProfileCard
                  key={member.name}
                  name={member.name}
                  title={member.role}
                  webpPath={member.image}
                  />
                );
              })}
            </div>
          </ContainerParagraph>
          <ContainerParagraph>
            <Link
              href={`https://cbk.cirkev.cz/sekce-pro-mladez`}
              target="_blank"
              rel="external"
              title="Webové stránky Sekce pro mládež České biskupské konference">
              <IconWorld className="inline mr-2" size={30} />
            </Link>
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}

export const members = [
  {
    name: "P. M�r. Roman Kubín",
    role: "ředitel sekce",
    image: "/assets/images/sekce/kubin.webp"
  },
  {
    name: "Tereza Novotná",
    role: "odborný pracovník",
    image: "/assets/images/sekce/novotna.webp"
  },
  {
    name: "Bc. Anna Šváchová",
    role: "odborný pracovník",
    image: "/assets/images/sekce/svachova.webp"
  }
]
