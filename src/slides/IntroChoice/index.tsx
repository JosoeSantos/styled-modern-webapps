import React from "react";
import { ContentSlide } from "@shared/components";
const IntroChoice = () => {
  return (
    <ContentSlide title="As escolhidas de hoje" backgroundSrc="/front.svg">
      <li>Next.js + Typescript</li>
      <li>Styled Components</li>
      <li>Monorepo</li>
      <li>E compahia...</li>
    </ContentSlide>
  );
};

export default IntroChoice;
