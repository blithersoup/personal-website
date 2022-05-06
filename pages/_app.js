import '../styles/globals.css';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  backgroundColor: "#000",
  fonts: {
    heading: "Proxima Sans",
    body: "JetBrains Mono",
    color: "#000"
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
