import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import PageMain from "../../components/layouts/page-main";
import ProgramDetail from "../../components/layouts/program-detail";
import program from "../../components/switcher/program.json";
import ContainerImage from "../../components/layouts/container-image";
import Nbsp from "../../components/format/nbsp";
import SwappingGallery from "../../components/swapping-gallery";
import GSvg from "../../components/images/g_svg";
export default async function KamZmizeloPismeno() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>{GSvg(true)} mizí po celém Hradci, svědci viděli lva s písmenem!</ContainerTitle>
          <ContainerDescription>
            V Hradci Králové začalo mizet písmeno „{GSvg()}“! Svědci tvrdí, že zahlédli Hradeckého lva,
            jak běží ulicemi s obřím písmenem v tlapách. Policie teď zjišťuje, jestli jde o recesi,
            dobře promyšlený vtípek, nebo něco úplně jiného.
          </ContainerDescription>
          <ContainerParagraph>
            Lidé z Hradce navíc policii opakovaně hlásí podivného lva, který se se zmizelým písmenem
            objevuje na různých místech po městě. Nejčastěji ho prý potkávají na Velkém náměstí,
            kde stojí u Mariánského sloupu a skoro se ani nehne – jako by byl vytesaný z kamene.
          </ContainerParagraph>
          <ContainerParagraph>
            Do celé záhady se zapojilo i Biskupské -ymnázium. Bi-y už podalo žalobu na neznámého
            pachatele, který jim „ukradl“ jejich písmeno {GSvg()}. Škola označila incident za „do nebe
            volající potupu vzdělání“ a s nadsázkou dodala, že bez písmene {GSvg()} je jen -ymnázium.
          </ContainerParagraph>
          <ContainerParagraph>
            Bi-y i policie proto vyzývají veřejnost, aby měla oči otevřené a sledovala, co se ve
            městě děje.
          </ContainerParagraph>
          <ContainerImage
            pngPath="/assets/images/lev-wanted.png"
            webpPath="/assets/images/lev-wanted.webp"
            altText="Plakát s Hradeckým lvem a nápisem 'Wanted'"
            className="w-80 my-2"
          />
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}

