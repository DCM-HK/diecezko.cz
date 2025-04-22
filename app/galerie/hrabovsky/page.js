"use client";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Container from "../../../components/layouts/container";
import ContainerTitle from "../../../components/layouts/container-title";
import ContainerDescription from "../../../components/layouts/container-description";
import PageMain from "../../../components/layouts/page-main";
import Link from "next/link";
import { photos_hrabovsky } from "../../../components/photos";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";

export default function Galerie() {
  const [index, setIndex] = useState(-1);
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>Galerie</ContainerTitle>
          <ContainerDescription>
            Zavzpomínej na Diecézko 2025, které pro nás nafotil{" "}
            <Link
              href={`https://www.facebook.com/profile.php?id=100013329674785`}
              target="_blank"
              rel="external noopener nofollow"
              className="underline"
            >
              Petr Hrabovský
            </Link>{" "}(z <Link
              href={`https://www.clovekavira.cz/detail-galerie/7c6ec7eb-cedb-45a8-9986-721dd8696c00`}
              target="_blank"
              rel="external noopener nofollow"
              className="underline"
            >
              Člověk a Víra
            </Link>).
            <p className="my-2 w-full"></p>
            <PhotoAlbum
              layout="masonry"
              photos={photos_hrabovsky}
              onClick={({ index: current }) => setIndex(current)}
            />
            <Lightbox
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              slides={photos_hrabovsky}
              plugins={[Counter, Fullscreen, Thumbnails]}
              counter={{ container: { style: { top: "unset", bottom: 0 } } }}
              thumbnails={{ border: 0, gap: 4 }}
            />
          </ContainerDescription>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}
