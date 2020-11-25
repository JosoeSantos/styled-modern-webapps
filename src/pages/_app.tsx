import {ThemeProvider} from 'styled-components';
import GlobalStyle from "../styles/global";
import Theme from "../styles/Theme";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
