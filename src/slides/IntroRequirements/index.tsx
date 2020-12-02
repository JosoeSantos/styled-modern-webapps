import React from 'react';
import { ContentSlide } from '@shared/components';
const IntroRequirements = () => {
  return (
    <ContentSlide backgroundSrc="/front.svg" title="O que nós esperamos de um bom site?">
      <ul>
        <li>Carrega rápido</li>
        <li>Não trava </li>
        <li>É bonito</li>
        <li>É fácil de encontrar</li>
        <li>É bom quando tem novidades</li>
        <li>Resolva todos os seus problemas(Impossível mas nós sabemos que o cliente quer isso)</li>
        <li>Funcione em vários ou todos dispositivos</li>
      </ul>
    </ContentSlide>
  );
};

export default IntroRequirements;