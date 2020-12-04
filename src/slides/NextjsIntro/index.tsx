import React from "react";

import { ContentSlide } from "@shared/components";

const NextJsIntro = () => {
  return (
    <ContentSlide backgroundSrc="/nextjs.svg" title="O que é ">
      <ul>
        <li>Simplifica a montagem de um ecossitema Javascript com React</li>
        <li>Junta coisas como otimização e ssr</li>
        <li>Rápido pra ter um site bonzinho rodando</li>
        <li>Open source!</li>
        <li>Mantida por uma empresa f*da, que é a Vercel</li>
      </ul>
    </ContentSlide>
  );
};

export default NextJsIntro;
