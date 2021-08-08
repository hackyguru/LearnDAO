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
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
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

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
