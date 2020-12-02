import React from "react";
import { ContentSlide } from "@shared/components";
const StyledComponentsIntro = () => {
  return (
    <ContentSlide title="A proposta" backgroundSrc="nail-polish-emoji.png">
      <ul>
        <li>Simplificar manutenção</li>
        <li>Vendor prefixing mais simples (Compatibilidade entre browsers)</li>
        <li>Simplificar a definição de estilos dinâmicos</li>
        {/* <li>Facilitar code spliting</li> TODO: Revisar a necessidade desse  */}
      </ul>
    </ContentSlide>
  );
};

export default StyledComponentsIntro;
