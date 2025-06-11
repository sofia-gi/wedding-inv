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
  backgroundImage: "url('./asset/mainImg.jpg')",
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
  marginTop: "19rem",
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

// 풍선 컨테이너
const BalloonsContainer = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
  overflow: "hidden",
  pointerEvents: "none"
});

// 풍선 스타일
const Balloon = styled("div", {
  position: "absolute",
  borderRadius: "50%",
  animation: "float var(--float-duration) ease-in-out forwards",
  "&::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    boxShadow: "inset -10px -10px 20px rgba(0, 0, 0, 0.2), inset 5px 5px 15px rgba(255, 255, 255, 0.3)",
    background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6), transparent)",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-5px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "4px",
    height: "8px",
    background: "rgba(255, 255, 255, 0.7)",
    borderRadius: "0 0 3px 3px",
  },
  "@keyframes float": {
    "0%": { 
      transform: "translate(var(--x-start), 100vh) rotate(0deg)",
      opacity: 0.9
    },
    "10%": {
      opacity: 1
    },
    "100%": { 
      transform: "translate(var(--x-end), var(--y-end)) rotate(var(--rotation))",
      opacity: 0
    }
  }
});

// 풍선 줄
const BalloonString = styled("div", {
  position: "absolute",
  width: "1px",
  background: "rgba(255, 255, 255, 0.5)",
  transformOrigin: "top center",
  bottom: "0",
  left: "50%",
  zIndex: -1,
  animation: "swing 3s ease-in-out infinite alternate",
  "@keyframes swing": {
    "0%": { transform: "rotate(-5deg)" },
    "100%": { transform: "rotate(5deg)" }
  }
});

type TitleProps = {
  data?: WeddingData;
};

export default function Title({ data }: TitleProps) {
  // 풍선 상태 관리
  const [balloons, setBalloons] = useState<React.ReactNode[]>([]);

  // 랜덤 색상 생성 함수
  const getRandomColor = () => {
    const colors = [
      "#FF5252", "#FF4081", "#E040FB", "#7C4DFF", 
      "#536DFE", "#448AFF", "#40C4FF", "#18FFFF", 
      "#64FFDA", "#69F0AE", "#B2FF59", "#EEFF41", 
      "#FFEB3B", "#FFD740", "#FFAB40", "#FF6E40",
      "#FF8A80", "#EA80FC", "#B388FF", "#8C9EFF"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // 풍선 생성 함수
  const createBalloon = () => {
    const color = getRandomColor();
    const size = 20 + Math.random() * 40; // 20px - 60px 크기
    const duration = 15 + Math.random() * 20; // 15-35초 애니메이션
    const xStart = Math.random() * window.innerWidth;
    const xMovement = -100 + Math.random() * 200; // 좌우 이동 범위
    const xEnd = xStart + xMovement;
    const yEnd = -100 - Math.random() * 200; // 화면 밖으로 이동
    const rotation = -30 + Math.random() * 60; // 회전 각도
    const stringLength = 15 + Math.random() * 20;
    const delay = Math.random() * 40; // 지연 시간
    
    return (
      <div key={`balloon-${Date.now()}-${Math.random()}`} style={{ position: 'absolute', left: `${xStart}px`, bottom: '0' }}>
        <Balloon 
          style={{
            backgroundColor: color,
            width: `${size}px`,
            height: `${size}px`,
            '--float-duration': `${duration}s`,
            '--x-start': '0px',
            '--x-end': `${xMovement}px`,
            '--y-end': `${yEnd}px`,
            '--rotation': `${rotation}deg`,
            animationDelay: `${delay}s`
          } as React.CSSProperties}
        />
        <BalloonString 
          style={{
            height: `${stringLength}px`,
            animationDelay: `${delay + 0.5}s`
          }}
        />
      </div>
    );
  };

  // 랜덤 풍선 생성
  const addRandomBalloons = (count: number) => {
    const newBalloons = Array(count).fill(null).map(() => createBalloon());
    setBalloons(prevBalloons => [...prevBalloons, ...newBalloons]);
  };

  // 컴포넌트 마운트 시 풍선 시작
  useEffect(() => {
    // 처음에 많은 풍선 생성
    addRandomBalloons(30);
    
    // 주기적으로 풍선 추가
    const interval = setInterval(() => {
      addRandomBalloons(5);
    }, 3000);
    
    // 메모리 관리 - 주기적으로 풍선 제거
    const cleanupInterval = setInterval(() => {
      setBalloons(prevBalloons => {
        if (prevBalloons.length > 100) {
          return prevBalloons.slice(prevBalloons.length - 100);
        }
        return prevBalloons;
      });
    }, 10000);
    
    return () => {
      clearInterval(interval);
      clearInterval(cleanupInterval);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <Layout>
      <BackgroundImage />
      <BalloonsContainer>
        {balloons}
      </BalloonsContainer>
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
