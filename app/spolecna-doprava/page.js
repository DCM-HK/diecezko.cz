"use client";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerImageBase from "../../components/layouts/container-image-base";
import PageMain from "../../components/layouts/page-main";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconWorld,
} from "@tabler/icons";
import FaqLayout from "../../components/layouts/faq-layout";
import FaqBox from "../../components/layouts/faq-box";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import { Icon } from "leaflet";
// import ContainerImage from "../../components/layouts/container-image";

export default function GroupTransport() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Společná doprava</ContainerTitle>
          <ContainerDescription>
            Některé vikariáty zajišťují nebo plánují společnou dopravu. Zde
            naleznete přehled, který vás nasměruje na další informace.
          </ContainerDescription>
          <FaqLayout>
            <FaqBox question={`Havlíčkův Brod`} icon={``}>
              <ContainerImageBase
                jpgPath="/assets/images/doprava/doprava-hb.jpg"
                webpPath="/assets/images/doprava/doprava-hb.webp"
                altText="Plakátek s informacemi o společné dopravě."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Humpolec`} icon={``}>
              <ContainerImageBase
                jpgPath="/assets/images/preddiecezka/preddiecezko-hum.jpg"
                webpPath="/assets/images/preddiecezka/preddiecezko-hum.webp"
                altText="Plakátek s informacemi o společné dopravě."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Chrudim a Litomyšl`} icon={``}>
              Vikariáty Chrudim a Litomyšl or�anizují společnou dopravu autobusem. Přihlášení
              a&nbsp;další informace o&nbsp;společné dopravě jsou k&nbsp;dispozici na&nbsp;
              <Link
                className="underline"
                href={`https://forms.gle/zdwRfmQSCaibjYtc6`}
                target="_blank"
                rel="external noopener nofollow"
              >
                tomto odkazu
              </Link>.
              <ContainerImageBase
                pngPath="/assets/images/spolecna-doprava/chrudim-litomysl.png"
                webpPath="/assets/images/spolecna-doprava/chrudim-litomysl.webp"
                altText="Plakátek s informacemi o společné dopravě."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Jičín`} icon={``}>
              <ContainerParagraph>
                Ke společné dopravě využijeme vlak, a pokud chceš společně cestovat na Diecézko, zde
                jsou časy odjezdů:
                <ul className="list-disc list-inside">
                  <li>Jičín: odjezd v 7.35 vlakem směr Hradec Králové (budeme v posledním voze)</li>
                  <li>Hořice: odjezd 8.12 vlakem směr Hradec Králové (budeme v posledním voze)</li>
                  <li>Nová Paka: odjezd 7.36 vlakem směr Kolín, v Ostroměři přestup na vlak do Hradce  Králové (budeme v posledním voze)</li>
                  <li>Lázně Bělohrad: odjezd 7.47 vlakem směr Kolín, v Ostroměři přestup na vlak do Hradce  Králové (budeme v posledním voze)</li>
                </ul>
              </ContainerParagraph>
              <ContainerParagraph>
                Zpět se vydáme společně po mši svaté vlakem v 17.02, který nás odveze domů.
              </ContainerParagraph>
            </FaqBox>
            <FaqBox question={`Jilemnice`} icon={``}>
              <ContainerParagraph>
                Vikariát Jilemnice nepořádá společnou dopravu. Těšíme se na viděnou na Diecézku!
              </ContainerParagraph>
            </FaqBox>
            <FaqBox question={`Kutná Hora`} icon={``}>
              <ContainerParagraph>
                Přihlaš se na&nbsp;
                <Link href="https://prihlaska.diecezko.cz/" target="_blank" rel="external noopener nofollow" className="underline">             
                  prihlaska.diecezko.cz
                </Link>.
              </ContainerParagraph>
              <ContainerImageBase
                jpgPath="/assets/images/spolecna-doprava/kutna-hora.jpg"
                webpPath="/assets/images/spolecna-doprava/kutna-hora.webp"
                altText="Plakátek s informacemi o společné dopravě."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Náchod`} icon={``}>
              <ContainerParagraph>
                Společná cesta v sobotu ráno: 8:03 Odjezd vlaku z Náchoda, 8:10 Odjezd vlaku z Kostelce
              </ContainerParagraph>
              <ContainerImageBase
                pngPath="/assets/images/spolecna-doprava/nachod.png"
                webpPath="/assets/images/spolecna-doprava/nachod.webp"
                altText="Plakátek s informacemi o společné dopravě."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Pardubice`} icon={``}>
              <ContainerParagraph>
                <Link href="http://forms.gle/47gZCaeJYd5AY37C8" target="_blank" rel="external noopener nofollow" className="underline">
                  Přihláška
                </Link>
              </ContainerParagraph>
              <ContainerImageBase
                jpgPath="/assets/images/spolecna-doprava/pardubice.jpeg"
                webpPath="/assets/images/spolecna-doprava/pardubice.webp"
                altText="Plakátek s informacemi o společné dopravě."
                className="w-full my-4"
                />
            </FaqBox>
            <FaqBox question={`Rychnov nad Kněžnou`} icon={``}>
              <ContainerParagraph>
                Vikariát Rychnov nad Kněžnou nepořádá společnou dopravu. Těšíme se na viděnou na Diecézku!
              </ContainerParagraph>
            </FaqBox>
            <FaqBox question={`Trutnov`} icon={``}>
              <ContainerParagraph>
                Z našeho trutnovského vikariátu na Diecézko pojedeme vlakem z Trutnova v 7:43,
                ze Rtyně v 8:03 (je to stejný vlak) a ze Dvora Králové v 8:02. Kontaktní osoba:
                Prokop Bartoň tel: +420 721 981 837, 
                <Link href="https://www.instagram.com/_proky._.barton_/" target="_blank" rel="external noopener nofollow" className="underline">
                  @_proky._.barton_
                </Link>
              </ContainerParagraph>
              <ContainerImageBase
                jpgPath="/assets/images/spolecna-doprava/trutnov.jpg"
                webpPath="/assets/images/spolecna-doprava/trutnov.webp"
                altText="Plakátek s informacemi o společné dopravě."
                className="w-full my-4"
                />
            </FaqBox>
            <FaqBox question={`Ústí nad Orlicí`} icon={``}>
              <ContainerParagraph>
                Vikariát Ústí nad Orlicí nepořádá společnou dopravu. Společný sraz je pro zájemce
                v pátek 27. 3. 2026 v 18.00 na Biskupském �ymnáziu v Hradci Králové. Pro více info sleduj&nbsp;
                <Link
                  href="https://www.instagram.com/vikariat_uo/"
                  target="_blank"
                  rel="external noopener nofollow"
                  className="underline"
                >
                  @vikariat_uo
                </Link> nebo napiš na&nbsp;
                <Link
                  href="mailto:vikariatustinadorlici@gmail.com"
                  className="underline"
                >
                  vikariatustinadorlici@�mail.com
                </Link>
              </ContainerParagraph>
              <ContainerImageBase
                jpgPath="/assets/images/preddiecezka/preddiecezko-usti.jpeg"
                webpPath="/assets/images/preddiecezka/preddiecezko-usti.webp"
                altText="Plakátek s informacemi o společné dopravě."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Žamberk`} icon={``}>
              <ContainerParagraph>
                Společný odjezd pro zájemce z žambereckého vikariátu bude v sobotu 28.3. v 7:33
                vlakem z Letohradu. Těšíme se na vikariátním setkání nebo na Diecézku!&nbsp;
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLScsjUTi_KN9X9Z-399Ads99IY7ERx5GRcARQFWDkZGGOoA1hA/viewform?usp=send_form"
                  target="_blank" rel="external noopener nofollow" className="underline">
                  Přihláška na předdiecézko
                </Link>.
              </ContainerParagraph>
              <ContainerImageBase
                jpgPath="/assets/images/spolecna-doprava/zamberk.jpg"
                webpPath="/assets/images/spolecna-doprava/zamberk.webp"
                altText="Plakátek s informacemi o společné dopravě."
                className="w-full my-4"
                />
            </FaqBox>
          </FaqLayout>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}

export const vikariaty = [
  {
    name: "Havlíčkův Brod",
    name: "Hradec Králové",
    name: "Humpolec",
    name: "Chrudim",
    name: "Jičín",
    name: "Jilemnice",
    name: "Kutná Hora",
    name: "Litomyšl",
    name: "Náchod",
    name: "Pardubice",
    name: "Rychnov nad Kněžnou",
    name: "Trutnov",
    name: "Ústí nad Orlicí",
    name: "Žamberk",
  },
];
