import {
  Box,
  Flex,
  Link,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import GrackleLogo from "./GrackleLogo";
import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const bg = useColorModeValue(
    scrolled ? "white" : "gray.50",
    scrolled ? "gray.800" : "gray.900"
  );
  const boxShadow = scrolled ? "md" : "none";
  const height = useBreakpointValue({
    base: "60px",
    md: scrolled ? "50px" : "70px",
  });

  return (
    <Box
      as="nav"
      position="fixed"
      top="0"
      width="100%"
      bg={bg}
      boxShadow={boxShadow}
      transition="all 0.3s"
      zIndex="10"
      height={height}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        align="center"
        justify="space-between"
        height="100%"
      >
        <Flex align="center">
          {/* Bird Logo with Gradient */}
          <GrackleLogo size={50} />
          {/* Product Name */}
          <Text fontSize="lg" fontWeight="bold">
            Grackle
          </Text>
        </Flex>
        <Flex gap="4">
          <Link
            href="#home"
            _hover={{ textDecoration: "none", color: "blue.500" }}
          >
            Home
          </Link>
          <Link
            href="#features"
            _hover={{ textDecoration: "none", color: "blue.500" }}
          >
            Features
          </Link>
          <Link
            href="#pricing"
            _hover={{ textDecoration: "none", color: "blue.500" }}
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            _hover={{ textDecoration: "none", color: "blue.500" }}
          >
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
