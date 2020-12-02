import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  
  justify-self: stretch;
  align-self: stretch;

  padding: 3% 5%;
  width: 100%;
  position: relative;

  h2 {
    margin:  0 0 32px;
  }
`;

export const ImageBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.1;
`;