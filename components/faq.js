import FaqBox from "./layouts/faq-box";
import FaqLayout from "./layouts/faq-layout";
import Link from "next/link";
import ContainerH3 from "./layouts/container-h3";
import ContainerOl from "./layouts/container-ol";
import ContainerLi from "./layouts/container-li";

export default function FAQ() {
  return (
    <FaqLayout>
      <FaqBox question={`Kde seženu zdravotní pomoc?`} icon={`medical`}>
        V případě jakéhokoliv zdravotního problému se neváhej obrátit na naši{" "}
        <strong>zdravotnickou službu</strong>, kterou poznáš podle oblečení
        {/*a&nbsp;dostihneš ji na tel. čísle{" "}
        <Link href={`tel:+420605578474`} target="_blank" className="underline">
          605 578 474
        </Link>*/}
        . V&nbsp;závažných případech neváhej a&nbsp;volej IZS tel. číslem{" "}
        <Link href={`tel:155`} target="_blank" className="underline">
          155
        </Link>
        .
      </FaqBox>
      <FaqBox question={`Kolik Diecézko stojí?`} icon={`money`}>
        Doporučený příspěvek je <strong>200,-Kč na osobu</strong>. Je možné ho
        zaplatit v hotovosti na recepci ve Filharmonii při dopoledním programu.
      </FaqBox>
      <FaqBox question={`Desatero pravidel Diecézka`} icon={`notes`}>
        <ContainerOl>
          <ContainerLi className={`my-4`}>
            <strong>Dodržuj pokyny organizátorů</strong>
            <br />
            Respektuj pravidla a&nbsp;program setkání. Nevstupuj do prostor, do
            kterých není povolen vstup.
          </ContainerLi>
          <ContainerLi className={`my-4`}>
            <strong>Chovej se ohleduplně</strong>
            <br />
            Ber ohled na ostatní účastníky a&nbsp;okolní prostředí. Udržuj 
            pořádek. Buď trpělivý/á a&nbsp;pozorný/á. Vnímej snahu přednášejících
            předat ti to nejlepší. 
          </ContainerLi>
          <ContainerLi className={`my-4`}>
            <strong>Dbej na své zdraví</strong>
            <br />
            Pij dostatek vody, jez pravidelně a&nbsp;obleč se dle počasí.
            Dodržuj pravidla silničního provozu. Nezapomeň si vzít své léky.
          </ContainerLi>
          <ContainerLi className={`my-4`}>
            <strong>Měj u&nbsp;sebe kontakt na odpovědnou osobu</strong>
            <br />
            Vždy věz, koho kontaktovat v&nbsp;případě nouze.
          </ContainerLi>
          <ContainerLi className={`my-4`}>
            <strong>
              V&nbsp;případě problému si neváhej říct o&nbsp;pomoc
            </strong>
            <br />
            Organizátor, zdravotník či odpovědná osoba jsou připraveni pomoci.
            Neváhej je oslovit. V&nbsp;případě neakutních potíží volej
            zdravotníka na telefonním čísle uvedeném na webu{" "}
            <Link
              href={"https://diecezko.cz"}
              target="_blank"
              className="underline"
            >
              diecezko.cz
            </Link>
            .
          </ContainerLi>
          <ContainerLi className={`my-4`}>
            <strong>
              Měj u&nbsp;sebe doklady a&nbsp;kartičku zdravotní pojišťovny
            </strong>
            <br />
            Dále si případ nouze ulož číslo 155 na Zdravotnickou záchrannou
            službu. Též měj staženou a&nbsp;aktivovanou aplikaci Záchranka.
          </ContainerLi>
          <ContainerLi className={`my-4`}>
            <strong>Drž se skupiny</strong>
            <br />
            Neodcházej sám/sama bez domluvy s&nbsp;vedoucím tvé skupiny.
          </ContainerLi>
          <ContainerLi className={`my-4`}>
            <strong>Omezuj používání mobilu</strong>
            <br />
            Buď přítomný/á a&nbsp;vnímej atmosféru setkání. Neváhej aktivně
            oslovit účastníky okolo sebe.
          </ContainerLi>
          <ContainerLi className={`my-4`}>
            <strong>Žádný alkohol, cigarety ani jiné omamné látky</strong>
            <br />
            Takové věci by tě zbytečně rušily od duchovního prožitku
            a&nbsp;společenství.
          </ContainerLi>
          <ContainerLi className={`my-4`}>
            <strong>Dej prostor Duchu Svatému a&nbsp;užívej setkání!</strong>
            <br />
            Buď pozitivní a&nbsp;otevřený/á novým impulzům setkání. Načerpej
            povzbuzení a&nbsp;posilu do dalších dní.
          </ContainerLi>
        </ContainerOl>
      </FaqBox>
      <FaqBox question={`Co si sbalit s sebou?`} icon={`luggage`}>
        Sváču, láhev s&nbsp;pitím, doporučený příspěvek (200,-Kč), peníze na
        svoji dopravu. Doporučujeme si také vzít něco teplého na sebe na
        závěrečnou mši svatou do katedrály. Může být zima.
      </FaqBox>
      <FaqBox question={`Od kolika let můžu jet na Diecézko?`} icon={`kid`}>
        Doporučený věk k&nbsp;účasti na setkání je{" "}
        <strong>od 14 do 26 let</strong> (mládež ve věku od 12 do 13 let pouze
        s&nbsp;doprovodem staršího sourozence nebo kamaráda). Pokud nesplňuješ
        horní hranici, oceníme tvoji pomoc v&nbsp;přípravném týmu. Pokud máš zájem
        pomoci, vyplň{" "}
        <Link
          className="underline"
          href={`https://prihlaska.diecezko.cz/`}
          target="_blank"
          rel="external noopener nofollow"
        >
          přihlášku
        </Link>
        .
      </FaqBox>
      <FaqBox question={`Jak se přihlásím?`} icon={`pencil`}>
        Jednoduše,{" "}
        <strong>
          vyplň{" "}
          <Link
            href="https://prihlaska.diecezko.cz/"
            rel="external noopener nofollow"
            target="_blank"
            className="underline"
          >
            přihlášku
          </Link>
        </strong>
        &nbsp;a&nbsp;budeme s&nbsp;Tebou počítat. Na Diecézko se přihlas do
        22.&nbsp;3.&nbsp;2026, abychom Ti stihli zajistit bagetu a&nbsp;pitíčko
        k&nbsp;obědu. <br />
        {/* <strong>Nestihl/a ses přihlásit v daném termínu?</strong> Nevadí,
        i&nbsp;tak s&nbsp;tebou <strong>počítáme</strong>. Objednali jsme bagety
        navíc. Prosíme, i&nbsp;nadále vyplň přihlášku, ať víme, že dorazíš.
        Děkujeme 😊{" "} */}
      </FaqBox>
      <FaqBox question={`Jak se přihlásit na odpolední program?`} icon={`old`}>
        <strong>
          Při východu z{" "}
          <Link href={`/mapa?x=50.2138117&y=15.8291964`} className="underline">
            Filharmonie
          </Link>
        </strong>{" "}
        si kromě bagety a&nbsp;pitíčka budeš moci vybrat odpolední program.
        Ideálně si téma promysli dopředu, ať se nemusíš rozmýšlet na poslední
        chvíli. Na místo programu se půjde společně. Neboj, nezabloudíš. 😉
      </FaqBox>
      <FaqBox question={`Jak bude zajištěno stravování?`} icon={`chef`}>
        Doporučujeme si s&nbsp;sebou přivézt svačinku. Pro všechny, kteří se
        včas přihlásili, <strong>bude k&nbsp;obědu bageta</strong>. Pokud máte
        dietu, napište nám do{" "}
        <Link
          href="https://prihlaska.diecezko.cz/"
          rel="external noopener nofollow"
          target="_blank"
          className="underline"
        >
          přihlášky
        </Link>
        .
        {/* Pokud by vás odpoledne přepadla mlsná, je možné zajít i&nbsp;do naší{" "}
        <Link href={`/mapa?x=50.2062919&y=15.8337133`} className="underline">
          kavárny
        </Link>
        . */}
      </FaqBox>
      
      <FaqBox question={`Co je to PředDiecézko?`} icon={`users`}>
        Některé vikariáty pořádají menší setkání (tzv. vikariátko) den před
        Diecézkem a&nbsp;poté společně vyrážejí do Hradce Králové. Tomuto
        setkání říkáme PředDiecézko. Chceš zjistit, zda něco podobného
        organizuje i&nbsp;tvůj vikariát? Pro více informací se podívej na{" "}
        <Link
          href={`/preddiecezka`}
          target="_Self"
          className="underline font-semibold"
        >
          přehled PředDiecézek
        </Link>
        .
      </FaqBox>
      
      <FaqBox question={`Je organizována společná doprava?`} icon={`train`}>
        Některé vikariáty společnou dopravu organizují. Pro jasný přehled jsme
        pro Vás připravili{" "}
        <Link
          href={`/spolecna-doprava`}
          target="_Self"
          className="underline font-semibold"
        >
          rozcestník
        </Link>
        , který poradí, kdy a&nbsp;v&nbsp;kolik je sraz a&nbsp;jestli je nutné
        se někam hlásit.
      </FaqBox>
      
      <FaqBox question={`Jak se v Hradci dopravovat?`} icon={`bus`}>
        <ContainerH3>Stručně</ContainerH3>
        Hradec Králové je malej, <strong>choďte pěšky</strong>!
        <ContainerH3>
          Cesta z&nbsp;vlakového nádraží k&nbsp;Filharmonii
        </ContainerH3>
        Při východu z&nbsp;budovy vlakového nádraží přejdete zastávky autobusové
        dopravy a&nbsp;vydáte se rovně po ulici S.&nbsp;K.&nbsp;Neumanna, kterou se
        dostanete na náměstí 28.&nbsp;října. Dále půjdete podél obchodních domů TESCO
        a&nbsp;Atrium po ulici Dukelská třída a&nbsp;pomocí podchodu se
        dostanete na třídu Karla IV. Po ní půjdete až k&nbsp;řece, přejdete most
        a&nbsp;po levé straně uvidíte sportovní halu, za kterou se nachází
        Filharmonie. Zde na vás již budou čekat pořadatelé s&nbsp;dalšími
        informacemi. <br />
        Autobusy Hlavní nádraží – Muzeum
        <br />
        Zastávka A – 3, 16 <br />
        Zastávka D – 7, 11, 13
        <ContainerH3>
          Cesta z&nbsp;autobusového nádraží k Filharmonii
        </ContainerH3>
        Stojíte na autobusovém nádraží zády k obchodu LIDL, vydáte se doleva po
        ulici Nádražní a&nbsp;na křižovatce se dáte doprava na Blažíčkovo
        náměstí. Zde se na křižovatce vydáte doleva po ulici Hořická, po které
        dojdete až nakonec této ulice k&nbsp;pizzerii Casa Mia. Zde přejdete
        silnici až k&nbsp;pizzerii a&nbsp;pomocí podchodu se dostanete na třídu
        Karla&nbsp;IV. Po ní půjdete až k&nbsp;řece, přejdete most a&nbsp;po levé
        straně uvidíte sportovní halu, za kterou se nachází Filharmonie. Zde na
        vás již budou čekat pořadatelé s&nbsp;dalšími informacemi.
        <br />
        Autobusy Terminál HD – Muzeum
        <br />
        Zastávka D1 – 7<br />
        Zastávka D2 – 11, 13
      </FaqBox>
      <FaqBox question={`Kam si odskočit na záchod?`} icon={`toilet`}>
        Nezoufej, mrkni{" "}
        <Link
          href="https://deniksracu.cz/"
          target="_blank"
          rel="external"
          className="underline font-semibold"
        >
          sem
        </Link>{" "}
        a&nbsp;najdi si nejbližší trůn, který bude vyhovovat tvým požadavkům.
      </FaqBox>
    </FaqLayout>
  );
}
