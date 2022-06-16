import '../styles/globals.css';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";

const theme = extendTheme({
  backgroundColor: "#000",
  fonts: {
    heading: "Lato",
    body: "JetBrains Mono",
    color: "#000"
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  );
}

export default MyApp
