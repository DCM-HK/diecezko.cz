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
import SwappingGallery from "../../components/swapping-gallery";
export default async function Pehuma() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Jak fun�uje pastorace mládeže</ContainerTitle>
          <ContainerDescription>
            Pastorace mládeže má několik úrovní. Díky tomu se mohou mladí setkávat nejen ve své
            farnosti, ale také s dalšími mladými z širšího okolí. Pastorace mládeže přitom začíná
            v malých společenstvích ve farnostech (spolča), pokračuje na úrovni vikariátů a vrcholí
            setkáním mladých z celé diecéze právě při Diecézním setkání mládeže, kde se mladí
            setkávají mezi sebou i se svým biskupem.
          </ContainerDescription>
          <ContainerH2>
            Farnost (spolča)
          </ContainerH2>
          <ContainerParagraph>
            Základem pastorace mládeže jsou malá společenství ve farnostech – „spolča“. Právě tady
            se mladí pravidelně setkávají, modlí se, sdílejí svůj život a rostou ve víře.
            Společenství obvykle provází vedoucí nebo animátoři, kteří mladé doprovázejí.
            Mapu aktivních společenství najdeš{" "}
            <Link href="/spolca" target="_self" className="underline">
              tady
            </Link>.
          </ContainerParagraph>
          <ContainerH2>
            Vikariát
          </ContainerH2>
          <ContainerParagraph>
            Více farností v jednom re�ionu tvoří vikariát. Na této úrovni se mohou konat společné
            akce pro mladé z více farností, aby se mohli poznávat a vytvářet širší společenství.
            Pastoraci mládeže zde pomáhají koordinovat&nbsp;
            <Link href="/vikariaty" target="_self" className="underline">
              kaplani pro mládež a vikariátní zástupci
            </Link>.
          </ContainerParagraph>
          <ContainerH2>
            Diecéze
          </ContainerH2>
          <ContainerParagraph>
            Na úrovni celé diecéze se or�anizují větší setkání, například Diecézní setkání mládeže
            (Diecézko). Pastoraci mládeže zde koordinuje&nbsp;
            <Link href="/dcm-hradec-kralove" target="_self" className="underline">
              Diecézní centrum pro mládež (DCM)
            </Link>
            , které podporuje společenství ve farnostech a připravuje různé akce a formaci pro mladé.
            Součástí diecézní pastorace jsou také&nbsp;
            <Link href="/dczm-vesmir" target="_self" className="underline">
              Diecézní centra života mládeže (DCŽM)
            </Link>
            , která vytvářejí prostor pro setkávání mladých, duchovní a víkendové pro�ramy.
            V prostředí studentských pak působí Vysokoškolská katolická hnutí (VKH), která vytváří
            společenství pro studenty vysokých škol – v naší diecézi fun�uje&nbsp;
            <Link href="/kak-salas" target="_self" className="underline">
              KAK Salaš v Hradci Králové
            </Link>.
          </ContainerParagraph>
          <ContainerH2>
            Česká republika
          </ContainerH2>
          <ContainerParagraph>
            Jednotlivé diecéze jsou propojené na celostátní úrovni prostřednictvím&nbsp;
            <Link href="/sekce-pro-mladez" target="_self" className="underline">
              Sekce pro mládež České biskupské konference
            </Link>
            . Její práci zajišťuje sekretariát Sekce pro mládež, který
            koordinuje spolupráci mezi diecézemi a podílí se na or�anizaci celostátních akcí,
            například&nbsp;
            <Link href="https://celostatnisetkanimladeze.cz/" target="_blank" rel="external noopener nofollow" className="underline">
              Celostátního setkání mládeže
            </Link>
            &nbsp;nebo přípravy&nbsp;
            <Link href="https://wydseoul.org/en" target="_blank" rel="external noopener nofollow" className="underline">
              Světových dnů mládeže.
            </Link>
          </ContainerParagraph>
          <ContainerImage
            pngPath="/assets/images/czechia.png"
            webpPath="/assets/images/czechia.webp"
            altText="Mapa České republiky s vyznačením jednotlivých center."
            className="w-full my-2"
            />
          <ContainerParagraph>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <Link href="https://www.dcmplzen.cz/" target="_blank" rel="external noopener nofollow" className="underline">
                  DCM Plzeň
                </Link>
              </li>
              <li>
                <Link href="https://www.dcml.cz/" target="_blank" rel="external noopener nofollow" className="underline">
                  DCM Litoměřice
                </Link>
              </li>
              <li>
                <Link href="https://krizovatka-prichovice.cz/" target="_blank" rel="external noopener nofollow" className="underline">
                  IDCŽM Křižovatka
                </Link>
              </li>
              <li>
                <Link href="https://adcm.cz/" target="_blank" rel="external noopener nofollow" className="underline">
                  ADCM Praha
                </Link>
              </li>
              <li>
                <Link href="https://cbk.cirkev.cz/sekce-pro-mladez" target="_blank" rel="external noopener nofollow" className="underline">
                  Sekce pro mládež
                </Link>
              </li>
              <li>
                <Link href="http://vesmir.signaly.cz/" target="_blank" rel="external noopener nofollow" className="underline">
                  DCŽM Vesmír
                </Link>
              </li>
              <li>
                <Link href="https://www.bihk.cz/biskupstvi/diecezni-centrum-pro-mladez" target="_blank" rel="external noopener nofollow" className="underline">
                  DCM Hradec Králové
                </Link>
              </li>
              <li>
                <Link href="https://www.bcb.cz/kontakty/pastoracni-stredisko/diecezni-centrum-mladeze/" target="_blank" rel="external noopener nofollow" className="underline">
                  DCM České Budějovice
                </Link>
              </li>
              <li>
                <Link href="https://www.ktispromlade.cz/" target="_blank" rel="external noopener nofollow" className="underline">
                  Ktiš pro mladé
                </Link>
              </li>
              <li>
                <Link href="https://mladez.biskupstvi.cz/dcm/" target="_blank" rel="external noopener nofollow" className="underline">
                  DCM Brno
                </Link>
              </li>
              <li>
                <Link href="https://mladez.biskupstvi.cz/mamre/" target="_blank" rel="external noopener nofollow" className="underline">
                  DCŽM Mamre
                </Link>
              </li>
              <li>
                <Link href="https://mladez.ado.cz/" target="_blank" rel="external noopener nofollow" className="underline">
                  ADCM Olomouc
                </Link>
              </li>
              <li>
                <Link href="https://archa.ado.cz/" target="_blank" rel="external noopener nofollow" className="underline">
                  TS Archa
                </Link>
              </li>
              <li>
                <Link href="https://pristav.ado.cz/" target="_blank" rel="external noopener nofollow" className="underline">
                  ADCŽM Přístav
                </Link>
              </li>
              <li>
                <Link href="https://dcm.doo.cz/" target="_blank" rel="external noopener nofollow" className="underline">
                  DCM Ostrava
                </Link>
              </li>
              <li>
                <Link href="https://dcm.doo.cz/pages/with-contacts?url=dsm&peopleGroup=dsm" target="_blank" rel="external noopener nofollow" className="underline">
                  DSM Stará Ves
                </Link>
              </li>
            </ul>
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
