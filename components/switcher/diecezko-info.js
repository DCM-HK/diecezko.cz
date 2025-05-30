"use client";
import Container from "../layouts/container";
import ContainerH2 from "../layouts/container-h2";
import ContainerParagraph from "../layouts/container-paragraph";
import {
  IconApps,
  IconCircleCheck,
  IconCircleDashed,
  IconCross,
  IconForms,
  IconMath,
  IconMathSymbols,
  IconPencil,
  IconPhoto,
  IconSpeakerphone,
  IconWritingSign,
} from "@tabler/icons";
import Link from "next/link";
import Nbsp from "../format/nbsp";
import Strong from "../format/strong";
import Infographic from "../infographic";

export default function DiecezkoInfo({ id, className }) {
  return (
    <Container id={id} className={className}>
      <div className="min-h-[75vh] flex flex-col items-center justify-around">
        <div className="flex flex-col items-center w-full">
          <span className="text-base text-center"></span>
        </div>
        <div className="flex flex-col items-center w-[90vw]">
          <h1 className="text-6xl md:text-7xl uppercase leading-tight tracking-wide text-center text-shadow-lg shadow-[#f2e7c9] text-[#f2e7c9] font-blushes mb-8">
            <span className="block">Diecézní</span>
            <yel className="text-[#fbf3e3] text-shadow-lg text-7xl md:text-8xl shadow-[#fbf3e3]">
              setkání
            </yel>
            <span className="block">mládeže</span>
          </h1>
          <p className="uppercase text-xl md:text-3xl tracking-wide text-shadow-lg shadow-white font-blushes">
            v Hradci Králové
          </p>
          <p className="text-2xl text-center tracking-wide text-shadow-lg shadow-white mt-1 font-blushes">
            5. 4. 2025 • 9.30
          </p>
        </div>
        <div className="w-[90vw] max-w-[500px] grid grid-cols-2 grid-flow-row gap-4 items-center auto-cols-max">
          {/* <Link
            href="https://yesman.diecezko.cz/"
            target="_blank"
            title="Diecézní YesMan"
            className="border col-span-2 border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center"
          >
            <button className="flex flex-row items-center justify-center w-full">
              <IconCircleCheck
                stroke={1.5}
                className="inline h-6 w-6 my-1 mr-2"
              />{" "}
              <span className="ml-2 text-left">Diecézní YesMan</span>
            </button>
          </Link> */}
          <Link
            href={`https://feedback.diecezko.cz/`}
            target="_blank"
            className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 text-base flex flex-row items-center justify-center"
          >
            <button
              className="flex flex-row items-center justify-center"
              title="Zpětná vazba"
            >
              <IconSpeakerphone className="inline" stroke={1.5} />{" "}
              <span className="ml-2 text-left">Zpětná vazba</span>
            </button>
          </Link>
          <Link
            href="/galerie"
            className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center"
          >
            <button className="flex flex-row items-center justify-center">
              <IconPhoto className="inline" stroke={1.5} />{" "}
              <span className="ml-2 text-left">Galerie</span>
            </button>
          </Link>
          <Link
            href="https://sumar.diecezko.cz/"
            target="_blank"
            title="Jednoduchá sčítací hra Sumář"
            className="border col-span-2 border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center"
          >
            <button className="flex flex-row items-center justify-center w-full">
              <IconMathSymbols
                stroke={1.5}
                className="inline h-6 w-6 my-1 mr-2"
              />{" "}
              <span className="ml-2 text-left">Hra: Sumář</span>
            </button>
          </Link>
        </div>
      </div>
      <Infographic />
    </Container>
  );
}
