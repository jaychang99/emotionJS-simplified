import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "@emotion/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
