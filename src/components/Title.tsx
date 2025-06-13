import React, { useState, useEffect } from "react";
import { styled } from "@stitches/react";
import { WeddingData } from "../types";

const Layout = styled("div", {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  margin: "0px auto",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 1
  }
});

const TitleWrapper = styled("div", {
  position: "absolute",
  width: "90%",
  maxWidth: "500px",
  top: "19%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "var(--white)",
  zIndex: 2,
  animation: "fadeIn 1.5s ease-in-out",
  "@keyframes fadeIn": {
    "0%": { opacity: 0, transform: "translate(-50%, -45%)" },
    "100%": { opacity: 1, transform: "translate(-50%, -50%)" }
  }
});

const BackgroundImage = styled("div", {
  width: "100%",
  height: "100%",
  backgroundImage: "url('./asset/og_title_1.JPG')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  filter: "brightness(0.9)",
});

const WeddingInvitation = styled("p", {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "2rem",
  marginBottom: "1.5rem",
  fontWeight: 300,
  letterSpacing: "3px",
  color: "var(--white)",
});

const GroomBride = styled("p", {
  fontSize: "1.6rem",
  fontWeight: 400,
  margin: "-1.5rem 0",
  fontFamily: "'Noto Sans KR', sans-serif",
  letterSpacing: "1px",
  position: "relative",
  paddingBottom: "1.5rem",
  animation: "shimmer 3s infinite",
  background: "linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.8) 100%)",
  backgroundSize: "200% 100%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textShadow: "0 0 8px rgba(255, 255, 255, 0.5)",
  "@keyframes shimmer": {
    "0%": { backgroundPosition: "0% 50%" },
    "100%": { backgroundPosition: "200% 50%" }
  }
});

const Schedule = styled("div", {
  position: "absolute",
  fontSize: "1.1rem",
  marginTop: "399px",
  marginLeft: "8px",
  lineHeight: 1.6,
  fontWeight: 300,
  "& .date": {
    marginBottom: "0.5rem",
  },
  "& .location": {
    fontWeight: 400,
  }
});

const DownArrow = styled("div", {
  position: "absolute",
  bottom: "30px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 2,
  animation: "bounce 2s infinite",
  cursor: "pointer",
  color: "var(--white)",
  fontSize: "1.5rem",
  opacity: 0.8,
  "@keyframes bounce": {
    "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0) translateX(-50%)" },
    "40%": { transform: "translateY(-15px) translateX(-50%)" },
    "60%": { transform: "translateY(-8px) translateX(-50%)" }
  }
});


type TitleProps = {
  data?: WeddingData;
};

export default function Title({ data }: TitleProps) {


  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <Layout>
      <BackgroundImage />
      <TitleWrapper>
        {/* <WeddingInvitation>Wedding Invitation</WeddingInvitation>
        <GroomBride>
          {data?.groom?.name} & {data?.bride?.name}
        </GroomBride> */}
        <Schedule>
          <div className="date">{data?.date}</div>
          <div className="location">{data?.location}</div>
        </Schedule>
      </TitleWrapper>
      <DownArrow onClick={scrollToContent}>
        <i className="fas fa-chevron-down"></i>
      </DownArrow>
    </Layout>
  );
}
