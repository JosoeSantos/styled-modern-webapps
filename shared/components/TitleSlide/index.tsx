import React, { FunctionComponent } from "react";
import { StyledContainer, StyledImg } from "./styles";

interface TitleSlideProps {
  title?: string;
  iconSrc: string;
}

const TitleSlide: FunctionComponent<TitleSlideProps> = (props) => {
  const { title, iconSrc } = props;
  return (
    <StyledContainer>
      <StyledImg src={iconSrc} />
      {title ? <h1>{title}</h1> : props.children}
    </StyledContainer>
  );
};

export default TitleSlide;
