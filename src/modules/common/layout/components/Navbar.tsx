"use client";
import {
  Box,
  Flex,
  Text,
  IconButton,
  useColorMode,
  useColorModeValue,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Moon, Sun, Menu as MenuIcon } from "lucide-react";
import React, { FC } from "react";
import { CollectionDropdown, ConnectWallet } from "@/modules/common/cta";
import useApp from "@/lib/app/hooks/useApp";
import Link from "next/link";
import { LINKS } from "@/utils/links";
import { tailwindUtils, cn } from "@/utils/tailwind";

interface NavbarProps { }
const Navbar: FC<NavbarProps> = (props) => {
  const { } = props;
  const { config } = useApp();
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const logoColor = useColorModeValue("primary.600", "primary.400");

  return (
    <Box
      py="4"
      px="8"
      bg={bg}
      borderBottom="1px"
      borderColor={borderColor}
      position="sticky"
      top="0"
      zIndex="1000"
      backdropFilter="blur(10px)"
      shadow="sm"
      className={cn(
        tailwindUtils.effects.glassmorphism,
        "tw-backdrop-blur-lg tw-border-b"
      )}
    >
      <Flex
        direction="row"
        alignItems="center"
        maxW="7xl"
        mx="auto"
        gap="4"
        className={cn(tailwindUtils.flexBetween, "tw-w-full")}
      >
        <Link href={LINKS.home()} passHref>
          <Text
            as="a"
            fontSize="xl"
            fontWeight="bold"
            color={logoColor}
            _hover={{ opacity: 0.8 }}
            transition="all 0.2s"
            className={cn(
              tailwindUtils.animations.scale,
              tailwindUtils.text.gradient,
              "tw-font-extrabold tw-text-2xl"
            )}
          >
            ⚡ {config.name}
          </Text>
        </Link>

        <Flex direction="row" ml="auto" gap="4" alignItems="center"
          className="tw-space-x-2"
        >
          <HStack spacing="4" display={{ base: "none", md: "flex" }}
            className="tw-space-x-2"
          >
            <Button variant="ghost" size="sm"
              className={cn(tailwindUtils.animations.hover, "tw-font-medium")}
            >
              Explore
            </Button>
            <Button variant="ghost" size="sm"
              className={cn(tailwindUtils.animations.hover, "tw-font-medium")}
            >
              Create
            </Button>
            <Button variant="ghost" size="sm"
              className={cn(tailwindUtils.animations.hover, "tw-font-medium")}
            >
              Activity
            </Button>
          </HStack>

          <CollectionDropdown />

          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === "light" ? <Moon size={18} /> : <Sun size={18} />}
            onClick={toggleColorMode}
            variant="ghost"
            size="sm"
            _hover={{ transform: "scale(1.1)" }}
            transition="all 0.2s"
            className={cn(
              tailwindUtils.animations.scale,
              "tw-rounded-full tw-transition-all tw-duration-300"
            )}
          />

          <ConnectWallet />

          {/* Mobile Menu */}
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Menu"
              icon={<MenuIcon size={18} />}
              variant="ghost"
              size="sm"
              display={{ base: "flex", md: "none" }}
              className={cn(tailwindUtils.animations.scale, "tw-rounded-full")}
            />
            <MenuList className="tw-backdrop-blur-sm">
              <MenuItem className={tailwindUtils.animations.hover}>Explore</MenuItem>
              <MenuItem className={tailwindUtils.animations.hover}>Create</MenuItem>
              <MenuItem className={tailwindUtils.animations.hover}>Activity</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};
export default Navbar;
