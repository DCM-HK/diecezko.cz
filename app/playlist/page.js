import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "../../components/layouts/container";
import ContainerTitle from "../../components/layouts/container-title";
import PageMain from "../../components/layouts/page-main";
import ContainerParagraph from "../../components/layouts/container-paragraph";
import Link from "next/link";
import IconCustomProScholy from "../../components/images/pro-scholy";
import ContainerH2 from "../../components/layouts/container-h2";

export default function Playlist() {
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Playlist na mši svatou</ContainerTitle>
          <ContainerParagraph>
            Texty písniček najdeš buďto ve zpěvníku pro scholy nebo níže.
          </ContainerParagraph>
          <Link
            href={`/assets/playlist/2026_mse_updated.proscholy`}
            target="_blank"
            download="2026_mse.proscholy"
          >
            <button className="border border-[#3b3b3b] hover:bg-[#3b3b3b] rounded-full p-2 px-3 cursor-pointer text-base flex flex-row items-center justify-center mb-2 mr-2">
              <IconCustomProScholy className="w-8" />
              Otevřít playlist na mši
            </button>
          </Link>
          <ContainerH2>Blahoslavení milosrdní</ContainerH2>
          <ContainerParagraph>
            1. K výšinám své oči pozvedám,
            <br />
            koho bych se bál?
            <br />
            Pomocnou ruku dá mi sám
            <br />
            milostivý Král.
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            2. Když umdléváme, staví nám stan,
            <br />
            léčí nás jeho hlas.
            <br />
            Chladí nám rány krví svých ran,
            <br />
            pláštěm halí nás.
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            R: Milosrdní jsoublahoslavení,
            <br />
            protože oni dojdou milosrdenství.
            <br />
            Milosrdní jsoublahoslavení,
            <br />
            protože oni dojdou milosrdenství.
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            3. Laskavě nám viny promíjí,
            <br />
            učí nás odpouštět,
            <br />
            nabízí lásku tak,
            <br />
            aby ji poznal celý svět.
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            4. Dřevěný kříž zbavil lidstvo vin,
            <br />
            vstal z mrtvých náš Pán.
            <br />
            Ježíš je Bůh,
            <br />
            světlo střídá stín, světu vládne Král.
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            B:  Přestaňse bát aBohu dej
            <br />
            svá trápení i žal avěř,
            <br />
            že Bůh očistilnáš hřích,
            <br />
            náš Pán žije dál.
            <br />
          </ContainerParagraph>
          <ContainerH2>Chválu vzdám</ContainerH2>
          <ContainerParagraph>
            R: Vzdám, chválu vzdávám,
            <br />
            bez Tebe už více nechci žít,
            <br />
            s Tebou vlnám odolávám,
            <br />
            přicházíš bouře utišit,
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            1. Zvu Tě Pane, plav se se mnou
            <br />
            mojí lodí rozkymácenou.
            <br />
            Po Tobě toužím, po Tobě prahnu,
            <br />
            Ty jsi smysl mých zašedlých dnů.
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            2. Tiše vcházíš, slyším slova tvá,
            <br />
            pokoj dáváš, když bloudím ve vlnách.
            <br />
            Jsi tak blízko, jsi mezi námi,
            <br />
            dotýkáš se nás, proměň nás.
            <br />
          </ContainerParagraph>
          <ContainerH2>Ať požehnán je Bůh</ContainerH2>
          <ContainerParagraph>
            1. Ať požehnán je Bůh,
            <br />
            tam kde je zem úrodná,
            <br />
            tam kde hojnost přebývá,
            <br />
            požehnán buď Pán!
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            2. Ať požehnán je Bůh,
            <br />
            tam kde je zem nevlídná,
            <br />
            má duše žízní vyprahlá,
            <br />
            požehnán buď Pán!
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            Vše, co dáváš ze Tvých dlaní,
            <br />
            s díky přijímám.
            <br />
            Všechno měníš v požehnání,
            <br />
            chválu Ti vzdám!
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            R: Buď požehnané slavné jméno Tvé,
            <br />
            Buď požehnaný Pán! 
            <br />
            Buď požehnané slavné jméno Tvé,
            <br />
            Buď požehnaný svatý pánů Pán!
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            3. Ať požehnán je Bůh,
            <br />
            když slunce svítí nad hlavou
            <br />
            a život zdá se zábavou,
            <br />
            požehnán buď Pán!
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            4. Ať požehnán je Bůh,
            <br />
            když dny jsou plné strádání,
            <br />
            když žal se skrývá v dávání,
            <br />
            požehnán buď Pán!
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            Vše, co dáváš ze Tvých dlaní,
            <br />
            s díky přijímám.
            <br />
            Všechno měníš v požehnání,
            <br />
            chválu Ti vzdám!
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            B: Dáš a vezmeš sám můj
            <br />
            pád i vítězství,
            <br />
            v mém srdci stále zní
            <br />
            jen slova žehnání.
            <br />
          </ContainerParagraph>
          <ContainerH2>Na oltář</ContainerH2>
          <ContainerH2>Dary (Z mnoha zrn)</ContainerH2>
          <ContainerParagraph>
            1. Z mnoha zrn se stal jeden chléb,
            <br />
            co naši duši z prachu povýší,
            <br />
            naplní radostí, pokojem,
            <br />
            k životu v nebi nás přiblíží.
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            R: Láskou proměň nám,
            <br />
            to, co zde přinášíme,
            <br />
            Tvé se staň.
            <br />
            Dej ať jsme jedno tělo, jeden chrám,
            <br />
            my děti Tvé, Ty náš pán.
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            2. Z hroznů za pár chvil budekrev,
            <br />
            která nás uzdraví a očistí,
            <br />
            zahojí bolesti, pády, hněv
            <br />
            a svou blízkostí nás utiší.
            <br />
          </ContainerParagraph>
          <ContainerH2>Nik nie je ako On</ContainerH2>
          <ContainerParagraph>
            1.  Jelen jeden na tróne
            <br />
            Ježiš, Svätý
            <br />
             LenOn je hoden chvál
            <br />
            Úcty a slávy
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            R: Hoden Baránok
            <br />
            Bol zabitý, no zasadol na trón
            <br />
            Nik nie je ako On
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            Celé  stvorenstvá
            <br />
            V kolenách a chvália Jeho len
            <br />
            Nik nie je ako On
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            B: Si Kráľom všetkej slávy
            <br />
            Si Kráľom všetkej slávy
            <br />
            Si Kráľom všetkej slávy
            <br />
            Si kráľom nad všetkým
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            Si Kráľom hodným chvály
            <br />
            Si Kráľom hodným chvály
            <br />
            Si Kráľom hodným chvály
            <br />
            Si Kráľom nad všetkým
            <br />
          </ContainerParagraph>
          <ContainerH2>Neboj se, já budu s Tebou</ContainerH2>
          <ContainerParagraph>
            1. Často já pocit mám,
            <br />
            že když jdu, klopýtám.
            <br />
            Mnohdy sám toužím dát
            <br />
            světu to, co nemám sám.
            <br />
            Ale proč málo znám toho,
            <br />
            co by mi pomohl rád?
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            Ale proč slovo chci polykám,
            <br />
            když se mě ptá,
            <br />
            zda chci jít světem s ním?
            <br />
            Snad jsem ještě mladý,
            <br />
            snad bojím se vstát.
            <br />
            Prý stačí jen chtít
            <br />
            a s ním promlouvat. 
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            R: Neboj se, člověče,
            <br />
            životem svým netrap se.
            <br />
            Neboť všude kam tě pošlu tam půjdeš,
            <br />
            a co ti přikážu řekneš.
            <br />
            Neboj se, já budu s Tebou!
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            2. Když vidím zlo, jenž v srdci bolí,
            <br />
            pak nevím, zda řešit, čas možná to zhojí. 
            <br />
            Bůh mne zasadil jak zrno úrodné,
            <br />
            dal mi vláhu, pole příhodné.
            <br />
            Abych rostl a sílil a jemu se líbil
            <br />
            a nebál se přinést užitek. 
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            B: Chválím tě otče
            <br />
            za ruku ochrannou.
            <br />
            Jenž vede nás,
            <br />
            stále vede nás za tebou.
            <br />
            Dík, že mne nenecháš
            <br />
            zkouškami projít,
            <br />
            aniž bych nepoznal Tvou vůli.
            <br />
          </ContainerParagraph>
          <ContainerH2>Jen v Tebe důvěru mám</ContainerH2>
          <ContainerParagraph>
            1. Uprostřed zkoušek a všech nesnází
            <br />
            jen v Tebe důvěru mám.
            <br />
            Když skoro vůbec nic mi nevychází,
            <br />
            jen v Tebe důvěru mám.
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            R: Ó, Hospodine,
            <br />
            jen v Tebe důvěru mám.
            <br />
            Ó, Hospodine,
            <br />
            jen v Tebe důvěru mám.
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            2. Když mračna stahují se nad mou hlavou,
            <br />
            jen v Tebe důvěru mám,
            <br />
            pak místo deště slzy z očí kanou,
            <br />
            jen v Tebe důvěru mám.
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            3. Když do mysli se vkrádá porážky stín,
            <br />
            jen v Tebe důvěru mám,
            <br />
            zas k Tobě přijdu s prostou vírou, že smím,
            <br />
            když v Tebe důvěru mám.
            <br />
          </ContainerParagraph>
          <ContainerH2>Řeknu všem</ContainerH2>
          <ContainerParagraph>
            1. Tady jsem a dnes nechci skrývat,
            <br />
            ani popírat pravdu, o které jsem přesvědčen. 
            <br />
            Tady jsem připraven všechny lidi vyzvat,
            <br />
            pojďme přiznat, komu patří naše zem. 
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            Dnes se nechci bát nahlas najevo dát,
            <br />
            komu chci tuhle píseň hrát.
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            R: Řeknu všem jsem přesvědčen,
            <br />
            že existuje ten, který stojí za tím,
            <br />
            že tahleta zem a v ní všechno není tady omylem,
            <br />
            že život není náhoda jen, že nás všechny tady chtěl.
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            B: Proto chceme v rytmu hudby chválit Pána,
            <br />
            celému světu pojďme říct, že není důvod bez radosti žít.
            <br />
            V rytmu hudby chválit Pána, nepřestávat zpívat a hrát,
            <br />
            není nic, co by mohlo proti nám stát.
            <br />
          </ContainerParagraph>
          <ContainerH2>Den co den</ContainerH2>
          <ContainerParagraph>
            1. Jak to říct, nevím,
            <br />
            tysmi život dal a já
            <br />
            vyslovím stěží,
            <br />
            co to pro mě znamená,
            <br />
            že jsi mou záchranou.
            <br />
            Všechno, co jsem, chci ti dát,
            <br />
            ať každý den můžu
            <br />
            vzhlížet na tvůj majestát!
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            R: Den co den sev tobě ztrácím.
            <br />
            Den co den jdustále za tebou.
            <br />
            Den co den chci ve tvé lásce stát!
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            2. Den co den zkouším,
            <br />
            zkouším ve tvém jménu stát,
            <br />
            s pokorou prosím, abych moh tě více znát.
            <br />
            Dávno vím, máme každou hodinou k sobě blíž,
            <br />
            jdeme, chci být světlem a ne tmou!
            <br />
          </ContainerParagraph>
          <ContainerParagraph>
            B: ...se v tobě ztrácím den co den...
            <br />
            za tebou stále den co den...
            <br />
            jsem ve tvé lásce den co den...
            <br />
          </ContainerParagraph>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
