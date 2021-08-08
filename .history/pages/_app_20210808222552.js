import Header from "../components/Header";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <ChakraProvider
      <Navbar />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
