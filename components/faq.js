import FaqBox from "./layouts/faq-box";
import FaqLayout from "./layouts/faq-layout";
import Link from "next/link";
import Button from "./layouts/button";
import IconCustomDenikSracu from "./images/deniksracu";

export default function FAQ() {
  return (
    <FaqLayout>
      <FaqBox question={`Kde seženu zdravotní pomoc?`} icon={`medical`}>
        V případě jakéhokoliv zdravotního problému se neváhej obrátit na naši{" "}
        <strong>zdravotnickou službu</strong>, kterou poznáš podle oblečení
        a&nbsp;dostihneš ji na tel.{" "}
        <Link href={`tel:+420737761893`} className="underline">
          737 761 893
        </Link>{" "}
        . V&nbsp;závažných případech neváhej a&nbsp;volej IZS na tel. číslo{" "}
        <Link href={`tel:155`} className="underline">
          155
        </Link>
        .
      </FaqBox>
      <FaqBox question={`Kolik Diecézko stojí?`} icon={`money`}>
        Doporučený příspěvek je <strong>200,-Kč na osobu</strong>. Je možné ho
        zaplatit na recepci ve Filharmonii při dopoledním programu.
      </FaqBox>
      <FaqBox question={`Co si sbalit s sebou?`} icon={`luggage`}>
        Sváču, láhev s&nbsp;pitím, doporučený příspěvek (200,-Kč), peníze na
        svoji dopravu a&nbsp;drobný peníz v&nbsp;případě zájmu zajít do kavárny
        na BiGy. Doporučujeme si také vzít něco teplého na závěrečnou mši svatou
        do katedrály. Může být zima.
      </FaqBox>
      <FaqBox question={`Od kolika let můžu jet na Diecézko?`} icon={`kid`}>
        Doporučený věk k&nbsp;účasti na setkání je{" "}
        <strong>od 14 do 26 let</strong> (mládež ve věku od 12 do 13 let pouze
        s&nbsp;doprovodem staršího sourozence nebo kamaráda). Pokud nesplňuješ
        horní hranici, neváhej se přihlásit do přípravného týmu:{" "}
        <Link
          className="underline"
          href={`https://forms.gle/M4Pc27SiqY9Wa7u87`}
          target="_blank"
          rel="external noopener nofollow"
        >
          přihláška do přípraváku
        </Link>
        .
      </FaqBox>
      <FaqBox question={`Jak se přihlásím?`} icon={`pencil`}>
        Jednoduše,{" "}
        <strong>
          vyplň{" "}
          <Link
            href="https://forms.gle/aMQor8ARxaULdD8t7"
            rel="external noopener nofollow"
            target="_blank"
            className="underline"
          >
            přihlášku
          </Link>
        </strong>
        &nbsp;a&nbsp;budeme s&nbsp;Tebou počítat. Na Diecézko se přihlas do
        20.&nbsp;11.&nbsp;2023, abychom Ti stihli zajistit bagetu a&nbsp;pitíčko
        k&nbsp;obědu. <strong>Nestihl/a ses přihlásit v daném termínu?</strong>{" "}
        Nevadí, i&nbsp;tak s&nbsp;tebou <strong>počítáme</strong>. Objednali
        jsme bagety navíc. Prosíme, i&nbsp;nadále vyplň přihlášku, ať víme, že
        dorazíš. Děkujeme 😊{" "}
      </FaqBox>
      <FaqBox question={`Jak se přihlásit na odpolední program?`} icon={`old`}>
        <strong>Při východu z Filharmonie</strong> si kromě bagety
        a&nbsp;pitíčka budeš moci vybrat odpolední program. Ideálně si téma
        promysli dopředu, ať se nemusíš rozmýšlet na poslední chvíli. Na místo
        programu se půjde společně. Neboj, nezabloudíš 😉
      </FaqBox>
      <FaqBox question={`Jak bude zajištěno stravování?`} icon={`chef`}>
        Doporučujeme si s&nbsp;sebou přivézt svačinku. Pro všechny, kteří se
        včas přihlásili, <strong>bude k&nbsp;obědu bageta</strong>. Pokud máte
        dietu, napište nám do{" "}
        <Link
          href="https://forms.gle/aMQor8ARxaULdD8t7"
          rel="external noopener nofollow"
          target="_blank"
          className="underline"
        >
          přihlášky
        </Link>
        . Pokud by vás odpoledne přepadla mlsná, je možné zajít i&nbsp;do naší
        kavárny.
        {
          // TODO: add link to kavarna
        }
      </FaqBox>
      <FaqBox question={`Jak se v Hradci dopravovat?`} icon={`bus`}>
        Hradec Králové je malej, <strong>choďte pěšky</strong>!
      </FaqBox>
      <FaqBox question={`Kam si odskočit na záchod?`} icon={`toilet`}>
        Nezoufej, mrkni na{" "}
        <Link
          href="https://deniksracu.cz/"
          target="_blank"
          rel="external"
          className="underline font-semibold"
        >
          deník sráčů
        </Link>{" "}
        a&nbsp;najdi si nejbližsí tolatu, která bude vyhovovat tvým požadavkům.
      </FaqBox>
    </FaqLayout>
  );
}
