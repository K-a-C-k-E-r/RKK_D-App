"use client";
import {
    IconButton,
    useColorMode,
    useColorModeValue,
    Tooltip,
    Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import React, { FC } from "react";

const MotionBox = motion(Box);

interface Props { }

const FloatingThemeToggle: FC<Props> = (props) => {
    const { } = props;
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = useColorModeValue("white", "gray.800");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const hoverBg = useColorModeValue("gray.100", "gray.700");

    return (
        <MotionBox
            position="fixed"
            right="6"
            bottom="6"
            zIndex="1000"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
        >
            <Tooltip
                label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
                placement="left"
                hasArrow
            >
                <MotionBox
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <IconButton
                        aria-label="Toggle color mode"
                        icon={colorMode === "light" ? <Moon size={20} /> : <Sun size={20} />}
                        onClick={toggleColorMode}
                        size="lg"
                        borderRadius="full"
                        bg={bg}
                        border="1px"
                        borderColor={borderColor}
                        shadow="lg"
                        _hover={{
                            bg: hoverBg,
                            shadow: "xl",
                        }}
                        _active={{
                            transform: "scale(0.95)",
                        }}
                        transition="all 0.2s"
                    />
                </MotionBox>
            </Tooltip>
        </MotionBox>
    );
};

export default FloatingThemeToggle;
