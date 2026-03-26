"use client";

import L from "leaflet";
import { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

const communityIcon = L.divIcon({
  html: `
    <div
      style="
        align-items:center;
        background:#111827;
        border:3px solid #ffffff;
        border-radius:9999px;
        box-shadow:0 12px 24px rgba(15, 23, 42, 0.28);
        display:flex;
        height:44px;
        justify-content:center;
        width:44px;
      "
    >
      <img
        src="/assets/images/icon_user_group.svg"
        alt=""
        aria-hidden="true"
        style="
          color:#ffffff;
          display:block;
          height:30px;
          width:30px;
        "
      />
    </div>
  `,
  className: "",
  iconSize: [44, 44],
  iconAnchor: [22, 22],
  popupAnchor: [0, -18],
});

function MapCommunitiesBounds() {
  const map = useMap();

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      map.invalidateSize();
      map.fitBounds(
        L.latLngBounds(communityPoints.map(({ lat, lng }) => [lat, lng])),
        {
          padding: [24, 24],
        }
      );
    });

    return () => window.cancelAnimationFrame(animationFrame);
  }, [map]);

  return null;
}

export default function MapCommunities() {
  return (
    <>
      <MapCommunitiesBounds />
      {communityPoints.map((community, index) => (
        <Marker
          key={`${community.vikariat}-${community.farnost}-${community.typ}-${index}`}
          position={[community.lat, community.lng]}
          icon={communityIcon}
          title={`${community.mesto} - ${community.typ}`}
        >
          <Popup keepInView={true}>
            <div className="min-w-[200px] font-titilliumWeb text-sm text-black">
              <h2 className="mb-2 text-base font-bold">
                {community.typ == "Klasické" ? "Spolčo" : community.typ + " spolčo"}{" "}
                {community.mesto}
              </h2>
              <lu className="list-inside list-none">
              <li>
              {community.pravidelnost ? (
                community.pravidelnost + " "
                ) : null}
              {community.misto ?
                community.misto
                : null}
              </li>
              <li>
                <span className="font-semibold">Farnost:</span> {community.farnost}
              </li>
              <li>
                <span className="font-semibold">Vikariát:</span> {community.vikariat}
              </li>
              </lu>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}

const communities = [
  {
    "vikariat": "Náchod",
    "farnost": "Náchod",
    "mesto": "Náchod",
    "misto": "na faře",
    "pravidelnost": "1x za týden ",
    "typ": "Klasické",
    "x": "50.417103",
    "y": "16.162626"
  },
  {
    "vikariat": "Náchod",
    "farnost": "Náchod",
    "mesto": "Náchod",
    "misto": "na faře",
    "pravidelnost": "1x za týden ",
    "typ": "Dětské",
    "x": "50.417118",
    "y": "16.162704"
  },
  {
    "vikariat": "Náchod",
    "farnost": "Náchod",
    "mesto": "Náchod",
    "misto": "na faře",
    "pravidelnost": "1x za 14 dní",
    "typ": "Starší",
    "x": "50.417217",
    "y": "16.162594"
  },
  {
    "vikariat": "Náchod",
    "farnost": "Nové Město nad Metují",
    "mesto": "Nové Město nad Metují",
    "misto": "na faře",
    "pravidelnost": "1x za týden ",
    "typ": "Klasické",
    "x": "50.343460",
    "y": "16.152756"
  },
  {
    "vikariat": "Náchod",
    "farnost": "Nové Město nad Metují",
    "mesto": "Nové Město nad Metují",
    "misto": "na faře",
    "pravidelnost": "1x za týden ",
    "typ": "Dětské",
    "x": "50.343414",
    "y": "16.152832"
  },
  {
    "vikariat": "Náchod",
    "farnost": "Hronov",
    "mesto": "Hronov",
    "misto": "na faře",
    "pravidelnost": "1x za měsíc",
    "typ": "Dětské",
    "x": "50.482826",
    "y": "16.182490"
  },
  {
    "vikariat": "Náchod",
    "farnost": "Hronov",
    "mesto": "Hronov",
    "misto": "na faře",
    "pravidelnost": "1x za měsíc",
    "typ": "Klasické",
    "x": "50.482815",
    "y": "16.182339"
  },
  {
    "vikariat": "Náchod",
    "farnost": "Červený Kostelec",
    "mesto": "Červený Kostelec",
    "misto": "na faře",
    "pravidelnost": "1x za 14 dní",
    "typ": "Klasické",
    "x": "50.476580",
    "y": "16.094300"
  },
  {
    "vikariat": "Trutnov",
    "farnost": "Trutnov I",
    "mesto": "Trutnov",
    "misto": "na faře",
    "pravidelnost": "2x za měsíc",
    "typ": "Dětské",
    "x": "50.561672",
    "y": "15.914436"
  },
  {
    "vikariat": "Trutnov",
    "farnost": "Trutnov I",
    "mesto": "Trutnov",
    "misto": "na faře",
    "pravidelnost": "1x za týden ",
    "typ": "Klasické",
    "x": "50.561676",
    "y": "15.914350"
  },
  {
    "vikariat": "Trutnov",
    "farnost": "Rtyně v Podkrkonoší",
    "mesto": "Rtyně v Podkrkonoší",
    "misto": "na faře",
    "pravidelnost": "1x za 14 dní",
    "typ": "Klasické",
    "x": "50.504333",
    "y": "16.070503"
  },
  {
    "vikariat": "Trutnov",
    "farnost": "Dvůr Králové nad Labem",
    "mesto": "Dvůr Králové",
    "misto": "na faře",
    "pravidelnost": "Příležitostně",
    "typ": "Klasické",
    "x": "50.433220",
    "y": "15.813199"
  },
  {
    "vikariat": "Hradec Králové",
    "farnost": "Hradec Králové I",
    "mesto": "Hradec Králové",
    "misto": "ve farní místnosti",
    "pravidelnost": "1x týden",
    "typ": "Klasické",
    "x": "50.209057",
    "y": "15.833635"
  },
  {
    "vikariat": "Hradec Králové",
    "farnost": "Hradec Králové I",
    "mesto": "Hradec Králové",
    "misto": "různě",
    "pravidelnost": "1x za měsíc",
    "typ": "Dětské",
    "x": "50.177185",
    "y": "15.854811"
  },
  {
    "vikariat": "Hradec Králové",
    "farnost": "Hradec Králové",
    "mesto": "Hradec Králové",
    "misto": "",
    "pravidelnost": "",
    "typ": "SALAŠ",
    "x": "50.209175",
    "y": "15.834088"
  },
  {
    "vikariat": "Pardubice",
    "farnost": "Opatovice nad Labem",
    "mesto": "Opatovice nad Labem",
    "misto": "na faře",
    "pravidelnost": "1x za 14 dní",
    "typ": "Klasické",
    "x": "50.158500",
    "y": "15.781360"
  },
  {
    "vikariat": "Litomyšl",
    "farnost": "Dolní Újezd",
    "mesto": "Dolní Újezd",
    "misto": "na faře",
    "pravidelnost": "1x za měsíc",
    "typ": "Klasické",
    "x": "49.825684",
    "y": "16.253332"
  },
  {
    "vikariat": "Litomyšl",
    "farnost": "Dolní Újezd",
    "mesto": "Dolní Újezd",
    "misto": "na faře",
    "pravidelnost": "1x za měsíc",
    "typ": "Dětské",
    "x": "49.825680",
    "y": "16.253230"
  },
  {
    "vikariat": "Litomyšl",
    "farnost": "Bystré u Poličky",
    "mesto": "Trpín",
    "misto": "u vedoucích",
    "pravidelnost": "1x za týden ",
    "typ": "Dětské",
    "x": "49.593304",
    "y": "16.402647"
  },
  {
    "vikariat": "Jilemnice",
    "farnost": "Studenec u Horek",
    "mesto": "Studenec",
    "misto": "na faře",
    "pravidelnost": "1x za měsíc",
    "typ": "Klasické",
    "x": "50.547203",
    "y": "15.558942"
  },
  {
    "vikariat": "Pardubice",
    "farnost": "Pardubice",
    "mesto": "Pardubice",
    "misto": "u Salesiánů",
    "pravidelnost": "1x za týden ",
    "typ": "Klasické",
    "x": "50.021645",
    "y": "15.770626"
  },
  {
    "vikariat": "Pardubice",
    "farnost": "Pardubice",
    "mesto": "Pardubice",
    "misto": "na faře",
    "pravidelnost": "1x za týden",
    "typ": "SŠ",
    "x": "50.039127",
    "y": "15.777153"
  },
  {
    "vikariat": "Pardubice",
    "farnost": "Pardubice",
    "mesto": "Pardubice",
    "misto": "na faře",
    "pravidelnost": "1x za týden ",
    "typ": "VŠ",
    "x": "50.039120",
    "y": "15.777051"
  },
  {
    "vikariat": "Jičín",
    "farnost": "Hořice v Podkrkonoší",
    "mesto": "Hořice",
    "misto": "na faře",
    "pravidelnost": "1x za 14 dní",
    "typ": "Klasické",
    "x": "50.367115",
    "y": "15.632839"
  },
  {
    "vikariat": "Jičín",
    "farnost": "Jičín",
    "mesto": "Jičín",
    "misto": "na faře",
    "pravidelnost": "1x za 3 týdny",
    "typ": "Klasické",
    "x": "50.436066",
    "y": "15.353370"
  },
  {
    "vikariat": "Humpolec",
    "farnost": "Humpolec",
    "mesto": "Humpolec",
    "misto": "na faře",
    "pravidelnost": "1x za měsíc",
    "typ": "Klasické",
    "x": "49.541622",
    "y": "15.359990"
  },
  {
    "vikariat": "Humpolec",
    "farnost": "Humpolec",
    "mesto": "Humpolec",
    "misto": "na faře",
    "pravidelnost": "1x za měsíc",
    "typ": "Dětské",
    "x": "49.541620",
    "y": "15.360062"
  },
  {
    "vikariat": "Humpolec",
    "farnost": "Ledeč nad Sázavou",
    "mesto": "Ledeč nad Sázavou",
    "misto": "na faře",
    "pravidelnost": "1x za měsíc",
    "typ": "Dětské",
    "x": "49.695250",
    "y": "15.280953"
  },
  {
    "vikariat": "Humpolec",
    "farnost": "Ledeč nad Sázavou",
    "mesto": "Ledeč nad Sázavou",
    "misto": "na faře",
    "pravidelnost": "4x do roka",
    "typ": "Klasické",
    "x": "49.695300",
    "y": "15.281014"
  },
  {
    "vikariat": "Kutnohorsko-poděbradský",
    "farnost": "Čáslav",
    "mesto": "Čáslav",
    "misto": "na faře",
    "pravidelnost": "1x za 14 dní",
    "typ": "Klasické",
    "x": "49.910458",
    "y": "15.388709"
  },
  {
    "vikariat": "Kutnohorsko-poděbradský",
    "farnost": "Kutná Hora",
    "mesto": "Kutná Hora",
    "misto": "na faře",
    "pravidelnost": "1x za 14 dní",
    "typ": "Dětské",
    "x": "49.947975",
    "y": "15.267669"
  },
  {
    "vikariat": "Kutnohorsko-poděbradský",
    "farnost": "Kutná Hora",
    "mesto": "Kutná Hora",
    "misto": "na faře",
    "pravidelnost": "1x za 14 dní",
    "typ": "Klasické",
    "x": "49.947980",
    "y": "15.267758"
  },
  {
    "vikariat": "Havlíčkův Brod",
    "farnost": "Havlíčkův Brod",
    "mesto": "Havlíčkův Brod",
    "misto": "na faře",
    "pravidelnost": "1x za 14 dní",
    "typ": "Klasické",
    "x": "49.608170",
    "y": "15.580773"
  },
  {
    "vikariat": "Havlíčkův Brod",
    "farnost": "Krucemburk",
    "mesto": "Krucemburk",
    "misto": "na faře",
    "pravidelnost": "1x za týden",
    "typ": "Klasické",
    "x": "49.689540",
    "y": "15.851938"
  },
  {
    "vikariat": "Havlíčkův Brod",
    "farnost": "Krucemburk",
    "mesto": "Krucemburk",
    "misto": "na faře",
    "pravidelnost": "1x za týden",
    "typ": "Dětské",
    "x": "49.689540",
    "y": "15.851858"
  },
  {
    "vikariat": "Havlíčkův Brod",
    "farnost": "Přibyslav",
    "mesto": "Přibyslav",
    "misto": "na faře",
    "pravidelnost": "1x za měsíc",
    "typ": "Klasické",
    "x": "49.575783",
    "y": "15.737162"
  },
  {
    "vikariat": "Havlíčkův Brod",
    "farnost": "Přibyslav",
    "mesto": "Přibyslav",
    "misto": "na faře",
    "pravidelnost": "1x za týden",
    "typ": "Dětské",
    "x": "49.575780",
    "y": "15.737241"
  },
  {
    "vikariat": "Havlíčkův Brod",
    "farnost": "Polná",
    "mesto": "Polná",
    "misto": "na faře",
    "pravidelnost": "1x za 14 dní",
    "typ": "Klasické",
    "x": "49.487934",
    "y": "15.718385"
  },
  {
    "vikariat": "Havlíčkův Brod",
    "farnost": "Chotěboř",
    "mesto": "Chotěboř",
    "misto": "na faře",
    "pravidelnost": "1x za 14 dní",
    "typ": "Klasické",
    "x": "49.721878",
    "y": "15.670465"
  },
  {
    "vikariat": "Havlíčkův Brod",
    "farnost": "Nížkov",
    "mesto": "Nížkov",
    "misto": "na faře",
    "pravidelnost": "",
    "typ": "Klasické",
    "x": "49.531975",
    "y": "15.804463"
  },
  {
    "vikariat": "Chrudim",
    "farnost": "Skuteč",
    "mesto": "Skuteč",
    "misto": "na faře",
    "pravidelnost": "1x za měsíc",
    "typ": "Klasické",
    "x": "49.842040",
    "y": "15.997270"
  },
  {
    "vikariat": "Chrudim",
    "farnost": "Chrudim",
    "mesto": "Chrudim",
    "misto": "na faře",
    "pravidelnost": "",
    "typ": "Klasické",
    "x": "49.951336",
    "y": "15.796350"
  },
  {
    "vikariat": "Rychnov nad Kněžnou",
    "farnost": "Rychnov nad Kněžnou",
    "mesto": "Rychnov nad Kněžnou",
    "misto": "na faře",
    "pravidelnost": "1x za měsíc",
    "typ": "Dětské",
    "x": "50.161850",
    "y": "16.273306"
  },
  {
    "vikariat": "Žamberk",
    "farnost": "Dolní Čermná",
    "mesto": "Dolní Čermná",
    "misto": "na faře",
    "pravidelnost": "1x za 14 dní",
    "typ": "Klasické",
    "x": "49.980430",
    "y": "16.568943"
  },
  {
    "vikariat": "Žamberk",
    "farnost": "Letohrad",
    "mesto": "Letohrad",
    "misto": "na faře",
    "pravidelnost": "1x za měsíc",
    "typ": "Klasické",
    "x": "50.036410",
    "y": "16.499456"
  },
  {
    "vikariat": "Žamberk",
    "farnost": "Jabloné nad Orlicí",
    "mesto": "Jabloné nad Orlicí",
    "misto": "na faře",
    "pravidelnost": "1x za 3 týdny",
    "typ": "Klasické",
    "x": "50.029205",
    "y": "16.599567"
  },
  {
    "vikariat": "Žamberk",
    "farnost": "Žamberk",
    "mesto": "Žamberk",
    "misto": "na faře",
    "pravidelnost": "1x za týden",
    "typ": "Klasické",
    "x": "50.086600",
    "y": "16.463844"
  },
  {
    "vikariat": "Ústí nad Orlicí",
    "farnost": "Česká Třebová",
    "mesto": "Česká Třebová",
    "misto": "na faře",
    "pravidelnost": "1x za 14 dní",
    "typ": "Klasické",
    "x": "49.902900",
    "y": "16.446098"
  },
  {
    "vikariat": "Ústí nad Orlicí",
    "farnost": "Česká Třebová",
    "mesto": "Česká Třebová",
    "misto": "na faře",
    "pravidelnost": "1x za 14 dní",
    "typ": "Klasické",
    "x": "49.902893",
    "y": "16.446030"
  },
  {
    "vikariat": "Ústí nad Orlicí",
    "farnost": "České Heřmanice",
    "mesto": "České Heřmanice",
    "misto": "ve farním domečku",
    "pravidelnost": "1x za 14 dní",
    "typ": "Klasické",
    "x": "49.931957",
    "y": "16.253020"
  },
  {
    "vikariat": "Ústí nad Orlicí",
    "farnost": "Vysoké Mýto",
    "mesto": "Vysoké mýto",
    "misto": "na faře",
    "pravidelnost": "1x za měsíc",
    "typ": "Klasické",
    "x": "49.952152",
    "y": "16.159643"
  },
];

const communityPoints = communities.map((community) => ({
  ...community,
  lat: Number(community.x),
  lng: Number(community.y),
}));
