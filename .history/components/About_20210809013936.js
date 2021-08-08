import React from "react";
import {
  chakra,
  Box,
  Stack,
  Button,
  Flex,
  useColorModeValue,
  Link,
  Modal,
  Text,
  Heading,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Image,
  ModalBody,
  ModalCloseButton,
  Container,
  Center,
  Divider,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

export default function Sj() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
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
            <chakra.span
              fontSize={{ base: "m", md: "m", lg: "m" }}
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
              A community driven documentation and currated list of learning
              resources for StakeDAO.
              <br />
              <br />
              Earn rewards in $SDT by contributing to this space!
            </chakra.span>
            <br></br>
            <Button
              marginRight="5"
              color="black"
              bgGradient="linear(to-r, #7450f7,#f77a3b)"
            >
              Learn
            </Button>
            <Button
              onClick={onOpen}
              marginLeft="5"
              color="black"
              backgroundColor="grey"
            >
              Contribute and earn
            </Button>
          </chakra.span>
          <Stack
            justifyContent={{ base: "left", md: "center" }}
            direction={{ base: "column", sm: "row" }}
            spacing={2}
            mt={2}
          ></Stack>
        </Box>
      </Flex>
      <Divider />
      <Container padding="10" maxWidth="1000">
        <Center>
          <Heading>How it works?</Heading>
        </Center>
        <Box maxWidth="1000">
          <Image src="https://raw.githubusercontent.com/hackyguru/HostedImages/master/howitworks.png"></Image>
        </Box>
      </Container>

      <Divider paddingTop="10" />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bgGradient="linear(to-r, #7450f7,#f77a3b)">
            Steps to contribute and earn
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <chakra.span
            padding="10"
            display="block"
            fontSize="sm"
            letterSpacing="normal"
            fontWeight="semibold"
          >
            Step 1 : Create your content as Markdown (.md) file.
            <br />
            <br />
            Step 2 : Add your markdown file in resources directory and make a PR
            in our GitHub repository.
            <br />
            <br />
            Step 3 : Your content will appear on the docs. Rewards will be sent
            in case you receive positive votes.
          </chakra.span>
          <ModalFooter>
            <Button variant="ghost">Open GitHub</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
