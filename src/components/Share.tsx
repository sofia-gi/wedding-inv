import React, { useEffect } from "react";
import { styled } from "@stitches/react";
import { WeddingData } from "../types";

type TitleProps = {
  data?: WeddingData;
};
declare global {
  interface Window {
    Kakao: any;
  }
}

// ✅ 카카오톡 공유 버튼 스타일
const ButtonWrapper = styled("div", {
  position: "fixed",
  right: "20px",
  bottom: "20px",
  //top: "50%",
  zIndex: 1000,
  //transform: "translateY(-50%)",
  width: "40px",
  height: "40px",
  cursor: "pointer",
});

const KakaoIcon = styled("img", {
  width: "100%",
  height: "auto",
});

// ✅ 카카오톡 공유 버튼 컴포넌트
const KakaoTalkShareButton: React.FC = () => {
  useEffect(() => {
    if (!window.Kakao) {
      const script = document.createElement("script");
      script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        if (window.Kakao && !window.Kakao.isInitialized()) {
          window.Kakao.init("YOUR_KAKAO_JAVASCRIPT_KEY"); // ✅ 본인의 카카오 JavaScript 키 입력
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
        title: "김창현❤남궁은지 결혼식 초대장",
        description: "2025년 09월 06일 토요일 오후 02시 00분, ○○○웨딩 ○층 ○○홀",
        imageUrl: "https://your-wedding-image-url.com/image.jpg",
        link: {
          mobileWebUrl: "https://your-wedding-invitation-url.com",
          webUrl: "https://your-wedding-invitation-url.com",
        },
      },
      buttons: [
        {
          title: "초대장 보기",
          link: {
            mobileWebUrl: "https://your-wedding-invitation-url.com",
            webUrl: "https://your-wedding-invitation-url.com",
          },
        },
      ],
    });
  };

  return (
      <ButtonWrapper onClick={shareKakao}>
        <KakaoIcon src="/asset/kakao_btn_m.png" alt="카카오톡 공유하기" />
      </ButtonWrapper>
  );
};

export default KakaoTalkShareButton;
