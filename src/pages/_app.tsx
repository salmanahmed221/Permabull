// import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";
import { Navbar, Footer } from "@/components";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [ui, setUi] = useState(false);

  useEffect(() => {
    setUi(true);
  }, []);
  return (
    <ChakraProvider theme={theme}>
      {ui ? (
        <>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      ) : null}
    </ChakraProvider>
  );
}
