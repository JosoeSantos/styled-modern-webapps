import styled from "styled-components";

export const TitleContainer = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-top: auto;
`;

export const Style = styled.p`
  margin: 0 8px;
  background: -webkit-linear-gradient(300deg, #833ab4, #fd1d1d, #fcb045);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: italic;
  font-weight: bold;
`;

export const Credits = styled.p`
  width: 100%;
  margin: auto 0 20px;
  font-weight: 500;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  font-size: 20px;

  a {
    text-decoration: none;
    color: purple;
    font-weight: bold;
    margin: 0 8px;
  }
`;
