import React, { FunctionComponent } from "react";
import { Container, ImageBackground } from "./styles";

interface ContentSlideProps {
  title: string,
  backgroundSrc?: string,
}

const ContentSlide: FunctionComponent<ContentSlideProps> = (props) => {
  const { children, title, backgroundSrc } = props;

  return (
    <Container>
      {backgroundSrc && <ImageBackground src={backgroundSrc} alt="backgroundImage" />}
      <h2>{title}</h2>
      {children}
    </Container>
  );
};

export default ContentSlide;
