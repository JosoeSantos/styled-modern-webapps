import React, { FunctionComponent } from "react";
import { Container, BackgroundContainer, ImageBackground } from "./styles";

interface ContentSlideProps {
  title: string;
  backgroundSrc?: string;
}

const ContentSlide: FunctionComponent<ContentSlideProps> = (props) => {
  const { children, title, backgroundSrc } = props;

  return (
    <Container>
      {backgroundSrc && (
        <BackgroundContainer>
          <ImageBackground
            width={700}
            height={700}
            loading="eager"
            objectFit="contain"
            src={backgroundSrc}
            alt="backgroundImage"
          />
        </BackgroundContainer>
      )}
      <h2>{title}</h2>
      {children}
    </Container>
  );
};

export default ContentSlide;
