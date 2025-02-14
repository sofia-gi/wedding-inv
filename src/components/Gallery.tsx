import React from 'react';
import ImageGallery from "react-image-gallery";
import { Divider } from "antd";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled("div", {
  background: "#efebe9",
  backgroundImage: "url(./assets/GroovePaper.png)",
  width: "100%",
});

const Title = styled("p", {
  fontSize: "2vh",
  fontWeight: "bold",
  opacity: 0.85,
  marginBottom: 0,
});

const images = [
  {
    original: "./asset/m0.jpg",
    thumbnail: "./asset/m0.jpg",
  },
  {
    original: "./asset/m2.jpg",
    thumbnail: "./asset/m2.jpg",
  },
  {
    original: "./asset/m3.jpg",
    thumbnail: "./asset/m3.jpg",
  },
  {
    original: "./asset/m1.jpg",
    thumbnail: "./asset/m1.jpg",
  },
  {
    original: "./asset/m4.jpg",
    thumbnail: "./asset/m4.jpg",
  },
  {
    original: "./asset/m5.jpg",
    thumbnail: "./asset/m5.jpg",
  },
];

export default function Gallery() {
  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
      />
    </Wrapper>
  );
}
