import React, { FunctionComponent } from "react";
import { Container, ImageBackground } from "./styles";

interface ContentSlideProps {
  title: string;
}

const ContentSlide: FunctionComponent<ContentSlideProps> = (props) => {
  const { children, title } = props;

  return (
    <Container>
      <ImageBackground src="/nextjs.svg" />
      <h2>{title}</h2>
      {children}
    </Container>
  );
};

export default ContentSlide;
