import React from "react";
import { SlideContainer } from "@shared/components";
import { StyledPage } from "../styles/pagesStyles";
import Slides from '../slides';

export default function Home() {
  return (
      <StyledPage>
        <SlideContainer slides={Slides} />
      </StyledPage>
  );
}
