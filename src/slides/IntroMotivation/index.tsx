import React from "react";
import { ContentSlide } from "@shared/components";
const IntroMotivation = () => {
  return (
    <ContentSlide backgroundSrc="/front.svg" title="Como chegamos aqui?">
      <ul>
        <li>Aplicações web cada vez mais completas</li>
        <li>É lento e complicado escolher, montar e manter um bom ambiente </li>
        <li>Por a mão no código mais rápido</li>
        <li>
          Indecisão em relação a linguagens e tecnologias, dificuldade em
          escolher apenas uma dentre as milhares existentes
        </li>
      </ul>
    </ContentSlide>
  );
};

export default IntroMotivation;
