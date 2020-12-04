import React from "react";
import { ContentSlide } from "@shared/components";
const StyledComponentsIntro = () => {
  return (
    <ContentSlide title="A proposta" backgroundSrc="nail-polish-emoji.png">
      <ul>
        <li>Simplificar manutenção</li>
        <li>Vendor prefixing mais simples (Compatibilidade entre browsers)</li>
        <li>Simplificar a definição de estilos dinâmicos</li>
        <li>
          Controle de quais componentes são renderizados em um página.
          Facilitando o code spliting, carregando a menor quantidade de código
          necessária
        </li>
        <li>Tudo isso com o famoso css in js</li>
      </ul>
    </ContentSlide>
  );
};

export default StyledComponentsIntro;
