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
    <Flex justify="center" bg={useColorModeValue("white", "gray.800")} w="full">
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
          <chakra.span display="block">StakeDAO</chakra.span>
          <chakra.span
            display="block"
            bgClip="text"
            bgGradient="linear(to-r, #7450f7,#f77a3b)"
          >
            Decentralized and non-custodial docs
          </chakra.span>
          <chakra.span
            paddingTop="10"
            display="block"
            fontSize="sm"
            letterSpacing="normal"
            fontWeight="semibold"
          >
            A D
          </chakra.span>
        </chakra.span>
        <Stack
          justifyContent={{ base: "left", md: "center" }}
          direction={{ base: "column", sm: "row" }}
          spacing={2}
          mt={2}
        ></Stack>
      </Box>
    </Flex>
  );
}
