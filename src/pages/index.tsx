import React from "react";
import { Header } from "@shared/components";
import { SlideContainer } from "@shared/components";
import { StyledPage } from "./styles";

export default function Home() {
  return (
    <StyledPage>
      <SlideContainer>
        <Header />
      </SlideContainer>
    </StyledPage>
  );
}
