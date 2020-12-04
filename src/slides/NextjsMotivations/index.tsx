import React from "react";

import { ContentSlide } from "@shared/components";

const NextJsIntro = () => {
  return (
    <ContentSlide backgroundSrc="/nextjs.svg" title="Motivações ">
      <ul>
        <li>Otimização de imagens automaticamente</li>
        <li>Next.js Analytics</li>
        <li>Facilita as melhorias constantes e o monitoramento de performance. Cada segundo (ou milissegundo) é muito importante para nós!</li>
        <li>Visualize instantaneamente as alterações localmente com Fast Refresh</li>
        <li>Rotas dinâmicas</li>
        <li>SubPath: configurar seu servidor ou proxy de forma que tudo em um subcaminho específico aponte para um aplicativo Next.js</li>
        <li>Melhorias constantes por parte da equipe do Next.js</li>
        <li>Comunidade forte (mais de 1,300 colaboradores independentes)</li>
        <li>Facilidade com a adoção de micro-frontends e deploy de um Monorepo</li>
      </ul>
    </ContentSlide>
  );
};

export default NextJsIntro;
