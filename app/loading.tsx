"use client";

import {
    Box,
    VStack,
    Text,
    Spinner,
    useColorModeValue,
    keyframes,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { FC } from "react"

const MotionBox = motion(Box);

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
  100% { transform: scale(1); opacity: 1; }
`;

interface Props {
}

const Page: FC<Props> = (props) => {
    const { } = props;
    const bg = useColorModeValue("white", "gray.900");
    const textColor = useColorModeValue("gray.600", "gray.300");

    return (
        <Box
            minH="100vh"
            bg={bg}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <VStack spacing={6}>
                    <Box
                        animation={`${pulse} 2s ease-in-out infinite`}
                        fontSize="4xl"
                    >
                        ⚡
                    </Box>
                    <Spinner
                        thickness="4px"
                        speed="0.8s"
                        emptyColor="gray.200"
                        color="primary.500"
                        size="xl"
                    />
                    <VStack spacing={2}>
                        <Text fontSize="lg" fontWeight="semibold">
                            Loading Marketplace
                        </Text>
                        <Text fontSize="sm" color={textColor}>
                            Preparing your NFT experience...
                        </Text>
                    </VStack>
                </VStack>
            </MotionBox>
        </Box>
    )
}

export default Page