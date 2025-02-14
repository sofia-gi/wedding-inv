import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import JsonData from "../data.json"; // JSON 데이터 경로 수정
import { WeddingData } from "../types";
import Title from "../components/Title";
import Gretting from "../components/Gretting";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import CongratulatoryMoney from "../components/CongratulatoryMoney";
import Share from "../components/Share";

const weddingData: WeddingData = JsonData;
// 글로벌 스타일 설정 (폰트 적용)
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap');

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

// Footer 스타일 정의
const Footer = {
    background: "#D7CCC8",
    backgroundImage: "url(./assets/GroovePaper.png)",
    opacity: 0.6,
    textAlign: "center" as const,
    width: "100%",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column" as const,
};

const Home: React.FC = () => {
    useEffect(() => {
        // Kakao SDK 로드
        const script = document.createElement("script");
        script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <>
            {/* 글로벌 스타일 적용 */}
            <GlobalStyle />
            {/* 메타 정보 설정 */}
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:type" content="website" />
                <meta name="Title" content="김창현❤남궁은지 결혼식에 초대합니다" />
                <meta name="Description" content="2025년 09월 06일 토요일 오후 02시 00분" />
                <meta name="Keyword" content="2025년 09월 06일 토요일 오후 02시 00분" />
                <meta property="og:title" content="김창현❤남궁은지 결혼식에 초대합니다" />
                <meta property="og:description" content="2025년 09월 06일 토요일 오후 02시 00분" />
                <meta property="og:url" content="https://kyuhyuk.kr/wedding-invitation" />
                <meta name="theme-color" content="#BCAAA4" />
                <title>김창현❤남궁은지 결혼식에 초대합니다</title>
            </head>

            <main>
                <Title data={JsonData} />
                <Gretting data={JsonData} />
                <Gallery />
                <Location />
                <CongratulatoryMoney data={JsonData} />
                <Share />
                <footer style={Footer}>Copyright © 2025 Eunji-Namgung</footer>
            </main>
        </>
    );
};

export default Home;
