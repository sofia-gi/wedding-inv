import React from "react";
//import { styled } from "@stitches/react";
import styled from '@emotion/styled'; 


const Wrapper = styled.div`
  background: "var(--secondary-color)",
  width: "100%",
  padding: "80px 0",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: "url('data:image/svg+xml;utf8,<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"1\" height=\"1\" fill=\"rgba(166, 124, 82, 0.05)\" /></svg>')",
    opacity: 0.8,
    zIndex: 0
  }`;

const Container = styled.div`maxWidth: "900px",
  margin: "0 auto",
  padding: "0 20px",
  position: "relative",
  zIndex: 1`;

const Title = styled.h2`fontSize: "2rem",
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
  }`;

const MapContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background-color: var(--white);
  padding: 20px;
  margin-bottom: 30px;
  max-width: 600px;  // 적당한 최대 너비 지정
  margin-left: auto;
  margin-right: auto;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;



const Image = styled.img`width: "100%",
  maxWidth: "100%",
  borderRadius: "4px"`;

const InfoWrapper = styled.div`marginTop: "40px",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "30px",
  
  "@media (max-width: 768px)": {
    flexDirection: "column"
  }`;

const InfoBox = styled.div`flex: "1",
  backgroundColor: "var(--white)",
  borderRadius: "8px",
  padding: "25px",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
  
  "& h3": {
    fontSize: "1.3rem",
    color: "var(--accent-color)",
    marginBottom: "15px",
    position: "relative",
    paddingBottom: "10px",
    
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "30px",
      height: "1px",
      backgroundColor: "var(--primary-color)"
    }
  },
  
  "& p": {
    fontSize: "1rem",
    marginBottom: "10px",
    color: "var(--text-color)",
    lineHeight: 1.6
  },
  
  "& .icon": {
    marginRight: "8px",
    color: "var(--accent-color)"
  }`;

export default function Location() {
  return (
    <Wrapper>
      <Container>
        <Title>오시는 길</Title>
        
        <MapContainer>
        <StyledImage
          src="/assets/LocationMap.png"
          alt="안양 빌라드지디 갤러리아홀 지도"
          loading="lazy"
        />
      </MapContainer>
        
        <InfoWrapper>
          <InfoBox>
            <h3>예식장 안내</h3>
            <p><span className="icon">🏛️</span> <strong>안양 빌라드지디, 1층 갤러리아홀</strong></p>
            <p><span className="icon">📍</span> 경기도 안양시 동안구 흥안대로 123번길 (가상주소)</p>
            <p><span className="icon">☎️</span> 031-123-4567</p>
          </InfoBox>
          
          <InfoBox>
            <h3>교통 안내</h3>
            <p><span className="icon">🚗</span> <strong>자가용</strong>: 네비게이션에 "안양 빌라드지디" 검색</p>
            <p><span className="icon">🚇</span> <strong>지하철</strong>: 4호선 안양역 2번 출구에서 도보 10분</p>
            <p><span className="icon">🚌</span> <strong>버스</strong>: 안양역 정류장 하차 후 도보 10분</p>
          </InfoBox>
        </InfoWrapper>
      </Container>
    </Wrapper>
  );
}
