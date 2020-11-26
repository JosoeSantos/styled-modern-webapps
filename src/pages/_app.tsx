import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";
import Theme from "../styles/Theme";
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";

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
