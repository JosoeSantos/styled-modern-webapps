import React from "react";
import { StyledContainer, StyledImg } from "./styles";

interface TitleSlideProps {
  title: string;
  iconSrc: string;
}

const TitleSlide = (props: TitleSlideProps) => {
  const { title, iconSrc } = props;
  return (
    <StyledContainer>
      <StyledImg src={iconSrc} />
      <h1>{title}</h1>
    </StyledContainer>
  );
};

export default TitleSlide;
