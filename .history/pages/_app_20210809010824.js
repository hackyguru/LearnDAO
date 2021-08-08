import Header from "../components/Header";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import CTA from "../components/About";
import {
  chakra,
  HStack,
  Link as ChakraLink,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Heading,
  Button,
  useColorMode,
  SimpleGrid,
  Stack,
  Container,
} from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <main className="container">
          <Component {...pageProps} />
        </main>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
