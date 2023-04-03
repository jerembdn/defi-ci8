import "remixicon/fonts/remixicon.css";

import React from "react";

import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@/components/GlobalStyle";
import themes from "@/services/themes";
import Head from "@/components/Head";
import APP from "@/constants/app";
import Script from "@/components/Script";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={themes.light}>
      <Head description={APP.DESCRIPTION} />

      <GlobalStyle />
      <Component {...pageProps} />

      <Script />
    </ThemeProvider>
  );
};

export default App;
