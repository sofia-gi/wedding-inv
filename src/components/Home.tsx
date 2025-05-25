import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import JsonData from "../data.json";
import { WeddingData } from "../types";
import Title from "../components/Title";
import Gretting from "../components/Gretting";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import CongratulatoryMoney from "../components/CongratulatoryMoney";
import Share from "../components/Share";
import { FadeInSection } from "../components/FadeInSection"; 

const weddingData: WeddingData = JsonData;

const GlobalStyle = createGlobalStyle`
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const Home: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    script.async = true;
    document.body.appendChild(script);

    window.scrollTo(0, 0);

    document.title = "김창현 & 남궁은지의 결혼식에 초대합니다";

    const setMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const setOgMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="og:${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', `og:${property}`);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    setMetaTag('description', `${weddingData.date} - ${weddingData.location}`);
    setMetaTag('theme-color', '#D4B895');

    setOgMetaTag('type', 'website');
    setOgMetaTag('title', '김창현 & 남궁은지의 결혼식에 초대합니다');
    setOgMetaTag('description', `${weddingData.date} - ${weddingData.location}`);
    setOgMetaTag('url', window.location.href);
  }, []);

  return (
    <>
      <GlobalStyle />
      <main>
        <FadeInSection><Title data={weddingData} /></FadeInSection>
        <FadeInSection><Gretting data={weddingData} /></FadeInSection>
        <FadeInSection><Gallery /></FadeInSection>
        <FadeInSection><Location /></FadeInSection>
        <FadeInSection><CongratulatoryMoney data={weddingData} /></FadeInSection>
        <FadeInSection><Share data={weddingData} /></FadeInSection>
      </main>
    </>
  );
};

export default Home;
