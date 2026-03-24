import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import PageMain from "../../components/layouts/page-main";
import Vikariat from "../../components/vikariat";
import ContainerDescription from "../../components/layouts/container-description";
import IconCustomVikariatyMap from "../../components/images/vikariaty-map";
import ContainerH2 from "../../components/layouts/container-h2";
import Link from "next/link";
import SwappingGallery from "../../components/swapping-gallery";
import ContainerParagraph from "../../components/layouts/container-paragraph";
export default async function Vikariaty() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Vikariátní zástupci a kaplani pro mládež</ContainerTitle>
          <ContainerH2>Mapa vikariátů</ContainerH2>
          <ContainerParagraph>
            Vikariát je územní jednotka v&nbsp;diecézi seskupující jednotlivé 
            farnosti, které spolupracují na různých aktivitách 
            a&nbsp;projektech. Vytváří prostor pro setkávání a společné 
            prožívání víry. Pro mládež je to příležitost poznat
            nové lidi, zapojit se do dobrovolnictví, rozvíjet svůj duchovní
            život, bavit se a&nbsp;prožívat víru ve společenství. Vikariáty
            nabízejí různé akce, jako jsou setkání, duchovní obnovy, poutě,
            sportovní turnaje nebo festivaly.
          </ContainerParagraph>
          <ContainerDescription
            className={`text-left w-full !font-light mt-0 text-sm`}
          >
            (zdroj:{" "}
            <Link
              href={`https://www.bihk.cz/dieceze/diecezni-katalog/vikariaty`}
              target="_blank"
              rel="external"
              className="underline"
            >
              bihk.cz
            </Link>
            )
          </ContainerDescription>
          <IconCustomVikariatyMap className={`mt-4 mb-8`} />
          {vikariaty.map((v) => {
            return (
              <Vikariat
                key={v.name}
                name={v.name}
                coordinator={v.coordinator}
                person1={v.person1}
                person2={v.person2}
                person3={v.person3}
                person4={v.person4}
                loader1={v.loader1}
                loader2={v.loader2}
                priest={v.priest}
                description={v.description}
                cover={v.cover}
                social={v.social}
              />
            );
          })}
          <ContainerH2>Vikariátní zástupce</ContainerH2>
          <ContainerParagraph>
            Vikariátní zástupce pro mládež pomáhá propojovat práci s mládeží mezi jednotlivými farnostmi ve vikariátu a diecézí. Spolupracuje především s kaplanem pro mládež a podporuje or�anizaci společných aktivit pro mladé.
            Jeho služba zahrnuje:
            <ul className="list-disc list-inside mt-2">
              <li>spolupráci s kaplanem pro mládež při or�anizování aktivit pro mladé ve vikariátu (např. vikariátní setkání mládeže nebo večery mladých)</li>
              <li>udržování kontaktu s mládeží v jednotlivých farnostech a spolupráci se zástupci farností</li>
              <li>předávání informací pro mládež (např. z Diecézního centra pro mládež nebo z dění ve vikariátu)</li>
              <li>zapojení do přípravy Diecézního setkání mládeže a dalších diecézních akcí</li>
              <li>modlitbu za mládež</li>
              <li>osobní duchovní růst, aby mohl být příkladem pro ostatní</li>
            </ul>
          </ContainerParagraph>
          <SwappingGallery images={gallery} />
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}

const gallery = [
  {
    path: "/assets/images/vikariaty-skupinove/vikariaty_skupinove_02.jpg",
    alt: "Skupinová fotka vikariátu Kutná Hora",
  },
  {
    path: "/assets/images/vikariaty-skupinove/vikariaty_skupinove_01.jpg",
    alt: "Skupinová fotka vikariátu Havlíčkův Brod",
  },
  {
    path: "/assets/images/vikariaty-skupinove/vikariaty_skupinove_03.jpg",
    alt: "Skupinová fotka vikariátu Hradec Králové",
  },
  {
    path: "/assets/images/vikariaty-skupinove/vikariaty_skupinove_04.jpg",
    alt: "Skupinová fotka vikariátu Náchod",
  },
  {
    path: "/assets/images/vikariaty-skupinove/vikariaty_skupinove_05.jpg",
    alt: "Skupinová fotka vikariátu Litomyšl",
  },
  {
    path: "/assets/images/vikariaty-skupinove/vikariaty_skupinove_06.jpg",
    alt: "Skupinová fotka vikariátu Trutnov",
  },
  {
    path: "/assets/images/vikariaty-skupinove/vikariaty_skupinove_07.jpg",
    alt: "Skupinová fotka vikariátu Pardubice",
  },
  {
    path: "/assets/images/vikariaty-skupinove/vikariaty_skupinove_08.jpg",
    alt: "Skupinová fotka vikariátu Chrudim",
  },
  {
    path: "/assets/images/vikariaty-skupinove/vikariaty_skupinove_09.jpg",
    alt: "Skupinová fotka vikariátu Humpolec",
  },
  {
    path: "/assets/images/vikariaty-skupinove/vikariaty_skupinove_10.jpg",
    alt: "Skupinová fotka vikariátu Jičín",
  },
  {
    path: "/assets/images/vikariaty-skupinove/vikariaty_skupinove_11.jpg",
    alt: "Skupinová fotka vikariátu Jilemnice",
  },
  {
    path: "/assets/images/vikariaty-skupinove/vikariaty_skupinove_12.jpg",
    alt: "Skupinová fotka vikariátu Ústí nad Orlicí",
  },
  {
    path: "/assets/images/vikariaty-skupinove/vikariaty_skupinove_13.jpg",
    alt: "Skupinová fotka vikariátu Rychnov nad Kněžnou",
  },
  {
    path: "/assets/images/vikariaty-skupinove/vikariaty_skupinove_14.jpg",
    alt: "Skupinová fotka vikariátu Žamberk",
  },
];

export const vikariaty = [
  {
    name: "Havlíčkův Brod",
    // description:
    //   "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: {
      name: "P. Ondřej Špinler",
      jpgPath: "/assets/images/vikariaty/spinler.jpg",
    },
    person1: {
      name: "Tereza Škarydová",
      jpgPath: "/assets/images/vikariaty/skarydova.jpg",
    },
    person2: {
      name: "Michaela Kuncová",
      jpgPath: "/assets/images/vikariaty/kuncova.jpg",
    },
    person3: {
      name: "Markéta Švecová",
      jpgPath: "/assets/images/vikariaty/svecova.jpg",
    },
    person4: {
      name: "Ondřej Švec",
      jpgPath: "/assets/images/vikariaty/svec.jpg",
    },
    social: {
      instagram: "https://www.instagram.com/vikariathb/",
      facebook: "https://www.facebook.com/groups/548072662069185/",
      web: "https://vikariathb8.webnode.cz/",
    },
  },
  {
    name: "Hradec Králové",
    // description:
    //   "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: {
      name: "P. Filip Dušek",
      jpgPath: "/assets/images/vikariaty/dusek.jpg",
    },
    person1: {
      name: "Marie Žídková",
      jpgPath: "/assets/images/vikariaty/zidkova.jpg",
    },
    person2: {
      name: "Martin Rychtár",
      jpgPath: "/assets/images/vikariaty/rychtar.jpg",
    },
    social: {
      instagram: "https://www.instagram.com/spolco_hk/",
      facebook: "https://www.facebook.com/groups/260115334018659/",
    },
  },
  {
    name: "Humpolec",
    // description:
    //   "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: {
      name: "P. David Peter Palušák",
      jpgPath: "/assets/images/vikariaty/palusak.jpg",
    },
    person1: {
      name: "Anna Daňková",
      jpgPath: "/assets/images/vikariaty/dankova.jpg",
    },
    person2: {
      name: "Ladislav Nečil",
      jpgPath: "/assets/images/vikariaty/necil.jpg",
    },
    person3: {
      name: "Jan Prášek",
      jpgPath: "/assets/images/vikariaty/prasek.jpg",
    },
    person4: {
      name: "Matěj Žák",
      jpgPath: "/assets/images/vikariaty/zak.jpg",
    },        
    social: {
      instagram: "https://www.instagram.com/vikariathumpolec/",
      facebook: "https://www.facebook.com/groups/228568637237522",
      web: "https://www.vikariat-humpolec.cz/",
    },
  },
  {
    name: "Chrudim",
    // description:
    //   "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: {
      name: "P. František Zloch",
      jpgPath: "/assets/images/vikariaty/zloch.jpg",
    },
    person1: {
      name: "Anežka Ježková",
      jpgPath: "/assets/images/vikariaty/jezkova.jpg",
    },
    person2: {
      name: "Martina Marková",
      jpgPath: "/assets/images/vikariaty/markova.jpg",
    },
    social: {
      instagram: "https://www.instagram.com/vikariat_chrudim/",
      facebook: "https://www.facebook.com/profile.php?id=100080191366478",
      web: "https://vikariat-chrudim.webnode.cz/",
    },
  },
  {
    name: "Jičín",
    // description:
    //   "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    coordinator: {
      name: "Jan Janoušek",
      jpgPath: "/assets/images/vikariaty/janousek.jpg",
    },
    person1: {
      name: "Žofie Nováková",
      jpgPath: "/assets/images/vikariaty/novakova.jpg",
    },
    person2: {
      name: "Martin Bičiště",
      jpgPath: "/assets/images/vikariaty/biciste.jpg",
    },
  },
  {
    name: "Jilemnice",
    // description:
    //   "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: {
      name: "P. Zdeněk Sedlák",
      jpgPath: "/assets/images/vikariaty/sedlak.jpg",
    },
    person1: {
      name: "Veronika Mejsnarová",
      jpgPath: "/assets/images/vikariaty/mejsnarova.jpg",
    },
    person2: {
      name: "Martina Urbanová",
      jpgPath: "/assets/images/vikariaty/urbanova.jpg",
    },
    social: {
      instagram: "https://www.instagram.com/studenecka_mladez/",
    },
  },
  {
    name: "Kutná Hora",
    // description:
    //   "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: {
      name: "P. Michal Šramko",
      jpgPath: "/assets/images/vikariaty/sramko.jpg",
    },
    person1: {
      name: "Alžbeta Hrabčáková",
      jpgPath: "/assets/images/vikariaty/hrabcakova.jpg",
    },
    person2: {
      name: "Pavel Vocl",
      jpgPath: "/assets/images/vikariaty/vocl.jpg",
    },
    social: {
      instagram: "https://www.instagram.com/vikariat_kh.podebrady/",
      facebook: "https://www.facebook.com/groups/636682046385559/",
    },
  },
  {
    name: "Litomyšl",
    // description:
    //   "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: {
      name: "P. Mariusz Jan Robak",
      jpgPath: "/assets/images/vikariaty/robak.jpg",
    },
    person1: {
      name: "Nina Kysilková",
      jpgPath: "/assets/images/vikariaty/kysilkova.jpg",
    },
    person2: {
      name: "Matyáš Juza",
      jpgPath: "/assets/images/vikariaty/juza.jpg",
    },
    social: {
      instagram: "https://www.instagram.com/vikariat_litomysl/",
      facebook: "https://www.facebook.com/groups/501810429948241/",
    },
  },
  {
    name: "Náchod",
    // description:
    //   "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: {
      name: "P. Jan Pecháček",
      jpgPath: "/assets/images/vikariaty/pechacek.jpg",
    },
    person1: {
      name: "Ma�dalena Čížková",
      jpgPath: "/assets/images/vikariaty/cizkova.jpg",
    },    
    person2: {
      name: "Kateřina Vydláková",
      jpgPath: "/assets/images/vikariaty/vydlakova.jpg",
    },
    person3: {
      name: "Michal Matyska",
      jpgPath: "/assets/images/vikariaty/matyska.jpg",
    },
    person4: {
      name: "Ondřej Nekvinda",
      jpgPath: "/assets/images/vikariaty/nekvinda.jpg",
    },    
    social: {
      instagram: "https://www.instagram.com/vikariat_nachod/",
      facebook: "https://www.facebook.com/groups/1286923881421794/",
      web: "https://callo.cz/",
    },
  },
  {
    name: "Pardubice",
    // description:
    //   "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: {
      name: "jáhen Jeroným Pelikovský",
      jpgPath: "/assets/images/vikariaty/pelikovsky.jpg",
    },
    person1: {
      name: "Tereza Nejezchlebová",
      jpgPath: "/assets/images/vikariaty/nejezchlebova.jpg",
    },
    person2: {
      name: "Terezie Traxlerová",
      jpgPath: "/assets/images/vikariaty/traxlerova.jpg",
    },    
    social: {
      instagram: "https://www.instagram.com/vikariat_pardubice/",
      youtube: "https://www.youtube.com/@vikariatpardubice",
    },
  },
  {
    name: "Rychnov nad Kněžnou",
    // description:
    //   "Jsme parta mladých katolíků, kteří se chtějí setkávat a&nbsp;sdílet spolu svoji víru v&nbsp;Boha. Tvoříme otevřené společenství pro všechny od 12 let a&nbsp;rádi mezi sebe přivítáme nové tváře.",
    priest: {
      name: "P. Jan Barborka",
      jpgPath: "/assets/images/vikariaty/barborka.jpg",
    },
    person1: {
      name: "Vít Petr",
      jpgPath: "/assets/images/vikariaty/vitpetr.jpg",
    },
    person2: {
      name: "Kamil Zahradník",
      jpgPath: "/assets/images/vikariaty/zahradnik.jpg",
    },
    social: {
      facebook: "https://www.facebook.com/groups/284859234960044",
      instagram: "https://www.instagram.com/vikariatrk/",
      web: "https://vikariatrychnov.webnode.cz/",
    },
  },
  {
    name: "Trutnov",
    // description:
    //   "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: {
      name: "jáhen Jiří Melichar",
      jpgPath: "/assets/images/vikariaty/melichar.jpg",
    },
    person1: {
      name: "Markéta Dušková",
      jpgPath: "/assets/images/vikariaty/duskova.jpg",
    },    
    person2: {
      name: "Alžběta Teperová",
      jpgPath: "/assets/images/vikariaty/teperova.jpg",
    },    
    person3: {
      name: "David Holubec",
      jpgPath: "/assets/images/vikariaty/holubec.jpg",
    },
    social: {
      instagram: "https://www.instagram.com/mvtrutnov/",
      facebook: "https://www.facebook.com/VikariatTrutnov",
      web: "https://callo.cz/",
    },
  },
  {
    name: "Ústí nad Orlicí",
    // description:
    //   "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: {
      name: "P. Jakub Brabenec",
      jpgPath: "/assets/images/vikariaty/brabenec.jpg",
    },
    person1: {
      name: "Jana Eliášová",
      jpgPath: "/assets/images/vikariaty/eliasova.jpg",
    },    
    person2: {
      name: "Natálie Lorencová",
      jpgPath: "/assets/images/vikariaty/lorencova.jpg",
    },    
    person3: {
      name: "Ondřej Novotný",
      jpgPath: "/assets/images/vikariaty/novotny.jpg",
    },
    person4: {
      name: "Ondřej Sýkora",
      jpgPath: "/assets/images/vikariaty/sykora.jpg",
    },    
    social: {
      instagram: "https://www.instagram.com/vikariat_ustinadorlici/",
      facebook: "https://www.facebook.com/profile.php?id=100087359571132",
    },
  },
  {
    name: "Žamberk",
    // description:
    //   "Virům silnými hornina snad geologickou kladení souvisela úhlem. Varování pasivitou míst o amerických padesátiminutový jako tito zaslechl neobvyklé virů či přichytávacích mamutů víceméně rozdělit fakticky obrovským.",
    priest: {
      name: "P. Karel Dvořák",
      jpgPath: "/assets/images/vikariaty/dvorak.jpg",
    },
    person1: {
      name: "Ma�dalena Hejná",
      jpgPath: "/assets/images/vikariaty/hejna.jpg",
    },
    person2: {
      name: "Tereza Vávrová",
      jpgPath: "/assets/images/vikariaty/vavrova.jpg",
    },
    person3: {
      name: "Vojtěch Faltus",
      jpgPath: "/assets/images/vikariaty/faltus.jpg",
    },
    social: {
      instagram: "https://www.instagram.com/vikariatzamberk/",
      facebook: "https://www.facebook.com/groups/320795192164/",
    },
  },
];
