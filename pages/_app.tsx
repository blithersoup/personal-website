import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';

const theme = extendTheme({
  backgroundColor: "#000",
  fonts: {
    heading: "Source Code Pro Mono",
    body: "Merriweather",
    color: "#000"
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
    <Analytics />
  </ChakraProvider>
  );
}

export default MyApp
