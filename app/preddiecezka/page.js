"use client"
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

export default function GroupTransport() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>PředDiecézka</ContainerTitle>
          <ContainerDescription>
            Některé vikariáty pořádají menší setkání (tzv. vikariátko) den před Diecézkem a&nbsp;poté společně vyrážejí do Hradce Králové. Tomuto setkání říkáme PředDiecézko. Zde nalezneš přehled, který tě nasměruje na další informace.
          </ContainerDescription>
          <FaqLayout>
            <FaqBox question={`Hradec Králové`} icon={``}>
              <ContainerParagraph>
                V pátek 27. 3. se v našem vikariátu uskuteční před-diecézní setkání mládeže jako
                příležitost společně se naladit na blížící se diecézní setkání. Začne v 15:30 ve
                farní místnosti v Novém Adalbertinu. Pro�ram nabídne hry, krátké témátko, modlitbu
                i prostor pro setkání a sdílení. Na závěr se zapojíme do přípravy křížové cesty na
                Novém Hradci Králové, kam se společně přesuneme MHD.
              </ContainerParagraph>
              <ContainerParagraph>
                Více informací na insta�ramu:&nbsp;
                <Link
                  href="https://www.instagram.com/spolco_hk/"
                  target="_blank"
                  rel="external noopener nofollow"
                  className="underline"
                >
                  @spolco_hk
                </Link>.
              </ContainerParagraph>
              <ContainerImageBase
                jpgPath="/assets/images/preddiecezka/preddiecezko-hk.jpg"
                webpPath="/assets/images/preddiecezka/preddiecezko-hk.webp"
                altText="Plakátek s informacemi o PředDiecézku vikariátu Hradec Králové."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Humpolec`} icon={``}>
              <ContainerImageBase
                jpgPath="/assets/images/preddiecezka/preddiecezko-hum.jpg"
                webpPath="/assets/images/preddiecezka/preddiecezko-hum.webp"
                altText="Plakátek s informacemi o PředDiecézku vikariátu Humpolec."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Ústí nad Orlicí`} icon={``}>
              <ContainerParagraph>
                Přijeď už dřív a poznej lépe mládež z tvého vikariátu! Večeři si&nbsp;každý
                zajistí sám ale snídaně bude připravena pro&nbsp;všechny, a proto
                se&nbsp;prosím přihlaš, abychom věděli kolik nás bude! Můžeš se&nbsp;těšit
                na&nbsp;hry, kahoot a&nbsp;večerní hradec.<br />Pro více info sleduj&nbsp;
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
                jpgPath="/assets/images/preddiecezka/preddiecezko-usti.jpg"
                webpPath="/assets/images/preddiecezka/preddiecezko-usti.webp"
                altText="Plakátek s informacemi o PředDiecézku vikariátu Ústí nad Orlicí."
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
            {/*
            <FaqBox question={`Jičín`} icon={``}>
              <ContainerImage
                jpgPath="/assets/images/preddiecezka/preddiecezko-jicin.jpg"
                webpPath="/assets/images/preddiecezka/preddiecezko-jicin.webp"
                altText="Plakátek s informacemi o PředDiecézku."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Pardubice`} icon={``}>
              <ContainerImage
                jpgPath="/assets/images/doprava/doprava-pce.jpg"
                webpPath="/assets/images/doprava/doprava-pce.webp"
                altText="Plakátek s informacemi o PředDiecézku."
                className="w-full my-4"
              />
            </FaqBox>
            <FaqBox question={`Rychnov nad Kněžnou`} icon={``}>
              <ContainerImage
                jpgPath="/assets/images/doprava/doprava-rk.jpg"
                webpPath="/assets/images/doprava/doprava-rk.webp"
                altText="Plakátek s informacemi o PředDiecézku."
                className="w-full my-4"
              />
            </FaqBox>
            */}
          </FaqLayout>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
