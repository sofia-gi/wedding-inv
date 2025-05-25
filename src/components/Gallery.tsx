import React from 'react';
import ImageGallery from "react-image-gallery";
import { styled } from "@stitches/react";
import "react-image-gallery/styles/css/image-gallery.css";

const Wrapper = styled("div", {
  background: "var(--white)",
  width: "100%",
  padding: "80px 0",
  position: "relative"
});

const Container = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '1rem',
});

const Title = styled("h2", {
  fontSize: "2rem",
  fontWeight: 500,
  color: "var(--accent-color)",
  textAlign: "center",
  marginBottom: "3rem",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "50px",
    height: "1px",
    backgroundColor: "var(--primary-color)"
  }
});

const GalleryWrapper = styled("div", {
  ".image-gallery": {
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    borderRadius: "6px",
    overflow: "hidden"
  },
  
  ".image-gallery-slide img": {
    height: "60vh",
    objectFit: "cover",
    
    "@media (max-width: 768px)": {
      height: "40vh",
    }
  },
  
  ".image-gallery-thumbnail": {
    border: "2px solid transparent",
    transition: "var(--transition)",
    
    "&.active, &:hover, &:focus": {
      border: "2px solid var(--primary-color)",
    }
  },
  
  ".image-gallery-thumbnail-image": {
    objectFit: "cover",
    height: "60px"
  },
  
  ".image-gallery-left-nav, .image-gallery-right-nav": {
    padding: "0 10px",
    
    "&::before": {
      color: "var(--white)",
      textShadow: "0 2px 5px rgba(0, 0, 0, 0.5)"
    }
  }
});
const images = Array.from({ length: 20 }, (_, i) => {
  const num = i + 1;
  return {
    original: `./asset/m${num}.jpg`,
    thumbnail: `./asset/m${num}.jpg`,
    originalAlt: "웨딩 사진",
    thumbnailAlt: "웨딩 사진 썸네일"
  };
});


export default function Gallery() {
  return (
    <Wrapper>
      <Container>
        <Title>우리의 아름다운 순간</Title>
        <GalleryWrapper>
          <ImageGallery
            showPlayButton={false}
            showFullscreenButton={true}
            showNav={true}
            showThumbnails={true}
            items={images}
            slideInterval={5000}
            thumbnailPosition="bottom"
          />
        </GalleryWrapper>
      </Container>
    </Wrapper>
  );
}
