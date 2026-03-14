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
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconWorld,
} from "@tabler/icons";
export default async function DCZM() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>KAK Salaš</ContainerTitle>
          <ContainerDescription>
            <strong className="font-bold">
              Křesťanský akademický klub Salaš
            </strong>{" "}
            je společenství nejen věřících vysokoškolských studentů z Hradce Králové. Salaš
            je členem&nbsp;
            <Link href="https://www.vkhcr.cz/" target="_blank" rel="external" className="underline">
              VKH
            </Link>
            , tedy Vysokoškolského katolického hnutí, a úzce spolupracuje
            s Akademickou duchovní službou při Královehradecké diecézi. Jsme parta vysokoškolských
            studentů, kteří mezi sebou rádi uvítají všechny, které zaujme náš pro�ram nebo si jen
            chtějí popovídat. Můžete nás potkat pravidelně každou středu od 19:00 na mši nebo
            po ní na různorodých aktivitách, které jsou pořádané námi pro jiné studenty.
          </ContainerDescription>
          <ContainerImage
            jpgPath="/assets/images/spolecenstvi/salas/kostel.jpg"
            webpPath="/assets/images/spolecenstvi/salas/kostel.webp"
            altText="KAK Salaš v kostele"
            className="w-full my-2"
          />
          <ContainerH2>Pravidelný středeční pro�ram</ContainerH2>
          <ContainerUl>
            <ContainerLi>18:00 Nácvik hudby se scholou</ContainerLi>
            <ContainerLi>19:00 Mše svatá v kostele Nanebevzetí Panny Marie na Velkém náměstí</ContainerLi>
            <ContainerLi>20:00 Následující pro�ram</ContainerLi>
          </ContainerUl>
          <ContainerH2>Pro�ram po mši svaté</ContainerH2>
          <ContainerParagraph>
            Ptáte se, co jest pro�ram po mši? Pro představu pořádáme Muzikantský
            večer, PubQuiz, přednášky, nebo si jdeme o&nbsp;zkouškovém jen tak
            sednout na pivo.
          </ContainerParagraph>
          <ContainerImage
            jpgPath="/assets/images/spolecenstvi/salas/laser-game.jpg"
            webpPath="/assets/images/spolecenstvi/salas/laser-game.webp"
            altText="KAK Salaš v katakombách"
            className="w-full my-2"
          />
          <ContainerH2>Sheeep Ples</ContainerH2>
          <ContainerParagraph>
            Ten letošní se koná 10. dubna od 19:00 na Budově A Univerzity Hradec Králové a lístky
            jsou v prodeji online na:&nbsp;
            <Link href="https://www.salas.hk/ples/" target="_blank" rel="external" className="underline">
              www.salas.hk/ples
            </Link>
          </ContainerParagraph>
          <ContainerImage
            jpgPath="/assets/images/spolecenstvi/salas/ples.jpg"
            webpPath="/assets/images/spolecenstvi/salas/ples.webp"
            altText="Sheep ples"
            className="w-full my-2"
          />
          <ContainerH2>Deskovky</ContainerH2>
          <ContainerParagraph>
            Pokud Tě baví deskové hry, určitě přijď na deskové hry na FIMku
            každé poslední úterý v&nbsp;měsíci. Termíny deskovek jsou: 31. 3, 28. 4 a&nbsp;26. 5. 
          </ContainerParagraph>
          <ContainerImage
            jpgPath="/assets/images/spolecenstvi/salas/katakomby.jpg"
            webpPath="/assets/images/spolecenstvi/salas/katakomby.webp"
            altText="KAK Salaš v katakombách"
            className="w-full my-2"
          />
          <ContainerParagraph>
            I&nbsp;když je klub a&nbsp;jeho aktivity přednostně orientován na
            studenty, kteří věří ve Vzkříšeného Krista ve společenství katolické
            církve, je ekumenicky otevřený nejen křesťanům jiných tradicí, ale
            i&nbsp;všem hledajícím a&nbsp;zájemcům o&nbsp;duchovní život
            a&nbsp;činnost, které studentský klub or�anizuje.
          </ContainerParagraph>
          <ContainerImage
            jpgPath="/assets/images/spolecenstvi/salas/prskavky.jpg"
            webpPath="/assets/images/spolecenstvi/salas/prskavky.webp"
            altText="KAK Salaš v noci s prskavkami"
            className="w-full my-2"
          />
          <ContainerParagraph>Těšíme se na vás!</ContainerParagraph>
          <ContainerH2>Sledujte na nás na:</ContainerH2>
          <ContainerUl className={`!list-none !pl-0 mb-6`}>
            <ContainerLi className="mt-2">
              <Link
                href={`https://www.facebook.com/salas.hradec`}
                target="_blank"
                rel="external"
                title="Facebook"
              >
                <IconBrandFacebook className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`https://www.instagram.com/salas_kak/`}
                target="_blank"
                rel="external"
                title="Instagram"
              >
                <IconBrandInstagram className="inline mr-2" size={30} />
              </Link>
              <Link
                href={`http://www.salas.hk`}
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
