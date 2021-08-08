import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";

const CTA = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      bg={useColorModeValue("brand.500")}
      px={8}
      py={24}
      mx="auto"
    >
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        pr={{ md: 20 }}
      >
        <chakra.h2
          fontSize={{ base: "3xl", sm: "4xl" }}
          fontWeight="extrabold"
          lineHeight="shorter"
          color={useColorModeValue("white", "gray.100")}
          mb={6}
        >
          <chakra.span display="block">Docs and resources are now</chakra.span>
          <chakra.span
            display="block"
            bgClip="text"
            bgGradient="linear(to-r, #7450f7,#f77a3b)"
          >
            decentralized and non-custodial
          </chakra.span>
        </chakra.h2>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.100", "gray.300")}
        >
          Hellonext is a feature voting software where you can allow your users
          to vote on features, publish roadmap, and complete your customer
          feedback loop.
        </chakra.p>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
        >
          <Box display="inline-flex" rounded="md" shadow="md">
            <chakra.a
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              w="full"
              rounded="md"
              color={useColorModeValue("white")}
              bg={useColorModeValue("brand.600", "brand.500")}
              _hover={{
                bg: useColorModeValue("brand.700", "brand.600"),
              }}
            >
              Sign up for free
            </chakra.a>
          </Box>
        </Stack>
      </Box>
      <Box w={{ base: "full", md: 10 / 12 }} mx="auto" textAlign="center">
        <Image
          w="full"
          rounded="lg"
          shadow="2xl"
          src="https://kutty.netlify.app/hero.jpg"
          alt="Hellonext feedback boards software screenshot"
        />
      </Box>
    </Flex>
  );
};

export default CTA;

import React from "react";
import {
  chakra,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

export default function Sj() {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        justify="center"
        bg={useColorModeValue("white", "gray.800")}
        w="full"
      >
        <Box
          w={{ base: "full", md: "75%", lg: "50%" }}
          px={4}
          py={20}
          textAlign={{ base: "left", md: "center" }}
        >
          <chakra.span
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color={useColorModeValue("gray.900", "gray.100")}
            mb={6}
          >
            <chakra.span display="block">Ready to dive in?</chakra.span>
            <chakra.span
              display="block"
              color={useColorModeValue("brand.600", "gray.500")}
            >
              Start your free trial today.
            </chakra.span>
          </chakra.span>
          <Stack
            justifyContent={{ base: "left", md: "center" }}
            direction={{ base: "column", sm: "row" }}
            spacing={2}
            mt={2}
          >
            <Box display="inline-flex" rounded="md" shadow="md">
              <Link
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                color={useColorModeValue("white")}
                bg={useColorModeValue("brand.600", "brand.500")}
                _hover={{
                  bg: useColorModeValue("brand.700", "brand.600"),
                }}
              >
                Get started
              </Link>
            </Box>
            <Box ml={3} display="inline-flex" rounded="md" shadow="md">
              <Link
                w="full"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                border="solid transparent"
                fontWeight="bold"
                rounded="md"
                color="brand.600"
                bg="white"
                _hover={{
                  bg: "brand.50",
                }}
              >
                Learn more
              </Link>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
