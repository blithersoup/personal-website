import '../styles/globals.css';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "JetBrains Mono",
    body: "JetBrains Mono"
  }
});

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  );
}

export default MyApp
