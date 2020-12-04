import styled from "styled-components";
import Image, { ImageProps } from 'next/image';

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

export const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageBackground = styled(Image)`
  opacity: 0.1;
  filter: grayscale(100%);
`;