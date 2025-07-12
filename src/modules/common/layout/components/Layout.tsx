"use client";
import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import PoweredByLogo from "./PoweredByLogo";
import FloatingThemeToggle from "../../ui/FloatingThemeToggle";

interface LayoutProps {
  children?: ReactNode;
}
const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  const bg = useColorModeValue("gray.50", "gray.900");

  return (
    <Box minH="100vh" bg={bg}>
      <Navbar />
      <Box px={{ base: "4", md: "8", lg: "24" }} py={{ base: "8", md: "16" }}>
        {children}
      </Box>
      <PoweredByLogo />
      <FloatingThemeToggle />
    </Box>
  );
};
export default Layout;
