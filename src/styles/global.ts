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
    transition: all 0.25s ease-out;
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

  h1 {
    font-size: 60px;
  }

  h2 {
    font-size: 45px;
  }

  li {
    font-size: 24px;
    line-height: 2;
    list-style-type: square;
    margin-left: 10px;
    position: relative;
  }

  li::marker {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: block;
  }

  @media(max-width: 1300px) {
    li {
      font-size: 20px;
    }
    
    h1 {
      font-size: 50px;
    }

    h2 {
      font-size: 40px;
    }
  }

  @media(max-width: 1100px) {
    li {
      font-size: 18px;
    }
    
    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 30px;
    }
  }
`;
