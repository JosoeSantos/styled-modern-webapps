import React, { FunctionComponent } from "react";
import { ImageContainer, DisplayImage, Subtitle } from "./styles";

interface ContentImageProps {
  subtitle: string;
  backgroundSrc?: string;
}

const ContentImage: FunctionComponent<ContentImageProps> = (props) => {
  const { subtitle, backgroundSrc } = props;

  return (
    <>
      {backgroundSrc && (
        <ImageContainer>
          <DisplayImage
            width={800}
            height={400}
            objectFit="contain"
            src={backgroundSrc}
            alt="backgroundImage"
          />
          <Subtitle>{subtitle}</Subtitle>
        </ImageContainer>
      )}
    </>
  );
};

export default ContentImage;
