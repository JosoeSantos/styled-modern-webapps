import React from "react";
import { ContentSlide } from "@shared/components";
const IntroTools = () => {
  return (
    <ContentSlide
      title="Tretas pra 'simplificar' a nossa vida"
      backgroundSrc="/front.svg"
    >
      <ul>
        <li>
          Linting, SSR, Code Spliting, Lazy loading, Asset Optmization, SEO,
          OpenGraph, Analytics, Web Vitals, Visual testing, Unit testing.
        </li>
        <li>
          Service Workers, Web Workers, Push, CDN, HTTP APIs, DOM APIs, PWA,
          Background Sync
        </li>
        <li>Libs: Reactjs, Vuejs, Axios, Lodash, Redux, Polymer.</li>
        <li>Frameworks: Angular, Next.js, Nuxt, Ember.</li>
        <li>Preprocessadores: Typescript, Babel, Sass, Less, Postcss</li>
      </ul>
    </ContentSlide>
  );
};

export default IntroTools;
