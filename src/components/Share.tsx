import React, { useEffect } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

const KakaoTalkShareButton: React.FC = () => {
  useEffect(() => {
    // ✅ Kakao SDK 스크립트 로드
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Kakao) {
        window.Kakao.init("YOUR_KAKAO_JAVASCRIPT_KEY"); // ✅ 여기에 본인의 카카오 JavaScript 키 입력
      }
    };
  }, []);

  const shareKakao = () => {
    if (window.Kakao) {
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
    }
  };

  return (
      <button onClick={shareKakao} style={buttonStyle}>
        카카오톡 공유하기
      </button>
  );
};

// ✅ 버튼 스타일
const buttonStyle: React.CSSProperties = {
  backgroundColor: "#FEE500",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  fontSize: "16px",
  cursor: "pointer",
};

export default KakaoTalkShareButton;
