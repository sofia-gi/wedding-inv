import React from "react";
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
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 1
  }
});

const TitleWrapper = styled("div", {
  position: "absolute",
  width: "90%",
  maxWidth: "600px",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "var(--white)",
  zIndex: 2,
  animation: "fadeIn 2s ease-in-out",
  "@keyframes fadeIn": {
    "0%": { opacity: 0, transform: "translate(-50%, -45%)" },
    "100%": { opacity: 1, transform: "translate(-50%, -50%)" }
  }
});

const VideoBackground = styled("video", {
  objectFit: "cover",
  objectPosition: "center center",
  width: "100%",
  height: "100%",
  minHeight: 480,
});

const WeddingInvitation = styled("p", {
  fontFamily: "'Great Vibes', cursive",
  fontSize: "2.5rem",
  marginBottom: "1.5rem",
  fontWeight: 400,
  letterSpacing: "2px",
  color: "var(--white)",
});

const GroomBride = styled("p", {
  fontSize: "1.8rem",
  fontWeight: 500,
  margin: "1.5rem 0",
  fontFamily: "'Noto Serif KR', serif",
  letterSpacing: "1px",
  position: "relative",
  paddingBottom: "1.5rem",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "80px",
    height: "1px",
    backgroundColor: "var(--white)",
  }
});

const Schedule = styled("div", {
  fontSize: "1.2rem",
  marginTop: "2rem",
  lineHeight: 1.7,
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
  fontSize: "2rem",
  "@keyframes bounce": {
    "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0) translateX(-50%)" },
    "40%": { transform: "translateY(-20px) translateX(-50%)" },
    "60%": { transform: "translateY(-10px) translateX(-50%)" }
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
      <VideoBackground autoPlay loop muted playsInline={true}>
        <source src="./asset/main.MP4" type="video/mp4" />
      </VideoBackground>
      <TitleWrapper>
        <WeddingInvitation>Wedding Invitation</WeddingInvitation>
        <GroomBride>
          {data?.groom?.name} & {data?.bride?.name}
        </GroomBride>
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
