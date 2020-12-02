import React from "react";
import { Container, Slide } from "./styles";


import SwiperCore, { Pagination, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination]);
interface SlideContainerProps {
  slides: React.ElementType[]
}

SwiperCore.use([Keyboard])

const SlideContainer = (props: SlideContainerProps) => {
  const { slides } = props;
  return (
    <Container>
      <Swiper id="main" tag="section" wrapperTag="ul" style={{ height: "100%" }} pagination>
        {slides.map((Page: React.ElementType, el) => {
          return (
            <SwiperSlide key={el}>
              <Slide>
                <Page />
              </Slide>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default SlideContainer;
