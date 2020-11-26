import React from "react";
import { Container, Slide } from "./styles";

import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination]);
interface SlideContainerProps {
  children: React.ReactNode;
}

const SlideContainer = (props: SlideContainerProps) => {
  const { children } = props;
  return (
    <Container>
      {children}
      <Swiper id="main" tag="section" wrapperTag="ul" style={{ height: "85%" }} pagination>
        {[1, 2, 3].map((i, el) => {
          return (
            <SwiperSlide>
              <Slide>
                <h1>Slide {i}</h1>
              </Slide>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default SlideContainer;
