import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import ContainerDescription from "../../components/layouts/container-description";
import PageMain from "../../components/layouts/page-main";
import dynamic from "next/dynamic";

const CommunitiesMap = dynamic(() => import("../../components/map-communities"), {
  loading: () => <p className="mt-8 text-center">Načítání mapy...</p>,
  ssr: false,
});

export default async function Spolca() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Spolča</ContainerTitle>
          <ContainerDescription>
            Základem pastorace mládeže jsou malá společenství ve farnostech – „spolča“. Právě tady
            se mladí pravidelně setkávají, modlí se, sdílejí svůj život a rostou ve víře.
            Společenství obvykle provází vedoucí nebo animátoři, kteří mladé doprovázejí.
          </ContainerDescription>
          <CommunitiesMap />
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
