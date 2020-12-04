import React from "react";
import { Container, Slide } from "./styles";

import SwiperCore, { Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

SwiperCore.use([Keyboard]);
interface SlideContainerProps {
  slides: React.ElementType[];
}

const StyledSlide = styled.div`
  background-color: white;
`;

const SlideContainer = (props: SlideContainerProps) => {
  const { slides } = props;
  return (
    <Container>
      <Swiper
        effect="flip"
        keyboard={true}
        id="main"
        tag="section"
        wrapperTag="ul"
        style={{ height: "100%" }}
      >
        {slides.map((Page: React.ElementType, el) => {
          return (
            <SwiperSlide key={el}>
              <StyledSlide as={Slide}>
                <Page />
              </StyledSlide>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default SlideContainer;
