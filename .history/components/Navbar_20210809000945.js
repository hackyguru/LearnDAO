import React from "react";
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
import Link from "next/link";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useViewportScroll } from "framer-motion";

import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import {
  FaInfoCircle,
  FaMoon,
  FaSignInAlt,
  FaSignOutAlt,
  FaSun,
  FaTable,
  FaUserFriends,
  FaUserPlus,
} from "react-icons/fa";

export default function Navbar() {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("white", "#141414");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();

  const Section = () => {
    const ic = useColorModeValue("brand.600", "brand.50");
    const hbg = useColorModeValue("gray.50", "brand.400");
    const tcl = useColorModeValue("gray.900", "gray.50");
    const dcl = useColorModeValue("gray.500", "gray.50");
    return (
      <ChakraLink
        m={-3}
        p={3}
        display="flex"
        alignItems="start"
        rounded="lg"
        _hover={{ bg: hbg }}
      ></ChakraLink>
    );
  };

  const MobileNavContent = (
    <Box minW={"100%"}>
      <VStack
        minW="100%"
        pos="absolute"
        top={0}
        left={0}
        right={0}
        display={mobileNav.isOpen ? "flex" : "none"}
        flexDirection="column"
        p={2}
        pb={4}
        bg={bg}
        marginY={2}
        spacing={3}
        rounded="sm"
        shadow="sm"
      >
        <CloseButton
          aria-label="Close menu"
          justifySelf="self-start"
          onClick={mobileNav.onClose}
        />
        <Link href="/">
          <a>
            <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
              Home
            </Button>
          </a>
        </Link>

        <Link href="/#about">
          <a>
            <Button w="full" variant="ghost" leftIcon={<FaInfoCircle />}>
              About us
            </Button>
          </a>
        </Link>

        <Link href="members/">
          <a>
            <Button w="full" variant="ghost" leftIcon={<FaUserFriends />}>
              Members
            </Button>
          </a>
        </Link>
      </VStack>
    </Box>
  );
  return (
    <Flex pos="static">
      <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        w="full"
        borderBottomWidth={mobileNav.isOpen ? 200 : 0}
        borderBottomColor={useColorModeValue("gray.200", "gray.900")}
        minH={mobileNav.isOpen ? "325px" : 0}
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1400px">
          <Flex
            w="full"
            h="full"
            px="6"
            alignItems="left"
            justifyContent="space-between"
          >
            <Flex align="flex-start"></Flex>
            <Flex>
              <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                <Heading
                  as="h1"
                  //fontSize={{ base: "2rem", md: "2rem", lg: "xl", xl: "6rem" }}
                  fontWeight="700"
                  color={useColorModeValue("black", "white")}
                  lineHeight="none"
                  letterSpacing="tight"
                  textAlign="center"
                  bgClip="text"
                  bgGradient="linear(to-r, #7450f7,#f77a3b)"
                  animation="hue 2s infinite linear"
                  py={12}
                >
                  Learn DAO
                </Heading>
              </HStack>
            </Flex>
            <Flex justify="flex-end" align="center" color="gray.400">
              <HStack
                spacing="5"
                display={{ base: "none", md: "flex" }}
                justifyContent={"flex-end"}
              >
                <IconButton
                  size="md"
                  fontSize="25"
                  aria-label={`Switch to ${text} mode`}
                  variant="ghost"
                  color="current"
                  ml={{ base: "0", md: "3" }}
                  onClick={toggleMode}
                  icon={<SwitchIcon />}
                  marginRight={"5px"}
                />
                <Button
                  color="black"
                  bgGradient="linear(to-r, #7450f7,#f77a3b)"
                >
                  Connect Wallet
                </Button>
              </HStack>
              <HStack
                spacing="5"
                display={{ base: "flex", md: "none" }}
                justifyContent={"center"}
              >
                <IconButton
                  size="md"
                  fontSize="lg"
                  aria-label={`Switch to ${text} mode`}
                  variant="ghost"
                  color="current"
                  ml={{ base: "0", md: "3" }}
                  onClick={toggleMode}
                  icon={<SwitchIcon />}
                />
                <IconButton
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color={useColorModeValue("gray.800", "inherit")}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />
              </HStack>
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </Flex>
  );
}
