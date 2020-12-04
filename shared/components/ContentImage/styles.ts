import styled from "styled-components";
import Image, { ImageProps } from "next/image";

export const ImageContainer = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const DisplayImage = styled(Image)`
  padding: 10px;
  border-radius: 5px;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  font-style: italic;
  margin: 20px;
`;
