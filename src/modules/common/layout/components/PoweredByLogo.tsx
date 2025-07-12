"use client";
import {
    Box,
    HStack,
    Image,
    Link,
    Text,
    useColorModeValue,
    IconButton,
    Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { FC, useState } from "react"

const MotionBox = motion(Box);
const MotionHStack = motion(HStack);

interface Props {
}

const PoweredByLogo: FC<Props> = (props) => {
    const { } = props;
    const [isHovered, setIsHovered] = useState(false);
    const bg = useColorModeValue("white", "#101216");
    const textColor = useColorModeValue("gray.700", "white");
    const borderColor = useColorModeValue("gray.200", "transparent");

    return (
        <MotionBox
            position='fixed'
            left='4'
            bottom='4'
            zIndex="1000"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
        >
            <Tooltip
                label="Visit Andromeda Protocol"
                placement="top"
                hasArrow
            >
                <Link
                    href='https://www.andromedaprotocol.io/'
                    target="_blank"
                    _hover={{ textDecoration: 'none' }}
                >
                    <MotionHStack
                        bg={bg}
                        maxW='fit-content'
                        pl='2'
                        pr='4'
                        py='2'
                        rounded='xl'
                        spacing={2}
                        border="1px"
                        borderColor={borderColor}
                        shadow="lg"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        whileHover={{
                            scale: 1.05,
                            y: -2,
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        cursor="pointer"
                    >
                        <MotionBox
                            animate={{ rotate: isHovered ? 360 : 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Image
                                src='/logo.png'
                                alt="Andromeda Protocol Logo"
                                h='6'
                                w='6'
                                objectFit="contain"
                            />
                        </MotionBox>
                        <Box>
                            <Text
                                fontSize='sm'
                                color={textColor}
                                fontWeight="medium"
                                lineHeight="1.2"
                            >
                                Powered by
                            </Text>
                            <Text
                                fontSize='xs'
                                color="primary.500"
                                fontWeight="bold"
                                lineHeight="1.2"
                            >
                                Andromeda
                            </Text>
                        </Box>
                    </MotionHStack>
                </Link>
            </Tooltip>
        </MotionBox>
    )
}

export default PoweredByLogo