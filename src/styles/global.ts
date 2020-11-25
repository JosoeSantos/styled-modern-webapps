import { createGlobalStyle } from "styled-components";

import Theme from "./Theme";

export default createGlobalStyle`
  :root {
    --primary-color: ${Theme.primaryColor};
    --secondary-color: ${Theme.secondaryColor};
    --accent-color: ${Theme.accentColor};
    --background-color: ${Theme.backgroundColor};
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
