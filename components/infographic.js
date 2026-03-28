import Link from "next/link";
import ContainerH2 from "./layouts/container-h2";
import ContainerH3 from "./layouts/container-h3";
import ContainerParagraph from "./layouts/container-paragraph";
import {
  IconFriends,
  IconHeart,
  IconPray,
  IconCross,
  IconMusic,
  IconQuestionMark,
} from "@tabler/icons";

export default function Infographic() {
  return (
    <div>
      <ContainerH2 className={`!text-2xl text-center`}>
        Co Tě na setkání čeká?
      </ContainerH2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border-[#444] border rounded-xl p-4 sm:p-6 transition h-full backdrop-blur-md hover:scale-105">
          <IconFriends size={50} className="inline w-full mt-4" />
          <ContainerH3 className="">Společenství</ContainerH3>
          <ContainerParagraph className="">
            To nejdůležitější, co na setkání společně zažijeme, je společenství
            věřících vrstevníků. Úžasný a&nbsp;rozhodně nezapomenutelný zážitek!
          </ContainerParagraph>
        </div>
        <div className="border-[#444] border rounded-xl p-4 sm:p-6 transition h-full backdrop-blur-md hover:scale-105">
          <IconCross size={50} className="inline w-full mt-4" />
          <ContainerH3 className="">Mše svatá s našimi biskupy</ContainerH3>
          <ContainerParagraph className="">
            Setkání zakončíme mší svatou s&nbsp;našimi biskupy Janem
            a&nbsp;Prokopem v&nbsp;katedrále Svatého Ducha. Biskup Jan nás zve a&nbsp;zdraví v&nbsp;
            <Link
              href="/pozvani-biskupa-jana"
              target="_self"
              className="underline"
              title="Pozání Biskupa Jana"
            >
              dopise
            </Link>
            . Texty písní ke mši najdeš{" "}
            <Link
              href="/playlist"
              target="_self"
              className="underline"
              title="Playlist"
            >
              tady
            </Link>.
          </ContainerParagraph>
        </div>
        <div className="border-[#444] border rounded-xl p-4 sm:p-6 transition h-full backdrop-blur-md hover:scale-105">
          <IconQuestionMark size={50} className="inline w-full mt-4" />
          <ContainerH3 className="">Na co se můžeš těšit?</ContainerH3>
          <ContainerParagraph className="">
            Chystáme pro vás zábavný pro�ram ve Filharmonii, zveme zajímavé
            hosty na odpolední přednášky a&nbsp;workshopy a&nbsp;připravujeme
            duchovní zážitek ze mše svaté.
          </ContainerParagraph>
        </div>
        <div className="border-[#444] border rounded-xl p-4 sm:p-6 transition h-full backdrop-blur-md hover:scale-105">
          <IconMusic size={50} className="inline w-full mt-4" />
          <ContainerH3 className="">Skvělá hudba</ContainerH3>
          <ContainerParagraph className="">
            Pro�ram bude doprovázen ladnými tóny{" "}
            <Link
              href="/veka"
              target="_self"
              className="underline"
              title="Vesmírné kapely"
            >
              Vesmírné kapely
            </Link>{" "}
            a scholou{" "}
            <Link
              href="/pehuma"
              target="_self"
              className="underline"
              title="PEHUMA"
            >
              PEHUMA
            </Link>{" "}
            z Dolní Čermné. O&nbsp;hudební doprovod adorace se&nbsp;postará
            Markét Dušková.
          </ContainerParagraph>
        </div>
        <div className="border-[#444] border rounded-xl p-4 sm:p-6 transition h-full backdrop-blur-md hover:scale-105">
          <IconHeart size={50} className="inline w-full mt-4" />
          <ContainerH3 className="">Světový den mládeže</ContainerH3>
          <ContainerParagraph className="">
            Na přání papeže sv. Jana Pavla II. a&nbsp;jeho nástupců se mají
            biskupové scházet každý rok s&nbsp;mládeží své diecéze.
          </ContainerParagraph>
        </div>
      </div>
    </div>
  );
}
