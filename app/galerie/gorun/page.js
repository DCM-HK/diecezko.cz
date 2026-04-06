"use client";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Container from "../../../components/layouts/container";
import ContainerTitle from "../../../components/layouts/container-title";
import ContainerDescription from "../../../components/layouts/container-description";
import PageMain from "../../../components/layouts/page-main";
import Link from "next/link";
import { photos_gorun } from "../../../components/photos";
import { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Lightbox from "yet-another-react-lightbox";
import PhotoAlbum from "react-photo-album";
import ContainerUl from "../../../components/layouts/container-ul";
import ContainerLi from "../../../components/layouts/container-li";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconPhoto,
  IconCamera,
} from "@tabler/icons";

export default function Galerie() {
  const [index, setIndex] = useState(-1);
  return (
    <main className="ease-in-out duration-300 font-titilliumWeb">
      <Header />
      <PageMain>
        <Container>
          <ContainerTitle>�alerie</ContainerTitle>
          <ContainerDescription>
            Zavzpomínej na Diecézko 2026, které pro nás nafotil{" "}
            <Link
              href={`https://www.facebook.com/gorunmatous`}
              target="_blank"
              rel="external noopener nofollow"
              className="underline"
            >
              Matouš �orun
            </Link>.
            <MatousLinks />
            <p className="my-2 w-full"></p>
            <PhotoAlbum
              layout="masonry"
              photos={photos_gorun}
              onClick={({ index: current }) => setIndex(current)}
              />
            <Lightbox
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              slides={photos_gorun}
              plugins={[Counter, Fullscreen, Thumbnails]}
              counter={{ container: { style: { top: "unset", bottom: 0 } } }}
              thumbnails={{ border: 0, gap: 4 }}
            />
            <MatousLinks />
          </ContainerDescription>
        </Container>
      </PageMain>
      <Footer />
    </main>
  );
}


export function MatousLinks() {
  return (
    <ContainerUl className={`!list-none !pl-0 mb-6`}>
      <ContainerLi className="mt-2">
        <Link
          href={`https://facebook.com/vesmirnakapela`}
          target="_blank"
          rel="external noopener nofollow"
          title="Facebook"
        >
          <IconBrandFacebook className="inline mr-2" size={30} />
        </Link>
        <Link
          href={`https://www.instagram.com/matous_gorun/`}
          target="_blank"
          rel="external noopener nofollow"
          title="Instagram"
        >
          <IconBrandInstagram className="inline mr-2" size={30} />
        </Link>
        <Link
          href={`https://eu.zonerama.com/matousgorun/1348342`}
          target="_blank"
          rel="external noopener nofollow"
          title="Webové stránky"
        >
          <IconCamera className="inline mr-2" size={30} />
        </Link>
        <Link
          href={`https://www.youtube.com/@matousgorun9082`}
          target="_blank"
          rel="external noopener nofollow"
          title="Youtube kanál"
        >
          <IconBrandYoutube className="inline mr-2" size={30} />
        </Link>
      </ContainerLi>
    </ContainerUl>
  );
}