import React, { FunctionComponent } from "react";
import { StyledContainer, ImageContainer } from "./styles";
import Image from "next/image";

interface TitleSlideProps {
  title?: string;
  iconSrc?: string;
}

const TitleSlide: FunctionComponent<TitleSlideProps> = (props) => {
  const { title, iconSrc } = props;
  return (
    <StyledContainer>
      {iconSrc && (
        <ImageContainer>
          <Image
            height={100}
            width={200}
            layout="intrinsic"
            objectFit="contain"
            src={iconSrc}
            alt="styledImg"
          />
        </ImageContainer>
      )}
      {title ? <h1>{title}</h1> : props.children}
    </StyledContainer>
  );
};

export default TitleSlide;
