"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MapCommunities from "./map-points-communities";

const MAPY_API_KEY = "ySlgpLUldI28IfMftEIEfES1i5Duc2mz4Id1qvbPOd8";

export default function CommunitiesMap() {
  return (
    <div className="mt-8 w-full overflow-hidden rounded-2xl border border-black/10 shadow-lg">
      <MapContainer
        center={[50.15, 15.8]}
        zoom={8}
        minZoom={7}
        maxZoom={18}
        scrollWheelZoom={true}
        dragging={true}
        className="h-[26rem] w-full diseable-map-selection z-0 md:h-[34rem]"
      >
        <TileLayer
          url={`https://api.mapy.cz/v1/maptiles/basic/256/{z}/{x}/{y}?apikey=${MAPY_API_KEY}`}
          attribution='<a href="https://api.mapy.cz/copyright" target="_blank" rel="noreferrer">&copy; Seznam.cz a.s. a další</a>'
        />
        <MapCommunities />
        <a
          href="https://mapy.cz/"
          target="_blank"
          rel="noreferrer nofollow"
          className="absolute bottom-0 z-[1000]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Mapy.cz logo" src="https://api.mapy.cz/img/api/logo.svg" />
        </a>
      </MapContainer>
    </div>
  );
}
