import React from 'react';
import { styled } from "@stitches/react";
import { WeddingData } from "../types";

const Wrapper = styled("div", {
  background: "#fff",
  width: "100%",
  padding: "60px 20px",
});

const Container = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '1rem',
});

const Title = styled("h2", {
  fontSize: "2rem",
  fontWeight: "600",
  marginBottom: "1.5rem",
  color: "#333",
});

const Content = styled("p", {
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "#555",
  marginBottom: "2.5rem",
  whiteSpace: "pre-line",
});

const GroomBride = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "1.5rem",
});

const PersonCard = styled("div", {
  padding: "1.2rem 1.5rem",
  border: "1px solid #eee",
  borderRadius: "12px",
  minWidth: "140px",
  backgroundColor: "#fafafa",
  textAlign: "center",

  "& strong": {
    display: "block",
    fontSize: "1.1rem",
    color: "#222",
    marginBottom: "0.3rem"
  },

  "& span": {
    fontSize: "0.95rem",
    color: "#666"
  }
});

type GrettingProps = {
  data?: WeddingData;
};

export default function Gretting({ data }: GrettingProps) {
  return (
    <Wrapper>
      <Container>
        <Title>결혼합니다</Title>
        <Content>{data?.gretting}</Content>
        <GroomBride>
          <PersonCard>
            <strong>{data?.groom?.name}</strong>
            <span>
              {data?.groom?.parents?.father?.name} · {data?.groom?.parents?.mother?.name}의 장남
            </span>
          </PersonCard>
          <PersonCard>
            <strong>{data?.bride?.name}</strong>
            <span>
              {data?.bride?.parents?.father?.name} · {data?.bride?.parents?.mother?.name}의 차녀
            </span>
          </PersonCard>
        </GroomBride>
      </Container>
    </Wrapper>
  );
}
