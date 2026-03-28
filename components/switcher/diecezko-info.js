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
import Countdown from "../countdown";
import Image from "next/image";

export default function DiecezkoInfo({ id, className }) {
  return (
    <Container id={id} className={className}>
      <div className="min-h-[65vh] flex flex-col items-center justify-around">
        {/* This div can serve as a spacer to add some label before the main title 
          <div className="flex flex-col items-center w-full">
          <span className="text-base text-center"></span>
          </div> */}
        <div className="flex flex-col items-center w-[90vw]">
          <Countdown countDownDate={new Date("March 28, 2026 09:30:00")} />
          <h1 className="text-6xl md:text-7xl uppercase leading-tight tracking-wide text-center text-[#f2e7c9] font-poppins mb-4">
            <span className="block font-semibold">Diecézní</span>
            <span className="text-[#fbf3e3] text-7xl md:text-8xl px-20 font-semibold md:my-2 block">
              setkání
            </span>
            <Image
              src="/assets/images/youth_label.svg"
              alt="Youth label"
              width={220}
              height={100}
              className="mx-auto -mt-8 md:-mt-10 mr-10 w-[180px] md:w-[220px] h-auto"
            />
          </h1>
          <p className="text-2xl text-center tracking-wide mt-1 font-poppins">
            28. 3. 2026 • 9.30
          </p>
          <p className="uppercase text-xl md:text-2xl tracking-wide font-poppins">
            Filharmonie Hradec Králové
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
            href={`https://forms.office.com/Pages/ResponsePage.aspx?id=0yfGPzCmsUOBrkMeHpEoRlGhSFMKQDJHlR6vccQ-P5tUNTBQVEVBMVEzVTBSRVdTUlJDNTBHMUVVWi4u`}
            target="_blank"
            className="border col-span-2 border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 text-base flex flex-row items-center justify-center"
          >
            <button
              className="flex flex-row items-center justify-center w-full"
              title="Zpětná vazba"
            >
              <IconWritingSign className="inline" stroke={1.5} />{" "}
              <span className="ml-2 text-left">Zpětná vazba</span>
            </button>
          </Link>
          {/*<Link
            href="/galerie"
            className="border col-span-2 border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-5 cursor-pointer text-base flex flex-row items-center justify-center w-full"
            >
            <button className="flex flex-row items-center justify-center w-full">
              <IconPhoto className="inline" stroke={1.5} />{" "}
              <span className="ml-2 text-left">Zavzpomínej na minulý ročník</span>
            </button>
          </Link>*/}
          {/*
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
          */}
        </div>
      </div>
      <Infographic />
    </Container>
  );
}
