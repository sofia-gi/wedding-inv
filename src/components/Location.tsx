import React from "react";
import styled from '@emotion/styled'; 

const Wrapper = styled.div`
  background-color: #f8f8f8;
  width: 100%;
  padding: 70px 0;
  position: relative;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 1px;
    background-color: #888;
  }
`;

const MapContainer = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  background-color: white;
  padding: 15px;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 2px;
`;

const InfoWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoBox = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  
  & h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 15px;
    position: relative;
    padding-bottom: 10px;
    
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 20px;
      height: 1px;
      background-color: #888;
    }
  }
  
  & p {
    font-size: 0.95rem;
    margin-bottom: 10px;
    color: #555;
    line-height: 1.5;
  }
  
  & .icon {
    margin-right: 8px;
    color: #666;
  }
`;

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
            <p><span className="icon">🏛️</span> <strong>안양 빌라드지디, 3층 크리스탈캐슬</strong></p>
            <p><span className="icon">📍</span> 경기도 안양시 동안구 관악대로 254<br/>교통 혼잡이 예상되오니 하단의 제2주차장이용 부탁드립니다.</p>
            <p><span className="icon">☎️</span> 031-382-3838</p>
          </InfoBox>
          
          <InfoBox>
            <h3>교통 안내</h3>
            <p><span className="icon">🚗</span> <strong>자가용</strong>: "빌라드지디 안양 제2주차장" 검색(주차장 입구 앞 셔틀버스 탑승, 셔틀버스5분거리)</p>
            <p><span className="icon">🚇</span> <strong>지하철</strong>: 4호선 인턱원역 8번출구(셔틀버스 수시운행)</p>
            <p><span className="icon">🚌</span> <strong>버스</strong>: 종합운동장 하차 <span>8</span> <span>8-1</span></p>
          </InfoBox>
        </InfoWrapper>
      </Container>
    </Wrapper>
  );
}
