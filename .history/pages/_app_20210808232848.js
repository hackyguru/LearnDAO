import Header from "../components/Header";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <CTA />
        <main className="container">
          <Component {...pageProps} />
        </main>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
