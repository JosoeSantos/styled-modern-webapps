import React from "react";

import { ContentSlide, ContentImage } from "@shared/components";

const MicrofrontAndMonorepoStructure = () => {
  return (
    <ContentSlide title="Estrutura de um monorepo">
      <ContentImage
        backgroundSrc="/monorepo-structure.png"
        subtitle="A Vercel suporta monorepos para maior flexibilidade em escala. No mesmo repositório Git, você pode configurar vários projetos a serem construídos e implantados em paralelo."
      ></ContentImage>
    </ContentSlide>
  );
};

export default MicrofrontAndMonorepoStructure;
