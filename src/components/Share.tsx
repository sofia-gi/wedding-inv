import React, { useEffect } from "react";
import { styled } from "@stitches/react";
import { WeddingData } from "../types";

type ShareProps = {
  data?: WeddingData;
};

declare global {
  interface Window {
    Kakao: any;
  }
}

const Wrapper = styled("div", {
  backgroundColor: "var(--secondary-color)",
  width: "100%",
  padding: "60px 0",
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
  }
});

const Container = styled("div", {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "0 20px",
  position: "relative",
  zIndex: 1,
  textAlign: "center"
});

const Title = styled("h2", {
  fontSize: "2rem",
  fontWeight: 500,
  color: "var(--accent-color)",
  textAlign: "center",
  marginBottom: "2rem",
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

const ShareText = styled("p", {
  fontSize: "1.1rem",
  color: "var(--text-color)",
  margin: "1.5rem 0 2rem",
  lineHeight: 1.6
});

const ShareButtonsContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "20px"
});

const ShareButton = styled("button", {
  width: "60px",
  height: "60px",
  borderRadius: "50%",
  border: "none",
  backgroundColor: "var(--white)",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  transition: "var(--transition)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)"
  }
});

const KakaoIcon = styled("img", {
  width: "35px",
  height: "auto"
});

// 카카오톡 공유 버튼 컴포넌트
const Share: React.FC<ShareProps> = ({ data }) => {
  useEffect(() => {
    if (!window.Kakao) {
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
          window.Kakao.init("YOUR_KAKAO_JAVASCRIPT_KEY"); // 본인의 카카오 JavaScript 키 입력
        }
      };
    } else if (!window.Kakao.isInitialized()) {
      window.Kakao.init("YOUR_KAKAO_JAVASCRIPT_KEY");
    }
  }, []);

  const shareKakao = () => {
    if (!window.Kakao || !window.Kakao.isInitialized()) {
      alert("카카오톡 공유 기능을 로드하는 중입니다. 잠시 후 다시 시도해 주세요.");
      return;
    }

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "김창현❤남궁은지 결혼식에 초대합니다",
        description: "2025년 09월 06일 토요일 오후 02시 00분, 안양 빌라드지디 1층 갤러리아홀",
        imageUrl: "https://your-wedding-image-url.com/image.jpg",
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "청첩장 보기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  const copyURLToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('청첩장 주소가 복사되었습니다!');
    }, (err) => {
      console.error('URL 복사 실패:', err);
    });
  };

  return (
    <Wrapper>
      <Container>
        <Title>청첩장 공유하기</Title>
        <ShareText>
          소중한 분들에게 저희의 결혼 소식을 알려주세요
        </ShareText>
        
        <ShareButtonsContainer>
          <ShareButton onClick={shareKakao} aria-label="카카오톡으로 공유하기">
            <KakaoIcon src="./asset/kakao_btn_s.png" alt="카카오톡 공유하기" />
          </ShareButton>
          
          <ShareButton onClick={copyURLToClipboard} aria-label="URL 복사하기">
            <span style={{ fontSize: "24px" }}>🔗</span>
          </ShareButton>
        </ShareButtonsContainer>
      </Container>
      
      {/* 푸터 */}
      <div style={{ 
        marginTop: "60px", 
        padding: "20px 0", 
        borderTop: "1px solid rgba(166, 124, 82, 0.2)",
        textAlign: "center",
        color: "var(--light-text)",
        fontSize: "0.9rem"
      }}>
        © 2025 김창현 & 남궁은지의 결혼식
      </div>
    </Wrapper>
  );
};

export default Share;
