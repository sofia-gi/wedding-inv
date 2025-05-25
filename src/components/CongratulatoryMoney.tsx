import React from 'react';
import { styled } from "@stitches/react";
import { Button, Divider, Modal, message } from "antd";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { WeddingData } from "../types";

const Wrapper = styled("div", {
  background: "var(--white)",
  width: "100%",
  padding: "80px 0",
  position: "relative"
});

const Container = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '1rem',
});

const Title = styled("h2", {
  fontSize: "2rem",
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
  }
});

const Content = styled("p", {
  fontSize: "1.1rem",
  lineHeight: 1.8,
  color: "var(--text-color)",
  marginBottom: "40px",
  textAlign: "center"
});

const ButtonsWrapper = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  flexWrap: "wrap",
  
  "@media (max-width: 600px)": {
    gap: "20px"
  }
});

const ContactButton = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "180px",
  height: "180px",
  borderRadius: "12px",
  backgroundColor: "var(--secondary-color)",
  boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
  cursor: "pointer",
  transition: "var(--transition)",
  
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
  },
  
  "@media (max-width: 600px)": {
    width: "150px",
    height: "150px"
  }
});

const ButtonIcon = styled("div", {
  fontSize: "40px",
  marginBottom: "15px",
  color: "var(--accent-color)"
});

const ButtonText = styled("p", {
  fontSize: "1.1rem",
  fontWeight: 500,
  color: "var(--text-color)",
  margin: 0
});

const StyledModal = {
  content: {
    borderRadius: "12px",
    overflow: "hidden"
  },
  header: {
    backgroundColor: "var(--primary-color)",
    borderBottom: "none",
    padding: "16px 24px",
  },
  title: {
    color: "var(--white)",
    fontSize: "1.3rem",
    fontWeight: 500,
    textAlign: "center"
  },
  body: {
    padding: "30px"
  },
  mask: {
    backdropFilter: "blur(2px)"
  },
  footer: {
    display: "none"
  },
  closeIcon: {
    color: "var(--white)"
  }
};

const AccountInfo = styled("div", {
  backgroundColor: "var(--secondary-color)",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "20px",
  
  "& .account-header": {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    
    "& .account-emoji": {
      fontSize: "24px",
      marginRight: "10px"
    },
    
    "& .account-name": {
      fontSize: "1.1rem",
      fontWeight: 500
    }
  },
  
  "& .account-number-wrapper": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "var(--white)",
    borderRadius: "6px",
    padding: "12px 15px",
    
    "& .account-number": {
      fontSize: "1rem",
      color: "var(--text-color)"
    }
  },
  
  "& .copy-button": {
    backgroundColor: "var(--primary-color)",
    color: "var(--white)",
    border: "none",
    borderRadius: "4px",
    padding: "5px 12px",
    fontSize: "0.9rem",
    cursor: "pointer",
    transition: "var(--transition)",
    
    "&:hover": {
      backgroundColor: "var(--accent-color)"
    }
  }
});

const Description = styled("p", {
  fontSize: "0.9rem",
  color: "var(--light-text)",
  textAlign: "center",
  marginTop: "15px"
});

type CongratulatoryMoneyProps = {
  data?: WeddingData;
};

export default function CongratulatoryMoney({
  data,
}: CongratulatoryMoneyProps) {
  const [groomVisible, setGroomVisible] = useState<boolean>(false);
  const [brideVisible, setBrideVisible] = useState<boolean>(false);

  return (
    <Wrapper>
      <Container>
        <Title>축하의 마음을 전하세요</Title>
        <Content>소중한 축하의 마음을 담아 축의금을 전달해 보세요.</Content>
        
        <ButtonsWrapper>
          <ContactButton onClick={() => setGroomVisible(true)}>
            <ButtonIcon>🤵</ButtonIcon>
            <ButtonText>신랑측 계좌번호</ButtonText>
          </ContactButton>
          
          <ContactButton onClick={() => setBrideVisible(true)}>
            <ButtonIcon>👰</ButtonIcon>
            <ButtonText>신부측 계좌번호</ButtonText>
          </ContactButton>
        </ButtonsWrapper>
      </Container>
      
      <Modal
        title="신랑측 계좌번호"
        open={groomVisible}
        onOk={() => setGroomVisible(false)}
        onCancel={() => setGroomVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
        styles={StyledModal}
      >
        {data?.groom && (
          <AccountInfo>
            <div className="account-header">
              <span className="account-emoji">🤵</span>
              <span className="account-name">{data?.groom?.name}</span>
            </div>
            <div className="account-number-wrapper">
              <div className="account-number">{data?.groom?.account_number}</div>
              <CopyToClipboard text={data?.groom?.account_number}>
                <button 
                  className="copy-button"
                  onClick={() => message.success("계좌번호가 복사되었습니다.")}
                >
                  복사하기
                </button>
              </CopyToClipboard>
            </div>
          </AccountInfo>
        )}
        <Description>
          '복사하기' 버튼을 클릭하면 계좌번호가 클립보드에 복사됩니다.
        </Description>
      </Modal>
      
      <Modal
        title="신부측 계좌번호"
        open={brideVisible}
        onOk={() => setBrideVisible(false)}
        onCancel={() => setBrideVisible(false)}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
        footer={null}
        styles={StyledModal}
      >
        {data?.bride && (
          <AccountInfo>
            <div className="account-header">
              <span className="account-emoji">👰</span>
              <span className="account-name">{data?.bride?.name}</span>
            </div>
            <div className="account-number-wrapper">
              <div className="account-number">{data?.bride?.account_number}</div>
              <CopyToClipboard text={data?.bride?.account_number}>
                <button 
                  className="copy-button"
                  onClick={() => message.success("계좌번호가 복사되었습니다.")}
                >
                  복사하기
                </button>
              </CopyToClipboard>
            </div>
          </AccountInfo>
        )}
        <Description>
          '복사하기' 버튼을 클릭하면 계좌번호가 클립보드에 복사됩니다.
        </Description>
      </Modal>
    </Wrapper>
  );
}